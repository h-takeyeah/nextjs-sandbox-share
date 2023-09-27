import { ComponentPropsWithRef, FC, useEffect, useRef } from 'react'
import hljs from 'highlight.js'
import 'highlight.js/styles/default.css'

// React.strictMode & dev 環境だと useEffect が2回呼ばれるのでハイライト後の HTML を
// さらにハイライトしようとして警告が出る
if (process.env.NODE_ENV === 'development') {
  hljs.configure({ ignoreUnescapedHTML: true })
}

const HighlightRefVersion: FC<ComponentPropsWithRef<'pre'>> = ({ children }) => {
  const ref = useRef<HTMLPreElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const elements = ref.current.querySelectorAll<HTMLElement>('pre code')
    for (let i = 0; i < elements.length; i++) {
      hljs.highlightElement(elements[i])
    }
  }, [ref])

  return <pre ref={ref}><code>{children}</code></pre>
}

const HighlightInnerHTMLVersion = ({ sourcecode, language }: { sourcecode: string, language: string }) => {
  const { value } = hljs.highlight(sourcecode, { language })
  return (
    <pre><code className={`hljs language-${language}`} dangerouslySetInnerHTML={{ __html: value }}></code></pre>
  )
}

export default HighlightRefVersion
// export default HighlightInnerHTMLVersion
