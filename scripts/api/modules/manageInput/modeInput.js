export async function modeInput (modeValue) {

	const { spaceFormat } = await import("../../../shared/spaceFormat.js");
	const { errorHandle } = await import("../../../shared/manageError/errorHandle.js");
	const { patternTest } = await import("../../../shared/patternTest.js");

	// ---------------

	const characterCheck = await patternTest(modeValue, "pattern4", 3177, "modeInput");

	if (characterCheck) {

		const formatValue = (await spaceFormat(String(characterCheck), "singleSpace")).toLowerCase();

		if (formatValue) {

			if (formatValue === "custom" || formatValue === "current") {
				return formatValue;
			}

			else {
				await errorHandle(8972, "modeInput");
				return false;
			}

		}

		else {
			await errorHandle(3118, "modeInput");
			return false;
		}

	}

}