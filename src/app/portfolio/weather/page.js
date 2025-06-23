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

export default function Weather() {
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
					/blog/weather
				</CardTitle>
			</CardHeader>
			<Separator />
			<CardContent className='h-[94%]'>
				<Link href='/portfolio'>← go back to /portfolio</Link>
				<div className='mt-4'>
					<h2 className='text-3xl text-center mb-4'>weather</h2>
					<ScrollArea className='w-full h-[328px] sm:h-[250px] md:h-[328px] lg:h-[433px] rounded-md border p-4'>
						<p className='text-lg mt-4 font-semibold'>weather</p>
						<div>
							<Link
								href='https://opweather.vercel.app/'
								target='_blank'
								className='text-blue-400 hover:underline mr-1'>
								Deployment
							</Link>
							<Link
								href='https://github.com/oskarpodrucki/weather'
								target='_blank'
								className='text-gray-400 hover:underline'>
								Github
							</Link>
						</div>
						<Image
							src='/projects/weather.png'
							alt='weather'
							width={700}
							height={500}
							className='w-full h-auto rounded-md mt-4'
						/>
						<h1 className='text-xl text-center text-wrap mt-4 font-bold'>
							A minimalistic weather app built with Next.js and Tailwind CSS.
						</h1>
						<p className='text-md text-wrap mt-2'>
							This project allows users to check current weather conditions for
							any city using a simple, clean interface. It demonstrates API
							integration (OpenWeather), dynamic routing, and responsive design
							with smooth user interactions. Focused on usability, code clarity,
							and clean UI, this app is a quick example of real-world data
							handling in the frontend
						</p>
					</ScrollArea>
				</div>
			</CardContent>
		</Card>
	);
}
