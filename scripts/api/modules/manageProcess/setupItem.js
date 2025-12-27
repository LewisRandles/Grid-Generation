export async function setupItem (loop3) {

	const { errorHandle } = await import("../../../shared/manageError/errorHandle.js");
	const { resultObj } = await import("../manageProcess/resultObj.js");

	// ---------------

	const setName = Object.keys(loop3.loop.storage)[0].toLowerCase();
	const getFolder = setName.charAt(0).toUpperCase() + setName.slice(1);

	const nameValue = setName + "Names";
	const nameImport = (await import(`../manage${getFolder}/${nameValue}.js`));

	const validateValue = loop3.loop.itemData.validate;
	const validateImport = (await import(`../manage${getFolder}/${validateValue}.js`));

	if (await errorHandle("status")) {

		const path = loop3.loop.path;
		const itemData = loop3.loop.itemData;

		if (Number(loop3.loop.childIndex) === 0) {
			if (loop3.loop.parent !== "") {
				if (path.length === 0) {
					path.push(setName);
				}
			}
		}

		if (itemData) {

			const loop4 = {
				"itemData": itemData,
				"value": loop3.data.value,
				"nameValue": nameValue,
				"nameImport": nameImport,
				"validateValue": validateValue,
				"validateImport": validateImport,
				"parentList": loop3.loop.parentList,
				"parentNames": loop3.loop.parentNames,
				"result": loop3.data.result,
				"path": path
			};

			const getObj = await resultObj(loop4);

			if (getObj) {
				return getObj;
			}

			else {
				await errorHandle(1940, "setupItem");
				return false;
			}

		}

		else {
			await errorHandle(7868, "setupItem");
			return false;
		}

	}

	else {
		await errorHandle(6151, "setupItem");
		return false;
	}

}