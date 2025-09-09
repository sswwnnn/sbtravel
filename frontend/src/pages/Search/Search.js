import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Radio, Checkbox, Slider, Result } from "antd";
import { FrownOutlined } from '@ant-design/icons';
import SelectBus from "../../components/SelectBus/SelectBus";
import { getTripListOptionsAction } from "../../redux/actions/TripAction";
import TripCard from "../../components/TripCard/TripCard";
import { history } from "../../App";

const setInput = {
  sort: "",
  searchBusType: "",
  fromPrice: 500,
  toPrice: "",
  from: "",
  to: "",
  dayStart: "",
};

export default function Search(props) {
  const { arrTrip } = useSelector((state) => state.TripReducer);
  const dispatch = useDispatch();
  let searchParams = new URLSearchParams(props.location.search);

  useEffect(() => {
    setInput.from = searchParams.get('from') || '';
    setInput.to = searchParams.get('to') || '';
    setInput.dayStart = searchParams.get('date') || '';
    if(setInput.from == "" || setInput.to == ""){
      history.push("/")
    }
    dispatch(getTripListOptionsAction(setInput));
  }, [dispatch]);


  const marks = {
    500: {
      label: <small>₱500.00</small>,
    },
    2000: {
      style: { color: "#f50" },
      label: <small>₱2,000.00</small>,
    },
  };

  const handleOnChangeSort = (e) => {
    setInput.sort = e.target.value;
    dispatch(getTripListOptionsAction(setInput));
  };

  const handleOnChangeFilter = (event) => {
    if (event.target.checked && event.target.value != "undefine") {
      setInput.searchBusType += event.target.value + ",";
    } else {
      setInput.searchBusType = setInput.searchBusType.replace(event.target.value + ",", "");
    }

    dispatch(getTripListOptionsAction(setInput));
  };

  const handleOnChangePrice = (e) => {
    setInput.fromPrice = e[0];
    setInput.toPrice = e[1];
    dispatch(getTripListOptionsAction(setInput));
  };

  return (
    <div className="container" style={{ maxWidth: 1200 }}>
      <Card className="mx-2 mt-3">
        <SelectBus props={props}/>
      </Card>

      <div className="flex flex-row flex-wrap py-4">
        <div className="w-full sm:w-1/3 md:w-1/4 px-2">
          <Card title="Sort" onChange={(e) => handleOnChangeSort(e)}>
            <Radio.Group>
              <Radio value="earliest-departure">Earliest departure</Radio>
              <Radio value="latest-departure">Latest departure</Radio>
              <Radio value="lowest-price">Lowest price</Radio>
              <Radio value="highest-price">Highest price</Radio>
            </Radio.Group>
          </Card>
          <Card title="Filter" className="mt-3">
            <Slider
              range
              marks={marks}
              step={10}
              min={500}
              max={2000}
              onAfterChange={(e) => handleOnChangePrice(e)}
              defaultValue={[10, 1000]}
              className="mx-4 mb-5"
            />
            {/* ...Other code... */}
            <Checkbox value="Express" onChange={(e) => handleOnChangeFilter(e)}>Express</Checkbox><br />
            <Checkbox value="Deluxe" onChange={(e) => handleOnChangeFilter(e)}>Deluxe</Checkbox><br />
            <Checkbox value="Luxury AC" onChange={(e) => handleOnChangeFilter(e)}>Luxury AC</Checkbox><br />
            <Checkbox value="ROYAL CLASS" onChange={(e) => handleOnChangeFilter(e)}>ROYAL CLASS</Checkbox>
          </Card>
        </div>
        <div className="w-full sm:w-2/3 md:w-3/4 pt-1 px-2">
          {arrTrip.length > 0
            ? arrTrip?.map((item, index) => {
              return (<div key={index}>
                <TripCard tripDetail={item} />
              </div>
              );
            })
            : <Result
              icon={<FrownOutlined />}
              title="Oops!"
              subTitle="Sorry, we can't found any schedule to this date."
            />
          }
        </div>
      </div>
    </div>
  )
}