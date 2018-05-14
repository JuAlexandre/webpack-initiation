import moment from "moment";
import 'bootstrap';
import '../src/css/style.scss';

let $ = require("jquery");

console.log("Bienvenue dans WebPack !");
console.log(moment().startOf('day').fromNow());

$('.btn-place').append(
    '<button class="btn btn-primary">Le jQuery c\'est super !</button>'
);
