import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatListModule } from "@angular/material/list";
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';




import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { TableComponent } from './components/table/table.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { DialogOverviewExampleDialog } from './components/dialog/dialog.component';
import { MatInputModule } from '@angular/material/input';




const appRoutes: Routes = [
  // { path: '', component: TasksComponent},
  { path: '', component: TableComponent },
  { path: 'about', component: AboutComponent },
  { path: 'sidebar', component: SidenavComponent },
  { path: 'dialog', component: DialogComponent }

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TaskItemComponent,
    AddTaskComponent,
    AboutComponent,
    FooterComponent,
    TableComponent,
    SidenavComponent,
    ToolbarComponent,
    DialogComponent,
    DialogOverviewExampleDialog,
  ],
  imports: [
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    MatFormFieldModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatTableModule,
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
