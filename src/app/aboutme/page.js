import Header from "@/components/Header";
export default function AboutMe() {
	return (
		<div class='flex flex-col min-h-screen justify-center items-center'>
			<Header />
			<div className='flex justify-center items-center w-4/5 h-[555px] mb-3 bg-amber-900'>
				main
			</div>
			<div className='flex justify-center items-center w-4/5 h-[88px] mb-3 bg-amber-500'>
				footer
			</div>
		</div>
	);
}
