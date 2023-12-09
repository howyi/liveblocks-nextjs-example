'use client'

import {LexicalComposer} from "@lexical/react/LexicalComposer";
import {RichTextPlugin} from "@lexical/react/LexicalRichTextPlugin";
import {ContentEditable} from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import {TRANSFORMERS} from '@lexical/markdown';
import {MarkdownShortcutPlugin} from '@lexical/react/LexicalMarkdownShortcutPlugin';
import {CodeNode, CodeHighlightNode} from "@lexical/code";
import {AutoLinkNode, LinkNode} from "@lexical/link";
import {ListNode, ListItemNode} from "@lexical/list";
import {HeadingNode, QuoteNode} from "@lexical/rich-text";
import React from "react";

export const Editor: React.FC = () => {

    // Lexical config
    const initialConfig = {
        namespace: "LiveblocksDemo",
        nodes: [
            HeadingNode,
            ListNode,
            ListItemNode,
            QuoteNode,
            CodeNode,
            CodeHighlightNode,
            AutoLinkNode,
            LinkNode,
        ],
        theme: {},
        onError: (error: unknown) => {
            throw error
        },
    };

    return <div className={'p-8'}>
        <div className={"w-[1000px] text-lg p-8 leading-loose bg-slate-900 text-white rounded-xl border-2"}>
            <LexicalComposer initialConfig={initialConfig}>
                <RichTextPlugin
                    contentEditable={<ContentEditable/>}
                    placeholder={
                        <div>未入力</div>
                    }
                    ErrorBoundary={LexicalErrorBoundary}
                />
                <MarkdownShortcutPlugin transformers={TRANSFORMERS}/>
            </LexicalComposer>
        </div>
    </div>
}