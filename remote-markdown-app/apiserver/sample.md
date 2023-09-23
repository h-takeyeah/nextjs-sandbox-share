## 問題文

$A + B$ の答えを求めてください。

## 制約

- $1 \leq A, B \leq 10^{18}$

## 入力

入力は以下の形式で標準入力から与えられます。

```
$A$ $B$
$X_1$ $X_2$ ... $X_N$
```

## 出力

答えを出力してください。


## 書式テスト

http://example.com

| name | age |
|:-----|:---:|
| Bob  | 334 |
| Alice | 5  |

```cpp
#include <iostream>
int main() {
    return 0;
}
```

- KaTeX
- $\KaTeX$

$$
\Gamma(z) = \int_0^\infty t^{z-1}e^{-t}dt\,.
$$

This is x: $x$

- micromark の README よりコピーした TeX

Lift($L$) can be determined by Lift Coefficient ($C_L$) like the following equation.

$$
L = \frac{1}{2} \rho v^2 S C_L
$$

## Raw HTML tags

<span>Here is `span`</span>

<div>Here is `div`</div>

<span class="example-class">Here is `span` with `class` attr</div>

<div class="example-class">Here is `div` with `class` attr</div>

↓ `script` Tag
<script>
console.warn("XSS!! Hahahaha!!!!!!!!!!!");
</script>
↑ `script` Tag

0 < 1 < 2

9 > 8 > 7

## Escape Characters
参考: https://katex.org/docs/supported.html#symbols-and-punctuation

- \# \$ \% \& \_ \{ \}
- $ \# \$ \% \& \_ \{ \} $

Escaped Dollar marker is \\$ a + b \\$ , Dollar in KaTeX is $ \$ a + b \$ $

$$
\sum_{i=0}^{n} \left(\log \mathrm{sim}(Q^{(i)}, k_+) \right)^2 \$a
$$

## Accent functions

- \' \= \" \v \^ \u \r
- $\text{\`{a} \={a} \"{a} \v{a} \^{a} \u{a} \r{a}}$

## Spaces

参考: https://katex.org/docs/supported.html#overlap-and-spacing

- a\,a\>a\:a\;a~a
- $a\,a\>a\:a\;a~a$

## Environments
参考: https://katex.org/docs/supported.html#environments

$$
x = \begin{cases}
   a &\text{if } b \\
   c &\text{if } d
\end{cases}
$$

---

$$
\def\arraystretch{1.5}
   \begin{array}{c:c:c}
   a & b & c \\ \hline
   d & e & f \\
   \hdashline
   g & h & i
\end{array}
$$

---

$$
\begin{equation}
\begin{split}
    a &=b+c \\
      &=e+f
\end{split}
\end{equation}
$$

---

$$
\begin{align}
   a&=b+c \\
   d+e&=f
\end{align}
$$

---

$$
\begin{CD}
   A @>a>> B   \\
@VbVV    @AAcA \\
   C   @=  D
\end{CD}
$$

---

inline katex which contains newline: $a
b
c
$

$A$$B$

block katex without outer space$$\frac{a}{b}$$xxxx
