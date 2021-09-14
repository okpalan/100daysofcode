"use strict";

// constant symbols table of DOM Nodes;
const output = document.getElementById("psd"),
  btn = document.getElementById("btn");
const checkboxes = Array.from(document.querySelectorAll("input[type=checkbox]"));
const psdlength = document.getElementById("psd_len")
const button = document.getElementById("btn")
const LETTERS = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
const SYMBOLS =Array.from('\'!"#$%&\\{\/[{]_^({)+.@,-*.:?>=<')
//Methods Utility programs
const fill =Array.prototype.fill,
random = Math.random;

var password = []

