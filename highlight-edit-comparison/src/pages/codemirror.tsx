import MyCodeMirrorEditor from '@/components/MyCodeMirrorEditor'
import NavLinks from '@/components/NavLinks'

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
