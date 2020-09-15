import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
// import { prototype } from 'html-webpack-plugin';

$(document).ready(function () {
  $("#saintJohns").click(function () {
    $("#neighborhood").text($("#saintJohns").attr("value"));
    $(".cityInfo").fadeIn(1000);
  });
  $("#forestPark").click(function () {
    $("#neighborhood").text($("#forestPark").attr("value"));
    $(".cityInfo").fadeIn(1000);
  });


  // $('#search').submit(function (event) {
  //   event.preventDefault();

  //   function printName(name) {
  // $("#neighborhood").text(name);
  // $(".cityInfo").show();
  //   }

  //   printName(name);

  // });
});