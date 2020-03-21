import { NgModule } from '@angular/core';
import { MaterialModule } from './Material/material.module';

@NgModule({
    imports: [
        MaterialModule
    ],
    exports: [
        MaterialModule
    ]
})
export class VendorModule {}