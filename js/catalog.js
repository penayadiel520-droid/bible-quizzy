/* The 66 books in Protestant order. `ch` = chapters; one-chapter books also carry `vv` (NIV verse count),
   because their quiz ribbon counts verses instead of chapters. `icon` is a key in BASE_ART.
   `nameEs`/`tagEs`/`descEs` are the Spanish UI labels — navigation only; quiz content (overview,
   questions, cast, words, underline verses) is not translated yet and stays in English either way. */
window.BQ_GROUPS = [
  { id: "law",      t: "ot", name: "The Law",            nameEs: "La Ley",                  color: "#7d3434", ink: "#f6ead6", desc: "Beginnings, the escape from Egypt, and the law God gave on the way to the promised land.", descEs: "Los orígenes, la salida de Egipto y la ley que Dios dio en el camino a la tierra prometida." },
  { id: "history",  t: "ot", name: "History",            nameEs: "Historia",                color: "#2f5e4e", ink: "#f6ead6", desc: "Israel's story in the land: judges, kings, exile, and coming home again.", descEs: "La historia de Israel en la tierra: jueces, reyes, el exilio y el regreso a casa." },
  { id: "wisdom",   t: "ot", name: "Poetry & Wisdom",    nameEs: "Poesía y Sabiduría",       color: "#5b3d72", ink: "#f6ead6", desc: "Songs, prayers, honest questions and wise sayings for everyday life.", descEs: "Cantos, oraciones, preguntas sinceras y dichos sabios para la vida diaria." },
  { id: "major",    t: "ot", name: "Major Prophets",     nameEs: "Profetas Mayores",        color: "#8a4f22", ink: "#f6ead6", desc: "Longer books from prophets who called God's people back and pointed to a coming King.", descEs: "Libros más extensos de profetas que llamaron al pueblo de Dios a volver y señalaron a un Rey que vendría." },
  { id: "minor",    t: "ot", name: "Minor Prophets",     nameEs: "Profetas Menores",        color: "#46557a", ink: "#f6ead6", desc: "Twelve shorter prophets. Minor means short, not less important.", descEs: "Doce profetas más breves. “Menores” significa más cortos, no menos importantes." },
  { id: "gospels",  t: "nt", name: "The Gospels",        nameEs: "Los Evangelios",          color: "#b3832c", ink: "#1b1407", desc: "Four eyewitness portraits of Jesus: His life, death and resurrection.", descEs: "Cuatro retratos de testigos oculares de Jesús: su vida, muerte y resurrección." },
  { id: "acts",     t: "nt", name: "Church History",     nameEs: "Historia de la Iglesia",  color: "#2a6670", ink: "#f6ead6", desc: "How the good news spread from Jerusalem all the way to Rome.", descEs: "Cómo las buenas noticias se extendieron desde Jerusalén hasta Roma." },
  { id: "paul",     t: "nt", name: "Paul's Letters",     nameEs: "Las Cartas de Pablo",     color: "#3d4f9a", ink: "#f6ead6", desc: "Letters Paul wrote to young churches and close friends.", descEs: "Cartas que Pablo escribió a iglesias jóvenes y amigos cercanos." },
  { id: "general",  t: "nt", name: "General Letters",    nameEs: "Cartas Generales",        color: "#6e4a5e", ink: "#f6ead6", desc: "Letters from other church leaders to believers everywhere.", descEs: "Cartas de otros líderes de la iglesia a creyentes de todas partes." },
  { id: "prophecy", t: "nt", name: "Prophecy",           nameEs: "Profecía",                color: "#8e2f4f", ink: "#f6ead6", desc: "How the story ends: Jesus wins and makes everything new.", descEs: "Cómo termina la historia: Jesús vence y hace nuevas todas las cosas." }
];

