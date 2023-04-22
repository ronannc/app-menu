import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule, ModalController} from '@ionic/angular';
import {ActivatedRoute} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";
import {CompaniesService, Company, CompanyItem, ItemsMenu} from "../../services/companies.service";
import {
  ModalCompanyItemComponent
} from "../../components/modal-company-item/modal-company-item.component";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, SharedModule]
})
export class MenuPage implements OnInit {
  id: string = '';
  companyItems: CompanyItem[] = [];
  company: Company = {} as Company;
  flagCompany: Boolean = false;
  flagCompanyItem: Boolean = false;
  
  constructor(
    private actRoute: ActivatedRoute,
    private companiesService: CompaniesService,
    private modalCtrl: ModalController
  ) {
    this.id = this.actRoute.snapshot.paramMap.get('id') as string
  }
  
  
  ngOnInit() {
  
  }
  
  ionViewWillEnter() {
    this.getCompanyItems()
    this.getCompany()
  }
  
  getCompanyItems() {
    this.companiesService.getCompanyItems(this.id).subscribe({
      next: (res: any) => {
        this.companyItems.push(...res.data)
        this.flagCompanyItem = true;
      },
      error: (error: any) => {
      }
    })
  }
  
  getCompany() {
    this.companiesService.getCompany(this.id).subscribe({
      next: (res: Company) => {
        this.company = res
        this.flagCompany = true;
      },
      error: (error: any) => {
      }
    })
  }
  
  searchCompanyItems() {
    this.companiesService.getCompanyItems(this.id).subscribe({
      next: (res: any) => {
        this.companyItems = res.data
      },
      error: (error: any) => {
      }
    })
  }
  
  async openModal(item: ItemsMenu) {
    const modal = await this.modalCtrl.create({
      component: ModalCompanyItemComponent,
      componentProps: {
        itemMenu: item
      }
    });
    await modal.present();
    
    await modal.onWillDismiss();
  }
}
