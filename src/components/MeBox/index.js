import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ThemeToggle } from "../ThemeToogle/ThemeToggle";

export default function MeBox() {
	return (
		<Card className='flex flex-row justify-center items-center w-[777px] h-[144px] p-5 border-solid border-2'>
			<div className='w-[15%]'>
				<Avatar className='w-[122px] h-[122px]'>
					<AvatarImage src='pictures/me.jpg' />
					<AvatarFallback>OP</AvatarFallback>
				</Avatar>
			</div>
			<div className='w-[85%]'>
				<h1 className='text-4xl'>oskarpodrucki</h1>
				<p>frontend developer</p>
			</div>
			<div className='w-[10%]'>
				<ThemeToggle />
			</div>
		</Card>
	);
}
