import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Linkedin, Github, Mail, FileUser } from "lucide-react";

export default function Footer() {
	return (
		<Card className='flex flex-row justify-between items-center w-[777px] h-[55px] px-5 border-solid border-2 text-sm'>
			<div>© oskarpodrucki — Frontend Developer</div>
			<div className='flex flex-row items-center'>
				<Link
					href='https://www.linkedin.com/in/oskar-podrucki-5198322b7/'
					target='_blank'
					className='ml-4 transition duration-150 ease-in-out hover:scale-110 hover:text-[#0A66C2]'>
					<Linkedin />
				</Link>
				<Link
					href='https://github.com/oskarpodrucki'
					target='_blank'
					className='ml-4 transition duration-150 ease-in-out hover:scale-110 hover:text-gray-300'>
					<Github />
				</Link>
				<Link
					href='mailto:oskar.podrucki.mailsm@gmail.com'
					className='ml-4 transition duration-150 ease-in-out hover:scale-110 hover:text-green-400'>
					<Mail />
				</Link>
				<Link
					href='/cv/cvplaceholder.pdf'
					download
					target='_blank'
					className='ml-4 transition duration-150 ease-in-out hover:scale-110 hover:text-amber-400'>
					<FileUser />
				</Link>
			</div>
		</Card>
	);
}
