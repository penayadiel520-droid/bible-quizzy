/* The 66 books in Protestant order. `ch` = chapters; one-chapter books also carry `vv` (NIV verse count),
   because their quiz ribbon counts verses instead of chapters. `icon` is a key in BASE_ART. */
window.BQ_GROUPS = [
  { id: "law",      t: "ot", name: "The Law",            color: "#7d3434", ink: "#f6ead6", desc: "Beginnings, the escape from Egypt, and the law God gave on the way to the promised land." },
  { id: "history",  t: "ot", name: "History",            color: "#2f5e4e", ink: "#f6ead6", desc: "Israel's story in the land: judges, kings, exile, and coming home again." },
  { id: "wisdom",   t: "ot", name: "Poetry & Wisdom",    color: "#5b3d72", ink: "#f6ead6", desc: "Songs, prayers, honest questions and wise sayings for everyday life." },
  { id: "major",    t: "ot", name: "Major Prophets",     color: "#8a4f22", ink: "#f6ead6", desc: "Longer books from prophets who called God's people back and pointed to a coming King." },
  { id: "minor",    t: "ot", name: "Minor Prophets",     color: "#46557a", ink: "#f6ead6", desc: "Twelve shorter prophets. Minor means short, not less important." },
  { id: "gospels",  t: "nt", name: "The Gospels",        color: "#b3832c", ink: "#1b1407", desc: "Four eyewitness portraits of Jesus: His life, death and resurrection." },
  { id: "acts",     t: "nt", name: "Church History",     color: "#2a6670", ink: "#f6ead6", desc: "How the good news spread from Jerusalem all the way to Rome." },
  { id: "paul",     t: "nt", name: "Paul's Letters",     color: "#3d4f9a", ink: "#f6ead6", desc: "Letters Paul wrote to young churches and close friends." },
  { id: "general",  t: "nt", name: "General Letters",    color: "#6e4a5e", ink: "#f6ead6", desc: "Letters from other church leaders to believers everywhere." },
  { id: "prophecy", t: "nt", name: "Prophecy",           color: "#8e2f4f", ink: "#f6ead6", desc: "How the story ends: Jesus wins and makes everything new." }
];

