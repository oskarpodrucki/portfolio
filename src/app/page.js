import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { PulsatingButton } from "@/components/magicui/pulsating-button";

export default function Home() {
	return (
		<Card className='flex justify-center  w-[777px] h-[666px] p-5 border-solid border-2'>
			<CardHeader className='h-[4%]'>
				<CardTitle className='text-green-400 text-3xl'>/</CardTitle>
			</CardHeader>
			<Separator />
			<CardContent className='h-[94%]'>
				<CardTitle className='text-3xl'>Hello, my name is Oskar 👋</CardTitle>
				<CardDescription className='text-xl'>
					I&apos;m a 17-year-old frontend developer from Poland with a strong focus
					on creating clean, interactive user interfaces. I specialize in modern
					tools like React, Next.js, and Tailwind CSS, and I&apos;m currently diving
					deeper into UI/UX design and web animations. Through building projects
					and refining my skills, I&apos;m working toward becoming the best version
					of myself — both as a developer and as a person.
				</CardDescription>
				<CardDescription className='mt-5 text-xl'>
					Technologies I mainly use: react, next.js, tailwindcss, shadcn/ui, git
				</CardDescription>
				<div className='flex justify-center items-center mt-32'>
					<Link href='/portfolio'>
						<PulsatingButton className='text-sky-600 hover:text-sky-800 transition'>
							Check out my projects →
						</PulsatingButton>
					</Link>
				</div>
			</CardContent>
		</Card>
	);
}
