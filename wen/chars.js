const chars = [
 {
  "origin": "叁",
  "split": "（ㄙ＋大＋三）"
 },
 {
  "origin": "无",
  "split": "（一＋尢）"
 },
 {
  "origin": "亘",
  "split": "（一＋旦）"
 },
 {
  "origin": "俣",
  "split": "（人＋上口＋下天） "
 },
 {
  "origin": "伃",
  "split": "（人＋予） "
 },
 {
  "origin": "伩",
  "split": "（人＋文）"
 },
 {
  "origin": "侰",
  "split": "（人＋君）"
 },
 {
  "origin": "俤",
  "split": "（人＋弟）"
 },
 {
  "origin": "俌",
  "split": "（人＋甫）"
 },
 {
  "origin": "俼",
  "split": "（人＋育） "
 },
 {
  "origin": "俹",
  "split": "（人＋亞） "
 },
 {
  "origin": "倈",
  "split": "（人＋來） "
 },
 {
  "origin": "俽",
  "split": "（人＋欣） "
 },
 {
  "origin": "傛",
  "split": "（人＋容）"
 },
 {
  "origin": "僡",
  "split": "（人＋惠）  "
 },
 {
  "origin": "儁",
  "split": "（人＋雋） "
 },
 {
  "origin": "儫",
  "split": "（人＋豪）"
 },
 {
  "origin": "儕",
  "split": "（人＋齊）"
 },
 {
  "origin": "栆",
  "split": "（十＋口＋於 - 方）"
 },
 {
  "origin": "龎",
  "split": "（厂＋龍） "
 },
 {
  "origin": "双",
  "split": "（又＋又） "
 },
 {
  "origin": "亼",
  "split": "（上人＋下一） "
 },
 {
  "origin": "峯",
  "split": "（上山＋下夆）"
 },
 {
  "origin": "嵓",
  "split": "（上山＋下品）"
 },
 {
  "origin": "嵵",
  "split": "（上山＋下時） "
 },
 {
  "origin": "斈",
  "split": "（上文＋下子）"
 },
 {
  "origin": "炁",
  "split": "（上旡＋下火）"
 },
 {
  "origin": "妟",
  "split": "（上日＋下女）"
 },
 {
  "origin": "旻",
  "split": "（上日＋下文） "
 },
 {
  "origin": "昺",
  "split": "（上日＋下丙）"
 },
 {
  "origin": "晏",
  "split": "（上日＋下安）"
 },
 {
  "origin": "昰",
  "split": "（上曰＋下正）"
 },
 {
  "origin": "晸",
  "split": "（上曰＋下政）"
 },
 {
  "origin": "沯",
  "split": "（上水＋下石）"
 },
 {
  "origin": "畠",
  "split": "（上白＋下田） "
 },
 {
  "origin": "凭",
  "split": "（上任＋下几）"
 },
 {
  "origin": "垡",
  "split": "（上伐＋下土）"
 },
 {
  "origin": "訾",
  "split": "（上此＋下言） "
 },
 {
  "origin": "竹+夌",
  "split": "（上竹＋下夌）"
 },
 {
  "origin": "箮",
  "split": "（上竹＋下宣）"
 },
 {
  "origin": "翬",
  "split": "（上羽＋下軍） "
 },
 {
  "origin": "羣",
  "split": "（上君＋下羊） "
 },
 {
  "origin": "旉",
  "split": "（上甫＋下方） "
 },
 {
  "origin": "碁",
  "split": "（上其＋下石） "
 },
 {
  "origin": "晳",
  "split": "（上析＋下曰）"
 },
 {
  "origin": "辳",
  "split": "（上林＋下辰）"
 },
 {
  "origin": "錱",
  "split": "（上金＋下玨）"
 },
 {
  "origin": "霙",
  "split": "（上雨＋下英）"
 },
 {
  "origin": "霩",
  "split": "（上雨＋下郭） "
 },
 {
  "origin": "霱",
  "split": "（上雨＋下橘 - 木）"
 },
 {
  "origin": "鎏",
  "split": "（上流＋下金）"
 },
 {
  "origin": "鍫",
  "split": "（上秋＋下金）"
 },
 {
  "origin": "茲+心",
  "split": "（上茲＋下心）"
 },
 {
  "origin": "勲",
  "split": "（上動＋下火）"
 },
 {
  "origin": "麐",
  "split": "（上鹿＋下吝）"
 },
 {
  "origin": "憙",
  "split": "（上喜＋下心） "
 },
 {
  "origin": "咏",
  "split": "（口＋永） "
 },
 {
  "origin": "囇",
  "split": "（口＋麗） "
 },
 {
  "origin": "圳",
  "split": "（土＋川）"
 },
 {
  "origin": "坈",
  "split": "（土＋冗）"
 },
 {
  "origin": "坂",
  "split": "（土＋反） "
 },
 {
  "origin": "埄",
  "split": "（土＋夆）"
 },
 {
  "origin": "墻",
  "split": "（土＋嗇） "
 },
 {
  "origin": "壎",
  "split": "（土＋熏）"
 },
 {
  "origin": "墀",
  "split": "（土 +樨 - 木） "
 },
 {
  "origin": "姮",
  "split": "（女＋一 +旦）"
 },
 {
  "origin": "媫",
  "split": "（女＋卜＋雪 - 雨＋走 - 土）"
 },
 {
  "origin": "姸",
  "split": "（女＋千＋干）"
 },
 {
  "origin": "妤",
  "split": "（女＋予）"
 },
 {
  "origin": "妗",
  "split": "（女＋今）"
 },
 {
  "origin": "女+勻",
  "split": "（女＋勻）"
 },
 {
  "origin": "妏",
  "split": "（女＋文）"
 },
 {
  "origin": "姉",
  "split": "（女＋市）"
 },
 {
  "origin": "姯",
  "split": "（女＋光） "
 },
 {
  "origin": "女+衣",
  "split": "（女＋衣）"
 },
 {
  "origin": "娪",
  "split": "（女＋吾）"
 },
 {
  "origin": "女+呈",
  "split": "（女＋呈）"
 },
 {
  "origin": "婌",
  "split": "（女＋叔）"
 },
 {
  "origin": "婠",
  "split": "（女＋官）"
 },
 {
  "origin": "女+宜",
  "split": "（女＋宜）"
 },
 {
  "origin": "媙",
  "split": "（女＋威）"
 },
 {
  "origin": "媤",
  "split": "（女＋思）"
 },
 {
  "origin": "媆",
  "split": "（女＋耎）"
 },
 {
  "origin": "媖",
  "split": "（女＋英）"
 },
 {
  "origin": "媁",
  "split": "（女＋韋）"
 },
 {
  "origin": "嫆",
  "split": "（女＋容）"
 },
 {
  "origin": "女+烏",
  "split": "（女＋烏）"
 },
 {
  "origin": "嫃",
  "split": "（女＋真）"
 },
 {
  "origin": "嫺",
  "split": "（女＋閒）"
 },
 {
  "origin": "媺",
  "split": "（女＋微 - ㄔ） "
 },
 {
  "origin": "嬑",
  "split": "（女＋意）"
 },
 {
  "origin": "嬘",
  "split": "（女＋遂）"
 },
 {
  "origin": "嬪",
  "split": "（女＋ 賓）"
 },
 {
  "origin": "嬬",
  "split": "（女＋需）"
 },
 {
  "origin": "孆",
  "split": "（女＋嬰）"
 },
 {
  "origin": "岄",
  "split": "（山 +月 ）"
 },
 {
  "origin": "岫",
  "split": "（山＋由）"
 },
 {
  "origin": "峼",
  "split": "（山＋告） "
 },
 {
  "origin": "崡",
  "split": "（山＋函）"
 },
 {
  "origin": "嶋",
  "split": "（山＋鳥） "
 },
 {
  "origin": "帉",
  "split": "（巾＋分）"
 },
 {
  "origin": "恒",
  "split": "（心＋一＋旦）"
 },
 {
  "origin": "忼",
  "split": "（心＋亢）"
 },
 {
  "origin": "懏",
  "split": "（心＋雋）"
 },
 {
  "origin": "彣",
  "split": "（文＋杉 - 木）"
 },
 {
  "origin": "堃",
  "split": "（方＋方＋土） "
 },
 {
  "origin": "斾",
  "split": "（方＋飾 - 食）"
 },
 {
  "origin": "晗",
  "split": "（日＋含）  "
 },
 {
  "origin": "晧",
  "split": "（日＋告） "
 },
 {
  "origin": "昫",
  "split": "（日＋呴 - 口） "
 },
 {
  "origin": "暎",
  "split": "（日＋英） "
 },
 {
  "origin": "曔",
  "split": "（日＋敬）"
 },
 {
  "origin": "桓",
  "split": "（木＋一＋旦）"
 },
 {
  "origin": "栢",
  "split": "（木＋百） "
 },
 {
  "origin": "梃",
  "split": "（木＋廷）"
 },
 {
  "origin": "棱",
  "split": "（木＋夌）"
 },
 {
  "origin": "椀",
  "split": "（木＋宛） "
 },
 {
  "origin": "楡",
  "split": "（木＋俞 - 刖＋月＋ㄍ）"
 },
 {
  "origin": "柂",
  "split": "（木＋施）"
 },
 {
  "origin": "栴",
  "split": "（木＋旃 -方 ）"
 },
 {
  "origin": "樫",
  "split": "（木＋堅） "
 },
 {
  "origin": "樎",
  "split": "（木＋宿）"
 },
 {
  "origin": "榤",
  "split": "（木＋傑 - 人） "
 },
 {
  "origin": "櫘",
  "split": "（木＋慧）"
 },
 {
  "origin": "欉",
  "split": "（木＋叢）"
 },
 {
  "origin": "沢",
  "split": "（水＋尺）"
 },
 {
  "origin": "温",
  "split": "（水＋日＋皿） "
 },
 {
  "origin": "泯",
  "split": "（水＋民）"
 },
 {
  "origin": "洤",
  "split": "（水＋全）"
 },
 {
  "origin": "渏",
  "split": "（水＋奇）"
 },
 {
  "origin": "淙",
  "split": "（水＋宗） "
 },
 {
  "origin": "湶",
  "split": "（水＋泉） "
 },
 {
  "origin": "湛",
  "split": "（水＋甚）"
 },
 {
  "origin": "湫",
  "split": "（水＋秋） "
 },
 {
  "origin": "渢",
  "split": "（水＋風）"
 },
 {
  "origin": "湌",
  "split": "（水＋食）"
 },
 {
  "origin": "滺",
  "split": "（水＋悠） "
 },
 {
  "origin": "潄",
  "split": "（水＋敕）"
 },
 {
  "origin": "澧",
  "split": "（水＋豊）"
 },
 {
  "origin": "灔",
  "split": "（水＋豊＋色）"
 },
 {
  "origin": "濚",
  "split": "（水＋榮） "
 },
 {
  "origin": "濬",
  "split": "（水＋睿） "
 },
 {
  "origin": "瀞",
  "split": "（水＋靜） "
 },
 {
  "origin": "灍",
  "split": "（水＋闕）"
 },
 {
  "origin": "灙",
  "split": "（水＋黨）"
 },
 {
  "origin": "灯",
  "split": "（火＋丁） "
 },
 {
  "origin": "爗",
  "split": "（火＋日＋華）"
 },
 {
  "origin": "畑",
  "split": "（火＋田） "
 },
 {
  "origin": "烟",
  "split": "（火＋因）"
 },
 {
  "origin": "烱",
  "split": "（火＋冏）"
 },
 {
  "origin": "焴",
  "split": "（火＋育）"
 },
 {
  "origin": "煊",
  "split": "（火＋宣）"
 },
 {
  "origin": "煖",
  "split": "（火＋爰）"
 },
 {
  "origin": "熴",
  "split": "（火＋崑）"
 },
 {
  "origin": "熠",
  "split": "（火＋習）"
 },
 {
  "origin": "蕿",
  "split": "（火＋萲）"
 },
 {
  "origin": "玪",
  "split": "（王＋今）"
 },
 {
  "origin": "玞",
  "split": "（王＋夫）"
 },
 {
  "origin": "琹",
  "split": "（王＋王＋木）"
 },
 {
  "origin": "玳",
  "split": "（王＋代） "
 },
 {
  "origin": "珆",
  "split": "（王＋台） "
 },
 {
  "origin": "珉",
  "split": "（王＋民）"
 },
 {
  "origin": "珏",
  "split": "（王＋玉）"
 },
 {
  "origin": "珗",
  "split": "（王＋先）"
 },
 {
  "origin": "琼",
  "split": "（王＋京）"
 },
 {
  "origin": "琜",
  "split": "（王＋來）"
 },
 {
  "origin": "珷",
  "split": "（王＋武）"
 },
 {
  "origin": "琤",
  "split": "（王＋爭）"
 },
 {
  "origin": "瑤",
  "split": "（王＋采 - 木＋缶）"
 },
 {
  "origin": "瑃",
  "split": "（王＋春）"
 },
 {
  "origin": "瑈",
  "split": "（王＋柔）"
 },
 {
  "origin": "瑗",
  "split": "（王＋爰）"
 },
 {
  "origin": "瑝",
  "split": "（王＋皇） "
 },
 {
  "origin": "瑨",
  "split": "（王＋晉）  "
 },
 {
  "origin": "瑮",
  "split": "（王＋栗）"
 },
 {
  "origin": "瑠",
  "split": "（王＋留） "
 },
 {
  "origin": "瑱",
  "split": "（王＋真）"
 },
 {
  "origin": "璌",
  "split": "（王＋寅） "
 },
 {
  "origin": "璤",
  "split": "（王＋惠）"
 },
 {
  "origin": "璍",
  "split": "（王＋華）"
 },
 {
  "origin": "璝",
  "split": "（王＋貴） "
 },
 {
  "origin": "璦",
  "split": "（王＋愛）"
 },
 {
  "origin": "璿",
  "split": "（王＋睿）"
 },
 {
  "origin": "璵",
  "split": "（王＋與）"
 },
 {
  "origin": "瓈",
  "split": "（王＋黎） "
 },
 {
  "origin": "瓐",
  "split": "（王＋盧） "
 },
 {
  "origin": "瓴",
  "split": "（令＋瓦）"
 },
 {
  "origin": "畊",
  "split": "（田＋井）"
 },
 {
  "origin": "畹",
  "split": "（田＋宛）"
 },
 {
  "origin": "皚",
  "split": "（白＋豈）"
 },
 {
  "origin": "睆",
  "split": "（目＋完） "
 },
 {
  "origin": "睎",
  "split": "（目＋希）"
 },
 {
  "origin": "矅",
  "split": "（目＋翟）"
 },
 {
  "origin": "磘",
  "split": "（石＋采 - 木＋缶） "
 },
 {
  "origin": "碃",
  "split": "（石＋青）"
 },
 {
  "origin": "碹",
  "split": "（石＋宣）"
 },
 {
  "origin": "礢",
  "split": "（石＋養）"
 },
 {
  "origin": "襎",
  "split": "（示＋番）"
 },
 {
  "origin": "秢",
  "split": "（禾＋令）"
 },
 {
  "origin": "宝",
  "split": "（穴 - 八＋玉） "
 },
 {
  "origin": "竛",
  "split": "（立＋令）"
 },
 {
  "origin": "竝",
  "split": "（立＋立） "
 },
 {
  "origin": "亷",
  "split": "（立 - 一＋厂＋兼 - 八 - 一）"
 },
 {
  "origin": "効",
  "split": "（交＋力）"
 },
 {
  "origin": "冲",
  "split": "（冰 - 水＋中）"
 },
 {
  "origin": "冴",
  "split": "（冰 - 水＋牙） "
 },
 {
  "origin": "况",
  "split": "（冰 - 水＋兄）"
 },
 {
  "origin": "凉",
  "split": "（冰 - 水＋京）"
 },
 {
  "origin": "喆",
  "split": "（吉＋吉） "
 },
 {
  "origin": "頡",
  "split": "（吉＋頁）"
 },
 {
  "origin": "宝",
  "split": "（安 - 女＋玉） "
 },
 {
  "origin": "竼",
  "split": "（竹＋凡） "
 },
 {
  "origin": "笹",
  "split": "（竹＋世） "
 },
 {
  "origin": "籾",
  "split": "（米＋刃）"
 },
 {
  "origin": "粧",
  "split": "（米＋庄）"
 },
 {
  "origin": "紜",
  "split": "（糸＋云）"
 },
 {
  "origin": "綋",
  "split": "（糸＋宏）"
 },
 {
  "origin": "綉",
  "split": "（糸＋秀） "
 },
 {
  "origin": "綨",
  "split": "（糸＋其）"
 },
 {
  "origin": "緽",
  "split": "（糸＋貞）"
 },
 {
  "origin": "絹",
  "split": "（糸＋娟 - 女）"
 },
 {
  "origin": "縀",
  "split": "（糸＋瑕 - 王）"
 },
 {
  "origin": "聡",
  "split": "（耳＋公＋心）"
 },
 {
  "origin": "叙",
  "split": "（余＋又） "
 },
 {
  "origin": "凃",
  "split": "（冷 - 令＋余） "
 },
 {
  "origin": "凉",
  "split": "（冷 - 令＋京）"
 },
 {
  "origin": "凊",
  "split": "（冷 - 令＋青）"
 },
 {
  "origin": "廸",
  "split": "（廷 - 壬＋由） "
 },
 {
  "origin": "廼",
  "split": "（廷 - 壬＋西）"
 },
 {
  "origin": "悧",
  "split": "（忻 - 斤＋利）"
 },
 {
  "origin": "甦",
  "split": "（更＋生） "
 },
 {
  "origin": "諪",
  "split": "（言＋亭）"
 },
 {
  "origin": "誜",
  "split": "（言＋俊 - 人）"
 },
 {
  "origin": "諶",
  "split": "（言＋甚）"
 },
 {
  "origin": "陖",
  "split": "（阮 - 元＋俊 - 人）"
 },
 {
  "origin": "棊",
  "split": "（其＋木）"
 },
 {
  "origin": "碁",
  "split": "（其＋石） "
 },
 {
  "origin": "寗",
  "split": "（宓＋冉）"
 },
 {
  "origin": "広",
  "split": "（府 - 付＋ㄙ） "
 },
 {
  "origin": "舘",
  "split": "（舍＋官） "
 },
 {
  "origin": "込",
  "split": "（近 - 斤＋入） "
 },
 {
  "origin": "釱",
  "split": "（金＋大） "
 },
 {
  "origin": "釥",
  "split": "（金＋小）"
 },
 {
  "origin": "鈈",
  "split": "（金＋不）"
 },
 {
  "origin": "錱",
  "split": "（金＋王＋王） "
 },
 {
  "origin": "鉪",
  "split": "（金＋世）"
 },
 {
  "origin": "鉢",
  "split": "（金＋本）"
 },
 {
  "origin": "銧",
  "split": "（金＋光）"
 },
 {
  "origin": "鉷",
  "split": "（金＋共） "
 },
 {
  "origin": "鋛",
  "split": "（金＋串）"
 },
 {
  "origin": "金+秀",
  "split": "（金＋秀） "
 },
 {
  "origin": "鍁",
  "split": "（金＋欣）"
 },
 {
  "origin": "鎇",
  "split": "（金＋眉）"
 },
 {
  "origin": "鍈",
  "split": "（金＋英）"
 },
 {
  "origin": "鍀",
  "split": "（金＋得 - 彳） "
 },
 {
  "origin": "鉁",
  "split": "（金＋診 - 言）"
 },
 {
  "origin": "鐦",
  "split": "（金＋開） "
 },
 {
  "origin": "兪",
  "split": "（俞 - 刖＋月＋ㄍ） "
 },
 {
  "origin": "献",
  "split": "（南＋犬） "
 },
 {
  "origin": "顒",
  "split": "（禺＋頁）"
 },
 {
  "origin": "靧",
  "split": "（面＋貴）"
 },
 {
  "origin": "韠",
  "split": "（韋＋畢）"
 },
 {
  "origin": "韵",
  "split": "（音＋勻）"
 },
 {
  "origin": "韸",
  "split": "（音＋夆） "
 },
 {
  "origin": "斾",
  "split": "（旂 -斤＋市）"
 },
 {
  "origin": "芿",
  "split": "（草 - 早＋仍）"
 },
 {
  "origin": "蒀",
  "split": "（草 - 早＋日＋皿）"
 },
 {
  "origin": "茬",
  "split": "（草 - 早＋在） "
 },
 {
  "origin": "荐",
  "split": "（草 - 早＋存）"
 },
 {
  "origin": "莅",
  "split": "（草 - 早＋位）"
 },
 {
  "origin": "菓",
  "split": "（草 - 早＋果） "
 },
 {
  "origin": "葶",
  "split": "（草 - 早＋亭）"
 },
 {
  "origin": "萾",
  "split": "（草 - 早＋盈）"
 },
 {
  "origin": "葿",
  "split": "（草 - 早＋眉）"
 },
 {
  "origin": "韮",
  "split": "（草 - 早＋韭） "
 },
 {
  "origin": "蒨",
  "split": "（草 - 早＋倩）"
 },
 {
  "origin": "荣",
  "split": "（草 - 早＋冢 - 豖＋木）"
 },
 {
  "origin": "蒲",
  "split": "（草 - 早＋浦）"
 },
 {
  "origin": "蒖",
  "split": "（草 - 早＋真）"
 },
 {
  "origin": "蒓",
  "split": "（草 - 早＋純）"
 },
 {
  "origin": "薏",
  "split": "（草 - 早＋意）"
 },
 {
  "origin": "蕿",
  "split": "（草 - 早＋煖）"
 },
 {
  "origin": "蘐",
  "split": "（草 - 早＋諼）"
 },
 {
  "origin": "関",
  "split": "（問 - 口＋朕 - 月）"
 },
 {
  "origin": "碁",
  "split": "（基 - 土＋石） "
 },
 {
  "origin": "竪",
  "split": "（堅 - 土＋立）"
 },
 {
  "origin": "寗",
  "split": "（密 - 山＋冉） "
 },
 {
  "origin": "甯",
  "split": "（密 - 山＋用）"
 },
 {
  "origin": "恒",
  "split": "（情 - 青＋一＋旦）"
 },
 {
  "origin": "愽",
  "split": "（情 - 青＋尃）"
 },
 {
  "origin": "濶",
  "split": "（淋 - 林＋門＋舌）"
 },
 {
  "origin": "洤",
  "split": "（淦 - 金＋全）"
 },
 {
  "origin": "瀞",
  "split": "（清＋爭） "
 },
 {
  "origin": "鱻",
  "split": "（魚＋魚＋魚）"
 },
 {
  "origin": "墪",
  "split": "（敦＋土）"
 },
 {
  "origin": "琹",
  "split": "（琶 - 巴＋木）"
 },
 {
  "origin": "寗",
  "split": "（甯 - 用＋冉）"
 },
 {
  "origin": "靆",
  "split": "（雲＋逮）"
 },
 {
  "origin": "温",
  "split": "（溫 - 囚＋日）"
 },
 {
  "origin": "顓",
  "split": "（煓 - 火＋頁）"
 },
 {
  "origin": "琹",
  "split": "（瑟 - 必＋木） "
 },
 {
  "origin": "鋆",
  "split": "（筠 - 竹＋金）"
 },
 {
  "origin": "艶",
  "split": "（豊＋色） "
 },
 {
  "origin": "豑",
  "split": "（豊＋弟）"
 },
 {
  "origin": "熲",
  "split": "（潁 - 水＋火）"
 },
 {
  "origin": "鎣",
  "split": "（瑩 - 玉＋金）"
 },
 {
  "origin": "瑴",
  "split": "（穀 - 禾＋王）"
 },
 {
  "origin": "潁",
  "split": "（穎 - 禾＋水）"
 },
 {
  "origin": "頴",
  "split": "（穎 - 禾＋示）"
 },
 {
  "origin": "甇",
  "split": "（螢 - 虫＋瓦）"
 },
 {
  "origin": "鸜",
  "split": "（瞿＋鳥）"
 },
 {
  "origin": "顗",
  "split": "（颽 - 風＋頁） "
 },
 {
  "origin": "禛",
  "split": "（槙 - 木＋示）"
 }
]

export default chars;