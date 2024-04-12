import { LogoIcon } from '@/components/Icons'
import SiteHeaderMobile from '@/components/SiteHeaderMobile'
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList
} from '@/components/ui/navigation-menu'
import { navList } from '@/mock/nav-list'
import { Link } from 'react-router-dom'
import AccountDialog from './AccountDialog'

const SiteHeader = () => {
	return (
		<header className='bg-gradient-to-r md:from-white md:from-60% md:to-[#800A7A] md:to-40% py-[23px]'>
			<div className='container'>
				<div className='flex items-center justify-between'>
					<div className='w-[60%] flex justify-between items-center'>
						<Link to='/'>
							<LogoIcon />
							<span className='sr-only'>MaxWay icon</span>
						</Link>

						<NavigationMenu className='hidden md:flex'>
							<NavigationMenuList className='gap-10'>
								{navList.map(item => (
									<NavigationMenuItem key={item.label}>
										<NavigationMenuLink href={item.path}>
											{item.label}
										</NavigationMenuLink>
									</NavigationMenuItem>
								))}
							</NavigationMenuList>
						</NavigationMenu>
					</div>

					<div className='w-[40%] justify-between items-center pl-14 hidden md:flex'>
						<a
							className='flex items-center gap-4 text-white before:content-[url("./phone-icon.svg")]'
							href='tel:+998712005400'
						>
							<span>
								<span className='block text-sm'>(+99871)</span>
								<span className='block text-2xl font-bold'>
									200-54-00
								</span>
							</span>
						</a>

						<span className='w-[1px] h-11 bg-white'></span>

						<Link
							className='flex items-center gap-4 text-white before:content-[url("./cart-icon.svg")]'
							to='/cart'
						>
							<span>
								<span className='block text-2xl font-bold'>
									Korzina
								</span>
								<span className='block text-sm'>0.00 UZS</span>
							</span>
						</Link>

						<AccountDialog />
					</div>

					<SiteHeaderMobile />
				</div>
			</div>
		</header>
	)
}

export default SiteHeader
