var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var FieldType;
(function (FieldType) {
    FieldType[FieldType["textBox"] = 1] = "textBox";
    FieldType[FieldType["textArea"] = 2] = "textArea";
    FieldType[FieldType["date"] = 3] = "date";
    FieldType[FieldType["email"] = 4] = "email";
    FieldType[FieldType["radio"] = 5] = "radio";
    FieldType[FieldType["checkbox"] = 6] = "checkbox";
})(FieldType || (FieldType = {}));
var app = (function () {
    function app() {
    }
    app.prototype.createInput = function (name) {
        var para = document.createElement("p");
        var node = document.createTextNode(name);
        var inputnode = document.createElement("input");
        para.appendChild(node);
        para.appendChild(inputnode);
        var element = document.getElementById("div1");
        element.appendChild(para);
        return para;
    };
    app.prototype.createCheckbox = function (name) {
        var para = document.createElement("p");
        var node = document.createTextNode(name);
        var checknode = document.createElement("input");
        checknode.type = "checkbox";
        para.appendChild(node);
        para.appendChild(checknode);
        var element = document.getElementById("div1");
        element.appendChild(para);
        return para;
    };
    return app;
})();
var InputField = (function (_super) {
    __extends(InputField, _super);
    function InputField(name) {
        _super.call(this);
        this.element = document.createElement('input');
        this.name = name;
        this.label = "etykieta";
        this.element.name = this.name;
        this.type = FieldType.textBox;
        this.value = "";
    }
    InputField.prototype.render = function () {
        return this.createInput(this.name);
    };
    InputField.prototype.getValue = function () {
        return this.element.value;
    };
    return InputField;
})(app);
var TextArea = (function (_super) {
    __extends(TextArea, _super);
    function TextArea(name) {
        _super.call(this);
        this.element = document.createElement('input');
        this.name = name;
        this.label = "etykieta";
        this.element.name = this.name;
        this.type = FieldType.textArea;
    }
    TextArea.prototype.render = function () {
        return this.createInput(this.name);
    };
    TextArea.prototype.getValue = function () {
        return this.element.value;
    };
    return TextArea;
})(app);
var DateField = (function (_super) {
    __extends(DateField, _super);
    function DateField(name) {
        _super.call(this);
        this.element = document.createElement('date');
        this.name = name;
        this.label = "etykieta";
        this.element.name = this.name;
        this.type = FieldType.date;
    }
    DateField.prototype.render = function () {
        return this.createInput(this.name);
    };
    DateField.prototype.getValue = function () {
        return this.element.value;
    };
    return DateField;
})(app);
var CheckField = (function (_super) {
    __extends(CheckField, _super);
    function CheckField(name) {
        _super.call(this);
        this.element = document.createElement('checkbox');
        this.name = name;
        this.label = "etykieta";
        this.element.name = this.name;
        this.type = FieldType.checkbox;
    }
    CheckField.prototype.render = function () {
        return this.createCheckbox(this.name);
    };
    CheckField.prototype.getValue = function () {
        return this.element.value;
    };
    return CheckField;
})(app);
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
        this.fields.push(inputField);
        var textArea = new TextArea("Nazwisko");
        textArea.render();
        var dataArea = new DateField("Data");
        dataArea.render();
        var checkArea = new CheckField("Kromka");
        checkArea.render();
    };
    return Form;
})();
var ap = new Form("1");
