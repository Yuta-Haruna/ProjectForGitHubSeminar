document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('clickButton');
    const button5 = document.getElementById('clickButton5'); // 新しいボタン
    const counter = document.getElementById('counter');

    button.addEventListener('click', function () {
        let count = parseInt(counter.innerText);
        counter.innerText = ++count;
    });

    // 新しいボタンに対するイベントリスナーを追加
    button5.addEventListener('click', function () {
        let count = parseInt(counter.innerText);
        counter.innerText = count + 5; // カウンターを5ずつ増やす
    });
});
