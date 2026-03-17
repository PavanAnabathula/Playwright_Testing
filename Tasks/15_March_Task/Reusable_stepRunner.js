function runStep(stepName, actionFn) {
  try {
    // Execute the callback
    const result = actionFn();

    // Return success object
    return {
      stepName,
      passed: true,
      message: result
    };
  } catch (error) {
    // Catch errors and return failure object
    return {
      stepName,
      passed: false,
      message: error.message || String(error)
    };
  }
}

// Example usage
const step1 = runStep("open dashboard", () => "Page loaded");
console.log(step1);

const step2 = runStep("fill form", () => {
  throw new Error("Form not found");
});
console.log(step2);