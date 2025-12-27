// 1. 获取网页上的零件（按钮和输入框）
const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('cityInput');
const title = document.querySelector('h1');

// 2. 给按钮装上“点击感应器”
searchBtn.addEventListener('click', function() {
    const city = cityInput.value;

    // 如果用户没填，给个提示
    if (!city) {
        alert("请输入城市名！");
        return;
    }

    // 提示正在查询
    title.innerText = "正在为你查询...";

    // 3. 开始接力赛：去拿天气数据
    // 我们直接使用 wttr.in 接口，它不需要复杂的 API Key
    fetch(`https://wttr.in/${city}?format=j1`)
        .then(response => {
            if (!response.ok) throw new Error("城市名好像不对哦");
            return response.json();
        })
        .then(weatherData => {
            // 4. 拆开信封，找到天气描述
            const desc = weatherData.current_condition[0].weatherDesc[0].value;
            
            // 5. 根据描述匹配表情包
            let emoji = "✨";
            if (desc.includes("Cloud")) emoji = "☁️";
            if (desc.includes("Sun") || desc.includes("Clear")) emoji = "☀️";
            if (desc.includes("Rain")) emoji = "🌧️";

            // 6. 更新招牌显示结果
            title.innerText = `你好，来自 ${city} 的朋友，今天天气 ${desc} ${emoji}`;
        })
        .catch(error => {
            // 如果出错了（比如第二步没查到）
            title.innerText = "抱歉，没找到这个城市的天气";
            console.error(error);
        });
});
