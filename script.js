// ============================================== * navbar * ==============================================
let country = document.getElementById('country');
let moving = document.getElementById('moving');
let text = document.getElementById('text');
let list = document.getElementById('list');

country.addEventListener('click',() =>{
   list.classList.toggle('hidden');
   moving.classList.toggle('rotate');
});
function myFunction(a){
   text.innerHTML=a;
}

let end_tag=document.getElementById('eng_tag');
let hindi_english=document.querySelector('.hindi_english');
let language=document.querySelector('.language');

language.addEventListener('click', () =>{
   hindi_english.classList.toggle('display_div');
});
function languageolx(b){
   end_tag.innerHTML=b;
}

let girl_img_id=document.getElementById('girl_img_id');
let gdropdownid=document.getElementById('dropdownid');

girl_img_id.addEventListener('click',()=>{
  dropdownid.classList.toggle('block_div');
});

// ============================================== * ad bar 1 * ==============================================

let ad_img=document.querySelector('.ad_img');
let ad_icon=document.getElementById('ad_icon');

ad_icon.addEventListener('click',()=>{
  ad_img.style = 'display: none';
});

// ============================================== * Load More * ==============================================

let load_more_id=document.getElementById('load_more_id');
let load_more_products_id=document.getElementById('load_more_products_id');

load_more_id.addEventListener('click',()=>{
  load_more_products_id.style='display: block';
  load_more_id.style = 'display: none';
});

// ============================================== * ad bar 2 * ==============================================

let ad_img2=document.querySelector('.ad_img2');
let ad_icon2=document.getElementById('ad_icon2');

ad_icon2.addEventListener('click',()=>{
  ad_img2.style = 'display: none';
});




