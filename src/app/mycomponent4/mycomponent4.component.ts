import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MessageService } from '../services/message.service';
import { Observable } from 'rxjs';
import { Router, ActivatedRouteSnapshot } from '@angular/router';

declare var google: any;
declare var center: any;
declare var map: any;

@Component({
  selector: 'app-mycomponent4',
  templateUrl: './mycomponent4.component.html',
  styleUrls: ['./mycomponent4.component.css'],
  providers: [MessageService]
})

export class Mycomponent4Component implements OnInit {
  lat: number = 37.769725;
  lng: number = -122.462154;
  public message;
  submitted = false;
  active = true;
  contactForm: FormGroup;
  router: ActivatedRouteSnapshot;

  formErrors = {
    'contact_name': '',
    'contact_email': '',
    'contact_subject': '',
    'contact_message': ''
  };

  validationMessages = {
    'contact_name': {
      'required': 'Name is required.',
      'minlength': 'Name must be at least 4 characters long.',
      'maxlength': 'Name cannot be more than 24 characters long.'
    },
    'contact_email': {
      'required': 'Email is required.',
      'email': 'Email format is not correct.'
    },
    'contact_subject': {
      'required': 'Subject is required.'
    },
    'contact_message': {
      'required': 'Message is required.'
    }
  };

  constructor(private fb: FormBuilder, private messageService: MessageService) { }

  onSubmit() {
    this.submitted = true;
    // this.contact = this.contactForm.value;
  }

  ngOnInit(): void {
    this.buildForm();
    // console.log(this.contactForm);
  }

  buildForm(): void {
    this.contactForm = this.fb.group({
      'contact_name': ['', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(24)
      ]],
      'contact_email': ['', [
        Validators.required,
        Validators.email
      ]],
      'contact_subject': ['', [
        Validators.required
      ]],
      'contact_message': ['', [
        Validators.required
      ]]
    });

    this.contactForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now
  }

  onValueChanged(data?: any) {
    if (!this.contactForm) { return; }
    const form = this.contactForm;
    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  createMessage() {
    let values = {
      name: this.contactForm.value.contact_name,
      email: this.contactForm.value.contact_email,
      subject: this.contactForm.value.contact_subject,
      text: this.contactForm.value.contact_message,
    }

    this.messageService.create(values).subscribe(
      data => {
        // refresh the list
        this.getMessages();
        return true;
      },
      error => {
        console.error("Error saving food!");
        return Observable.throw(error);
      }
    );
  }

  getMessages() {
    return this.messageService.get()
      .map((res: Response) => res.json());
  }

}