export async function checkGeneration (nameValue, itemValue, nameTable) {

	const { isNully } = await import("../../../shared/condition/isNully.js");
	const { patternTest } = await import("../../../shared/patternTest.js");
	const { patterns } = await import("../../../shared/manageRegex.js");

	// ---------------

	if (await isNully(itemValue)) {
		return "No Value";
	}

	else {
		itemValue = String(itemValue);
	}

	switch (nameValue) {

		// from
		case nameTable.children.item1.name.altName:

		// to
		case nameTable.children.item2.name.altName: {
			const formatTime = itemValue.replace(patterns.pattern6, "");
			return await patternTest(formatTime, "pattern7", 9805, "checkGeneration");
		}

		// Biomass
		case nameTable.children.item3.name.altName:

		// Coal
		case nameTable.children.item4.name.altName:

		// Gas
		case nameTable.children.item5.name.altName:

		// Hydro
		case nameTable.children.item6.name.altName:

		// Imports
		case nameTable.children.item7.name.altName:

		// Nuclear
		case nameTable.children.item8.name.altName:

		// Other
		case nameTable.children.item9.name.altName:

		// Solar
		case nameTable.children.item10.name.altName:

		// Wind
		case nameTable.children.item11.name.altName:

		// regionid
		case nameTable.children.item13.name.altName:

		// forecast
		case nameTable.children.item15.name.altName: {
			return await patternTest(itemValue, "pattern9", 2106, "checkGeneration");
		}

	}

}