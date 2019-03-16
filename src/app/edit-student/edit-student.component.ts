import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss'],
})
export class EditStudentComponent implements OnInit {

  constructor(private route: ActivatedRoute,private studentService:StudentService,private router:Router ) { }
  rollno: number;
  private sub: any;
  student:any;

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.rollno = +params['rollno']; // (+) converts string 'id' to a number
      console.log("rollno is "+this.rollno);
      this.student = this.studentService.getStudentById(this.rollno);
 
  });

}
addUpdateStudent(student){
  this.studentService.addUpdateStudent(student);
    this.router.navigate(['/list-student'])
    this.studentService.getStudents();
}


}
