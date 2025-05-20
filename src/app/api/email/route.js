import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
	const { email, first_name, last_name, message } = await request.json();

	const transport = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: process.env.MY_EMAIL,
			pass: process.env.MY_PASSWORD,
		},
	});

	const mailOptions = {
		from: process.env.MY_EMAIL,
		to: process.env.MY_EMAIL,
		cc: email,
		subject: `Message from ${first_name} ${last_name} (${email})`,
		text: message,
	};

	try {
		await transport.sendMail(mailOptions);
		return NextResponse.json({ message: "Email sent" });
	} catch (err) {
		return NextResponse.json({ error: err.message }, { status: 500 });
	}
}
