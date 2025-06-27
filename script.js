const normalMessages = [
  "あなたのPCは危険にさらされています！",
  "トロイの木馬が検出されました。",
  "不正アクセスが発生しました！",
  "個人情報が盗まれています。",
  "Windowsセキュリティによる警告！"
];

const glitchMessages = [
  "ﾋﾞ.ﾋﾞｯﾋﾞ… ﾌｧｲ.ﾙ.ｶﾞ...💀",
  "!!!###@@@ERROR_CODE:ABRUPT!!!",
  "<div>[脆弱性情報が破損]</div>",
  "?????? ***** ||||| !!!!!",
  "<img src='404.png'> が見つかりません"
];

function createPopup(isGlitch = false) {
  const popup = document.createElement("div");
  popup.className = "popup";
  if (isGlitch) popup.classList.add("glitch");

  popup.style.top = `${Math.random() * 80}vh`;
  popup.style.left = `${Math.random() * 80}vw`;
  popup.style.transform = `rotate(${(Math.random() - 0.5) * 10}deg)`;

  popup.innerHTML = `
    <div class="popup-header">
      セキュリティ警告
      <button class="close-btn">×</button>
    </div>
    <div class="popup-body">
      ${(isGlitch ? glitchMessages : normalMessages)[Math.floor(Math.random() * 5)]}
    </div>
  `;

  popup.querySelector(".close-btn").addEventListener("click", () => {
    // 閉じたフリして増殖させる
    for (let i = 0; i < 2; i++) {
      createPopup(Math.random() < 0.3);
    }
  });

  document.body.appendChild(popup);
}

// 上から降ってくるポップアップ
function popupFromTop() {
  const popup = document.createElement("div");
  popup.className = "popup slide-down";
  popup.style.top = "0px";
  popup.style.left = `${Math.random() * 70}vw`;
  popup.innerHTML = `
    <div class="popup-header">
      警告！！
      <button class="close-btn">×</button>
    </div>
    <div class="popup-body">危険な動作が検出されました！</div>
  `;
  document.body.appendChild(popup);
}

// 下からふわっと浮かぶポップアップ
function popupFromBottom() {
  const popup = document.createElement("div");
  popup.className = "popup fade-up";
  popup.style.top = `${Math.random() * 70}vh`;
  popup.style.left = `${Math.random() * 70}vw`;
  popup.innerHTML = `
    <div class="popup-header">
      セキュリティ通知
      <button class="close-btn">×</button>
    </div>
    <div class="popup-body">不審な通信をブロックしました</div>
  `;
  document.body.appendChild(popup);
}

// カウントダウン付きポップアップ（5秒）
function popupCountdown() {
  const popup = document.createElement("div");
  popup.className = "popup countdown";
  popup.style.top = `${Math.random() * 70}vh`;
  popup.style.left = `${Math.random() * 70}vw`;
  let counter = 5;

  popup.innerHTML = `
    <div class="popup-header">
      タイマー警告
      <button class="close-btn">×</button>
    </div>
    <div class="popup-body"><span id="timer">${counter}</span> 秒後に自動防御</div>
  `;
  document.body.appendChild(popup);

  const timerEl = popup.querySelector("#timer");
  const interval = setInterval(() => {
    counter--;
    timerEl.textContent = counter;
    if (counter <= 0) {
      clearInterval(interval);
      popup.querySelector(".popup-body").textContent = "ウイルスを隔離しました。";
      popup.style.background = "#0f0";
      popup.style.color = "black";
    }
  }, 1000);
}

// ボタンクリック時の処理（全盛り）
function spamPopups() {
  for (let i = 0; i < 8; i++) {
    createPopup(Math.random() < 0.3);
  }
  popupFromTop();
  popupFromBottom();
  popupCountdown();

  // 中央警告は消さずに残す（ずっと表示）
}

// 初期表示でいくつかポップアップ出す
for (let i = 0; i < 10; i++) {
  createPopup(Math.random() < 0.3);
}
