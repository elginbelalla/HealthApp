import React from "react";
import ReactDOMClient from "react-dom/client";
import { WelcomePage } from "./screens/WelcomePage";
import { ProfileInfo } from "./screens/ProfileInfo";
import { PersonalHistory } from "./screens/PersonalHistory";
/*import { FamilyHistory } from "./screens/FamilyHistory";
*/



const App = () => {
  return (
    <div>
      <WelcomePage />
      <ProfileInfo />
      <PersonalHistory/>
    
    </div>
  );
};

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<App />);
