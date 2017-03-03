import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { HomeComponent } from './home/home.component';
import {LeftNavigationComponent} from './shared/navigation.component';
import {TopNavigationComponent} from './shared/top-navigation.component';
import { RepoListComponent } from './components/repo-list.component';
import { RepoItemComponent } from './components/repo-item.component';
import { NavigationItemComponent } from './shared/navigation-item.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LeftNavigationComponent,
    TopNavigationComponent,
    RepoListComponent,
    RepoItemComponent,
    NavigationItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],
  providers: [
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
