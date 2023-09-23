import DOMPurify from 'dompurify'
import { marked } from 'marked'
import katex from "katex";
import React, { useMemo } from 'react';

export type MarkdownViewProps = {
  /** マークダウン文字列 */
  markdown: string;
} & Omit<React.HTMLAttributes<HTMLDivElement>, "children">;

const ESCAPE_SET = /\\[#$%&,.<>:;{}_=^`'"\\]/g;

const MarkdownView = ({ markdown, ...props }: MarkdownViewProps) => {
  const html = useMemo(() => {
    // marked が `\$` を `$` に直してしまうので予め `\\$` に置換。
    // その他、ESCAPE_SET に含まれるものについても同様に置換。
    let s = markdown;
    s = s.replaceAll(ESCAPE_SET, (capture0) => "\\" + capture0);
    s = marked.use({ gfm: true }).parse(s);
    s = replaceKatexToMathHtml(s);
    s = s.replaceAll("\\$", "$");
    s = DOMPurify.sanitize(s);
    return s;
  }, [markdown])

  return <div dangerouslySetInnerHTML={{ __html: html }} {...props} />
}

export default MarkdownView;

const KATEX_RANGE = /(?<=^|[^\\])(\${1,2})(?!\$)((?:[^])*?[^\\\$])\1(?!\$)/g;

const replaceKatexToMathHtml = (s: string): string => {
  return s.replaceAll(KATEX_RANGE, (_, capture1, capture2) => {
    const formula = capture2
      .replaceAll("&amp;", "&")
      .replaceAll("&quot;", "&")
      .replaceAll("&gt;", ">")
      .replaceAll("&lt;", "<")
      .replaceAll("\\<br>", "\\\\\n");
    return katex.renderToString(formula, {
      displayMode: capture1.length === 2,
      throwOnError: false,
    })
  })
}
