/* ===================================================================
   Bible Quizzy — a quiz for every book and every chapter of the Bible.
   Three rounds per quiz, hard words, people & places, and verses to
   underline. Everything is saved in this browser:
     <quiz>:best         best score
     <quiz>:history      [{d, s, n}] every finished attempt
     <quiz>:last         {d, s, n, picks} last finished attempt, so its results can be reopened
     <quiz>:progress     {picks, score, d, n} a quiz left half-way, so it can be resumed
     <quiz>:underlined   indexes of the underline cards marked
     <quiz>:reflection   journal text (+ reflectionAt)
   <quiz> is "book-genesis" for a whole book or "genesis-3" for a chapter.
   The John chapter keys ("john-3") are the ones John Quizzy used, so old
   progress carries over. Book quizzes load with the page; chapter quizzes
   load on demand from data/<book>/<chapter>.js, listed in chapter-index.js.
   =================================================================== */
"use strict";
const $ = (s) => document.querySelector(s);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const TYPE_LABEL = { mc: "Multiple choice", tf: "True or false", fill: "Fill the blank" };
const TESTAMENT = { ot: "Old Testament", nt: "New Testament" };
const DATA_V = "6";

const GROUPS = window.BQ_GROUPS;
const GROUP = {};
GROUPS.forEach((g) => { GROUP[g.id] = g; });
const BOOKS = window.BQ_BOOKS;
const BOOK = {};
BOOKS.forEach((b, i) => { b.n = i + 1; b.group = GROUP[b.g]; b.t = b.group.t; BOOK[b.id] = b; });
const TOTAL_CHAPTERS = BOOKS.reduce((a, b) => a + b.ch, 0);
const chapterName = (b, n) => (b.id === "psalms" ? "Psalm" : b.name) + " " + n;
const range = (a, b) => (a === b ? String(a) : a + "–" + b);

/* Chapter index: what exists, without loading it. Entries are quiz "metas". */
BOOKS.forEach((b) => {
  const list = (window.BQ_CHAPTERS && window.BQ_CHAPTERS[b.id]) || [];
  b.chapterList = b.ch > 1 ? list.map(([n, title, verses, nq]) => ({
    key: b.id + "-" + n, route: b.id + "-" + n, kind: "chapter", book: b, chapter: n,
    name: chapterName(b, n), title, verses, nq
  })) : [];
  b.chapterMap = {};
  b.chapterList.forEach((c) => { b.chapterMap[c.chapter] = c; });
});

/* ---------------- quizzes ---------------- */
const QUIZ = {};
const BOOK_QUIZZES = [];

function bookRounds(b) {
  return [
    { numeral: "I", name: "Recall", tag: "What happened?", art: "scroll", desc: `The big moments of ${b.name}. If you've read it, you've got these.` },
    { numeral: "II", name: "Understand", tag: "What does it mean?", art: "lamp", desc: "The meaning behind the story. Some of these are tricky on purpose." },
    { numeral: "III", name: "Go deeper", tag: "Why does it matter?", art: "book", desc: `How ${b.name} connects to the rest of the Bible. Use the Look it up links.` }
  ];
}
function chapterRounds(name) {
  return [
    { numeral: "I", name: "Recall", tag: "What did it say?", art: "scroll", desc: `Straight from ${name}. If you read it carefully, you've got these.` },
    { numeral: "II", name: "Understand", tag: "What does it mean?", art: "lamp", desc: "The meaning behind the words. Some of these are tricky on purpose." },
    { numeral: "III", name: "Go deeper", tag: "Why does it matter?", art: "book", desc: `How ${name} connects to the rest of the Bible. Use the Look it up links.` }
  ];
}
function normQuestion(q) {
  const type = q.t || (q.tf !== undefined ? "tf" : q.q.indexOf("____") >= 0 ? "fill" : "mc");
  return {
    round: q.r, type, art: q.art || null, verses: q.v || q.ch || [], ref: q.ref, q: q.q,
    options: type === "tf" ? ["True", "False"] : q.o,
    answer: type === "tf" ? (q.tf ? 0 : 1) : 0,
    why: q.why, look: q.look || null
  };
}
const normCast = (cast) => (cast || []).map(([name, kind, ref, who, read]) => ({ name, kind, ref, who, read }));
const normSections = (sections, byVerse) => sections.map(([from, to, name, summary]) => ({
  from, to, name, summary,
  label: (byVerse ? (from === to ? "v. " : "vv. ") : (from === to ? "Ch. " : "Chs. ")) + range(from, to),
  short: range(from, to) + " · " + name
}));
function normBook(d) {
  const b = BOOK[d.id], byVerse = b.ch === 1;
  return {
    key: "book-" + b.id, kind: "book", book: b, route: b.id, name: b.name,
    units: byVerse ? b.vv : b.ch, byVerse,
    title: d.title, overview: d.overview,
    keyVerse: { ref: d.key[0], text: d.key[1] },
    cast: normCast(d.cast),
    openPrayer: d.pray,
    sections: normSections(d.sections, byVerse),
    reflect: { prompt: d.reflect[0], ref: d.reflect[1] },
    closePrayer: d.close,
    rounds: bookRounds(b),
    questions: d.qs.map(normQuestion),
    words: d.words.map(([term, ref, meaning]) => ({ term, ref, meaning })),
    underline: d.under.map(([ref, line, mean, live]) => ({ ref, line, mean, live }))
  };
}
function normChapter(raw) {
  const b = BOOK[raw.book], n = raw.ch, name = chapterName(b, n);
  const base = { key: b.id + "-" + n, kind: "chapter", book: b, chapter: n, route: b.id + "-" + n, name, byVerse: true };
  if (raw.full) {
    /* John's original chapter quizzes keep their richer format. */
    const c = raw.full;
    return Object.assign({}, c, base, { units: c.verses, verses: c.verses });
  }
  return Object.assign(base, {
    units: raw.verses, verses: raw.verses,
    title: raw.title, overview: raw.overview,
    keyVerse: { ref: raw.key[0], text: raw.key[1] },
    cast: normCast(raw.cast),
    openPrayer: raw.pray,
    sections: normSections(raw.sections, true),
    reflect: { prompt: raw.reflect[0], ref: raw.reflect[1] },
    closePrayer: raw.close,
    rounds: chapterRounds(name),
    questions: raw.qs.map(normQuestion),
    words: raw.words.map(([term, ref, meaning]) => ({ term, ref, meaning })),
    underline: raw.under.map(([ref, line, mean, live]) => ({ ref, line, mean, live }))
  });
}
(window.BQ_QUIZZES || []).forEach((d) => {
  const b = BOOK[d.id];
  if (!b) return;
  b.quiz = normBook(d);
  QUIZ[b.quiz.key] = b.quiz;
});
BOOKS.forEach((b) => { if (b.quiz) BOOK_QUIZZES.push(b.quiz); });

const loading = {};
function loadChapter(bookId, n) {
  const key = bookId + "-" + n;
  if (QUIZ[key]) return Promise.resolve(QUIZ[key]);
  if (loading[key]) return loading[key];
  loading[key] = new Promise((resolve, reject) => {
    const finish = () => {
      const raw = window.BQ_CHAPTER_DATA[key];
      if (!raw) { delete loading[key]; reject(new Error("no data for " + key)); return; }
      try { QUIZ[key] = normChapter(raw); resolve(QUIZ[key]); }
      catch (e) { delete loading[key]; reject(e); }
    };
    if (window.BQ_CHAPTER_DATA[key]) { finish(); return; }
    const s = document.createElement("script");
    s.src = `data/${bookId}/${n}.js?v=${DATA_V}`;
    s.onload = finish;
    s.onerror = () => { delete loading[key]; s.remove(); reject(new Error("could not load " + key)); };
    document.head.appendChild(s);
  });
  return loading[key];
}
function loadByKey(key) {
  if (QUIZ[key]) return Promise.resolve(QUIZ[key]);
  const m = /^(.+)-(\d+)$/.exec(key);
  return m && BOOK[m[1]] ? loadChapter(m[1], +m[2]) : Promise.reject(new Error("unknown quiz " + key));
}

