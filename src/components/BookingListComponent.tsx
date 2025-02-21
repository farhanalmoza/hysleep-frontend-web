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
  const [tableRows, setTableRows] = useState<JSX.Element[]>([]);

    const getBookingData = async () => {
      try {
        
        const response: ResponseModel = await getAllBooking();
        return response.val;
      } catch (error) {
        toast.error('Something went wrong');
      }
    };

    

  function init() {
    const requests = data.map((value:Booking, index:number)  => {
      return (
        <tr key={index}>
          <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">{value.bookingId}</td>
          <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">{value.room.roomNumber}</td>
          <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">{value.user.firstName + ' ' + value.user.lastName}</td>
          <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">{value.status}</td>
        </tr>
      );
    });
    return requests;
  }

   function initiate() {

    useEffect(() => {
      const initial = async () => {
        try {
          const response = await getBookingData();
          setData(response);
        } catch (error) {

        }
        
      }
      initial();
    }, []);

    useEffect(() => {
      if (data !== null) {
        setTableRows(init()); // Call `init()` only when data is ready
      }
    }, [data]); 

    return <>{tableRows}</>;
  }
  
    return (
      <div className="rounded-2xl border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="max-w-full overflow-x-auto">
          <table className='table-auto w-full'>
            <thead>
              <tr className="bg-gray-2 text-left dark:bg-meta-4">
                <th className="py-4 px-4 font-medium text-black dark:text-white xl:pl-11">Booking ID</th>
                <th className="py-4 px-4 font-medium text-black dark:text-white">Room No.</th>
                <th className="py-4 px-4 font-medium text-black dark:text-white">Name</th>
                <th className="py-4 px-4 font-medium text-black dark:text-white">Status</th>
              </tr>
            </thead>
            <tbody>{initiate()}</tbody>
          </table>
        </div>
      </div>
    )
  }
  
  export default BookingListComponent;