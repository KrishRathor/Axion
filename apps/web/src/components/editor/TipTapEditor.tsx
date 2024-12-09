import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React from "react";
import BulletList from '@tiptap/extension-bullet-list'
import Document from '@tiptap/extension-document'
import ListItem from '@tiptap/extension-list-item'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'

export const TipTapEditor: React.FC = () => {
    const editor = useEditor({
        extensions: [
            StarterKit.configure(),
            Document,
            BulletList,
            ListItem,
            Paragraph,
            Text
        ],
        content: `
            <ul>
                <li>hi there</li>
                <li>bi there</li>
            </ul>
        `
    });

    return (
        <EditorContent editor={editor} />
    )
}