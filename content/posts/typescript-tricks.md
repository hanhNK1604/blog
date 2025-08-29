---
title: TypeScript Tricks
description: Một vài mẹo nhỏ về TypeScript
tags: [post, typescript]
---

Utility type ví dụ:

```ts
type RequireKeys<T, K extends keyof T> = T & { [P in K]-?: T[P] }

type User = { id?: string; email?: string; name?: string }
type UserWithId = RequireKeys<User, "id">
```

Regex trong JS:

```js
const pattern = /(^#[a-f0-9]{6}$)|(^#[a-f0-9]{3}$)/i
console.log(pattern.test("#1e90ff"))
```

Ghi chú toán:

$$
\int_{-\infty}^{\infty} e^{-x^2} \, dx = \sqrt{\pi}
$$


