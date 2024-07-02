import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../pages/Shared/Secret/Secret";
import Dashboard from "../Layout/Dashboard";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";
import ProUserRoute from "./ProUserRoute";
import CreateSurvey from "../pages/Survey/CreateSurvey";
import SurveysPage from "../pages/Survey/SurveysPage";
import Payment from "../pages/Payment/Payment";
import FormBuilder from "../pages/Survey/FromBuilder";
import SurveyDetails from "../pages/Survey/SurveyDetails";
import NewDashboard from "../Layout/NewDashboard";
import ManageSurveys from "../pages/Dashboard/ManageSurveys/ManageSurveys";
import AllFeedBacks from "../pages/Dashboard/AllFeedbacks/AllFeedBacks";
import DashBoardHome from "../pages/Dashboard/DashBoardHome/DashBoardHome";
import MySurveyList from "../pages/Dashboard/MySurveyList/MySurveyList";
import SurveyResponse from "../pages/Dashboard/MySurveyList/SurveyResponse";
import ParticipateInSurvey from "../pages/Dashboard/UserDashboard/ParticipateInSurvey";
import ReportedSurvey from "../pages/Dashboard/UserDashboard/ReportedSurvey";
import CommentedSurvey from "../pages/Dashboard/UserDashboard/CommentedSurvey";
import EditSurvey from "../pages/Survey/EditSurvey";
import PaymentHistory from "../pages/PaymentHistory/PaymentHistory";
import AdminSurveyResponse from "../pages/Dashboard/ManageSurveys/AdminSurveyResponse";
import AllSurveyResuponses from "../pages/Dashboard/AllSurveyResponses";
import AllSurveyResponses from "../pages/Dashboard/AllSurveyResponses";
import PricePage from "../pages/PricePage";
import SurveyorRoute from "./SurveyorRoute";
import ErrorPage from "../ErrorPage/ErrorPage";
import DashboardNew from "../Layout/DashboardNew";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "secret",
        element: (
          <PrivateRoute>
            <Secret></Secret>
          </PrivateRoute>
        ),
      },

      {
        path: "allSurvey",
        element: <SurveysPage></SurveysPage>,
      },
      {
        path: "/surveys/:surveyId",
        element: <SurveyDetails></SurveyDetails>,
      },
      {
        path: "/payment",
        element: (
          <PrivateRoute>
            <Payment></Payment>
          </PrivateRoute>
        ),
      },
      {
        path: "/pricePage",
        element: <PricePage></PricePage>,
      },
      
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "home",
        element: <PrivateRoute><DashBoardHome></DashBoardHome></PrivateRoute>,
      },

      {
        path: "manageSurveys",
        element: (
          <AdminRoute>
            <ManageSurveys></ManageSurveys>
          </AdminRoute>
        ),
      },
      {
        path: "allSurveyResponses",
        element: (
          <AdminRoute>
            <AllSurveyResponses></AllSurveyResponses>
          </AdminRoute>
        ),
      },
      {
        path: "surveyor/feedbacks",
        element: (
          <AdminRoute>
            <AllFeedBacks></AllFeedBacks>
          </AdminRoute>
        ),
      },
      {
        path: "users",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "createSurvey",
        element:<SurveyorRoute><CreateSurvey></CreateSurvey></SurveyorRoute> ,
      },
      {
        path: "surveys/:surveyId",
        element: <SurveyorRoute><SurveyDetails></SurveyDetails></SurveyorRoute>,
      },
      {
        path: "mySurveyList",
        element: <SurveyorRoute><MySurveyList></MySurveyList></SurveyorRoute>,
      },
      {
        path: "editSurvey/:surveyId",
        element: <SurveyorRoute><EditSurvey></EditSurvey></SurveyorRoute>,
      },
      ,
      {
        path: "surveyor/surveys/:id",
        element: <SurveyorRoute><SurveyResponse></SurveyResponse></SurveyorRoute>,
      },
      ,
      {
        path: "surveyor/surveysResponse/:id",
        element: <AdminRoute><AdminSurveyResponse></AdminSurveyResponse></AdminRoute>,
      },
      {
        path: "paymentHistory",
        element: <AdminRoute><PaymentHistory></PaymentHistory></AdminRoute>,
      },
      ,
      {
        path: "user/surveys",
        element: <PrivateRoute><ParticipateInSurvey></ParticipateInSurvey></PrivateRoute>,
      },
      ,
      {
        path: "user/my-reports",
        element: <PrivateRoute><ReportedSurvey></ReportedSurvey></PrivateRoute>,
      },
      {
        path: "user/comments",
        element: <ProUserRoute><CommentedSurvey></CommentedSurvey></ProUserRoute>,
      },
    ],
  },
]);
