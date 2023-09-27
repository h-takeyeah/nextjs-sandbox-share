import CodeMirror, { ReactCodeMirrorProps } from '@uiw/react-codemirror'
import { cpp } from '@codemirror/lang-cpp'
import { useCallback, useState } from 'react'
import NavLinks from '@/components/NavLinks'

export default () => {
  const [sourcecode, setVal] = useState<string>('')
  const onChange = useCallback<NonNullable<ReactCodeMirrorProps['onChange']>>((value, viewUpdate) => {
    setVal(value)
  }, [])
  return (
    <>
      <NavLinks />
      <CodeMirror value={sourcecode} height='200px' extensions={[cpp()]} onChange={onChange} />
    </>
  )
}
