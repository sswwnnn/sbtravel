/* eslint-disable jsx-a11y/anchor-is-valid */
import { useDispatch, useSelector } from "react-redux";
import { Button, Timeline, notification } from "antd";
import { DAT_VE } from "../../redux/constants";
import dayjs from 'dayjs';
import _ from 'lodash';
import { orderConfirmAction } from "../../redux/actions/OrderAction";
import { OrderDetail } from "../../_core/models/OrderDetail";
import Detail from "../../pages/Detail/Detail";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { TOKEN } from "../../util/settings/config";
import { useEffect } from "react";
import { getCurrentUserAction } from "../../redux/actions/UserAction";

export default function SeatMap(props) {
    const dispatch = useDispatch();
    const { selectingSeats } = useSelector(state => state.OrderReducer);
    const { userLogin } = useSelector(state => state.UserReducer);

    let accessToken = {};
    if (localStorage.getItem(TOKEN)) {
        accessToken = localStorage.getItem(TOKEN);
    }

    useEffect(() => {
        if (accessToken != null) {
            dispatch(getCurrentUserAction(accessToken));
        }
    }, [accessToken, dispatch]);

    let { tripId, tripDetail } = props;
    const numberOfSeat = tripDetail?.bus?.busType?.numberOfSeat;
    const occupiedSeats = tripDetail?.seats?.map(s => s.name);

    function RenderSeatCodes(seatCount, columns) {
        const seatCodes = Array.from({ length: seatCount }, (_, i) => `A${(i + 1).toString().padStart(2, '0')}`);
        const columnWidth = 12 / columns; // Bootstrap grid system column width

        return (
            <div className="row">
                <div className={`col-${columns === 4 ? '8' : '6'} offset-${columns === 4 ? '2' : '3'} mx-auto px-5`}>
                    <div className="row seatfloor">
                        {seatCodes.map((seat, index) => {
                            let classGheDangDat = '';
                            let indexGheDD = selectingSeats?.findIndex(gheDD => gheDD === seat);
                            if (indexGheDD !== -1) {
                                classGheDangDat = 'seatSelected';
                            }
                            let disable = false;
                            let classOccupied = '';
                            let indexOccupied = occupiedSeats?.findIndex(gheDD => gheDD === seat);
                            if (indexOccupied !== -1) {
                                disable = true;
                                classOccupied = 'seatOccupied';
                            }

                            return (
                                <div key={index} className={`col-${columnWidth} flex`}>
                                    <Button
                                        disabled={disable}
                                        type="link"
                                        className={`seat p-0 ${classGheDangDat} ${classOccupied}`}
                                        onClick={() => {
                                            dispatch({
                                                type: DAT_VE,
                                                gheDuocChon: seat,
                                            });
                                        }}
                                    >
                                        <small>{seat}</small>
                                    </Button>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }

    const renderSeatSelected = () => {
        return _.sortBy(selectingSeats).map((gheDD, index) => {
            return (<b key={index} className='mr-1'>{gheDD}</b>).props.children;
        }).join(', ');
    };

    const seatLeft = numberOfSeat - occupiedSeats?.length;
    const totalMoney = selectingSeats?.length * tripDetail?.ticketPrice;
    const orderDetail = new OrderDetail();

    return (
        <div>
            <div className="alert alert-success" role="alert" style={{ height: '135px' }}>
                <div className='row'>
                    <div className="col-6">
                        <Timeline
                            items={[
                                {
                                    color: 'red',
                                    children: (
                                        <>
                                            <div><b>{tripDetail?.fromStation?.name}</b></div>
                                            <div>{dayjs(tripDetail?.startTime).format('DD-MM-YYYY h:mm A')}</div>
                                        </>
                                    ),
                                },
                                {
                                    children: (
                                        <>
                                            <div><b>{tripDetail?.toStation?.name}</b></div>
                                            <div>{dayjs(tripDetail?.finishTime).format('DD-MM-YYYY h:mm A')}</div>
                                        </>
                                    ),
                                },
                            ]}
                        />
                    </div>
                    <div className="pl-5 col-6">
                        <div className='d-flex justify-between'><div>Bus Number:</div>{tripDetail?.bus?.busPlate}</div>
                        <div className='d-flex justify-between'><div>Bus Type:</div>{tripDetail?.bus?.busType?.name} ({tripDetail?.bus?.busType?.numberOfSeat} seats)</div>
                        <div className='d-flex justify-between'><div>Driver:</div>{tripDetail?.driver?.fullName}</div>
                        <div className='d-flex justify-between'><div>Ticket Price:</div><b>₱{tripDetail?.ticketPrice}/seat</b></div>
                        <div className='d-flex justify-between'><div>Available:</div><b>{seatLeft} seats left</b></div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <ul className="my-10 ml-4 flex flex-wrap">
                        <li className='flex items-center'>
                            <div className="seat mr-2" style={{ width: 25, height: 25 }}></div><small>Available</small>
                        </li>
                        <li className='flex items-center'>
                            <div className="seat seatSelected mr-2" style={{ width: 25, height: 25 }}></div><small>Selecting</small>
                        </li>
                        <li className='flex items-center'>
                            <div className="seat seatOccupied text-gray-400 mr-2" style={{ width: 25, height: 25 }}></div><small>Occupied</small>
                        </li>
                    </ul>
                </div>
                <div className="col-9">
                    <div className="mx-10">
                        {numberOfSeat === 40
                            ? RenderSeatCodes(40, 4)
                            : RenderSeatCodes(30, 3)}
                    </div>
                </div>
                <div className="w-100 flex justify-between items-center mt-3 mx-3">
                    <div className="w-100 flex justify-between items-center">
                        <div>You're selecting: <b>{renderSeatSelected()}</b></div>
                        <div className='text-red-400 text-lg font-bold mr-2'>{totalMoney.toLocaleString("en-US", { style: "currency", currency: "PHP" })}</div>
                    </div>

                    <div className="" style={{ width: 170 }}>
                        {selectingSeats?.length === 0
                            ? <a disabled className="focus:outline-none text-white bg-purple-300 font-medium rounded-lg px-5 py-2 text-sm w-full">Continue</a>
                            : _.isEmpty(userLogin)
                                ? <a className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg px-5 py-2 text-sm w-full" 
                                    onClick={() => {
                                        notification.error({
                                            closeIcon: true,
                                            message: 'Error',
                                            description: (
                                                <>Sorry, please login first to continue your order.</>
                                            ),
                                        });
                                    }}
                                >Continue</a>
                                : <Link Component={<Detail donhang={orderDetail} />} to={`/detail/${tripId}`} style={{ textDecoration: 'none' }}
                                    className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg px-5 py-2 text-sm w-full"
                                    onClick={() => {
                                        orderDetail.tripId = tripId;
                                        orderDetail.busId = tripDetail.busId;
                                        orderDetail.driverId = tripDetail.driverId;
                                        orderDetail.driver = tripDetail.driver?.fullName;
                                        orderDetail.busPlate = tripDetail.bus?.busPlate;
                                        orderDetail.busType = tripDetail.bus?.busType.name;
                                        orderDetail.fromStation = tripDetail.fromStation?.name;
                                        orderDetail.toStation = tripDetail.toStation?.name;
                                        orderDetail.startTime = tripDetail.startTime;
                                        orderDetail.finishTime = tripDetail.finishTime;
                                        orderDetail.seatsList = renderSeatSelected();
                                        orderDetail.numberOfSeat = selectingSeats?.length;
                                        orderDetail.ticketPrice = tripDetail.ticketPrice;
                                        orderDetail.totalMoney = totalMoney;
                                        orderDetail.userId = userLogin.id;
                                        orderDetail.email = userLogin.email;
                                        dispatch(orderConfirmAction(orderDetail));
                                    }}
                                >Continue</Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
