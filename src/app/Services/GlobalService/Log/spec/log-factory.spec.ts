import { LogMaster } from './../global-logging.service';
import { TestBed } from "@angular/core/testing";
import { LogFactory } from '../log-factory';
import { LogType } from '../log-constants';

describe('Abstract Class: LogFactory', () => {

    let client: FakeClient;
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [LogMaster, LogType]
        });
        client = new FakeClient();
    });

    afterEach(() => {
        client = null;
    });

    class FakeClient extends LogFactory {
        Log(entry: LogMaster, type: LogType): boolean {
            return true;
        }
        Dispose(): boolean {
            return true;
        }
    }
    
    it('should return a boolean value after logging', () => {
        const res = client.Log(new LogMaster(), LogType.All);
        expect(res).toBeTruthy();
    });

    it('should return a boolean value after disposing or deleting', () => {
        const res = client.Dispose();
        expect(res).toBe(true);
    });
});