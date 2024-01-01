import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDialogModule,
  NbInputModule,
  NbPopoverModule,
  NbSelectModule,
  NbTabsetModule,
  NbTooltipModule,
  NbWindowModule,
} from '@nebular/theme';

// modules
import { ThemeModule } from '../../@theme/theme.module';
import { CalculationsRoutingModule } from './calculations-routing.module';
import { CalculationsComponent } from './calculations.component';




const COMPONENTS = [
    CalculationsComponent
];

// const ENTRY_COMPONENTS = [
//   ShowcaseDialogComponent,
//   DialogNamePromptComponent,
//   WindowFormComponent,
//   NgxPopoverCardComponent,
//   NgxPopoverFormComponent,
//   NgxPopoverTabsComponent,
// ];

const MODULES = [
  FormsModule,
  ThemeModule,
  CalculationsRoutingModule,
  NbDialogModule.forChild(),
  NbWindowModule.forChild(),
  NbCardModule,
  NbCheckboxModule,
  NbTabsetModule,
  NbPopoverModule,
  NbButtonModule,
  NbInputModule,
  NbSelectModule,
  NbTooltipModule,
];

const SERVICES = [
];

@NgModule({
    imports: [
        ...MODULES,
    ],
    declarations: [
        ...COMPONENTS,
    ],
    providers: [
        ...SERVICES,
    ],
})
export class CalculationsModule {
}
