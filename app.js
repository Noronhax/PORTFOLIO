
const $ = (s, r = document) => r.querySelector(s);
const app = $("#app");
// só mostra álbuns que já têm fotos; sem capa, usa a primeira foto; sem data, vai para o fim
const ehVideo = f => /\.(mp4|webm|mov|m4v)([?#].*)?$/i.test(f || "");
const midia = (src, alt = "", lazy = true) => ehVideo(src)
  ? `<video src="${src}#t=0.1" preload="metadata" muted playsinline aria-label="${esc(alt)}"></video>`
  : `<img src="${src}" alt="${esc(alt)}"${lazy ? ' loading="lazy" decoding="async"' : ""}>`;
const contagem = a => {
  const v = a.fotos.filter(ehVideo).length, f = a.fotos.length - v;
  return [f && `${f} foto${f > 1 ? "s" : ""}`, v && `${v} vídeo${v > 1 ? "s" : ""}`].filter(Boolean).join(" · ");
};
const LISTA = ALBUNS
  .filter(a => a.fotos && a.fotos.length)
  .map(a => ({ ...a, capa: a.capa || a.fotos.find(f => !ehVideo(f)) || a.fotos[0] }))
  .sort((a, b) => (b.data || "").localeCompare(a.data || ""));
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add("on"); io.unobserve(e.target); }
}), { rootMargin: "0px 0px -8% 0px" });

const fmt = d => !d ? "" : new Date(d + "T12:00:00").toLocaleDateString("pt-BR", {
  month: "long",
  year: "numeric"
});

const esc = s => String(s).replace(/[&<>"]/g, c => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;"
}[c]));

function cardAlbum(a, i) {
  return `<a class="card rv" href="#/album/${a.id}" style="--d:${i * 90}ms;--cor:${a.cor || "#e8d8b0"}">
    ${midia(a.capa, "Capa: " + a.titulo)}
    <div class="cap">
      <span>${fmt(a.data)}</span>
      <h3>${esc(a.titulo)}</h3>
      <em>${contagem(a)}</em>
    </div>
  </a>`;
}

function contato() {
  const c = SITE.contato;
  const l = [];

  if (c.whatsapp) {
    l.push(`
      <a href="https://wa.me/${c.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(SITE.mensagemWhats || "")}"
         target="_blank" rel="noopener">
        <i class="bi bi-whatsapp"></i>
        <span>WhatsApp</span>
      </a>
    `);
  }

  if (c.email) {
    l.push(`
      <a href="mailto:${esc(c.email)}">
        <i class="bi bi-envelope"></i>
        <span>E-mail</span>
      </a>
    `);
  }

  if (c.instagram) {
    l.push(`
      <a href="https://instagram.com/${esc(c.instagram.replace("@", ""))}"
         target="_blank" rel="noopener">
        <i class="bi bi-instagram"></i>
        <span>Instagram</span>
      </a>
    `);
  }

  return l.length
    ? l.join("")
    : `<p class="muted">Adicione seus contatos em js/albums.js.</p>`;
}

/* Frase grande em destaque entre as seções */
function fraseDestaque() {
  const t = (SITE.fraseDestaque || "").trim();
  if (!t) return "";
  const p = t.split(" ");
  const ultima = p.pop();
  return `<section class="frase-d rv"><p>${esc(p.join(" "))} <em>${esc(ultima)}</em></p></section>`;
}

/* Nome NORACTION preenchido com as fotos de capa dos álbuns */
let tNome;
function iniciarNome() {
  const el = $("#nome");
  const fs = LISTA.map(a => a.capa).filter(c => !ehVideo(c)).slice(0, 4);
  if (!el || !fs.length) return;
  let k = 0;
  const poe = () => { el.style.backgroundImage = `linear-gradient(rgba(255,255,255,.08), rgba(255,255,255,.08)), url("${fs[k]}")`; };
  el.classList.add("foto");
  poe();
  if (fs.length > 1) tNome = setInterval(() => {
    k = (k + 1) % fs.length;
    poe();
    el.animate([{ opacity: .3 }, { opacity: 1 }], { duration: 800 });
  }, 4500);
}

function rodape() {
  return `
    <footer class="footer">
      <div class="footer-top">
        <a href="#/" class="footer-logo">NORACTION</a>
        <p>${esc(SITE.frase)}</p>
      </div>

      <div class="footer-bottom">
        <span>© ${new Date().getFullYear()} NORACTION. Todos os direitos reservados.</span>

        <div class="footer-nav">
          <a href="#/">Início</a>
          <a href="#/albuns">Álbuns</a>
          <a href="#/sobre">Sobre</a>
          <a href="#/contato">Contato</a>
        </div>
      </div>
    </footer>
  `;
}

