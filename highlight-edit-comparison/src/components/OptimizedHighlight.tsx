import hljs from 'highlight.js/lib/core'
import c from 'highlight.js/lib/languages/c'
import cpp from 'highlight.js/lib/languages/cpp'
import java from 'highlight.js/lib/languages/java'
import python from 'highlight.js/lib/languages/python'
import 'highlight.js/styles/default.css'

hljs.registerLanguage('c', c)
hljs.registerLanguage('cpp', cpp)
hljs.registerLanguage('java', java)
hljs.registerLanguage('python', python)

// React.strictMode & dev 環境だと useEffect が2回呼ばれるのでハイライト後の HTML を
// さらにハイライトしようとして警告が出る
if (process.env.NODE_ENV === 'development') {
  hljs.configure({ ignoreUnescapedHTML: true })
}

const OptimizedHighlight = ({ sourcecode, language }: { sourcecode: string, language: string}) => {
  const { value } = hljs.highlight(sourcecode, { language })
  return <pre><code className={`hljs language-${language}`} dangerouslySetInnerHTML={{ __html: value }}></code></pre>
}

export default OptimizedHighlight
