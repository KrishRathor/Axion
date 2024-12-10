import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React, { useState } from "react";
import BulletList from "@tiptap/extension-bullet-list";
import Document from "@tiptap/extension-document";
import ListItem from "@tiptap/extension-list-item";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import Blockquote from "@tiptap/extension-blockquote";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { all, createLowlight } from "lowlight";
import Heading from "@tiptap/extension-heading";
import Image from "@tiptap/extension-image";
import { Color } from "@tiptap/extension-color";
import Placeholder from "@tiptap/extension-placeholder";
import CommandsExtension from "./Command";
import suggestion from "./Suggestion";

const lowlight = createLowlight(all);

const content = `

<h1>Introducing Axion</h1>
<p>Your text editor with Ai</p>

<h2>Installation</h2>
<pre><code class="language-javascript">bun add @repo/axion</code></pre>

<h3>Usage</h3>
<pre><code class="language-javascript">
import { Editor } from "novel";

export default function App() {
  return (
     &lt;Editor /&gt;
  )
}
</code></pre>

<h3>Features</h3>
<ol>
  <li>Slash menu &amp; bubble menu</li>
  <li>Image uploads (drag &amp; drop / copy &amp; paste, or select from slash menu)</li>
  <li>Add tweets from the command slash menu:
  </li>
  <li>Mathematical symbols with LaTeX expression:
    <ol>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
      <li>Item 4</li>
      <li>Item 5</li>
    </ol>
  </li>
</ol>

<img 
  src="https://public.blob.vercel-storage.com/pJrjXbdONOnAeZAZ/banner-2wQk82qTwyVgvlhTW21GIkWgqPGD2C.png" 
  alt="banner.png" 
  title="banner.png" />

<hr />

<img src="https://www.marclittlemore.com/images/generated/create-pretty-code-screenshots-1024w.jpeg" alt="hi" />

<h3>Learn more</h3>
<ul>
  <li><a href="https://github.com/steven-tey/novel">Star us on GitHub</a></li>
  <li><a href="https://www.npmjs.com/package/novel">Install the NPM package</a></li>
  <li><a href="https://vercel.com/templates/next.js/novel">Deploy your own</a> to Vercel</li>
</ul>


`;

export const TipTapEditor: React.FC = () => {
  const [editorContent, setEditorContent] = useState<string>();
  const [show, setShow] = useState<boolean>(false);

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
        placeholder: "Type / for suggestions",
      }),
      CommandsExtension.configure({
        //@ts-ignore
        suggestion,
      }),
    ],
    content: content,
    onUpdate: (e) => {
      setEditorContent(e.editor.getHTML());
    },
    onCreate: e => {
      setEditorContent(e.editor.getHTML());
    }
  });

  return (
    <div>
      <EditorContent className="tiptap-editor prose" editor={editor} />
      <button onClick={() => {
        setShow(true);
        console.log(editorContent);
      }} >Show content</button>
      {
        show && <div>hi {editorContent}</div>
      }
    </div>
  );
};
