export async function fetchGeneration (generation) {

	const { conditionCheck } = await import("../../shared/condition/conditionCheck.js");
	const { errorHandle } = await import("../../shared/manageError/errorHandle.js");
	const { attemptFetch } = await import("../modules/attemptFetch.js");

	// ---------------

	if (await conditionCheck(generation, "object")) {

		let fetchURL;

		switch (generation.mode) {

			case "current": {
				fetchURL = encodeURI("https://api.carbonintensity.org.uk/generation");
				break;
			}

			case "custom": {
				fetchURL = encodeURI(`https://api.carbonintensity.org.uk/generation/${generation.startDate}/${generation.endDate}`);
				break;
			}

		}

		const returnResult = await attemptFetch(fetchURL);

		if (await conditionCheck(returnResult, "object")) {
			return returnResult;
		}

		else {
			await errorHandle(5585, "fetchGeneration");
			return false;
		}

	}

	else {
		await errorHandle(2499, "fetchGeneration");
		return false;
	}

}