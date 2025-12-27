export async function isNully (value) {

	const { typeID } = await import("./typeID.js");
	const { spaceFormat } = await import("../spaceFormat.js");

	// ---------------

	switch (await typeID(value)) {

		case "number": {
			return isNaN(value);
		}

		case "null":
		case "undefined": {
			return true;
		}

		case "string": {
			const formatSpaces = await spaceFormat(String(value), "singleSpace");
			return (formatSpaces.trim().length === 0);
		}

		default: {
			return false;
		}

	}

}