export async function errorHandle (errorID, fileName) {

	const { errorStatus } = await import("./errorStatus.js");
	const { formError } = await import("./formError.js");
	const { isNully } = await import("../condition/isNully.js");

	// ---------------

	if (!await isNully(errorID)) {

		if (errorID === "status") {
			return errorStatus.status ? true : false;
		}

		if (!await isNully(fileName)) {

			if (errorID === "warning") {
				await formError(errorID, fileName);
			}

			else if (errorID >= 1111 && errorID <= 9999) {
				await formError(errorID, fileName);
			}

			else {
				await formError("unknown", "unknown");
			}

		}

	}

	else {
		await formError("unknown", "unknown");
	}

}