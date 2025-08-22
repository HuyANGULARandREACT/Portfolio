import React from "react";
import { getUserData } from "../apis/user";
import { Container } from "react-bootstrap";

const Home = () => {
  const [userData, setUserData] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUserData();
        setUserData(data);
        console.log(data);
        console.log(data[0].name);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
    
    </div>
  );
};

export default Home;
