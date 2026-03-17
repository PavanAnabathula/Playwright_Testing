function generateSummary(results) {
  // Initialize counters
  let totalSteps = results.length;
  let passed = 0, failed = 0, skipped = 0;
  let totalDuration = 0;
  let failedSteps = [];

  // Loop through each result
  results.forEach(step => {
    totalDuration += step.durationMs;

    switch(step.status) {
      case "passed":
        passed++;
        break;
      case "failed":
        failed++;
        failedSteps.push(step.name);
        break;
      case "skipped":
        skipped++;
        break;
    }
  });

  // Print summary
  console.log(`Total Steps: ${totalSteps} Passed: ${passed} Failed: ${failed} Skipped: ${skipped} Total Duration: ${totalDuration}ms Failed Steps: ${failedSteps.join(", ")}`);
}

// Example usage
const results = [
  { name: "open login", status: "passed", durationMs: 400 },
  { name: "fill form", status: "failed", durationMs: 700 },
  { name: "submit", status: "skipped", durationMs: 0 }
];

generateSummary(results);