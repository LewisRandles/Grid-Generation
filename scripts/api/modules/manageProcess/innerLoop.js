export async function innerLoop (loop1, obj, storage, parent = "", result = {}, path = []) {

	const { errorHandle } = await import("../../../shared/manageError/errorHandle.js");
	const { loopItem } = await import("./loopItem.js");

	// ---------------

	if (await errorHandle("status")) {

		const childIndex = { "counter": 0 };

		const loop2 = {
			"loop1": loop1,
			"obj": obj,
			"parent": parent,
			"path": path,
			"childIndex": childIndex,
			"storage": storage,
			"result": result
		};

		await loopItem(loop2);

		if (Number(storage.amount) === Number(loop1.itemAmount.counter)) {

			for await (const item of Object.values(loop1.childrenList)) {

				if (item.used === true) {

					if (item.used !== item.status) {
						return false;
					}

				}

			}

			return result;

		}

	}

	else {
		await errorHandle(2902, "innerLoop");
		return false;
	}

}