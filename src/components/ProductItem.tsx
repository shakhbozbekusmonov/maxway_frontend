import { Button } from '@/components/ui/button'
import { IProduct } from '@/hooks/useProducts'

const ProductItem = ({ id, name, slug, desc, price, image }: IProduct) => {
	return (
		<li className='w-full max-w-[640px] flex gap-10 p-[30px] rounded-[12px] border-[1px] border-[#9797972E]'>
			<img className='w-[180px] h-[180px]' src={image.file} alt={name} />

			<div>
				<h3 className='text-2xl font-medium leading-[29px] mb-3'>
					{name}
				</h3>
				<p className='text-[14px] leading-[17px] text-[#2221249e] mb-[23px] pr-8'>
					{desc}
				</p>

				<span className='flex items-center gap-10'>
					<b className='text-2xl font-bold leading-[29px]'>
						{price.toFixed(2)} UZS
					</b>
					<Button className='flex items-center justify-center rounded-[50%] w-[50px] h-[50px] text-3xl pt-1 text-white'>
						+
					</Button>
				</span>
			</div>
		</li>
	)
}

export default ProductItem
