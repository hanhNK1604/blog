---
title: Ma trận và ánh xạ tuyến tính - phần 2
description: Danh sách các bài viết gần đây
tags:
  - posts
  - linear_algebra
  - matrix
  - vector
  - linear_transformation
---
Trong bài viết này chúng ta sẽ tìm hiểu về ánh xạ tuyến tính, mối quan hệ giữa chúng và các ma trận, không gian hàng và không gian cột của ma trận! 

# Ánh xa tuyến tính 

Một ánh xạ $T$ từ không gian $V$ đến không gian $W$ được gọi là ánh xạ tuyến tính nếu nó thoả mãn hai tính chất bắt buộc sau: 
* $T(x + y) = T(x)  + T(y) \ \forall x, y, \in V$ 
* $T(kx) = kT(x) \ \forall x \ \in V, k \in R$

Bản chất của phép nhân chính là phép cộng, nhưng nó chỉ đúng khi chúng ta nhân với số nguyên hoặc nhân với số hữu tỷ (số hữu tỷ là số có thể viết dưới dạng phân số của các số nguyên). Chính vì lý do đó, tính chất 1 chưa thực sự đầy đủ, đó là lý do chúng ta phải cần thêm tính chất 2. 

**Đặc biệt,** mọi ánh xạ tuyến tính đều thỏa mãn $T(0) = 0$

Có rất nhiều ánh xạ tuyến tính khác nhau, cũng giống như định nghĩa về không gian vector, chúng ta không chỉ sử dụng đầu vào là số thực, vector, ma trận, chúng ta hoàn toàn có thể tự định nghĩa ra các đối tượng khác nhau, chúng có cùng tính chất, cùng một không gian, thỏa mãn được các tính chất của một không gian vector mà ta đã nói trước đó.

## Các định nghĩa, định lý và các tính chất liên quan đến ánh xạ tuyến tính 

### Nhân và ảnh của ánh xạ tuyến tính (Kernel và Image) 

Chúng ta vẫn xét ánh xạ $T$ vừa định nghĩa ở trên. Khi đó, tập các phần tử $x \in V$ được gọi là **nhân của ánh xạ $T$** nếu nó thoả mãn: $T(x) = 0$. Ký hiệu: 

$$ker(T) = \{x \in V | T(x) = 0 \} \subset V $$ 
**Ảnh của ánh xạ $T$** là ảnh của không gian nguồn sau khi đi qua ánh xạ $T$. Ký hiệu: 
$$im(T) = \{T(x) | x \in V \} \subset W$$
### Các tính chất của nhân và ảnh: 

* Phần tử $O_V \in V$ hiển nhiên và luôn luôn thuộc $ker(T)$  (tự chứng minh)

* Ảnh của tập $ker(T)$ qua phép ánh xạ $T$ chính là phần tử $0_W \in W \subset im(T)$ (hiển nhiên theo định nghĩa)

 * Hiển nhiên, ánh xạ $T$ từ $V$ sang $im(T)$ là một toàn ánh (hiển nhiên theo định nghĩa)
 ![[Kernel_and_image_of_linear_map.png]]

* Ánh xạ $T$ từ $V$ sang $im(T)$ là một song ánh khi và chỉ khi $ker(T) = \{0\}$ (**lưu ý ở đây ánh xạ $T$ từ $V$ sang $im(T)$ khác hoàn toàn với ánh xạ $T$ từ $V$ sang $W$**)
	-  Thật vậy, giả sử tồn tại $x_1, x_2 \in V$ thoả mãn $T(x_1) = T(x_2)$, khi đó: $T(x_1) - T(x_2) = 0$ hay $T(x_1 - x_2) = 0$ suy ra $x_1 - x_2 \in ker(T)$ hay $x_1 - x_2 = 0$ hay $x_1 = x_2$ suy ra $T$ là đơn ánh, kết hợp với $T$ là toàn ánh ở trên, ta thấy rằng $T$ chính là một song ánh. 
	
* Rank - Nulltity theorem: Chúng ta vẫn xét ánh xạ $T$ như trên, khi đó tổng số chiều của không gian hạt nhân và không gian ảnh bằng đúng số chiều của không gian nguồn: 
		$$dim(ker(L)) + dim(im(L)) = dim (V)$$
	* Chứng minh:  giả sử $dim(V) = n$,  gọi $K = \{ v_1, v_2,..., v_k \} \subset ker(L)$ là hệ cơ sở của $ker(L)$, và $dim(ker(L)) = k$, $B = \{u_1, u_2, ..., u_{n-k}\}  \subset V \setminus ker(L) \cup \{0\}$ là hệ cơ sở của $V \setminus ker(L) \cap \{0\}$ và $dim(V \setminus ker(L)) = n - k$. Khi đó theo định lý Steinitz $K \cup B$ chính là hệ cơ sở của V.  Bây giờ ta sẽ chứng minh $T(B) = \{T(u_1),...,T(u_{n - k})\}$ sinh ra $im(L)$. Thật vậy: $$\begin{aligned} im(L)  &= T(span(v_1,...,v_k, u_1,...,u_{n - k})) \\ &= span(T(v_1),...,T(v_k),T(u_1),..., T(u_{n - k})) \\ &= span(0,...,0, T(u_1),..., T(u_{n - k})) \\ &= span(T(u_1),...,T(u_{n-k})) \end{aligned}$$ Như vậy $T(B)$ sinh ra $im(L)$, bây giờ ta chỉ cần chứng minh $T(u_1),...,T(u_{n-k})$ độc lập tuyến tính nữa là xong. Thật vậy: $$\begin {aligned} w_1T(u_1) + ... + w_{n-k}T(u_{n - k}) &= 0 \\ T(w_1u_1 +...+ w_{n - k}u_{n - k}) & = 0 \end{aligned}$$Suy ra: $w_1u_1 +...+ w_{n - k}u_{n - k} \in ker(T)$ mà $w_1u_1 +...+ w_{n - k}u_{n - k} \in V \setminus ker(L) \cup \{0\}$ nên  $w_1u_1 +...+ w_{n - k}u_{n - k} \in ker(T) \cap (V \setminus ker(T) \cup \{0\}) = \{0\}$ suy ra $w_1 = ...= w_{n - k} = 0$. Đây chính là điều phải chứng minh! 


  