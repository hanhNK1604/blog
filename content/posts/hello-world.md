---
title: Hello World
description: Bài test hiển thị code block và math
tags: [post, intro]
---


Chào mừng đến với phần Posts. Đây là bài test đầu tiên.

Code block (TypeScript):

```ts
type Vec2 = { x: number; y: number }

function dot(a: Vec2, b: Vec2): number {
  return a.x * b.x + a.y * b.y
}

console.log(dot({ x: 1, y: 2 }, { x: 3, y: 4 }))
```

Math block:

$$
\sum_{i=1}^n i = \frac{n(n+1)}{2}
$$


