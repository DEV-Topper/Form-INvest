import {
	GOOGLE_ID,
	GOOGLE_REDIRECT_URL,
	GOOGLE_REFRESH_TOKEN,
	GOOGLE_SECRET,
} from "@/public/utils/constant";
import ejs from "ejs";
import { google } from "googleapis";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import path from "path";

const oAuth = new google.auth.OAuth2({
	clientId: GOOGLE_ID,
	clientSecret: GOOGLE_SECRET,
	redirectUri: GOOGLE_REDIRECT_URL,
});

oAuth.setCredentials({ refresh_token: GOOGLE_REFRESH_TOKEN });

export const sendEmail: ({
	email,
}: {
	email: string;
}) => Promise<void> = async ({ email }) => {
	try {
		const accessToken: string | undefined = (
			await oAuth.getAccessToken()
		).token!;

		const transporter = await nodemailer.createTransport({
			service: "gmail",

			auth: {
				type: "OAuth2",
				user: "topkemcompany@gmail.com",
				clientId: GOOGLE_ID,
				clientSecret: GOOGLE_SECRET,
				accessToken,
			},
		});

		const url = path.resolve("app/api/subscribe/views/index.ejs");

		const html = await ejs.renderFile(url);

		const mailOption: Mail.Options = {
			from: '"TopKem 🏡🏠" <no-reply@topkem.com>',
			to: email,
			html,
			subject: "Welcome to Topkem",
		};

		await transporter
			.sendMail(mailOption)
			.then(() => {
				NextResponse.json({
					status: 201,
					message: "Message sent",
				});
			})
			.catch(() => {
				NextResponse.json({
					status: 404,
					message: "MEssage failed to send",
				});
			});
	} catch (err) {
		throw err;
	}
};
