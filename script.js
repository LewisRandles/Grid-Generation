
import gridGeneration from "./gridGeneration_bundled.js";

// ---------------

const apiConfig = {
	"mode": "current",
	"startDate": "2025-01-01",
	"endDate": "2025-01-02"
};

const result = await gridGeneration(apiConfig);

console.log(result);