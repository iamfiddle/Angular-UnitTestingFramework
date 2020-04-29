import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sample-child',
  templateUrl: './sample-child.component.html',
  styleUrls: ['./sample-child.component.css']
})
export class SampleChildComponent implements OnInit {

  constructor() { }

  @Input() formName: string="Sample header";
  ngOnInit(): void {
  }

}
