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

export default function Project1() {
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
		<Card className='flex justify-center w-[777px] h-[666px] p-5 border-solid border-2'>
			<CardHeader className='h-[4%]'>
				<CardTitle style={{ color: randHex }} className='text-3xl'>
					/blog/project1
				</CardTitle>
			</CardHeader>
			<Separator />
			<CardContent className='h-[94%]'>
				<Link href='/portfolio'>← go back to /portfolio</Link>
				<div className='mt-4'>
					<h2 className='text-3xl text-center'>project1</h2>
					<ScrollArea className='h-[450px] w-[684px] rounded-md border p-4 mt-4'>
						<p className='text-lg mt-4'>project1</p>
						<p className='text-md mt-2'>about project1</p>
					</ScrollArea>
				</div>
			</CardContent>
		</Card>
	);
}
