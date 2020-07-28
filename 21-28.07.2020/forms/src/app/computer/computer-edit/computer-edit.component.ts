import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ComputerService } from '../computer.service';
import { Computer } from '../computer.model';

@Component({
  selector: 'app-computer-edit',
  templateUrl: './computer-edit.component.html',
  styleUrls: ['./computer-edit.component.css']
})
export class ComputerEditComponent implements OnInit {
  computerEditForm: FormGroup;
  id: number;

  constructor(
    private route: ActivatedRoute, 
    private computerService: ComputerService, 
    private router: Router
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params)=>{
      this.id = params['id'];
    })

    var computer: Computer = this.computerService.getComputer(this.id);

    this.computerEditForm = new FormGroup({
      producer: new FormControl(computer.producer),
      model: new FormControl(computer.model),
      processor: new FormControl(computer.processor),
      ram: new FormControl(computer.ram),
      motherboard: new FormControl(computer.motherboard),
      graphic_card: new FormControl(computer.graphic_card),
    })
  }

  onSubmit(computerEditForm: FormGroup): void {
    this.computerService.editComputer(computerEditForm.value, this.id);
    this.router.navigateByUrl("/computer");
  }
}