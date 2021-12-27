const SEARCH_TOPIC = "SEARCH-TOPIC";
const UPDATE_TOPIC = "UPDATE-TOPIC";

let initialState = {

  suggestions: [
    "forest",
    "brooklyn",
    "nature",
    "flowers",
    "sea",
    "outdoors",
    "moscow",
    "urban",
    "rain",
    "new york",
    "street",
    "cat",
    "dogs",
    "animal",
    "frog",
    "horse",
    "pet",
    "bird",
    "people",
    "woman",
    "fire",
    "husky",
    "mountain",
    "architecture",
    "audi",
    "automotive",
    "car",
    "daylight",
    "fast",
    "glass",
    "luxury",
    "parked",
    "pavement",
    "photography",
    "red",
    "road",
    "street",
    "ocean",
    "travel",
    "vehicle",
    "wheel"
  ],

  newSearchText: ""

};



const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_TOPIC: {
      let newTopic = state.newSearchText;
      return newTopic;
    }
    case UPDATE_TOPIC: {
      return {
        ...state,
        newSearchText: action.searchText
      };
      /*state.newPostText = action.postText;
      return state;*/
    }
    default: return state;
  }
}

export const searchTopicActionCreator = () => ({ type: SEARCH_TOPIC })

export const updateTopicActionCreator = (text) => ({ type: UPDATE_TOPIC, searchText: text })

export default mainReducer;