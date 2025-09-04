---
title: Ma trận và ánh xạ tuyến tính - phần 1
description: Danh sách các bài viết gần đây
tags:
  - posts
  - linear_algebra
  - matrix
  - vector
  - linear_transformation
---
Trong bài viết này chúng ta sẽ tìm hiểu về hai khái niệm quan trọng đó là **ma trận** và **ánh xạ tuyến tính**. 

# Ma trận và các phép toán trên ma trận 

Dựa trên cái nhìn khách quan, chưa bàn đến việc ma trận thực sự mang ý nghĩa là gì, ta định nghĩa ma trận là một bảng chữ nhật m hàng n cột bao gồm các số thực (ở đây ta chỉ xét số thực do đang làm việc trong ngữ cảnh của computer science). 
Khi đó ta ký hiệu: 

$$A = \begin{bmatrix} a_{11} & a_{12} & \cdots & a_{1n} \\ a_{21} & a_{22} & \cdots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{m1} & a_{m2} & \cdots & a_{mn} \end{bmatrix} \in R^{mxn}$$ 
Chú ý: Một vector cũng chính là 1 ma trận 1 cột. 

Ngoài ra ta có thể nhìn ma trận A thành vector hàng mà các thành phần là các vector cột:

$$\begin{bmatrix}| & | &        & | \\ v_1 & v_2 & \cdots & v_m \\ | & | &        & \end{bmatrix} $$

Hoặc là vector cột mà các thành phần là vector hàng: 


$$A =\begin{bmatrix} \rule[0.5ex]{1cm}{0.4pt} \; r_1^T \; \rule[0.5ex]{1cm}{0.4pt} \\ \rule[0.5ex]{1cm}{0.4pt} \; r_2^T \; \rule[0.5ex]{1cm}{0.4pt} \\ \vdots \\ \rule[0.5ex]{1cm}{0.4pt} \; r_m^T \; \rule[0.5ex]{1cm}{0.4pt} \end{bmatrix}$$

Sau này chúng ta sẽ làm việc với cách viết hai ma trận như trên, tại sao thì về sau sẽ rõ. 

## Phép cộng ma trận 

Xét hai ma trận $A, B \in R^{m \times n}$


$$A = \begin{bmatrix} a_{11} & a_{12} & \cdots & a_{1n} \\ a_{21} & a_{22} & \cdots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{m1} & a_{m2} & \cdots & a_{mn} \end{bmatrix}, \quad B = \begin{bmatrix} b_{11} & b_{12} & \cdots & b_{1n} \\ b_{21} & b_{22} & \cdots & b_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ b_{m1} & b_{m2} & \cdots & b_{mn} \end{bmatrix} \text{ thì } A + B = \begin{bmatrix} a_{11} + b_{11} & a_{12} + b_{12} & \cdots & a_{1n} + b_{1n} \\ a_{21} + b_{21} & a_{22} + b_{22} & \cdots & a_{2n} + b_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{m1} + b_{m1} & a_{m2} + b_{m2} & \cdots & a_{mn} + b_{mn} \end{bmatrix} $$


Phép cộng ma trận chính là cộng các vector cột (hàng) tương ứng của A với các cột tương ứng của B, và hiển nhiên hai ma trận phải cùng kích thước thì mới cộng được. 

## Phép nhân vô hướng  

Xét ma trận $A \in R^{m \times n}$ và số vô hướng $c \in R$, khi đó: 

$$
cA =
\begin{bmatrix}
c a_{11} & c a_{12} & \cdots & c a_{1n} \\
c a_{21} & c a_{22} & \cdots & c a_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
c a_{m1} & c a_{m2} & \cdots & c a_{mn}
\end{bmatrix}
$$
Như vậy nhân ma trận với 1 vô hướng chính là lấy từng vector cột (hàng) trong A xong nhân vô hướng.

## Các phép toán trên mang ý nghĩa gì? 

Hãy nhớ lại không gian vector, không gian vector đại diện cho một nhóm các phần tử có cùng một tính chất, thỏa mãn các tính chất đóng, các tính chất trên phép cộng và các tính chất trên phép nhân vô hướng. 

Không gian vector ở đây, không chỉ đơn thuần là các vector bình thường mà nó là cả một đối tưởng, không gian vector là tập hợp của các đối tượng, các đối tượng đó liên hệ với nhau bởi phép cộng và phép nhân vô hướng mà chúng ta tự định nghĩa. Ma trận cũng là một đối tượng, và tất nhiên chúng ta cũng có không gian cho ma trận. Không gian ma trận cũng thoả mãn các tính chất đóng, tính chất của phép công, của phép nhân vô hướng. Phép cộng và phép nhân vô hướng đó được chính ta định nghĩa ở trên. 

