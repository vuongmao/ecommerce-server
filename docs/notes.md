# Các Gói Package Cần Thiết Cho Một Server

## morgan

Cách dùng

app.use(morgan('dev'))

Thư viện hỗ trợ ghi log khi người dùng gửi một request đến server.

Có 5 chế độ morgan

. dev
. combined
. common
. short
. tiny

## helmet

Giúp bảo vệ lõi source code tránh hacker lợi dụng những lỗ hổng chưa được vá từ server

## conpression

Khi vận chuyển dữ liệu (payload) quá nhiều đến mobile, web, production thì sẽ chúng ta bị tốn băng thông.

Vì vậy dùng compression để giảm dữ liệu vận chuyển
