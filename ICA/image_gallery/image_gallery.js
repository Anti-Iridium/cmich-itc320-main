"use strict"

$(document).ready( () => {
	$("#image_list a").each( (index, link) => {
		// get the image URL and caption for each image
		const imageURL = link.href;
		const caption = link.title;

		// preload the image for each link        
		const galleryImage = new Image();
		galleryImage.src = imageURL;

		// set up the event handlers for each link
		$(link).click( evt => {
			$("#caption").text(caption).fadeIn(2000,
				() => {	
				$("#caption").text(caption)
				$("#image").attr("src", imageURL);
				$("#caption, #image").fadeI(2000);
				
				
		});

			// cancel the default action of each link
			evt.preventDefault();
		}); // end click 
	}); // end each
}); // end ready