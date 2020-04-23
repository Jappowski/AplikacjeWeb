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
        this.element = document.createElement('input');
        this.name = name;
        this.label = "etykieta";
        this.element.name = this.name;
        this.type = FieldType.textBox;
    }
    InputField.prototype.render = function () {
        return this.element;
    };
    InputField.prototype.getValue = function () {
        return this.element.value;
    };
    return InputField;
})();
var TextArea = (function () {
    function TextArea(name) {
        this.name = name;
        this.element = document.createElement('input');
        this.label = "etykieta";
        this.element.name = this.name;
        this.type = FieldType.textArea;
    }
    TextArea.prototype.render = function () {
        return this.element;
    };
    TextArea.prototype.getValue = function () {
        return this.element.name + ":" + " " + this.element.value;
    };
    return TextArea;
})();
var DateField = (function () {
    function DateField(name) {
        this.element = document.createElement('date');
        this.name = name;
        this.label = "etykieta";
        this.element.name = this.name;
        this.type = FieldType.date;
    }
    DateField.prototype.render = function () {
        return this.element;
    };
    DateField.prototype.getValue = function () {
        return this.element.value;
    };
    return DateField;
})();
var CheckField = (function () {
    function CheckField(name) {
        this.element = document.createElement('checkbox');
        this.name = name;
        this.label = "etykieta";
        this.element.name = this.name;
        this.type = FieldType.checkbox;
    }
    CheckField.prototype.render = function () {
        return this.element;
    };
    CheckField.prototype.getValue = function () {
        return this.element.name + ":" + " " + this.element.value;
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
f.addNewField(new TextArea("Imię"));
f.addNewField(new TextArea("Nazwisko"));
var a = new Form("p2");
a.addNewField(new CheckField("Oznajmiam, ze jestem pełnoletni"));
var ap = new app(f);
var appp = new app(a);
var showButton = document.getElementById("1");
showButton.addEventListener('click', function () { return f.getValue(); }, false);
ap.createForm();
appp.createForm();
