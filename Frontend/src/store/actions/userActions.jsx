import { toast } from "react-toastify";
import axios from "../../api/AxiosConfig";
import { loadUser, removeUser } from "../userSlice";

export const asyncRegisterUser = (user) => async (dispatch, getState) => {
  try {
    // console.log('Current State: ', getState());
    let { data } = await axios.post("/users", user);
    dispatch(loadUser(data));
  } catch (error) {
    console.log(error);
  }
};

export const asyncloginUser = (user) => async (dispatch) => {
  try {
    let { data } = await axios.get(
      `/users?email=${user.email}&password=${user.password}`
    );

    if (data.length > 0) {
      dispatch(loadUser(data[0]));
      localStorage.setItem("user", JSON.stringify(data[0]));
      return data[0];
    } else {
        return null;
    }
  } catch (error) {
    console.log(error);
  }
};

export const asynclogoutUser = () => async (dispatch) => {
  try {
    localStorage.removeItem("user");
    dispatch(removeUser());
    toast.success("User logged out");
  } catch (error) {
    console.log(error);
  }
};

export const curentUser = () => async (dispatch) => {
  try {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user) dispatch(loadUser(user));
    // else toast.error('User not logged');
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = (id, user) => async (dispatch) => {
  try {
    let { data } = await axios.patch("/users/" + id, user);
    localStorage.setItem("user", JSON.stringify(data));
    dispatch(curentUser());
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    await axios.delete("/users/" + id);
    dispatch(asynclogoutUser());
  } catch (error) {
    console.log(error);
  }
};
