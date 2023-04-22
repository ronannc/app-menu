import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {ModalCompanyItemComponent} from './modal-company-item.component';

describe('ModalCompanyItemComponent', () => {
  let component: ModalCompanyItemComponent;
  let fixture: ComponentFixture<ModalCompanyItemComponent>;
  
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ModalCompanyItemComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();
    
    fixture = TestBed.createComponent(ModalCompanyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
