import { APIClient } from '@/services/api-client'
import { useQuery } from 'react-query'

export interface IProduct {
	id: number
	name: string
	slug: string
	desc: string
	price: number
	image: {
		file: string
	}
}

const apiClient = new APIClient<IProduct[]>('/products/product-list/')

const useProducts = () =>
	useQuery({
		queryKey: ['products'],
		queryFn: () => apiClient.getAll()
	})

export default useProducts
