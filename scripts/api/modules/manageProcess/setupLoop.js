export async function setupLoop (obj, storage) {

	const { errorHandle } = await import("../../../shared/manageError/errorHandle.js");
	const { flatternObject } = await import("../../../shared/manageObject/flatternObject.js");
	const { innerLoop } = await import("./innerLoop.js");

	// ---------------

	if (await errorHandle("status")) {

		const itemAmount = { "counter": 0 };
		const nameObj = {};

		for await (const nameItem of Object.keys(storage.name)) {

			nameObj[nameItem] = {};

			nameObj[nameItem]["list"] = await Promise.all(Object.values(storage.name[nameItem]).map(async (e) => {
				const setList = await flatternObject(e);
				setList.status = false;
				return setList;
			}));

			nameObj[nameItem]["name"] = await Promise.all(Object.values(nameObj[nameItem].list).map(async (e) => { return e.original; }));

		}

		const loop1 = {
			"itemAmount": itemAmount,
			"childrenList": nameObj.children.list,
			"childrenNames": nameObj.children.name,
			"parentList": nameObj.parents.list,
			"parentNames": nameObj.parents.name
		};

		const loopResult = await innerLoop(loop1, obj, storage);

		if (loopResult) {
			return loopResult;
		}

		else {
			await errorHandle(2233, "setupLoop");
			return false;
		}

	}

	else {
		await errorHandle(8194, "setupLoop");
		return false;
	}

}