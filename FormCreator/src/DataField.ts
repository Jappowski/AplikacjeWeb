import { Field } from './Field';
import { FieldType } from './FieldType';

export class DateField implements Field{
    name: string;
    type: FieldType;
    element: HTMLInputElement;
    value:any;
    label;
    place;
    constructor(name: string){

        this.place = document.createElement("div")
        this.value = document.createTextNode(name)
        this.place.appendChild(this.value)
        this.element = document.createElement('input');
        this.place.appendChild(this.element);
        this.name = name;
        this.element.name = this.name;
        this.type = 3;
        this.element.type="date"
    }
    render(): HTMLElement {
      
        return this.table() && this.place;
     }
     getValue(): any{

         this.addToLocal()
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

         let items

         if (localStorage.getItem(this.element.name)) {
             items = JSON.parse(localStorage.getItem(this.element.name))
             items.forEach(items => {
                 var th = document.createElement("th")
                 var tr = document.createElement("tr")
                 var td = document.createElement("td")
                 table.appendChild(th)
                 th.appendChild(tr)
                 tr.appendChild(td)
                 td.innerHTML = items
             })
         } else {
             items = []
         }
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
    addToLocal(){
        let itemsArray = localStorage.getItem(this.element.name) ?
            JSON.parse(localStorage.getItem(this.element.name)) : []



        itemsArray.push(this.element.value)
        localStorage.setItem(this.element.name, JSON.stringify(itemsArray))

    }
}