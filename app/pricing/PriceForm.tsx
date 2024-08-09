"use client";
import React, { useEffect, useState } from "react";
import { sendCost } from "./option";

const PriceForm = () => {
	const [details, setDetails] = useState<any>(null);
	const [loading, setLoading] = useState(false);
	const [formValues, setFormValues] = useState({
		service: "house",
		cleanType: "full",
		floorArea: "",
		name: "",
		zip: "",
		email: "",
	});

	useEffect(() => {
		const storedDetails = localStorage.getItem("details");
		if (storedDetails) {
			setDetails(JSON.parse(storedDetails));
			setFormValues(JSON.parse(storedDetails));
		}
	}, []);

	const getEstimate = async (formData: FormData) => {
		const type = formData.get("type") as string;
		const amount = formData.get("amount") as string;
		const duration = formData.get("duration") as string;
		const date = formData.get("date") as string;
		const repayment = formData.get("repayment") as string;

		setLoading(true);
		await sendCost(type, +amount, duration, date, repayment);
		setLoading(false);

		setFormValues({
			service: "house",
			cleanType: "full",
			floorArea: "",
			name: "",
			zip: "",
			email: "",
		});
		localStorage.removeItem("details");
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const { name, value } = e.target;
		setFormValues({ ...formValues, [name]: value });
	};

	return (
		<section className="w-[400px] py-12 flex flex-col items-center justify-center">
			<div className="w-full max-w-6xl mt-8 px-4">
				<form
					onSubmit={(e) => {
						e.preventDefault();
						getEstimate(new FormData(e.currentTarget));
					}}
					className="bg-white shadow-xl rounded-lg p-4 mx-auto"
				>
					<div className=" gap-4">
						{/* Service Selection */}
						<div>
							<label
								htmlFor="type"
								className="block text-left text-gray-600 font-semibold"
							>
								Investment Type
							</label>
							<select
								name="type"
								defaultValue={"flexible"}
								className="w-full p-2 border border-gray-300 rounded mt-1"
							>
								<option value="flexible">Flexible</option>
								<option value="fixed">Fixed</option>
								{/* <option value="Dollars">Range</option> */}
							</select>
						</div>
					</div>

					{/* Total Floor Area Input */}
					<div className="mt-4">
						<label
							htmlFor="amount"
							className="block text-left text-gray-600 font-semibold"
						>
							Amount
						</label>
						<input
							name="amount"
							type="number"
							className="w-full p-2 border border-gray-300 rounded mt-1"
							placeholder="Enter amount"
						/>
					</div>

					<div>
						<label
							htmlFor="duration"
							className="block mt-4 text-left text-gray-600 font-semibold"
						>
							Duration
						</label>
						<select
							name="duration"
							className="w-full p-2 border border-gray-300 rounded mt-1"
						>
							<option value="90">90 days</option>
							<option value="180">180 days</option>
							<option value="270"> 270 days</option>
							<option value="365">365 days</option>
						</select>
					</div>

					{/* Email Address Input */}
					<div className="mt-4">
						<label
							htmlFor="email"
							className="block text-left text-gray-600 font-semibold"
						>
							Kindly select the date the funds will be transferred to
							your account
						</label>
						<input
							name="date"
							type="date"
							className="w-full p-2 border border-gray-300 rounded mt-1"
							placeholder="Enter your email address"
						/>
					</div>

					<div>
						<label
							htmlFor="repayment"
							className="block mt-4 text-left text-gray-600 font-semibold"
						>
							Interest Repayment Type
						</label>
						<select
							name="repayment"
							className="w-full p-2 border border-gray-300 rounded mt-1"
						>
							<option value="monthly">Monthly</option>
							<option value="quarterly">Quarterly</option>
							<option value="maturity"> At Maturity</option>
							<option value="upfront">Upfront</option>
						</select>
					</div>

					{/* Submission Button and Description */}
					<div className="mt-8 flex justify-start items-center">
						<button
							type="submit"
							className="inline-flex items-center px-6 py-3 bg-blue-600 text-white text-lg font-bold rounded-lg hover:bg-blue-500 transition duration-300 ease-in-out"
							disabled={loading}
						>
							{loading ? (
								<svg
									className="animate-spin h-5 w-5 text-white mr-3"
									viewBox="0 0 24 24"
								>
									<circle
										className="opacity-25"
										cx="12"
										cy="12"
										r="10"
										stroke="currentColor"
										strokeWidth="4"
									></circle>
									<path
										className="opacity-75"
										fill="currentColor"
										d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.964 7.964 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
									></path>
								</svg>
							) : (
								"Get Cost Estimate"
							)}
						</button>
					</div>
				</form>
			</div>
		</section>
	);
};

export default PriceForm;
