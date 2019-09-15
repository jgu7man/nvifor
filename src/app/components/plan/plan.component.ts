import { Component, OnInit } from '@angular/core';
import { PlanesService } from '../../services/planes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {

  public planSection: any
  constructor(
    private _plan: PlanesService,
    private _ruta: ActivatedRoute,
  ) { }

  ngOnInit() {
    this._ruta.params.subscribe(ruta => {
      this.planSection = this._plan.getPlan(ruta['plan']);
      console.log(this.planSection);
    })
  }

}
