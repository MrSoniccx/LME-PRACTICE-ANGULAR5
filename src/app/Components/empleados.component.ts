import { Component} from '@angular/core';
import { Empleado } from '../Classes/empleado';

@Component({
    selector: 'empleados',
    templateUrl: '../Templates/empleados.component.html'
})

export class EmpleadosComponent{
    public empleado:Empleado;
    public trabajadores:Array<Empleado>;
    public show = "todos"

    // ngOnInit(){
    //     this.empleado = new Empleado("Jorge",23,"Desarrollador",false);
    // }

    constructor(){
        this.trabajadores = [
            new Empleado("Jorge",23,"Desarrollador",false),
            new Empleado("Pepe",31,"Cliente",true),
            new Empleado("Marta",47,"Conserje",false)
        ];
    }
}