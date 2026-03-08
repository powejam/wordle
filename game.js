"use strict";

// ── Word Lists ──
const SOLUTIONS = [
  "abase","abate","abbey","abbot","abhor","abide","abuse","abyss","acids","acorn",
  "acrid","acute","adage","adapt","adept","admin","admit","adopt","adore","adorn",
  "adult","aegis","afire","after","again","agent","agile","aging","aglow","agony",
  "agree","ahead","aisle","alarm","album","alert","algae","alibi","alien","align",
  "alike","alive","allay","allot","allow","alloy","aloft","alone","along","aloof",
  "alpha","altar","alter","amass","amaze","amber","amble","amend","amine","amino",
  "amiss","among","ample","amuse","angel","anger","angle","angry","angst","anime",
  "ankle","annex","antic","anvil","aorta","apart","aphid","apple","apply","apron",
  "arbor","ardor","arena","argue","arise","armor","aroma","arose","array","arrow",
  "arson","atlas","atone","attic","audio","audit","augur","aunty","avian","avoid",
  "await","awake","award","aware","awful","axial","axiom","azure","bacon","badge",
  "badly","bagel","baggy","baker","balmy","banal","banjo","barge","baron","basic",
  "basil","basin","basis","batch","baton","beard","beast","began","begin","being",
  "below","bench","berry","bible","birch","birth","black","blade","blame","bland",
  "blank","blare","blast","blaze","bleak","bleat","bleed","blend","bless","blimp",
  "blind","bliss","blitz","bloat","block","bloke","blond","blood","bloom","blown",
  "blues","bluff","blunt","blurt","blush","board","boast","bonus","boost","booth",
  "booze","botch","bound","bough","brain","brake","brand","brash","brass","brave",
  "brawl","bread","break","breed","brick","bride","brief","brine","bring","brink",
  "brisk","broad","broil","broke","brood","brook","broth","brown","brush","brute",
  "buddy","budge","buggy","build","bulge","bulky","bully","bunch","bunny","burst",
  "buyer","cabin","cable","camel","candy","canoe","caper","cargo","carol","carry",
  "carve","catch","cater","cause","cease","cedar","chain","chair","chalk","champ",
  "chant","chaos","charm","chart","chase","cheap","cheat","check","cheek","cheer",
  "chess","chest","chick","chief","child","chill","china","chirp","choir","chord",
  "chose","chunk","churn","cider","cigar","cinch","circa","civic","civil","claim",
  "clamp","clang","clash","clasp","class","clean","clear","clerk","click","cliff",
  "climb","cling","cloak","clock","clone","close","cloth","cloud","clout","clown",
  "clubs","cluck","clump","clung","coach","coast","cobra","cocoa","coils","comet",
  "comic","comma","conch","coral","corps","couch","could","count","coupe","court",
  "cover","covet","crack","craft","cramp","crane","crash","crate","crave","crawl",
  "craze","crazy","creak","cream","creek","creep","crest","crime","crisp","cross",
  "crowd","crown","crude","cruel","crush","crust","cubic","curry","curse","curve",
  "cycle","cynic","daddy","daily","dairy","daisy","dance","dated","datum","death",
  "debit","debug","debut","decal","decay","decor","decoy","decry","defer","deity",
  "delay","delta","delve","demon","denim","dense","depot","depth","derby","deter",
  "detox","deuce","devil","diary","digit","dimly","diner","dirty","disco","ditch",
  "ditto","dizzy","dodge","doing","donor","donut","doubt","dough","dowdy","draft",
  "drain","drake","drama","drank","drape","drawl","drawn","dread","dream","dress",
  "dried","drift","drill","drink","drive","droit","droll","drone","drool","droop",
  "dross","drove","drown","drugs","drums","drunk","dryer","dryly","dummy","dunce",
  "dusty","dwarf","dwell","dying","eager","eagle","early","earth","easel","eaten",
  "eater","ebony","edict","eight","elder","elect","elfin","elite","elope","elude",
  "email","ember","emery","empty","enact","endow","enemy","enjoy","ennui","ensue",
  "enter","entry","envoy","epoch","equal","equip","erase","erode","error","erupt",
  "essay","ether","ethic","evade","event","every","evict","exact","exalt","excel",
  "exert","exile","exist","expat","expel","extra","exude","exult","fable","facet",
  "faith","false","fancy","farce","fatal","fatty","fault","fauna","feast","fence",
  "ferry","fetch","fever","fiber","fibre","field","fiend","fifty","fight","filth",
  "final","finch","first","fixed","fizzy","fjord","flame","flank","flare","flash",
  "flask","fleet","flesh","flick","fling","flint","float","flock","flood","floor",
  "flora","flour","flout","fluid","fluke","flung","flunk","flush","flute","focal",
  "focus","foggy","folly","force","forge","forgo","forte","forth","forty","forum",
  "found","foyer","frail","frame","frank","fraud","freak","freed","fresh","friar",
  "fried","front","frost","froze","fruit","fully","fungi","funky","funny","furry",
  "fussy","fuzzy","gaily","gamma","gauge","gaunt","gauze","gavel","gazer","geeky",
  "genre","ghost","giant","giddy","girth","given","gland","glare","glass","glaze",
  "gleam","glean","glide","glint","gloat","globe","gloom","glory","gloss","glove",
  "going","goose","gorge","gouge","gourd","grace","grade","graft","grail","grain",
  "grand","grant","grape","graph","grasp","grass","grate","grave","gravy","great",
  "greed","green","greet","grief","grill","grind","gripe","groan","groom","grope",
  "gross","group","grout","grove","growl","grown","gruel","gruff","guard","guava",
  "guess","guest","guide","guild","guilt","guise","gulch","gully","gumbo","gummy",
  "gusto","gusty","habit","hairy","halve","handy","happy","hardy","haste","hasty",
  "hatch","haunt","haven","hazel","heady","heart","heath","heave","heavy","hedge",
  "hefty","heist","helix","hello","hence","herbs","heron","hilly","hinge","hippo",
  "hitch","hoard","hobby","homer","honey","honor","horse","hotel","hound","house",
  "hover","human","humid","humor","hurry","hyena","hyper","ideal","idiom","idiot",
  "image","imbue","impel","imply","inane","index","inept","inert","infer","ingot",
  "inner","input","inter","intro","ionic","irate","ivory","jaunt","jazzy","jelly",
  "jewel","jiffy","joker","jolly","joust","judge","juice","juicy","jumbo","jumpy",
  "juror","karma","kayak","kebab","kinky","kiosk","knack","knead","kneel","knelt",
  "knife","knock","knoll","known","koala","kudos","label","labor","lance","lanky",
  "large","larva","laser","latch","later","lathe","latte","laugh","layer","leach",
  "leafy","leaky","leapt","learn","lease","leash","least","ledge","leech","legal",
  "lemon","lemur","level","lever","light","lilac","limbo","linen","liner","lingo",
  "liver","llama","lobby","local","lofty","logic","loose","lorry","loser","lousy",
  "lover","lower","loyal","lucid","lucky","lumen","lunar","lunch","lunge","lusty",
  "lying","lyric","macro","mafia","magic","major","maker","manga","mango","manly",
  "manor","maple","march","marry","marsh","masks","match","maxim","maybe","mayor",
  "mealy","media","medic","melee","melon","mercy","merit","merry","metal","meter",
  "midst","might","mimic","mince","minor","minus","mirth","miser","misty","model",
  "modem","mogul","moist","molar","money","month","moody","moose","moral","morph",
  "mossy","motel","motif","motor","motto","mound","mount","mourn","mouse","mouth",
  "mover","movie","muddy","mulch","mummy","mural","murky","mushy","music","musty",
  "muted","nadir","naive","nanny","nasal","nasty","naval","nerve","never","newly",
  "nexus","night","ninja","noble","nobly","noise","noisy","north","notch","noted",
  "novel","nudge","nurse","nutty","nylon","oasis","occur","ocean","offer","often",
  "olive","omega","onset","opera","optic","orbit","order","organ","other","otter",
  "ought","outer","owner","oxide","ozone","paddy","pagan","paint","panic","panel",
  "paper","parse","party","pasta","paste","patch","patio","pause","peace","peach",
  "pearl","pecan","pedal","penny","perch","peril","perky","pesky","petal","petty",
  "phase","phone","photo","piano","piece","pilot","pinch","pixel","pixie","pizza",
  "place","plaid","plain","plane","plank","plant","plate","plaza","plead","pleat",
  "plied","plier","pluck","plumb","plume","plump","plunk","poach","point","poise",
  "poker","polar","polyp","pooch","poppy","porch","poser","posit","posse","pouch",
  "pound","power","prank","prawn","press","price","pride","prime","print","prior",
  "prism","privy","prize","probe","prone","proof","prose","proud","prove","prowl",
  "proxy","prude","prune","psalm","pudgy","pulse","punch","pupil","puppy","purge",
  "purse","pushy","putty","pygmy","quack","quake","qualm","query","quest","queue",
  "quick","quiet","quill","quirk","quota","quote","rabbi","rabid","radar","radio",
  "rainy","raise","rally","ranch","range","rapid","raven","reach","ready","realm",
  "rebel","recut","refer","reign","relax","relay","relic","remit","renew","repay",
  "repel","reply","resin","retro","retry","reuse","revel","rider","ridge","rifle",
  "rigid","rigor","rinse","risen","risky","rivet","roast","robin","robot","rocky",
  "rogue","roomy","roots","rouge","rough","round","route","rover","royal","rugby",
  "ruler","rumba","rural","rusty","sadly","saint","salad","salty","salve","salvo",
  "sandy","sassy","sauce","saucy","sauna","savor","savvy","scale","scalp","scald",
  "scamp","scant","scare","scarf","scary","scene","scent","scone","scope","score",
  "scout","scowl","scram","scrap","scree","screw","scrub","seams","sedan","serve",
  "setup","seven","shade","shaft","shale","shall","shame","shape","share","shark",
  "sharp","shawl","shear","sheen","sheep","sheer","sheet","shelf","shell","shift",
  "shine","shiny","shire","shirt","shock","shore","short","shout","shove","shown",
  "shrub","shrug","sight","sigma","silly","since","siren","sissy","sixth","sixty",
  "skate","skill","skimp","skull","skunk","slash","slate","sleek","sleep","sleet",
  "slept","slice","slide","slime","slimy","sling","slink","slope","sloth","slump",
  "slung","slurp","smack","small","smart","smash","smear","smell","smelt","smile",
  "smirk","smith","smoke","snack","snafu","snail","snake","snare","snarl","sneak",
  "sneer","snide","sniff","snoop","snore","snort","snout","solar","solid","solve",
  "sonic","sorry","south","space","spade","spare","spark","spasm","spawn","speak",
  "spear","speck","speed","spell","spend","spent","spice","spicy","spied","spike",
  "spill","spine","spoke","spoof","spook","spool","spoon","sport","spout","spray",
  "spree","sprig","spunk","squad","squat","squid","staff","stage","stain","stair",
  "stake","stale","stalk","stall","stamp","stand","stank","stark","start","stash",
  "state","stave","stays","steak","steal","steam","steel","steep","steer","stern",
  "stick","stiff","still","sting","stink","stint","stock","stoic","stoke","stole",
  "stomp","stone","stood","stool","stoop","store","stork","storm","story","stout",
  "stove","strap","straw","stray","strip","stuck","study","stuff","stump","stung",
  "stunk","stunt","style","sugar","suite","sulky","sunny","super","surge","sushi",
  "swamp","swarm","swath","swear","sweat","sweep","sweet","swept","swift","swill",
  "swine","swing","swipe","swirl","swoon","swoop","sword","swore","sworn","swung",
  "synod","syrup","tabby","table","tacit","taffy","taint","taken","tally","talon",
  "tango","tapir","tardy","taste","tasty","taunt","tawny","teach","teeth","tempo",
  "tenet","tenor","tense","tenth","tepid","thank","theft","their","theme","there",
  "thick","thief","thigh","thing","think","third","thorn","those","three","threw",
  "throw","thumb","thump","tiara","tidal","tiger","tight","timer","timid","tipsy",
  "titan","title","toast","today","token","tonic","topaz","topic","torch","total",
  "totem","touch","tough","towel","tower","toxic","trace","track","trade","trail",
  "train","trait","tramp","trash","trawl","tread","treat","trend","trial","tribe",
  "trick","tried","trill","tripe","trite","troll","troop","troth","trout","truce",
  "truck","truly","trump","trunk","trust","truth","tuber","tulip","tumor","tuner",
  "tunic","turbo","tutor","twang","tweak","tweed","tweet","twice","twine","twist",
  "tying","udder","ulcer","ultra","umbra","uncle","uncut","under","undue","unfit",
  "union","unite","unity","unlit","unmet","until","upper","upset","urban","usage",
  "usher","using","usual","utter","vague","valid","valor","value","valve","vapor",
  "vault","vaunt","vegan","venue","verge","verse","vigor","villa","vinyl","viola",
  "viper","viral","visor","visit","vista","vital","vivid","vocal","vodka","vogue",
  "voice","voter","vouch","vowel","wafer","wager","wages","wagon","waist","watch",
  "water","weary","weave","wedge","weedy","weigh","weird","whale","wheat","wheel",
  "where","which","while","whiff","whine","whirl","whisk","white","whole","whose",
  "widen","wider","widow","width","wield","windy","witch","wispy","woman","world",
  "worry","worse","worst","worth","would","wound","wrack","wrath","wreak","wreck",
  "wrest","wring","wrist","write","wrong","wrote","yacht","yearn","yield","young",
  "youth","zebra","zesty","zippy"
];

