import { axiosInstance } from '@/services/api-client'
import { FieldValues, useForm } from 'react-hook-form'
import { Button } from './ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Input } from './ui/input'
import { Label } from './ui/label'

const AccountSignUpForm = ({
	onShow
}: {
	onShow: (isShow: boolean) => void
}) => {
	const { register, handleSubmit } = useForm()

	const onSubmit = (data: FieldValues) => {
		axiosInstance.post('/users/signup/', data).then(res => {
			console.log(res.data)
			if (res.data.access) {
				localStorage.setItem('access', res.data.access)
				localStorage.setItem('refresh', res.data.refresh)
				onShow(true)
			}
		})
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Card>
				<CardHeader>
					<CardTitle>Sign-Up</CardTitle>
				</CardHeader>
				<CardContent className='space-y-2'>
					<div className='space-y-1'>
						<Label htmlFor='username'>Username</Label>
						<Input
							id='username'
							type='text'
							{...register('username')}
							name='username'
						/>
					</div>
					<div className='space-y-1'>
						<Label htmlFor='email'>Email</Label>
						<Input
							id='email'
							type='email'
							{...register('email')}
							name='email'
						/>
					</div>
					<div className='space-y-1'>
						<Label htmlFor='password'>Password</Label>
						<Input
							id='password'
							type='password'
							{...register('password')}
							name='password'
						/>
					</div>
					<div className='space-y-1'>
						<Label htmlFor='confirm-password'>
							Confirm password
						</Label>
						<Input
							id='confirm-password'
							type='password'
							{...register('confirm_password')}
							name='confirm_password'
						/>
					</div>
				</CardContent>
				<CardFooter>
					<Button className='w-full'>Sign Up</Button>
				</CardFooter>
			</Card>
		</form>
	)
}

export default AccountSignUpForm
