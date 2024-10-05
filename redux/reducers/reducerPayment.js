import { ADD_PAYMENT } from "../constants";
import PaymentModel from "../../data/PaymentModel";
import { act } from "react";
import moment from "moment";

const initialState = {
  payments: [],
};

const reducerPayment = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PAYMENT:
      const id = Date.now().toString();
      courses = action.orderInfos.courses;
      total = action.orderInfos.total;
      const date = moment(new Date()).format("DD MM YYYY hh:mm");
      const newPayment = { id, courses, total, date };
      return {
        ...state,
        payments: state.payments.concat(newPayment),
      };
    default:
      return state;
  }
};
export default reducerPayment;
