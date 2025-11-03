import { Routes } from '@angular/router';
import { Login } from './componentes/login/login';
import {Home } from './componentes/home/home';
import { TipoEspacio } from './componentes/tipo-espacio/tipo-espacio';
import { Espacios } from './componentes/espacios/espacios';
import { Horarios } from './componentes/horarios/horarios';
import { Usuarios } from './componentes/usuarios/usuarios';
import { Administradores } from './componentes/administradores/administradores';
import { Reservaciones } from './componentes/reservaciones/reservaciones';
import { MisReservaciones } from './componentes/mis-reservaciones/mis-reservaciones';


export const routes: Routes = [
    {path: '', component:Home},
    {path: 'login', component: Login},
    {path: 'home', component: Home},
    {path: 'tipo-espacio', component: TipoEspacio},
    {path: 'espacios', component: Espacios},
    {path: 'horarios', component: Horarios},
    {path: 'usuarios', component: Usuarios},
    {path: 'administradores', component: Administradores},
    {path: 'reservaciones', component: Reservaciones},
    {path: 'mis-reservaciones', component: MisReservaciones}
];
