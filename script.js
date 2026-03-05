// MaxCINE language toggle and minor utilities

// Supabase 配置（保修查询）
const SUPABASE_URL = "https://ewowtboqxblvfyjadzzz.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_wnHj3BGbtUK-6ElSo1UbRg_spBJkghV";
const supabase = window.supabase ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY) : null;

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

    "featured.kicker": "FEATURED PRODUCT",
    "featured.title": "MaxCINE Wide-Angle Lens 系列",
    "featured.body":
      "专为 Mavic 4 Pro 打造的专业级增广镜，在复杂光照条件下依然保持稳定细节与自然色彩。配合外置ND滤镜套装与俯仰稳定模块，为专业影像团队提供更可靠的空间控制与动态表现。",
    "featured.point1": "航空级铝合金框体，精密CNC切削。",
    "featured.point2": "多层纳米镀膜覆盖肖特光学玻璃，抗雾拒污，持久可靠。",
    "featured.point3": "专为全球专业级航拍创作者们而设计，让每一次创作都使空间更有叙事",

    "categories.title": "产品体系概览",
    "categories.body":
      "从航拍滤镜到片场工具，MaxCINE 以统一的工业设计语言与光学标准，为专业影像创作提供完整的支持。",
    "categories.filters.title": "航拍无人机滤镜",
    "categories.filters.body":
      "为主流航拍平台打造的 ND / CPL / Mist 滤镜系统，优化天空层次与高光细节，让每一次起飞都具备电影级画面控制力。",
    "categories.cinema.title": "影视制作配件",
    "categories.cinema.body":
      "为片场与移动拍摄环境设计的支撑、控制与保护系统，强调耐用结构与高兼容性，契合多机位与多系统协作需求。",
    "categories.merch.title": "品牌周边",
    "categories.merch.body":
      "以影像文化为核心的周边服饰与日常物件，采用低调工业配色与精细工艺，延伸 MaxCINE 的品牌触感。",

    "philosophy.kicker": "BRAND PHILOSOPHY",
    "philosophy.title": "每一颗像素背后，都是一次精密工程决策。",
    "philosophy.slogan": "Create Without Limits  Make it Real.",
    "philosophy.body":
      "MaxCINE 将航拍与电影工业的工程标准，凝聚在每一枚滤镜、每一个细节之中。 我们与全球专业影像团队合作，在极端环境中持续验证产品可靠性，只为让创作者在按下 REC 的瞬间，完全相信画面的每一处层次与质感。",

    "support.title": "产品信息",
    "support.body": "查询产品的保障状态与服务记录。",
    "support.warranty.title": "保修查询",
    "support.warranty.body":
      "通过序列号快速验证产品的保修状态与服务记录，确保每一次创作都安心无忧。",
    "support.downloads.title": "下载中心",
    "support.downloads.body":
      "获取产品说明书、安装指南与校正文件，为个人用户与片场团队建立统一的技术基线。",
    "support.contact.title": "联系团队",
    "support.contact.body":
      "联系 MaxCINE 专业支持团队，不论是产品参数还是技术支持，我们样样都精通。",

    "buy.kicker": "WHERE TO FIND",
    "buy.title": "通过授权渠道体验 MaxCINE",
    "buy.body":
      "MaxCINE 仅通过精选的优质经销商进行合作展示与销售，确保每一次接触都由熟悉影像工作流程的团队完成。",
    "buy.pro.title": "专业影像渠道",
    "buy.pro.body":
      "联系我们的区域经销伙伴，在专业的影像体验中心体验我们的产品。",
    "buy.partner.title": "项目合作",
    "buy.partner.body":
      "针对航拍与影视项目提供批量配置建议与长期支持方案。",
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

    "featured.kicker": "FEATURED PRODUCT",
    "featured.title": "MaxCINE Aerial Master ND Series",
    "featured.body":
      "A multi‑coated ND filter system engineered for professional aerial platforms, preserving detail, contrast and color accuracy under extreme lighting so teams can capture motion with confidence at any altitude.",
    "featured.point1": "Aerospace‑grade aluminum frame with precision CNC machining.",
    "featured.point2": "Advanced nano‑coatings for oil, water and scratch resistance.",
    "featured.point3": "Optimized for 8K capture and high‑frame‑rate slow motion.",

    "categories.title": "Product Architecture",
    "categories.body":
      "From aerial filters to on‑set tools, MaxCINE builds a coherent system grounded in industrial design discipline and optical standards.",
    "categories.filters.title": "Aerial Drone Filters",
    "categories.filters.body":
      "ND, CPL and diffusion filters tuned for leading drone platforms, balancing sky gradation and highlight detail for a cinematic, controllable image.",
    "categories.cinema.title": "Cinema Accessories",
    "categories.cinema.body":
      "Rigging, control and protection systems built for demanding set environments, focusing on durability, modularity and cross‑platform compatibility.",
    "categories.merch.title": "Brand Essentials",
    "categories.merch.body":
      "Minimal apparel and everyday objects inspired by imaging culture, extending the tactile language of MaxCINE beyond the set.",

    "philosophy.kicker": "BRAND PHILOSOPHY",
    "philosophy.title": "Every pixel is an engineering decision.",
    "philosophy.slogan": "Create Without Limits  Make it Real.",
    "philosophy.body":
      "MaxCINE distills the standards of aerial and cinema engineering into each filter and mechanical detail. Working with teams worldwide in extreme conditions, we validate reliability so creators can trust every layer and texture the moment they hit REC.",

    "support.title": "Support & Services",
    "support.body":
      "Structured support built around professional workflows, covering the full life cycle of every system.",
    "support.warranty.title": "Warranty Check",
    "support.warranty.body":
      "Verify coverage by serial number and plan device usage and backup strategies across your production schedule.",
    "support.downloads.title": "Downloads",
    "support.downloads.body":
      "Access manuals, mounting guides, LUTs and look recommendations to align technical baselines across your crew.",
    "support.contact.title": "Contact",
    "support.contact.body":
      "Reach the MaxCINE support team for configuration advice tailored to your project.",

    "buy.kicker": "WHERE TO FIND",
    "buy.title": "Experience MaxCINE through partners",
    "buy.body":
      "MaxCINE is presented through selected aerial and cinema channels only, ensuring every interaction is guided by teams fluent in production workflows.",
    "buy.pro.title": "Pro Imaging Channels",
    "buy.pro.body":
      "Authorised partners in key cities provide in‑store demonstrations and configuration consultations.",
    "buy.partner.title": "Project Programs",
    "buy.partner.body":
      "Long‑term support options and batch configuration planning for aerial and cinema projects.",
  },
};

function setLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;

  document.documentElement.lang = lang === "cn" ? "zh-CN" : "en";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  const toggle = document.querySelector(".mc-lang-toggle");
  if (toggle) {
    toggle.dataset.lang = lang;
    const options = toggle.querySelectorAll(".mc-lang-option");
    options.forEach((opt, index) => {
      opt.classList.toggle(
        "mc-lang-option--active",
        (lang === "cn" && index === 0) || (lang === "en" && index === 2)
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
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

function initHeaderVisibility() {
  const header = document.querySelector(".mc-header");
  const hero = document.querySelector(".mc-hero");
  if (!header || !hero) return;

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            header.classList.remove("mc-header--hidden");
          } else {
            header.classList.add("mc-header--hidden");
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(hero);
  } else {
    window.addEventListener("scroll", () => {
      const trigger = window.innerHeight * 0.7;
      if (window.scrollY > trigger) {
        header.classList.add("mc-header--hidden");
      } else {
        header.classList.remove("mc-header--hidden");
      }
    });
  }
}

async function requestWarrantyCheck(serialNumber) {
  if (!serialNumber || !serialNumber.trim()) return;

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
      console.error("Supabase error:", error);
      alert("查询失败：" + (error.message || "请稍后重试"));
      return;
    }

    if (!data) {
      alert("未找到序列号：" + sn + "\n请检查输入是否正确。");
      return;
    }

    const exp = data.warranty_exp ? new Date(data.warranty_exp).toLocaleDateString("zh-CN") : "—";
    const msg =
      "产品：" + (data.product_name || "—") + "\n" +
      "保修到期：" + exp + "\n" +
      "状态：" + (data.status || "—");
    alert(msg);
  } catch (err) {
    console.error(err);
    alert("查询出错，请稍后重试。");
  }
}

function initSupportActions() {
  const warrantyCard = document.querySelector('[data-support="warranty"]');
  if (!warrantyCard) return;

  warrantyCard.addEventListener("click", () => {
    const sn = window.prompt("请输入序列号 / Enter Serial Number");
    requestWarrantyCheck(sn || "");
  });

  warrantyCard.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      const sn = window.prompt("请输入序列号 / Enter Serial Number");
      requestWarrantyCheck(sn || "");
    }
  });

  warrantyCard.setAttribute("tabindex", "0");
  warrantyCard.setAttribute("role", "button");
}

function initSmoothScroll() {
  const links = document.querySelectorAll('a.mc-nav-link[href^="#"], a.mc-btn[href^="#"]');
  if (!links.length) return;

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");
      if (!href || !href.startsWith("#")) return;

      const target = document.querySelector(href);
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

