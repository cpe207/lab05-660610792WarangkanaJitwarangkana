  interface Students{
    name: String,
    score: number,
  }

function findTopNames(students:Students[]) {
  const Topstu = students.filter(students => students.score>8);
  return Topstu.map(students => students.name).slice(0, 2);
}

const students1 = [
  { name: "john", score: 10 },
  { name: "jane", score: 9 },
  { name: "jim", score: 8 },
];

console.log(findTopNames(students1));

module.exports = findTopNames;

//warangkana jitwarangkana 660610792