const readline = require('readline');
const nssf_deduction_percentage = 0.06;
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('input gross pay: ', (grossPay) => {
    rl.question('input benefits): ', (benefits) => {
        grossPay = parseFloat(grossPay);
        benefits =parseFloat(benefits);
        let Nhif_Deduction;
        if (grossPay <= 5999) {
            Nhif_Deduction = 150;
          } else if (grossPay <= 7999) {
            Nhif_Deduction = 300;
          } else if (grossPay <= 11999) {
            Nhif_Deduction = 400;
          } else if (grossPay <= 14999) {
            Nhif_Deduction = 500;
          } else if (grossPay <= 19999) {
            Nhif_Deduction = 600;
          } else if (grossPay <= 24999) {
            Nhif_Deduction = 750;
          } else if (grossPay <= 29999) {
            Nhif_Deduction = 850;
          } else if (grossPay <= 34999) {
            Nhif_Deduction = 900;
          } else if (grossPay <= 39999) {
            Nhif_Deduction = 950;
          } else if (grossPay <= 44999) {
            Nhif_Deduction = 1000;
          } else if (grossPay <= 49999) {
            Nhif_Deduction = 1100;
          } else if (grossPay <= 59999) {
            Nhif_Deduction = 1200;
          } else if (grossPay <= 69999) {
            Nhif_Deduction = 1300;
          } else if (grossPay <= 79999) {
            Nhif_Deduction = 1400;
          } else if (grossPay <= 89999) {
            Nhif_Deduction = 1500;
          } else if (grossPay <= 99999) {
            Nhif_Deduction = 1600;
          } else {
            Nhif_Deduction = 1700;
          }
    let grossSalary = grossPay + benefits;
    let nssfDeduction = grossSalary * nssf_deduction_percentage
    let nhifDeduction = Nhif_Deduction

    let tax;
    if (grossPay <= 24000) {
      tax = grossPay * 0.1;
    } else if (grossPay <= 288000) {
      const taxableAmount = grossPay - 24000;
      tax = 2400 + (taxableAmount * 0.25);
    } else {
      const taxableAmount = grossPay - 288000;
      tax = 46200 + (taxableAmount * 0.3);
    }
    const totalDeductions = nhifDeduction + nssfDeduction + tax;
    const netSalary = grossSalary - totalDeductions;
    console.log(`NET SALARY: ${netSalary}`);
    console.log(`NSSF DEDUCTION: ${nssfDeduction}`);
    console.log(`TAX: ${tax}`); 
    console.log(`GROSS SALARY: ${grossSalary}`);
    console.log(`NHIF DEDUCTION: ${nhifDeduction}`);
    
    
    console.log(`TOTAL DEDUCTIONS: ${totalDeductions}`);
    
    rl.close();
    
});
});