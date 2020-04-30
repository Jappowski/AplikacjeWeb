import { Field } from './Field';
import { FieldType } from './FieldType';

export class InputField implements Field{
    name: string;
    label: HTMLLabelElement;
    type: FieldType;
    element: HTMLInputElement;
    value:any;
    place;
    y;
    x;
    z;
    xx;
    zz;
    constructor(name: string){
        this.place = document.createElement("div")
        this.value = document.createTextNode(name)
        this.place.appendChild(this.value)
        this.element = document.createElement('input');
        this.place.appendChild(this.element);
        this.name = name;
        this.element.name = this.name;
        this.type = 1;
        
        
    }
    render(): HTMLElement {
      
       return this.table() && this.place;
    }
    getValue(): any{
        
        return this.addToTable()
            
    }
    

    table() {
       
        //tworzenie pierwszego wiersza(nazwy formularza)
        var table = document.getElementById("table")
        table.setAttribute("id", "table")
        var th = document.createElement("th")
        th.setAttribute("id", "th")
        table.appendChild(th)
       
        
        th.innerHTML = this.element.name

        return table
        //tworzenie rowsow z inputa
        
        
        

        
        
    }
    addToTable(){
      
        var table = document.getElementById("table")
        var th = document.getElementById("th")
        var tr = document.createElement("tr")
        var td = document.createElement("td")
        table.appendChild(th)
        th.appendChild(tr)
        tr.appendChild(td)
       
        
        td.innerHTML = this.element.value
    }
}