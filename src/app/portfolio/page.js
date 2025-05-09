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
		<Card className='flex justify-center w-[777px] h-[666px] p-5 border-solid border-2'>
			<CardHeader className='h-[4%]'>
				<CardTitle className='text-sky-400 text-3xl'>/portfolio</CardTitle>
			</CardHeader>
			<Separator />
			<CardContent className='flex flex-col items-center w-full h-[94%]'>
				<Card className='flex justify-center items-center w-full h-[50px]'>
					<Link href='/portfolio/project1'>project1</Link>
				</Card>
			</CardContent>
		</Card>
	);
}
