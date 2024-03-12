import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierDocumentationComponent } from './modifier-documentation.component';

describe('ModifierDocumentationComponent', () => {
  let component: ModifierDocumentationComponent;
  let fixture: ComponentFixture<ModifierDocumentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifierDocumentationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModifierDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
