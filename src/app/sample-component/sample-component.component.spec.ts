import { FormBuilder, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { ConstantService } from './../Services/Constants/constant.service';
import { HttpClientModule } from '@angular/common/http';
import { APIService } from './../Services/GlobalService/api/global.api.service';
import { LogConsole } from './../Services/GlobalService/Log/log-console';
import { LogMaster } from './../Services/GlobalService/Log/global-logging.service';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { SampleComponentComponent } from './sample-component.component';

describe('Component: GeneralComponent', () => {
  let component: SampleComponentComponent;
  let fixture: ComponentFixture<SampleComponentComponent>;
  let apiService: APIService;
  let submitEl: any;

  beforeEach(async(
    () => {
      TestBed.configureTestingModule({
        declarations: [SampleComponentComponent],
        providers: [LogMaster, LogConsole, APIService, ConstantService, FormBuilder],
        imports: [HttpClientModule, ReactiveFormsModule]
      })
        .compileComponents();
    }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleComponentComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();

    apiService = TestBed.get(APIService);
    submitEl = fixture.debugElement
  });

  it('should have a defined component', () => {
    //if component is created
    expect(component).toBeDefined();
  });

  it('should invalid when form is empty', () => {
    expect(component.loginForm.valid).toBeFalsy();
    expect(submitEl.nativeElement.querySelector('button').disabled).toBeTruthy();
  });

  it('should inject api service dependency', () => {
    expect(
      inject([APIService], (api: APIService) => {
        expect(apiService).toBe(api);
      })).toBeTruthy();
  });

  it('should create a FormGroup having FormControls', () => {
    component.ngOnInit();
    expect(component.loginForm instanceof FormGroup).toBe(true);

    //expect(component.loginForm.controls['fcUserName'] instanceof FormControl).toBe(true);
    Object.keys(component.loginForm.controls).forEach(key => {
      expect(component.loginForm.controls[key] instanceof FormControl).toBe(true);
    });
  });

  it('should return true only if the form control is valid', () => {
    //Validating Required field validation
    component.loginForm.controls['fcUserName'].setValue('');
    component.loginForm.controls['fcUserPwd'].setValue('');
    component.loginForm.controls['fcDomain'].setValue('');
    fixture.detectChanges();
    expect(component.loginForm.valid).toBeFalsy();

    //Validating MinLength validation
    component.loginForm.controls['fcUserName'].setValue('fm\singsho');
    component.loginForm.controls['fcUserPwd'].setValue('password');
    component.loginForm.controls['fcDomain'].setValue('FM');
    fixture.detectChanges();
    expect(component.loginForm.get('fcUserName').value.length).toBeGreaterThanOrEqual(4);
    expect(component.loginForm.get('fcUserPwd').value.length).toBeGreaterThanOrEqual(8);
    expect(component.loginForm.get('fcDomain').value.length).not.toBeUndefined();

    //Submit button should be enabeld if form is valid
    expect(submitEl.nativeElement.querySelector('button').disabled).toBeFalsy();
  });

  it('should get the payload on form submit', () => {
    component.loginForm.controls['fcUserName'].setValue('fm\singsho');
    component.loginForm.controls['fcUserPwd'].setValue('password');
    component.loginForm.controls['fcDomain'].setValue('FM');
    component.OnClick();
    expect(component.payload).toEqual(JSON.stringify({}));
    expect(component.payload).not.toBeUndefined();
  });
});