import { Descriptions, Input } from "antd";
import React, { useEffect, useState } from "react";
import { SearchOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux";
import { checkTicketAction } from "../../redux/actions/OrderAction";
import dayjs from "dayjs";
var relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)


export default function CheckTicket(props) {
  let { checkingCode } = props;
  const dispatch = useDispatch()
  const [code, setCode] = useState(null)
  const { ticketDetail } = useSelector(state => state.OrderReducer)

  useEffect(() => {
    if (checkingCode != "") {
      dispatch(checkTicketAction(checkingCode));
    }
  }, [dispatch])

  const handleOnChange = (e) => {
    const searchCode = e.target.value;
    setCode(searchCode.trim());
  }

  const handleSubmit = () => {
    if (code !== null) {
      dispatch(checkTicketAction(code.split(' ')));
    }
  }

  let remainHour = dayjs(ticketDetail?.trips?.startTime).diff(dayjs(new Date()), 'hour')


  return (
    <div className="w-100 rounded-xl bg-white">

      <div>
        <div className="autoComplete w-100 justify-center">
          <h4 className="tc-l tl f4 w-100 ttn" style={{ color: "#E3452F" , marginTop: '40px'}}>
            Check your Bus Ticket here
          </h4>
          <div className="d-flex w-100">
            <div style={{ flex: 1 }}>
              <Input size="large" onChange={handleOnChange} value={code} placeholder="Enter your ticket number" prefix={<SearchOutlined />} />
            </div>
            <button
              className="ml-5 px-5 py-2 flex items-center focus:outline-none  rounded-full font-semibold  bg-[#FEECEB] text-[#E3452F] hover:bg-[#FAD4D0] focus:bg-[#E3452F] active:bg-[#E3452F] focus:text-white"
              type="submit"
              value="Search Ticket"
              onClick={handleSubmit}
            >
              <span className="pl2">
                <i className="fa-solid fa-ticket"></i>
              </span>
              <span className="ml-2 flex-auto">Check ticket</span>
            </button>
          </div>
        </div>
      </div>

      {ticketDetail?.isCancel ?
        <Descriptions className="text-center mt-3" title="Ticket is already canceled"></Descriptions>
        : ticketDetail != null && ticketDetail != "undefined" ? <div className="pt-3">
          <Descriptions title="Ticket Info">
            <Descriptions.Item label="Customer">{ticketDetail.users.email}</Descriptions.Item>
            <Descriptions.Item label="Seat List">{ticketDetail.seatsList}</Descriptions.Item>
            <Descriptions.Item label="Route">{ticketDetail.trips.fromStation.name} - {ticketDetail.trips.toStation.name}</Descriptions.Item>
            <Descriptions.Item label="Departure Time">{dayjs(ticketDetail.trips.startTime).format("DD-MM-YYYY h:mm A")}</Descriptions.Item>
            <Descriptions.Item label="Arrival Time">{dayjs(ticketDetail.trips.finishTime).format("DD-MM-YYYY h:mm A")}</Descriptions.Item>
            <Descriptions.Item label="Bus Number">{ticketDetail.trips.bus.busPlate}</Descriptions.Item>
            <Descriptions.Item label="Status"><span className="text-green-500 font-semibold">{remainHour < 0 ? "Your bus already departed" : `Your bus is going to depart on next ${remainHour} hour(s)`}</span>  </Descriptions.Item>
          </Descriptions>
        </div> : <Descriptions className="text-center mt-3" title="Ticket not found"></Descriptions>}

    </div>
  )
}