const EXTRA_VALID = new Set([
  "aahed","aalii","abaca","abaci","aback","abaft","abash","abaya","abele","abler",
  "abode","abort","about","above","abuts","acerb","acmes","acned","acnes","acred",
  "acres","acted","adder","added","aided","aider","aimed","aimer","aired","agape",
  "agate","agios","agist","aglet","agley","agone","afoot","alley","alloy","aloes",
  "altos","amice","amide","amity","amour","amply","anise","annoy","areas","aside",
  "asked","asset","backs","bands","banks","based","beads","beans","beats","bikes",
  "bills","birds","boats","bolts","bombs","bonds","bones","books","boots","boxes",
  "built","bulls","bumps","burns","buses","bytes","camps","cards","cases","caves",
  "cells","chips","cited","clips","clues","coded","codes","coins","cooks","cores",
  "costs","crews","cubic","cups","dated","deals","debts","decks","deeds","demos",
  "desks","discs","docks","doors","doses","downs","draws","drops","ducks","dumps",
  "dusts","dutch","edges","elbow","ended","essay","exits","faces","facts","fails",
  "falls","farms","fates","fears","feeds","feels","films","finds","firms","flags",
  "flats","flies","flows","folks","foods","fools","forms","forts","fouls","foxes",
  "freed","fries","frogs","fuels","funds","gains","games","gangs","gates","gears",
  "genes","gifts","girls","gives","goals","grabs","grips","grows","guess","gulps",
  "hands","hangs","heals","heaps","hears","heats","helps","herbs","herds","highs",
  "hikes","hills","hints","holds","holes","homes","hooks","hopes","horns","hosts",
  "hours","hunts","icons","ideas","inks","items","jails","jeans","jokes","jumps",
  "keeps","kicks","kills","kinds","kings","kites","knees","knobs","knots","lakes",
  "lamps","lands","lanes","lasts","lawns","leads","leaks","lifts","limbs","lined",
  "lines","links","lions","lists","lives","loads","loans","locks","looks","loops",
  "lords","loses","loves","lungs","mails","makes","males","marks","meals","means",
  "meets","miles","mills","minds","mines","modes","moles","monks","moods","moons",
  "moves","nails","names","necks","needs","nests","nodes","norms","noses","notes",
  "oaths","oaken","occur","opens","opted","ounce","owned","packs","pages","pairs",
  "palms","panes","pans","parks","parts","paths","paved","peaks","peers","picks",
  "piles","pills","pines","pipes","pits","plans","plays","pleas","plots","plugs",
  "poets","polls","ponds","pools","popes","pores","ports","posed","posts","pulls",
  "pumps","races","racks","raids","rails","rains","ranks","rates","reads","reefs",
  "reign","rests","rides","rings","rises","risks","roads","robes","rocks","roles",
  "rolls","rooms","ropes","roses","rows","ruins","rules","runes","rungs","sacks",
  "sales","salts","sands","saves","scale","scams","seals","seats","seeds","seeks",
  "seems","sends","sided","sides","sinks","sites","sizes","slabs","slams","slaps",
  "sleds","slips","slots","snaps","soils","songs","sorts","souls","spans","spare",
  "specs","spend","spies","spots","stays","stems","steps","stirs","stops","strip",
  "suits","swaps","tails","takes","tales","talks","tanks","tapes","tasks","teams",
  "tears","tends","terms","tests","texts","tides","tiles","times","tires","tones",
  "tools","tours","towns","traps","trays","trees","trips","tubes","tunes","turns",
  "twins","typed","types","units","urged","users","vanes","veils","veins","vents",
  "views","vines","visits","votes","wages","waits","walks","walls","wards","warns",
  "wasps","waste","watts","waves","weeds","wells","whips","wills","winds","wines",
  "wings","wires","wisps","witty","wives","wolfs","woods","words","works","worms",
  "wraps","yards","yells","zeros","zones"
]);

