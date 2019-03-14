import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }



  students=[
    {rollno:1,firstName:'Rudra',lastName:"Rudra@hshs",dob:"12/12/2001",teachername:"Rudra",subject:"KANNADA",class:"1",address:"INDIA"},
    // {id:2,name:'Gouda',email:"Goudaa@hshs",phone:"111119393",address:"ASIA"},
    // {id:3,name:'Rudra',email:"Rudra@hshs",phone:"4567899393",address:"INDIA"},
    // {id:4,name:'Gouda',email:"Goudaa@hshs",phone:"111119393",address:"ASIA"},
    // {id:5,name:'Rudra',email:"Rudra@hshs",phone:"4567899393",address:"INDIA"},
    // {id:6,name:'Gouda',email:"Goudaa@hshs",phone:"111119393",address:"ASIA"},
    ];
     
    
    getStudents(){
      return this.students;
    }

    addUpdateStudent(student){
      var updated = false;
      for(var i = 0; i < this.students.length; i++){
        if(student.rollno == this.students[i].rollno){
          updated = true;
          this.students[i] = student;
          break;
        }  
      }
      if(!updated){
        student.id = Math.round(Math.random()*1000000);
         this.students.push(student);
       }
       
    }

    deleteAllStudent(id){
      for(var i = 0; i< this.students.length; i++){
        this.students.splice(i, this.students.length);
        
      }
    }
    deleteStudent(c){
      for(var i = 0; i< this.students.length; i++){
        if(c.rollno == this.students[i].rollno){
          this.students.splice(i, c.rollno);
        }
        
      }
    }

    getStudentById(rollno){
    for(var i=0;i<this.students.length;i++){
      if(this.students[i].rollno==rollno){
        return this.students[i];
      }
    }
    }

}
