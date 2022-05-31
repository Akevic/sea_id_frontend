import { configureStore, createSlice } from '@reduxjs/toolkit'

type imageProps = {
  url: string
  name?: string
}

const initialState: imageProps[] = []

const imageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {
    addImage (state: any[], action: { payload: any } | undefined) {
      // console.log(action.payload)
      state.push(...action!.payload)
      console.log(state)
    }
  }
})

export const store = configureStore({
  reducer: {
    images: imageSlice.reducer
  }
})

export const imageActions = imageSlice.actions
export const allImages = (state: RootState) => state.images

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
