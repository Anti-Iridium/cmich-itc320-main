"use strict";

$( document ).ready( () => { 

    $("#countdown").click( () => {
        const eventName = $("#event").val();
        const eventDate = $("#date").val();  
        const messageLbl = $("#message");  
        
        // make sure user entered task and event date 
        if (eventName.length == 0 || eventDate.length == 0) {
            messageLbl.text( "Please enter both a name and a date." );
            return;
        }  
      
        // make sure event date string has two slashes 
        const dateParts = eventDate.split("/");
        if (dateParts.length != 3) {   
            messageLbl.text( "Please enter the date in MM/DD/YYYY format." );
            return;
        } 
        // make sure event date string has a 4-digit year
        const year = eventDate.substring(eventDate.length - 4); 
        if (isNaN(year)) {
            messageLbl.text( "Please enter the date in MM/DD/YYYY format." );
            return;
        }
             
        const dayte1 = eventDate.charAt(3);
        const dayte2 = eventDate.charAt(4);
        const dayte3 =  dayte1.concat(dayte2);
        console.log(dayte1);
        console.log(dayte2);
        console.log(dayte3);
        if (dayte1 >= 3 && dayte2 >= 9 && dayte3 >= 31) {
            messageLbl.text( "Please enter a valid Day" );
            return;
        }
        
        const mon1 = eventDate.charAt(0);
        const mon2 = eventDate.charAt(1);
        const mon3 =  mon1.concat(mon2);
        console.log(mon1);
        console.log(mon2);
        console.log(mon3);
        if (mon3 >= 12 && mon3 < 0) {
            messageLbl.text( "Please enter a valid Month" );
            return;
        }  

        // convert event date string to Date object and check for validity
        let date = new Date(eventDate);
        if (date == "Invalid Date") {
            messageLbl.text( "Please enter the date in MM/DD/YYYY format." );
            return;
        }

        // capitalize each word of event name
        let formattedName = "";
        const words = eventName.split(" ");
        for (const i in words) {
            const firstLetter = words[i].substring(0,1).toUpperCase();
            const word = firstLetter + words[i].substring(1).toLowerCase();
            formattedName += word.padEnd(word.length + 1);
        } 
        formattedName = formattedName.trimEnd();     

        // calculate days
        const today = new Date();
        const msFromToday = date.getTime() - today.getTime();
        const msForOneDay = 24 * 60 * 60 * 1000; // hrs * mins * secs * milliseconds  
        let daysToDate = Math.ceil( msFromToday / msForOneDay ); 

        // create and display message 
        let msg = "";
        date = date.toDateString();
        if (daysToDate == 0) {
            msg = `Hooray! Today is ${formattedName}! (${date})`;
        }
        else if (daysToDate > 0) {
            msg = `${daysToDate} day(s) until ${formattedName}! (${date})`;
        }
        else if (daysToDate < 0) {
            daysToDate = Math.abs(daysToDate);
            msg = `${formattedName} happened ${daysToDate} day(s) ago. 
                  (${date})`;
        }
        messageLbl.text(msg);
    });
    
    $("#event").focus();
});