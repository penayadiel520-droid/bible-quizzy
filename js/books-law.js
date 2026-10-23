/* The Law: Genesis – Deuteronomy.
   Question shape: r = round (1 Recall, 2 Understand, 3 Go deeper), ch = chapters it covers (lights the ribbon),
   o = options with the right answer FIRST (the app shuffles them), tf = true/false answer, "____" makes a fill-the-blank. */

BQ.book({
  id: "genesis",
  title: "In the Beginning",
  overview: "Genesis means beginnings. God creates a good world and makes people in His image, but they turn away and sin spreads fast. Then God chooses one man, Abraham, and promises to bless the whole world through his family. The book follows that family through Isaac, Jacob and Joseph, and ends with them in Egypt.",
  key: ["Genesis 12:2–3", "I will bless you and make your family into a great nation. Through you, every family on earth will be blessed."],
  cast: [
    ["Adam and Eve", "People", "chs. 2–4", "The first man and woman. God made them in His image. Then they chose their own way and lost the garden.", "Romans 5:12–19"],
    ["Noah", "Person", "chs. 6–9", "A man who walked with God in a violent world. He built the ark, and God saved his family through the flood.", "Hebrews 11:7"],
    ["Abraham and Sarah", "People", "chs. 12–25", "God called them to leave home for a land they'd never seen, and promised a son when it seemed impossible.", "Romans 4:18–22"],
    ["Isaac and Rebekah", "People", "chs. 21–27", "The son God promised Abraham, and his wife. Their twin sons were Esau and Jacob."],
    ["Jacob (Israel)", "Person", "chs. 25–50", "A schemer who wrestled with God and got a new name, Israel. His twelve sons became the twelve tribes.", "Hosea 12:3–4"],
    ["Joseph", "Person", "chs. 37–50", "Sold as a slave by his brothers, he rose to second in command of Egypt and saved his family from famine.", "Acts 7:9–14"],
    ["Ur, Canaan and Egypt", "Places", "chs. 11–50", "Abraham's family starts in Ur, moves to Canaan, the land God promised, and ends up in Egypt during a famine."]
  ],
  pray: "Take a slow breath. Genesis starts with God speaking light into darkness. Ask Him to bring light to whatever feels dark in you as you read (Genesis 1:3).",
  sections: [
    [1, 11, "Beginnings", "God creates a good world and people in His image. They rebel, sin spreads, the flood comes, and people try to make a name for themselves at Babel."],
    [12, 25, "Abraham", "God calls Abraham and promises land, a big family and blessing for the world. After years of waiting, Isaac is born."],
    [26, 36, "Isaac and Jacob", "The promise passes to Isaac, then to Jacob, who tricks his way forward until God wrestles him and renames him Israel."],
    [37, 50, "Joseph", "Joseph is sold by his brothers, rises in Egypt and saves the whole family. What they meant for evil, God meant for good."]
  ],
  qs: [
    { r: 1, ref: "Genesis 1:27", ch: [1], q: "On the sixth day God made people. What does Genesis say they were made in?", o: ["God's own image", "The image of the angels", "The image of the animals", "The image of the stars"], why: "God made people in His image, male and female. That's why every single person has worth." },
    { r: 1, ref: "Genesis 6:14", ch: [6, 7], art: "ark", q: "What did God tell Noah to build before the flood?", o: ["An ark", "A tower", "A city wall", "A temple"], why: "Noah built a huge wooden boat, just as God told him, and his family and the animals were kept safe inside." },
    { r: 1, ref: "Genesis 9:13", ch: [9], art: "ark", q: "After the flood, God put a ____ in the clouds as the sign of His promise.", o: ["rainbow", "star", "dove", "pillar of fire"], why: "The rainbow is the sign of God's covenant never again to destroy the earth with a flood (Genesis 9:13–15)." },
    { r: 1, ref: "Genesis 21:5", ch: [17, 21], q: "True or false: Abraham was 100 years old when his son Isaac was born.", tf: true, why: "Abraham was 100 and Sarah was 90 (Genesis 17:17; 21:5). God kept a promise that looked impossible." },
    { r: 1, ref: "Genesis 37:28", ch: [37], q: "What did Joseph's jealous brothers do to him?", o: ["Sold him to traders headed for Egypt", "Sent him to live with their uncle Laban", "Made him a servant in their father's house", "Left him to guard the sheep alone"], why: "They threw him into a dry well, then sold him for twenty pieces of silver to traders going to Egypt (Genesis 37:24–28)." },
    { r: 2, ref: "Genesis 3:1–5", ch: [3], q: "How did the serpent tempt Eve in the garden?", o: ["He made her doubt what God said and whether God was good", "He promised her gold and jewels from the rivers", "He threatened to hurt Adam if she didn't eat", "He told her the fruit would heal every sickness"], why: "“Did God really say...?” The first temptation was to doubt God's word and His heart. It still works that way." },
    { r: 2, ref: "Genesis 15:6", ch: [15], q: "Abraham believed the Lord's promise. What did God count that faith as?", o: ["Righteousness", "A good work", "A sacrifice", "Payment for his sins"], why: "Abraham was made right with God by trusting His promise. Paul builds a whole argument on this verse in Romans 4." },
    { r: 2, ref: "Genesis 22:8, 13–14", ch: [22], q: "When God tested Abraham with Isaac on the mountain, what did God provide instead?", o: ["A ram caught in a thicket", "An angel to take Isaac's place", "A lamb from a nearby shepherd", "Nothing, because Abraham turned back"], why: "Abraham told Isaac, “God himself will provide the lamb.” God provided a ram, and Abraham called the place The Lord Will Provide." },
    { r: 2, ref: "Genesis 50:19–21", ch: [45, 50], q: "True or false: Once Joseph had power in Egypt, he paid his brothers back by making them slaves.", tf: false, why: "He did the opposite. He forgave them and fed their families, saying, “You intended to harm me, but God intended it for good” (Genesis 50:20)." },
    { r: 3, ref: "Genesis 3:15", ch: [3], look: ["Galatians 4:4–5", "Hebrews 2:14"], q: "God said the woman's offspring would crush the serpent's head (Genesis 3:15). Who do Christians see as that offspring?", o: ["Jesus", "Noah", "Moses", "Abraham"], why: "This is the first hint of the gospel. Someone born of a woman would defeat evil, even though He'd be wounded doing it. Jesus did that on the cross." },
    { r: 3, ref: "Genesis 12:3 · Galatians 3:8", ch: [12], look: ["Galatians 3:8", "Matthew 1:1"], q: "God promised all peoples would be blessed through Abraham. How does the New Testament say that came true?", o: ["Through Jesus, Abraham's descendant, the good news reaches every nation", "Through Abraham's great wealth being shared with all nations", "Through Israel's kings ruling over every other nation", "It hasn't happened yet and won't until the very end"], why: "Paul calls Genesis 12:3 the gospel announced ahead of time. Matthew's first verse calls Jesus “the son of Abraham.”" },
    { r: 3, ref: "Genesis 28:12 · John 1:51", ch: [28], look: ["John 1:51"], q: "Jacob dreamed of a stairway between heaven and earth. Who did Jesus say that stairway pointed to?", o: ["Himself, the Son of Man", "The temple in Jerusalem", "The prophets", "The church"], why: "Jesus told Nathanael he'd see angels going up and down on the Son of Man. Jesus is the real bridge between heaven and earth." }
  ],
  words: [
    ["Covenant", "Genesis 9:9; 15:18", "A serious, binding promise. God ties Himself to His word."],
    ["Image of God", "Genesis 1:27", "People reflect God, like a mirror. It's why every person matters."],
    ["Patriarch", "chs. 12–50", "A founding father of a family. Abraham, Isaac and Jacob are Israel's patriarchs."],
    ["Birthright", "Genesis 25:31–34", "The oldest son's special share of the family and its blessing. Esau traded his for a bowl of stew."],
    ["Babel", "Genesis 11:9", "The city where people built a tower to make a name for themselves. God mixed up their languages."]
  ],
  under: [
    ["Genesis 1:27", "Made in His image.", "Your worth doesn't come from your looks or your results. God put His image on you.", "Treat the next person who annoys you like someone who carries God's image."],
    ["Genesis 16:13", "The God who sees me.", "Hagar was a runaway servant nobody cared about. God found her in the desert and saw her.", "If you feel invisible this week, say this verse out loud. He sees you."],
    ["Genesis 18:14", "Is anything too hard for the Lord?", "God asked this when Sarah laughed at His promise. The answer is no.", "Write down the thing you've stopped praying about, and start praying again."],
    ["Genesis 50:20", "God meant it for good.", "People can really hurt you. God can still use it to bring something good.", "Think of an old hurt and ask God to show you one good thing He has grown from it."]
  ],
  reflect: ["Joseph could have gotten even with his brothers. Instead he forgave them and fed their families (Genesis 50:19–21). Is there someone you need to forgive, and what would one step toward that look like?", "Genesis 50:15–21"],
  close: "Thank God that He made you on purpose, in His image (1:27). Ask Him to help you trust His promises the way Abraham did (15:6). Bring Him any hurt you're carrying, and ask Him to turn it for good (50:20)."
});

