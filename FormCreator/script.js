var FieldType;
(function (FieldType) {
    FieldType[FieldType["textBox"] = 1] = "textBox";
    FieldType[FieldType["textArea"] = 2] = "textArea";
    FieldType[FieldType["date"] = 3] = "date";
    FieldType[FieldType["email"] = 4] = "email";
    FieldType[FieldType["radio"] = 5] = "radio";
    FieldType[FieldType["checkbox"] = 6] = "checkbox";
})(FieldType || (FieldType = {}));
var InputField = (function () {
    function InputField(name) {
        this.place = document.createElement("div");
        this.value = document.createTextNode(name);
        this.place.appendChild(this.value);
        this.element = document.createElement('input');
        this.place.appendChild(this.element);
        this.name = name;
        this.label = "etykieta";
        this.element.name = this.name;
        this.type = 1;
    }
    InputField.prototype.render = function () {
        return this.place;
    };
    InputField.prototype.getValue = function () {
        return this.element.name + ":" + " " + this.element.value;
    };
    return InputField;
})();
var TextArea = (function () {
    function TextArea(name) {
        this.name = name;
        this.place = document.createElement("div");
        this.value = document.createTextNode(name);
        this.place.appendChild(this.value);
        this.element = document.createElement('input');
        this.place.appendChild(this.element);
        this.label = "etykieta";
        this.element.name = this.name;
        this.type = 2;
        this.element.type = 'text';
    }
    TextArea.prototype.render = function () {
        return this.place;
    };
    TextArea.prototype.getValue = function () {
        return this.element.name + ":" + " " + this.element.value;
    };
    return TextArea;
})();
var DateField = (function () {
    function DateField(name) {
        this.place = document.createElement("div");
        this.value = document.createTextNode(name);
        this.place.appendChild(this.value);
        this.element = document.createElement('input');
        this.place.appendChild(this.element);
        this.name = name;
        this.label = "etykieta";
        this.element.name = this.name;
        this.type = 3;
        this.element.type = "date";
    }
    DateField.prototype.render = function () {
        return this.place;
    };
    DateField.prototype.getValue = function () {
        return this.element.name + ":" + " " + this.element.value;
    };
    return DateField;
})();
var CheckField = (function () {
    function CheckField(name) {
        this.place = document.createElement("div");
        this.value = document.createTextNode(name);
        this.place.appendChild(this.value);
        this.element = document.createElement('input');
        this.place.appendChild(this.element);
        this.name = name;
        this.label = "etykieta";
        this.element.name = this.name;
        this.type = FieldType.checkbox;
        this.element.type = 'checkbox';
    }
    CheckField.prototype.render = function () {
        return this.place;
    };
    CheckField.prototype.getValue = function () {
        if (this.element.checked) {
            return this.element.name + ":" + " " + "tak";
        }
        else
            return this.element.name + ":" + " " + "nie";
    };
    return CheckField;
})();
var Form = (function () {
    function Form(id) {
        this.fields = new Array();
        this.formElement = document.getElementById(id);
    }
    Form.prototype.getValue = function () {
        this.fields.forEach(function (element) {
            console.log(element.getValue());
        });
    };
    Form.prototype.render = function () {
        var _this = this;
        this.fields.forEach(function (element) {
            _this.formElement.appendChild(element.render());
        });
    };
    Form.prototype.addNewField = function (field) {
        this.fields.push(field);
    };
    return Form;
})();
var app = (function () {
    function app(form) {
        this.form = form;
    }
    app.prototype.createForm = function () {
        this.form.render();
    };
    return app;
})();
var f = new Form("p1");
f.addNewField(new InputField("Imię"));
f.addNewField(new InputField("Nazwisko"));
f.addNewField(new DateField("Data urodzenia"));
f.addNewField(new CheckField("Oznajmiam, ze jestem pełnoletni"));
var ap = new app(f);
var showButton = document.getElementById("1");
showButton.addEventListener('click', function () { return f.getValue(); }, false);
ap.createForm();
