"use client";
import { useState, useEffect } from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import Image from "next/image";

export default function Cocktails() {
	const [randHex, setRandHex] = useState("");

	const randomHexColorCode = () => {
		const hex =
			"#" +
			Math.floor(Math.random() * 16777215)
				.toString(16)
				.padStart(6, "0");
		setRandHex(hex);
	};

	useEffect(() => {
		randomHexColorCode();
	}, []);

	useEffect(() => {
		console.log(randHex);
	}, [randHex]);

	return (
		<Card
			className='flex flex-col 
				justify-start 
				w-screen sm:w-[640px] md:w-[700px] lg:w-[777px] 
				sm:h-[444px] md:h-[555px] lg:h-[666px]
				p-5 border-2'>
			<CardHeader className='h-[4%]'>
				<CardTitle style={{ color: randHex }} className='text-3xl'>
					/blog/cocktails
				</CardTitle>
			</CardHeader>
			<Separator />
			<CardContent className='h-[94%]'>
				<Link href='/portfolio'>← go back to /portfolio</Link>
				<div className='mt-4'>
					<h2 className='text-3xl text-center mb-4'>cocktails</h2>
					<ScrollArea className='w-full h-[328px] sm:h-[250px] md:h-[328px] lg:h-[433px] rounded-md border p-4'>
						<p className='text-lg mt-4 font-semibold'>cocktails</p>
						<div>
							<Link
								href='https://opcocktails.vercel.app/'
								target='_blank'
								className='text-blue-400 hover:underline mr-1'>
								Deployment
							</Link>
							<Link
								href='https://github.com/oskarpodrucki/cocktails'
								target='_blank'
								className='text-gray-400 hover:underline'>
								Github
							</Link>
						</div>
						<Image
							src='/projects/cocktails.png'
							alt='cocktails'
							width={700}
							height={500}
							className='w-full h-auto rounded-md mt-4'
						/>
						<h1 className='text-xl text-center text-wrap mt-4 font-bold'>
							A cocktail suggestion app built with Next.js and Tailwind CSS.
						</h1>
						<p className='text-md text-wrap mt-2'>
							This project suggests random cocktails to users, using data from
							TheCocktailDB API. It highlights my ability to work with external
							APIs, dynamic UI rendering, and responsive design. The app offers
							a clean, intuitive experience and was built to practice API
							integration, conditional rendering, and user-focused UI logic.
						</p>
					</ScrollArea>
				</div>
			</CardContent>
		</Card>
	);
}
