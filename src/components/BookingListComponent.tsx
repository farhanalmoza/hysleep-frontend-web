import toast from 'react-hot-toast';
import { useState } from "react";
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
  

  type BookingList = Booking[]
  
  const [data, setData] = useState<Booking[]>([]);

    const getBookingData = async () => {
      try {
        
        const response = await getAllBooking();
        const data1: Booking[] = response.val;
        setData(data1);   
      } catch (error) {
        toast.error('Something went wrong');
      }
    };

    

  function init() {
    console.log(Array.isArray(data))
    getBookingData();
    console.log(data);
    // data.map((value:Booking, index:number) => {
    //   // console.log(value)
    //   return (
    //     <tr key={index}>
    //       <td>{value.bookingId}</td>
    //       <td>
    //       {value.bookingId} </td>
    //     </tr>
    //   )})
    //   return <>{data}</>;
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
          {/* <tbody>{init()}</tbody> */}
        </table>
      </div>
    )
  }
  
  export default BookingListComponent;