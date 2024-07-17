import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Comment {
    id: number;
    name: string;
    body: string;
    avatar: string;
}

interface CommentState {
    comments: Comment[];
}

const initialState: CommentState = {
    comments: []
}

const commentSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        addComment : (state, action: PayloadAction<Comment>) => {
            state.comments.push(action.payload);
        },
        removeComment: (state, action: PayloadAction<number>) => {
            state.comments = state.comments.filter(comment => comment.id !== action.payload);
        }
    }
})

export const {addComment, removeComment} = commentSlice.actions;
export default commentSlice.reducer;