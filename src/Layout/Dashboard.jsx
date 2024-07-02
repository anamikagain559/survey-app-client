// import {
//   FaAd,
//   FaBook,
//   FaEnvelope,
//   FaHome,
//   FaList,
//   FaSearch,
//   FaUsers,
//   FaUtensils,
//   FaCommentAlt,
// } from "react-icons/fa";
// import { IoMdAddCircle } from "react-icons/io";
// import { CiBoxList } from "react-icons/ci";
// import { TbReport } from "react-icons/tb";
// import { RiSurveyFill } from "react-icons/ri";
// import { NavLink, Outlet } from "react-router-dom";
// import useAdmin from "../hooks/useAdmin";
// import useRole from "../hooks/useRole";

// const Dashboard = () => {
//   const [isAdmin] = useAdmin();
//   const [role] = useRole();
//   console.log(role);

//   return (
//     <div className="flex">
//       {/* dashboard side bar */}
//       <div className="w-64 min-h-screen bg-blue-400">
//         <ul className="menu p-4">
//           {role === "admin" && (
//             <>
//               <li>
//                 <NavLink to="/dashboard/home">
//                   <FaHome></FaHome>
//                   Admin Home
//                 </NavLink>
//               </li>
             
//               <li>
//                 <NavLink to="/dashboard/manageSurveys">
//                   <FaList></FaList>
//                   Manage Surveys
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/dashboard/surveyor/feedbacks">
//                   <FaBook></FaBook>
//                   All FeedBacks
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/dashboard/users">
//                   <FaUsers></FaUsers>
//                   Manage Users
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/dashboard/paymentHistory">
//                   <FaList></FaList>
//                   Payment History
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/dashboard/allSurveyResponses">
//                   <FaBook></FaBook>
//                   All Survey Responses
//                 </NavLink>
//               </li>
//             </>
//           )}
//           {role === "pro-user" && (
//             <>
//               <li>
//                 <NavLink to="/dashboard/home">
//                   <FaHome></FaHome>
//                   User Home
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/dashboard/user/surveys">
//                   <RiSurveyFill></RiSurveyFill>
//                   Participate In Surveys
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/dashboard/user/my-reports">
//                   <TbReport />
//                   Reported Surveys
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/dashboard/user/comments">
//                   <FaCommentAlt />
//                   Commented Survey
//                 </NavLink>
//               </li>
//             </>
//           )}
//           {role === "surveyor" && (
//             <>
//               <li>
//                 <NavLink to="/dashboard/home">
//                   <FaHome></FaHome>
//                   Surveyor Home
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/dashboard/createSurvey">
//                 <IoMdAddCircle />
//                   Create Survey
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/dashboard/mySurveyList">
//                 <CiBoxList />
//                   My Survey
//                 </NavLink>
//               </li>
//             </>
//           )}
//           {role === "user" && (
//             <>
//               <li>
//                 <NavLink to="/dashboard/home">
//                   <FaHome></FaHome>
//                   User Home
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/dashboard/user/surveys">
//                   <RiSurveyFill></RiSurveyFill>
//                   Participate In Surveys
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/dashboard/user/my-reports">
//                   <TbReport />
//                   Reported Surveys
//                 </NavLink>
//               </li>
//             </>
//           )}
//           {/* shared nav links */}
//           <div className="divider"></div>
//           <li>
//             <NavLink to="/">
//               <FaHome></FaHome>
//               Home
//             </NavLink>
//           </li>
        
//           <li>
//             <NavLink to="/allSurvey">
//               <FaEnvelope></FaEnvelope>
//               All Surveys
//             </NavLink>
//           </li>
//         </ul>
//       </div>
//       {/* dashboard content */}
//       <div className="flex-1 p-8">
//         <Outlet></Outlet>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


// import {
//   FaAd,
//   FaBook,
//   FaEnvelope,
//   FaHome,
//   FaList,
//   FaSearch,
//   FaUsers,
//   FaUtensils,
//   FaCommentAlt,
// } from "react-icons/fa";
// import { IoMdAddCircle } from "react-icons/io";
// import { CiBoxList } from "react-icons/ci";
// import { TbReport } from "react-icons/tb";
// import { RiSurveyFill } from "react-icons/ri";
// import { NavLink, Outlet } from "react-router-dom";
// import useAdmin from "../hooks/useAdmin";
// import useRole from "../hooks/useRole";

