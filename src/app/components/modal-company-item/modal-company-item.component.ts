import {Component, OnInit} from '@angular/core';
import {ModalController} from "@ionic/angular";
import {ItemsMenu} from "../../services/companies.service";

@Component({
  selector: 'app-modal-company-item',
  templateUrl: './modal-company-item.component.html',
  styleUrls: ['./modal-company-item.component.scss'],
})
export class ModalCompanyItemComponent implements OnInit {
  
  itemMenu: ItemsMenu = {} as ItemsMenu;
  
  constructor(private modalCtrl: ModalController) { }
  
  ngOnInit() {}
  
  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }
}
