import {normalizedComments as defaultComments} from '../fixtures'
import {DELETE_ARTICLE, FILTER_ARTICLE} from '../constants'
import {arrToMap} from '../helpers'

export default (commentsState = arrToMap(defaultComments), action) => {
  const {type, payload} = action;

  switch (type) {

  };

  return commentsState
}