const ALL_VALID = new Set([...SOLUTIONS, ...EXTRA_VALID]);

// ── Game State ──
let target, currentRow, currentCol, gameOver, board;

function getStats() {
  try {
    const raw = localStorage.getItem("wordle-stats");
    if (!raw) return { played: 0, won: 0, streak: 0, maxStreak: 0, dist: [0,0,0,0,0,0] };
    const s = JSON.parse(raw);
    // Validate shape to avoid corrupted data
    if (typeof s.played !== "number" || !Array.isArray(s.dist) || s.dist.length !== 6) {
      return { played: 0, won: 0, streak: 0, maxStreak: 0, dist: [0,0,0,0,0,0] };
    }
    return s;
  } catch {
    return { played: 0, won: 0, streak: 0, maxStreak: 0, dist: [0,0,0,0,0,0] };
  }
}

function saveStats(s) {
  try { localStorage.setItem("wordle-stats", JSON.stringify(s)); } catch {}
}

// ── Build Board ──
const boardEl = document.getElementById("board");
function createBoard() {
  boardEl.innerHTML = "";
  board = [];
  for (let r = 0; r < 6; r++) {
    board[r] = [];
    for (let c = 0; c < 5; c++) {
      const tile = document.createElement("div");
      tile.className = "tile";
      boardEl.appendChild(tile);
      board[r][c] = tile;
    }
  }
}

