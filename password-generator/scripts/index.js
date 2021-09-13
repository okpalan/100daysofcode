"use strict";

// constant symbols table of DOM Nodes;
const span = document.getElementById("password"),
  btn = document.getElementById("btn");
const checkboxes = Array.from(document.querySelectorAll("input[type=checkbox]"));
const length = document.getElementById("btn")
const LETTERS = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
const SYMBOLS =Array.from('\'!"#$%&\\\{\/[{]_^({)+.@,-*.:?>=<')