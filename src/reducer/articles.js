import {normalizedArticles as defaultArticles} from '../fixtures'
import {ADD_COMMENT, DELETE_ARTICLE, FILTER_ARTICLE} from '../constants'
import {arrToMap} from '../helpers'

export default (articleState = arrToMap(defaultArticles), action) => {
  const {type, payload, generateId} = action;

  switch (type) {
    case DELETE_ARTICLE:
      const tmpState = {...articleState};
      delete tmpState[payload.id];
      return tmpState

    case ADD_COMMENT:
      console.log(payload.comment)
      console.log(articleState)

      // нужен артиклайди,
  };

  return articleState
}