BQ.book({
  id: "exodus",
  title: "Out of Egypt",
  overview: "Jacob's family grows into a nation in Egypt, but a new Pharaoh makes them slaves. God hears their cry and sends Moses. Through ten plagues and the parting of the Red Sea, God sets His people free. At Mount Sinai He gives them His law and has them build the tabernacle, a tent where He will live among them.",
  key: ["Exodus 20:2–3", "I am the Lord your God. I brought you out of Egypt, out of slavery. Don't put any other god in My place."],
  cast: [
    ["Moses", "Person", "chs. 2–40", "Saved as a baby in a basket, raised in Pharaoh's palace, then called by God at a burning bush to lead Israel out.", "Hebrews 11:23–28"],
    ["Pharaoh", "Person", "chs. 1–14", "Egypt's king. He made Israel slaves and kept hardening his heart against God, plague after plague."],
    ["Aaron", "Person", "chs. 4–40", "Moses' older brother. He spoke for Moses and became the first high priest, but he also made the golden calf."],
    ["Miriam", "Person", "chs. 2, 15", "Moses' sister. She watched over baby Moses and led the women in a song after the Red Sea."],
    ["Jethro", "Person", "chs. 3, 18", "Moses' father-in-law, a priest of Midian. He gave Moses wise advice to share the load of leading."],
    ["Mount Sinai", "Place", "chs. 19–40", "The mountain where God came down in fire and smoke and gave Israel the Ten Commandments."]
  ],
  pray: "Take a slow breath. Exodus begins with God hearing people who were stuck. Tell Him where you feel stuck, and ask Him to meet you as you read (Exodus 2:24–25).",
  sections: [
    [1, 15, "Rescue", "Israel suffers as slaves. God calls Moses, sends ten plagues, gives the Passover and parts the Red Sea."],
    [16, 18, "Wilderness", "God feeds His people with manna and gives them water from a rock on the way to Sinai."],
    [19, 24, "The Law", "At Mount Sinai God gives the Ten Commandments and makes a covenant with Israel."],
    [25, 40, "God's Tent", "God gives plans for the tabernacle. Israel sins with the golden calf, God forgives, and His glory fills the tent."]
  ],
  qs: [
    { r: 1, ref: "Exodus 2:3–10", ch: [2], q: "How was baby Moses kept safe from Pharaoh's order?", o: ["His mother hid him in a basket in the Nile", "Shepherds hid him in a cave near the river", "His family ran away with him to Midian", "An angel carried him out into the desert"], why: "His mother put him in a basket among the reeds. Pharaoh's own daughter found him and raised him." },
    { r: 1, ref: "Exodus 3:2–4", ch: [3], art: "lamp", q: "How did God first speak to Moses in the desert?", o: ["From a bush that was on fire but didn't burn up", "In a dream while he slept in his tent", "Through his father-in-law Jethro the priest", "From a pillar of cloud over the mountain"], why: "The bush was burning but not burning up. God called to Moses from it and sent him back to Pharaoh." },
    { r: 1, ref: "Exodus 3:14", ch: [3], q: "When Moses asked God's name, God said: “I AM ____ I AM.”", o: ["WHO", "WHAT", "WHERE", "BECAUSE"], why: "“I AM WHO I AM.” God doesn't depend on anything. He simply is. His name, the Lord, comes from this." },
    { r: 1, ref: "Exodus 12:7, 13", ch: [12], q: "On the night of the first Passover, what did Israel put on their doorframes?", o: ["The blood of a lamb", "Olive oil", "Palm branches", "Ashes from the fire"], why: "When God saw the blood, He passed over that house. That's where the name Passover comes from." },
    { r: 1, ref: "Exodus 16:14–15, 35", ch: [16], q: "True or false: The manna God sent in the wilderness stopped after just one year.", tf: false, why: "It came every morning for the whole forty years, until they reached the edge of Canaan (Exodus 16:35)." },
    { r: 2, ref: "Exodus 14:13–14", ch: [14], q: "Trapped between the Red Sea and Pharaoh's army, what did Moses tell the people?", o: ["The Lord will fight for you; you only need to be still", "Grab your swords and fight for your families", "Run back to Egypt and beg Pharaoh for mercy", "Split up and hide in the hills until dark"], why: "“The Lord will fight for you; you need only to be still” (14:14). Then God split the sea in two." },
    { r: 2, ref: "Exodus 20:8", ch: [20], art: "tablets", q: "Which of these is one of the Ten Commandments?", o: ["Remember the Sabbath day by keeping it holy", "Pray toward the mountain three times a day", "Never share a meal with people from other nations", "Give half of everything you own to the poor"], why: "The fourth commandment sets aside one day in seven for rest and worship." },
    { r: 2, ref: "Exodus 32:1–4", ch: [32], q: "Why did the people make a golden calf?", o: ["Moses was gone a long time, and they got impatient", "Pharaoh's officials had ordered them to make one", "They wanted to trade it to the Midianites for food", "God told Aaron to make it for the tabernacle"], why: "Moses was on Sinai forty days. The people gave up waiting and wanted a god they could see, and Aaron went along with it." },
    { r: 2, ref: "Exodus 34:6–7", ch: [34], q: "When God passed by Moses on the mountain, how did He describe Himself?", o: ["Compassionate and gracious, slow to anger and full of love", "Strong and fierce, quick to anger and hard to please", "Far away and silent, and very hard to reach", "Mostly interested in rules and the right sacrifices"], why: "This is one of the most quoted verses in the Old Testament. It's God describing His own heart." },
    { r: 3, ref: "Exodus 12:21 · 1 Corinthians 5:7", ch: [12], look: ["John 1:29", "1 Corinthians 5:7"], q: "The New Testament connects the Passover lamb to Jesus. What does Paul call Him?", o: ["Our Passover lamb", "Our Red Sea", "Our Mount Sinai", "Our manna"], why: "“Christ, our Passover lamb, has been sacrificed” (1 Corinthians 5:7). His blood saves us like the lamb's blood saved Israel." },
    { r: 3, ref: "Exodus 16:4 · John 6:32–35", ch: [16], look: ["John 6:32–35"], art: "bread", q: "Jesus talked about the manna in John 6. What did He say about Himself?", o: ["He is the true bread from heaven, the bread of life", "He would bring the manna back for His followers", "The manna story was only a legend, not history", "He was greater than Moses because He fed more"], why: "Manna kept people alive for a day. Jesus gives life that lasts forever (John 6:35)." },
    { r: 3, ref: "Exodus 40:34 · John 1:14", ch: [40], look: ["John 1:14"], art: "tent", q: "Exodus ends with God's glory filling the tabernacle tent. John 1:14 says the Word “made His dwelling” among us. What's the connection?", o: ["In Jesus, God came to live with His people, as in the tabernacle", "Jesus built a new tabernacle for the church in Jerusalem", "John is saying the tabernacle was a mistake all along", "God stopped living with His people after Exodus"], why: "The word in John 1:14 literally means “pitched His tent.” Jesus is God living among us." }
  ],
  words: [
    ["Plague", "chs. 7–12", "A disaster sent as a judgment. God sent ten on Egypt, from blood in the Nile to the death of the firstborn."],
    ["Passover", "Exodus 12", "The night God passed over homes marked with lamb's blood. Israel still remembers it with a meal every year."],
    ["Manna", "Exodus 16:31", "The bread God sent each morning. The name sounds like the Hebrew for “What is it?”"],
    ["Tabernacle", "chs. 25–40", "A holy tent where God lived among Israel. It traveled wherever they went."],
    ["Sabbath", "Exodus 20:8–11", "A day of rest every seventh day, to stop working and remember God."]
  ],
  under: [
    ["Exodus 3:14", "I AM WHO I AM.", "Nobody made God and He doesn't need anything. He's the one solid thing you can stand on.", "When you feel shaky this week, pray: “You are who You are, and You're with me.”"],
    ["Exodus 14:14", "The Lord will fight for you.", "Some battles aren't won by trying harder. Trusting God is the job.", "Name one fight you've been trying to win alone, and hand it to God in prayer today."],
    ["Exodus 20:3", "No other gods.", "Anything you trust more than God becomes a god: money, approval, comfort.", "Ask yourself what you run to first when you're stressed. Run to God first this week."],
    ["Exodus 33:14", "My Presence will go with you.", "God promised Moses rest because He would be there. His presence beats any plan.", "Before you leave the house each day this week, pray this verse."]
  ],
  reflect: ["The people made a golden calf when waiting on God felt too long (Exodus 32:1). Where are you tempted to stop waiting on God and grab a shortcut?", "Exodus 32:1–8"],
  close: "Thank God for hearing people who are stuck (2:24). Ask Him to free you from anything that has become a god to you (20:3). And ask for His presence to go with you this week (33:14)."
});

