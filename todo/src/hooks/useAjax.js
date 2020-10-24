import axios from "axios";

export default () => {

    const axiosApiInstance = (url, method, body, moreHeaders) => {
      return axios({
        url: url,
        method: method,
        mode: 'cors',
        cache: 'no-cache',
        headers: { 'Content-Type': 'application/json', ...moreHeaders },
        data: body
      })
    }

    return [axiosApiInstance];
}