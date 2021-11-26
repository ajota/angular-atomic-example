import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PocsComponent } from "./pocs/pocs.component";

const routes: Routes = [
  {
    path: "",
    component: PocsComponent
    // loadChildren: () => import("./pocs/pocs.module").then((m) => m.PocsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
