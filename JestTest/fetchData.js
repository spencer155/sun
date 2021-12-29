import axios from "axios";

export const fetchData = (fn) => {
  axios.get('https://xxx/api/').then(res => {
    fn(res.data)
  })
}
export const fetchData2 = () => {
  return axios.get('https://xxx/api/')
}
export const fetchData3 = () => {
  return axios.get('https://xxx/api/')
}