/* ---------------- saving ---------------- */
const store = {
  get(key, k, d) { try { const v = localStorage.getItem(key + ":" + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
  set(key, k, v) { try { localStorage.setItem(key + ":" + k, JSON.stringify(v)); return true; } catch (e) { return false; } },
  del(key, k) { try { localStorage.removeItem(key + ":" + k); } catch (e) {} }
};
const bestK = (k) => store.get(k, "best", null);
const histK = (k) => { const h = store.get(k, "history", []); return Array.isArray(h) ? h : []; };
const lastK = (k) => store.get(k, "last", null);
const marksK = (k) => { const m = store.get(k, "underlined", []); return Array.isArray(m) ? m : []; };
function progK(k, nq) {
  const p = store.get(k, "progress", null);
  const total = nq || (p && p.n);
  return p && Array.isArray(p.picks) && p.picks.length > 0 && (!total || p.picks.length < total) ? p : null;
}
const bestOf = (z) => bestK(z.key);
const progressOf = (z) => progK(z.key, z.questions.length);

/* What we know about a quiz without loading it. */
function quizMeta(key) {
  const z = QUIZ[key];
  if (z) return { key, route: z.route, kind: z.kind, book: z.book, chapter: z.chapter || null, name: z.name, title: z.title, overview: z.overview, verses: z.verses || null, nq: z.questions.length };
  const m = /^(.+)-(\d+)$/.exec(key);
  const b = m && BOOK[m[1]];
  return (b && b.chapterMap[+m[2]]) || null;
}
const quizOrder = (meta) => meta.book.n * 1000 + (meta.kind === "book" ? 0 : meta.chapter);
function savedQuizKeys() {
  const keys = new Set();
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const m = /^(.+):(best|history|last|progress|underlined|reflection)$/.exec(localStorage.key(i) || "");
      if (m && m[1] !== "bq") keys.add(m[1]);
    }
  } catch (e) {}
  return [...keys].filter((k) => quizMeta(k));
}
function chaptersDoneIn(b) {
  if (b.ch === 1) return b.quiz && bestK(b.quiz.key) != null ? 1 : 0;
  let c = 0;
  for (let n = 1; n <= b.ch; n++) if (bestK(b.id + "-" + n) != null) c++;
  return c;
}
function bookState(b) {
  const done = chaptersDoneIn(b);
  if ((b.quiz && bestK(b.quiz.key) != null) || (b.ch > 1 && done === b.ch)) return { state: "done", done };
  const started = done > 0 || (b.quiz && progK(b.quiz.key, b.quiz.questions.length)) || b.chapterList.some((c) => progK(c.key, c.nq));
  return { state: started ? "started" : "", done };
}
const dayKey = (ts) => { const d = new Date(ts); return d.getFullYear() + "-" + d.getMonth() + "-" + d.getDate(); };
function fmtDate(ts) {
  const d = new Date(ts), now = new Date();
  return d.toLocaleDateString(undefined, d.getFullYear() === now.getFullYear() ? { month: "short", day: "numeric" } : { month: "short", day: "numeric", year: "numeric" });
}
function allStats() {
  let marks = 0;
  const days = new Set();
  savedQuizKeys().forEach((k) => {
    histK(k).forEach((a) => days.add(dayKey(a.d)));
    marks += marksK(k).length;
  });
  let books = 0, chapters = 0;
  BOOKS.forEach((b) => { const s = bookState(b); if (s.state === "done") books++; chapters += b.ch === 1 ? (s.state === "done" ? 1 : 0) : s.done; });
  let streak = 0;
  const d = new Date();
  if (!days.has(dayKey(d))) d.setDate(d.getDate() - 1);
  while (days.has(dayKey(d))) { streak++; d.setDate(d.getDate() - 1); }
  return { books, chapters, marks, streak };
}
const statTiles = (s) => [
  [s.books + '<small style="font-size:.9rem;color:var(--muted)"> / 66</small>', "Books done"],
  [s.chapters + `<small style="font-size:.9rem;color:var(--muted)"> / ${TOTAL_CHAPTERS.toLocaleString()}</small>`, s.chapters === 1 ? "Chapter done" : "Chapters done"],
  [s.marks, s.marks === 1 ? "Verse underlined" : "Verses underlined"],
  [s.streak, "Day streak"]
].map(([v, l]) => `<div class="stat"><b>${v}</b><span>${l}</span></div>`).join("");

let toastTimer;
function toast(msg, warn) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.toggle("warn", !!warn);
  t.classList.add("on");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("on"), 2400);
}

