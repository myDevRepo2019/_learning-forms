import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.scss']
})
export class ProfileEditorComponent implements OnInit {

  PassedValues = 'test';

  constructor() { }

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    }

    )
  });

  onSubmit() {
    console.log(this.profileForm.value);
    this.PassedValues = JSON.stringify(this.profileForm.value, null, 2);

  }

  updateSomeValues() {
    this.profileForm.patchValue({
      lastName: 'Smith',
      address: {
        city: 'Detroit'
      }
    }
    );
  }

  ngOnInit() {
  }

}
