import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDividerModule } from '@angular/material/divider';


import { HomeComponent } from './home/home.component';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeAboutmeComponent } from './home-aboutme/home-aboutme.component';
import { HomePortfolioComponent } from './home-portfolio/home-portfolio.component';
import { HomeCommentsComponent } from './home-comments/home-comments.component';
import { HomeFooterComponent } from './home-footer/home-footer.component';
import { HomeNavComponent } from './home-nav/home-nav.component';
import { HomeContactComponent } from './home-contact/home-contact.component';

const MaterialModules = [
  MatCardModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatSnackBarModule,
  MatDividerModule,
];

@NgModule({
  declarations: [
    HomeComponent,
    HomeHeaderComponent,
    HomeAboutmeComponent,
    HomePortfolioComponent,
    HomeCommentsComponent,
    HomeFooterComponent,
    HomeNavComponent,
    HomeContactComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModules,
    RouterModule.forChild([{ path: '', component: HomeComponent }]),
  ],
})
export class HomeModule {}
