import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React from "react";
import BulletList from "@tiptap/extension-bullet-list";
import Document from "@tiptap/extension-document";
import ListItem from "@tiptap/extension-list-item";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import Blockquote from "@tiptap/extension-blockquote";
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import { all, createLowlight } from 'lowlight'
import Heading from '@tiptap/extension-heading'
import Image from '@tiptap/extension-image'
import { Color } from '@tiptap/extension-color'
import Placeholder from '@tiptap/extension-placeholder'

const lowlight = createLowlight(all);

export const TipTapEditor: React.FC = () => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure(),
      Document,
      BulletList,
      ListItem,
      Paragraph,
      Text,
      Color,
      Image,
      Blockquote,
      CodeBlockLowlight.configure({
        lowlight,
      }),
      Heading.configure({
        levels: [1, 2, 3],
      }),
      Placeholder.configure({
        placeholder: 'Type / for suggestions'
      })
    ],
    content: `
        `,
  });

  return (
    <EditorContent
      className="tiptap-editor prose text-white mx-auto border border-white rounded-md"
      editor={editor}
    />
  );
};
