"use strict";

// constant symbols table of DOM Nodes;
const password = document.getElementById("password"),
  btn = document.getElementById("btn");
const checkboxes = Array.from(document.querySelectorAll("input[type=checkbox]"));

const button = document.getElementById("btn")
const LETTERS = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
const SYMBOLS =Array.from('\'!"#$%&\\{\/[{]_^({)+.@,-*.:?>=<')
var password = ''
        /* function updates the "output" element with the result from the
"/update" url then calls itself again in 4 seconds
*/
function updater(){
  var request = createXMLHttpRequest();
  // add time to GET request to prevent caching issues
  request.open("GET", "/" + (new Date()).getTime(), true);
  request.onreadystatechange = function() {
    if (request.readyState == 4) {
        password.innerText = request.responseText;
        setTimeout("updater()",4000);
    }
  }
  request.send(null);
}

updater()
/* cross browser way of creating XMLHttpRequests */
function createXMLHttpRequest() {
    if (typeof XMLHttpRequest != "undefined") {
        return new XMLHttpRequest();
    } else if (typeof ActiveXObject != "undefined") {
        return new ActiveXObject("Microsoft.XMLHTTP");
    } else {
        throw new Error("XMLHttpRequest not supported");
    }
}