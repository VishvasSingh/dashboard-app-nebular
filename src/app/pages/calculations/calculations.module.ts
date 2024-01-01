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
import { UiFeaturesModule } from '../ui-features/ui-features.module';




const COMPONENTS = [
    CalculationsComponent,
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
  UiFeaturesModule,
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
