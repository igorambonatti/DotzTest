import axios, { AxiosPromise } from 'axios'

import { mockApi } from './config'

interface IResponse {
  dotz: IExtract[]
  brl: IExtract[]
}
interface IExtract {
  type: string
  quantity: number
  date: string
}

export const getExtract = (): AxiosPromise<IResponse> => {
  return axios.get(`${mockApi}/extract`)
}