/* Bible Gateway (NIV) link for a reference like "John 3:14–15 · Numbers 21:4–9" */
function bgUrl(ref) {
  const parts = String(ref).split(/\s*(?:·|→)\s*/).filter((p) => /\d/.test(p));
  const q = parts.join("; ").replace(/[–—]/g, "-");
  return "https://www.biblegateway.com/passage/?search=" + encodeURIComponent(q) + "&version=NIV";
}
const linkTo = (ref, label) => `<a href="${bgUrl(ref)}" target="_blank" rel="noopener">${esc(label || ref)} ↗</a>`;
const refLink = (r) => `<a class="ref" href="${bgUrl(r)}" target="_blank" rel="noopener">${esc(r)} ↗</a>`;
function shuffle(a) { for (let k = a.length - 1; k > 0; k--) { const j = Math.floor(Math.random() * (k + 1)); [a[k], a[j]] = [a[j], a[k]]; } return a; }
function setHash(h) {
  if (location.hash.replace(/^#/, "") === h) return;
  try { history.replaceState(null, "", "#" + h); } catch (e) {}
}

/* ---------------- screens ---------------- */
let homeY = 0;
function show(id, y) {
  const cur = document.querySelector(".screen:not([hidden])");
  if (cur && cur.id === "home" && id !== "home") homeY = window.scrollY;
  document.querySelectorAll(".screen").forEach((s) => { s.hidden = s.id !== id; });
  $("#ribbonWrap").hidden = !["intro", "round", "quiz", "results"].includes(id);
  const inQuiz = id === "round" || id === "quiz";
  $("#topMeta").hidden = !inQuiz;
  $("#myLink").hidden = inQuiz || id === "mybible";
  if (y != null) window.scrollTo(0, y);
  else window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
}
const setLoading = (on) => document.querySelector(".top").classList.toggle("loading", !!on);

/* ---------------- HOME: the library ---------------- */
let TAB = store.get("bq", "tab", "ot") === "nt" ? "nt" : "ot";
let CH = null, Q = [], N = 0, ART = BASE_ART, KEY = "";
let state = { i: 0, score: 0, picks: [] };
const seen = new Set();

function renderHome(tab) {
  CH = null; KEY = "";
  if (tab) { TAB = tab; store.set("bq", "tab", tab); }
  document.title = "Bible Quizzy · a quiz for every book and chapter of the Bible";
  $("#topTitle").textContent = "· NIV";
  $("#homeArt").innerHTML = BASE_ART.library;
  const s = allStats();
  $("#stats").innerHTML = statTiles(s);
  $("#progText").textContent = s.chapters.toLocaleString() + " of " + TOTAL_CHAPTERS.toLocaleString() + " chapters";
  $("#progBar").style.width = "0%";
  requestAnimationFrame(() => requestAnimationFrame(() => { $("#progBar").style.width = Math.max(s.chapters ? 0.6 : 0, 100 * s.chapters / TOTAL_CHAPTERS) + "%"; }));
  renderFeatured();
  renderShelves();
  show("home", homeY > 0 ? homeY : null);
}

function quizCard(meta, kind, eyebrow) {
  const best = bestK(meta.key), p = progK(meta.key, meta.nq);
  const badge = p ? `<span class="badge new">Resume · Q${p.picks.length + 1}</span>`
    : best != null ? `<span class="badge done">Best ${best}/${meta.nq}</span>`
    : `<span class="badge new">${kind === "start" ? "Start here" : "Up next"}</span>`;
  const eb = eyebrow || (meta.kind === "book" ? `${meta.book.name} · whole book` : `${meta.name} · ${meta.verses} verses`);
  const title = meta.kind === "book" ? `${meta.book.name}: ${meta.title}` : `${meta.name}: ${meta.title}`;
  const text = meta.overview || `Read ${meta.name} in your Bible, then take its ${meta.nq}-question quiz. ${meta.book.name}: ${meta.book.tag.toLowerCase()}.`;
  return `<a class="ch-card feature" href="#${meta.route}">
    <div class="ch-top"><span class="mono">${esc(eb)}</span>${badge}</div>
    <h3>${esc(title)}</h3><p>${esc(text)}</p></a>`;
}
function nextChapterAfter(b, n) {
  const own = b.chapterList.find((c) => c.chapter > n);
  if (own) return own;
  for (let i = b.n; i < BOOKS.length; i++) if (BOOKS[i].chapterList.length) return BOOKS[i].chapterList[0];
  return null;
}
function nextUntaken(meta) {
  if (bestK(meta.key) == null) return meta;
  if (meta.kind === "book") {
    const j = BOOK_QUIZZES.findIndex((z) => z.key === meta.key);
    const z = BOOK_QUIZZES.slice(j + 1).find((q) => bestOf(q) == null) || BOOK_QUIZZES.slice(0, j).find((q) => bestOf(q) == null);
    return z ? quizMeta(z.key) : null;
  }
  const list = meta.book.chapterList;
  return list.find((c) => c.chapter > meta.chapter && bestK(c.key) == null) || null;
}
function renderFeatured() {
  const recent = quizMeta(store.get("bq", "recent", ""));
  const cards = [];
  let label = "Up next";
  if (recent && progK(recent.key, recent.nq)) { label = "Pick up where you left off"; cards.push(quizCard(recent, "resume")); }
  else if (recent) {
    const nxt = nextUntaken(recent);
    if (nxt) {
      label = nxt.key === recent.key ? "Keep going" : "Up next";
      cards.push(quizCard(nxt, "next", nxt.kind === "chapter" && nxt.book === recent.book && nxt.key !== recent.key ? `Keep going in ${nxt.book.name}` : null));
    }
  }
  if (!cards.length) {
    /* A book with some chapters done (for example John, from John Quizzy) */
    const partial = BOOKS.find((b) => { const s = bookState(b); return b.ch > 1 && s.done > 0 && s.done < b.ch; });
    if (partial) {
      const doneList = partial.chapterList.filter((c) => bestK(c.key) != null);
      const nxt = doneList.length ? nextUntaken(doneList[doneList.length - 1]) : null;
      if (nxt) { label = "Pick up where you left off"; cards.push(quizCard(nxt, "next", `Keep going in ${partial.name}`)); }
    }
    if (!savedQuizKeys().some((k) => bestK(k) != null) || !cards.length) {
      const g1 = BOOK.genesis.chapterMap[1] || quizMeta("book-genesis"), j1 = BOOK.john.chapterMap[1] || quizMeta("book-john");
      if (!cards.length) label = savedQuizKeys().some((k) => bestK(k) != null) ? "Up next" : "Start here";
      if (!cards.length && savedQuizKeys().some((k) => bestK(k) != null)) {
        const any = BOOKS.map((b) => b.chapterList.find((c) => bestK(c.key) == null)).find(Boolean);
        if (any) cards.push(quizCard(any, "next"));
      } else {
        if (g1 && bestK(g1.key) == null && cards.length < 2) cards.push(quizCard(g1, "start", "Start at the beginning"));
        if (j1 && bestK(j1.key) == null && cards.length < 2) cards.push(quizCard(j1, "start", "Start with Jesus"));
      }
    }
  }
  $("#featLabel").textContent = cards.length ? label : "You've done them all";
  $("#featured").innerHTML = cards.join("") || `<p class="lede">You've taken every quiz. Retake any of them to beat your best score.</p>`;
}

const ALIASES = { "song of solomon": "song-of-songs", "canticles": "song-of-songs", "revelations": "revelation", "acts of the apostles": "acts", "psalm": "psalms" };
function normalizeQuery(raw) {
  return raw.trim().toLowerCase().replace(/\s+/g, " ")
    .replace(/^(first|1st|i)\s+(?=[a-z])/, "1 ").replace(/^(second|2nd|ii)\s+(?=[a-z])/, "2 ").replace(/^(third|3rd|iii)\s+(?=[a-z])/, "3 ");
}
function matches(b, q) {
  if (!q) return true;
  const n = b.name.toLowerCase(), squash = (s) => s.replace(/\s+/g, "");
  if (n.includes(q) || squash(n).includes(squash(q))) return true;
  if (q.length >= 3 && b.tag.toLowerCase().includes(q)) return true;
  return Object.keys(ALIASES).some((a) => ALIASES[a] === b.id && (a.includes(q) || q.includes(a)));
}
/* "psalm 23", "1 john 4", "gen 3" → a chapter, if it exists */
function chapterFromQuery(q) {
  const m = /^(.+?)\s*(\d+)$/.exec(q);
  if (!m) return null;
  const name = m[1].trim(), n = +m[2];
  if (!name || /^\d+$/.test(name)) return null;
  const b = BOOKS.find((x) => x.name.toLowerCase() === name || x.id === name.replace(/\s+/g, "-") || ALIASES[name] === x.id)
    || BOOKS.find((x) => x.name.toLowerCase().startsWith(name) || x.name.toLowerCase().replace(/\s+/g, "").startsWith(name.replace(/\s+/g, "")));
  if (!b) return null;
  if (b.ch === 1) return n === 1 && b.quiz ? quizMeta(b.quiz.key) : null;
  return b.chapterMap[n] || null;
}
const hashN = (s) => { let h = 7; for (const c of s) h = (h * 31 + c.charCodeAt(0)) >>> 0; return h; };
function spine(b, st) {
  const z = b.quiz, best = z ? bestOf(z) : null;
  const w = Math.round(32 + Math.min(b.ch, 60) * 0.25);
  const h = Math.min(170, Math.max(118 + (hashN(b.id) % 5) * 9, Math.round(b.name.length * 8.2) + 52));
  const frac = b.ch > 1 && st.state !== "done" ? st.done / b.ch : 0;
  const tip = b.name + " · " + b.tag + (best != null ? ` · book quiz best ${best}/${z.questions.length}` : "") + (b.ch > 1 && st.done ? ` · ${st.done} of ${b.ch} chapters done` : "");
  const label = `${b.name}, ${b.ch} chapter${b.ch > 1 ? "s" : ""}${st.state === "done" ? ", done" : st.state === "started" ? ", started" : ""}`;
  return `<div class="slot"><a class="spine ${st.state}" href="#${b.id}" style="--w:${w}px;--h:${h}px" title="${esc(tip)}" aria-label="${esc(label)}">` +
    `${st.state ? '<i class="bm"></i>' : ""}<span class="nm">${esc(b.name)}</span><span class="mk">${st.state === "done" ? "✓" : b.ch}</span>` +
    `${frac > 0 ? `<i class="pg" style="--f:${frac.toFixed(3)}"></i>` : ""}</a></div>`;
}
function bookRow(b, st) {
  const z = b.quiz, best = z ? bestOf(z) : null;
  const badge = best != null ? `<span class="badge done">Best ${best}/${z.questions.length}</span>`
    : st.done ? `<span class="badge new">${st.done}/${b.ch} ch.</span>`
    : st.state ? `<span class="badge new">Started</span>` : `<span class="badge">${b.ch} ch.</span>`;
  return `<a class="brow" href="#${b.id}"><div><b>${esc(b.name)}</b><span>${esc(b.tag)}</span></div>${badge}</a>`;
}
function renderShelves() {
  const q = normalizeQuery($("#search").value);
  const view = store.get("bq", "view", "shelf") === "list" ? "list" : "shelf";
  document.querySelectorAll("#testTabs button").forEach((b) => {
    const on = !q && b.dataset.t === TAB;
    b.classList.toggle("on", on); b.setAttribute("aria-selected", String(on));
  });
  document.querySelectorAll("#viewSeg button").forEach((b) => b.classList.toggle("on", b.dataset.v === view));
  const jumpTo = q ? chapterFromQuery(q) : null;
  const jt = $("#jumpTo");
  jt.hidden = !jumpTo;
  if (jumpTo) {
    jt.href = "#" + jumpTo.route;
    jt.innerHTML = `<span>Open the <b>${esc(jumpTo.name)}</b> quiz${jumpTo.title ? `: ${esc(jumpTo.title)}` : ""}</span><span aria-hidden="true">→</span>`;
  }
  const states = {};
  BOOKS.forEach((b) => { states[b.id] = bookState(b); });
  let count = 0;
  const bookQ = jumpTo ? jumpTo.name.toLowerCase().replace(/\s*\d+$/, "") : q;
  $("#shelves").innerHTML = GROUPS.filter((g) => q || g.t === TAB).map((g) => {
    const all = BOOKS.filter((b) => b.g === g.id), books = all.filter((b) => matches(b, bookQ));
    if (!books.length) return "";
    count += books.length;
    const done = all.filter((b) => states[b.id].state === "done").length;
    return `<section class="shelf" style="--c:${g.color};--ink:${g.ink}">
      <div class="shelf-head"><div><h2>${esc(g.name)}</h2><p>${esc(g.desc)}</p></div><span class="mono">${done} of ${all.length} done</span></div>
      ${view === "list" ? `<div class="blist">${books.map((b) => bookRow(b, states[b.id])).join("")}</div>` : `<div class="spines">${books.map((b) => spine(b, states[b.id])).join("")}</div>`}
    </section>`;
  }).join("");
  $("#noMatch").hidden = count > 0 || !!jumpTo;
  return count;
}

/* ---------------- QUIZ INTRO ---------------- */
function bannerFor(b, z) {
  const g = b.group, chq = z && z.kind === "chapter";
  const meta = chq
    ? [TESTAMENT[g.t], b.name, `Chapter ${z.chapter} of ${b.ch}`, `${z.verses} verses`]
    : [TESTAMENT[g.t], g.name, `Book ${b.n} of 66`, `${b.ch} chapter${b.ch > 1 ? "s" : ""}`];
  return `<div class="banner" style="--c:${g.color};--ink:${g.ink}">
    <div>${ART[b.icon] || ""}</div>
    <div class="banner-side">
      <div class="banner-meta"><span class="mono">${meta[0]}</span><b>${esc(meta[1])}</b><span>${meta[2]}</span><span>${meta[3]}</span></div>
      <span class="spine done" style="--w:46px;--h:168px"><span class="nm">${esc(b.name)}</span><span class="mk">${chq ? z.chapter : b.n}</span></span>
    </div>
  </div>`;
}
function neighbors(z) {
  if (z.kind === "book") {
    const i = BOOK_QUIZZES.indexOf(z);
    return { prev: BOOK_QUIZZES[i - 1] || null, next: BOOK_QUIZZES[i + 1] || null };
  }
  const list = z.book.chapterList;
  let prev = null, next = null;
  list.forEach((c) => {
    if (c.chapter < z.chapter) prev = c;
    else if (c.chapter > z.chapter && !next) next = c;
  });
  return { prev, next };
}
function loadQuiz(z, mode) {
  CH = z; Q = z.questions; N = Q.length; KEY = z.key;
  ART = Object.assign({}, BASE_ART, z.art && typeof z.art === "object" ? z.art : {});
  store.set("bq", "recent", z.key);
  document.title = z.name + (z.kind === "book" ? " quiz" : "") + " · Bible Quizzy";
  buildStatic();
  if (mode === "results" && lastK(z.key)) return showSavedResults();
  if (mode === "retake") return start();
  if (mode === "resume") return resume();
  setHash(z.route);
  show("intro");
}
function buildStatic() {
  const z = CH, b = z.book, g = b.group, isBook = z.kind === "book";
  $("#topTitle").textContent = "· " + z.name;
  const back = $("#introBack");
  if (isBook) { back.href = "#" + (g.t === "ot" ? "old" : "new"); back.textContent = "← " + TESTAMENT[g.t]; }
  else { back.href = "#" + b.id; back.textContent = "← " + b.name; }
  const hero = $("#heroArt");
  hero.className = "";
  hero.innerHTML = bannerFor(b, z);
  $("#introEyebrow").textContent = isBook
    ? `${TESTAMENT[g.t]} · ${g.name} · ${b.ch} chapter${b.ch > 1 ? "s" : ""}${z.byVerse ? ", " + z.units + " verses" : ""}`
    : `${z.name} · ${z.verses} verses`;
  $("#introTitle").textContent = isBook ? b.name : z.title;
  $("#introSub").textContent = isBook ? z.title : "";
  $("#introSub").hidden = !isBook;
  $("#introLede").textContent = z.overview;
  $("#keyRef").textContent = "Key verse · " + z.keyVerse.ref;
  $("#keyText").textContent = z.keyVerse.text;
  $("#openPrayer").textContent = z.openPrayer;
  $("#glanceLabel").textContent = isBook ? "The book at a glance" : "The chapter at a glance";
  $("#castLabel").textContent = isBook ? "People & places in this book" : "People & places in this chapter";
  $("#resEyebrow").textContent = (isBook ? b.name + " · whole book" : z.name) + " · complete";

  $("#glance").innerHTML = z.sections.map((s) =>
    `<div class="glance-item"><span class="mono">${esc(s.label)}</span><h3>${esc(s.name)}</h3><p>${esc(s.summary)}</p></div>`).join("");
  $("#cast").innerHTML = (z.cast || []).map((p) =>
    `<div class="cast-item"><div class="cast-head"><b>${esc(p.name)}</b><span class="badge">${esc(p.kind)}</span>${p.ref ? `<span class="ref">${esc(p.ref)}</span>` : ""}</div>
      <p>${esc(p.who)}</p>${p.read ? linkTo(p.read, "Read: " + p.read) : ""}</div>`).join("");
  $("#roundChips").innerHTML = z.rounds.map((r, k) => {
    const c = Q.filter((q) => q.round === k + 1).length;
    return `<div class="round-chip"><span class="num">${r.numeral}</span><b>${esc(r.name)}</b><small>${esc(r.tag)} · ${c}</small></div>`;
  }).join("");

  /* Chapter by chapter, on a book's page */
  const chw = $("#chWrap");
  chw.hidden = !(isBook && b.ch > 1 && b.chapterList.length);
  if (!chw.hidden) {
    const list = b.chapterList, done = list.filter((c) => bestK(c.key) != null).length;
    const nextUp = list.find((c) => progK(c.key, c.nq)) || list.find((c) => bestK(c.key) == null);
    $("#chEyebrow").textContent = `${b.name}, chapter by chapter`;
    $("#chHead").textContent = list.length === b.ch ? `${b.ch} more quizzes, one for every chapter` : `${list.length} of ${b.ch} chapter quizzes ready`;
    $("#chText").textContent = done
      ? `${done} of ${b.ch} chapters done. Read a chapter, then take its quiz. Pick up anywhere.`
      : "Want to go slower? Read one chapter in your Bible, then take its quiz. Pick any chapter.";
    const cells = [];
    for (let n = 1; n <= b.ch; n++) {
      const c = b.chapterMap[n];
      if (!c) { cells.push(`<span class="soon" title="Coming soon">${n}</span>`); continue; }
      const d = bestK(c.key) != null;
      cells.push(`<a href="#${c.route}" class="${d ? "done" : c === nextUp ? "next" : ""}" title="${esc(c.name + ": " + c.title)}" aria-label="${esc(c.name + (d ? ", done" : ""))}">${n}</a>`);
    }
    $("#jump").innerHTML = cells.join("");
    const cn = $("#chNext");
    cn.hidden = !nextUp;
    if (nextUp) {
      cn.href = "#" + nextUp.route;
      cn.textContent = (progK(nextUp.key, nextUp.nq) ? "Resume " : done ? "Continue with " : "Start with ") + nextUp.name + ": " + nextUp.title + " →";
    }
  }

  const rib = $("#ribbon"), labels = $("#ribbonLabels");
  rib.innerHTML = ""; labels.innerHTML = "";
  rib.classList.toggle("dense", z.units > 60);
  z.sections.forEach((s, si) => {
    for (let v = s.from; v <= s.to; v++) {
      const t = document.createElement("span");
      t.className = "tick" + (si > 0 && v === s.from ? " gap" : "");
      t.dataset.v = v;
      rib.appendChild(t);
    }
    const l = document.createElement("span");
    l.style.flex = String(s.to - s.from + 1);
    l.textContent = s.short;
    labels.appendChild(l);
  });

  $("#wordsArt").innerHTML = ART.lamp;
  $("#ulArt").innerHTML = ART.pen;
  buildWords();
  buildUnderline();

  $("#reflectPrompt").textContent = z.reflect.prompt;
  $("#reflectRef").textContent = z.reflect.ref;
  const ta = $("#reflect"), key = z.key;
  ta.value = store.get(key, "reflection", "");
  $("#reflectSaved").hidden = !ta.value;
  let rt;
  ta.oninput = () => {
    const ok = store.set(key, "reflection", ta.value);
    store.set(key, "reflectionAt", Date.now());
    $("#reflectSaved").hidden = true;
    clearTimeout(rt);
    rt = setTimeout(() => { $("#reflectSaved").hidden = !ok || !ta.value; if (!ok) toast("Couldn't save on this device", true); }, 600);
  };
  $("#closePrayer").textContent = z.closePrayer;

  const { prev, next } = neighbors(z);
  const nav = [];
  if (prev) nav.push(`<a class="btn ghost sm" href="#${prev.route}">← ${esc(prev.name)}</a>`);
  if (!isBook) nav.push(`<a class="btn ghost sm" href="#${b.id}">All of ${esc(b.name)}</a>`);
  if (next) nav.push(`<a class="btn ghost sm" href="#${next.route}">${esc(next.name)} →</a>`);
  $("#introNav").innerHTML = nav.join("");
  const rnav = [];
  if (prev) rnav.push(`<a class="btn ghost" href="#${prev.route}">← ${esc(prev.name)}</a>`);
  rnav.push(isBook ? `<a class="btn ghost" href="#${g.t === "ot" ? "old" : "new"}">Library</a>` : `<a class="btn ghost" href="#${b.id}">All of ${esc(b.name)}</a>`);
  $("#navRow").innerHTML = rnav.join("");
  const bt = $("#backTop");
  bt.href = isBook ? "#" + (g.t === "ot" ? "old" : "new") : "#" + b.id;
  bt.textContent = isBook ? "Back to the library" : "Back to " + b.name;

  const nu = $("#nextUp");
  if (isBook) {
    nu.href = next ? "#" + next.route : "#library";
    $("#nextLabel").textContent = next ? "Up next · book " + next.book.n + " of 66" : "The end of the Bible";
    $("#nextTitle").textContent = next ? `${next.name}: ${next.title}` : "You made it to Revelation";
    $("#nextText").textContent = next ? next.book.tag + ". " + next.overview.split(". ")[0].replace(/\.?$/, ".") : "That's the whole story, from Genesis to Revelation. Pick any book on the shelf to go again, or take it chapter by chapter.";
  } else {
    const after = next || nextChapterAfter(b, z.chapter);
    if (after) {
      nu.href = "#" + after.route;
      $("#nextLabel").textContent = next ? "Up next" : `You finished ${b.name} · next book`;
      $("#nextTitle").textContent = `${after.name}: ${after.title}`;
      $("#nextText").textContent = next
        ? (z.next && z.next.text && !/^You/.test(z.next.title || "") ? z.next.text : `Keep reading ${b.name}, one chapter at a time.`)
        : `On to ${after.book.name}: ${after.book.tag.toLowerCase()}.`;
    } else {
      nu.href = "#" + b.id;
      $("#nextLabel").textContent = "The end of " + b.name;
      $("#nextTitle").textContent = "You finished " + b.name;
      $("#nextText").textContent = "Go back to any chapter, or take the whole-book quiz and see what stuck.";
    }
  }

  $("#startBtn").textContent = bestOf(z) != null ? "↻ Retake the quiz" : "Start round I";
  $("#startHint").textContent = `${N} questions, about ${Math.max(4, Math.round(N * 0.65))} minutes. Keep your Bible open. Tap an answer, then read why. Keys 1–4 work too.`;
  renderSaved();
}

function miniRing(pct, label) {
  const C = 2 * Math.PI * 28;
  return `<svg class="mini" viewBox="0 0 68 68" aria-hidden="true"><circle class="track" cx="34" cy="34" r="28"/>` +
    `<circle class="val" cx="34" cy="34" r="28" stroke-dasharray="${C.toFixed(2)}" stroke-dashoffset="${(C * (1 - Math.min(1, pct))).toFixed(2)}"/>` +
    `<text x="34" y="${label.length > 4 ? 39 : 40}" text-anchor="middle" style="font-size:${label.length > 4 ? 14 : 17}px">${label}</text></svg>`;
}
function renderSaved() {
  const z = CH, box = $("#savedPanel"), best = bestOf(z), last = lastK(z.key), tries = histK(z.key).length, p = progressOf(z);
  if (p) {
    box.className = "saved resume";
    box.innerHTML = `${miniRing(p.picks.length / N, p.picks.length + "/" + N)}
      <div class="saved-copy"><span class="mono">Saved · in progress</span><b>You stopped at question ${p.picks.length + 1} of ${N}</b>
      <span>${p.score} right so far${best != null ? " · best " + best + "/" + N : ""}</span></div>
      <div class="saved-actions"><button class="btn sm" type="button" data-act="resume">Resume the quiz</button><button class="btn ghost sm" type="button" data-act="retake">Start over</button></div>`;
  } else if (best != null) {
    box.className = "saved";
    const lastLine = last ? `Last time: ${last.s} of ${last.n} on ${fmtDate(last.d)}` : "Saved from an earlier visit";
    box.innerHTML = `${miniRing(best / N, best + "/" + N)}
      <div class="saved-copy"><span class="mono">✓ Your saved result</span><b>Best score: ${best} of ${N}</b>
      <span>${lastLine}${tries > 1 ? " · " + tries + " attempts" : ""}</span></div>
      <div class="saved-actions">${last ? `<button class="btn sm" type="button" data-act="results">See my results</button>` : ""}<button class="btn ${last ? "ghost " : ""}sm" type="button" data-act="retake">↻ Retake the quiz</button></div>`;
  } else { box.hidden = true; box.innerHTML = ""; return; }
  box.hidden = false;
  box.querySelectorAll("[data-act]").forEach((el) => el.addEventListener("click", () => {
    const a = el.dataset.act;
    if (a === "resume") resume(); else if (a === "results") showSavedResults(); else start();
  }));
}

function buildWords() {
  const box = $("#words");
  let opened = 0;
  box.innerHTML = "";
  CH.words.forEach((w) => {
    const b = document.createElement("button");
    b.type = "button"; b.className = "word"; b.setAttribute("aria-expanded", "false");
    b.innerHTML = `<span class="wtop"><span class="term">${esc(w.term)}</span><span class="ref">${esc(w.ref)}</span></span>
      <span class="tap">Tap to reveal</span><span class="meaning" hidden>${esc(w.meaning)}</span>`;
    b.addEventListener("click", () => {
      const m = b.querySelector(".meaning"), open = m.hidden;
      m.hidden = !open; b.querySelector(".tap").hidden = open;
      b.classList.toggle("open", open); b.setAttribute("aria-expanded", String(open));
      opened += open ? 1 : -1; countWords();
    });
    box.appendChild(b);
  });
  function countWords() {
    $("#wordsCount").textContent = opened + " of " + CH.words.length + " revealed";
    $("#wordsAll").textContent = opened === CH.words.length ? "Hide all meanings" : "Show all meanings";
  }
  $("#wordsAll").onclick = () => {
    const showAll = opened !== CH.words.length;
    box.querySelectorAll(".word").forEach((b) => {
      b.querySelector(".meaning").hidden = !showAll; b.querySelector(".tap").hidden = showAll;
      b.classList.toggle("open", showAll); b.setAttribute("aria-expanded", String(showAll));
    });
    opened = showAll ? CH.words.length : 0; countWords();
  };
  countWords();
}

function buildUnderline() {
  const key = KEY, marked = new Set(store.get(key, "underlined", []));
  const list = $("#ulList");
  list.innerHTML = "";
  CH.underline.forEach((u, k) => {
    const c = document.createElement("article");
    c.className = "ul-card" + (marked.has(k) ? " done" : "");
    c.innerHTML = `${refLink(u.ref)}
      <p class="headline"><span>${esc(u.line)}</span></p>
      <div class="apply">
        <div><span class="mono">What it means</span><p>${esc(u.mean)}</p></div>
        <div><span class="mono">Live it out</span><p>${esc(u.live)}</p></div>
      </div>
      <button class="ul-toggle" type="button"></button>`;
    const btn = c.querySelector(".ul-toggle");
    const paint = () => {
      const on = marked.has(k);
      c.classList.toggle("done", on);
      btn.textContent = on ? "✓ Underlined · saved" : "Mark as underlined";
      btn.setAttribute("aria-pressed", String(on));
    };
    btn.addEventListener("click", () => {
      const on = !marked.has(k);
      on ? marked.add(k) : marked.delete(k);
      const ok = store.set(key, "underlined", [...marked].sort((a, b) => a - b));
      paint(); countUl();
      if (!ok) toast("Couldn't save on this device", true);
      else toast(on ? "Underline saved to My Bible" : "Underline removed");
    });
    paint();
    list.appendChild(c);
  });
  function countUl() { $("#ulCount").textContent = marked.size + " of " + CH.underline.length + " underlined"; }
  countUl();
}

/* ---------------- QUIZ FLOW ---------------- */
function lightRibbon(vs) {
  document.querySelectorAll("#ribbon .tick").forEach((t) => {
    const v = +t.dataset.v, on = vs.includes(v);
    t.classList.toggle("on", on);
    t.classList.toggle("seen", !on && seen.has(v));
  });
}
function updateTop() {
  const answered = state.picks.filter((p) => p != null).length;
  $("#topMeta").textContent = answered === 0 ? N + " questions" : `Q ${Math.min(state.i + 1, N)}/${N} · ${state.score} right`;
}
function start() {
  state = { i: 0, score: 0, picks: [] };
  seen.clear();
  store.del(KEY, "progress");
  setHash(CH.route);
  renderRound(Q[0].round);
}
function resume() {
  const p = progressOf(CH);
  if (!p) return start();
  state = { i: p.picks.length, score: 0, picks: p.picks.slice() };
  state.score = state.picks.filter((oi, k) => oi === Q[k].answer).length;
  seen.clear();
  state.picks.forEach((_, k) => Q[k].verses.forEach((v) => seen.add(v)));
  setHash(CH.route);
  if (Q[state.i].round !== Q[state.i - 1].round) renderRound(Q[state.i].round);
  else renderQuestion();
}
function renderRound(r) {
  const R = CH.rounds[r - 1];
  $("#roundArt").innerHTML = ART[R.art] || "";
  $("#roundNum").textContent = R.numeral;
  $("#roundName").textContent = R.name;
  $("#roundDesc").textContent = R.desc;
  $("#roundCount").textContent = R.tag + " · " + Q.filter((q) => q.round === r).length + " questions";
  lightRibbon([]); updateTop(); show("round");
  $("#roundGo").focus({ preventScroll: true });
}
function renderQuestion() {
  const q = Q[state.i], R = CH.rounds[q.round - 1];
  $("#qArt").innerHTML = ART[q.art] || ART[CH.book.icon] || ART[R.art] || "";
  $("#qRound").textContent = "Round " + R.numeral + " · " + R.name;
  $("#qCount").textContent = "Question " + (state.i + 1) + " of " + N;
  $("#qType").textContent = TYPE_LABEL[q.type] || "Question";
  $("#qText").innerHTML = esc(q.q).replace("____", '<span class="blank">?</span>');
  const look = $("#look");
  if (q.look && q.look.length) {
    look.innerHTML = `<span class="mono">Look it up first</span>` + q.look.map((r) => linkTo(r)).join("");
    look.hidden = false;
  } else look.hidden = true;
  const order = q.type === "tf" ? q.options.map((_, k) => k) : shuffle(q.options.map((_, k) => k));
  const box = $("#opts");
  box.innerHTML = "";
  order.forEach((oi, pos) => {
    const b = document.createElement("button");
    b.type = "button"; b.className = "opt"; b.dataset.oi = oi;
    b.innerHTML = `<span class="key">${"ABCD"[pos]}</span><span class="txt">${esc(q.options[oi])}</span>`;
    b.addEventListener("click", () => pick(oi));
    box.appendChild(b);
  });
  $("#fb").hidden = true; $("#nextBtn").hidden = true;
  lightRibbon(q.verses); updateTop(); show("quiz");
}
const GOOD = ["Correct.", "That's it.", "Locked in.", "Right on.", "Yes."];
let saveInfo = null;
function pick(oi) {
  const q = Q[state.i];
  if (state.picks[state.i] != null) return;
  state.picks[state.i] = oi;
  const ok = oi === q.answer;
  if (ok) state.score++;
  q.verses.forEach((v) => seen.add(v));
  document.querySelectorAll("#opts .opt").forEach((b) => {
    b.disabled = true;
    const bi = +b.dataset.oi;
    if (bi === q.answer) b.classList.add("correct");
    else if (bi === oi) b.classList.add("wrong");
    else b.classList.add("dim");
  });
  if (q.type === "fill") $("#qText").innerHTML = esc(q.q).replace("____", `<span class="blank">${esc(q.options[q.answer])}</span>`);
  const fb = $("#fb");
  fb.className = "fb " + (ok ? "good" : "bad");
  $("#fbTitle").textContent = ok ? GOOD[state.i % GOOD.length] : "Not quite. The answer is: " + q.options[q.answer];
  $("#fbWhy").textContent = q.why;
  const fr = $("#fbRef");
  fr.textContent = q.ref + " ↗"; fr.href = bgUrl(q.ref);
  fb.hidden = false;
  const last = state.i === N - 1;
  if (last) saveResult();
  else store.set(KEY, "progress", { picks: state.picks.slice(0, state.i + 1), score: state.score, d: Date.now(), n: N });
  const nextRound = !last && Q[state.i + 1].round !== q.round;
  const nb = $("#nextBtn");
  nb.textContent = last ? "See my results" : nextRound ? "On to round " + CH.rounds[Q[state.i + 1].round - 1].numeral : "Next question";
  nb.hidden = false;
  updateTop();
  requestAnimationFrame(() => {
    fb.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "nearest" });
    nb.focus({ preventScroll: true });
  });
}
function saveResult() {
  const s = state.score, now = Date.now(), prevBest = bestOf(CH);
  let ok = store.set(KEY, "best", Math.max(prevBest == null ? 0 : prevBest, s));
  const h = histK(KEY);
  h.push({ d: now, s, n: N });
  ok = store.set(KEY, "history", h.slice(-50)) && ok;
  ok = store.set(KEY, "last", { d: now, s, n: N, picks: state.picks.slice(0, N) }) && ok;
  store.del(KEY, "progress");
  saveInfo = { prevBest, ok };
}
function next() {
  const prev = Q[state.i];
  state.i++;
  if (state.i >= N) return finish();
  if (Q[state.i].round !== prev.round) renderRound(Q[state.i].round);
  else renderQuestion();
}
function finish() {
  const info = saveInfo || { prevBest: bestOf(CH), ok: true };
  renderResults({ fresh: true, prevBest: info.prevBest });
  setHash(CH.route + "/results");
  if (info.ok) toast("Result saved to My Bible"); else toast("Couldn't save on this device", true);
}
function showSavedResults() {
  const last = lastK(CH.key);
  if (!last) return show("intro");
  state = { i: N, score: last.s, picks: Array.isArray(last.picks) ? last.picks.slice() : [] };
  seen.clear();
  renderResults({ fresh: false });
  setHash(CH.route + "/results");
}
function scoreMsg(pct, z) {
  const where = z.kind === "book" ? z.book.name : z.name;
  return pct >= 0.94 ? ["Locked in.", `You know ${where} well. Now pick one verse from it and live it out tomorrow.`] :
         pct >= 0.7  ? ["Strong work.", "You've got the main ideas. Look over what you missed below, then reread those parts."] :
         pct >= 0.45 ? ["Good start.", "Reread the parts you missed, then retake the quiz. Your best score is kept."] :
                       ["Keep going.", `Read ${where} slowly one more time and retake the quiz. That's how it sinks in.`];
}
function renderResults(opts) {
  const s = state.score, C = 2 * Math.PI * 54, pct = s / N;
  const ring = $("#ringVal");
  ring.style.strokeDasharray = C.toFixed(2);
  ring.style.strokeDashoffset = C.toFixed(2);
  $("#scoreNum").textContent = s;
  $("#scoreOf").textContent = "of " + N;
  const [title, msg] = scoreMsg(pct, CH);
  $("#scoreTitle").textContent = title;
  $("#scoreMsg").textContent = msg;
  const best = bestOf(CH) != null ? bestOf(CH) : s, last = lastK(CH.key);
  $("#bestLine").textContent = opts.fresh
    ? (opts.prevBest == null ? "First attempt · saved" : s > opts.prevBest ? "New best · was " + opts.prevBest + "/" + N : "Best so far · " + best + "/" + N)
    : "Saved result" + (last ? " · " + fmtDate(last.d) : "") + " · best " + best + "/" + N;

  const h = histK(CH.key).slice(-8);
  $("#historyBox").hidden = !h.length;
  $("#hbars").innerHTML = h.map((a, k) =>
    `<div class="hbar${k === h.length - 1 ? " now" : ""}" style="--p:${(a.s / a.n).toFixed(3)}" title="${a.s} of ${a.n} · ${esc(fmtDate(a.d))}"><b>${a.s}</b><i></i><small>${esc(fmtDate(a.d))}</small></div>`).join("");

  const missed = Q.map((q, k) => ({ q, k })).filter(({ q, k }) => state.picks[k] !== q.answer);
  $("#missed").innerHTML = missed.length
    ? missed.map(({ q }) => `<li><span class="q">${esc(q.q.replace("____", "___"))}</span><span class="a">${esc(q.options[q.answer])}</span>${refLink(q.ref)}</li>`).join("")
    : `<li><span class="a">You didn't miss a single one.</span><span class="q">Pick one verse below and underline it in your Bible.</span></li>`;

  buildWords();
  for (let v = 1; v <= CH.units; v++) seen.add(v);
  lightRibbon([]);
  $("#topMeta").textContent = "Done · " + s + "/" + N;
  show("results");
  requestAnimationFrame(() => requestAnimationFrame(() => { ring.style.strokeDashoffset = (C * (1 - pct)).toFixed(2); }));
  if (opts.fresh && pct >= 0.8) confetti();
}
function confetti() {
  if (reduceMotion) return;
  const box = $("#confetti"), colors = ["var(--lamp)", "var(--sage)", "var(--art-star)", "var(--rose)", "var(--art-gold-deep)"];
  box.innerHTML = "";
  for (let k = 0; k < 44; k++) {
    const i = document.createElement("i");
    i.style.left = (Math.random() * 100).toFixed(1) + "%";
    i.style.background = colors[k % colors.length];
    i.style.animationDelay = (Math.random() * 0.7).toFixed(2) + "s";
    i.style.animationDuration = (1.8 + Math.random() * 1.6).toFixed(2) + "s";
    i.style.setProperty("--x", (Math.random() * 120 - 60).toFixed(0) + "px");
    i.style.setProperty("--r", (Math.random() * 900 - 450).toFixed(0) + "deg");
    box.appendChild(i);
  }
  setTimeout(() => { box.innerHTML = ""; }, 4200);
}

