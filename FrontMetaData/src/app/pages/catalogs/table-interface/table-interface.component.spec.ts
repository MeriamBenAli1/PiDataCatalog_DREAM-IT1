import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableInterfaceComponent } from './table-interface.component';

describe('TableInterfaceComponent', () => {
  let component: TableInterfaceComponent;
  let fixture: ComponentFixture<TableInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableInterfaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
