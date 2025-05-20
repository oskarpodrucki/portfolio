"use client";

import { useForm } from "react-hook-form";
import { sendEmail } from "@/utils/send-email";
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
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Contact() {
	const { register, handleSubmit } = useForm();

	function onSubmit(data) {
		sendEmail(data);
	}

	return (
		<Card
			className='
				mx-auto
				w-screen sm:w-[640px] md:w-[700px] lg:w-[777px]
				sm:h-[444px] md:h-[555px] lg:h-[666px]
				p-5 border-solid border-2
				flex flex-col
			'
			style={{ minHeight: "auto" }}>
			<CardHeader>
				<CardTitle className='text-rose-400 text-3xl'>/contact</CardTitle>
			</CardHeader>

			<Separator />

			<ScrollArea className='h-[328px] md:h-[433px] lg:h-[666px] w-full'>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='flex flex-col flex-grow'>
					<CardContent className='flex flex-col flex-grow space-y-4'>
						<CardTitle>Contact with Me</CardTitle>
						<CardDescription>
							Fill out the form below and I&apos;ll get back to you as soon as
							possible.
						</CardDescription>

						<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
							<div className='space-y-2'>
								<Label htmlFor='first-name'>First name</Label>
								<Input
									id='first-name'
									placeholder='John'
									{...register("first_name", { required: true })}
								/>
							</div>
							<div className='space-y-2'>
								<Label htmlFor='last-name'>Last name</Label>
								<Input
									id='last-name'
									placeholder='Doe'
									{...register("last_name", { required: true })}
								/>
							</div>
						</div>

						<div className='space-y-2'>
							<Label htmlFor='email'>Email</Label>
							<Input
								id='email'
								type='email'
								placeholder='john.doe@example.com'
								{...register("email", { required: true })}
							/>
						</div>

						<div className='space-y-2 flex flex-col flex-grow'>
							<Label htmlFor='message'>Message</Label>
							<Textarea
								id='message'
								placeholder='Your message here...'
								className='min-h-[150px] md:min-h-[250px] resize-none'
								{...register("message", { required: true })}
							/>
						</div>
					</CardContent>

					<CardFooter className='pt-4'>
						<Button className='w-full cursor-pointer'>Submit</Button>
					</CardFooter>
				</form>
			</ScrollArea>
		</Card>
	);
}
