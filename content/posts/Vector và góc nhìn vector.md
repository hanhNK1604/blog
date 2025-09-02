---
title: Linear Algebra - Vector là gì?
description: Danh sách các bài viết gần đây
tags:
  - posts
  - linear_algebra
  - vector
---
# Vector bản chất là gì? 

Vector bản chất là đại lượng có hướng và độ lớn, về mặt bản chất là như vậy, tuy nhiên sau này trong nhiều ứng dụng, vector được biết đến với các mục đích khác nhau, ví dụ chúng ta có thể hiểu vector như một điểm dữ liệu hoặc tọa độ của chính điểm đó trong hệ trục cơ sở chính tắc mà chúng ta đã gắn bó từ rất lâu,...  

Và tất nhiên ở đây chúng ta chỉ xét không gian thực do đang làm việc với các đại lượng mang ý nghĩa trong Khoa học Máy tính. Một vector (vector cột, từ nay về sau nếu không nói gì thêm ta đều hiểu theo nghĩa này) trong không gian $\mathbf{R}^n$ được viết như sau: 
$$\mathbf{x} =  \begin{bmatrix} x_1 \\ x_2 \\ \vdots \\ x_n \end{bmatrix} \in \mathbf{R}^n$$

# Phép cộng vector được hiểu như thế nào? 

Có lẽ chúng ta đã quá quen thuộc với các bài toán thi THPT QG, các bài toán ứng dụng, trong đó có vector. Vậy các bạn đã bao giờ đặt câu hỏi, bản chất của phép cộng vector, công thức cộng vector từ đâu mà có chưa?  

**Đầu tiên hãy nói về phép cộng vector.** Hãy tưởng tượng bạn là một người đang đi từ A đến B, vậy thì vector $\overrightarrow{AB}$  thể hiện cho chính việc đi đó, tiếp tục bạn đi từ B đến C, tương ướng với vector $\overrightarrow{BC}$. Việc đi liên tục như vậy thể hiện cho phép cộng vector $\overrightarrow{AB} + \overrightarrow{BC}$. 

Để ý một chút, đi từ A đến B, rồi lại từ B đến C, cho dù bạn có đi qua nhiều điểm khác những vẫn giữ nguyên điểm bắt đầu (A) và điểm kết thúc (C), mục đích của bạn không thay đổi, hay nói cụ thể hơn, phép cộng vector không làm thay đổi mục đích di chuyển của mình. 

Đó chính là ý nghĩa của phép cộng vector: 
$$\overrightarrow{AB} + \overrightarrow{BC} = \overrightarrow{AC}$$

![[add-vec.png]]

**Tiếp theo là công thức cộng vector.** Chúng ta đều đã biết đến công thức công vector. Trong bài viết này mình sẽ nói kỹ hơn về công thức đó và góc nhìn đặc biệt. 

$$\mathbf{x} + \mathbf{y} =  \begin{bmatrix} x_1 \\ x_2 \\ \vdots \\ x_n \end{bmatrix} + \begin{bmatrix} y_1 \\ y_2 \\ \vdots \\ y_n \end{bmatrix} =\begin{bmatrix} x_1 + y_1 \\ x_2 + y_2 \\ \vdots \\ x_n + y_n \end{bmatrix}$$

Hãy lấy các ví dụ đơn giản như không gian 2 chiều, mọi vector thuộc không gian 2 chiều đều có thể biểu diễn qua hệ cơ sở chính tắc, đây là góc nhìn mà mình muốn nhấn mạnh. Mở rộng lên không gian nhiều chiều thì nó vẫn đúng, mọi vector đều có thể hiểu như **tổ hợp tuyến tính của các cơ sở chính tắc.** 
$$ a = \begin{bmatrix} x \\ y \end{bmatrix} = x \cdot \begin{bmatrix} 1 \\ 0 \end{bmatrix} + y \cdot \begin{bmatrix} 0 \\ 1 \end{bmatrix} = x \cdot \hat i + y \cdot \hat j $$
Các hệ số $x , y$ còn được biết đến như tọa độ của vector $a$ trong hệ cơ sở chính tắc. Bây giờ hãy xét phép cộng hai vector $a$ và $b$: 

$$ \begin{aligned} a + b &= \begin{bmatrix} x \\ y \end{bmatrix} + \begin{bmatrix} m \\ n \end{bmatrix} \\ &= (x \cdot \hat i + y \cdot \hat j) + (m \cdot \hat i + n \cdot \hat j) \\ &= (x + m) \cdot \hat i + (y + n) \cdot \hat j = \begin{bmatrix} x + m \\ y + n \end{bmatrix} \end{aligned}$$
Hoàn tất chứng minh. Lưu ý: có nhiều cách chứng minh, nhưng đây là một trong những các chứng mưng gợi cho ta góc nhìn hay nhất về vector, đó là nhìn các vector dưới dạng **tổ hợp tuyến tính của các cơ sở chính tắc.** 