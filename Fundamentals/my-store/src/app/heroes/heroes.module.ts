import { CommonModule } from "@angular/common";
import { HeroeComponent } from "./heroe/heroe.component";
import { ListComponent } from "./list/list.component";
import { NgModule } from "@angular/core";

@NgModule({
    declarations: [
        ListComponent,
        HeroeComponent
    ],
    exports: [
        ListComponent
    ],
    imports: [
        CommonModule
    ]
})
export class HeroesModule { }