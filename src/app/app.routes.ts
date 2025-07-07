import { Routes } from '@angular/router';
import { LoginComponent } from './auth/auth-component/login/login.component';
import { RegisterComponent } from './auth/auth-component/register/register.component';

export const routes: Routes = [
     {path:"sign-in",component:LoginComponent},
     {path:"sign-up",component:RegisterComponent},
     {path:"admin",loadChildren:()=>import("./modules/admin/admin.module").then(e=>e.AdminModule)},
     {path:"customer",loadChildren:()=>import("./modules/customer/customer.module").then(e=>e.CustomerModule)}
];
