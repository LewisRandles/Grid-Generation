export async function formatLoop (item, mode) {

	const { conditionCheck } = await import("../../../shared/condition/conditionCheck.js");
	const { errorHandle } = await import("../../../shared/manageError/errorHandle.js");
	const { formatItem } = await import("./formatItem.js");

	// ---------------

	const setState = (mode === "current") ? [item] : item;

	if (await errorHandle("status")) {

		if (await conditionCheck(setState, "array")) {

			const newResult = {};
			let index = 0;

			for await (const key of Object.keys(setState)) {

				const value = setState[key];

				if (value !== undefined) {
					newResult[`object${index}`] = await formatItem(value);
				}

				else {
					await errorHandle(5542, "formatLoop");
					return false;
				}

				index++;

			}
			
			return newResult;

		}

		else {
			await errorHandle(2887, "formatLoop");
			return false;
		}

	}

	else {
		await errorHandle(6459, "formatLoop");
		return false;
	}

}