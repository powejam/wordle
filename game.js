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
  "costs","crews","cubic","dated","deals","debts","decks","deeds","demos",
  "desks","discs","docks","doors","doses","downs","draws","drops","ducks","dumps",
  "dusts","dutch","edges","elbow","ended","essay","exits","faces","facts","fails",
  "falls","farms","fates","fears","feeds","feels","films","finds","firms","flags",
  "flats","flies","flows","folks","foods","fools","forms","forts","fouls","foxes",
  "freed","fries","frogs","fuels","funds","gains","games","gangs","gates","gears",
  "genes","gifts","girls","gives","goals","grabs","grips","grows","guess","gulps",
  "hands","hangs","heals","heaps","hears","heats","helps","herbs","herds","highs",
  "hikes","hills","hints","holds","holes","homes","hooks","hopes","horns","hosts",
  "hours","hunts","icons","ideas","items","jails","jeans","jokes","jumps",
  "keeps","kicks","kills","kinds","kings","kites","knees","knobs","knots","lakes",
  "lamps","lands","lanes","lasts","lawns","leads","leaks","lifts","limbs","lined",
  "lines","links","lions","lists","lives","loads","loans","locks","looks","loops",
  "lords","loses","loves","lungs","mails","makes","males","marks","meals","means",
  "meets","miles","mills","minds","mines","modes","moles","monks","moods","moons",
  "moves","nails","names","necks","needs","nests","nodes","norms","noses","notes",
  "oaths","oaken","occur","opens","opted","ounce","owned","packs","pages","pairs",
  "palms","panes","parks","parts","paths","paved","peaks","peers","picks",
  "piles","pills","pines","pipes","plans","plays","pleas","plots","plugs",
  "poets","polls","ponds","pools","popes","pores","ports","posed","posts","pulls",
  "pumps","races","racks","raids","rails","rains","ranks","rates","reads","reefs",
  "reign","rests","rides","rings","rises","risks","roads","robes","rocks","roles",
  "rolls","rooms","ropes","roses","ruins","rules","runes","rungs","sacks",
  "sales","salts","sands","saves","scale","scams","seals","seats","seeds","seeks",
  "seems","sends","sided","sides","sinks","sites","sizes","slabs","slams","slaps",
  "sleds","slips","slots","snaps","soils","songs","sorts","souls","spans","spare",
  "specs","spend","spies","spots","stays","stems","steps","stirs","stops","strip",
  "suits","swaps","tails","takes","tales","talks","tanks","tapes","tasks","teams",
  "tears","tends","terms","tests","texts","tides","tiles","times","tires","tones",
  "tools","tours","towns","traps","trays","trees","trips","tubes","tunes","turns",
  "twins","typed","types","units","urged","users","vanes","veils","veins","vents",
  "views","vines","votes","wages","waits","walks","walls","wards","warns",
  "wasps","waste","watts","waves","weeds","wells","whips","wills","winds","wines",
  "wings","wires","wisps","witty","wives","wolfs","woods","words","works","worms",
  "wraps","yards","yells","zeros","zones"
]);

