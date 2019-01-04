import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder} from '@angular/forms';
import { Validators} from '@angular/forms';
import { FormArray} from '@angular/forms';

@Component({
  selector: 'app-profile-editor-formbuilder',
  templateUrl: './profile-editor-formbuilder.component.html',
  styleUrls: ['./profile-editor-formbuilder.component.scss']
})
export class ProfileEditorFormBuilderComponent implements OnInit {

  PassedValues = 'test';
  ControlsList = 'test2';

  constructor(private fb: FormBuilder) { }

  profileFormFormBuilder = this.fb.group(
    {
      firstName: ['', Validators.required],
      lastName: [''],
      address: this.fb.group({
        street: [''],
        city: [''],
        state: [''],
        zip: ['']
      }),
      formAliases: this.fb.array([
        this.fb.control('')
      ])
    }
  );


  onSubmit() {
    console.log(this.profileFormFormBuilder.value);
    this.PassedValues = JSON.stringify(this.profileFormFormBuilder.value, null, 2);

  }

  get formAliases() {
    return this.profileFormFormBuilder.get('formAliases') as FormArray;
  }

  addFormAlias() {
    this.formAliases.push(this.fb.control(''));
    this.ControlsList = JSON.stringify(this.profileFormFormBuilder.getRawValue());
  }

  updateSomeValues() {
    this.profileFormFormBuilder.patchValue({
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
