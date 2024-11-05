import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as API from "../../api/index";

const SLICE_NAME = "auth";

const registration = createAsyncThunk(
  `${SLICE_NAME}/registration`,
  async (userData, thunkAPI) => {
    try {
      const {
        data: {
          data: { user },
        },
      } = await API.registration(userData);

      return user;
      
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.data.errors);
    }
  }
);

const login = createAsyncThunk(
  `${SLICE_NAME}/login`,
  async (userData, thunkAPI) => {
    try {
      const {
        data: {
          data: { user },
        },
      } = await API.login(userData);

      return user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.data.errors);
    }
  }
);

const refresh = createAsyncThunk(
  `${SLICE_NAME}/refresh`,
  async (refreshToken, thunkAPI) => {
    try {
      const {
        data: {
          data: { user },
        },
      } = await API.refresh(refreshToken);

      return user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.data.errors);
    }
  }
);

const initialState = {
  user: null,
  isLoading: false,
  error: null,
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    logout: (state) => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.isAuthenticated = true;
    });

    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    builder.addCase(refresh.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(refresh.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.isAuthenticated = true;
    });

    builder.addCase(refresh.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    builder.addCase(registration.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(registration.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.isAuthenticated = true;
    });

    builder.addCase(registration.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

const {
  reducer: authReducer,
  actions: { logout },
} = userSlice;

export { login, refresh, logout, registration };

export default authReducer;
