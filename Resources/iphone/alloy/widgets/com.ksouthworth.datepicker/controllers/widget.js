function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "com.ksouthworth.datepicker/" + s : s.substring(0, index) + "/com.ksouthworth.datepicker/" + s.substring(index + 1);
    return path;
}

function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function init() {
        $.picker.backgroundColor = "red";
        $.picker.setType(Titanium.UI.PICKER_TYPE_DATE);
        args.minDate && $.picker.setMinDate(args.minDate);
        args.maxDate && $.picker.setMaxDate(args.maxDate);
    }
    function showDatePicker() {
        $.widget.animate(Ti.UI.createAnimation({
            bottom: 0,
            duration: 300
        }));
    }
    function done() {
        hideDatePicker();
        onDone(selectedDate($.picker));
    }
    function hideDatePicker() {
        $.widget.animate(Ti.UI.createAnimation({
            bottom: "-265dp",
            duration: 300
        }));
    }
    function selectedDate(picker) {
        return moment(picker.value);
    }
    new (require("alloy/widget"))("com.ksouthworth.datepicker");
    this.__widgetId = "com.ksouthworth.datepicker";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.widget = Ti.UI.createView({
        layout: "vertical",
        color: "#ffffff",
        id: "widget",
        width: Ti.UI.FILL,
        height: "255dp",
        bottom: "-265"
    });
    $.__views.widget && $.addTopLevelView($.__views.widget);
    $.__views.buttonContainer = Ti.UI.createView({
        layout: "composite",
        color: "#ffffff",
        backgroundColor: "#E8E8E8",
        id: "buttonContainer",
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE
    });
    $.__views.widget.add($.__views.buttonContainer);
    $.__views.cancelButton = Ti.UI.createButton({
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "14dp"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
        textAlign: "center",
        title: "Cancel",
        id: "cancelButton",
        left: "10%"
    });
    $.__views.buttonContainer.add($.__views.cancelButton);
    hideDatePicker ? $.__views.cancelButton.addEventListener("click", hideDatePicker) : __defers["$.__views.cancelButton!click!hideDatePicker"] = true;
    $.__views.doneButton = Ti.UI.createButton({
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "14dp"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
        textAlign: "center",
        title: "Done",
        id: "doneButton",
        right: "10%",
        systemButton: Ti.UI.iPhone.SystemButton.DONE
    });
    $.__views.buttonContainer.add($.__views.doneButton);
    done ? $.__views.doneButton.addEventListener("click", done) : __defers["$.__views.doneButton!click!done"] = true;
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        selectionIndicator: "true",
        useSpinner: "true"
    });
    $.__views.widget.add($.__views.picker);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var moment = require("alloy/moment");
    var args = arguments[0] || {};
    var onDone = args.onDone;
    init();
    $.widget.showDatePicker = showDatePicker;
    $.widget.hideDatePicker = hideDatePicker;
    __defers["$.__views.cancelButton!click!hideDatePicker"] && $.__views.cancelButton.addEventListener("click", hideDatePicker);
    __defers["$.__views.doneButton!click!done"] && $.__views.doneButton.addEventListener("click", done);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;