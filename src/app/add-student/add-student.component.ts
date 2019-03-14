import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss'],
})
export class AddStudentComponent implements OnInit {
  students = this.studentService.getStudents();
  student = { id:0, firstName:'', lastName:'', address:'',dob:'', class:'',subject:'',teachername:''}
  constructor(private studentService:StudentService,private router:Router ) { }

  ngOnInit() {}
  addUpdateStudent(student){
    this.studentService.addUpdateStudent(student);
    this.router.navigate(['/list-student'])
    this.studentService.getStudents();
  }

}
