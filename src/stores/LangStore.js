"use strict"

class LangStore {

    getDict() {
        return {
          en: {
            loading: "Loading...",
            createNewArticle: "create new article",
            indexArticle: "Index page for articles",
            needLogin: "you need login",
            login: "Login",
            addComment: "add comment",
            noComments: "Sorry, no comments here",
            hideComments: "hide comments",
            showComments: "show comments"
          },

          ru: {
            loading: "Загрузка...",
            createNewArticle: "создать статью",
            indexArticle: "Главная страница статей",
            needLogin: "вам нужно залогиниться",
            login: "Войти",
            addComment: "добавить комментарий",
            noComments: "Нет комментариев",
            hideComments: "скрыть комментарии",
            showComments: "показать комментарии"
          }

        };
    }
}

export default LangStore
