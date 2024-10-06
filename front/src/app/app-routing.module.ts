import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { UnauthGuard } from './guards/unauth.guard';
import { AllTopicsComponent } from './pages/all-topics/all-topics.component';
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { DetailPostComponent } from './pages/detail-post/detail-post.component';
import { FeedPostComponent } from './pages/feed-post/feed-post.component';
import { HomeComponent } from './pages/home/home.component';
import { MeComponent } from './pages/me/me.component';

const routes: Routes = [{ path: '', component: HomeComponent },
{ path: 'me', component: MeComponent, canActivate: [AuthGuard] },
{ path: 'allTopics', component: AllTopicsComponent, canActivate: [AuthGuard] },
{ path: 'feedPost', component: FeedPostComponent, canActivate: [AuthGuard] },
{ path: 'detailPost/:id', component: DetailPostComponent, canActivate: [AuthGuard] },
{ path: 'createPost', component: CreatePostComponent, canActivate: [AuthGuard] },
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
export class AppRoutingModule { }
