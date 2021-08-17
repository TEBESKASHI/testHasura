import Knex from 'knex';
import { Article, ArticleLocale } from '../entity';
import { articleList } from '../seedData';

export const seed = async (knex: Knex) => {
    const article = await knex<Article>('article').select('id').first();
    if (!article) {
        const ids = await knex<Article>('article')
            .insert(
                articleList.map((_) => {
                    return { createdAt: new Date() };
                })
            )
            .returning('id');
        const updatedArticleList = articleList.map((article, index) => {
            return { ...article, articleId: ids[index] };
        });
        for await (const article of updatedArticleList) {
            await knex<ArticleLocale>('article_locale').insert({ ...article, lang: 'RU' });
        }
    }
    return;
};
