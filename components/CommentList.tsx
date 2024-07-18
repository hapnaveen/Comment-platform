'use client';

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { removeComment, increaseVote, decreaseVote } from "@/store/commentSlice";
import { useState } from "react";

const CommentList = () => {
    const dispatch = useDispatch();
    const comments = useSelector((state: RootState) => state.comments.comments);

    const onDelete = (id: number) => {
        console.log(id)
        dispatch(removeComment(id));
    }

    const handleIncrement = (id: number) => {
        dispatch(increaseVote(id));
    };

    const handleDecrement = (id: number) => {
        dispatch(decreaseVote(id));
    };

    return (
        <>
            {comments.map(comment => (

                <div key={comment.id} className="max-w-xl mx-auto p-4 bg-white rounded-lg w-full">
                    <div className="flex gap-4 items-center ">
                        <div className="flex flex-col items-center bg-gray-100 rounded-lg px-3 py-1">
                            <button className="text-lg text-blue-700" onClick={() => handleIncrement(comment.id)}>+</button>
                            <div className="text-xl text-blue-700">{comment.votes}</div>
                            <button className="text-lg text-blue-700" onClick={() => handleDecrement(comment.id)}>-</button>
                        </div>
                        <div className="flex-1">
                            <div className="flex items-start gap-4">
                                <img className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300" src={comment.avatar} alt="Bordered avatar" />
                                <div className="flex-1">
                                    <div className="justify-between grid grid-cols-1 md:grid-cols-2">
                                        <div className="flex justify-start items-center gap-2">
                                            <h4 className="text-gray-900 font-semibold">{comment.name}</h4>
                                            <span className="text-gray-600 text-sm">2 days ago</span>
                                        </div>
                                        <div className="flex justify-start md:justify-end align-middle items-center">
                                            <button className="text-red-500 hover:text-red-700 mr-3 inline-flex items-center gap-1" onClick={() => onDelete(comment.id)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                                </svg>
                                                <span className="text-sm">Delete</span>
                                            </button>
                                            <button className="text-blue-500 hover:text-blue-700 mr-3 inline-flex items-center gap-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                                                </svg>

                                                <span className="text-sm">Edit</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className="mt-2 text-gray-800">
                                {comment.body}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default CommentList;