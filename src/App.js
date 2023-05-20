import './App.css';
// import {
//   BrowserRouter as Router,
//   // Switch,
//   Route,
//   Routes
//   // Link
// } from "react-router-dom";

// import Navbar from './components/navbar/navbar';
import Sidebar from './components/sidebar/sidebar'
import Homepage from './components/homepage/homepage';
// import Filemanager from './pages/filemanager/filemanager';

// // import { useContext } from 'react';
// // import { AppContext } from './utils/context';
// import { useGlobalContext } from './utils/context';


function App() {
  // const data = useContext(AppContext)
  // const data = useGlobalContext
  return (
    // <>
    //   <Router>
    //     <Routes>
    //       <div className="row mainLayout">
    //         <Sidebar className="col-md-4" />
    //         <Navbar className="col-md-8" />

    //       </div>
    //       <Route path="/">
    //         {/* <About /> */}
    //       </Route>
    //       <Route path="/">
    //         {/* <Users /> */}
    //       </Route>
    //       <Route path="/">
    //         {/* <Home /> */}
    //       </Route>
    //     </Routes>
    //   </Router>
    // </>

    <div className="App">
      {/* <Navbar /> */}
      {/* <div>Welcome!!!!{data}</div> */}
      <div className="sidebarAndPages">
        <Sidebar/>
        <Homepage />
        {/* <Filemanager /> */}
      </div>





    </div>
  );
}

export default App;
