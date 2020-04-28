import { LogMaster } from './../global-logging.service';
import { TestBed } from '@angular/core/testing';
import { LogType } from '../log-constants';

describe('Global Service: HttpApi', () => {

  let logMaster: LogMaster;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [{ provide: LogMaster, useClass: LogMaster }]
    })
    logMaster = TestBed.get(LogMaster);
  });

  afterEach(() => {
    logMaster = null;
  });

  it('service should be created', () => {
    expect(logMaster).toBeTruthy();
  });

  it('should have message property with getter and setter', () => {
    let spySet = spyOnProperty(logMaster, "Message", "set");
    expect(spySet).toBeDefined();

    let spyGet = spyOnProperty(logMaster, "Message", "get").and.returnValue("");
    expect(spyGet).toBeTruthy();

  });

  it('should have message property with getter and setter', () => {
    let spySet = spyOnProperty(logMaster, "ExtraInfo", "set");
    logMaster.ExtraInfo = [];
    expect(spySet).toHaveBeenCalled();

    let spyGet = spyOnProperty(logMaster, "ExtraInfo", "get").and.returnValue("");
    //expect(spyGet).toBeTruthy();
    expect(logMaster.ExtraInfo).toBe("");
  });

  it('should have LogWithDate property with getter', () => {
    //let spySet = spyOnProperty(logMaster, "LogWithDate", "set");
    //expect(spySet).toBeUndefined();
    //spyOn(logMaster, 'property', 'get');//.mockReturnValue('mockedValue');

    let spyGet = spyOnProperty(logMaster, "LogWithDate", "get").and.returnValue(true);
    expect(logMaster.LogWithDate).toBeTruthy();
  });

  it('should have EntryDate property with getter', () => {
    let spyGet = spyOnProperty(logMaster, "EntryDate", "get").and.returnValue(new Date());
    expect(logMaster.EntryDate).toEqual(new Date());
  });

  it('should build log messages if log type is significant', () => {
    logMaster.Message="Info to be login";
    logMaster.ExtraInfo=["Aditional", "info"];
    logMaster.BuildLogMessage(LogType.All)
    
    let spy=spyOn(logMaster, "BuildLogMessage").and.callThrough();
    expect(logMaster.BuildLogMessage).not.toBeNull();
    expect(logMaster.BuildLogMessage).not.toBeFalsy();
    //.toBeTruthy();
  });
})