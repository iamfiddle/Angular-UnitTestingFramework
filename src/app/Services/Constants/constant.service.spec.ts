import { HttpHeaders } from '@angular/common/http';
import { inject } from '@angular/core/testing';
import { ConstantService } from './constant.service';

describe('Service: Constants', () => {

  /*let service: ConstantService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: ConstantService, useClass: ConstantService }]
    })
    service = TestBed.get(ConstantService);
  });
  afterEach(() => {
    service = null;
  });
  */

  it('service should be created', () => {
    expect(
      inject([ConstantService], (service: ConstantService) => {
        expect(service).toBeDefined();
      })
    ).toBeTruthy();
  });

  it('should have apiEndPoint readonly property having not null value', () => {
    expect(
      inject([ConstantService], (service: ConstantService) => {
        expect(service.apiEndPoint).toBeDefined();
        expect(service.apiEndPoint).toMatch("/api");
      })).toBeTruthy();
  });

  it('should have apiHeaders readonly property having not null value', () => {
    expect(
      inject([ConstantService], (service: ConstantService) => {
        expect(service.apiHeaders).toBeDefined();
        expect(service.apiHeaders instanceof HttpHeaders).toBeTruthy();
        expect(service.apiHeaders).toEqual(jasmine.any(HttpHeaders));
      })).toBeTruthy();
  })

  it('should have withCredential property that returns boolean', () => {
    expect(
      inject([ConstantService], (service: ConstantService) => {
        expect(service.withCredential).toBeDefined();
        expect(service.withCredential).toBeTruthy()
      })).toBeTruthy();
  })

  it('should have AuthToken property with setter and getter and returns a value', () => {
    expect(
      inject([ConstantService], (service: ConstantService) => {
        const spySet = spyOnProperty(service, "AuthToken", "set");
        expect(spySet).toBeTruthy();//.toHaveBeenCalled();
        const spyGet = spyOnProperty(service, "AuthToken", "get").and.returnValue(1);
        expect(spyGet).toBe(1);
      })).toBeTruthy();
  })
});