import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { MeComponent } from './pages/me/me.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DetailPostComponent } from './pages/detail-post/detail-post.component';
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { FeedPostComponent } from './pages/feed-post/feed-post.component';
import { AllTopicsComponent } from './pages/all-topics/all-topics.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardTopicComponent } from './components/card-topic/card-topic.component';
import { CardPostComponent } from './components/card-post/card-post.component';
import { SharedModule } from './modules/shared-module.module';


@NgModule({
  declarations: [AppComponent, HomeComponent, MeComponent, NotFoundComponent, DetailPostComponent, CreatePostComponent, FeedPostComponent, AllTopicsComponent, CardTopicComponent, CardPostComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [ {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }],
  bootstrap: [AppComponent],

})
export class AppModule {}
