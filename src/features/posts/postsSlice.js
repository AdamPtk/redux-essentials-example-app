import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [
  { id: '1', title: 'First Post!', content: 'Hello!' },
  { id: '2', title: 'Second Post', content: 'More text' }
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload)
      },
      prepare(title, content) {
        return {
          payload: {
            id: nanoid(),
            title,
            content
          }
        }
      }
    },
    postUpdated(state, action) {
      const { id, title, content } = action.payload;
      const exisitingPost = state.find(post => post.id === id);
      if (exisitingPost) {
        exisitingPost.title = title;
        exisitingPost.content = content;
      }
    }
  }
})

export const { postAdded, postUpdated } = postsSlice.actions;

export default postsSlice.reducer;