import { Controller, Post, Response, Body } from '@decorators/express';
import ArticleService from '../service';
import { getCountryFromIp } from '../../../utils';
import { ArticleDto } from '../dto/article-dto';

@Controller('/article')
export class ArticleController {
    private articleService = new ArticleService();
    @Post('/createArticle')
    async createArticle(@Response() res: any, @Body() body) {
        const { content, title } = body.input.data;
        const lang = getCountryFromIp(res);
        const createdArticle = await this.articleService.createArticle({ content, title, lang });
        return res.json(new ArticleDto({ ...createdArticle }));
    }
    @Post('/getArticle')
    async getArticle(@Response() res: any, @Body() body) {
        const { id, lang } = body.input.data;
        const language = lang || getCountryFromIp(res);
        const articleByIdAndLang = await this.articleService.getArticleByIdAndLang(id, language);
        if (articleByIdAndLang.error)
            return res.status(400).json({
                message: articleByIdAndLang.message,
            });
        return res.json(new ArticleDto({ ...articleByIdAndLang.data }));
    }
    @Post('/createArticleByLang')
    async createArticleByLang(@Response() res: any, @Body() body) {
        const { content, title, lang, id } = body.input.data;
        const createdArticle = await this.articleService.createArticle({ content, title, lang, articleId: id });
        return res.json(new ArticleDto({ ...createdArticle }));
    }
}
