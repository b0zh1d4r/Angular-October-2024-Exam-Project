import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  isEditMode = false;

  editForm = new FormGroup({
    username: new FormControl('John', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
    email: new FormControl('john.doe@example.com', [Validators.required, Validators.email])
  });

  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
  }

  saveChanges() {
    if (this.editForm.valid) {
      console.log('Form data:', this.editForm.value);
      this.toggleEditMode();
    }
  }
}
