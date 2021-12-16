
export const getArticle = 
`*[_type == 'articles' && slug.current == $slug][0] {'slug': slug.current,title,author->{name},publishedAt,intro,main,}`

export const getArticleBySlug = 
`*[_type == "articles"]{"params": { "slug": slug.current }}`


export const getEssays = 
`*[_type == 'essays' && slug.current == $slug][0] {'slug': slug.current,title,author->{name},publishedAt,intro,main,}`

export const getEssayBySlug = 
`*[_type == "essays"]{"params": { "slug": slug.current }}`

export const getViews = {"mutations": [{"patch": {"_type": "articles","inc": {"views": 1}}}]}

    



