import BookingListComponent from "../../components/BookingListComponent";
import Breadcrumb from "../../components/Breadcrumb";


const  BookingList = () => {
    return (
      <>
        <Breadcrumb pageName="Booking List" />
        <BookingListComponent/>
      </>
    );
  };
  
  export default BookingList;