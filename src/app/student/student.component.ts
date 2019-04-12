import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
})
export class StudentComponent implements OnInit {

  private selectedItem: any;
  private icons = [
    'people',
    'person-add',
  ];
  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor(private router: Router,private camera: Camera) {
  	this.items.push({
  		title: 'Student List',
        note:'/list-student',
        icon: this.icons[0]
  	});
  	this.items.push({
  		title: 'Add Student',
  		note:'/add-student',
      icon: this.icons[1]
    });
  }
  openUrl(item){
    this.router.navigate([item.note]);
  }

  ngOnInit() {}
}

