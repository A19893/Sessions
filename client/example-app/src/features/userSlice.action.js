import { createAsyncThunk } from "@reduxjs/toolkit";
import { registerUser,logoutUser, loginUser } from '../services/User.service'

// export const getAllProducts = createAsyncThunk(getItemsType, async (data) => {
//   try {
//     const url=`?page=${data.pagination.page}&limit=${data.pagination.limit}${urlMaker(data.filterQuery)}`;
//     const response=await getAllProductDetails(url);
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching all products:", error);
//     throw error;
//   }
// });

export const addUser = createAsyncThunk(
  'users/addUser',
  async (data, thunkAPI) => {
    try {
      const response = await registerUser(data);
      return response.data;
    } catch (error) {
      console.error("Error creating user  as ---> ", error);
      return thunkAPI.rejectWithValue((error).response?.data);
    }
  }
);

export const logoutUsers = createAsyncThunk(
    'users/logoutUser',
    async (data, thunkAPI) => {
      try {
        const response = await logoutUser();
        console.log(response)
      //   return response.data;
      } catch (error) {
        console.error("Error logging out  user  as ---> ", error);
        return thunkAPI.rejectWithValue((error).response?.data);
      }
    }
);

export const loginUsers =  createAsyncThunk(
  'users/loginUsers',
  async(data, thunkAPI) => {
    try{
        const response = await loginUser(data);
        return response.data;
    }catch(error){
      console.error("Error logging in user  as ---> ", error);
        return thunkAPI.rejectWithValue((error).response?.data);
    }
  }
)
