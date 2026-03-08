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
  "basil","basin","basis","batch","baton","beach","beard","beast","began","begin","being",
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

// ── Additional UK English Words ──
const UK_WORDS = [
  // A
  "ached","aches","acorn","acred","acres","acton","adeem","aeons","aerie","agora",
  "aioli","amigo","ankhs","ariel","arles","armet","aroid","arpen","arris","ascot",
  "ashen","askew","aspen","aspic","assay","aster","astir","atilt","atoll","abysm",
  "abaft","abamp","abash","abeam","aboon","achoo","acmes","adman","admen","afoul",
  "afrit","agene","agism","aglow","agosy","agued","agues","ahead","ahull","aided",
  "aimer","ainee","aired","airth","airts","aitch","akela","akene","alack","alamo",
  "alane","alang","alans","alate","alder","alecs","aleph","alfas","algid","algin",
  "algor","algum","allay","alods","aloed","aloes","aloof","alure","alway","ambit",
  "amice","amide","amiss","amity","amour","amuse","ankus","annoy","apian","aport",
  "arced","arcus","ardeb","areic","arête","argal","argan","argot","argus","ariel",
  "ariot","arked","armed","arvos","ashet","askew","aspen","assay","astir","attic",
  "audio","augur","avgas","avion","avise","aviso","awash","awing","awned","awner",
  // B
  "babul","baccy","baffy","bairn","baize","baled","baler","balks","balky","balls",
  "banes","bangs","bants","barmy","barre","barry","baulk","bawds","bawdy","bayed",
  "beamy","beefy","beery","befit","begot","bemix","bents","berne","beton","bevvy",
  "biddy","bigot","bilge","biped","biros","blain","blest","blimp","bloat","bolus",
  "bonny","bonze","bothy","bousy","braid","brank","brash","brawl","breve","brill",
  "briny","brose","bruin","bruit","brume","bunce","bunds","bursa","busby","butch",
  "butty","buxom","bylaw","bachs","backs","baddy","badly","baggy","baith","baler",
  "banes","barbs","bards","bares","barns","barny","basto","batch","batty","bauds",
  "bauks","baulk","bawdy","bayed","beady","beaks","beams","beamy","beano","beaus",
  "bedew","bedim","befog","begot","beige","beigy","belch","belle","bells","belly",
  "besom","betas","betel","bevvy","biddy","birle","biros","bitey","bitsy","bitty",
  "bizes","blabs","blads","blaes","blaff","blags","blahs","blain","blams","blare",
  "blart","blase","blash","blasm","blats","blawn","blaws","blaze","blobs","blogs",
  "blots","blowy","blubs","bluey","blunk","blype","boabs","boaks","bobak","bocce",
  "bocce","bochy","boded","bodge","boggy","bohea","bolus","bonce","boney","bongo",
  "bonne","bonny","booby","boody","boors","booze","borak","borde","bored","borts",
  "bossy","botch","botty","bousy","boyar","brack","braid","brank","brash","braxy",
  "braze","breve","brews","brill","brins","brios","brose","broth","brows","brugh",
  "brume","bruny","bucks","budge","buffs","buffy","bulge","bulgy","bully","bumph",
  "bunco","bunns","bunts","burbs","burls","burly","burns","burps","burro","burrs",
  "bursa","bushy","busky","butch","butts","butty","byway",
  // C
  "cabal","caber","cabby","cadge","cadgy","caeca","cagey","calix","calyx","cameo",
  "canny","canty","carat","carby","caret","caulk","cavel","cavil","cedis","ceils",
  "cepes","cered","cetes","chafe","chaff","chaps","chary","chasm","cheep","chuck",
  "chuff","chump","churl","chute","cilia","cirri","civvy","clack","clamp","clang",
  "clank","cleat","cleek","cleft","clink","cluck","cobby","cocks","cocky","codex",
  "codon","coign","combo","comby","coney","copse","corby","cords","corks","corky",
  "corns","corny","coude","couth","covey","crake","crimp","croak","croci","croft",
  "cronk","croon","croup","cruse","crypt","cubby","cubit","curly","cushy","cyano",
  "caffs","cagey","cakey","calfs","calmy","camis","canna","capot","carap","cardy",
  "carks","carle","carls","carob","carve","casky","cauld","cauld","caulk","caums",
  "caups","cawed","ceaze","cebid","ceils","cento","cerci","ceria","ceric","certs",
  "chack","chado","chads","chaff","chais","chalk","champ","chant","chape","chard",
  "chark","charm","chars","chary","chase","chats","chaws","chays","cheat","check",
  "cheek","chela","cheth","chich","chiel","chiff","chile","chimp","chips","chiru",
  "chits","chive","chivy","chomp","choof","chook","choky","chops","chord","chore",
  "chose","clach","clads","claes","clags","clame","clams","clans","claps","clary",
  "clave","claws","clays","cleck","clegs","clepe","clept","clews","climb","cline",
  "clour","clous","clows","cloys","clubs","clued","clues","coaly","coarb","cobby",
  "coble","cocks","cocky","coifs","coirs","coits","coked","coles","coley","colly",
  "colts","comae","combe","combs","comes","conks","conte","coped","coper","copes",
  "copse","coram","corbe","cords","corey","corgi","corns","corps","corse","cosec",
  "coset","costa","coude","coups","coved","coves","covin","craal","crams","crare",
  "crays","crazy","crear","crees","creme","crepe","creps","crest","crewel","cribs",
  "crick","cripe","crise","crisp","crith","croak","cromb","crore","croup","crout",
  "croys","crumb","crura","cruds","cruse","crush","cruve","cubeb","cubed","cubes",
  "cuddy","culls","culpa","culti","cumin","cunts","cuppa","curds","curly","curry",
  "cusps","cushy","cutch","cutey","cwrth",
  // D
  "daffy","dagga","daggy","dahls","daman","damps","darns","dashi","daunt","dawdy",
  "deary","dicky","diddy","dippy","ditzy","divvy","dobby","doggy","doily","doles",
  "dolly","domed","donee","dotty","dowry","draff","drave","drest","drily","droit",
  "droll","dryer","ducky","dunno","duvet","dwelt","daces","daffy","dagga","dalek",
  "damps","darby","darre","darns","dashi","dashy","datal","datum","dauds","dauks",
  "dauts","daven","davit","dawds","dawdy","dawns","dawts","deash","decaf","deeds",
  "deely","deeve","deify","deism","deist","deity","dekko","delhi","demic","demob",
  "demos","denby","deoxy","depot","deray","derby","derny","desse","deuce","devil",
  "devon","devot","dewan","dhows","dicky","diddy","dilli","dimly","dioch","dipso",
  "diram","disco","dishy","disme","dital","ditas","ditto","ditty","dixit","dobby",
  "doggo","doggy","doily","doits","dolce","dolma","donsy","dooce","doozy","dopey",
  "dorts","dotty","doucs","dowie","dowly","dowse","drack","draff","drags","drams",
  "drave","drawl","droit","droll","drool","dropt","drove","drubs","drusy","dryer",
  "duads","ducky","duddy","dulse","dumbs","dumky","dumpy","dunno","dunts","duped",
  "dupes","durns","durrs","durry","dusky","dusty","dvandva","dwaum","dwile","dwine",
  // E
  "eagre","earns","earst","earthy","easel","eaved","ebon","ebons","edger","edgey",
  "eerie","egad","egged","egger","eight","eina","elfin","elmy","embar","embay",
  "embow","embus","emcee","emeer","emend","emery","emmet","emote","emyde","enema",
  "enorm","enure","envoi","eosin","epact","epopt","ergon","estop","etape","ethos",
  "etude","euros","evoke","exact","exeat","expat","extol",
  // F
  "faery","faffs","fanny","faugh","faves","fawns","fecal","feign","feint","fells",
  "felts","femur","fenny","feral","feted","fetid","filch","fishy","flack","flair",
  "flank","flaps","flays","fleck","fleys","flick","flips","floes","flogs","flong",
  "flops","floss","flows","fluff","flume","foamy","foxed","frump","furze","fibre",
  "facto","fadge","faery","fagot","faine","fains","fakey","fanga","farcy","fards",
  "fared","farse","fasci","fasts","fatwa","faugh","favel","faver","fawny","fayed",
  "fayer","fayne","fayre","fecht","fecit","feint","felch","felid","felon","femes",
  "fendy","feoff","ferny","fesse","festa","fetch","fetta","feyer","fiend","fifed",
  "fifer","fifes","fifty","filar","filch","filix","fille","filly","filmi","filmy",
  "filth","fique","fired","fitch","fitly","flabs","flacky","flaff","flams","flans",
  "flaps","flare","flary","flats","flawy","flaxy","fleme","flews","flies","flint",
  "flirs","flisk","flite","flits","flobs","flocs","floe","floey","flog","flogs",
  "flong","flops","flora","floss","flots","flour","flows","flowy","flubs","flued",
  "flues","fluky","flump","flunk","flurr","fluty","fluky","flyby","foamy","fogie",
  "fogou","folky","fonly","fonte","footy","foppy","forbs","forge","forky","forme",
  "forte","fouth","frack","frags","frore","froze","frugs","frump","funks","funky",
  "furze","futon","fuzee","fytte",
  // G
  "gabby","gaily","galop","gamey","gamps","garth","gauzy","gawky","gecko","geoid",
  "ghoul","gimpy","girly","gismo","glace","glair","glaze","gleam","glean","glide",
  "glint","gloat","goats","godly","gonzo","goody","gooey","gouty","grabs","grade",
  "graff","grail","gramp","grans","graze","grebe","grimy","groan","grope","grout",
  "gypsy","ganof","garni","garth","gauds","gaumy","gauzy","gawky","geans","geist",
  "gemmy","gerne","geste","ghees","ghyll","giber","gilds","gilly","gipon","girly",
  "girts","gismo","gites","glack","glair","glam","glams","glans","glary","glazy",
  "gleed","gleek","gleet","gleis","glens","gleys","gliff","glime","glims","glisk",
  "glits","gloam","globs","glods","gloms","glops","glost","glout","glows","gloze",
  "glued","gluer","glues","gluey","glume","gluon","glute","glyco","gnash","gnawl",
  "goafs","goaty","gobby","godso","goety","goier","gonch","gonif","goody","gooey",
  "goopy","gorsy","gouty","graal","graip","grama","gramp","grans","grapy","grebe",
  "grece","grees","greps","gride","griff","grigs","griot","grips","gript","grise",
  "grist","grisy","grith","grits","grize","groan","groat","grody","groff","grogs",
  "grosz","grots","grouf","grout","grovy","grows","grubs","grued","grues","grufe",
  "grumf","grump","grunt","guaco","guans","guars","guiro","gulls","gully","gumbo",
  "gusto","gutsy","gybed","gybes","gyron","gyros","gyrus",
  // H
  "haems","hafts","halal","halms","halts","hammy","hangs","hants","hards","hasty",
  "hawed","hefty","hempy","herby","herms","hiked","hoary","hobby","hoggy","holts",
  "homey","hoppy","horny","hotly","hovel","howdy","hubby","hully","humph","husky",
  "hutch","hadal","hadj","haick","haika","haiku","haint","hajis","halfa","halfs",
  "halma","harpy","harky","haste","hawse","hayey","hazan","hazed","hazel","heame",
  "heaps","heary","heave","heazy","hedgy","heeze","heiau","helio","hells","helot",
  "hemic","henna","herbs","hexad","hilar","hilsa","himbo","hinky","hoagy","hobby",
  "hokey","holey","holly","homme","honky","hooky","hoppy","horsy","hosty","hotch",
  "howbe","huffy","hulky","hussy","hydro",
  // I
  "icier","icily","iambi","iambs","ileac","ileal","ileum","impel","imply","inane",
  "inept","infer","ingot","inner","input","inter","intro","irate","ivory","igapo",
  "igged","igloo","ikons","imago","imbar","imbed","imido","imids","imine","imino",
  "immew","immix","imped","impot","imshi","imshy","inarm","inbye","incle","indie",
  "indow","indri","inept","infix","infra","inlay","inned","irone","irons","irony",
  "isled","isles","islet","iambs","ichor",
  // J
  "jacky","jaggy","jammy","jarls","jenny","jimmy","jingo","jocky","jossy","jubas",
  "jugum","juicy","jumpy","juror","jacks","jacko","jades","jager","jakey","japer",
  "jatos","jaups","jawan","javer","jazzy","jeans","jeely","jeeze","jefes","jello",
  "jerky","jetes","jeton","jewel","jibed","jiber","jibes","jihad","jilts","jiney",
  "jingo","jived","jiver","jives","jivin","jocky","joeys","joles","jolts","jorbs",
  "joshy","jotas","joule","joust","jumby","junco","junky","jupon","jurel","jutty",
  // K
  "kanji","kebob","kecks","kelts","kemps","kerbs","kilts","knave","knobs","kopek",
  "kraal","krewe","kafir","kails","kaims","kakas","kakis","kalon","kaneh","kapow",
  "karst","karts","kasha","kauri","kaury","kavas","kayos","kazoo","keech","keels",
  "kempt","kerne","keros","khaki","khaph","khats","kibbe","kibei","kibes","kiddo",
  "kilty","kimbo","kinch","kines","kings","kiore","kirby","kirks","kissy","kluge",
  "knick","knops","knout","knowy","knubs","knurl","koala","kophs","kopje","kraken",
  "kranz","krebs","krona","krone","kudus","kuris","kurta","kvass",
  // L
  "laced","lacer","lacks","lades","lahar","laird","laked","lakin","lambs","lamed",
  "lamer","lards","largo","lathy","lawny","leges","lemed","lenis","liege","liger",
  "linky","litho","litre","livid","llano","loamy","loath","looby","loony","loppy",
  "lordy","lowly","lumps","lumpy","lunky","lupus","lusus","lacet","lacks","laich",
  "laigh","lairy","lanch","lance","lande","langs","lansa","lapje","lards","laree",
  "larns","lardy","larky","larum","lated","latex","lathy","lauan","lauds","laund",
  "layby","leady","leafy","leaky","leams","lears","leats","ledum","leers","leesy",
  "leets","lehrs","lehua","leish","leuch","leugh","liard","liber","lings","linin",
  "linky","linns","linos","lints","linty","litai","litas","litem","lithe","litho",
  "litre","livre","llano","loach","loamy","loath","lobar","loids","looby","looed",
  "loofs","looky","loopy","loped","loper","loran","lores","lorry","lowly","lubra",
  "lucre","lumpy","lunts","lurid","lushy","lusus","lyart","lyase","lycea","lyric",
  // M
  "macle","mahoe","maids","maile","maist","malts","mambo","mangy","manky","marly",
  "marvy","mated","matey","mavie","mazed","meiny","meths","middy","miffy","miffs",
  "mingy","mirky","mizen","mocha","moils","molly","monde","moony","moots","mopey",
  "mopsy","morro","mousy","moult","muddy","muggy","mulla","mulls","mules","musth",
  "muzzy","metre","meths","mawed","mawks","mawky","maxis","mayst","meads","mealy",
  "meany","mebbe","mecum","meiny","mells","melts","memer","mensh","merch","merde",
  "merls","merse","mesel","metho","metis","meuse","mewed","mewls","mezes","miasm",
  "micah","micky","midis","midwife","miffy","minae","minke","minny","mirly","mirza",
  "mitch","mitre","mizzy","mobie","mochy","mokes","moldy","momos","monde","mondo",
  "mooch","moody","mooed","moory","mooty","moped","mopey","morph","mossy","mouch",
  "moues","mousy","moult","mould","mucky","mufti","muggy","mulch","mulla","mulse",
  "mumps","munts","murex","murky","musth","muzzy",
  // N
  "naans","nabes","naeve","narky","nawab","neath","neddy","neifs","nelly","nervy",
  "newsy","nicer","niche","niffs","niffy","nimby","nippy","noddy","nonce","nonet",
  "norma","nosey","noway","nowts","nabby","narco","narky","natch","natty","nelly",
  "nembs","nervy","netty","newts","nifty","nimpy","noddy","nonny","noops","norks",
  "norns","nosey","nosey","noter","nowts","nubby","nuddy","nuffy","nutso","nutsy",
  // O
  "oakum","ochre","odeum","ohmic","oinks","okras","oldie","oomph","oracy","orate",
  "osmic","outby","outre","oaten","oaves","obese","oblak","oboes","odahs","odals",
  "offal","ogham","okays","oleos","onion","oping","opsin","opted","optic","orchid",
  "orgic","ortho","oshea","ought","outdo","outgo","outré","ouzel",
  // P
  "paean","paeon","pagod","paise","palmy","pamby","parky","parka","parle","parry",
  "parti","paseo","pawky","pecky","perdy","perms","pewit","pikey","pilau","pilus",
  "pingo","pipit","pippy","plash","plena","plook","ploot","podgy","pogey","poncy",
  "potty","pouty","pozzy","privy","proem","profs","progs","pryer","puffy","puggy",
  "pukka","pully","pursy","pacey","paddy","padle","pages","pamby","pandy","pangs",
  "pansy","pardy","pareo","parky","parol","pated","patsy","pawky","payne","paysd",
  "peaks","peaty","pecke","peins","pelfs","pelts","pends","pengo","perdy","pesky",
  "pesto","pewit","phage","phare","phial","piked","pikey","pilch","pimas","pimps",
  "pinky","pipit","pipit","pippy","pirns","pisky","piths","pithy","pixel","pixie",
  "plack","plage","plaid","plaxy","pleas","plebe","plebs","plexy","plied","plier",
  "plods","plonk","plops","plots","plowy","plumb","plume","plump","plunk","plyer",
  "poboy","podgy","pogey","poilu","pokal","polly","polts","pommy","poncy","pongy",
  "pools","poops","popsy","porky","porny","potboy","potoo","pouff","pouty","pozzy",
  "prahu","praxy","privy","proem","prone","proso","prosy","pryer","psych","ptah",
  "pubic","pubis","puffy","puggy","pugil","pukka","pully","pulpy","pumpy","punga",
  "punky","punty","pupal","pupae","pupas","pursy","pyral",
  // Q
  "quaff","quash","quiff","quins","quire","quirt","qoph","qadis","qanat",
  // R
  "raffy","raile","rakee","ramus","rangy","raphe","rasse","rathe","rawly","rebus",
  "reeky","reeve","regal","rente","repos","reran","resat","resay","resew","retag",
  "revue","riyal","roble","rodeo","rowdy","ruddy","rully","runty","rutty","rabby",
  "radge","rafts","raggy","raile","rainy","raird","rajes","rajes","rakee","rakia",
  "rakis","rammy","ramps","ranas","rands","ranee","rangi","rangy","raped","rapes",
  "raphe","rased","raser","rases","rasps","raspy","rasse","ratty","raved","raver",
  "raves","ravin","rawly","rawns","rayah","rayle","rayne","realo","reamy","reasy",
  "reave","rebit","rebop","recce","recco","recta","recto","recut","reded","redes",
  "redon","redox","reede","reedy","reeks","reely","reest","reeve","refry","regal",
  "reges","regma","Reich","reify","reink","reked","renne","repro","reran","resat",
  "resay","resin","resow","retag","reuse","revue","rewax","rewed","rewet","rewok",
  "riels","riley","ripen","risus","riyal","roach","roble","roded","rodes","rodeo",
  "roguy","rohes","romeo","romps","ronde","roost","ropey","roral","rores","roric",
  "rorid","rorty","rotte","rowdy","rowme","rowts","ruddy","rugby","ruled","rumal",
  "rumly","rummy","runer","runty","rusma","rutty","ryals","ryots",
  // S
  "scran","snoep","stoep","stoup","spoor","shorl","shiel","shote","softy","sooty",
  "soppy","staid","staig","stane","stang","steek","steil","stele","stilb","stimy",
  "stirk","stoae","stoep","stoln","stond","stope","stoss","stour","strep","stria",
  "strob","strop","strum","strut","stubs","stuns","stupe","sture","styed","styes",
  "suber","sudsy","suety","sulfa","sumac","swale","swami","swang","swarf","sweer",
  "sweir","swelt","swier","swink","swire","swoof","swopp","syboe","sadhu","saice",
  "saine","saist","sajou","salep","salet","salic","salix","salty","samen","sapor",
  "sards","saree","sarky","sarsa","satin","sauch","saugh","sauté","savey","savin",
  "sawer","saxes","scads","scall","scaly","scarp","sceat","scone","scoog","scoot",
  "scopa","scops","scrog","scrub","scruf","secco","seedy","seels","seely","segue",
  "semee","senna","serac","serai","seral","serin","serow","shack","shads","shaul",
  "shaws","shays","sheal","sheer","shoes","shook","shoon","shorl","shote","shuck",
  "shyer","sieur","sighs","sigil","silts","silty","simba","sixte","skald","skean",
  "skeed","skelp","skiey","sklim","skoal","skoff","slain","slane","slant","slaps",
  "slays","slewy","slued","slues","slunk","smaze","smeek","smews","smoky","snaky",
  "snath","sneap","snobs","snods","snoot","snots","snowy","snubs","soddy","softy",
  "soign","soily","sonly","sooty","soppy","sorda","sorel","sorte","sotol","soupy",
  "spado","spale","spall","spang","spean","speel","speer","speld","spelf","spelk",
  "spial","spier","spiks","spile","spink","spirt","spiry","spits","spoky","sprad",
  "sprag","sprat","sprod","sprue","sprug","staid","staig","stane","stang","stays",
  "stean","steed","steek","steen","steil","stele","stept","stewy","stied","stilb",
  "stile","stimy","stirk","stoae","stoep","stoln","stond","stony","stope","stoss",
  "stoup","strep","strew","stria","strob","strop","strum","strut","stubs","stung",
  "stuns","stupe","sture","styed","styes","suber","sudsy","suety","sulfa","sumac",
  "swale","swami","swang","swarf","sweer","sweir","swelt","swier","swink","swire",
  "swoof","swopp","syboe","sythe",
  // T
  "tache","taffy","taiga","talky","tangy","tansy","tawse","techy","teddy","teeny",
  "tepoy","terce","thane","thegn","theic","thews","thuya","ticky","tiddy","tilde",
  "tilly","tippy","tirly","tobby","toddy","togae","togue","toffy","toggy","tolly",
  "tongy","torsk","torus","tossy","towsy","toyey","trews","trice","tride","triff",
  "tromp","tronn","troth","trypt","tuggy","tulpa","tumpy","tuque","turvy","tutty",
  "twirl","twirp","twite","twoer","tyees","typal","tyran","tabby","taffy","tahrs",
  "tains","talcs","talon","tamed","taped","tapis","tarns","taros","tatar","tatty",
  "taunt","taupe","tawse","techy","tenge","tenth","tepid","terce","teuch","thack",
  "thane","thegn","thews","thuya","ticky","tiddy","tilde","tippy","tirly","toffy",
  "togae","togue","toggy","toing","tolly","tomes","toney","tongy","torsk","torts",
  "towse","towsy","trews","triff","trixy","tromp","tronn","troth","troupe","trued",
  "trues","trull","trump","trunk","tryma","tuggy","tulpa","tuque","turfy","turvy",
  "tutty","twirp","twite","tyees","typal",
  // U
  "ukase","ulnae","ulnar","ulnas","unapt","undee","unfit","ungot","uniat","unlay",
  "unnew","unsew","unwed","unwit","upbow","updos","upsey","ulcer","ultra","umbra",
  "uncle","uncut","under","undue","unfit","union","unite","unity","unlit","unmet",
  "upper","upset","urban","usher","usual","utter","umami","undug","uneye","unfed",
  "ungag","ungod","unhip","uniax","unked","unkid","unlid","unmet","unmew","unrig",
  "unsaw","unsay","unset","unzip","ureal","uredo","urial","urned","urped","ursal",
  // V
  "vacua","vagal","vagus","vakil","varve","velar","veldt","veney","verso","veery",
  "vexer","vizir","vocab","vogie","volta","vulva","vague","valid","valor","value",
  "valve","vapor","vault","vaunt","vegan","venue","verge","verse","vigor","villa",
  "vinyl","viola","viper","viral","visor","visit","vista","vital","vivid","vocal",
  "vodka","vogue","voice","voter","vouch","vowel","vacua","vagus","vakil","varve",
  "velar","veldt","vertu","vetch","viand","vigia","vilde","villi","vired","virge",
  "virid","virtu","voila","voild","volta","volts","votey","vowed","vower",
  // W
  "waifs","waive","waltz","warby","wares","warty","washy","waspy","waulk","weald",
  "weber","welts","wetly","whack","whang","whaps","whaup","wheal","wheen","whelk",
  "whelm","whelp","whews","whids","whigs","whims","whins","whirr","whist","whizz",
  "whomp","whoop","whorl","wicks","wiled","wiles","wilga","wimps","wimpy","wince",
  "winze","wired","wises","withe","womby","wonky","wooer","woofy","woozy","wormy",
  "wried","wries","wrung","wussy","wyles","waded","wader","wafts","waged","wager",
  "wagon","waifs","wains","waist","waled","waler","wales","walks","wally","wamus",
  "warby","warch","wards","wared","wares","warns","warps","warst","warty","washy",
  "waspy","wauks","waulk","waved","waver","wavey","wawls","weals","weave","wedgy",
  "weedy","welch","welly","welts","whang","whaps","whaup","wheal","wheel","whelk",
  "whelm","whelp","whews","whids","whigs","whims","whins","whirr","whist","white",
  "whizz","whole","wimpy","wince","winze","wired","withe","womby","wonky","wooer",
  "woofy","woozy","wormy","wryer",
  // X Y Z
  "xeric","xylem","yabby","yacka","yacks","yaffs","yager","yagis","yapok","yarns",
  "yawls","yawns","yenta","yobbo","yocks","yodel","yogic","yokel","yoofs","yourn",
  "yoyo","yucks","yukky","yummy","yuppy","zabra","zacks","zappy","zarfs","zawns",
  "zeals","zebec","zinco","zincs","zincy","zoeae","zoeal","zoeas","zoism","zoist",
  "zombi","zonky","zoeae","zoeic","zoism","zoist","zooty","zoppa","zouks","zowie",
];

