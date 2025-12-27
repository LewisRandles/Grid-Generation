export async function dateFormat (itemValue) {

	const { patterns } = await import("../../../shared/manageRegex.js");
	const { errorHandle } = await import("../../../shared/manageError/errorHandle.js");

	// ---------------

	const formatTimezone = itemValue.replace(patterns.pattern7, "");

	if (patterns.pattern8.test(formatTimezone)) {

		const flipValue = formatTimezone.split("-").reverse().join("-");
		const checkDate = (new Date(flipValue).getDate() ? flipValue : false);

		if (checkDate) {
			return flipValue;
		}

		else {
			await errorHandle(9742, "dateFormat");
			return false;
		}

	}

	else {
		await errorHandle(8988, "dateFormat");
		return false;
	}

}