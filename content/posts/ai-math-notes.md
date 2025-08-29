---
title: AI + Math Notes
description: Một vài ghi chú rời về Toán cho AI
tags: [post, ai, math]
---

Gradient descent pseudo-code:

```python
def gradient_descent(update, theta, data, lr=1e-2, steps=1000):
    for _ in range(steps):
        g = update(theta, data)
        theta = theta - lr * g
    return theta
```

LaTeX test:

$$
\mathrm{KL}(p\,\Vert\,q) = \int p(x) \log \frac{p(x)}{q(x)} \, dx
$$

JSON code block:

```json
{
  "name": "test",
  "ok": true,
  "values": [1, 2, 3]
}
```