/* =========================
   PÁGINA SOBRE
========================= */

function sobre() {
  document.title = "Sobre — NORACTION";

  app.innerHTML = `
    <section class="sobre-page">

      <div class="sobre-cabecalho">
        <span class="sobre-label">NORACTION — FOTOGRAFIA</span>
        <a href="#/" class="back">← Voltar ao início</a>
      </div>

      <div class="sobre-conteudo">

        <div class="sobre-foto">
          <img
            src="fotos/sobre/perfil.jpg"
            alt="Retrato do fotógrafo por trás da NORACTION"
          >

          <span class="sobre-foto-legenda">
            POR TRÁS DAS LENTES
          </span>
        </div>

        <div class="sobre-texto">

          <span class="sobre-numero">01 — SOBRE MIM</span>

          <h1>
            Mais do que<br>
            <em>registrar.</em><br>
            Sentir cada momento.
          </h1>

          <div class="sobre-divisor"></div>

          <p class="sobre-intro">
            A fotografia é uma maneira de transformar instantes
            em histórias que continuam vivas mesmo depois que
            o momento passa.
          </p>

          <p>
            Na NORACTION, meu olhar é direcionado à emoção,
            ao movimento e aos detalhes que tornam cada cena
            única. Seja no esporte ou em outros momentos,
            a intenção é registrar imagens que transmitam
            a energia do que está acontecendo.
          </p>

          <p>
            Cada clique é uma oportunidade de contar uma história
            de forma autêntica, valorizando aquilo que merece
            ser lembrado.
          </p>

          <a href="#/contato" class="btn sobre-btn">
            Vamos conversar
            <span>↗</span>
          </a>

        </div>
      </div>

      <div class="sobre-frase">
        <span>O OLHAR POR TRÁS DE CADA REGISTRO</span>
        <p>“${esc(SITE.frase)}”</p>
      </div>

    </section>

    ${rodape()}
  `;
}

/* =========================
   PÁGINA INICIAL
========================= */


function home() {
  document.title = "NORACTION — Fotografia";

  const dest = LISTA.slice(0, 3);

  app.innerHTML = `
    <!-- CAPA PRINCIPAL -->
    <section class="hero">

      <div class="hero-overlay"></div>

      <div class="hero-topline">
        <span>PORTFÓLIO FOTOGRÁFICO</span>
        <span>BRASIL — ${new Date().getFullYear()}</span>
      </div>

      <div class="hero-content">

        <span class="hero-kicker">
          FOTOGRAFIA • ESPORTE • MOMENTOS
        </span>

        <h1 id="nome">NORACTION</h1>

        <div class="hero-line"></div>

        <p>${esc(SITE.frase)}</p>

        <a class="hero-cta" href="#/albuns">
          <span>EXPLORAR PORTFÓLIO</span>
          <span class="hero-cta-icon">↗</span>
        </a>

      </div>

      <div class="hero-bottom">
        <span class="hero-location">CADA CLIQUE, UMA HISTÓRIA.</span>

        <a href="#/" class="hero-scroll" onclick="document.getElementById('inicio-conteudo').scrollIntoView({behavior:'smooth'});return false;">
          <span>ROLE PARA DESCOBRIR</span>
          <i class="bi bi-arrow-down"></i>
        </a>

      </div>

    </section>

    <!-- CONTEÚDO DA PÁGINA INICIAL -->
    <div id="inicio-conteudo">

      ${fraseDestaque()}

      <!-- SOBRE -->
      <section class="sobre-home">

        <div class="sobre-home-foto">
          <img
            src="fotos/sobre/perfil.jpg"
            alt="Retrato do fotógrafo NORACTION"
            loading="lazy"
          >

          <span class="sobre-home-assinatura">NORACTION</span>
        </div>

        <div class="sobre-home-texto">

          <span class="sobre-label">01 / CONHEÇA O FOTÓGRAFO</span>

          <h2>
            Por trás das lentes,<br>
            existe um <em>olhar.</em>
          </h2>

          <p>
            Cada imagem tem algo a contar. Conheça a proposta
            por trás da NORACTION e a forma de enxergar cada
            momento através da fotografia.
          </p>

          <a href="#/sobre" class="sobre-link">
            CONHEÇA MINHA HISTÓRIA
            <span>↗</span>
          </a>

        </div>

      </section>

      <!-- TRABALHOS EM DESTAQUE -->
      <section class="dest-section">

        <div class="sec">
          <span class="sobre-label">02 / PORTFÓLIO</span>
          <h2>Trabalhos em destaque</h2>
        </div>

        <div class="dest">
          ${dest.map(a => `
            <a class="rv" href="#/album/${a.id}" style="--cor:${a.cor || "#e8d8b0"}">
              ${midia(a.capa, a.titulo)}
              <span class="dest-titulo">${esc(a.titulo)}</span>
            </a>
          `).join("")}
        </div>

      </section>

      <!-- TODOS OS ÁLBUNS -->
      <section id="albuns" class="sec">
        <span class="sobre-label">03 / GALERIA</span>
        <h2>Todos os álbuns</h2>

        <div class="grid">
          ${LISTA.map(cardAlbum).join("")}
        </div>
      </section>

      <!-- CONTATO -->
      <section id="contato" class="sec contato">
        <span class="sobre-label">04 / CONTATO</span>
        <h2>Vamos criar algo?</h2>
        <div class="links">${contato()}</div>
      </section>

    </div>

    ${rodape()}
  `;
}


