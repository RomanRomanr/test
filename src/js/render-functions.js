function ArticleTemplate(article) {
    let { autor, title, description, publishedAt, url, urlToImage,
    } = article;

    return `
      <li>
    <h2>${title}</h2>
    <img src="${urlToImage}" alt="">
    <p>${autor}</p>
    <p>${description}</p>
    <a href="${url}">Джерело</a>
    <span>${publishedAt}</span>
  </li>

    `;
};

export function ArticlesTemplate(articles) {
    return articles.map(ArticleTemplate).join();
}