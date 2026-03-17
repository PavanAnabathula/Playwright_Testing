function planBrowserExecution(allBrowsers, blockedBrowsers) {
  // Determine runnable browsers (those not in blockedBrowsers)
  const runnable = allBrowsers.filter(browser => !blockedBrowsers.includes(browser));

  // Plan string
  const plan = `Run on: ${runnable.join(", ")} | Skip: ${blockedBrowsers.join(", ")}`;

  // Return structured object
  return {
    runnable,
    blocked: blockedBrowsers,
    plan
  };
}

// Example usage
const allBrowsers = ["chromium", "firefox", "webkit"];
const blockedBrowsers = ["firefox"];

const executionPlan = planBrowserExecution(allBrowsers, blockedBrowsers);
console.log(executionPlan);