function buildTestUsers(names, roles) {
  // Make sure arrays are the same length
  if (names.length !== roles.length) {
    throw new Error("Names and roles arrays must have the same length");
  }

  // Map each name to a user object
  return names.map((name, index) => {
    const username = name.toLowerCase().replace(/ /g, "_");
    const email = `${username}@playwrightbatch.com`;
    const role = roles[index];

    return { username, email, role };
  });
}

// Example usage
const names = ["Amit Kumar", "Neha Singh"];
const roles = ["admin", "viewer"];

const users = buildTestUsers(names, roles);
console.log(users);