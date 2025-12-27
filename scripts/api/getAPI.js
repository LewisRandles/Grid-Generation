export async function getAPI (apiConfig) {

	const { manageGeneration } = await import("./modules/manageGeneration/manageGeneration.js");
	const { errorHandle } = await import("../shared/manageError/errorHandle.js");

	// ---------------

	const getGeneration = await manageGeneration(apiConfig);

	if (!await errorHandle("status")) { return false; }

	return {
		"generation": getGeneration
	};

}