import emailModel from "@/public/utils/models/emailModel";
import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "../subscribe/email";
import { dbConfig } from "@/public/utils/dbConfig";

export const POST = async (req: NextRequest) => {
	try {
		await dbConfig();
		const { email } = await req.json();

		const userEmail = await emailModel.create({ email });

		await sendEmail({ email });

		return NextResponse.json({
			status: 201,
			message: "Email sent successfully",
			data: userEmail,
		});
	} catch (error: any) {
		return NextResponse.json({
			status: 500,
			message: error.message,
		});
	}
};
