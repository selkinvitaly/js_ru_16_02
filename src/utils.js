import store from './store'

export function getRelation(entity, relation) {
    const state = store.getState()
    if (!entity[relation] || !state[relation]) return []
    return state[relation].filter(el => entity[relation].includes(el.id))
}

export function addComment(articles, commentId, articleId) {

  return articles.map(article => {

    if (article.id !== articleId) {
      return article;
    }

    let newComments = null;

    if (article.comments) {
      newComments = article.comments.concat(commentId);
    } else {
      newComments = [];
      newComments.push(commentId);
    }

    let newArticle = Object.assign({}, article);

    newArticle.comments = newComments;

    return newArticle;
  });

}
