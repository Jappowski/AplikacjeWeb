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
    
    resetLocal(){
        localStorage.clear();
    }
}
