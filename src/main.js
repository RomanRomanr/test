import { fetchArticle } from "./js/pixabay-api";
import { ArticlesTemplate } from "./js/render-functions";
const refs = {
  form: document.querySelector('.form'),
    btn: document.querySelector('.js-btn'),
  ul_list: document.querySelector('.ul-js')
};

refs.form.addEventListener('submit', async e => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const query = formData.get('search-text');

    const res = await fetchArticle(query, 1);
    const markup = ArticlesTemplate(res.articles)
    refs.ul_list.innerHTML = markup;
    
    e.target.reset();

})