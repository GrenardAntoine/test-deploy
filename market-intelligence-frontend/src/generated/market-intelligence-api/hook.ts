/**
 * Generated by orval
 * Do not edit manually.
 * Api Documentation
 * Api Documentation
 * OpenAPI spec version: 1.0
 */
import axios from 'axios'
import type {
  AxiosRequestConfig,
  AxiosResponse
} from 'axios'
import type {
  Country
} from './dtos'

/**
 * @summary findAllCountries
 */
export const findAllCountriesUsingGET = async <TData = AxiosResponse<Country[]>>(
  options?: AxiosRequestConfig
): Promise<TData> => {
  return axios.get(
    '/api/countries', options
  )
}

export type FindAllCountriesUsingGETResult = AxiosResponse<Country[]>