/* =========================
   PÁGINA DE ÁLBUM
========================= */

function album(id) {
  const i = LISTA.findIndex(x => x.id === id);
  const a = LISTA[i];

  if (!a) return (location.hash = "#/");

  const prox = LISTA[(i + 1) % LISTA.length];
  const ant = LISTA[(i - 1 + LISTA.length) % LISTA.length];

  document.title = `${a.titulo} — NORACTION`;

  app.innerHTML = `
    <header class="ah" style="--cor:${a.cor || "#e8d8b0"}">
      ${midia(a.capa, "", false)}
      <div class="ah-t">
        <a class="back" href="#/albuns">← Álbuns</a>
        <span class="muted">${[fmt(a.data), contagem(a)].filter(Boolean).join(" · ")}</span>
        <h1>${esc(a.titulo)}</h1>
        ${a.descricao ? `<p>${esc(a.descricao)}</p>` : ""}
      </div>
    </header>

    <section class="alb">
      <div class="masonry">
        ${a.fotos.map((f, n) => `
          <button class="rv" data-i="${n}" aria-label="${ehVideo(f) ? "Reproduzir vídeo" : "Abrir foto"} ${n + 1}">
            ${midia(f, `${a.titulo} — ${n + 1}`)}${ehVideo(f) ? '<span class="play">▶</span>' : ""}
          </button>
        `).join("")}
      </div>

      ${LISTA.length > 1 ? `
        <nav class="pn">
          <a href="#/album/${ant.id}">← ${esc(ant.titulo)}</a>
          <a href="#/album/${prox.id}">${esc(prox.titulo)} →</a>
        </nav>` : ""}
    </section>

    ${rodape()}
  `;

  $(".masonry").onclick = e => {
    const b = e.target.closest("button");
    if (b) openLb(a.fotos, +b.dataset.i, b);
  };
}

/* =========================
   NAVEGAÇÃO
========================= */

function route() {
  renderRoute();
  prepararPagina();
}

/* Animações ao rolar e carregamento suave das imagens */
function prepararPagina() {
  app.querySelectorAll(".rv").forEach(el => io.observe(el));
  app.querySelectorAll("img").forEach(m => {
    const ok = () => m.classList.add("ld");
    const falha = () => { ok(); m.closest(".sobre-foto, .sobre-home-foto")?.classList.add("vazio"); };
    if (m.complete) m.naturalWidth ? ok() : falha();
    else { m.addEventListener("load", ok); m.addEventListener("error", falha); }
  });
}

