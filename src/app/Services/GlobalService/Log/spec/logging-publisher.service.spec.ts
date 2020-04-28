import { TestBed } from '@angular/core/testing';
import { LoggPublisherService } from '../logging-publisher.service';
import { LogFactory } from '../log-factory';
import { LogMaster } from '../global-logging.service';
import { LogType } from '../log-constants';

describe("Service: LogPublisher", () => {

  let publisher: LoggPublisherService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoggPublisherService, LogType, LogMaster]
    })
    publisher = new LoggPublisherService();
  });

  afterEach(() => {
    publisher = null;
  });

  class FakeClient extends LogFactory {
    Log(entry: LogMaster, type: LogType): boolean {
      return true
    }
    Dispose(): boolean {
      return true;
    }
  }

  it('should create an instance', () => {
    expect(publisher).toBeTruthy();
  });

  it('should be able to push log factory subclass into publisher', () => {
    let logFactory: LogFactory[] = [];
    let fakingPublisher = (): any => {
      logFactory.push(new FakeClient())
    }
    expect(publisher).toBeDefined();
    spyOn(publisher, "buildPublishers").call(fakingPublisher);
  });
});