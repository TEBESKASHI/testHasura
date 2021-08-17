import { ArticleLocale } from '../../../database/entity';

export class ArticleDto {
    id: number;
    lang: string;
    title: string;
    content: string;
    constructor(data: ArticleLocale) {
        this.id = data.articleId;
        this.lang = data.lang;
        this.title = data.title;
        this.content = data.content;
    }
}
