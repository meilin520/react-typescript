import http from '@/utils/http';

const postArticlesList = (params: any) => http("post", "/api/article/articlePage", params)

export {
    postArticlesList
}