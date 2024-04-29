import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnMetadataComponent } from './column-metadata.component';

describe('ColumnMetadataComponent', () => {
  let component: ColumnMetadataComponent;
  let fixture: ComponentFixture<ColumnMetadataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColumnMetadataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColumnMetadataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
