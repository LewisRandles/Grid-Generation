export async function manageBase (configValue, getState) {

	const { errorHandle } = await import("../../../shared/manageError/errorHandle.js");
	const { callObject } = await import("../../../shared/manageObject/callObject.js");
	const { conditionCheck } = await import("../../../shared/condition/conditionCheck.js");

	// ---------------

	const checkResult = {};
	const resultValue = {};

	if (!await errorHandle("status")) { return false; }

	if (conditionCheck(configValue, "object")) {

		for await (const inputItem of Object.keys(getState)) {

			if (!await errorHandle("status")) { return false; }

			checkResult[inputItem] = false;

			const itemResult = await callObject(configValue, inputItem);

			if (conditionCheck(itemResult, "string")) {

				const setString = itemResult.toLowerCase();
				const getValue = await getState[inputItem](setString);

				if (getValue) {
					checkResult[inputItem] = true;
					resultValue[inputItem] = getValue;
				}

			}

			else {
				await errorHandle(4278, "manageBase");
				return false;
			}

		}

		if (Object.values(checkResult).includes(false)) {
			await errorHandle(3603, "manageBase");
			return false;
		}

		else {
			return resultValue;
		}

	}

}