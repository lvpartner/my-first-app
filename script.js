// 找到我们的按钮感应器
const btn = document.querySelector('button');

// 给按钮装上“点击”感应器
btn.addEventListener('click', function() {
  const city = document.getElementById('cityInput').value;
  
  if (city === "") {
    alert("请输入城市名！");
    return;
  }

  // 接下来的 fetch 逻辑放在这里...
  console.log("准备查询城市：" + city);
});

