import inquirer from "inquirer";

class Student {
  name: string;
  id: string;
  courses: string[];
  balance: number;

  constructor(name: string) {
      this.name = name;
      this.id = this.generateId();
      this.courses = [];
      this.balance = 0;
  }

  generateId(): string {
      let id = '';
      for(let i = 0; i < 5; i++) {
          id += Math.floor(Math.random() * 10);
      }
      console.log(`Generated ID for ${this.name}: ${id}`);
      return id;
  }

  enroll(course: string): void {
      this.courses.push(course);
      this.balance += 500; // Let's say each course costs $500
      console.log(`${this.name} enrolled in ${course}. Current balance: $${this.balance}`);
  }

  payTuition(amount: number): void {
      this.balance -= amount;
      console.log(`${this.name} paid tuition of $${amount}. Current balance: $${this.balance}`);
  }

  showStatus(): string {
      let status = `Name: ${this.name}, ID: ${this.id}, Courses: ${this.courses.join(', ')}, Balance: $${this.balance}`;
      console.log(status);
      return status;
  }
}

class StudentManagementSystem {
  students: Student[];

  constructor() {
      this.students = [];
  }

  addStudent(name: string): void {
      this.students.push(new Student(name));
      console.log(`Added new student: ${name}`);
  }

  liststudents(){
    console.table(this.students);
  }

  getStudent(id: string): Student | undefined {
      for(let i = 0; i < this.students.length; i++) {
          if(this.students[i].id === id) {
              console.log(`Found student with ID ${id}: ${this.students[i].name}`);
              return this.students[i];
          }
      }
      console.log(`No student found with ID ${id}`);
      return undefined;
  }
}

let sms = new StudentManagementSystem();

console.log("\n++++++++++++++++++++++++++++++++++++");
console.log("Welcome to Student Managment System");
console.log("++++++++++++++++++++++++++++++++++++\n");

while (true) {
  const answers = await inquirer.prompt([
      {
          type: 'list',
          name: 'action',
          message: 'What would you like to do?',
          choices: ['Add student', 'List students','Enroll in course', 'Pay tuition', 'Show status', 'Exit'],
      },
  ]);

  switch (answers.action) {
      case 'Add student':
          const name = await inquirer.prompt([
              {
                  type: 'input',
                  name: 'name',
                  message: 'Enter the name of the student:',
              },
          ]);
          sms.addStudent(name.name);
          // console.log(`Student ${name.name} add with ${sms.students[name].id}`); fix this 

          break;

      case 'List students':
          if(sms.students.length != 0){
            sms.liststudents();
            break;
          }
          else{
            console.log("+++++++++++++++++++++");
            console.log("Student list is empty");
            console.log("+++++++++++++++++++++");
            break;
          }
            

      case 'Enroll in course':
        if(sms.students.length === 0){
            console.log("+++++++++++++++++++++");
            console.log("Student list is empty");
            console.log("+++++++++++++++++++++");
            break;
        }
          const idForEnroll = await inquirer.prompt([
              {
                  type: 'input',
                  name: 'id',
                  message: 'Enter the ID of the student:',
              },
          ]);
          const course = await inquirer.prompt([
              {
                  type: 'input',
                  name: 'course',
                  message: 'Enter the name of the course:',
              },
          ]);
          const studentForEnroll = sms.getStudent(idForEnroll.id);
          if (studentForEnroll) {
              studentForEnroll.enroll(course.course);
          } else {
              console.log('No student found with the given ID.');
          }
          break;
      case 'Pay tuition':
        if(sms.students.length === 0){
          console.log("+++++++++++++++++++++");
          console.log("Student list is empty");
          console.log("+++++++++++++++++++++");
          break;
        }
          const idForPayment = await inquirer.prompt([
              {
                  type: 'input',
                  name: 'id',
                  message: 'Enter the ID of the student:',
              },
          ]);
          const amount = await inquirer.prompt([
              {
                  type: 'input',
                  name: 'amount',
                  message: 'Enter the amount to pay:',
              },
          ]);
          const studentForPayment = sms.getStudent(idForPayment.id);
          if (studentForPayment) {
              studentForPayment.payTuition(parseInt(amount.amount));
          } else {
              console.log('No student found with the given ID.');
          }
          break;
      case 'Show status':
        if(sms.students.length === 0){
          console.log("+++++++++++++++++++++");
          console.log("Student list is empty");
          console.log("+++++++++++++++++++++");
          break;
      }
          const idForStatus = await inquirer.prompt([
              {
                  type: 'input',
                  name: 'id',
                  message: 'Enter the ID of the student:',
              },
          ]);
          const studentForStatus = sms.getStudent(idForStatus.id);
          if (studentForStatus) {
              studentForStatus.showStatus();
          } else {
              console.log('No student found with the given ID.');
          }
          break;
      case 'Exit':
          process.exit();
  }
}