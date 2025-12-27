export async function typeID (value) {

	const { patterns } = await import("../manageRegex.js");

	// ---------------

	const defaultFormat = Object.prototype.toString.call(value);

	return defaultFormat.split(" ")[1].replace(patterns.pattern1, "").toLowerCase();

}