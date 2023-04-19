import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {CompaniesService} from "../services/companies.service";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [CompaniesService]
})
export class SharedModule {}
