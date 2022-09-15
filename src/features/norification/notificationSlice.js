import { createSlice } from "@reduxjs/toolkit";
export const NotificationSlice = createSlice({
  name: "notification",
  initialState: [{}],
  reducers: {
    addNotification: (state, action) => {
      state.notification.push(action.payload);
    },
    clearNotification: (state) => {
      state.notification = [];
    },
  },
});
export const { addNotification, clearNotification } = NotificationSlice.actions;
export const notifications = (state) => state.notification;
export default NotificationSlice.reducer;