function renderRoute() {
  const [, r, id] = location.hash.split("/");

  clearInterval(tNome);
  closeLb(true);
  window.scrollTo(0, 0);

  if (r === "album") return album(id);

  if (r === "sobre") return sobre();

  home();
  iniciarNome();

  if (r === "albuns" || r === "contato") {
    const section = $("#" + r);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
}

/* =========================
   VISUALIZADOR DE FOTOS
========================= */

const lb = $("#lb");
const img = $("#lb-img");
const vid = $("#lb-vid");
const th = $("#lb-t");

let fotos = [];
let cur = 0;
let x0 = null;
let y0 = 0;
let foco = null;

function show(i) {
  cur = (i + fotos.length) % fotos.length;
  img.classList.remove("zoom");
  img.style.transformOrigin = "";
  vid.pause();

  if (ehVideo(fotos[cur])) {
    img.hidden = true;
    vid.hidden = false;
    vid.src = fotos[cur];
    vid.play().catch(() => {});
  } else {
    vid.hidden = true;
    vid.removeAttribute("src");
    img.hidden = false;
    img.style.opacity = 0;
    const n = new Image();
    n.onload = n.onerror = () => { img.src = fotos[cur]; img.style.opacity = 1; };
    n.src = fotos[cur];
  }

  $("#lb-c").textContent = `${cur + 1} / ${fotos.length}`;
  [...th.children].forEach((b, k) => b.classList.toggle("on", k === cur));
  th.children[cur]?.scrollIntoView({ inline: "center", block: "nearest" });

  // pré-carrega as fotos vizinhas
  [cur + 1, cur - 1].map(k => fotos[(k + fotos.length) % fotos.length]).filter(f => !ehVideo(f)).forEach(f => { new Image().src = f; });
}

function openLb(f, i, origem) {
  fotos = f;
  foco = origem;
  lb.hidden = false;
  document.body.style.overflow = "hidden";
  th.innerHTML = f.map((s, k) => `<button aria-label="Mídia ${k + 1}">${midia(s, "", false)}</button>`).join("");
  th.hidden = f.length < 2;
  show(i);
  history.pushState({ lb: 1 }, "");   // o botão "voltar" do celular fecha a foto
  $(".lb-x").focus();
}

function closeLb(viaHistorico) {
  if (lb.hidden) return;
  lb.hidden = true;
  vid.pause();
  vid.removeAttribute("src");
  document.body.style.overflow = "";
  if (!viaHistorico && history.state && history.state.lb) history.back();
  if (foco && foco.focus) foco.focus();
}

$(".lb-x").onclick = () => closeLb();
$(".lb-p").onclick = () => show(cur - 1);
$(".lb-n").onclick = () => show(cur + 1);
$(".lb-f").onclick = () => document.fullscreenElement ? document.exitFullscreen() : lb.requestFullscreen?.();

th.onclick = e => {
  const b = e.target.closest("button");
  if (b) show([...th.children].indexOf(b));
};

lb.onclick = e => { if (e.target === lb) closeLb(); };

// clique na foto = zoom no ponto clicado
img.onclick = e => {
  const r = img.getBoundingClientRect();
  img.style.transformOrigin = `${(e.clientX - r.left) / r.width * 100}% ${(e.clientY - r.top) / r.height * 100}%`;
  img.classList.toggle("zoom");
};

addEventListener("popstate", () => closeLb(true));

document.addEventListener("keydown", e => {
  if (lb.hidden) return;
  if (e.target === vid && e.key.startsWith("Arrow")) return;   // setas controlam o vídeo
  if (e.key === "Escape") closeLb();
  else if (e.key === "ArrowLeft") show(cur - 1);
  else if (e.key === "ArrowRight") show(cur + 1);
});

lb.addEventListener("touchstart", e => {
  x0 = e.touches[0].clientX;
  y0 = e.touches[0].clientY;
}, { passive: true });

lb.addEventListener("touchend", e => {
  if (x0 === null || img.classList.contains("zoom")) return;
  const dx = e.changedTouches[0].clientX - x0;
  const dy = e.changedTouches[0].clientY - y0;
  x0 = null;
  if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) show(cur + (dx < 0 ? 1 : -1));
  else if (dy > 90) closeLb();   // deslizar para baixo fecha
});

/* Barra de progresso e cabeçalho que escurece ao rolar */
addEventListener("scroll", () => {
  $("#top").classList.toggle("solid", scrollY > 60);
  $("#prog").style.width = scrollY / Math.max(1, document.documentElement.scrollHeight - innerHeight) * 100 + "%";
}, { passive: true });

/* =========================
   CORTINA COM A LOGO ENTRE AS PÁGINAS
========================= */

const cortina = $("#cortina");
let coberta = true;
let rotaAtual = null;

const chave = () => {
  const [, r, id] = location.hash.split("/");
  return r === "album" ? "album/" + id : r === "sobre" ? "sobre" : "home";
};

function abrirCortina() {
  coberta = true;
  cortina.classList.remove("sai");
  cortina.classList.add("on");
}

function fecharCortina() {
  if (!coberta) return;
  coberta = false;
  cortina.classList.remove("on");
  cortina.classList.add("sai");
  setTimeout(() => {              // devolve a cortina para baixo, sem animação
    if (coberta) return;
    cortina.style.transition = "none";
    cortina.classList.remove("sai");
    void cortina.offsetWidth;
    cortina.style.transition = "";
  }, 700);
}

function ir() {
  const nova = chave();
  if (nova === rotaAtual) return route();   // mesma página (ex.: rolar até Álbuns): sem cortina
  rotaAtual = nova;
  abrirCortina();
  setTimeout(() => { route(); setTimeout(fecharCortina, 250); }, 550);
}

addEventListener("hashchange", ir);

rotaAtual = chave();
route();
addEventListener("load", () => setTimeout(fecharCortina, 900));
setTimeout(fecharCortina, 4000);   // segurança: a cortina nunca fica presa
