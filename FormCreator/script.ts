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

class app{
    
    createInput(name:string){
        var para = document.createElement("p")
        var node = document.createTextNode(name)
        var inputnode = document.createElement("input")
        para.appendChild(node)
        para.appendChild(inputnode)
        var element = document.getElementById("div1")
        element.appendChild(para)
        return para;
        
    }
    createCheckbox(name:string){
        var para = document.createElement("p")
        var node = document.createTextNode(name)
        var checknode = document.createElement("input")
        checknode.type = "checkbox"
        para.appendChild(node)
        para.appendChild(checknode)
        
        var element = document.getElementById("div1")
        element.appendChild(para)
        return para;
        
    }
}
class InputField extends app implements Field{
    name: string;
    label: string;
    type: FieldType;
    element: HTMLInputElement;
    value: any;
    constructor(name: string){
        super();
        this.element = <HTMLInputElement>document.createElement('input');
        this.name = name;
        this.label = "etykieta";
        this.element.name = this.name;
        this.type = FieldType.textBox;
        this.value= "";
    }
    render(): HTMLElement {
       return this.createInput(this.name);
    }
    getValue(): any{
     return this.element.value
        
    }
}
class TextArea extends app implements Field{
    name: string;
    label: string;
    type: FieldType;
    element: HTMLInputElement;
    value: any;
    constructor(name: string){
        super();
        this.element = <HTMLInputElement>document.createElement('input');
        this.name = name;
        this.label = "etykieta";
        this.element.name = this.name;
        this.type = FieldType.textArea;
    }
    render(): HTMLElement {
       return this.createInput(this.name)
    }
    getValue(): any{
        return this.element.value
    }
}
class DateField extends app implements Field{
    name: string;
    label: string;
    type: FieldType;
    element: HTMLInputElement;
    
    constructor(name: string){
        super();
        this.element = <HTMLInputElement>document.createElement('date');
        this.name = name;
        this.label = "etykieta";
        this.element.name = this.name;
        this.type = FieldType.date;
    }
    render():HTMLElement {
        return this.createInput(this.name);
    }
    getValue(): any{
        return this.element.value
    }
}

class CheckField extends app implements Field{
    name: string;
    label: string;
    type: FieldType;
    element: HTMLInputElement;
    
    constructor(name: string){
        super();
        this.element = <HTMLInputElement>document.createElement('checkbox');
        this.name = name;
        this.label = "etykieta";
        this.element.name = this.name;
        this.type = FieldType.checkbox;
    }
    render():HTMLElement {
      return this.createCheckbox(this.name);
      
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
          this.fields.push(inputField);

          let textArea: TextArea = new TextArea("Nazwisko");
          textArea.render();
         
          
          let dataArea: DateField = new DateField("Data");
          dataArea.render();
         
          let checkArea: CheckField = new CheckField("Kromka")
          checkArea.render();
          
    }
}

let ap = new Form("1");

