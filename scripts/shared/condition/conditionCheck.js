export async function conditionCheck (value, valueType, exception) {

	const { conditionString } = await import("./conditionString.js");
	const { conditionArray } = await import("./conditionArray.js");
	const { conditionObject } = await import("./conditionObject.js");
	const { conditionNumber } = await import("./conditionNumber.js");
	const { conditionBoolean } = await import("./conditionBoolean.js");
	const { conditionUndefined } = await import("./conditionUndefined.js");
	const { conditionNull } = await import("./conditionNull.js");

	// ---------------

	switch (valueType) {

		case "string": {
			return await conditionString(value, exception);
		}

		case "array": {
			return await conditionArray(value, exception);
		}

		case "object": {
			return await conditionObject(value, exception);
		}

		case "number": {
			return await conditionNumber(value, exception);
		}

		case "boolean": {
			return await conditionBoolean(value);
		}

		case "undefined": {
			return await conditionUndefined(value);
		}

		case "null": {
			return await conditionNull(value);
		}

	}

}