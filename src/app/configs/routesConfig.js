import FuseUtils from "@fuse/utils";
import FuseLoading from "@fuse/core/FuseLoading";
import { Navigate } from "react-router-dom";
import settingsConfig from "app/configs/settingsConfig";
import SignInConfig from "../main/sign-in/SignInConfig";
import SignUpConfig from "../main/sign-up/SignUpConfig";
import SignOutConfig from "../main/sign-out/SignOutConfig";
import Error404config from "../main/404/Error404config";
import ForgotPasswordConfig from "../main/forgotPassword/ForgotPasswordConfig";
import HomeConfig from "../main/home/HomeConfig";
import ChatAppConfig from "../main/chat/ChatAppConfig";
import ContactsAppConfig from "../main/contacts/ContactsAppConfig";
import HistoryConfig from "../main/history/historyConfig";
import HomeRequestConfig from "../main/homeRequest/HomeRequestConfig";
import PaperWorkConfig from "../main/paperWork/PaperWorkConfig";
import ProfileConfig from "../main/profile/ProfileConfig";
import TripConfig from "../main/trip/TripConfig";
import UnitConfig from "../main/unit/UnitConfig";

const routeConfigs = [
  HomeConfig,
  ChatAppConfig,
  ContactsAppConfig,
  HistoryConfig,
  HomeRequestConfig,
  PaperWorkConfig,
  ProfileConfig,
  TripConfig,
  UnitConfig,
  SignOutConfig,
  SignInConfig,
  SignUpConfig,
  Error404config,
  ForgotPasswordConfig,
];

const routes = [
  ...FuseUtils.generateRoutesFromConfigs(
    routeConfigs,
    settingsConfig.defaultAuth
  ),
  {
    path: "/",
    element: <Navigate to="sign-in" />,
  },
  {
    path: "loading",
    element: <FuseLoading />,
  },
  {
    path: "*",
    element: <Navigate to="404" />,
  },
];

export default routes;
