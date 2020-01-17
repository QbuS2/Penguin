import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PenguinModel } from '../models/penguin.model';
import { PenguinService } from '../services/penguin.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-penguin-list',
  templateUrl: './penguin-list.component.html',
  styleUrls: ['./penguin-list.component.scss']

})

export class PenguinListComponent implements OnInit {

  routes = { penguin: `${environment.API_URL}/penguins` };

  penguins: PenguinModel[];

  penguins$: Observable<PenguinModel[]>;

  @Output() penguinSelected = new EventEmitter<PenguinModel>();

  constructor(private service: PenguinService, private httpClient: HttpClient) { }

  selectPenguin(penguin: PenguinModel) {
    this.penguinSelected.emit(penguin);
  }

  editPenguin(penguin: PenguinModel) {
    console.log('edycja', penguin.id);
  }

  removePenguin(penguin: PenguinModel) {
    console.log(penguin.id);
  }

  ngOnInit() {

    this.penguins$ = this.service.getAll();

  }

}
