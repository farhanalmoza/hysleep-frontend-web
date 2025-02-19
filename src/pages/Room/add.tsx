import { Link } from "react-router-dom";
import RoomForm from "../../components/RoomForm";

const AddRoom = () => {
  return (
    <>
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-title-md2 font-semibold text-black dark:text-white">
          Add Room
        </h2>
  
        <nav>
          <ol className="flex items-center gap-2">
            <li>
              <Link to="/">Dashboard /</Link>
            </li>
            <li>
              <Link to="/Room">Room /</Link>
            </li>
            <li className="text-primary">Add Room</li>
          </ol>
        </nav>
      </div>
      <RoomForm />
    </>
  )
}

export default AddRoom;