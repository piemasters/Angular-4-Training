import { TestBed, async } from '@angular/core/testing';
import { UnitTestComponent } from './unit-test.component';
import { UnitTestUserService } from './user.service';
import { UnitTestDataService } from '../shared/data.service';

describe('UnitTestComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        UnitTestComponent
      ]
    });
    TestBed.compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(UnitTestComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should should use the user name from the service', () => {
    const fixture = TestBed.createComponent(UnitTestComponent);
    const app = fixture.debugElement.componentInstance;
    const userService = fixture.debugElement.injector.get(UnitTestUserService);
    fixture.detectChanges();
    expect(userService.user.name).toEqual(app.user.name);
  });

  it('should display the user name if user is logged in', () => {
    const fixture = TestBed.createComponent(UnitTestComponent);
    const app = fixture.debugElement.componentInstance;
    app.isLoggedIn = true;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain(app.user.name);
  });

  it('should\'t should display the user name if user is not logged in', () => {
    const fixture = TestBed.createComponent(UnitTestComponent);
    const app = fixture.debugElement.componentInstance;
    app.isLoggedIn = false;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).not.toContain(app.user.name);
  });

  it('should\'t fetch data successfully if not called asynchronously', () => {
    const fixture = TestBed.createComponent(UnitTestComponent);
    const app = fixture.debugElement.componentInstance;
    const dataService = fixture.debugElement.injector.get(UnitTestDataService);
    const spy = spyOn(dataService, 'getDetails').and.returnValue(Promise.resolve('Data'));
    fixture.detectChanges();
    expect(app.data).toBe(undefined);
  });

  it('should fetch data successfully if called asynchronously', async(() => {
    const fixture = TestBed.createComponent(UnitTestComponent);
    const app = fixture.debugElement.componentInstance;
    const dataService = fixture.debugElement.injector.get(UnitTestDataService);
    const spy = spyOn(dataService, 'getDetails').and.returnValue(Promise.resolve('Data'));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(app.data).toBe('Data');
    });
  }));

});
