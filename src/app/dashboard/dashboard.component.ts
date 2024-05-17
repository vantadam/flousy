import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public incomePieChartData: any[] = [];
  public expensePieChartData: any[] = [];
  public monthlyBarChartData: any[] = [];
  public overallBarChartData: any[] = [];

  view: [number, number] = [700, 400];

  showLegend = true;
  showLabels = true;
  isDoughnut = false;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getIncomeData().subscribe(data => {
      this.incomePieChartData = data.map(item => ({
        name: item.source,
        value: item.value
      }));
    });

    this.dataService.getExpenseData().subscribe(data => {
      this.expensePieChartData = data.map(item => ({
        name: item.category,
        value: item.value
      }));
    });

    this.dataService.getMonthlyData().subscribe(data => {
   

      const totalIncome = data.reduce((acc, curr) => acc + curr.income, 0);
      const totalExpense = data.reduce((acc, curr) => acc + curr.expense, 0);

      this.overallBarChartData = [
        { name: 'Total Income', value: totalIncome },
        { name: 'Total Expense', value: totalExpense }
      ];
    });
  }
}

