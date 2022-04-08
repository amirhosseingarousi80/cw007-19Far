const user = [
  { lName: "hassan", fName: "jafary" },
  { lName: "golam", fName: "dousty" },
];
const fullName = user.map((user) => {
  return user.lName + " " + user.fName;
});
console.log(fullName);