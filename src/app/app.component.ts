import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoadModalComponent } from './components/load-modal/load-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'taskTue';

  constructor(private dialog: MatDialog){}

  ngOnInit(): void {
  }

  openModal(){
    this.dialog.open(LoadModalComponent, {
       minHeight: '400px',
      width: '600px'
    })
  }
}
