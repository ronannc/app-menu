import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {CompaniesService, Company} from "../../services/companies.service";
import {SharedModule} from "../../shared/shared.module";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, SharedModule]
})
export class HomePage implements OnInit {
  
  companies: Company[] = []
  params = {} as any;
  
  constructor(private companiesService: CompaniesService) { }
  
  ngOnInit() {
    this.params.page = 0;
    this.getCompanies()
  }
  
  getCompanies(event?: any) {
    this.params.page += 1;
    
    this.companiesService.getCompanies(this.params).subscribe({
      next: (res: any) => {
        this.companies.push(...res.data)
        
        if (event) event.target.complete();
      },
      error: (error: any) => {
        if (event) event.target.complete();
      }
    })
  }
  
  searchCompanies() {
    this.params.page = 1;
    
    this.companiesService.getCompanies(this.params).subscribe({
      next: (res: any) => {
        this.companies = res.data
        
      },
      error: (error: any) => {
      }
    })
  }
}
