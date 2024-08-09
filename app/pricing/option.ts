export const sendCost: (
	type: string,
	amount: number,
	duration: string,
	date: string,
	repayment: string
) => Promise<void> = async (
	type,
	amount,
	duration,
	date,
	repayment
) => {
	try {
		await fetch("/api/cost", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				type,
				amount,
				duration,
				date,
				repayment,
			}),
		});
	} catch (err) {
		throw err;
	}
};
