/**
 * Created by Godai Yuusaku on 1/7/2017.
 */
import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import {AppComponent} from "./app.component";
import {HowToComponent} from "./how-to/how-to.component";
import {ExamplesComponent} from "./examples/examples.component";

export const router: Routes = [
    {path: "", redirectTo: "howTo", pathMatch: "full"},
    {path: "howTo", component: HowToComponent},
    {path: "examples", component: ExamplesComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
