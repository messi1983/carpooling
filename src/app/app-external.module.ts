import { NgModule } from "@angular/core";
import { RangeSliderModule } from "ngx-rangeslider-component";
import { DlDateTimePickerDateModule } from "angular-bootstrap-datetimepicker";

@NgModule({
  imports: [RangeSliderModule, DlDateTimePickerDateModule],
  exports: [RangeSliderModule, DlDateTimePickerDateModule],
  declarations: []
})
export class AppExternalModule {}