/* ---------------- MY BIBLE ---------------- */
let MYTAB = "results", paneToken = 0;
function renderMyBible(tab) {
  CH = null; KEY = "";
  if (["results", "underlined", "journal"].includes(tab)) MYTAB = tab;
  document.title = "My Bible · Bible Quizzy";
  $("#topTitle").textContent = "· My Bible";
  $("#myStats").innerHTML = statTiles(allStats());
  renderPane();
  show("mybible");
}
const emptyBox = (title, text) =>
  `<div class="empty"><b style="color:var(--fg); font-family:var(--f-display); font-size:1.15rem">${title}</b><p>${text}</p><a class="btn sm" href="#library">Open the library</a></div>`;
async function renderPane() {
  const token = ++paneToken;
  const keys = savedQuizKeys().sort((a, b) => quizOrder(quizMeta(a)) - quizOrder(quizMeta(b)));
  const results = keys.filter((k) => bestK(k) != null || progK(k, quizMeta(k).nq));
  const ulKeys = keys.filter((k) => marksK(k).length);
  const jnKeys = keys.filter((k) => { const t = store.get(k, "reflection", ""); return typeof t === "string" && t.trim(); });
  const counts = { results: results.length, underlined: ulKeys.reduce((n, k) => n + marksK(k).length, 0), journal: jnKeys.length };
  document.querySelectorAll("#myTabs button").forEach((b) => {
    const on = b.dataset.tab === MYTAB;
    b.classList.toggle("on", on); b.setAttribute("aria-selected", String(on));
    b.innerHTML = b.textContent.replace(/\d+$/, "").trim() + `<small>${counts[b.dataset.tab]}</small>`;
  });
  const pane = $("#myPane");
  if (MYTAB === "results") {
    const rows = results.map((k) => { const m = quizMeta(k), h = histK(k), p = progK(k, m.nq); return { m, h, p, at: Math.max(h.length ? h[h.length - 1].d : 0, p ? p.d || 0 : 0) }; })
      .sort((a, b) => b.at - a.at);
    pane.innerHTML = rows.length ? rows.map(({ m, h, p, at }) => {
      const best = bestK(m.key), last = lastK(m.key), n = (last && last.n) || m.nq;
      const sub = [m.kind === "book" ? "Whole book" : m.title,
        p ? "in progress · Q" + (p.picks.length + 1) + " of " + m.nq : null,
        h.length ? h.length + (h.length > 1 ? " attempts" : " attempt") : null,
        at ? fmtDate(at) : null].filter(Boolean).join(" · ");
      const acts = [p ? `<a class="linkbtn" href="#${m.route}/resume">▸ Resume</a>` : "",
        last ? `<a class="linkbtn" href="#${m.route}/results">See results</a>` : "",
        `<a class="linkbtn" href="#${m.route}/retake">↻ Retake</a>`].join("");
      return `<article class="rec" style="--c:${m.book.group.color}">
        <div class="rec-main"><a class="rec-title" href="#${m.route}">${esc(m.name)}</a><span class="mono">${esc(sub)}</span></div>
        <div class="rec-score">${best != null ? `<b>${best}<span style="font-size:.85rem;color:var(--muted)">/${n}</span></b><small>Best</small>` : `<small>Not finished</small>`}</div>
        <div class="rec-actions">${acts}</div>
      </article>`;
    }).join("") : emptyBox("No results yet", "Finish any quiz and your score is saved here, with every attempt.");
    return;
  }
  const wanted = MYTAB === "underlined" ? ulKeys : jnKeys;
  if (!wanted.length) {
    pane.innerHTML = MYTAB === "underlined"
      ? emptyBox("Nothing underlined yet", "After a quiz, tap “Mark as underlined” on the verses you mark in your Bible. They all collect here.")
      : emptyBox("No notes yet", "Every quiz ends with a question to sit with. What you write there is saved here.");
    return;
  }
  if (wanted.some((k) => !QUIZ[k])) pane.innerHTML = `<p class="center">Loading your saved ${MYTAB === "underlined" ? "underlines" : "notes"}…</p>`;
  const loaded = await Promise.all(wanted.map((k) => loadByKey(k).catch(() => null)));
  if (token !== paneToken) return;
  if (MYTAB === "underlined") {
    const groups = [];
    loaded.forEach((z) => {
      if (!z) return;
      const items = marksK(z.key).map((k) => z.underline[k] ? { z, k, u: z.underline[k] } : null).filter(Boolean);
      if (!items.length) return;
      const last = groups[groups.length - 1];
      if (last && last.b === z.book) last.items.push(...items); else groups.push({ b: z.book, items });
    });
    pane.innerHTML = groups.map(({ b, items }) => `<div class="ul-group" style="--c:${b.group.color}">
      <h3>${esc(b.name)} <span class="mono">${items.length}</span></h3>
      ${items.map(({ z, k, u }) => `<div class="ul-item">
        <div class="row">${refLink(u.ref)}<span class="mono">From the ${esc(z.name)} quiz</span></div>
        <p class="headline"><span>${esc(u.line)}</span></p>
        <p>${esc(u.mean)}</p>
        <p><b style="color:var(--fg); font-weight:600">Live it out:</b> ${esc(u.live)}</p>
        <button class="linkbtn" type="button" data-unmark="${z.key}" data-k="${k}" style="align-self:flex-start">Remove underline</button>
      </div>`).join("")}</div>`).join("") || emptyBox("Nothing underlined yet", "After a quiz, tap “Mark as underlined” on the verses you mark in your Bible.");
  } else {
    const items = loaded.filter(Boolean).map((z) => ({ z, text: store.get(z.key, "reflection", ""), at: store.get(z.key, "reflectionAt", 0) }))
      .sort((a, b) => b.at - a.at);
    pane.innerHTML = items.map(({ z, text, at }) => `<article class="journal-item">
      <div class="row" style="display:flex; justify-content:space-between; gap:10px; flex-wrap:wrap"><a class="rec-title" href="#${z.route}${lastK(z.key) ? "/results" : ""}">${esc(z.name)}</a><span class="mono">${at ? esc(fmtDate(at)) : ""}</span></div>
      <p class="prompt">${esc(z.reflect.prompt)}</p>
      <p class="entry">${esc(text)}</p>
    </article>`).join("");
  }
}

