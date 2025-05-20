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
import { ScrollArea } from "@/components/ui/scroll-area";
import { PulsatingButton } from "@/components/magicui/pulsating-button";

export default function Home() {
	return (
		<Card className='flex justify-center w-screen sm:w-[640px] md:w-[700px] lg:w-[777px] sm:h-[444px] md:h-[555px] lg:h-[666px] p-5 border-solid border-2'>
			<CardHeader className='h-[5%]'>
				<CardTitle className='text-green-400 text-3xl'>/</CardTitle>
			</CardHeader>
			<Separator />
			<CardContent className='w-full h-[95%]'>
				<CardTitle className='sm:text-xl md:text-2xl lg:text-3xl'>
					Hello, my name is Oskar 👋
				</CardTitle>
				<CardDescription className='sm:text-sm md:text-md lg:text-xl'>
					I'm a 17-year-old frontend developer from Poland with a strong focus
					on creating clean, interactive user interfaces. I specialize in modern
					tools like React, Next.js, and Tailwind CSS, and I&apos;m currently diving
					deeper into UI/UX design and web animations. Through building projects
					and refining my skills, I&apos;m working toward becoming the best version
					of myself — both as a developer and as a person.
				</CardDescription>
				<CardDescription className='mt-5 sm:text-sm md:text-md lg:text-xl'>
					Technologies I mainly use: react, next.js, tailwindcss, shadcn/ui, git
				</CardDescription>
				<div className='flex justify-center items-center mt-9 mb-9'>
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
