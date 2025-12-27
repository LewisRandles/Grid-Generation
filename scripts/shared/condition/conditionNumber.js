export async function conditionNumber (value, exception) {

	const { typeID } = await import("./typeID.js");

	// ---------------

	if (await typeID(value) === "number") {

		switch (String(exception)) {

			case "1": {
				return true;
			}

			default: {
				return (isNaN(value) === false);
			}

		}

	}

	else {
		return false;
	}

}