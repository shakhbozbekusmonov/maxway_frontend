import { axiosInstance } from '@/services/api-client'
import { FieldValues, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { Button } from './ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Input } from './ui/input'
import { Label } from './ui/label'

const AccountSignInForm = ({ onClose }: { onClose: () => void }) => {
	const { register, handleSubmit } = useForm()

	const onSubmit = (data: FieldValues) => {
		axiosInstance
			.post('/users/login/', data, {
				headers: {
					Authorization: 'Bearer ' + localStorage.getItem('access')
				}
			})
			.then(res => {
				console.log(res.data)
				toast.success(res.data.message)
				localStorage.setItem('access', res.data.access)
				localStorage.setItem('refresh', res.data.refresh)
			})
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Card>
				<CardHeader>
					<CardTitle>Sign-In</CardTitle>
				</CardHeader>
				<CardContent className='space-y-2'>
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
				</CardContent>
				<CardFooter>
					<Button className='w-full' onClick={onClose}>
						Sign in
					</Button>
				</CardFooter>
			</Card>
		</form>
	)
}

export default AccountSignInForm
