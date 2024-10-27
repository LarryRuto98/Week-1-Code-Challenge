const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function calculateGrade() {
    readline.question("Input student mark ranging from 0 to 100.", (input) => {
      let marks = Number(input);
  
      
      if (marks < 0 || marks > 100) {
        console.log("Invalid marks enter a number ranging from 0 to 100.");
        readline.close();
        return;
      }
     
    let grade;
      if (marks > 79){ 
        grade = "A";
      } else if (marks >= 60 && marks <=79 ) {
        grade = "B";
      } else if (marks >= 50 && marks <=59) {
        grade = "C";
      } else if (marks >= 40 && marks <=49) {
        grade = "D"
      } else {
        grade = "E";
      }
    
      console.log(`student grade is ${grade}.`);
      readline.close();
    });
  }
  calculateGrade();