import hljs from 'highlight.js'
import 'highlight.js/styles/default.css'
import styles from './LineNumberHighlight.module.css'

// 一番最後以外の改行文字にマッチする
const BREAK_LINE_REGEXP = /\r\n(?!$)|\r(?!$)|\n(?!$)/

const LineElement = ({ sourcecodeLine, lineNumber }: { sourcecodeLine: string, lineNumber: number }) => {
  return (
    <>
      <span className={styles['ln-numbers']}>{lineNumber}</span>
      <span className={styles['ln-codes']} dangerouslySetInnerHTML={{ __html: sourcecodeLine }}></span>
    </>
  )
}

const LineNumberHighlight = ({ sourcecode, language }: { sourcecode: string, language: string }) => {
  const lines = hljs.highlight(sourcecode, { language }).value.split(BREAK_LINE_REGEXP)

  return (
    <pre>
      <code className={`hljs language-${language}`}>
      {lines.map((line, i) => (<LineElement sourcecodeLine={line} key={i} lineNumber={i + 1} />))}
      </code>
    </pre>
  )
}

export default LineNumberHighlight
