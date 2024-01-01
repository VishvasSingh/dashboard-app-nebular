import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CalculationsComponent } from "./calculations.component";
import { ProfitCalculationsComponent } from "./profit-calculations/profit-calculations";
import { UiFeaturesModule } from "../ui-features/ui-features.module";


const routes: Routes = [
  {
    path: "",
    component: CalculationsComponent,
    children: [
      {
        path: "profitCalculations",
        component: ProfitCalculationsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), UiFeaturesModule],
  exports: [RouterModule],
})
export class CalculationsRoutingModule {}
