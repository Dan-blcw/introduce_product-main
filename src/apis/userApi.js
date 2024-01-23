import axiosClient from "./axiosClient";

const userApi = {
  login(data) {
    const url = "/api/v1/auth/login";
    return axiosClient.post(url, data);
  },

  register(data) {
    const url = "/api/v1/auth/register";
    return axiosClient.post(url, data);
  },
};

export default userApi;
