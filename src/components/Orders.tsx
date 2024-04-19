import PhoneLogo from '../../public/phone.png'
import GooglePlayLogo from '../../public/googlePlay.svg'
import AppStoreLogo from '../../public/appstore.svg'
import PathLogo from '../../public/path.png'

const Orders = () => {
  return (
    <section className="bg-[#800A7A]">
        <div className="container">
        <div className="grid grid-cols-2 max-[860px]:grid-cols-1 max-[860px]:text-center">
           <div className="w-full max-w-[581px] pt-[55px] pb-[74px]">
              <h2 className="text-[42px] font-bold leading-[63px] text-[white] mb-8">Mobil ilovamiz orqali buyurtma berish yanada osonroq</h2>
              <span className='flex items-center gap-8'>
                <button className='flex items-center gap-4 text-white border-[1px] border-[#ffffff70] backdrop-blur-sm px-8 py-2 rounded-[46px]'>
                    <img className='w-[44px]' src={GooglePlayLogo} alt="" />
                    Google Play
                </button>
                <button className='flex items-center gap-4 text-white border-[1px] border-[#ffffff70] backdrop-blur-sm px-8 py-2 rounded-[46px]'>
                    <img className='w-[44px]' src={AppStoreLogo} alt="" />
                    App Store
                </button>
              </span>
           </div>
           <div className='w-full relative h-[full]'>
            <img className='absolute -top-24 w-full z-20 max-w-[1000px] h-[520px] max-[860px]:relative' src={PhoneLogo} alt="" />
            <img className='w-full max-w-[400px] max-[1110px]:max-w-[300px] min-[1300px]:max-w-[500px] absolute z-10 top-24 left-36' src={PathLogo} alt="" />
           </div>
        </div>
    </div>
    </section>
  )
}

export default Orders