"use strict";
const $ = selector => document.querySelector(selector);

const focusAndSelect = selector => {
    const elem = $(selector);
    elem.focus();
    elem.select();
};

const processEntries = () => {
    const subtotal = parseFloat($("#subtotal").value);
    const tax_rate = parseFloat($("#tax_rate").value);

    if (isNaN(subtotal) || subtotal <= 0 || subtotal > 10000) {
        alert('Subtotal must be > 0 and < 10000');
        focusAndSelect("#subtotal");
    } else if (isNaN(tax_rate) || tax_rate <= 0 || tax_rate > 12) {
        alert("Tax Rate must be > 0 and < 12");
        focusAndSelect("#tax_rate");
    } else {
        $("#sales_tax").value = (subtotal * (tax_rate * .01)).toFixed(2);
		$("#total").value = ((subtotal * (tax_rate * .01)) + subtotal).toFixed(2);

    }
};

const clearEntries = () => {
	$("#subtotal").value = "";
	$("#tax_rate").value = "";
	$("#sales_tax").value = "";
	$("#total").value = "";
	focusAndSelect('#subtotal');
};

/*const clearAndSelect = selector => {
	const elem = $(selector);
	elem.value = "";
	elem.select();
}
*/ ///what I tried, but failed

document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#calculate").addEventListener("click", processEntries);
	$("#clear").addEventListener("click", clearEntries);
	//$("#subtotal").addEventListener("click", clearAndSelect);
	//$("#tax_rate").addEventListener("click", clearAndSelect);

});