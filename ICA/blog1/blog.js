"use strict";

const domain = "https://jsonplaceholder.typicode.com";
const commentsCache = new Map();

const getObject = async url => {
    const response = await fetch(url);
    const obj = response.json();
    return obj;
};

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}  

const getComments = async postId => {
    if(commentsCache.has(postId)) {
        return commentsCache.get(postId);
    } else {
        const url = `${domain}/posts/${postId}/comments`;
        const comments = await getObject(url);
        commentsCache.set(postId, comments);
        return comments;
    }
};

const displayComments = (comments, div) => {
    let html = "<ul>";
    for(const comment of comments) {
        html += `<li>${comment.body}</li>`;
    }
    html += "</ul>";
    $(div).append(html);
};

const displayPosts = (posts, users) => {
    let html = "";
    for(const i in posts) {
        // users array was returned by Promises.allSettled()
        const username = (users[i].status == "fulfilled") ? 
            users[i].value.username : "?";

        // build HTML
        html += `<h2>${posts[i].title}</h2>`;
        html += `<p>${posts[i].body}</p>`;

        html += "<div class='comments'>";
        html += `<label>Posted by ${username}</label>`;
        html += `<a href='#' data-postid='${posts[i].id}'>
            View comments</a>`;
        html += "</div>";
    }
    $("#posts").html(html);

    // add click event handler to newly created "View comments" links
    $("a").click(async evt => {
        evt.preventDefault();
        const div = evt.currentTarget.parentNode;
        const ul = div.querySelector("ul");
        if (ul) {  // comments need to be removed
            div.removeChild(ul);
        } else {     // comments need to be retrieved and displayed
            const id = evt.currentTarget.getAttribute("data-postid");
            const comments = await getComments(id);
            displayComments(comments, div);
        }  
    });
};

$(document).ready( async () => {
    try {
        // get the posts with the ids of 1, 11, 21, 31, and 41
        let rando1 = getRandomIntInclusive(1, 100);
        let rando2 = getRandomIntInclusive(1, 100);
        let rando3 = getRandomIntInclusive(1, 100);
        let rando4 = getRandomIntInclusive(1, 100);
        let rando5 = getRandomIntInclusive(1, 100);

        const postPromises = [
            getObject(`${domain}/posts/`+rando1),
            getObject(`${domain}/posts/`+rando2),
            getObject(`${domain}/posts/`+rando3),
            getObject(`${domain}/posts/`+rando4),
            getObject(`${domain}/posts/`+rando5)
        ];        
        const posts = await Promise.all(postPromises);

        // get user for each post
        const userPromises = posts.map( 
            post => getObject(`${domain}/users/${post.userId}`)
        );
        const users = await Promise.allSettled(userPromises);

        displayPosts(posts, users);
    } 
    catch(e) {
        alert(e.message)
    }
});