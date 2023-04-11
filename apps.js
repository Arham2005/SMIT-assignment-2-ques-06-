let students = [];
function provideStudents() {
    let std = {
        Name: prompt("Enter Name"),
        RollNo: +prompt("Enter RollNo"),
        Teacher: prompt("Enter Teacher's Name"),
        Course: prompt("Enter Your Course"),
    }
    students.push(std);
    console.log(students);
    let stringify = JSON.stringify(students);
    localStorage.setItem("students", stringify);
}
// provideStudents();
        