// ── Build Keyboard ──
const kbLayout = [
  ["q","w","e","r","t","y","u","i","o","p"],
  ["a","s","d","f","g","h","j","k","l"],
  ["Enter","z","x","c","v","b","n","m","⌫"]
];

const keyState = {};
const kbEl = document.getElementById("keyboard");

function createKeyboard() {
  kbEl.innerHTML = "";
  for (const row of kbLayout) {
    const rowEl = document.createElement("div");
    rowEl.className = "kb-row";
    for (const k of row) {
      const btn = document.createElement("button");
      btn.className = "key" + (k.length > 1 ? " wide" : "");
      btn.textContent = k;
      btn.dataset.key = k;
      btn.addEventListener("click", () => handleKey(k));
      rowEl.appendChild(btn);
    }
    kbEl.appendChild(rowEl);
  }
}

function updateKeyboard(letter, state) {
  const priority = { correct: 3, present: 2, absent: 1 };
  const cur = keyState[letter];
  if (!cur || priority[state] > (priority[cur] || 0)) {
    keyState[letter] = state;
    const btn = kbEl.querySelector('[data-key="' + letter + '"]');
    if (btn) btn.className = "key " + state;
  }
}

// ── Toast ──
function showToast(msg, duration) {
  duration = duration || 1500;
  const container = document.getElementById("toast-container");
  const t = document.createElement("div");
  t.className = "toast";
  t.textContent = msg;
  container.appendChild(t);
  setTimeout(function() {
    t.style.opacity = "0";
    t.style.transition = "opacity 0.3s";
  }, duration - 300);
  setTimeout(function() { t.remove(); }, duration);
}

