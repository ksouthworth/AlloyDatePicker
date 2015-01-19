
/* Setup Picker
 * ********************************************************************************************* */
var datePicker = Alloy.createWidget("com.ksouthworth.datepicker", "widget", {
    onDone : function(selectedDate) {
        $.txtDate.setValue(selectedDate.format());
    },
    minDate : new Date(2014, 0, 01),
    maxDate : new Date()
});
/*** Get the View ***/
$.index.add(datePicker.getView());


function showDatePicker() {
	datePicker.getView().showDatePicker();
}

/* Open the View */
$.index.open();
