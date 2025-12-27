export async function callObject (startValue, stringValue) {

	const { conditionCheck } = await import("../condition/conditionCheck.js");
	const { errorHandle } = await import("../manageError/errorHandle.js");

	// ---------------

	const checkStart = await conditionCheck(startValue, "object") ? startValue : false;
	const checkPath = await conditionCheck(stringValue, "string") ? stringValue : false;

	if (checkStart && checkPath) {

		try {
			return await (stringValue).split(".").reduce(async (acc, cur) => {
				return acc[cur];
			}, startValue);
		}

		catch (error) {
			await errorHandle(9073, "callObject");
			return false;
		}

	}

	else {
		await errorHandle(3916, "callObject");
		return false;
	}

};