import { ArticleLocale } from '../../../database/entity';
import ArticleRepository from '../repository';
export default class UserService {
    private articleRepository = new ArticleRepository();
    async createArticleId() {
        const ctreatedArticle = await this.articleRepository.createArticleId();
        return ctreatedArticle[0];
    }
    async createArticle(article: ArticleLocale) {
        const articleId = article.articleId ? article.articleId : await this.createArticleId();
        const createdArticleLocale = await this.articleRepository.createArticle({ ...article, articleId });
        return createdArticleLocale[0];
    }
    async getArticleByIdAndLang(id: number, lang: string) {
        const articles = await this.articleRepository.getArticlesById(id);
        const articleByLang = articles.filter((article) => article.lang === lang);
        if (!articleByLang.length) return { error: true, message: 'There is no translation to the current language' };
        return { error: false, data: articleByLang[0] };
    }
}
