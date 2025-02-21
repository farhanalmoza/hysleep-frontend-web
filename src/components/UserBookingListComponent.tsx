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
  const [email, setEmail] = useState("");

    const getBookingData = async () => {
      try {
        
        const response: ResponseModel = await getAllBooking();
        console.log(data);
        return response.val;
      } catch (error) {
        toast.error('Something went wrong');
      }
    };

    

  function init() {
    console.log('init');
    const requests = data.map((value:Booking, index:number)  => {
      return (
        <tr key={index}>
          <td className={'text-center'}>{value.bookingId}</td>
          <td className={'text-center'}>{value.room.roomNumber}</td>
          <td className={'text-center'}>{value.user.email}</td>
          <td className={'text-center'}>{value.status}</td>
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

  function filter(e: any) {
    if (email == "") {
      // window.location.reload;
      return;
    } 
    setData(data.filter(booking => booking.user.email === email));
    e.preventDefault();
    console.log(data);
  }


  
    return (
      <div className="bg-white rounded-md dark:border-strokedark dark:bg-boxdark w-full">
        <div>
          <form onSubmit={(e) => filter(e)}>
            <input onChange={(e) => {
              setEmail(e.target.value);
            }}  type='text' placeholder='Search by email' className={'dark:bg-boxdark dark:outline-strokedark px-5 py-2 w-4/12 outline outline-[#EEEEEE] rounded my-5 mx-4'}/> 
            <button className={'w-fit px-5 py-2 bg-[#EEEEEE] rounded dark:hover:bg-strokedark dark:bg-boxdark dark:outline-strokedark dark:outline dark:outline-3'} type='submit'>Search</button>
          </form>
          
        </div>
        <div>
          <table className={'table-auto w-full'}>
            <thead>
              <tr>
                <th>Booking ID</th>
                <th>Room No.</th>
                <th>User Email</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>{initiate()}</tbody>
        </table>
        </div>
        
      </div>
    )
  }
  
  export default BookingListComponent;