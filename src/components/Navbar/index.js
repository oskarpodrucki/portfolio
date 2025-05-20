import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function Navbar() {
	return (
		<Card className='flex flex-row justify-between items-center w-screen sm:w-[640px] md:w-[700px] lg:w-[777px] h-[55px] px-5 border-solid border-2'>
			<Link
				href='/'
				className='transition duration-150 ease-in-out hover:scale-110 hover:text-green-400'>
				/
			</Link>
			<Link
				href='/portfolio'
				className='transition duration-150 ease-in-out hover:scale-110 hover:text-sky-400'>
				/portfolio
			</Link>
			<Link
				href='/about'
				className='transition duration-150 ease-in-out hover:scale-110 hover:text-amber-400'>
				/about
			</Link>
			<Link
				href='/contact'
				className='transition duration-150 ease-in-out hover:scale-110 hover:text-rose-400'>
				/contact
			</Link>
			<Link
				href='/blog'
				className='transition duration-150 ease-in-out hover:scale-110 hover:text-violet-400'>
				/blog
			</Link>
		</Card>
	);
}
