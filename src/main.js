import { fetchArticle } from "./js/pixabay-api";
import { ArticlesTemplate } from "./js/render-functions";
import iziToast from "izitoast";
import 'izitoast/dist/css/iziToast.min.css'

const refs = {
  form: document.querySelector('.form'),
  btn: document.querySelector('.js-btn'),
  ul_list: document.querySelector('.ul-js'),
  loader: document.querySelector('.loader-btn'),
};
const PER_PAGE = 8;
let query;
let page;
let totalpages;
refs.form.addEventListener('submit', async e => {
  e.preventDefault();

  const formData = new FormData(e.target);
  query = formData.get('search-text');
  page = 1;

  try {
    const res = await fetchArticle(query, page);
    console.log(res);
    const markup = ArticlesTemplate(res.articles)
    refs.ul_list.innerHTML = markup;
    totalpages = Math.ceil(res.totalResults / PER_PAGE);
    iziSucces(`Дані успішно завантажені!Загалом сторінок: ${totalpages}`);

  }
  catch {
    iziError("Можлива помилка серверу");
    return;
  }
  showBTN();
  checkBTN();
  e.target.reset();

});
refs.loader.addEventListener('click', async e => {
  page += 1;
  disabledBTN();
  try {
    const res = await fetchArticle(query, page);
    const markup = ArticlesTemplate(res.articles);
    refs.ul_list.insertAdjacentHTML("beforeend", markup);
    iziSucces('Дані успішно завантажені!');
  }
  catch {
    iziError('Можлива помилка серверу');
  }
  checkBTN();
  
});
 
// function hideBTN() {
//   refs.loader.classList.add('hidden');
// }
function showBTN() {
  refs.loader.classList.remove('hidden');
}
function disabledBTN() {
  refs.loader.disabled = true;
}
function enabletBTN() {
  refs.loader.disabled = false;
}
function checkBTN() {
  if (page >= totalpages) {
    disabledBTN();
    iziAlarm('Це остання сторінка');
  } else {
    enabletBTN();
  }
}
function iziError(message) { 
  iziToast.error({
    title: 'Щось пішло не так 😥',
    message: message,
    position: 'topRight',
    timeout: 4000,
  });
};
function iziSucces(message) { 
  iziToast.success({
    title: 'Успіх!😄',
    message: message,
    position: "topRight",
    timeout:2000,
  });

};
function iziAlarm(message) { 
  iziToast.warning({
    title: 'УВАГА!😲',
    message: message,
    timeout:4000,
  });

};
