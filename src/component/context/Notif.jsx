import { toast } from "react-toastify";
import "react-toastify/dist/inject-style";
import React from "react";
import "react-toastify/dist/ReactToastify.min.css";
export const SuccessFunc = (props) => {
  toast.success(props.x, {
    className: "custom-toast",
    draggable: true,
    position: toast.POSITION.TOP_RIGHT,
    toastId: props.x,
  });
  return <div></div>;
};
