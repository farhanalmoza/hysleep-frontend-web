import Breadcrumb from "../../components/Breadcrumb";
import UserBookingListComponent from "../../components/UserBookingListComponent"


const  UserBookingList = () => {
    return (
      <>
        <Breadcrumb pageName="Booking List" />
        <UserBookingListComponent/>
      </>
    );
  };
  
  export default UserBookingList;