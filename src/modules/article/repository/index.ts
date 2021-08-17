import pg from '../../../database';
import { Article, ArticleLocale } from '../../../database/entity';

const ARTICLE = 'article';
const ARTICLE_LOCALE = 'article_locale';

export default class ArticleRepository {
    createArticleId() {
        return pg<Article>(ARTICLE).insert({ createdAt: new Date() }).returning('id');
    }
    createArticle(article: ArticleLocale) {
        return pg<ArticleLocale>(ARTICLE_LOCALE)
            .insert({ ...article })
            .returning('*');
    }
    selectLastInsertedArticleId() {
        return pg<Article>(ARTICLE).select('id');
    }
    getArticlesById(id: number) {
        return pg<ArticleLocale>(ARTICLE_LOCALE).select('*').where({ articleId: id });
    }
}
