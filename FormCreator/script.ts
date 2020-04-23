enum FieldType {
    textBox = 1,
    textArea = 2,
    date = 3,
    email = 4,
    radio = 5,
    checkbox = 6,
}

interface Field{
    name: string
    label: string
    type: FieldType;
    render(): HTMLElement;
    getValue(): any;
}



class InputField implements Field{
    name: string;
    label: string;
    type: FieldType;
    element: HTMLInputElement;
    constructor(name: string){
        this.element = <HTMLInputElement>document.createElement('input');
        this.name = name;
        this.label = "etykieta";
        this.element.name = this.name;
        this.type = 1;
      
    }
    render(): HTMLElement {
       return this.element;
    }
    getValue(): any{
     return this.element.name + ":" + " " + this.element.value
    }
}
class TextArea implements Field{
    name: string;
    label: string;
    type: FieldType;
    element: HTMLInputElement;
    constructor(name: string){
        this.name = name;
        this.element =<HTMLInputElement>document.createElement('input');
        this.label = "etykieta";
        this.element.name = this.name;
        this.type = 2
    }
    render(): HTMLElement {
       return this.element
    }
    getValue(): any{
        return this.element.name + ":" + " " + this.element.value
    }
}
class DateField implements Field{
    name: string;
    label: string;
    type: FieldType;
    element: HTMLInputElement;
    
    constructor(name: string){

        this.element = <HTMLInputElement>document.createElement('input');
        this.name = name;
        this.label = "etykieta";
        this.element.name = this.name;
        this.type = 3;
    }
    render():HTMLElement {
        return this.element
    }
    getValue(): any{
        return this.element.name + ":" + " " + this.element.value
    }
}

class CheckField implements Field{
    name: string;
    label: string;
    type: FieldType;
    element: HTMLInputElement;
    
    constructor(name: string){

        this.element = document.createElement('input');
        this.name = name;
        this.label = "etykieta";
        this.element.name = this.name;
        this.type = 6
        
    }
    render():HTMLElement {
      return this.element;
      
    }
    getValue(): any{
        return this.element.name + ":" + " " + this.element.value
    }
}

class Form {
    fields: Field[];
    formElement: HTMLElement;

    constructor (id: string){
        this.fields = new Array();
        this.formElement = document.getElementById(id);
    }
    getValue(): void{
       this.fields.forEach(element => {
            console.log(element.getValue());
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
}
class app{
    form:Form;
    constructor(form:Form){
        this.form = form;
    }
    
    createForm(): void{
        this.form.render();
    }

    
        
}
let f = new Form("p1");
f.addNewField(new InputField("Imię"));
 
f.addNewField(new InputField("Nazwisko"));

f.addNewField(new DateField("Data urodzenia"))

f.addNewField(new CheckField("Oznajmiam, ze jestem pełnoletni"));

let ap = new app(f);

let showButton = document.getElementById("1");
showButton.addEventListener('click',() => f.getValue(), false);
ap.createForm();
