export async function sendProcess (itemStorage) {

	const { errorHandle } = await import("../../shared/manageError/errorHandle.js");
	const { conditionCheck } = await import("../../shared/condition/conditionCheck.js");
	const { setupLoop } = await import("./manageProcess/setupLoop.js");
	const { valueKind } = await import("./valueKind.js");

	// ---------------

	if (await conditionCheck(itemStorage, "object")) {

		const validKind = await valueKind(itemStorage);

		if (validKind) {

			const getName = Object.keys(itemStorage)[0];
			const getResult = await setupLoop(validKind[getName], validKind);

			if (getResult) {
				return getResult;
			}

			else {
				await errorHandle(8361, "sendProcess");
				return false;
			}

		}

		else {
			await errorHandle(9122, "sendProcess");
			return false;
		}

	}

	else {
		await errorHandle(9122, "sendProcess");
		return false;
	}

}