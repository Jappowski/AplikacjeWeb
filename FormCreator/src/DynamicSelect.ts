import { FieldType } from './FieldType';
import { Field } from './Field';

export class DynamicSelect implements Field{
    name: string;
    label: HTMLLabelElement;
    type: FieldType;
    element: HTMLSelectElement;
    value:any;
    v:any;
    v2:any;
    place;
    options;
    constructor(name: string, options:string[], url:any){

        this.place = document.createElement("div")
        this.value = document.createTextNode(name)
        this.place.appendChild(this.value)

        this.element = document.createElement('select');
        this.place.appendChild(this.element);
            
            this.fetchOption<{ name: string, region: string }>(url)
                .then((data) => {

                    data.filter(x => x.region == 'Europe')
                    .map(x => x.name).forEach(element => {

                        let option = <HTMLOptionElement>document.createElement("option");
                        option.text = element;
                        option.value = element;
                        this.element.options.add(option);
                    })


                });
        // }
           this.name = name;

           this.type = FieldType.select;
       
       

    }
    render(): HTMLElement {

        return this.table() && this.place;
    }
    getValue(): any{

        this.addToLocal()
        return this.addToTable()

    }

    fetchOption<T>(url: string): Promise<T[]> {
        return fetch(url)
            .then(res => res.json())
            .then(res => {
                return res
            })
            .catch((e) => {
                console.log("Appi didnt respond")
            })
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

        if (localStorage.getItem(this.element.name)) {
            items = JSON.parse(localStorage.getItem(this.element.name))
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
        let itemsArray = localStorage.getItem('kraje') ?
            JSON.parse(localStorage.getItem('kraje')) : []



        itemsArray.push(this.element.value)
        localStorage.setItem('kraje', JSON.stringify(itemsArray))

    }
    
}
