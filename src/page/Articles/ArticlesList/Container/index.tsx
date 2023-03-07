import ArticlesList from "../index";
import { ArticleAction, getArticlesDataAction } from '@/redux/actions/articlesAction';
import { ArticlesRequestType, ArticlesStoreState, ArticlesType } from "@/types";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { postArticlesList } from '@/api';

export const mapStateToProps = ({ articles }: ArticlesStoreState) => {
    return {
        articles,
    };
}

export const mapDispatchToProps = (dispatch: Dispatch<ArticleAction>) => {
    return {
        onGetArticle: (params: ArticlesRequestType) => {
            // 请求数据
            postArticlesList(params).then((response: any)=>{
                console.log(response)
                if(response.code==200){
                    const data: ArticlesType|any = response?.data?.dataList
                    dispatch(getArticlesDataAction(data))
                }
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesList);