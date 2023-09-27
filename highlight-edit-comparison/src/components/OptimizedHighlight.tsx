import { ComponentPropsWithRef, FC, useCallback, useEffect, useRef } from 'react'
import hljs from 'highlight.js/lib/core'
import cpp from 'highlight.js/lib/languages/cpp'
import 'highlight.js/styles/default.css'

// React.strictMode & dev 環境だと useEffect が2回呼ばれるのでハイライト後の HTML を
// さらにハイライトしようとして警告が出る
if (process.env.NODE_ENV === 'development') {
  hljs.configure({ ignoreUnescapedHTML: true })
}

const languages = ['javascript']

const OptimizedHighlight: FC<ComponentPropsWithRef<'pre'>> = ({ children }) => {
  const ref = useRef<HTMLPreElement>(null)
//  const registerLanguage = useCallback(() => Promise.all(
//    languages.map(async l => {
//      const m = await import(`highlight.js/es/languages/${l}.js`)
//      return hljs.registerLanguage(l, m)
//    })
//  ), [languages])

  const registerLanguage = useCallback(() => Promise.all([
    hljs.registerLanguage('cpp', cpp)
  ]), [languages])

  useEffect(() => {
    if (!ref.current) return
    const elements = ref.current.querySelectorAll<HTMLElement>('pre code')
    registerLanguage().then(() => {
      for (let i = 0; i < elements.length; i++) {
        hljs.highlightElement(elements[i])
      }
    })
  }, [ref])

  return <pre ref={ref}><code>{children}</code></pre>
}

export default OptimizedHighlight
