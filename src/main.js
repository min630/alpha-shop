// import './scss/main.scss'

const steps = document.querySelectorAll('.step')
const formParts = document.querySelectorAll('.section')
const btnControl = document.querySelector('.btn-control')
const nextBtn = btnControl.querySelector('.btn-primary')
const preBtn = btnControl.querySelector('.btn-outline')
const shoppingList = document.querySelector('.shopping-lists')
const totalAmount = document.querySelector('.total-amount')

let step = 0

// 按下button時 Step轉換
function btnControlClicked(e) {
  e.preventDefault()  //防止跳頁
  const nowStep = steps[step]
  if (e.target.matches('.btn-primary')) {
    const nextStep = steps[step + 1]
    nowStep.classList.remove('active')
    nowStep.classList.add('checked')
    nextStep.classList.add('active')
    formParts[step].classList.toggle('d-none')
    formParts[step + 1].classList.toggle('d-none')
    step += 1
  } else if (e.target.matches('.btn-outline')) {
    const preStep = steps[step - 1]
    nowStep.classList.remove('active')
    preStep.classList.remove('checked')
    preStep.classList.add('active')
    formParts[step].classList.toggle('d-none')
    formParts[step -1].classList.toggle('d-none')
    step -= 1
  }
  setBtnControl()
}

// button樣式內容轉換
function setBtnControl() {
  if (step !== 0) {
    preBtn.classList.remove('d-none')
  } else {
    preBtn.classList.add('d-none')
  }
  if (step === 2) {
    nextBtn.innerHTML = '確認下單'
  } else {
    nextBtn.innerHTML = '下一步 &rarr;'
  }
}

//購物籃數量改變
function amountControl(e) {
  const nowAmount = e.target.closest('.amount-control').children[1]
  const amountNum = Number(nowAmount.innerHTML)
  if (e.target.matches('.plus')) {
    nowAmount.innerHTML = amountNum + 1
  } else if (e.target.matches('.minus') && amountNum) {
    nowAmount.innerHTML = amountNum - 1
  }
  /// 行有餘力....
  //選擇不同運送方式時購物籃的運費改變
  //數量改變，總價也改變
}


// 上一步/下一步按鈕 點擊事件監聽
btnControl.addEventListener('click', btnControlClicked)

//購物籃商品數量+/- 點擊事件監聽
shoppingList.addEventListener('click', amountControl)



