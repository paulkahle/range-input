import { CommonModule } from '@angular/common';
import { RangeInputComponent } from './range-input.component';
import { NgModule } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { ClearableInputModule } from 'suprematism-clearable-input';


export * from './range-input.component';

@NgModule({
    imports: [
        CommonModule,
        ClearableInputModule
    ],
    declarations: [
        RangeInputComponent
    ],
    exports: [
        RangeInputComponent,
        ClearableInputModule
    ],
    entryComponents: [
        RangeInputComponent
    ]
})
export class RangeInputModule {

}
