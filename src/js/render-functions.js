function ArticleTemplate(article) {
  const deff =
    'https://static6.depositphotos.com/1026266/543/i/450/depositphotos_5437053-stock-photo-woman-pressing-modern-error-button.jpg';
    let { autor, title, description, publishedAt, url, urlToImage = deff,
    } = article;

    return `
      <li class="li-elem">
    <h2 class="title-h2">${title}</h2>
    <img class="image" src="${urlToImage}" alt="">
    ${autor ? `<p class="autor">${autor}</p>` : ''}
    <p class="decr">${description}</p>
    <a class="link" href="${url}">Посилання на джерело</a>
    <p class="date"> Was posted ${new Date(publishedAt).toLocaleString()}</p>
  </li>`;
};

export function ArticlesTemplate(articles) {
    return articles.map(ArticleTemplate).join('');
}

