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

export default function About() {
	return (
		<Card className='flex justify-center w-screen sm:w-[640px] md:w-[700px] lg:w-[777px] sm:h-[444px] md:h-[555px] lg:h-[666px] p-5 border-solid border-2'>
			<CardHeader className='h-[4%]'>
				<CardTitle className='text-amber-400 text-3xl'>/about</CardTitle>
			</CardHeader>
			<Separator />
			<CardContent className='flex flex-col items-center w-full h-[94%]'>
				<Card className='flex justify-center items-center w-full h-[50px]'>
					<Link href='/about/me'>me</Link>
				</Card>
			</CardContent>
		</Card>
	);
}
