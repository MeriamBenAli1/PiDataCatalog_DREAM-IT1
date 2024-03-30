import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetadataImportsComponent } from './metadata-imports.component';

describe('MetadataImportsComponent', () => {
  let component: MetadataImportsComponent;
  let fixture: ComponentFixture<MetadataImportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MetadataImportsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MetadataImportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
