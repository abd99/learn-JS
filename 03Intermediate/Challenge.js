// Function to calculate grade
let findGrade = function(marksObtained, totalMarks){
    let percentage = (marksObtained/totalMarks) * 100
    let grade = null
    if (percentage > 90) {
        grade = 'A'
    } else if (percentage <= 90 && percentage > 80) {
        grade = 'B'
    } else if (percentage <= 70 && percentage > 60) {
        grade = 'C'
    } else if (percentage <= 60 && percentage > 50) {
        grade = 'D'
    } else {
        grade = 'F'
    }
    return grade
}

console.log(findGrade(70, 100));
