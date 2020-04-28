import { APIService } from './../Services/GlobalService/api/global.api.service';
import { LogConsole } from './../Services/GlobalService/Log/log-console';
import { LogMaster } from './../Services/GlobalService/Log/global-logging.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { LogType } from '../Services/GlobalService/Log/log-constants';

@Component({
  selector: 'app-sample-component',
  templateUrl: './sample-component.component.html',
  styleUrls: ['./sample-component.component.css']
})
export class SampleComponentComponent implements OnInit {

  constructor(private logEntry: LogMaster
    , private logConsole: LogConsole
    , private apiService: APIService
    , private fb: FormBuilder
  ) { }

  loginForm: FormGroup;
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      fcUserName: new FormControl('', [Validators.required, Validators.minLength(4)]),
      fcUserPwd: new FormControl('', [Validators.required, Validators.minLength(6)]),
      fcDomain: new FormControl('', [Validators.required]),
      fcSubmit: new FormControl('')
    });
  }
  payload: any = JSON.stringify({});

  OnClick() {
    this.apiService.GetRequest("/Books", () => { console.log("This Callback function executed") }).subscribe(
      result => {
        this.payload = JSON.stringify(result);
        this.logEntry.Message = JSON.stringify(result);

        this.logConsole.Log(this.logEntry, LogType.Info);
      },
      error => { console.log(`Error while getting data: ${error}`) },
      () => console.log('HTTP request has been completed')
    )
  }
}