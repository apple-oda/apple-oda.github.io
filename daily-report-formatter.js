function sendMessage() {
  // テキストエリアの値を取得
  let mes = document.getElementById("before_message").value;

  // 必要部分の切り出し。[全体報告]から[登録時に……]の直前まで。
  let str = mes.indexOf("全体報告");
  let end = mes.lastIndexOf("　登録時にメールを送信する場合はチェック");
  mes = mes.slice(str, end);

  // 不要なテキストを削除
  mes = mes.replace(/\nメンバー名【出欠】\t職員名\t内容\n/, "");

  // [申し送り]の内容が無ければ削除、有れば二行空けて成形
  if (mes.indexOf("申し送り\n支援内容") != -1) {
    mes = mes.replace("申し送り", "\n");
  } else {
    mes = mes
      .replace("申し送り", "\n\n申し送り")
      .replace("支援内容", "\n\n支援内容");
  }

  // リストボックスで指定した職員名を全て削除
  let selectedStaff = document.getElementById("staffList").value;
  let reg = new RegExp("(【.*】)\\n" + selectedStaff + "\\t", "g");
  mes = mes.replace(reg, "$1");

  // 利用者ごとに1行空ける
  mes = mes.replace(/(.*\n【.*】)/g, "\n$1");

  // 内容が書かれていない利用者を削除
  mes = mes.replace(/.*\n【.*】\n\n/g, "");

  // 上記の処理の末尾用
  mes = mes.replace(/.*\n【.*】\n$/, "");

  // 成形したテキストをテキストエリアに貼り付け
  document.getElementById("after_message").innerHTML = mes;
}

function copy() {
  let txt = document.getElementById("after_message").value;

  // クリップボードにコピー
  navigator.clipboard.writeText(txt);
}