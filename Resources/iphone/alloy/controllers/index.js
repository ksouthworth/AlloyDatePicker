function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function showDatePicker() {
        datePicker.getView().showDatePicker();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        layout: "composite",
        backgroundColor: "#ffffff",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.__alloyId0 = Ti.UI.createScrollView({
        layout: "vertical",
        color: "#ffffff",
        id: "__alloyId0"
    });
    $.__views.index.add($.__views.__alloyId0);
    $.__views.__alloyId1 = Ti.UI.createView({
        layout: "horizontal",
        color: "#ffffff",
        backgroundColor: "white",
        bottom: "10dp",
        left: "3%",
        width: "94%",
        height: Ti.UI.SIZE,
        top: "20dp",
        id: "__alloyId1"
    });
    $.__views.__alloyId0.add($.__views.__alloyId1);
    $.__views.lblDate = Ti.UI.createLabel({
        width: "99.666666%",
        height: Ti.UI.SIZE,
        color: "#333333",
        font: {
            fontFamily: "Helvetica Neue Light",
            fontSize: "14dp"
        },
        top: "10dp",
        layout: "vertical",
        text: "Input a Date",
        id: "lblDate"
    });
    $.__views.__alloyId1.add($.__views.lblDate);
    $.__views.__alloyId2 = Ti.UI.createView({
        layout: "horizontal",
        color: "#ffffff",
        top: "10dp",
        width: "100%",
        height: Ti.UI.SIZE,
        borderColor: "#cccccc",
        borderRadius: "4dp",
        borderWidth: "1dp",
        id: "__alloyId2"
    });
    $.__views.__alloyId1.add($.__views.__alloyId2);
    $.__views.txtDate = Ti.UI.createTextField({
        height: Ti.UI.SIZE,
        backgroundColor: "#ffffff",
        color: "#000000",
        paddingLeft: "5%",
        paddingRight: "5%",
        layout: "vertical",
        width: "99.666666%",
        id: "txtDate",
        top: "5",
        bottom: "5",
        editable: "false"
    });
    $.__views.__alloyId2.add($.__views.txtDate);
    showDatePicker ? $.__views.txtDate.addEventListener("touchstart", showDatePicker) : __defers["$.__views.txtDate!touchstart!showDatePicker"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var datePicker = Alloy.createWidget("com.ksouthworth.datepicker", "widget", {
        onDone: function(selectedDate) {
            $.txtDate.setValue(selectedDate.format());
        },
        minDate: new Date(2014, 0, 1),
        maxDate: new Date()
    });
    $.index.add(datePicker.getView());
    $.index.open();
    __defers["$.__views.txtDate!touchstart!showDatePicker"] && $.__views.txtDate.addEventListener("touchstart", showDatePicker);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;