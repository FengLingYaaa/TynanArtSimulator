window.TynanArtData = {
  "EVENT_SCHEMAS": [
    {
      "id": "crafted_art",
      "label": "艺术手工",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "棺材"
      ],
      "required_slots": [
        {
          "key": "maker",
          "label": "创作者",
          "slot_type": "role",
          "suggestion_type": "person_name"
        },
        {
          "key": "thing",
          "label": "作品名",
          "slot_type": "object",
          "suggestion_type": "thing_name"
        }
      ],
      "optional_slots": [
        {
          "key": "date_text",
          "label": "日期",
          "slot_type": "meta",
          "suggestion_type": "date_text"
        },
        {
          "key": "quality",
          "label": "品质",
          "slot_type": "meta",
          "suggestion_type": "quality"
        },
        {
          "key": "title",
          "label": "作品标题",
          "slot_type": "meta",
          "suggestion_type": "art_title"
        },
        {
          "key": "material",
          "label": "材料",
          "slot_type": "meta",
          "suggestion_type": "material"
        }
      ],
      "simple_fields": [
        "maker",
        "thing",
        "date_text"
      ],
      "complete_fields": [
        "maker",
        "thing",
        "date_text",
        "quality",
        "title",
        "material",
        "scene_hint",
        "detail_hint",
        "style_hint",
        "include_detail",
        "include_style",
        "include_context"
      ],
      "category": "创作与成果"
    },
    {
      "id": "finished_construction",
      "label": "完成长时间的建造项目",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "棺材"
      ],
      "required_slots": [
        {
          "key": "builder",
          "label": "建造者",
          "slot_type": "role",
          "suggestion_type": "person_name"
        },
        {
          "key": "object",
          "label": "对象名",
          "slot_type": "object",
          "suggestion_type": "object_name"
        }
      ],
      "optional_slots": [
        {
          "key": "date_text",
          "label": "日期",
          "slot_type": "meta",
          "suggestion_type": "date_text"
        },
        {
          "key": "material",
          "label": "材料",
          "slot_type": "meta",
          "suggestion_type": "material"
        }
      ],
      "simple_fields": [
        "builder",
        "object",
        "date_text"
      ],
      "complete_fields": [
        "builder",
        "object",
        "date_text",
        "material",
        "scene_hint",
        "detail_hint",
        "style_hint",
        "include_detail",
        "include_style",
        "include_context"
      ],
      "category": "创作与成果"
    },
    {
      "id": "finished_research",
      "label": "研究项目完成",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "棺材"
      ],
      "required_slots": [
        {
          "key": "researcher",
          "label": "研究者",
          "slot_type": "role",
          "suggestion_type": "person_name"
        },
        {
          "key": "project",
          "label": "研究项目",
          "slot_type": "object",
          "suggestion_type": "project_name"
        }
      ],
      "optional_slots": [
        {
          "key": "date_text",
          "label": "日期",
          "slot_type": "meta",
          "suggestion_type": "date_text"
        }
      ],
      "simple_fields": [
        "researcher",
        "project",
        "date_text"
      ],
      "complete_fields": [
        "researcher",
        "project",
        "date_text",
        "scene_hint",
        "detail_hint",
        "style_hint",
        "include_detail",
        "include_style",
        "include_context"
      ],
      "category": "创作与成果"
    },
    {
      "id": "read_book",
      "label": "阅读",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "棺材"
      ],
      "required_slots": [
        {
          "key": "reader",
          "label": "阅读者",
          "slot_type": "role",
          "suggestion_type": "person_name"
        },
        {
          "key": "book",
          "label": "书名",
          "slot_type": "object",
          "suggestion_type": "book_title"
        }
      ],
      "optional_slots": [
        {
          "key": "date_text",
          "label": "日期",
          "slot_type": "meta",
          "suggestion_type": "date_text"
        }
      ],
      "simple_fields": [
        "reader",
        "book",
        "date_text"
      ],
      "complete_fields": [
        "reader",
        "book",
        "date_text",
        "scene_hint",
        "detail_hint",
        "style_hint",
        "include_detail",
        "include_style",
        "include_context"
      ],
      "category": "创作与成果"
    },
    {
      "id": "recruit_joiner",
      "label": "招募",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "棺材"
      ],
      "required_slots": [
        {
          "key": "recruiter",
          "label": "招募者",
          "slot_type": "role",
          "suggestion_type": "person_name"
        },
        {
          "key": "joiner",
          "label": "加入者",
          "slot_type": "role",
          "suggestion_type": "person_name"
        }
      ],
      "optional_slots": [
        {
          "key": "date_text",
          "label": "日期",
          "slot_type": "meta",
          "suggestion_type": "date_text"
        }
      ],
      "simple_fields": [
        "recruiter",
        "joiner",
        "date_text"
      ],
      "complete_fields": [
        "recruiter",
        "joiner",
        "date_text",
        "scene_hint",
        "detail_hint",
        "style_hint",
        "include_detail",
        "include_style",
        "include_context"
      ],
      "category": "社交与关系"
    },
    {
      "id": "tame_animal",
      "label": "驯服",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "棺材"
      ],
      "required_slots": [
        {
          "key": "tamer",
          "label": "驯兽者",
          "slot_type": "role",
          "suggestion_type": "person_name"
        },
        {
          "key": "animal",
          "label": "动物",
          "slot_type": "object",
          "suggestion_type": "animal_name"
        }
      ],
      "optional_slots": [
        {
          "key": "date_text",
          "label": "日期",
          "slot_type": "meta",
          "suggestion_type": "date_text"
        }
      ],
      "simple_fields": [
        "tamer",
        "animal",
        "date_text"
      ],
      "complete_fields": [
        "tamer",
        "animal",
        "date_text",
        "scene_hint",
        "detail_hint",
        "style_hint",
        "include_detail",
        "include_style",
        "include_context"
      ],
      "category": "动物与自然"
    },
    {
      "id": "train_animal",
      "label": "训练",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "棺材"
      ],
      "required_slots": [
        {
          "key": "trainer",
          "label": "训练者",
          "slot_type": "role",
          "suggestion_type": "person_name"
        },
        {
          "key": "animal",
          "label": "动物",
          "slot_type": "object",
          "suggestion_type": "animal_name"
        },
        {
          "key": "training",
          "label": "训练项目",
          "slot_type": "object",
          "suggestion_type": "training_name"
        }
      ],
      "optional_slots": [
        {
          "key": "date_text",
          "label": "日期",
          "slot_type": "meta",
          "suggestion_type": "date_text"
        }
      ],
      "simple_fields": [
        "trainer",
        "animal",
        "training",
        "date_text"
      ],
      "complete_fields": [
        "trainer",
        "animal",
        "training",
        "date_text",
        "scene_hint",
        "detail_hint",
        "style_hint",
        "include_detail",
        "include_style",
        "include_context"
      ],
      "category": "动物与自然"
    },
    {
      "id": "marriage",
      "label": "结婚",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "棺材"
      ],
      "required_slots": [
        {
          "key": "spouse_a",
          "label": "配偶甲",
          "slot_type": "role",
          "suggestion_type": "person_name"
        },
        {
          "key": "spouse_b",
          "label": "配偶乙",
          "slot_type": "role",
          "suggestion_type": "person_name"
        }
      ],
      "optional_slots": [
        {
          "key": "date_text",
          "label": "日期",
          "slot_type": "meta",
          "suggestion_type": "date_text"
        }
      ],
      "simple_fields": [
        "spouse_a",
        "spouse_b",
        "date_text"
      ],
      "complete_fields": [
        "spouse_a",
        "spouse_b",
        "date_text",
        "scene_hint",
        "detail_hint",
        "style_hint",
        "include_detail",
        "include_style",
        "include_context"
      ],
      "category": "社交与关系"
    },
    {
      "id": "wound",
      "label": "受伤",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "棺材"
      ],
      "required_slots": [
        {
          "key": "attacker",
          "label": "攻击者",
          "slot_type": "role",
          "suggestion_type": "person_name"
        },
        {
          "key": "victim",
          "label": "受伤者",
          "slot_type": "role",
          "suggestion_type": "person_name"
        }
      ],
      "optional_slots": [
        {
          "key": "weapon",
          "label": "武器",
          "slot_type": "object",
          "suggestion_type": "weapon_name"
        },
        {
          "key": "wound_verb",
          "label": "伤害动词",
          "slot_type": "meta",
          "suggestion_type": "wound_verb"
        },
        {
          "key": "date_text",
          "label": "日期",
          "slot_type": "meta",
          "suggestion_type": "date_text"
        }
      ],
      "simple_fields": [
        "attacker",
        "victim",
        "date_text"
      ],
      "complete_fields": [
        "attacker",
        "victim",
        "date_text",
        "weapon",
        "wound_verb",
        "scene_hint",
        "detail_hint",
        "style_hint",
        "include_detail",
        "include_style",
        "include_context"
      ],
      "category": "战斗与冲突"
    },
    {
      "id": "kill",
      "label": "死亡",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "棺材"
      ],
      "required_slots": [
        {
          "key": "killer",
          "label": "击杀者",
          "slot_type": "role",
          "suggestion_type": "person_name"
        },
        {
          "key": "victim",
          "label": "死者",
          "slot_type": "role",
          "suggestion_type": "person_name"
        }
      ],
      "optional_slots": [
        {
          "key": "weapon",
          "label": "武器",
          "slot_type": "object",
          "suggestion_type": "weapon_name"
        },
        {
          "key": "date_text",
          "label": "日期",
          "slot_type": "meta",
          "suggestion_type": "date_text"
        }
      ],
      "simple_fields": [
        "killer",
        "victim",
        "date_text"
      ],
      "complete_fields": [
        "killer",
        "victim",
        "date_text",
        "weapon",
        "scene_hint",
        "detail_hint",
        "style_hint",
        "include_detail",
        "include_style",
        "include_context"
      ],
      "category": "战斗与冲突"
    },
    {
      "id": "meditate",
      "label": "沉思",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "棺材"
      ],
      "required_slots": [
        {
          "key": "pawn",
          "label": "冥想者",
          "slot_type": "role",
          "suggestion_type": "person_name"
        }
      ],
      "optional_slots": [
        {
          "key": "date_text",
          "label": "日期",
          "slot_type": "meta",
          "suggestion_type": "date_text"
        }
      ],
      "simple_fields": [
        "pawn",
        "date_text"
      ],
      "complete_fields": [
        "pawn",
        "date_text",
        "scene_hint",
        "detail_hint",
        "style_hint",
        "include_detail",
        "include_style",
        "include_context"
      ],
      "category": "心灵与仪式"
    },
    {
      "id": "pray",
      "label": "祈祷",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "棺材"
      ],
      "required_slots": [
        {
          "key": "pawn",
          "label": "祈祷者",
          "slot_type": "role",
          "suggestion_type": "person_name"
        }
      ],
      "optional_slots": [
        {
          "key": "date_text",
          "label": "日期",
          "slot_type": "meta",
          "suggestion_type": "date_text"
        }
      ],
      "simple_fields": [
        "pawn",
        "date_text"
      ],
      "complete_fields": [
        "pawn",
        "date_text",
        "scene_hint",
        "detail_hint",
        "style_hint",
        "include_detail",
        "include_style",
        "include_context"
      ],
      "category": "心灵与仪式"
    },
    {
      "id": "burial",
      "label": "埋葬尸体",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "棺材"
      ],
      "required_slots": [
        {
          "key": "mourner",
          "label": "送葬者",
          "slot_type": "role",
          "suggestion_type": "person_name"
        },
        {
          "key": "deceased",
          "label": "逝者",
          "slot_type": "role",
          "suggestion_type": "person_name"
        }
      ],
      "optional_slots": [
        {
          "key": "date_text",
          "label": "日期",
          "slot_type": "meta",
          "suggestion_type": "date_text"
        }
      ],
      "simple_fields": [
        "mourner",
        "deceased",
        "date_text"
      ],
      "complete_fields": [
        "mourner",
        "deceased",
        "date_text",
        "scene_hint",
        "detail_hint",
        "style_hint",
        "include_detail",
        "include_style",
        "include_context"
      ],
      "category": "心灵与仪式"
    },
    {
      "id": "party",
      "label": "参加派对",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "棺材"
      ],
      "required_slots": [
        {
          "key": "organizer",
          "label": "举办者",
          "slot_type": "role",
          "suggestion_type": "person_name"
        },
        {
          "key": "attender",
          "label": "参与者",
          "slot_type": "role",
          "suggestion_type": "person_name"
        }
      ],
      "optional_slots": [
        {
          "key": "date_text",
          "label": "日期",
          "slot_type": "meta",
          "suggestion_type": "date_text"
        }
      ],
      "simple_fields": [
        "organizer",
        "attender",
        "date_text"
      ],
      "complete_fields": [
        "organizer",
        "attender",
        "date_text",
        "scene_hint",
        "detail_hint",
        "style_hint",
        "include_detail",
        "include_style",
        "include_context"
      ],
      "category": "社交与关系"
    },
    {
      "id": "skill_mastery",
      "label": "技能精通",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "棺材"
      ],
      "required_slots": [
        {
          "key": "pawn",
          "label": "角色",
          "slot_type": "role",
          "suggestion_type": "person_name"
        },
        {
          "key": "skill",
          "label": "技能",
          "slot_type": "object",
          "suggestion_type": "skill_name"
        }
      ],
      "optional_slots": [
        {
          "key": "date_text",
          "label": "日期",
          "slot_type": "meta",
          "suggestion_type": "date_text"
        }
      ],
      "simple_fields": [
        "pawn",
        "skill",
        "date_text"
      ],
      "complete_fields": [
        "pawn",
        "skill",
        "date_text",
        "scene_hint",
        "detail_hint",
        "style_hint",
        "include_detail",
        "include_style",
        "include_context"
      ],
      "category": "创作与成果"
    },
    {
      "id": "insult",
      "label": "打架",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "棺材"
      ],
      "required_slots": [
        {
          "key": "initiator",
          "label": "挑衅者",
          "slot_type": "role",
          "suggestion_type": "person_name"
        },
        {
          "key": "responder",
          "label": "回应者",
          "slot_type": "role",
          "suggestion_type": "person_name"
        }
      ],
      "optional_slots": [
        {
          "key": "date_text",
          "label": "日期",
          "slot_type": "meta",
          "suggestion_type": "date_text"
        }
      ],
      "simple_fields": [
        "initiator",
        "responder",
        "date_text"
      ],
      "complete_fields": [
        "initiator",
        "responder",
        "date_text",
        "scene_hint",
        "detail_hint",
        "style_hint",
        "include_detail",
        "include_style",
        "include_context"
      ],
      "category": "社交与关系"
    },
    {
      "id": "escape_pod",
      "label": "运输舱着陆",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "棺材"
      ],
      "required_slots": [
        {
          "key": "pawn",
          "label": "降落者",
          "slot_type": "role",
          "suggestion_type": "person_name"
        }
      ],
      "optional_slots": [
        {
          "key": "date_text",
          "label": "日期",
          "slot_type": "meta",
          "suggestion_type": "date_text"
        }
      ],
      "simple_fields": [
        "pawn",
        "date_text"
      ],
      "complete_fields": [
        "pawn",
        "date_text",
        "scene_hint",
        "detail_hint",
        "style_hint",
        "include_detail",
        "include_style",
        "include_context"
      ],
      "category": "旅途与迁移"
    },
    {
      "id": "berserk_break",
      "label": "野蛮狂怒",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "棺材"
      ],
      "required_slots": [
        {
          "key": "pawn",
          "label": "失控者",
          "slot_type": "role",
          "suggestion_type": "person_name"
        }
      ],
      "optional_slots": [
        {
          "key": "date_text",
          "label": "日期",
          "slot_type": "meta",
          "suggestion_type": "date_text"
        }
      ],
      "simple_fields": [
        "pawn",
        "date_text"
      ],
      "complete_fields": [
        "pawn",
        "date_text",
        "scene_hint",
        "detail_hint",
        "style_hint",
        "include_detail",
        "include_style",
        "include_context"
      ],
      "category": "生存与状态"
    },
    {
      "id": "despair_break",
      "label": "放弃",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "棺材"
      ],
      "required_slots": [
        {
          "key": "pawn",
          "label": "崩溃者",
          "slot_type": "role",
          "suggestion_type": "person_name"
        }
      ],
      "optional_slots": [
        {
          "key": "date_text",
          "label": "日期",
          "slot_type": "meta",
          "suggestion_type": "date_text"
        }
      ],
      "simple_fields": [
        "pawn",
        "date_text"
      ],
      "complete_fields": [
        "pawn",
        "date_text",
        "scene_hint",
        "detail_hint",
        "style_hint",
        "include_detail",
        "include_style",
        "include_context"
      ],
      "category": "生存与状态"
    },
    {
      "id": "caravan_departure",
      "label": "远行队成立",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "棺材"
      ],
      "required_slots": [
        {
          "key": "pawn",
          "label": "领队者",
          "slot_type": "role",
          "suggestion_type": "person_name"
        }
      ],
      "optional_slots": [
        {
          "key": "date_text",
          "label": "日期",
          "slot_type": "meta",
          "suggestion_type": "date_text"
        }
      ],
      "simple_fields": [
        "pawn",
        "date_text"
      ],
      "complete_fields": [
        "pawn",
        "date_text",
        "scene_hint",
        "detail_hint",
        "style_hint",
        "include_detail",
        "include_style",
        "include_context"
      ],
      "category": "旅途与迁移"
    },
    {
      "id": "surgery",
      "label": "手术",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "棺材"
      ],
      "required_slots": [
        {
          "key": "surgeon",
          "label": "施术者",
          "slot_type": "role",
          "suggestion_type": "person_name"
        },
        {
          "key": "patient",
          "label": "接受手术者",
          "slot_type": "role",
          "suggestion_type": "person_name"
        }
      ],
      "optional_slots": [
        {
          "key": "date_text",
          "label": "日期",
          "slot_type": "meta",
          "suggestion_type": "date_text"
        }
      ],
      "simple_fields": [
        "surgeon",
        "patient",
        "date_text"
      ],
      "complete_fields": [
        "surgeon",
        "patient",
        "date_text",
        "scene_hint",
        "detail_hint",
        "style_hint",
        "include_detail",
        "include_style",
        "include_context"
      ],
      "category": "生存与状态"
    },
    {
      "id": "birth",
      "label": "生孩子",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "棺材"
      ],
      "required_slots": [
        {
          "key": "mother",
          "label": "母亲",
          "slot_type": "role",
          "suggestion_type": "person_name"
        },
        {
          "key": "child",
          "label": "孩子",
          "slot_type": "role",
          "suggestion_type": "person_name"
        }
      ],
      "optional_slots": [
        {
          "key": "date_text",
          "label": "日期",
          "slot_type": "meta",
          "suggestion_type": "date_text"
        }
      ],
      "simple_fields": [
        "mother",
        "child",
        "date_text"
      ],
      "complete_fields": [
        "mother",
        "child",
        "date_text",
        "scene_hint",
        "detail_hint",
        "style_hint",
        "include_detail",
        "include_style",
        "include_context"
      ],
      "category": "生存与状态"
    },
    {
      "id": "mine_vein",
      "label": "开采矿脉",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "棺材"
      ],
      "required_slots": [
        {
          "key": "miner",
          "label": "矿工",
          "slot_type": "role",
          "suggestion_type": "person_name"
        },
        {
          "key": "material",
          "label": "矿物",
          "slot_type": "object",
          "suggestion_type": "material_name"
        }
      ],
      "optional_slots": [
        {
          "key": "date_text",
          "label": "日期",
          "slot_type": "meta",
          "suggestion_type": "date_text"
        }
      ],
      "simple_fields": [
        "miner",
        "material",
        "date_text"
      ],
      "complete_fields": [
        "miner",
        "material",
        "date_text",
        "scene_hint",
        "detail_hint",
        "style_hint",
        "include_detail",
        "include_style",
        "include_context"
      ],
      "category": "创作与成果"
    },
    {
      "id": "game_play",
      "label": "玩游戏",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "棺材"
      ],
      "required_slots": [
        {
          "key": "pawn",
          "label": "参与者",
          "slot_type": "role",
          "suggestion_type": "person_name"
        },
        {
          "key": "game",
          "label": "娱乐项目",
          "slot_type": "object",
          "suggestion_type": "game_name"
        }
      ],
      "optional_slots": [
        {
          "key": "date_text",
          "label": "日期",
          "slot_type": "meta",
          "suggestion_type": "date_text"
        }
      ],
      "simple_fields": [
        "pawn",
        "game",
        "date_text"
      ],
      "complete_fields": [
        "pawn",
        "game",
        "date_text",
        "scene_hint",
        "detail_hint",
        "style_hint",
        "include_detail",
        "include_style",
        "include_context"
      ],
      "category": "生活与娱乐"
    },
    {
      "id": "drunkenness",
      "label": "醉酒",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "棺材"
      ],
      "required_slots": [
        {
          "key": "pawn",
          "label": "醉酒者",
          "slot_type": "role",
          "suggestion_type": "person_name"
        }
      ],
      "optional_slots": [
        {
          "key": "date_text",
          "label": "日期",
          "slot_type": "meta",
          "suggestion_type": "date_text"
        }
      ],
      "simple_fields": [
        "pawn",
        "date_text"
      ],
      "complete_fields": [
        "pawn",
        "date_text",
        "scene_hint",
        "detail_hint",
        "style_hint",
        "include_detail",
        "include_style",
        "include_context"
      ],
      "category": "生存与状态"
    },
    {
      "id": "fire_panic",
      "label": "起火",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "棺材"
      ],
      "required_slots": [
        {
          "key": "pawn",
          "label": "着火者",
          "slot_type": "role",
          "suggestion_type": "person_name"
        }
      ],
      "optional_slots": [
        {
          "key": "date_text",
          "label": "日期",
          "slot_type": "meta",
          "suggestion_type": "date_text"
        }
      ],
      "simple_fields": [
        "pawn",
        "date_text"
      ],
      "complete_fields": [
        "pawn",
        "date_text",
        "scene_hint",
        "detail_hint",
        "style_hint",
        "include_detail",
        "include_style",
        "include_context"
      ],
      "category": "生存与状态"
    },
    {
      "id": "nude_wander",
      "label": "裸奔",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "棺材"
      ],
      "required_slots": [
        {
          "key": "pawn",
          "label": "游荡者",
          "slot_type": "role",
          "suggestion_type": "person_name"
        }
      ],
      "optional_slots": [
        {
          "key": "date_text",
          "label": "日期",
          "slot_type": "meta",
          "suggestion_type": "date_text"
        }
      ],
      "simple_fields": [
        "pawn",
        "date_text"
      ],
      "complete_fields": [
        "pawn",
        "date_text",
        "scene_hint",
        "detail_hint",
        "style_hint",
        "include_detail",
        "include_style",
        "include_context"
      ],
      "category": "生存与状态"
    },
    {
      "id": "grave_visit",
      "label": "拜访墓地",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "棺材"
      ],
      "required_slots": [
        {
          "key": "visitor",
          "label": "探望者",
          "slot_type": "role",
          "suggestion_type": "person_name"
        },
        {
          "key": "deceased",
          "label": "逝者",
          "slot_type": "role",
          "suggestion_type": "person_name"
        }
      ],
      "optional_slots": [
        {
          "key": "date_text",
          "label": "日期",
          "slot_type": "meta",
          "suggestion_type": "date_text"
        }
      ],
      "simple_fields": [
        "visitor",
        "deceased",
        "date_text"
      ],
      "complete_fields": [
        "visitor",
        "deceased",
        "date_text",
        "scene_hint",
        "detail_hint",
        "style_hint",
        "include_detail",
        "include_style",
        "include_context"
      ],
      "category": "社交与关系"
    },
    {
      "id": "hunt_animal",
      "label": "狩猎",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "棺材"
      ],
      "required_slots": [
        {
          "key": "hunter",
          "label": "猎手",
          "slot_type": "role",
          "suggestion_type": "person_name"
        },
        {
          "key": "animal",
          "label": "猎物",
          "slot_type": "object",
          "suggestion_type": "animal_name"
        }
      ],
      "optional_slots": [
        {
          "key": "weapon",
          "label": "武器",
          "slot_type": "object",
          "suggestion_type": "weapon_name"
        },
        {
          "key": "date_text",
          "label": "日期",
          "slot_type": "meta",
          "suggestion_type": "date_text"
        }
      ],
      "simple_fields": [
        "hunter",
        "animal",
        "date_text"
      ],
      "complete_fields": [
        "hunter",
        "animal",
        "date_text",
        "weapon",
        "scene_hint",
        "detail_hint",
        "style_hint",
        "include_detail",
        "include_style",
        "include_context"
      ],
      "category": "战斗与冲突"
    },
    {
      "id": "capture_prisoner",
      "label": "俘虏",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "棺材"
      ],
      "required_slots": [
        {
          "key": "capturer",
          "label": "俘虏者",
          "slot_type": "role",
          "suggestion_type": "person_name"
        },
        {
          "key": "prisoner",
          "label": "被俘者",
          "slot_type": "role",
          "suggestion_type": "person_name"
        }
      ],
      "optional_slots": [
        {
          "key": "date_text",
          "label": "日期",
          "slot_type": "meta",
          "suggestion_type": "date_text"
        }
      ],
      "simple_fields": [
        "capturer",
        "prisoner",
        "date_text"
      ],
      "complete_fields": [
        "capturer",
        "prisoner",
        "date_text",
        "scene_hint",
        "detail_hint",
        "style_hint",
        "include_detail",
        "include_style",
        "include_context"
      ],
      "category": "战斗与冲突"
    },
    {
      "id": "execution",
      "label": "处决",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "棺材"
      ],
      "required_slots": [
        {
          "key": "executioner",
          "label": "执行者",
          "slot_type": "role",
          "suggestion_type": "person_name"
        },
        {
          "key": "prisoner",
          "label": "囚犯",
          "slot_type": "role",
          "suggestion_type": "person_name"
        }
      ],
      "optional_slots": [
        {
          "key": "date_text",
          "label": "日期",
          "slot_type": "meta",
          "suggestion_type": "date_text"
        }
      ],
      "simple_fields": [
        "executioner",
        "prisoner",
        "date_text"
      ],
      "complete_fields": [
        "executioner",
        "prisoner",
        "date_text",
        "scene_hint",
        "detail_hint",
        "style_hint",
        "include_detail",
        "include_style",
        "include_context"
      ],
      "category": "战斗与冲突"
    },
    {
      "id": "kidnap",
      "label": "绑架",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "棺材"
      ],
      "required_slots": [
        {
          "key": "kidnapper",
          "label": "绑架者",
          "slot_type": "role",
          "suggestion_type": "person_name"
        },
        {
          "key": "victim",
          "label": "受害者",
          "slot_type": "role",
          "suggestion_type": "person_name"
        }
      ],
      "optional_slots": [
        {
          "key": "date_text",
          "label": "日期",
          "slot_type": "meta",
          "suggestion_type": "date_text"
        }
      ],
      "simple_fields": [
        "kidnapper",
        "victim",
        "date_text"
      ],
      "complete_fields": [
        "kidnapper",
        "victim",
        "date_text",
        "scene_hint",
        "detail_hint",
        "style_hint",
        "include_detail",
        "include_style",
        "include_context"
      ],
      "category": "战斗与冲突"
    },
    {
      "id": "cryptosleep_enter",
      "label": "进入休眠状态",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "棺材"
      ],
      "required_slots": [
        {
          "key": "pawn",
          "label": "进入者",
          "slot_type": "role",
          "suggestion_type": "person_name"
        }
      ],
      "optional_slots": [
        {
          "key": "date_text",
          "label": "日期",
          "slot_type": "meta",
          "suggestion_type": "date_text"
        }
      ],
      "simple_fields": [
        "pawn",
        "date_text"
      ],
      "complete_fields": [
        "pawn",
        "date_text",
        "scene_hint",
        "detail_hint",
        "style_hint",
        "include_detail",
        "include_style",
        "include_context"
      ],
      "category": "旅途与迁移"
    },
    {
      "id": "cryptosleep_place",
      "label": "放入休眠舱",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "棺材"
      ],
      "required_slots": [
        {
          "key": "carrier",
          "label": "搬运者",
          "slot_type": "role",
          "suggestion_type": "person_name"
        },
        {
          "key": "sleeper",
          "label": "休眠者",
          "slot_type": "role",
          "suggestion_type": "person_name"
        }
      ],
      "optional_slots": [
        {
          "key": "date_text",
          "label": "日期",
          "slot_type": "meta",
          "suggestion_type": "date_text"
        }
      ],
      "simple_fields": [
        "carrier",
        "sleeper",
        "date_text"
      ],
      "complete_fields": [
        "carrier",
        "sleeper",
        "date_text",
        "scene_hint",
        "detail_hint",
        "style_hint",
        "include_detail",
        "include_style",
        "include_context"
      ],
      "category": "旅途与迁移"
    },
    {
      "id": "lover_union",
      "label": "成为情人",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "棺材"
      ],
      "required_slots": [
        {
          "key": "pursuer",
          "label": "求爱者",
          "slot_type": "role",
          "suggestion_type": "person_name"
        },
        {
          "key": "accepter",
          "label": "接受者",
          "slot_type": "role",
          "suggestion_type": "person_name"
        }
      ],
      "optional_slots": [
        {
          "key": "date_text",
          "label": "日期",
          "slot_type": "meta",
          "suggestion_type": "date_text"
        }
      ],
      "simple_fields": [
        "pursuer",
        "accepter",
        "date_text"
      ],
      "complete_fields": [
        "pursuer",
        "accepter",
        "date_text",
        "scene_hint",
        "detail_hint",
        "style_hint",
        "include_detail",
        "include_style",
        "include_context"
      ],
      "category": "社交与关系"
    },
    {
      "id": "breakup",
      "label": "破裂",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "棺材"
      ],
      "required_slots": [
        {
          "key": "dumper",
          "label": "提出分手者",
          "slot_type": "role",
          "suggestion_type": "person_name"
        },
        {
          "key": "rejected",
          "label": "被拒者",
          "slot_type": "role",
          "suggestion_type": "person_name"
        }
      ],
      "optional_slots": [
        {
          "key": "date_text",
          "label": "日期",
          "slot_type": "meta",
          "suggestion_type": "date_text"
        }
      ],
      "simple_fields": [
        "dumper",
        "rejected",
        "date_text"
      ],
      "complete_fields": [
        "dumper",
        "rejected",
        "date_text",
        "scene_hint",
        "detail_hint",
        "style_hint",
        "include_detail",
        "include_style",
        "include_context"
      ],
      "category": "社交与关系"
    },
    {
      "id": "animal_bond",
      "label": "发展牵绊",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "棺材"
      ],
      "required_slots": [
        {
          "key": "human",
          "label": "人类角色",
          "slot_type": "role",
          "suggestion_type": "person_name"
        },
        {
          "key": "animal",
          "label": "动物",
          "slot_type": "object",
          "suggestion_type": "animal_name"
        }
      ],
      "optional_slots": [
        {
          "key": "date_text",
          "label": "日期",
          "slot_type": "meta",
          "suggestion_type": "date_text"
        }
      ],
      "simple_fields": [
        "human",
        "animal",
        "date_text"
      ],
      "complete_fields": [
        "human",
        "animal",
        "date_text",
        "scene_hint",
        "detail_hint",
        "style_hint",
        "include_detail",
        "include_style",
        "include_context"
      ],
      "category": "社交与关系"
    },
    {
      "id": "trade_deal",
      "label": "进行交易",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "棺材"
      ],
      "required_slots": [
        {
          "key": "buyer",
          "label": "购买者",
          "slot_type": "role",
          "suggestion_type": "person_name"
        },
        {
          "key": "seller",
          "label": "出售者",
          "slot_type": "role",
          "suggestion_type": "person_name"
        }
      ],
      "optional_slots": [
        {
          "key": "date_text",
          "label": "日期",
          "slot_type": "meta",
          "suggestion_type": "date_text"
        }
      ],
      "simple_fields": [
        "buyer",
        "seller",
        "date_text"
      ],
      "complete_fields": [
        "buyer",
        "seller",
        "date_text",
        "scene_hint",
        "detail_hint",
        "style_hint",
        "include_detail",
        "include_style",
        "include_context"
      ],
      "category": "社交与关系"
    },
    {
      "id": "strip_target",
      "label": "扒光衣服",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "棺材"
      ],
      "required_slots": [
        {
          "key": "taker",
          "label": "取走装备者",
          "slot_type": "role",
          "suggestion_type": "person_name"
        },
        {
          "key": "stripped",
          "label": "被剥取者",
          "slot_type": "role",
          "suggestion_type": "person_name"
        }
      ],
      "optional_slots": [
        {
          "key": "date_text",
          "label": "日期",
          "slot_type": "meta",
          "suggestion_type": "date_text"
        }
      ],
      "simple_fields": [
        "taker",
        "stripped",
        "date_text"
      ],
      "complete_fields": [
        "taker",
        "stripped",
        "date_text",
        "scene_hint",
        "detail_hint",
        "style_hint",
        "include_detail",
        "include_style",
        "include_context"
      ],
      "category": "战斗与冲突"
    },
    {
      "id": "snowman_build",
      "label": "堆雪人",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "棺材"
      ],
      "required_slots": [
        {
          "key": "pawn",
          "label": "堆雪人者",
          "slot_type": "role",
          "suggestion_type": "person_name"
        }
      ],
      "optional_slots": [
        {
          "key": "date_text",
          "label": "日期",
          "slot_type": "meta",
          "suggestion_type": "date_text"
        }
      ],
      "simple_fields": [
        "pawn",
        "date_text"
      ],
      "complete_fields": [
        "pawn",
        "date_text",
        "scene_hint",
        "detail_hint",
        "style_hint",
        "include_detail",
        "include_style",
        "include_context"
      ],
      "category": "生活与娱乐"
    },
    {
      "id": "meteorite_impact",
      "label": "陨石撞击",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "棺材"
      ],
      "required_slots": [
        {
          "key": "pawn",
          "label": "目击者",
          "slot_type": "role",
          "suggestion_type": "person_name"
        }
      ],
      "optional_slots": [
        {
          "key": "date_text",
          "label": "日期",
          "slot_type": "meta",
          "suggestion_type": "date_text"
        }
      ],
      "simple_fields": [
        "pawn",
        "date_text"
      ],
      "complete_fields": [
        "pawn",
        "date_text",
        "scene_hint",
        "detail_hint",
        "style_hint",
        "include_detail",
        "include_style",
        "include_context"
      ],
      "category": "天象与灾害"
    },
    {
      "id": "toxic_fallout",
      "label": "有毒尘埃",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "棺材"
      ],
      "required_slots": [
        {
          "key": "pawn",
          "label": "经历者",
          "slot_type": "role",
          "suggestion_type": "person_name"
        }
      ],
      "optional_slots": [
        {
          "key": "date_text",
          "label": "日期",
          "slot_type": "meta",
          "suggestion_type": "date_text"
        }
      ],
      "simple_fields": [
        "pawn",
        "date_text"
      ],
      "complete_fields": [
        "pawn",
        "date_text",
        "scene_hint",
        "detail_hint",
        "style_hint",
        "include_detail",
        "include_style",
        "include_context"
      ],
      "category": "天象与灾害"
    },
    {
      "id": "aurora",
      "label": "极光",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "棺材"
      ],
      "required_slots": [
        {
          "key": "pawn",
          "label": "见证者",
          "slot_type": "role",
          "suggestion_type": "person_name"
        }
      ],
      "optional_slots": [
        {
          "key": "date_text",
          "label": "日期",
          "slot_type": "meta",
          "suggestion_type": "date_text"
        }
      ],
      "simple_fields": [
        "pawn",
        "date_text"
      ],
      "complete_fields": [
        "pawn",
        "date_text",
        "scene_hint",
        "detail_hint",
        "style_hint",
        "include_detail",
        "include_style",
        "include_context"
      ],
      "category": "天象与灾害"
    },
    {
      "id": "flashstorm",
      "label": "闪电风暴",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "棺材"
      ],
      "required_slots": [
        {
          "key": "pawn",
          "label": "经历者",
          "slot_type": "role",
          "suggestion_type": "person_name"
        }
      ],
      "optional_slots": [
        {
          "key": "date_text",
          "label": "日期",
          "slot_type": "meta",
          "suggestion_type": "date_text"
        }
      ],
      "simple_fields": [
        "pawn",
        "date_text"
      ],
      "complete_fields": [
        "pawn",
        "date_text",
        "scene_hint",
        "detail_hint",
        "style_hint",
        "include_detail",
        "include_style",
        "include_context"
      ],
      "category": "天象与灾害"
    },
    {
      "id": "insect_infestation",
      "label": "虫灾",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "棺材"
      ],
      "required_slots": [
        {
          "key": "pawn",
          "label": "经历者",
          "slot_type": "role",
          "suggestion_type": "person_name"
        }
      ],
      "optional_slots": [
        {
          "key": "date_text",
          "label": "日期",
          "slot_type": "meta",
          "suggestion_type": "date_text"
        }
      ],
      "simple_fields": [
        "pawn",
        "date_text"
      ],
      "complete_fields": [
        "pawn",
        "date_text",
        "scene_hint",
        "detail_hint",
        "style_hint",
        "include_detail",
        "include_style",
        "include_context"
      ],
      "category": "天象与灾害"
    },
    {
      "id": "manhunter_pack",
      "label": "大群动物猎杀人类",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "棺材"
      ],
      "required_slots": [
        {
          "key": "pawn",
          "label": "目击者",
          "slot_type": "role",
          "suggestion_type": "person_name"
        }
      ],
      "optional_slots": [
        {
          "key": "date_text",
          "label": "日期",
          "slot_type": "meta",
          "suggestion_type": "date_text"
        }
      ],
      "simple_fields": [
        "pawn",
        "date_text"
      ],
      "complete_fields": [
        "pawn",
        "date_text",
        "scene_hint",
        "detail_hint",
        "style_hint",
        "include_detail",
        "include_style",
        "include_context"
      ],
      "category": "动物与自然"
    },
    {
      "id": "heatstroke",
      "label": "中暑",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "棺材"
      ],
      "required_slots": [
        {
          "key": "pawn",
          "label": "经历者",
          "slot_type": "role",
          "suggestion_type": "person_name"
        }
      ],
      "optional_slots": [
        {
          "key": "date_text",
          "label": "日期",
          "slot_type": "meta",
          "suggestion_type": "date_text"
        }
      ],
      "simple_fields": [
        "pawn",
        "date_text"
      ],
      "complete_fields": [
        "pawn",
        "date_text",
        "scene_hint",
        "detail_hint",
        "style_hint",
        "include_detail",
        "include_style",
        "include_context"
      ],
      "category": "生存与状态"
    },
    {
      "id": "hypothermia",
      "label": "患低温症",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "棺材"
      ],
      "required_slots": [
        {
          "key": "pawn",
          "label": "经历者",
          "slot_type": "role",
          "suggestion_type": "person_name"
        }
      ],
      "optional_slots": [
        {
          "key": "date_text",
          "label": "日期",
          "slot_type": "meta",
          "suggestion_type": "date_text"
        }
      ],
      "simple_fields": [
        "pawn",
        "date_text"
      ],
      "complete_fields": [
        "pawn",
        "date_text",
        "scene_hint",
        "detail_hint",
        "style_hint",
        "include_detail",
        "include_style",
        "include_context"
      ],
      "category": "生存与状态"
    },
    {
      "id": "exhaustion_collapse",
      "label": "筋疲力尽",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "棺材"
      ],
      "required_slots": [
        {
          "key": "pawn",
          "label": "倒下者",
          "slot_type": "role",
          "suggestion_type": "person_name"
        }
      ],
      "optional_slots": [
        {
          "key": "date_text",
          "label": "日期",
          "slot_type": "meta",
          "suggestion_type": "date_text"
        }
      ],
      "simple_fields": [
        "pawn",
        "date_text"
      ],
      "complete_fields": [
        "pawn",
        "date_text",
        "scene_hint",
        "detail_hint",
        "style_hint",
        "include_detail",
        "include_style",
        "include_context"
      ],
      "category": "生存与状态"
    },
    {
      "id": "cannibalism",
      "label": "生食人肉",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "棺材"
      ],
      "required_slots": [
        {
          "key": "pawn",
          "label": "行为者",
          "slot_type": "role",
          "suggestion_type": "person_name"
        }
      ],
      "optional_slots": [
        {
          "key": "date_text",
          "label": "日期",
          "slot_type": "meta",
          "suggestion_type": "date_text"
        }
      ],
      "simple_fields": [
        "pawn",
        "date_text"
      ],
      "complete_fields": [
        "pawn",
        "date_text",
        "scene_hint",
        "detail_hint",
        "style_hint",
        "include_detail",
        "include_style",
        "include_context"
      ],
      "category": "生存与状态"
    },
    {
      "id": "tox_buildup",
      "label": "中毒",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "棺材"
      ],
      "required_slots": [
        {
          "key": "pawn",
          "label": "经历者",
          "slot_type": "role",
          "suggestion_type": "person_name"
        }
      ],
      "optional_slots": [
        {
          "key": "date_text",
          "label": "日期",
          "slot_type": "meta",
          "suggestion_type": "date_text"
        }
      ],
      "simple_fields": [
        "pawn",
        "date_text"
      ],
      "complete_fields": [
        "pawn",
        "date_text",
        "scene_hint",
        "detail_hint",
        "style_hint",
        "include_detail",
        "include_style",
        "include_context"
      ],
      "category": "生存与状态"
    },
    {
      "id": "message_received",
      "label": "旅行邀请",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "棺材"
      ],
      "required_slots": [
        {
          "key": "pawn",
          "label": "接收者",
          "slot_type": "role",
          "suggestion_type": "person_name"
        }
      ],
      "optional_slots": [
        {
          "key": "date_text",
          "label": "日期",
          "slot_type": "meta",
          "suggestion_type": "date_text"
        }
      ],
      "simple_fields": [
        "pawn",
        "date_text"
      ],
      "complete_fields": [
        "pawn",
        "date_text",
        "scene_hint",
        "detail_hint",
        "style_hint",
        "include_detail",
        "include_style",
        "include_context"
      ],
      "category": "旅途与迁移"
    },
    {
      "id": "eclipse",
      "label": "日蚀",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "棺材"
      ],
      "required_slots": [
        {
          "key": "pawn",
          "label": "目击者",
          "slot_type": "role",
          "suggestion_type": "person_name"
        }
      ],
      "optional_slots": [
        {
          "key": "date_text",
          "label": "日期",
          "slot_type": "meta",
          "suggestion_type": "date_text"
        }
      ],
      "simple_fields": [
        "pawn",
        "date_text"
      ],
      "complete_fields": [
        "pawn",
        "date_text",
        "scene_hint",
        "detail_hint",
        "style_hint",
        "include_detail",
        "include_style",
        "include_context"
      ],
      "category": "天象与灾害"
    },
    {
      "id": "tornado",
      "label": "龙卷风",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "棺材"
      ],
      "required_slots": [
        {
          "key": "pawn",
          "label": "经历者",
          "slot_type": "role",
          "suggestion_type": "person_name"
        }
      ],
      "optional_slots": [
        {
          "key": "date_text",
          "label": "日期",
          "slot_type": "meta",
          "suggestion_type": "date_text"
        }
      ],
      "simple_fields": [
        "pawn",
        "date_text"
      ],
      "complete_fields": [
        "pawn",
        "date_text",
        "scene_hint",
        "detail_hint",
        "style_hint",
        "include_detail",
        "include_style",
        "include_context"
      ],
      "category": "天象与灾害"
    },
    {
      "id": "vomit",
      "label": "呕吐",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "棺材"
      ],
      "required_slots": [
        {
          "key": "pawn",
          "label": "呕吐者",
          "slot_type": "role",
          "suggestion_type": "person_name"
        }
      ],
      "optional_slots": [
        {
          "key": "date_text",
          "label": "日期",
          "slot_type": "meta",
          "suggestion_type": "date_text"
        }
      ],
      "simple_fields": [
        "pawn",
        "date_text"
      ],
      "complete_fields": [
        "pawn",
        "date_text",
        "scene_hint",
        "detail_hint",
        "style_hint",
        "include_detail",
        "include_style",
        "include_context"
      ],
      "category": "生存与状态"
    },
    {
      "id": "cavein_escape",
      "label": "躲避塌落",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "棺材"
      ],
      "required_slots": [
        {
          "key": "pawn",
          "label": "躲避者",
          "slot_type": "role",
          "suggestion_type": "person_name"
        }
      ],
      "optional_slots": [
        {
          "key": "date_text",
          "label": "日期",
          "slot_type": "meta",
          "suggestion_type": "date_text"
        }
      ],
      "simple_fields": [
        "pawn",
        "date_text"
      ],
      "complete_fields": [
        "pawn",
        "date_text",
        "scene_hint",
        "detail_hint",
        "style_hint",
        "include_detail",
        "include_style",
        "include_context"
      ],
      "category": "旅途与迁移"
    },
    {
      "id": "caravan_ambush",
      "label": "远行队被伏击",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "棺材"
      ],
      "required_slots": [
        {
          "key": "pawn",
          "label": "商队成员",
          "slot_type": "role",
          "suggestion_type": "person_name"
        }
      ],
      "optional_slots": [
        {
          "key": "date_text",
          "label": "日期",
          "slot_type": "meta",
          "suggestion_type": "date_text"
        }
      ],
      "simple_fields": [
        "pawn",
        "date_text"
      ],
      "complete_fields": [
        "pawn",
        "date_text",
        "scene_hint",
        "detail_hint",
        "style_hint",
        "include_detail",
        "include_style",
        "include_context"
      ],
      "category": "战斗与冲突"
    },
    {
      "id": "ship_chunk_crash",
      "label": "飞船部件坠落",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "棺材"
      ],
      "required_slots": [
        {
          "key": "pawn",
          "label": "目击者",
          "slot_type": "role",
          "suggestion_type": "person_name"
        }
      ],
      "optional_slots": [
        {
          "key": "date_text",
          "label": "日期",
          "slot_type": "meta",
          "suggestion_type": "date_text"
        }
      ],
      "simple_fields": [
        "pawn",
        "date_text"
      ],
      "complete_fields": [
        "pawn",
        "date_text",
        "scene_hint",
        "detail_hint",
        "style_hint",
        "include_detail",
        "include_style",
        "include_context"
      ],
      "category": "旅途与迁移"
    },
    {
      "id": "volcanic_winter",
      "label": "火山冬天",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "棺材"
      ],
      "required_slots": [
        {
          "key": "pawn",
          "label": "经历者",
          "slot_type": "role",
          "suggestion_type": "person_name"
        }
      ],
      "optional_slots": [
        {
          "key": "date_text",
          "label": "日期",
          "slot_type": "meta",
          "suggestion_type": "date_text"
        }
      ],
      "simple_fields": [
        "pawn",
        "date_text"
      ],
      "complete_fields": [
        "pawn",
        "date_text",
        "scene_hint",
        "detail_hint",
        "style_hint",
        "include_detail",
        "include_style",
        "include_context"
      ],
      "category": "天象与灾害"
    },
    {
      "id": "disease_onset",
      "label": "生病",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "棺材"
      ],
      "required_slots": [
        {
          "key": "pawn",
          "label": "患者",
          "slot_type": "role",
          "suggestion_type": "person_name"
        },
        {
          "key": "illness",
          "label": "疾病",
          "slot_type": "object",
          "suggestion_type": "illness_name"
        }
      ],
      "optional_slots": [
        {
          "key": "date_text",
          "label": "日期",
          "slot_type": "meta",
          "suggestion_type": "date_text"
        }
      ],
      "simple_fields": [
        "pawn",
        "illness",
        "date_text"
      ],
      "complete_fields": [
        "pawn",
        "illness",
        "date_text",
        "scene_hint",
        "detail_hint",
        "style_hint",
        "include_detail",
        "include_style",
        "include_context"
      ],
      "category": "生存与状态"
    },
    {
      "id": "recruit_failure",
      "label": "招募失败",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "棺材"
      ],
      "required_slots": [
        {
          "key": "recruiter",
          "label": "招募者",
          "slot_type": "role",
          "suggestion_type": "person_name"
        },
        {
          "key": "target",
          "label": "目标对象",
          "slot_type": "role",
          "suggestion_type": "person_name"
        }
      ],
      "optional_slots": [
        {
          "key": "date_text",
          "label": "日期",
          "slot_type": "meta",
          "suggestion_type": "date_text"
        }
      ],
      "simple_fields": [
        "recruiter",
        "target",
        "date_text"
      ],
      "complete_fields": [
        "recruiter",
        "target",
        "date_text",
        "scene_hint",
        "detail_hint",
        "style_hint",
        "include_detail",
        "include_style",
        "include_context"
      ],
      "category": "社交与关系"
    },
    {
      "id": "animal_revenge",
      "label": "动物反击",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "棺材"
      ],
      "required_slots": [
        {
          "key": "pawn",
          "label": "遭袭者",
          "slot_type": "role",
          "suggestion_type": "person_name"
        },
        {
          "key": "animal",
          "label": "动物",
          "slot_type": "object",
          "suggestion_type": "animal_name"
        }
      ],
      "optional_slots": [
        {
          "key": "date_text",
          "label": "日期",
          "slot_type": "meta",
          "suggestion_type": "date_text"
        }
      ],
      "simple_fields": [
        "pawn",
        "animal",
        "date_text"
      ],
      "complete_fields": [
        "pawn",
        "animal",
        "date_text",
        "scene_hint",
        "detail_hint",
        "style_hint",
        "include_detail",
        "include_style",
        "include_context"
      ],
      "category": "战斗与冲突"
    }
  ],
  "SLOT_SUGGESTIONS": {
    "person_name": [
      "风铃草",
      "雪绒花",
      "旷远牙",
      "风信子",
      "皇家心",
      "秘银盾"
    ],
    "role_title": [
      "工匠",
      "学者",
      "猎手",
      "驯兽师",
      "士兵",
      "医师",
      "殖民者",
      "指挥者",
      "旅人",
      "读者",
      "送葬者"
    ],
    "pronoun": [
      "他",
      "她",
      "TA"
    ],
    "thing_name": [
      "花岗岩雕塑",
      "木雕",
      "长椅",
      "石制棺材",
      "细工陶瓶",
      "玉制摆件",
      "玻璃钢武器"
    ],
    "object_name": [
      "石墙",
      "雕花长椅",
      "精工工作台",
      "纪念墓碑",
      "木制书架",
      "装饰石棺",
      "金属围栏"
    ],
    "project_name": [
      "微电子学",
      "电荷弹",
      "电力学",
      "星际飞船结构",
      "仿生学",
      "先进假肢",
      "深钻开采"
    ],
    "book_title": [
      "群星之外",
      "荒原烹饪集",
      "边境礼法录",
      "异象研究札记",
      "沉睡火种",
      "石尘与钢铁"
    ],
    "weapon_name": [
      "单分子剑",
      "电荷步枪",
      "左轮手枪",
      "宙斯锤",
      "长剑",
      "重型冲锋枪",
      "等离子剑"
    ],
    "animal_name": [
      "驼鹿",
      "阿尔法海狸",
      "野猪",
      "狼",
      "巨象",
      "驯鹿",
      "松鼠猴"
    ],
    "training_name": [
      "服从",
      "搬运",
      "救援",
      "攻击",
      "警戒"
    ],
    "skill_name": [
      "建造",
      "艺术",
      "射击",
      "近战",
      "种植",
      "烹饪",
      "医疗",
      "研究"
    ],
    "material_name": [
      "钢铁",
      "黄金",
      "白银",
      "翡翠",
      "零部件",
      "高级零部件",
      "玻璃钢",
      "活铁"
    ],
    "game_name": [
      "桌棋",
      "台球",
      "飞镖盘",
      "打牌",
      "骰子游戏",
      "扑克桌"
    ],
    "illness_name": [
      "流感",
      "疟疾",
      "瘟疫",
      "食物中毒",
      "感染",
      "机械病症"
    ],
    "quality": [
      "极差",
      "较差",
      "一般",
      "良好",
      "极佳",
      "大师级",
      "传奇级"
    ],
    "material": [
      "木制",
      "花岗岩制",
      "钢制",
      "银制",
      "金制",
      "玉制",
      "石制",
      "玻璃钢制"
    ],
    "art_title": [
      "《晨光之手》",
      "《沉默的誓约》",
      "《无声凯旋》",
      "《风雪边界》",
      "《古老回声》",
      "《最后一击》"
    ],
    "scene_hint": [
      "在灯火昏黄的工坊里",
      "在暮色笼罩的庭院中",
      "在纷扬细雪之间",
      "在肃穆的仪式厅内",
      "在尘土飞扬的战场边缘",
      "在被篝火照亮的夜色里",
      "在肃静的厅堂中",
      "在夜色和火光之间",
      "在尘土翻卷的荒地边缘"
    ],
    "detail_hint": [
      "周围散落着工具与碎屑。",
      "背景里站着几名旁观者。",
      "人物的姿态被夸张地处理得更显庄严。",
      "画面边缘缀着细碎阴影。",
      "远处可见沉默的建筑轮廓。",
      "背景中的形体被压缩得更扁平，以让主体显得更突出。",
      "主景之外仍保留了一些细小形象，使画面不至于空乏。",
      "在距离主体稍远处，还能辨认出被弱化的附属细节。"
    ],
    "style_hint": [
      "整体构图端正而平衡。",
      "这件作品似乎在暗示坚忍与失落并存。",
      "作品带着冷静而压迫的气息。",
      "它仿佛在象征秩序对混乱的短暂压制。",
      "作品像是在借图像表达某种难以言明的观念。",
      "整体气质在冷静与张力之间保持着平衡。",
      "这件作品带着明显的象征意味。"
    ],
    "date_text": [
      "5500年翠象1日",
      "5501年赫象7日",
      "5503年荼象12日",
      "5505年素象15日",
      "某年某象某日"
    ],
    "wound_verb": [
      "刺伤",
      "砍伤",
      "击伤",
      "射伤",
      "重创"
    ],
    "time_year": [
      "5500",
      "5501",
      "5502",
      "5503",
      "5504",
      "5505",
      "5506",
      "5507",
      "5508",
      "5509",
      "5510",
      "5511",
      "5512",
      "5513",
      "5514",
      "5515",
      "5516",
      "5517",
      "5518",
      "5519",
      "5520",
      "5521",
      "5522",
      "5523",
      "5524",
      "5525",
      "5526",
      "5527",
      "5528",
      "5529",
      "5530",
      "5531",
      "5532",
      "5533",
      "5534",
      "5535",
      "5536",
      "5537",
      "5538",
      "5539",
      "5540",
      "5541",
      "5542",
      "5543",
      "5544",
      "5545",
      "5546",
      "5547",
      "5548",
      "5549",
      "5550",
      "5551",
      "5552",
      "5553",
      "5554",
      "5555",
      "5556",
      "5557",
      "5558",
      "5559",
      "5560",
      "5561",
      "5562",
      "5563",
      "5564",
      "5565",
      "5566",
      "5567",
      "5568",
      "5569",
      "5570",
      "5571",
      "5572",
      "5573",
      "5574",
      "5575",
      "5576",
      "5577",
      "5578",
      "5579",
      "5580",
      "5581",
      "5582",
      "5583",
      "5584",
      "5585",
      "5586",
      "5587",
      "5588",
      "5589",
      "5590",
      "5591",
      "5592",
      "5593",
      "5594",
      "5595",
      "5596",
      "5597",
      "5598",
      "5599"
    ],
    "time_quadrum": [
      "翠象",
      "赫象",
      "荼象",
      "素象"
    ],
    "time_day": [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15"
    ]
  },
  "TEXT_TEMPLATES": {
    "carrier_openers": {
      "雕塑": [
        "这件雕塑刻画的是{main_image}。",
        "这件雕塑向我们展示了{main_image}。",
        "在这件雕塑上刻画的是{main_image}。"
      ],
      "家具": [
        "这件家具上雕刻的内容刻画了{main_image}。",
        "这件家具上雕刻的内容向我们展示了{main_image}。",
        "在这件家具上雕刻的内容刻画的是{main_image}。"
      ],
      "近战武器": [
        "这件武器上雕刻的内容刻画了{main_image}。",
        "这件武器上雕刻的内容向我们展示了{main_image}。",
        "在这件武器上雕刻的内容刻画的是{main_image}。"
      ],
      "远程武器": [
        "这件武器上雕刻的内容刻画了{main_image}。",
        "这件武器上雕刻的内容向我们展示了{main_image}。",
        "在这件武器上雕刻的内容刻画的是{main_image}。"
      ],
      "棺材": [
        "这件棺材上雕刻的内容刻画了{main_image}。",
        "这件棺材上雕刻的内容向我们展示了{main_image}。",
        "在这件棺材上雕刻的内容刻画的是{main_image}。"
      ]
    },
    "context_sentences": [
      "这件作品所引述的，是发生在{date_text}的{event_noun}。",
      "这件作品描述的是发生在{date_text}的{event_noun}。",
      "这件作品记述了发生在{date_text}的{event_noun}。"
    ],
    "title_sentences": [
      "下方写着这件作品的标题：{title}。",
      "这件作品被题名为{title}。",
      "在图像一角，可以看到它的名字：{title}。",
      "作品的名字被写作{title}。",
      "角落里还能辨认出标题：{title}。",
      "这件作品以{title}为名。",
      "在图像边缘，可以读到标题：{title}。",
      "这件作品最终被命名为{title}。"
    ],
    "default_scene_phrases": [
      "在灯火昏黄的工坊里",
      "在肃静的厅堂中",
      "在尘土翻卷的荒地边缘",
      "在雪意未尽的时候",
      "在夜色和火光之间",
      "在聚落外缘",
      "在主体后方的空地上",
      "在远处地形起伏的尽头"
    ],
    "default_detail_sentences": [
      "背景中的人物被刻得更小，以衬托主体。",
      "周围零散的器物与阴影加强了画面的重量。",
      "线条被刻意压紧，使中央一幕显得更重要。",
      "在画面边缘，还能看到零散的陪衬形象。",
      "背景中的形体被压缩得更扁平，以让主体显得更突出。",
      "主景之外仍保留了一些细小形象，使画面不至于空乏。",
      "在距离主体稍远处，还能辨认出被弱化的附属细节。",
      "焦点之后的阴影与器物，让整幅图像更具层次。"
    ],
    "default_style_sentences": [
      "整体构图端正而平衡。",
      "这件作品带着冷静而沉重的气息。",
      "它仿佛在象征秩序、欲望与失去之间的拉扯。",
      "整体构图近乎三角式地稳固下来。",
      "主景与背景之间形成了鲜明而克制的对照。",
      "这件作品带着明显的象征意味。",
      "整体气质在冷静与张力之间保持着平衡。",
      "作品像是在借图像表达某种难以言明的观念。"
    ],
    "event_templates": {
      "crafted_art": {
        "event_nouns": [
          "{maker_display}创作{thing_phrase}",
          "{maker_display}完成{thing_phrase}",
          "{maker_display}将心力倾注在{thing_phrase}上"
        ],
        "main_images": [
          "{maker_display}正专注地制作{thing_phrase}{scene_fragment}",
          "{maker_display}完成{thing_phrase}的最后工序{scene_fragment}",
          "{maker_display}伏案雕琢{thing_phrase}{scene_fragment}"
        ],
        "detail_sentences": [
          "工具散落在四周，像是一场漫长劳动刚刚结束。",
          "{thing_phrase}被刻得略大，以强调它的重要性。",
          "{maker_pronoun}的神情被处理得更有力量，几乎像是作品的一部分。"
        ],
        "style_sentences": [
          "它似乎在赞颂技艺与专注。",
          "整体构图稳固，带着一种完成后的满足感。",
          "这件作品表现出劳动本身的尊严。"
        ],
        "scene_phrases": [
          "在灯火昏黄的工坊里",
          "在满是木屑和石粉的工作台前",
          "在长夜将尽的时候"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{maker_display}制作{thing_phrase}的时光"
          ],
          "image": [
            "{maker_display}正[circumstance_phrase]制作{thing_phrase}。[quality_sentence]。[title_sentence]",
            "{maker_display}正[circumstance_phrase]完成{maker_display}的{thing_phrase}的工作。[quality_sentence]。[title_sentence]",
            "{maker_display}正[circumstance_phrase]致力于完成{thing_phrase}。[quality_sentence]。[title_sentence]",
            "{maker_display}正[circumstance_phrase]做{thing_phrase}。[quality_sentence]。[title_sentence]"
          ],
          "circumstance_phrase": [
            "全身心投入地",
            "一脸满足地",
            "在{maker_display}的工作台旁",
            "极度紧张地"
          ],
          "desc_sentence": [
            "有一些工具散落在周围。",
            "{maker_pronoun}在工作中受伤，留下了疤痕。",
            "{maker_pronoun}大汗淋漓。",
            "工作环境非常整洁，所有工具都放置在合适的位置。",
            "{maker_pronoun}以夸张的表现方式描绘，显得更有力。",
            "{thing_phrase}夸张的大小强调了其重要性。",
            "{thing_phrase}被添加了艺术性的光辉，看起来如同天使一般。",
            "{maker_display}逐渐淡化到背景中，以强调{maker_display}的新作。",
            "[quantity_adjphrase]旁观者们围绕着{maker_pronoun}。",
            "一群人在背景中欢呼。"
          ],
          "quality_sentence": [
            "{thing_phrase}看来是{quality_short}级的质量",
            "{thing_phrase}是{quality_short}级的质量",
            "{maker_display}的作品是{quality_short}级的质量"
          ],
          "title_sentence": [
            "{maker_display}给{thing_phrase}起了以下的标题：{title}",
            "{thing_phrase}上被纹章装饰着的标题：{title}",
            "{thing_phrase}的标题，{title}，悬在背景中"
          ],
          "circumstance_group": [
            "全身心投入地",
            "一脸满足地",
            "在{maker_display}的工作台旁",
            "极度紧张地"
          ]
        }
      },
      "finished_construction": {
        "event_nouns": [
          "{builder_display}完成{object_phrase}",
          "{builder_display}建起{object_phrase}",
          "{builder_display}结束对{object_phrase}的制作"
        ],
        "main_images": [
          "{builder_display}正为{object_phrase}做最后整理{scene_fragment}",
          "{builder_display}站在刚完成的{object_phrase}旁{scene_fragment}",
          "{builder_display}俯身检查{object_phrase}的表面{scene_fragment}"
        ],
        "detail_sentences": [
          "作品周围整齐地摆着工具，显得异常有条理。",
          "{builder_pronoun}身上仍带着劳动留下的灰尘。",
          "背景里似乎有人在看着这件新近完成的作品。"
        ],
        "style_sentences": [
          "这件作品强调了建设带来的安定感。",
          "画面显得踏实、沉稳而略带自豪。",
          "它让人想到手工劳动的坚忍。"
        ],
        "scene_phrases": [
          "在未散尽的尘土之间",
          "在工地边缘",
          "在暮色压下来的庭院里"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{builder_display}完成了{object_name}的建造"
          ],
          "image": [
            "{builder_display}正在装配{object_name}内部一个复杂的装置，[circumstance_phrase]",
            "{builder_display}正在为{object_name}的表面抛光，[circumstance_phrase]",
            "{builder_display}正在为{object_name}添加表面细节，[circumstance_phrase]",
            "{builder_display}把自己的名字刻在{object_name}上，[circumstance_phrase]"
          ],
          "circumstance_phrase": [
            "{builder_display}的眼中闪烁着光芒",
            "同时在擦拭{builder_display}的额头的汗水",
            "建造者浑身都是污渍",
            "面带得意的微笑",
            "{builder_display}的脸上带着满意的神情"
          ],
          "desc_sentence": [
            "{object_name}矗立在{builder_display}面前。",
            "{object_name}泛着柔和的[Color]光。",
            "{object_name}巧夺天工",
            "[Quantity_adjphrase][PersonJob]对{object_name}赞叹不已。",
            "[Quantity_adjphrase][PersonJob]投来敬畏的目光。"
          ],
          "circumstance_group": [
            "{builder_display}的眼中闪烁着光芒",
            "同时在擦拭{builder_display}的额头的汗水",
            "建造者浑身都是污渍",
            "面带得意的微笑",
            "{builder_display}的脸上带着满意的神情"
          ]
        }
      },
      "finished_research": {
        "event_nouns": [
          "{researcher_display}完成{project_name}研究",
          "{researcher_display}揭开{project_name}的秘密",
          "{researcher_display}攻克{project_name}"
        ],
        "main_images": [
          "{researcher_display}正凝视与{project_name}有关的记录{scene_fragment}",
          "{researcher_display}在纸页与器具之间完成{project_name}{scene_fragment}",
          "{researcher_display}伏案研究{project_name}直至得出答案{scene_fragment}"
        ],
        "detail_sentences": [
          "桌面上堆满了纸张、草图与实验器具。",
          "{researcher_pronoun}的目光被刻得格外明亮。",
          "背景中的线条被简化，以突出发现本身。"
        ],
        "style_sentences": [
          "作品散发出求知与危险并存的气息。",
          "它让人想到理性如何在疲惫中仍然向前推进。",
          "整体构图在秩序与狂热之间保持着微妙平衡。"
        ],
        "scene_phrases": [
          "在孤灯照亮的研究台前",
          "在堆满文件的实验室里",
          "在沉寂的深夜中"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{researcher_display}完成「{project_name}」的研究"
          ],
          "image": [
            "{researcher_display}[circumstance_phrase]进行着「{project_name}」项目的研究",
            "{researcher_display}[circumstance_phrase]探寻着「{project_name}」的奥秘",
            "{researcher_display}[circumstance_phrase]研究着「{project_name}」"
          ],
          "circumstance_phrase": [
            "极度紧张地",
            "独自站在{researcher_display}的研究台前",
            "一边拿着文件一边",
            "一脸痴迷地"
          ],
          "desc_sentence": [
            "{researcher_display}大汗淋漓。",
            "项目显得异常复杂。",
            "{researcher_display}被一排排的工具和仪器包围。",
            "{researcher_display}惊奇不已地盯着{researcher_display}的发现。"
          ],
          "circumstance_group": [
            "极度紧张地",
            "独自站在{researcher_display}的研究台前",
            "一边拿着文件一边",
            "一脸痴迷地"
          ]
        }
      },
      "read_book": {
        "event_nouns": [
          "{reader_display}读完{book_display}",
          "{reader_display}从{book_display}中得到启示",
          "{reader_display}合上{book_display}的最后一页"
        ],
        "main_images": [
          "{reader_display}正合上{book_display}{scene_fragment}",
          "{reader_display}翻过{book_display}的最后一页{scene_fragment}",
          "{reader_display}坐在静处，仿佛仍在回味{book_display}{scene_fragment}"
        ],
        "detail_sentences": [
          "人物四周摆着零散笔记，像是刚经历过一段长久思考。",
          "{reader_pronoun}的神情被刻得平静而深远。",
          "书页本身被刻意强调，使文本成为画面中心。"
        ],
        "style_sentences": [
          "这件作品流露出沉静而持久的领悟感。",
          "它仿佛在表达知识如何缓慢改变一个人。",
          "构图收敛，强调了阅读后的回响。"
        ],
        "scene_phrases": [
          "在柔和灯光下",
          "在安静的阅读角落里",
          "在茶杯尚有余温之际"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{reader_display}读完了{book_display}"
          ],
          "image": [
            "{reader_display}终于合上了{book_display}，脸上露出满意的微笑，[circumstance_phrase]",
            "{reader_display}翻动着{book_display}，吸收其中的知识，[circumstance_phrase]",
            "{reader_display}将{book_display}放回书柜，浑身散发出满满的成就感，[circumstance_phrase]",
            "{reader_display}静坐沉思，回味{book_display}的深刻真理，[circumstance_phrase]"
          ],
          "circumstance_phrase": [
            "{reader_display}的在最喜欢的书房里放松",
            "在{reader_display}的身边喝茶",
            "在台灯的柔和光芒下"
          ],
          "desc_sentence": [
            "{reader_display}思考{reader_display}的在{book_display}中所写的注释。",
            "{reader_display}的眼睛里闪烁新发现智慧的光芒。",
            "{book_display}的教诲永远改变了{reader_display}。",
            "感觉到一些秘密尚未被揭开。"
          ],
          "circumstance_group": [
            "{reader_display}的在最喜欢的书房里放松",
            "在{reader_display}的身边喝茶",
            "在台灯的柔和光芒下"
          ]
        }
      },
      "recruit_joiner": {
        "event_nouns": [
          "{recruiter_display}招募{joiner_display}",
          "{joiner_display}被{recruiter_display}说服",
          "{joiner_display}被招募"
        ],
        "main_images": [
          "{recruiter_display}正在招募{joiner_display}",
          "{recruiter_display}正在迎接成为殖民地一员的{joiner_display}",
          "{recruiter_display}正在说服{joiner_display}加入"
        ],
        "detail_sentences": [
          "{joiner_display}理解地点着头。",
          "{joiner_display}在目光接触中露出微笑。",
          "{joiner_display}看上去松了口气。",
          "{joiner_display}看上去充满希望。"
        ],
        "style_sentences": [
          "这件作品表现出信任如何在紧张处境中生长。",
          "整体来看，这件作品表现出信任如何在紧张处境中生长。",
          "从构图与气质上看，这件作品表现出信任如何在紧张处境中生长。",
          "画面既有欢迎意味，也保留了命运转折时的压力。",
          "整体来看，画面既有欢迎意味，也保留了命运转折时的压力。",
          "从构图与气质上看，画面既有欢迎意味，也保留了命运转折时的压力。",
          "它流露出一种谨慎而真切的希望。",
          "整体来看，它流露出一种谨慎而真切的希望。"
        ],
        "scene_phrases": [
          "同时带着明显的善意",
          "同时诚挚地握手",
          "周围充满了欢笑",
          "在整个殖民地之前",
          "在一间牢房中"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{recruiter_display}招募{joiner_display}",
            "{joiner_display}被{recruiter_display}说服",
            "{joiner_display}被招募"
          ],
          "image": [
            "{recruiter_display}正在招募{joiner_display}，[circumstance_phrase]",
            "{recruiter_display}正在迎接成为殖民地一员的{joiner_display}，[circumstance_phrase]",
            "{recruiter_display}正在说服{joiner_display}加入，[circumstance_phrase]"
          ],
          "circumstance_phrase": [
            "同时带着明显的善意",
            "同时诚挚地握手",
            "周围充满了欢笑",
            "在整个殖民地之前",
            "在一间牢房中"
          ],
          "desc_sentence": [
            "{joiner_display}理解地点着头。",
            "{joiner_display}在目光接触中露出微笑。",
            "{joiner_display}看上去松了口气。",
            "{joiner_display}看上去充满希望。"
          ],
          "circumstance_group": [
            "同时带着明显的善意",
            "同时诚挚地握手",
            "周围充满了欢笑",
            "在整个殖民地之前",
            "在一间牢房中"
          ]
        }
      },
      "tame_animal": {
        "event_nouns": [
          "{animal_name}被{tamer_display}驯服",
          "{tamer_display}驯服{animal_name}"
        ],
        "main_images": [
          "{tamer_display}正在驯服{animal_name}",
          "{tamer_display}给{animal_name}喂了一口食物",
          "{tamer_display}对{animal_name}低声呢喃",
          "{tamer_display}安抚着一只野生的{animal_name}"
        ],
        "detail_sentences": [
          "{animal_name}在充满侵略性地吼叫。",
          "{animal_name}看上去沉醉在爱意之中。",
          "{animal_name}看上去像被催眠了一样。",
          "{animal_name}看起来既惊恐又好奇。",
          "{animal_name}看起来好像被迷住了。",
          "{tamer_display}正在充满爱意地抚摸{animal_name}。"
        ],
        "style_sentences": [
          "作品强调了耐心、温和与支配之间的微妙界线。",
          "整体来看，作品强调了耐心、温和与支配之间的微妙界线。",
          "从构图与气质上看，作品强调了耐心、温和与支配之间的微妙界线。",
          "这件作品表现出人与野性相互试探时的安静张力。",
          "整体来看，这件作品表现出人与野性相互试探时的安静张力。",
          "从构图与气质上看，这件作品表现出人与野性相互试探时的安静张力。",
          "它赞颂的是缓慢建立起来的信任。",
          "整体来看，它赞颂的是缓慢建立起来的信任。"
        ],
        "scene_phrases": [
          "非常小心谨慎",
          "同时面露笑容",
          "虽然十分疲惫但很开心"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{animal_name}被{tamer_display}驯服",
            "{tamer_display}驯服{animal_name}"
          ],
          "image": [
            "{tamer_display}正在驯服{animal_name}，[circumstance_phrase]",
            "{tamer_display}给{animal_name}喂了一口食物，[circumstance_phrase]",
            "{tamer_display}对{animal_name}低声呢喃，[circumstance_phrase]",
            "{tamer_display}安抚着一只野生的{animal_name}，[circumstance_phrase]"
          ],
          "circumstance_phrase": [
            "非常小心谨慎",
            "同时面露笑容",
            "虽然十分疲惫但很开心"
          ],
          "desc_sentence": [
            "{animal_name}在充满侵略性地吼叫。",
            "{animal_name}看上去沉醉在爱意之中。",
            "{animal_name}看上去像被催眠了一样。",
            "{animal_name}看起来既惊恐又好奇。",
            "{animal_name}看起来好像被迷住了。",
            "{tamer_display}正在充满爱意地抚摸{animal_name}。"
          ],
          "circumstance_group": [
            "非常小心谨慎",
            "同时面露笑容",
            "虽然十分疲惫但很开心"
          ]
        }
      },
      "train_animal": {
        "event_nouns": [
          "{trainer_display}训练{animal_name}",
          "训练{animal_name}",
          "{animal_name}接受{trainer_display}的训练"
        ],
        "main_images": [
          "{trainer_display}{animal_name}{training_name}",
          "{trainer_display}教{animal_name}掌握{training_name}",
          "{trainer_display}和{animal_name}一起练习{training_name}"
        ],
        "detail_sentences": [
          "{trainer_display}显得很开心。",
          "{trainer_display}微笑着。",
          "{trainer_display}看上去厌倦了这个差事。",
          "{trainer_display}吓人地挥舞着{trainer_display}的拳头。",
          "{trainer_display}眉头紧皱，十分专注。",
          "{animal_name}一脸茫然。",
          "{animal_name}嘴里叼着一把武器。",
          "{animal_name}发出努力的咕噜声。",
          "{trainer_display}沮丧地摇着头。",
          "{animal_name}在恐惧中颤抖。",
          "{animal_name}假装自己是一株作物。",
          "{animal_name}是用拼凑在一起的电动工具描绘出来的。"
        ],
        "style_sentences": [
          "这件作品体现了纪律、耐心与反复练习的意义。",
          "整体来看，这件作品体现了纪律、耐心与反复练习的意义。",
          "从构图与气质上看，这件作品体现了纪律、耐心与反复练习的意义。",
          "图像强调了人与动物之间建立秩序的过程。",
          "整体来看，图像强调了人与动物之间建立秩序的过程。",
          "从构图与气质上看，图像强调了人与动物之间建立秩序的过程。",
          "整体画面稳定而不张扬。",
          "整体来看，整体画面稳定而不张扬。"
        ],
        "scene_phrases": [
          "其他人在一旁围观",
          "一群野生的动物带着嫌恶的神情在一旁围观",
          "而{animal_name}则回想起野兽时期的简单生活",
          "同时{trainer_display}在考虑中午该吃什么",
          "而其他殖民者在一旁工作"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{trainer_display}训练{animal_name}",
            "训练{animal_name}",
            "{animal_name}接受{trainer_display}的训练"
          ],
          "image": [
            "{trainer_display}[train_syn]{animal_name}{training_name}，[circumstance_phrase]",
            "{trainer_display}教{animal_name}掌握{training_name}，[circumstance_phrase]",
            "{trainer_display}和{animal_name}一起练习{training_name}，[circumstance_phrase]"
          ],
          "train_syn": [
            "训练",
            "训练",
            "训练",
            "教授",
            "培养"
          ],
          "circumstance_phrase": [
            "其他人在一旁围观",
            "一群野生的[Animal]带着嫌恶的神情在一旁围观",
            "而{animal_name}则回想起野兽时期的简单生活",
            "同时{trainer_display}在考虑中午该吃什么",
            "而其他殖民者在一旁工作"
          ],
          "desc_sentence": [
            "{trainer_display}显得很开心。",
            "{trainer_display}微笑着。",
            "{trainer_display}看上去厌倦了这个差事。",
            "{trainer_display}吓人地挥舞着{trainer_display}的拳头。",
            "{trainer_display}眉头紧皱，十分专注。",
            "{animal_name}一脸茫然。",
            "{animal_name}嘴里叼着一把武器。",
            "{animal_name}发出努力的咕噜声。",
            "{trainer_display}沮丧地摇着头。",
            "{animal_name}在恐惧中颤抖。",
            "{animal_name}假装自己是一株[Vegetable]。",
            "{animal_name}是用拼凑在一起的电动工具描绘出来的。",
            "{animal_name}一半[Color]一半[Color]。",
            "{animal_name}被鳞片包覆。",
            "{trainer_display}是用[Quantity_adjphrase]手臂描绘出来的。",
            "{trainer_display}变成了{animal_name}的模样。"
          ],
          "circumstance_group": [
            "其他人在一旁围观",
            "一群野生的[Animal]带着嫌恶的神情在一旁围观",
            "而{animal_name}则回想起野兽时期的简单生活",
            "同时{trainer_display}在考虑中午该吃什么",
            "而其他殖民者在一旁工作"
          ]
        }
      },
      "marriage": {
        "event_nouns": [
          "{spouse_a_display}与{spouse_b_display}结婚"
        ],
        "main_images": [
          "{spouse_a_display}与{spouse_b_display}结婚了",
          "{spouse_a_display}向{spouse_b_display}说出婚姻誓言",
          "{spouse_a_display}与{spouse_b_display}走上红地毯",
          "婚礼中，{spouse_a_display}牵着{spouse_b_display}的手"
        ],
        "detail_sentences": [
          "{spouse_a_display}与{spouse_b_display}幸福地依偎在一起。",
          "{spouse_a_display}深情注视着{spouse_b_display}。",
          "{spouse_a_display}对{spouse_b_display}吹着气。",
          "{spouse_a_display}和{spouse_b_display}灵魂交融。",
          "{spouse_a_display}与{spouse_b_display}心有灵犀。",
          "{spouse_a_display}恣意地爱抚着{spouse_b_display}。"
        ],
        "style_sentences": [
          "这件作品表现出承诺如何在脆弱世界中获得形体。",
          "整体来看，这件作品表现出承诺如何在脆弱世界中获得形体。",
          "从构图与气质上看，这件作品表现出承诺如何在脆弱世界中获得形体。",
          "图像流露出喜悦与肃穆并存的情绪。",
          "整体来看，图像流露出喜悦与肃穆并存的情绪。",
          "从构图与气质上看，图像流露出喜悦与肃穆并存的情绪。",
          "它像是在赞颂短暂人生中仍愿意彼此托付的勇气。",
          "整体来看，它像是在赞颂短暂人生中仍愿意彼此托付的勇气。"
        ],
        "scene_phrases": [
          "结婚仪式十分隆重",
          "两个人笑得十分开心",
          "其他人在一旁庄严地注视着"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{spouse_a_display}与{spouse_b_display}结婚"
          ],
          "image": [
            "{spouse_a_display}与{spouse_b_display}结婚了，[circumstance_phrase]",
            "{spouse_a_display}向{spouse_b_display}说出婚姻誓言，[circumstance_phrase]",
            "{spouse_a_display}与{spouse_b_display}走上红地毯，[circumstance_phrase]",
            "婚礼中，{spouse_a_display}牵着{spouse_b_display}的手，[circumstance_phrase]"
          ],
          "circumstance_phrase": [
            "结婚仪式十分隆重",
            "两个人笑得十分开心",
            "其他人在一旁庄严地注视着"
          ],
          "desc_sentence": [
            "{spouse_a_display}与{spouse_b_display}幸福地依偎在一起。",
            "{spouse_a_display}深情注视着{spouse_b_display}。",
            "{spouse_a_display}对{spouse_b_display}吹着气。",
            "{spouse_a_display}和{spouse_b_display}灵魂交融。",
            "{spouse_a_display}与{spouse_b_display}心有灵犀。",
            "{spouse_a_display}恣意地爱抚着{spouse_b_display}。"
          ],
          "circumstance_group": [
            "结婚仪式十分隆重",
            "两个人笑得十分开心",
            "其他人在一旁庄严地注视着"
          ]
        }
      },
      "wound": {
        "event_nouns": [
          "{attacker_display}{victim_display}",
          "{attacker_display}用{weapon_name}{victim_display}",
          "{victim_display}被{attacker_display}",
          "{victim_display}被人用{weapon_name}",
          "{victim_display}被"
        ],
        "main_images": [
          "{victim_display}被，杀手{attacker_display}",
          "{attacker_display}{victim_display}，杀手",
          "{attacker_display}粗暴地{victim_display}，杀手",
          "{victim_display}被，杀手"
        ],
        "detail_sentences": [
          "几位动物在一旁围观。",
          "一位殖民者在静观其变。",
          "{victim_display}浑身是血。",
          "{victim_display}浑身都是鲜血。",
          "{victim_display}看上去阴郁。",
          "{victim_display}疼痛不堪。",
          "{victim_display}在剧烈的疼痛中挣扎。",
          "{attacker_display}咧开嘴，露出{attacker_display}的牙齿。",
          "{attacker_display}似乎很满意。",
          "{attacker_display}面对{attacker_pronoun}自己的所作所为，感到十分痛苦。",
          "{attacker_display}看上去对这一切很满意。",
          "{attacker_display}露出胜利者的姿态。"
        ],
        "style_sentences": [
          "作品流露出暴力在瞬间撕开秩序的压迫感。",
          "整体来看，作品流露出暴力在瞬间撕开秩序的压迫感。",
          "从构图与气质上看，作品流露出暴力在瞬间撕开秩序的压迫感。",
          "这件作品将危险、混乱与决断压缩在同一刻。",
          "整体来看，这件作品将危险、混乱与决断压缩在同一刻。",
          "从构图与气质上看，这件作品将危险、混乱与决断压缩在同一刻。",
          "它带着冷酷而直接的战斗气息。",
          "整体来看，它带着冷酷而直接的战斗气息。"
        ],
        "scene_phrases": [
          "毫不留情",
          "冷酷无情",
          "怒不可歇",
          "身手敏捷",
          "面无表情",
          "已经放弃希望",
          "看上去很害怕，不得已的选择"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{attacker_display}[wound_name_present]{victim_display}",
            "{attacker_display}用{weapon_name}[wound_name_present]{victim_display}",
            "{victim_display}被{attacker_display}[wound_name_present]",
            "{victim_display}被人用{weapon_name}[wound_name_present]",
            "{victim_display}被[wound_name_present]"
          ],
          "image": [
            "{victim_display}被[wound_name_past]，杀手{attacker_display}[circumstance_phrase]",
            "{attacker_display}[wound_name_present]{victim_display}，杀手[circumstance_phrase]",
            "{attacker_display}粗暴地[wound_name_present]{victim_display}，杀手[circumstance_phrase]",
            "{victim_display}被[wound_name_past]，杀手[circumstance_phrase]"
          ],
          "wound_name_past": [
            "打伤",
            "伤害",
            "弄伤",
            "殴打",
            "攻击"
          ],
          "wound_name_present": [
            "打伤",
            "伤害",
            "弄伤",
            "殴打",
            "攻击"
          ],
          "with_weapon_optional": [
            "使用了{weapon_name}，[circumstance_phrase]",
            "[circumstance_phrase]"
          ],
          "circumstance_phrase": [
            "毫不留情",
            "冷酷无情",
            "怒不可歇",
            "身手敏捷",
            "面无表情",
            "已经放弃希望",
            "看上去很害怕，不得已的选择"
          ],
          "desc_sentence": [
            "[Quantity_adjphrase][Animal]在一旁围观。",
            "一位[PersonJob]在[side_position]静观其变。",
            "{victim_display}浑身是血。",
            "{victim_display}浑身都是[Gore]。",
            "{victim_display}看上去[AdjectiveAngsty]。",
            "{victim_display}疼痛不堪。",
            "{victim_display}在剧烈的疼痛中挣扎。",
            "{attacker_display}咧开嘴，露出{attacker_display}的牙齿。",
            "{attacker_display}似乎很满意。",
            "{attacker_display}面对{attacker_pronoun}自己的所作所为，感到十分痛苦。",
            "{attacker_display}看上去对这一切很满意。",
            "{attacker_display}露出胜利者的姿态。"
          ],
          "circumstance_group": [
            "毫不留情",
            "冷酷无情",
            "怒不可歇",
            "身手敏捷",
            "面无表情",
            "已经放弃希望",
            "看上去很害怕，不得已的选择"
          ]
        }
      },
      "kill": {
        "event_nouns": [
          "{killer_display}杀死{victim_display}",
          "{victim_display}死于{killer_display}之手",
          "{victim_display}被{killer_display}所杀",
          "{victim_display}之死"
        ],
        "main_images": [
          "{victim_display}被{killer_display}所杀，凶手",
          "{killer_display}杀死{victim_display}",
          "{killer_display}终结了{victim_display}的生命",
          "{killer_display}残忍地杀死了{victim_display}",
          "{victim_display}被杀死了，凶手"
        ],
        "detail_sentences": [
          "太阳在他们身后落下，作为这件事件的象征性的共鸣。",
          "几位动物在周围旁观。",
          "一个殖民者沉默地看着。",
          "鲜血在{victim_display}身旁逐渐散开。",
          "{victim_display}的眼睛完全失去了生机。",
          "{killer_display}呲着牙。",
          "{killer_display}似乎心满意足。",
          "{killer_display}看起来对自己所做的事感到痛苦。",
          "{killer_display}看起来对这个情形感到愉悦。",
          "{killer_display}看起来得意洋洋。"
        ],
        "style_sentences": [
          "这件作品带着毫不掩饰的终结意味。",
          "整体来看，这件作品带着毫不掩饰的终结意味。",
          "从构图与气质上看，这件作品带着毫不掩饰的终结意味。",
          "图像中没有胜利的轻快，只有死亡落定后的沉滞。",
          "整体来看，图像中没有胜利的轻快，只有死亡落定后的沉滞。",
          "从构图与气质上看，图像中没有胜利的轻快，只有死亡落定后的沉滞。",
          "它表现出一种冷峻、肃杀而难以挽回的气息。",
          "整体来看，它表现出一种冷峻、肃杀而难以挽回的气息。"
        ],
        "scene_phrases": [
          "看上去毫无悔意",
          "冷酷而高效",
          "带着狂怒",
          "动作快速而高效",
          "面无表情",
          "看上去是出于某种阴暗的原因",
          "以一种胆小鬼和三心二意的方式"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{killer_display}杀死{victim_display}",
            "{victim_display}死于{killer_display}之手",
            "{victim_display}被{killer_display}所杀",
            "{victim_display}之死"
          ],
          "image": [
            "{victim_display}被{killer_display}所杀，凶手[circumstance_phrase]",
            "{killer_display}杀死{victim_display}，[circumstance_phrase]",
            "{killer_display}终结了{victim_display}的生命，[circumstance_phrase]",
            "{killer_display}残忍地杀死了{victim_display}，[circumstance_phrase]",
            "{victim_display}被杀死了，凶手[circumstance_phrase]"
          ],
          "circumstance_phrase": [
            "看上去毫无悔意",
            "冷酷而高效",
            "带着狂怒",
            "动作快速而高效",
            "面无表情",
            "看上去是出于某种阴暗的原因",
            "以一种胆小鬼和三心二意的方式"
          ],
          "desc_sentence": [
            "太阳在他们身后落下，作为这件事件的象征性的共鸣。",
            "[Quantity_adjphrase][Animal]在周围旁观。",
            "一个[PersonJob][side_position]沉默地看着。",
            "鲜血在{victim_display}身旁逐渐散开。",
            "{victim_display}的眼睛完全失去了生机。",
            "{killer_display}呲着牙。",
            "{killer_display}似乎心满意足。",
            "{killer_display}看起来对自己所做的事感到痛苦。",
            "{killer_display}看起来对这个情形感到愉悦。",
            "{killer_display}看起来得意洋洋。"
          ],
          "circumstance_group": [
            "看上去毫无悔意",
            "冷酷而高效",
            "带着狂怒",
            "动作快速而高效",
            "面无表情",
            "看上去是出于某种阴暗的原因",
            "以一种胆小鬼和三心二意的方式"
          ]
        }
      },
      "meditate": {
        "event_nouns": [
          "{pawn_display}沉思"
        ],
        "main_images": [
          "{pawn_display}坐在一棵树木下",
          "{pawn_display}静静地坐着",
          "{pawn_display}凝视远方",
          "{pawn_display}闭上了{pawn_display}的眼睛"
        ],
        "detail_sentences": [
          "几位殖民者注视着{pawn_pronoun}。",
          "{pawn_pronoun}的四周围坐着几位动物。",
          "几位动物安静地休息。",
          "几位敌人对眼前的一幕肃然起敬。"
        ],
        "style_sentences": [
          "这件作品流露出平静、克己与自守。",
          "整体来看，这件作品流露出平静、克己与自守。",
          "从构图与气质上看，这件作品流露出平静、克己与自守。",
          "它似乎在暗示内心秩序的短暂建立。",
          "整体来看，它似乎在暗示内心秩序的短暂建立。",
          "从构图与气质上看，它似乎在暗示内心秩序的短暂建立。",
          "整体构图安静而凝定。",
          "整体来看，整体构图安静而凝定。"
        ],
        "scene_phrases": [
          "透出平和的感觉",
          "带着宁静的微笑",
          "带着友善的微笑",
          "神情温柔",
          "被某种颜色的光辉环抱"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{pawn_display}沉思"
          ],
          "image": [
            "{pawn_display}坐在一棵[TreeType]下，[circumstance_phrase]",
            "{pawn_display}静静地坐着，[circumstance_phrase]",
            "{pawn_display}凝视远方，[circumstance_phrase]",
            "{pawn_display}闭上了{pawn_display}的眼睛，[circumstance_phrase]"
          ],
          "circumstance_phrase": [
            "透出平和的感觉",
            "带着宁静的微笑",
            "带着[AdjectiveFriendly]的微笑",
            "神情温柔",
            "被[Color]的光辉环抱"
          ],
          "desc_sentence": [
            "[Quantity_adjphrase][PersonJob]注视着{pawn_pronoun}。",
            "{pawn_pronoun}的四周围坐着[Quantity_adjphrase][Animal]。",
            "[Quantity_adjphrase][Animal]安静地休息。",
            "[Quantity_adjphrase][Enemy]对眼前的一幕肃然起敬。"
          ],
          "circumstance_group": [
            "透出平和的感觉",
            "带着宁静的微笑",
            "带着[AdjectiveFriendly]的微笑",
            "神情温柔",
            "被[Color]的光辉环抱"
          ]
        }
      },
      "pray": {
        "event_nouns": [
          "{pawn_display}祈祷",
          "{pawn_display}祈求变得更强"
        ],
        "main_images": [
          "{pawn_display}凝视远方",
          "{pawn_display}闭上了{pawn_display}的眼睛",
          "{pawn_display}紧握着{pawn_display}的手",
          "{pawn_display}望着天空"
        ],
        "detail_sentences": [
          "几位殖民者注视着{pawn_pronoun}。",
          "{pawn_pronoun}的四周围坐着几位动物。",
          "几位动物安静地休息。",
          "几位敌人对眼前的一幕肃然起敬。"
        ],
        "style_sentences": [
          "这件作品带着朴素而真切的敬畏感。",
          "整体来看，这件作品带着朴素而真切的敬畏感。",
          "从构图与气质上看，这件作品带着朴素而真切的敬畏感。",
          "它似乎在表现信念如何让人暂时获得支撑。",
          "整体来看，它似乎在表现信念如何让人暂时获得支撑。",
          "从构图与气质上看，它似乎在表现信念如何让人暂时获得支撑。",
          "画面静而不弱，像一段被拉长的呼吸。",
          "整体来看，画面静而不弱，像一段被拉长的呼吸。"
        ],
        "scene_phrases": [
          "透出平和的感觉",
          "轻声私语",
          "带着满怀希望的神情",
          "神情温柔",
          "被某种颜色的光辉环抱"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{pawn_display}祈祷",
            "{pawn_display}祈求变得更强"
          ],
          "image": [
            "{pawn_display}凝视远方，[circumstance_phrase]",
            "{pawn_display}闭上了{pawn_display}的眼睛，[circumstance_phrase]",
            "{pawn_display}紧握着{pawn_display}的手，[circumstance_phrase]",
            "{pawn_display}望着天空，[circumstance_phrase]"
          ],
          "circumstance_phrase": [
            "透出平和的感觉",
            "轻声私语",
            "带着满怀希望的神情",
            "神情温柔",
            "被[Color]的光辉环抱"
          ],
          "desc_sentence": [
            "[Quantity_adjphrase][PersonJob]注视着{pawn_pronoun}。",
            "{pawn_pronoun}的四周围坐着[Quantity_adjphrase][Animal]。",
            "[Quantity_adjphrase][Animal]安静地休息。",
            "[Quantity_adjphrase][Enemy]对眼前的一幕肃然起敬。"
          ],
          "circumstance_group": [
            "透出平和的感觉",
            "轻声私语",
            "带着满怀希望的神情",
            "神情温柔",
            "被[Color]的光辉环抱"
          ]
        }
      },
      "burial": {
        "event_nouns": [
          "{mourner_display}埋葬{deceased_display}",
          "{mourner_display}使{deceased_display}得到安息"
        ],
        "main_images": [
          "{mourner_display}站在{deceased_display}的坟墓前",
          "{mourner_display}蹲坐在{deceased_display}的坟墓前",
          "{mourner_display}倚靠在{deceased_display}的坟墓前",
          "{mourner_display}在{deceased_display}的墓碑上雕刻文字",
          "{mourner_display}在{deceased_display}的棺木上进行艺术创作",
          "{mourner_display}将{deceased_display}的尸体放入坟墓"
        ],
        "detail_sentences": [
          "背景中某种颜色的极光闪烁。",
          "远处的聚落被白雪覆盖。",
          "{deceased_display}的灵魂带着友善的神情俯瞰着四周。",
          "{deceased_display}的灵魂站在{mourner_display}身边，面带友善的神情。",
          "{deceased_display}的灵魂带着阴郁的神情俯瞰着四周。",
          "{deceased_display}的灵魂站在{mourner_display}身边，面带阴郁的神情。",
          "几位动物在附近休息。"
        ],
        "style_sentences": [
          "这件作品表现出哀悼的静默与迟滞。",
          "整体来看，这件作品表现出哀悼的静默与迟滞。",
          "从构图与气质上看，这件作品表现出哀悼的静默与迟滞。",
          "它像是在提醒观者，离去之后仍有必须完成的礼节。",
          "整体来看，它像是在提醒观者，离去之后仍有必须完成的礼节。",
          "从构图与气质上看，它像是在提醒观者，离去之后仍有必须完成的礼节。",
          "整体情绪沉稳而哀伤。",
          "整体来看，整体情绪沉稳而哀伤。"
        ],
        "scene_phrases": [
          "面带阴郁的神情",
          "陷入沉思",
          "凝视着远方的地形",
          "向墓碑静静私语"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{mourner_display}埋葬{deceased_display}",
            "{mourner_display}使{deceased_display}得到安息"
          ],
          "image": [
            "{mourner_display}站在{deceased_display}的坟墓前，[circumstance_phrase]",
            "{mourner_display}蹲坐在{deceased_display}的坟墓前，[circumstance_phrase]",
            "{mourner_display}倚靠在{deceased_display}的坟墓前[circumstance_phrase]",
            "{mourner_display}在{deceased_display}的墓碑上雕刻文字，[circumstance_phrase]",
            "{mourner_display}在{deceased_display}的棺木上进行艺术创作，[circumstance_phrase]",
            "{mourner_display}将{deceased_display}的尸体放入坟墓，[circumstance_phrase]"
          ],
          "circumstance_phrase": [
            "面带[AdjectiveAngsty]的神情",
            "陷入沉思",
            "凝视着远方的[TerrainFeature]",
            "向墓碑静静私语"
          ],
          "desc_sentence": [
            "背景中[Color]的极光闪烁。",
            "远处的[Community]被白雪覆盖。",
            "{deceased_display}的灵魂带着[AdjectiveFriendly]的神情俯瞰着四周。",
            "{deceased_display}的灵魂站在{mourner_display}身边，面带[AdjectiveFriendly]的神情。",
            "{deceased_display}的灵魂带着[AdjectiveAngsty]的神情俯瞰着四周。",
            "{deceased_display}的灵魂站在{mourner_display}身边，面带[AdjectiveAngsty]的神情。",
            "[Quantity_adjphrase][Animal]在附近休息。"
          ],
          "circumstance_group": [
            "面带[AdjectiveAngsty]的神情",
            "陷入沉思",
            "凝视着远方的[TerrainFeature]",
            "向墓碑静静私语"
          ]
        }
      },
      "party": {
        "event_nouns": [
          "{attender_display}出席{organizer_display}的派对",
          "{attender_display}在{organizer_display}举办的派对中放松"
        ],
        "main_images": [
          "{attender_display}在和{organizer_display}交谈",
          "{organizer_display}举办的派对上，{attender_display}正在拿取饮料",
          "{attender_display}在和{organizer_display}聊天",
          "{organizer_display}欢迎{attender_display}加入派对",
          "{organizer_display}正在向朋友介绍{attender_display}"
        ],
        "detail_sentences": [
          "几位殖民者参与了交谈。",
          "现场被某种颜色和某种颜色装点。",
          "几位动物在附近玩耍。"
        ],
        "style_sentences": [
          "这件作品让人想到艰难生活中的片刻松动。",
          "整体来看，这件作品让人想到艰难生活中的片刻松动。",
          "从构图与气质上看，这件作品让人想到艰难生活中的片刻松动。",
          "它表现出共同体如何在闲暇里重新缝合自身。",
          "整体来看，它表现出共同体如何在闲暇里重新缝合自身。",
          "从构图与气质上看，它表现出共同体如何在闲暇里重新缝合自身。",
          "整体气氛轻快，却仍保留一点边地生活的拘谨。",
          "整体来看，整体气氛轻快，却仍保留一点边地生活的拘谨。"
        ],
        "scene_phrases": [
          "带着爽朗的笑容",
          "面带笑容",
          "带着友善的微笑",
          "同时发出一阵大笑",
          "现场气氛非常友善"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{attender_display}出席{organizer_display}的派对",
            "{attender_display}在{organizer_display}举办的派对中放松"
          ],
          "image": [
            "{attender_display}在和{organizer_display}交谈，[circumstance_phrase]",
            "{organizer_display}举办的派对上，{attender_display}正在拿取饮料，[circumstance_phrase]",
            "{attender_display}在和{organizer_display}聊天，[circumstance_phrase]",
            "{organizer_display}欢迎{attender_display}加入派对，[circumstance_phrase]",
            "{organizer_display}正在向朋友介绍{attender_display}，[circumstance_phrase]"
          ],
          "circumstance_phrase": [
            "带着爽朗的笑容",
            "面带笑容",
            "带着[AdjectiveFriendly]的微笑",
            "同时发出一阵大笑",
            "现场气氛非常[AdjectiveFriendly]"
          ],
          "desc_sentence": [
            "[Quantity_adjphrase][PersonJob]参与了交谈。",
            "现场被[Color]和[Color]装点。",
            "[Quantity_adjphrase][Animal]在附近玩耍。"
          ],
          "circumstance_group": [
            "带着爽朗的笑容",
            "面带笑容",
            "带着[AdjectiveFriendly]的微笑",
            "同时发出一阵大笑",
            "现场气氛非常[AdjectiveFriendly]"
          ]
        }
      },
      "skill_mastery": {
        "event_nouns": [
          "{pawn_display}成为{skill_name}领域的大师"
        ],
        "main_images": [
          "{pawn_display}正在练习{skill_name}",
          "{pawn_display}正在阅读一本关于{skill_name}的书籍",
          "{pawn_display}正在接受{skill_name}相关的训练",
          "{pawn_display}忘我地工作",
          "{pawn_display}完成了一个项目"
        ],
        "detail_sentences": [
          "现场堆放着几位失败作品。",
          "现场堆放着几位书籍。",
          "{pawn_display}的技能发挥的作用立竿见影。",
          "几位殖民者露出惊讶的表情。",
          "几位动物露出惊讶的表情。",
          "几位上古大师显灵并注视着这一切。"
        ],
        "style_sentences": [
          "这件作品赞颂的是长久练习之后的沉着。",
          "整体来看，这件作品赞颂的是长久练习之后的沉着。",
          "从构图与气质上看，这件作品赞颂的是长久练习之后的沉着。",
          "它表现出熟练并非偶然，而是由无数次重复积成。",
          "整体来看，它表现出熟练并非偶然，而是由无数次重复积成。",
          "从构图与气质上看，它表现出熟练并非偶然，而是由无数次重复积成。",
          "整体构图稳健而自信。",
          "整体来看，整体构图稳健而自信。"
        ],
        "scene_phrases": [
          "满身大汗",
          "显得非常疲惫",
          "带着阴郁的神情",
          "带着厌倦的神情"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{pawn_display}成为{skill_name}领域的大师"
          ],
          "image": [
            "{pawn_display}正在练习{skill_name}，[circumstance_phrase]",
            "{pawn_display}正在阅读一本关于{skill_name}的书籍，[circumstance_phrase]",
            "{pawn_display}正在接受{skill_name}相关的训练，[circumstance_phrase]",
            "{pawn_display}忘我地工作，[circumstance_phrase]",
            "{pawn_display}完成了一个项目，[circumstance_phrase]"
          ],
          "circumstance_phrase": [
            "满身大汗",
            "显得非常疲惫",
            "带着[AdjectiveAngsty]的神情",
            "带着厌倦的神情"
          ],
          "desc_sentence": [
            "现场堆放着[Quantity_adjphrase]失败作品。",
            "现场堆放着[Quantity_adjphrase]书籍。",
            "{pawn_display}的技能发挥的作用立竿见影。",
            "[Quantity_adjphrase][PersonJob]露出惊讶的表情。",
            "[Quantity_adjphrase][Animal]露出惊讶的表情。",
            "[Quantity_adjphrase]上古大师显灵并注视着这一切。"
          ],
          "circumstance_group": [
            "满身大汗",
            "显得非常疲惫",
            "带着[AdjectiveAngsty]的神情",
            "带着厌倦的神情"
          ]
        }
      },
      "insult": {
        "event_nouns": [
          "{initiator_display}和{responder_display}"
        ],
        "main_images": [
          "{initiator_display}正在侮辱{responder_display}",
          "{initiator_display}正在辱骂{responder_display}",
          "{initiator_display}正在威胁{responder_display}",
          "{initiator_display}正在恐吓{responder_display}",
          "{initiator_display}正在攻击{responder_display}",
          "{initiator_display}正在殴打{responder_display}",
          "{initiator_display}正在追打{responder_display}",
          "{initiator_display}正在猛踢{responder_display}",
          "{initiator_display}被{responder_display}吓坏了"
        ],
        "detail_sentences": [
          "没有悔过之意。",
          "怒火中烧。",
          "面无表情。",
          "浑身都是鲜血。",
          "疯狂地尖叫。",
          "显然受了伤。",
          "的眼睛发出某种颜色的光。"
        ],
        "style_sentences": [
          "这件作品表现出人际关系如何在顷刻间变得危险。",
          "整体来看，这件作品表现出人际关系如何在顷刻间变得危险。",
          "从构图与气质上看，这件作品表现出人际关系如何在顷刻间变得危险。",
          "它让人想到怨怼在聚落生活中的缓慢积累。",
          "整体来看，它让人想到怨怼在聚落生活中的缓慢积累。",
          "从构图与气质上看，它让人想到怨怼在聚落生活中的缓慢积累。",
          "整体气氛尖锐而不安。",
          "整体来看，整体气氛尖锐而不安。"
        ],
        "scene_phrases": [
          "而{responder_display}则在侮辱{initiator_pronoun}",
          "而{responder_display}则在辱骂{initiator_pronoun}",
          "而{responder_display}则在威胁{initiator_pronoun}",
          "而{responder_display}则在恐吓{initiator_pronoun}",
          "而{responder_display}则在攻击{initiator_pronoun}",
          "而{responder_display}则在殴打{initiator_pronoun}",
          "而{responder_display}则在追打{initiator_pronoun}",
          "而{responder_display}则在猛踢{initiator_pronoun}",
          "而{responder_display}则被{initiator_pronoun}吓坏了"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{initiator_display}和{responder_display}[fight_name_present]"
          ],
          "image": [
            "{initiator_display}正在侮辱{responder_display}，[circumstance_phrase]",
            "{initiator_display}正在辱骂{responder_display}，[circumstance_phrase]",
            "{initiator_display}正在威胁{responder_display}，[circumstance_phrase]",
            "{initiator_display}正在恐吓{responder_display}，[circumstance_phrase]",
            "{initiator_display}正在攻击{responder_display}，[circumstance_phrase]",
            "{initiator_display}正在殴打{responder_display}，[circumstance_phrase]",
            "{initiator_display}正在追打{responder_display}，[circumstance_phrase]",
            "{initiator_display}正在猛踢{responder_display}，[circumstance_phrase]",
            "{initiator_display}被{responder_display}吓坏了，[circumstance_phrase]"
          ],
          "fight_name_present": [
            "互殴",
            "打架",
            "对打"
          ],
          "circumstance_phrase": [
            "而{responder_display}则在侮辱{initiator_pronoun}",
            "而{responder_display}则在辱骂{initiator_pronoun}",
            "而{responder_display}则在威胁{initiator_pronoun}",
            "而{responder_display}则在恐吓{initiator_pronoun}",
            "而{responder_display}则在攻击{initiator_pronoun}",
            "而{responder_display}则在殴打{initiator_pronoun}",
            "而{responder_display}则在追打{initiator_pronoun}",
            "而{responder_display}则在猛踢{initiator_pronoun}",
            "而{responder_display}则被{initiator_pronoun}吓坏了"
          ],
          "desc_sentence": [
            "[target]没有悔过之意。",
            "[target]怒火中烧。",
            "[target]面无表情。",
            "[target]浑身都是[Gore]。",
            "[target]疯狂地尖叫。",
            "[target]显然受了伤。",
            "[target]的眼睛发出[Color]的光。"
          ],
          "target": [
            "{initiator_display}",
            "{responder_display}"
          ],
          "circumstance_group": [
            "而{responder_display}则在侮辱{initiator_pronoun}",
            "而{responder_display}则在辱骂{initiator_pronoun}",
            "而{responder_display}则在威胁{initiator_pronoun}",
            "而{responder_display}则在恐吓{initiator_pronoun}",
            "而{responder_display}则在攻击{initiator_pronoun}",
            "而{responder_display}则在殴打{initiator_pronoun}",
            "而{responder_display}则在追打{initiator_pronoun}",
            "而{responder_display}则在猛踢{initiator_pronoun}",
            "而{responder_display}则被{initiator_pronoun}吓坏了"
          ]
        }
      },
      "escape_pod": {
        "event_nouns": [
          "{pawn_display}的空投舱着陆"
        ],
        "main_images": [
          "{pawn_display}正以空投舱方式登陆",
          "{pawn_display}正以空投舱方式着陆",
          "{pawn_display}正以空投舱方式撞向地面",
          "{pawn_display}正搭乘着空投舱下降"
        ],
        "detail_sentences": [
          "{pawn_pronoun}聚精会神地操纵着控制器。",
          "{pawn_pronoun}吓得闭上了{pawn_display}的眼睛。",
          "{pawn_pronoun}不省人事，伸着舌头口吐白沫。",
          "{pawn_pronoun}坚强地微笑着。",
          "{pawn_pronoun}似乎已经不知道自己在做什么。",
          "{pawn_pronoun}陷入困境，完全无助地闭上了眼睛。",
          "空投舱拖着一条火焰尾巴从空中坠落。",
          "附近一只动物惊吓得抬头仰望。",
          "一只动物惊恐地逃离撞击点。",
          "背景是一片地形。",
          "一个殖民者从远处默默地看着。"
        ],
        "style_sentences": [
          "这件作品带着粗暴而明确的降临感。",
          "整体来看，这件作品带着粗暴而明确的降临感。",
          "从构图与气质上看，这件作品带着粗暴而明确的降临感。",
          "它表现出命运如何将一个人从高空扔进陌生地表。",
          "整体来看，它表现出命运如何将一个人从高空扔进陌生地表。",
          "从构图与气质上看，它表现出命运如何将一个人从高空扔进陌生地表。",
          "整体气氛紧张而剧烈。",
          "整体来看，整体气氛紧张而剧烈。"
        ],
        "scene_phrases": [
          "在一片地形之前",
          "以不可思议的力量",
          "在一片飘起的尘埃和碎石中",
          "在减速火箭剧烈点火中",
          "在精确着陆的程序中"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{pawn_display}的空投舱着陆"
          ],
          "image": [
            "{pawn_display}正[circumstance_phrase]以空投舱方式登陆",
            "{pawn_display}正[circumstance_phrase]以空投舱方式着陆",
            "{pawn_display}正[circumstance_phrase]以空投舱方式撞向地面",
            "{pawn_display}正[circumstance_phrase]搭乘着空投舱下降"
          ],
          "circumstance_phrase": [
            "在一片[TerrainFeature]之前",
            "以不可思议的力量",
            "在一片飘起的尘埃和碎石中",
            "在减速火箭剧烈点火中",
            "在精确着陆的程序中"
          ],
          "desc_sentence": [
            "{pawn_pronoun}聚精会神地操纵着控制器。",
            "{pawn_pronoun}吓得闭上了{pawn_display}的眼睛。",
            "{pawn_pronoun}不省人事，伸着舌头口吐白沫。",
            "{pawn_pronoun}坚强地微笑着。",
            "{pawn_pronoun}似乎已经不知道自己在做什么。",
            "{pawn_pronoun}陷入困境，完全无助地闭上了眼睛。",
            "空投舱拖着一条火焰尾巴从空中坠落。",
            "附近一只[Animal]惊吓得抬头仰望。",
            "一只[Animal]惊恐地逃离撞击点。",
            "背景是一片[TerrainFeature]。",
            "一个[PersonJob]从远处默默地看着。"
          ],
          "circumstance_group": [
            "在一片[TerrainFeature]之前",
            "以不可思议的力量",
            "在一片飘起的尘埃和碎石中",
            "在减速火箭剧烈点火中",
            "在精确着陆的程序中"
          ]
        }
      },
      "berserk_break": {
        "event_nouns": [
          "{pawn_display}发狂"
        ],
        "main_images": [
          "{pawn_display}突然发狂",
          "{pawn_display}变成了疯子",
          "{pawn_display}跌跌撞撞地向前走着，一副精神病人的样子"
        ],
        "detail_sentences": [
          "{pawn_pronoun}因为自身无法控制的愤怒而浑身发抖。",
          "{pawn_pronoun}呲着牙狂吼着。",
          "{pawn_display}的目光中只剩下疯狂。",
          "唾沫从{pawn_display}的嘴中不断喷出，同时{pawn_display}的疯狂地愤怒地大喊大叫。",
          "{pawn_pronoun}身上穿着的部分衣服已经不见了。",
          "{pawn_pronoun}的脸因为悲痛而扭曲。",
          "{pawn_pronoun}像疯子一样微笑。",
          "{pawn_pronoun}的脸被描绘了一只咆哮的动物。",
          "许多动物包围着{pawn_display}的头，似乎象征着什么。",
          "{pawn_pronoun}的目光充满了杀气。",
          "{pawn_display}的整个身体似乎都因为憎恨而颤抖着。",
          "{pawn_display}的一脸狰狞。"
        ],
        "style_sentences": [
          "这件作品表现出理智断裂的瞬间。",
          "整体来看，这件作品表现出理智断裂的瞬间。",
          "从构图与气质上看，这件作品表现出理智断裂的瞬间。",
          "它让人想到情绪如何在顷刻间压过一切秩序。",
          "整体来看，它让人想到情绪如何在顷刻间压过一切秩序。",
          "从构图与气质上看，它让人想到情绪如何在顷刻间压过一切秩序。",
          "整体气氛暴烈、混乱而难以挽回。",
          "整体来看，整体气氛暴烈、混乱而难以挽回。"
        ],
        "scene_phrases": [
          "同时试图脱光衣服",
          "看上去莫名其妙",
          "其他人害怕地畏缩着",
          "{pawn_display}的一个朋友逃开了",
          "显然是受到重压而精神崩溃",
          "显然是作为最后一搏的手段"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{pawn_display}发狂"
          ],
          "image": [
            "{pawn_display}突然发狂，[circumstance_phrase]",
            "{pawn_display}变成了疯子，[circumstance_phrase]",
            "{pawn_display}跌跌撞撞地向前走着，一副精神病人的样子，[circumstance_phrase]"
          ],
          "circumstance_phrase": [
            "同时试图脱光衣服",
            "看上去莫名其妙",
            "其他人害怕地畏缩着",
            "{pawn_display}的一个朋友逃开了",
            "显然是受到重压而精神崩溃",
            "显然是作为最后一搏的手段"
          ],
          "desc_sentence": [
            "{pawn_pronoun}因为自身无法控制的愤怒而浑身发抖。",
            "{pawn_pronoun}呲着牙狂吼着。",
            "{pawn_display}的目光中只剩下疯狂。",
            "唾沫从{pawn_display}的嘴中不断喷出，同时{pawn_display}的疯狂地愤怒地大喊大叫。",
            "{pawn_pronoun}身上穿着的部分衣服已经不见了。",
            "{pawn_pronoun}的脸因为悲痛而扭曲。",
            "{pawn_pronoun}像疯子一样微笑。",
            "{pawn_pronoun}的脸被描绘了一只咆哮的[Animal]。",
            "许多[Animal]包围着{pawn_display}的头，似乎象征着什么。",
            "{pawn_pronoun}的目光充满了杀气。",
            "{pawn_display}的整个身体似乎都因为憎恨而颤抖着。",
            "{pawn_display}的一脸狰狞。",
            "{pawn_display}的脸上挂着一行眼泪。"
          ],
          "circumstance_group": [
            "同时试图脱光衣服",
            "看上去莫名其妙",
            "其他人害怕地畏缩着",
            "{pawn_display}的一个朋友逃开了",
            "显然是受到重压而精神崩溃",
            "显然是作为最后一搏的手段"
          ]
        }
      },
      "despair_break": {
        "event_nouns": [
          "{pawn_display}绝望中的放弃"
        ],
        "main_images": [
          "{pawn_display}同时在压力之下自暴自弃",
          "{pawn_display}压抑不住啜泣起来",
          "{pawn_display}四处徘徊，神情茫然"
        ],
        "detail_sentences": [
          "{pawn_pronoun}脸上挂着泪水。",
          "{pawn_pronoun}消沉地大笑着。",
          "{pawn_display}抬头望天，似乎在祈求上苍的帮助。",
          "{pawn_pronoun}撕扯着自己的衣服。",
          "{pawn_pronoun}似乎对周围的环境一无所知。",
          "{pawn_pronoun}一会哭一会笑。",
          "{pawn_pronoun}把自己弄得很脏。",
          "{pawn_pronoun}似乎丢了一只鞋子。",
          "{pawn_display}的头发乱糟糟的。"
        ],
        "style_sentences": [
          "这件作品表现出精神被慢慢磨损之后的塌陷。",
          "整体来看，这件作品表现出精神被慢慢磨损之后的塌陷。",
          "从构图与气质上看，这件作品表现出精神被慢慢磨损之后的塌陷。",
          "它像是在提醒观者，崩溃往往不是一瞬，而是长期消耗的结果。",
          "整体来看，它像是在提醒观者，崩溃往往不是一瞬，而是长期消耗的结果。",
          "从构图与气质上看，它像是在提醒观者，崩溃往往不是一瞬，而是长期消耗的结果。",
          "整体气息沉郁而迟滞。",
          "整体来看，整体气息沉郁而迟滞。"
        ],
        "scene_phrases": [
          "同时试图脱光衣服",
          "看上去莫名其妙",
          "其他人在一旁不断安慰",
          "身边的一个朋友在哭泣",
          "显然是受到重压而精神崩溃",
          "显然是作为最后一搏的手段"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{pawn_display}绝望中的放弃"
          ],
          "image": [
            "{pawn_display}同时在压力之下自暴自弃，[circumstance_phrase]",
            "{pawn_display}压抑不住啜泣起来，[circumstance_phrase]",
            "{pawn_display}四处徘徊，神情茫然，[circumstance_phrase]"
          ],
          "circumstance_phrase": [
            "同时试图脱光衣服",
            "看上去莫名其妙",
            "其他人在一旁不断安慰",
            "身边的一个朋友在哭泣",
            "显然是受到重压而精神崩溃",
            "显然是作为最后一搏的手段"
          ],
          "desc_sentence": [
            "{pawn_pronoun}脸上挂着泪水。",
            "{pawn_pronoun}消沉地大笑着。",
            "{pawn_display}抬头望天，似乎在祈求上苍的帮助。",
            "{pawn_pronoun}撕扯着自己的衣服。",
            "{pawn_pronoun}似乎对周围的环境一无所知。",
            "{pawn_pronoun}一会哭一会笑。",
            "{pawn_pronoun}把自己弄得很脏。",
            "{pawn_pronoun}似乎丢了一只鞋子。",
            "{pawn_display}的头发乱糟糟的。"
          ],
          "circumstance_group": [
            "同时试图脱光衣服",
            "看上去莫名其妙",
            "其他人在一旁不断安慰",
            "身边的一个朋友在哭泣",
            "显然是受到重压而精神崩溃",
            "显然是作为最后一搏的手段"
          ]
        }
      },
      "caravan_departure": {
        "event_nouns": [
          "{pawn_display}的远行队出发",
          "{pawn_display}组建远行队"
        ],
        "main_images": [
          "{pawn_display}向着目的地进发",
          "{pawn_display}望着地平线",
          "{pawn_display}在打包旅行用品",
          "{pawn_display}正在制定远行计划"
        ],
        "detail_sentences": [
          "几位同伴在一旁围观。",
          "几位同伴在帮忙做准备。",
          "几位敌人从现场逃离。",
          "远处的地形依稀可见",
          "几位殖民者在远处围观。",
          "几位动物平静地漫步。"
        ],
        "style_sentences": [
          "这件作品表现出离开与承担同时到来的重量。",
          "整体来看，这件作品表现出离开与承担同时到来的重量。",
          "从构图与气质上看，这件作品表现出离开与承担同时到来的重量。",
          "它让人想到远行从来不只意味着希望，也意味着风险。",
          "整体来看，它让人想到远行从来不只意味着希望，也意味着风险。",
          "从构图与气质上看，它让人想到远行从来不只意味着希望，也意味着风险。",
          "整体画面带着克制的决意。",
          "整体来看，整体画面带着克制的决意。"
        ],
        "scene_phrases": [
          "并为战斗做好了准备",
          "并为生存做好了准备",
          "并为勘探做好了准备",
          "{pawn_display}的眼中透出期待",
          "{pawn_display}的眼中透出奇特的神情"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{pawn_display}的远行队出发",
            "{pawn_display}组建远行队"
          ],
          "image": [
            "{pawn_display}向着目的地进发，[circumstance_phrase]",
            "{pawn_display}望着地平线，[circumstance_phrase]",
            "{pawn_display}在打包旅行用品，[circumstance_phrase]",
            "{pawn_display}正在制定远行计划，[circumstance_phrase]"
          ],
          "circumstance_phrase": [
            "并为战斗做好了准备",
            "并为生存做好了准备",
            "并为勘探做好了准备",
            "{pawn_display}的眼中透出期待",
            "{pawn_display}的眼中透出[AdjectiveAny]的神情"
          ],
          "desc_sentence": [
            "[Quantity_adjphrase][ally]在一旁围观。",
            "[Quantity_adjphrase][ally]在帮忙做准备。",
            "[Quantity_adjphrase][Enemy]从现场逃离。",
            "远处的[TerrainFeature]依稀可见",
            "[Quantity_adjphrase][PersonJob]在远处围观。",
            "[Quantity_adjphrase][Animal]平静地漫步。"
          ],
          "circumstance_group": [
            "并为战斗做好了准备",
            "并为生存做好了准备",
            "并为勘探做好了准备",
            "{pawn_display}的眼中透出期待",
            "{pawn_display}的眼中透出[AdjectiveAny]的神情"
          ]
        }
      },
      "surgery": {
        "event_nouns": [
          "{surgeon_display}为{patient_display}进行手术",
          "{patient_display}的手术由{surgeon_display}主刀",
          "{patient_display}的手术"
        ],
        "main_images": [
          "{surgeon_display}正在麻醉{patient_display}",
          "手术中，{surgeon_display}将手臂深入{patient_display}体内直至手肘",
          "手术中，{surgeon_display}剖开{patient_display}"
        ],
        "detail_sentences": [
          "{surgeon_display}满头大汗。",
          "{surgeon_display}看上去神情专注。",
          "血液溅到{surgeon_display}的脸上。",
          "{patient_display}抽搐扭动着。"
        ],
        "style_sentences": [
          "这件作品表现出医疗行为中兼具希望与风险的一面。",
          "整体来看，这件作品表现出医疗行为中兼具希望与风险的一面。",
          "从构图与气质上看，这件作品表现出医疗行为中兼具希望与风险的一面。",
          "它仿佛在诉说技术如何与脆弱肉身直接相接。",
          "整体来看，它仿佛在诉说技术如何与脆弱肉身直接相接。",
          "从构图与气质上看，它仿佛在诉说技术如何与脆弱肉身直接相接。",
          "整体气氛冷静、紧绷而克制。",
          "整体来看，整体气氛冷静、紧绷而克制。"
        ],
        "scene_phrases": [
          "而{patient_pronoun}因害怕而颤抖",
          "而鲜血滴落在{surgeon_display}脚下",
          "周围摆满了看着瘆人的手术工具",
          "使用的是自制但有效的工具"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{surgeon_display}为{patient_display}进行手术",
            "{patient_display}的手术由{surgeon_display}主刀",
            "{patient_display}的手术"
          ],
          "image": [
            "{surgeon_display}正在麻醉{patient_display}，[circumstance_phrase]",
            "手术中，{surgeon_display}将手臂深入{patient_display}体内直至手肘，[circumstance_phrase]",
            "手术中，{surgeon_display}剖开{patient_display}，[circumstance_phrase]"
          ],
          "circumstance_phrase": [
            "而{patient_pronoun}因害怕而颤抖",
            "而鲜血滴落在{surgeon_display}脚下",
            "周围摆满了看着瘆人的手术工具",
            "使用的是自制但有效的工具"
          ],
          "desc_sentence": [
            "{surgeon_display}满头大汗。",
            "{surgeon_display}看上去神情专注。",
            "血液溅到{surgeon_display}的脸上。",
            "{patient_display}抽搐扭动着。"
          ],
          "circumstance_group": [
            "而{patient_pronoun}因害怕而颤抖",
            "而鲜血滴落在{surgeon_display}脚下",
            "周围摆满了看着瘆人的手术工具",
            "使用的是自制但有效的工具"
          ]
        }
      },
      "birth": {
        "event_nouns": [
          "{mother_display}生下{child_display}"
        ],
        "main_images": [
          "{mother_display}生下了",
          "{mother_display}怀抱{mother_display}的",
          "{mother_display}的旁边躺着{mother_display}的",
          "{mother_display}瘫坐在椅子上，怀抱{mother_display}的"
        ],
        "detail_sentences": [
          "几位动物平静地睡在附近。",
          "几位殖民者在现场围观。",
          "一位殖民者在远处观看。",
          "这一幕发生在一个新建的聚落。"
        ],
        "style_sentences": [
          "这件作品表现出新生命到来时的脆弱与庄重。",
          "整体来看，这件作品表现出新生命到来时的脆弱与庄重。",
          "从构图与气质上看，这件作品表现出新生命到来时的脆弱与庄重。",
          "它让人想到在艰难环境中，出生本身仍是一种顽强的宣告。",
          "整体来看，它让人想到在艰难环境中，出生本身仍是一种顽强的宣告。",
          "从构图与气质上看，它让人想到在艰难环境中，出生本身仍是一种顽强的宣告。",
          "整体气氛温柔，却不失现实的沉重。",
          "整体来看，整体气氛温柔，却不失现实的沉重。"
        ],
        "scene_phrases": [
          "浑身是血，正在哭闹的{child_display}",
          "{child_display}，一个散发着某种颜色柔光的小家伙",
          "{child_display}，闲不住的{child_pronoun}动来动去",
          "{child_display}，一个平静地东张西望的小家伙"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{mother_display}生下{child_display}"
          ],
          "image": [
            "{mother_display}生下了[circumstance_phrase]",
            "{mother_display}怀抱{mother_display}的[baby]，[circumstance_phrase]",
            "{mother_display}的旁边躺着{mother_display}的[baby]，[circumstance_phrase]",
            "{mother_display}瘫坐在椅子上，怀抱{mother_display}的[baby]，[circumstance_phrase]"
          ],
          "baby": [
            "孩子",
            "新生儿",
            "宝宝"
          ],
          "circumstance_phrase": [
            "浑身是血，正在哭闹的{child_display}",
            "{child_display}，一个散发着[Color]柔光的小家伙",
            "{child_display}，闲不住的{child_pronoun}动来动去",
            "{child_display}，一个平静地东张西望的小家伙"
          ],
          "desc_sentence": [
            "[Quantity_adjphrase][Animal]平静地睡在附近。",
            "[Quantity_adjphrase][PersonJob]在现场围观。",
            "一位[PersonJob]在远处观看。",
            "这一幕发生在一个新建的[Community]。"
          ],
          "circumstance_group": [
            "浑身是血，正在哭闹的{child_display}",
            "{child_display}，一个散发着[Color]柔光的小家伙",
            "{child_display}，闲不住的{child_pronoun}动来动去",
            "{child_display}，一个平静地东张西望的小家伙"
          ]
        }
      },
      "mine_vein": {
        "event_nouns": [
          "{miner_display}开采{material_name}矿脉",
          "{miner_display}在岩层中发现{material_name}",
          "{miner_display}从岩壁中凿出{material_name}"
        ],
        "main_images": [
          "{miner_display}正挥动工具开采{material_name}矿脉{scene_fragment}",
          "{miner_display}站在刚被敲开的{material_name}矿层前{scene_fragment}",
          "{miner_display}从碎石之间拾起{material_name}{scene_fragment}"
        ],
        "detail_sentences": [
          "岩壁裂开的纹路被刻得格外清楚，使发现显得突然。",
          "{miner_pronoun}身上沾着粉尘与石屑，像是已劳作许久。",
          "背景中的矿道逼仄而沉闷，衬出这一刻的珍贵。"
        ],
        "style_sentences": [
          "这件作品带着发现资源时特有的惊喜与疲惫。",
          "它表现出边地生存对物资的迫切依赖。",
          "整体画面粗粝而坚实。"
        ],
        "scene_phrases": [
          "在沉闷的矿道里",
          "在回声不断的岩壁前",
          "在尘灰尚未落定的时候"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{miner_display}开采储量丰富的{material_name}矿脉"
          ],
          "image": [
            "{miner_display}使用开采工具在蕴藏着{material_name}的岩壁前工作，[circumstance_phrase]",
            "{miner_display}占据了一大片{material_name}矿，[circumstance_phrase]",
            "{miner_display}靠在由{material_name}组成的墙上，,[circumstance_phrase]",
            "{miner_display}正在指挥挖掘队开采一条储量丰富的{material_name}矿脉，[circumstance_phrase]",
            "{miner_display}正在仔细勘察一条储量丰富的{material_name}矿脉，[circumstance_phrase]"
          ],
          "circumstance_phrase": [
            "任凭汗水流淌",
            "带着[AdjectiveFriendly]的表情",
            "带着[AdjectiveFriendly]的表情",
            "面带得意的微笑",
            "{miner_display}的看上去心满意足"
          ],
          "desc_sentence": [
            "[Quantity_adjphrase][ally]提供了帮助。",
            "[Quantity_adjphrase][Animal]在那里徘徊漫步。",
            "背景中出现的社区是[Community]。",
            "[Quantity_adjphrase]矿脉在可视距离内。",
            "不远处能看到[TerrainFeature]。",
            "工作让{miner_display}变得浑身汗臭而且脏兮兮的。"
          ],
          "circumstance_group": [
            "任凭汗水流淌",
            "带着[AdjectiveFriendly]的表情",
            "带着[AdjectiveFriendly]的表情",
            "面带得意的微笑",
            "{miner_display}的看上去心满意足"
          ]
        }
      },
      "game_play": {
        "event_nouns": [
          "{pawn_display}在进行{game_name}",
          "{pawn_display}沉浸于{game_name}",
          "{pawn_display}在{game_name}中短暂忘却烦忧"
        ],
        "main_images": [
          "{pawn_display}正专注地进行{game_name}{scene_fragment}",
          "{pawn_display}在{game_name}桌前露出难得的松弛神情{scene_fragment}",
          "{pawn_display}把全部注意力投向{game_name}{scene_fragment}"
        ],
        "detail_sentences": [
          "桌面与器具被刻得整洁，使注意力集中在参与者的神情上。",
          "{pawn_pronoun}的动作轻快许多，不再像工作时那样紧绷。",
          "背景里隐约可见观望者与灯火，增添了片刻闲适。"
        ],
        "style_sentences": [
          "这件作品表现出休憩如何短暂地抵消艰难生活的磨损。",
          "它让人想到快乐并不宏大，却足以让人稍微喘息。",
          "整体气氛轻快，却仍带着边地生活的克制。"
        ],
        "scene_phrases": [
          "在闲暇刚刚降临的时候",
          "在灯火温暖的休息室里",
          "在众人稍稍放松的夜晚"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{pawn_display}利用{game_name}进行放松",
            "{pawn_display}用{game_name}玩游戏",
            "{pawn_display}用{game_name}打发时间"
          ],
          "image": [
            "{pawn_display}坐在椅子上等待，[circumstance_phrase]",
            "对于用{game_name}进行游戏，{pawn_display}胸有成竹，[circumstance_phrase]",
            "{pawn_display}坐在{game_name}旁边，[circumstance_phrase]",
            "{pawn_display}在{game_name}游戏中获胜，[circumstance_phrase]",
            "{pawn_display}输掉了{game_name}游戏，[circumstance_phrase]"
          ],
          "circumstance_phrase": [
            "看上去全神贯注",
            "{pawn_display}的身心得到了放松",
            "正在计划{pawn_display}的下一步行动",
            "轻轻地按摩{pawn_display}的手腕",
            "十分[angstyverb]，面带[AdjectiveAngsty]的神情",
            "带着[AdjectiveAngsty]的神情",
            "十分[angstyverb]"
          ],
          "desc_sentence": [
            "背景中[Color]的极光闪烁。",
            "远处的[Community]依稀可见。",
            "远处的[TerrainFeature]依稀可见。",
            "[Quantity_adjphrase][PersonJob]也在玩游戏。",
            "[Quantity_adjphrase][Animal]在附近玩耍。",
            "{pawn_display}闪着[Color]的光环。",
            "{pawn_display}的表情十分夸张。",
            "{pawn_display}矗立在场景里。",
            "[Quantity_adjphrase][PersonJob]则惨败。"
          ],
          "circumstance_group": [
            "看上去全神贯注",
            "{pawn_display}的身心得到了放松",
            "正在计划{pawn_display}的下一步行动",
            "轻轻地按摩{pawn_display}的手腕",
            "十分[angstyverb]，面带[AdjectiveAngsty]的神情",
            "带着[AdjectiveAngsty]的神情",
            "十分[angstyverb]"
          ]
        }
      },
      "drunkenness": {
        "event_nouns": [
          "醉生梦死的{pawn_display}",
          "{pawn_display}伶仃大醉"
        ],
        "main_images": [
          "{pawn_display}喝醉后摇摇晃晃",
          "{pawn_display}仰头痛饮",
          "{pawn_display}贪心地抱着数瓶酒",
          "{pawn_display}大喝特喝"
        ],
        "detail_sentences": [
          "{pawn_pronoun}似乎对周围的环境一无所知。",
          "{pawn_display}的脸似乎变得浮肿。",
          "{pawn_pronoun}近乎不省人事，伸着舌头口吐白沫。",
          "{pawn_pronoun}一会哭一会笑。",
          "{pawn_pronoun}把自己前面弄得一片脏。",
          "在{pawn_pronoun}身后有一堆喝空的酒瓶。",
          "{pawn_display}的裤子上有一滩白色物质。",
          "{pawn_pronoun}似乎丢了一只鞋子。",
          "{pawn_display}的头发乱糟糟的。"
        ],
        "style_sentences": [
          "这件作品带着自我放逐般的松垮气息。",
          "整体来看，这件作品带着自我放逐般的松垮气息。",
          "从构图与气质上看，这件作品带着自我放逐般的松垮气息。",
          "它表现出理智在酒精里被慢慢溶开的模样。",
          "整体来看，它表现出理智在酒精里被慢慢溶开的模样。",
          "从构图与气质上看，它表现出理智在酒精里被慢慢溶开的模样。",
          "整体气氛混乱、疲惫而略带荒诞。",
          "整体来看，整体气氛混乱、疲惫而略带荒诞。"
        ],
        "scene_phrases": [
          "分不清东西南北了",
          "恍恍惚惚",
          "问着{pawn_display}的自己在哪里",
          "泪流满面",
          "神经质地笑着",
          "泣不成声",
          "神情伤感",
          "愤怒地瞪着周围的人",
          "对着旁边的某个人抛着媚眼",
          "想要把衣服脱光",
          "嘴巴含着手指",
          "呕吐着"
        ],
        "grammar_pools": {
          "tale_noun": [
            "醉生梦死的{pawn_display}",
            "{pawn_display}伶仃大醉"
          ],
          "image": [
            "{pawn_display}喝醉后摇摇晃晃，[circumstance_phrase]",
            "{pawn_display}仰头痛饮，[circumstance_phrase]",
            "{pawn_display}贪心地抱着数瓶酒，[circumstance_phrase]",
            "{pawn_display}大喝特喝，[circumstance_phrase]"
          ],
          "circumstance_phrase": [
            "分不清东西南北了",
            "恍恍惚惚",
            "问着{pawn_display}的自己在哪里",
            "泪流满面",
            "神经质地笑着",
            "泣不成声",
            "神情伤感",
            "愤怒地瞪着周围的人",
            "对着旁边的某个人抛着媚眼",
            "想要把衣服脱光",
            "嘴巴含着手指",
            "呕吐着",
            "没有半点顾虑",
            "眼中闪着淫光",
            "追忆着过去"
          ],
          "desc_sentence": [
            "{pawn_pronoun}似乎对周围的环境一无所知。",
            "{pawn_display}的脸似乎变得浮肿。",
            "{pawn_pronoun}近乎不省人事，伸着舌头口吐白沫。",
            "{pawn_pronoun}一会哭一会笑。",
            "{pawn_pronoun}把自己前面弄得一片脏。",
            "在{pawn_pronoun}身后有一堆喝空的酒瓶。",
            "{pawn_display}的裤子上有一滩白色物质。",
            "{pawn_pronoun}似乎丢了一只鞋子。",
            "{pawn_display}的头发乱糟糟的。"
          ],
          "circumstance_group": [
            "分不清东西南北了",
            "恍恍惚惚",
            "问着{pawn_display}的自己在哪里",
            "泪流满面",
            "神经质地笑着",
            "泣不成声",
            "神情伤感",
            "愤怒地瞪着周围的人",
            "对着旁边的某个人抛着媚眼",
            "想要把衣服脱光",
            "嘴巴含着手指",
            "呕吐着",
            "没有半点顾虑",
            "眼中闪着淫光",
            "追忆着过去"
          ]
        }
      },
      "fire_panic": {
        "event_nouns": [
          "{pawn_display}身上着火"
        ],
        "main_images": [
          "{pawn_display}正疯狂拍打自己身上的火焰",
          "{pawn_display}正被火焰吞噬",
          "{pawn_display}跪下来，举着双手，试图把自己身上的火焰扑灭",
          "{pawn_display}浑身是火，满地打滚"
        ],
        "detail_sentences": [
          "{pawn_display}的皮肉明显烧焦了。",
          "{pawn_display}的眼中布满了惊恐。",
          "{pawn_pronoun}似乎快没有了意识，{pawn_display}的眼睛已经失去了生机。",
          "{pawn_pronoun}大声呼喊着求救。",
          "火焰已经包裹住了{pawn_display}的头。",
          "一个象征性的火焰光环环绕着{pawn_display}的脸",
          "{pawn_pronoun}疯子般地大笑着。",
          "{pawn_pronoun}失魂落魄。",
          "{pawn_pronoun}浑身冒着烟。",
          "{pawn_pronoun}被用艺术性地手法描绘成了尸体一样的形式。"
        ],
        "style_sentences": [
          "这件作品表现出灾祸降临时的仓皇与无助。",
          "整体来看，这件作品表现出灾祸降临时的仓皇与无助。",
          "从构图与气质上看，这件作品表现出灾祸降临时的仓皇与无助。",
          "它让人想到疼痛如何瞬间夺走一切秩序。",
          "整体来看，它让人想到疼痛如何瞬间夺走一切秩序。",
          "从构图与气质上看，它让人想到疼痛如何瞬间夺走一切秩序。",
          "整体气氛灼热、急迫而危险。",
          "整体来看，整体气氛灼热、急迫而危险。"
        ],
        "scene_phrases": [
          "在其他人的旁观下",
          "几乎全裸地",
          "惊慌失措地"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{pawn_display}身上着火"
          ],
          "image": [
            "{pawn_display}正[circumstance_phrase]疯狂拍打自己身上的火焰",
            "{pawn_display}正[circumstance_phrase]被火焰吞噬",
            "{pawn_display}跪下来，举着双手，[circumstance_phrase]试图把自己身上的火焰扑灭",
            "{pawn_display}浑身是火，[circumstance_phrase]满地打滚"
          ],
          "circumstance_phrase": [
            "在其他人的旁观下",
            "几乎全裸地",
            "惊慌失措地"
          ],
          "desc_sentence": [
            "{pawn_display}的皮肉明显烧焦了。",
            "{pawn_display}的眼中布满了惊恐。",
            "{pawn_pronoun}似乎快没有了意识，{pawn_display}的眼睛已经失去了生机。",
            "{pawn_pronoun}大声呼喊着求救。",
            "火焰已经包裹住了{pawn_display}的头。",
            "一个象征性的火焰光环环绕着{pawn_display}的脸",
            "{pawn_pronoun}疯子般地大笑着。",
            "{pawn_pronoun}失魂落魄。",
            "{pawn_pronoun}浑身冒着烟。",
            "{pawn_pronoun}被用艺术性地手法描绘成了尸体一样的形式。"
          ],
          "circumstance_group": [
            "在其他人的旁观下",
            "几乎全裸地",
            "惊慌失措地"
          ]
        }
      },
      "nude_wander": {
        "event_nouns": [
          "{pawn_display}裸奔"
        ],
        "main_images": [
          "{pawn_display}非常自然地光着身子",
          "{pawn_display}一丝不挂地",
          "{pawn_display}赤裸着",
          "{pawn_display}，没穿任何衣服"
        ],
        "detail_sentences": [
          "{pawn_display}明显很激动。",
          "{pawn_display}浑身被不明的水汽包裹。",
          "{pawn_display}无缘无故地喘着粗气。",
          "{pawn_display}轻轻抚弄着灌木从。"
        ],
        "style_sentences": [
          "这件作品表现出失序如何侵入最基本的体面。",
          "整体来看，这件作品表现出失序如何侵入最基本的体面。",
          "从构图与气质上看，这件作品表现出失序如何侵入最基本的体面。",
          "它让人想到羞耻与麻木有时会同时出现。",
          "整体来看，它让人想到羞耻与麻木有时会同时出现。",
          "从构图与气质上看，它让人想到羞耻与麻木有时会同时出现。",
          "整体气氛怪诞、裸露而不安。",
          "整体来看，整体气氛怪诞、裸露而不安。"
        ],
        "scene_phrases": [
          "同时信心满满",
          "肆无忌惮",
          "其他人在一旁围观",
          "不知什么原因",
          "周围的动物十分困惑"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{pawn_display}裸奔"
          ],
          "image": [
            "{pawn_display}非常自然地光着身子[nude_action]，[circumstance_phrase]",
            "{pawn_display}一丝不挂地[nude_action]，[circumstance_phrase]",
            "{pawn_display}赤裸着[nude_action]，[circumstance_phrase]",
            "{pawn_display}[nude_action]，没穿任何衣服，[circumstance_phrase]"
          ],
          "nude_action": [
            "昂首阔步",
            "嬉戏玩耍",
            "蹦蹦跳跳",
            "闲庭信步",
            "炫耀{pawn_display}的身材",
            "到处走动",
            "踮着脚走路",
            "散步",
            "环顾四周"
          ],
          "circumstance_phrase": [
            "同时信心满满",
            "肆无忌惮",
            "其他人在一旁围观",
            "不知什么原因",
            "周围的动物十分困惑"
          ],
          "desc_sentence": [
            "{pawn_display}明显很激动。",
            "{pawn_display}浑身被不明的水汽包裹。",
            "{pawn_display}无缘无故地喘着粗气。",
            "{pawn_display}轻轻抚弄着灌木从。"
          ],
          "circumstance_group": [
            "同时信心满满",
            "肆无忌惮",
            "其他人在一旁围观",
            "不知什么原因",
            "周围的动物十分困惑"
          ]
        }
      },
      "grave_visit": {
        "event_nouns": [
          "{visitor_display}拜访{deceased_display}的墓地",
          "{visitor_display}祭奠{deceased_display}"
        ],
        "main_images": [
          "{visitor_display}站在{deceased_display}的坟墓前",
          "{visitor_display}蹲坐在{deceased_display}的坟墓前",
          "{visitor_display}倚靠在{deceased_display}的坟墓旁边",
          "{visitor_display}阅读{deceased_display}的墓碑上刻着的文字",
          "{visitor_display}观看{deceased_display}的棺木上的艺术作品"
        ],
        "detail_sentences": [
          "背景中某种颜色的极光闪烁。",
          "远处聚落被白雪覆盖。",
          "{deceased_display}的灵魂带着友善的神情俯瞰着四周。",
          "{deceased_display}的灵魂站在{visitor_display}身边，面带友善的神情。",
          "{deceased_display}的灵魂带着阴郁的神情俯瞰着四周。",
          "{deceased_display}的灵魂站在{visitor_display}身边，面带阴郁的神情。",
          "几位动物在附近休息。"
        ],
        "style_sentences": [
          "这件作品表现出记忆如何在缺席中继续存在。",
          "整体来看，这件作品表现出记忆如何在缺席中继续存在。",
          "从构图与气质上看，这件作品表现出记忆如何在缺席中继续存在。",
          "它让人想到悲伤并不总是爆发，更多时候只是停留。",
          "整体来看，它让人想到悲伤并不总是爆发，更多时候只是停留。",
          "从构图与气质上看，它让人想到悲伤并不总是爆发，更多时候只是停留。",
          "整体气氛安静、沉缓而哀伤。",
          "整体来看，整体气氛安静、沉缓而哀伤。"
        ],
        "scene_phrases": [
          "面带阴郁的神情",
          "陷入沉思",
          "凝视着远方的地形",
          "向墓碑静静私语"
        ],
        "grammar_pools": {
          "tale_noun": [
            "[PAWN_nameDef]拜访{deceased_display}的墓地",
            "[PAWN_nameDef]祭奠{deceased_display}"
          ],
          "image": [
            "[PAWN_nameFull]站在{deceased_display}的坟墓前，[circumstance_phrase]",
            "[PAWN_nameFull]蹲坐在{deceased_display}的坟墓前，[circumstance_phrase]",
            "[PAWN_nameFull]倚靠在{deceased_display}的坟墓旁边，[circumstance_phrase]",
            "[PAWN_nameFull]阅读{deceased_display}的墓碑上刻着的文字，[circumstance_phrase]",
            "[PAWN_nameFull]观看{deceased_display}的棺木上的艺术作品，[circumstance_phrase]"
          ],
          "circumstance_phrase": [
            "面带[AdjectiveAngsty]的神情",
            "陷入沉思",
            "凝视着远方的[TerrainFeature]",
            "向墓碑静静私语"
          ],
          "desc_sentence": [
            "背景中[Color]的极光闪烁。",
            "远处[Community]被白雪覆盖。",
            "{deceased_display}的灵魂带着[AdjectiveFriendly]的神情俯瞰着四周。",
            "{deceased_display}的灵魂站在[PAWN_nameDef]身边，面带[AdjectiveFriendly]的神情。",
            "{deceased_display}的灵魂带着[AdjectiveAngsty]的神情俯瞰着四周。",
            "{deceased_display}的灵魂站在[PAWN_nameDef]身边，面带[AdjectiveAngsty]的神情。",
            "[Quantity_adjphrase][Animal]在附近休息。"
          ],
          "circumstance_group": [
            "面带[AdjectiveAngsty]的神情",
            "陷入沉思",
            "凝视着远方的[TerrainFeature]",
            "向墓碑静静私语"
          ]
        }
      },
      "hunt_animal": {
        "event_nouns": [
          "{hunter_display}狩猎{animal_name}",
          "{animal_name}被{hunter_display}狩猎",
          "{hunter_display}成功的狩猎"
        ],
        "main_images": [
          "使它正在被{hunter_display}狩猎",
          "趁着，{hunter_display}远远地追踪{animal_name}",
          "{hunter_display}趁的机会，对其进行狩猎"
        ],
        "detail_sentences": [
          "{animal_name}似乎毫无察觉。",
          "{hunter_display}紧握着{hunter_display}的武器。",
          "{animal_name}四处张望，仿佛意识到了危险。"
        ],
        "style_sentences": [
          "这件作品表现出狩猎中冷静与暴烈并存的一面。",
          "整体来看，这件作品表现出狩猎中冷静与暴烈并存的一面。",
          "从构图与气质上看，这件作品表现出狩猎中冷静与暴烈并存的一面。",
          "它让人想到生存如何常常建立在追逐与终结之上。",
          "整体来看，它让人想到生存如何常常建立在追逐与终结之上。",
          "从构图与气质上看，它让人想到生存如何常常建立在追逐与终结之上。",
          "整体气氛锐利、紧绷而决绝。",
          "整体来看，整体气氛锐利、紧绷而决绝。"
        ],
        "scene_phrases": [
          "{animal_name}松懈",
          "{animal_name}经过",
          "{animal_name}进食"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{hunter_display}狩猎{animal_name}",
            "{animal_name}被{hunter_display}狩猎",
            "{hunter_display}成功的狩猎"
          ],
          "image": [
            "[circumstance_phrase]使它正在被{hunter_display}狩猎",
            "趁着[circumstance_phrase]，{hunter_display}远远地追踪{animal_name}",
            "{hunter_display}趁[circumstance_phrase]的机会，对其进行狩猎"
          ],
          "circumstance_phrase": [
            "{animal_name}松懈",
            "{animal_name}经过",
            "{animal_name}进食"
          ],
          "desc_sentence": [
            "{animal_name}似乎毫无察觉。",
            "{hunter_display}紧握着{hunter_display}的武器。",
            "{animal_name}四处张望，仿佛意识到了危险。"
          ],
          "circumstance_group": [
            "{animal_name}松懈",
            "{animal_name}经过",
            "{animal_name}进食"
          ]
        }
      },
      "capture_prisoner": {
        "event_nouns": [
          "{capturer_display}俘虏{prisoner_display}",
          "{prisoner_display}被{capturer_display}俘虏",
          "俘虏{prisoner_display}"
        ],
        "main_images": [
          "{capturer_display}正在俘虏{prisoner_display}",
          "{capturer_display}束缚着{prisoner_display}的双手",
          "{capturer_display}狠狠扇了{prisoner_display}一巴掌并俘虏了{prisoner_pronoun}"
        ],
        "detail_sentences": [
          "{capturer_display}正以征服者的目光看着{prisoner_display}的双眼。",
          "{prisoner_display}受伤了，并且看上去非常痛苦。",
          "{prisoner_display}看起来已经屈服于{prisoner_display}的命运。",
          "{prisoner_display}因失败而愤怒地吼叫着。",
          "{capturer_display}为了制服{prisoner_display}而不断掌掴{prisoner_pronoun}。",
          "{capturer_display}扯着{prisoner_display}的耳朵。",
          "{capturer_display}反锁着{prisoner_display}的关节。",
          "{capturer_display}对着{prisoner_display}的脸啐了口唾沫。",
          "{capturer_display}大笑着，而{prisoner_display}眼中涌出了泪水。",
          "{capturer_display}毫无缘由地踹着{prisoner_display}。"
        ],
        "style_sentences": [
          "这件作品表现出战斗结束后仍未散去的暴力余温。",
          "整体来看，这件作品表现出战斗结束后仍未散去的暴力余温。",
          "从构图与气质上看，这件作品表现出战斗结束后仍未散去的暴力余温。",
          "它让人想到胜利与羞辱常常在同一瞬间并存。",
          "整体来看，它让人想到胜利与羞辱常常在同一瞬间并存。",
          "从构图与气质上看，它让人想到胜利与羞辱常常在同一瞬间并存。",
          "整体气氛压抑、紧绷而带着控制意味。",
          "整体来看，整体气氛压抑、紧绷而带着控制意味。"
        ],
        "scene_phrases": [
          "而{prisoner_pronoun}在地上翻滚",
          "而{prisoner_pronoun}痛苦地扭动",
          "相当专业而效率",
          "相当粗暴而外行",
          "明显用力过重",
          "同时带着开心的心情",
          "同时带着征服的笑容"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{capturer_display}俘虏{prisoner_display}",
            "{prisoner_display}被{capturer_display}俘虏",
            "俘虏{prisoner_display}"
          ],
          "image": [
            "{capturer_display}正在俘虏{prisoner_display}，[circumstance_phrase]",
            "{capturer_display}束缚着{prisoner_display}的双手，[circumstance_phrase]",
            "{capturer_display}狠狠扇了{prisoner_display}一巴掌并俘虏了{prisoner_pronoun}，[circumstance_phrase]"
          ],
          "circumstance_phrase": [
            "而{prisoner_pronoun}在地上翻滚",
            "而{prisoner_pronoun}痛苦地扭动",
            "相当专业而效率",
            "相当粗暴而外行",
            "明显用力过重",
            "同时带着开心的心情",
            "同时带着征服的笑容"
          ],
          "desc_sentence": [
            "{capturer_display}正以征服者的目光看着{prisoner_display}的双眼。",
            "{prisoner_display}受伤了，并且看上去非常痛苦。",
            "{prisoner_display}看起来已经屈服于{prisoner_display}的命运。",
            "{prisoner_display}因失败而愤怒地吼叫着。",
            "{capturer_display}为了制服{prisoner_display}而不断掌掴{prisoner_pronoun}。",
            "{capturer_display}扯着{prisoner_display}的耳朵。",
            "{capturer_display}反锁着{prisoner_display}的关节。",
            "{capturer_display}对着{prisoner_display}的脸啐了口唾沫。",
            "{capturer_display}大笑着，而{prisoner_display}眼中涌出了泪水。",
            "{capturer_display}毫无缘由地踹着{prisoner_display}。"
          ],
          "circumstance_group": [
            "而{prisoner_pronoun}在地上翻滚",
            "而{prisoner_pronoun}痛苦地扭动",
            "相当专业而效率",
            "相当粗暴而外行",
            "明显用力过重",
            "同时带着开心的心情",
            "同时带着征服的笑容"
          ]
        }
      },
      "execution": {
        "event_nouns": [
          "{executioner_display}处决{prisoner_display}",
          "{prisoner_display}被{executioner_display}处决",
          "{prisoner_display}的末日",
          "的死刑"
        ],
        "main_images": [
          "{executioner_display}正在处决{prisoner_display}",
          "{executioner_display}正将{prisoner_display}处以死刑",
          "{executioner_display}正准备处决{prisoner_display}",
          "{executioner_display}走进牢房，准备处决{prisoner_display}"
        ],
        "detail_sentences": [
          "{executioner_display}满头大汗。",
          "{executioner_display}在碎碎念。",
          "鲜血溅到{executioner_display}脸上。",
          "{prisoner_display}抽搐着扭动着。",
          "{prisoner_display}似乎彻底放弃了。",
          "{prisoner_display}已经闭上了眼睛，似乎在祈祷着什么。",
          "{prisoner_display}看上去满脸不屑。"
        ],
        "style_sentences": [
          "这件作品表现出惩罚如何被赋予仪式般的重量。",
          "整体来看，这件作品表现出惩罚如何被赋予仪式般的重量。",
          "从构图与气质上看，这件作品表现出惩罚如何被赋予仪式般的重量。",
          "它让人想到权力如何在公开时刻显露其冷酷。",
          "整体来看，它让人想到权力如何在公开时刻显露其冷酷。",
          "从构图与气质上看，它让人想到权力如何在公开时刻显露其冷酷。",
          "整体气氛肃杀、沉重而毫不宽慰。",
          "整体来看，整体气氛肃杀、沉重而毫不宽慰。"
        ],
        "scene_phrases": [
          "而{prisoner_pronoun}在地上翻滚",
          "而{prisoner_pronoun}痛苦地扭动",
          "而{prisoner_pronoun}恐惧地大声喊叫",
          "相当专业而效率",
          "相当粗暴而外行",
          "明显用力过重",
          "同时带着开心的心情",
          "同时带着征服的笑容",
          "同时{executioner_display}的眼中充满了泪水",
          "同时绝对冷漠的注视着",
          "同时施以额外的痛苦",
          "同时正想着别的什么东西"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{executioner_display}处决{prisoner_display}",
            "{prisoner_display}被{executioner_display}处决",
            "{prisoner_display}的末日",
            "{prisoner_display}的死刑"
          ],
          "image": [
            "{executioner_display}正在处决{prisoner_display}，[circumstance_phrase]",
            "{executioner_display}正将{prisoner_display}处以死刑，[circumstance_phrase]",
            "{executioner_display}正准备处决{prisoner_display}，[circumstance_phrase]",
            "{executioner_display}走进牢房，准备处决{prisoner_display}，[circumstance_phrase]"
          ],
          "circumstance_phrase": [
            "而{prisoner_pronoun}在地上翻滚",
            "而{prisoner_pronoun}痛苦地扭动",
            "而{prisoner_pronoun}恐惧地大声喊叫",
            "相当专业而效率",
            "相当粗暴而外行",
            "明显用力过重",
            "同时带着开心的心情",
            "同时带着征服的笑容",
            "同时{executioner_display}的眼中充满了泪水",
            "同时绝对冷漠的注视着",
            "同时施以额外的痛苦",
            "同时正想着别的什么东西",
            "以顾全大局"
          ],
          "desc_sentence": [
            "{executioner_display}满头大汗。",
            "{executioner_display}在碎碎念。",
            "鲜血溅到{executioner_display}脸上。",
            "{prisoner_display}抽搐着扭动着。",
            "{prisoner_display}似乎彻底放弃了。",
            "{prisoner_display}已经闭上了眼睛，似乎在祈祷着什么。",
            "{prisoner_display}看上去满脸不屑。"
          ],
          "circumstance_group": [
            "而{prisoner_pronoun}在地上翻滚",
            "而{prisoner_pronoun}痛苦地扭动",
            "而{prisoner_pronoun}恐惧地大声喊叫",
            "相当专业而效率",
            "相当粗暴而外行",
            "明显用力过重",
            "同时带着开心的心情",
            "同时带着征服的笑容",
            "同时{executioner_display}的眼中充满了泪水",
            "同时绝对冷漠的注视着",
            "同时施以额外的痛苦",
            "同时正想着别的什么东西",
            "以顾全大局"
          ]
        }
      },
      "kidnap": {
        "event_nouns": [
          "{kidnapper_display}绑架{victim_display}",
          "{victim_display}被{kidnapper_display}掳走",
          "{victim_display}被绑架"
        ],
        "main_images": [
          "{kidnapper_display}正在将{victim_display}抓走带回所属派系",
          "所属派系的{kidnapper_display}正在绑架{victim_display}",
          "{kidnapper_display}正在绑架{victim_display}"
        ],
        "detail_sentences": [
          "{victim_display}似乎彻底放弃了抵抗。",
          "{victim_display}已经闭上了眼睛，似乎在祈祷着什么。",
          "{victim_display}看上去满脸不屑。",
          "{victim_display}因愤怒和恐惧而大声喊叫。",
          "{victim_display}看上去浑身是伤，精疲力竭。",
          "{victim_display}看上去伤得很重。"
        ],
        "style_sentences": [
          "这件作品表现出失去同伴时骤然袭来的空洞感。",
          "整体来看，这件作品表现出失去同伴时骤然袭来的空洞感。",
          "从构图与气质上看，这件作品表现出失去同伴时骤然袭来的空洞感。",
          "它让人想到暴力并不总以死亡结束，有时也以带走开始。",
          "整体来看，它让人想到暴力并不总以死亡结束，有时也以带走开始。",
          "从构图与气质上看，它让人想到暴力并不总以死亡结束，有时也以带走开始。",
          "整体气氛仓促、危险而令人不安。",
          "整体来看，整体气氛仓促、危险而令人不安。"
        ],
        "scene_phrases": [
          "而{victim_pronoun}痛苦地扭动",
          "相当专业而效率",
          "相当粗暴而外行",
          "明显用力过重",
          "同时带着开心的心情",
          "同时带着征服的笑容",
          "同时浑身被血污覆盖"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{kidnapper_display}绑架{victim_display}",
            "{victim_display}被{kidnapper_display}掳走",
            "{victim_display}被绑架"
          ],
          "image": [
            "{kidnapper_display}正在将{victim_display}抓走带回所属派系，[circumstance_phrase]",
            "所属派系的{kidnapper_display}正在绑架{victim_display}，[circumstance_phrase]",
            "{kidnapper_display}正在绑架{victim_display}，[circumstance_phrase]"
          ],
          "circumstance_phrase": [
            "而{victim_pronoun}痛苦地扭动",
            "相当专业而效率",
            "相当粗暴而外行",
            "明显用力过重",
            "同时带着开心的心情",
            "同时带着征服的笑容",
            "同时浑身被血污覆盖"
          ],
          "desc_sentence": [
            "{victim_display}似乎彻底放弃了抵抗。",
            "{victim_display}已经闭上了眼睛，似乎在祈祷着什么。",
            "{victim_display}看上去满脸不屑。",
            "{victim_display}因愤怒和恐惧而大声喊叫。",
            "{victim_display}看上去浑身是伤，精疲力竭。",
            "{victim_display}看上去伤得很重。"
          ],
          "circumstance_group": [
            "而{victim_pronoun}痛苦地扭动",
            "相当专业而效率",
            "相当粗暴而外行",
            "明显用力过重",
            "同时带着开心的心情",
            "同时带着征服的笑容",
            "同时浑身被血污覆盖"
          ]
        }
      },
      "cryptosleep_enter": {
        "event_nouns": [
          "{pawn_display}进入休眠状态"
        ],
        "main_images": [
          "{pawn_display}躺在休眠舱里",
          "{pawn_display}打开一个空的休眠舱",
          "{pawn_display}将自己封闭在休眠舱里",
          "{pawn_display}透过休眠舱的内壁观看这个即将要离开的世界"
        ],
        "detail_sentences": [
          "几位动物在附近休息。",
          "几位敌人正在靠近这个地区。",
          "{pawn_display}目光坚定。",
          "{pawn_display}明显受了伤。",
          "背景中某种颜色的极光在闪烁。",
          "几位装载着生物的休眠舱排列在四周。"
        ],
        "style_sentences": [
          "这件作品表现出离开当下、投身未知时的沉默。",
          "整体来看，这件作品表现出离开当下、投身未知时的沉默。",
          "从构图与气质上看，这件作品表现出离开当下、投身未知时的沉默。",
          "它让人想到休眠并非安眠，而是被推迟的命运。",
          "整体来看，它让人想到休眠并非安眠，而是被推迟的命运。",
          "从构图与气质上看，它让人想到休眠并非安眠，而是被推迟的命运。",
          "整体气氛冰冷、安静而悠长。",
          "整体来看，整体气氛冰冷、安静而悠长。"
        ],
        "scene_phrases": [
          "带着阴郁的神情",
          "陷入沉思",
          "凝视着远方的地形",
          "悄悄地自言自语"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{pawn_display}进入休眠状态"
          ],
          "image": [
            "{pawn_display}躺在休眠舱里，[circumstance_phrase]",
            "{pawn_display}打开一个空的休眠舱，[circumstance_phrase]",
            "{pawn_display}将自己封闭在休眠舱里，[circumstance_phrase]",
            "{pawn_display}透过休眠舱的内壁观看这个即将要离开的世界，[circumstance_phrase]"
          ],
          "circumstance_phrase": [
            "带着[AdjectiveAngsty]的神情",
            "陷入沉思",
            "凝视着远方的[TerrainFeature]",
            "悄悄地自言自语"
          ],
          "desc_sentence": [
            "[Quantity_adjphrase][Animal]在附近休息。",
            "[Quantity_adjphrase][Enemy]正在靠近这个地区。",
            "{pawn_display}目光坚定。",
            "{pawn_display}明显受了伤。",
            "背景中[Color]的极光在闪烁。",
            "[Quantity_adjphrase]装载着生物的休眠舱排列在四周。"
          ],
          "circumstance_group": [
            "带着[AdjectiveAngsty]的神情",
            "陷入沉思",
            "凝视着远方的[TerrainFeature]",
            "悄悄地自言自语"
          ]
        }
      },
      "cryptosleep_place": {
        "event_nouns": [
          "{carrier_display}将放入休眠舱"
        ],
        "main_images": [
          "{carrier_display}将放入休眠舱",
          "{carrier_display}打开一个空的休眠舱用来盛放",
          "{carrier_display}将封闭在休眠舱里",
          "{carrier_display}转身走开，则透过运输舱内壁向外看"
        ],
        "detail_sentences": [
          "几位动物在附近休息。",
          "几位敌人正在靠近这个地区。",
          "{carrier_display}目光坚定。",
          "天空灰蒙蒙的。"
        ],
        "style_sentences": [
          "这件作品表现出照料与告别在同一动作中重叠。",
          "整体来看，这件作品表现出照料与告别在同一动作中重叠。",
          "从构图与气质上看，这件作品表现出照料与告别在同一动作中重叠。",
          "它让人想到离别有时并不轰烈，而是安静地被完成。",
          "整体来看，它让人想到离别有时并不轰烈，而是安静地被完成。",
          "从构图与气质上看，它让人想到离别有时并不轰烈，而是安静地被完成。",
          "整体气氛克制、冷静而略带悲意。",
          "整体来看，整体气氛克制、冷静而略带悲意。"
        ],
        "scene_phrases": [
          "带着阴郁的神情",
          "带着友善的神情",
          "带着凌厉的神情",
          "陷入沉思",
          "凝视着远方的地形",
          "两者之间的矛盾显而易见"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{carrier_display}将{sleeper_display}放入休眠舱"
          ],
          "image": [
            "{carrier_display}将{sleeper_display}放入休眠舱，[circumstance_phrase]",
            "{carrier_display}打开一个空的休眠舱用来盛放{sleeper_display}，[circumstance_phrase]",
            "{carrier_display}将{sleeper_display}封闭在休眠舱里，[circumstance_phrase]",
            "{carrier_display}转身走开，{sleeper_display}则透过运输舱内壁向外看，[circumstance_phrase]"
          ],
          "circumstance_phrase": [
            "带着[AdjectiveAngsty]的神情",
            "带着[AdjectiveFriendly]的神情",
            "带着[AdjectiveBadass]的神情",
            "陷入沉思",
            "凝视着远方的[TerrainFeature]",
            "两者之间的矛盾显而易见"
          ],
          "desc_sentence": [
            "[Quantity_adjphrase][Animal]在附近休息。",
            "[Quantity_adjphrase][Enemy]正在靠近这个地区。",
            "{carrier_display}目光坚定。",
            "天空灰蒙蒙的。"
          ],
          "circumstance_group": [
            "带着[AdjectiveAngsty]的神情",
            "带着[AdjectiveFriendly]的神情",
            "带着[AdjectiveBadass]的神情",
            "陷入沉思",
            "凝视着远方的[TerrainFeature]",
            "两者之间的矛盾显而易见"
          ]
        }
      },
      "lover_union": {
        "event_nouns": [
          "{pursuer_display}与{accepter_display}成为情人"
        ],
        "main_images": [
          "{pursuer_display}在{accepter_display}的耳边甜言蜜语",
          "{pursuer_display}牵着{accepter_display}的手走上了床",
          "{pursuer_display}和{accepter_display}在床上嬉戏",
          "{pursuer_display}深吻着{accepter_display}"
        ],
        "detail_sentences": [
          "{pursuer_display}幸福地依偎着{accepter_display}。",
          "{pursuer_display}深情注视着{accepter_display}。",
          "{pursuer_display}对{accepter_display}吹着气。",
          "{pursuer_display}和{accepter_display}灵魂交融。",
          "{pursuer_display}与{accepter_display}合二为一。",
          "{pursuer_display}恣意地爱抚{accepter_display}。"
        ],
        "style_sentences": [
          "这件作品表现出亲密关系形成时的脆弱与欣喜。",
          "整体来看，这件作品表现出亲密关系形成时的脆弱与欣喜。",
          "从构图与气质上看，这件作品表现出亲密关系形成时的脆弱与欣喜。",
          "它让人想到感情如何在艰难环境中仍然寻找缝隙生长。",
          "整体来看，它让人想到感情如何在艰难环境中仍然寻找缝隙生长。",
          "从构图与气质上看，它让人想到感情如何在艰难环境中仍然寻找缝隙生长。",
          "整体气氛温柔而略带迟疑。",
          "整体来看，整体气氛温柔而略带迟疑。"
        ],
        "scene_phrases": [
          "两人的床难以置信的大",
          "两人在床上翻云覆雨",
          "两人都穿着很少的衣服",
          "两人都被汗水湿透"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{pursuer_display}与{accepter_display}成为情人"
          ],
          "image": [
            "{pursuer_display}在{accepter_display}的耳边甜言蜜语，[circumstance_phrase]",
            "{pursuer_display}牵着{accepter_display}的手走上了床，[circumstance_phrase]",
            "{pursuer_display}和{accepter_display}在床上嬉戏，[circumstance_phrase]",
            "{pursuer_display}深吻着{accepter_display}，[circumstance_phrase]"
          ],
          "circumstance_phrase": [
            "两人的床难以置信的大",
            "两人在床上翻云覆雨",
            "两人都穿着很少的衣服",
            "两人都被汗水湿透"
          ],
          "desc_sentence": [
            "{pursuer_display}幸福地依偎着{accepter_display}。",
            "{pursuer_display}深情注视着{accepter_display}。",
            "{pursuer_display}对{accepter_display}吹着气。",
            "{pursuer_display}和{accepter_display}灵魂交融。",
            "{pursuer_display}与{accepter_display}合二为一。",
            "{pursuer_display}恣意地爱抚{accepter_display}。"
          ],
          "circumstance_group": [
            "两人的床难以置信的大",
            "两人在床上翻云覆雨",
            "两人都穿着很少的衣服",
            "两人都被汗水湿透"
          ]
        }
      },
      "breakup": {
        "event_nouns": [
          "{dumper_display}与{rejected_display}感情破裂"
        ],
        "main_images": [
          "{dumper_display}和{rejected_display}相视而坐，两人的交谈并不愉快",
          "{dumper_display}站得离{rejected_display}远远的",
          "{dumper_display}把{rejected_display}推下了床",
          "{dumper_display}拒绝{rejected_display}的拥抱"
        ],
        "detail_sentences": [
          "{rejected_display}情不自禁地啜泣。",
          "{rejected_display}一边发出嘲笑，一边哭泣。",
          "{rejected_display}震惊地呆立当场。",
          "{dumper_display}在形式上和{rejected_display}分开。",
          "{rejected_display}颤抖着瘫坐在地上。",
          "{rejected_display}指着{dumper_display}，气得说不出话。"
        ],
        "style_sentences": [
          "这件作品表现出亲密关系断裂时的冷意。",
          "整体来看，这件作品表现出亲密关系断裂时的冷意。",
          "从构图与气质上看，这件作品表现出亲密关系断裂时的冷意。",
          "它让人想到感情并不总是缓慢消散，也可能在一刻间被宣布结束。",
          "整体来看，它让人想到感情并不总是缓慢消散，也可能在一刻间被宣布结束。",
          "从构图与气质上看，它让人想到感情并不总是缓慢消散，也可能在一刻间被宣布结束。",
          "整体气氛克制、尖锐而伤感。",
          "整体来看，整体气氛克制、尖锐而伤感。"
        ],
        "scene_phrases": [
          "那是一个令人悲伤的时刻",
          "其他人尴尬地移开目光",
          "其他人在一旁围观"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{dumper_display}与{rejected_display}感情破裂"
          ],
          "image": [
            "{dumper_display}和{rejected_display}相视而坐，两人的交谈并不愉快，[circumstance_phrase]",
            "{dumper_display}站得离{rejected_display}远远的，[circumstance_phrase]",
            "{dumper_display}把{rejected_display}推下了床，[circumstance_phrase]",
            "{dumper_display}拒绝{rejected_display}的拥抱，[circumstance_phrase]"
          ],
          "circumstance_phrase": [
            "那是一个令人悲伤的时刻",
            "其他人尴尬地移开目光",
            "其他人在一旁围观"
          ],
          "desc_sentence": [
            "{rejected_display}情不自禁地啜泣。",
            "{rejected_display}一边发出嘲笑，一边哭泣。",
            "{rejected_display}震惊地呆立当场。",
            "{dumper_display}在形式上和{rejected_display}分开。",
            "{rejected_display}颤抖着瘫坐在地上。",
            "{rejected_display}指着{dumper_display}，气得说不出话。"
          ],
          "circumstance_group": [
            "那是一个令人悲伤的时刻",
            "其他人尴尬地移开目光",
            "其他人在一旁围观"
          ]
        }
      },
      "animal_bond": {
        "event_nouns": [
          "{human_display}与{animal_name}的牵绊"
        ],
        "main_images": [
          "{human_display}与{animal_name}产生牵绊",
          "{human_display}将{animal_name}视为自己的爱宠",
          "{human_display}意识到{animal_name}已经成为自己的家人"
        ],
        "detail_sentences": [
          "{animal_name}幸福地依偎着{human_display}。",
          "{animal_name}看起来在爱意中沉沉欲睡。",
          "{animal_name}站得笔直，看起来很高贵。",
          "{animal_name}对此积极地响应。"
        ],
        "style_sentences": [
          "这件作品表现出跨越物种的依赖与温情。",
          "整体来看，这件作品表现出跨越物种的依赖与温情。",
          "从构图与气质上看，这件作品表现出跨越物种的依赖与温情。",
          "它让人想到陪伴并不需要语言，却依然足以支撑一个人。",
          "整体来看，它让人想到陪伴并不需要语言，却依然足以支撑一个人。",
          "从构图与气质上看，它让人想到陪伴并不需要语言，却依然足以支撑一个人。",
          "整体气氛柔和、真切而安静。",
          "整体来看，整体气氛柔和、真切而安静。"
        ],
        "scene_phrases": [
          "其他动物在一旁围观",
          "注视着{animal_name}的双眼",
          "感到心满意足"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{human_display}与{animal_name}的牵绊"
          ],
          "image": [
            "{human_display}与{animal_name}产生牵绊，[circumstance_phrase]",
            "{human_display}将{animal_name}视为自己的爱宠，[circumstance_phrase]",
            "{human_display}意识到{animal_name}已经成为自己的家人，[circumstance_phrase]"
          ],
          "circumstance_phrase": [
            "其他动物在一旁围观",
            "注视着{animal_name}的双眼",
            "感到心满意足"
          ],
          "desc_sentence": [
            "{animal_name}幸福地依偎着{human_display}。",
            "{animal_name}看起来在爱意中沉沉欲睡。",
            "{animal_name}站得笔直，看起来很高贵。",
            "{animal_name}对此积极地响应。"
          ],
          "circumstance_group": [
            "其他动物在一旁围观",
            "注视着{animal_name}的双眼",
            "感到心满意足"
          ]
        }
      },
      "trade_deal": {
        "event_nouns": [
          "一次{seller_display}与{buyer_display}之间的交易"
        ],
        "main_images": [
          "{buyer_display}从{seller_display}购入了一些货物",
          "{seller_display}在向{buyer_display}兜售商品"
        ],
        "detail_sentences": [
          "{buyer_display}在仔细查看{seller_display}的商品。",
          "{seller_display}在揣测{buyer_display}的心思。",
          "双方在讨价还价。",
          "{buyer_display}与{seller_display}为价格而争吵。",
          "{seller_display}与{buyer_display}就价格达成了一致。",
          "{buyer_display}正在付钱。",
          "{seller_display}正在数钱。",
          "{buyer_display}正在验货。"
        ],
        "style_sentences": [
          "这件作品表现出边地社会中交易所承载的现实意义。",
          "整体来看，这件作品表现出边地社会中交易所承载的现实意义。",
          "从构图与气质上看，这件作品表现出边地社会中交易所承载的现实意义。",
          "它让人想到利益与信任如何在短暂会面中被同时衡量。",
          "整体来看，它让人想到利益与信任如何在短暂会面中被同时衡量。",
          "从构图与气质上看，它让人想到利益与信任如何在短暂会面中被同时衡量。",
          "整体气氛审慎、务实而略带紧绷。",
          "整体来看，整体气氛审慎、务实而略带紧绷。"
        ],
        "scene_phrases": [
          "商人露出贪婪的表情",
          "同时{seller_display}带着职业般的微笑面向"
        ],
        "grammar_pools": {
          "tale_noun": [
            "一次{seller_display}与{buyer_display}之间的交易"
          ],
          "image": [
            "{buyer_display}从{seller_display}购入了一些货物，[circumstance_phrase]",
            "{seller_display}在向{buyer_display}兜售商品，[circumstance_phrase]"
          ],
          "circumstance_phrase": [
            "商人露出贪婪的表情",
            "同时{seller_display}带着职业般的微笑面向[BUYER_shortNameDef]"
          ],
          "desc_sentence": [
            "{buyer_display}在仔细查看{seller_display}的商品。",
            "{seller_display}在揣测{buyer_display}的心思。",
            "双方在讨价还价。",
            "{buyer_display}与{seller_display}为价格而争吵。",
            "{seller_display}与{buyer_display}就价格达成了一致。",
            "{buyer_display}正在付钱。",
            "{seller_display}正在数钱。",
            "{buyer_display}正在验货。"
          ],
          "circumstance_group": [
            "商人露出贪婪的表情",
            "同时{seller_display}带着职业般的微笑面向[BUYER_shortNameDef]"
          ]
        }
      },
      "strip_target": {
        "event_nouns": [
          "扒光"
        ],
        "main_images": [
          "在大庭广众之下扒光了的衣服",
          "脱掉了的衣服",
          "抱着一堆衣物站在浑身赤裸的身旁",
          "耐心地等待脱掉衣服"
        ],
        "detail_sentences": [
          "显然对这一切感到很生气。",
          "浑身都是不明原因的水汽。",
          "无缘无故地喘着粗气。",
          "轻轻抚弄着一丛灌木。",
          "只露出阴郁的神情。"
        ],
        "style_sentences": [
          "这件作品表现出剥夺体面时的冷漠与功利。",
          "整体来看，这件作品表现出剥夺体面时的冷漠与功利。",
          "从构图与气质上看，这件作品表现出剥夺体面时的冷漠与功利。",
          "它让人想到暴力并不总靠鲜血来确认，也可能靠拿走。",
          "整体来看，它让人想到暴力并不总靠鲜血来确认，也可能靠拿走。",
          "从构图与气质上看，它让人想到暴力并不总靠鲜血来确认，也可能靠拿走。",
          "整体气氛冷硬、尴尬而不留余地。",
          "整体来看，整体气氛冷硬、尴尬而不留余地。"
        ],
        "scene_phrases": [
          "带着明确的目的",
          "没有一丝羞愧",
          "其他人在一旁围观",
          "没有明显的理由",
          "不明真相的动物在一旁围观"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{taker_display}扒光{stripped_display}"
          ],
          "image": [
            "{taker_display}在大庭广众之下扒光了{stripped_display}的衣服，[circumstance_phrase]",
            "{taker_display}脱掉了{stripped_display}的衣服，[circumstance_phrase]",
            "{taker_display}抱着一堆[Apparel]站在浑身赤裸的{stripped_display}身旁，[circumstance_phrase]",
            "{taker_display}耐心地等待{stripped_display}脱掉{stripped_display}的衣服，[circumstance_phrase]"
          ],
          "circumstance_phrase": [
            "带着明确的目的",
            "没有一丝羞愧",
            "其他人在一旁围观",
            "没有明显的理由",
            "不明真相的动物在一旁围观"
          ],
          "desc_sentence": [
            "{stripped_display}显然对这一切感到很生气。",
            "{stripped_display}浑身都是不明原因的水汽。",
            "{stripped_display}无缘无故地喘着粗气。",
            "{stripped_display}轻轻抚弄着一丛灌木。",
            "{stripped_display}只露出[AdjectiveAngsty]的神情。"
          ],
          "circumstance_group": [
            "带着明确的目的",
            "没有一丝羞愧",
            "其他人在一旁围观",
            "没有明显的理由",
            "不明真相的动物在一旁围观"
          ]
        }
      },
      "snowman_build": {
        "event_nouns": [
          "{pawn_display}堆雪人",
          "{pawn_display}在雪地里玩耍"
        ],
        "main_images": [
          "{pawn_display}做了一个雪球",
          "{pawn_display}在地上滚出一个巨大的雪球",
          "{pawn_display}用作物让雪人有了粗糙的人脸外观",
          "{pawn_display}躺在雪地里"
        ],
        "detail_sentences": [
          "背景中某种颜色的极光闪烁。",
          "远处聚落被白雪覆盖。",
          "种植着作物的田地被雪掩埋，几乎看不到了。",
          "被冰雪覆盖的地形出现在远方。"
        ],
        "style_sentences": [
          "这件作品表现出艰难生活中罕见的轻松时刻。",
          "整体来看，这件作品表现出艰难生活中罕见的轻松时刻。",
          "从构图与气质上看，这件作品表现出艰难生活中罕见的轻松时刻。",
          "它让人想到游戏并非无用，而是短暂抵御寒冷与疲惫的方式。",
          "整体来看，它让人想到游戏并非无用，而是短暂抵御寒冷与疲惫的方式。",
          "从构图与气质上看，它让人想到游戏并非无用，而是短暂抵御寒冷与疲惫的方式。",
          "整体气氛轻盈、笨拙而可亲。",
          "整体来看，整体气氛轻盈、笨拙而可亲。"
        ],
        "scene_phrases": [
          "头上带着几位风雪帽",
          "灰暗的天空下着小雪",
          "而{pawn_display}的朋友们建造了一座堡垒",
          "而{pawn_display}的朋友们建造了一个雪人家族"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{pawn_display}堆雪人",
            "{pawn_display}在雪地里玩耍"
          ],
          "image": [
            "{pawn_display}做了一个雪球，[circumstance_phrase]",
            "{pawn_display}在地上滚出一个巨大的雪球，[circumstance_phrase]",
            "{pawn_display}用[Vegetable]让雪人有了粗糙的人脸外观，[circumstance_phrase]",
            "{pawn_display}躺在雪地里，[circumstance_phrase]"
          ],
          "circumstance_phrase": [
            "头上带着[Quantity_adjphrase]风雪帽",
            "灰暗的天空下着小雪",
            "而{pawn_display}的朋友们建造了一座堡垒",
            "而{pawn_display}的朋友们建造了一个雪人家族"
          ],
          "desc_sentence": [
            "背景中[Color]的极光闪烁。",
            "远处[Community]被白雪覆盖。",
            "种植着[Vegetable]的田地被雪掩埋，几乎看不到了。",
            "被冰雪覆盖的[TerrainFeature]出现在远方。"
          ],
          "circumstance_group": [
            "头上带着[Quantity_adjphrase]风雪帽",
            "灰暗的天空下着小雪",
            "而{pawn_display}的朋友们建造了一座堡垒",
            "而{pawn_display}的朋友们建造了一个雪人家族"
          ]
        }
      },
      "meteorite_impact": {
        "event_nouns": [
          "一块陨石坠落在{pawn_display}所在的聚落附近",
          "一块陨石砸在距离{pawn_display}所在的聚落不远的地方"
        ],
        "main_images": [
          "一块巨大的的岩石尾部拖着某种颜色的火焰",
          "一个明亮的光点",
          "一个巨大的的某种颜色火球",
          "一块巨大的的石头",
          "一块巨大的的某种颜色烧焦的石头",
          "一块某种颜色的石柱"
        ],
        "detail_sentences": [
          "{pawn_display}好奇地围观。",
          "{pawn_display}兴奋地围观。",
          "{pawn_display}十分震惊地望着这一幕。",
          "几位远处的人影从附近的地形接近。",
          "几位远处的人影准备了工具和设备。",
          "几位动物不安地来回走动。",
          "四周寂静而沉闷。"
        ],
        "style_sentences": [
          "这件作品表现出灾变从高处突然降临的蛮横感。",
          "整体来看，这件作品表现出灾变从高处突然降临的蛮横感。",
          "从构图与气质上看，这件作品表现出灾变从高处突然降临的蛮横感。",
          "它让人想到边地生活永远可能被来自天外的偶然打断。",
          "整体来看，它让人想到边地生活永远可能被来自天外的偶然打断。",
          "从构图与气质上看，它让人想到边地生活永远可能被来自天外的偶然打断。",
          "整体气氛壮阔、危险而充满冲击。",
          "整体来看，整体气氛壮阔、危险而充满冲击。"
        ],
        "scene_phrases": [
          "在耀眼尾焰撕开天空的时候",
          "在所有人都来不及反应之际",
          "在震动尚未传到脚下的一瞬",
          "在聚落外缘",
          "在主体后方的空地上",
          "在远处地形起伏的尽头",
          "在画面左侧延展出去的位置",
          "在画面右侧留白之间"
        ],
        "grammar_pools": {
          "tale_noun": [
            "一块陨石坠落在{pawn_display}所在的[Community]附近",
            "一块陨石砸在距离{pawn_display}所在的[Community]不远的地方"
          ],
          "image": [
            "一块[AdjectiveLarge]的岩石尾部拖着[Color]的火焰，[circumstance_phrase]",
            "一个明亮的光点[circumstance_phrase]",
            "一个[AdjectiveLarge]的[Color]火球[circumstance_phrase]",
            "一块[AdjectiveLarge]的石头[circumstance_phrase]",
            "一块[AdjectiveLarge]的[Color]烧焦的石头[circumstance_phrase]",
            "一块[Color]的石柱[circumstance_phrase]"
          ],
          "airborne_circumstance": [
            "燃烧着划过天空",
            "落到地上，到处都是灰烬",
            "在飞行中，岩石和碎片不断脱落"
          ],
          "ground_circumstance": [
            "被烟灰笼罩着",
            "热得冒烟",
            "被熔化的碎片包围",
            "部分嵌入地下",
            "躺在裂开的陨石坑里"
          ],
          "desc_sentence": [
            "{pawn_display}好奇地围观。",
            "{pawn_display}兴奋地围观。",
            "{pawn_display}十分震惊地望着这一幕。",
            "[Quantity_adjphrase]远处的人影从附近的[TerrainFeature]接近。",
            "[Quantity_adjphrase]远处的人影准备了工具和设备。",
            "[Quantity_adjphrase][Animal]不安地来回走动。",
            "四周寂静而沉闷。"
          ]
        }
      },
      "toxic_fallout": {
        "event_nouns": [
          "有毒尘埃笼罩在{pawn_display}所在的聚落",
          "{pawn_display}所在的聚落附近空气变得有毒"
        ],
        "main_images": [
          "不祥的天空",
          "空气越来越浑浊，似乎",
          "大地泛着柔和的光",
          "田地里的植物枯萎死去",
          "几位坟墓"
        ],
        "detail_sentences": [
          "{pawn_display}躺在地上，{pawn_display}的身体扭曲成不寻常的角度。",
          "{pawn_display}躲在地形附近，以阴郁的神情凝视这一切。",
          "{pawn_display}十分震惊地望着这一幕。",
          "{pawn_display}安静地休息，{pawn_display}的脸上出了不少汗。",
          "几位死掉的动物倒在地上。",
          "几位濒死的动物倒在地上。",
          "几位动物不安地来回走动。"
        ],
        "style_sentences": [
          "这件作品表现出灾难并非总在一瞬袭来，有时它是缓慢覆盖。",
          "整体来看，这件作品表现出灾难并非总在一瞬袭来，有时它是缓慢覆盖。",
          "从构图与气质上看，这件作品表现出灾难并非总在一瞬袭来，有时它是缓慢覆盖。",
          "它让人想到恐惧如何在看不见的毒性里不断累积。",
          "整体来看，它让人想到恐惧如何在看不见的毒性里不断累积。",
          "从构图与气质上看，它让人想到恐惧如何在看不见的毒性里不断累积。",
          "整体气氛压抑、沉闷而令人不安。",
          "整体来看，整体气氛压抑、沉闷而令人不安。"
        ],
        "scene_phrases": [
          "看不到任何生命迹象",
          "周围被散发着微光的尘埃笼罩",
          "组成一个图案，预示着死亡",
          "等待着毒雾消散"
        ],
        "grammar_pools": {
          "tale_noun": [
            "有毒尘埃笼罩在{pawn_display}所在的[Community]",
            "{pawn_display}所在的[Community]附近空气变得有毒"
          ],
          "image": [
            "不祥的天空[circumstance_phrase]",
            "空气越来越浑浊，似乎[circumstance_phrase]",
            "大地泛着柔和的光，[circumstance_phrase]",
            "田地里的植物枯萎死去，[circumstance_phrase]",
            "[Quantity_adjphrase]坟墓[circumstance_phrase]"
          ],
          "circumstance_phrase": [
            "看不到任何生命迹象",
            "周围被散发着微光的尘埃笼罩",
            "组成一个图案，预示着死亡",
            "等待着毒雾消散"
          ],
          "desc_sentence": [
            "{pawn_display}躺在地上，{pawn_display}的身体扭曲成不寻常的角度。",
            "{pawn_display}躲在[TerrainFeature]附近，以[AdjectiveAngsty]的神情凝视这一切。",
            "{pawn_display}十分震惊地望着这一幕。",
            "{pawn_display}安静地休息，{pawn_display}的脸上出了不少汗。",
            "[Quantity_adjphrase]死掉的[Animal]倒在地上。",
            "[Quantity_adjphrase]濒死的[Animal]倒在地上。",
            "[Quantity_adjphrase][Animal]不安地来回走动。"
          ],
          "circumstance_group": [
            "看不到任何生命迹象",
            "周围被散发着微光的尘埃笼罩",
            "组成一个图案，预示着死亡",
            "等待着毒雾消散"
          ]
        }
      },
      "aurora": {
        "event_nouns": [
          "极光出现在{pawn_display}所在的聚落",
          "极光在{pawn_display}所在的聚落上空出现",
          "{pawn_display}所在的聚落被极光照亮"
        ],
        "main_images": [
          "将天空照亮的某种颜色和某种颜色的光",
          "组成美妙图案的某种颜色光",
          "网状的某种颜色光",
          "某种颜色向下的弧线带着某种颜色高光",
          "舞动的某种颜色光"
        ],
        "detail_sentences": [
          "天空之下，{pawn_display}在玩游戏，面带友善的神情。",
          "{pawn_display}望着这一切，{pawn_display}的脸上带着惊讶的表情。",
          "几位殖民者仰望天空。",
          "{pawn_display}坐在地形附近，注视着天空。",
          "几位动物平静地徘徊。",
          "附近没有敌人。"
        ],
        "style_sentences": [
          "这件作品表现出边地夜空中少见的壮丽与宁静。",
          "整体来看，这件作品表现出边地夜空中少见的壮丽与宁静。",
          "从构图与气质上看，这件作品表现出边地夜空中少见的壮丽与宁静。",
          "它让人想到自然景象如何在一瞬间压过日常的烦劳。",
          "整体来看，它让人想到自然景象如何在一瞬间压过日常的烦劳。",
          "从构图与气质上看，它让人想到自然景象如何在一瞬间压过日常的烦劳。",
          "整体气氛神秘、辽阔而带着短暂安宁。",
          "整体来看，整体气氛神秘、辽阔而带着短暂安宁。"
        ],
        "scene_phrases": [
          "覆盖了一片地形",
          "照亮了一片地形",
          "飘浮在聚落上空",
          "将地形和地形连成一片"
        ],
        "grammar_pools": {
          "tale_noun": [
            "极光出现在{pawn_display}所在的[Community]",
            "极光在{pawn_display}所在的[Community]上空出现",
            "{pawn_display}所在的[Community]被极光照亮"
          ],
          "image": [
            "将天空照亮的[Color]和[Color]的光[circumstance_phrase]",
            "组成美妙图案的[Color]光[circumstance_phrase]",
            "网状的[Color]光[circumstance_phrase]",
            "[Color]向下的弧线带着[Color]高光，[circumstance_phrase]",
            "舞动的[Color]光[circumstance_phrase]"
          ],
          "circumstance_phrase": [
            "覆盖了一片[TerrainFeature]",
            "照亮了一片[TerrainFeature]",
            "飘浮在[Community]上空",
            "将[TerrainFeature]和[TerrainFeature]连成一片"
          ],
          "desc_sentence": [
            "天空之下，{pawn_display}在玩[Game]，面带[AdjectiveFriendly]的神情。",
            "{pawn_display}望着这一切，{pawn_display}的脸上带着惊讶的表情。",
            "[Quantity_adjphrase][PersonJob]仰望天空。",
            "{pawn_display}坐在[TerrainFeature]附近，注视着天空。",
            "[Quantity_adjphrase][Animal]平静地徘徊。",
            "附近没有[Enemy]。"
          ],
          "circumstance_group": [
            "覆盖了一片[TerrainFeature]",
            "照亮了一片[TerrainFeature]",
            "飘浮在[Community]上空",
            "将[TerrainFeature]和[TerrainFeature]连成一片"
          ]
        }
      },
      "flashstorm": {
        "event_nouns": [
          "闪电风暴威胁{pawn_display}所在的聚落",
          "{pawn_display}所在的聚落受到恶劣天气侵袭"
        ],
        "main_images": [
          "几位闪电强袭",
          "火墙",
          "某种颜色火墙",
          "由烟灰组成的云雾",
          "火浪"
        ],
        "detail_sentences": [
          "{pawn_display}十分震惊地望着这一幕。",
          "{pawn_display}望着这一切，{pawn_display}的脸上充满恐惧。",
          "{pawn_display}协调人手抵御灾害。",
          "几位殖民者匆忙准备。",
          "几位动物逃离该地区。",
          "所有动物都逃离了该地区。"
        ],
        "style_sentences": [
          "这件作品表现出自然暴力的突然与无差别。",
          "整体来看，这件作品表现出自然暴力的突然与无差别。",
          "从构图与气质上看，这件作品表现出自然暴力的突然与无差别。",
          "它让人想到灾祸来临时，人所能做的往往只有等待与闪避。",
          "整体来看，它让人想到灾祸来临时，人所能做的往往只有等待与闪避。",
          "从构图与气质上看，它让人想到灾祸来临时，人所能做的往往只有等待与闪避。",
          "整体气氛紧绷、炽烈而危险。",
          "整体来看，整体气氛紧绷、炽烈而危险。"
        ],
        "scene_phrases": [
          "向聚落袭来",
          "在令人生畏的云层下面",
          "几乎将一片地形包围",
          "几乎将几位地形包围"
        ],
        "grammar_pools": {
          "tale_noun": [
            "闪电风暴威胁{pawn_display}所在的[Community]",
            "{pawn_display}所在的[Community]受到恶劣天气侵袭"
          ],
          "image": [
            "[Quantity_adjphrase]闪电强袭，[circumstance_phrase]",
            "[behavior]火墙[circumstance_phrase]",
            "[behavior][Color]火墙[circumstance_phrase]",
            "[behavior]由烟灰组成的云雾[circumstance_phrase]",
            "[behavior]火浪[circumstance_phrase]"
          ],
          "behavior": [
            "一片",
            "一片加强的",
            "一片附近的"
          ],
          "circumstance_phrase": [
            "向[Community]袭来",
            "在令人生畏的云层下面",
            "几乎将一片[TerrainFeature]包围",
            "几乎将[Quantity_adjphrase][TerrainFeature]包围"
          ],
          "desc_sentence": [
            "{pawn_display}十分震惊地望着这一幕。",
            "{pawn_display}望着这一切，{pawn_display}的脸上充满恐惧。",
            "{pawn_display}协调人手抵御灾害。",
            "[Quantity_adjphrase][PersonJob]匆忙准备。",
            "[Quantity_adjphrase][Animal]逃离该地区。",
            "所有动物都逃离了该地区。"
          ],
          "circumstance_group": [
            "向[Community]袭来",
            "在令人生畏的云层下面",
            "几乎将一片[TerrainFeature]包围",
            "几乎将[Quantity_adjphrase][TerrainFeature]包围"
          ]
        }
      },
      "insect_infestation": {
        "event_nouns": [
          "{pawn_display}所在的聚落被虫灾侵袭"
        ],
        "main_images": [
          "一群巨型甲虫",
          "几位巨型蜘蛛",
          "压倒性数量的某种颜色虫潮",
          "黑压压的一片"
        ],
        "detail_sentences": [
          "{pawn_display}在组织反击。",
          "{pawn_display}使用武器进行防御。",
          "{pawn_display}受伤倒地。",
          "{pawn_display}用{pawn_display}的武器还击。",
          "{pawn_display}带着凌厉的神情。",
          "{pawn_display}带着阴郁的神情。",
          "地上到处都是鲜血。",
          "几位殖民者逃离该地区。",
          "几位动物逃离该地区。",
          "所有的动物生活都离开了这个地区。"
        ],
        "style_sentences": [
          "这件作品表现出地底灾厄突然翻涌至地表时的恶兆。",
          "整体来看，这件作品表现出地底灾厄突然翻涌至地表时的恶兆。",
          "从构图与气质上看，这件作品表现出地底灾厄突然翻涌至地表时的恶兆。",
          "它让人想到恐惧并不总来自力量，有时也来自数量。",
          "整体来看，它让人想到恐惧并不总来自力量，有时也来自数量。",
          "从构图与气质上看，它让人想到恐惧并不总来自力量，有时也来自数量。",
          "整体气氛黏稠、压迫而令人作呕。",
          "整体来看，整体气氛黏稠、压迫而令人作呕。"
        ],
        "scene_phrases": [
          "正在穿越一片地形",
          "将聚落团团围住",
          "正在攻击几位殖民者",
          "从地下钻出来bursting out of the ground",
          "在屠杀几位动物"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{pawn_display}所在的[Community]被虫灾侵袭"
          ],
          "image": [
            "一群巨型甲虫[circumstance_phrase]",
            "[Quantity_adjphrase]巨型蜘蛛[circumstance_phrase]",
            "压倒性数量的[Color]虫潮[circumstance_phrase]",
            "黑压压的一片[circumstance_phrase]"
          ],
          "circumstance_phrase": [
            "正在穿越一片[TerrainFeature]",
            "将[Community]团团围住",
            "正在攻击[Quantity_adjphrase][PersonJob]",
            "从地下钻出来bursting out of the ground",
            "在屠杀[Quantity_adjphrase][Animal]"
          ],
          "desc_sentence": [
            "{pawn_display}在组织反击。",
            "{pawn_display}使用[Weapon]进行防御。",
            "{pawn_display}受伤倒地。",
            "{pawn_display}用{pawn_display}的[Weapon]还击。",
            "{pawn_display}带着[AdjectiveBadass]的神情。",
            "{pawn_display}带着[AdjectiveAngsty]的神情。",
            "地上到处都是[Gore]。",
            "[Quantity_adjphrase][PersonJob]逃离该地区。",
            "[Quantity_adjphrase][Animal]逃离该地区。",
            "所有的动物生活都离开了这个地区。"
          ],
          "circumstance_group": [
            "正在穿越一片[TerrainFeature]",
            "将[Community]团团围住",
            "正在攻击[Quantity_adjphrase][PersonJob]",
            "从地下钻出来bursting out of the ground",
            "在屠杀[Quantity_adjphrase][Animal]"
          ]
        }
      },
      "manhunter_pack": {
        "event_nouns": [
          "猎杀人类的动物袭击{pawn_display}的聚落",
          "{pawn_display}所在的聚落被动物攻击"
        ],
        "main_images": [
          "一群动物",
          "几位动物",
          "一巨大的动物",
          "几位黑影",
          "几位兽影"
        ],
        "detail_sentences": [
          "{pawn_display}在组织反击。",
          "{pawn_display}用武器进行防御。",
          "{pawn_display}受伤倒地。",
          "{pawn_display}用{pawn_display}的武器还击。",
          "{pawn_display}带着凌厉的神情。",
          "{pawn_display}带着阴郁的神情。",
          "地上到处都是鲜血。",
          "几位殖民者逃离该地区。",
          "几位动物逃离该地区。"
        ],
        "style_sentences": [
          "这件作品表现出自然失控后所带来的纯粹威胁。",
          "整体来看，这件作品表现出自然失控后所带来的纯粹威胁。",
          "从构图与气质上看，这件作品表现出自然失控后所带来的纯粹威胁。",
          "它让人想到生灵一旦被狂暴驱使，熟悉的世界也会立刻变得陌生。",
          "整体来看，它让人想到生灵一旦被狂暴驱使，熟悉的世界也会立刻变得陌生。",
          "从构图与气质上看，它让人想到生灵一旦被狂暴驱使，熟悉的世界也会立刻变得陌生。",
          "整体气氛惊惧、急迫而野蛮。",
          "整体来看，整体气氛惊惧、急迫而野蛮。"
        ],
        "scene_phrases": [
          "正在穿越一片地形",
          "将聚落团团围住",
          "正在攻击几位殖民者",
          "在屠杀几位动物",
          "被缠身",
          "浑身都是鲜血"
        ],
        "grammar_pools": {
          "tale_noun": [
            "猎杀人类的动物袭击{pawn_display}的[Community]",
            "{pawn_display}所在的[Community]被动物攻击"
          ],
          "image": [
            "一群[Animal][circumstance_phrase]",
            "[Quantity_adjphrase][Animal][circumstance_phrase]",
            "一[AdjectiveLarge][Animal][circumstance_phrase]",
            "[Quantity_adjphrase]黑影[circumstance_phrase]",
            "[Quantity_adjphrase]兽影[circumstance_phrase]"
          ],
          "circumstance_phrase": [
            "正在穿越一片[TerrainFeature]",
            "将[Community]团团围住",
            "正在攻击[Quantity_adjphrase][PersonJob]",
            "在屠杀[Quantity_adjphrase][Animal]",
            "被[hate_emotion]缠身",
            "浑身都是[Gore]"
          ],
          "hate_emotion": [
            "仇恨",
            "愤怒",
            "狂暴"
          ],
          "desc_sentence": [
            "{pawn_display}在组织反击。",
            "{pawn_display}用[Weapon]进行防御。",
            "{pawn_display}受伤倒地。",
            "{pawn_display}用{pawn_display}的[Weapon]还击。",
            "{pawn_display}带着[AdjectiveBadass]的神情。",
            "{pawn_display}带着[AdjectiveAngsty]的神情。",
            "地上到处都是[Gore]。",
            "[Quantity_adjphrase][PersonJob]逃离该地区。",
            "[Quantity_adjphrase][Animal]逃离该地区。"
          ],
          "circumstance_group": [
            "正在穿越一片[TerrainFeature]",
            "将[Community]团团围住",
            "正在攻击[Quantity_adjphrase][PersonJob]",
            "在屠杀[Quantity_adjphrase][Animal]",
            "被[hate_emotion]缠身",
            "浑身都是[Gore]"
          ]
        }
      },
      "heatstroke": {
        "event_nouns": [
          "{pawn_display}中暑",
          "{pawn_display}受高温煎熬"
        ],
        "main_images": [
          "{pawn_display}艰难地穿越沙地",
          "{pawn_display}挤在地形的阴影中躲避炎热",
          "{pawn_display}在寻找水",
          "{pawn_display}在寻找阴凉的地方",
          "{pawn_display}徐徐穿过被烈日烘烤的土地"
        ],
        "detail_sentences": [
          "几位干燥的动物尸体散落在这片区域。",
          "{pawn_display}的衣服破烂不堪。",
          "背景中恒星发出耀眼的光芒。",
          "这一幕发生在一片炙热的沙漠中。",
          "这一幕似乎发生在室内，紧挨着加热器的地方。",
          "几位一动不动的动物散落在场景里。",
          "几位死掉的动物倒在地上。"
        ],
        "style_sentences": [
          "这件作品表现出高温如何慢慢侵蚀人的意志。",
          "整体来看，这件作品表现出高温如何慢慢侵蚀人的意志。",
          "从构图与气质上看，这件作品表现出高温如何慢慢侵蚀人的意志。",
          "它让人想到自然的危险并不总来自猛兽，有时来自天气本身。",
          "整体来看，它让人想到自然的危险并不总来自猛兽，有时来自天气本身。",
          "从构图与气质上看，它让人想到自然的危险并不总来自猛兽，有时来自天气本身。",
          "整体气氛灼热、迟缓而令人不适。",
          "整体来看，整体气氛灼热、迟缓而令人不适。"
        ],
        "scene_phrases": [
          "干燥的皮肤已经晒成红色",
          "汗流浃背",
          "干燥的嘴唇已经开裂",
          "伴随着呕吐"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{pawn_display}中暑",
            "{pawn_display}受高温煎熬"
          ],
          "image": [
            "{pawn_display}艰难地穿越沙地，[circumstance_phrase]",
            "{pawn_display}挤在[TerrainFeature]的阴影中躲避炎热，[circumstance_phrase]",
            "{pawn_display}在寻找水，[circumstance_phrase]",
            "{pawn_display}在寻找阴凉的地方，[circumstance_phrase]",
            "{pawn_display}徐徐穿过被烈日烘烤的土地，[circumstance_phrase]"
          ],
          "circumstance_phrase": [
            "干燥的皮肤已经晒成红色",
            "汗流浃背",
            "干燥的嘴唇已经开裂",
            "伴随着呕吐"
          ],
          "desc_sentence": [
            "[Quantity_adjphrase]干燥的[Animal]尸体散落在这片区域。",
            "{pawn_display}的衣服破烂不堪。",
            "背景中恒星发出耀眼的光芒。",
            "这一幕发生在一片炙热的沙漠中。",
            "这一幕似乎发生在室内，紧挨着加热器的地方。",
            "[Quantity_adjphrase]一动不动的[Animal]散落在场景里。",
            "[Quantity_adjphrase]死掉的[Animal]倒在地上。"
          ],
          "circumstance_group": [
            "干燥的皮肤已经晒成红色",
            "汗流浃背",
            "干燥的嘴唇已经开裂",
            "伴随着呕吐"
          ]
        }
      },
      "hypothermia": {
        "event_nouns": [
          "{pawn_display}患上低温症"
        ],
        "main_images": [
          "{pawn_display}艰难地穿越雪地",
          "{pawn_display}挤在地形旁躲避严寒",
          "{pawn_display}正在寻找能够御寒的衣物",
          "{pawn_display}蜷缩在篝火旁",
          "{pawn_display}正在尝试生火"
        ],
        "detail_sentences": [
          "几位冰冻的动物尸体散落在这片区域。",
          "{pawn_display}的衣服破烂不堪。",
          "背景中冰冷的蓝色卫星若隐若现。",
          "这一幕发生在一片被白雪覆盖的树木林里。",
          "这一幕似乎发生在冷库里。",
          "几位发抖的动物散落在场景里。",
          "几位死掉的动物倒在地上。"
        ],
        "style_sentences": [
          "这件作品表现出寒冷如何缓慢夺走人的行动能力。",
          "整体来看，这件作品表现出寒冷如何缓慢夺走人的行动能力。",
          "从构图与气质上看，这件作品表现出寒冷如何缓慢夺走人的行动能力。",
          "它让人想到严冬并不喧哗，却足以使一切都变得危险。",
          "整体来看，它让人想到严冬并不喧哗，却足以使一切都变得危险。",
          "从构图与气质上看，它让人想到严冬并不喧哗，却足以使一切都变得危险。",
          "整体气氛冷硬、凝滞而令人发怵。",
          "整体来看，整体气氛冷硬、凝滞而令人发怵。"
        ],
        "scene_phrases": [
          "他们的脸慢慢地冻青了",
          "并不停地颤抖",
          "身上布满了霜冻的痕迹",
          "同时呼出白色的雾气"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{pawn_display}患上低温症"
          ],
          "image": [
            "{pawn_display}艰难地穿越雪地，[circumstance_phrase]",
            "{pawn_display}挤在[TerrainFeature]旁躲避严寒，[circumstance_phrase]",
            "{pawn_display}正在寻找能够御寒的[Apparel]，[circumstance_phrase]",
            "{pawn_display}蜷缩在篝火旁，[circumstance_phrase]",
            "{pawn_display}正在尝试生火，[circumstance_phrase]"
          ],
          "circumstance_phrase": [
            "他们的脸慢慢地冻青了",
            "并不停地颤抖",
            "身上布满了霜冻的痕迹",
            "同时呼出白色的雾气"
          ],
          "desc_sentence": [
            "[Quantity_adjphrase]冰冻的[Animal]尸体散落在这片区域。",
            "{pawn_display}的衣服破烂不堪。",
            "背景中冰冷的蓝色卫星若隐若现。",
            "这一幕发生在一片被白雪覆盖的[TreeType]林里。",
            "这一幕似乎发生在冷库里。",
            "[Quantity_adjphrase]发抖的[Animal]散落在场景里。",
            "[Quantity_adjphrase]死掉的[Animal]倒在地上。"
          ],
          "circumstance_group": [
            "他们的脸慢慢地冻青了",
            "并不停地颤抖",
            "身上布满了霜冻的痕迹",
            "同时呼出白色的雾气"
          ]
        }
      },
      "exhaustion_collapse": {
        "event_nouns": [
          "{pawn_display}筋疲力尽地倒下"
        ],
        "main_images": [
          "{pawn_display}倒在地上",
          "{pawn_display}躺在地上",
          "{pawn_display}躺在床上",
          "{pawn_display}倒在椅子上",
          "{pawn_display}安静地睡觉"
        ],
        "detail_sentences": [
          "{pawn_display}的最后一个项目就在附近，已经完成。",
          "一座非凡的建筑包围了{pawn_display}。",
          "几位殖民者对{pawn_display}英雄般的壮举心存感激。",
          "几位殖民者也以相似的状态躺在附近。",
          "这一幕发生在一个新建的聚落。"
        ],
        "style_sentences": [
          "这件作品表现出劳累并非抽象概念，而是会压垮肉身的现实。",
          "整体来看，这件作品表现出劳累并非抽象概念，而是会压垮肉身的现实。",
          "从构图与气质上看，这件作品表现出劳累并非抽象概念，而是会压垮肉身的现实。",
          "它让人想到坚持的尽头往往不是胜利，而是倒下。",
          "整体来看，它让人想到坚持的尽头往往不是胜利，而是倒下。",
          "从构图与气质上看，它让人想到坚持的尽头往往不是胜利，而是倒下。",
          "整体气氛疲惫、下坠而沉重。",
          "整体来看，整体气氛疲惫、下坠而沉重。"
        ],
        "scene_phrases": [
          "闭上眼睛",
          "看上去疲惫不堪",
          "身上出了很多汗",
          "看上去浑身酸痛"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{pawn_display}筋疲力尽地倒下"
          ],
          "image": [
            "{pawn_display}倒在地上，[circumstance_phrase]",
            "{pawn_display}躺在地上，[circumstance_phrase]",
            "{pawn_display}躺在床上，[circumstance_phrase]",
            "{pawn_display}倒在椅子上，[circumstance_phrase]",
            "{pawn_display}安静地睡觉，[circumstance_phrase]"
          ],
          "circumstance_phrase": [
            "闭上眼睛",
            "看上去疲惫不堪",
            "身上出了很多汗",
            "看上去浑身酸痛"
          ],
          "desc_sentence": [
            "{pawn_display}的最后一个项目就在附近，已经完成。",
            "一座非凡的建筑包围了{pawn_display}。",
            "[Quantity_adjphrase][PersonJob]对{pawn_display}英雄般的壮举心存感激。",
            "[Quantity_adjphrase][PersonJob]也以相似的状态躺在附近。",
            "这一幕发生在一个新建的[Community]。"
          ],
          "circumstance_group": [
            "闭上眼睛",
            "看上去疲惫不堪",
            "身上出了很多汗",
            "看上去浑身酸痛"
          ]
        }
      },
      "cannibalism": {
        "event_nouns": [
          "吃人肉的{pawn_display}"
        ],
        "main_images": [
          "{pawn_display}可能是某个人类同伴的肉",
          "{pawn_display}从人的手臂上切下来的肉",
          "{pawn_display}人类的肉"
        ],
        "detail_sentences": [
          "{pawn_display}的脸上涂满了鲜血和不明汁液。",
          "{pawn_display}满足地吮吸着自己的手指。",
          "{pawn_display}的身前全是鲜血和碎肉。",
          "{pawn_display}身处于一大摊鲜血之间。",
          "{pawn_display}不怀好意地审视着身边的某个人。",
          "人肉闪闪发光，显得鲜美多汁。",
          "人肉碎屑在{pawn_display}身上撒的到处都是。"
        ],
        "style_sentences": [
          "这件作品表现出绝境如何迫使人跨过禁忌。",
          "整体来看，这件作品表现出绝境如何迫使人跨过禁忌。",
          "从构图与气质上看，这件作品表现出绝境如何迫使人跨过禁忌。",
          "它让人想到饥饿不仅改变身体，也改变边界。",
          "整体来看，它让人想到饥饿不仅改变身体，也改变边界。",
          "从构图与气质上看，它让人想到饥饿不仅改变身体，也改变边界。",
          "整体气氛压抑、污浊而令人不适。",
          "整体来看，整体气氛压抑、污浊而令人不适。"
        ],
        "scene_phrases": [
          "同时信心满满",
          "毫无羞耻",
          "肆无忌惮",
          "其他人在一旁围观",
          "同时兴致勃勃",
          "疯狂地如同{pawn_display}的生命完全依赖于此一般"
        ],
        "grammar_pools": {
          "tale_noun": [
            "吃人肉的{pawn_display}"
          ],
          "image": [
            "{pawn_display}[eat_gerund]可能是某个人类同伴的肉，[circumstance_phrase]",
            "{pawn_display}[eat_gerund]从人的手臂上切下来的肉，[circumstance_phrase]",
            "{pawn_display}[eat_gerund]人类的肉，[circumstance_phrase]"
          ],
          "eat_gerund": [
            "吃着",
            "咽下",
            "嚼着",
            "恶心地嚼着",
            "吞咽着",
            "吞下",
            "撕咬着"
          ],
          "circumstance_phrase": [
            "同时信心满满",
            "毫无羞耻",
            "肆无忌惮",
            "其他人在一旁围观",
            "同时兴致勃勃",
            "疯狂地如同{pawn_display}的生命完全依赖于此一般"
          ],
          "desc_sentence": [
            "{pawn_display}的脸上涂满了鲜血和不明汁液。",
            "{pawn_display}满足地吮吸着自己的手指。",
            "{pawn_display}的身前全是鲜血和碎肉。",
            "{pawn_display}身处于一大摊鲜血之间。",
            "{pawn_display}不怀好意地审视着身边的某个人。",
            "人肉闪闪发光，显得鲜美多汁。",
            "人肉碎屑在{pawn_display}身上撒的到处都是。"
          ],
          "circumstance_group": [
            "同时信心满满",
            "毫无羞耻",
            "肆无忌惮",
            "其他人在一旁围观",
            "同时兴致勃勃",
            "疯狂地如同{pawn_display}的生命完全依赖于此一般"
          ]
        }
      },
      "tox_buildup": {
        "event_nouns": [
          "{pawn_display}中毒",
          "{pawn_display}被毒物侵袭"
        ],
        "main_images": [
          "{pawn_display}步履蹒跚地穿过田地",
          "{pawn_display}躺在地上",
          "{pawn_display}躺在床上",
          "{pawn_display}蜷缩在篝火旁",
          "{pawn_display}正在尝试生火",
          "{pawn_display}无意识地脱掉衣服"
        ],
        "detail_sentences": [
          "几位扭曲的动物尸体散落在这片区域。",
          "{pawn_display}的衣服四分五裂。",
          "天空是一片阴暗的某种颜色。",
          "几位扭曲的某种颜色地形充斥在场景里。",
          "这一幕发生在一片扭曲的树木林里。",
          "几位死掉的动物倒在地上。"
        ],
        "style_sentences": [
          "这件作品表现出毒性如何以缓慢却稳定的方式削弱生命。",
          "整体来看，这件作品表现出毒性如何以缓慢却稳定的方式削弱生命。",
          "从构图与气质上看，这件作品表现出毒性如何以缓慢却稳定的方式削弱生命。",
          "它让人想到看不见的伤害往往更难防备。",
          "整体来看，它让人想到看不见的伤害往往更难防备。",
          "从构图与气质上看，它让人想到看不见的伤害往往更难防备。",
          "整体气氛沉闷、衰败而令人焦躁。",
          "整体来看，整体气氛沉闷、衰败而令人焦躁。"
        ],
        "scene_phrases": [
          "直冒冷汗",
          "不停地颤抖",
          "不停地颤抖并冒冷汗",
          "干燥的嘴唇已经开裂",
          "伴随着呕吐",
          "全身出现明显的皮疹"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{pawn_display}中毒",
            "{pawn_display}被毒物侵袭"
          ],
          "image": [
            "{pawn_display}步履蹒跚地穿过田地，[circumstance_phrase]",
            "{pawn_display}躺在地上，[circumstance_phrase]",
            "{pawn_display}躺在床上，[circumstance_phrase]",
            "{pawn_display}蜷缩在篝火旁，[circumstance_phrase]",
            "{pawn_display}正在尝试生火，[circumstance_phrase]",
            "{pawn_display}无意识地脱掉{pawn_display}的衣服，[circumstance_phrase]"
          ],
          "circumstance_phrase": [
            "直冒冷汗",
            "不停地颤抖",
            "不停地颤抖并冒冷汗",
            "干燥的嘴唇已经开裂",
            "伴随着呕吐",
            "全身出现明显的皮疹"
          ],
          "desc_sentence": [
            "[Quantity_adjphrase]扭曲的[Animal]尸体散落在这片区域。",
            "{pawn_display}的衣服四分五裂。",
            "天空是一片阴暗的[Color]。",
            "[Quantity_adjphrase]扭曲的[Color][TerrainFeature]充斥在场景里。",
            "这一幕发生在一片扭曲的[TreeType]林里。",
            "[Quantity_adjphrase]死掉的[Animal]倒在地上。"
          ],
          "circumstance_group": [
            "直冒冷汗",
            "不停地颤抖",
            "不停地颤抖并冒冷汗",
            "干燥的嘴唇已经开裂",
            "伴随着呕吐",
            "全身出现明显的皮疹"
          ]
        }
      },
      "message_received": {
        "event_nouns": [
          "{pawn_display}接收到来自老朋友的信息",
          "{pawn_display}所在的聚落得到一次机会"
        ],
        "main_images": [
          "{pawn_display}打开一封由送来的信件",
          "{pawn_display}使用由送来的数据水晶",
          "{pawn_display}将送来的卷轴展开",
          "{pawn_display}接收到来自的信号传输",
          "{pawn_display}接收到发来的讯息",
          "{pawn_display}收到一条由发出的消息"
        ],
        "detail_sentences": [
          "几位动物在附近徘徊，浑然不知。",
          "随着阅读信息，开始变得很。",
          "一位殖民者的灵魂从云中注视着四周。",
          "{pawn_display}坐在一片地形附近。",
          "远处的聚落依稀可见。",
          "远处的宇宙飞船依稀可见。"
        ],
        "style_sentences": [
          "这件作品表现出消息如何在瞬间改变一个人的方向。",
          "整体来看，这件作品表现出消息如何在瞬间改变一个人的方向。",
          "从构图与气质上看，这件作品表现出消息如何在瞬间改变一个人的方向。",
          "它让人想到远方的力量常常通过一段文字进入现实。",
          "整体来看，它让人想到远方的力量常常通过一段文字进入现实。",
          "从构图与气质上看，它让人想到远方的力量常常通过一段文字进入现实。",
          "整体气氛克制、专注而略带预兆。",
          "整体来看，整体气氛克制、专注而略带预兆。"
        ],
        "scene_phrases": [
          "独自站在一片地形附近的时候",
          "正在探索一片地形时",
          "正在照料庄稼的时候",
          "一只动物从身边经过的时候",
          "玩游戏的时候"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{pawn_display}接收到来自老朋友的信息",
            "{pawn_display}所在的[Community]得到一次机会"
          ],
          "image": [
            "[circumstance_phrase]，{pawn_display}打开一封由[delivery_method]送来的信件",
            "[circumstance_phrase]，{pawn_display}使用由[delivery_method]送来的数据水晶",
            "[circumstance_phrase]，{pawn_display}将[delivery_method]送来的卷轴展开",
            "[circumstance_phrase]，{pawn_display}接收到来自[transmission_source]的信号传输",
            "[circumstance_phrase]，{pawn_display}接收到[transmission_source]发来的讯息",
            "[circumstance_phrase]，{pawn_display}收到一条由[transmission_source]发出的消息"
          ],
          "delivery_method": [
            "一只[Animal]",
            "一位[PersonJob]",
            "[Quantity_adjphrase][Animal]"
          ],
          "transmission_source": [
            "一个很少使用的频率",
            "一个古老的发射器",
            "一个低功率信号",
            "一个远程信号",
            "一个神秘的信号"
          ],
          "circumstance_phrase": [
            "独自站在一片[TerrainFeature]附近的时候",
            "正在探索一片[TerrainFeature]时",
            "正在照料庄稼的时候",
            "一只[Animal]从身边经过的时候",
            "玩[Game]的时候"
          ],
          "desc_sentence": [
            "[Quantity_adjphrase][Animal]在附近徘徊，浑然不知。",
            "随着{pawn_pronoun}阅读信息，{pawn_pronoun}开始变得很[friendlyverb]。",
            "一位[PersonJob]的灵魂从云中注视着四周。",
            "{pawn_display}坐在一片[TerrainFeature]附近。",
            "远处的[Community]依稀可见。",
            "远处的宇宙飞船依稀可见。"
          ],
          "circumstance_group": [
            "独自站在一片[TerrainFeature]附近的时候",
            "正在探索一片[TerrainFeature]时",
            "正在照料庄稼的时候",
            "一只[Animal]从身边经过的时候",
            "玩[Game]的时候"
          ]
        }
      },
      "eclipse": {
        "event_nouns": [
          "{pawn_display}所在的聚落上空出现日蚀"
        ],
        "main_images": [
          "一片不自然的黑暗的天空",
          "一片朦胧的天空",
          "月亮遮住了太阳，只露出周围的光环",
          "几位动物在黑暗中不安地来回走动"
        ],
        "detail_sentences": [
          "天空之下，{pawn_display}在玩游戏，面带友善的神情。",
          "{pawn_display}望着这一切，{pawn_display}的脸上带着惊讶的表情。",
          "几位殖民者仰望天空。",
          "{pawn_display}坐在地形附近，注视着天空。",
          "聚落的观众安详地望着天空。",
          "附近没有敌人。"
        ],
        "style_sentences": [
          "这件作品表现出白昼失去正常秩序时的异样感。",
          "整体来看，这件作品表现出白昼失去正常秩序时的异样感。",
          "从构图与气质上看，这件作品表现出白昼失去正常秩序时的异样感。",
          "它让人想到宇宙尺度的变化如何让日常显得脆弱。",
          "整体来看，它让人想到宇宙尺度的变化如何让日常显得脆弱。",
          "从构图与气质上看，它让人想到宇宙尺度的变化如何让日常显得脆弱。",
          "整体气氛阴冷、庄严而带着不祥。",
          "整体来看，整体气氛阴冷、庄严而带着不祥。"
        ],
        "scene_phrases": [
          "周围十分寂静",
          "黄昏的颜色覆盖在附近的一片地形上",
          "黄昏的颜色覆盖了附近的几位地形",
          "可以看见星星"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{pawn_display}所在的[Community]上空出现日蚀"
          ],
          "image": [
            "一片不自然的黑暗的天空，[circumstance_phrase]",
            "一片朦胧的天空，[circumstance_phrase]",
            "月亮遮住了太阳，只露出周围的光环，[circumstance_phrase]",
            "[Quantity_adjphrase][Animal]在黑暗中不安地来回走动，[circumstance_phrase]"
          ],
          "circumstance_phrase": [
            "周围十分寂静",
            "黄昏的颜色覆盖在附近的一片[TerrainFeature]上",
            "黄昏的颜色覆盖了附近的[Quantity_adjphrase][TerrainFeature]",
            "可以看见星星"
          ],
          "desc_sentence": [
            "天空之下，{pawn_display}在玩[Game]，面带[AdjectiveFriendly]的神情。",
            "{pawn_display}望着这一切，{pawn_display}的脸上带着惊讶的表情。",
            "[Quantity_adjphrase][PersonJob]仰望天空。",
            "{pawn_display}坐在[TerrainFeature]附近，注视着天空。",
            "[Community]的观众安详地望着天空。",
            "附近没有[Enemy]。"
          ],
          "circumstance_group": [
            "周围十分寂静",
            "黄昏的颜色覆盖在附近的一片[TerrainFeature]上",
            "黄昏的颜色覆盖了附近的[Quantity_adjphrase][TerrainFeature]",
            "可以看见星星"
          ]
        }
      },
      "tornado": {
        "event_nouns": [
          "龙卷风在{pawn_display}所在的聚落附近登陆",
          "{pawn_display}所在的聚落受到恶劣天气侵袭"
        ],
        "main_images": [
          "锥形气旋",
          "龙卷风",
          "飓风",
          "某种颜色云柱"
        ],
        "detail_sentences": [
          "{pawn_display}十分震惊地望着这一幕。",
          "{pawn_display}望着这一切，{pawn_display}的脸上充满恐惧。",
          "{pawn_display}正在协调人手抵御灾害。",
          "几位殖民者匆忙准备。",
          "几位动物逃离该地区。",
          "所有动物都逃离了该地区。"
        ],
        "style_sentences": [
          "这件作品表现出自然暴力最直白的形状。",
          "整体来看，这件作品表现出自然暴力最直白的形状。",
          "从构图与气质上看，这件作品表现出自然暴力最直白的形状。",
          "它让人想到人在真正的天灾面前几乎无从谈起控制。",
          "整体来看，它让人想到人在真正的天灾面前几乎无从谈起控制。",
          "从构图与气质上看，它让人想到人在真正的天灾面前几乎无从谈起控制。",
          "整体气氛猛烈、失衡而压迫。",
          "整体来看，整体气氛猛烈、失衡而压迫。"
        ],
        "scene_phrases": [
          "卷起碎片",
          "穿过一片地形",
          "席卷了整片地形",
          "笼罩了整片地形"
        ],
        "grammar_pools": {
          "tale_noun": [
            "龙卷风在{pawn_display}所在的[Community]附近登陆",
            "{pawn_display}所在的[Community]受到恶劣天气侵袭"
          ],
          "image": [
            "[behavior]锥形气旋[circumstance_phrase]",
            "[behavior]龙卷风[circumstance_phrase]",
            "[behavior]飓风[circumstance_phrase]",
            "[behavior][Color]云柱[circumstance_phrase]"
          ],
          "behavior": [
            "加强的",
            "附近的",
            "快速移动的",
            "高速旋转的"
          ],
          "circumstance_phrase": [
            "卷起碎片",
            "穿过一片[TerrainFeature]",
            "席卷了整片[TerrainFeature]",
            "笼罩了整片[TerrainFeature]"
          ],
          "desc_sentence": [
            "{pawn_display}十分震惊地望着这一幕。",
            "{pawn_display}望着这一切，{pawn_display}的脸上充满恐惧。",
            "{pawn_display}正在协调人手抵御灾害。",
            "[Quantity_adjphrase][PersonJob]匆忙准备。",
            "[Quantity_adjphrase][Animal]逃离该地区。",
            "所有动物都逃离了该地区。"
          ],
          "circumstance_group": [
            "卷起碎片",
            "穿过一片[TerrainFeature]",
            "席卷了整片[TerrainFeature]",
            "笼罩了整片[TerrainFeature]"
          ]
        }
      },
      "vomit": {
        "event_nouns": [
          "正在呕吐的{pawn_display}"
        ],
        "main_images": [
          "{pawn_display}正往地上呕吐着",
          "{pawn_display}被结块的呕吐物弄了一身，还干呕着，看着非常恶心",
          "{pawn_display}弯着腰，再次往地上吐了起来",
          "{pawn_display}扶着膝盖，往地板上干呕着"
        ],
        "detail_sentences": [
          "{pawn_pronoun}似乎对周围的环境一无所知。",
          "{pawn_display}的脸似乎变得浮肿。",
          "{pawn_pronoun}几乎不省人事，伸着舌头口吐白沫。",
          "{pawn_pronoun}剧烈地抽搐着。",
          "{pawn_pronoun}满脸羞愧。",
          "{pawn_pronoun}无视当前的环境，似乎想要试着笑一笑。",
          "{pawn_pronoun}看起来虚脱了，仿佛整个人被剧烈的呕吐掏空。",
          "{pawn_pronoun}被一圈非常有艺术感的呕吐物围绕着。",
          "背景中一只动物正在吃地上残存的呕吐物。"
        ],
        "style_sentences": [
          "这件作品表现出身体失控时最直接的脆弱。",
          "整体来看，这件作品表现出身体失控时最直接的脆弱。",
          "从构图与气质上看，这件作品表现出身体失控时最直接的脆弱。",
          "它让人想到病痛来袭时，体面往往是最先失去的东西。",
          "整体来看，它让人想到病痛来袭时，体面往往是最先失去的东西。",
          "从构图与气质上看，它让人想到病痛来袭时，体面往往是最先失去的东西。",
          "整体气氛狼狈、难堪而真实。",
          "整体来看，整体气氛狼狈、难堪而真实。"
        ],
        "scene_phrases": [
          "很痛苦地",
          "一脸羞愧地",
          "在其他人的围观下"
        ],
        "grammar_pools": {
          "tale_noun": [
            "正在呕吐的{pawn_display}"
          ],
          "image": [
            "{pawn_display}正[circumstance_phrase]往地上呕吐着",
            "{pawn_display}被结块的呕吐物弄了一身，还[circumstance_phrase]干呕着，看着非常恶心",
            "{pawn_display}弯着腰，[circumstance_phrase]再次往地上吐了起来",
            "{pawn_display}扶着膝盖，[circumstance_phrase]往地板上干呕着"
          ],
          "circumstance_phrase": [
            "很痛苦地",
            "一脸羞愧地",
            "在其他人的围观下"
          ],
          "desc_sentence": [
            "{pawn_pronoun}似乎对周围的环境一无所知。",
            "{pawn_display}的脸似乎变得浮肿。",
            "{pawn_pronoun}几乎不省人事，伸着舌头口吐白沫。",
            "{pawn_pronoun}剧烈地抽搐着。",
            "{pawn_pronoun}满脸羞愧。",
            "{pawn_pronoun}无视当前的环境，似乎想要试着笑一笑。",
            "{pawn_pronoun}看起来虚脱了，仿佛整个人被剧烈的呕吐掏空。",
            "{pawn_pronoun}被一圈非常有艺术感的呕吐物围绕着。",
            "背景中一只[Animal]正在吃地上残存的呕吐物。"
          ],
          "circumstance_group": [
            "很痛苦地",
            "一脸羞愧地",
            "在其他人的围观下"
          ]
        }
      },
      "cavein_escape": {
        "event_nouns": [
          "{pawn_display}躲避塌落",
          "{pawn_display}差点被高空坠物砸中"
        ],
        "main_images": [
          "{pawn_display}远离崩落的碎片",
          "{pawn_display}勉强避开塌落",
          "{pawn_display}正在躲避下落的天花板",
          "{pawn_display}避开了致命的落石"
        ],
        "detail_sentences": [
          "{pawn_pronoun}满头大汗。",
          "{pawn_pronoun}显得非常害怕。",
          "{pawn_pronoun}被刮伤，正在流血。",
          "{pawn_pronoun}失去平衡。"
        ],
        "style_sentences": [
          "这件作品表现出灾祸来临时的仓皇反应。",
          "整体来看，这件作品表现出灾祸来临时的仓皇反应。",
          "从构图与气质上看，这件作品表现出灾祸来临时的仓皇反应。",
          "它让人想到许多生还并非因为准备充分，而是因为来得及。",
          "整体来看，它让人想到许多生还并非因为准备充分，而是因为来得及。",
          "从构图与气质上看，它让人想到许多生还并非因为准备充分，而是因为来得及。",
          "整体气氛急迫、沉重而充满侥幸。",
          "整体来看，整体气氛急迫、沉重而充满侥幸。"
        ],
        "scene_phrases": [
          "坠物随后消失在一片瓦砾和灰尘之中",
          "那力量足以压碎一切",
          "那真是难以置信的力量"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{pawn_display}躲避塌落",
            "{pawn_display}差点被高空坠物砸中"
          ],
          "image": [
            "{pawn_display}远离崩落的碎片，[circumstance_phrase]",
            "{pawn_display}勉强避开塌落，[circumstance_phrase]",
            "{pawn_display}正在躲避下落的天花板，[circumstance_phrase]",
            "{pawn_display}避开了致命的落石，[circumstance_phrase]"
          ],
          "circumstance_phrase": [
            "坠物随后消失在一片瓦砾和灰尘之中",
            "那力量足以压碎一切",
            "那真是难以置信的力量"
          ],
          "desc_sentence": [
            "{pawn_pronoun}满头大汗。",
            "{pawn_pronoun}显得非常害怕。",
            "{pawn_pronoun}被刮伤，正在流血。",
            "{pawn_pronoun}失去平衡。"
          ],
          "circumstance_group": [
            "坠物随后消失在一片瓦砾和灰尘之中",
            "那力量足以压碎一切",
            "那真是难以置信的力量"
          ]
        }
      },
      "caravan_ambush": {
        "event_nouns": [
          "{pawn_display}的远行队被伏击"
        ],
        "main_images": [
          "{pawn_display}畏缩着",
          "{pawn_display}为了掩护队友快速移动",
          "{pawn_display}移动射击",
          "{pawn_display}发起进攻",
          "{pawn_display}大声呼喊",
          "{pawn_display}正在奔跑",
          "{pawn_display}和敌人扭打在一起",
          "{pawn_display}在自卫"
        ],
        "detail_sentences": [
          "几位远处的人影从地形后面接近。",
          "远处可以看到几位敌人。",
          "{pawn_display}几乎被敌人包围。",
          "{pawn_display}要面对的是一名敌人。",
          "几位动物惊慌失措，纷纷逃离危险地带。",
          "一位殖民者在远处监视着一切。"
        ],
        "style_sentences": [
          "这件作品表现出旅途中的安全感如何在瞬间崩解。",
          "整体来看，这件作品表现出旅途中的安全感如何在瞬间崩解。",
          "从构图与气质上看，这件作品表现出旅途中的安全感如何在瞬间崩解。",
          "它让人想到远行从不只意味着自由，也意味着更容易被暴力截住。",
          "整体来看，它让人想到远行从不只意味着自由，也意味着更容易被暴力截住。",
          "从构图与气质上看，它让人想到远行从不只意味着自由，也意味着更容易被暴力截住。",
          "整体气氛混乱、仓促而危险。",
          "整体来看，整体气氛混乱、仓促而危险。"
        ],
        "scene_phrases": [
          "脸上带着凌厉的神情",
          "脸上带着凌厉的神情",
          "同时挥舞着{pawn_display}的武器",
          "同时汗流浃背"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{pawn_display}的远行队被伏击"
          ],
          "image": [
            "{pawn_display}畏缩着，[circumstance_phrase]",
            "{pawn_display}为了掩护队友快速移动，[circumstance_phrase]",
            "{pawn_display}移动射击，[circumstance_phrase]",
            "{pawn_display}发起进攻，[circumstance_phrase]",
            "{pawn_display}大声呼喊，[circumstance_phrase]",
            "{pawn_display}正在奔跑，[circumstance_phrase]",
            "{pawn_display}和敌人扭打在一起，[circumstance_phrase]",
            "{pawn_display}在自卫，[circumstance_phrase]"
          ],
          "circumstance_phrase": [
            "脸上带着[AdjectiveBadass]的神情",
            "脸上带着[AdjectiveBadass]的神情",
            "同时挥舞着{pawn_display}的武器",
            "同时汗流浃背"
          ],
          "desc_sentence": [
            "[Quantity_adjphrase]远处的人影从[TerrainFeature]后面接近。",
            "远处可以看到[Quantity_adjphrase][Enemy]。",
            "{pawn_display}几乎被[Enemy]包围。",
            "{pawn_display}要面对的是一名[Enemy]。",
            "[Quantity_adjphrase][Animal]惊慌失措，纷纷逃离危险地带。",
            "一位[PersonJob]在远处监视着一切。"
          ],
          "circumstance_group": [
            "脸上带着[AdjectiveBadass]的神情",
            "脸上带着[AdjectiveBadass]的神情",
            "同时挥舞着{pawn_display}的武器",
            "同时汗流浃背"
          ]
        }
      },
      "ship_chunk_crash": {
        "event_nouns": [
          "一个远古飞船部件紧急着陆在{pawn_display}所在的聚落附近",
          "一个远古飞船部件在{pawn_display}所在的聚落附近着陆",
          "一个危险的飞船部件降落在{pawn_display}所在的聚落附近"
        ],
        "main_images": [
          "大群机械族",
          "一个由机械族组成的军队",
          "几位机械族",
          "一巨大的机械族",
          "几位机械族的黑影",
          "几位带有某种颜色传感器的机械族"
        ],
        "detail_sentences": [
          "{pawn_display}一边组织抵抗，一边。",
          "{pawn_display}用武器进行防御，同时。",
          "{pawn_display}受伤倒地。",
          "{pawn_display}用{pawn_display}的武器还击，同时。",
          "{pawn_display}挺身而出，同时。",
          "{pawn_display}带着凌厉的神情。",
          "{pawn_display}带着阴郁的神情。",
          "地上到处都是鲜血。",
          "报废的金属随处可见。",
          "几位殖民者逃离该地区。",
          "几位动物逃离该地区。"
        ],
        "style_sentences": [
          "这件作品表现出宇宙遗物坠入日常空间时的粗暴感。",
          "整体来看，这件作品表现出宇宙遗物坠入日常空间时的粗暴感。",
          "从构图与气质上看，这件作品表现出宇宙遗物坠入日常空间时的粗暴感。",
          "它让人想到遥远战争的余烬如何仍能砸进边地生活。",
          "整体来看，它让人想到遥远战争的余烬如何仍能砸进边地生活。",
          "从构图与气质上看，它让人想到遥远战争的余烬如何仍能砸进边地生活。",
          "整体气氛剧烈、灼热而突兀。",
          "整体来看，整体气氛剧烈、灼热而突兀。"
        ],
        "scene_phrases": [
          "正在穿越一片地形",
          "将聚落团团围住",
          "正在攻击几位殖民者",
          "正在屠杀几位动物",
          "身上沾满了鲜血",
          "被打爆，火花四溅"
        ],
        "grammar_pools": {
          "tale_noun": [
            "一个远古飞船部件紧急着陆在{pawn_display}所在的[Community]附近",
            "一个远古飞船部件在{pawn_display}所在的[Community]附近着陆",
            "一个危险的飞船部件降落在{pawn_display}所在的[Community]附近"
          ],
          "image": [
            "大群[Mechanoid][circumstance_phrase]",
            "一个由[Mechanoid]组成的军队[circumstance_phrase]",
            "[Quantity_adjphrase][Mechanoid][circumstance_phrase]",
            "一[AdjectiveLarge][Mechanoid][circumstance_phrase]",
            "[Quantity_adjphrase][Mechanoid]的黑影[circumstance_phrase]",
            "[Quantity_adjphrase]带有[Color]传感器的[Mechanoid][circumstance_phrase]"
          ],
          "circumstance_phrase": [
            "正在穿越一片[TerrainFeature]",
            "将[Community]团团围住",
            "正在攻击[Quantity_adjphrase][PersonJob]",
            "正在屠杀[Quantity_adjphrase][Animal]",
            "身上沾满了[Gore]",
            "被打爆，火花四溅"
          ],
          "desc_sentence": [
            "{pawn_display}一边组织抵抗，一边[defender_circumstance]。",
            "{pawn_display}用[Weapon]进行防御，同时[defender_circumstance]。",
            "{pawn_display}受伤倒地。",
            "{pawn_display}用{pawn_display}的[Weapon]还击，同时[defender_circumstance]。",
            "{pawn_display}挺身而出，同时[defender_circumstance]。",
            "{pawn_display}带着[AdjectiveBadass]的神情。",
            "{pawn_display}带着[AdjectiveAngsty]的神情。",
            "地上到处都是[Gore]。",
            "报废的金属随处可见。",
            "[Quantity_adjphrase][PersonJob]逃离该地区。",
            "[Quantity_adjphrase][Animal]逃离该地区。"
          ],
          "defender_circumstance": [
            "高喊胜利",
            "闪着[Color]的光",
            "挑衅性地高举拳头",
            "显示{pawn_display}的肌肉"
          ],
          "circumstance_group": [
            "正在穿越一片[TerrainFeature]",
            "将[Community]团团围住",
            "正在攻击[Quantity_adjphrase][PersonJob]",
            "正在屠杀[Quantity_adjphrase][Animal]",
            "身上沾满了[Gore]",
            "被打爆，火花四溅"
          ]
        }
      },
      "volcanic_winter": {
        "event_nouns": [
          "{pawn_display}所在的聚落进入火山冬天"
        ],
        "main_images": [
          "天空黑暗而寒冷",
          "空气中充满了灰尘，周围",
          "贫瘠的地形被冰霜覆盖",
          "几位田地里被灰尘覆盖的植物"
        ],
        "detail_sentences": [
          "{pawn_display}靠近火堆。",
          "为了保暖，{pawn_display}穿上了几位。",
          "{pawn_display}坐在附近，显然被折磨得精疲力尽。",
          "{pawn_display}躲在地形附近，以阴郁的神情凝视这一切。",
          "几位挨饿的动物散落在四周。",
          "几位发抖的动物散落在四周。",
          "几位濒死的动物倒在地上。",
          "几位动物不安地来回走动。"
        ],
        "style_sentences": [
          "这件作品表现出漫长灾候如何缓慢改变世界的表情。",
          "整体来看，这件作品表现出漫长灾候如何缓慢改变世界的表情。",
          "从构图与气质上看，这件作品表现出漫长灾候如何缓慢改变世界的表情。",
          "它让人想到有些灾难并不轰鸣，而是在持续中吞噬希望。",
          "整体来看，它让人想到有些灾难并不轰鸣，而是在持续中吞噬希望。",
          "从构图与气质上看，它让人想到有些灾难并不轰鸣，而是在持续中吞噬希望。",
          "整体气氛阴沉、寒冷而迟滞。",
          "整体来看，整体气氛阴沉、寒冷而迟滞。"
        ],
        "scene_phrases": [
          "看不到任何生命迹象",
          "只能被少量透过的光线勉强照亮",
          "被冰冷的蓝光完全照亮"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{pawn_display}所在的[Community]进入火山冬天"
          ],
          "image": [
            "天空黑暗而寒冷，[circumstance_phrase]",
            "空气中充满了灰尘，周围[circumstance_phrase]",
            "贫瘠的[TerrainFeature]被冰霜覆盖，[circumstance_phrase]",
            "[Quantity_adjphrase]田地里被灰尘覆盖的植物[circumstance_phrase]"
          ],
          "circumstance_phrase": [
            "看不到任何生命迹象",
            "只能被少量透过的光线勉强照亮",
            "被冰冷的蓝光完全照亮"
          ],
          "desc_sentence": [
            "{pawn_display}靠近火堆。",
            "为了保暖，{pawn_display}穿上了[Quantity_adjphrase][apparel]。",
            "{pawn_display}坐在附近，显然被折磨得精疲力尽。",
            "{pawn_display}躲在[TerrainFeature]附近，以[AdjectiveAngsty]的神情凝视这一切。",
            "[Quantity_adjphrase]挨饿的[Animal]散落在四周。",
            "[Quantity_adjphrase]发抖的[Animal]散落在四周。",
            "[Quantity_adjphrase]濒死的[Animal]倒在地上。",
            "[Quantity_adjphrase][Animal]不安地来回走动。"
          ],
          "circumstance_group": [
            "看不到任何生命迹象",
            "只能被少量透过的光线勉强照亮",
            "被冰冷的蓝光完全照亮"
          ]
        }
      },
      "disease_onset": {
        "event_nouns": [
          "{pawn_display}被{illness_name}折磨"
        ],
        "main_images": [
          "{pawn_display}步履蹒跚地穿过田地",
          "{pawn_display}躺在地上",
          "{pawn_display}躺在床上",
          "{pawn_display}躺在医疗床上",
          "{pawn_display}蜷缩在椅子上",
          "{pawn_display}蜷缩在篝火旁"
        ],
        "detail_sentences": [
          "几位被苍蝇包围的动物尸体散落在这片区域。",
          "几位古怪的某种颜色地形充斥在场景里。",
          "几位殖民者受到了同样的困扰。",
          "这一幕发生在一片树木林里。",
          "几位死掉的动物倒在地上。"
        ],
        "style_sentences": [
          "这件作品表现出疾病如何在日常中突然占据人的全部注意。",
          "整体来看，这件作品表现出疾病如何在日常中突然占据人的全部注意。",
          "从构图与气质上看，这件作品表现出疾病如何在日常中突然占据人的全部注意。",
          "它让人想到看不见的病症同样能成为压倒性的对手。",
          "整体来看，它让人想到看不见的病症同样能成为压倒性的对手。",
          "从构图与气质上看，它让人想到看不见的病症同样能成为压倒性的对手。",
          "整体气氛虚弱、沉闷而令人担忧。",
          "整体来看，整体气氛虚弱、沉闷而令人担忧。"
        ],
        "scene_phrases": [
          "直冒冷汗",
          "不停地颤抖",
          "不停地颤抖并冒冷汗",
          "干燥的嘴唇已经开裂",
          "伴随着呕吐",
          "全身出现明显的皮疹",
          "正在受到医生的照顾"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{pawn_display}被{illness_name}折磨"
          ],
          "image": [
            "{pawn_display}步履蹒跚地穿过田地，[circumstance_phrase]",
            "{pawn_display}躺在地上，[circumstance_phrase]",
            "{pawn_display}躺在床上，[circumstance_phrase]",
            "{pawn_display}躺在医疗床上，[circumstance_phrase]",
            "{pawn_display}蜷缩在椅子上，[circumstance_phrase]",
            "{pawn_display}蜷缩在篝火旁，[circumstance_phrase]"
          ],
          "circumstance_phrase": [
            "直冒冷汗",
            "不停地颤抖",
            "不停地颤抖并冒冷汗",
            "干燥的嘴唇已经开裂",
            "伴随着呕吐",
            "全身出现明显的皮疹",
            "正在受到医生的照顾。"
          ],
          "desc_sentence": [
            "[Quantity_adjphrase]被苍蝇包围的[Animal]尸体散落在这片区域。",
            "[Quantity_adjphrase]古怪的[Color][TerrainFeature]充斥在场景里。",
            "[Quantity_adjphrase][PersonJob]受到了同样的困扰。",
            "这一幕发生在一片[TreeType]林里。",
            "[Quantity_adjphrase]死掉的[Animal]倒在地上。"
          ],
          "circumstance_group": [
            "直冒冷汗",
            "不停地颤抖",
            "不停地颤抖并冒冷汗",
            "干燥的嘴唇已经开裂",
            "伴随着呕吐",
            "全身出现明显的皮疹",
            "正在受到医生的照顾。"
          ]
        }
      },
      "recruit_failure": {
        "event_nouns": [
          "{recruiter_display}招募{target_display}失败",
          "{target_display}拒绝了{recruiter_display}的说服",
          "{recruiter_display}未能赢得{target_display}的回应",
          "{recruiter_display}招募{target_display}失败的情景",
          "{target_display}拒绝了{recruiter_display}的说服的情景",
          "{recruiter_display}未能赢得{target_display}的回应的情景",
          "{recruiter_display}招募{target_display}失败的场面",
          "{target_display}拒绝了{recruiter_display}的说服的场面"
        ],
        "main_images": [
          "{recruiter_display}正被{target_display}冷冷拒绝{scene_fragment}",
          "{target_display}从{recruiter_display}面前转开视线{scene_fragment}",
          "{recruiter_display}的说辞在{target_display}面前失去作用{scene_fragment}"
        ],
        "detail_sentences": [
          "两人之间的距离没有缩短，反而显得更明显。",
          "人物神情被刻得克制，却足够表明失败已成事实。",
          "背景被处理得安静，使拒绝本身更直接。",
          "在画面边缘，两人之间的距离没有缩短，反而显得更明显。",
          "在画面边缘，人物神情被刻得克制，却足够表明失败已成事实。",
          "在画面边缘，背景被处理得安静，使拒绝本身更直接。",
          "在背景中，两人之间的距离没有缩短，反而显得更明显。",
          "在背景中，人物神情被刻得克制，却足够表明失败已成事实。"
        ],
        "style_sentences": [
          "这件作品表现出说服并不总能改写命运。",
          "整体来看，这件作品表现出说服并不总能改写命运。",
          "从构图与气质上看，这件作品表现出说服并不总能改写命运。",
          "它让人想到人际关系中最沉重的部分，往往是无法扭转。",
          "整体来看，它让人想到人际关系中最沉重的部分，往往是无法扭转。",
          "从构图与气质上看，它让人想到人际关系中最沉重的部分，往往是无法扭转。",
          "整体气氛平静、尴尬而略带挫败。",
          "整体来看，整体气氛平静、尴尬而略带挫败。"
        ],
        "scene_phrases": [
          "在对话已经走到尽头的时候",
          "在沉默取代回应的一刻",
          "在所有努力都显得徒劳之际",
          "在聚落外缘",
          "在主体后方的空地上",
          "在远处地形起伏的尽头",
          "在画面左侧延展出去的位置",
          "在画面右侧留白之间"
        ]
      },
      "animal_revenge": {
        "event_nouns": [
          "{animal_name}向{pawn_display}发起反击",
          "{pawn_display}遭到{animal_name}的报复",
          "{animal_name}在受扰后突然扑向{pawn_display}",
          "{animal_name}向{pawn_display}发起反击的情景",
          "{pawn_display}遭到{animal_name}的报复的情景",
          "{animal_name}在受扰后突然扑向{pawn_display}的情景",
          "{animal_name}向{pawn_display}发起反击的场面",
          "{pawn_display}遭到{animal_name}的报复的场面"
        ],
        "main_images": [
          "{animal_name}正向{pawn_display}猛扑过去{scene_fragment}",
          "{pawn_display}在{animal_name}反击时本能后退{scene_fragment}",
          "{animal_name}被激怒后朝{pawn_display}发起攻击{scene_fragment}"
        ],
        "detail_sentences": [
          "动物的动作被刻得极快，使攻击带着本能的暴烈。",
          "{pawn_pronoun}的姿态显得仓促而被动。",
          "背景中的地面线条向后拖曳，增添袭来的速度感。",
          "在画面边缘，动物的动作被刻得极快，使攻击带着本能的暴烈。",
          "在画面边缘，{pawn_pronoun}的姿态显得仓促而被动。",
          "在画面边缘，背景中的地面线条向后拖曳，增添袭来的速度感。",
          "在背景中，动物的动作被刻得极快，使攻击带着本能的暴烈。",
          "在背景中，{pawn_pronoun}的姿态显得仓促而被动。"
        ],
        "style_sentences": [
          "这件作品表现出自然并不总愿意顺从人的靠近。",
          "整体来看，这件作品表现出自然并不总愿意顺从人的靠近。",
          "从构图与气质上看，这件作品表现出自然并不总愿意顺从人的靠近。",
          "它让人想到轻视野性往往会立刻招致代价。",
          "整体来看，它让人想到轻视野性往往会立刻招致代价。",
          "从构图与气质上看，它让人想到轻视野性往往会立刻招致代价。",
          "整体气氛突然、粗暴而充满惊惧。",
          "整体来看，整体气氛突然、粗暴而充满惊惧。"
        ],
        "scene_phrases": [
          "在惊扰的一瞬间",
          "在兽性骤然压过平静的时候",
          "在退避已来不及的一刻",
          "在聚落外缘",
          "在主体后方的空地上",
          "在远处地形起伏的尽头",
          "在画面左侧延展出去的位置",
          "在画面右侧留白之间"
        ]
      }
    },
    "art_grammar_pools": {
      "style_group": [
        "[artextra_clause]，[style_clause]。",
        "[style_clause]，[artconjunction][artextra_clause]。",
        "[style_clause]。",
        "[artextra_clause]。",
        ""
      ],
      "artconjunction": [
        "",
        "作为有趣的对比，",
        "作为对作品的补充，",
        "顺带一提，",
        "惊人的是，",
        "极具挑衅意味的是，",
        "不寻常的是，",
        "虽然很少有人会期待，",
        "除此之外，"
      ],
      "artextra_clause": [
        "画面边缘由[subimageplural]组成",
        "画面的边缘是[subimageplural]",
        "[side_position]有[subimagesingle]",
        "主体身后是[subimageany]",
        "图像的下半部分被[subimageany]支配",
        "这一幕发生在[Community]里",
        "这一幕发生在[Community]附近",
        "这一幕发生在[TerrainFeature]境内的[Community]里",
        "一个[Character][idles][side_position]",
        "一个[pawn_adj][Character][idles][side_position]",
        "[Quantity_adjphrase][Character]出现[side_position]",
        "[Quantity_adjphrase][pawn_adj][Character]出现[side_position]",
        "一只[Animal][idles][side_position]",
        "当你眯着眼看，画面[composition]构图会呈现出[subimageany]的轮廓",
        "一位[pawn_adj][PersonJob][emotional_expression]，注视着一切",
        "一位[pawn_adj][PersonJob]望着一切，[emotional_expression]",
        "一位[pawn_adj][PersonJob]注视着一切",
        "整幅画面由精心布置的[subimageplural]组成",
        "[side_position]的一只[subimagesingle][symbolizes][ConceptAny]"
      ],
      "subimageany": [
        "[subimagesingle]",
        "[subimageplural]"
      ],
      "subimagesingle": [
        "一个[Character]",
        "一片[TerrainFeature]",
        "一个[Community]",
        "一棵[TreeType]",
        "一株[Vegetable]",
        "一[AnimalGroup][Animal]"
      ],
      "subimageplural": [
        "[Quantity_adjphrase][Character]",
        "[Quantity_adjphrase][Vegetable]",
        "[Quantity_adjphrase][Shape]"
      ],
      "pawn_adj": [
        "死掉的",
        "濒死的",
        "受伤的",
        "睡着的",
        "站立的",
        "坐着的",
        "疯了的",
        "年轻的",
        "年老的",
        "浑身是[Gore]的",
        "肮脏的",
        "身穿[Apparel]的",
        "手持[Weapon]的",
        "吃着[Vegetable]的"
      ],
      "emotional_expression": [
        "微笑着",
        "皱着眉头",
        "紧绷着脸",
        "放声大笑",
        "瞪着眼睛",
        "哭泣着",
        "尖叫着",
        "欣喜若狂"
      ],
      "idles": [
        "坐",
        "站",
        "等候",
        "微笑着待",
        "躺",
        "摆着造型",
        "出现",
        "显现",
        "逐渐显现",
        "飘浮"
      ],
      "side_position": [
        "在一边",
        "在背景中",
        "在远处",
        "在画面下方",
        "在画面上方",
        "在主场景左边",
        "在主场景右边",
        "在画面边缘",
        "在主体附近",
        "在距离主体很远的地方",
        "在主体下方",
        "聚焦点之后"
      ],
      "style_clause": [
        "作品[symbolizes][ConceptAny]",
        "作品受到了[ConceptAny]的启发，并用[artstyle_adj]风格呈现",
        "作品充满了浓烈的[artstyle_adj]气息",
        "画面中央的[artstyle_adj]风格与背景部分的[artstyle_adj]风格形成了强烈的对比",
        "作品给人一种[artstyle_adj]气息并使用了[composition]布局",
        "作品整体采用了[composition]构图方法",
        "作品中采用融合了[artstyle_adj]元素的[artstyle_adj]风格",
        "画面似乎通过某种形式表现[ConceptAny]和[ConceptAny]",
        "画面中的[ConceptAny]和[ConceptAny]形成反差",
        "画面采用的[composition]布局与其采用的[artstyle_adj]风格显得格格不入",
        "作品的主色调是[Color]与[Color]",
        "画面中的每个形状看上去都采用了[composition]构图"
      ],
      "symbolizes": [
        "象征着",
        "似乎象征着",
        "描述了",
        "似乎描述了",
        "似乎表达着",
        "令观众回忆起",
        "传达着情感——",
        "让观众想到",
        "象征着艺术家的",
        "暗示着"
      ],
      "depicts": [
        "描绘",
        "展示",
        "刻画",
        "呈现",
        "表现",
        "描述",
        "塑造"
      ],
      "depiction": [
        "描绘",
        "展示",
        "刻画",
        "表现",
        "描述",
        "塑造"
      ],
      "composition": [
        "三角形",
        "矩形",
        "正方形",
        "非平衡",
        "平衡",
        "动态",
        "静态",
        "垂直",
        "水平",
        "聚焦"
      ],
      "artstyle_adj": [
        "非独创性",
        "简约",
        "复杂而写实的",
        "超现实主义",
        "古典主义",
        "现代主义",
        "象征主义",
        "稚嫩但充满魅力的",
        "注重细节的",
        "浓淡不均的",
        "立体派",
        "印象派",
        "表现主义",
        "照片式的",
        "巴洛克式",
        "达达主义",
        "故障艺术",
        "像素化",
        "野兽派",
        "田园派",
        "隐喻派",
        "蜿蜒曲折的",
        "几何风",
        "抽象派",
        "超写实主义",
        "流行艺术",
        "极简主义",
        "新古典主义",
        "朦胧派",
        "后印象派",
        "纯粹主义",
        "洛可可式",
        "罗马式",
        "浪漫主义",
        "涂鸦式",
        "性爱艺术",
        "感性",
        "独创"
      ],
      "r_art_description": [
        "[physical_description_root][context_sentence]",
        "[physical_description_root]"
      ],
      "circumstance_group": [
        "[circumstance_phrase]"
      ],
      "desc_sentence_group": [
        "[desc_sentence][style_group]",
        "[style_group]"
      ],
      "context_sentence": [
        "[depiction]中所引述的故事是发生在[DATE]的[tale_noun]。",
        "这件[depiction]描述了发生在[DATE]的[tale_noun]的故事。",
        "[depiction]记述了发生在[DATE]的关于[tale_noun]的往事。"
      ],
      "ArtDescription_Sculpture": [
        "这件[sculpture][depicts]的是[image]。[desc_sentence_group]",
        "这件[sculpture]向我们[depiction]了[image]。[desc_sentence_group]",
        "在这件[sculpture]上[depiction]了[image]。[desc_sentence_group]",
        "雕塑",
        "作品",
        "艺术品",
        "雕像"
      ],
      "ArtDescription_Furniture": [
        "这件家具上雕刻的内容[depiction]了[image]。[desc_sentence_group]",
        "这件家具上雕刻的内容向我们[depiction]了[image]。[desc_sentence_group]",
        "在这件家具上雕刻的内容[depicts]的是[image]。[desc_sentence_group]"
      ],
      "ArtDescription_WeaponGun": [
        "这件武器雕刻的内容[depiction]了[image]。[desc_sentence_group]",
        "这件武器雕刻的内容向我们[depiction]了[image]。[desc_sentence_group]",
        "在这件武器上雕刻的内容[depicts]的是[image]。[desc_sentence_group]"
      ],
      "ArtDescription_WeaponMelee": [
        "这件武器上雕刻的内容[depiction]了[image]。[desc_sentence_group]",
        "这件武器上雕刻的内容向我们[depiction]了[image]。[desc_sentence_group]",
        "在这件武器上雕刻的内容[depicts]的是[image]。[desc_sentence_group]"
      ],
      "ArtDescription_SarcophagusPlate": [
        "这件棺材上雕刻的内容[depiction]了[image]。[desc_sentence_group]",
        "这件棺材上雕刻的内容向我们[depiction]了[image]。[desc_sentence_group]",
        "这件棺材上雕刻的内容[depiction]了[image]。 [desc_sentence_group]",
        "在这件棺材上雕刻的内容[depicts]的是[image]。[desc_sentence_group]"
      ],
      "taleless_image": [
        "一位孤独的[Character][desc_pawn]",
        "[TerrainFeature]附近一个孤独的[Character][desc_pawn]",
        "[Community]附近一个孤独的[Character][desc_pawn]",
        "被一群[Character]团团包围的[Character][desc_pawn]",
        "[Character]们正在玩[Game]",
        "一个[Character][desc_pawn]，正在和[Quantity_adjphrase][Character]玩[Game]",
        "一个[Character][desc_pawn]，手持[Weapon]",
        "一个[Character][desc_pawn]，正在吃[Vegetable]",
        "[Quantity_adjphrase][PersonJob]和[PersonJob]在吃[Vegetable]",
        "小有名气的[NamePerson][desc_pawn]",
        "一位身着[Apparel]的[Character][desc_pawn]",
        "一个[Community]",
        "一处[TerrainFeature]",
        "一把[Weapon]",
        "一棵[TreeType]",
        "一个[NaturalObject]",
        "[Quantity_adjphrase][Weapon]",
        "[Quantity_adjphrase][Vegetable]",
        "一件空荡荡的[Apparel]",
        "[Shape]",
        "被众多[Shape]环绕的[Shape]",
        "[ConceptAny]的一种抽象呈现",
        "[AdjectiveAny]抽象形状"
      ],
      "taleless_desc_pawn": [
        "",
        "飞过天空",
        "悬浮在空中",
        "向左移动",
        "向右移动",
        "坐在桌子上",
        "在镜子中",
        "的轮廓",
        "穿着[Apparel]骑在[Animal]上",
        "看起来很[AdjectiveAny]",
        "浑身是[Gore]"
      ]
    },
    "art_word_pools": {
      "AdjectiveFriendly": [
        "友善",
        "挚爱",
        "和蔼",
        "友好",
        "有利",
        "亲密",
        "热情",
        "熟识",
        "有益",
        "亲切",
        "和平",
        "包容",
        "同情",
        "宽容",
        "温柔",
        "仁慈",
        "善良",
        "礼貌",
        "同志般",
        "喜爱",
        "愉快",
        "体贴",
        "温和",
        "关怀",
        "随和",
        "谦恭",
        "绅士",
        "引人注目",
        "儒雅",
        "周到",
        "老练",
        "慈祥",
        "恭敬",
        "细心",
        "得体",
        "英勇",
        "溺爱",
        "幽默",
        "风趣",
        "安静",
        "大方",
        "活泼",
        "高大",
        "英俊",
        "美丽",
        "优雅",
        "时尚",
        "能干",
        "勤劳",
        "阳光",
        "团结",
        "坚强",
        "智慧",
        "大度",
        "豁达",
        "开朗",
        "富有",
        "乐观",
        "可爱",
        "热心",
        "友爱",
        "有爱",
        "潇洒",
        "端庄",
        "优秀",
        "干练",
        "强力",
        "可靠",
        "勇敢",
        "无畏",
        "果断",
        "冷静",
        "机智",
        "忠实",
        "稳健",
        "神勇",
        "节俭",
        "精明",
        "宠溺",
        "坦率"
      ],
      "AdjectiveAngsty": [
        "悲伤",
        "绝望",
        "沮丧",
        "空虚",
        "孤独",
        "疏远",
        "沉思",
        "警觉",
        "孤单",
        "孤立",
        "沉默",
        "超然",
        "寂寞",
        "平静",
        "荒凉",
        "毁灭",
        "毁坏",
        "无力",
        "挫败",
        "麻木",
        "渴望",
        "诱人",
        "贫穷",
        "感恩",
        "坚强",
        "无助",
        "稀缺",
        "饥饿"
      ],
      "AdjectiveBadass": [
        "邪恶",
        "致命",
        "深渊",
        "恶毒",
        "暴虐",
        "顽固",
        "横行",
        "兽性",
        "血腥",
        "无情",
        "鬼面",
        "毁灭",
        "躁狂",
        "疯狂",
        "野性",
        "燃烧",
        "凶狠",
        "恐怖",
        "恐惧",
        "烟熏",
        "疯癫",
        "嗜杀",
        "阴暗",
        "狂怒",
        "愤怒",
        "野蛮",
        "冷酷",
        "冷漠",
        "无畏",
        "可怕",
        "极恶",
        "卑鄙",
        "无敌",
        "超强",
        "伪善",
        "尖酸",
        "刻薄",
        "暴食",
        "色欲",
        "贪婪",
        "暴怒",
        "怠懒",
        "傲慢",
        "自负",
        "嫉妒",
        "懒惰",
        "龌龊",
        "虚伪",
        "狡诈",
        "拾荒",
        "食腐",
        "自私",
        "蛮横",
        "任性",
        "奸诈",
        "阴险",
        "狂野",
        "无耻",
        "残忍",
        "庸俗",
        "骄横",
        "自满",
        "愚蠢",
        "凶残",
        "末日",
        "末世",
        "霸道",
        "石心",
        "失心",
        "弑神",
        "灭世",
        "终结",
        "下流",
        "凶恶",
        "嗜血",
        "亡命",
        "专横",
        "丑陋",
        "粗心",
        "堕落"
      ],
      "AdjectiveAny": [
        "巨大",
        "自然",
        "安闲",
        "渴求",
        "活跃",
        "最大",
        "简单",
        "真正",
        "纯粹",
        "令人激动",
        "奇特",
        "通用",
        "无限",
        "大量",
        "值得称赞",
        "无穷",
        "神秘",
        "精致",
        "精妙",
        "粗糙",
        "光滑",
        "大",
        "粗糙",
        "高",
        "锋利",
        "崎岖",
        "自由",
        "主要",
        "小",
        "老",
        "圆形",
        "奇异",
        "睿智",
        "冰冷",
        "坏",
        "好",
        "遥远",
        "死亡",
        "坚韧"
      ],
      "AdjectiveLarge": [
        "大型",
        "巨大",
        "庞大",
        "庞然",
        "巨型",
        "广阔",
        "宏伟",
        "宏大",
        "恢弘",
        "巨无霸",
        "壮阔",
        "瞩目",
        "广大",
        "超大",
        "高大",
        "嵯峨",
        "特大",
        "磅礴",
        "浩大",
        "硕大",
        "巨擎"
      ],
      "Color": [
        "红",
        "橙",
        "黄",
        "绿",
        "青",
        "蓝",
        "紫",
        "黑",
        "白",
        "灰",
        "褐",
        "金",
        "银",
        "赤",
        "玄",
        "粉",
        "茶",
        "肉",
        "棕",
        "米"
      ],
      "PersonJob": [
        "农民",
        "村民",
        "磨坊主",
        "工匠",
        "酿酒师",
        "织布工",
        "厨子",
        "流浪汉",
        "城镇守卫",
        "城镇议员",
        "面包师",
        "裁缝",
        "长者",
        "枪匠",
        "铁匠",
        "农夫",
        "建筑工",
        "木匠",
        "商人",
        "镇民",
        "磨房主",
        "酿造师",
        "农场主",
        "造箭工",
        "盖屋匠",
        "织工",
        "渔夫",
        "矿工",
        "牧民",
        "捕鱼人",
        "猎人",
        "工人",
        "护林人",
        "建设者",
        "伐木工",
        "外科医生",
        "医生",
        "探险家",
        "冒险家",
        "酒鬼",
        "牧师",
        "僧侣",
        "走私者",
        "喜剧演员",
        "教师",
        "杂技演员",
        "小丑",
        "演员",
        "艺术家",
        "拳击手",
        "化学家",
        "舞蹈家",
        "预言家",
        "园丁",
        "女仆",
        "催眠师",
        "珠宝商",
        "诗人",
        "牛仔",
        "歌手",
        "哲学家",
        "枪手",
        "治安官",
        "枪械师",
        "观光客",
        "酒徒",
        "作家",
        "著作家",
        "政客",
        "警察",
        "教士",
        "走私犯",
        "史学家",
        "家庭主妇",
        "教授",
        "会计",
        "秘书",
        "宇航员",
        "犯罪学者",
        "牙科医生",
        "外交官",
        "盗贼",
        "飞行员",
        "观察者",
        "嬉皮士",
        "馆长",
        "学生",
        "硕士",
        "丑角",
        "步兵",
        "星球拯救者",
        "酒侍",
        "厨师",
        "电工",
        "律师",
        "翻译",
        "心理学家",
        "宣传员",
        "护士",
        "护卫",
        "保镖",
        "草药师",
        "文学家",
        "建筑师",
        "服务生",
        "清洁工",
        "搬运工",
        "旅行商人",
        "商会代表",
        "远行队长",
        "商业理事",
        "老板",
        "助理",
        "雕刻家",
        "记者",
        "战地记者",
        "编辑",
        "播音员",
        "主持人",
        "说唱歌手"
      ],
      "TerrainFeature": [
        "平原",
        "阔地",
        "草地",
        "高原",
        "大草原",
        "沙漠",
        "旷野",
        "森林",
        "仙人掌",
        "树",
        "草丛",
        "灌木丛",
        "荆棘",
        "圆石",
        "石块",
        "矿井",
        "石头",
        "山丘",
        "丘陵",
        "平顶山",
        "悬崖",
        "断崖",
        "峭壁",
        "山脊",
        "山谷",
        "峡谷",
        "深渊",
        "绿洲",
        "绿原",
        "山洞",
        "河",
        "小溪",
        "溪流",
        "支流",
        "河流",
        "三角洲",
        "水湾",
        "回音湾",
        "小峡谷",
        "湖畔",
        "海洋",
        "池塘",
        "水池",
        "泻湖",
        "深坑",
        "沼泽",
        "焦油坑",
        "泥潭",
        "大河",
        "巨河",
        "遗迹",
        "荒原",
        "冻原",
        "冻土",
        "矿山"
      ],
      "Enemy": [
        "土匪",
        "罪犯",
        "掠夺者",
        "歹徒",
        "海盗",
        "强盗",
        "劫匪",
        "骗子",
        "流氓",
        "窃贼",
        "抢劫犯",
        "恐怖分子",
        "野蛮人",
        "食人族",
        "魔鬼",
        "恶魔",
        "野兽",
        "怪物",
        "吸血鬼",
        "魔王",
        "哥布林",
        "地精",
        "龙",
        "帝国士兵",
        "叛乱者",
        "邪恶法师",
        "丧尸",
        "兵痞",
        "刽子手",
        "星际海盗",
        "狼人",
        "终结者",
        "美杜莎",
        "巨魔",
        "暗精灵",
        "堕天使",
        "地狱猎犬",
        "受诅咒者",
        "炎魔",
        "兽人",
        "半兽人",
        "亡灵",
        "投毒者",
        "乞丐",
        "变态",
        "死囚",
        "奴隶",
        "奴隶士兵",
        "死灵法师",
        "邪恶萨满",
        "政客",
        "阴影",
        "黑影",
        "黑衣人",
        "忍者",
        "刺客",
        "抱着娃娃的女孩",
        "疫病之子",
        "手持凶器的孩子",
        "异教徒",
        "异乡人",
        "异族人",
        "外星人",
        "半精灵",
        "屠夫",
        "间谍",
        "审讯官",
        "打手",
        "混蛋",
        "暴露狂",
        "蒙面人",
        "裸女",
        "裸男",
        "魅魔",
        "独眼怪",
        "器官牲畜",
        "养殖人",
        "小恶魔",
        "惩戒者",
        "十字军",
        "变异人",
        "新人类",
        "死婴",
        "审判者",
        "骷髅"
      ],
      "Game": [
        "扑克",
        "象棋",
        "卡片",
        "双陆棋",
        "色子",
        "双骰",
        "转盘",
        "黑杰克",
        "马蹄钉",
        "台球",
        "斯诺克",
        "围棋",
        "飞行棋",
        "军旗",
        "五子棋",
        "跳棋",
        "战棋",
        "中国象棋",
        "国际象棋",
        "斗兽棋",
        "部落斗兽棋",
        "将棋",
        "黑白棋",
        "连珠棋",
        "蛇梯棋",
        "夹食棋",
        "八卦棋",
        "六贯棋",
        "十字棋",
        "圈叉棋",
        "三友棋",
        "赛尼特棋",
        "皇家博弈棋",
        "凯尔特板棋",
        "斯卡特牌",
        "纳普牌",
        "法罗牌",
        "花札",
        "歌牌",
        "麻将",
        "闪耀世界麻将",
        "桥牌",
        "长牌",
        "牌九",
        "天九牌",
        "扎金花",
        "梭哈",
        "斗地主",
        "棒球扑克",
        "加勒比扑克",
        "德州扑克",
        "奥马哈扑克",
        "索菲亚蒙达扑克",
        "足球",
        "篮球",
        "街头篮球",
        "排球",
        "乒乓球",
        "羽毛球",
        "网球",
        "棒球",
        "垒球",
        "高尔夫球",
        "保龄球",
        "曲棍球",
        "冰球",
        "槌球",
        "板球",
        "板网球",
        "板羽球",
        "橄榄球",
        "沙滩排球",
        "沙滩足球",
        "弹力球",
        "弹珠",
        "躲避球",
        "门球",
        "多米诺骨牌",
        "塔罗牌占卜",
        "轮盘赌",
        "桌上足球",
        "老虎机",
        "悠悠球",
        "华容道",
        "积木",
        "拼图",
        "魔方",
        "跳绳",
        "投壶",
        "踢毽子",
        "抽陀螺",
        "投石圈",
        "绕口令",
        "猜字谜",
        "跳房子",
        "捉迷藏",
        "滚铁环",
        "七巧板",
        "跳皮筋",
        "跳山羊",
        "丢手绢",
        "掷飞镖",
        "放风筝",
        "丢沙包",
        "踩高跷",
        "翻花绳",
        "猜拳",
        "折纸",
        "剪纸",
        "斗蛐蛐",
        "尼人杀",
        "大富翁",
        "巨型蜘蛛纸牌",
        "Ribaorld",
        "你的世界",
        "边缘争霸",
        "空投与砍杀",
        "骠骑精英：帝国攻势",
        "边缘人生",
        "边缘奇侠传"
      ],
      "Weapon": [
        "小刀",
        "刀片",
        "长鞭",
        "锯齿剑",
        "矛",
        "棍",
        "指虎",
        "毒刃",
        "匕首",
        "臂铠",
        "剑",
        "剃刀",
        "弯刀",
        "西洋剑",
        "马刀",
        "斧",
        "战斧",
        "铁锤",
        "短斧",
        "大槌",
        "钐刀",
        "拳",
        "拳套",
        "短剑",
        "腰刀",
        "军刀",
        "十字剑",
        "大剑",
        "镰刀",
        "长矛",
        "长枪",
        "狼牙棒",
        "飞镖",
        "箭",
        "枪",
        "弩",
        "手枪",
        "步枪",
        "大炮",
        "猎枪",
        "炸弹",
        "核武器",
        "导弹",
        "火箭",
        "地雷",
        "刀锋",
        "剑刃",
        "锯刃",
        "手套",
        "长剑",
        "战锤",
        "骨锤",
        "流星",
        "太刀",
        "重机枪",
        "速射炮",
        "火箭弹",
        "尖刀",
        "箭矢",
        "长戟",
        "权杖",
        "十字弓",
        "霰弹枪",
        "核弹",
        "飞刀",
        "砍刀",
        "神箭",
        "铁索",
        "锁链",
        "激光"
      ],
      "Animal": [
        "雪牛",
        "爆炸鼠",
        "大地懒",
        "眼镜蛇",
        "鹿",
        "野猪",
        "松鼠",
        "鬣蜥",
        "穿山甲",
        "绵羊",
        "土豚",
        "短吻鳄",
        "羊驼",
        "蚂蚁",
        "食蚁兽",
        "羚羊",
        "猿",
        "犰狳",
        "驴",
        "狒狒",
        "獾",
        "梭鱼",
        "蝙蝠",
        "熊",
        "海狸",
        "蜜蜂",
        "野牛",
        "水牛",
        "骆驼",
        "驯鹿",
        "猫",
        "毛毛虫",
        "猎豹",
        "鸡",
        "黑猩猩",
        "龙猫",
        "文蛤",
        "蟑螂",
        "鳕鱼",
        "秃鹫",
        "土狼",
        "螃蟹",
        "鹤",
        "鳄鱼",
        "乌鸦",
        "恐龙",
        "狗",
        "海豚",
        "鸽子",
        "鹰",
        "针鼹",
        "鳗鱼",
        "象",
        "象海豹",
        "麋鹿",
        "鸸鹋",
        "猎鹰",
        "雪貂",
        "雀",
        "火烈鸟",
        "狐狸",
        "青蛙",
        "瞪羚",
        "沙鼠",
        "熊猫",
        "长颈鹿",
        "蠓蚋",
        "山羊",
        "鹅",
        "大猩猩",
        "苍鹰",
        "蚱蜢",
        "松鸡",
        "天竺鼠",
        "仓鼠",
        "野兔",
        "隼",
        "刺猬",
        "苍鹭",
        "鲱鱼",
        "河马",
        "大黄蜂",
        "马",
        "人类",
        "蜂鸟",
        "鬣狗",
        "朱鹭",
        "豺狗",
        "美洲豹",
        "松鸦",
        "冠蓝鸦",
        "袋鼠",
        "树袋熊",
        "科莫多巨蜥",
        "狐猴",
        "花豹",
        "狮子",
        "美洲驼",
        "龙虾",
        "蝗虫",
        "琴鸟",
        "喜鹊",
        "绿头鸭",
        "鸭子",
        "海牛",
        "山魈",
        "螳螂",
        "猫鼬",
        "貂",
        "鼹鼠",
        "獴",
        "猴子",
        "驼鹿",
        "鼠",
        "蚊子",
        "骡子",
        "独角鲸",
        "蝾螈",
        "章鱼",
        "㺢㹢狓"
      ],
      "Character": [
        "农民",
        "村民",
        "磨坊主",
        "铁匠",
        "酿酒师",
        "织布工",
        "厨子",
        "乞丐",
        "市民",
        "镇守卫",
        "镇医院",
        "面包师",
        "裁缝",
        "长者",
        "造枪师",
        "锻工",
        "屠夫",
        "打谷者",
        "建筑师",
        "木匠",
        "商人",
        "外科医生",
        "医生",
        "探索者",
        "冒险者",
        "酒鬼",
        "牧师",
        "传教士",
        "走私犯",
        "喜剧演员",
        "家庭主妇",
        "教师",
        "杂技演员",
        "小丑",
        "演员",
        "艺术家",
        "拳击手",
        "化学家",
        "舞者",
        "算命师",
        "园艺家",
        "女仆",
        "催眠师",
        "珠宝匠",
        "诗人",
        "牛仔",
        "歌手",
        "哲学家",
        "枪手",
        "警探",
        "考古学家",
        "黑客",
        "行星学家",
        "政治家",
        "历史学家",
        "秘书",
        "作家",
        "工程师",
        "牙医",
        "律师",
        "酋长",
        "战士",
        "弓手",
        "巫医",
        "萨满"
      ],
      "ConceptAny": [
        "希望",
        "慈悲",
        "力量",
        "奋进",
        "和睦",
        "忠诚",
        "享乐",
        "喜悦",
        "富足",
        "成长",
        "幸福",
        "团聚",
        "无私",
        "友爱",
        "互助",
        "友谊",
        "友善",
        "团结",
        "怜悯",
        "幸运",
        "忍耐",
        "同情",
        "正直",
        "仁慈",
        "美德",
        "宽容",
        "优雅",
        "安全",
        "友情",
        "自由",
        "平等",
        "博爱",
        "爱",
        "谦逊",
        "谦虚",
        "大度",
        "善良",
        "勤劳",
        "诚信",
        "信任",
        "豁达",
        "朴实",
        "尊敬",
        "自尊",
        "亲密",
        "关怀",
        "挚爱",
        "仁义",
        "信义",
        "义气",
        "大义",
        "忠义",
        "理解",
        "包容",
        "自爱",
        "勇敢",
        "坚定",
        "韧性",
        "坚韧",
        "果断",
        "体贴",
        "冷静",
        "机智",
        "敏锐",
        "专注",
        "乐观",
        "开朗",
        "悲伤",
        "绝望",
        "失落",
        "沮丧",
        "空虚",
        "孤独",
        "灰心",
        "茫然",
        "忧虑",
        "沉思",
        "孤僻",
        "孤立",
        "自卑",
        "沉默",
        "自闭",
        "超然",
        "孤寂",
        "平静",
        "腐烂",
        "荒凉",
        "毁灭",
        "蹂躏",
        "枯竭",
        "挫败",
        "失败",
        "灾变",
        "死亡",
        "贫穷",
        "欲望",
        "诱人",
        "罪过",
        "苦难",
        "无助",
        "稀缺",
        "饥饿",
        "渴望",
        "困惑",
        "抗争",
        "痛苦",
        "悲痛",
        "迷失",
        "压抑",
        "虚无",
        "焦躁",
        "孤苦",
        "无力",
        "腐朽",
        "荒废",
        "疼痛",
        "挑战",
        "疲惫",
        "耗尽",
        "麻烦",
        "灾难",
        "需求",
        "饥荒",
        "困难",
        "荒芜",
        "残破",
        "凋敝",
        "破败",
        "悲苦",
        "沉寂",
        "磨难",
        "胜利",
        "谋杀",
        "刺杀",
        "权利",
        "神弃",
        "弑神",
        "凯旋",
        "血液",
        "金钱",
        "复仇",
        "仇恨",
        "挣扎",
        "狂热",
        "邪恶",
        "杀戮",
        "折磨",
        "厮杀",
        "迫害",
        "鞭挞",
        "残暴",
        "镇压",
        "残忍",
        "恐惧",
        "恐怖",
        "混沌",
        "动乱",
        "动荡",
        "混乱",
        "战斗",
        "暴力",
        "战争",
        "血腥",
        "戾气",
        "冲突",
        "斗争",
        "渎神",
        "博学",
        "崩溃",
        "狂怒",
        "病态",
        "负伤",
        "残酷",
        "飙血"
      ],
      "TreeType": [
        "橡树",
        "杨树",
        "松树",
        "桦树",
        "柚木树",
        "天蚕树",
        "棕榈树",
        "竹子",
        "树木废墟",
        "白杨树",
        "山毛榉",
        "白桦树",
        "樱桃树",
        "栗树",
        "三角叶杨",
        "榆树",
        "冷杉树",
        "铁杉树",
        "山核桃树",
        "落叶松",
        "枫树",
        "雪松",
        "云杉树",
        "核桃树",
        "柳树"
      ],
      "NaturalObject": [
        "岩石",
        "石头",
        "漂砾",
        "树",
        "灌木",
        "池塘",
        "水塘",
        "湖",
        "丘陵",
        "洞穴",
        "树桩",
        "贝壳",
        "羽毛",
        "种子",
        "树干",
        "水果",
        "针刺",
        "甲虫",
        "小虫",
        "蹄",
        "爪",
        "尾巴",
        "皮",
        "角",
        "牙",
        "翅膀",
        "树林"
      ],
      "Community": [
        "村",
        "镇",
        "县",
        "社区",
        "新区",
        "城",
        "前哨基地",
        "领",
        "营地",
        "乡",
        "要塞",
        "郡",
        "城堡",
        "补给站",
        "贸易站",
        "关隘",
        "府",
        "堡",
        "驿",
        "寨",
        "寮",
        "庄",
        "邑",
        "甸"
      ],
      "Mechanoid": [
        "机械飞螳",
        "机械静螳",
        "机械蜈蚣",
        "机械蝎蝽",
        "机械白蚁",
        "机械盾卫",
        "机械哨卫",
        "机械炽蚕",
        "机械炬瞳",
        "百机长",
        "机械族",
        "机器人",
        "人形",
        "无人机",
        "战斗无人机",
        "服务机器人",
        "工作机器人",
        "性爱机器人",
        "守卫机器人",
        "AI虚拟形象",
        "超凡智能投影",
        "仿生人",
        "机械人",
        "终结者",
        "机械人形",
        "战斗人形",
        "机械女仆",
        "机仆",
        "铁心灭绝者",
        "失控机仆"
      ],
      "Gore": [
        "血液",
        "淤血",
        "器官",
        "脏器",
        "内脏",
        "大肠",
        "肠子",
        "血",
        "污血",
        "血迹",
        "鲜血",
        "粘液",
        "液体",
        "不明液体",
        "脑浆",
        "碎肉",
        "泥浆",
        "脏污",
        "机械液",
        "冷却液",
        "油污",
        "碎肉块",
        "肉屑"
      ],
      "Apparel": [
        "帽子",
        "衬衫",
        "夹克",
        "大礼帽",
        "雨衣",
        "护裆",
        "腰带",
        "领带",
        "正装",
        "太空服",
        "晚礼服",
        "风雪大衣",
        "防尘大衣",
        "鞋",
        "裤子",
        "海军装甲套装",
        "吊带裤",
        "领结",
        "礼帽",
        "棒球帽",
        "御寒帽",
        "商务衬衫",
        "丝袜",
        "过膝袜",
        "长筒袜",
        "超短裙",
        "水手服",
        "角裤",
        "风衣",
        "罩衫",
        "装甲",
        "格子衫",
        "比基尼",
        "连帽服",
        "滑板鞋",
        "防弹夹克",
        "部落装",
        "部落头饰",
        "防弹裤",
        "打底裤",
        "小礼帽",
        "遮阳帽",
        "发卡",
        "发带",
        "头结",
        "钢盔",
        "简易头盔",
        "护目镜",
        "披风",
        "护肩",
        "内衣",
        "内裤",
        "连衣裙",
        "长裙",
        "百褶裙",
        "牛仔裤",
        "紧身衣",
        "手套",
        "长手套",
        "丝质手套",
        "棉手套",
        "毛皮手套",
        "裙裤",
        "皮鞋",
        "凉鞋",
        "拖鞋",
        "棉鞋",
        "高跟鞋",
        "雨鞋",
        "长筒靴",
        "短靴",
        "草鞋",
        "舞鞋",
        "线衣",
        "卫衣",
        "军装",
        "外骨骼",
        "运动衣",
        "运动鞋",
        "军用手套"
      ],
      "Vegetable": [
        "胡萝卜",
        "洋葱",
        "萝卜",
        "葫芦",
        "南瓜",
        "西兰花",
        "甜椒",
        "辣椒",
        "蘑菇",
        "豌豆",
        "洋蓟",
        "茄子",
        "扁豆",
        "白菜",
        "甜菜",
        "玉米",
        "白薯",
        "西葫芦",
        "土豆",
        "西瓜",
        "莴苣",
        "黄瓜",
        "冬瓜",
        "番茄",
        "卷心菜",
        "秋葵",
        "芸豆",
        "莲藕",
        "雪甜菜",
        "橄榄",
        "草莓",
        "苹果",
        "香蕉",
        "桔子",
        "梨",
        "菠萝",
        "桃子",
        "葡萄",
        "石榴",
        "芒果",
        "醋栗",
        "云莓",
        "樱桃",
        "无花果",
        "海枣",
        "椰子",
        "火龙果",
        "龙舌兰",
        "被咬了一口的苹果",
        "毒薯"
      ],
      "friendlyverb": [
        "在笑",
        "在微笑",
        "在轻笑",
        "在咧嘴笑",
        "在欢笑",
        "在休息",
        "看上去很快乐",
        "看上去很开心",
        "看上去很高兴"
      ],
      "Shape": [
        "形状",
        "图形",
        "轮廓",
        "抽象形体"
      ],
      "Quantity_adjphrase": [
        "几位",
        "数位",
        "一些",
        "数个"
      ],
      "quantity_adjphrase": [
        "几位",
        "数位",
        "一些",
        "数个"
      ]
    }
  }
};
