parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"p7kT":[function(require,module,exports) {
var e=document.getElementById("toggle"),t=document.querySelectorAll(".sidebar a"),l=document.querySelectorAll("main section");function a(){document.getElementById("sidebar").classList.toggle("active"),document.querySelector("main").classList.toggle("fullwidth"),document.querySelector(".bg-alpha").classList.toggle("active")}e&&e.addEventListener("click",function(){a()});for(var n=0;n<t.length;n++)t[n].addEventListener("click",function(){for(var e=0;e<l.length;e++)l[e].classList.remove("active");document.querySelector(this.hash).classList.add("active")});function o(){document.getElementById("from-data").value,document.getElementById("to-data").value;for(var e=document.querySelectorAll(".details-table tr td:nth-child(2)"),t=0;t<e.length;t++)console.log(e[t].innerHTML)}function d(){var e=document.getElementById("bar-chart");e&&new Chart(e,{type:"bar",data:{labels:["1","2","3","4","5","6","7","8","9","10"],datasets:[{label:"Signups",backgroundColor:"#56819F",data:[133,221,283,478,576,567,444,414,266,166]},{label:"FTD",backgroundColor:"#FFA200",data:[208,147,375,134,565,555,237,444,334,276]}]},options:{title:{display:!0}}})}var c=document.querySelector(".btn-details");c&&c.addEventListener("click",o),document.addEventListener("DOMContentLoaded",d),$(document).ready(function(){$(".modal-link").click(function(){$(".modal").show(),$(".modal-bg").show()}),$(".modal .close").click(function(){$(".modal").hide(),$(".modal-bg").hide()})});
},{}]},{},["p7kT"], null)
//# sourceMappingURL=/docs/script.8b645da3.js.map