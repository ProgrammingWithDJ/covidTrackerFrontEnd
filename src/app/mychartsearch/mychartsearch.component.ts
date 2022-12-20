import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { CountriesData } from '../countries-data';
import { DataService } from '../services/data-service.service';
import { Users } from '../users';


@Component({
  selector: 'app-mychartsearch',
  templateUrl: './mychartsearch.component.html',
  styleUrls: ['./mychartsearch.component.css']
})
export class MychartsearchComponent implements OnInit {

  countries: CountriesData[];
  constructor(public dataservice: DataService) {}

loadChart(){
  let datatable=[];
  let datlabels=[];
  //datatable.push(["Country","Cases"])
  this.countries.forEach(cs=>{


         //default block statement;
         if(cs.TotalConfirmed>200000)
    datatable.push(
  cs.TotalConfirmed
    )
  })
  this.countries.forEach(cs=>{


    //default block statement;
    if(cs.TotalConfirmed>200000)
datlabels.push(
cs.Country
)
})
  console.log(datatable);
  var myChart = new Chart("myChart", {
    type: 'bar',
    data: {
        //labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        labels:datlabels,
        datasets: [{
            label: 'Number of Cases',

            data:datatable,
            //data: [20000,15000, 4444, 5, 2, 3],
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

  ngOnInit(): void {
    this.dataservice.getGlobalData().subscribe((data: any[])=>{

      this.countries=data['Countries'];

    this.loadChart();

  })

}
}
