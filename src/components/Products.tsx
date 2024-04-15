import ProductCart from './ProductCart'
import ProductImg from '../../public/pitsa.png'

const Products = () => {
	return (
		<div className='container my-[105px]'>
			<h2 className='text-[52px] font-bold text-[#222124] leading-[63px] mb-8'>
				Pitsa
			</h2>
			<ul className='grid grid-cols-1 md:grid-cols-2 gap-[30px]'>
				<ProductCart
					title='Gavaya'
					description='Горячая закуска с митболами из говядины, томатами, моцареллой и соусом чипотле'
					price='45,000 UZS'
					image={ProductImg}
				/>

				<ProductCart
					title='Mexica'
					description='Горячая закуска с митболами из говядины, томатами, моцареллой и соусом чипотле'
					price='33,000 UZS'
					image={ProductImg}
				/>
			</ul>
		</div>
	)
}

export default Products
