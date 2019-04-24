import {normalizedArticles as defaultArticles} from '../fixtures'
import {DELETE_ARTICLE, FILTER_ARTICLE} from '../constants'
import {arrToMap} from '../helpers'

export default (articleState = arrToMap(defaultArticles), action) => {
  const {type, payload} = action;

  switch (type) {
    case DELETE_ARTICLE:
      const tmpState = {...articleState};
      delete tmpState[payload.id];
      return tmpState
  };

  return articleState
}
