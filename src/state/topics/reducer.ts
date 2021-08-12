import * as actionType from './constants/actionTypes';

import type { Topic } from './model';

const topics = (state: Topic[] = [], action) => {
    switch (action.type) {
        case actionType.FETCH_TOPICS_REQUEST:
        case actionType.FETCH_TOPICS_SUCCESS:
        case actionType.FETCH_TOPICS_FAILURE:
        //TODOFSA
        default:
            return state;
    }
};

export default topics;
