import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMetadataDialogComponent } from './add-metadata-dialog.component';

describe('AddMetadataDialogComponent', () => {
  let component: AddMetadataDialogComponent;
  let fixture: ComponentFixture<AddMetadataDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddMetadataDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddMetadataDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
