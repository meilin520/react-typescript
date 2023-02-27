import http from '@/utils/http';

const postArticlesList = (params: any) => http("post", "/article/articlePage", params)

export {
    postArticlesList
}