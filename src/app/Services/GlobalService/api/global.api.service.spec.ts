import { TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';
import { APIService } from './global.api.service';
import { ConstantService } from '../../Constants/constant.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('Global Service: HttpApi', () => {

  let apiService: APIService;
  let constant: ConstantService;
  let httpCtrl: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [{ provide: APIService, useClass: APIService },
        ConstantService
      ]
    })
    apiService = TestBed.get(APIService);
    constant = TestBed.get(ConstantService);
    httpCtrl = TestBed.get(HttpTestingController);
  });

    afterEach(() => {
    httpCtrl.verify();
    apiService = null;
    constant = null;
    httpCtrl = null;
    //console.clear();
  });

  function callback() {
    return true;
  }

  it('service should be created', () => {
    expect(apiService).toBeTruthy();
    expect(apiService).toBeDefined();
  });

  it('should have a get http request', () => {
    apiService.GetRequest("/Books", callback).subscribe((res) => {
    });
    let mockReq = httpCtrl.expectOne(constant.apiEndPoint + "/Books");
    expect(mockReq.request.method).toEqual('GET');
    mockReq.flush([]);
  });

  it('should get data response as json', () => {
    const dummy = [{
      "key": 1,
      "value": "Krishna's Key"
    }];
    //Requesting get and moking data
    apiService.GetRequest("/Books", callback).
      subscribe((res: HttpEvent<any>) => {
        switch (res.type) {
          case HttpEventType.Response:
            expect(res.body).toEqual(dummy);
            expect(res.body).toContain(dummy);
        }
      });
    //Mocking and validate response
    let mockReq = httpCtrl.expectOne(constant.apiEndPoint + "/Books");
    expect(mockReq.cancelled).toBeFalsy();
    expect(mockReq.request.responseType).toEqual('json');
    mockReq.flush(dummy);
  });

  it('should have a post http request', () => {
    apiService.PostRequest("/Books", null, callback).subscribe((res) => {
    });
    let mockReq = httpCtrl.expectOne(constant.apiEndPoint + "/Books");
    expect(mockReq.request.method).toEqual('POST');
    mockReq.flush([]);
  }
  );

  it('should post data and return response as json', () => {
    const dummy = [{
      "key": 100,
      "value": "Krishna's Key"
    }];
    //Requesting get and moking data
    apiService.PostRequest("/Books", dummy, callback).
      subscribe(res => {
        expect(res).toEqual(dummy, 'should return data'), fail;
      });
    //Mocking and validate response
    let mockReq = httpCtrl.expectOne(constant.apiEndPoint + "/Books");
    expect(mockReq.cancelled).toBeFalsy();
    expect(mockReq.request.responseType).toEqual('json');
    expect(mockReq.request.body).toBe(dummy);

    const expectedResponse = new HttpResponse({ status: 201, statusText: 'Created', body: dummy });
    mockReq.event(expectedResponse);
    //console.log(mockReq.request.body);
    mockReq.flush(dummy);
  }
  );

  it('should have a delete http request', () => {
    apiService.DeleteRequest("/Books", null, callback).subscribe((res) => {
    });
    let request = httpCtrl.expectOne(constant.apiEndPoint + "/Books/null");
    expect(request.request.method).toEqual('DELETE');
    request.flush([]);
  });
})