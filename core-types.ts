enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Seth",
//   age: 30,
//   hobbies: ["Coding", "Crypto"],
//   role: [2, "author"],
// };

const person = {
  name: "Seth",
  age: 30,
  hobbies: ["Coding", "Crypto"],
  role: Role.ADMIN,
};

let favoriteActivities: string[];
favoriteActivities = ["Coding"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); !!! ERROR !!!
}
