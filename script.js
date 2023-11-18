const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
  console.log("developers:");
  for (const developer of data) {
    console.log(developer);
  }
}

// 2. Add Data
function addData() {
  const newDevName = prompt("Enter developer name:");
  const newDevAge = parseInt(prompt("Enter developer age:"));
  const newDevRole = prompt("Enter developer role:");

  const newDeveloper = {
    name: newDevName,
    age: newDevAge,
    role: newDevRole,
  };

  data.push(newDeveloper);
  console.log("Added new developer:", newDeveloper);
}

// 3. Remove Admins
function removeAdmin() {
  const updatedDevelopers = data.filter((developer) => developer.role !== "admin");
  console.log("Developers after removing admins:", updatedDevelopers);
}

// 4. Concatenate Array
function concatenateArray() {
  const dummyArray = [{ name: "Alice", age: 22, role: "designer" }];
  const combinedArray = data.concat(dummyArray);
  console.log("Combined array:", combinedArray);
}

// 5. Average Age
function averageAge() {
  const totalAge = data.reduce((sum, developer) => sum + developer.age, 0);
  const average = totalAge / data.length;
  console.log("Average age of developers:", average);
}

// 6. Age Check
function checkAgeAbove25() {
  const hasOver25 = data.some((developer) => developer.age > 25);
  console.log("At least one person older than 25:", hasOver25);
}

// 7. Unique Professions
function uniqueProfessions() {
  const uniqueProfessionsSet = new Set(data.map((developer) => developer.role));
  console.log("Unique professions:", [...uniqueProfessionsSet]);
}

// 8. Sort by Age
function sortByAge() {
  const sortedDevelopers = data.sort((a, b) => a.age - b.age);
  console.log("Developers sorted by age:", sortedDevelopers);
}

// 9. Update Profession
function updateJohnsProfession() {
  const updatedDevelopers = data.map((developer) => {
    if (developer.name === "john") {
      developer.profession = "manager";
    }
    return developer;
  });
  console.log("Updated developers with John's profession:", updatedDevelopers);
}

// 10. Profession Count
function getTotalProfessions() {
  const developerCount = data.filter((developer) => developer.profession === "developer").length;
  const adminCount = data.filter((developer) => developer.profession === "admin").length;
  console.log("Total developers:", developerCount);
  console.log("Total admins:", adminCount);

}
// printDeveloper();
// addData();
// removeAdmin();
// concatenateArray();
// averageAge();
// checkAgeAbove25();
// uniqueProfessions();
// sortByAge();
// updateJohnsProfession();
// getTotalProfessions();
