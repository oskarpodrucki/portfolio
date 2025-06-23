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

export default function Map() {
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
					/blog/map
				</CardTitle>
			</CardHeader>
			<Separator />
			<CardContent className='h-[94%]'>
				<Link href='/portfolio'>← go back to /portfolio</Link>
				<div className='mt-4'>
					<h2 className='text-3xl text-center mb-4'>map</h2>
					<ScrollArea className='w-full h-[328px] sm:h-[250px] md:h-[328px] lg:h-[433px] rounded-md border p-4'>
						<p className='text-lg mt-4'>map</p>
						<div>
							<Link
								href='https://github.com/3PRO-MAPA'
								target='_blank'
								className='text-gray-400 hover:underline'>
								Github
							</Link>
						</div>
						{Array.from({ length: 12 }, (_, i) => {
							const index = i + 1;
							return (
								<Image
									key={index}
									src={`/projects/map/map${index}.png`}
									alt={`map${index}`}
									width={700}
									height={500}
									className='w-full h-auto rounded-md'
								/>
							);
						})}
						<h1 className='text-xl text-center text-wrap mt-2'>
							Educational Choice Assistant With Map– app for students (Powiat
							Miński)
						</h1>
						<p className='text-md text-wrap mt-2'>
							From 01/2025 to 03/2025, I led a development team in a project
							commissioned by Powiat Miński to build a web application helping
							students choose high schools. I coordinated work on the map
							interface, point calculator, backend logic, and UX flow. My
							responsibilities included leading the team, implementing key UI
							components, integrating the frontend with backend logic, and
							ensuring smooth user experience across the app.
							<br></br>
							<br></br>
							Built using Next.js, Tailwind CSS, UI component libraries such as
							shadcn/ui and MagicUI, with Strapi as a headless CMS. The map
							functionality was implemented using React Leaflet, enhanced with
							Open Source Routing Machine (OSRM) for visually accurate and
							user-friendly bus route visualizations.
						</p>
					</ScrollArea>
				</div>
			</CardContent>
		</Card>
	);
}
