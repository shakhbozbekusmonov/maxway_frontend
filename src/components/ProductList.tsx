import ProductItem from '@/components/ProductItem'
import useProducts from '@/hooks/useProducts'
import { Fragment } from 'react/jsx-runtime'

const ProductList = () => {
	const { data, isLoading, error } = useProducts()

	if (isLoading) return <p>Loading...</p>

	if (error instanceof Error) return <p>Error: {error.message}</p>

	return (
		<div className='container my-[105px]'>
			<h2 className='text-[52px] font-bold text-[#222124] leading-[63px] mb-8'>
				Pitsa
			</h2>
			<ul className='grid grid-cols-1 md:grid-cols-2 gap-[30px]'>
				{data?.results?.map(product => (
					<Fragment key={product.id}>
						<ProductItem {...product} />
					</Fragment>
				))}
			</ul>
		</div>
	)
}

export default ProductList
