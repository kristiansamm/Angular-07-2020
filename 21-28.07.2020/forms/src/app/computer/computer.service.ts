import { Injectable } from '@angular/core';
import { Computer } from './computer.model';

@Injectable({
  providedIn: 'root'
})
export class ComputerService {

  computers: Computer[] = [
    new Computer(
      "Acer",
      "Mudel 2",
      "2.1GHz",
      "8GB",
      "Hea emaplaat",
      "AMD Radeon™ Vega 8 Graphics"),
    new Computer(
      "Dell",
      "Mudel 6",
      "3.8GHz",
      "16GB",
      "Parem emaplaat",
      "AMD Radeon™ Vega 12 Graphics"), 
    ]
  constructor() { }

  addComputer(computer: Computer): void {
    this.computers.push(computer);
  }

  removeComputer(i: number): void {
    this.computers.splice(i,1);
  }

  editComputer(computer: Computer, id: number): void {
    this.computers[id] = computer;
  }

  getComputer(id: number): Computer {
    return this.computers[id];
  }
  getComputers() {
    return this.computers.slice();
  }
}