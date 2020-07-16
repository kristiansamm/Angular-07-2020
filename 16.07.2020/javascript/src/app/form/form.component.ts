import { Component, OnInit } from '@angular/core';
import { FormService } from '../form.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


  constructor(private formService: FormService, private router: Router) { }

  ngOnInit(): void {
  }

    onSubmit(form:NgForm): void {
    this.formService.form = form.value;
    this.router.navigateByUrl('/review');
  }


}
