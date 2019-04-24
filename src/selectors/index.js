import {createSelector} from 'reselect'

const filtersGetter = state => state.filters;
const articlesGetter = state => state.articles;
const idGetter = (state, props) => props.id;
const commentsGetter = state => state.comments;

console.log(filtersGetter);

export const filterArticlesSelector = createSelector(filtersGetter, articlesGetter, (filters, articles) => {
  let {selected, dateRange: {from, to}} = filters;
  selected = selected.map(article => article.value)

  return articles.filter(article => {
    const published =  Date.parse(article.date);
    return (!selected.length || selected.includes(article.id)) &&
    (!from  || !to || (published > from && published < to))
  });

})

export const commentSelectorFactory = () => createSelector(idGetter, commentsGetter, (id, comments) => {
  return comments[id]
})
