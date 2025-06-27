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

// 20秒カウントダウン最前面ポップアップ
function topCountdownPopup() {
  const popup = document.createElement("div");
  popup.className = "popup countdown";
  popup.style.position = "fixed";
  popup.style.top = "0";
  popup.style.left = "50%";
  popup.style.transform = "translateX(-50%)";
  popup.style.width = "350px";
  popup.style.zIndex = "2000"; // 最前面
  popup.style.backgroundColor = "#660000";
  popup.style.color = "yellow";
  popup.style.border = "4px solid yellow";
  popup.style.fontWeight = "bold";
  popup.style.fontSize = "16px";
  popup.style.textAlign = "center";
  popup.style.padding = "10px";
  popup.style.boxShadow = "0 0 15px yellow";

  let counter = 20;
  popup.innerHTML = `
    <div>⚠️ システム警告 - 自動ウイルス感染まであと <span id="topTimer">${counter}</span> 秒 ⚠️</div>
  `;

  document.body.appendChild(popup);

  const timerEl = popup.querySelector("#topTimer");
  const interval = setInterval(() => {
    counter--;
    timerEl.textContent = counter;
    if (counter <= 0) {
      clearInterval(interval);
      popup.innerHTML = `
        <div>💀 ウイルスに感染しました！即座に対応してください！ 💀</div>
      `;
      // 色を黒に変える
      popup.style.backgroundColor = "#000000";
      popup.style.color = "#f00";
      popup.style.borderColor = "#f00";
      popup.style.animation = "shake 0.2s infinite";
    }
  }, 1000);
}

// ページロード時に最上部カウントダウン開始
window.addEventListener("load", () => {
  topCountdownPopup();
});

function animatePopupsFade() {
  const popups = document.querySelectorAll('.popup');
  if (popups.length === 0) return;

  setInterval(() => {
    popups.forEach(popup => {
      // フェードアウト
      popup.style.opacity = 0;
    });
    setTimeout(() => {
      popups.forEach(popup => {
        // フェードイン
        popup.style.opacity = 1;
      });
    }, 2000); // 2秒フェードアウトしたら戻す
  }, 6000); // 6秒ごとに繰り返す
}

// ページロード後に動かす
window.addEventListener('load', () => {
  animatePopupsFade();
});
