import NavLinks from '@/components/NavLinks'
import LineNumberHighlight from '@/components/LineNumberHighlight'

export default () => {
  const sourcecode1 =
`// ファイル末尾に改行がある場合
#include <iostream>
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
`

const sourcecode2 =
`// ファイル末尾に改行が無い場合(NO EOF)
#include <iostream>
#include <string>
using namespace std;`

const sourcecode3 =
`// ファイル末尾に空行がある場合
#include <iostream>
#include <string>
using namespace std;

`

  return (
    <>
      <NavLinks />
      <LineNumberHighlight sourcecode={sourcecode1} language={'cpp'} />
      <LineNumberHighlight sourcecode={sourcecode2} language={'cpp'} />
      <LineNumberHighlight sourcecode={sourcecode3} language={'cpp'} />
    </>
  )
}
