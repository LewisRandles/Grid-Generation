export async function loopItem (loop2) {

	const { errorHandle } = await import("../../../shared/manageError/errorHandle.js");
	const { conditionCheck } = await import("../../../shared/condition/conditionCheck.js");
	const { setupItem } = await import("./setupItem.js");
	const { innerLoop } = await import("../manageProcess/innerLoop.js");

	// ---------------

	for await (const key of Object.keys(loop2.obj)) {
		
		if (await errorHandle("status")) {

			let value = loop2.obj[key];

			if (await conditionCheck(value, "array")) {
				value = String(value);
			}

			if (!await conditionCheck(value, "object") && !await conditionCheck(value, "array")) {

				let passCondition;
				let nameVariants;
				let processed;

				if (loop2.loop1.childrenNames.includes(key)) {

					nameVariants = loop2.loop1.childrenList[loop2.loop1.childrenNames.indexOf(key)];

					if (nameVariants.used) {

						loop2.parent = loop2.parent === "" ? Object.keys(loop2.storage)[0] : String(loop2.parent);

						const loop3 = {

							"loop": {
								"parent": loop2.parent,
								"storage": loop2.storage,
								"childIndex": loop2.childIndex.counter,
								"path": loop2.path,
								"itemData": nameVariants,
								"parentList": loop2.loop1.parentList,
								"parentNames": loop2.loop1.parentNames
							},

							"data": {
								"value": value,
								"result": loop2.result
							}

						};

						processed = await setupItem(loop3);

						if (processed) {
							passCondition = "validPass";
						}

						else {
							await errorHandle(4313, "loopItem");
							return false;
						}

					}

					else {
						passCondition = "ignorePass";
					}

				}

				else {
					passCondition = "ignorePass";
				}

				loop2.loop1.itemAmount.counter++;
				
				if (passCondition === "validPass") {
					nameVariants.status = true;
					loop2.result = processed;
					loop2.childIndex.counter++;
				}

				else if (passCondition === "ignorePass") {
					loop2.childIndex.counter++;
				}

				else {
					await errorHandle(9561, "loopItem");
				}

			}

			else if (await conditionCheck(value, "object")) {
				await innerLoop(loop2.loop1, value, loop2.storage, key, loop2.result, loop2.path.concat(key));
			}

		}

		else {
			await errorHandle(8849, "loopItem");
			return false;
		}

	}

}