import { Component, OnInit } from '@angular/core';
import { Requetes_stages } from 'src/app/interfaces/requetes_stages';
import { RequetesStagesService } from 'src/app/services/requetes-stages.service';


@Component({
  selector: 'app-demandes-stages',
  templateUrl: './demandes-stages.component.html',
  styleUrls: ['./demandes-stages.component.sass']
})
export class DemandesStagesComponent implements OnInit {
  requetesStage: Requetes_stages[] = [];

  constructor(private requetesStagesService: RequetesStagesService) {}

  ngOnInit(): void {
    this.getRequetestages();
  }

  getRequetestages(): void {
    this.requetesStagesService
      .getRequetesStages()
      .subscribe((res) => (this.requetesStage = res));
  }
}
