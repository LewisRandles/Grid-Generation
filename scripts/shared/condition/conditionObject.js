export async function conditionObject (value, exception) {

	const { typeID } = await import("./typeID.js");

	// ---------------

	if (await typeID(value) === "object") {

		switch (String(exception)) {

			case "1": {
				return true;
			}

			default: {
				return (Object.keys(value).length > 0 && Object.values(value).length > 0);
			}

		}

	}

	else {
		return false;
	}

}