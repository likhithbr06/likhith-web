import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {KnowMoreComponent} from './know-more.component';
import {KnowMoreRoutingModule} from './knowMore-routing.module'
import { CommonModule } from '@angular/common';
//import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    imports: [
        KnowMoreComponent,
        KnowMoreRoutingModule,
        CommonModule,
        NgbModule
    ]
})
export class KnowmoreModule {}