"use strict"

class LangStore {

    getDict() {
        return {
          en: {
            loading: "Loading...",
            loadingComments: "loading comments...",
            createNewArticle: "create new article",
            newArticlePage: "New article page",
            indexArticle: "Index page for articles",
            needLogin: "you need login",
            login: "Login",
            addComment: "add comment",
            noComments: "Sorry, no comments here",
            hideComments: "hide comments",
            showComments: "show comments",
            noRoutes: "Sorry, route not found, go here",
            deleteArticle: "delete this article"
          },

          ru: {
            loading: "Загрузка...",
            loadingComments: "загрузка комментариев...",
            createNewArticle: "создать статью",
            newArticlePage: "Страница создания статьи",
            indexArticle: "Главная страница статей",
            needLogin: "вам нужно залогиниться",
            login: "Войти",
            addComment: "добавить комментарий",
            noComments: "Нет комментариев",
            hideComments: "скрыть комментарии",
            showComments: "показать комментарии",
            noRoutes: "Не найдена страница. Может это",
            deleteArticle: "удалить статью"
          }

        };
    }
}

export default LangStore
