'use client';

import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch, UseDispatch } from "react-redux";
import { addComment } from "@/store/commentSlice";
import { useEffect, useState } from "react";

interface CommentValues {
    comment: string;
}

const CommentInput = () => {
    const { register, handleSubmit, reset } = useForm<CommentValues>();
    const dispatch = useDispatch();
    const [avatar, setAvatar] = useState('');

    useEffect(() => {
        const randomAvatar = `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`;
        setAvatar(randomAvatar);
    }, []);

    const onSubmit = (data: CommentValues) => {
        const newComment = {
            id: Date.now(),
            body: data.comment,
            name: 'maxblagun',
            avatar: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`,
        };
        dispatch(addComment(newComment));
        reset();

        const randomAvatar = `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`;
        setAvatar(randomAvatar);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex items-center justify-center w-full">
                <div className="bg-white rounded-lg p-4">
                    <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
                        <div className="flex items-start gap-4">
                            <img className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300" src={avatar} alt="Bordered avatar" />
                            <div className="w-full sm:w-96 py-2 px-4 bg-white rounded-lg rounded-t-lg border border-gray-200">
                                <textarea id="comment" rows={3} {...register('comment', { required: true })}
                                    placeholder="Add a comment..."
                                    className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none resize-none"
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' && !e.shiftKey) {
                                            e.preventDefault();
                                            handleSubmit(onSubmit)();
                                        }
                                    }}
                                />
                            </div>
                        </div>

                        <div className="flex justify-center sm:justify-start">
                            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default CommentInput;