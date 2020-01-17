import { Component, OnInit } from '@angular/core';
import { PenguinModel } from '../models/penguin.model';

@Component({
  selector: 'app-penguin',
  templateUrl: './penguin.component.html',
  styleUrls: ['./penguin.component.scss']
})


export class PenguinComponent implements OnInit {

  selectedPenguin: PenguinModel;

  onPenguinSelected(penguin: PenguinModel) {
    this.selectedPenguin = penguin;
  }

  constructor() { }

  ngOnInit() {
  }

}
