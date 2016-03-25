import { DELETE_ARTICLE, ADD_COMMENT } from '../actions/constants'
import { addComment } from '../utils'
import { articles as defaultArticles} from '../fixtures'

export default (articles = defaultArticles, action) => {
    const { type, data, generatedId:commentId } = action

    switch (type) {
      case DELETE_ARTICLE:
        return articles.filter(article => article.id !== data.id);

      case ADD_COMMENT:
        return addComment(articles, commentId, data.articleId);
    }

    return articles
}
