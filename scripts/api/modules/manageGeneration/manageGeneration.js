export async function manageGeneration (generation) {

	const { errorHandle } = await import("../../../shared/manageError/errorHandle.js");
	const { getGeneration } = await import("./getGeneration.js");

	// ---------------

	if (!await errorHandle("status")) { return false; }

	const getGenerationValue = await getGeneration(generation);

	if (getGenerationValue) {
		return getGenerationValue;
	}

	else {
		await errorHandle(1311, "manageGeneration");
		return false;
	}

}