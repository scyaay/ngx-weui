import { NgModule, ModuleWithProviders } from '@angular/core';

import { CellModule } from "./cell/cell.module";
import { ButtonModule } from "./button/button.module";
import { FormModule } from "./form/form.module";
import { SliderModule } from "./slider/slider.module";
import { UploaderModule } from "./uploader/uploader.module";
import { ActionSheetModule } from "./actionsheet/actionsheet.module";
import { DialogModule } from "./dialog/dialog.module";
import { LoadmoreModule } from "./loadmore/loadmore.module";
import { ProgressModule } from "./progress/progress.module";
import { GalleryModule } from "./gallery/gallery.module";
import { PickerModule } from "./picker/picker.module";
import { SearchBarModule } from "./searchbar/searchbar.module";
import { TabModule } from "./tab/tab.module";

export * from './utils/types';

export { SwipeDirective, CellModule } from './cell';
export { ButtonDirective, ButtonConfig, ButtonModule } from './button';
export { InputDirective, VCodeDirective, TextareaDirective, 
         FormModule } from './form';
export { SliderDirective, SliderModule } from './slider';
export * from './uploader';
export * from './actionsheet';
export * from './dialog';
export * from './loadmore';
export * from './progress';
export * from './gallery';
export * from './picker';
export * from './searchbar';
export * from './tab';

const MODULES = [
    CellModule, ButtonModule, FormModule, SliderModule, UploaderModule, ActionSheetModule, 
    DialogModule, LoadmoreModule, ProgressModule, GalleryModule, PickerModule, SearchBarModule,
    TabModule
];

@NgModule({
    imports: [
        CellModule.forRoot(), ButtonModule.forRoot(),  FormModule.forRoot(), 
        SliderModule.forRoot(), UploaderModule.forRoot(), ActionSheetModule.forRoot(),
        DialogModule.forRoot(), LoadmoreModule.forRoot(), ProgressModule.forRoot(),
        GalleryModule.forRoot(), PickerModule.forRoot(), SearchBarModule.forRoot(),
        TabModule.forRoot()
    ],
    exports: MODULES
})
export class WeUiRootModule {
}

@NgModule({ exports: MODULES })
export class WeUiModule {
    public static forRoot(): ModuleWithProviders {
        return { ngModule: WeUiRootModule };
    }
}
