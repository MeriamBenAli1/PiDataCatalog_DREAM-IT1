import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDocumentationComponent } from './list-documentation.component';

describe('ListDocumentationComponent', () => {
  let component: ListDocumentationComponent;
  let fixture: ComponentFixture<ListDocumentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListDocumentationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
