import toast from 'react-hot-toast';
import { useEffect, useState } from "react";
import { getAllBooking } from '../services/bookingServices';


const BookingListComponent = () => {

  type Booking = {
    errorCode: number | null;
    errorMessage: string | null;
    bookingId: number;
    user: { 
      firstName: string; 
      lastName: string; 
      email: string; 
    };
    room: { 
      roomId: number;
      roomNumber: string;
      status: string;
      floor: string;
    };
    bookingDate: number;  
    endDate: number;  
    status: string;
  };

  type ResponseModel = {
    errorCode: number | null;
    errorMessage: string | null;
    val: Array<Booking>;
  };
  
  
  const [data, setData] = useState<Array<Booking>>([]);

    const getBookingData = async () => {
      try {
        
        const response: ResponseModel = await getAllBooking();
        setData(response.val);   
      } catch (error) {
        toast.error('Something went wrong');
      }
    };

    

  function init() {
    const requests = data.map((value:Booking, index:number)  => {
      return (
        <tr key={index}>
          <td>{value.bookingId}</td>
          <td>{value.room.roomNumber}</td>
          <td>{value.user.firstName + ' ' + value.user.lastName}</td>
          <td>{value.status}</td>
        </tr>
      );
    });
    return requests;
  }

  function initiate() {
    const [tableRows, setTableRows] = useState<JSX.Element[]>([]);
  
    useEffect(() => {
      console.log('INIT')
      getBookingData();
      setTableRows(init()); // Call `init()` only on mount
    }, []);
  
    return <tbody>{tableRows}</tbody>;
  }
  
    return (
      <div className="bg-white rounded-md dark:border-strokedark dark:bg-boxdark w-full">
        <table className={'table-auto w-full'}>
          <thead>
            <tr>
              <th>Booking ID</th>
              <th>Room No.</th>
              <th>Name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>{initiate()}</tbody>
        </table>
      </div>
    )
  }
  
  export default BookingListComponent;