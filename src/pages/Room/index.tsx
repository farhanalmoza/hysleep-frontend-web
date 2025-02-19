import { useNavigate } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb';
import RoomTable from '../../components/RoomTable';

const Room = () => {
  const navigate = useNavigate();
  return (
    <>
      <Breadcrumb pageName="Room" />
      <button className="btn flex mb-4 justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:shadow-1"
        onClick={() => navigate('/room/add')}>
        Create Room
      </button>
      <RoomTable />
    </>
  );
};

export default Room;
