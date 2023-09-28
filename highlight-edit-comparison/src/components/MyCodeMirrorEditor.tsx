import { cpp } from '@codemirror/lang-cpp'
import { defaultHighlightStyle, syntaxHighlighting } from '@codemirror/language'
import { EditorState } from '@codemirror/state'
import { EditorView, highlightActiveLine, highlightActiveLineGutter, highlightSpecialChars, lineNumbers } from '@codemirror/view'
import { useEffect, useRef } from 'react'

const MyCodeMirrorEditor = ({ defaultValue }: { defaultValue?: string }) => {
  const editorParentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!editorParentRef.current) return

    const editorView = new EditorView({
      state: EditorState.create({
        doc: defaultValue,
        extensions: [
          lineNumbers(),
          highlightActiveLineGutter(),
          highlightSpecialChars(),
          syntaxHighlighting(defaultHighlightStyle, { fallback: true }),
          highlightActiveLine(),
          cpp(),
        ]
      }),
      parent: editorParentRef.current,
    })

    return () => {
      editorView.destroy()
    }
  }, [editorParentRef])

  return <div ref={editorParentRef} />
}

export default MyCodeMirrorEditor
