// ===== data-overrides.js =====
;(function (global) {
  var data = global.TynanArtData;
  if (!data) return;

  var slot = data.SLOT_SUGGESTIONS || (data.SLOT_SUGGESTIONS = {});
  var templates = data.TEXT_TEMPLATES || (data.TEXT_TEMPLATES = {});
  var pickers = templates.object_picker_options || (templates.object_picker_options = {});

  function uniq(items) {
    var out = [];
    (items || []).forEach(function (item) {
      if (item && out.indexOf(item) === -1) out.push(item);
    });
    return out;
  }

  function makeSet(items) {
    var map = {};
    (items || []).forEach(function (item) {
      map[item] = true;
    });
    return map;
  }

  function listFromSet(source, setMap) {
    return (source || []).filter(function (item) {
      return !!setMap[item];
    });
  }

  var animalAll = uniq((pickers.animal_name && pickers.animal_name.all) || []);
  slot.material = ["木", "钢", "金", "银", "翡翠", "玻璃钢", "活铁", "石", "花岗岩", "布", "皮革", "超织物"];
  slot.animal_name = ["驼鹿", "阿尔法敲击兽", "野猪", "森林狼", "乳齿象", "驯鹿", "大熊猫", "灰熊", "鸡", "牛", "猫", "海豹"];
  pickers.animal_name = {
    title: "选择动物",
    groups: [{ label: "全部动物", items: animalAll }],
    all: animalAll,
  };

  var craftAll = uniq([
    "短弓","反曲弓","巨弓","棍棒","匕首","短矛","长矛","短剑","长剑","钉头锤","战斧","战锤",
    "左轮手枪","自动手枪","栓动步枪","泵动霰弹枪","链式霰弹枪","重型冲锋枪","轻机枪","冲锋手枪","突击步枪","狙击步枪",
    "EMP发射器","烟雾弹发射器","燃烧弹发射器","三重火箭发射器","末日火箭发射器","迫击炮","破城炮",
    "电荷标枪","电荷步枪","单分子剑","等离子剑","宙斯锤","脉冲射线炮","地狱猫步枪","焚烬者喷射器","麻痹毒弩",
    "迷你霰弹枪","刺针发射器","广域射线炮","帝王业火炮",
    "T恤衫","衬衫","裤子","防尘大衣","防弹夹克","防弹裤","防弹背心","简易头盔","防弹头盔","牛仔帽","御寒帽","防毒面具",
    "板甲","海军装甲","斥候装甲","骑士装甲","凤凰装甲","飞蝗装甲","掷弹装甲","圣装海军装甲","圣装斥候装甲","圣装骑士装甲",
    "真空服","真空头盔","皇家长袍","贵族马甲","灵质长袍","灵质头盔","灵质头套","灵质衬衫","灵质马甲",
    "烟罐背包","消防背包","护盾腰带","跳跃背包","炮塔背包","猎手背包","便携护盾背包","带宽背包","数控背包","毒气背包",
    "枪械联控器","心灵错乱枪","心灵冲击枪","生物突变枪","碎片错乱枪","碎片冲击枪","灵质权杖",
    "零部件","高级零部件","化合燃料","医药","闪耀世界医药","中性胺","强力血清","钢血血清","思滞血清","食尸鬼复活血清","虚空视界血清","死眠扩容血清","毒气弹",
    "小说","技术图解","教材","魔经","基因组","胚胎","异种胚芽"
  ]);
  pickers["finished_crafting:object"] = {
    title: "选择制作对象",
    groups: [
      { label: "近战武器", items: ["棍棒","匕首","短矛","长矛","短剑","长剑","钉头锤","战斧","战锤","单分子剑","等离子剑","宙斯锤"] },
      { label: "远程武器", items: ["短弓","反曲弓","巨弓","左轮手枪","自动手枪","栓动步枪","泵动霰弹枪","链式霰弹枪","重型冲锋枪","轻机枪","冲锋手枪","突击步枪","狙击步枪","电荷标枪","电荷步枪","脉冲射线炮","地狱猫步枪","焚烬者喷射器","麻痹毒弩","迷你霰弹枪","刺针发射器","广域射线炮","帝王业火炮"] },
      { label: "护甲与服饰", items: ["T恤衫","衬衫","裤子","防尘大衣","防弹夹克","防弹裤","防弹背心","简易头盔","防弹头盔","牛仔帽","御寒帽","防毒面具","板甲","海军装甲","斥候装甲","骑士装甲","凤凰装甲","飞蝗装甲","掷弹装甲","真空服","真空头盔","皇家长袍","贵族马甲","灵质长袍","灵质头盔"] },
      { label: "背包与特殊装备", items: ["烟罐背包","消防背包","护盾腰带","跳跃背包","炮塔背包","猎手背包","便携护盾背包","带宽背包","数控背包","毒气背包","枪械联控器","心灵错乱枪","心灵冲击枪","生物突变枪","碎片错乱枪","碎片冲击枪","灵质权杖"] },
      { label: "工业制品与消耗品", items: ["零部件","高级零部件","化合燃料","医药","闪耀世界医药","中性胺","强力血清","钢血血清","思滞血清","食尸鬼复活血清","虚空视界血清","死眠扩容血清","毒气弹"] },
      { label: "书籍与特殊产物", items: ["小说","技术图解","教材","魔经","基因组","胚胎","异种胚芽"] }
    ],
    all: craftAll,
  };

  var entityAll = uniq([
    "隐形魔","蹒跚怪","食尸鬼","血棘巨人","惊惧母兽","独爪兽","双爪兽","三爪兽","恶臭瘤兽",
    "嵌合兽","吞噬兽","夜魇","幽魂","金属怪形","苦痛之球","异常尸体"
  ]);
  slot.entity_name = ["夜魇", "幽魂", "金属怪形", "异常尸体", "吞噬兽", "嵌合兽", "蹒跚怪", "食尸鬼"];
  pickers["studied_entity:entity"] = {
    title: "选择可调查实体",
    groups: [
      { label: "常见可收容实体", items: ["隐形魔","蹒跚怪","食尸鬼","夜魇","幽魂","金属怪形","吞噬兽","嵌合兽"] },
      { label: "血肉兽与大型实体", items: ["独爪兽","双爪兽","三爪兽","恶臭瘤兽","血棘巨人","惊惧母兽","苦痛之球"] },
      { label: "特殊调查样本", items: ["异常尸体"] }
    ],
    all: entityAll,
  };

  var researchPicker = pickers["finished_research:project"];
  if (researchPicker && researchPicker.all && researchPicker.all.length) {
    var researchAll = uniq(researchPicker.all);
    var anomalySet = makeSet([
      "虚空扰动","实体收容","活铁武器","大气升温器","活铁提取","活铁发电机","活铁采集","活铁塑造",
      "极乐切脑","血怒之雨","洗脑","时间吞噬","死灵尘","死亡回避","眩光照明弹","汲电器","狂热诱发器",
      "食尸鬼假体","食尸鬼植入","食尸鬼复活","心灵错乱武器","强力血清","钢血血清","思滞血清","突变武器",
      "焦虑脉冲","学识汲取","愉悦脉冲","潜近探测器","嗜灵反应","幽魂隐形","血清合成","折跃绑架",
      "睡眠抑制器","吸引动物","召唤血肉兽","召唤巨坑","吸引蹒跚怪","虚空雕塑","安全大门"
    ]);
    var neolithicSet = makeSet(["酿酒","可可树","恶魔菇","精神叶冲调","反曲弓","蒸发制冷器","干肉饼","植树","钓鱼"]);
    var medievalSet = makeSet(["复杂家具","复杂衣物","锻造","岩石切割","地毯铺设","长剑","板甲","巨弓","竖琴","大键琴","贵族衣物","皇家衣物"]);
    var spacerSet = makeSet([
      "护盾","低温休眠舱","海军装甲","斥候装甲","电荷弹","星际航行基础","飞船电脑核心","飞船低温休眠舱","飞船推进器","飞船反应堆","飞船传感器",
      "高级逆重科技","穿梭机","能量武器","培育舱","滤毒器","骑士装甲","专业肢体","紧凑武器","毒素合成"
    ]);
    var ultraSet = makeSet(["极致机械科技","人工代谢","作息节律","躯体整形","愈合因子","分子分析","神经计算","皮肤硬化"]);
    var assigned = {};
    [anomalySet, neolithicSet, medievalSet, spacerSet, ultraSet].forEach(function (setMap) {
      Object.keys(setMap).forEach(function (key) {
        assigned[key] = true;
      });
    });
    var industrial = researchAll.filter(function (item) {
      return !assigned[item];
    });
    researchPicker.groups = [
      { label: "部落时代", items: listFromSet(researchAll, neolithicSet) },
      { label: "中世纪", items: listFromSet(researchAll, medievalSet) },
      { label: "工业时代", items: industrial },
      { label: "太空时代", items: listFromSet(researchAll, spacerSet) },
      { label: "超凡时代", items: listFromSet(researchAll, ultraSet) },
      { label: "异象知识", items: listFromSet(researchAll, anomalySet) }
    ];
    researchPicker.all = researchAll;
  }
})(window);
