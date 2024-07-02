import React from "react";
import {
  FaAd,
  FaBook,
  FaCalendar,
  FaEnvelope,
  FaHome,
  FaList,
  FaSearch,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
  FaCogs,
  FaRegEnvelope,
  FaPoll,
  FaRegFileAlt,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useRole from "../../../hooks/useRole";
const Sidebar = ({ sideBarToggle }) => {
  const [role] = useRole();
  return (
    <div
      className={`${
        sideBarToggle ? "hidden" : "block"
      } w-64 bg-gray-800 fixed h-full px-4 py-2`}
    >
      <div className="my-2 mb-4">
        <h1 className="text-2x text-white font-bold"> Dashboard</h1>
      </div>
      <hr />
      <ul className="mt-3 text-white font-bold">
        {role === "admin" && (
          <>
            <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 px-3">
              <NavLink to="/dashboard/manageSurveys">
                <FaList className="inline-block w-6 h-6 mr-2 -mt-2"></FaList>
                Manage Surveys
              </NavLink>
            </li>
            <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 px-3">
            <NavLink to="/dashboard/surveyor/feedbacks">
                <FaBook className="inline-block w-6 h-6 mr-2 -mt-2"></FaBook>
                All FeedBacks
                </NavLink>
            </li>
          </>
        )}
        {role === "pro-user" && (
          <>
            <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 px-3">
              <NavLink to="/">
                <FaHome className="inline-block w-6 h-6 mr-2 -mt-2"></FaHome>
                Home
              </NavLink>
            </li>
            <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 px-3">
              <NavLink to="/">
                <FaHome className="inline-block w-6 h-6 mr-2 -mt-2"></FaHome>
                Home
              </NavLink>
            </li>
          </>
        )}
        {role === "surveyor" && (
          <>
            <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 px-3">
              <NavLink to="/">
                <FaHome className="inline-block w-6 h-6 mr-2 -mt-2"></FaHome>
                Home
              </NavLink>
            </li>
            <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 px-3">
              <NavLink to="/">
                <FaHome className="inline-block w-6 h-6 mr-2 -mt-2"></FaHome>
                Home
              </NavLink>
            </li>
          </>
        )}
        {role === "user" && (
          <>
            <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 px-3">
              <NavLink to="/">
                <FaHome className="inline-block w-6 h-6 mr-2 -mt-2"></FaHome>
                Home
              </NavLink>
            </li>
            <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 px-3">
              <NavLink to="/">
                <FaHome className="inline-block w-6 h-6 mr-2 -mt-2"></FaHome>
                Home
              </NavLink>
            </li>
          </>
        )}

        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
          <a href="" className="px-3">
            <FaRegFileAlt className="inline-block w-6 h-6 mr-2 -mt-2"></FaRegFileAlt>
            Blogs
          </a>
        </li>

        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
          <a href="" className="px-3">
            <FaRegEnvelope className="inline-block w-6 h-6 mr-2 -mt-2"></FaRegEnvelope>
            Index
          </a>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
          <a href="" className="px-3">
            <FaCogs className="inline-block w-6 h-6 mr-2 -mt-2"></FaCogs>
            Setting
          </a>
        </li>
        <div className="divider"></div>
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 px-3">
          <NavLink to="/">
            <FaHome className="inline-block w-6 h-6 mr-2 -mt-2"></FaHome>
            Home
          </NavLink>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 px-3">
          <NavLink to="/order/salad">
            <FaSearch className="inline-block w-6 h-6 mr-2 -mt-2"></FaSearch>
            Menu
          </NavLink>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 px-3">
          <NavLink to="/order/contact">
            <FaEnvelope className="inline-block w-6 h-6 mr-2 -mt-2"></FaEnvelope>
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

{
  /* <div className="flex">
<div className="w-64 min-h-screen bg-orange-400">
  <ul className="menu p-4">
    {isAdmin ? (
      <>
        <li>
          <NavLink to="/dashboard/adminHome">
            <FaHome></FaHome>
            Admin Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/addItems">
            <FaUtensils></FaUtensils>
            Add Items
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/manageSurveys">
            <FaList></FaList>
            Manage Surveys
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/surveyor/feedbacks">
            <FaBook></FaBook>
           All FeedBacks
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/users">
            <FaUsers></FaUsers>
            All Users
          </NavLink>
        </li>
      </>
    ) : (
      <>
        <li>
          <NavLink to="/dashboard/userHome">
            <FaHome></FaHome>
            User Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/reservation">
            <FaCalendar></FaCalendar>
            Reservation
          </NavLink>
        </li>
        
        <li>
          <NavLink to="/dashboard/review">
            <FaAd></FaAd>
            Add a Review
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/bookings">
            <FaList></FaList>
            My Bookings
          </NavLink>
        </li>


      </>
    )}

    {role === "admin" && (
      <>
        <NavLink to="/admin">Admin Dashboard</NavLink>
        <NavLink to="/manage-users">Manage Users</NavLink>
      </>
    )}
    {role === "pro-user" && (
      <>
        <NavLink to="/pro">Pro User Dashboard</NavLink>
        <NavLink to="/premium-content">Premium Content</NavLink>
      </>
    )}
    {role === "surveyor" && (
      <>
        <NavLink to="/surveyor">Surveyor Dashboard</NavLink>
        <NavLink to="/create-survey">Create Survey</NavLink>
      </>
    )}
    {role === "user" && (
      <>
        <NavLink to="/surveys">Surveys</NavLink>
        <NavLink to="/vote">Vote</NavLink>
      </>
    )}
    <div className="divider"></div>
    <li>
      <NavLink to="/">
        <FaHome></FaHome>
        Home
      </NavLink>
    </li>
    <li>
      <NavLink to="/order/salad">
        <FaSearch></FaSearch>
        Menu
      </NavLink>
    </li>
    <li>
      <NavLink to="/order/contact">
        <FaEnvelope></FaEnvelope>
        Contact
      </NavLink>
    </li>
  </ul>
</div>
<div className="flex-1 p-8">
  <Outlet></Outlet>
</div>
</div> */
}
