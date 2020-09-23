import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertComponent } from './alert/alert.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { PlaceholderDirective } from './placeholder/placeholder.directive';
import { DropdownDirective } from './dropdown.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoggingService } from '../logging.service';

@NgModule({
    declarations: [
        AlertComponent,
        LoadingSpinnerComponent,
        PlaceholderDirective,
        DropdownDirective
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        AlertComponent,
        LoadingSpinnerComponent,
        PlaceholderDirective,
        DropdownDirective,
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    entryComponents: [
        AlertComponent
    ],
    providers: [
        LoggingService
    ]
})

export class SharedModule { }
