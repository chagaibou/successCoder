import { CREATE_COURSE } from "../constants";

//il,title,description,
export const createCourse = (title, description, image, price) => {
  return {
    type: CREATE_COURSE,
    newCourse: { title, description, image, price },
  };
};
