import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterDocumentationComponent } from './ajouter-documentation.component';

describe('AjouterDocumentationComponent', () => {
  let component: AjouterDocumentationComponent;
  let fixture: ComponentFixture<AjouterDocumentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjouterDocumentationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AjouterDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
