import Axios from "axios";
import { masterEndpoint, responseInterceptor } from "./apiUtils";

const AuthenticationAPI = Axios.create({
  baseURL: `${masterEndpoint}/authentication`,
});

responseInterceptor(AuthenticationAPI);
// no request intercept because most login method does not require token

export default AuthenticationAPI;
