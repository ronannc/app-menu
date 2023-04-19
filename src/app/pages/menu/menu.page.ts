import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {ActivatedRoute} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";
import {CompaniesService, CompanyItem} from "../../services/companies.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, SharedModule]
})
export class MenuPage implements OnInit {
  params: any = '';
  id: string = '';
  search: string = '';
  companyItems: CompanyItem[] = [];
  
  constructor(
    private actRoute: ActivatedRoute,
    private companiesService: CompaniesService
  ) {
    this.id = this.actRoute.snapshot.paramMap.get('id') as string
  }
  
  ngOnInit() {
  }
  
  ionViewWillEnter() {
    this.getCompanyItems()
  }
  
  getCompanyItems() {
    this.companiesService.getCompanyItems(this.id).subscribe({
      next: (res: any) => {
        this.companyItems.push(...res.data)
        console.log(this.companyItems)
      },
      error: (error: any) => {
      }
    })
  }
  
  searchCompanyItems() {
    this.companiesService.getCompanyItems(this.id, this.search).subscribe({
      next: (res: any) => {
        this.companyItems = res.data
        
      },
      error: (error: any) => {
      }
    })
  }
}
