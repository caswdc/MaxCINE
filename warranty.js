// ===== 查询次数限制（每天最多4次）=====
function checkLimit() {
  const today = new Date().toISOString().slice(0, 10);
  const key = "mc_query_limit";

  let data = JSON.parse(localStorage.getItem(key) || "{}");

  if (data.date !== today) {
    data = { date: today, count: 0 };
  }

  if (data.count >= 4) {
    return false; // 超限
  }

  data.count++;
  localStorage.setItem(key, JSON.stringify(data));

  return true;
}


// ===== 查询主逻辑 =====
async function query(sn){

  if(!sn){
    alert("请输入序列号");
    return;
  }

  const btn = document.getElementById("sn-btn");

  // 👉 loading状态
  btn.classList.add("loading");

  document.getElementById("main").style.display = "none";

  try{
    const base = location.hostname.includes("github.io") ? "/MaxCINE" : "";
    const res = await fetch(`${base}/data/${sn}.json`);

    if(!res.ok){
      btn.classList.remove("loading");

      setTimeout(()=>{
        alert("未找到该设备");
      }, 200);

      return;
    }

    const data = await res.json();

    const now = new Date();
    const end = new Date(data.end_date);
    const valid = now <= end;

    // 👉 成功动画
    btn.classList.remove("loading");
    btn.classList.add("success");

    setTimeout(()=>{
      btn.classList.remove("success");
    }, 1200);

    document.getElementById("main").style.display = "block";

    // 图片
    const img = document.getElementById("img");
    if(data.image){
      img.src = `./assets/${data.image}`;
      img.style.display = "block";
    } else {
      img.style.display = "none";
    }

    document.getElementById("name").innerText = data.version;
    document.getElementById("sn").innerText = `序列号：${sn}`;
    document.getElementById("date").innerText = `购买日期：${data.buy_date}`;

    document.getElementById("start").innerText = data.start_date;
    document.getElementById("end").innerText = data.end_date;

    const statusEl = document.getElementById("status");
    statusEl.innerText = valid ? "在保" : "已过保";
    statusEl.className = valid ? "ok" : "bad";

    document.getElementById("repair").innerText = data.repair_record || "无";

  }catch(e){
    alert("查询失败");
    btn.classList.remove("loading");
  }
}


// ===== 页面初始化（这里做限制拦截）=====
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("sn-btn");
  const input = document.getElementById("sn-input");

  btn.addEventListener("click", () => {

    // ❗核心：超过4次直接没反应
    if (!checkLimit()) return;

    query(input.value.trim());
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {

      if (!checkLimit()) return;

      query(input.value.trim());
    }
  });
});
