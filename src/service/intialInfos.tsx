import axios, { AxiosPromise } from 'axios'

import { mockApi } from './config'

interface IResponse {
  dotzBalance: number
  brlBalance: number
}
export const getInfos = (): AxiosPromise<IResponse> => {
  return axios.get(`${mockApi}/initialInfos`)
}
