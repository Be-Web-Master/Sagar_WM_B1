let arrResult=[] 
function calculateQuizResults(studentMarks) {
  let totalMarks = 0;
  for (let i = 0; i < studentMarks.length; i++) {
    totalMarks=0;
    for (let j = 0; j < studentMarks[0].length; j++) {
      totalMarks += studentMarks[i][j];
    }
    // if (totalMarks>200) {
    //     arrResult[i]=[totalMarks, "pass"]
    // } else {
    //     arrResult[i]=[totalMarks, "fail"]
    // }
    if (totalMarks > 200) {
        arrResult.push([totalMarks, "pass"])
     } else  arrResult.push([totalMarks, "fail"])
   
  }

}

const studentsMarks = [
  [80, 70, 55],
  [45, 90, 75],
  [70, 60, 65],
];

const result = calculateQuizResults(studentsMarks);
console.log(arrResult);