BQ.book({
  id: "leviticus",
  title: "Be Holy",
  overview: "Leviticus is God's instruction book for living near Him. It explains the sacrifices, the priests, what was clean and unclean, and the yearly feasts. The big idea: God is holy, and He makes a way for sinful people to come close. The Day of Atonement in chapter 16 is the heart of the book.",
  key: ["Leviticus 19:2", "Be holy, because I, the Lord your God, am holy."],
  cast: [
    ["Aaron", "Person", "chs. 8–10, 16", "Moses' brother and Israel's first high priest. Once a year he entered the Most Holy Place.", "Hebrews 5:1–5"],
    ["Nadab and Abihu", "People", "ch. 10", "Aaron's sons. They offered “unauthorized fire” to God and died, a sobering lesson that God is holy."],
    ["The priests", "People", "chs. 8–10, 21–22", "Aaron's family. They offered sacrifices and taught the people God's ways.", "Hebrews 4:14–16"],
    ["The scapegoat", "Animal", "ch. 16", "On the Day of Atonement the high priest put Israel's sins on this goat's head and sent it into the wilderness."],
    ["The tabernacle", "Place", "throughout", "God's holy tent in the middle of the camp, where the sacrifices were offered."]
  ],
  pray: "Take a slow breath. Leviticus is about coming near to a holy God. Thank Him that He wants you close, and ask Him to teach you as you read (Leviticus 26:12).",
  sections: [
    [1, 7, "Offerings", "Five kinds of offerings: some to deal with sin, some to say thank you, some to share a meal with God."],
    [8, 10, "Priests", "Aaron and his sons are made priests. Two of them treat God's holiness lightly and die."],
    [11, 15, "Clean and Unclean", "Rules about food, sickness and the body that taught Israel to be set apart."],
    [16, 16, "Day of Atonement", "Once a year the high priest makes atonement for all Israel and sends the scapegoat away."],
    [17, 27, "Holy Living", "Holiness in everyday life: love your neighbor, rest, keep the feasts and the Jubilee, and stay faithful."]
  ],
  qs: [
    { r: 1, ref: "Leviticus 1:4", ch: [1], q: "When an Israelite brought a burnt offering, what did they do before the animal was killed?", o: ["Laid a hand on its head", "Whispered their name to it", "Washed it in the river", "Painted it with oil"], why: "The hand on its head showed the animal was taking their place. It was accepted to make atonement for them." },
    { r: 1, ref: "Leviticus 10:1–2", ch: [10], art: "flame", q: "What happened when Nadab and Abihu offered unauthorized fire to the Lord?", o: ["Fire came out from the Lord and they died", "They were sent out of the camp for a week", "They lost their jobs as priests for good", "Nothing happened, and they kept serving"], why: "It's a hard chapter. It shows that God's holiness is serious, and that we come to Him on His terms." },
    { r: 1, ref: "Leviticus 16:21–22", ch: [16], q: "On the Day of Atonement the priest confessed Israel's sins over a goat and sent it into the ____.", o: ["wilderness", "river", "temple", "city"], why: "The scapegoat carried their sins far away, a picture of sin being taken off God's people." },
    { r: 1, ref: "Leviticus 23", ch: [23], q: "True or false: Leviticus never mentions Israel's yearly feasts.", tf: false, why: "Chapter 23 lists them all: the Sabbath, Passover, Firstfruits, Weeks, Trumpets, the Day of Atonement and Tabernacles." },
    { r: 1, ref: "Leviticus 25:10", ch: [25], q: "What happened in the Year of Jubilee, every fiftieth year?", o: ["Land went back to its families and slaves were set free", "Everyone paid double taxes to the priests that year", "The tabernacle was taken down and built again", "A new high priest was chosen by drawing lots"], why: "Jubilee was a reset. Land returned to its families and people in slavery were freed." },
    { r: 2, ref: "Leviticus 17:11", ch: [17], q: "Why does Leviticus say blood was used to make atonement?", o: ["Because the life of a creature is in the blood", "Because blood was the most valuable thing people owned", "Because it was a custom from Egypt", "Because blood scared away evil spirits"], why: "Sin brings death, so a life was given in place of the sinner. “The life of a creature is in the blood” (17:11)." },
    { r: 2, ref: "Leviticus 19:18", ch: [19], q: "Leviticus 19:18 has a command Jesus called the second greatest. What is it?", o: ["Love your neighbor as yourself", "Honor your father and mother", "Do not steal", "Keep the Sabbath holy"], why: "Jesus quoted it in Mark 12:31. Holiness isn't only rituals. It's how you treat people." },
    { r: 2, ref: "Leviticus 19:9–10", ch: [19], art: "sheaf", q: "Why were farmers told not to harvest the edges of their fields?", o: ["So the poor and foreigners could gather food there", "To give the soil a rest every few years", "Because the edges belonged to the priests", "To leave food for the wild animals and birds"], why: "God built care for the poor right into farming. Ruth later gathered grain this way in Boaz's field." },
    { r: 2, ref: "Leviticus 20:26", ch: [20], q: "What does the word holy mean in Leviticus?", o: ["Set apart, belonging to God", "Very strict and serious", "Living alone, away from people", "Never making a mistake"], why: "“I have set you apart from the nations to be my own” (20:26). Holy means set apart for God." },
    { r: 3, ref: "Leviticus 16:15 · Hebrews 9:11–12", ch: [16], look: ["Hebrews 9:11–14"], art: "cross", q: "Hebrews compares Jesus to the high priest on the Day of Atonement. What's different about Jesus?", o: ["He entered once for all, with His own blood", "He had to repeat it every year", "He used the blood of goats and calves", "He made atonement only for priests"], why: "The high priest went in year after year. Jesus offered Himself once, and that settled it forever (Hebrews 9:12)." },
    { r: 3, ref: "Leviticus 11:44 · 1 Peter 1:15–16", ch: [11], look: ["1 Peter 1:15–16"], q: "Which New Testament writer quotes “Be holy, because I am holy” to Christians?", o: ["Peter", "Luke", "Jude", "Mark"], why: "Peter tells believers to be holy in everything they do, quoting Leviticus (1 Peter 1:16). The call still stands." },
    { r: 3, ref: "Leviticus 25:10 · Luke 4:18–19", ch: [25], look: ["Luke 4:16–21"], q: "Jesus' first sermon in Nazareth announced “the year of the Lord's favor.” What does that echo?", o: ["The Year of Jubilee, when captives went free", "The Day of Atonement and the scapegoat", "The Feast of Tabernacles and its tents", "The day the tabernacle was first set up"], why: "Jubilee meant freedom and a fresh start. Jesus said that freedom had arrived in Him." }
  ],
  words: [
    ["Atonement", "Leviticus 16", "Making things right between God and people by covering or removing sin."],
    ["Sacrifice", "chs. 1–7", "Something given to God, often an animal, as worship or to deal with sin."],
    ["Clean and unclean", "chs. 11–15", "Whether a person or thing was ready to come near God's tent. It wasn't about dirt. It was about being fit for worship."],
    ["Holy", "Leviticus 19:2", "Set apart for God. Different in a good way."],
    ["Jubilee", "Leviticus 25", "Every fiftieth year: land returned, debts canceled, slaves freed."]
  ],
  under: [
    ["Leviticus 19:2", "Be holy, because I am holy.", "God wants His people to look like Him: set apart and good.", "Pick one habit that doesn't fit who God is, and ask Him to help you drop it this week."],
    ["Leviticus 19:18", "Love your neighbor as yourself.", "God cares about how you treat people as much as how you worship.", "Do one kind thing this week for a neighbor you usually ignore."],
    ["Leviticus 26:12", "I will walk among you.", "The goal of all the rules was closeness. God wants to be with His people.", "Take a slow walk this week and talk with God the whole way."]
  ],
  reflect: ["Leviticus 19 mixes worship with everyday things like paying workers on time and caring for the poor (19:9–13). Where does your faith need to show up more in ordinary life?", "Leviticus 19:9–18"],
  close: "Thank God that He made a way for sinful people to come close (16:30). Ask Him to make you holy, set apart for Him (19:2). And ask for help loving the people right around you (19:18)."
});

