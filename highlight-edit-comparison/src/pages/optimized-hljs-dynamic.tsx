import NavLinks from '@/components/NavLinks'
import dynamic from 'next/dynamic'
import { useState } from 'react'

const sourcecodes = {
  c: `#include <stdio.h>
int main() {
  fprintf(stdout, "Hello World\n");
  return 0;
}
`,
  cpp: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string s;
    cin >> s;
    int counter = 0;
    if (s[0] == '1') ++counter;
    if (s[1] == '1') ++counter;
    if (s[2] == '1') ++counter;
    cout << counter << endl;
}
`,
  java: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}
`,
  python: 'print("Hello World")\n',
} as const

const OptimizedHighlight = dynamic(() => import('@/components/OptimizedHighlight'), {
  loading: () => <p>Loading...</p>
})

export default () => {
  const [lang, setLang] = useState<keyof typeof sourcecodes>('cpp')
  const sourcecode = sourcecodes[lang]

  return (
    <>
      <NavLinks />
      <select value={lang} onChange={(evt) => setLang(evt.target.value as keyof typeof sourcecodes)}>
        <option value="c">c</option>
        <option value="cpp">cpp</option>
        <option value="java">java</option>
        <option value="python">python</option>
      </select>
      <OptimizedHighlight sourcecode={sourcecode} language={lang} />
    </>
  )
}
