export async function findObject (obj, target, path = []) {

	const { validString } = await import("../condition/validString.js");
	const { callObject } = await import("./callObject.js");

	// ---------------

	if (obj && typeof obj === "object") {

		for await (const key of Object.keys(obj)) {

			const value = obj[key];

			const checkTarget = await validString(target) ? String(target).toLowerCase() : false;
			const checkKey = await validString(key) ? String(key).toLowerCase() : false;
			const checkValue = await validString(value) ? String(value).toLowerCase() : false;

			if (checkValue && checkTarget || checkKey && checkTarget) {

				if (checkValue === checkTarget || checkKey === checkTarget) {

					return {
						"parent": obj,
						"path": path.concat(key),
						"value": await callObject(obj, String(path.concat(key).slice(-1)))
					};

				}

			}

			const result = await findObject(value, target, path.concat(key));

			if (result) {
				return result;
			}

		}

	}

	return false;

}