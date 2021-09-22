import {Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule  } from '@angular/forms';
import { DataService } from '../database';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  formData: FormGroup = new FormGroup({});

  constructor() { }

  ngOnInit() {
    this.formData.controls = {
      'name': new FormControl(''),
      'email': new FormControl('')
//       this.dataService.getFormGroup;
    }
  }

  onClick() { console.log(this.formData);}
}
