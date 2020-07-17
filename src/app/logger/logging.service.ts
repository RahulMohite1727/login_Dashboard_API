import { Injectable } from '@angular/core';
import { saveAs } from 'file-saver';
@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }
  logStatus(message: string) {
    let currentDateTime = new Date()
    let currentDateTimeString = currentDateTime.toDateString() + currentDateTime.getTime();
    console.log(`${currentDateTimeString} :`, message)
    // let temp = `${currentDateTimeString}+ ${message}`
    // console.log("temp ", temp);
    // this.saveLogFile(temp)
  }
  // saveLogFile(log) {
  //   saveAs(new Blob([log], { type: "text" }), 'data.log');
  // }
}
