import { NgModule } from '@angular/core';

import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListRoutingModule } from './shopping-list-routing.module';
import { ShoppingListComponent } from './shopping-list.component';
import { SharedModule } from '../shared/shared.module';
import { LoggingService } from '../logging.service';

@NgModule({
    declarations: [
        ShoppingListComponent,
        ShoppingEditComponent
    ],
    imports: [
        SharedModule,
        ShoppingListRoutingModule
    ],
    exports: [
        ShoppingListComponent,
        ShoppingEditComponent
    ],
    // providers: [
    //     LoggingService
    // ]
})
export class ShoppingListModule {}
