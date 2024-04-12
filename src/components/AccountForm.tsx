import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const AccountForm = () => {
	return (
		<Tabs defaultValue='signin' className='w-[400px]'>
			<TabsList className='grid w-full grid-cols-2'>
				<TabsTrigger value='signin'>Sign-In</TabsTrigger>
				<TabsTrigger value='signup'>Sign-Up</TabsTrigger>
			</TabsList>
			<TabsContent value='signin'>
				<Card>
					<CardHeader>
						<CardTitle>Sign-In</CardTitle>
					</CardHeader>
					<CardContent className='space-y-2'>
						<div className='space-y-1'>
							<Label htmlFor='email'>Email</Label>
							<Input id='email' type='email' />
						</div>
						<div className='space-y-1'>
							<Label htmlFor='password'>Password</Label>
							<Input id='password' type='password' />
						</div>
					</CardContent>
					<CardFooter>
						<Button className='w-full'>Sign in</Button>
					</CardFooter>
				</Card>
			</TabsContent>
			<TabsContent value='signup'>
				<Card>
					<CardHeader>
						<CardTitle>Sign-Up</CardTitle>
					</CardHeader>
					<CardContent className='space-y-2'>
						<div className='space-y-1'>
							<Label htmlFor='username'>Username</Label>
							<Input id='username' type='text' />
						</div>
						<div className='space-y-1'>
							<Label htmlFor='email'>Email</Label>
							<Input id='email' type='email' />
						</div>
						<div className='space-y-1'>
							<Label htmlFor='password'>Password</Label>
							<Input id='password' type='password' />
						</div>
						<div className='space-y-1'>
							<Label htmlFor='confirm-password'>
								Confirm password
							</Label>
							<Input id='confirm-password' type='password' />
						</div>
					</CardContent>
					<CardFooter>
						<Button className='w-full'>Sign Up</Button>
					</CardFooter>
				</Card>
			</TabsContent>
		</Tabs>
	)
}

export default AccountForm
