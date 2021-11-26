import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PagesRoutingModule } from "./pages-routing.module";
import { PocsComponent } from "./pocs/pocs.component";
import { ClockComponent } from "./clock/clock.component";
// import { PocsModule } from "./pocs/pocs.module";

@NgModule({
  declarations: [PocsComponent, ClockComponent],
  imports: [CommonModule, PagesRoutingModule],
  exports: [PagesRoutingModule]
})
export class PagesModule {}
