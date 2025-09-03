---
title: Linear Algebra - Không gian vector, hệ cơ sở và chiều.
description: Danh sách các bài viết gần đây
tags:
  - posts
  - linear_algebra
  - vector_space
---

# Tổ hợp tuyến tính 
Tổ hợp tuyến tính của một hệ các vector là tổ hợp các phép toán dựa trên phép nhân vô hướng và phép cộng các vector, không bao gồm hệ số tự do. 
 $$ \begin{aligned} \mathbf{z} &= s_1 \mathbf{x}_1 + s_2 \mathbf{x}_2 +...+ s_k \mathbf{x}_k \\ &= \sum_{i = 1} ^ k s_i \mathbf{x}_i \end{aligned}$$
Ở đây $\mathbf{z}$ chính là tổ hợp tuyến tính của hệ các vector $\mathbf{x}_1, \mathbf{x_2},..., \mathbf{x}_k$.  Tập các vector $\mathbf{z}$ là do hệ các vector  $\mathbf{x}_1, \mathbf{x_2},..., \mathbf{x}_k$ sinh ra, tập đó ký hiệu là $\text{span}(\{\mathbf x_i\}) = \left\{ \mathbf z \;\middle|\; \mathbf z = \sum_{i=1}^k s_i \mathbf x_i \right\}$.

Vậy chúng ta có thật sự cần đến tất cả k vector trong đó không?
![[linear_dependent.png]]

Nhìn vào ví dụ ở trên, tổ hợp tuyến tính của hai vector $\mathbf{x}_1, \mathbf{x}_2$ là chính đường thẳng đi qua gốc tọa độ. Chúng ta không nhất thiết phải cần đến cả 2 vector, ví dụ trên cho ta thấy điều đó, đường thẳng trên hình hoàn toàn có thể được sinh ra chỉ từ 1 trong 2 vector trên. Về cơ bản điều đó đúng là do $\mathbf{x}_1$ là tổ hợp tuyến tính của $\mathbf{x}_2$ và ngược lại.  

## Độc lập và phụ thuộc tuyến tính 

Độc lập và phụ thuộc tuyến tính là hai khái niệm quan trọng trong Đại số tuyến tính. 

Các vector trong 1 tập được gọi là **độc lập tuyến tính** nếu chúng ta **không** thể viết một vector bất kỳ nào trong tập đó dưới dạng tổ hợp tuyến tính của các vector còn lại. Và ngược lại, chúng được 
gọi là **phụ thuộc tuyến tính**. 

Ngoài ra, một cách định nghĩa tương đương, nếu một hệ các vector được gọi là **độc lập tuyến tính** nếu hệ phương trình sau (ẩn là các $s_i$) có nghiệm duy nhất, nghiệm đó là nghiệm tầm thường (nghiệm tầm thường là nghiệm mà tất cả các nghiệm đơn bằng 0). 
$$\mathbf{z} = s_1 \mathbf{x}_1 + s_2 \mathbf{x}_2 +...+ s_k \mathbf{x}_k = 0$$
Thật vậy, nếu có 1 hệ số $s_i \neq 0$, ta hoàn toàn có thể biểu diễn $\mathbf x_i$ theo tổ hợp tuyến tính của các vector còn lại: 
$$\mathbf x_i = -\frac{1}{s_i} \sum_{j = 1, j \neq i} ^ k s_i \mathbf{x}_i $$
# Không gian vector là gì? 

Trong Linear Algebra, không gian vector đóng vai trò quan trọng, 1 không gian vector đại diện cho các nhóm các phần tử có cùng tính chất. 

**Định nghĩa:**  Tập hợp $V$ (khác rỗng) được gọi là không gian vector nếu nó được quy định bởi phép cộng và phép nhân vô hướng và thỏa mãn các tính chất sau: 

-  **Tính đóng với phép cộng và phép nhân vô hướng**: 
	- với mọi $x, y  \in V$  thì $x + y \in V$
    - với mọi $x \in V$ và $k \in R$ thì $kx \in V$ 