// ── Evaluate Guess (correct duplicate-letter handling) ──
function evaluate(guess, answer) {
  const result = Array(5).fill("absent");
  const ansArr = answer.split("");
  const gArr = guess.split("");

  // Pass 1: exact matches
  for (let i = 0; i < 5; i++) {
    if (gArr[i] === ansArr[i]) {
      result[i] = "correct";
      ansArr[i] = null;
      gArr[i] = null;
    }
  }
  // Pass 2: right letter, wrong position
  for (let i = 0; i < 5; i++) {
    if (gArr[i] === null) continue;
    const idx = ansArr.indexOf(gArr[i]);
    if (idx !== -1) {
      result[i] = "present";
      ansArr[idx] = null;
    }
  }
  return result;
}

// ── Reveal Row Animation ──
function revealRow(row, results, callback) {
  const guess = [];
  for (let c = 0; c < 5; c++) guess.push(board[row][c].textContent);

  for (let c = 0; c < 5; c++) {
    const tile = board[row][c];
    tile.classList.add(results[c], "reveal");
    tile.style.animationDelay = (c * 0.28) + "s";
  }

  setTimeout(function() {
    for (let c = 0; c < 5; c++) updateKeyboard(guess[c], results[c]);
    if (callback) callback();
  }, 5 * 280 + 300);
}

