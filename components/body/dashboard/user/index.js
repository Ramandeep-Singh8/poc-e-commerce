import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  notifications,
  addNotification,
  clearNotification,
} from "../../../../src/features/norification/notificationSlice";
import { selectUser } from "../../../../src/features/user/userSlice";
import { useDispatch } from "react-redux";
// import { Socket, io } from "socket.io-client";
import { io } from "socket.io-client";
function UserDashboardPage() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [socket, setSocket] = useState();
  useEffect(() => {
    setSocket(io("http://localhost:5000"));
  }, []);

  useEffect(() => {
    socket?.emit("newUser", user.email);
  }, [socket, user]);

  const onClickHandler = (e) => {
    dispatch(
      addNotification({ message: "Order has been confirmed", read: false })
    );
    socket.emit("sendNotification", {
      email: user.email,
      message: "Order has been placed",
    });
  };
  const onClickHandlerClear = (e) => {
    dispatch(clearNotification());
  };
  return (
    <div>
      <button
        onClick={(e) => {
          onClickHandler(e);
        }}
      >
        Click to Order
      </button>
      <button
        onClick={(e) => {
          onClickHandlerClear(e);
        }}
      >
        Clear Order
      </button>
    </div>
  );
}

export default UserDashboardPage;
