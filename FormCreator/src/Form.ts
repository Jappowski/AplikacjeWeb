import {Field} from "./Field";
export class Form {
    fields: Field[];
    formElement: HTMLElement;

    constructor (id: string){
        this.fields = new Array();
        this.formElement = document.getElementById(id);
    }
    getValue(): void{
       this.fields.forEach(element => {
            element.getValue()
              
            /*  var table = document.getElementById('table')
              var tr = document.createElement("tr")
              var td = document.createElement("td")
              tr.setAttribute("id", "trr")
              td.innerHTML = element.getValue()

              table.appendChild(tr)
              tr.appendChild(td)
       */
              
        });
       
    }
    render(): void {
          this.fields.forEach(element => {
              this.formElement.appendChild(element.render())
          })    
    }
    addNewField(field:Field): void{
        this.fields.push(field)
        
    }
    
    tableCreate(){
        
       
    }
}
