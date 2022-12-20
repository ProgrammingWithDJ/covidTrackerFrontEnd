import { Component, OnInit,Input } from '@angular/core';
import { DataService } from 'src/app/services/data-service.service';
import { Users } from 'src/app/users';
import { ICaseSummary } from 'src/app/Interface/IcaseSummary';  
import { caseSummary } from '../../models/CaseSummary';

@Component({
  selector: 'app-dashboard-cards',
  templateUrl: './dashboard-cards.component.html',
  styleUrls: ['./dashboard-cards.component.css']
})
export class DashboardCardsComponent implements OnInit {


@Input('TotalCases')
TotalCases;
@Input('TotalCasesToday')
TotalCasesToday;
@Input('TotalSurvey')
TotalSurvey;




caseSummarysss: Array<ICaseSummary>;

  constructor(private dataservice: DataService) { }

 

  ngOnInit(): void {

   this.dataservice.getGlobalData()
    .subscribe((data) => {
      
      
      this.caseSummarysss=JSON.parse(JSON.stringify(data));
      console.warn(this.caseSummarysss);
  });
}
}
