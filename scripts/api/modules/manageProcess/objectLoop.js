export async function objectLoop (obj) {

	const { typeID } = await import("../../../shared/condition/typeID.js");
	const { conditionCheck } = await import("../../../shared/condition/conditionCheck.js");
	const { errorHandle } = await import("../../../shared/manageError/errorHandle.js");

	// ---------------

	if (await errorHandle("status")) {

		if (await conditionCheck(obj, "object") === false) {
			return 0;
		}

		let sum = 0;
		const keys = Object.keys(obj);

		for await (const key of keys) {

			const value = obj[key];
			const getType = await typeID(value);

			let countedType;

			switch (getType) {

				case "string":
				case "number":
				case "bigint":
				case "boolean":
				case "undefined":
				case "array":
				case "null": {
					countedType = await conditionCheck(value, getType, 1);
					break;
				}

				default: {
					countedType = false;
				}

			}

			if (await conditionCheck(value, "object")) {
				sum += await objectLoop(value);
			}

			else if (countedType) {
				sum += 1;
			}

		}

		return sum;

	}

	else {
		await errorHandle(4136, "objectLoop");
		return false;
	}

}