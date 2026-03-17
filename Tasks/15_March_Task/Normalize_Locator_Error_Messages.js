function normalizeErrorMessage(rawMessage) {
  // Step 1: Trim extra spaces and convert to lowercase
  let normalized = rawMessage.trim().toLowerCase();

  // Step 2: Collapse multiple spaces into a single space
  normalized = normalized.replace(/\s+/g, " ");

  // Step 3: Determine category
  let category;
  if (normalized.includes("timeout")) {
    category = "TIMEOUT";       // TIMEOUT takes priority
  } else if (normalized.includes("locator")) {
    category = "LOCATOR";
  } else {
    category = "GENERAL";
  }

  // Step 4: Print results
  console.log(`Normalized: ${normalized} Category: ${category}`);
}

// Example usage
const rawMessage = " Locator not found after TIMEOUT ";
normalizeErrorMessage(rawMessage);