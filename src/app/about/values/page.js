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

export default function Values() {
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
					/about/values
				</CardTitle>
			</CardHeader>
			<Separator />
			<CardContent className='flex flex-col space-y-4'>
				<Link href='/about'>← go back to /about</Link>
				<div>
					<h2 className='text-3xl text-center mb-4'>values</h2>
					<ScrollArea className='w-full h-[328px] sm:h-[250px] md:h-[328px] lg:h-[433px] rounded-md border p-4'>
						<p className='text-lg mt-4'>values</p>
						<p className='text-md mt-2'>
							I like keeping things simple and clear. Code should be easy to
							read and do what it’s supposed to. I try to get better by putting
							in steady work, not looking for quick wins. I build things with a
							reason and try to learn something from every project.
						</p>
					</ScrollArea>
				</div>
			</CardContent>
		</Card>
	);
}
