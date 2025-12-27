export async function getGeneration (generation) {

	const { errorHandle } = await import("../../../shared/manageError/errorHandle.js");
	const { sendProcess } = await import("../sendProcess.js");
	const { conditionCheck } = await import("../../../shared/condition/conditionCheck.js");
	const { objectLoop } = await import("../manageProcess/objectLoop.js");
	const { fetchGeneration } = await import("../../components/fetchGeneration.js");
	const { generationNames } = await import("./generationNames.js");
	const { formatLoop } = await import("./formatLoop.js");

	// ---------------

	if (!await errorHandle("status")) { return false; }

	const getModeValue = await fetchGeneration(generation);

	if (getModeValue) {

		const returnValue = await formatLoop(getModeValue.data,  generation.mode);

		if (await conditionCheck(returnValue, "object")) {

			const getAmount = await objectLoop(returnValue);

			const itemStorage = {

				"generation": {
					"type": "object",
					"value": returnValue
				},

				"amount": {
					"type": "number",
					"value": getAmount
				},

				"name": {
					"type": "object",
					"value": generationNames
				}

			};

			const getProcess = await sendProcess(itemStorage);

			if (getProcess) {
				return getProcess;
			}

			else {
				await errorHandle(5645, "getRotation");
				return false;
			}

		}

		else {
			await errorHandle(6057, "getGeneration");
			return false;
		}

	}

	else {
		await errorHandle(5677, "getGeneration");
		return false;
	}

}