// import COURSES from "../../data/testData.js";
// import { ADD_TO_CART } from "../constants.js";

// const initialState = {
//   existingCourses: COURSES,
// };

// const reducerCourses = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_TO_CART:
//       const indexCourseToModify = state.existingCourses.findIndex(
//         (course) => course.id === action.course.id
//       );
//       const copyExistingCourses = [...state.existingCourses];
//       copyExistingCourses[indexCourseToModify].selected = true;
//       return {
//         ...state,
//         existingCourses: copyExistingCourses,
//       };
//     default:
//       return state;
//   }
// };

// export default reducerCourses;
import { act } from "react";
import COURSES from "../../data/testData.js";
import {
  ADD_TO_CART,
  CREATE_COURSE,
  DELETE_COURSE,
  EDIT_COURSE,
  REMOVE_COURSE_CART,
} from "../constants";

const initialState = {
  existingCourses: COURSES,
  loggedInmemberCourses: COURSES.filter(
    (course) => course.instructorId === "1"
  ),
};

const reducerCourses = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const indexCourseToModify = state.existingCourses.findIndex(
        (course) => course.id === action.course.id
      );

      if (indexCourseToModify !== -1) {
        const updatedCourse = {
          ...state.existingCourses[indexCourseToModify],
          selected: true,
        };

        const updatedCourses = [
          ...state.existingCourses.slice(0, indexCourseToModify),
          updatedCourse,
          ...state.existingCourses.slice(indexCourseToModify + 1),
        ];

        return {
          ...state,
          existingCourses: updatedCourses,
          loggedInmemberCourses: state.loggedInmemberCourses,
        };
      }

    case REMOVE_COURSE_CART:
      const indexCourseToDeleteFromCart = state.existingCourses.findIndex(
        (course) => course.id === action.prodId
      );

      if (indexCourseToDeleteFromCart !== -1) {
        const updatedCourses = [
          ...state.existingCourses.slice(0, indexCourseToDeleteFromCart),
          {
            ...state.existingCourses[indexCourseToDeleteFromCart],
            selected: false,
          },
          ...state.existingCourses.slice(indexCourseToDeleteFromCart + 1),
        ];

        return {
          ...state,
          existingCourses: updatedCourses,
          loggedInmemberCourses: state.loggedInmemberCourses,
        };
      }
    case DELETE_COURSE:
      return {
        ...state,
        existingCourses: state.existingCourses.filter(
          (course) => course.id !== action.courseId
        ),
        loggedInmemberCourses: state.loggedInmemberCourses.filter(
          (course) => course.id !== action.courseId
        ),
      };

    case EDIT_COURSE:
      const idCourse = action.courseId;
      const indexCourseToUpdate = state.loggedInmemberCourses.findIndex(
        (course) => course.id === idCourse
      );
      const title = action.upadatedCourse.title;
      const desc = action.upadatedCourse.desc;
      const image = action.upadatedCourse.img;
      const price = state.loggedInmemberCourses[indexCourseToUpdate].price;
      const selected =
        state.loggedInmemberCourses[indexCourseToUpdate].selected;
      const instructorId =
        state.loggedInmemberCourses[indexCourseToUpdate].instructorId;
      const upadatedCourse = {
        idCourse,
        title,
        desc,
        image,
        price,
        selected,
        instructorId,
      };
      const newloggedInmemberCourses = [...state.loggedInmemberCourses];
      newloggedInmemberCourses[indexCourseToUpdate] = upadatedCourse;
      const indexExistingCourses = state.existingCourses.findIndex(
        (course) => course.id === idCourse
      );

      const newExistingCourses = [...state.existingCourses];
      newExistingCourses[indexExistingCourses] = upadatedCourse;

      return {
        ...state,
        existingCourses: newExistingCourses,
        loggedInmemberCourses: newloggedInmemberCourses,
      };

    case CREATE_COURSE:
      const courseId = Date.now().toString();
      const courseTitle = action.newCourse.title;
      const courseDesc = action.newCourse.description;
      const courseImg = action.newCourse.image;
      const coursePrice = action.newCourse.price;
      const courseSelected = false;
      const courseInstructorId = "1";
      const newCourse = {
        id: courseId,
        title: courseTitle,
        description: courseDesc,
        image: courseImg,
        price: coursePrice,
        selected: courseSelected,
        instructorId: courseInstructorId,
      };

      return {
        ...state,
        existingCourses: state.existingCourses.concat(newCourse),
        loggedInmemberCourses: state.loggedInmemberCourses.concat(newCourse),
      };

    default:
      return state;
  }
};

export default reducerCourses;