function winDance(row) {
  for (let c = 0; c < 5; c++) {
    board[row][c].classList.add("dance");
    board[row][c].style.animationDelay = (c * 0.1) + "s";
  }
}

// ── Input Handler ──
function handleKey(key) {
  if (gameOver) return;

  if (key === "⌫" || key === "Backspace") {
    if (currentCol > 0) {
      currentCol--;
      board[currentRow][currentCol].textContent = "";
      board[currentRow][currentCol].classList.remove("filled");
    }
    return;
  }

  if (key === "Enter") {
    if (currentCol < 5) {
      shakeRow(currentRow);
      showToast("Not enough letters");
      return;
    }

    let guess = "";
    for (let c = 0; c < 5; c++) guess += board[currentRow][c].textContent;

    if (!ALL_VALID.has(guess)) {
      shakeRow(currentRow);
      showToast("Not in word list");
      return;
    }

    const results = evaluate(guess, target);
    const row = currentRow;

    revealRow(row, results, function() {
      if (guess === target) {
        gameOver = true;
        winDance(row);
        var msgs = ["Genius","Magnificent","Impressive","Splendid","Nice","Phew"];
        showToast(msgs[row] || "Nice", 2000);
        var s = getStats();
        s.played++; s.won++; s.streak++;
        s.maxStreak = Math.max(s.maxStreak, s.streak);
        s.dist[row]++;
        saveStats(s);
        setTimeout(function() { showStatsModal(row); }, 2200);
      } else if (row === 5) {
        gameOver = true;
        showToast(target.toUpperCase(), 3000);
        var s = getStats();
        s.played++; s.streak = 0;
        saveStats(s);
        setTimeout(function() { showStatsModal(-1); }, 2200);
      }
    });

    currentRow++;
    currentCol = 0;
    return;
  }

  // Letter
  if (currentCol < 5 && /^[a-z]$/i.test(key)) {
    board[currentRow][currentCol].textContent = key.toLowerCase();
    board[currentRow][currentCol].classList.add("filled");
    currentCol++;
  }
}

