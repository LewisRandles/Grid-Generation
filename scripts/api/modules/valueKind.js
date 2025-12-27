export async function valueKind (checkObject) {

	const { errorHandle } = await import("../../shared/manageError/errorHandle.js");
	const { conditionCheck } = await import("../../shared/condition/conditionCheck.js");

	// ---------------

	const checkState = {};
	const reformed = {};

	for await (const key of Object.keys(checkObject)) { checkState[key] = false; };

	if (await conditionCheck(checkObject, "object")) {

		for await (const key of Object.keys(checkObject)) {

			const currentItem = checkObject[key];

			if (await conditionCheck(currentItem.value, currentItem.type)) {
				checkState[key] = true;
				reformed[key] = currentItem.value;
			}

		}

		if (Object.values(checkState).includes(false)) {
			await errorHandle(5170, "valueKind");
			return false;
		}

		else {
			return reformed;
		}

	}

	else {
		await errorHandle(3960, "valueKind");
		return false;
	}

}