// const Dashboard = () => {
//   const [isAdmin] = useAdmin();
//   const [role] = useRole();
//   console.log(role);

//   return (
//     <div className="flex">
//       {/* dashboard side bar */}
//       <div className="w-64 min-h-screen bg-blue-400">
//         <ul className="menu p-4">
//           {role === "admin" && (
//             <>
//               <li>
//                 <NavLink to="/dashboard/home">
//                   <FaHome></FaHome>
//                   Admin Home
//                 </NavLink>
//               </li>
             
//               <li>
//                 <NavLink to="/dashboard/manageSurveys">
//                   <FaList></FaList>
//                   Manage Surveys
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/dashboard/surveyor/feedbacks">
//                   <FaBook></FaBook>
//                   All FeedBacks
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/dashboard/users">
//                   <FaUsers></FaUsers>
//                   Manage Users
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/dashboard/paymentHistory">
//                   <FaList></FaList>
//                   Payment History
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/dashboard/allSurveyResponses">
//                   <FaBook></FaBook>
//                   All Survey Responses
//                 </NavLink>
//               </li>
//             </>
//           )}
//           {role === "pro-user" && (
//             <>
//               <li>
//                 <NavLink to="/dashboard/home">
//                   <FaHome></FaHome>
//                   User Home
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/dashboard/user/surveys">
//                   <RiSurveyFill></RiSurveyFill>
//                   Participate In Surveys
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/dashboard/user/my-reports">
//                   <TbReport />
//                   Reported Surveys
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/dashboard/user/comments">
//                   <FaCommentAlt />
//                   Commented Survey
//                 </NavLink>
//               </li>
//             </>
//           )}
//           {role === "surveyor" && (
//             <>
//               <li>
//                 <NavLink to="/dashboard/home">
//                   <FaHome></FaHome>
//                   Surveyor Home
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/dashboard/createSurvey">
//                 <IoMdAddCircle />
//                   Create Survey
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/dashboard/mySurveyList">
//                 <CiBoxList />
//                   My Survey
//                 </NavLink>
//               </li>
//             </>
//           )}
//           {role === "user" && (
//             <>
//               <li>
//                 <NavLink to="/dashboard/home">
//                   <FaHome></FaHome>
//                   User Home
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/dashboard/user/surveys">
//                   <RiSurveyFill></RiSurveyFill>
//                   Participate In Surveys
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/dashboard/user/my-reports">
//                   <TbReport />
//                   Reported Surveys
//                 </NavLink>
//               </li>
//             </>
//           )}
//           {/* shared nav links */}
//           <div className="divider"></div>
//           <li>
//             <NavLink to="/">
//               <FaHome></FaHome>
//               Home
//             </NavLink>
//           </li>
        
//           <li>
//             <NavLink to="/allSurvey">
//               <FaEnvelope></FaEnvelope>
//               All Surveys
//             </NavLink>
//           </li>
//         </ul>
//       </div>
//       {/* dashboard content */}
//       <div className="flex-1 p-8">
//         <Outlet></Outlet>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


