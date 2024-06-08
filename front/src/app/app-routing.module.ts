import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { UnauthGuard } from './guards/unauth.guard';
import { MeComponent } from './pages/me/me.component';
import { AllTopicsComponent } from './pages/all-topics/all-topics.component';
import { FeedPostComponent } from './pages/feed-post/feed-post.component';
import { DetailPostComponent } from './pages/detail-post/detail-post.component';
import { CreatePostComponent } from './pages/create-post/create-post.component';

// consider a guard combined with canLoad / canActivate route option
// to manage unauthenticated user to access private routes
const routes: Routes = [{ path: '', component: HomeComponent},
{ path: 'me', component: MeComponent},
{ path: 'allTopics', component: AllTopicsComponent},
{ path: 'feedPost', component: FeedPostComponent},
{ path: 'detailPost/:id', component: DetailPostComponent},
{ path: 'createPost', component: CreatePostComponent},
{
  path: '',
  canActivate: [UnauthGuard],
  loadChildren: () => import('./modules/auth.module').then(m => m.AuthModule)
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