const OUR_KEY = /^(bq|book-[a-z0-9-]+|[a-z0-9-]+-\d+):/;
function exportBackup() {
  const data = {};
  try { for (let i = 0; i < localStorage.length; i++) { const k = localStorage.key(i); if (OUR_KEY.test(k)) data[k] = localStorage.getItem(k); } } catch (e) {}
  const blob = new Blob([JSON.stringify({ app: "bible-quizzy", version: 1, saved: new Date().toISOString(), data }, null, 1)], { type: "application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "bible-quizzy-backup-" + new Date().toISOString().slice(0, 10) + ".json";
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 3000);
  toast("Backup downloaded");
}
function importBackup(file) {
  const r = new FileReader();
  r.onload = () => {
    try {
      const o = JSON.parse(r.result);
      if (!o || o.app !== "bible-quizzy" || !o.data || typeof o.data !== "object") throw new Error("not a backup");
      let n = 0;
      Object.keys(o.data).forEach((k) => { if (OUR_KEY.test(k) && typeof o.data[k] === "string") { localStorage.setItem(k, o.data[k]); n++; } });
      toast("Backup restored · " + n + " saved items");
      renderMyBible();
    } catch (e) { toast("That file isn't a Bible Quizzy backup", true); }
  };
  r.readAsText(file);
}

/* ---------------- events ---------------- */
$("#startBtn").addEventListener("click", start);
$("#roundGo").addEventListener("click", renderQuestion);
$("#nextBtn").addEventListener("click", next);
$("#retake").addEventListener("click", start);
$("#retakeTop").addEventListener("click", start);
document.querySelector(".brand").addEventListener("click", (e) => {
  e.preventDefault();
  homeY = 0;
  if (location.hash === "#library") renderHome(); else location.hash = "library";
});
$("#testTabs").addEventListener("click", (e) => {
  const b = e.target.closest("button[data-t]");
  if (!b) return;
  TAB = b.dataset.t; store.set("bq", "tab", TAB);
  $("#search").value = "";
  renderShelves();
});
$("#viewSeg").addEventListener("click", (e) => {
  const b = e.target.closest("button[data-v]");
  if (!b) return;
  store.set("bq", "view", b.dataset.v);
  renderShelves();
});
$("#search").addEventListener("input", renderShelves);
$("#search").addEventListener("keydown", (e) => {
  if (e.key !== "Enter") return;
  const jt = $("#jumpTo");
  const first = !jt.hidden ? jt : document.querySelector("#shelves a.spine, #shelves a.brow");
  if (first) location.hash = first.getAttribute("href").slice(1);
});
$("#myTabs").addEventListener("click", (e) => {
  const b = e.target.closest("button[data-tab]");
  if (!b) return;
  MYTAB = b.dataset.tab;
  renderPane();
});
$("#myPane").addEventListener("click", (e) => {
  const b = e.target.closest("button[data-unmark]");
  if (!b) return;
  const key = b.dataset.unmark, k = +b.dataset.k;
  store.set(key, "underlined", store.get(key, "underlined", []).filter((x) => x !== k));
  toast("Underline removed");
  $("#myStats").innerHTML = statTiles(allStats());
  renderPane();
});
$("#exportBtn").addEventListener("click", exportBackup);
$("#importBtn").addEventListener("click", () => $("#importFile").click());
$("#importFile").addEventListener("change", (e) => {
  const f = e.target.files && e.target.files[0];
  if (f) importBackup(f);
  e.target.value = "";
});
document.addEventListener("keydown", (e) => {
  if (e.target && (e.target.tagName === "TEXTAREA" || e.target.tagName === "INPUT")) return;
  if ($("#quiz").hidden) return;
  const k = e.key.toLowerCase();
  const idx = "1234".indexOf(k) >= 0 ? "1234".indexOf(k) : "abcd".indexOf(k);
  if (idx >= 0 && state.picks[state.i] == null) {
    const b = document.querySelectorAll("#opts .opt")[idx];
    if (b) { e.preventDefault(); b.click(); }
  }
});

/* ---------------- ROUTING ----------------
   #library · #old · #new · #my-bible[/underlined|/journal]
   #genesis (a book's page and quiz) · #genesis-3 (a chapter) · add /results, /retake or /resume */
let routeToken = 0;
function route() {
  const token = ++routeToken;
  setLoading(false);
  const h = decodeURIComponent(location.hash.replace(/^#\/?/, "")).toLowerCase().trim();
  const [head, mode] = h.split("/");
  if (!head || head === "library" || head === "chapters") return renderHome();
  if (head === "old" || head === "ot") return renderHome("ot");
  if (head === "new" || head === "nt") return renderHome("nt");
  if (head === "my-bible") return renderMyBible(mode);
  if (BOOK[head]) return BOOK[head].quiz ? loadQuiz(BOOK[head].quiz, mode) : renderHome(BOOK[head].t);
  const m = /^(.+)-(\d+)$/.exec(head);
  const b = m && BOOK[m[1]], n = m ? +m[2] : 0;
  if (b && n >= 1 && n <= b.ch) {
    if (b.ch === 1) { setHash(b.id); return b.quiz ? loadQuiz(b.quiz, mode) : renderHome(b.t); }
    const notReady = () => {
      toast(`The ${chapterName(b, n)} quiz isn't ready yet`, true);
      setHash(b.id);
      if (b.quiz) loadQuiz(b.quiz); else renderHome(b.t);
    };
    if (!b.chapterMap[n] && !QUIZ[head]) return notReady();
    if (!QUIZ[head]) setLoading(true);
    loadChapter(b.id, n).then((z) => {
      if (token !== routeToken) return;
      setLoading(false);
      loadQuiz(z, mode);
    }).catch(() => {
      if (token !== routeToken) return;
      setLoading(false);
      notReady();
    });
    return;
  }
  renderHome();
}
window.addEventListener("hashchange", route);
route();
