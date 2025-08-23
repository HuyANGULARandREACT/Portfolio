import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AppRoute from "./routes/appRoute";
import { useTheme } from "./context/themeContext";

const App = () => {
  const { themeStyle } = useTheme();
  React.useEffect(() => {
    if (themeStyle.background.startsWith("linear-gradient")) {
      document.body.style.background = "";
      document.body.style.backgroundImage = themeStyle.background;
    } else {
      document.body.style.background = themeStyle.background;
      document.body.style.backgroundImage = "";
    }
    document.body.style.color = themeStyle.text;
    document.body.style.paddingTop = "70px"; // Space for fixed navbar
  }, [themeStyle]);
  return <AppRoute />;
};

export default App;
