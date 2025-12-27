export async function conditionUndefined (value) {

	const { typeID } = await import("./typeID.js");

	// ---------------

	if (await typeID(value) === "undefined") {
		return true;
	}

	else {
		return false;
	}

}