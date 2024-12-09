import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React from "react";
import Highlight from '@tiptap/extension-highlight'
import TaskItem from '@tiptap/extension-task-item'
import TaskList from '@tiptap/extension-task-list'

export const TipTapEditor: React.FC = () => {
    const editor = useEditor({
        extensions: [
            StarterKit.configure(),
            Highlight,
            TaskList,
            TaskItem,
        ],
        content: `
            <p> hi my name is <b>krish rathor</b>    </p>
            <code>
                const a = 2;
                const b = 3;
            </code>
        
        `
    });

    return (
        <EditorContent editor={editor} />
    )
}