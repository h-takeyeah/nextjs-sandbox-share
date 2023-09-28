import hljs from 'highlight.js/lib/core'
import 'highlight.js/styles/default.css'
import { useEffect, useState } from 'react'

const OptimizedHighlightExperimental = ({ sourcecode, language }: { sourcecode: string, language: string }) => {
  const [value, setValue] = useState<string>('')

  useEffect(() => {
//    import(`highlight.js/lib/languages/${language}.js`)
/* will cause an error below:
     ./src/components/OptimizedHighlightExperimental.tsx:9:4
     Module not found: Package path ./lib/languages is not exported
     from package /path/to/nextjs-sandbox-share/highlight-edit-comparison/node_modules/highlight.js
     (see exports field in /path/to/nextjs-sandbox-share/highlight-edit-comparison/node_modules/highlight.js/package.json) */
/* but not cause type error because highlight.js has type declaration for `./lib/languages/*.js` */

    import(`../../node_modules/highlight.js/lib/languages/${language}.js`)
      .then(m => m.default)
      .then(f => {
        hljs.registerLanguage(language, f)
        setValue(hljs.highlight(sourcecode, { language: language || 'cpp' }).value)
      })
  }, [sourcecode, language])

/* This fragment will be called too many times to lead crash
   when is used outside of useEffect */

//  import(`@/../../node_modules/highlight.js/lib/languages/${language}.js`)
//    .then(m => m.default)
//    .then(f => {
//      hljs.registerLanguage(language, f)
//      setValue(() => {
//        console.log('import called') // will be called many times and crash!!!
//        return hljs.highlight(sourcecode, { language }).value
//      })
//    })

  return (
    <pre><code className={`hljs language-${language}`} dangerouslySetInnerHTML={{ __html: value }}></code></pre>
  )
}

export default OptimizedHighlightExperimental
