const person = {
  name: "Seth",
  age: 30,
  hobbies: ["Coding", "Crypto"],
};

let favoriteActivities: string[];
favoriteActivities = ["Coding"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); !!! ERROR !!!
}
