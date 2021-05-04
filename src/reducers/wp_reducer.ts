import {
  FetchCurrentUserAction,
  User,
  ActionWPTypes,
  FetchPostsAction,
  FetchPostAction,
  UpdatePostAction,
  PublishPostAction,
  DeletePostAction,
  TestingWPAction,
  Post
} from "../actions";

type Actions =
  | FetchCurrentUserAction
  | FetchPostsAction
  | FetchPostAction
  | UpdatePostAction
  | PublishPostAction
  | DeletePostAction
  | TestingWPAction;

export interface InitialState {
  currentUser?: User;
  posts: Post[];
  post?: Post;
}

export const initialState: InitialState = {
  posts: []
};

const wpReducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case ActionWPTypes.fetchCurrentUser:
      return { ...state, currentUser: action.payload };
    case ActionWPTypes.fetchPosts:
      return { ...state, posts: action.payload, post: undefined };
    case ActionWPTypes.updatePost || ActionWPTypes.publishPost:
      return { ...state, posts: [] };
    case ActionWPTypes.fetchPost:
      return { ...state, post: action.payload };
    case ActionWPTypes.deletePost:
      return {
        ...state,
        posts: state.posts.filter((post: Post) => post.id !== action.payload)
      };
    default:
      return state;
  }
};

export default wpReducer;
