export async function resultValue (resultItem) {

	const { errorHandle } = await import("./manageError/errorHandle.js");
	const { errorStatus } = await import("./manageError/errorStatus.js");

	// ---------------

	if (await errorHandle("status")) {

		return {
			"status": true,
			"result": resultItem,
			"trace": errorStatus.errorList
		};

	}

	else {

		return {
			"status": false,
			"result": resultItem,
			"trace": errorStatus.errorList
		};

	}

}