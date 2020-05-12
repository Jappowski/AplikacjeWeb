import { Field } from './Field';
import { FieldType } from './FieldType';

export class TextArea implements Field{
    name: string;
    type: FieldType;
    element: HTMLTextAreaElement;
    value:any;
    label;
    place;
    y;
    x;
    z;
    constructor(name: string){
        this.name = name;
        this.place = document.createElement("div")
        this.value = document.createTextNode(name)
        this.place.appendChild(this.value)
        this.element = <HTMLTextAreaElement> document.createElement('textarea');
        this.place.appendChild(this.element);
        this.element.name = this.name;
        this.element.type == "textarea"
        this.type = 2
        
        this.element.rows = 3
        this.element.cols = 20

        
        
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
        
         
         td.innerHTML = this.element.value
     }
    addToLocal(){
        let itemsArray = localStorage.getItem('items') ?
            JSON.parse(localStorage.getItem('items')) : []

        localStorage.setItem('items', JSON.stringify(itemsArray))


        itemsArray.push(this.element.value)
        localStorage.setItem('items', JSON.stringify(itemsArray))

    }
}