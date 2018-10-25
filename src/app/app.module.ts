import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UserCreateComponent } from './users/user-create/user-create.component';
import { UserDeleteComponent } from './users/user-delete/user-delete.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { BoolDisplayPipe } from './pipes/bool-display.pipe';
import { SortUsersPipe } from './pipes/sort-users.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDetailComponent,
    UserCreateComponent,
    UserDeleteComponent,
    UserEditComponent,
    BoolDisplayPipe,
    SortUsersPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
