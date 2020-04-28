import { LogConsole } from './../log-console';
import { LogType } from './../log-constants';
import { LogMaster } from './../global-logging.service';
import { TestBed } from '@angular/core/testing';

describe('LogConsole', () => {

  let logConsole: LogConsole;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogMaster, LogType]
    });

  });

  it('should create an instance', () => {
    expect(new LogConsole()).toBeTruthy();
  });
  it('should implemented log function', () => {
    let fakingPublisher = (): any => {
      //logFactory.push(new FakeClient())
    }
    logConsole = new LogConsole();
    //spyOn(LogConsole, "Log").call(fakingPublisher, [new LogMaster(), LogType.TurnOff]);
    expect(logConsole.Log).toBeDefined();
  });
}); 