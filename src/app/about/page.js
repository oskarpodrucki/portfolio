import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function About() {
	return (
		<Card className='flex justify-center w-[777px] h-[666px] p-5 border-solid border-2'>
			<CardHeader className='h-[4%]'>
				<CardTitle className='text-amber-400 text-3xl'>/about</CardTitle>
			</CardHeader>
			<Separator />
			<CardContent className='h-[94%]'>
				<CardTitle>About</CardTitle>
				<CardDescription>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
					maxime repellendus necessitatibus, dolorem, perspiciatis aliquid atque
					dolorum id nihil officiis praesentium corrupti illo tempora quod modi
					architecto possimus pariatur earum.
				</CardDescription>
			</CardContent>
		</Card>
	);
}
