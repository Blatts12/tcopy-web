import { AxiosRequestHeaders } from "axios";

const tokenConfig = (getState: Function) => {
  const token = getState().auth.token;
  const headers: AxiosRequestHeaders = {
    "Content-Type": "application/json",
  };
  if (token) headers["Authorization"] = `Token ${token}`;

  return headers;
};

export default tokenConfig;
