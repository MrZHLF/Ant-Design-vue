import axios from "axios";
import { notification } from "ant-design-vue";

function request(options) {
  return axios(options)
    .then(response => {
      return response;
    })
    .catch(error => {
      const {
        response: { status, statusText }
      } = error;
      notification.error({
        message: status,
        description: statusText
      });
    });
}

export default request;
