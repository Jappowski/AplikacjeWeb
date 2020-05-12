import { FieldType } from './FieldType';
import { Field } from './Field';

export class CheckField implements Field{
    name: string;
    type: FieldType;
    element: HTMLInputElement;
    value: any;
    place: any;
    label;
    
    constructor(name: string){
        this.place = document.createElement("div")
        this.value = document.createTextNode(name)
        this.place.appendChild(this.value)
        this.element = document.createElement('input');
        
        this.place.appendChild(this.element);
        this.name = name;
        this.element.name = this.name;
        this.type = FieldType.checkbox;
        this.element.type = 'checkbox'
        
    }
    render():HTMLElement {
      return this.table() && this.place
      
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

         let items

         if (localStorage.getItem('items')) {
             items = JSON.parse(localStorage.getItem('items'))
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
        
         if (this.element.checked)
        {
         td.innerHTML =  "tak"
        }
        else  td.innerHTML = "nie"
         
     }
    addToLocal(){
        let itemsArray = localStorage.getItem('items') ?
            JSON.parse(localStorage.getItem('items')) : []

        localStorage.setItem('items', JSON.stringify(itemsArray))


        itemsArray.push(this.element.value)
        localStorage.setItem('items', JSON.stringify(itemsArray))

    }
}