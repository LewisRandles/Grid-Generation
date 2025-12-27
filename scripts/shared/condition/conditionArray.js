export async function conditionArray (value, exception) {

	const { typeID } = await import("./typeID.js");

	// ---------------

	if (await typeID(value) === "array") {

		switch (String(exception)) {

			case "1": {
				return true;
			}

			default: {
				return (value.length !== 0);
			}

		}

	}

	else {
		return false;
	}

}