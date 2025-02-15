"use strict";
function storageSelect() {
    if (('#localorsession').charAt(0) == 'S') {
        $('#localorsession').value('Local');
    }
    if (('#localorsession').charAt(0) == 'L') {
        $('#localorsession').value('Session');
    }
}

const calculateDiscount = (customer, subtotal) => {
    switch(customer) {
        case "reg":
            if (subtotal >= 100 && subtotal < 250) {
                return .1;
            } else if (subtotal >= 250 && subtotal < 500) {
                return  .25;
            } else if (subtotal >= 500) {
                return .3;
            } else {
                return 0;
            }
        case "loyal":
            return .3;
        case "honored":
            return (subtotal < 500) ? .4 : .5;
    }
};

const getFormattedDate = date => {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    const dateText = month + "/" + day + "/" + year;
    return dateText;    
}

$( document ).ready( () => {

    $("#calculate").click( () => {
        const customerType = $("#type").val();
        let subtotal = $("#subtotal").val() || 0;  // default value of zero
        subtotal = parseFloat(subtotal);

        const discountPercent = calculateDiscount(customerType, subtotal);
        const discountAmount = subtotal * discountPercent;
        const invoiceTotal = subtotal - discountAmount;

        $("#subtotal").val( subtotal.toFixed(2) );
        $("#percent").val( (discountPercent * 100).toFixed(2) );
        $("#discount").val( discountAmount.toFixed(2) );
        $("#total").val(  invoiceTotal.toFixed(2) );
        var textVal=document.getElementById("invoice_date").value;
        if (!textVal.match(/\S/)) 
        {
            alert("Field is blank");
            return false;
        } 
        else 
        {
            return true;
        }


        // set focus on type drop-down when done
        $("#type").focus();
    });

    // set focus on type drop-down on initial load
    $("#type").focus();
});