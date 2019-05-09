import {normalizedComments as defaultComments} from '../fixtures'
import {ADD_COMMENT, DELETE_ARTICLE, FILTER_ARTICLE} from '../constants'
import {arrToMap} from '../helpers'

export default (commentsState = arrToMap(defaultComments), action) => {
  const {type, payload, randomId} = action;

  switch (type) {
    case ADD_COMMENT:
      return {...commentsState, [randomId]: action.comment}
  };

  return commentsState
}