function shakeRow(row) {
  for (let c = 0; c < 5; c++) board[row][c].classList.add("shake");
  setTimeout(function() {
    for (let c = 0; c < 5; c++) board[row][c].classList.remove("shake");
  }, 500);
}

// ── Physical Keyboard ──
document.addEventListener("keydown", function(e) {
  if (e.ctrlKey || e.metaKey || e.altKey) return;
  if (e.key === "Enter") handleKey("Enter");
  else if (e.key === "Backspace") handleKey("Backspace");
  else if (/^[a-zA-Z]$/.test(e.key)) handleKey(e.key);
});

// ── Stats Modal ──
function showStatsModal(lastGuess) {
  var s = getStats();
  var pct = s.played ? Math.round(s.won / s.played * 100) : 0;

  document.getElementById("statGrid").innerHTML =
    '<div class="stat-box"><div class="num">' + s.played + '</div><div class="label">Played</div></div>' +
    '<div class="stat-box"><div class="num">' + pct + '</div><div class="label">Win %</div></div>' +
    '<div class="stat-box"><div class="num">' + s.streak + '</div><div class="label">Streak</div></div>' +
    '<div class="stat-box"><div class="num">' + s.maxStreak + '</div><div class="label">Max</div></div>';

  var maxDist = Math.max.apply(null, s.dist.concat([1]));
  var html = "";
  for (var i = 0; i < 6; i++) {
    var w = Math.max(8, (s.dist[i] / maxDist) * 100);
    var hl = (i === lastGuess) ? " highlight" : "";
    html += '<div class="bar-row"><span class="guess-num">' + (i+1) +
      '</span><div class="bar' + hl + '" style="width:' + w + '%">' +
      s.dist[i] + '</div></div>';
  }
  document.getElementById("barChart").innerHTML = html;
  document.getElementById("statsModal").classList.add("open");
}

// ── Modal Events ──
document.getElementById("btnHelp").addEventListener("click", function() {
  document.getElementById("helpModal").classList.add("open");
});
document.getElementById("btnStats").addEventListener("click", function() {
  showStatsModal(-1);
});

document.querySelectorAll(".modal-overlay").forEach(function(overlay) {
  overlay.addEventListener("click", function(e) {
    if (e.target === overlay) overlay.classList.remove("open");
  });
});
document.querySelectorAll("[data-close]").forEach(function(btn) {
  btn.addEventListener("click", function() {
    document.getElementById(btn.dataset.close).classList.remove("open");
  });
});

document.getElementById("btnNewGame").addEventListener("click", function() {
  document.getElementById("statsModal").classList.remove("open");
  newGame();
});

// ── New Game ──
function newGame() {
  // Use crypto.getRandomValues for unbiased random word selection
  var arr = new Uint32Array(1);
  crypto.getRandomValues(arr);
  target = SOLUTIONS[arr[0] % SOLUTIONS.length];
  currentRow = 0;
  currentCol = 0;
  gameOver = false;
  Object.keys(keyState).forEach(function(k) { delete keyState[k]; });
  createBoard();
  createKeyboard();
}

newGame();

// ── Service Worker Registration ──
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").catch(function() {});
}
