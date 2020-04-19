# express-skeleton

```
yarn install
# or npm install
yarn dev
# npm run dev
```

## middleware

```javascript
// src/routes/auth.route.ts
this.router.use(AuthMiddleware); // for all
this.router.post('/register', AuthMiddleware, this.authController.register); // for single

// src/app.ts
app.use(AuthMiddleware); // 全域
```

## 架構圖

/src
  controllers/
  middleware/
  requests/
  routes/
  app.ts
  router.ts


## Acknowledgements

[用 TypeScript 寫 express — Route 與 Controller 篇 By Kuan](https://medium.com/@kusakawazeusu/%E7%94%A8-typescript-%E5%AF%AB-express-route-%E8%88%87-controller-%E7%AF%87-40db4850a8f2)

[[筆記] 把玩 express-validator 在伺服器端做表單驗證](https://medium.com/%E9%BA%A5%E5%85%8B%E7%9A%84%E5%8D%8A%E8%B7%AF%E5%87%BA%E5%AE%B6%E7%AD%86%E8%A8%98/%E7%AD%86%E8%A8%98-%E6%8A%8A%E7%8E%A9-express-validator-%E5%9C%A8%E4%BC%BA%E6%9C%8D%E5%99%A8%E7%AB%AF%E5%81%9A%E8%A1%A8%E5%96%AE%E9%A9%97%E8%AD%89-797342aab2d3)