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
      if(localStorage.getItem('students')!=null)
      this.students=JSON.parse(localStorage.getItem('students'))

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
        localStorage.setItem('students', JSON.stringify(this.students));
      }
      if(!updated){
        student.id = Math.round(Math.random()*1000000);
         this.students.push(student);
       }
       localStorage.setItem('students', JSON.stringify(this.students));
       
    }

    deleteAllStudent(id){
      for(var i = 0; i< this.students.length; i++){
        this.students.splice(i, this.students.length);
        localStorage.setItem('students', JSON.stringify(this.students));
      }
    }
    deleteStudent(c){
      for(var i = 0; i< this.students.length; i++){
        if(c.rollno == this.students[i].rollno){
          this.students.splice(i, c.rollno);
          localStorage.setItem('students', JSON.stringify(this.students));
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
    getTeacherByStudent(teachername){
      for(var i=0;i<this.students.length;i++){
        if(this.students[i].teachername==teachername){
          return this.students
      }else{
        return null;
      }
 }

}
}