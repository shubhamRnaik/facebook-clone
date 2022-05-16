import Feed from "./Feed";
import Header from "./Header";
import Login from "./Login";
import RightSidebar from "./RightSidebar";
import Sidebar from "./Sidebar";
// import { useStateValue } from "./StateProvider";
import { useState } from "react";
import Giphy from "./Giphy";

function App() {
  const [user, dispatch] = useState("shubham");

  // console.log(user);
  return (
    <>
    {
    
          //  <Giphy /> 
        <div className="App">
          <Header/>
          
          <div className="app__body">
            <Sidebar/>
            <Feed/>
            <RightSidebar/>
          </div>
        
        </div>
      
    }
    
    </>
  );
}

export default App;
