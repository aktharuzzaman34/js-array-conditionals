// Practice - 01
// A.
var fruits = ['Apples', 'Banana', 'Orange'];
var index = fruits.indexOf('Banana');
console.log(index);
var fruitsChange = fruits[1];
fruits[1] = 'Mango';
console.log(fruits);

B.
    fruits.pop();
console.log(fruits);
fruits.push('Watermelon');
console.log(fruits);


// Practice - 02
// gradding
var totalScore = 100;
var aPlusGradeScore = 90;
var aGradeScore = 80;
var bGradeScore = 60;
var cGradeScore = 50;
var dGradeScore = 40;
var fail = 39;
// student-score
var myTotalScore = 85;
var tomsTotalScore = 66;
var JaneTotalScore = 95;
var peterTotalScore = 56;
var jhonTotalScore = 40;
// My-Gradding
if (aPlusGradeScore <= myTotalScore) {
    console.log('My Score - A+');
}
else if (aGradeScore <= myTotalScore) {
    console.log('My Score - A');
}
else if (bGradeScore <= myTotalScore) {
    console.log('My Score - B');
}
else if (cGradeScore <= myTotalScore) {
    console.log('My Score - C');
}
else if (dGradeScore <= myTotalScore) {
    console.log('My Score - D');
}
else if (fail <= myTotalScore) {
    console.log('My Score - F');
}
else {
    console.log('My Score - F');
}
// TOm's-Gradding
if (aPlusGradeScore <= tomsTotalScore) {
    console.log('Tom Score - A+');
}
else if (aGradeScore <= tomsTotalScore) {
    console.log('Tom Score - A');
}
else if (bGradeScore <= tomsTotalScore) {
    console.log('Tom Score - B');
}
else if (cGradeScore <= tomsTotalScore) {
    console.log('Tom Score - C');
}
else if (dGradeScore <= tomsTotalScore) {
    console.log('Tom Score - D');
}
else if (fail <= tomsTotalScore) {
    console.log('Tom Score - F');
}
else {
    console.log('Tom Score - F');
}
// Jane's-Gradding
if (aPlusGradeScore <= JaneTotalScore) {
    console.log('Jane Score - A+');
}
else if (aGradeScore <= JaneTotalScore) {
    console.log('Jane Score - A');
}
else if (bGradeScore <= JaneTotalScore) {
    console.log('Jane Score - B');
}
else if (cGradeScore <= JaneTotalScore) {
    console.log('Jane Score - C');
}
else if (dGradeScore <= JaneTotalScore) {
    console.log('Jane Score - D');
}
else if (fail <= JaneTotalScore) {
    console.log('Jane Score - F');
}
else {
    console.log('Jane Score - F');
}
// Peter's-Gradding
if (aPlusGradeScore <= peterTotalScore) {
    console.log('Peter Score - A+');
}
else if (aGradeScore <= peterTotalScore) {
    console.log('Peter Score - A');
}
else if (bGradeScore <= peterTotalScore) {
    console.log('Peter Score - B');
}
else if (cGradeScore <= peterTotalScore) {
    console.log('Peter Score - C');
}
else if (dGradeScore <= peterTotalScore) {
    console.log('Peter Score - D');
}
else if (fail <= peterTotalScore) {
    console.log('Peter Score - F');
}
else {
    console.log('Peter Score - F');
}
// Jhon's-Gradding
if (aPlusGradeScore <= jhonTotalScore) {
    console.log('Jhon Score - A+');
}
else if (aGradeScore <= jhonTotalScore) {
    console.log('Jhon Score - A');
}
else if (bGradeScore <= jhonTotalScore) {
    console.log('Jhon Score - B');
}
else if (cGradeScore <= jhonTotalScore) {
    console.log('Jhon Score - C');
}
else if (dGradeScore <= jhonTotalScore) {
    console.log('Jhon Score - D');
}
else if (fail <= jhonTotalScore) {
    console.log('Jhon Score - F');
}
else {
    console.log('Jhon Score - F');
}
