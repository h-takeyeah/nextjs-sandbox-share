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

- KaTeX

$$
\Gamma(z) = \int_0^\infty t^{z-1}e^{-t}dt\,.
$$

This is x: $x$

- micromark の README よりコピーした TeX

Lift($L$) can be determined by Lift Coefficient ($C_L$) like the following equation.

$$
L = \frac{1}{2} \rho v^2 S C_L
$$

http://example.com

| name | age |
|:-----|:---:|
| Bob  | 334 |
| Alice | 5  |

<span>Here is `span`</span>

<div class="example-class">Here is `div` with `class` attr</div>

↓ `script` Tag
<script>
console.warn("XSS!! Hahahaha!!!!!!!!!!!");
</script>
↑ `script` Tag

Escaped Dollar marker is \\$ a + b \\$ , Dollar in KaTeX is $ \$ a + b \$ $

$$
\sum_{i=0}^{n} \left(\log \mathrm{sim}(Q^{(i)}, k_+) \right)^2 \$a
$$

inline katex which contains newline: $a
b
c
$

$A$$B$

block katex without outer space$$\frac{a}{b}$$xxxx
