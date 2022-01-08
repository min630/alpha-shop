# alpha-shop 電商網頁切版

網頁版：https://min630.github.io/alpha-shop/

![image](./dist/image/screen.JPG)

### 介紹

RWD網頁切版練習，以375px為寬螢幕與手機螢幕的切點

使用 scss 設置樣式，webpack 打包後上傳

### 功能

1. 導覽列：在小螢幕會收縮成漢堡排。
2. stepper：標示「寄送地址、運送方式、付款資訊」三個操作階段。
3. form：「寄送地址、運送方式、付款資訊」各自有對應表單，表單下方有「上一步」和「下一步」按鈕可切換，切換的時候僅部分板塊被抽換，不會有頁面轉跳情形產生。
4. 購物籃：不論切到哪個操作階段，都會顯示有兩件商品的照片、單價、用費和總價，每項商品有「 ＋ 」和「 − 」按鈕可增減商品數量。
5. footer：在小螢幕不顯示。


### 安裝流程

1.複製或下載專案
   ```
   git clone https://github.com/min630/express-task.git
   ```
  
2.透過終端機 terminal 進入專案資料夾

3.輸入以下指令安裝所需套件
   ```
   npm install
   ```
4.本專案沒有設定路由，請使用網頁編輯工具如：VScode開啟

### 開發工具

VScode
 - SCSS
 - Webpackage
