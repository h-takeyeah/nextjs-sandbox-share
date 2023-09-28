import Link from "next/link";
import { memo } from "react";

export default memo(() => (
  <>
    <nav>
      <ul>
        <li><Link href="/hljs">highlight.js example</Link></li>
        <li><Link href="/optimized-hljs">optimized highlight.js example</Link>(load only 4 language parsers)</li>
        <ul>
          <li><Link href="/optimized-hljs-dynamic">version 2 (<strong>next/dynamic</strong>)</Link></li>
        </ul>
        <li><Link href="/optimized-hljs-experimental">(experimental) optimized highlight.js example</Link>(do not load language parser at startup)</li>
        <li><Link href="/line-number-hljs">highlight.js (with line number) example</Link></li>
        <li><Link href="/codemirror">(original) codemirror v6 example</Link></li>
        <ul>
          <li><Link href="/codemirror-dynamic">codemirror v6 example (<strong>next/dynamic</strong>)</Link></li>
        </ul>
        <li><Link href="/react-codemirror">@uiw/react-codemirror example</Link></li>
        <li><Link href="/react-textarea-code-editor">@uiw/react-textarea-code-editor example</Link></li>
        <li><Link href="/">Top</Link></li>
      </ul>
    </nav>
  </>
))
