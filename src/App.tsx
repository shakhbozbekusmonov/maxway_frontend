import SiteFooter from '@/components/SiteFooter'
import SiteHeader from '@/components/SiteHeader'
import Account from '@/pages/Account'
import Branchs from '@/pages/Branchs'
import ForChildren from '@/pages/ForChildren'
import Menyu from '@/pages/Menyu'
import ShoppingCart from '@/pages/ShoppingCart'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
	return (
		<BrowserRouter>
			<SiteHeader />
			<Routes>
				<Route path='/menyu' element={<Menyu />} />
				<Route path='/for-children' element={<ForChildren />} />
				<Route path='/branchs' element={<Branchs />} />
				<Route path='/account' element={<Account />} />
				<Route path='/cart' element={<ShoppingCart />} />
			</Routes>
			<SiteFooter />
		</BrowserRouter>
	)
}

export default App
