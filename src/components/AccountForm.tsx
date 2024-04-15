import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useState } from 'react'
import AccountSignInForm from './AccountSignInForm'
import AccountSignUpForm from './AccountSignUpForm'
import AccountVerifyOTPForm from './AccountVerifyOTPForm'

const AccountForm = ({ onClose }: { onClose: () => void }) => {
	const [showVerify, setShowVerify] = useState(false)

	return (
		<Tabs defaultValue='signin' className='w-[400px]'>
			<TabsList className='grid w-full grid-cols-2'>
				<TabsTrigger value='signin'>Sign-In</TabsTrigger>
				<TabsTrigger value='signup'>Sign-Up</TabsTrigger>
			</TabsList>
			<TabsContent value='signin'>
				<AccountSignInForm onClose={onClose} />
			</TabsContent>
			<TabsContent className='flex flex-col gap-5' value='signup'>
				{showVerify ? (
					<AccountVerifyOTPForm />
				) : (
					<AccountSignUpForm
						onShow={isShow => setShowVerify(isShow)}
					/>
				)}
			</TabsContent>
		</Tabs>
	)
}

export default AccountForm
