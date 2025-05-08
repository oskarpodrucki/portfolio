import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
	return (
		<Card className='flex justify-center w-[777px] h-[666px] p-5 border-solid border-2'>
			<CardHeader className='h-[4%]'>
				<CardTitle className='text-rose-400 text-3xl'>/contact</CardTitle>
			</CardHeader>
			<Separator />
			<CardContent className='h-[94%] space-y-4'>
				<CardTitle>Contact with Me</CardTitle>
				<CardDescription>
					Fill out the form below and we'll get back to you as soon as possible.
				</CardDescription>
				<div className='grid grid-cols-2 gap-4'>
					<div className='space-y-2'>
						<Label htmlFor='first-name'>First name</Label>
						<Input id='first-name' placeholder='John' />
					</div>
					<div className='space-y-2'>
						<Label htmlFor='last-name'>Last name</Label>
						<Input id='last-name' placeholder='Doe' />
					</div>
				</div>
				<div className='space-y-2'>
					<Label htmlFor='email'>Email</Label>
					<Input id='email' type='email' placeholder='john.doe@example.com' />
				</div>
				<div className='space-y-2'>
					<Label htmlFor='message'>Message</Label>
					<Textarea
						id='message'
						placeholder='Your message here...'
						className='min-h-[250px]'
					/>
				</div>
			</CardContent>
			<CardFooter>
				<Button className='w-full'>Submit</Button>
			</CardFooter>
		</Card>
	);
}
