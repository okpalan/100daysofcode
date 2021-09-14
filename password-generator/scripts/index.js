"use strict";
const SYMBOLS = Array.from("'!\"#$%&\\{/[{]_^({)+.@,-*.:?>=<");
//Methods Utility programs
const fill = Array.prototype.fill,
  random = Math.random,
  from = Array.from;

// constant symbols table of DOM Nodes;
const output = document.getElementById("password"),
  btn = document.getElementById("btn");
const checkboxes = from(document.querySelectorAll("input[type=checkbox]"));

const count = document.getElementById("count").value;
const button = document.getElementById("btn");
const LETTERS = from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
const LOWERCASE = [...LETTERS.toString().toLowerCase()];
var password = null;

if (+count <= 4) alert("Password length cannot be less than 0");
password = new Array(count).fill(0, 0);
