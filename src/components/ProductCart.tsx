
import { Button } from './ui/button'
import { ProductT } from '@/types/Product-type'

const ProductCart = (props:ProductT) => {
  return (
    <li className="w-full max-w-[640px] flex gap-10 p-[30px] rounded-[12px] border-[1px] border-[#9797972E]">
        <div className='border-dashed border-2 w-full flex justify-center'>
            <img className='w-[180px] h-[180px]' src={props.image} alt="" />
        </div>
        <div>
            <h3 className='text-2xl font-medium leading-[29px] mb-3'>{props.title}</h3>
            <p className='text-[14px] leading-[17px] text-[#2221249e] mb-[23px] pr-8'>{props.description}</p>
        
           <span className='flex items-center justify-between'>
            <b className='text-2xl font-bold leading-[29px]'>{props.price}</b>
            <Button className='flex items-center justify-center rounded-[50%] w-[50px] h-[50px] text-3xl pt-1 text-white'>+</Button>
           </span>
        </div>
    </li>
  )
}

export default ProductCart