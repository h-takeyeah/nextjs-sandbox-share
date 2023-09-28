import NavLinks from '@/components/NavLinks'
import OptimizedHighlightExperimental from '@/components/OptimizedHighlightExperimental'
import hljs from 'highlight.js/lib/core'
import { useState } from 'react'

hljs.configure({ ignoreUnescapedHTML: true })

export default () => {
//  const [value, setValue] = useState<string>('')
//  import('highlight.js/lib/languages/cpp').then(languageFn => typeof languageFn === 'function' ? languageFn : languageFn.default).then(res => setValue(`${JSON.stringify(res(hljs))}`))
//  return (
//    <>
//      <p>{value}</p>
//    </>
//  )
  const [lang, setLang] = useState<string>('cpp')

  const sourcecode = lang === 'cpp'
    ? String.raw
`#include <iostream>
int main() {
  cout << "Hello World" << endl;
  return 0;
}
`
    : lang === 'java'
      ? String.raw
`public class Main {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}
`
      : ''

  return (
    <>
      <NavLinks />
      <select value={lang} onChange={(evt) => setLang(evt.target.value)}>
        <option value="cpp">cpp</option>
        <option value="java">java</option>
      </select>
      <OptimizedHighlightExperimental sourcecode={sourcecode} language={lang} />
    </>
  )
}
