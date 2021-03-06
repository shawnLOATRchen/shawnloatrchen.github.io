import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';
import { PortfolioModule } from './portfolio/portfolio.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'yc-root',
  template: `<router-outlet></router-outlet>`,
})
export class RootComponent {}

@NgModule({
  declarations: [RootComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot([
    {
        path: '',
        loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
    },
    {
        path: 'portfolio',
        loadChildren: () => import('./portfolio/portfolio.module').then((m) => m.PortfolioModule),
    },
], {
    useHash: true,
    relativeLinkResolution: 'legacy',
    initialNavigation: 'enabled'
}),
    HomeModule,
    PortfolioModule,
  ],
  providers: [],
  bootstrap: [RootComponent],
})
export class AppModule {}
