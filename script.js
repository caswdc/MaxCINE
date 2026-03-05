// MaxCINE language toggle and minor utilities

// Supabase 配置（保修查询）
const SUPABASE_URL = "https://ewowtboqxblvfyjadzzz.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_wnHj3BGbtUK-6ElSo1UbRg_spBJkghV";
const supabase = supabase ? supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY) : null;

const translations = {
  cn: {
    "nav.filters": "航拍无人机滤镜",
    "nav.cinema": "影视制作配件",
    "nav.merch": "品牌周边",
    "nav.support": "支持",
    "nav.buy": "购买",
    "hero.kicker": "专业级航拍无人机增广镜",
    "hero.title": "视界尽展",
    "hero.subtitle": "适用MAVIC 4 Pro 增广镜",
    "hero.cta": "了解更多 / Learn More",
    // 省略其余字段，保持原来的 translations 内容
  },
  en: {
    "nav.filters": "Drone Filters",
    "nav.cinema": "Cinema Accessories",
    "nav.merch": "Brand Gear",
    "nav.support": "Support",
    "nav.buy": "Where to Buy",
    "hero.kicker": "Professional Drone Wide-Angle Lens",
    "hero.title": "Expand Your View",
    "hero.subtitle": "For MAVIC 4 Pro Wide-Angle",
    "hero.cta": "Learn More",
    // 省略其余字段
  },
};

function setLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;

  document.documentElement.lang = lang === "cn" ? "zh-CN" : "en";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });

  const toggle = document.querySelector(".mc-lang-toggle");
  if (toggle) {
    toggle.dataset.lang = lang;
    const options = toggle.querySelectorAll(".mc-lang-option");
    options.forEach((opt, index) => {
      // 修复白屏报错的数组越界
      opt.classList.toggle(
        "mc-lang-option--active",
        (lang === "cn" && index === 0) || (lang === "en" && index === 1)
      );
    });
  }
}

function initLanguage() {
  const toggle = document.querySelector(".mc-lang-toggle");
  if (!toggle) return;

  toggle.addEventListener("click", () => {
    const current = toggle.dataset.lang === "en" ? "en" : "cn";
    const next = current === "cn" ? "en" : "cn";
    setLanguage(next);
  });

  setLanguage("cn");
}

function initYear() {
  const yearEl = document.getElementById("mc-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

function initHeaderVisibility() {
  const header = document.querySelector(".mc-header");
  const hero = document.querySelector(".mc-hero");
  if (!header || !hero) return;

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          header.classList.toggle("mc-header--hidden", !entry.isIntersecting);
        });
      },
      { threshold: 0.15 }
    );
    observer.observe(hero);
  } else {
    window.addEventListener("scroll", () => {
      const trigger = window.innerHeight * 0.7;
      header.classList.toggle("mc-header--hidden", window.scrollY > trigger);
    });
  }
}

async function requestWarrantyCheck(serialNumber) {
  if (!serialNumber?.trim()) return;
  const sn = serialNumber.trim();

  if (!supabase) {
    alert("保修查询服务未加载，请刷新页面重试。");
    return;
  }

  try {
    const { data, error } = await supabase
      .from("warranty")
      .select("serial_number, product_name, warranty_exp, status")
      .eq("serial_number", sn)
      .maybeSingle();

    if (error) {
      console.error(error);
      alert("查询失败：" + (error.message || "请稍后重试"));
      return;
    }

    if (!data) {
      alert("未找到序列号：" + sn);
      return;
    }

    const exp = data.warranty_exp ? new Date(data.warranty_exp).toLocaleDateString("zh-CN") : "—";
    alert(`产品：${data.product_name || "—"}\n保修到期：${exp}\n状态：${data.status || "—"}`);
  } catch (err) {
    console.error(err);
    alert("查询出错，请稍后重试。");
  }
}

function initSupportActions() {
  const warrantyCard = document.querySelector('[data-support="warranty"]');
  if (!warrantyCard) return;

  const handler = () => {
    const sn = window.prompt("请输入序列号 / Enter Serial Number");
    requestWarrantyCheck(sn || "");
  };

  warrantyCard.addEventListener("click", handler);
  warrantyCard.addEventListener("keydown", (e) => {
    if (["Enter", " "].includes(e.key)) {
      e.preventDefault();
      handler();
    }
  });

  warrantyCard.tabIndex = 0;
  warrantyCard.role = "button";
}

function initSmoothScroll() {
  document.querySelectorAll('a.mc-nav-link[href^="#"], a.mc-btn[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const target = document.querySelector(link.getAttribute("href"));
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

window.addEventListener("DOMContentLoaded", () => {
  initLanguage();
  initYear();
  initHeaderVisibility();
  initSupportActions();
  initSmoothScroll();
});
