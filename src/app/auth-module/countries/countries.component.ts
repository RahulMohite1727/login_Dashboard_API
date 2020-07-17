import { Component, OnInit } from '@angular/core';

import { merge } from 'rxjs';
import { map } from 'rxjs/operators';
import { GlobalDataSummary } from '../models/gloabl-data';
import { DateWiseData } from '../models/date-wise-data';
import { DataServiceService } from '../services/data-service.service';
import { LoggingService } from 'src/app/logger/logging.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  data: GlobalDataSummary[];
  countries: string[] = [];
  totalConfirmed = 0;
  totalActive = 0;
  totalDeaths = 0;
  totalRecovered = 0;
  selectedCountryData: DateWiseData[];
  dateWiseData;
  loading = true;
  options: {
    height: 500,
    animation: {
      duration: 1000,
      easing: 'out',
    },
  }

  constructor(private service: DataServiceService,
    private loggingService: LoggingService) { }

  ngOnInit(): void {

    merge(
      this.service.getDateWiseData().pipe(
        map(result => {
          let msg = 'Date wise Data Fetched';
          this.loggingService.logStatus(msg)
          this.dateWiseData = result;
        })
      ),
      this.service.getGlobalData().pipe(map(result => {
        let msg = 'Global Data Fetched';
        this.loggingService.logStatus(msg)
        this.data = result;
        this.data.forEach(cs => {
          this.countries.push(cs.country)
        })
      }))
    ).subscribe(
      {
        complete: () => {
          this.updateValues('India')
          this.loading = false;
        }
      }
    )



  }

  updateChart() {
    let dataTable = [];
    dataTable.push(["Date", 'Cases'])
    let msg = 'Chart Updated';
    this.loggingService.logStatus(msg)
    this.selectedCountryData.forEach(cs => {
      dataTable.push([cs.date, cs.cases])
    })


  }

  updateValues(country: string) {
    let msg = `Data for selected Country : ${country}`;
    this.loggingService.logStatus(msg)
    // console.log(country);
    this.data.forEach(element => {
      if (element.country == country) {
        this.totalActive = element.active
        this.totalDeaths = element.deaths
        this.totalRecovered = element.recovered
        this.totalConfirmed = element.confirmed
      }
    })

    this.selectedCountryData = this.dateWiseData[country]

    // console.log(this.selectedCountryData);
    this.updateChart();

  }

}
