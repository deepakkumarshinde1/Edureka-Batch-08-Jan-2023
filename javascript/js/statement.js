// conditional statements
// have you complied your all assignment ==> YES ===> NO
// if ... else => if , if ... else , if.. else if ... else (chaining if else)

var isAllCompleted = true;

if (isAllCompleted == true) {
  console.log("yes");
}

var totalAssignment = 10;
var studentAssignment = 4;

if (totalAssignment == studentAssignment) {
  console.log("yes");
} else {
  console.log("No");
}

// all assignment ==> excellent
// 10 <  assignment >= 5 ==> good

// 5 <  assignment  ==> bad

if (totalAssignment == studentAssignment) {
  console.log("excellent");
} else if (studentAssignment < totalAssignment && studentAssignment >= 5) {
  console.log("good");
} else {
  console.log("bad");
}

// Assignment-1 , Assignment-2 , Assignment-3 => Assignment-3
// switch (choose one value form multiple options)
var assignmentCompleted = "2";
if (typeof assignmentCompleted == "number") {
  switch (assignmentCompleted) {
    case 1:
      console.log("Assignment 1 is completed");
      break;
    case 2:
      console.log("Assignment 2 is completed");
      break;
    case 3:
      console.log("Assignment 3 is completed");
      break;

    default:
      console.log("Invalid Assignment");
  }
} else {
  console.log("Enter a valid Number");
}
