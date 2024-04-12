import AccountForm from '@/components/AccountForm'
import { UserIcon } from '@/components/Icons'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'

function AccountDialog() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button
					className='hover:bg-transparent text-white hover:text-white'
					variant='ghost'
				>
					<UserIcon />
					<span className='sr-only'>User icon</span>
				</Button>
			</DialogTrigger>
			<DialogContent className='sm:max-w-[425px] pt-10 flex justify-center'>
				<AccountForm />
			</DialogContent>
		</Dialog>
	)
}

export default AccountDialog
