import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ConfigService } from './core/config/config.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let configServiceSpy: jasmine.SpyObj<ConfigService>;

  beforeEach(() => {
    configServiceSpy = jasmine.createSpyObj('ConfigService', ['getConfig']);

    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        RouterTestingModule.withRoutes([]),//Stub
      ],
      providers: [{ provide: ConfigService, useValue: configServiceSpy }]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should display title and config data', () => {
    const apiUrl = 'http://test-api-url';
    const environment = 'test';

    configServiceSpy.getConfig.and.returnValue({ apiUrl, environment });

    fixture.detectChanges();

    const titleElement = fixture.nativeElement.querySelector('h1');
    expect(titleElement.textContent).toContain(component.title);

    const apiUrlElement = fixture.nativeElement.querySelector('p:nth-child(2)');
    expect(apiUrlElement.textContent).toContain(apiUrl);

    const environmentElement = fixture.nativeElement.querySelector('p:nth-child(3)');
    expect(environmentElement.textContent).toContain(environment);
  });
});
