'use strict'

const parentUl = document.getElementById('articles');

const handleArticleListener = (e) => {
  const articleClass = e.target.classList.value;

  const allArticles = document.getElementsByClassName('oneArticle');
  for (let i = 0; i < allArticles.length; i++) {
    if (allArticles[i].classList.value.includes(articleClass)) {
      if (allArticles[i].classList.value.includes('hidden')) {
        allArticles[i].classList.remove('hidden');
      } else {
        allArticles[i].classList.add('hidden');
      }
    }

  }
}

parentUl.addEventListener('click', (e) => handleArticleListener(e));