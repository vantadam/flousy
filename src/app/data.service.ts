import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private incomeData = [
    { source: 'Salary', value: 4000 },
    { source: 'Freelance', value: 1000 },
    { source: 'Investments', value: 500 }
  ];

  private expenseData = [
    { category: 'School', value: 500 },
    { category: 'Rent', value: 1000 },
    { category: 'Food', value: 300 },
    { category: 'Transport', value: 100 },
    { category: 'Misc', value: 200 },
    { category: 'Monthly Subscription', value: 500 }
  ];

  private monthlyData = [
    { month: 'January', income: 5000, expense: 2000 },
    { month: 'February', income: 4500, expense: 2200 },
 
  ];

  constructor() { }

  getIncomeData(): Observable<any[]> {
    return of(this.incomeData);
  }

  getExpenseData(): Observable<any[]> {
    return of(this.expenseData);
  }

  getMonthlyData(): Observable<any[]> {
    return of(this.monthlyData);
  }


}
