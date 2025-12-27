export async function conditionNull (value) {

	const { typeID } = await import("./typeID.js");

	// ---------------

	if (await typeID(value) === "null") {
		return true;
	}

	else {
		return false;
	}

}