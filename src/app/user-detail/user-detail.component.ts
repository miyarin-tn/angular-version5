import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { User, Address, states } from '../data-model';
import { emailValidator } from '../../shared/CustomValidator';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  states = states;
  userFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }
  createForm() {
    this.userFormGroup = this.formBuilder.group({
      name: ['Hoang', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, emailValidator()]],
      addresses: this.formBuilder.group({
        street: ['', [Validators.required]],
        city: '',
        // state: this.states[0],
        state: 'Alaska',
      }),
    });
  }
  ngOnInit() {

  }

}