BQ.book({
  id: "numbers",
  title: "Forty Years in the Wilderness",
  overview: "Numbers is named for two head counts of Israel. Between them is a sad story. The people leave Sinai, but they complain, rebel, and refuse to enter the promised land when the spies report giants. God has them wander forty years until a new generation grows up. Through it all, God keeps leading, feeding and blessing them.",
  key: ["Numbers 6:24–26", "May the Lord bless you and protect you. May He smile on you and be kind to you. May He look on you with favor and give you peace."],
  cast: [
    ["Moses", "Person", "throughout", "Still leading Israel, often praying for them when God was angry. Even he made a big mistake at the rock.", "Psalm 106:32–33"],
    ["Aaron and Miriam", "People", "chs. 12, 20", "Moses' brother and sister. They grumbled against him once, and both died before reaching Canaan."],
    ["Joshua and Caleb", "People", "chs. 13–14", "The two spies who trusted God. They were the only adults of that generation allowed into the land.", "Joshua 14:6–12"],
    ["Korah", "Person", "ch. 16", "A Levite who led a rebellion against Moses and Aaron. The ground opened and swallowed his group."],
    ["Balaam", "Person", "chs. 22–24", "A prophet hired to curse Israel. His donkey talked to him, and he ended up blessing Israel instead.", "2 Peter 2:15–16"],
    ["Kadesh", "Place", "chs. 13–14, 20", "The desert oasis where the spies reported back and the people refused to go in."]
  ],
  pray: "Take a slow breath. Numbers is about a long, hard road. Tell God honestly how your road feels right now, and ask Him to lead you like He led Israel (Numbers 9:17–18).",
  sections: [
    [1, 10, "Leaving Sinai", "Israel is counted and organized. God leads them with a cloud by day and fire by night."],
    [11, 25, "Wandering", "Complaining, the spies, forty years in the desert, the bronze snake, and Balaam's blessing."],
    [26, 36, "New Generation", "A second count of the new generation. Joshua is chosen to lead as they get ready to enter Canaan."]
  ],
  qs: [
    { r: 1, ref: "Numbers 9:15–17", ch: [9], art: "tent", q: "How did God show Israel when to move and when to stay?", o: ["A cloud over the tabernacle that lifted or settled", "A trumpet blast that sounded from heaven", "A new star that rose in the sky each night", "Moses drew lots every morning at the altar"], why: "When the cloud lifted, they set out. When it settled, they camped. At night it glowed like fire." },
    { r: 1, ref: "Numbers 13:27–33", ch: [13], q: "What did ten of the twelve spies say about the promised land?", o: ["It's good, but the people there are giants and we can't win", "It's empty, so we can walk right in and take it", "It's a dry desert with no food or water at all", "It's already ours, so let's go up right away"], why: "They admitted the land flowed with milk and honey, but said “we seemed like grasshoppers” next to the people there." },
    { r: 1, ref: "Numbers 14:33–34", ch: [14], q: "True or false: After the people refused to go in, God made them wander in the wilderness for seven years.", tf: false, why: "It was forty years, one for each of the forty days the spies explored the land (Numbers 14:34). Only Joshua and Caleb of that generation would enter." },
    { r: 1, ref: "Numbers 21:8–9", ch: [21], q: "When venomous snakes bit the people, what did God tell Moses to make?", o: ["A bronze snake on a pole", "A wall of fire around camp", "A golden shield for each tent", "A new altar of uncut stones"], why: "Anyone who was bitten and looked at the bronze snake lived (Numbers 21:9)." },
    { r: 1, ref: "Numbers 22:28", ch: [22], q: "What surprising thing happened to Balaam on his way to curse Israel?", o: ["His donkey talked to him", "He was swallowed by a fish", "He lost his voice", "He fell asleep for three days"], why: "The donkey saw an angel blocking the road. God opened its mouth, and then opened Balaam's eyes." },
    { r: 2, ref: "Numbers 14:6–9", ch: [14], q: "What made Joshua and Caleb different from the other spies?", o: ["They trusted God would give them the land", "They were bigger and stronger than the rest", "They had found better weapons in Canaan", "They had only seen a small part of the land"], why: "“If the Lord is pleased with us, he will lead us into that land... do not be afraid” (14:8–9). Same facts, different faith." },
    { r: 2, ref: "Numbers 11:1–6", ch: [11], q: "What sin kept showing up again and again in Numbers?", o: ["Complaining against God", "Building too many altars", "Refusing to eat manna", "Making treaties with Egypt"], why: "They even missed Egypt's fish and onions. Grumbling showed they didn't trust God's care." },
    { r: 2, ref: "Numbers 20:8–12", ch: [20], q: "Why wasn't Moses allowed to enter the promised land?", o: ["He struck the rock in anger instead of speaking to it", "He was too old and weak to make the journey", "He was the one who made the golden calf", "He refused to keep leading the complaining people"], why: "God said to speak to the rock. Moses hit it twice and said, “Must we bring you water?” He didn't honor God as holy in front of the people." },
    { r: 2, ref: "Numbers 23:19", ch: [23], q: "What did Balaam say about God in Numbers 23:19?", o: ["God is not human, that He should lie or change His mind", "God can be paid to curse anyone you want", "God only blesses the strongest nations on earth", "God has forgotten Israel because of their sins"], why: "Balaam was paid to curse, but God's promise to bless Israel couldn't be bought or bent." },
    { r: 3, ref: "Numbers 21:9 · John 3:14–15", ch: [21], look: ["John 3:14–15"], art: "cross", q: "Jesus mentioned the bronze snake to Nicodemus. What did He mean?", o: ["He would be lifted up, and all who look to Him in faith will live", "Bronze statues of snakes could bring people healing today", "Nicodemus should go out to the desert and pray like Moses", "Snakes are always a sign that God is angry with His people"], why: "The bitten Israelites looked and lived. Anyone who believes in the lifted-up Jesus has eternal life (John 3:14–15)." },
    { r: 3, ref: "Numbers 14 · Hebrews 3:16–19", ch: [14], look: ["Hebrews 3:16–19"], q: "Hebrews 3 looks back at the wilderness generation. Why does it say they couldn't enter?", o: ["Because of their unbelief", "Because they had no weapons", "Because Moses got sick", "Because Canaan was too far away"], why: "“They were not able to enter, because of their unbelief” (Hebrews 3:19). The warning: don't harden your heart today." },
    { r: 3, ref: "Numbers 20:11 · 1 Corinthians 10:4", ch: [20], look: ["1 Corinthians 10:1–4"], q: "Paul says Israel drank from a spiritual rock in the wilderness. Who does he say that rock was?", o: ["Christ", "Moses", "The law", "Mount Sinai"], why: "“That rock was Christ” (1 Corinthians 10:4). Jesus was caring for His people even then." }
  ],
  words: [
    ["Census", "chs. 1, 26", "An official count of people. The book's name comes from its two counts."],
    ["Nazirite", "Numbers 6:2", "Someone who made a special vow to God: no wine, no haircut, no touching the dead."],
    ["Grumble", "Numbers 14:27", "To complain under your breath. Israel did it a lot."],
    ["Levites", "Numbers 3", "The tribe set apart to care for the tabernacle and help the priests."],
    ["Promised land", "Numbers 13:2", "Canaan, the land God promised to Abraham's family."]
  ],
  under: [
    ["Numbers 6:24–26", "The Lord bless you and keep you.", "This is the blessing God told the priests to speak over His people. He wants to smile on you.", "Pray this blessing out loud over someone in your family this week."],
    ["Numbers 14:9", "Do not be afraid.", "Joshua and Caleb saw the same giants as everyone else. They just saw God as bigger.", "Write down your “giant,” and next to it write one thing God has already done for you."],
    ["Numbers 23:19", "God does not lie.", "People change their minds and break promises. God doesn't.", "Pick one promise of God and remind yourself of it every morning this week."]
  ],
  reflect: ["Ten spies saw giants. Two saw God (Numbers 14:6–9). What's a “giant” in your life right now, and what would it look like to trust God with it?", "Numbers 13:30–14:9"],
  close: "Thank God for leading you even through the wilderness (9:17). Ask Him to turn your grumbling into trust (14:9). Then receive His blessing: may He keep you and give you peace (6:24–26)."
});