Và tất nhiên, những tính chất của không gian vector cũng đúng với không gian ma trận, bạn đọc tự nhớ lại và chứng minh! 

## Nhân hai ma trận

Cho hai ma trận $A \in R^{m \times n}, B \in R^{n \times p}$ (số cột của A phải bằng số hàng của B, đây là điều kiện tiên quyết), và ý nghĩa của phép nhân ma trận này chúng ta sẽ bàn sau, sau khi học xong phép ánh xạ tuyến tính. 

$$
A =
\begin{bmatrix}
a_{11} & a_{12} & \cdots & a_{1n} \\
a_{21} & a_{22} & \cdots & a_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{m1} & a_{m2} & \cdots & a_{mn}
\end{bmatrix} \in \mathbb{R}^{m \times n},
\quad
B =
\begin{bmatrix}
b_{11} & b_{12} & \cdots & b_{1p} \\
b_{21} & b_{22} & \cdots & b_{2p} \\
\vdots & \vdots & \ddots & \vdots \\
b_{n1} & b_{n2} & \cdots & b_{np}
\end{bmatrix} \in \mathbb{R}^{n \times p}
\text{ thì }
C = AB =
\begin{bmatrix}
c_{11} & c_{12} & \cdots & c_{1p} \\
c_{21} & c_{22} & \cdots & c_{2p} \\
\vdots & \vdots & \ddots & \vdots \\
c_{m1} & c_{m2} & \cdots & c_{mp}
\end{bmatrix} \in \mathbb{R}^{m \times p}


\text{ trong đó }

c_{ij} = \sum_{k=1}^{n} a_{ik} b_{kj}, 
\quad i = 1,\dots,m,\; j = 1,\dots,p
$$

Trước mắt, chúng ta có thể hiểu như phép nhân ma trận chính là phép lấy tích trong (ở đây cụ thể là phép tích vô hướng) của các vector hàng của A lần lượt với các vector cột của B. 

**Chú ý**: phép nhân ma trận không giống như phép nhân với số vô hướng, nó không có tính giao hoán, tức là $AB \neq BA$ 


## Phép nhân ma trận đặc biệt 

Xét ma trận $A \in R^{m \times n}$ và $x \in R^{n \times 1}, (x \in R^n)$ ($x$ là một vector cột)

$$
A = 
\begin{bmatrix}
| & | & & | \\
c_1 & c_2 & \cdots & c_n \\
| & | & & |
\end{bmatrix} \in \mathbb{R}^{m \times n},
\quad
x =
\begin{bmatrix}
x_1 \\
x_2 \\
\vdots \\
x_n
\end{bmatrix} \in \mathbb{R}^n
$$
thế thì khi đó $Ax = x_1 c_1 + x_2 c_2 + \cdots + x_n c_n \in \mathbb{R}^m$. Đây chính là tổ hợp tuyến tính của các vector cột của $A$. Không gian sinh bởi các vector cột này, người ta gọi đó là **không gian cột của A.** 

Tương tự nếu chúng ta xét $A \in R^{m \times n}$ và $x \in R^{m \times 1}, (x \in R^m)$ ($x$ là một vector cột): 
$$A =
\begin{bmatrix}
\rule[0.5ex]{1cm}{0.4pt} \; r_1^T \; \rule[0.5ex]{1cm}{0.4pt} \\
\rule[0.5ex]{1cm}{0.4pt} \; r_2^T \; \rule[0.5ex]{1cm}{0.4pt} \\
\vdots \\
\rule[0.5ex]{1cm}{0.4pt} \; r_m^T \; \rule[0.5ex]{1cm}{0.4pt}
\end{bmatrix}, 
\quad 
x =
\begin{bmatrix}
x_1 \\
x_2 \\
\vdots \\
x_m
\end{bmatrix} \in \mathbb{R}^m
$$
thế thì khi đó $x^TA = x_1 r_1^T + x_2 r_2^T + \cdots + x_n r_n^T \in \mathbb{R}^n$ chính là tổ hợp tuyến tính của các vector hàng của $A$. Không gian sinh bởi các vector hàng này, người ta gọi đó là **không gian hàng của A.** 

Không gian hàng và không gian cột của một ma trận đóng vai trò vô cùng quan trọng, quan trọng ra sao thì xin mời sang phần 2. 