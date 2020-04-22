var FieldType;
(function (FieldType) {
    FieldType[FieldType["textBox"] = 1] = "textBox";
    FieldType[FieldType["textArea"] = 2] = "textArea";
    FieldType[FieldType["data"] = 3] = "data";
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
        this.element = document.createElement('input');
        this.name = name;
        this.label = "etykieta";
        this.element.name = this.name;
        this.type = FieldType.textArea;
    }
    TextArea.prototype.render = function () {
        return this.element;
    };
    TextArea.prototype.getValue = function () {
        return this.element.value;
    };
    return TextArea;
})();
var DateField = (function () {
    function DateField(name) {
        this.element = document.createElement('date');
        this.name = name;
        this.label = "etykieta";
        this.element.name = this.name;
        this.type = FieldType.data;
    }
    DateField.prototype.render = function () {
        return this.element;
    };
    DateField.prototype.getValue = function () {
        return this.element.value;
    };
    return DateField;
})();
var Form = (function () {
    function Form(id) {
        this.fields = new Array();
        this.formElement = document.getElementById(id);
    }
    Form.prototype.getValue = function () {
        this.fields.forEach(function (element) {
            element.getValue();
        });
    };
    Form.prototype.render = function () {
        var inputField = new InputField("Imie");
        inputField.render();
        var textArea = new TextArea("Nazwisko");
        textArea.render();
        var dataArea = new DateField("Data");
        dataArea.render();
    };
    return Form;
})();
var app = new Form("1");
app.render();