window.BQ_BOOKS = [
  { id: "genesis",         name: "Genesis",          nameEs: "Génesis",                g: "law",      ch: 50,  icon: "sunrise",    tag: "Where everything begins", tagEs: "Donde todo comienza" },
  { id: "exodus",          name: "Exodus",           nameEs: "Éxodo",                  g: "law",      ch: 40,  icon: "tablets",    tag: "God sets His people free", tagEs: "Dios libera a su pueblo" },
  { id: "leviticus",       name: "Leviticus",        nameEs: "Levítico",               g: "law",      ch: 27,  icon: "tent",       tag: "How to live near a holy God", tagEs: "Cómo vivir cerca de un Dios santo" },
  { id: "numbers",         name: "Numbers",          nameEs: "Números",                g: "law",      ch: 36,  icon: "footprints", tag: "Forty years in the wilderness", tagEs: "Cuarenta años en el desierto" },
  { id: "deuteronomy",     name: "Deuteronomy",      nameEs: "Deuteronomio",           g: "law",      ch: 34,  icon: "scroll",     tag: "Remember, love, obey", tagEs: "Recuerda, ama, obedece" },

  { id: "joshua",          name: "Joshua",           nameEs: "Josué",                  g: "history",  ch: 24,  icon: "wall",       tag: "Into the promised land", tagEs: "Hacia la tierra prometida" },
  { id: "judges",          name: "Judges",           nameEs: "Jueces",                 g: "history",  ch: 21,  icon: "jar",        tag: "A cycle of falling and rescue", tagEs: "Un ciclo de caída y rescate" },
  { id: "ruth",            name: "Ruth",             nameEs: "Rut",                    g: "history",  ch: 4,   icon: "sheaf",      tag: "Loyal love in hard times", tagEs: "Amor fiel en tiempos difíciles" },
  { id: "1-samuel",        name: "1 Samuel",         nameEs: "1 Samuel",               g: "history",  ch: 31,  icon: "sling",      tag: "Israel gets a king", tagEs: "Israel tiene un rey" },
  { id: "2-samuel",        name: "2 Samuel",         nameEs: "2 Samuel",               g: "history",  ch: 24,  icon: "crown",      tag: "King David, wins and failures", tagEs: "El rey David: victorias y fracasos" },
  { id: "1-kings",         name: "1 Kings",          nameEs: "1 Reyes",                g: "history",  ch: 22,  icon: "temple",     tag: "A temple, then a split kingdom", tagEs: "Un templo, y luego un reino dividido" },
  { id: "2-kings",         name: "2 Kings",          nameEs: "2 Reyes",                g: "history",  ch: 25,  icon: "flame",      tag: "Prophets, kings and exile", tagEs: "Profetas, reyes y el exilio" },
  { id: "1-chronicles",    name: "1 Chronicles",     nameEs: "1 Crónicas",             g: "history",  ch: 29,  icon: "harp",       tag: "David's family and worship", tagEs: "La familia de David y la adoración" },
  { id: "2-chronicles",    name: "2 Chronicles",     nameEs: "2 Crónicas",             g: "history",  ch: 36,  icon: "temple",     tag: "Judah's kings and the temple", tagEs: "Los reyes de Judá y el templo" },
  { id: "ezra",            name: "Ezra",             nameEs: "Esdras",                 g: "history",  ch: 10,  icon: "scroll",     tag: "Coming home to worship", tagEs: "El regreso a casa para adorar" },
  { id: "nehemiah",        name: "Nehemiah",         nameEs: "Nehemías",               g: "history",  ch: 13,  icon: "wall",       tag: "Rebuilding the walls", tagEs: "La reconstrucción de los muros" },
  { id: "esther",          name: "Esther",           nameEs: "Ester",                  g: "history",  ch: 10,  icon: "crown",      tag: "For such a time as this", tagEs: "Para un momento como este" },

  { id: "job",             name: "Job",              nameEs: "Job",                    g: "wisdom",   ch: 42,  icon: "voice",      tag: "Faith when life falls apart", tagEs: "Fe cuando la vida se desmorona" },
  { id: "psalms",          name: "Psalms",           nameEs: "Salmos",                 g: "wisdom",   ch: 150, icon: "harp",       tag: "Songs for every season", tagEs: "Cantos para cada temporada" },
  { id: "proverbs",        name: "Proverbs",         nameEs: "Proverbios",             g: "wisdom",   ch: 31,  icon: "lamp",       tag: "Wisdom for everyday life", tagEs: "Sabiduría para la vida diaria" },
  { id: "ecclesiastes",    name: "Ecclesiastes",     nameEs: "Eclesiastés",            g: "wisdom",   ch: 12,  icon: "scales",     tag: "What really matters", tagEs: "Lo que realmente importa" },
  { id: "song-of-songs",   name: "Song of Songs",    nameEs: "Cantar de los Cantares",  g: "wisdom",   ch: 8,   icon: "heart",      tag: "A love song", tagEs: "Un canto de amor" },

  { id: "isaiah",          name: "Isaiah",           nameEs: "Isaías",                 g: "major",    ch: 66,  icon: "throne",     tag: "Holy God, coming Savior", tagEs: "Dios santo, Salvador que viene" },
  { id: "jeremiah",        name: "Jeremiah",         nameEs: "Jeremías",               g: "major",    ch: 52,  icon: "jar",        tag: "The weeping prophet", tagEs: "El profeta que llora" },
  { id: "lamentations",    name: "Lamentations",     nameEs: "Lamentaciones",          g: "major",    ch: 5,   icon: "sunrise",    tag: "Grief, and mercy every morning", tagEs: "Dolor, y misericordia cada mañana" },
  { id: "ezekiel",         name: "Ezekiel",          nameEs: "Ezequiel",               g: "major",    ch: 48,  icon: "eye",        tag: "Dry bones live again", tagEs: "Los huesos secos vuelven a vivir" },
  { id: "daniel",          name: "Daniel",           nameEs: "Daniel",                 g: "major",    ch: 12,  icon: "lion",       tag: "Faithful in a foreign land", tagEs: "Fiel en tierra extraña" },

  { id: "hosea",           name: "Hosea",            nameEs: "Oseas",                  g: "minor",    ch: 14,  icon: "heart",      tag: "Love that won't let go", tagEs: "Un amor que no se rinde" },
  { id: "joel",            name: "Joel",             nameEs: "Joel",                   g: "minor",    ch: 3,   icon: "dove",       tag: "Locusts, and the Spirit poured out", tagEs: "Langostas, y el Espíritu derramado" },
  { id: "amos",            name: "Amos",             nameEs: "Amós",                   g: "minor",    ch: 9,   icon: "scales",     tag: "Let justice roll", tagEs: "Que corra la justicia" },
  { id: "obadiah",         name: "Obadiah",          nameEs: "Abdías",                 g: "minor",    ch: 1,   vv: 21, icon: "mirror", tag: "Pride comes before a fall", tagEs: "El orgullo antes de la caída" },
  { id: "jonah",           name: "Jonah",            nameEs: "Jonás",                  g: "minor",    ch: 4,   icon: "fish",       tag: "Running from God's mercy", tagEs: "Huyendo de la misericordia de Dios" },
  { id: "micah",           name: "Micah",            nameEs: "Miqueas",                g: "minor",    ch: 7,   icon: "footprints", tag: "Walk humbly with your God", tagEs: "Camina humildemente con tu Dios" },
  { id: "nahum",           name: "Nahum",            nameEs: "Nahúm",                  g: "minor",    ch: 3,   icon: "flame",      tag: "Nineveh's fall", tagEs: "La caída de Nínive" },
  { id: "habakkuk",        name: "Habakkuk",         nameEs: "Habacuc",                g: "minor",    ch: 3,   icon: "wall",       tag: "Trusting God while you wait", tagEs: "Confiar en Dios mientras esperas" },
  { id: "zephaniah",       name: "Zephaniah",        nameEs: "Sofonías",               g: "minor",    ch: 3,   icon: "harp",       tag: "God sings over His people", tagEs: "Dios canta sobre su pueblo" },
  { id: "haggai",          name: "Haggai",           nameEs: "Hageo",                  g: "minor",    ch: 2,   icon: "temple",     tag: "Put God's house first", tagEs: "Pon la casa de Dios primero" },
  { id: "zechariah",       name: "Zechariah",        nameEs: "Zacarías",               g: "minor",    ch: 14,  icon: "crown",      tag: "Your King is coming", tagEs: "Tu Rey viene" },
  { id: "malachi",         name: "Malachi",          nameEs: "Malaquías",              g: "minor",    ch: 4,   icon: "sunrise",    tag: "Return to me", tagEs: "Vuelvan a mí" },

  { id: "matthew",         name: "Matthew",          nameEs: "Mateo",                  g: "gospels",  ch: 28,  icon: "star",       tag: "Jesus, the promised King", tagEs: "Jesús, el Rey prometido" },
  { id: "mark",            name: "Mark",             nameEs: "Marcos",                 g: "gospels",  ch: 16,  icon: "footprints", tag: "Jesus, the Servant on the move", tagEs: "Jesús, el Siervo en acción" },
  { id: "luke",            name: "Luke",             nameEs: "Lucas",                  g: "gospels",  ch: 24,  icon: "coins",      tag: "Jesus came for the lost", tagEs: "Jesús vino por los perdidos" },
  { id: "john",            name: "John",             nameEs: "Juan",                   g: "gospels",  ch: 21,  icon: "lamp",       tag: "Believe and have life", tagEs: "Cree y tendrás vida" },

  { id: "acts",            name: "Acts",             nameEs: "Hechos",                 g: "acts",     ch: 28,  icon: "ship",       tag: "The church on the move", tagEs: "La iglesia en marcha" },

  { id: "romans",          name: "Romans",           nameEs: "Romanos",                g: "paul",     ch: 16,  icon: "scales",     tag: "Made right with God by faith", tagEs: "Justificados ante Dios por la fe" },
  { id: "1-corinthians",   name: "1 Corinthians",    nameEs: "1 Corintios",            g: "paul",     ch: 16,  icon: "heart",      tag: "Love holds a church together", tagEs: "El amor mantiene unida a una iglesia" },
  { id: "2-corinthians",   name: "2 Corinthians",    nameEs: "2 Corintios",            g: "paul",     ch: 13,  icon: "jar",        tag: "Strength in weakness", tagEs: "Fortaleza en la debilidad" },
  { id: "galatians",       name: "Galatians",        nameEs: "Gálatas",                g: "paul",     ch: 6,   icon: "dove",       tag: "Free in Christ", tagEs: "Libres en Cristo" },
  { id: "ephesians",       name: "Ephesians",        nameEs: "Efesios",                g: "paul",     ch: 6,   icon: "temple",     tag: "One new family in Christ", tagEs: "Una nueva familia en Cristo" },
  { id: "philippians",     name: "Philippians",      nameEs: "Filipenses",             g: "paul",     ch: 4,   icon: "footprints", tag: "Joy that doesn't quit", tagEs: "Un gozo que no se rinde" },
  { id: "colossians",      name: "Colossians",       nameEs: "Colosenses",             g: "paul",     ch: 4,   icon: "crown",      tag: "Jesus over everything", tagEs: "Jesús por encima de todo" },
  { id: "1-thessalonians", name: "1 Thessalonians",  nameEs: "1 Tesalonicenses",       g: "paul",     ch: 5,   icon: "sunrise",    tag: "Jesus is coming back", tagEs: "Jesús va a volver" },
  { id: "2-thessalonians", name: "2 Thessalonians",  nameEs: "2 Tesalonicenses",       g: "paul",     ch: 3,   icon: "lamp",       tag: "Stand firm, keep working", tagEs: "Permanece firme, sigue trabajando" },
  { id: "1-timothy",       name: "1 Timothy",        nameEs: "1 Timoteo",              g: "paul",     ch: 6,   icon: "letter",     tag: "How to lead a church", tagEs: "Cómo liderar una iglesia" },
  { id: "2-timothy",       name: "2 Timothy",        nameEs: "2 Timoteo",              g: "paul",     ch: 4,   icon: "scroll",     tag: "Paul's last letter", tagEs: "La última carta de Pablo" },
  { id: "titus",           name: "Titus",            nameEs: "Tito",                   g: "paul",     ch: 3,   icon: "letter",     tag: "Grace that changes how you live", tagEs: "Una gracia que cambia tu forma de vivir" },
  { id: "philemon",        name: "Philemon",         nameEs: "Filemón",                g: "paul",     ch: 1,   vv: 25, icon: "heart", tag: "Welcome him like a brother", tagEs: "Recíbelo como a un hermano" },

  { id: "hebrews",         name: "Hebrews",          nameEs: "Hebreos",                g: "general",  ch: 13,  icon: "cross",      tag: "Jesus is better", tagEs: "Jesús es mejor" },
  { id: "james",           name: "James",            nameEs: "Santiago",               g: "general",  ch: 5,   icon: "mirror",     tag: "Faith that works", tagEs: "Una fe que actúa" },
  { id: "1-peter",         name: "1 Peter",          nameEs: "1 Pedro",                g: "general",  ch: 5,   icon: "flame",      tag: "Hope when you suffer", tagEs: "Esperanza en el sufrimiento" },
  { id: "2-peter",         name: "2 Peter",          nameEs: "2 Pedro",                g: "general",  ch: 3,   icon: "lamp",       tag: "Keep growing, don't be fooled", tagEs: "Sigue creciendo, no te dejes engañar" },
  { id: "1-john",          name: "1 John",           nameEs: "1 Juan",                 g: "general",  ch: 5,   icon: "heart",      tag: "God is love", tagEs: "Dios es amor" },
  { id: "2-john",          name: "2 John",           nameEs: "2 Juan",                 g: "general",  ch: 1,   vv: 13, icon: "letter", tag: "Walk in truth and love", tagEs: "Camina en verdad y amor" },
  { id: "3-john",          name: "3 John",           nameEs: "3 Juan",                 g: "general",  ch: 1,   vv: 15, icon: "letter", tag: "Welcome those who serve", tagEs: "Recibe a los que sirven" },
  { id: "jude",            name: "Jude",             nameEs: "Judas",                  g: "general",  ch: 1,   vv: 25, icon: "footprints", tag: "Keep yourself in God's love", tagEs: "Mantente en el amor de Dios" },

  { id: "revelation",      name: "Revelation",       nameEs: "Apocalipsis",            g: "prophecy", ch: 22,  icon: "throne",     tag: "Jesus wins", tagEs: "Jesús vence" }
];

/* Book quizzes register themselves here (see js/books-*.js). Chapter quizzes live in data/<book>/<chapter>.js
   and register with BQ.chapter when the app loads one. */
window.BQ_QUIZZES = [];
window.BQ_CHAPTER_DATA = {};
window.BQ = {
  book: (q) => window.BQ_QUIZZES.push(q),
  chapter: (d) => { window.BQ_CHAPTER_DATA[d.book + "-" + d.ch] = d; }
};
