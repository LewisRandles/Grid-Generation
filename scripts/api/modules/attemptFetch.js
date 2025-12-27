export async function attemptFetch (fetchURL) {

	const { checkResult } = await import("./checkResult.js");
	const { errorHandle } = await import("../../shared/manageError/errorHandle.js");

	// ---------------

	let attempts = 5;
	let success = false;

	while (attempts-- && success === false) {

		try {

			const response = await fetch(fetchURL);

			if (response.ok) {

				success = true;

				const responseValue = await response.text();
				const returnResult = (await checkResult(response, responseValue));

				return returnResult;

			}

			else {
				await errorHandle("warning", "attemptFetch");
			}

		}

		catch (error) {

			if (attempts === 0) {
				await errorHandle(9858, "attemptFetch");
				return false;
			}

		}

		await new Promise((r) => setTimeout(r, 200));

	}

}