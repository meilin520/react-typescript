import ArticlesList from "@/page/Articles/ArticlesList";
import { ArticleAction, getArticlesDataAction } from '@/redux/actions';
import { ArticlesRequestType, IntersectionStateType, ArticlesType, ArticlesStoreState } from "@/types";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { postArticlesList } from '@/api';

const mapStateToProps = (state: IntersectionStateType) => {
    const { articles }: ArticlesStoreState = state.articles;
    return {
        articles
    };
}

const mapDispatchToProps = (dispatch: Dispatch<ArticleAction>) => {
    return {
        onGetArticle: (params: ArticlesRequestType) => {
            // 请求数据
            postArticlesList(params).then((response: any)=>{
                if(response.code==200){
                    const res: ArticlesType|any = response?.data;
                    const data = {
                        list: res.dataList,
                        total: res.totalNo,
                    }
                    dispatch(getArticlesDataAction(data))
                }
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesList);