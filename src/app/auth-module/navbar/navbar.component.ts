import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoggingService } from 'src/app/logger/logging.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Output() openSidebar = new EventEmitter<boolean>();
  constructor(private loggingService: LoggingService) { }

  ngOnInit() {
  }
  minimizeSidebar() {

    console.log('click');

    this.openSidebar.emit(true);
  }

}
