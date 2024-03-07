import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationAssetsComponent } from './information-assets.component';

describe('InformationAssetsComponent', () => {
  let component: InformationAssetsComponent;
  let fixture: ComponentFixture<InformationAssetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformationAssetsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InformationAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
