import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavigationComponent } from './navigation/navigation.component';

// const routes: Routes = [
//   {
//     path: '',
//     component: DashboardComponent,
//   },
// ];

const routes: Routes = [
    { path: '', redirectTo: '/think', pathMatch: 'full' },
    {
        path: '',
        component: NavigationComponent,
        children: [
            { path: 'think', component: DashboardComponent },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
