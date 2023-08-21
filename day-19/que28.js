const persons = [
    { name: 'John', age: 45 },
    { name: 'Mary', age: 72 },
    { name: 'Robert', age: 28 },
    { name: 'Elizabeth', age: 59 },
    { name: 'William', age: 67 },
    { name: 'Patricia', age: 51 },
    { name: 'Michael', age: 75 },
    { name: 'Jennifer', age: 32 }
];
// Identify all the persons who are aged more than 60 using filter.
persons.filter((val)=>{
   return val.age>60
})
// Sort the names in ascending order based on their ages.
persons.sort((a,b)=>a.age-b.age)
console.log(persons);
// Determine the individuals who are eligible to vote (age should be above 40).
// for (const key of persons) {
//     if (key.age>40) {
//         console.log(key);
//     }
// }
