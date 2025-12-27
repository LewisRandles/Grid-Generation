export async function flatternObject (obj, parent = "", result = {}, seen = new Set()) {

	for await (const key of Object.keys(obj)) {

		const value = obj[key];

		if (value && typeof value === "object" && !Array.isArray(value)) {
			await flatternObject(value, key, result, seen);
		}

		else {
			const newKey = seen.has(key) ? `${parent}.${key}` : key;
			result[newKey] = value;
			seen.add(key);
		}

	}

	return result;

}