import React, { useState,useContext } from 'react';
import {
  FaHome,
  FaList,
  FaBook,
  FaUsers,
  FaEnvelope,
  FaCommentAlt,
} from "react-icons/fa";
import { IoLogOutSharp } from "react-icons/io5";
import { IoMdAddCircle } from "react-icons/io";
import { TiThMenu } from "react-icons/ti";
import { CiBoxList } from "react-icons/ci";
import { TbReport } from "react-icons/tb";
import { RiSurveyFill } from "react-icons/ri";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useRole from "../hooks/useRole";
import { FaBars, FaBell, FaSearch, FaUserCircle } from "react-icons/fa";
import { AuthContext } from '../providers/AuthProvider';
const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [role] = useRole();
  console.log(role);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const { user, logOut } = useContext(AuthContext);
 
  const handleLogOut = () => {
      logOut()
          .then(() => { })
          .catch(error => console.log(error));
  }
  return (<>
    <nav className={` bg-blue-400 px-4 py-3 flex justify-between `}>
    <div className="flex items-center text-xl">
      <FaBars className="text-black me-4 cursor-pointer lg:hidden block" onClick={toggleSidebar} ></FaBars>
      <span className="text-black font-semibold"> Survey Genius</span>
    </div>
    <div className="flex items-center gap-x-5">
      <div className="relative md:w-65">
        <span className="relative md:absolute inset-y-0 left-0 flex items-center pl-2">
          <button className="p-1 focus:outline-none text-black">
            <FaSearch></FaSearch>
          </button>
        </span>
        <input
          type="text"
          className="w-full px-4 py-1 pl-12 rounded shadow outline-none hidden md:block"
        />
      </div>
      <div className="text-black">
        <FaBell className="w-6 h-6"></FaBell>
      </div>
      <div className="relative">
        <button className="text-black group">
          <FaUserCircle className="w-6 h-6 mt-1"></FaUserCircle>
          <div className="z-10 hidden absolute rounded-lg bg-white shadow w-32 group-focus:block top-full right-0">
            <ul className="py-2 text-sm text-gray-950">
              <li>
                <a href="">Profile</a>
              </li>
              <li>
                <a href="">Setting</a>
              </li>
              <li>
                <a href="">Logout</a>
              </li>
            </ul>
          </div>
        </button>
      </div>
    </div>
  </nav>
    <div className="flex ">
      {/* Responsive Toggle Button */}
    
  
      {/* dashboard side bar */}
      <div className={`w-64 min-h-screen bg-blue-400 p-4 z-[100] absolute md:relative md:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300`}>
        <ul className="menu">
          {/* Admin Menu */}
          {role === "admin" && (
            <>
              <li>
                <NavLink to="/dashboard/home">
                  <FaHome /> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageSurveys">
                  <FaList /> Manage Surveys
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/surveyor/feedbacks">
                  <FaBook /> All FeedBacks
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/users">
                  <FaUsers /> Manage Users
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/paymentHistory">
                  <FaList /> Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allSurveyResponses">
                  <FaBook /> All Survey Responses
                </NavLink>
              </li>
            </>
          )}
          
          {/* Pro-user Menu */}
          {role === "pro-user" && (
            <>
              <li>
                <NavLink to="/dashboard/home">
                  <FaHome /> User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/user/surveys">
                  <RiSurveyFill /> Participate In Surveys
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/user/my-reports">
                  <TbReport /> Reported Surveys
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/user/comments">
                  <FaCommentAlt /> Commented Survey
                </NavLink>
              </li>
            </>
          )}
          
          {/* Surveyor Menu */}
          {role === "surveyor" && (
            <>
              <li>
                <NavLink to="/dashboard/home">
                  <FaHome /> Surveyor Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/createSurvey">
                  <IoMdAddCircle /> Create Survey
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/mySurveyList">
                  <CiBoxList /> My Survey
                </NavLink>
              </li>
            </>
          )}
          
          {/* User Menu */}
          {role === "user" && (
            <>
              <li>
                <NavLink to="/dashboard/home">
                  <FaHome /> User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/user/surveys">
                  <RiSurveyFill /> Participate In Surveys
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/user/my-reports">
                  <TbReport /> Reported Surveys
                </NavLink>
              </li>
            </>
          )}
          
          {/* shared nav links */}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/allSurvey">
              <FaEnvelope /> All Surveys
            </NavLink>
          </li>
          <li>
          
          <button onClick={handleLogOut} className=""><IoLogOutSharp />LogOut</button>
           
          </li>
          <li
        className="md:hidden p-4 bg-blue-500 text-white"
        onClick={toggleSidebar}
      >
        Toggle Menu
      </li>
        </ul>
      </div>
      
      {/* dashboard content */}
      <div className="flex-1 p-8">
        <Outlet />
      </div>
    </div></>
  );
};

export default Dashboard;
