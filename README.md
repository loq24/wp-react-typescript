<p align="center"><img width="300" src="/assets/images/wp-react-ts.jpg" ></p>

<h3 align="center">
  WP React Typescript
</h3>

<p align="center">
  A simple admin functionality with JWT authentication
</p>

<p align="center">
  <a href="https://github.com/loq24/wp-react-typescript/"><img src="https://badges.frapsoft.com/typescript/code/typescript.svg?v=101"></a>
  <a href="https://github.com/loq24/wp-react-typescript/"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square"></a>
</p>  

## About

`wp-react-typescript` was developed to help other React.js developers in building an admin section of their project. They can make this their guide in integrating authentication using JWT. This will also help them properly type their React project especially when using `react-redux` with Typescript.


## React Redux Actions

I think the most complicated part of this project is to implement type checking for redux's Actions & Reducers. These are the steps that helped me typed those easily:

1. Ask yourself if what are the data you need?
On my end, I need a `Post` data specically these fields `id`, `title`, `content`, `excerpt`, `modified` & `date`so my interface should look like this:
```javascript

interface Rendered {
 rendered: string;
}

export interface Post {
 id: number;
 title: Rendered;
 content: Rendered;
 excerpt: Rendered;
 modified: string;
 date: string;
}

```
2. Create a secondary interface for the dispatch `type` & `payload` properties. This will be very useful in creating our Actions so we have to export it as well.
```javascript
export interface FetchPostAction {
 type: ActionWPTypes.fetchPost;
 payload: Post;
}
```

3. Implement the interfaces to your actions.
```javascript
export const fetchPosts = () => {
 return async (dispatch: Dispatch) => {
  try {
   const response = await axios.get<Post[]>(`${Constants.apiUri}/posts`);
   dispatch<FetchPostsAction>({
    type: ActionWPTypes.fetchPosts,
    payload: response.data
   });
   dispatch<ClearMessageAction>({ type: ActionMessagesTypes.clearMsg });
  } catch (error) {
   console.log(error);
  }
 };
};
```
Please see the full code under <a href="/src/actions">/src/actions</a> directory.

## React Redux Reducers

To implement type checking on your reducers. You just have to import all the Action's dispatch interfaces and make a Union type out of those. Your action should look like this:
```javascript
type Actions = FetchCurrentUserAction | FetchPostsAction | FetchPostAction | UpdatePostAction | PublishPostAction | DeletePostAction;
```
Please see the full code under <a href="/src/reducers">/src/reducers</a> directory.

## Code completion and IntelliSense

When done right, you will have a very intelligent code suggestions upon typing in your Code Editor.
<p><img src="/assets/images/screenshots/Screen%20Shot%202019-08-12%20at%2010.03.42%20PM.png" ></p>
<p><img src="/assets/images/screenshots/Screen%20Shot%202019-08-12%20at%202.38.53%20PM.png" ></p>
<p><img src="/assets/images/screenshots/Screen%20Shot%202019-08-12%20at%202.40.21%20PM.png" ></p>

