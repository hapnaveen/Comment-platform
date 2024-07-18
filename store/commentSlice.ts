import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Comment {
    id: number;
    name: string;
    body: string;
    avatar: string;
    votes: number;
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
        }, 
        increaseVote: (state, action: PayloadAction<number>) => {
            const comment = state.comments.find(comment => comment.id === action.payload);
            if (comment) {
              comment.votes += 1;
            }
        },
        decreaseVote: (state, action: PayloadAction<number>) => {
            const comment = state.comments.find(comment => comment.id === action.payload);
            if (comment) {
                comment.votes -= 1;
            }
        }
    }
})

export const {addComment, removeComment, increaseVote, decreaseVote} = commentSlice.actions;
export default commentSlice.reducer;