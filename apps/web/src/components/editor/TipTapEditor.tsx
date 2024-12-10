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
import TaskItem from '@tiptap/extension-task-item'
import TaskList from '@tiptap/extension-task-list'
import Placeholder from "@tiptap/extension-placeholder";
import CommandsExtension from "./Command";
import suggestion from "./Suggestion";
import Youtube from '@tiptap/extension-youtube'

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

        <ul data-type="taskList">
          <li data-type="taskItem" data-checked="true">A list item</li>
          <li data-type="taskItem" data-checked="false">And another one</li>
        </ul>


`;

const torrentnotes = `
<h1>Understanding BitTorrent Protocol</h1> <p>BitTorrent is a decentralized protocol used for sharing files over the internet. It is designed to handle large-scale distribution efficiently, relying on a peer-to-peer (P2P) network rather than centralized servers. By splitting files into small pieces, BitTorrent allows multiple users to download and upload sections of a file simultaneously, which significantly increases download speed.</p> <h2>How Does BitTorrent Work?</h2> <p>BitTorrent works by allowing users to download parts of a file from multiple peers rather than from a single source. This approach not only accelerates the download process but also makes the network more resilient and efficient. Below is a simplified explanation of the process:</p>

<div data-youtube-video>
    <iframe src="https://www.youtube.com/watch?v=3lTUAWOgoHs"></iframe>
</div>

<ol> <li><b>User Request:</b> A user requests a file from a BitTorrent tracker.</li> <li><b>Tracker Response:</b> The tracker sends a list of peers that are either downloading or already have the file.</li> <li><b>Downloading:</b> The user starts downloading pieces of the file from various peers.</li> <li><b>Uploading:</b> As the user completes downloading a chunk, they start uploading that piece to other peers.</li> </ol> <h3>Key Components of the BitTorrent Network</h3> <p>There are several critical components that work together in the BitTorrent protocol:</p> <ul> <li><b>Tracker:</b> Coordinates the communication between peers and provides the list of active users sharing the file.</li> <li><b>Seeders:</b> Users who have downloaded the entire file and continue sharing it with others.</li> <li><b>Leechers:</b> Users who are in the process of downloading the file.</li> <li><b>Swarm:</b> The collective group of peers sharing a file.</li> </ul> <h2>Advantages of BitTorrent</h2> <ul> <li><b>Faster Downloads:</b> By downloading file parts from multiple sources simultaneously, users experience faster download speeds.</li> <li><b>Reduced Load on Servers:</b> As peers share the file with each other, the burden on central servers is significantly reduced.</li> <li><b>Resilience:</b> If one peer goes offline, the file can still be downloaded from other peers.</li> </ul> <h3>Code Example: Basic BitTorrent Client in Python</h3> <p>Here is a simple Python snippet that shows how a basic BitTorrent client can be structured using a library</p> <pre> <code class="language-python"> import torrent def start_download(torrent_file): torrent_client = torrent.Client() torrent_client.add_torrent(torrent_file) torrent_client.download() start_download("sample.torrent") </code> </pre> <h2>Legal Considerations</h2> <p>While the BitTorrent protocol itself is legal, the way it is used often raises legal concerns. Many users share copyrighted materials without permission, which is illegal in many countries. However, it is important to note that BitTorrent is also used for legitimate purposes like distributing open-source software and public domain content.</p> <h3>Example of Legal Use: Distributing Open Source Software</h3> <p>Many developers and open-source communities use BitTorrent to distribute large software packages. For example, the Linux distribution Ubuntu uses BitTorrent to provide an efficient way of downloading its ISO images.</p> <img src="https://example.com/ubuntu-bittorrent.png" alt="Ubuntu BitTorrent Download" /> <h2>BitTorrent vs. Other File Sharing Methods</h2> <p>Unlike traditional client-server file sharing, where a single server sends the entire file to a client, BitTorrent splits the file into chunks and distributes them across peers in the network. Below is a comparison of BitTorrent to other methods of file sharing:</p> <ul> <li><b>Traditional File Sharing:</b> Relies on centralized servers, which can cause bottlenecks and slow download speeds.</li> <li><b>Cloud Storage Services:</b> Services like Google Drive and Dropbox require users to upload and download files to/from a central server. They may also have file size limits and storage fees.</li> </ul> <h2>Conclusion</h2> <p>BitTorrent is a revolutionary file-sharing protocol that leverages the power of peer-to-peer networks for efficient and decentralized data distribution. While it is often associated with piracy, it also has many legitimate uses and remains an integral tool for large-scale file sharing, such as distributing software and public domain content.</p> <hr /> <h2>Additional Resources</h2>
`

const steps = `