const ALL_VALID = new Set([...SOLUTIONS, ...EXTRA_VALID, ...UK_WORDS]);

// ── Custom Words ──
function getCustomWords() {
  try {
    const raw = localStorage.getItem("wordle-custom-words");
    if (!raw) return [];
    const words = JSON.parse(raw);
    return Array.isArray(words) ? words.filter(function(w) { return typeof w === "string" && w.length === 5; }) : [];
  } catch { return []; }
}

function saveCustomWord(word) {
  const words = getCustomWords();
  if (!words.includes(word)) {
    words.push(word);
    try { localStorage.setItem("wordle-custom-words", JSON.stringify(words)); } catch {}
  }
  ALL_VALID.add(word);
}

getCustomWords().forEach(function(w) { ALL_VALID.add(w); });

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
  ["⌫","z","x","c","v","b","n","m","Enter"]
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
function showToast(msg, duration, action) {
  duration = duration || 1500;
  const container = document.getElementById("toast-container");
  const t = document.createElement("div");
  t.className = "toast";
  const msgSpan = document.createElement("span");
  msgSpan.textContent = msg;
  t.appendChild(msgSpan);
  if (action) {
    const btn = document.createElement("button");
    btn.className = "toast-btn";
    btn.textContent = action.label;
    btn.addEventListener("click", function() { t.remove(); action.fn(); });
    t.appendChild(btn);
  }
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
      showToast("Not in word list", 3000, {
        label: "Add word",
        fn: function() {
          saveCustomWord(guess);
          showToast('"' + guess + '" added', 2000);
        }
      });
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
