import { Extension } from '@tiptap/core';
import Suggestion from '@tiptap/suggestion';

interface CommandOptions {
  suggestion: {
    char: string;
    command: (params: { editor: any; range: any; props: any }) => void;
  };
}

export default Extension.create<CommandOptions>({
    name: 'commands',
  
    addOptions() {
      return {
        suggestion: {
          char: '/',
          command: ({ editor, range, props }) => {
            props.command({ editor, range });
          },
        },
      };
    },
  
    addProseMirrorPlugins() {
      return [
        Suggestion({
          editor: this.editor,
          ...this.options.suggestion,
        }),
      ];
    },
});

