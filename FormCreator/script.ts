enum FieldType {
    textBox = 1,
    textArea = 2,
    data = 3,
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
    value: any;
    constructor(name: string){
        
        this.element = <HTMLInputElement>document.createElement('input');
        this.name = name;
        this.label = "etykieta";
        this.element.name = this.name;
        this.type = FieldType.textBox;
    }
    render(): HTMLElement {
       return this.element;
    }
    getValue(): any{
        return this.element.value
    }
}
class TextArea  implements Field{
    name: string;
    label: string;
    type: FieldType;
    element: HTMLInputElement;
    value: any;
    constructor(name: string){
        this.element = <HTMLInputElement>document.createElement('input');
        this.name = name;
        this.label = "etykieta";
        this.element.name = this.name;
        this.type = FieldType.textArea;
    }
    render(): HTMLElement {
       return this.element
    }
    getValue(): any{
        return this.element.value
    }
}
class DateField implements Field{
    name: string;
    label: string;
    type: FieldType;
    element: HTMLInputElement;
    
    constructor(name: string){
        this.element = <HTMLInputElement>document.createElement('date');
        this.name = name;
        this.label = "etykieta";
        this.element.name = this.name;
        this.type = FieldType.data;
    }
    render(): HTMLElement {
       return this.element;
    }
    getValue(): any{
        return this.element.value
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
            element.getValue();
        });
        
    }
    render() {
          let inputField: InputField = new InputField("Imie");
          inputField.render();
          

          let textArea: TextArea = new TextArea("Nazwisko");
          textArea.render();
          
          
          let dataArea: DateField = new DateField("Data");
          dataArea.render();
          
          
    }
}

let app = new Form("1");
app.render();