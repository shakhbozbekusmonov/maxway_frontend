import { axiosInstance } from '@/services/api-client'
import { FieldValues, useForm } from 'react-hook-form'
import { Button } from './ui/button'
import { Input } from './ui/input'

const AccountVerifyOTPForm = ({ onClose }: { onClose: () => void }) => {
	const { register, handleSubmit } = useForm()

	const onVerifyOTP = (data: FieldValues) => {
		axiosInstance
			.post('/users/verify/', data, {
				headers: {
					Authorization: 'Bearer ' + localStorage.getItem('access')
				}
			})
			.then(res => {
				console.log(res.data)
				localStorage.setItem('access', res.data.access)
				localStorage.setItem('refresh', res.data.refresh)
			})
	}
	return (
		<form onSubmit={handleSubmit(onVerifyOTP)}>
			<Input
				className='mb-5'
				type='number'
				{...register('code')}
				name='code'
			/>

			<Button className='w-full' onClick={onClose}>
				Tasdiqlash
			</Button>
		</form>
	)
}

export default AccountVerifyOTPForm
