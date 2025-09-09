import { Button } from "antd";

export default function SeatMapAdmin(props) {
    let { tripDetail } = props;
    let numberOfSeat = tripDetail?.bus.busType.numberOfSeat;
    let occupiedSeats = tripDetail?.seats?.map((s) => s.name);

    function RenderSeatCodes40() {
        const seatCodes40 = [
            "A01", "A02", "A03", "A04", "A05", "A06", "A07", "A08", "A09", "A10", "A11", "A12", "A13", "A14", "A15",
            "A16", "A17", "A18", "A19", "A20", "A21", "A22", "A23", "A24", "A25", "A26", "A27", "A28", "A29", "A30",
            "A31", "A32", "A33", "A34", "A35", "A36", "A37", "A38", "A39", "A40"
        ];
        return (
            <div className="row">
                <div className='col-8 offset-2 mx-auto px-5'>
                    <div className='row'>
                        {seatCodes40?.map((ghe, index) => {
                            let disable = false;
                            let classOccupied = '';
                            let indexOccupied = occupiedSeats?.findIndex((gheDD) => gheDD === ghe);
                            if (indexOccupied != -1) {
                                disable = true;
                                classOccupied = 'seatOccupied';
                            }
                            return (
                                <div key={index} className="col-3 flex">
                                    <Button disabled={disable} type='link' className={`seat p-0 ${classOccupied}`}><small>{ghe}</small></Button>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }

    function RenderSeatCodes30() {
        const seatCodes30 = [
            "A01", "A02", "A03", "A04", "A05", "A06", "A07", "A08", "A09", "A10", "A11", "A12", "A13", "A14", "A15",
            "A16", "A17", "A18", "A19", "A20", "A21", "A22", "A23", "A24", "A25", "A26", "A27", "A28", "A29", "A30"
        ];
        return (
            <div className="row">
                <div className='col-6 offset-3 mx-auto px-5'>
                    <div className='row'>
                        {seatCodes30?.map((ghe, index) => {
                            let disable = false;
                            let classOccupied = '';
                            let indexOccupied = occupiedSeats?.findIndex((gheDD) => gheDD === ghe);
                            if (indexOccupied != -1) {
                                disable = true;
                                classOccupied = 'seatOccupied';
                            }
                            return (
                                <div key={index} className="col-4 flex">
                                    <Button disabled={disable} type='link' className={`seat p-0 ${classOccupied}`}><small>{ghe}</small></Button>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="row">
            {numberOfSeat == 40
                ? <RenderSeatCodes40 />
                : <RenderSeatCodes30 />}
        </div>
    );
}
