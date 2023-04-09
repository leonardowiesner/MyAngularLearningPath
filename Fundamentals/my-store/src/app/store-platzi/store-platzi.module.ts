import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { StorePlatziComponent } from "./store-platzi.component";
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        StorePlatziComponent
    ],
    exports: [
        StorePlatziComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class StorePlatziModule { }