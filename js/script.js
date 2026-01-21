// メンバーリスト
const member = [
    { image: "./img/hari1.jpg" , name: "ラテ", type: "活発で人懐っこい" , like: "とうもろこし・ゆでたまご" },
    { image: "./img/hari2.jpg" ,  name: "ミルク", type: "とっても賢い" , like: "小松菜・コオロギ" },
    { image: "./img/hari3.jpg" ,  name: "チャイ", type: "ちょっと怖がり" , like: "かぼちゃ・りんご" }
];

// 今クリックしたリストを呼び出すところ
function listModal(list = member) {
    const listEl = document.getElementById("list-modal");
    listEl.innerHTML = '';

    list.forEach((mem,index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <div class="round-thumbnail"><img src="${mem.image}" alt="${mem.name}"></div>
            <button data-index="${[index]}" class="open-modal-btn">詳しい紹介</button>
        `;
        listEl.appendChild(li);
    });
}

listModal();

// 開いたとき
// ボタンを取得してイベントの発火したボタンの詳細を呼び出す
const openBtns = document.querySelectorAll("button[data-index]");
openBtns.forEach(btn => {
    btn.addEventListener('click',(e)=> {
        const index = e.currentTarget.dataset.index;
        const data = member[index];

        document.getElementById("modal-image").src = data.image;
        document.getElementById("modal-name").textContent = data.name;
        document.getElementById("modal-type").textContent = data.type;
        document.getElementById("modal-like").textContent = data.like;
        
        dialog.showModal();
    });
});


// 閉じるとき
const closeBtn = document.getElementById("close-modal-btn");
closeBtn.addEventListener('click',()=> {
    dialog.close();
});

const dialog = document.querySelector("dialog");
