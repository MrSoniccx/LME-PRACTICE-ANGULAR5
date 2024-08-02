import { Component} from '@angular/core';

@Component({
    selector: 'fruta',
    templateUrl: '../Templates/fruta.component.html'
})

export class FrutaComponent{
    public nombre_componente = 'Componente de fruta';
    public listado_frutas = 'Manzana, Naranja, Banana';
}