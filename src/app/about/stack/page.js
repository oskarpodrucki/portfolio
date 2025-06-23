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

export default function Stack() {
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
					/about/stack
				</CardTitle>
			</CardHeader>
			<Separator />
			<CardContent className='flex flex-col space-y-4'>
				<Link href='/about'>← go back to /about</Link>
				<div>
					<h2 className='text-3xl text-center mb-4'>stack</h2>
					<ScrollArea className='w-full h-[328px] sm:h-[250px] md:h-[328px] lg:h-[433px] rounded-md border p-4'>
						<p className='text-lg mt-4'>stack</p>
						<p className='text-md text-wrap mt-2'>
							<strong>Frontend</strong> – I work primarily with modern
							technologies like Next.js, Expo, React, and Tailwind CSS to build
							fast, responsive, and accessible user interfaces. I focus on
							component reusability, clean structure, and intuitive UX.{" "}
							<br></br>
							<strong>Backend</strong> – I use Node.js and Express to build
							scalable backend services, integrating both SQL (Supabase,
							PostgreSQL, MySQL) and NoSQL (MongoDB, Pocketbase) databases,
							depending on project needs. I’m comfortable with REST APIs, basic
							auth systems, and handling server-side logic. <br></br>
							<strong>Also learning</strong> – I’m actively expanding my
							skillset with languages like C++ and Java to strengthen my
							understanding of lower-level programming, object-oriented design,
							and system fundamentals. <br></br>I work in Linux-based
							environments, use Git for version control daily, and design in
							Figma when needed – from wireframes to full UI mockups. I also
							leverage tools like VS Code, Postman, and browser devtools to
							streamline development. <br></br>
							My workflow is simple, efficient, and focused on writing
							maintainable, scalable code while continuously improving through
							real-world projects and self-directed learning.
						</p>
					</ScrollArea>
				</div>
			</CardContent>
		</Card>
	);
}
