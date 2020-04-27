enum FieldType {
    textBox = 1,
    textarea = 2,
    date = 3,
    email = 4,
    select = 5,
    checkbox = 6,
}

interface Field{
    name: string
    label: HTMLLabelElement
    type: FieldType;
    value:any;
    render(): HTMLElement;
    getValue(): any;
}



class InputField implements Field{
    name: string;
    label: HTMLLabelElement;
    type: FieldType;
    element: HTMLInputElement;
    value:any;
    place;
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
       return this.place;
    }
    getValue(): any{
     return this.element.name + ":" + " " + this.element.value
    }
}
class TextArea implements Field{
    name: string;
    type: FieldType;
    element: HTMLTextAreaElement;
    value:any;
    label;
    place;
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
       return this.place
    }
    getValue(): any{
        return this.element.name + ":" + " " + this.element.value
    }
}
class DateField implements Field{
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
    render():HTMLElement {
        return this.place
    }
    getValue(): any{
        return this.element.name + ":" + " " + this.element.value
    }
}

class CheckField implements Field{
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
      return this.place
      
    }
    getValue(): any{
        
        if (this.element.checked)
        {
        return this.element.name + ":" + " " + "tak"
        }
        else return this.element.name + ":" + " " + "nie"
    }
}
class SelectField implements Field{
    name: string;
    label: HTMLLabelElement;
    type: FieldType;
    element: HTMLSelectElement;
    value:any;
    v:any;
    v2:any;
    place;
    constructor(name: string){
    
        this.place = document.createElement("div")
        this.value = document.createTextNode(name)
        this.place.appendChild(this.value)

        this.element = document.createElement('select');
        this.place.appendChild(this.element);

        this.v = document.createElement("option")
        this.v.appendChild(document.createTextNode("Kobieta"))
        this.v.value = "kobieta"

        this.v2 = document.createElement("option")
        this.v2.appendChild(document.createTextNode("Mężczyzna"))

        this.element.appendChild(this.v)
        this.element.appendChild(this.v2)
        this.v.value="Kobieta";
        this.v2.value="Mężczyzna";
        


        this.name = name;
  
        this.type = FieldType.select;
      
    }
    render():HTMLElement {
        return this.place
    }
    getValue(): any{
        return this.element + ":" + " " + this.element.value
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

f.addNewField(new SelectField("Wybór "));

f.addNewField(new TextArea("Uwagi "));
let ap = new app(f);

let showButton = document.getElementById("1");
showButton.addEventListener('click',() => f.getValue(), false);
ap.createForm();
