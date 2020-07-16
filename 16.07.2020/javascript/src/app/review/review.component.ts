import { Component, OnInit } from '@angular/core';
import { FormService } from '../form.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  person: any;


  constructor(private formService: FormService) { }

  ngOnInit(): void {
    this.person = this.formService.form;
    console.log(this.person);
  }

}
