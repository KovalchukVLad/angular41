import { Component } from '@angular/core';
import {DataTransferService} from "./services/data-transfer.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ANG41';
  data : any;

  constructor(private dataTranser: DataTransferService) {
    this.dataTranser.store.subscribe(value => this.data = value)
  }

}
