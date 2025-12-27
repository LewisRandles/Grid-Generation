export async function patternTest (itemValue, patternItem, errorValue, errorFile) {

	const { errorHandle } = await import("../shared/manageError/errorHandle.js");
	const { patterns } = await import("../shared/manageRegex.js");

	// ---------------

	if (patterns[patternItem].test(itemValue)) {
		return itemValue;
	}

	else {
		await errorHandle(errorValue, errorFile);
		return false;
	}

}