import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.scss'],
})
export class ListStudentComponent implements OnInit {
  list=[];
  student: any = { rollno:0, firstName:'', lasttName:'', address:'', class:'', subject:'', teachername:'', dob:'',}
  constructor(private studentService:StudentService, private router:Router ) { }

  ngOnInit() {

    this.list=this.studentService.getStudents();
  }
  deleteAllStudent(student){
    this.studentService.deleteAllStudent(student);
    this.studentService.getStudents();

  }
  deleteStudent(s){
    this.studentService.deleteStudent(s);

  }
  onEdit(s){
    this.router.navigate(['/editstudent/'+s.rollno]);
  }
}