<h1>A Cryptic Message from the Future</h1>

<p>The message arrived as a burst of static, a fragmented transmission clinging to the fringes of known radio frequencies.  Dr. Aris Thorne, a cryptographer with a penchant for the improbable, intercepted it – a half-formed plea from a future shrouded in digital distortion.  The message, partially decoded, read:  “Global…  catastrophic…  [unintelligible]…  solution…  quantum…  [static]…  Aetherium…  [more static]…  coordinates…  37°14′23.2″N 122°12′17.8″W.”</p>

<h2>Decoding the Enigma</h2>

<p>Aris was instantly hooked. The mention of a global catastrophe, a quantum solution, and a mysterious substance called Aetherium sparked a frantic race against an unknown deadline. He assembled a team, including Dr. Lena Hanson, a physicist specializing in quantum entanglement, and Marcus Bell, a seasoned intelligence operative.  The partial coordinates pointed to a location in California’s Silicon Valley.</p>

<h3>Analyzing the Static</h3>

<p>Lena tackled the scientific aspects. She theorized that the unintelligible portions of the message were not random noise, but data corrupted during transmission across time – a problem quantum physics might be able to address. Marcus, meanwhile, focused on security and logistics. He secured Aris's lab and began discreetly investigating possible connections between the coordinates and known research facilities in the area.</p>

<pre><code>
// Hypothetical code snippet for signal processing
// (Illustrative purposes only)

function processSignal(signal) {
  // Apply filtering and noise reduction techniques
  // Employ quantum computing algorithms for error correction
  // ...
  return decodedSignal;
}

</code></pre>


<ul>
    <li><b>Data Recovery:</b> The team employed sophisticated signal processing techniques and advanced quantum computing algorithms to reconstruct the missing parts of the message.</li>
    <li><b>Pattern Recognition:</b> Lena identified recurring patterns in the static, hinting at a hidden encryption key.</li>
    <li><b>Linguistic Analysis:</b> Aris used linguistic analysis to interpret the meaning of the recovered fragments.</li>
</ul>


<h2>The Aetherium Solution</h2>

<p>Days turned into sleepless nights as the team pieced together the fragmented message. The fully decoded message revealed a chilling scenario: A catastrophic solar flare, amplified by a newly discovered quantum phenomenon, was about to engulf Earth. The solution, the message claimed, lay in a newly synthesized element called Aetherium, capable of creating a protective field around the planet. The coordinates led them not to a research facility, but to a hidden underground laboratory beneath an abandoned tech company.</p>

<h3>The Underground Lab</h3>

<p>The lab was a marvel of engineering, filled with futuristic technology. They discovered blueprints detailing the creation of an Aetherium generator – a device capable of deflecting the solar flare. But the project was incomplete. The final stage of the process required a complex algorithm, cleverly hidden within the partially decoded message itself.</p>

<img src="placeholder_image.jpg" alt="Image of the underground laboratory">


<h2>Race Against Time</h2>

<p>With the solar flare imminent, Aris and his team raced against time to complete the generator. Lena oversaw the assembly and activation of the device. Marcus ensured their safety and defended them from potential threats.  The algorithm proved incredibly complex, requiring a deep understanding of quantum physics and cryptography. Using their combined expertise and knowledge, they finally unlocked the code.</p>

<h2>The Climax</h2>

<p>As the solar flare approached, the Aetherium generator hummed to life, creating an energy field that enveloped the planet. The blinding light of the flare was deflected, preventing the impending catastrophe. The message from the future, once a cryptic warning, became a testament to human ingenuity and collaborative spirit. The question that lingered was, who sent the message and how did they know about the future event?</p>


<h2>Epilogue</h2>

<p>The mystery remained. But the success of their mission provided hope, and a chilling reminder of the power of knowledge, the unknown, and the potential consequences that await mankind in a world yet unseen.</p>

`

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
      TaskList,
      TaskItem.configure({
        nested: true,
      }),
      Youtube.configure({
        controls: false,
        nocookie: true,
      }),
    ],
    content: steps,
    onUpdate: (e) => {
      setEditorContent(e.editor.getHTML());
    },
    onCreate: (e) => {
      setEditorContent(e.editor.getHTML());
    },
  });

  return (
    <div>
      <EditorContent className="tiptap-editor prose" editor={editor} />
      <button
        onClick={() => {
          setShow(true);
          console.log(editorContent);
        }}
      >
        Show content
      </button>
      {show && <div>hi {editorContent}</div>}
    </div>
  );
};
