import axios, { AxiosRequestConfig } from 'axios'

const axiosInstance = axios.create({
	baseURL: 'http://127.0.0.1:8000/api/v1'
})

interface IResponse<T> {
	count: number
	next: string
	previous: string
	results: T[]
}

class APIClient<T> {
	endpoint: string

	constructor(endpoint: string) {
		this.endpoint = endpoint
	}

	getAll = (config?: AxiosRequestConfig) => {
		return axiosInstance
			.get<IResponse<T>>(this.endpoint, config)
			.then(res => res.data)
	}

	get = (id: string) => {
		return axiosInstance.get(`${this.endpoint}/${id}`).then(res => res.data)
	}
}

export { APIClient, axiosInstance }
