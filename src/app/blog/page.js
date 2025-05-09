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

export default function Blog() {
	return (
		<Card className='flex justify-center w-[777px] h-[666px] p-5 border-solid border-2'>
			<CardHeader className='h-[4%]'>
				<CardTitle className='text-violet-400 text-3xl'>/blog</CardTitle>
			</CardHeader>
			<Separator />
			<CardContent className='flex flex-col items-center w-full h-[94%]'>
				<Card className='flex justify-center items-center w-full h-[50px]'>
					<Link href='/blog/helloworld'>helloworld</Link>
				</Card>
			</CardContent>
		</Card>
	);
}
