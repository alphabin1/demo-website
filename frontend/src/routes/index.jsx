import { useRoutes } from "react-router-dom";
import { useEffect } from "react";
import LoginRoutes from "./LoginRoutes";
// import MainRoutes from "./MainRoutes";
import { removeAuthToken } from "../utils/localstorage.helper";
import toast from "react-hot-toast";

export default function ThemeRoutes() {
  useEffect(() => {
    let timeout;
    const events = [
      "load",
      "mousemove",
      "mousedown",
      "click",
      "scroll",
      "keypress",
    ];
    const resetTimeout = () => {
      clearTimeout(timeout);
      timeout = setTimeout(logout, 60 * 60 * 1000);
    };

    const logout = () => {
      removeAuthToken();
      toast.error("Session logged out due to inactivity");
      window.location.href = "/login";
    };

    const activityHandler = () => {
      resetTimeout();
    };
    resetTimeout();
    events.forEach((item) => {
      window.addEventListener(item, activityHandler);
    });

    return () => {
      clearTimeout(timeout);
      events.forEach((item) => {
        window.removeEventListener(item, activityHandler);
      });
    };
  }, []);

  return useRoutes([LoginRoutes]);
}