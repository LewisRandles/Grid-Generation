export async function formError (errorID, fileName) {

	const { errorStatus } = await import("./errorStatus.js");

	// ---------------

	fileName = (fileName === "unknown") ? "unknown" : `${fileName}.js`;

	const err = new Error();
	const stackTrace = err.stack;
	
	const getLines = stackTrace.toString().match(/([A-Za-z0-9_$-]+) \(([^)]+)\)/g);
	
	getLines.splice(0, 2);

	const lineArray = [];

	for await (const line of getLines) {
		const splitLine = line.split(" ");
		const getFunction = splitLine[0];
		const getFile = splitLine[1].replace(/[()]/g, "").split("/");
		const stripLine = getFile[getFile.length - 1].split(":")[0];
		lineArray.push({ "function": getFunction, "file": stripLine });
	}

	const formError = {
		"code": errorID,
		"functionName": lineArray[0].function,
		"currentName": lineArray[0].file,
		"originalName": fileName
	};

	console.log(formError);

	if (errorID !== "warning") {
		errorStatus.status = false;
	}

	errorStatus.lastError = formError;
	errorStatus.errorList.push(formError);

}