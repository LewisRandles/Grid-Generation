export async function resultObj (loop4) {

	const { errorHandle } = await import("../../../shared/manageError/errorHandle.js");

	// ---------------

	const titleValue = String(loop4.itemData.altName);
	const itemValue = loop4.value;

	const formatCheck = await loop4.validateImport[loop4.validateValue](titleValue, itemValue, loop4.nameImport[loop4.nameValue]);

	if (formatCheck) {

		let object2 = loop4.result;

		for await (const key of loop4.path) {

			if (await errorHandle("status")) {

				let keyName = key;

				if (loop4.parentNames.includes(keyName)) {

					const getParent = loop4.parentList[loop4.parentNames.indexOf(keyName)];

					if (getParent.used) {
						keyName = getParent.altName;
					}

				}

				if (object2[keyName]) {
					object2 = object2[keyName];
				}

				else {
					object2 = object2[keyName] = {};
				}

			}

			else {
				await errorHandle(2093, "resultObj");
				return false;
			}

		}

		object2[loop4.itemData.altName] = formatCheck;

		return loop4.result;

	}

	else {
		await errorHandle(8990, "resultObj");
		return false;
	}

}