// ── Additional UK English Words (Collins/SOWPODS) ──
const UK_WORDS = [
  "aargh","aarti","abacs","abaka","abamp","aband","abask","abbas","abbed","abbes",
  "abcee","abeam","abear","abets","abies","abled","ables","ablet","ablow","abmho",
  "abohm","aboil","aboma","aboon","abord","abore","abram","abray","abrim","abrin",
  "abris","absey","absit","abuna","abune","abuzz","abyes","abysm","acais","acari",
  "accas","accoy","acers","aceta","ached","aches","achoo","acidy","acing","acini",
  "ackee","acker","acmic","acock","acold","actin","acton","actor","acyls","adaws",
  "adays","addax","addio","addle","adeem","adhan","adieu","adios","adits","adman",
  "admen","admix","adobe","adobo","adown","adoze","adrad","adred","adsum","aduki",
  "adunc","adust","advew","adyta","adzed","adzes","aecia","aedes","aeons","aerie",
  "aeros","aesir","afald","afara","afars","afear","affix","aflaj","afore","afoul",
  "afrit","afros","agama","agami","agars","agast","agave","agaze","agene","agers",
  "agger","aggie","aggri","aggro","aggry","aghas","agila","agism","agita","aglee",
  "agloo","aglus","agmas","agoge","agons","agood","agora","agria","agrin","agued",
  "agues","aguti","aheap","ahent","ahigh","ahind","ahing","ahint","ahold","ahull",
  "ahuru","aides","aidoi","aidos","aiery","aigas","ailed","ainee","ainga","aioli",
  "airer","airns","airth","airts","aitch","aitus","aiver","aizle","ajiva","ajuga",
  "ajwan","akees","akela","akene","aking","akita","akkas","alaap","alack","alamo",
  "aland","alane","alang","alans","alant","alapa","alaps","alary","alate","alays",
  "albas","albee","alcid","alcos","aldea","alder","aldol","aleck","alecs","alefs",
  "aleft","aleph","alews","aleye","alfas","algal","algas","algid","algin","algor",
  "algum","alias","alifs","aline","alist","aliya","alkie","alkos","alkyd","alkyl",
  "allee","allel","allis","allod","allyl","almah","almas","almeh","almes","almud",
  "almug","alods","aloed","aloha","aloin","aloud","alowe","altho","alula","alums",
  "alure","alway","amahs","amain","amate","amaut","amban","ambit","ambos","ambry",
  "ameba","ameer","amene","amens","ament","amias","amici","amido","amids","amies",
  "amiga","amigo","amins","amirs","amlas","amman","ammon","ammos","amnia","amnic",
  "amnio","amoks","amole","amort","amove","amowt","amped","ampul","amrit","amuck",
  "amyls","anana","anata","ancho","ancle","ancon","andro","anear","anele","anent",
  "angas","anglo","anigh","anile","anils","anima","animi","anion","anker","ankhs",
  "ankus","anlas","annal","annas","annat","annul","anoas","anode","anole","anomy",
  "ansae","antae","antar","antas","anted","antes","antis","antra","antre","antsy",
  "anyon","apace","apage","apaid","apayd","apays","apeak","apeek","apers","apert",
  "apery","apgar","aphis","apian","aping","apiol","apish","apism","apnea","apode",
  "apods","apoop","aport","appal","appay","appel","appro","appui","appuy","apres",
  "apses","apsis","apsos","apted","apter","aptly","aquae","aquas","araba","araks",
  "arame","arars","arbas","arced","arcus","ardeb","ardri","aread","areae","areal",
  "arear","areca","aredd","arede","arefy","areic","arene","arepa","arere","arete",
  "arets","arett","argal","argan","argil","argle","argol","argon","argot","argus",
  "arhat","arias","ariel","ariki","arils","ariot","arish","arked","arled","arles",
  "armed","armer","armet","armil","arnas","arnut","aroba","aroha","aroid","arpas",
  "arpen","arrah","arras","arret","arris","arsed","arses","arsey","arsis","artal",
  "artel","artic","artis","artsy","aruhe","arums","arval","arvos","aryls","asana",
  "ascot","ascus","asdic","ashed","ashen","ashes","ashet","asker","askew","askoi",
  "askos","aspen","asper","aspic","aspis","aspro","assai","assam","assay","asses",
  "assez","assot","aster","astir","astun","asway","aswim","asyla","ataps","ataxy",
  "atigi","atilt","atimy","atman","atmas","atocs","atoke","atoks","atoll","atoms",
  "atomy","atony","atopy","atria","atrip","attap","attar","atuas","audad","auger",
  "aught","aulas","aulic","auloi","aulos","aumil","aunes","aunts","aurae","aural",
  "aurar","auras","aurei","aures","auric","auris","aurum","autos","auxin","avail",
  "avale","avant","avast","avels","avens","avers","avert","avgas","avine","avion",
  "avise","aviso","avize","avows","avyze","awarn","awash","awato","awave","aways",
  "awdls","aweel","aweto","awing","awmry","awned","awner","awoke","awols","awork",
  "axels","axile","axils","axing","axion","axite","axled","axles","axman","axmen",
  "axoid","axone","axons","ayahs","ayelp","aygre","ayins","ayont","ayres","ayrie",
  "azans","azide","azido","azine","azlon","azoic","azole","azons","azote","azoth",
  "azuki","azurn","azury","azygy","azyme","azyms","baaed","baals","babas","babel",
  "babes","babka","baboo","babul","babus","bacca","bacco","baccy","bacha","bachs",
  "baddy","baels","baffs","baffy","bafts","baghs","bagie","bahts","bahut","bails",
  "bairn","baith","baits","baiza","baize","bajan","bajra","bajri","bajus","baked",
  "baken","bakes","bakra","balas","balds","baldy","baled","baler","bales","balks",
  "balky","balls","bally","balms","baloo","balsa","balti","balun","balus","bambi",
  "banak","banco","bancs","banda","bandh","bandy","baned","banes","bangs","bania",
  "banns","bants","bantu","banty","bapus","barbe","barbs","barby","barca","barde",
  "bardo","bards","bardy","bared","barer","bares","barfs","baric","barks","barky",
  "barms","barmy","barns","barny","barps","barra","barre","barro","barry","barye",
  "basal","basan","baser","bases","basho","basks","bason","basse","bassi","basso",
  "bassy","basta","baste","basti","basto","basts","bated","bates","bathe","baths",
  "batik","batta","batts","battu","batty","bauds","bauks","baulk","baurs","bavin",
  "bawds","bawdy","bawls","bawns","bawrs","bawty","bayed","bayes","bayle","bayou",
  "bayts","bazar","bazoo","beady","beaks","beaky","beams","beamy","beano","beany",
  "beare","bears","beath","beaty","beaus","beaut","beaux","bebop","becap","becke",
  "becks","bedad","bedel","bedes","bedew","bedim","bedye","beech","beedi","beefs",
  "beefy","beeps","beers","beery","beets","befit","befog","begad","begar","begat",
  "begem","beget","begot","begum","begun","beige","beigy","bekah","belah","belar",
  "belay","belch","belee","belga","belie","belle","bells","belly","belon","belts",
  "bemad","bemas","bemix","bemud","bends","bendy","benes","benet","benis","benne",
  "benni","benny","bento","bents","benty","bepat","beray","beres","beret","bergs",
  "berko","berks","berme","berms","berob","berth","beryl","besat","besaw","besee",
  "beses","beset","besit","besom","besot","besti","bests","betas","beted","betel",
  "betes","beths","betid","beton","betta","betty","bevel","bever","bevor","bevue",
  "bevvy","bewet","bewig","bezel","bezes","bezil","bhaji","bhang","bhels","bhoot",
  "bhuna","bhuts","biali","bialy","bibbs","biccy","bicep","bices","biddy","bided",
  "bider","bides","bidet","bidis","bidon","bield","biers","biffo","biffs","biffy",
  "bifid","bigae","biggs","biggy","bigha","bight","bigly","bigos","bigot","bijou",
  "biked","biker","bikie","bilbo","bilby","biled","biles","bilge","bilgy","bilks",
  "billy","bimah","bimas","bimbo","binal","bindi","binds","biner","bines","binge",
  "bingo","bings","bingy","binit","binks","bints","biogs","biome","biont","biota",
  "biped","bipod","birks","birle","birls","biros","birrs","birse","birsy","bises",
  "bisks","bison","bitch","biter","bites","bitos","bitou","bitsy","bitte","bitts",
  "bitty","bivia","bivvy","bizes","bizzo","bizzy","blabs","blads","blady","blaer",
  "blaes","blaff","blags","blahs","blain","blams","blart","blase","blash","blate",
  "blats","blatt","blaud","blawn","blaws","blays","blear","blebs","bleep","blees",
  "blent","blert","blest","blets","bleys","blimy","bling","blini","blink","blins",
  "bliny","blips","blist","blite","blive","blobs","blocs","blogs","bloop","blore",
  "blots","blows","blowy","blubs","blude","bludy","blued","bluer","bluet","bluey",
  "bluid","blume","blunk","blurb","blurs","blype","boabs","boaks","boars","boart",
  "bobac","bobak","bobas","bobby","bobol","bocca","bocce","bocci","boche","bocks",
  "boded","bodes","bodge","bodle","boeps","boets","boeuf","boffo","boffs","bogan",
  "bogey","boggy","bogie","bogle","bogus","bohea","bohos","boils","boing","boink",
  "boite","boked","bokes","bokos","bolar","bolas","bolds","boles","bolix","bolls",
  "bolos","bolus","bomas","bombe","bombo","bonce","boned","boner","boney","bongo",
  "bongs","bonie","bonks","bonne","bonny","bonza","bonze","boobs","booby","boody",
  "booed","boofy","boogy","boohs","booky","bools","booms","boomy","boong","boons",
  "boord","boors","boose","booty","boozy","borak","boral","boras","borax","borde",
  "bords","bored","boree","borel","borer","bores","borgo","boric","borks","borms",
  "borna","borne","boron","borts","borty","bortz","bosks","bosky","bosom","boson",
  "bossy","bosun","botas","botel","bothy","botte","botts","botty","bouge","bouks",
  "boule","boult","bouns","bourd","bourg","bourn","bouse","bousy","bouts","bovid",
  "bowat","bowed","bowel","bower","bowes","bowet","bowie","bowls","bowne","bowrs",
  "bowse","boxed","boxen","boxer","boyar","boyau","boyed","boyfs","boygs","boyla",
  "boyos","boysy","bozos","braai","brace","brach","brack","bract","brads","braes",
  "brags","braid","brail","braks","braky","brame","brank","brans","brant","brast",
  "brats","brava","bravi","bravo","brawn","braws","braxy","brays","braza","braze",
  "bream","brede","breds","breem","breer","brees","breid","breis","breme","brens",
  "brent","brere","brers","breve","brews","breys","briar","bribe","brier","bries",
  "brigs","briks","brill","brims","brins","briny","brios","brise","briss","brith",
  "brits","britt","brize","broch","brock","brods","brogh","brogs","brome","bromo",
  "bronc","brond","brool","broom","broos","brose","brosy","brows","brugh","bruin",
  "bruit","brule","brume","brung","brunt","brusk","brust","bruts","buats","buaze",
  "bubal","bubas","bubba","bubby","bubus","buchu","bucko","bucks","bucku","budas",
  "budis","budos","buffa","buffe","buffi","buffo","buffs","buffy","bufos","bugle",
  "buhls","buhrs","buiks","buist","bukes","bulbs","bulgy","bulks","bulla","bulse",
  "bumbo","bumfs","bumph","bumpy","bunas","bunce","bunco","bunde","bundh","bunds",
  "bundt","bundu","bundy","bungs","bungy","bunia","bunje","bunjy","bunko","bunks",
  "bunns","bunts","bunty","bunya","buoys","buppy","buran","buras","burbs","burds",
  "buret","burgh","burgs","burin","burka","burke","burks","burls","burly","burnt",
  "buroo","burps","burqa","burro","burrs","burry","bursa","burse","busby","bused",
  "bushy","busks","busky","bussu","busti","busts","busty","butch","buteo","butes",
  "butle","butte","butts","butty","butut","butyl","buxom","buzzy","bwana","bwazi",
  "byded","bydes","byked","bykes","bylaw","byres","byrls","byssi","byway","caaed",
  "cabal","cabas","cabby","caber","cabob","caboc","cabre","cacao","cacas","cache",
  "cacky","cacti","caddy","cadee","cades","cadet","cadge","cadgy","cadie","cadis",
  "cadre","caeca","caese","cafes","caffs","caged","cager","cages","cagey","cagot",
  "cahow","caids","cains","caird","cairn","cajon","cajun","caked","cakes","cakey",
  "calfs","calid","calif","calix","calks","calla","calls","calms","calmy","calos",
  "calpa","calps","calve","calyx","caman","camas","cameo","cames","camis","camos",
  "campi","campo","campy","camus","canal","caned","caneh","caner","canes","cangs",
  "canid","canna","canns","canny","canon","canso","canst","canto","cants","canty",
  "capas","caped","capes","caphs","capiz","caple","capon","capos","capot","capul",
  "caput","carap","carat","carbo","carbs","carby","cardi","cardy","cared","carer",
  "cares","caret","carex","carks","carle","carls","carns","carny","carob","carom",
  "carpi","carps","carrs","carse","carta","carte","carts","carvy","casas","casco",
  "cased","casks","casky","caste","casts","casus","cates","catty","cauda","cauks",
  "cauld","caulk","cauls","caums","caups","causa","cavas","caved","cavel","caver",
  "cavie","cavil","cawed","cawks","caxon","ceaze","cebid","cecal","cecum","ceded",
  "ceder","cedes","cedis","ceiba","ceili","ceils","celeb","cella","celli","cello",
  "celom","celts","cense","cento","cents","centu","ceorl","cepes","cerci","cered",
  "ceres","cerge","ceria","ceric","cerne","ceros","certs","cesse","cesta","cesti",
  "cetes","cetyl","chace","chack","chaco","chado","chads","chafe","chaff","chaft",
  "chais","chals","chams","chang","chank","chape","chaps","chapt","chara","chard",
  "chare","chark","charr","chars","chary","chasm","chats","chave","chavs","chawk",
  "chaws","chaya","chays","cheep","chefs","cheka","chela","chelp","chemo","chere",
  "chert","cheth","chevy","chews","chewy","chiao","chias","chibs","chica","chich",
  "chico","chics","chide","chiel","chiks","chile","chili","chimb","chime","chimo",
  "chimp","chine","chink","chino","chins","chirk","chirl","chirm","chiro","chirr",
  "chirt","chiru","chits","chive","chivs","chivy","chizz","chock","choco","chocs",
  "chode","chogs","choke","choko","choky","chola","choli","cholo","chomp","chons",
  "choof","chook","choom","chops","chore","chota","chott","chout","choux","chowk",
  "chows","chubs","chuck","chufa","chuff","chugs","chump","chums","churl","churr",
  "chuse","chute","chyle","chyme","chynd","ciaos","cibol","cided","cides","ciels",
  "ciggy","cilia","cills","cimar","cimex","cinct","cines","cions","cippi","circs",
  "cires","cirls","cirri","cisco","cissy","cists","cital","citer","cites","cives",
  "civet","civie","civvy","clach","clack","clade","clads","claes","clags","clame",
  "clams","clank","clans","claps","clapt","claro","clart","clary","clast","clats",
  "claut","clave","clavi","claws","clays","cleat","cleck","cleek","cleep","clefs",
  "cleft","clegs","cleik","clems","clepe","clept","cleve","clews","clied","clies",
  "clift","clime","cline","clink","clint","clipe","clipt","cloam","clods","cloff",
  "clogs","cloke","clomb","clomp","clonk","clons","cloop","cloot","clops","clote",
  "clots","clour","clous","clove","clows","cloye","cloys","cloze","clued","clunk",
  "clype","cnida","coact","coala","coals","coaly","coapt","coarb","coate","coati",
  "coats","cobbs","cobby","cobia","coble","cobza","cocas","cocci","cocco","cocks",
  "cocky","cocos","codas","codec","coden","coder","codex","codon","coeds","coffs",
  "cogie","cogon","cogue","cohab","cohoe","cohog","cohos","coifs","coign","coirs",
  "coits","coked","cokes","colas","colby","colds","coled","coles","coley","colic",
  "colin","colls","colly","colog","colon","color","colts","colza","comae","comal",
  "comas","combe","combi","combo","combs","comby","comer","comes","comfy","comix",
  "commo","comms","commy","compo","comps","compt","comte","comus","condo","coned",
  "cones","coney","confs","conga","conge","congo","conia","conic","conin","conks",
  "conky","conne","conns","conte","conto","conus","convo","cooch","cooed","cooee",
  "cooer","cooey","coofs","cooky","cools","cooly","coomb","cooms","coomy","coons",
  "coops","coopt","coost","coots","cooze","copal","copay","coped","copen","coper",
  "copes","coppy","copra","copse","copsy","coram","corbe","corby","cords","cored",
  "corer","corey","corgi","coria","corks","corky","corms","corni","corno","corns",
  "cornu","corny","corse","corso","cosec","cosed","coses","coset","cosey","cosie",
  "costa","coste","cotan","coted","cotes","coths","cotta","cotts","coude","cough",
  "coups","courb","courd","coure","cours","couth","coved","coven","coves","covey",
  "covin","cowal","cowan","cowed","cower","cowks","cowls","cowps","cowry","coxae",
  "coxal","coxed","coxes","coyed","coyer","coyly","coypu","cozed","cozen","cozes",
  "cozey","cozie","craal","crabs","crags","craic","craig","crake","crame","crams",
  "crank","crans","crape","craps","crapy","crare","crass","craws","crays","credo",
  "creds","creed","creel","crees","creme","crems","crena","crepe","crept","crepy",
  "cress","crewe","cribs","crick","cried","crier","cries","crimp","crims","crine",
  "crios","cripe","crise","crith","crits","croak","croci","crock","crocs","croft",
  "crogs","cromb","crome","crone","cronk","crony","crook","crool","croon","crops",
  "crore","crost","croup","crout","crows","croze","cruck","cruds","crudy","crues",
  "cruet","crumb","crump","cruor","crura","cruse","crusy","cruve","crwth","crypt",
  "ctene","cubby","cubeb","cubed","cuber","cubes","cubit","cuddy","cuffo","cuffs",
  "cuifs","cuing","cuish","cuits","cukes","culch","culet","culex","culls","cully",
  "culms","culpa","culti","cults","culty","cumec","cumin","cundy","cunei","cunts",
  "cupel","cupid","cuppa","cuppy","curat","curbs","curch","curds","curdy","cured",
  "curer","cures","curet","curfs","curia","curie","curio","curli","curls","curly",
  "curns","curny","currs","cursi","curst","curvy","cusec","cushy","cusks","cusps",
  "cusso","cutch","cuter","cutes","cutey","cutie","cutin","cutis","cutto","cutty",
  "cutup","cuvee","cwtch","cyano","cyans","cyber","cycad","cycas","cyclo","cyder",
  "cylix","cymae","cymar","cymas","cymes","cymol","cysts","cytes","cyton","czars",
  "dabba","daces","dacha","dacks","dadah","dadas","dados","daffs","daffy","dagga",
  "daggy","dagos","dahls","daine","daint","daker","daled","dales","dalis","dalle",
  "dally","dalts","daman","damar","dames","damme","damns","damps","dampy","dandy",
  "dangs","danio","danks","danny","dants","daraf","darbs","darcy","dared","darer",
  "dares","darga","dargs","daric","daris","darks","darky","darns","darre","darts",
  "darzi","dashi","dashy","datal","dater","dates","datos","datto","daube","daubs",
  "dauby","dauds","dault","daunt","daurs","dauts","daven","davit","dawah","dawds",
  "dawed","dawen","dawks","dawns","dawts","dayan","daych","daynt","dazed","dazer",
  "dazes","deads","deair","dealt","deans","deare","dearn","dears","deary","deash",
  "deave","deaws","deawy","debag","debar","debby","debel","debes","debud","debus",
  "debye","decad","decaf","decko","decos","dedal","deedy","deely","deems","deens",
  "deeps","deere","deers","deets","deeve","deevs","defat","deffo","defis","defog",
  "degas","degum","deice","deids","deify","deign","deils","deism","deist","deked",
  "dekes","dekko","deled","deles","delfs","delft","delis","dells","delly","delos",
  "delph","delts","deman","demes","demic","demit","demob","dempt","demur","denar",
  "denay","denes","denet","denis","dents","deoxy","derat","deray","dered","deres",
  "derig","derma","derms","derns","deros","derro","derry","derth","dervs","desex",
  "deshi","desse","devas","devel","devon","devot","dewan","dewar","dewax","dewed",
  "dexes","dexie","dhaks","dhals","dhobi","dhole","dholl","dhols","dhoti","dhows",
  "dhuti","diact","dials","diazo","dibbs","diced","dicer","dices","dicey","dicht",
  "dicks","dicky","dicot","dicta","dicts","dicty","diddy","didie","didos","didst",
  "diebs","diene","diets","diffs","dight","dikas","diked","diker","dikes","dikey",
  "dildo","dilli","dills","dilly","dimer","dimes","dimps","dinar","dined","dines",
  "dinge","dingo","dings","dingy","dinic","dinks","dinky","dinna","dinos","dints",
  "diode","diols","diota","dippy","dipso","diram","direr","dirge","dirke","dirks",
  "dirls","dirts","disas","disci","dishy","disks","disme","dital","ditas","dited",
  "dites","ditsy","ditts","ditty","ditzy","divan","divas","dived","diver","dives",
  "divis","divot","divvy","diwan","dixie","dixit","dizen","djinn","djins","doabs",
  "doats","dobby","dobie","dobla","dobra","dobro","docht","docos","doddy","dodgy",
  "dodos","doeks","doers","doest","doeth","doffs","doges","dogey","doggo","doggy",
  "dogie","dogma","dohyo","doilt","doily","doits","dojos","dolce","dolci","doled",
  "doles","dolia","dolls","dolly","dolma","dolor","dolos","dolts","domal","domed",
  "domes","domic","donah","donas","donee","doner","donga","dongs","donko","donna",
  "donne","donny","donsy","doobs","doody","dooks","doole","dools","dooly","dooms",
  "doomy","doona","doorn","doozy","dopas","doped","doper","dopes","dopey","dorad",
  "dorba","dorbs","doree","doric","doris","dorks","dorky","dorms","dormy","dorps",
  "dorrs","dorsa","dorse","dorts","dorty","dosed","doseh","doser","dotal","doted",
  "doter","dotes","dotty","douar","douce","doucs","douks","doula","douma","doums",
  "doups","doura","douse","douts","doved","doven","dover","doves","dovie","dowar",
  "dowds","dowed","dowel","dower","dowie","dowle","dowls","dowly","downa","downy",
  "dowps","dowry","dowse","dowts","doxie","doyen","doyly","dozed","dozen","dozer",
  "dozes","drabs","drack","draco","draff","drags","drail","drams","drant","draps",
  "drats","drave","drays","drear","dreck","dreed","drees","dregs","dreks","drent",
  "drere","drest","dreys","dribs","drice","drier","dries","drily","drips","dript",
  "droid","droil","drole","drome","drony","droob","droog","drook","dropt","drouk",
  "drows","drubs","druid","drupe","druse","drusy","druxy","dryad","dsobo","dsomo",
  "duads","duals","duans","duars","dubbo","ducal","ducat","duces","duchy","ducky",
  "ducts","duddy","duded","dudes","duels","duets","duett","duffs","dufus","duing",
  "duits","dukas","duked","dukes","dukka","dules","dulia","dulls","dully","dulse",
  "dumas","dumbo","dumbs","dumka","dumky","dumpy","dunam","dunch","dunes","dungs",
  "dungy","dunks","dunno","dunny","dunsh","dunts","duomi","duomo","duped","duper",
  "dupes","duple","duply","duppy","dural","duras","dured","dures","durgy","durns",
  "duroc","duros","duroy","durra","durrs","durry","durst","durum","durzi","dusks",
  "dusky","duvet","duxes","dwaal","dwale","dwalm","dwams","dwang","dwaum","dweeb",
  "dwelt","dwile","dwine","dyads","dyers","dyked","dykes","dykey","dynel","dynes",
  "dzhos","eagre","eales","eaned","eards","eared","earls","earns","earst","eased",
  "easer","eases","easle","easts","eathe","eaved","eaves","ebbed","ebbet","ebons",
  "ebook","ecads","eched","eches","echos","eclat","ecrus","edema","edged","edger",
  "edify","edile","edits","educe","educt","eejit","eerie","eeven","eevns","effed",
  "egads","egers","egest","eggar","egged","egger","egmas","egret","ehing","eider",
  "eidos","eigne","eiked","eikon","eilds","eisel","eject","eking","ekkas","elain",
  "eland","elans","elate","elchi","eldin","elegy","elemi","elfed","eliad","elide",
  "elint","elmen","eloge","elogy","eloin","elops","elpee","elsin","elute","elvan",
  "elver","elves","emacs","embar","embay","embed","embog","embow","embox","embus",
  "emcee","emeer","emend","emeus","emirs","emits","emmas","emmer","emmet","emmew",
  "emmys","emong","emote","emove","empts","emule","emure","emyde","emyds","enarm",
  "enate","ender","endew","endue","enema","enews","enfix","eniac","enlit","enmew",
  "ennog","enoki","enols","enorm","enows","enrol","ensew","ensky","entia","enure",
  "envoi","enzym","eorls","eosin","epact","epees","ephah","ephas","ephod","ephor",
  "epics","epode","epopt","epoxy","epris","eprom","equid","erbia","erect","erevs",
  "ergon","ergos","ergot","erica","erick","erics","ering","erned","ernes","erose",
  "erred","erses","eruct","erugo","eruvs","erven","ervil","escar","escot","esile",
  "eskar","esker","esnes","esses","ester","estoc","estop","estro","etage","etape",
  "etats","etens","ethal","ethos","ethyl","etnas","ettin","ettle","etude","etuis",
  "etwee","etyma","eughs","euked","eupad","euros","eusol","evens","evert","evets",
  "evhoe","evils","evite","evohe","evoke","ewers","ewest","ewhow","ewked","exams",
  "exeat","execs","exeem","exeme","exies","exine","exing","exode","exons","expos",
  "extol","exuls","exurb","eyass","eyers","eying","eyots","eyras","eyres","eyrie",
  "eyrir","faced","facer","facia","faddy","faded","fader","fades","fadge","fados",
  "faena","faery","faffs","faggy","fagin","fagot","faiks","faine","fains","faint",
  "fairs","fairy","faked","faker","fakes","fakey","fakir","falaj","famed","fames",
  "fanal","fands","fanes","fanga","fango","fangs","fanks","fanny","fanon","fanos",
  "fanum","faqir","farad","farci","farcy","fards","fared","farer","fares","farle",
  "farls","faros","farse","farts","fasci","fasti","fasts","fated","fatly","fatso",
  "fatwa","faugh","fauld","fauns","faurd","fauts","fauve","favas","favel","faver",
  "faves","favor","favus","fawns","fawny","faxed","faxes","fayed","fayer","fayne",
  "fayre","fazed","fazes","feals","feare","fease","feats","feaze","fecal","feces",
  "fecht","fecit","fecks","fedex","feebs","feens","feers","feese","feeze","fehme",
  "feign","feint","feist","felid","fella","fells","felly","felon","felts","felty",
  "femal","femes","femme","femmy","femur","fends","fendy","fenis","fenks","fenny",
  "fents","feods","feoff","feral","ferer","feres","feria","ferly","fermi","ferms",
  "ferns","ferny","fesse","festa","fests","festy","fetal","fetas","feted","fetes",
  "fetid","fetor","fetta","fetts","fetus","fetwa","feuar","feuds","feued","fewer",
  "feyed","feyer","feyly","fezes","fezzy","fiars","fiats","fibro","fices","fiche",
  "fichu","ficin","ficos","ficus","fidge","fidos","fiefs","fient","fiere","fiers",
  "fiery","fiest","fifed","fifer","fifes","fifth","figos","fiked","fikes","filar",
  "filch","filed","filer","files","filet","fille","fillo","fills","filly","filmi",
  "filmy","filos","filum","finca","fined","finer","fines","finis","finks","finny",
  "finos","fiord","fique","fired","firer","fires","firie","firks","firns","firry",
  "firth","fiscs","fishy","fisks","fists","fisty","fitch","fitly","fitna","fitte",
  "fitts","fiver","fives","fixer","fixes","fixit","fjeld","flabs","flack","flaff",
  "flail","flair","flake","flaks","flaky","flamm","flams","flamy","flans","flaps",
  "flary","flawn","flaws","flawy","flaxy","flays","fleam","fleas","fleck","fleer",
  "flees","flegs","fleme","flews","flexo","fleys","flics","flied","flier","flimp",
  "flims","flips","flirs","flirt","flisk","flite","flits","flitt","flocs","floes",
  "flogs","flong","flops","flors","flory","flosh","floss","flota","flote","flown",
  "flubs","flued","flues","fluey","fluff","fluky","flume","flump","fluor","flurr",
  "fluty","fluyt","flyby","flyer","flype","flyte","foals","foams","foamy","foehn",
  "fogey","fogie","fogle","fohns","foids","foils","foins","foist","folds","foley",
  "folia","folic","folie","folio","folky","fomes","fonda","fonds","fondu","fonly",
  "fonts","foody","foots","footy","foram","foray","forbs","forby","fordo","fords",
  "forel","fores","forex","forks","forky","forme","forza","forze","fossa","fosse",
  "fouat","fouds","fouer","fouet","foule","fount","fours","fouth","fovea","fowls",
  "fowth","foxed","foxie","foyle","foyne","frabs","frack","fract","frags","fraim",
  "franc","frape","fraps","frass","frate","frati","frats","fraus","frays","freer",
  "frees","freet","freit","fremd","frena","freon","frere","frets","fribs","frier",
  "frigs","frill","frise","frisk","frist","frith","frits","fritt","fritz","frize",
  "frizz","frock","froes","frond","frons","frore","frorn","frory","frosh","froth",
  "frown","frows","frowy","frugs","frump","frush","frust","fryer","fubar","fubby",
  "fubsy","fucks","fucus","fuddy","fudge","fuero","fuffs","fuffy","fugal","fuggy",
  "fugie","fugio","fugle","fugly","fugue","fugus","fujis","fulls","fumed","fumer",
  "fumes","fumet","fundi","fundy","fungo","fungs","funks","fural","furan","furca",
  "furls","furol","furor","furrs","furth","furze","furzy","fused","fusee","fusel",
  "fuses","fusil","fusts","fusty","futon","fuzed","fuzee","fuzes","fuzil","fyces",
  "fyked","fykes","fyles","fyrds","fytte","gabby","gable","gaddi","gades","gadge",
  "gadid","gadis","gadje","gadjo","gadso","gaffe","gaffs","gaged","gager","gages",
  "gaids","gairs","gaits","gaitt","gajos","galah","galas","galax","galea","gales",
  "galls","gally","galop","galut","galvo","gamas","gamay","gamba","gambe","gambo",
  "gambs","gamed","gamer","gamey","gamic","gamin","gamme","gammy","gamps","gamut",
  "ganch","gandy","ganef","ganev","ganja","ganof","gants","gaols","gaped","gaper",
  "gapes","gapos","gappy","garbe","garbo","garbs","garda","garis","garni","garre",
  "garth","garum","gases","gasps","gaspy","gassy","gasts","gated","gater","gaths",
  "gator","gaucy","gauds","gaudy","gauje","gault","gaums","gaumy","gaups","gaurs",
  "gauss","gauzy","gavot","gawcy","gawds","gawks","gawky","gawps","gawsy","gayal",
  "gayer","gayly","gazal","gazar","gazed","gazes","gazon","gazoo","geals","geans",
  "geare","geats","gebur","gecko","gecks","geeks","geeps","geese","geest","geist",
  "geits","gelds","gelee","gelid","gelly","gelts","gemel","gemma","gemmy","gemot",
  "genal","genas","genet","genic","genie","genii","genip","genny","genoa","genom",
  "genro","gents","genty","genua","genus","geode","geoid","gerah","gerbe","geres",
  "gerle","germs","germy","gerne","gesse","gesso","geste","gests","getas","getup",
  "geums","geyan","geyer","ghast","ghats","ghaut","ghazi","ghees","ghest","ghoul",
  "ghyll","gibed","gibel","giber","gibes","gibli","gibus","gigas","gighe","gigot",
  "gigue","gilas","gilds","gilet","gills","gilly","gilpy","gilts","gimel","gimme",
  "gimps","gimpy","ginge","gings","ginks","ginny","ginzo","gipon","gippo","gippy",
  "gipsy","girds","girly","girns","giron","giros","girrs","girsh","girts","gismo",
  "gisms","gists","gites","giust","gived","giver","gizmo","glace","glade","glads",
  "glady","glaik","glair","glams","glans","glary","glaum","glaur","glazy","gleba",
  "glebe","gleby","glede","gleds","gleed","gleek","glees","gleet","gleis","glens",
  "glent","gleys","glial","glias","glibs","gliff","glift","glike","glime","glims",
  "glisk","glits","glitz","gloam","globi","globs","globy","glode","glogg","gloms",
  "gloop","glops","glost","glout","glows","gloze","glued","gluer","glues","gluey",
  "glugs","glume","glums","gluon","glute","gluts","glyph","gnarl","gnarr","gnars",
  "gnash","gnats","gnawn","gnaws","gnome","gnows","goads","goafs","goary","goats",
  "goaty","goban","gobbi","gobbo","gobby","gobos","godet","godly","godso","goels",
  "goers","goety","gofer","goffs","gogga","gogos","goier","golds","goldy","golem",
  "goles","golfs","golly","golpe","golps","gombo","gomer","gompa","gonad","gonef",
  "goner","gongs","gonia","gonif","gonks","gonna","gonof","gonys","gonzo","gooby",
  "goods","goody","gooey","goofs","goofy","googs","gooks","gooky","goold","gools",
  "gooly","goons","goony","goops","goopy","goors","goory","goosy","gopak","gopik",
  "goral","goras","gored","gores","goris","gorms","gormy","gorps","gorse","gorsy",
  "gosht","gosse","goths","gotta","gouks","goura","gouts","gouty","gowan","gowds",
  "gowfs","gowks","gowls","gowns","goxes","goyim","graal","grads","graff","graip",
  "grama","grame","gramp","grams","grana","grans","grapy","gravs","grays","graze",
  "grebe","grece","greek","grees","grege","grego","grein","grens","grenz","grese",
  "greve","grews","greys","grice","gride","grids","griff","grift","grigs","grike",
  "grime","grimy","grins","griot","gript","gripy","grise","grist","grisy","grith",
  "grits","grize","groat","grody","grogs","groin","groks","groma","grone","groof",
  "grosz","grots","grouf","grubs","grued","grues","grufe","grume","grump","grunt",
  "gryce","gryde","gryke","grype","grypt","guaco","guana","guano","guans","guars",
  "gucks","gucky","gudes","guffs","gugas","guids","guile","guimp","guiro","gulag",
  "gular","gulas","gules","gulfs","gulfy","gulls","gulph","gulpy","gumma","gumps",
  "gundy","gunge","gungy","gunks","gunky","gunny","guppy","gurge","gurls","gurly",
  "gurns","gurry","gursh","gurus","gushy","gusla","gusle","gusli","gussy","gusts",
  "gutsy","gutta","gutty","guyed","guyle","guyot","guyse","gwine","gyals","gybed",
  "gybes","gyeld","gymps","gynae","gynie","gynny","gyoza","gyppo","gyppy","gypsy",
  "gyral","gyred","gyres","gyron","gyros","gyrus","gytes","gyved","gyves","haafs",
  "haars","hable","habus","hacek","hacks","hadal","haded","hades","hadji","hadst",
  "haems","haets","haffs","hafiz","hafts","haggs","hahas","haick","haika","haiks",
  "haiku","hails","haily","hains","haint","hairs","haith","hajes","hajis","hajji",
  "hakam","hakas","hakea","hakes","hakim","hakus","halal","haled","haler","hales",
  "halfa","halfs","halid","hallo","halls","halma","halms","halon","halos","halse",
  "halts","halva","hamal","hamba","hamed","hames","hammy","hamza","hanap","hance",
  "hanch","hangi","hanks","hanky","hansa","hanse","hants","haole","haoma","hapax",
  "haply","hapus","haram","hards","hared","harem","hares","harim","harks","harls",
  "harms","harns","haros","harps","harpy","harry","harsh","harts","hashy","hasks",
  "hasps","hasta","hated","hater","hates","hatha","hauds","haufs","haugh","hauld",
  "haulm","hauls","hault","hause","haute","haver","haves","havoc","hawed","hawks",
  "hawms","hawse","hayed","hayer","hayey","hayle","hazan","hazed","hazer","hazes",
  "heads","heald","heame","heapy","heard","heare","heast","heben","hebes","hecht",
  "hecks","heder","hedgy","heeds","heedy","heels","heeze","hefte","hefts","heids",
  "heigh","heils","heirs","hejab","hejra","heled","heles","helio","hells","helms",
  "helos","helot","helve","hemal","hemes","hemic","hemin","hemps","hempy","hends",
  "henge","henna","henny","henry","hents","hepar","herby","heres","herls","herma",
  "herms","herns","heroe","heros","herry","herse","hertz","herye","hesps","hests",
  "hetes","heths","heuch","heugh","hevea","hewed","hewer","hewgh","hexad","hexed",
  "hexer","hexes","hexyl","heyed","hiant","hicks","hided","hider","hides","hiems",
  "hight","hijab","hijra","hiked","hiker","hikoi","hilar","hilch","hillo","hilts",
  "hilum","hilus","himbo","hinau","hinds","hings","hinky","hinny","hiois","hiply",
  "hippy","hired","hiree","hirer","hires","hissy","hists","hithe","hived","hiver",
  "hives","hizen","hoaed","hoagy","hoars","hoary","hoast","hobos","hocks","hocus",
  "hodad","hodja","hoers","hogan","hogen","hoggs","hoghs","hohed","hoick","hoiks",
  "hoing","hoise","hoist","hoked","hokes","hokey","hokis","hokku","hokum","holed",
  "holey","holks","holla","hollo","holly","holms","holon","holts","homas","homed",
  "homey","homie","homme","homos","honan","honda","honds","honed","honer","hones",
  "hongi","hongs","honks","honky","hooch","hoods","hoody","hooey","hoofs","hooka",
  "hooky","hooly","hoons","hoops","hoord","hoosh","hoots","hooty","hoove","hoped",
  "hoper","hoppy","horah","horal","horas","horde","horis","horme","horny","horst",
  "horsy","hosed","hosel","hosen","hoser","hoses","hosey","hosta","hotch","hoten",
  "hotly","hotty","houff","houfs","hough","houri","houts","hovea","hoved","hovel",
  "hoven","hoves","howbe","howdy","howes","howff","howfs","howks","howls","howre",
  "howso","hoxed","hoxes","hoyas","hoyed","hoyle","hubby","hucks","hudna","hudud",
  "huers","huffs","huffy","huger","huggy","huhus","huias","hulas","hules","hulks",
  "hulky","hullo","hulls","hully","humas","humfs","humic","humph","humps","humpy",
  "humus","hunch","hunks","hunky","hurds","hurls","hurly","hurra","hurst","hurts",
  "hushy","husks","husky","husos","hussy","hutch","hutia","huzza","huzzy","hwyls",
  "hydra","hydro","hyens","hying","hykes","hylas","hyleg","hyles","hylic","hymen",
  "hymns","hynde","hyoid","hyped","hypes","hypha","hypos","hyrax","hyson","hythe",
  "iambi","iambs","icers","iched","iches","ichor","icier","icily","icing","icker",
  "ickle","ictal","ictic","ictus","idant","idees","ident","idled","idler","idles",
  "idola","idols","idyll","idyls","iftar","igapo","igged","igloo","iglus","ihram",
  "ikans","ikats","ikons","ileac","ileal","ileum","ileus","iliac","iliad","ilial",
  "ilium","iller","illth","imago","imams","imari","imaum","imbar","imbed","imide",
  "imido","imids","imine","imino","immew","immit","immix","imped","impis","impot",
  "imshi","imshy","inapt","inarm","inbye","incle","incog","incur","incus","incut",
  "indew","indie","indol","indow","indri","indue","inerm","infix","infos","infra",
  "ingan","ingle","inion","inked","inker","inkle","inlay","inlet","inned","inorb",
  "inrun","inset","intel","intil","intis","intra","inula","inure","inurn","inust",
  "invar","inwit","iodic","iodid","iodin","iotas","ippon","irade","irids","iring",
  "irked","iroko","irone","irons","irony","isbas","ishes","isled","isles","islet",
  "isnae","issei","issue","istle","itchy","ither","ivied","ivies","ixias","ixora",
  "ixtle","izard","izars","izzat","jaaps","jabot","jacal","jacks","jacky","jaded",
  "jades","jafas","jagas","jager","jaggs","jaggy","jagir","jagra","jakes","jakey",
  "jalap","jalop","jambe","jambo","jambs","jambu","james","jammy","janes","janns",
  "janny","janty","japan","japed","japer","japes","jarks","jarls","jarps","jarta",
  "jarul","jasey","jaspe","jasps","jatos","jauks","jaups","javas","javel","jawan",
  "jawed","jaxie","jeats","jebel","jedis","jeels","jeely","jeeps","jeers","jefes",
  "jeffs","jehad","jehus","jelab","jello","jells","jembe","jemmy","jenny","jerid",
  "jerks","jerky","jerry","jesse","jests","jesus","jetes","jeton","jetty","jeune",
  "jewed","jewie","jhala","jiaos","jibbs","jibed","jiber","jibes","jiffs","jiggy",
  "jigot","jihad","jills","jilts","jimmy","jimpy","jingo","jinks","jinne","jinni",
  "jinns","jirds","jirga","jirre","jisms","jived","jiver","jives","jivey","jnana",
  "jobed","jobes","jocko","jocks","jodel","joeys","johns","joins","joint","joist",
  "joked","jokey","jokol","joled","joles","jolls","jolts","jolty","jomon","jomos",
  "jones","jongs","jonty","jooks","joram","jorum","jotas","jotty","jotun","joual",
  "jougs","jouks","joule","jours","jowar","jowed","jowls","jowly","joyed","jubas",
  "jubes","jucos","judas","judos","jugal","jugum","jujus","juked","jukes","jukus",
  "julep","jumar","jumby","junco","junks","junky","junta","junto","jupes","jupon",
  "jural","jurat","jurel","justs","jutes","jutty","juves","kaama","kabab","kabar",
  "kabob","kacha","kades","kadis","kafir","kagos","kagus","kahal","kaiak","kaids",
  "kaies","kaifs","kaika","kaiks","kails","kaims","kaing","kains","kakas","kakis",
  "kalam","kales","kalif","kalis","kalpa","kamas","kames","kamik","kamis","kamme",
  "kanae","kanas","kandy","kaneh","kanes","kanga","kangs","kanji","kants","kanzu",
  "kaons","kapas","kaphs","kapok","kappa","kaput","karas","karat","karks","karns",
  "karoo","karri","karst","karsy","karts","karzy","kasha","kasme","katas","katis",
  "katti","kaugh","kauri","kauru","kaury","kavas","kawas","kawau","kawed","kayle",
  "kayos","kazis","kazoo","kbars","kebar","kebob","kecks","kedge","kedgy","keech",
  "keefs","keeks","keels","keeno","keens","keets","keeve","kefir","kehua","keirs",
  "kelep","kelim","kells","kelly","kelps","kelpy","kelts","kelty","kembo","kembs",
  "kemps","kempt","kempy","kenaf","kench","kendo","kenos","kente","kents","kepis",
  "kerbs","kerel","kerfs","kerky","kerma","kerne","kerns","keros","kerry","kerve",
  "kesar","kests","ketas","ketch","ketol","kevel","kevil","kexes","keyed","khadi",
  "khafs","khaki","khans","khaph","khats","khaya","khazi","kheda","kheth","khets",
  "khoja","khors","khoum","khuds","kiaat","kiang","kibbe","kibbi","kibei","kibes",
  "kibla","kicky","kiddo","kiddy","kidel","kidge","kiefs","kiers","kieve","kight",
  "kikes","kikoi","kiley","kilim","kilns","kilos","kilps","kilts","kilty","kimbo",
  "kinas","kinda","kindy","kines","kinin","kinks","kinos","kiore","kipes","kippa",
  "kipps","kirby","kirks","kirns","kirri","kisan","kissy","kists","kited","kiter",
  "kithe","kiths","kitty","kivas","kiwis","klang","klaps","klett","klick","klieg",
  "kliks","klong","kloof","kluge","klutz","knags","knaps","knarl","knars","knaur",
  "knave","knawe","kneed","knell","knish","knits","knive","knops","knosp","knout",
  "knowe","knows","knubs","knurl","knurr","knurs","knuts","koans","koaps","koban",
  "kobos","koels","koffs","kofta","kohas","kohls","koine","kojis","koker","kokra",
  "kokum","kolas","kolos","kombu","konbu","kondo","konks","kooks","kooky","koori",
  "kopek","kophs","kopje","koppa","korai","koras","korat","kores","korma","korun",
  "korus","koses","kotch","kotos","kotow","koura","kraal","krabs","kraft","krait",
  "krang","krans","kranz","kraut","kreep","kreng","krewe","krill","krona","krone",
  "kroon","krubi","ksars","kudus","kudzu","kufis","kugel","kuias","kukri","kukus",
  "kulak","kulan","kulas","kulfi","kumys","kuris","kurre","kurta","kurus","kusso",
  "kutas","kutch","kutis","kutus","kuzus","kvass","kvell","kwela","kyack","kyaks",
  "kyang","kyars","kyats","kybos","kydst","kyles","kylie","kylin","kylix","kyloe",
  "kynde","kynds","kypes","kyrie","kytes","kythe","laari","labda","labia","labis",
  "labra","laced","lacer","laces","lacet","lacey","lacks","laded","laden","lader",
  "lades","ladle","laers","laevo","lagan","lager","lahar","laich","laics","laids",
  "laigh","laika","laiks","laird","lairs","lairy","laith","laity","laked","laker",
  "lakhs","lakin","laksa","laldy","lalls","lamas","lambs","lamby","lamed","lamer",
  "lames","lamia","lammy","lanai","lanas","lanch","lande","lanks","lants","lapel",
  "lapin","lapis","lapje","lapse","larch","lards","lardy","laree","lares","largo",
  "laris","larks","larky","larns","larum","lased","lases","lassi","lasso","lassu",
  "latah","lated","laten","latex","lathi","laths","lathy","latke","lauan","lauch",
  "lauds","laufs","laund","laura","lavas","laved","laver","laves","lavra","lawed",
  "lawer","lawin","lawks","lawny","laxer","laxes","laxly","layed","layin","layup",
  "lazar","lazed","lazes","lazos","lazzi","lazzo","leady","leafs","leams","leans",
  "leant","leany","leaps","leare","lears","leary","leats","leave","leavy","leaze",
  "leben","leccy","ledgy","ledum","leear","leeks","leeps","leers","leery","leese",
  "leets","lefte","lefts","lefty","leger","leges","legge","leggy","legit","lehrs",
  "lehua","leirs","leish","leman","lemed","lemel","lemes","lemma","lends","lenes",
  "lengs","lenis","lenos","lense","lenti","lento","leone","leper","lepid","lepra",
  "lepta","lered","leres","lerps","lesbo","leses","lests","letch","lethe","letup",
  "leuch","leuco","leuds","leugh","levee","levin","levis","lewis","lexes","lexis",
  "lezes","lezza","lezzy","liana","liane","liang","liard","liars","liart","libel",
  "liber","libra","libri","lichi","licht","licit","licks","lidar","lidos","liefs",
  "liege","liens","liers","lieus","lieve","lifer","lifes","ligan","liger","ligge",
  "ligne","liked","liken","liker","likes","likin","lills","lilos","lilts","liman",
  "limas","limax","limba","limbi","limby","limed","limen","limes","limey","limit",
  "limma","limns","limos","limpa","limps","linac","linch","linds","lindy","liney",
  "linga","lings","lingy","linin","linky","linns","linny","linos","lints","linty",
  "linum","linux","lipid","lipin","lipos","lippy","liras","lirks","lirot","lisks",
  "lisle","lisps","litai","litas","lited","liter","lites","lithe","litho","liths",
  "litre","lived","liven","livid","livor","livre","llano","loach","loafs","loams",
  "loamy","loast","loath","loave","lobar","lobed","lobes","lobos","lobus","lochs",
  "locos","locum","locus","loden","lodes","lodge","loess","lofts","logan","loges",
  "loggy","logia","logie","login","logoi","logon","logos","lohan","loids","loins",
  "loipe","loirs","lokes","lolls","lolly","lolog","lomas","lomed","lomes","loner",
  "longa","longe","longs","looby","looed","looey","loofa","loofs","looie","looms",
  "loons","loony","loopy","loord","loots","loped","loper","lopes","loppy","loral",
  "loran","lordy","lorel","lores","loric","loris","losed","losel","losen","lossy",
  "lotah","lotas","lotes","lotic","lotos","lotte","lotto","lotus","loued","lough",
  "louie","louis","louma","lound","louns","loupe","loups","loure","lours","loury",
  "louse","louts","lovat","loved","lovey","lowan","lowed","lowes","lowly","lownd",
  "lowne","lowns","lowps","lowry","lowse","lowts","loxed","loxes","lozen","luach",
  "luaus","lubed","lubes","lubra","luces","lucks","lucre","ludes","ludic","ludos",
  "luffa","luffs","luged","luger","luges","lulls","lulus","lumas","lumme","lummy",
  "lumps","lumpy","lunas","lunes","lunet","lungi","lunks","lunts","lupin","lupus",
  "lurch","lured","lurer","lures","lurex","lurgi","lurgy","lurid","lurks","lurry",
  "lurve","luser","lushy","lusks","lusts","lusus","lutea","luted","luter","lutes",
  "luvvy","luxes","lweis","lyams","lyard","lyart","lyase","lycea","lycee","lycra",
  "lymes","lymph","lynch","lynes","lyres","lysed","lyses","lysin","lysis","lysol",
  "lyssa","lyted","lytes","lythe","lytic","lytta","maaed","maare","maars","mabes",
  "macaw","maced","macer","maces","mache","machi","macho","machs","macks","macle",
  "macon","madam","madge","madid","madly","madre","mafic","mages","maggs","magma",
  "magot","magus","mahoe","mahua","mahwa","maids","maiko","maiks","maile","maill",
  "maims","mains","maire","mairs","maise","maist","maize","makar","makis","makos",
  "malam","malar","malas","malax","malic","malik","malis","malls","malms","malmy",
  "malts","malty","malva","malwa","mamas","mamba","mambo","mamee","mamey","mamie",
  "mamma","mammy","manas","manat","mandi","maned","maneh","manes","manet","mange",
  "mangs","mangy","mania","manic","manis","manky","manna","manos","manse","manta",
  "manto","manty","manul","manus","mapau","maqui","marae","marah","maras","marcs",
  "mardy","mares","marge","margs","maria","marid","marka","marle","marls","marly",
  "marms","maron","maror","marri","marse","marts","marvy","masas","mased","maser",
  "mases","mashy","mason","massa","masse","massy","masts","masty","masus","matai",
  "mated","mater","mates","matey","maths","matin","matlo","matte","matts","matza",
  "matzo","mauby","mauds","mauls","maund","mauri","mauts","mauve","maven","mavie",
  "mavin","mavis","mawed","mawks","mawky","mawrs","maxed","maxes","maxis","mayan",
  "mayas","mayed","mayos","mayst","mazed","mazer","mazes","mazey","mazut","mbira",
  "meads","meane","meant","meany","meare","mease","meath","meats","meaty","mebos",
  "mecca","mecks","medal","medii","medle","meeds","meers","meffs","meins","meint",
  "meiny","meith","mekka","melas","melds","melic","melik","mells","melts","melty",
  "memes","memos","menad","mends","mened","menes","menge","mengs","mensa","mense",
  "mensh","menta","mento","menus","meous","meows","merch","mercs","merde","mered",
  "merel","merer","meres","merge","meril","meris","merks","merle","merls","merse",
  "mesal","mesas","mesel","meses","meshy","mesic","mesne","meson","messy","mesto",
  "meted","metes","metho","meths","metic","metif","metis","metol","metre","metro",
  "meuse","meved","meves","mewed","mewls","meynt","mezes","mezze","mezzo","mhorr",
  "miaou","miaow","miasm","miaul","micas","miche","micht","micks","micky","micos",
  "micra","micro","middy","midge","midgy","midis","miens","mieve","miffs","miffy",
  "mifty","miggs","mihis","miked","mikes","mikra","milch","milds","miler","milia",
  "milko","milks","milky","mille","milor","milos","milpa","milts","milty","miltz",
  "mimed","mimeo","mimer","mimes","mimsy","minae","minar","minas","mincy","mined",
  "miner","minge","mings","mingy","minim","minis","minke","minks","minny","minos",
  "mints","minty","mired","mires","mirex","mirin","mirks","mirky","mirly","mirvs",
  "mirza","misch","misdo","mises","misgo","misos","missa","missy","mists","mitch",
  "miter","mites","mitis","mitre","mitts","mixed","mixen","mixer","mixes","mixte",
  "mixup","mizen","mizzy","mneme","moans","moats","mobby","mobes","mobie","moble",
  "mocha","mochs","mochy","mocks","modal","moder","modge","modii","modus","moers",
  "mofos","moggy","mohel","mohrs","mohua","mohur","moils","moira","moire","moits",
  "mojos","mokes","mokis","mokos","molal","molas","molds","moldy","molla","molls",
  "molly","molto","molts","momes","momma","mommy","momus","monad","monal","monas",
  "monde","mondo","moner","mongo","mongs","monie","monos","monte","monty","mooch",
  "mooed","mooks","moola","mooli","mools","mooly","moony","moops","moors","moory",
  "moots","moove","moped","moper","mopes","mopey","moppy","mopsy","mopus","morae",
  "moras","morat","moray","morel","mores","moria","morne","morns","moron","morra",
  "morro","morse","morts","mosed","moses","mosey","mosks","mosso","moste","mosts",
  "moted","moten","motes","motet","motey","moths","mothy","motis","motte","motts",
  "motty","motus","motza","mouch","moues","mould","mouls","moult","moups","moust",
  "mousy","moved","mowas","mowed","mower","mowra","moxas","moxie","moyas","moyle",
  "moyls","mozed","mozes","mozos","mpret","mucho","mucic","mucid","mucin","mucks",
  "mucky","mucor","mucro","mucus","mudge","mudir","mudra","muffs","mufti","mugga",
  "muggs","muggy","muhly","muids","muils","muirs","muist","mujik","mulct","muled",
  "mules","muley","mulga","mulla","mulls","mulse","mulsh","mumms","mumps","mumsy",
  "mumus","munch","munga","mungo","mungs","munis","munts","muntu","muons","muras",
  "mured","mures","murex","murid","murks","murls","murly","murra","murre","murri",
  "murrs","murry","murti","murva","musar","musca","mused","muser","muses","muset",
  "musha","musit","musks","musky","musos","musse","mussy","musth","musts","mutch",
  "muter","mutes","mutha","mutis","muton","mutts","muxed","muxes","muzzy","mvule",
  "myall","mylar","mynah","mynas","myoid","myoma","myope","myops","myopy","myrrh",
  "mysid","mythi","myths","mythy","myxos","mzees","naams","naans","nabes","nabis",
  "nabks","nabla","nabob","nache","nacho","nacre","nadas","naeve","naevi","naffs",
  "nagas","naggy","nagor","nahal","naiad","naifs","naiks","naira","nairu","naked",
  "naker","nakfa","nalas","naled","nalla","named","namer","namma","nanas","nance",
  "nancy","nandu","nanna","nanua","napas","naped","napes","napoo","nappa","nappe",
  "nappy","naras","narco","narcs","nards","nares","naric","naris","narks","narky",
  "narre","nashi","natal","natch","nates","natis","natty","nauch","naunt","navar",
  "navel","naves","navew","navvy","nawab","nazes","nazir","nazis","neafe","neals",
  "neaps","nears","neath","neats","nebek","nebel","neddy","needy","neeld","neele",
  "neemb","neems","neeps","neese","neeze","negro","negus","neifs","neigh","neist",
  "neive","nelis","nelly","nemas","nemns","nempt","nenes","neons","neper","nepit",
  "neral","nerds","nerdy","nerka","nerks","nerol","nerts","nertz","nervy","netes",
  "netop","netts","netty","neuks","neume","neums","nevel","neves","nevus","newed",
  "newel","newer","newie","newsy","newts","nexts","ngaio","ngana","ngati","ngoma",
  "ngwee","nicad","nicer","niche","nicht","nicks","nicky","nicol","nidal","nided",
  "nides","nidor","nidus","niece","niefs","nieve","nifes","niffs","niffy","nifty",
  "niger","nighs","nihil","nikau","nills","nimbi","nimbs","nimps","nines","ninny",
  "ninon","ninth","nipas","nippy","niqab","nirls","nirly","nisei","nisse","nisus",
  "niter","nites","nitid","niton","nitre","nitro","nitry","nitty","nival","nixed",
  "nixer","nixes","nixie","nizam","nkosi","noahs","nobby","nocks","nodal","noddy",
  "nodus","noels","noggs","nohow","noils","noily","noint","noirs","noles","nolls",
  "nolos","nomad","nomas","nomen","nomes","nomic","nomoi","nomos","nonas","nonce",
  "nones","nonet","nongs","nonis","nonny","nonyl","nooit","nooks","nooky","noons",
  "noops","noose","nopal","noria","noris","norks","norma","nosed","noser","nosey",
  "notal","noter","notum","nould","noule","nouls","nouns","nouny","noups","novae",
  "novas","novum","noway","nowed","nowls","nowts","nowty","noxal","noxes","noyau",
  "noyed","noyes","nubby","nubia","nucha","nuddy","nuder","nudes","nudie","nudzh",
  "nuffs","nugae","nuked","nukes","nulla","nulls","numbs","numen","nunny","nurds",
  "nurdy","nurls","nurrs","nutso","nutsy","nyaff","nyala","nying","nymph","nyssa",
  "oaked","oaker","oakum","oared","oases","oasts","oaten","oater","oaves","obang",
  "obeah","obeli","obese","obeys","obias","obied","obiit","obits","objet","oboes",
  "obole","oboli","obols","occam","ocher","oches","ochre","ochry","ocker","ocrea",
  "octad","octal","octan","octas","octet","octyl","oculi","odahs","odals","odder",
  "oddly","odeon","odeum","odism","odist","odium","odors","odour","odsos","odyle",
  "odyls","ofays","offal","offed","oflag","ofter","ogams","ogees","oggin","ogham",
  "ogive","ogled","ogler","ogles","ogmic","ogres","ohias","ohing","ohmic","ohone",
  "oidia","oiled","oiler","oinks","oints","ojime","okapi","okays","okehs","okras",
  "oktas","olden","older","oldie","oleic","olein","olent","oleos","oleum","olios",
  "ollas","ollav","oller","ollie","ology","olpae","olpes","omasa","omber","ombre",
  "ombus","omens","omers","omits","omlah","omovs","omrah","oncer","onces","oncet",
  "oncus","onely","oners","onery","onion","onium","onkus","onlay","onned","ontic",
  "oobit","oohed","oomph","oonts","ooped","oorie","ooses","ootid","oozed","oozes",
  "opahs","opals","opepe","opine","oping","opium","oppos","opsin","opter","orach",
  "oracy","orals","orang","orant","orate","orbed","orcas","orcin","ordos","oread",
  "orfes","orgia","orgic","orgue","oribi","oriel","orixa","orles","orlon","orlop",
  "ormer","ornis","orpin","orris","ortho","orval","orzos","oscar","oshac","osier",
  "osmic","osmol","ossia","ostia","otaku","otary","ottar","ottos","oubit","oucht",
  "ouija","oulks","oumas","oundy","oupas","ouped","ouphe","ouphs","ourie","ousel",
  "ousts","outby","outdo","outed","outgo","outre","outro","ouzel","ouzos","ovals",
  "ovary","ovate","ovels","ovens","overs","overt","ovine","ovist","ovoid","ovoli",
  "ovolo","ovule","owche","owing","owled","owler","owlet","owres","owrie","owsen",
  "oxbow","oxers","oxeye","oxids","oxime","oxims","oxlip","oxter","oyers","ozeki",
  "ozzie","paals","pacas","paced","pacer","paces","pacey","pacha","pacos","pacta",
  "pacts","padis","padle","padma","padre","padri","paean","paeon","paged","pager",
  "pagle","pagod","pagri","paiks","pails","pains","paire","paisa","paise","pakka",
  "palas","palay","palea","paled","paler","pales","palet","palki","palla","palls",
  "pally","palmy","palpi","palps","palsy","pampa","panax","pance","panda","pands",
  "pandy","paned","panga","pangs","panim","panne","pansy","panto","pants","panty",
  "paoli","paolo","papal","papas","papaw","papes","pappi","pappy","parae","paras",
  "parch","pardi","pards","pardy","pared","pareo","parer","pares","pareu","parev",
  "parge","pargo","paris","parka","parki","parky","parle","parly","parol","parps",
  "parra","parrs","parry","parti","parve","parvo","paseo","pases","pasha","pashm",
  "paspy","passe","pasts","pasty","pated","paten","pater","pates","patin","patly",
  "patsy","patte","patty","patus","pauas","pauls","pavan","paven","paver","paves",
  "pavid","pavin","pavis","pawas","pawaw","pawed","pawer","pawks","pawky","pawls",
  "pawns","paxes","payed","payee","payer","payor","paysd","peage","peags","peaky",
  "peals","peans","peare","pears","peart","pease","peats","peaty","peavy","peaze",
  "pebas","pechs","pecke","pecks","pecky","pedes","pedro","peece","peeks","peels",
  "peens","peeoy","peepe","peeps","peery","peeve","peggy","peghs","peins","peise",
  "peize","pekan","pekes","pekin","pekoe","pelas","peles","pelfs","pells","pelma",
  "pelon","pelta","pelts","penal","pence","pends","pendu","pened","penes","pengo",
  "penie","penis","penks","penna","penne","penni","pents","peons","peony","pepla",
  "pepos","peppy","perai","perce","perdu","perdy","perea","peres","peris","perks",
  "perms","perns","perps","perry","perse","perst","perts","perve","pervs","pesos",
  "pesto","pests","pesty","petar","peter","petit","petre","petti","petto","pewee",
  "pewit","peyse","phage","phang","phare","pheer","phene","pheon","phese","phial",
  "phlox","phoca","phohs","phono","phons","phony","phots","phpht","phuts","phyla",
  "phyle","pians","pibal","pical","picas","piccy","picky","picot","picra","picul",
  "piend","piers","piert","pieta","piets","piety","piezo","piggy","pight","pigmy",
  "piing","pikas","pikau","piked","piker","pikes","pikey","pikis","pikul","pilaf",
  "pilao","pilar","pilau","pilaw","pilch","pilea","piled","pilei","piler","pilis",
  "pilow","pilum","pilus","pimas","pimps","pinas","pined","piney","pingo","pings",
  "pinko","pinks","pinky","pinna","pinny","pinon","pinot","pinta","pinto","pints",
  "pinup","pions","piony","pious","pioye","pioys","pipal","pipas","piped","piper",
  "pipet","pipis","pipit","pippy","pipul","pique","pirai","pirls","pirns","pirog",
  "pisco","pises","pisky","pisos","piste","pitas","pitch","piths","pithy","piton",
  "pitta","piums","pivot","pixes","pized","pizes","plaas","plack","plage","plait",
  "plaps","plash","plasm","plast","plats","platy","playa","plebe","plebs","plena",
  "pleon","plesh","plews","plica","plies","plims","pling","plink","ploat","plods",
  "plong","plonk","plook","plops","plotz","plouk","plows","ploys","plues","pluff",
  "plums","plumy","plush","plyer","poaka","poake","poboy","pocks","pocky","podal",
  "poddy","podex","podge","podgy","podia","poems","poeps","poesy","pogey","pogge",
  "pogos","poilu","poind","pokal","poked","pokes","pokey","pokie","poled","poler",
  "poles","poley","polio","polis","polje","polka","polks","polly","polos","polts",
  "polys","pombe","pomes","pommy","pomos","pomps","ponce","poncy","pones","poney",
  "ponga","pongo","pongs","pongy","ponks","ponts","ponty","ponzu","poods","pooed",
  "poofs","poofy","poohs","pooja","pooka","pooks","poons","poops","poori","poort",
  "poots","poove","poovy","poppa","popsy","porae","poral","pored","porer","porge",
  "porgy","porks","porky","porno","porns","porny","porta","porty","poses","posey",
  "posho","potae","potch","poted","potes","potin","potoo","potsy","potto","potts",
  "potty","pouff","poufs","pouke","pouks","poule","poulp","poult","poupe","poupt",
  "pours","pouts","pouty","powan","powin","pownd","powns","powny","powre","poxed",
  "poxes","poynt","poyou","poyse","pozzy","praam","prads","prahu","prams","prana",
  "prang","praos","prase","prate","prats","pratt","praty","praus","prays","predy",
  "preed","preen","prees","preif","prems","premy","prent","preop","preps","presa",
  "prese","prest","preve","prexy","preys","prial","prick","pricy","pried","prief",
  "prier","pries","prigs","prill","prima","primi","primo","primp","prims","primy",
  "prink","prion","prise","priss","proas","probs","prods","proem","profs","progs",
  "proin","proke","prole","proll","promo","proms","prong","pronk","props","prore",
  "proso","pross","prost","prosy","proul","prows","proyn","prunt","pruta","pryer",
  "pryse","pseud","pshaw","psion","psoae","psoai","psoas","psora","psych","psyop",
  "pubes","pubic","pubis","pucan","pucer","puces","pucka","pucks","puddy","pudge",
  "pudic","pudor","pudsy","pudus","puers","puffs","puffy","puggy","pugil","puhas",
  "pujah","pujas","puked","puker","pukes","pukka","pukus","pulao","pulas","puled",
  "puler","pules","pulik","pulis","pulka","pulks","pulli","pulmo","pulps","pulpy",
  "pulus","pumas","pumie","punas","punce","punga","pungs","punji","punka","punks",
  "punky","punny","punto","punts","punty","pupae","pupal","pupas","pupus","purda",
  "pured","puree","purer","pures","purim","purin","puris","purls","purpy","purrs",
  "pursy","purty","puses","pusle","pussy","putid","puton","putti","putto","putts",
  "puzel","pyats","pyets","pygal","pyins","pylon","pyned","pynes","pyoid","pyots",
  "pyral","pyran","pyres","pyrex","pyric","pyros","pyxed","pyxes","pyxie","pyxis",
  "pzazz","qadis","qaids","qanat","qibla","qophs","qorma","quads","quaff","quags",
  "quail","quair","quais","quaky","quale","quant","quare","quark","quart","quash",
  "quasi","quass","quate","quats","quayd","quays","qubit","quean","queen","queer",
  "quell","queme","quena","quern","queyn","queys","quich","quids","quiff","quilt",
  "quims","quina","quine","quino","quins","quint","quipo","quips","quipu","quire",
  "quirt","quist","quite","quits","quoad","quods","quoif","quoin","quoit","quoll",
  "quonk","quops","quoth","qursh","quyte","rabat","rabic","rabis","raced","racer",
  "rache","racon","radge","radii","radix","radon","raffs","rafts","ragas","ragde",
  "raged","ragee","rager","rages","ragga","raggs","raggy","ragis","rahed","rahui",
  "raias","raiks","raile","raine","raird","raita","raits","rajah","rajas","rajes",
  "raked","rakee","raker","rakes","rakis","rakus","rales","ralph","ramal","ramee",
  "ramen","ramet","ramie","ramin","ramis","rammy","ramps","ramus","ranas","rance",
  "rands","randy","ranee","rangi","rangy","ranid","ranis","ranke","rants","raped",
  "raper","rapes","raphe","rappe","rared","raree","rarer","rares","rarks","rased",
  "raser","rases","rasps","raspy","rasse","rasta","ratal","ratan","ratas","ratch",
  "rated","ratel","rater","ratha","rathe","raths","ratio","ratoo","ratos","ratty",
  "ratus","rauns","raupo","raved","ravel","raver","raves","ravin","rawer","rawin",
  "rawly","rawns","raxed","raxes","rayah","rayas","rayed","rayle","rayne","rayon",
  "razed","razee","razer","razes","razoo","razor","react","readd","reaks","realo",
  "reals","reame","reams","reamy","reans","reaps","rearm","rears","reast","reata",
  "reate","reave","rebar","rebbe","rebec","rebid","rebit","rebop","rebus","rebut",
  "rebuy","recal","recap","recce","recco","reccy","recit","recks","recon","recta",
  "recti","recto","recur","redan","redds","reddy","reded","redes","redia","redid",
  "redip","redly","redon","redos","redox","redry","redub","redux","redye","reech",
  "reede","reeds","reedy","reefy","reeks","reeky","reels","reens","reest","reeve",
  "refed","refel","reffo","refit","refix","refly","refry","regal","regar","reges",
  "reggo","regie","regma","regna","regos","regur","rehab","rehem","reifs","reify",
  "reiki","reiks","reink","reins","reird","reist","reive","rejig","rejon","reked",
  "rekes","rekey","relet","relie","relit","reman","remap","remen","remet","remex",
  "remix","renal","renay","rends","reney","renga","renig","renin","renne","rente",
  "rents","reoil","repeg","repin","repla","repos","repot","repps","repro","reran",
  "rerig","rerun","resat","resaw","resay","resee","reses","reset","resew","resid",
  "resit","resod","resow","resto","resty","retag","retax","retch","retem","retes",
  "retia","retie","revet","revie","revue","rewan","rewax","rewed","rewet","rewin",
  "rewon","rewth","rexes","rheas","rheme","rheum","rhies","rhime","rhine","rhino",
  "rhody","rhomb","rhone","rhumb","rhyme","rhyne","rhyta","rials","riant","riata",
  "ribas","ribby","ribes","riced","ricer","rices","ricey","richt","ricin","ricks",
  "ridgy","riels","riems","rieve","rifer","riffs","rifte","rifts","rifty","riggs",
  "right","rigol","riled","riles","riley","rille","rills","rimae","rimed","rimer",
  "rimes","rimus","rinds","rindy","rines","rinks","rioja","riots","riped","ripen",
  "riper","ripes","ripps","riser","rishi","risps","risus","rites","ritts","ritzy",
  "rival","rivas","rived","rivel","riven","river","rives","rivos","riyal","rizas",
  "roach","roams","roans","roars","roary","roate","robed","roble","roded","rodeo",
  "rodes","roger","roguy","roils","roily","roins","roist","rojak","rojis","roked",
  "roker","rokes","rolag","rolfs","romal","roman","romas","romeo","romps","ronde",
  "rondo","roneo","rones","ronin","ronne","ronte","ronts","roods","roofs","roofy",
  "rooks","rooky","roons","roops","roopy","roosa","roose","roost","rooty","roped",
  "roper","ropey","roque","roral","rores","roric","rorid","rorie","rorts","rorty",
  "rosed","roset","roshi","rosin","rosit","rosti","rosts","rotal","rotan","rotas",
  "rotch","roted","rotes","rotis","rotls","roton","rotor","rotos","rotte","rouen",
  "roues","roule","rouls","roums","roups","roupy","rouse","roust","routh","routs",
  "roved","roven","roves","rowan","rowdy","rowed","rowel","rowen","rower","rowme",
  "rownd","rowth","rowts","royne","royst","rozet","rozit","ruana","rubai","rubby",
  "rubel","rubes","rubin","ruble","rubus","ruche","rucks","rudas","rudds","ruddy",
  "ruder","rudes","rudie","ruers","ruffe","ruffs","rugae","rugal","ruggy","ruing",
  "rukhs","ruled","rumal","rumbo","rumen","rumes","rumly","rummy","rumor","rumpo",
  "rumps","rumpy","runch","runds","runed","runic","runny","runts","runty","rupee",
  "rupia","rurps","rurus","rusas","ruses","rushy","rusks","rusma","russe","rusts",
  "ruths","rutin","rutty","ryals","rybat","ryked","rykes","rymme","rynds","ryots",
  "ryper","sabal","sabed","saber","sabes","sabin","sabir","sable","sabot","sabra",
  "sabre","sacra","saddo","sades","sadhe","sadhu","sadis","sados","sadza","safed",
  "safer","safes","sagas","sager","sages","saggy","sagos","sagum","saheb","sahib",
  "saice","saick","saics","saids","saiga","sails","saims","saine","sains","sairs",
  "saist","saith","sajou","sakai","saker","sakes","sakia","sakis","salal","salep",
  "salet","salic","salix","salle","sally","salmi","salol","salon","salop","salpa",
  "salps","salsa","salse","salto","salue","saman","samas","samba","sambo","samek",
  "samel","samen","sames","samey","samfu","sammy","sampi","samps","saned","saner",
  "sanes","sanga","sangh","sango","sangs","sanko","sansa","santo","sants","sapan",
  "sapid","sapor","sappy","saran","sards","sared","saree","sarge","sargo","sarin",
  "saris","sarks","sarky","sarod","saros","sarus","saser","sasin","sasse","satai",
  "satay","sated","satem","sates","satin","satis","satyr","sauba","sauch","saugh",
  "sauls","sault","saunt","saury","saute","sauts","saved","saver","savey","savin",
  "savoy","sawah","sawed","sawer","saxes","sayed","sayer","sayid","sayne","sayon",
  "sayst","sazes","scabs","scads","scaff","scags","scail","scala","scall","scaly",
  "scand","scans","scapa","scape","scapi","scarp","scars","scart","scath","scats",
  "scatt","scaud","scaup","scaur","scaws","sceat","scena","scend","schav","schmo",
  "schul","schwa","scion","sclim","scody","scoff","scogs","scold","scoog","scoop",
  "scoot","scopa","scops","scorn","scots","scoug","scoup","scour","scowp","scows",
  "scrab","scrae","scrag","scran","scrat","scraw","scray","scrim","scrip","scrod",
  "scrog","scrow","scrum","scuba","scudi","scudo","scuds","scuff","scuft","scugs",
  "sculk","scull","sculp","sculs","scums","scups","scurf","scurs","scuse","scuta",
  "scute","scuts","scuzz","scyes","sdayn","sdein","seame","seamy","seans","seare",
  "sears","sease","seaze","sebum","secco","sechs","sects","seder","sedes","sedge",
  "sedgy","sedum","seedy","seeld","seels","seely","seeps","seepy","seers","sefer",
  "segar","segni","segno","segol","segos","segue","seifs","seils","seine","seirs",
  "seise","seism","seity","seize","sekos","sekts","selah","seles","selfs","sella",
  "selle","sells","selva","semee","semen","semes","semie","semis","senas","sengi",
  "senna","senor","sensa","sense","sensi","sente","senti","sents","senvy","senza",
  "sepad","sepal","sepia","sepic","sepoy","septa","septs","serac","serai","seral",
  "sered","serer","seres","serfs","serge","seric","serif","serin","serks","seron",
  "serow","serra","serre","serrs","serry","serum","servo","sesey","sessa","setae",
  "setal","seton","setts","sever","sewan","sewar","sewed","sewel","sewen","sewer",
  "sewin","sexed","sexer","sexes","sexto","sexts","seyen","shack","shads","shady",
  "shags","shahs","shake","shako","shakt","shaky","shalm","shalt","shaly","shama",
  "shams","shand","shank","shans","shaps","shard","sharn","shash","shaul","shave",
  "shawm","shawn","shaws","shaya","shays","shchi","sheaf","sheal","sheas","sheds",
  "sheel","sheik","shend","shent","sheol","sherd","shere","shets","sheva","shewn",
  "shews","shiai","shied","shiel","shier","shies","shill","shily","shims","shins",
  "ships","shirk","shirr","shirs","shish","shiso","shist","shite","shits","shiur",
  "shiva","shive","shivs","shlep","shlub","shmek","shoal","shoat","shoed","shoer",
  "shoes","shogi","shogs","shoji","shola","shone","shook","shool","shoon","shoos",
  "shoot","shope","shops","shorl","shorn","shote","shots","shott","showd","shows",
  "showy","shoyu","shred","shrew","shris","shrow","shtik","shtum","shtup","shuck",
  "shule","shuln","shuls","shuns","shunt","shura","shush","shute","shuts","shwas",
  "shyer","shyly","sials","sibbs","sibyl","sices","sicht","sicko","sicks","sidas",
  "sider","sidha","sidhe","sidle","siege","sield","siens","sient","sieth","sieur",
  "sieve","sifts","sighs","sigil","sigla","signa","signs","sijos","sikas","siker",
  "sikes","silds","siled","silen","siler","siles","silex","silks","silky","sills",
  "silos","silts","silty","silva","simar","simas","simba","simis","simps","simul",
  "sinds","sined","sines","sinew","singe","sings","sinhs","sinky","sinus","siped",
  "sipes","sippy","sired","siree","sires","sirih","siris","siroc","sirra","sirup",
  "sisal","sises","sists","sitar","sited","sithe","sitka","situp","situs","siver",
  "sixer","sixes","sixmo","sixte","sizar","sized","sizel","sizer","skags","skail",
  "skald","skank","skart","skats","skatt","skaws","skean","skear","skeed","skeef",
  "skeen","skeer","skees","skeet","skegg","skegs","skein","skelf","skell","skelm",
  "skelp","skene","skens","skeos","skeps","skers","skets","skews","skids","skied",
  "skier","skies","skiey","skiff","skimo","skims","skink","skins","skint","skios",
  "skips","skirl","skirr","skirt","skite","skits","skive","skivy","sklim","skoal",
  "skoff","skols","skool","skort","skosh","skran","skrik","skuas","skugs","skulk",
  "skyed","skyer","skyey","skyfs","skyre","skyrs","skyte","slack","slade","slaes",
  "slags","slaid","slain","slake","slane","slang","slank","slant","slart","slats",
  "slaty","slave","slaws","slays","sleer","slews","sleys","slick","slier","slily",
  "slims","slipe","slipt","slish","slits","slive","sloan","slobs","sloes","slogs",
  "sloid","slojd","sloom","sloop","sloot","slops","slopy","slorm","slosh","slove",
  "slows","sloyd","slubb","slubs","slued","slues","sluff","slugs","sluit","slums",
  "slunk","slurb","slurs","sluse","slush","sluts","slyer","slyly","slype","smaak",
  "smaik","smalm","smalt","smarm","smaze","smeek","smees","smerk","smews","smirr",
  "smirs","smite","smits","smock","smogs","smoko","smoky","smolt","smoor","smoot",
  "smore","smote","smout","smowt","smugs","smurs","smush","smuts","snabs","snags",
  "snaky","snarf","snark","snars","snary","snash","snath","snaws","snead","sneap",
  "snebs","sneck","sneds","sneed","snees","snell","snibs","snick","snies","snift",
  "snigs","snipe","snips","snipy","snirt","snits","snobs","snods","snoek","snoep",
  "snogs","snoke","snood","snook","snool","snoot","snots","snowk","snows","snowy",
  "snubs","snuck","snuff","snugs","snush","snyes","soaks","soaps","soapy","soare",
  "soars","soave","sobas","sober","socas","socko","socks","socle","sodas","soddy",
  "sodic","sodom","sofar","sofas","softa","softs","softy","soger","soggy","soily",
  "sojas","sokah","soken","sokes","sokol","solah","solan","solas","solde","soldi",
  "soldo","solds","soled","solei","soler","soles","solon","solos","solum","solus",
  "soman","somas","sonar","sonce","sonde","sones","sonly","sonne","sonny","sonse",
  "sonsy","sooey","sooks","soole","sools","sooms","soops","soote","sooth","soots",
  "sooty","sophs","sophy","sopor","soppy","sopra","soral","soras","sorbo","sorbs",
  "sorda","sordo","sords","sored","soree","sorel","sorer","sores","sorex","sorgo",
  "sorns","sorra","sorta","sorus","soths","sotol","souce","souct","sough","souks",
  "soums","sound","soups","soupy","sours","souse","souts","sowar","sowce","sowed",
  "sower","sowff","sowfs","sowle","sowls","sowms","sownd","sowne","sowps","sowse",
  "sowth","soyas","soyle","soyuz","sozin","spacy","spado","spaed","spaer","spaes",
  "spags","spahi","spail","spain","spait","spake","spald","spale","spall","spalt",
  "spams","spane","spang","spank","spard","spars","spart","spate","spats","spaul",
  "spawl","spaws","spayd","spays","spaza","spazz","speal","spean","speat","speel",
  "speer","speil","speir","speks","speld","spelk","spelt","speos","sperm","spets",
  "speug","spews","spewy","spial","spica","spick","spics","spide","spiel","spier",
  "spiff","spifs","spiks","spiky","spile","spilt","spims","spina","spink","spins",
  "spiny","spire","spirt","spiry","spite","spits","spitz","spivs","splat","splay",
  "split","spode","spods","spoil","spoom","spoor","spoot","spore","sposh","sprad",
  "sprag","sprat","spred","sprew","sprit","sprod","sprog","sprue","sprug","spuds",
  "spued","spuer","spues","spugs","spule","spume","spumy","spurn","spurs","spurt",
  "sputa","spyal","spyre","squab","squaw","squeg","squib","squit","squiz","stabs",
  "stack","stade","stags","stagy","staid","staig","stane","stang","staph","staps",
  "stare","starn","starr","stars","stats","staun","staws","stead","stean","stear",
  "stedd","stede","steds","steed","steek","steem","steen","steil","stein","stela",
  "stele","stell","steme","stend","steno","stens","stent","stept","stere","stets",
  "stews","stewy","stich","stied","sties","stilb","stile","stilt","stime","stims",
  "stimy","stipa","stipe","stire","stirk","stirp","stive","stivy","stoae","stoai",
  "stoas","stoat","stobs","stoep","stogy","stoit","stoln","stoma","stond","stong",
  "stonk","stonn","stony","stook","stoor","stope","stopt","stoss","stots","stott",
  "stoun","stoup","stour","stown","stowp","stows","strad","strae","strag","strep",
  "strew","stria","strig","strop","strow","stroy","strum","strut","stubs","studs",
  "stull","stulm","stumm","stums","stuns","stupa","stupe","sture","sturt","styed",
  "styes","styli","stylo","styme","stymy","styre","styte","suave","subah","subas",
  "subby","suber","subha","succi","sucks","sucky","sucre","sudds","sudor","sudsy",
  "suede","suent","suers","suets","suety","sugan","sughs","suids","suing","suint",
  "sujee","sukhs","sulci","sulfa","sulfo","sulks","sully","sulus","sumac","summa",
  "sumos","sumph","sumps","sunks","sunna","sunns","sunup","supes","supra","surah",
  "sural","suras","surat","surds","sured","surer","sures","surfs","surfy","surgy",
  "surly","surra","suses","susus","sutor","sutra","sutta","swabs","swack","swads",
  "swage","swags","swail","swain","swale","swaly","swami","swamy","swang","swank",
  "swans","swapt","sward","sware","swarf","swart","swash","swats","swayl","sways",
  "sweal","swede","sweed","sweel","sweer","swees","sweir","swell","swelt","swerf",
  "sweys","swies","swigs","swims","swink","swire","swish","swiss","swith","swits",
  "swive","swizz","swobs","swoln","swone","swops","swopt","swots","swoun","sybbe",
  "sybil","syboe","sybow","sycee","syces","syens","syker","sykes","sylis","sylph",
  "sylva","symar","synch","syncs","synds","syned","synes","synth","syped","sypes",
  "syphs","syrah","syren","sysop","sythe","syver","taals","taata","taber","tabes",
  "tabid","tabis","tabla","taboo","tabor","tabun","tabus","tacan","taces","tacet",
  "tache","tacho","tachs","tacks","tacky","tacos","tacts","taels","tafia","taggy",
  "tagma","tahas","tahou","tahrs","taiga","taigs","tains","taira","taish","taits",
  "tajes","takas","taker","takhi","takin","takis","talak","talaq","talar","talas",
  "talcs","talcy","talea","taler","talky","talls","talma","talpa","taluk","talus",
  "tamal","tamed","tamer","tames","tamin","tamis","tammy","tamps","tanas","tanga",
  "tangi","tangs","tangy","tanhs","tanka","tanky","tanna","tansy","tanti","tanto",
  "tapas","taped","tapen","taper","tapet","tapis","tappa","tapus","taras","tardo",
  "tared","tares","targe","tarns","taroc","tarok","taros","tarot","tarps","tarre",
  "tarry","tarsi","tarts","tarty","tasar","taser","tasse","tatar","tater","tates",
  "taths","tatie","tatou","tatts","tatty","tatus","taube","tauld","tauon","taupe",
  "tauts","tavah","tavas","taver","tawai","tawas","tawed","tawer","tawie","tawse",
  "tawts","taxed","taxer","taxes","taxis","taxol","taxon","taxor","taxus","tayra",
  "tazza","tazze","teade","teads","teaed","teaks","teals","teary","tease","teats",
  "teaze","techs","techy","tecta","teddy","teels","teems","teend","teene","teens",
  "teeny","teers","teffs","teggs","tegua","tegus","tehrs","teiid","teils","teind",
  "telae","telco","teles","telex","telia","telic","tells","telly","teloi","telos",
  "temed","temes","tempi","temps","tempt","temse","tench","tendu","tenes","tenge",
  "tenia","tenne","tenno","tenny","tenon","tents","tenty","tenue","tepal","tepas",
  "tepee","tepoy","terai","teras","terce","terek","teres","terfe","terfs","terga",
  "terne","terns","terra","terry","terse","terts","tesla","testa","teste","testy",
  "tetes","teths","tetra","tetri","teuch","teugh","tewed","tewel","tewit","texas",
  "texes","thack","thagi","thaim","thali","thana","thane","thans","tharm","thars",
  "thaws","thawy","thebe","theca","theed","theek","thees","thegn","theic","thein",
  "thelf","thema","thens","theow","therm","these","thesp","theta","thete","thews",
  "thewy","thigs","thilk","thill","thine","thins","thiol","thirl","thoft","thole",
  "tholi","thong","thoro","thorp","thous","thowl","thrae","thraw","thrid","thrip",
  "throb","throe","thrum","thuds","thugs","thuja","thunk","thurl","thuya","thyme",
  "thymi","thymy","tiars","tibia","tical","ticca","ticed","tices","tichy","ticks",
  "ticky","tiddy","tided","tiers","tiffs","tifts","tiges","tigon","tikas","tikes",
  "tikis","tikka","tilak","tilde","tiled","tiler","tills","tilly","tilth","tilts",
  "timbo","timed","timon","timps","tinct","tinds","tinea","tined","tines","tinge",
  "tings","tinks","tinny","tints","tinty","tipis","tippy","tired","tirls","tiros",
  "tirrs","titch","titer","tithe","titis","titre","titty","titup","tizzy","toads",
  "toady","toaze","tocks","tocky","tocos","todde","toddy","toeas","toffs","toffy",
  "tofts","tofus","togae","togas","toged","toges","togue","tohos","toile","toils",
  "toing","toise","toits","tokay","toked","toker","tokes","tokos","tolan","tolar",
  "tolas","toled","toles","tolls","tolly","tolts","tolus","tolyl","toman","tombs",
  "tomes","tomia","tommy","tomos","tonal","tondi","tondo","toned","toner","toney",
  "tonga","tongs","tonka","tonks","tonne","tonus","tooms","toons","tooth","toots",
  "toped","topee","topek","toper","topes","tophe","tophi","tophs","topis","topoi",
  "topos","toque","torah","toran","toras","torcs","tores","toric","torii","toros",
  "torot","torrs","torse","torsi","torsk","torso","torta","torte","torts","torus",
  "tosas","tosed","toses","toshy","tossy","toted","toter","totes","totty","touks",
  "touns","touse","tousy","touts","touze","touzy","towed","towie","towny","towse",
  "towsy","towts","towze","towzy","toxin","toyed","toyer","toyon","toyos","tozed",
  "tozes","tozie","trabs","tract","trads","tragi","traik","trams","trank","tranq",
  "trans","trant","trape","trapt","trass","trats","tratt","trave","treck","treed",
  "treen","trefa","treif","treks","trema","tress","trest","trets","trews","treys",
  "triac","triad","trice","tride","trier","tries","triff","trigo","trigs","trike",
  "trild","trims","trine","trins","triol","trior","trios","tripy","trist","troad",
  "troak","troat","trock","trode","trods","trogs","trois","troke","tromp","trona",
  "tronc","trone","tronk","trons","trooz","trope","trots","trove","trows","troys",
  "trued","truer","trues","trugo","trugs","trull","truss","tryer","tryke","tryma",
  "tryps","tryst","tsade","tsadi","tsars","tsked","tsuba","tuans","tuart","tuath",
  "tubae","tubal","tubar","tubas","tubby","tubed","tucks","tufas","tuffe","tuffs",
  "tufts","tufty","tugra","tuina","tuism","tuktu","tules","tulle","tulpa","tumid",
  "tummy","tumps","tumpy","tunas","tunds","tuned","tungs","tunny","tupek","tupik",
  "tuple","tuque","turds","turfs","turfy","turks","turme","turms","turps","tushy",
  "tusks","tusky","tutee","tutti","tutty","tutus","tuxes","tuyer","twaes","twain",
  "twals","twank","twats","tways","tweel","tween","tweer","twerp","twier","twigs",
  "twill","twilt","twink","twiny","twire","twirl","twirp","twite","twits","twixt",
  "twoer","twyer","tyees","tyers","tyiyn","tykes","tyler","tymps","tynde","tyned",
  "tynes","typal","typey","typic","typos","typps","typto","tyran","tyred","tyres",
  "tyros","tythe","tzars","udals","udons","ugali","ugged","uhlan","uhuru","ukase",
  "ulama","ulans","ulema","ulmin","ulnad","ulnae","ulnar","ulnas","ulpan","ulvas",
  "ulyie","ulzie","umami","umbel","umber","umble","umbos","umbre","umiac","umiak",
  "umiaq","umped","umpie","umpty","unais","unapt","unarm","unary","unaus","unbag",
  "unban","unbar","unbed","unbid","unbox","uncap","unces","uncia","uncos","uncoy",
  "uncus","undam","undee","undid","undug","uneth","unfed","unfix","ungag","unget",
  "ungod","ungot","ungum","unhat","unhip","unify","unjam","unked","unket","unkid",
  "unlaw","unlay","unled","unlet","unlid","unman","unmew","unmix","unpay","unpeg",
  "unpen","unpin","unred","unrid","unrig","unrip","unsay","unset","unsew","unsex",
  "unsod","untax","untie","untin","unwed","unwet","unwit","unwon","unzip","upbow",
  "upbye","updos","updry","upend","upjet","uplay","upled","uplit","upped","upran",
  "uprun","upsee","upsey","uptak","upter","uptie","uraei","urali","uraos","urare",
  "urari","urase","urate","urbia","urdee","ureal","ureas","uredo","ureic","urena",
  "urent","urger","urges","urial","urine","urite","urman","urnal","urned","urped",
  "ursae","ursid","urson","urubu","urvas","usnea","usque","usure","usurp","usury",
  "uteri","utile","uveal","uveas","uvula","vacua","vaded","vades","vagal","vagus",
  "vails","vaire","vairs","vairy","vakil","vales","valet","valis","valse","vamps",
  "vampy","vanda","vaned","vangs","vants","vapid","varan","varas","vardy","varec",
  "vares","varia","varix","varna","varus","varve","vasal","vases","vasts","vasty",
  "vatic","vatus","vauch","vaute","vauts","vawte","veale","veals","vealy","veena",
  "veeps","veers","veery","vegas","veges","vegie","vegos","vehme","veily","veiny",
  "velar","velds","veldt","veles","vells","velum","venae","venal","vends","veney",
  "venge","venin","venom","venus","verbs","verra","verry","verso","verst","verts",
  "vertu","verve","vespa","vesta","vests","vetch","vexed","vexer","vexes","vexil",
  "vezir","vials","viand","vibes","vibex","vibey","vicar","viced","vices","vichy",
  "video","viers","viewy","vifda","vigas","vigia","vigil","vilde","viler","villi",
  "vills","vimen","vinal","vinas","vinca","vined","viner","vinew","vinic","vinos",
  "vints","viold","viols","vired","vireo","vires","virga","virge","virid","virls",
  "virtu","virus","visas","vised","vises","visie","visne","vison","visto","vitae",
  "vitas","vitex","vitta","vivas","vivat","vivda","viver","vives","vixen","vizir",
  "vizor","vleis","vlies","voars","vocab","voces","vodou","vodun","voema","vogie",
  "voids","voila","voile","volae","volar","voled","voles","volet","volks","volta",
  "volte","volti","volts","volva","volve","vomer","vomit","voted","vouge","voulu",
  "vowed","vower","voxel","vozhd","vraic","vrils","vroom","vrous","vrouw","vrows",
  "vuggs","vuggy","vughs","vughy","vulgo","vulns","vulva","vutty","vying","waacs",
  "wacke","wacko","wacks","wacky","wadds","waddy","waded","wader","wades","wadis",
  "wadts","waffs","wafts","waged","wagga","wahoo","waide","waifs","waift","wails",
  "wains","wairs","waite","waive","wakas","waked","waken","waker","wakes","wakfs",
  "waldo","walds","waled","waler","wales","walis","walla","wally","walty","waltz",
  "wamed","wames","wamus","wands","waned","wanes","waney","wangs","wanks","wanky",
  "wanle","wanly","wanna","wants","wanty","wanze","waqfs","warbs","warby","wared",
  "wares","warez","warks","warms","warps","warre","warst","warts","warty","wases",
  "washy","wasms","waspy","wasts","watap","wauff","waugh","wauks","waulk","wauls",
  "waurs","waved","waver","wavey","wawas","wawes","wawls","waxed","waxen","waxer",
  "waxes","wayed","wazir","wazoo","weald","weals","weamb","weans","wears","webby",
  "weber","wecht","wedel","wedgy","weeke","weeks","weels","weems","weens","weeny",
  "weeps","weepy","weest","weete","weets","wefte","wefts","weids","weils","weirs",
  "weise","weize","wekas","welch","welds","welke","welks","welkt","welly","welsh",
  "welts","wembs","wench","wends","wenge","wenny","wents","weros","wersh","wests",
  "wetas","wetly","wexed","wexes","whack","whamo","whams","whang","whaps","whare",
  "wharf","whata","whats","whaup","whaur","wheal","whear","wheen","wheep","wheft",
  "whelk","whelm","whelp","whens","whets","whews","wheys","whids","whift","whigs",
  "whilk","whims","whins","whiny","whipt","whirr","whirs","whish","whiss","whist",
  "whits","whity","whizz","whomp","whoof","whoop","whoot","whops","whore","whorl",
  "whort","whoso","whump","whups","wicca","wicks","wicky","widdy","wides","wiels",
  "wifed","wifes","wifey","wifie","wifty","wigan","wigga","wiggy","wight","wilco",
  "wilds","wiled","wiles","wilga","wilis","wilja","willy","wilts","wimps","wimpy",
  "wince","winch","wined","winey","winge","wingy","winks","winna","winns","winos",
  "winze","wiped","wiper","wipes","wired","wirer","wirra","wised","wiser","wises",
  "wisha","wisht","wists","witan","wited","wites","withe","withs","withy","wived",
  "wiver","wizen","wizes","woads","woald","wocks","wodge","woful","woken","wokka",
  "wolds","wolly","wolve","wombs","womby","women","womyn","wonga","wongi","wonks",
  "wonky","wonts","woody","wooed","wooer","woofs","woofy","woold","wools","wooly",
  "woons","woops","woose","woosh","wootz","woozy","wordy","wormy","worts","woven",
  "wowed","wowee","woxen","wrang","wrapt","wrast","wrate","wrawl","wrens","wrick",
  "wried","wrier","wries","writs","wroke","wroot","wroth","wrung","wryer","wryly",
  "wudus","wulls","wurst","wuses","wushu","wussy","wuxia","wyled","wyles","wynds",
  "wynns","wyted","wytes","xebec","xenia","xenic","xenon","xeric","xerox","xerus",
  "xoana","xylan","xylem","xylic","xylol","xylyl","xysti","xysts","yaars","yabba",
  "yabby","yacca","yacka","yacks","yaffs","yager","yagis","yahoo","yaird","yakka",
  "yakow","yales","yamen","yampy","yamun","yangs","yanks","yapok","yapon","yapps",
  "yappy","yarco","yarer","yarfa","yarks","yarns","yarrs","yarta","yarto","yates",
  "yauds","yauld","yaups","yawed","yawey","yawls","yawns","yawny","yawps","ybore",
  "yclad","ycled","ycond","ydrad","ydred","yeads","yeahs","yealm","yeans","yeard",
  "years","yeast","yecch","yechs","yechy","yedes","yeeds","yeggs","yelks","yelms",
  "yelps","yelts","yenta","yente","yerba","yerds","yerks","yeses","yesks","yests",
  "yesty","yetis","yetts","yeuks","yeuky","yeven","yeves","yewen","yexed","yexes",
  "yfere","yiked","yikes","yills","yince","yipes","yippy","yirds","yirks","yirrs",
  "yirth","yites","yitie","ylems","ylike","ylkes","ymolt","ympes","yobbo","yocks",
  "yodel","yodhs","yodle","yogas","yogee","yoghs","yogic","yogin","yogis","yoick",
  "yojan","yoked","yokel","yoker","yokes","yokul","yolks","yolky","yomim","yomps",
  "yonic","yonis","yonks","yoofs","yoops","yores","yorks","yorps","youks","yourn",
  "yours","yourt","youse","yowed","yowes","yowie","yowls","yrapt","yrent","yrivd",
  "yrneh","ysame","ytost","yuans","yucas","yucca","yucch","yucko","yucks","yucky",
  "yufts","yugas","yuked","yukes","yukky","yukos","yulan","yules","yummo","yummy",
  "yumps","yupon","yuppy","yurta","yurts","yuzus","zabra","zacks","zaire","zakat",
  "zaman","zambo","zamia","zanja","zante","zanza","zanze","zappy","zarfs","zatis",
  "zaxes","zayin","zazen","zeals","zebec","zebub","zebus","zeins","zerda","zerks",
  "zests","zetas","zexes","zezes","zhomo","zibet","ziffs","zigan","zilas","zilch",
  "zilla","zills","zimbi","zimbs","zinco","zincs","zincy","zineb","zines","zings",
  "zingy","zinke","zinky","zippo","ziram","zitis","zizel","zizit","zlote","zloty",
  "zoaea","zobos","zobus","zocco","zoeae","zoeal","zoeas","zoism","zoist","zombi",
  "zonae","zonal","zonda","zoned","zoner","zonks","zooea","zooey","zooid","zooks",
  "zooms","zoons","zooty","zoppa","zoppo","zoril","zoris","zorro","zouks","zowie",
  "zulus","zupan","zupas","zurfs","zuzim","zygal","zygon","zymes","zymic",
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
    if (!raw) return { played: 0, won: 0, streak: 0, maxStreak: 0, gaveUp: 0, dist: [0,0,0,0,0,0] };
    const s = JSON.parse(raw);
    // Validate shape to avoid corrupted data
    if (typeof s.played !== "number" || !Array.isArray(s.dist) || s.dist.length !== 6) {
      return { played: 0, won: 0, streak: 0, maxStreak: 0, gaveUp: 0, dist: [0,0,0,0,0,0] };
    }
    // Backward compat: older stats won't have gaveUp
    if (typeof s.gaveUp !== "number") s.gaveUp = 0;
    return s;
  } catch {
    return { played: 0, won: 0, streak: 0, maxStreak: 0, gaveUp: 0, dist: [0,0,0,0,0,0] };
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
        giveUpBtn.classList.add("hidden");
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
        giveUpBtn.classList.add("hidden");
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

// ── Give Up ──
var giveUpBtn = document.getElementById("btnGiveUp");

function giveUp() {
  if (gameOver) return;
  gameOver = true;
  giveUpBtn.classList.add("hidden");

  // Fill the current row with the answer and reveal in red
  var row = currentRow;
  var letters = target.split("");
  for (var c = 0; c < 5; c++) {
    board[row][c].textContent = letters[c];
    board[row][c].classList.add("gaveup", "reveal");
    board[row][c].style.animationDelay = (c * 0.28) + "s";
  }

  // Update stats
  var s = getStats();
  s.played++;
  s.gaveUp++;
  s.streak = 0;
  saveStats(s);

  setTimeout(function() { showStatsModal(-1); }, 5 * 280 + 600);
}

giveUpBtn.addEventListener("click", function() {
  // Require confirmation — first click changes label, second click gives up
  if (giveUpBtn.dataset.armed === "1") {
    giveUp();
  } else {
    giveUpBtn.dataset.armed = "1";
    giveUpBtn.textContent = "Are you sure?";
    giveUpBtn.style.color = "var(--gaveup)";
    giveUpBtn.style.opacity = "1";
    // Reset after 3 seconds if not confirmed
    setTimeout(function() {
      if (!gameOver) {
        giveUpBtn.dataset.armed = "";
        giveUpBtn.textContent = "Give Up";
        giveUpBtn.style.color = "";
        giveUpBtn.style.opacity = "";
      }
    }, 3000);
  }
});

// ── Stats Modal ──
function showStatsModal(lastGuess) {
  var s = getStats();
  var pct = s.played ? Math.round(s.won / s.played * 100) : 0;

  document.getElementById("statGrid").innerHTML =
    '<div class="stat-box"><div class="num">' + s.played + '</div><div class="label">Played</div></div>' +
    '<div class="stat-box"><div class="num">' + pct + '</div><div class="label">Win %</div></div>' +
    '<div class="stat-box"><div class="num">' + s.streak + '</div><div class="label">Streak</div></div>' +
    '<div class="stat-box"><div class="num">' + s.maxStreak + '</div><div class="label">Max</div></div>' +
    '<div class="stat-box"><div class="num">' + s.gaveUp + '</div><div class="label">Gave Up</div></div>';

  var maxDist = Math.max.apply(null, s.dist.concat([s.gaveUp, 1]));
  var html = "";
  for (var i = 0; i < 6; i++) {
    var w = Math.max(8, (s.dist[i] / maxDist) * 100);
    var hl = (i === lastGuess) ? " highlight" : "";
    html += '<div class="bar-row"><span class="guess-num">' + (i+1) +
      '</span><div class="bar' + hl + '" style="width:' + w + '%">' +
      s.dist[i] + '</div></div>';
  }
  // Gave-up row
  var gw = Math.max(8, (s.gaveUp / maxDist) * 100);
  html += '<div class="bar-row"><span class="guess-num" style="color:var(--gaveup)">X</span>' +
    '<div class="bar highlight-gaveup" style="width:' + gw + '%">' +
    s.gaveUp + '</div></div>';
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

(function() {
  var btn = document.getElementById("btnResetStats");
  var resetTimer = null;
  btn.addEventListener("click", function() {
    if (btn.dataset.armed) {
      clearTimeout(resetTimer);
      btn.dataset.armed = "";
      btn.classList.remove("armed");
      btn.textContent = "RESET STATS";
      localStorage.removeItem("wordle-stats");
      localStorage.removeItem("wordle-custom-words");
      showStatsModal(-1);
    } else {
      btn.dataset.armed = "1";
      btn.classList.add("armed");
      btn.textContent = "CONFIRM RESET?";
      resetTimer = setTimeout(function() {
        btn.dataset.armed = "";
        btn.classList.remove("armed");
        btn.textContent = "RESET STATS";
      }, 3000);
    }
  });
})();

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
  // Reset give-up button
  giveUpBtn.classList.remove("hidden");
  giveUpBtn.dataset.armed = "";
  giveUpBtn.textContent = "Give Up";
  giveUpBtn.style.color = "";
  giveUpBtn.style.opacity = "";
}

newGame();

// ── Service Worker Registration ──
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").catch(function() {});
}
