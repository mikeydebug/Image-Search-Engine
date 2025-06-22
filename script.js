const searchform = document.querySelector("#search-form");
const searchbox =document.querySelector("#search-box");
const searchresult = document.querySelector("#search-result");
const showmorebtn =document.querySelector("#show-more-btn");
const accesskey="zCBt0qUGwUl_WhxV_oisZ4yatFIvqCptZHrxukzy2nU";

let keyword="";
let page =1;

async function searchimage() {
    keyword=searchbox.ariaValueMax;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}`;
    
}
