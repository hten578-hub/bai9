# React Navigation + Context API + AsyncStorage

**Họ và tên:** Nguyễn Thị Huệ Minh  
**MSSV:** 23810310177  
**Môn học:** Lập trình Di động  

---

## Mô tả

App thực hành 2 cách quản lý state kết hợp với Navigation:

- **Cách 1:** Stack Navigation + Bottom Tabs + **Context API**
- **Cách 2:** Stack Navigation + Bottom Tabs + **AsyncStorage**

---

## Cấu trúc màn hình

- **SignIn** — đăng nhập với Email/Password, Google, Facebook
- **ForgotPassword** — để trống, phát triển sau
- **Explorer (Home)** — Search bar, Top Categories, Popular Items, Sale-off Items
- **Account (Profile)** — Avatar, thông tin cá nhân, Sign Out

---

## Sự khác biệt giữa 2 cách

| | Cách 1 - Context API | Cách 2 - AsyncStorage |
|---|---|---|
| Lưu ở đâu | RAM (bộ nhớ tạm) | Bộ nhớ thiết bị |
| Tắt app | Mất dữ liệu | Giữ nguyên |
| Tốc độ | Nhanh, đồng bộ | Chậm hơn, async/await |

---

## Cài đặt & Chạy

```bash
npm install
npx expo start
```

---

## Screenshots
<img width="720" height="1600" alt="image" src="https://github.com/user-attachments/assets/772d7263-9bb9-4843-96cd-318810966e6f" />
<img width="720" height="1600" alt="image" src="https://github.com/user-attachments/assets/2e3138ae-429e-478e-a4a9-fc1042a20fa4" />
<img width="720" height="1600" alt="image" src="https://github.com/user-attachments/assets/14bf097f-fec1-405a-b52c-336a7fc8dc19" />
<img width="720" height="1600" alt="image" src="https://github.com/user-attachments/assets/df5fc2a6-5fb0-44ce-ac8c-d4efd4d37472" />
<img width="720" height="1600" alt="image" src="https://github.com/user-attachments/assets/565745d2-7d6c-4450-a2df-ef995dbeed5c" />




