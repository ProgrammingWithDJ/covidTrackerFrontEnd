import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

import { DataService } from 'src/app/services/data-service.service';
import { GoogleChartInterface } from 'ng2-google-charts';
import { Users } from 'src/app/users';
import { CountriesData } from 'src/app/countries-data';
import Chart from 'chart.js';
import { Subscriber } from 'rxjs';
import { Subscription } from 'rxjs/internal/Subscription';
import { casesModel } from '../../models/CaseModels';
import { caseSummary } from '../../models/CaseSummary';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

worldData;
stringfydata:any;
totalConfirmed=225;
totalRecovered=325;
totalDeaths=125;
NewDeaths=111;
totalActive;


TotalCases=12;

TotalCasesToday=22;

TotalSurvey=43;


public data:any=[];
testUnsubscribe :Subscription;

products = [];

users: Users[];
casesmodel: casesModel[];
countries: CountriesData[];
caseSummary: caseSummary[];

public pieChart: GoogleChartInterface = {
  chartType: 'PieChart'

  }
public columnChart: GoogleChartInterface = {
  chartType: 'ColumnChart'

  }
@Input()
  result$: Observable<any>;


  constructor(public dataservice: DataService) {

  }

   updateRadio(event): void {  // event will give you full breif of action

    const radioOption = event.target.value;

    //this.initChart(radioOption);
    this.loadChart(radioOption);
    this.loadLineChart(radioOption);

  }



  ngOnInit(): void {

  this.testUnsubscribe=  this.dataservice.getGlobalData().subscribe((data: any[])=>{
         this.users=data['Global'];
         this.countries=data['Countries'];


        // this.NewDeaths= this.users.NewDeaths;
        // this.totalConfirmed=this.users.TotalConfirmed;
        // this.totalRecovered=this.users.TotalRecovered;
        // this.totalDeaths=this.users.TotalDeaths;

        //  })


//this.initChart('c');
this.loadChart('c');
this.loadLineChart('c');
    })


  }
  ngOnDestroy() {
    this.testUnsubscribe.unsubscribe();
  }
  loadLineChart(caseType:String){
    let datatable=[];
    let datlabels=[];

    //datatable.push(["Country","Cases"])
    this.countries.forEach(cs=>{


           //default block statement;
           if(caseType==='c')
           if(cs.TotalConfirmed>2000000)
      datatable.push(
    cs.TotalConfirmed),
    datlabels.push(
      cs.Country
      )

      if(caseType==='r')
      if(cs.TotalRecovered>200000)
 datatable.push(
cs.TotalRecovered),
datlabels.push(
 cs.Country
 )

 if(caseType==='a')
 if(cs.TotalRecovered>200000)
datatable.push(
cs.NewDeaths),
datlabels.push(
cs.Country
)

if(caseType==='d')
if(cs.TotalRecovered>200000)
datatable.push(
cs.TotalDeaths),
datlabels.push(
cs.Country
)


    })

    var myChart = new Chart("myChartline", {
      type: 'bar',
      data: {

          labels:datlabels,
          datasets: [{
              label: 'Number of Cases',

              data:datatable,

              backgroundColor: [
                'rgba(1, 152, 117, 1)',
                  'rgba(100%, 0%, 0%, 1)',
                  'rgba(82, 179, 217, 1)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [

              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
  });
  }



  loadChart(caseType: string){
    let datatable=[];
    let datlabels=[];
    //datatable.push(["Country","Cases"])
    this.countries.forEach(cs=>{


           //default block statement;
           if(caseType==='c')
           if(cs.TotalConfirmed>200000)
      datatable.push(
    cs.TotalConfirmed),
    datlabels.push(
      cs.Country
      )

      if(caseType==='r')
      if(cs.TotalRecovered>200000)
 datatable.push(
cs.TotalRecovered),
datlabels.push(
 cs.Country
 )

 if(caseType==='a')
 if(cs.TotalRecovered>200000)
datatable.push(
cs.NewDeaths),
datlabels.push(
cs.Country
)

if(caseType==='d')
if(cs.TotalRecovered>200000)
datatable.push(
cs.TotalDeaths),
datlabels.push(
cs.Country
)


    })

    var myChart = new Chart("myChart", {
      type: 'bar',
      data: {

          labels:datlabels,
          datasets: [{
              label: 'Number of Case  s',

              data:datatable,

              backgroundColor: [
                'rgba(1, 152, 117, 1)',
                  'rgba(100%, 0%, 0%, 1)',
                  'rgba(82, 179, 217, 1)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [

              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
  });
  }


}
