export default async function gridGeneration (apiConfig) {

	const { getAPI } = await import("./api/getAPI.js");
	const { conditionCheck } = await import("./shared/condition/conditionCheck.js");
	const { baseInput } = await import("./api/modules/manageInput/baseInput.js");
	const { errorHandle } = await import("./shared/manageError/errorHandle.js");
	const { resultValue } = await import("./shared/resultValue.js");
	const { errorStatus } = await import("./shared/manageError/errorStatus.js");
	const { initialValue } = await import("./shared/initialValue.js");

	// ---------------

	const initialCheck = await initialValue(apiConfig);

	if (await conditionCheck(initialCheck, "object")) {

		const selectedConfig = await baseInput(initialCheck);

		if (!await errorHandle("status")) { return false; }

		if (selectedConfig) {

			const getStart = new Date(selectedConfig.startDate).getTime();
			const getEnd = new Date(selectedConfig.endDate).getTime();

			if (getStart < getEnd) {

				const apiValue = await getAPI(selectedConfig);

				if (apiValue) {
					return await resultValue(apiValue);
				}

				else {
					await errorHandle(1289, "gridGeneration");
					return await resultValue(errorStatus.lastError);
				}

			}

			else {
				await errorHandle(6761, "gridGeneration");
				return await resultValue(errorStatus.lastError);
			}

		}

		else {
			await errorHandle(3802, "gridGeneration");
			return await resultValue(errorStatus.lastError);
		}

	}

	else {
		await errorHandle(6472, "gridGeneration");
		return await resultValue(errorStatus.lastError);
	}

}