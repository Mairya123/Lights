import { Component,Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Injectable()
export class AppComponent {
  title = 'Traffic Lights';
  // getLight(interval): Observable<string> {
  //   return Observable.interval(interval)
  //     .timeInterval()
  //     .map(time => {
  //       if(time.value % 3 === 2) {
  //         return 'green';
  //       } else if(time.value % 3 === 0) {
  //         return 'yellow';
  //       } else if (time.value % 3 === 1) {
  //         return 'red';
  //       }
  //     });
  // }
}
