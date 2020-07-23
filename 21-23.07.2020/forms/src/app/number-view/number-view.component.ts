import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-number-view',
  templateUrl: './number-view.component.html',
  styleUrls: ['./number-view.component.css']
})
export class NumberViewComponent implements OnInit {
  index: number;
  generatedNumber: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params)=>{
      this.index = (Number) (params["index"]);
      this.generatedNumber = params["generated"];
  })

}
}