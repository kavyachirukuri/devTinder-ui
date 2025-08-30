import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utils/constants";
import { addConnections } from "../utils/connectionSlice";
import { useEffect } from "react";
import axios from "axios";

const Connections = () => {
  const connections = useSelector((store) => store.connections);
  const dispatch = useDispatch();

  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      dispatch(addConnections(res.data.data));
    } catch (err) {
      throw new Error("something went wrong!!");
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  if (!connections) return;

  if (connections.length === 0) return <h1>No Connectios Found</h1>;
  return (
    <div className="text-center my-10">
      <h1 className="text-bold text-white text-3xl">Connections</h1>
      {connections.map((connection) => {
        const { firstName, lastName, photoUrl, age, gender, about } =
          connection;

        return (
          <div className="w-32 h-32 rounded-full overflow-hidden flex items-center justidy-center">
            <div className="flex-shrink-0">
              <img
                alt="photo"
                className="w-10 h-10 rounded-full object-contain"
                src={photoUrl}
              />
            </div>
            <div className="text-left mx-4">
              <h2 className="font-bold text-xl">
                {firstName + " " + lastName}
              </h2>
              {age && gender && <p>{age + ", " + gender}</p>}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Connections;
