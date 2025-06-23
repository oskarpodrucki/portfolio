import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function Portfolio() {
	return (
		<Card className='flex justify-center w-screen sm:w-[640px] md:w-[700px] lg:w-[777px] sm:h-[444px] md:h-[555px] lg:h-[666px] p-5 border-solid border-2'>
			<CardHeader className='h-[4%]'>
				<CardTitle className='text-sky-400 text-3xl'>/portfolio</CardTitle>
			</CardHeader>
			<Separator />
			<CardContent className='flex flex-col items-center w-full h-[94%] gap-3'>
				<Card className='flex justify-center items-center w-full h-[50px]'>
					<Link href='/portfolio/mywebsite'>mywebsite</Link>
				</Card>
				<Card className='flex justify-center items-center w-full h-[50px]'>
					<Link href='/portfolio/minibiz'>minibiz</Link>
				</Card>
				<Card className='flex justify-center items-center w-full h-[50px]'>
					<Link href='/portfolio/map'>map</Link>
				</Card>
				<Card className='flex justify-center items-center w-full h-[50px]'>
					<Link href='/portfolio/weather'>weather</Link>
				</Card>
				<Card className='flex justify-center items-center w-full h-[50px]'>
					<Link href='/portfolio/gold'>gold</Link>
				</Card>
				<Card className='flex justify-center items-center w-full h-[50px]'>
					<Link href='/portfolio/cocktails'>cocktails</Link>
				</Card>
			</CardContent>
		</Card>
	);
}
