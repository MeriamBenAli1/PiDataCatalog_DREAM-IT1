import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ChartComponent } from './chart.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        ChartComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ChartComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-charts-youtube'`, () => {
    const fixture = TestBed.createComponent(ChartComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-charts-youtube');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(ChartComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('angular-charts-youtube app is running!');
  });
});
