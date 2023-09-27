import Link from "next/link";

export default () => (
  <>
    <nav>
      <ul>
        <li><Link href='/hljs'>highlight.js example</Link></li>
        <li><Link href='/optimized-hljs'>optimized highlight.js example</Link>(do not load language parser at startup)</li>
        <li><Link href='/'>Top</Link></li>
      </ul>
    </nav>
  </>
)
