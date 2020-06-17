
import {InputField} from "./InputField";
import { Form } from './Form';
import { DateField } from './DataField';
import { CheckField } from './CheckField';
import { SelectField } from './SelectField';
import { TextArea } from './TextArea';
import { DynamicSelect } from './DynamicSelect'
import './styles/body.scss';


export class app{
    form:Form;
    constructor(form:Form){
        this.form = form;
    }
    
    createForm(): void{
        this.form.render();
    }

    
        
}




let f = new Form("p1");

f.addNewField(new InputField("Imię: "));
 
f.addNewField(new InputField("Nazwisko: "));


f.addNewField(new DateField("Data urodzenia: "))

f.addNewField(new CheckField("Oznajmiam, ze jestem pełnoletni"));

f.addNewField(new SelectField("Płeć: ", ["męzczyzna","kobieta"],));
f.addNewField(new DynamicSelect("kraje", [], 'https://restcountries.eu/rest/v2/all'))


f.addNewField(new TextArea("Uwagi "));
let ap = new app(f);

let showButton = document.getElementById("1");
showButton.addEventListener('click',() => f.getValue(), false);
let resetButton = document.getElementById("2");
resetButton.addEventListener('click',() => f.resetLocal(), false);

ap.createForm();