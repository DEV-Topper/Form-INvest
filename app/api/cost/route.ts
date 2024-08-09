import { NextRequest, NextResponse } from "next/server";
import { dbConfig } from "../../../public/utils/dbConfig";
import { sendEmail } from "./email";

export const POST = async (req: NextRequest) => {
	try {
		await dbConfig();
		const { type, amount, duration, date, repayment } =
			await req.json();
		let rate: number;

		if (type === "flexible") {
			if (duration === "90") {
				if (amount <= 4999999) {
					rate = 12.5;
				} else if (amount >= 5000000 && amount <= 10000000) {
					rate = 15;
				} else if (amount > 10000000 && amount <= 60000000) {
					rate = 20;
				}

				await sendEmail(
					type,
					amount,
					duration,
					date,
					repayment,
					rate
				);
			} else if (duration === "180") {
				rate =
					amount <= 4999999
						? 12.5
						: amount >= 5000000 && amount <= 10000000
						? 15
						: 20;

				await sendEmail(
					type,
					amount,
					duration,
					date,
					repayment,
					rate
				);
			} else if (duration === "365") {
				rate =
					amount <= 4999999
						? 14.5
						: amount >= 5000000 && amount <= 10000000
						? 17
						: 22;

				await sendEmail(
					type,
					amount,
					duration,
					date,
					repayment,
					rate
				);
			}
		} else if (type === "fixed") {
			if (duration === "180") {
				rate =
					amount <= 4999999
						? 10
						: amount >= 5000000 && amount <= 10000000
						? 12
						: 15;

				await sendEmail(
					type,
					amount,
					duration,
					date,
					repayment,
					rate
				);
			} else if (duration === "365") {
				rate =
					amount <= 4999999
						? 11
						: amount >= 5000000 && amount <= 10000000
						? 13
						: 16;

				await sendEmail(
					type,
					amount,
					duration,
					date,
					repayment,
					rate
				);
			}
		}

		return NextResponse.json({
			status: 201,
			message: "Email sent successfully",
		});
	} catch (error: any) {
		return NextResponse.json({
			status: 500,
			message: error.message,
		});
	}
};
