import { DatePicker, Select, Form, Input, notification } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getStationListAction } from '../../redux/actions/StationAction';
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);

export default function SelectBus(props) {
  const { arrStation } = useSelector(state => state.StationReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStationListAction())
  }, [dispatch]);

  let searchParams = new URLSearchParams(props.props.location?.search);

  const [From, setFrom] = useState(searchParams.get('from'));
  const [To, setTo] = useState(searchParams.get('to'));
  const [Date, setDate] = useState(searchParams.get('date') || '');

  const handleFromChange = (value) => {
    setFrom(value);
  };

  const handleToChange = (value) => {
    setTo(value);
  };

  const handleSubmit = (e) => {
    if (From === null || To === null) {
      e.preventDefault();
      notification.error({
        closeIcon: true,
        message: 'Error',
        description: (
          <>Please fill in the required fields to perform search!</>
        )
      });
    };

    
  }

  const swapStation = () => {
    setFrom(To);
    setTo(From);
  }

  return (
    <div className="w-100 p-2 rounded-xl bg-white">
      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        method="get"
        className=" w-100"
        action={`/search`}
      >
        <h4 className="w-100 text-left" style={{ color: "#E3452F"}} >
          SOUTHBOUND TRAVEL
        </h4>
        <div className="autocomplete  br3 cf w-100 flex flex-wrap justify-center">
          <div className="d-flex w-100 justify-around" >

            <div className="w-80" >
              <Form.Item>
                <Select
                  size={"large"}
                  id="fromFocus"
                  style={{ minWidth: '100%' }}
                  showSearch
                  value={From} 
                  placeholder="From"
                  options={arrStation?.map((item, index) => ({ key: index, label: item.name, value: item.name }))}
                  onChange={handleFromChange}
                />
                <Input type="hidden" name="from" value={From} />
              </Form.Item>

            </div>

            <div id="btn" className="w-10 br3 mb0-l mb2-m flex justify-center items-center bg-white dim pointer" style={{ height: "3em", borderRadius: ".5rem !important", cursor: "pointer" }}  >
              <i onClick={swapStation} className="fas fa-exchange-alt pointer"></i>
            </div>

            <div className="w-80">
              <Select
                value={To}
                size={"large"}
                id="toFocus"
                style={{ minWidth: '100%' }}
                showSearch
                placeholder="Going To" 
                options={arrStation?.map((item, index) => ({ key: index, label: item.name, value: item.name }))}
                onChange={handleToChange}
              />
              <Input type="hidden" name="to" value={To} />
            </div>

            <div className="ml-3" >
              <DatePicker
                name="date"
                defaultValue={Date && dayjs(Date, "DD-MM-YYYY")}
                format={"DD-MM-YYYY"}
                id="dateFocus"
                size="large"
                type="date"
                className="w-60"
                placeholder="Journey Date"
              />
            </div>
          </div>

          <div>
            <button
              className="w-100 px-5 py-2 mt-3 flex items-center focus:outline-none  rounded-full font-semibold  bg-[#FEECEB] text-[#E3452F] hover:bg-[#FAD4D0] focus:bg-[#E3452F] active:bg-[#E3452F] focus:text-white"
              type="submit"
            >
              <i className="fas fa-bus f3 mr-2"></i>
              SEARCH
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
