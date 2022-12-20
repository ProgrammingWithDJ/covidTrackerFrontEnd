import { Component, OnInit } from '@angular/core';
import { GoogleChartInterface } from 'ng2-google-charts';
import { CountriesData } from 'src/app/countries-data';
import { CountrySearch } from 'src/app/country-search';
import { DataGlobalserviceService } from 'src/app/services/data-globalservice.service';
import { DataService } from 'src/app/services/data-service.service';
import { Users } from 'src/app/users';
import Chart from 'chart.js';
@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  users:Users[];

  TotalCases=12;

TotalCasesToday=22;

TotalSurvey=43;



  totalConfirmed=9855;
  totalRecovered=2555;
  totalDeaths=125;
  NewDeaths=81;
  totalActive;
  countries: CountriesData[];
  countrysearch: CountrySearch[];
  countrykk="Please Select a country";
  countryDate="";
  public lineChart: GoogleChartInterface = {
    chartType: 'LineChart'

    }
  CountryName: string;

  constructor(private dataservice: DataService,
    public countryservice: DataGlobalserviceService) { }

    initChart(){

      let datatable=[];
  datatable.push(["Country","Cases"])

  this.countrysearch.forEach(cs=>{
  datatable.push([
        [1, 41.8],
        [2, 30.8],
        [3, 21.8],
        [4, 51.8],
        [5, 71.8],
        [6, 41.8]

  ])
})

    this.lineChart = {
      chartType: 'LineChart',
      dataTable: datatable,
      //firstRowIsData: true,

      options: {
        height:500}

  }
}
  ngOnInit(): void {
    this.dataservice.getGlobalData().subscribe((data: any[])=>{
      this.countries=data['Countries'];
 })


  }
  loadLineChart(countryname: string){
    let datatable=[];
    let datlabels=[];
    //console.log("inside this i" +countryname);
    //datatable.push(["Country","Cases"])
    this.countries.forEach(cs=>{
      if(cs.CountryCode===countryname){
        datatable.push(
          cs.TotalDeaths,cs.TotalConfirmed,cs.TotalRecovered)
      }
    })


    var myChart = new Chart("myChartline", {
      type: 'pie',
      data: {

          labels:['Total Deaths','TotalConfirmed','TotalRecovered'],
          datasets: [{
              label: 'Number of Cases',

              data:datatable,

              backgroundColor: [
                'rgba(240, 52, 52, 1)',
                'rgba(240, 255, 0, 1)',
                'rgba(38, 166, 91, 1)',
                  'rgba(100%, 0%, 0%, 1)',
                  ,
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
  loadVirus(countryname: string){
    let datatable=[];
    let datlabels=[];
    //console.log("inside this i" +countryname);
    //datatable.push(["Country","Cases"])
    console.log(countryname);
    this.countrysearch.forEach(cs=>{

        datatable.push(cs.Confirmed
          )

    })


    var myChart = new Chart("mylinechart", {
      type: 'pie',
      data: {

          labels:['Total Deaths'],
          datasets: [{
              label: 'Number of Cases',

              data:datatable,

              backgroundColor: [
                'rgba(240, 52, 52, 1)',
                'rgba(240, 255, 0, 1)',
                'rgba(38, 166, 91, 1)',
                  'rgba(100%, 0%, 0%, 1)',
                  ,
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







  public updateValues(event): void {  // event will give you full breif of action
    const countrycc = event.target.value;

 this.countries.forEach(cs=>{
  if(cs.CountryCode==countrycc){

    this.NewDeaths= cs.NewDeaths;
    this.totalConfirmed= cs.TotalConfirmed;
    this.totalRecovered= cs.TotalRecovered;
    this.totalDeaths= cs.TotalDeaths;
    this.CountryName=cs.Country;
        }

})
// this.dataservice.getGlobalData().subscribe((data: any[])=>{
//   this.countrysearch=data;

// })
this.loadLineChart(countrycc);
this.countryservice.getCountryData(this.CountryName).subscribe((data: any[])=>{
  this.countrysearch=data;
  //this.loadVirus(this.CountryName);
})

//console.log(this.countrysearch);
//this.initChart();


  }}
