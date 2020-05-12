import { Field } from './Field';
import { FieldType } from './FieldType';
import {Form} from "./Form";

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

        
        this.readFromLocal()
        
        return table
    }
    addToTable(){
      
        var table = document.getElementById("table")
        var th = document.getElementById("th")
        var tr = document.createElement("tr")
        var td = document.createElement("td")
        var button = document.createElement('button')
        button.setAttribute('id', 'delete')
        table.appendChild(th)
        th.appendChild(tr)
        tr.appendChild(td)
        td.appendChild(button)
       
        td.innerHTML = this.element.value
        
        
    }
    
    addToLocal(){
        // let itemsArray = localStorage.getItem('items') ? 
        //     JSON.parse(localStorage.getItem('items')) : []
        // localStorage.setItem('items', JSON.stringify(present))
        //
        //
        // itemsArray.push(this.element.value)
        // localStorage.setItem('items', JSON.stringify(present))
        // 
        let itemsArray = localStorage.getItem(this.element.name) ?
            JSON.parse(localStorage.getItem(this.element.name)) : []
        
        itemsArray.push(this.element.value)
        localStorage.setItem(this.element.name, JSON.stringify(itemsArray))
        
        
        let formArray = [itemsArray]
        
        localStorage.setItem('item2', JSON.stringify(formArray))

        // //
        let present = [formArray]
        
       
        localStorage.setItem('item3', JSON.stringify(present))
        // // 
    }
    
    readFromLocal(){
        let items

        if (localStorage.getItem('item3')) {
            items = JSON.parse(localStorage.getItem('item3'))
            items.forEach(item => {
                var table = document.getElementById('table')
                var th = document.createElement("th")
                var tr = document.createElement("tr")
                var td = document.createElement("td")
                table.appendChild(th)
                th.appendChild(tr)
                tr.appendChild(td)
                td.innerHTML = item
            })
        } else {
            items = []
        }
    }
  
}