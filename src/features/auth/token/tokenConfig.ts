const tokenConfig = (getState: Function): HeadersInit => {
  const token = getState().auth.token;
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };
  if (token) headers["Authorization"] = `Token ${token}`;

  return headers;
};

export default tokenConfig;