BQ.book({
  id: "deuteronomy",
  title: "Remember and Love",
  overview: "Israel is camped on the edge of the promised land. Before he dies, Moses gives the new generation three big speeches. He reminds them of everything God has done, repeats God's law, and begs them to love God with all their heart. The book ends with Moses seeing the land from a mountaintop and dying there.",
  key: ["Deuteronomy 6:4–5", "Listen, Israel: the Lord our God, the Lord is one. Love the Lord your God with all your heart, all your soul and all your strength."],
  cast: [
    ["Moses", "Person", "throughout", "Now 120 years old. These are his farewell speeches before he dies on Mount Nebo.", "Deuteronomy 34:10–12"],
    ["Joshua", "Person", "chs. 31, 34", "Moses' helper, chosen to lead Israel into the land."],
    ["The new generation", "People", "throughout", "The children of the people who died in the wilderness. Moses is getting them ready to go in."],
    ["Mount Nebo", "Place", "ch. 34", "The mountain where God showed Moses the whole promised land before he died."],
    ["Plains of Moab", "Place", "chs. 1, 34", "East of the Jordan River, where Israel camped while Moses spoke."]
  ],
  pray: "Take a slow breath. Deuteronomy keeps saying “remember.” Before you read, remember one good thing God has done for you and thank Him for it (Deuteronomy 8:2).",
  sections: [
    [1, 4, "Look Back", "Moses retells the journey from Sinai and warns them not to forget what they saw."],
    [5, 26, "The Law Again", "The Ten Commandments repeated, the call to love God, and laws for life in the land."],
    [27, 30, "Blessing or Curse", "Moses lays out two paths, life and blessing or death and curse, and says: choose life."],
    [31, 34, "Moses' Goodbye", "Joshua is named leader. Moses sings, blesses the tribes, and dies on Mount Nebo."]
  ],
  qs: [
    { r: 1, ref: "Deuteronomy 1:1–5", ch: [1], q: "Where is Israel when Moses gives the speeches in Deuteronomy?", o: ["Camped east of the Jordan, about to enter the land", "At the foot of Mount Sinai, just after the law", "Back in Egypt, still working as slaves", "Already living in Jerusalem under a king"], why: "They're in Moab, ready to cross the Jordan. Moses is speaking to the new generation." },
    { r: 1, ref: "Deuteronomy 6:4", ch: [6], q: "Deuteronomy 6:4 begins: “Hear, O Israel: The Lord our God, the Lord is ____.”", o: ["one", "holy", "near", "king"], why: "This is the Shema, Israel's great confession. There is one true God, and He gets your whole heart." },
    { r: 1, ref: "Deuteronomy 6:6–7", ch: [6], q: "What did Moses tell parents to do with God's words?", o: ["Talk about them at home, on the road, at bedtime and morning", "Leave all of the teaching to the priests and Levites", "Read them aloud only on the holy feast days", "Keep them secret so outsiders couldn't copy them"], why: "Faith was meant to be part of everyday life and passed down at home." },
    { r: 1, ref: "Deuteronomy 34:1–5", ch: [34], q: "True or false: Moses led Israel across the Jordan into the promised land.", tf: false, why: "God showed Moses the land from Mount Nebo, but he died there. Joshua led them across." },
    { r: 1, ref: "Deuteronomy 8:3", ch: [8], q: "Why did God let Israel go hungry and then feed them manna?", o: ["To teach them they live on every word from God, not bread alone", "To punish them for making the golden calf at Sinai", "Because Egypt had taken all of their food and flocks", "To toughen them up into stronger soldiers for war"], why: "God was teaching them to depend on Him. Jesus quoted this verse when He was tempted (Matthew 4:4)." },
    { r: 2, ref: "Deuteronomy 7:7–8", ch: [7], q: "Why did God choose Israel, according to Moses?", o: ["Because He loved them and kept His promise", "Because they were the biggest nation around", "Because they were the most obedient people", "Because they earned it in the wilderness"], why: "“You were the fewest of all peoples. But it was because the Lord loved you” (7:7–8). Grace, not size or merit." },
    { r: 2, ref: "Deuteronomy 8:11–17", ch: [8], q: "What danger did Moses warn about once Israel got comfortable in the land?", o: ["Forgetting God when life is good", "Running out of food and water", "Becoming too humble to lead", "Making their houses too small"], why: "When life is easy, it's tempting to think you did it all yourself (8:17). Remember God." },
    { r: 2, ref: "Deuteronomy 30:19–20", ch: [30], q: "What choice did Moses set in front of the people?", o: ["Life and blessing, or death and curse", "Staying in the desert or going back to Egypt", "Following Moses or following Joshua", "Going to war or making peace treaties"], why: "“Now choose life” (30:19). Loving and listening to God is life itself." },
    { r: 2, ref: "Deuteronomy 31:6, 8", ch: [31], q: "What promise did Moses give Joshua and the people as they faced their enemies?", o: ["God will never leave you nor forsake you", "You will never lose a battle", "Moses will come back to help", "The walls will fall without a fight"], why: "“The Lord himself goes before you and will be with you; he will never leave you nor forsake you” (31:8)." },
    { r: 3, ref: "Deuteronomy 6:5 · Mark 12:29–30", ch: [6], look: ["Mark 12:28–30"], q: "When asked for the greatest commandment, Jesus quoted Deuteronomy. Which verse?", o: ["Love the Lord your God with all your heart, soul and strength", "Do not murder, and do not even hate your brother", "Honor your father and your mother all your life", "Remember the Sabbath day by keeping it holy"], why: "Jesus called loving God with everything you have the first and greatest commandment." },
    { r: 3, ref: "Deuteronomy 18:15 · Acts 3:22", ch: [18], look: ["Acts 3:20–22"], q: "Moses promised God would raise up “a prophet like me.” Who did Peter say that prophet was?", o: ["Jesus", "Joshua", "Elijah", "John the Baptist"], why: "Peter preached that Jesus is the prophet Moses was talking about (Acts 3:22)." },
    { r: 3, ref: "Deuteronomy 8:3 · Matthew 4:4", ch: [6, 8], look: ["Matthew 4:1–10"], q: "When Satan tempted Jesus in the desert, which book did all three of Jesus' answers come from?", o: ["Deuteronomy", "Psalms", "Isaiah", "Genesis"], why: "Jesus answered each temptation with Deuteronomy (8:3; 6:16; 6:13). He stayed faithful in the wilderness where Israel had failed." }
  ],
  words: [
    ["Deuteronomy", "the title", "Greek for “second law.” It's God's law given again to a new generation."],
    ["Shema", "Deuteronomy 6:4", "Hebrew for “Hear.” The first word of Israel's most important prayer."],
    ["Covenant", "Deuteronomy 29:1", "God's binding agreement with Israel: He is their God, they are His people."],
    ["Forsake", "Deuteronomy 31:6", "To leave or abandon. God promises He never will."],
    ["Inheritance", "Deuteronomy 4:21", "A gift you receive to keep. For Israel, it was the land."]
  ],
  under: [
    ["Deuteronomy 6:5", "Love Him with all your heart.", "God doesn't want part of you. He wants your whole heart, soul and strength.", "Ask which part you hold back most: heart, soul or strength. Give that part to God today."],
    ["Deuteronomy 8:3", "Not by bread alone.", "You need God's word as much as you need food.", "Before you eat breakfast this week, read one verse first."],
    ["Deuteronomy 30:19", "Now choose life.", "Every day you choose which way to walk. God tells you which way is life.", "Name one choice you're facing and ask: which option is choosing life?"],
    ["Deuteronomy 31:8", "He will never leave you.", "Whatever you walk into, God is already there ahead of you.", "Text this verse to someone who's facing something scary."]
  ],
  reflect: ["Moses warned that comfort can make people forget God (Deuteronomy 8:10–14). When life is going well, what helps you remember Him?", "Deuteronomy 8:10–18"],
  close: "Love God with everything you have (6:5). Thank Him for every good thing He's given you, so you don't forget (8:10). And trust Him with what's ahead. He goes before you and won't leave you (31:8)."
});
