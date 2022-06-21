import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent implements OnInit {

  @Input() valueBg:string='';
  public error:boolean=true;
  public nombre:string='David';
  public apellido:string='Casa';
  public descripcion:string='Soy DevOps';
  public ListUsers=[
    {"nombre":"David","apellido":"Casa","edad":18, "ft":12},
    {"nombre":"Pedro","apellido":"Castellano","edad":15, "ft":10},
    {"nombre":"Luis","apellido":"Ruiz","edad":21, "ft":9},
    {"nombre":"Javier","apellido":"Endara","edad":65, "ft":15},
  ]
  constructor() { }

  ngOnInit(): void {
    console.log(this.valueBg);
  }

}
