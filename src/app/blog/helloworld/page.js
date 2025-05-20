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
		<Card
			className='
				flex flex-col 
				justify-start 
				w-screen sm:w-[640px] md:w-[700px] lg:w-[777px] 
				sm:h-[444px] md:h-[555px] lg:h-[666px]
				p-5 border-2
			'>
			<CardHeader>
				<CardTitle style={{ color: randHex }} className='text-3xl'>
					/blog/helloworld
				</CardTitle>
			</CardHeader>

			<Separator />

			<CardContent className='flex flex-col space-y-4'>
				<Link href='/blog'>← go back to /blog</Link>

				<h2 className='text-3xl text-center'>helloworld</h2>

				<ScrollArea className='w-full h-[328px] sm:h-[225px] md:h-[328px] lg:h-[433px] rounded-md border p-4'>
					<p className='text-sm mt-1'>Date: Tuesday, 20 May 2025 18:52:14</p>
					<p className='text-lg mt-4'>Hey there! 👋</p>
					<p className='text-md mt-2'>
						Welcome to my little corner of the internet. This is the very first
						post on this blog, and honestly — I&apos;m just happy to be starting
						something new. I don&apos;t know exactly where this will go yet, but
						that&apos;s part of the fun, right?
					</p>
					<p className='text-md mt-2'>
						I&apos;ll be sharing things I learn, stuff I build, maybe a few thoughts
						here and there. It&apos;s nothing fancy — just a space to explore, grow,
						and enjoy the process.
					</p>
					<p className='text-md mt-2'>
						As you can see, there are some things that don&apos;t work yet. Mainly
						responsiveness, and there&apos;s also no content on pages like Projects
						or About Me. But I&apos;ll try to fix that in the coming days — so stay
						tuned!
					</p>
					<p className='text-md mt-2'>
						Of course, if you find something that doesn&apos;t work properly, you can
						write to me via contact or create an issue about it on github, I'll
						be grateful 😉
					</p>
					<p className='text-md mt-2'>
						If you&apos;re reading this: thank you. You&apos;re awesome.
					</p>
					<p className='text-md mt-2'>See you soon!</p>
				</ScrollArea>
			</CardContent>
		</Card>
	);
}
