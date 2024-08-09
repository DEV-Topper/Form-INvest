import {
	GOOGLE_ID,
	GOOGLE_REDIRECT_URL,
	GOOGLE_REFRESH_TOKEN,
	GOOGLE_SECRET,
} from "../../../public/utils/constant";
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

export const sendEmail: (
	type: string,
	amount: number,
	duration: string,
	date: string,
	repayment: string,
	rate: number
) => Promise<void> = async (
	type,
	amount,
	duration,
	date,
	repayment,
	rate
) => {
	try {
		const accessToken: string | undefined = (
			await oAuth.getAccessToken()
		).token!;

		const transporter = await nodemailer.createTransport({
			service: "gmail",

			auth: {
				type: "OAuth2",
				user: "codelabbest@gmail.com",
				clientId: GOOGLE_ID,

				refreshToken: GOOGLE_REFRESH_TOKEN,
				clientSecret: GOOGLE_SECRET,
				accessToken,
			},
		});

		const url = path.resolve("app/api/cost/views/cost.ejs");

		const data = { type, amount, duration, date, repayment, rate };
		const html = await ejs.renderFile(url, data);

		const mailOption: Mail.Options = {
			from: {
				address: "topkemcompany@gmail.com",
				name: "TopKem 🏡🏠",
			},
			to: "rehobothekene@gmail.com",
			html,
			subject: "Welcome to Topkem",
		};

		return await transporter
			.sendMail(mailOption)
			.then(() => {
				NextResponse.json({
					status: 201,
					message: "Message sent",
				});
			})
			.catch((err: any) => {
				console.log(err.message, "err");
				NextResponse.json({
					status: 404,
					message: "MEssage failed to send",
				});
			});
	} catch (err: any) {
		console.log(err.message, "err");

		throw err;
	}
};
