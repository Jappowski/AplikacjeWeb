import { FieldType } from './FieldType';
import { Field } from './Field';

export class SelectField implements Field{
    name: string;
    label: HTMLLabelElement;
    type: FieldType;
    element: HTMLSelectElement;
    value:any;
    v:any;
    v2:any;
    place;
    options;
   
    constructor(name: string, options:string[]){
    
        this.place = document.createElement("div")
        this.value = document.createTextNode(name)
        this.place.appendChild(this.value)

        this.element = document.createElement('select');
        this.place.appendChild(this.element);

        
        options.forEach(options =>
        {
            this.options = options
        this.v = document.createElement("option")
        this.v.appendChild(document.createTextNode(options))
            this.v.setAttribute('value', this.options)
            this.element.appendChild(this.v)
            
        })
        
        this.name = name;
  
        this.type = FieldType.select;
      
    }
    render(): HTMLElement {
      
        return this.table() && this.place;
     }
     getValue(): any{

         this.addToLocal()
          this.addToTable()
             
     }
     
 
     table() {
        
         //tworzenie pierwszego wiersza(nazwy formularza)
         var table = document.getElementById("table")
         table.setAttribute("id", "table")
         var th = document.createElement("th")
         th.setAttribute("id", "th")
         table.appendChild(th)
        
         
         th.innerHTML = this.name

         let items

         if (localStorage.getItem('plec')) {
             items = JSON.parse(localStorage.getItem('plec'))
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
        let itemsArray = localStorage.getItem('plec') ?
            JSON.parse(localStorage.getItem('plec')) : []
        
        itemsArray.push(this.element.value)
        localStorage.setItem('plec', JSON.stringify(itemsArray))
        

    }
}
