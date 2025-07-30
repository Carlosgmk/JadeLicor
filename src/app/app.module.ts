import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './componets/footer/footer.component';
import { HeaderComponent } from './componets/header/header.component';
import { ProductShowcaseComponent } from './componets/product-showcase/product-showcase.component';
import { ProductStoryComponent } from './componets/product-story/product-story.component';
import { ProductDescComponent } from './componets/product-desc/product-desc.component';
import { ProductComponent } from './componets/product/product.component';
import { NewsletterComponent } from './componets/newsletter/newsletter.component';
import { SocialSectionComponent } from './componets/social-section/social-section.component';
import { PaymentComponent } from './componets/payment/payment.component';



// import { ProductDescComponent } from './componets/product-desc/product.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ProductShowcaseComponent,
    ProductStoryComponent,
    ProductDescComponent,
    ProductComponent,
    NewsletterComponent,
    SocialSectionComponent,
    PaymentComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
