import { NgModule } from "@angular/core";
import { AppBannerComponent } from "./components/appBanner/appBanner.component";
import { AppFooterComponent } from "./components/appFooter/appFooter.component";
import { BmiComponent } from "./components/bmi/bmi.component";

@NgModule({
    declarations:[AppFooterComponent,AppBannerComponent,BmiComponent],
    exports: [AppFooterComponent,AppBannerComponent,BmiComponent]
})

export class WidgetsModule{

}