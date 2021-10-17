export{}
class Employee{
 employId:number;
 employName:string;
 employNo:number;
 employMail:any;
 employSalary:number;
 constructor(employId:number,employName:string,employNo:number,employMail:any,employSalary:number){
     this.employId=employId;
     this.employName=employName;
     this.employNo=employNo;
     this.employMail=employMail;
     this.employSalary=employSalary;
 }
 getEmployId():number{
     return this.employId;
 }
 getEmployName():string{
     return this.employName;
 }
 getEmployNo():number{
     return this.employNo;
 }
 getEmployMail():any{
     return this.employMail;
 }
 getEmploySalary():number{
     return this.employSalary;
 }
}
let emp=new Employee(100,"Abi",9876543210,"abi@gmail.com",10000);
console.log("Employ Id : " +emp.getEmployId());
console.log("Employ Name : "+emp.getEmployName());
console.log("Employ Number : "+emp.getEmployNo());
console.log("Employ Mail : "+emp.getEmployMail());
console.log("Employ Salary : "+emp.getEmploySalary());
