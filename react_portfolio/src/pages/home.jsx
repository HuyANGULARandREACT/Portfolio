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
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <Container >
      <div className="mt-5 border-2 p-5">
        {userData && (
          <>
            <h1>{userData.bio}</h1>
            
          </>
        )}
      </div>
    </Container>
  );
};

export default Home;
