import { AxiosError } from "axios";

const getRejectValueFromError = (err: AxiosError) => {
  if (err.response) {
    return err.response.data;
  } else {
    return { error: err.message };
  }
};

export default getRejectValueFromError;
