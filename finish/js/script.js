// メンバーリスト（変更しない）
const members = [
    { image: "hari1.jpg", name: "ラテ", type: "活発で人懐っこい", like: ["とうもろこし", "ゆでたまご"] },
    { image: "hari2.jpg", name: "ミルク", type: "とっても賢い", like: ["小松菜", "コオロギ"] },
    { image: "hari3.jpg", name: "チャイ", type: "ちょっと怖がり", like: ["かぼちゃ", "りんご"] }
];

//listModalを取得してその中身を初期化
const listEl = document.getElementById("listModal");
listEl.innerHTML = '';

// members配列の情報から画像と名前を取得して表示させる
// ※表示例はHTMLファイルのコメントアウトを参照
    members.forEach((mem, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <div class="round-thumbnail"><img src="./img/${mem.image}" alt="${mem.name}"></div>
            <button data-index="${[index]}" class="open-modal-btn">詳しい紹介</button>
        `;
        listEl.appendChild(li);
    });


// 一覧のそれぞれのボタンが押されたとき、そのハリネズミの詳細データをモーダルにセットして表示する

//ボタンをすべて取得
const openBtns = document.querySelectorAll("button[data-index]");

//　dialogタグを取得
const dialog = document.querySelector("dialog");

//クリックされたボタンがどのボタンが判別する
openBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        
        const index = e.currentTarget.dataset.index;
        const data = members[index];

        // 詳細の画像・名前・性格をそれぞれの情報で書き換える
        document.getElementById("modalImage").src = `./img/${data.image}`;
        document.getElementById("modalName").innerText = data.name;
        document.getElementById("modalType").innerText = data.type;

        //　好きな食べ物をそれぞれの情報で書き換える
        //　好きな食べ物は「⚪︎⚪︎」の形で並べる
        let likeContents = '';
        data.like.forEach(item => likeContents += `「${item}」`);
        document.getElementById("modalLike").innerText = likeContents;

        //モーダルを開く
        dialog.showModal();
    });
});


// 閉じるボタンをクリックしたら、モーダルを閉じる
const closeBtn = document.getElementById("close-modal-btn");
closeBtn.addEventListener('click', () => {
    dialog.close();
});

