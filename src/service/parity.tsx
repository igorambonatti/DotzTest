import axios, { AxiosPromise } from 'axios'

import { mockApi } from './config'

interface IResponse {
  dotzToBrl: number
  brlToDotz: number
}
export const getParity = (): AxiosPromise<IResponse> => {
  return axios.get(`${mockApi}/parityConvert`)
}
