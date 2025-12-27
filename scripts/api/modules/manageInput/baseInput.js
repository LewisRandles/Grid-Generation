export async function baseInput (configValue) {

	const { dateInput } = await import("./dateInput.js");
	const { modeInput } = await import("./modeInput.js");
	const { manageBase } = await import("./manageBase.js");

	// ---------------

	const getState = {
		"mode": modeInput,
		"startDate": dateInput,
		"endDate": dateInput
	};

	return await manageBase(configValue, getState);

}