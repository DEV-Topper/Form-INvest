import mongoose, { Schema, model, models } from "mongoose";
import { iEmail } from "../interfaces";

const emailSchema = new Schema<iEmail>(
	{
		email: { type: String, required: true },
	},
	{ timestamps: true }
);

const emailModel =
	models.Email || model<iEmail>("Email", emailSchema);

export default emailModel;
