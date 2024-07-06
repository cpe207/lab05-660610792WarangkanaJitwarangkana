function findTopNames(students) {
    var Topstu = students.filter(function (students) { return students.score > 8; });
    return Topstu.map(function (students) { return students.name; }).slice(0, 2);
}
var students1 = [
    { name: "john", score: 10 },
    { name: "jane", score: 9 },
    { name: "jim", score: 8 },
];
console.log(findTopNames(students1));
module.exports = findTopNames;
//warangkana jitwarangkana 660610792
