export async function initialValue (apiConfig) {

	const { conditionCheck } = await import("./condition/conditionCheck.js");
	const { isNully } = await import("./condition/isNully.js");
	const { errorHandle } = await import("./manageError/errorHandle.js");

	const { defaultValues } = await import("./defaultValues.js");

	// ---------------

	const resultConfig = await isNully(apiConfig) ? {} : apiConfig;
	const returnConfig = {};

	if (await conditionCheck(resultConfig, "object", 1)) {

		const getKeys = Object.keys(resultConfig);
		const defaultKeys = Object.keys(defaultValues);

		if (getKeys.length <= defaultKeys.length) {
			
			for await (const key of defaultKeys) {

				if (getKeys.includes(key)) {
					returnConfig[key] = resultConfig[key];
				}

				else if (getKeys.includes(key) === false) {
					returnConfig[key] = defaultValues[key];
				}

			}

			return returnConfig;

		}

		else {
			await errorHandle(5465, "initialValue");
			return false;
		}

	}

	else {
		await errorHandle(7899, "initialValue");
		return false;
	}

}