window.BQ_BOOKS = [
  { id: "genesis",         name: "Genesis",          g: "law",      ch: 50,  icon: "sunrise",    tag: "Where everything begins" },
  { id: "exodus",          name: "Exodus",           g: "law",      ch: 40,  icon: "tablets",    tag: "God sets His people free" },
  { id: "leviticus",       name: "Leviticus",        g: "law",      ch: 27,  icon: "tent",       tag: "How to live near a holy God" },
  { id: "numbers",         name: "Numbers",          g: "law",      ch: 36,  icon: "footprints", tag: "Forty years in the wilderness" },
  { id: "deuteronomy",     name: "Deuteronomy",      g: "law",      ch: 34,  icon: "scroll",     tag: "Remember, love, obey" },

  { id: "joshua",          name: "Joshua",           g: "history",  ch: 24,  icon: "wall",       tag: "Into the promised land" },
  { id: "judges",          name: "Judges",           g: "history",  ch: 21,  icon: "jar",        tag: "A cycle of falling and rescue" },
  { id: "ruth",            name: "Ruth",             g: "history",  ch: 4,   icon: "sheaf",      tag: "Loyal love in hard times" },
  { id: "1-samuel",        name: "1 Samuel",         g: "history",  ch: 31,  icon: "sling",      tag: "Israel gets a king" },
  { id: "2-samuel",        name: "2 Samuel",         g: "history",  ch: 24,  icon: "crown",      tag: "King David, wins and failures" },
  { id: "1-kings",         name: "1 Kings",          g: "history",  ch: 22,  icon: "temple",     tag: "A temple, then a split kingdom" },
  { id: "2-kings",         name: "2 Kings",          g: "history",  ch: 25,  icon: "flame",      tag: "Prophets, kings and exile" },
  { id: "1-chronicles",    name: "1 Chronicles",     g: "history",  ch: 29,  icon: "harp",       tag: "David's family and worship" },
  { id: "2-chronicles",    name: "2 Chronicles",     g: "history",  ch: 36,  icon: "temple",     tag: "Judah's kings and the temple" },
  { id: "ezra",            name: "Ezra",             g: "history",  ch: 10,  icon: "scroll",     tag: "Coming home to worship" },
  { id: "nehemiah",        name: "Nehemiah",         g: "history",  ch: 13,  icon: "wall",       tag: "Rebuilding the walls" },
  { id: "esther",          name: "Esther",           g: "history",  ch: 10,  icon: "crown",      tag: "For such a time as this" },

  { id: "job",             name: "Job",              g: "wisdom",   ch: 42,  icon: "voice",      tag: "Faith when life falls apart" },
  { id: "psalms",          name: "Psalms",           g: "wisdom",   ch: 150, icon: "harp",       tag: "Songs for every season" },
  { id: "proverbs",        name: "Proverbs",         g: "wisdom",   ch: 31,  icon: "lamp",       tag: "Wisdom for everyday life" },
  { id: "ecclesiastes",    name: "Ecclesiastes",     g: "wisdom",   ch: 12,  icon: "scales",     tag: "What really matters" },
  { id: "song-of-songs",   name: "Song of Songs",    g: "wisdom",   ch: 8,   icon: "heart",      tag: "A love song" },

  { id: "isaiah",          name: "Isaiah",           g: "major",    ch: 66,  icon: "throne",     tag: "Holy God, coming Savior" },
  { id: "jeremiah",        name: "Jeremiah",         g: "major",    ch: 52,  icon: "jar",        tag: "The weeping prophet" },
  { id: "lamentations",    name: "Lamentations",     g: "major",    ch: 5,   icon: "sunrise",    tag: "Grief, and mercy every morning" },
  { id: "ezekiel",         name: "Ezekiel",          g: "major",    ch: 48,  icon: "eye",        tag: "Dry bones live again" },
  { id: "daniel",          name: "Daniel",           g: "major",    ch: 12,  icon: "lion",       tag: "Faithful in a foreign land" },

  { id: "hosea",           name: "Hosea",            g: "minor",    ch: 14,  icon: "heart",      tag: "Love that won't let go" },
  { id: "joel",            name: "Joel",             g: "minor",    ch: 3,   icon: "dove",       tag: "Locusts, and the Spirit poured out" },
  { id: "amos",            name: "Amos",             g: "minor",    ch: 9,   icon: "scales",     tag: "Let justice roll" },
  { id: "obadiah",         name: "Obadiah",          g: "minor",    ch: 1,   vv: 21, icon: "mirror", tag: "Pride comes before a fall" },
  { id: "jonah",           name: "Jonah",            g: "minor",    ch: 4,   icon: "fish",       tag: "Running from God's mercy" },
  { id: "micah",           name: "Micah",            g: "minor",    ch: 7,   icon: "footprints", tag: "Walk humbly with your God" },
  { id: "nahum",           name: "Nahum",            g: "minor",    ch: 3,   icon: "flame",      tag: "Nineveh's fall" },
  { id: "habakkuk",        name: "Habakkuk",         g: "minor",    ch: 3,   icon: "wall",       tag: "Trusting God while you wait" },
  { id: "zephaniah",       name: "Zephaniah",        g: "minor",    ch: 3,   icon: "harp",       tag: "God sings over His people" },
  { id: "haggai",          name: "Haggai",           g: "minor",    ch: 2,   icon: "temple",     tag: "Put God's house first" },
  { id: "zechariah",       name: "Zechariah",        g: "minor",    ch: 14,  icon: "crown",      tag: "Your King is coming" },
  { id: "malachi",         name: "Malachi",          g: "minor",    ch: 4,   icon: "sunrise",    tag: "Return to me" },

  { id: "matthew",         name: "Matthew",          g: "gospels",  ch: 28,  icon: "star",       tag: "Jesus, the promised King" },
  { id: "mark",            name: "Mark",             g: "gospels",  ch: 16,  icon: "footprints", tag: "Jesus, the Servant on the move" },
  { id: "luke",            name: "Luke",             g: "gospels",  ch: 24,  icon: "coins",      tag: "Jesus came for the lost" },
  { id: "john",            name: "John",             g: "gospels",  ch: 21,  icon: "lamp",       tag: "Believe and have life" },

  { id: "acts",            name: "Acts",             g: "acts",     ch: 28,  icon: "ship",       tag: "The church on the move" },

  { id: "romans",          name: "Romans",           g: "paul",     ch: 16,  icon: "scales",     tag: "Made right with God by faith" },
  { id: "1-corinthians",   name: "1 Corinthians",    g: "paul",     ch: 16,  icon: "heart",      tag: "Love holds a church together" },
  { id: "2-corinthians",   name: "2 Corinthians",    g: "paul",     ch: 13,  icon: "jar",        tag: "Strength in weakness" },
  { id: "galatians",       name: "Galatians",        g: "paul",     ch: 6,   icon: "dove",       tag: "Free in Christ" },
  { id: "ephesians",       name: "Ephesians",        g: "paul",     ch: 6,   icon: "temple",     tag: "One new family in Christ" },
  { id: "philippians",     name: "Philippians",      g: "paul",     ch: 4,   icon: "footprints", tag: "Joy that doesn't quit" },
  { id: "colossians",      name: "Colossians",       g: "paul",     ch: 4,   icon: "crown",      tag: "Jesus over everything" },
  { id: "1-thessalonians", name: "1 Thessalonians",  g: "paul",     ch: 5,   icon: "sunrise",    tag: "Jesus is coming back" },
  { id: "2-thessalonians", name: "2 Thessalonians",  g: "paul",     ch: 3,   icon: "lamp",       tag: "Stand firm, keep working" },
  { id: "1-timothy",       name: "1 Timothy",        g: "paul",     ch: 6,   icon: "letter",     tag: "How to lead a church" },
  { id: "2-timothy",       name: "2 Timothy",        g: "paul",     ch: 4,   icon: "scroll",     tag: "Paul's last letter" },
  { id: "titus",           name: "Titus",            g: "paul",     ch: 3,   icon: "letter",     tag: "Grace that changes how you live" },
  { id: "philemon",        name: "Philemon",         g: "paul",     ch: 1,   vv: 25, icon: "heart", tag: "Welcome him like a brother" },

  { id: "hebrews",         name: "Hebrews",          g: "general",  ch: 13,  icon: "cross",      tag: "Jesus is better" },
  { id: "james",           name: "James",            g: "general",  ch: 5,   icon: "mirror",     tag: "Faith that works" },
  { id: "1-peter",         name: "1 Peter",          g: "general",  ch: 5,   icon: "flame",      tag: "Hope when you suffer" },
  { id: "2-peter",         name: "2 Peter",          g: "general",  ch: 3,   icon: "lamp",       tag: "Keep growing, don't be fooled" },
  { id: "1-john",          name: "1 John",           g: "general",  ch: 5,   icon: "heart",      tag: "God is love" },
  { id: "2-john",          name: "2 John",           g: "general",  ch: 1,   vv: 13, icon: "letter", tag: "Walk in truth and love" },
  { id: "3-john",          name: "3 John",           g: "general",  ch: 1,   vv: 15, icon: "letter", tag: "Welcome those who serve" },
  { id: "jude",            name: "Jude",             g: "general",  ch: 1,   vv: 25, icon: "footprints", tag: "Keep yourself in God's love" },

  { id: "revelation",      name: "Revelation",       g: "prophecy", ch: 22,  icon: "throne",     tag: "Jesus wins" }
];

/* Book quizzes register themselves here (see js/books-*.js). */
window.BQ_QUIZZES = [];
window.BQ = { book: (q) => window.BQ_QUIZZES.push(q) };
