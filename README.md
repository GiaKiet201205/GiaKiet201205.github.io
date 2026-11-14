# Võ Lâm Gia Kiệt — Portfolio

Portfolio cá nhân, sử dụng React và Vite.

## Chạy tại máy

```bash
npm ci
npm run dev
```

## Deploy từ main

Website được build và triển khai bằng workflow `.github/workflows/deploy-pages.yml` sau mỗi lần push lên `main`.

Thiết lập một lần trên GitHub:

1. Vào **Settings → Pages → Build and deployment**.
2. Chọn **Source: GitHub Actions**.
3. Nếu environment `github-pages` có giới hạn nhánh triển khai, cho phép nhánh `main` tại **Settings → Environments → github-pages**.

Commit và push các thay đổi lên `main`. Xem kết quả trong tab **Actions**, workflow **Deploy portfolio to GitHub Pages**. Có thể chạy lại bằng **Run workflow** với nhánh `main`.

Workflow tự chạy `npm ci`, `npm run build` và deploy thư mục `dist`. Không cần chạy `npm run deploy` hoặc chuyển sang nhánh `gh-pages`.

Website: https://giakiet201205.github.io/
