import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { TrafficComponent } from './traffic/traffic.component';

const routes: Routes = [
    {path: "traffic", component: TrafficComponent}
];

@NgModule ({
    imports: [RouterModule.forRoot (routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}