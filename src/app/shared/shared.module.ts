import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {CompaniesService} from "../services/companies.service";
import {RouterModule} from "@angular/router";
import {
  ModalCompanyItemComponent
} from "../components/modal-company-item/modal-company-item.component";
import {IonicModule} from "@ionic/angular";


@NgModule({
  declarations: [ModalCompanyItemComponent],
  exports: [RouterModule],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    IonicModule
  ],
  providers: [CompaniesService]
})
export class SharedModule {}
