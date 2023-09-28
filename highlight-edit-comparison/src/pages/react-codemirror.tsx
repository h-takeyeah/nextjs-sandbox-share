import { useCodeMirror } from '@uiw/react-codemirror'
import { cpp } from '@codemirror/lang-cpp'
import { useEffect, useRef } from 'react'
import NavLinks from '@/components/NavLinks'

const extensions = [cpp()]

export default () => {
  const editor = useRef<HTMLDivElement>(null)
  const { setContainer } = useCodeMirror({
    container: editor.current,
    extensions,
    value: '#include <iostream>\nint main() {\n  std::cout << "Hello World" << endl;\n  return 0;\n}',
    maxHeight: '360px',
    minHeight: '120px',
    editable: false,
  })

  useEffect(() => {
    if (editor.current) {
      setContainer(editor.current)
    }
  }, [editor.current])

  return (
    <>
      <NavLinks />
      <div ref={editor} />
    </>
  )
}
