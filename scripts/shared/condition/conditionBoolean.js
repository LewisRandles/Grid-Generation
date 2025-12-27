export async function conditionBoolean (value) {

	const { typeID } = await import("./typeID.js");

	// ---------------

	if (await typeID(value) === "boolean") {
		return true;
	}

	else {
		return false;
	}

}