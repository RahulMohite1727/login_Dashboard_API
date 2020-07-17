import { Component, OnInit } from '@angular/core';
import { GlobalDataSummary } from '../models/gloabl-data';
import { DataServiceService } from '../services/data-service.service';
import { LoggingService } from 'src/app/logger/logging.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  totalConfirmed = 0;
  totalActive = 0;
  totalDeaths = 0;
  totalRecovered = 0;
  loading = true;
  globalData: GlobalDataSummary[];
  datatable = [];
  chart = {
    PieChart: "PieChart",
    ColumnChart: 'ColumnChart',
    LineChart: "LineChart",
    height: 500,
    options: {
      animation: {
        duration: 1000,
        easing: 'out',
      },
      is3D: true
    }
  }


  constructor(private dataService: DataServiceService,
    private loggingService: LoggingService) { }



  ngOnInit(): void {

    this.dataService.getGlobalData()
      .subscribe(
        {
          next: (result) => {
            // console.log(result);
            let msg = 'API called for Global Data';
            this.loggingService.logStatus(msg)
            this.globalData = result;
            result.forEach(element => {
              if (!Number.isNaN(element.confirmed)) {
                this.totalActive += element.active
                this.totalConfirmed += element.confirmed
                this.totalDeaths += element.deaths
                this.totalRecovered += element.active
              }

            })

            this.initChart('c');
          },
          complete: () => {
            this.loading = false;
          }
        }
      )
  }



  updateChart(input: HTMLInputElement) {
    // console.log(input.value);
    let msg = 'Data updated for Selected Case';
    this.loggingService.logStatus(msg)
    this.initChart(input.value)
  }

  initChart(caseType: string) {


    this.datatable = [];
    // this.datatable.push(["Country", "Cases"])

    this.globalData.forEach(element => {
      let value: number;
      if (caseType == 'c')
        if (element.confirmed > 2000)
          value = element.confirmed

      if (caseType == 'a')
        if (element.active > 2000)
          value = element.active
      if (caseType == 'd')
        if (element.deaths > 1000)
          value = element.deaths

      if (caseType == 'r')
        if (element.recovered > 2000)
          value = element.recovered


      this.datatable.push([
        element.country, value
      ])
    })
    // console.log(this.datatable);

  }

}
