import { Routes } from '@angular/router';
import { AddTask } from './pages/add-task/add-task';
import { ViewTask } from './pages/view-task/view-task';

export const routes: Routes = [
    {   
        path:'',
        component:AddTask
    },
    { 
        path:'add-task', 
        component:AddTask
    },
    { 
        path:'view-task', 
        component:ViewTask
    }
];
