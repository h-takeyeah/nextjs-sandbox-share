import NavLinks from '@/components/NavLinks'
import dynamic from 'next/dynamic'

const MyCodeMirrorEditor = dynamic(() => import('@/components/MyCodeMirrorEditor').then(mod => mod.default), {
  loading: () => <p>Loading...</p>,
  ssr: false
})

const source = String.raw`#include <iostream>
int main() {
  std::cout << "Hello World" << endl;
  return 0;
}`

export default () => {
  return (
    <>
      <NavLinks />
      <MyCodeMirrorEditor defaultValue={source} />
    </>
  )
}
