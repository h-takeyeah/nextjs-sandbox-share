import { useData } from '@/lib/useData'
import DOMPurify from 'dompurify'
import { marked } from 'marked'
import katex from "katex";
import "katex/dist/katex.min.css"


export default () => {
  const data = useData<{ statement: string }>('http://localhost:3001/api/sample')
  if (!data) {
    return <div>Loading...</div>
  }

  // marked が `\$` を `$` に直してしまうので予め `\\$` に置換。
  // すると marked は `\\$` を `\$` に直して出力する。
  let rawHtml = data.statement;
  rawHtml = rawHtml.replaceAll("\\$", "\\\\$");
  rawHtml = marked.use({ gfm: true }).parse(rawHtml);
  rawHtml = replaceKatexToMathHtml(rawHtml);
  rawHtml = rawHtml.replaceAll("\\$", "$"); // katex に変換されなかった文字列を修正
  rawHtml = DOMPurify.sanitize(rawHtml);

  return (
    <>
      <h1>サンプル問題 - marked の場合</h1>
      <div dangerouslySetInnerHTML={{ __html: rawHtml }}></div>
    </>
  )
}

const KATEX_RANGE = /(?<=^|[^\\])(\${1,2})(?!\$)((?:[^])*?[^\\\$])\1(?!\$)/g;

const replaceKatexToMathHtml = (s: string): string => {
  console.log(s);
  return s.replaceAll(KATEX_RANGE,
    (_, capture1, capture2) => katex.renderToString(capture2, {
      displayMode: capture1.length === 2,
      throwOnError: false,
    }))
}
