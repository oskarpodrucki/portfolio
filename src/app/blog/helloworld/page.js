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

export default function Hello() {
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
					/blog/helloworld
				</CardTitle>
			</CardHeader>
			<Separator />
			<CardContent className='h-[94%]'>
				<Link href='/blog'>← go back to /blog</Link>
				<div className='mt-4'>
					<h2 className='text-3xl text-center'>helloworld</h2>
					<ScrollArea className='h-[450px] w-[684px] rounded-md border p-4 mt-4'>
						<p className='text-lg mt-4'>Hey there! 👋</p>
						<p className='text-md mt-2'>
							Welcome to my little corner of the internet. This is the very
							first post on this blog, and honestly — I’m just happy to be
							starting something new. I don’t know exactly where this will go
							yet, but that’s part of the fun, right?
						</p>
						<p className='text-md mt-2'>
							I’ll be sharing things I learn, stuff I build, maybe a few
							thoughts here and there. It’s nothing fancy — just a space to
							explore, grow, and enjoy the process.
						</p>
						<p className='text-md mt-2'>
							If you’re reading this: thank you. You’re awesome.
						</p>
						<p className='text-md mt-2'>See you soon!</p>
						<p className='text-md mt-2'>
							— <em>me :)</em>
						</p>
					</ScrollArea>
				</div>
			</CardContent>
		</Card>
	);
}
