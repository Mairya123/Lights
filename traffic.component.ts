import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-traffic',
  templateUrl: './traffic.component.html',
  styleUrls: ['./traffic.component.css'],
  providers: [ AppComponent ]
})
export class TrafficComponent implements OnInit {
  light: string = "green";


  constructor(private appcomponent: AppComponent) {  }

  ngOnInit(): void {
    // this.appcomponent
    //   .getLight(10000) 
    //   .subscribe(light => this.light = light);
  }
}
