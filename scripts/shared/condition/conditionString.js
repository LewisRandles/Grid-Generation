export async function conditionString (value, exception) {

	const { typeID } = await import("./typeID.js");
	const { spaceFormat } = await import("../spaceFormat.js");

	// ---------------

	if (await typeID(value) === "string") {

		const formatSpaces = await spaceFormat(String(value), "singleSpace");

		switch (String(exception)) {

			case "1": {
				return true;
			}

			default: {
				return (formatSpaces.trim().length > 0);
			}

		}

	}

	else {
		return false;
	}

}