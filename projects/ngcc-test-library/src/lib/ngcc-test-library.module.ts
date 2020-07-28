import { NgModule } from '@angular/core';
import { NgccTestLibraryComponent } from './ngcc-test-library.component';
import { NgccTestSecondaryModule } from 'ngcc-test-library/ngcc-test-secondary';


@NgModule({
  declarations: [NgccTestLibraryComponent],
  imports: [NgccTestSecondaryModule],
  exports: [NgccTestLibraryComponent]
})
export class NgccTestLibraryModule { }
