export async function validString (value, exception) {

	const { typeID } = await import("./typeID.js");

	const { conditionBoolean } = await import("./conditionBoolean.js");
	const { conditionNumber } = await import("./conditionNumber.js");
	const { conditionString } = await import("./conditionString.js");

	// ---------------

	switch (await typeID(value)) {

		case "number": {
			return await conditionNumber(value, exception);
		}

		case "string": {
			return await conditionString(value, exception);
		}

		case "boolean": {
			return await conditionBoolean(value, exception);
		}

	}

}