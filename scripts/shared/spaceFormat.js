export async function spaceFormat (value, type) {

	const { patterns } = await import("../shared/manageRegex.js");

	// ---------------

	if (type === "singleSpace") {
		return String(value).replace(patterns.pattern2, " ");
	}

	else if (type === "noSpace") {
		return String(value).replace(patterns.pattern3, "");
	}

	else {
		await errorHandle(5187, "spaceFormat");
		return false;
	}

}