- **Tính chất của phép cộng:** 
	- tính giao hoán: $x + y = y + x$ 
	- tính kết hợp $x + (y + z) = (x + y) + z$ 
	- tồn tại phần tử $0$ sao cho: $x + 0 = x$ với mọi $x \in V$
	- tồn tại phần tử đối sao cho: $x + (-x) = 0$ với mọi  $x \in V$ 
- **Tính chất của phép nhân vô hướng:** 
	-  với mọi $a \in R$ và $x, y \in V$ thì: $a(x + y) = ax + ay$ 
	-  với mọi $a, b \in R$ và $x \in V$ thì $(a +b)x = ax + bx$ 
	-  với mọi $a, b \in R$ và $x \in V$ thì $a(bx) = (ab)x$  
	- tồn tại phần tử đơn vị $1$ sao cho: $x \cdot 1 = 1 \cdot x$ 

**Không gian con:** tập hợp $S$ (khác rỗng) $\subseteq V$ được gọi là không gian con của $V$ nếu tập $S$ đóng dưới phép nhân và phép cộng của $V$.  Và tất nhiên dựa vào các tính chất đó, mọi không gian $S$ của $V$ đều chứa phần tử $0$. Phần tử $0$ là gốc của mọi không gian con. 

# Cơ sở và chiều của không gian vector

## Cơ sở của không gian vector

**Định nghĩa**: Một cơ sở của một không gian vector hoặc không gian con vector là một tập hợp các vector thỏa mãn hai tính chất: 
* Các vector đó sinh ra toàn bộ không gian đó: $\text{span}(\{\mathbf x_i\}) = V$ 
* Các vector thuộc tập hợp đó phải **độc lập tuyến tính**: $s_1 \mathbf{x}_1 + s_2 \mathbf{x}_2 +...+ s_k \mathbf{x}_k = 0$  có nghiệm duy nhất, nghiệm đó là nghiệm tầm thường. 

Một vector  $\mathbf{z} = s_1 \mathbf{x}_1 + s_2 \mathbf{x}_2 +...+ s_k \mathbf{x}_k \in V$  luôn được biểu diễn bằng một cách duy nhất dựa trên tổ hợp tuyến tính của hệ các vector cơ sở. 

**Chứng minh:** giả sử tồn tại hai cách biểu diễn khác nhau dựa trên tổ hợp tuyến tính của các vector cơ sở: $\mathbf{z} = s_1 \mathbf{x}_1 + s_2 \mathbf{x}_2 +...+ s_k \mathbf{x}_k =  w_1 \mathbf{x}_1 + w_2 \mathbf{x}_2 +...+ w_k \mathbf{x}_k$ 
Trong đó:  $(s_1, s_2, ..., s_k) \neq (w_1, w_2, ..., w_k)$ 
Khi đó, chuyển vế ta được: $(s_1 - w_1) \mathbf{x}_1 + (s_2 - w_2) \mathbf{x}_2 +...+ (s_k - w_k) \mathbf{x}_k = 0$
Mà do tập hợp các vector $\{\mathbf{x}_i\}$ là độc lập tuyến tính nên $s_1 - w_1 = s_2 - w_2 =...= s_k - w_k = 0$, điều này vô lý! 

Khi đó các hệ số vô hướng (scalar) $\{s_i\}$ được gọi là hệ số của vector $z$ đối với cơ sở $\{\mathbf{x}_i\}$. 

## Chiều của không gian vector
**Định nghĩa:** Chiều của một không gian vector là số lượng các vector thuộc hệ cơ sở của không gian vector đó. 
Nếu $\{\mathbf{x}_i\}_{i = 1}^k$  là hệ cơ sở của không gian vector $V$, khi đó ta nói chiều của $V$ là $k$ hoặc $dim(V) = k$  

**Tính chất** 
* Mọi hệ cơ sở của không gian vector $V$ đều có cùng số phần tử, hay nói cách khác, số chiều của không gian $V$ là duy nhất. 
* Nếu một tập các vector chứa nhiều hơn $dim(V)$ phần tử, thì các vector trong tập hợp đó phụ thuộc tuyến tính.
Các tính chất trên dành cho bạn đọc chứng minh! 



 