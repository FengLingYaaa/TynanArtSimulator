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
          "suggestion_type": "construction_object_name"
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
    },
    {
      "defName": "CompletedLongCraftingProject",
      "id": "finished_crafting",
      "label": "完成长时间的制作项目",
      "category": "创作与成果",
      "required_slots": [
        {
          "key": "crafter",
          "label": "制作者",
          "slot_type": "role",
          "suggestion_type": "person_name"
        },
        {
          "key": "object",
          "label": "对象名",
          "slot_type": "object",
          "suggestion_type": "craft_object_name"
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
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "棺材"
      ],
      "simple_fields": [
        "crafter",
        "object",
        "date_text"
      ],
      "complete_fields": [
        "crafter",
        "object",
        "date_text",
        "material",
        "scene_hint",
        "detail_hint",
        "style_hint",
        "include_detail",
        "include_style",
        "include_context"
      ]
    },
    {
      "defName": "GainedMasterSkillWithPassion",
      "id": "skill_mastery_passion",
      "label": "热衷的技能精通",
      "category": "创作与成果",
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
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "棺材"
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
      ]
    },
    {
      "defName": "CaravanMeeting",
      "id": "caravan_meeting",
      "label": "远行队相遇",
      "category": "旅途与迁移",
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
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "棺材"
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
      ]
    },
    {
      "defName": "CaravanDemand",
      "id": "caravan_demand",
      "label": "远行队被勒索",
      "category": "战斗与冲突",
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
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "棺材"
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
      ]
    },
    {
      "defName": "CaravanAmbushedByManhunter",
      "id": "caravan_ambush_manhunter",
      "label": "远行队遭遇动物猎杀人类",
      "category": "战斗与冲突",
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
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "棺材"
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
      ]
    },
    {
      "defName": "CaravanRemoteMining",
      "id": "caravan_remote_mining",
      "label": "远行队野外开采",
      "category": "旅途与迁移",
      "required_slots": [
        {
          "key": "pawn",
          "label": "远行者",
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
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "棺材"
      ],
      "simple_fields": [
        "pawn",
        "material",
        "date_text"
      ],
      "complete_fields": [
        "pawn",
        "material",
        "date_text",
        "scene_hint",
        "detail_hint",
        "style_hint",
        "include_detail",
        "include_style",
        "include_context"
      ]
    },
    {
      "defName": "CaravanAmbushDefeated",
      "id": "caravan_ambush_defeated",
      "label": "远行队战胜伏击",
      "category": "战斗与冲突",
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
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "棺材"
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
      ]
    },
    {
      "defName": "CaravanAssaultSuccessful",
      "id": "caravan_assault_success",
      "label": "远行队战斗胜利",
      "category": "战斗与冲突",
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
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "棺材"
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
      ]
    },
    {
      "defName": "CaravanFled",
      "id": "caravan_fled",
      "label": "远行队撤退",
      "category": "战斗与冲突",
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
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "棺材"
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
      ]
    },
    {
      "defName": "Raid",
      "id": "raid",
      "label": "袭击",
      "category": "战斗与冲突",
      "required_slots": [
        {
          "key": "pawn",
          "label": "防守者",
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
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "棺材"
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
      ]
    },
    {
      "defName": "StruckMineable",
      "id": "struck_mineable",
      "label": "采矿",
      "category": "创作与成果",
      "required_slots": [
        {
          "key": "pawn",
          "label": "矿工",
          "slot_type": "role",
          "suggestion_type": "person_name"
        },
        {
          "key": "object",
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
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "棺材"
      ],
      "simple_fields": [
        "pawn",
        "object",
        "date_text"
      ],
      "complete_fields": [
        "pawn",
        "object",
        "date_text",
        "scene_hint",
        "detail_hint",
        "style_hint",
        "include_detail",
        "include_style",
        "include_context"
      ]
    },
    {
      "defName": "VacuumExposureRevealed",
      "id": "vacuum_exposure",
      "label": "暴露于真空",
      "category": "生存与状态",
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
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "棺材"
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
      ]
    },
    {
      "defName": "OrbitalDebris",
      "id": "orbital_debris",
      "label": "轨道碎片",
      "category": "天象与灾害",
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
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "棺材"
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
      ]
    },
    {
      "defName": "StudiedEntity",
      "id": "studied_entity",
      "label": "调查了实体",
      "category": "心灵与仪式",
      "required_slots": [
        {
          "key": "studier",
          "label": "调查者",
          "slot_type": "role",
          "suggestion_type": "person_name"
        },
        {
          "key": "entity",
          "label": "实体",
          "slot_type": "object",
          "suggestion_type": "entity_name"
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
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "棺材"
      ],
      "simple_fields": [
        "studier",
        "entity",
        "date_text"
      ],
      "complete_fields": [
        "studier",
        "entity",
        "date_text",
        "scene_hint",
        "detail_hint",
        "style_hint",
        "include_detail",
        "include_style",
        "include_context"
      ]
    },
    {
      "defName": "DeathPall",
      "id": "death_pall",
      "label": "死灵迷雾",
      "category": "天象与灾害",
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
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "棺材"
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
      ]
    },
    {
      "defName": "UnnaturalDarkness",
      "id": "unnatural_darkness",
      "label": "异常黑暗",
      "category": "天象与灾害",
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
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "棺材"
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
      ]
    },
    {
      "defName": "ClosedTheVoid",
      "id": "closed_void",
      "label": "已关闭虚空节点",
      "category": "心灵与仪式",
      "required_slots": [
        {
          "key": "pawn",
          "label": "执行者",
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
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "棺材"
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
      ]
    },
    {
      "defName": "EmbracedTheVoid",
      "id": "embraced_void",
      "label": "拥抱虚空",
      "category": "心灵与仪式",
      "required_slots": [
        {
          "key": "pawn",
          "label": "主角",
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
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "棺材"
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
      ]
    },
    {
      "defName": "PerformedPsychicRitual",
      "id": "performed_psychic_ritual",
      "label": "举行心灵仪式",
      "category": "心灵与仪式",
      "required_slots": [
        {
          "key": "pawn",
          "label": "主持者",
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
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "棺材"
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
      ]
    },
    {
      "defName": "AttendedConcert",
      "id": "attended_concert",
      "label": "参加音乐会",
      "category": "生活与娱乐",
      "required_slots": [
        {
          "key": "organizer",
          "label": "表演者",
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
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "棺材"
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
      ]
    },
    {
      "defName": "HeldConcert",
      "id": "held_concert",
      "label": "举办音乐会",
      "category": "生活与娱乐",
      "required_slots": [
        {
          "key": "organizer",
          "label": "举办者",
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
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "棺材"
      ],
      "simple_fields": [
        "organizer",
        "date_text"
      ],
      "complete_fields": [
        "organizer",
        "date_text",
        "scene_hint",
        "detail_hint",
        "style_hint",
        "include_detail",
        "include_style",
        "include_context"
      ]
    },
    {
      "defName": "NoxiousHaze",
      "id": "noxious_haze",
      "label": "酸雾",
      "category": "天象与灾害",
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
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "棺材"
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
      ]
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
      "小雕塑",
      "大雕塑",
      "宏伟雕塑",
      "扶手椅",
      "餐椅",
      "棺材",
      "左轮手枪"
    ],
    "object_name": [
      "墙",
      "栅栏",
      "书柜",
      "小书柜",
      "坟墓",
      "棺材",
      "艺创台"
    ],
    "project_name": [
      "微电子基础",
      "电荷弹",
      "电力",
      "星际航行基础",
      "仿生学",
      "简易假体",
      "深钻井"
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
      "阿尔法敲击兽",
      "野猪",
      "森林狼",
      "乳齿象",
      "驯鹿",
      "大熊猫"
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
      "格斗",
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
      "台球桌",
      "象棋桌",
      "扑克桌",
      "皇家博弈棋",
      "投石圈",
      "马蹄钉"
    ],
    "illness_name": [
      "流感",
      "疟疾",
      "瘟疫",
      "食物中毒",
      "感染",
      "感官纳米机械感染"
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
    ],
    "entity_name": [
      "虚空节点",
      "虚空结构",
      "虚空巨石",
      "扭曲方尖碑",
      "腐化方尖碑",
      "畸变方尖碑",
      "夜光柱",
      "电子阻滞器",
      "收容平台",
      "收容点",
      "灰盒",
      "灰色雕塑",
      "无底深坑",
      "蹒趚怪",
      "食尸鬼",
      "金属怪形",
      "血棘巨人",
      "吞噬兽",
      "嵌合兽",
      "血肉核心",
      "苦痛之球",
      "夜魇",
      "幽魂",
      "隐形魔",
      "恶臭瘤兽",
      "惊惧母兽",
      "独爪兽",
      "双爪兽",
      "三爪兽",
      "扭曲超凡支柱",
      "虚空金属块",
      "虚空金属墙",
      "潜近探测器",
      "碎片阻滞器",
      "狂热诱发器",
      "睡眠抑制器",
      "大气升温器"
    ],
    "construction_object_name": [
      "墙",
      "栅栏",
      "单人床",
      "双人床",
      "餐椅",
      "扶手椅",
      "书柜",
      "小书柜",
      "床头柜",
      "矮柜",
      "艺创台",
      "基础研究台",
      "高级研究台",
      "精密装配台",
      "药物实验台",
      "电熔炼器",
      "深钻井",
      "工具柜",
      "棺材",
      "轨道交易信标"
    ],
    "craft_object_name": [
      "左轮手枪",
      "单分子剑",
      "长剑",
      "等离子剑",
      "宙斯锤",
      "电荷步枪",
      "重型冲锋枪",
      "防弹背心",
      "零部件",
      "高级零部件",
      "海军装甲",
      "斥候装甲"
    ]
  },
  "TEXT_TEMPLATES": {
    "carrier_openers": {
      "雕塑": [
        "这件[sculpture][depicts]的是[image]。[desc_sentence_group]",
        "这件[sculpture]向我们[depiction]了[image]。[desc_sentence_group]",
        "在这件[sculpture]上[depiction]了[image]。[desc_sentence_group]"
      ],
      "家具": [
        "这件家具上雕刻的内容[depiction]了[image]。[desc_sentence_group]",
        "这件家具上雕刻的内容向我们[depiction]了[image]。[desc_sentence_group]",
        "在这件家具上雕刻的内容[depicts]的是[image]。[desc_sentence_group]"
      ],
      "近战武器": [
        "这件武器上雕刻的内容[depiction]了[image]。[desc_sentence_group]",
        "这件武器上雕刻的内容向我们[depiction]了[image]。[desc_sentence_group]",
        "在这件武器上雕刻的内容[depicts]的是[image]。[desc_sentence_group]"
      ],
      "远程武器": [
        "这件武器雕刻的内容[depiction]了[image]。[desc_sentence_group]",
        "这件武器雕刻的内容向我们[depiction]了[image]。[desc_sentence_group]",
        "在这件武器上雕刻的内容[depicts]的是[image]。[desc_sentence_group]"
      ],
      "棺材": [
        "这件棺材上雕刻的内容[depiction]了[image]。[desc_sentence_group]",
        "这件棺材上雕刻的内容向我们[depiction]了[image]。[desc_sentence_group]",
        "这件棺材上雕刻的内容[depiction]了[image]。 [desc_sentence_group]",
        "在这件棺材上雕刻的内容[depicts]的是[image]。[desc_sentence_group]"
      ]
    },
    "context_sentences": [
      "[depiction]中所引述的故事是发生在[DATE]的[tale_noun]。",
      "这件[depiction]描述了发生在[DATE]的[tale_noun]的故事。",
      "[depiction]记述了发生在[DATE]的关于[tale_noun]的往事。"
    ],
    "title_sentences": [
      "{maker_nameDef}给{thing_definite}起了以下的标题：{thing_title}",
      "{thing_definite}上被纹章装饰着的标题：{thing_title}",
      "{thing_definite}的标题，{thing_title}，悬在背景中"
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
          "{maker_nameDef}制作{thing_indefinite}的时光"
        ],
        "main_images": [
          "{maker_nameFull}正[circumstance_group]制作{thing_indefinite}。[quality_sentence]。[title_sentence]",
          "{maker_nameFull}正[circumstance_group]完成{maker_possessive}{thing_indefinite}的工作。[quality_sentence]。[title_sentence]",
          "{maker_nameFull}正[circumstance_group]致力于完成{thing_indefinite}。[quality_sentence]。[title_sentence]",
          "{maker_nameFull}正[circumstance_group]做{thing_indefinite}。[quality_sentence]。[title_sentence]"
        ],
        "detail_sentences": [
          "有一些工具散落在周围。",
          "{maker_pronoun}在工作中受伤，留下了疤痕。",
          "{maker_pronoun}大汗淋漓。",
          "工作环境非常整洁，所有工具都放置在合适的位置。",
          "{maker_pronoun}以夸张的表现方式描绘，显得更有力。",
          "{thing_definite}夸张的大小强调了其重要性。",
          "{thing_definite}被添加了艺术性的光辉，看起来如同天使一般。",
          "{maker_nameDef}逐渐淡化到背景中，以强调{maker_possessive}新作。",
          "[quantity_adjphrase]旁观者们围绕着{maker_objective}。",
          "一群人在背景中欢呼。"
        ],
        "style_sentences": [],
        "scene_phrases": [
          "全身心投入地",
          "一脸满足地",
          "在{maker_possessive}工作台旁",
          "极度紧张地"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{maker_nameDef}制作{thing_indefinite}的时光"
          ],
          "image": [
            "{maker_nameFull}正[circumstance_group]制作{thing_indefinite}。[quality_sentence]。[title_sentence]",
            "{maker_nameFull}正[circumstance_group]完成{maker_possessive}{thing_indefinite}的工作。[quality_sentence]。[title_sentence]",
            "{maker_nameFull}正[circumstance_group]致力于完成{thing_indefinite}。[quality_sentence]。[title_sentence]",
            "{maker_nameFull}正[circumstance_group]做{thing_indefinite}。[quality_sentence]。[title_sentence]"
          ],
          "circumstance_phrase": [
            "全身心投入地",
            "一脸满足地",
            "在{maker_possessive}工作台旁",
            "极度紧张地"
          ],
          "desc_sentence": [
            "有一些工具散落在周围。",
            "{maker_pronoun}在工作中受伤，留下了疤痕。",
            "{maker_pronoun}大汗淋漓。",
            "工作环境非常整洁，所有工具都放置在合适的位置。",
            "{maker_pronoun}以夸张的表现方式描绘，显得更有力。",
            "{thing_definite}夸张的大小强调了其重要性。",
            "{thing_definite}被添加了艺术性的光辉，看起来如同天使一般。",
            "{maker_nameDef}逐渐淡化到背景中，以强调{maker_possessive}新作。",
            "[quantity_adjphrase]旁观者们围绕着{maker_objective}。",
            "一群人在背景中欢呼。"
          ],
          "quality_sentence": [
            "{thing_definite}看来是{thing_quality}级的质量",
            "{thing_definite}是{thing_quality}级的质量",
            "{maker_nameDef}的作品是{thing_quality}级的质量"
          ],
          "title_sentence": [
            "{maker_nameDef}给{thing_definite}起了以下的标题：{thing_title}",
            "{thing_definite}上被纹章装饰着的标题：{thing_title}",
            "{thing_definite}的标题，{thing_title}，悬在背景中"
          ],
          "circumstance_group": [
            "全身心投入地",
            "一脸满足地",
            "在{maker_possessive}工作台旁",
            "极度紧张地"
          ]
        },
        "source_def_name": "CraftedArt"
      },
      "finished_construction": {
        "event_nouns": [
          "{builder_nameDef}完成了{object_label}的建造"
        ],
        "main_images": [
          "{builder_nameFull}正在装配{object_label}内部一个复杂的装置，[circumstance_group]",
          "{builder_nameFull}正在为{object_label}的表面抛光，[circumstance_group]",
          "{builder_nameFull}正在为{object_label}添加表面细节，[circumstance_group]",
          "{builder_nameFull}把自己的名字刻在{object_label}上，[circumstance_group]"
        ],
        "detail_sentences": [
          "{object_label}矗立在{builder_nameDef}面前。",
          "{object_label}泛着柔和的[Color]光。",
          "{object_label}巧夺天工",
          "[Quantity_adjphrase][PersonJob]对{object_label}赞叹不已。",
          "[Quantity_adjphrase][PersonJob]投来敬畏的目光。"
        ],
        "style_sentences": [],
        "scene_phrases": [
          "{builder_possessive}眼中闪烁着光芒",
          "同时在擦拭{builder_possessive}额头的汗水",
          "建造者浑身都是污渍",
          "面带得意的微笑",
          "{builder_possessive}脸上带着满意的神情"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{builder_nameDef}完成了{object_label}的建造"
          ],
          "image": [
            "{builder_nameFull}正在装配{object_label}内部一个复杂的装置，[circumstance_group]",
            "{builder_nameFull}正在为{object_label}的表面抛光，[circumstance_group]",
            "{builder_nameFull}正在为{object_label}添加表面细节，[circumstance_group]",
            "{builder_nameFull}把自己的名字刻在{object_label}上，[circumstance_group]"
          ],
          "circumstance_phrase": [
            "{builder_possessive}眼中闪烁着光芒",
            "同时在擦拭{builder_possessive}额头的汗水",
            "建造者浑身都是污渍",
            "面带得意的微笑",
            "{builder_possessive}脸上带着满意的神情"
          ],
          "desc_sentence": [
            "{object_label}矗立在{builder_nameDef}面前。",
            "{object_label}泛着柔和的[Color]光。",
            "{object_label}巧夺天工",
            "[Quantity_adjphrase][PersonJob]对{object_label}赞叹不已。",
            "[Quantity_adjphrase][PersonJob]投来敬畏的目光。"
          ],
          "circumstance_group": [
            "{builder_possessive}眼中闪烁着光芒",
            "同时在擦拭{builder_possessive}额头的汗水",
            "建造者浑身都是污渍",
            "面带得意的微笑",
            "{builder_possessive}脸上带着满意的神情"
          ]
        },
        "source_def_name": "CompletedLongConstructionProject"
      },
      "finished_research": {
        "event_nouns": [
          "{researcher_nameDef}完成「{project_label}」的研究"
        ],
        "main_images": [
          "{researcher_nameFull}[circumstance_group]进行着「{project_label}」项目的研究",
          "{researcher_nameFull}[circumstance_group]探寻着「{project_label}」的奥秘",
          "{researcher_nameFull}[circumstance_group]研究着「{project_label}」"
        ],
        "detail_sentences": [
          "{researcher_nameDef}大汗淋漓。",
          "项目显得异常复杂。",
          "{researcher_nameDef}被一排排的工具和仪器包围。",
          "{researcher_nameDef}惊奇不已地盯着{researcher_possessive}发现。"
        ],
        "style_sentences": [],
        "scene_phrases": [
          "极度紧张地",
          "独自站在{researcher_possessive}研究台前",
          "一边拿着文件一边",
          "一脸痴迷地"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{researcher_nameDef}完成「{project_label}」的研究"
          ],
          "image": [
            "{researcher_nameFull}[circumstance_group]进行着「{project_label}」项目的研究",
            "{researcher_nameFull}[circumstance_group]探寻着「{project_label}」的奥秘",
            "{researcher_nameFull}[circumstance_group]研究着「{project_label}」"
          ],
          "circumstance_phrase": [
            "极度紧张地",
            "独自站在{researcher_possessive}研究台前",
            "一边拿着文件一边",
            "一脸痴迷地"
          ],
          "desc_sentence": [
            "{researcher_nameDef}大汗淋漓。",
            "项目显得异常复杂。",
            "{researcher_nameDef}被一排排的工具和仪器包围。",
            "{researcher_nameDef}惊奇不已地盯着{researcher_possessive}发现。"
          ],
          "circumstance_group": [
            "极度紧张地",
            "独自站在{researcher_possessive}研究台前",
            "一边拿着文件一边",
            "一脸痴迷地"
          ]
        },
        "source_def_name": "FinishedResearchProject"
      },
      "read_book": {
        "event_nouns": [
          "{reader_nameDef}读完了{book_title}"
        ],
        "main_images": [
          "{reader_nameFull}终于合上了{book_title}，脸上露出满意的微笑，[circumstance_group]",
          "{reader_nameFull}翻动着{book_title}，吸收其中的知识，[circumstance_group]",
          "{reader_nameFull}将{book_title}放回书柜，浑身散发出满满的成就感，[circumstance_group]",
          "{reader_nameFull}静坐沉思，回味{book_title}的深刻真理，[circumstance_group]"
        ],
        "detail_sentences": [
          "{reader_nameDef}思考{reader_possessive}在{book_title}中所写的注释。",
          "{reader_nameDef}的眼睛里闪烁新发现智慧的光芒。",
          "{book_title}的教诲永远改变了{reader_nameDef}。",
          "感觉到一些秘密尚未被揭开。"
        ],
        "style_sentences": [],
        "scene_phrases": [
          "{reader_possessive}在最喜欢的书房里放松",
          "在{reader_possessive}身边喝茶",
          "在台灯的柔和光芒下"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{reader_nameDef}读完了{book_title}"
          ],
          "image": [
            "{reader_nameFull}终于合上了{book_title}，脸上露出满意的微笑，[circumstance_group]",
            "{reader_nameFull}翻动着{book_title}，吸收其中的知识，[circumstance_group]",
            "{reader_nameFull}将{book_title}放回书柜，浑身散发出满满的成就感，[circumstance_group]",
            "{reader_nameFull}静坐沉思，回味{book_title}的深刻真理，[circumstance_group]"
          ],
          "circumstance_phrase": [
            "{reader_possessive}在最喜欢的书房里放松",
            "在{reader_possessive}身边喝茶",
            "在台灯的柔和光芒下"
          ],
          "desc_sentence": [
            "{reader_nameDef}思考{reader_possessive}在{book_title}中所写的注释。",
            "{reader_nameDef}的眼睛里闪烁新发现智慧的光芒。",
            "{book_title}的教诲永远改变了{reader_nameDef}。",
            "感觉到一些秘密尚未被揭开。"
          ],
          "circumstance_group": [
            "{reader_possessive}在最喜欢的书房里放松",
            "在{reader_possessive}身边喝茶",
            "在台灯的柔和光芒下"
          ]
        },
        "source_def_name": "ReadBook"
      },
      "recruit_joiner": {
        "event_nouns": [
          "{recruiter_nameDef}招募{joiner_nameDef}",
          "{joiner_nameDef}被{recruiter_nameDef}说服",
          "{joiner_nameDef}被招募"
        ],
        "main_images": [
          "{recruiter_nameFull}正在招募{joiner_nameFull}，[circumstance_group]",
          "{recruiter_nameFull}正在迎接成为殖民地一员的{joiner_nameFull}，[circumstance_group]",
          "{recruiter_nameFull}正在说服{joiner_nameFull}加入，[circumstance_group]"
        ],
        "detail_sentences": [
          "{joiner_nameDef}理解地点着头。",
          "{joiner_nameDef}在目光接触中露出微笑。",
          "{joiner_nameDef}看上去松了口气。",
          "{joiner_nameDef}看上去充满希望。"
        ],
        "style_sentences": [],
        "scene_phrases": [
          "同时带着明显的善意",
          "同时诚挚地握手",
          "周围充满了欢笑",
          "在整个殖民地之前",
          "在一间牢房中"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{recruiter_nameDef}招募{joiner_nameDef}",
            "{joiner_nameDef}被{recruiter_nameDef}说服",
            "{joiner_nameDef}被招募"
          ],
          "image": [
            "{recruiter_nameFull}正在招募{joiner_nameFull}，[circumstance_group]",
            "{recruiter_nameFull}正在迎接成为殖民地一员的{joiner_nameFull}，[circumstance_group]",
            "{recruiter_nameFull}正在说服{joiner_nameFull}加入，[circumstance_group]"
          ],
          "circumstance_phrase": [
            "同时带着明显的善意",
            "同时诚挚地握手",
            "周围充满了欢笑",
            "在整个殖民地之前",
            "在一间牢房中"
          ],
          "desc_sentence": [
            "{joiner_nameDef}理解地点着头。",
            "{joiner_nameDef}在目光接触中露出微笑。",
            "{joiner_nameDef}看上去松了口气。",
            "{joiner_nameDef}看上去充满希望。"
          ],
          "circumstance_group": [
            "同时带着明显的善意",
            "同时诚挚地握手",
            "周围充满了欢笑",
            "在整个殖民地之前",
            "在一间牢房中"
          ]
        },
        "source_def_name": "Recruited"
      },
      "tame_animal": {
        "event_nouns": [
          "{animal_nameDef}被{tamer_nameDef}驯服",
          "{tamer_nameDef}驯服{animal_nameDef}"
        ],
        "main_images": [
          "{tamer_nameFull}正在驯服{animal_nameFull}，[circumstance_group]",
          "{tamer_nameFull}给{animal_nameFull}喂了一口食物，[circumstance_group]",
          "{tamer_nameFull}对{animal_label}低声呢喃，[circumstance_group]",
          "{tamer_nameFull}安抚着一只野生的{animal_label}，[circumstance_group]"
        ],
        "detail_sentences": [
          "{animal_nameDef}在充满侵略性地吼叫。",
          "{animal_nameDef}看上去沉醉在爱意之中。",
          "{animal_nameDef}看上去像被催眠了一样。",
          "{animal_nameDef}看起来既惊恐又好奇。",
          "{animal_nameDef}看起来好像被迷住了。",
          "{tamer_nameDef}正在充满爱意地抚摸{animal_nameDef}。"
        ],
        "style_sentences": [],
        "scene_phrases": [
          "非常小心谨慎",
          "同时面露笑容",
          "虽然十分疲惫但很开心"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{animal_nameDef}被{tamer_nameDef}驯服",
            "{tamer_nameDef}驯服{animal_nameDef}"
          ],
          "image": [
            "{tamer_nameFull}正在驯服{animal_nameFull}，[circumstance_group]",
            "{tamer_nameFull}给{animal_nameFull}喂了一口食物，[circumstance_group]",
            "{tamer_nameFull}对{animal_label}低声呢喃，[circumstance_group]",
            "{tamer_nameFull}安抚着一只野生的{animal_label}，[circumstance_group]"
          ],
          "circumstance_phrase": [
            "非常小心谨慎",
            "同时面露笑容",
            "虽然十分疲惫但很开心"
          ],
          "desc_sentence": [
            "{animal_nameDef}在充满侵略性地吼叫。",
            "{animal_nameDef}看上去沉醉在爱意之中。",
            "{animal_nameDef}看上去像被催眠了一样。",
            "{animal_nameDef}看起来既惊恐又好奇。",
            "{animal_nameDef}看起来好像被迷住了。",
            "{tamer_nameDef}正在充满爱意地抚摸{animal_nameDef}。"
          ],
          "circumstance_group": [
            "非常小心谨慎",
            "同时面露笑容",
            "虽然十分疲惫但很开心"
          ]
        },
        "source_def_name": "TamedAnimal"
      },
      "train_animal": {
        "event_nouns": [
          "{trainer_nameDef}训练{animal_nameDef}",
          "训练{animal_nameDef}",
          "{animal_nameDef}接受{trainer_nameDef}的训练"
        ],
        "main_images": [
          "{trainer_nameFull}[train_syn]{animal_nameFull}{training_label}，[circumstance_group]",
          "{trainer_nameFull}教{animal_nameFull}掌握{training_label}，[circumstance_group]",
          "{trainer_nameFull}和{animal_nameFull}一起练习{training_label}，[circumstance_group]"
        ],
        "detail_sentences": [
          "{trainer_nameDef}显得很开心。",
          "{trainer_nameDef}微笑着。",
          "{trainer_nameDef}看上去厌倦了这个差事。",
          "{trainer_nameDef}吓人地挥舞着{trainer_possessive}拳头。",
          "{trainer_nameDef}眉头紧皱，十分专注。",
          "{animal_nameDef}一脸茫然。",
          "{animal_nameDef}嘴里叼着一把武器。",
          "{animal_nameDef}发出努力的咕噜声。",
          "{trainer_nameDef}沮丧地摇着头。",
          "{animal_nameDef}在恐惧中颤抖。",
          "{animal_nameDef}假装自己是一株[Vegetable]。",
          "{animal_nameDef}是用拼凑在一起的电动工具描绘出来的。",
          "{animal_nameDef}一半[Color]一半[Color]。",
          "{animal_nameDef}被鳞片包覆。",
          "{trainer_nameDef}是用[Quantity_adjphrase]手臂描绘出来的。",
          "{trainer_nameDef}变成了{animal_definite}的模样。"
        ],
        "style_sentences": [],
        "scene_phrases": [
          "其他人在一旁围观",
          "一群野生的{animal}带着嫌恶的神情在一旁围观",
          "而{animal_nameDef}则回想起野兽时期的简单生活",
          "同时{trainer_nameDef}在考虑中午该吃什么",
          "而其他殖民者在一旁工作"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{trainer_nameDef}训练{animal_nameDef}",
            "训练{animal_nameDef}",
            "{animal_nameDef}接受{trainer_nameDef}的训练"
          ],
          "image": [
            "{trainer_nameFull}[train_syn]{animal_nameFull}{training_label}，[circumstance_group]",
            "{trainer_nameFull}教{animal_nameFull}掌握{training_label}，[circumstance_group]",
            "{trainer_nameFull}和{animal_nameFull}一起练习{training_label}，[circumstance_group]"
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
            "一群野生的{animal}带着嫌恶的神情在一旁围观",
            "而{animal_nameDef}则回想起野兽时期的简单生活",
            "同时{trainer_nameDef}在考虑中午该吃什么",
            "而其他殖民者在一旁工作"
          ],
          "desc_sentence": [
            "{trainer_nameDef}显得很开心。",
            "{trainer_nameDef}微笑着。",
            "{trainer_nameDef}看上去厌倦了这个差事。",
            "{trainer_nameDef}吓人地挥舞着{trainer_possessive}拳头。",
            "{trainer_nameDef}眉头紧皱，十分专注。",
            "{animal_nameDef}一脸茫然。",
            "{animal_nameDef}嘴里叼着一把武器。",
            "{animal_nameDef}发出努力的咕噜声。",
            "{trainer_nameDef}沮丧地摇着头。",
            "{animal_nameDef}在恐惧中颤抖。",
            "{animal_nameDef}假装自己是一株[Vegetable]。",
            "{animal_nameDef}是用拼凑在一起的电动工具描绘出来的。",
            "{animal_nameDef}一半[Color]一半[Color]。",
            "{animal_nameDef}被鳞片包覆。",
            "{trainer_nameDef}是用[Quantity_adjphrase]手臂描绘出来的。",
            "{trainer_nameDef}变成了{animal_definite}的模样。"
          ],
          "circumstance_group": [
            "其他人在一旁围观",
            "一群野生的{animal}带着嫌恶的神情在一旁围观",
            "而{animal_nameDef}则回想起野兽时期的简单生活",
            "同时{trainer_nameDef}在考虑中午该吃什么",
            "而其他殖民者在一旁工作"
          ]
        },
        "source_def_name": "TrainedAnimal"
      },
      "marriage": {
        "event_nouns": [
          "{spouse_a_nameDef}与{spouse_b_nameDef}结婚"
        ],
        "main_images": [
          "{spouse_a_nameFull}与{spouse_b_nameFull}结婚了，[circumstance_group]",
          "{spouse_a_nameFull}向{spouse_b_nameFull}说出婚姻誓言，[circumstance_group]",
          "{spouse_a_nameFull}与{spouse_b_nameFull}走上红地毯，[circumstance_group]",
          "婚礼中，{spouse_a_nameFull}牵着{spouse_b_nameFull}的手，[circumstance_group]"
        ],
        "detail_sentences": [
          "{spouse_a_nameDef}与{spouse_b_nameDef}幸福地依偎在一起。",
          "{spouse_a_nameDef}深情注视着{spouse_b_nameDef}。",
          "{spouse_a_nameDef}对{spouse_b_nameDef}吹着气。",
          "{spouse_a_nameDef}和{spouse_b_nameDef}灵魂交融。",
          "{spouse_a_nameDef}与{spouse_b_nameDef}心有灵犀。",
          "{spouse_a_nameDef}恣意地爱抚着{spouse_b_nameDef}。"
        ],
        "style_sentences": [],
        "scene_phrases": [
          "结婚仪式十分隆重",
          "两个人笑得十分开心",
          "其他人在一旁庄严地注视着"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{spouse_a_nameDef}与{spouse_b_nameDef}结婚"
          ],
          "image": [
            "{spouse_a_nameFull}与{spouse_b_nameFull}结婚了，[circumstance_group]",
            "{spouse_a_nameFull}向{spouse_b_nameFull}说出婚姻誓言，[circumstance_group]",
            "{spouse_a_nameFull}与{spouse_b_nameFull}走上红地毯，[circumstance_group]",
            "婚礼中，{spouse_a_nameFull}牵着{spouse_b_nameFull}的手，[circumstance_group]"
          ],
          "circumstance_phrase": [
            "结婚仪式十分隆重",
            "两个人笑得十分开心",
            "其他人在一旁庄严地注视着"
          ],
          "desc_sentence": [
            "{spouse_a_nameDef}与{spouse_b_nameDef}幸福地依偎在一起。",
            "{spouse_a_nameDef}深情注视着{spouse_b_nameDef}。",
            "{spouse_a_nameDef}对{spouse_b_nameDef}吹着气。",
            "{spouse_a_nameDef}和{spouse_b_nameDef}灵魂交融。",
            "{spouse_a_nameDef}与{spouse_b_nameDef}心有灵犀。",
            "{spouse_a_nameDef}恣意地爱抚着{spouse_b_nameDef}。"
          ],
          "circumstance_group": [
            "结婚仪式十分隆重",
            "两个人笑得十分开心",
            "其他人在一旁庄严地注视着"
          ]
        },
        "source_def_name": "Marriage"
      },
      "wound": {
        "event_nouns": [
          "{attacker_nameDef}[wound_name_present]{victim_nameDef}",
          "{attacker_nameDef}用{weapon_label}[wound_name_present]{victim_nameDef}",
          "{victim_nameDef}被{attacker_nameDef}[wound_name_present]",
          "{victim_nameDef}被人用{weapon_label}[wound_name_present]",
          "{victim_nameDef}被[wound_name_present]"
        ],
        "main_images": [
          "{victim_nameFull}被[wound_name_past]，杀手{attacker_nameFull}[with_weapon_optional]",
          "{attacker_nameFull}[wound_name_present]{victim_nameFull}，杀手[with_weapon_optional]",
          "{attacker_nameFull}粗暴地[wound_name_present]{victim_nameFull}，杀手[with_weapon_optional]",
          "{victim_nameFull}被[wound_name_past]，杀手[with_weapon_optional]"
        ],
        "detail_sentences": [
          "[Quantity_adjphrase][Animal]在一旁围观。",
          "一位[PersonJob]在[side_position]静观其变。",
          "{victim_nameDef}浑身是血。",
          "{victim_nameDef}浑身都是[Gore]。",
          "{victim_nameDef}看上去[AdjectiveAngsty]。",
          "{victim_nameDef}疼痛不堪。",
          "{victim_nameDef}在剧烈的疼痛中挣扎。",
          "{attacker_nameDef}咧开嘴，露出{attacker_possessive}牙齿。",
          "{attacker_nameDef}似乎很满意。",
          "{attacker_nameDef}面对{attacker_pronoun}自己的所作所为，感到十分痛苦。",
          "{attacker_nameDef}看上去对这一切很满意。",
          "{attacker_nameDef}露出胜利者的姿态。"
        ],
        "style_sentences": [],
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
            "{attacker_nameDef}[wound_name_present]{victim_nameDef}",
            "{attacker_nameDef}用{weapon_label}[wound_name_present]{victim_nameDef}",
            "{victim_nameDef}被{attacker_nameDef}[wound_name_present]",
            "{victim_nameDef}被人用{weapon_label}[wound_name_present]",
            "{victim_nameDef}被[wound_name_present]"
          ],
          "image": [
            "{victim_nameFull}被[wound_name_past]，杀手{attacker_nameFull}[with_weapon_optional]",
            "{attacker_nameFull}[wound_name_present]{victim_nameFull}，杀手[with_weapon_optional]",
            "{attacker_nameFull}粗暴地[wound_name_present]{victim_nameFull}，杀手[with_weapon_optional]",
            "{victim_nameFull}被[wound_name_past]，杀手[with_weapon_optional]"
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
            "使用了{weapon_label}，[circumstance_group]",
            "[circumstance_group]"
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
            "{victim_nameDef}浑身是血。",
            "{victim_nameDef}浑身都是[Gore]。",
            "{victim_nameDef}看上去[AdjectiveAngsty]。",
            "{victim_nameDef}疼痛不堪。",
            "{victim_nameDef}在剧烈的疼痛中挣扎。",
            "{attacker_nameDef}咧开嘴，露出{attacker_possessive}牙齿。",
            "{attacker_nameDef}似乎很满意。",
            "{attacker_nameDef}面对{attacker_pronoun}自己的所作所为，感到十分痛苦。",
            "{attacker_nameDef}看上去对这一切很满意。",
            "{attacker_nameDef}露出胜利者的姿态。"
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
        },
        "source_def_name": "Wounded"
      },
      "kill": {
        "event_nouns": [
          "{killer_nameDef}杀死{victim_nameDef}",
          "{victim_nameDef}死于{killer_nameDef}之手",
          "{victim_nameDef}被{killer_nameDef}所杀",
          "{victim_nameDef}之死"
        ],
        "main_images": [
          "{victim_nameFull}被{killer_nameFull}所杀，凶手[circumstance_group]",
          "{killer_nameFull}杀死{victim_nameFull}，[circumstance_group]",
          "{killer_nameFull}终结了{victim_nameFull}的生命，[circumstance_group]",
          "{killer_nameFull}残忍地杀死了{victim_nameFull}，[circumstance_group]",
          "{victim_nameFull}被杀死了，凶手[circumstance_group]"
        ],
        "detail_sentences": [
          "太阳在他们身后落下，作为这件事件的象征性的共鸣。",
          "[Quantity_adjphrase][Animal]在周围旁观。",
          "一个[PersonJob][side_position]沉默地看着。",
          "鲜血在{victim_nameDef}身旁逐渐散开。",
          "{victim_nameDef}的眼睛完全失去了生机。",
          "{killer_nameDef}呲着牙。",
          "{killer_nameDef}似乎心满意足。",
          "{killer_nameDef}看起来对自己所做的事感到痛苦。",
          "{killer_nameDef}看起来对这个情形感到愉悦。",
          "{killer_nameDef}看起来得意洋洋。"
        ],
        "style_sentences": [],
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
            "{killer_nameDef}杀死{victim_nameDef}",
            "{victim_nameDef}死于{killer_nameDef}之手",
            "{victim_nameDef}被{killer_nameDef}所杀",
            "{victim_nameDef}之死"
          ],
          "image": [
            "{victim_nameFull}被{killer_nameFull}所杀，凶手[circumstance_group]",
            "{killer_nameFull}杀死{victim_nameFull}，[circumstance_group]",
            "{killer_nameFull}终结了{victim_nameFull}的生命，[circumstance_group]",
            "{killer_nameFull}残忍地杀死了{victim_nameFull}，[circumstance_group]",
            "{victim_nameFull}被杀死了，凶手[circumstance_group]"
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
            "鲜血在{victim_nameDef}身旁逐渐散开。",
            "{victim_nameDef}的眼睛完全失去了生机。",
            "{killer_nameDef}呲着牙。",
            "{killer_nameDef}似乎心满意足。",
            "{killer_nameDef}看起来对自己所做的事感到痛苦。",
            "{killer_nameDef}看起来对这个情形感到愉悦。",
            "{killer_nameDef}看起来得意洋洋。"
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
        },
        "source_def_name": "KilledBy"
      },
      "meditate": {
        "event_nouns": [
          "{pawn_nameDef}沉思"
        ],
        "main_images": [
          "{pawn_nameFull}坐在一棵[TreeType]下，[circumstance_group]",
          "{pawn_nameFull}静静地坐着，[circumstance_group]",
          "{pawn_nameFull}凝视远方，[circumstance_group]",
          "{pawn_nameFull}闭上了{pawn_possessive}眼睛，[circumstance_group]"
        ],
        "detail_sentences": [
          "[Quantity_adjphrase][PersonJob]注视着{pawn_objective}。",
          "{pawn_pronoun}的四周围坐着[Quantity_adjphrase][Animal]。",
          "[Quantity_adjphrase][Animal]安静地休息。",
          "[Quantity_adjphrase][Enemy]对眼前的一幕肃然起敬。"
        ],
        "style_sentences": [],
        "scene_phrases": [
          "透出平和的感觉",
          "带着宁静的微笑",
          "带着[AdjectiveFriendly]的微笑",
          "神情温柔",
          "被[Color]的光辉环抱"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{pawn_nameDef}沉思"
          ],
          "image": [
            "{pawn_nameFull}坐在一棵[TreeType]下，[circumstance_group]",
            "{pawn_nameFull}静静地坐着，[circumstance_group]",
            "{pawn_nameFull}凝视远方，[circumstance_group]",
            "{pawn_nameFull}闭上了{pawn_possessive}眼睛，[circumstance_group]"
          ],
          "circumstance_phrase": [
            "透出平和的感觉",
            "带着宁静的微笑",
            "带着[AdjectiveFriendly]的微笑",
            "神情温柔",
            "被[Color]的光辉环抱"
          ],
          "desc_sentence": [
            "[Quantity_adjphrase][PersonJob]注视着{pawn_objective}。",
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
        },
        "source_def_name": "Meditated"
      },
      "pray": {
        "event_nouns": [
          "{pawn_nameDef}祈祷",
          "{pawn_nameDef}祈求变得更强"
        ],
        "main_images": [
          "{pawn_nameFull}凝视远方，[circumstance_group]",
          "{pawn_nameFull}闭上了{pawn_possessive}眼睛，[circumstance_group]",
          "{pawn_nameFull}紧握着{pawn_possessive}手，[circumstance_group]",
          "{pawn_nameFull}望着天空，[circumstance_group]"
        ],
        "detail_sentences": [
          "[Quantity_adjphrase][PersonJob]注视着{pawn_objective}。",
          "{pawn_pronoun}的四周围坐着[Quantity_adjphrase][Animal]。",
          "[Quantity_adjphrase][Animal]安静地休息。",
          "[Quantity_adjphrase][Enemy]对眼前的一幕肃然起敬。"
        ],
        "style_sentences": [],
        "scene_phrases": [
          "透出平和的感觉",
          "轻声私语",
          "带着满怀希望的神情",
          "神情温柔",
          "被[Color]的光辉环抱"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{pawn_nameDef}祈祷",
            "{pawn_nameDef}祈求变得更强"
          ],
          "image": [
            "{pawn_nameFull}凝视远方，[circumstance_group]",
            "{pawn_nameFull}闭上了{pawn_possessive}眼睛，[circumstance_group]",
            "{pawn_nameFull}紧握着{pawn_possessive}手，[circumstance_group]",
            "{pawn_nameFull}望着天空，[circumstance_group]"
          ],
          "circumstance_phrase": [
            "透出平和的感觉",
            "轻声私语",
            "带着满怀希望的神情",
            "神情温柔",
            "被[Color]的光辉环抱"
          ],
          "desc_sentence": [
            "[Quantity_adjphrase][PersonJob]注视着{pawn_objective}。",
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
        },
        "source_def_name": "Prayed"
      },
      "burial": {
        "event_nouns": [
          "{mourner_nameDef}埋葬{deceased_nameDef}",
          "{mourner_nameDef}使{deceased_nameDef}得到安息"
        ],
        "main_images": [
          "{mourner_nameFull}站在{deceased_nameFull}的坟墓前，[circumstance_group]",
          "{mourner_nameFull}蹲坐在{deceased_nameFull}的坟墓前，[circumstance_group]",
          "{mourner_nameFull}倚靠在{deceased_nameFull}的坟墓前[circumstance_group]",
          "{mourner_nameFull}在{deceased_nameFull}的墓碑上雕刻文字，[circumstance_group]",
          "{mourner_nameFull}在{deceased_nameFull}的棺木上进行艺术创作，[circumstance_group]",
          "{mourner_nameFull}将{deceased_nameFull}的尸体放入坟墓，[circumstance_group]"
        ],
        "detail_sentences": [
          "背景中[Color]的极光闪烁。",
          "远处的[Community]被白雪覆盖。",
          "{deceased_nameDef}的灵魂带着[AdjectiveFriendly]的神情俯瞰着四周。",
          "{deceased_nameDef}的灵魂站在{mourner_nameDef}身边，面带[AdjectiveFriendly]的神情。",
          "{deceased_nameDef}的灵魂带着[AdjectiveAngsty]的神情俯瞰着四周。",
          "{deceased_nameDef}的灵魂站在{mourner_nameDef}身边，面带[AdjectiveAngsty]的神情。",
          "[Quantity_adjphrase][Animal]在附近休息。"
        ],
        "style_sentences": [],
        "scene_phrases": [
          "面带[AdjectiveAngsty]的神情",
          "陷入沉思",
          "凝视着远方的[TerrainFeature]",
          "向墓碑静静私语"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{mourner_nameDef}埋葬{deceased_nameDef}",
            "{mourner_nameDef}使{deceased_nameDef}得到安息"
          ],
          "image": [
            "{mourner_nameFull}站在{deceased_nameFull}的坟墓前，[circumstance_group]",
            "{mourner_nameFull}蹲坐在{deceased_nameFull}的坟墓前，[circumstance_group]",
            "{mourner_nameFull}倚靠在{deceased_nameFull}的坟墓前[circumstance_group]",
            "{mourner_nameFull}在{deceased_nameFull}的墓碑上雕刻文字，[circumstance_group]",
            "{mourner_nameFull}在{deceased_nameFull}的棺木上进行艺术创作，[circumstance_group]",
            "{mourner_nameFull}将{deceased_nameFull}的尸体放入坟墓，[circumstance_group]"
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
            "{deceased_nameDef}的灵魂带着[AdjectiveFriendly]的神情俯瞰着四周。",
            "{deceased_nameDef}的灵魂站在{mourner_nameDef}身边，面带[AdjectiveFriendly]的神情。",
            "{deceased_nameDef}的灵魂带着[AdjectiveAngsty]的神情俯瞰着四周。",
            "{deceased_nameDef}的灵魂站在{mourner_nameDef}身边，面带[AdjectiveAngsty]的神情。",
            "[Quantity_adjphrase][Animal]在附近休息。"
          ],
          "circumstance_group": [
            "面带[AdjectiveAngsty]的神情",
            "陷入沉思",
            "凝视着远方的[TerrainFeature]",
            "向墓碑静静私语"
          ]
        },
        "source_def_name": "BuriedCorpse"
      },
      "party": {
        "event_nouns": [
          "{attender_nameDef}出席{organizer_nameDef}的派对",
          "{attender_nameDef}在{organizer_nameDef}举办的派对中放松"
        ],
        "main_images": [
          "{attender_nameFull}在和{organizer_nameFull}交谈，[circumstance_group]",
          "{organizer_nameFull}举办的派对上，{attender_nameFull}正在拿取饮料，[circumstance_group]",
          "{attender_nameFull}在和{organizer_nameFull}聊天，[circumstance_group]",
          "{organizer_nameFull}欢迎{attender_nameFull}加入派对，[circumstance_group]",
          "{organizer_nameFull}正在向朋友介绍{attender_nameFull}，[circumstance_group]"
        ],
        "detail_sentences": [
          "[Quantity_adjphrase][PersonJob]参与了交谈。",
          "现场被[Color]和[Color]装点。",
          "[Quantity_adjphrase][Animal]在附近玩耍。"
        ],
        "style_sentences": [],
        "scene_phrases": [
          "带着爽朗的笑容",
          "面带笑容",
          "带着[AdjectiveFriendly]的微笑",
          "同时发出一阵大笑",
          "现场气氛非常[AdjectiveFriendly]"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{attender_nameDef}出席{organizer_nameDef}的派对",
            "{attender_nameDef}在{organizer_nameDef}举办的派对中放松"
          ],
          "image": [
            "{attender_nameFull}在和{organizer_nameFull}交谈，[circumstance_group]",
            "{organizer_nameFull}举办的派对上，{attender_nameFull}正在拿取饮料，[circumstance_group]",
            "{attender_nameFull}在和{organizer_nameFull}聊天，[circumstance_group]",
            "{organizer_nameFull}欢迎{attender_nameFull}加入派对，[circumstance_group]",
            "{organizer_nameFull}正在向朋友介绍{attender_nameFull}，[circumstance_group]"
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
        },
        "source_def_name": "AttendedParty"
      },
      "skill_mastery": {
        "event_nouns": [
          "{pawn_nameDef}成为{skill_label}领域的大师"
        ],
        "main_images": [
          "{pawn_nameFull}正在练习{skill_label}，[circumstance_group]",
          "{pawn_nameFull}正在阅读一本关于{skill_label}的书籍，[circumstance_group]",
          "{pawn_nameFull}正在接受{skill_label}相关的训练，[circumstance_group]",
          "{pawn_nameFull}忘我地工作，[circumstance_group]",
          "{pawn_nameFull}完成了一个项目，[circumstance_group]"
        ],
        "detail_sentences": [
          "现场堆放着[Quantity_adjphrase]失败作品。",
          "现场堆放着[Quantity_adjphrase]书籍。",
          "{pawn_possessive}技能发挥的作用立竿见影。",
          "[Quantity_adjphrase][PersonJob]露出惊讶的表情。",
          "[Quantity_adjphrase][Animal]露出惊讶的表情。",
          "[Quantity_adjphrase]上古大师显灵并注视着这一切。"
        ],
        "style_sentences": [],
        "scene_phrases": [
          "满身大汗",
          "显得非常疲惫",
          "带着[AdjectiveAngsty]的神情",
          "带着厌倦的神情"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{pawn_nameDef}成为{skill_label}领域的大师"
          ],
          "image": [
            "{pawn_nameFull}正在练习{skill_label}，[circumstance_group]",
            "{pawn_nameFull}正在阅读一本关于{skill_label}的书籍，[circumstance_group]",
            "{pawn_nameFull}正在接受{skill_label}相关的训练，[circumstance_group]",
            "{pawn_nameFull}忘我地工作，[circumstance_group]",
            "{pawn_nameFull}完成了一个项目，[circumstance_group]"
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
            "{pawn_possessive}技能发挥的作用立竿见影。",
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
        },
        "source_def_name": "GainedMasterSkillWithoutPassion"
      },
      "insult": {
        "event_nouns": [
          "{initiator_nameDef}和{responder_nameDef}[fight_name_present]"
        ],
        "main_images": [
          "{initiator_nameFull}正在侮辱{responder_nameFull}，[circumstance_group]",
          "{initiator_nameFull}正在辱骂{responder_nameFull}，[circumstance_group]",
          "{initiator_nameFull}正在威胁{responder_nameFull}，[circumstance_group]",
          "{initiator_nameFull}正在恐吓{responder_nameFull}，[circumstance_group]",
          "{initiator_nameFull}正在攻击{responder_nameFull}，[circumstance_group]",
          "{initiator_nameFull}正在殴打{responder_nameFull}，[circumstance_group]",
          "{initiator_nameFull}正在追打{responder_nameFull}，[circumstance_group]",
          "{initiator_nameFull}正在猛踢{responder_nameFull}，[circumstance_group]",
          "{initiator_nameFull}被{responder_nameFull}吓坏了，[circumstance_group]"
        ],
        "detail_sentences": [
          "[target]没有悔过之意。",
          "[target]怒火中烧。",
          "[target]面无表情。",
          "[target]浑身都是[Gore]。",
          "[target]疯狂地尖叫。",
          "[target]显然受了伤。",
          "[target]的眼睛发出[Color]的光。"
        ],
        "style_sentences": [],
        "scene_phrases": [
          "而{responder_nameDef}则在侮辱{initiator_objective}",
          "而{responder_nameDef}则在辱骂{initiator_objective}",
          "而{responder_nameDef}则在威胁{initiator_objective}",
          "而{responder_nameDef}则在恐吓{initiator_objective}",
          "而{responder_nameDef}则在攻击{initiator_objective}",
          "而{responder_nameDef}则在殴打{initiator_objective}",
          "而{responder_nameDef}则在追打{initiator_objective}",
          "而{responder_nameDef}则在猛踢{initiator_objective}",
          "而{responder_nameDef}则被{initiator_objective}吓坏了"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{initiator_nameDef}和{responder_nameDef}[fight_name_present]"
          ],
          "image": [
            "{initiator_nameFull}正在侮辱{responder_nameFull}，[circumstance_group]",
            "{initiator_nameFull}正在辱骂{responder_nameFull}，[circumstance_group]",
            "{initiator_nameFull}正在威胁{responder_nameFull}，[circumstance_group]",
            "{initiator_nameFull}正在恐吓{responder_nameFull}，[circumstance_group]",
            "{initiator_nameFull}正在攻击{responder_nameFull}，[circumstance_group]",
            "{initiator_nameFull}正在殴打{responder_nameFull}，[circumstance_group]",
            "{initiator_nameFull}正在追打{responder_nameFull}，[circumstance_group]",
            "{initiator_nameFull}正在猛踢{responder_nameFull}，[circumstance_group]",
            "{initiator_nameFull}被{responder_nameFull}吓坏了，[circumstance_group]"
          ],
          "fight_name_present": [
            "互殴",
            "打架",
            "对打"
          ],
          "circumstance_phrase": [
            "而{responder_nameDef}则在侮辱{initiator_objective}",
            "而{responder_nameDef}则在辱骂{initiator_objective}",
            "而{responder_nameDef}则在威胁{initiator_objective}",
            "而{responder_nameDef}则在恐吓{initiator_objective}",
            "而{responder_nameDef}则在攻击{initiator_objective}",
            "而{responder_nameDef}则在殴打{initiator_objective}",
            "而{responder_nameDef}则在追打{initiator_objective}",
            "而{responder_nameDef}则在猛踢{initiator_objective}",
            "而{responder_nameDef}则被{initiator_objective}吓坏了"
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
            "{initiator_nameDef}",
            "{responder_nameDef}"
          ],
          "circumstance_group": [
            "而{responder_nameDef}则在侮辱{initiator_objective}",
            "而{responder_nameDef}则在辱骂{initiator_objective}",
            "而{responder_nameDef}则在威胁{initiator_objective}",
            "而{responder_nameDef}则在恐吓{initiator_objective}",
            "而{responder_nameDef}则在攻击{initiator_objective}",
            "而{responder_nameDef}则在殴打{initiator_objective}",
            "而{responder_nameDef}则在追打{initiator_objective}",
            "而{responder_nameDef}则在猛踢{initiator_objective}",
            "而{responder_nameDef}则被{initiator_objective}吓坏了"
          ]
        },
        "source_def_name": "SocialFight"
      },
      "escape_pod": {
        "event_nouns": [
          "{pawn_nameDef}的空投舱着陆"
        ],
        "main_images": [
          "{pawn_nameFull}正[circumstance_group]以空投舱方式登陆",
          "{pawn_nameFull}正[circumstance_group]以空投舱方式着陆",
          "{pawn_nameFull}正[circumstance_group]以空投舱方式撞向地面",
          "{pawn_nameFull}正[circumstance_group]搭乘着空投舱下降"
        ],
        "detail_sentences": [
          "{pawn_pronoun}聚精会神地操纵着控制器。",
          "{pawn_pronoun}吓得闭上了{pawn_possessive}眼睛。",
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
        "style_sentences": [],
        "scene_phrases": [
          "在一片[TerrainFeature]之前",
          "以不可思议的力量",
          "在一片飘起的尘埃和碎石中",
          "在减速火箭剧烈点火中",
          "在精确着陆的程序中"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{pawn_nameDef}的空投舱着陆"
          ],
          "image": [
            "{pawn_nameFull}正[circumstance_group]以空投舱方式登陆",
            "{pawn_nameFull}正[circumstance_group]以空投舱方式着陆",
            "{pawn_nameFull}正[circumstance_group]以空投舱方式撞向地面",
            "{pawn_nameFull}正[circumstance_group]搭乘着空投舱下降"
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
            "{pawn_pronoun}吓得闭上了{pawn_possessive}眼睛。",
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
        },
        "source_def_name": "LandedInPod"
      },
      "berserk_break": {
        "event_nouns": [
          "{pawn_nameDef}发狂"
        ],
        "main_images": [
          "{pawn_nameFull}突然发狂，[circumstance_group]",
          "{pawn_nameFull}变成了疯子，[circumstance_group]",
          "{pawn_nameFull}跌跌撞撞地向前走着，一副精神病人的样子，[circumstance_group]"
        ],
        "detail_sentences": [
          "{pawn_pronoun}因为自身无法控制的愤怒而浑身发抖。",
          "{pawn_pronoun}呲着牙狂吼着。",
          "{pawn_possessive}目光中只剩下疯狂。",
          "唾沫从{pawn_possessive}嘴中不断喷出，同时{pawn_possessive}疯狂地愤怒地大喊大叫。",
          "{pawn_pronoun}身上穿着的部分衣服已经不见了。",
          "{pawn_pronoun}的脸因为悲痛而扭曲。",
          "{pawn_pronoun}像疯子一样微笑。",
          "{pawn_pronoun}的脸被描绘了一只咆哮的[Animal]。",
          "许多[Animal]包围着{pawn_possessive}头，似乎象征着什么。",
          "{pawn_pronoun}的目光充满了杀气。",
          "{pawn_possessive}整个身体似乎都因为憎恨而颤抖着。",
          "{pawn_possessive}一脸狰狞。",
          "{pawn_possessive}脸上挂着一行眼泪。"
        ],
        "style_sentences": [],
        "scene_phrases": [
          "同时试图脱光衣服",
          "看上去莫名其妙",
          "其他人害怕地畏缩着",
          "{pawn_possessive}一个朋友逃开了",
          "显然是受到重压而精神崩溃",
          "显然是作为最后一搏的手段"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{pawn_nameDef}发狂"
          ],
          "image": [
            "{pawn_nameFull}突然发狂，[circumstance_group]",
            "{pawn_nameFull}变成了疯子，[circumstance_group]",
            "{pawn_nameFull}跌跌撞撞地向前走着，一副精神病人的样子，[circumstance_group]"
          ],
          "circumstance_phrase": [
            "同时试图脱光衣服",
            "看上去莫名其妙",
            "其他人害怕地畏缩着",
            "{pawn_possessive}一个朋友逃开了",
            "显然是受到重压而精神崩溃",
            "显然是作为最后一搏的手段"
          ],
          "desc_sentence": [
            "{pawn_pronoun}因为自身无法控制的愤怒而浑身发抖。",
            "{pawn_pronoun}呲着牙狂吼着。",
            "{pawn_possessive}目光中只剩下疯狂。",
            "唾沫从{pawn_possessive}嘴中不断喷出，同时{pawn_possessive}疯狂地愤怒地大喊大叫。",
            "{pawn_pronoun}身上穿着的部分衣服已经不见了。",
            "{pawn_pronoun}的脸因为悲痛而扭曲。",
            "{pawn_pronoun}像疯子一样微笑。",
            "{pawn_pronoun}的脸被描绘了一只咆哮的[Animal]。",
            "许多[Animal]包围着{pawn_possessive}头，似乎象征着什么。",
            "{pawn_pronoun}的目光充满了杀气。",
            "{pawn_possessive}整个身体似乎都因为憎恨而颤抖着。",
            "{pawn_possessive}一脸狰狞。",
            "{pawn_possessive}脸上挂着一行眼泪。"
          ],
          "circumstance_group": [
            "同时试图脱光衣服",
            "看上去莫名其妙",
            "其他人害怕地畏缩着",
            "{pawn_possessive}一个朋友逃开了",
            "显然是受到重压而精神崩溃",
            "显然是作为最后一搏的手段"
          ]
        },
        "source_def_name": "MentalStateBerserk"
      },
      "despair_break": {
        "event_nouns": [
          "{pawn_nameDef}绝望中的放弃"
        ],
        "main_images": [
          "{pawn_nameFull}同时在压力之下自暴自弃，[circumstance_group]",
          "{pawn_nameFull}压抑不住啜泣起来，[circumstance_group]",
          "{pawn_nameFull}四处徘徊，神情茫然，[circumstance_group]"
        ],
        "detail_sentences": [
          "{pawn_pronoun}脸上挂着泪水。",
          "{pawn_pronoun}消沉地大笑着。",
          "{pawn_nameDef}抬头望天，似乎在祈求上苍的帮助。",
          "{pawn_pronoun}撕扯着自己的衣服。",
          "{pawn_pronoun}似乎对周围的环境一无所知。",
          "{pawn_pronoun}一会哭一会笑。",
          "{pawn_pronoun}把自己弄得很脏。",
          "{pawn_pronoun}似乎丢了一只鞋子。",
          "{pawn_possessive}头发乱糟糟的。"
        ],
        "style_sentences": [],
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
            "{pawn_nameDef}绝望中的放弃"
          ],
          "image": [
            "{pawn_nameFull}同时在压力之下自暴自弃，[circumstance_group]",
            "{pawn_nameFull}压抑不住啜泣起来，[circumstance_group]",
            "{pawn_nameFull}四处徘徊，神情茫然，[circumstance_group]"
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
            "{pawn_nameDef}抬头望天，似乎在祈求上苍的帮助。",
            "{pawn_pronoun}撕扯着自己的衣服。",
            "{pawn_pronoun}似乎对周围的环境一无所知。",
            "{pawn_pronoun}一会哭一会笑。",
            "{pawn_pronoun}把自己弄得很脏。",
            "{pawn_pronoun}似乎丢了一只鞋子。",
            "{pawn_possessive}头发乱糟糟的。"
          ],
          "circumstance_group": [
            "同时试图脱光衣服",
            "看上去莫名其妙",
            "其他人在一旁不断安慰",
            "身边的一个朋友在哭泣",
            "显然是受到重压而精神崩溃",
            "显然是作为最后一搏的手段"
          ]
        },
        "source_def_name": "MentalStateGaveUp"
      },
      "caravan_departure": {
        "event_nouns": [
          "{pawn_nameDef}的远行队出发",
          "{pawn_nameDef}组建远行队"
        ],
        "main_images": [
          "{pawn_nameFull}向着目的地进发，[circumstance_group]",
          "{pawn_nameFull}望着地平线，[circumstance_group]",
          "{pawn_nameFull}在打包旅行用品，[circumstance_group]",
          "{pawn_nameFull}正在制定远行计划，[circumstance_group]"
        ],
        "detail_sentences": [
          "[Quantity_adjphrase][ally]在一旁围观。",
          "[Quantity_adjphrase][ally]在帮忙做准备。",
          "[Quantity_adjphrase][Enemy]从现场逃离。",
          "远处的[TerrainFeature]依稀可见",
          "[Quantity_adjphrase][PersonJob]在远处围观。",
          "[Quantity_adjphrase][Animal]平静地漫步。"
        ],
        "style_sentences": [],
        "scene_phrases": [
          "并为战斗做好了准备",
          "并为生存做好了准备",
          "并为勘探做好了准备",
          "{pawn_possessive}眼中透出期待",
          "{pawn_possessive}眼中透出[AdjectiveAny]的神情"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{pawn_nameDef}的远行队出发",
            "{pawn_nameDef}组建远行队"
          ],
          "image": [
            "{pawn_nameFull}向着目的地进发，[circumstance_group]",
            "{pawn_nameFull}望着地平线，[circumstance_group]",
            "{pawn_nameFull}在打包旅行用品，[circumstance_group]",
            "{pawn_nameFull}正在制定远行计划，[circumstance_group]"
          ],
          "circumstance_phrase": [
            "并为战斗做好了准备",
            "并为生存做好了准备",
            "并为勘探做好了准备",
            "{pawn_possessive}眼中透出期待",
            "{pawn_possessive}眼中透出[AdjectiveAny]的神情"
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
            "{pawn_possessive}眼中透出期待",
            "{pawn_possessive}眼中透出[AdjectiveAny]的神情"
          ]
        },
        "source_def_name": "CaravanFormed"
      },
      "surgery": {
        "event_nouns": [
          "{surgeon_nameDef}为{patient_nameDef}进行手术",
          "{patient_nameDef}的手术由{surgeon_nameDef}主刀",
          "{patient_nameDef}的手术"
        ],
        "main_images": [
          "{surgeon_nameFull}正在麻醉{patient_nameFull}，[circumstance_group]",
          "手术中，{surgeon_nameFull}将手臂深入{patient_nameFull}体内直至手肘，[circumstance_group]",
          "手术中，{surgeon_nameFull}剖开{patient_nameFull}，[circumstance_group]"
        ],
        "detail_sentences": [
          "{surgeon_nameDef}满头大汗。",
          "{surgeon_nameDef}看上去神情专注。",
          "血液溅到{surgeon_nameDef}的脸上。",
          "{patient_nameDef}抽搐扭动着。"
        ],
        "style_sentences": [],
        "scene_phrases": [
          "而{patient_pronoun}因害怕而颤抖",
          "而鲜血滴落在{surgeon_nameDef}脚下",
          "周围摆满了看着瘆人的手术工具",
          "使用的是自制但有效的工具"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{surgeon_nameDef}为{patient_nameDef}进行手术",
            "{patient_nameDef}的手术由{surgeon_nameDef}主刀",
            "{patient_nameDef}的手术"
          ],
          "image": [
            "{surgeon_nameFull}正在麻醉{patient_nameFull}，[circumstance_group]",
            "手术中，{surgeon_nameFull}将手臂深入{patient_nameFull}体内直至手肘，[circumstance_group]",
            "手术中，{surgeon_nameFull}剖开{patient_nameFull}，[circumstance_group]"
          ],
          "circumstance_phrase": [
            "而{patient_pronoun}因害怕而颤抖",
            "而鲜血滴落在{surgeon_nameDef}脚下",
            "周围摆满了看着瘆人的手术工具",
            "使用的是自制但有效的工具"
          ],
          "desc_sentence": [
            "{surgeon_nameDef}满头大汗。",
            "{surgeon_nameDef}看上去神情专注。",
            "血液溅到{surgeon_nameDef}的脸上。",
            "{patient_nameDef}抽搐扭动着。"
          ],
          "circumstance_group": [
            "而{patient_pronoun}因害怕而颤抖",
            "而鲜血滴落在{surgeon_nameDef}脚下",
            "周围摆满了看着瘆人的手术工具",
            "使用的是自制但有效的工具"
          ]
        },
        "source_def_name": "DidSurgery"
      },
      "birth": {
        "event_nouns": [
          "{mother_nameDef}生下{child_nameDef}"
        ],
        "main_images": [
          "{mother_nameFull}生下了[circumstance_group]",
          "{mother_nameFull}怀抱{mother_possessive}[baby]，[circumstance_group]",
          "{mother_nameFull}的旁边躺着{mother_possessive}[baby]，[circumstance_group]",
          "{mother_nameFull}瘫坐在椅子上，怀抱{mother_possessive}[baby]，[circumstance_group]"
        ],
        "detail_sentences": [
          "[Quantity_adjphrase][Animal]平静地睡在附近。",
          "[Quantity_adjphrase][PersonJob]在现场围观。",
          "一位[PersonJob]在远处观看。",
          "这一幕发生在一个新建的[Community]。"
        ],
        "style_sentences": [],
        "scene_phrases": [
          "浑身是血，正在哭闹的{child_nameFull}",
          "{child_nameFull}，一个散发着[Color]柔光的小家伙",
          "{child_nameFull}，闲不住的{child_objective}动来动去",
          "{child_nameFull}，一个平静地东张西望的小家伙"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{mother_nameDef}生下{child_nameDef}"
          ],
          "image": [
            "{mother_nameFull}生下了[circumstance_group]",
            "{mother_nameFull}怀抱{mother_possessive}[baby]，[circumstance_group]",
            "{mother_nameFull}的旁边躺着{mother_possessive}[baby]，[circumstance_group]",
            "{mother_nameFull}瘫坐在椅子上，怀抱{mother_possessive}[baby]，[circumstance_group]"
          ],
          "baby": [
            "孩子",
            "新生儿",
            "宝宝"
          ],
          "circumstance_phrase": [
            "浑身是血，正在哭闹的{child_nameFull}",
            "{child_nameFull}，一个散发着[Color]柔光的小家伙",
            "{child_nameFull}，闲不住的{child_objective}动来动去",
            "{child_nameFull}，一个平静地东张西望的小家伙"
          ],
          "desc_sentence": [
            "[Quantity_adjphrase][Animal]平静地睡在附近。",
            "[Quantity_adjphrase][PersonJob]在现场围观。",
            "一位[PersonJob]在远处观看。",
            "这一幕发生在一个新建的[Community]。"
          ],
          "circumstance_group": [
            "浑身是血，正在哭闹的{child_nameFull}",
            "{child_nameFull}，一个散发着[Color]柔光的小家伙",
            "{child_nameFull}，闲不住的{child_objective}动来动去",
            "{child_nameFull}，一个平静地东张西望的小家伙"
          ]
        },
        "source_def_name": "GaveBirth"
      },
      "game_play": {
        "event_nouns": [
          "{pawn_nameDef}利用{game_label}进行放松",
          "{pawn_nameDef}用{game_label}玩游戏",
          "{pawn_nameDef}用{game_label}打发时间"
        ],
        "main_images": [
          "{pawn_nameFull}坐在椅子上等待，[circumstance_group]",
          "对于用{game_label}进行游戏，{pawn_nameFull}胸有成竹，[circumstance_group]",
          "{pawn_nameFull}坐在{game_label}旁边，[circumstance_group]",
          "{pawn_nameFull}在{game_label}游戏中获胜，[circumstance_group]",
          "{pawn_nameFull}输掉了{game_label}游戏，[circumstance_group]"
        ],
        "detail_sentences": [
          "背景中[Color]的极光闪烁。",
          "远处的[Community]依稀可见。",
          "远处的[TerrainFeature]依稀可见。",
          "[Quantity_adjphrase][PersonJob]也在玩游戏。",
          "[Quantity_adjphrase][Animal]在附近玩耍。",
          "{pawn_nameDef}闪着[Color]的光环。",
          "{pawn_nameDef}的表情十分夸张。",
          "{pawn_nameDef}矗立在场景里。",
          "[Quantity_adjphrase][PersonJob]则惨败。"
        ],
        "style_sentences": [],
        "scene_phrases": [
          "看上去全神贯注",
          "{pawn_possessive}身心得到了放松",
          "正在计划{pawn_possessive}下一步行动",
          "轻轻地按摩{pawn_possessive}手腕",
          "十分[angstyverb]，面带[AdjectiveAngsty]的神情",
          "带着[AdjectiveAngsty]的神情",
          "十分[angstyverb]"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{pawn_nameDef}利用{game_label}进行放松",
            "{pawn_nameDef}用{game_label}玩游戏",
            "{pawn_nameDef}用{game_label}打发时间"
          ],
          "image": [
            "{pawn_nameFull}坐在椅子上等待，[circumstance_group]",
            "对于用{game_label}进行游戏，{pawn_nameFull}胸有成竹，[circumstance_group]",
            "{pawn_nameFull}坐在{game_label}旁边，[circumstance_group]",
            "{pawn_nameFull}在{game_label}游戏中获胜，[circumstance_group]",
            "{pawn_nameFull}输掉了{game_label}游戏，[circumstance_group]"
          ],
          "circumstance_phrase": [
            "看上去全神贯注",
            "{pawn_possessive}身心得到了放松",
            "正在计划{pawn_possessive}下一步行动",
            "轻轻地按摩{pawn_possessive}手腕",
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
            "{pawn_nameDef}闪着[Color]的光环。",
            "{pawn_nameDef}的表情十分夸张。",
            "{pawn_nameDef}矗立在场景里。",
            "[Quantity_adjphrase][PersonJob]则惨败。"
          ],
          "circumstance_group": [
            "看上去全神贯注",
            "{pawn_possessive}身心得到了放松",
            "正在计划{pawn_possessive}下一步行动",
            "轻轻地按摩{pawn_possessive}手腕",
            "十分[angstyverb]，面带[AdjectiveAngsty]的神情",
            "带着[AdjectiveAngsty]的神情",
            "十分[angstyverb]"
          ]
        },
        "source_def_name": "PlayedGame"
      },
      "drunkenness": {
        "event_nouns": [
          "醉生梦死的{pawn_nameDef}",
          "{pawn_nameDef}伶仃大醉"
        ],
        "main_images": [
          "{pawn_nameFull}喝醉后摇摇晃晃，[circumstance_group]",
          "{pawn_nameFull}仰头痛饮，[circumstance_group]",
          "{pawn_nameFull}贪心地抱着数瓶酒，[circumstance_group]",
          "{pawn_nameFull}大喝特喝，[circumstance_group]"
        ],
        "detail_sentences": [
          "{pawn_pronoun}似乎对周围的环境一无所知。",
          "{pawn_possessive}脸似乎变得浮肿。",
          "{pawn_pronoun}近乎不省人事，伸着舌头口吐白沫。",
          "{pawn_pronoun}一会哭一会笑。",
          "{pawn_pronoun}把自己前面弄得一片脏。",
          "在{pawn_objective}身后有一堆喝空的酒瓶。",
          "{pawn_possessive}裤子上有一滩白色物质。",
          "{pawn_pronoun}似乎丢了一只鞋子。",
          "{pawn_possessive}头发乱糟糟的。"
        ],
        "style_sentences": [],
        "scene_phrases": [
          "分不清东西南北了",
          "恍恍惚惚",
          "问着{pawn_possessive}自己在哪里",
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
        "grammar_pools": {
          "tale_noun": [
            "醉生梦死的{pawn_nameDef}",
            "{pawn_nameDef}伶仃大醉"
          ],
          "image": [
            "{pawn_nameFull}喝醉后摇摇晃晃，[circumstance_group]",
            "{pawn_nameFull}仰头痛饮，[circumstance_group]",
            "{pawn_nameFull}贪心地抱着数瓶酒，[circumstance_group]",
            "{pawn_nameFull}大喝特喝，[circumstance_group]"
          ],
          "circumstance_phrase": [
            "分不清东西南北了",
            "恍恍惚惚",
            "问着{pawn_possessive}自己在哪里",
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
            "{pawn_possessive}脸似乎变得浮肿。",
            "{pawn_pronoun}近乎不省人事，伸着舌头口吐白沫。",
            "{pawn_pronoun}一会哭一会笑。",
            "{pawn_pronoun}把自己前面弄得一片脏。",
            "在{pawn_objective}身后有一堆喝空的酒瓶。",
            "{pawn_possessive}裤子上有一滩白色物质。",
            "{pawn_pronoun}似乎丢了一只鞋子。",
            "{pawn_possessive}头发乱糟糟的。"
          ],
          "circumstance_group": [
            "分不清东西南北了",
            "恍恍惚惚",
            "问着{pawn_possessive}自己在哪里",
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
        },
        "source_def_name": "Drunk"
      },
      "fire_panic": {
        "event_nouns": [
          "{pawn_nameDef}身上着火"
        ],
        "main_images": [
          "{pawn_nameFull}正[circumstance_group]疯狂拍打自己身上的火焰",
          "{pawn_nameFull}正[circumstance_group]被火焰吞噬",
          "{pawn_nameFull}跪下来，举着双手，[circumstance_group]试图把自己身上的火焰扑灭",
          "{pawn_nameFull}浑身是火，[circumstance_group]满地打滚"
        ],
        "detail_sentences": [
          "{pawn_possessive}皮肉明显烧焦了。",
          "{pawn_possessive}眼中布满了惊恐。",
          "{pawn_pronoun}似乎快没有了意识，{pawn_possessive}眼睛已经失去了生机。",
          "{pawn_pronoun}大声呼喊着求救。",
          "火焰已经包裹住了{pawn_possessive}头。",
          "一个象征性的火焰光环环绕着{pawn_possessive}脸",
          "{pawn_pronoun}疯子般地大笑着。",
          "{pawn_pronoun}失魂落魄。",
          "{pawn_objective}浑身冒着烟。",
          "{pawn_pronoun}被用艺术性地手法描绘成了尸体一样的形式。"
        ],
        "style_sentences": [],
        "scene_phrases": [
          "在其他人的旁观下",
          "几乎全裸地",
          "惊慌失措地"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{pawn_nameDef}身上着火"
          ],
          "image": [
            "{pawn_nameFull}正[circumstance_group]疯狂拍打自己身上的火焰",
            "{pawn_nameFull}正[circumstance_group]被火焰吞噬",
            "{pawn_nameFull}跪下来，举着双手，[circumstance_group]试图把自己身上的火焰扑灭",
            "{pawn_nameFull}浑身是火，[circumstance_group]满地打滚"
          ],
          "circumstance_phrase": [
            "在其他人的旁观下",
            "几乎全裸地",
            "惊慌失措地"
          ],
          "desc_sentence": [
            "{pawn_possessive}皮肉明显烧焦了。",
            "{pawn_possessive}眼中布满了惊恐。",
            "{pawn_pronoun}似乎快没有了意识，{pawn_possessive}眼睛已经失去了生机。",
            "{pawn_pronoun}大声呼喊着求救。",
            "火焰已经包裹住了{pawn_possessive}头。",
            "一个象征性的火焰光环环绕着{pawn_possessive}脸",
            "{pawn_pronoun}疯子般地大笑着。",
            "{pawn_pronoun}失魂落魄。",
            "{pawn_objective}浑身冒着烟。",
            "{pawn_pronoun}被用艺术性地手法描绘成了尸体一样的形式。"
          ],
          "circumstance_group": [
            "在其他人的旁观下",
            "几乎全裸地",
            "惊慌失措地"
          ]
        },
        "source_def_name": "WasOnFire"
      },
      "nude_wander": {
        "event_nouns": [
          "{pawn_nameDef}裸奔"
        ],
        "main_images": [
          "{pawn_nameFull}非常自然地光着身子[nude_action]，[circumstance_group]",
          "{pawn_nameFull}一丝不挂地[nude_action]，[circumstance_group]",
          "{pawn_nameFull}赤裸着[nude_action]，[circumstance_group]",
          "{pawn_nameFull}[nude_action]，没穿任何衣服，[circumstance_group]"
        ],
        "detail_sentences": [
          "{pawn_nameDef}明显很激动。",
          "{pawn_nameDef}浑身被不明的水汽包裹。",
          "{pawn_nameDef}无缘无故地喘着粗气。",
          "{pawn_nameDef}轻轻抚弄着灌木从。"
        ],
        "style_sentences": [],
        "scene_phrases": [
          "同时信心满满",
          "肆无忌惮",
          "其他人在一旁围观",
          "不知什么原因",
          "周围的动物十分困惑"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{pawn_nameDef}裸奔"
          ],
          "image": [
            "{pawn_nameFull}非常自然地光着身子[nude_action]，[circumstance_group]",
            "{pawn_nameFull}一丝不挂地[nude_action]，[circumstance_group]",
            "{pawn_nameFull}赤裸着[nude_action]，[circumstance_group]",
            "{pawn_nameFull}[nude_action]，没穿任何衣服，[circumstance_group]"
          ],
          "nude_action": [
            "昂首阔步",
            "嬉戏玩耍",
            "蹦蹦跳跳",
            "闲庭信步",
            "炫耀{pawn_possessive}身材",
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
            "{pawn_nameDef}明显很激动。",
            "{pawn_nameDef}浑身被不明的水汽包裹。",
            "{pawn_nameDef}无缘无故地喘着粗气。",
            "{pawn_nameDef}轻轻抚弄着灌木从。"
          ],
          "circumstance_group": [
            "同时信心满满",
            "肆无忌惮",
            "其他人在一旁围观",
            "不知什么原因",
            "周围的动物十分困惑"
          ]
        },
        "source_def_name": "WalkedNaked"
      },
      "grave_visit": {
        "event_nouns": [
          "{visitor_nameDef}拜访{deceased_nameDef}的墓地",
          "{visitor_nameDef}祭奠{deceased_nameDef}"
        ],
        "main_images": [
          "{visitor_nameFull}站在{deceased_nameFull}的坟墓前，[circumstance_group]",
          "{visitor_nameFull}蹲坐在{deceased_nameFull}的坟墓前，[circumstance_group]",
          "{visitor_nameFull}倚靠在{deceased_nameFull}的坟墓旁边，[circumstance_group]",
          "{visitor_nameFull}阅读{deceased_nameFull}的墓碑上刻着的文字，[circumstance_group]",
          "{visitor_nameFull}观看{deceased_nameFull}的棺木上的艺术作品，[circumstance_group]"
        ],
        "detail_sentences": [
          "背景中[Color]的极光闪烁。",
          "远处[Community]被白雪覆盖。",
          "{deceased_nameDef}的灵魂带着[AdjectiveFriendly]的神情俯瞰着四周。",
          "{deceased_nameDef}的灵魂站在{visitor_nameDef}身边，面带[AdjectiveFriendly]的神情。",
          "{deceased_nameDef}的灵魂带着[AdjectiveAngsty]的神情俯瞰着四周。",
          "{deceased_nameDef}的灵魂站在{visitor_nameDef}身边，面带[AdjectiveAngsty]的神情。",
          "[Quantity_adjphrase][Animal]在附近休息。"
        ],
        "style_sentences": [],
        "scene_phrases": [
          "面带[AdjectiveAngsty]的神情",
          "陷入沉思",
          "凝视着远方的[TerrainFeature]",
          "向墓碑静静私语"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{visitor_nameDef}拜访{deceased_nameDef}的墓地",
            "{visitor_nameDef}祭奠{deceased_nameDef}"
          ],
          "image": [
            "{visitor_nameFull}站在{deceased_nameFull}的坟墓前，[circumstance_group]",
            "{visitor_nameFull}蹲坐在{deceased_nameFull}的坟墓前，[circumstance_group]",
            "{visitor_nameFull}倚靠在{deceased_nameFull}的坟墓旁边，[circumstance_group]",
            "{visitor_nameFull}阅读{deceased_nameFull}的墓碑上刻着的文字，[circumstance_group]",
            "{visitor_nameFull}观看{deceased_nameFull}的棺木上的艺术作品，[circumstance_group]"
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
            "{deceased_nameDef}的灵魂带着[AdjectiveFriendly]的神情俯瞰着四周。",
            "{deceased_nameDef}的灵魂站在{visitor_nameDef}身边，面带[AdjectiveFriendly]的神情。",
            "{deceased_nameDef}的灵魂带着[AdjectiveAngsty]的神情俯瞰着四周。",
            "{deceased_nameDef}的灵魂站在{visitor_nameDef}身边，面带[AdjectiveAngsty]的神情。",
            "[Quantity_adjphrase][Animal]在附近休息。"
          ],
          "circumstance_group": [
            "面带[AdjectiveAngsty]的神情",
            "陷入沉思",
            "凝视着远方的[TerrainFeature]",
            "向墓碑静静私语"
          ]
        },
        "source_def_name": "VisitedGrave"
      },
      "hunt_animal": {
        "event_nouns": [
          "{hunter_nameDef}狩猎{animal_nameDef}",
          "{animal_nameDef}被{hunter_nameDef}狩猎",
          "{hunter_nameDef}成功的狩猎"
        ],
        "main_images": [
          "[circumstance_group]使它正在被{hunter_nameFull}狩猎",
          "趁着[circumstance_group]，{hunter_nameFull}远远地追踪{animal_nameFull}",
          "{hunter_nameFull}趁[circumstance_group]的机会，对其进行狩猎"
        ],
        "detail_sentences": [
          "{animal_nameDef}似乎毫无察觉。",
          "{hunter_nameDef}紧握着{hunter_possessive}武器。",
          "{animal_nameDef}四处张望，仿佛意识到了危险。"
        ],
        "style_sentences": [],
        "scene_phrases": [
          "{animal_nameDef}松懈",
          "{animal_nameDef}经过",
          "{animal_nameDef}进食"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{hunter_nameDef}狩猎{animal_nameDef}",
            "{animal_nameDef}被{hunter_nameDef}狩猎",
            "{hunter_nameDef}成功的狩猎"
          ],
          "image": [
            "[circumstance_group]使它正在被{hunter_nameFull}狩猎",
            "趁着[circumstance_group]，{hunter_nameFull}远远地追踪{animal_nameFull}",
            "{hunter_nameFull}趁[circumstance_group]的机会，对其进行狩猎"
          ],
          "circumstance_phrase": [
            "{animal_nameDef}松懈",
            "{animal_nameDef}经过",
            "{animal_nameDef}进食"
          ],
          "desc_sentence": [
            "{animal_nameDef}似乎毫无察觉。",
            "{hunter_nameDef}紧握着{hunter_possessive}武器。",
            "{animal_nameDef}四处张望，仿佛意识到了危险。"
          ],
          "circumstance_group": [
            "{animal_nameDef}松懈",
            "{animal_nameDef}经过",
            "{animal_nameDef}进食"
          ]
        },
        "source_def_name": "Hunted"
      },
      "capture_prisoner": {
        "event_nouns": [
          "{capturer_nameDef}俘虏{prisoner_nameDef}",
          "{prisoner_nameDef}被{capturer_nameDef}俘虏",
          "俘虏{prisoner_nameDef}"
        ],
        "main_images": [
          "{capturer_nameFull}正在俘虏{prisoner_nameFull}，[circumstance_group]",
          "{capturer_nameFull}束缚着{prisoner_nameFull}的双手，[circumstance_group]",
          "{capturer_nameFull}狠狠扇了{prisoner_nameFull}一巴掌并俘虏了{prisoner_objective}，[circumstance_group]"
        ],
        "detail_sentences": [
          "{capturer_nameDef}正以征服者的目光看着{prisoner_nameDef}的双眼。",
          "{prisoner_nameDef}受伤了，并且看上去非常痛苦。",
          "{prisoner_nameDef}看起来已经屈服于{prisoner_possessive}命运。",
          "{prisoner_nameDef}因失败而愤怒地吼叫着。",
          "{capturer_nameDef}为了制服{prisoner_nameDef}而不断掌掴{prisoner_objective}。",
          "{capturer_nameDef}扯着{prisoner_nameDef}的耳朵。",
          "{capturer_nameDef}反锁着{prisoner_nameDef}的关节。",
          "{capturer_nameDef}对着{prisoner_nameDef}的脸啐了口唾沫。",
          "{capturer_nameDef}大笑着，而{prisoner_nameDef}眼中涌出了泪水。",
          "{capturer_nameDef}毫无缘由地踹着{prisoner_nameDef}。"
        ],
        "style_sentences": [],
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
            "{capturer_nameDef}俘虏{prisoner_nameDef}",
            "{prisoner_nameDef}被{capturer_nameDef}俘虏",
            "俘虏{prisoner_nameDef}"
          ],
          "image": [
            "{capturer_nameFull}正在俘虏{prisoner_nameFull}，[circumstance_group]",
            "{capturer_nameFull}束缚着{prisoner_nameFull}的双手，[circumstance_group]",
            "{capturer_nameFull}狠狠扇了{prisoner_nameFull}一巴掌并俘虏了{prisoner_objective}，[circumstance_group]"
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
            "{capturer_nameDef}正以征服者的目光看着{prisoner_nameDef}的双眼。",
            "{prisoner_nameDef}受伤了，并且看上去非常痛苦。",
            "{prisoner_nameDef}看起来已经屈服于{prisoner_possessive}命运。",
            "{prisoner_nameDef}因失败而愤怒地吼叫着。",
            "{capturer_nameDef}为了制服{prisoner_nameDef}而不断掌掴{prisoner_objective}。",
            "{capturer_nameDef}扯着{prisoner_nameDef}的耳朵。",
            "{capturer_nameDef}反锁着{prisoner_nameDef}的关节。",
            "{capturer_nameDef}对着{prisoner_nameDef}的脸啐了口唾沫。",
            "{capturer_nameDef}大笑着，而{prisoner_nameDef}眼中涌出了泪水。",
            "{capturer_nameDef}毫无缘由地踹着{prisoner_nameDef}。"
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
        },
        "source_def_name": "Captured"
      },
      "execution": {
        "event_nouns": [
          "{executioner_nameDef}处决{prisoner_nameDef}",
          "{prisoner_nameDef}被{executioner_nameDef}处决",
          "{prisoner_nameDef}的末日",
          "{prisoner_nameShortDef}的死刑"
        ],
        "main_images": [
          "{executioner_nameFull}正在处决{prisoner_nameFull}，[circumstance_group]",
          "{executioner_nameFull}正将{prisoner_nameFull}处以死刑，[circumstance_group]",
          "{executioner_nameFull}正准备处决{prisoner_nameFull}，[circumstance_group]",
          "{executioner_nameFull}走进牢房，准备处决{prisoner_nameFull}，[circumstance_group]"
        ],
        "detail_sentences": [
          "{executioner_nameDef}满头大汗。",
          "{executioner_nameDef}在碎碎念。",
          "鲜血溅到{executioner_nameDef}脸上。",
          "{prisoner_nameDef}抽搐着扭动着。",
          "{prisoner_nameDef}似乎彻底放弃了。",
          "{prisoner_nameDef}已经闭上了眼睛，似乎在祈祷着什么。",
          "{prisoner_nameDef}看上去满脸不屑。"
        ],
        "style_sentences": [],
        "scene_phrases": [
          "而{prisoner_pronoun}在地上翻滚",
          "而{prisoner_pronoun}痛苦地扭动",
          "而{prisoner_pronoun}恐惧地大声喊叫",
          "相当专业而效率",
          "相当粗暴而外行",
          "明显用力过重",
          "同时带着开心的心情",
          "同时带着征服的笑容",
          "同时{executioner_possessive}眼中充满了泪水",
          "同时绝对冷漠的注视着",
          "同时施以额外的痛苦",
          "同时正想着别的什么东西",
          "以顾全大局"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{executioner_nameDef}处决{prisoner_nameDef}",
            "{prisoner_nameDef}被{executioner_nameDef}处决",
            "{prisoner_nameDef}的末日",
            "{prisoner_nameShortDef}的死刑"
          ],
          "image": [
            "{executioner_nameFull}正在处决{prisoner_nameFull}，[circumstance_group]",
            "{executioner_nameFull}正将{prisoner_nameFull}处以死刑，[circumstance_group]",
            "{executioner_nameFull}正准备处决{prisoner_nameFull}，[circumstance_group]",
            "{executioner_nameFull}走进牢房，准备处决{prisoner_nameFull}，[circumstance_group]"
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
            "同时{executioner_possessive}眼中充满了泪水",
            "同时绝对冷漠的注视着",
            "同时施以额外的痛苦",
            "同时正想着别的什么东西",
            "以顾全大局"
          ],
          "desc_sentence": [
            "{executioner_nameDef}满头大汗。",
            "{executioner_nameDef}在碎碎念。",
            "鲜血溅到{executioner_nameDef}脸上。",
            "{prisoner_nameDef}抽搐着扭动着。",
            "{prisoner_nameDef}似乎彻底放弃了。",
            "{prisoner_nameDef}已经闭上了眼睛，似乎在祈祷着什么。",
            "{prisoner_nameDef}看上去满脸不屑。"
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
            "同时{executioner_possessive}眼中充满了泪水",
            "同时绝对冷漠的注视着",
            "同时施以额外的痛苦",
            "同时正想着别的什么东西",
            "以顾全大局"
          ]
        },
        "source_def_name": "ExecutedPrisoner"
      },
      "kidnap": {
        "event_nouns": [
          "{kidnapper_nameDef}绑架{victim_nameDef}",
          "{victim_nameDef}被{kidnapper_nameDef}掳走",
          "{victim_nameDef}被绑架"
        ],
        "main_images": [
          "{kidnapper_nameFull}正在将{victim_nameFull}抓走带回{kidnapper_factionName}，[circumstance_group]",
          "{kidnapper_factionName}的{kidnapper_nameFull}正在绑架{victim_nameFull}，[circumstance_group]",
          "{kidnapper_nameFull}正在绑架{victim_nameFull}，[circumstance_group]"
        ],
        "detail_sentences": [
          "{victim_nameDef}似乎彻底放弃了抵抗。",
          "{victim_nameDef}已经闭上了眼睛，似乎在祈祷着什么。",
          "{victim_nameDef}看上去满脸不屑。",
          "{victim_nameDef}因愤怒和恐惧而大声喊叫。",
          "{victim_nameDef}看上去浑身是伤，精疲力竭。",
          "{victim_nameDef}看上去伤得很重。"
        ],
        "style_sentences": [],
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
            "{kidnapper_nameDef}绑架{victim_nameDef}",
            "{victim_nameDef}被{kidnapper_nameDef}掳走",
            "{victim_nameDef}被绑架"
          ],
          "image": [
            "{kidnapper_nameFull}正在将{victim_nameFull}抓走带回{kidnapper_factionName}，[circumstance_group]",
            "{kidnapper_factionName}的{kidnapper_nameFull}正在绑架{victim_nameFull}，[circumstance_group]",
            "{kidnapper_nameFull}正在绑架{victim_nameFull}，[circumstance_group]"
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
            "{victim_nameDef}似乎彻底放弃了抵抗。",
            "{victim_nameDef}已经闭上了眼睛，似乎在祈祷着什么。",
            "{victim_nameDef}看上去满脸不屑。",
            "{victim_nameDef}因愤怒和恐惧而大声喊叫。",
            "{victim_nameDef}看上去浑身是伤，精疲力竭。",
            "{victim_nameDef}看上去伤得很重。"
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
        },
        "source_def_name": "KidnappedColonist"
      },
      "cryptosleep_enter": {
        "event_nouns": [
          "{pawn_nameDef}进入休眠状态"
        ],
        "main_images": [
          "{pawn_nameFull}躺在休眠舱里，[circumstance_group]",
          "{pawn_nameFull}打开一个空的休眠舱，[circumstance_group]",
          "{pawn_nameFull}将自己封闭在休眠舱里，[circumstance_group]",
          "{pawn_nameFull}透过休眠舱的内壁观看这个即将要离开的世界，[circumstance_group]"
        ],
        "detail_sentences": [
          "[Quantity_adjphrase][Animal]在附近休息。",
          "[Quantity_adjphrase][Enemy]正在靠近这个地区。",
          "{pawn_nameDef}目光坚定。",
          "{pawn_nameDef}明显受了伤。",
          "背景中[Color]的极光在闪烁。",
          "[Quantity_adjphrase]装载着生物的休眠舱排列在四周。"
        ],
        "style_sentences": [],
        "scene_phrases": [
          "带着[AdjectiveAngsty]的神情",
          "陷入沉思",
          "凝视着远方的[TerrainFeature]",
          "悄悄地自言自语"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{pawn_nameDef}进入休眠状态"
          ],
          "image": [
            "{pawn_nameFull}躺在休眠舱里，[circumstance_group]",
            "{pawn_nameFull}打开一个空的休眠舱，[circumstance_group]",
            "{pawn_nameFull}将自己封闭在休眠舱里，[circumstance_group]",
            "{pawn_nameFull}透过休眠舱的内壁观看这个即将要离开的世界，[circumstance_group]"
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
            "{pawn_nameDef}目光坚定。",
            "{pawn_nameDef}明显受了伤。",
            "背景中[Color]的极光在闪烁。",
            "[Quantity_adjphrase]装载着生物的休眠舱排列在四周。"
          ],
          "circumstance_group": [
            "带着[AdjectiveAngsty]的神情",
            "陷入沉思",
            "凝视着远方的[TerrainFeature]",
            "悄悄地自言自语"
          ]
        },
        "source_def_name": "EnteredCryptosleep"
      },
      "cryptosleep_place": {
        "event_nouns": [
          "{carrier_nameDef}将{sleeper_nameDef}放入休眠舱"
        ],
        "main_images": [
          "{carrier_nameFull}将{sleeper_nameDef}放入休眠舱，[circumstance_group]",
          "{carrier_nameFull}打开一个空的休眠舱用来盛放{sleeper_nameDef}，[circumstance_group]",
          "{carrier_nameFull}将{sleeper_nameDef}封闭在休眠舱里，[circumstance_group]",
          "{carrier_nameFull}转身走开，{sleeper_nameDef}则透过运输舱内壁向外看，[circumstance_group]"
        ],
        "detail_sentences": [
          "[Quantity_adjphrase][Animal]在附近休息。",
          "[Quantity_adjphrase][Enemy]正在靠近这个地区。",
          "{carrier_nameDef}目光坚定。",
          "天空灰蒙蒙的。"
        ],
        "style_sentences": [],
        "scene_phrases": [
          "带着[AdjectiveAngsty]的神情",
          "带着[AdjectiveFriendly]的神情",
          "带着[AdjectiveBadass]的神情",
          "陷入沉思",
          "凝视着远方的[TerrainFeature]",
          "两者之间的矛盾显而易见"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{carrier_nameDef}将{sleeper_nameDef}放入休眠舱"
          ],
          "image": [
            "{carrier_nameFull}将{sleeper_nameDef}放入休眠舱，[circumstance_group]",
            "{carrier_nameFull}打开一个空的休眠舱用来盛放{sleeper_nameDef}，[circumstance_group]",
            "{carrier_nameFull}将{sleeper_nameDef}封闭在休眠舱里，[circumstance_group]",
            "{carrier_nameFull}转身走开，{sleeper_nameDef}则透过运输舱内壁向外看，[circumstance_group]"
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
            "{carrier_nameDef}目光坚定。",
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
        },
        "source_def_name": "PutIntoCryptosleep"
      },
      "lover_union": {
        "event_nouns": [
          "{pursuer_nameDef}与{accepter_nameDef}成为情人"
        ],
        "main_images": [
          "{pursuer_nameFull}在{accepter_nameFull}的耳边甜言蜜语，[circumstance_group]",
          "{pursuer_nameFull}牵着{accepter_nameFull}的手走上了床，[circumstance_group]",
          "{pursuer_nameFull}和{accepter_nameFull}在床上嬉戏，[circumstance_group]",
          "{pursuer_nameFull}深吻着{accepter_nameFull}，[circumstance_group]"
        ],
        "detail_sentences": [
          "{pursuer_nameDef}幸福地依偎着{accepter_nameDef}。",
          "{pursuer_nameDef}深情注视着{accepter_nameDef}。",
          "{pursuer_nameDef}对{accepter_nameDef}吹着气。",
          "{pursuer_nameDef}和{accepter_nameDef}灵魂交融。",
          "{pursuer_nameDef}与{accepter_nameDef}合二为一。",
          "{pursuer_nameDef}恣意地爱抚{accepter_nameDef}。"
        ],
        "style_sentences": [],
        "scene_phrases": [
          "两人的床难以置信的大",
          "两人在床上翻云覆雨",
          "两人都穿着很少的衣服",
          "两人都被汗水湿透"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{pursuer_nameDef}与{accepter_nameDef}成为情人"
          ],
          "image": [
            "{pursuer_nameFull}在{accepter_nameFull}的耳边甜言蜜语，[circumstance_group]",
            "{pursuer_nameFull}牵着{accepter_nameFull}的手走上了床，[circumstance_group]",
            "{pursuer_nameFull}和{accepter_nameFull}在床上嬉戏，[circumstance_group]",
            "{pursuer_nameFull}深吻着{accepter_nameFull}，[circumstance_group]"
          ],
          "circumstance_phrase": [
            "两人的床难以置信的大",
            "两人在床上翻云覆雨",
            "两人都穿着很少的衣服",
            "两人都被汗水湿透"
          ],
          "desc_sentence": [
            "{pursuer_nameDef}幸福地依偎着{accepter_nameDef}。",
            "{pursuer_nameDef}深情注视着{accepter_nameDef}。",
            "{pursuer_nameDef}对{accepter_nameDef}吹着气。",
            "{pursuer_nameDef}和{accepter_nameDef}灵魂交融。",
            "{pursuer_nameDef}与{accepter_nameDef}合二为一。",
            "{pursuer_nameDef}恣意地爱抚{accepter_nameDef}。"
          ],
          "circumstance_group": [
            "两人的床难以置信的大",
            "两人在床上翻云覆雨",
            "两人都穿着很少的衣服",
            "两人都被汗水湿透"
          ]
        },
        "source_def_name": "BecameLover"
      },
      "breakup": {
        "event_nouns": [
          "{dumper_nameDef}与{rejected_nameDef}感情破裂"
        ],
        "main_images": [
          "{dumper_nameFull}和{rejected_nameFull}相视而坐，两人的交谈并不愉快，[circumstance_group]",
          "{dumper_nameFull}站得离{rejected_nameFull}远远的，[circumstance_group]",
          "{dumper_nameFull}把{rejected_nameFull}推下了床，[circumstance_group]",
          "{dumper_nameFull}拒绝{rejected_nameFull}的拥抱，[circumstance_group]"
        ],
        "detail_sentences": [
          "{rejected_nameDef}情不自禁地啜泣。",
          "{rejected_nameDef}一边发出嘲笑，一边哭泣。",
          "{rejected_nameDef}震惊地呆立当场。",
          "{dumper_nameDef}在形式上和{rejected_nameDef}分开。",
          "{rejected_nameDef}颤抖着瘫坐在地上。",
          "{rejected_nameDef}指着{dumper_nameDef}，气得说不出话。"
        ],
        "style_sentences": [],
        "scene_phrases": [
          "那是一个令人悲伤的时刻",
          "其他人尴尬地移开目光",
          "其他人在一旁围观"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{dumper_nameDef}与{rejected_nameDef}感情破裂"
          ],
          "image": [
            "{dumper_nameFull}和{rejected_nameFull}相视而坐，两人的交谈并不愉快，[circumstance_group]",
            "{dumper_nameFull}站得离{rejected_nameFull}远远的，[circumstance_group]",
            "{dumper_nameFull}把{rejected_nameFull}推下了床，[circumstance_group]",
            "{dumper_nameFull}拒绝{rejected_nameFull}的拥抱，[circumstance_group]"
          ],
          "circumstance_phrase": [
            "那是一个令人悲伤的时刻",
            "其他人尴尬地移开目光",
            "其他人在一旁围观"
          ],
          "desc_sentence": [
            "{rejected_nameDef}情不自禁地啜泣。",
            "{rejected_nameDef}一边发出嘲笑，一边哭泣。",
            "{rejected_nameDef}震惊地呆立当场。",
            "{dumper_nameDef}在形式上和{rejected_nameDef}分开。",
            "{rejected_nameDef}颤抖着瘫坐在地上。",
            "{rejected_nameDef}指着{dumper_nameDef}，气得说不出话。"
          ],
          "circumstance_group": [
            "那是一个令人悲伤的时刻",
            "其他人尴尬地移开目光",
            "其他人在一旁围观"
          ]
        },
        "source_def_name": "Breakup"
      },
      "animal_bond": {
        "event_nouns": [
          "{human_nameDef}与{animal_nameDef}的牵绊"
        ],
        "main_images": [
          "{human_nameFull}与{animal_nameFull}产生牵绊，[circumstance_group]",
          "{human_nameFull}将{animal_nameFull}视为自己的爱宠，[circumstance_group]",
          "{human_nameFull}意识到{animal_nameFull}已经成为自己的家人，[circumstance_group]"
        ],
        "detail_sentences": [
          "{animal_nameDef}幸福地依偎着{human_nameDef}。",
          "{animal_nameDef}看起来在爱意中沉沉欲睡。",
          "{animal_nameDef}站得笔直，看起来很高贵。",
          "{animal_nameDef}对此积极地响应。"
        ],
        "style_sentences": [],
        "scene_phrases": [
          "其他动物在一旁围观",
          "注视着{animal_nameDef}的双眼",
          "感到心满意足"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{human_nameDef}与{animal_nameDef}的牵绊"
          ],
          "image": [
            "{human_nameFull}与{animal_nameFull}产生牵绊，[circumstance_group]",
            "{human_nameFull}将{animal_nameFull}视为自己的爱宠，[circumstance_group]",
            "{human_nameFull}意识到{animal_nameFull}已经成为自己的家人，[circumstance_group]"
          ],
          "circumstance_phrase": [
            "其他动物在一旁围观",
            "注视着{animal_nameDef}的双眼",
            "感到心满意足"
          ],
          "desc_sentence": [
            "{animal_nameDef}幸福地依偎着{human_nameDef}。",
            "{animal_nameDef}看起来在爱意中沉沉欲睡。",
            "{animal_nameDef}站得笔直，看起来很高贵。",
            "{animal_nameDef}对此积极地响应。"
          ],
          "circumstance_group": [
            "其他动物在一旁围观",
            "注视着{animal_nameDef}的双眼",
            "感到心满意足"
          ]
        },
        "source_def_name": "BondedWithAnimal"
      },
      "trade_deal": {
        "event_nouns": [
          "一次{seller_nameFull}与{buyer_nameFull}之间的交易"
        ],
        "main_images": [
          "{buyer_nameFull}从{seller_nameFull}购入了一些货物，[circumstance_group]",
          "{seller_nameFull}在向{buyer_nameFull}兜售商品，[circumstance_group]"
        ],
        "detail_sentences": [
          "{buyer_nameDef}在仔细查看{seller_nameDef}的商品。",
          "{seller_nameDef}在揣测{buyer_nameDef}的心思。",
          "双方在讨价还价。",
          "{buyer_nameDef}与{seller_nameDef}为价格而争吵。",
          "{seller_nameDef}与{buyer_nameDef}就价格达成了一致。",
          "{buyer_nameDef}正在付钱。",
          "{seller_nameDef}正在数钱。",
          "{buyer_nameDef}正在验货。"
        ],
        "style_sentences": [],
        "scene_phrases": [
          "商人露出贪婪的表情",
          "同时{seller_nameDef}带着职业般的微笑面向{buyer_shortNameDef}"
        ],
        "grammar_pools": {
          "tale_noun": [
            "一次{seller_nameFull}与{buyer_nameFull}之间的交易"
          ],
          "image": [
            "{buyer_nameFull}从{seller_nameFull}购入了一些货物，[circumstance_group]",
            "{seller_nameFull}在向{buyer_nameFull}兜售商品，[circumstance_group]"
          ],
          "circumstance_phrase": [
            "商人露出贪婪的表情",
            "同时{seller_nameDef}带着职业般的微笑面向{buyer_shortNameDef}"
          ],
          "desc_sentence": [
            "{buyer_nameDef}在仔细查看{seller_nameDef}的商品。",
            "{seller_nameDef}在揣测{buyer_nameDef}的心思。",
            "双方在讨价还价。",
            "{buyer_nameDef}与{seller_nameDef}为价格而争吵。",
            "{seller_nameDef}与{buyer_nameDef}就价格达成了一致。",
            "{buyer_nameDef}正在付钱。",
            "{seller_nameDef}正在数钱。",
            "{buyer_nameDef}正在验货。"
          ],
          "circumstance_group": [
            "商人露出贪婪的表情",
            "同时{seller_nameDef}带着职业般的微笑面向{buyer_shortNameDef}"
          ]
        },
        "source_def_name": "TradedWith"
      },
      "strip_target": {
        "event_nouns": [
          "{taker_nameDef}扒光{stripped_nameDef}"
        ],
        "main_images": [
          "{taker_nameFull}在大庭广众之下扒光了{stripped_nameFull}的衣服，[circumstance_group]",
          "{taker_nameFull}脱掉了{stripped_nameFull}的衣服，[circumstance_group]",
          "{taker_nameFull}抱着一堆[Apparel]站在浑身赤裸的{stripped_nameFull}身旁，[circumstance_group]",
          "{taker_nameFull}耐心地等待{stripped_nameFull}脱掉{stripped_possessive}衣服，[circumstance_group]"
        ],
        "detail_sentences": [
          "{stripped_nameDef}显然对这一切感到很生气。",
          "{stripped_nameDef}浑身都是不明原因的水汽。",
          "{stripped_nameDef}无缘无故地喘着粗气。",
          "{stripped_nameDef}轻轻抚弄着一丛灌木。",
          "{stripped_nameDef}只露出[AdjectiveAngsty]的神情。"
        ],
        "style_sentences": [],
        "scene_phrases": [
          "带着明确的目的",
          "没有一丝羞愧",
          "其他人在一旁围观",
          "没有明显的理由",
          "不明真相的动物在一旁围观"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{taker_nameDef}扒光{stripped_nameDef}"
          ],
          "image": [
            "{taker_nameFull}在大庭广众之下扒光了{stripped_nameFull}的衣服，[circumstance_group]",
            "{taker_nameFull}脱掉了{stripped_nameFull}的衣服，[circumstance_group]",
            "{taker_nameFull}抱着一堆[Apparel]站在浑身赤裸的{stripped_nameFull}身旁，[circumstance_group]",
            "{taker_nameFull}耐心地等待{stripped_nameFull}脱掉{stripped_possessive}衣服，[circumstance_group]"
          ],
          "circumstance_phrase": [
            "带着明确的目的",
            "没有一丝羞愧",
            "其他人在一旁围观",
            "没有明显的理由",
            "不明真相的动物在一旁围观"
          ],
          "desc_sentence": [
            "{stripped_nameDef}显然对这一切感到很生气。",
            "{stripped_nameDef}浑身都是不明原因的水汽。",
            "{stripped_nameDef}无缘无故地喘着粗气。",
            "{stripped_nameDef}轻轻抚弄着一丛灌木。",
            "{stripped_nameDef}只露出[AdjectiveAngsty]的神情。"
          ],
          "circumstance_group": [
            "带着明确的目的",
            "没有一丝羞愧",
            "其他人在一旁围观",
            "没有明显的理由",
            "不明真相的动物在一旁围观"
          ]
        },
        "source_def_name": "Stripped"
      },
      "snowman_build": {
        "event_nouns": [
          "{pawn_nameDef}堆雪人",
          "{pawn_nameDef}在雪地里玩耍"
        ],
        "main_images": [
          "{pawn_nameFull}做了一个雪球，[circumstance_group]",
          "{pawn_nameFull}在地上滚出一个巨大的雪球，[circumstance_group]",
          "{pawn_nameFull}用[Vegetable]让雪人有了粗糙的人脸外观，[circumstance_group]",
          "{pawn_nameFull}躺在雪地里，[circumstance_group]"
        ],
        "detail_sentences": [
          "背景中[Color]的极光闪烁。",
          "远处[Community]被白雪覆盖。",
          "种植着[Vegetable]的田地被雪掩埋，几乎看不到了。",
          "被冰雪覆盖的[TerrainFeature]出现在远方。"
        ],
        "style_sentences": [],
        "scene_phrases": [
          "身上裹着厚实的御寒衣物",
          "灰暗的天空下着小雪",
          "而{pawn_possessive}朋友们建造了一座堡垒",
          "而{pawn_possessive}朋友们建造了一个雪人家族"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{pawn_nameDef}堆雪人",
            "{pawn_nameDef}在雪地里玩耍"
          ],
          "image": [
            "{pawn_nameFull}做了一个雪球，[circumstance_group]",
            "{pawn_nameFull}在地上滚出一个巨大的雪球，[circumstance_group]",
            "{pawn_nameFull}用[Vegetable]让雪人有了粗糙的人脸外观，[circumstance_group]",
            "{pawn_nameFull}躺在雪地里，[circumstance_group]"
          ],
          "circumstance_phrase": [
            "身上裹着厚实的御寒衣物",
            "灰暗的天空下着小雪",
            "而{pawn_possessive}朋友们建造了一座堡垒",
            "而{pawn_possessive}朋友们建造了一个雪人家族"
          ],
          "desc_sentence": [
            "背景中[Color]的极光闪烁。",
            "远处[Community]被白雪覆盖。",
            "种植着[Vegetable]的田地被雪掩埋，几乎看不到了。",
            "被冰雪覆盖的[TerrainFeature]出现在远方。"
          ],
          "circumstance_group": [
            "身上裹着厚实的御寒衣物",
            "灰暗的天空下着小雪",
            "而{pawn_possessive}朋友们建造了一座堡垒",
            "而{pawn_possessive}朋友们建造了一个雪人家族"
          ]
        },
        "source_def_name": "BuiltSnowman"
      },
      "meteorite_impact": {
        "event_nouns": [
          "一块陨石坠落在{pawn_nameDef}所在的[Community]附近",
          "一块陨石砸在距离{pawn_nameDef}所在的[Community]不远的地方"
        ],
        "main_images": [
          "一块[AdjectiveLarge]的岩石尾部拖着[Color]的火焰，[airborne_circumstance]",
          "一个明亮的光点[airborne_circumstance]",
          "一个[AdjectiveLarge]的[Color]火球[airborne_circumstance]",
          "一块[AdjectiveLarge]的石头[ground_circumstance]",
          "一块[AdjectiveLarge]的[Color]烧焦的石头[ground_circumstance]",
          "一块[Color]的石柱[ground_circumstance]"
        ],
        "detail_sentences": [
          "{pawn_nameDef}好奇地围观。",
          "{pawn_nameDef}兴奋地围观。",
          "{pawn_nameDef}十分震惊地望着这一幕。",
          "[Quantity_adjphrase]远处的人影从附近的[TerrainFeature]接近。",
          "[Quantity_adjphrase]远处的人影准备了工具和设备。",
          "[Quantity_adjphrase][Animal]不安地来回走动。",
          "四周寂静而沉闷。"
        ],
        "style_sentences": [],
        "scene_phrases": [],
        "grammar_pools": {
          "tale_noun": [
            "一块陨石坠落在{pawn_nameDef}所在的[Community]附近",
            "一块陨石砸在距离{pawn_nameDef}所在的[Community]不远的地方"
          ],
          "image": [
            "一块[AdjectiveLarge]的岩石尾部拖着[Color]的火焰，[airborne_circumstance]",
            "一个明亮的光点[airborne_circumstance]",
            "一个[AdjectiveLarge]的[Color]火球[airborne_circumstance]",
            "一块[AdjectiveLarge]的石头[ground_circumstance]",
            "一块[AdjectiveLarge]的[Color]烧焦的石头[ground_circumstance]",
            "一块[Color]的石柱[ground_circumstance]"
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
            "{pawn_nameDef}好奇地围观。",
            "{pawn_nameDef}兴奋地围观。",
            "{pawn_nameDef}十分震惊地望着这一幕。",
            "[Quantity_adjphrase]远处的人影从附近的[TerrainFeature]接近。",
            "[Quantity_adjphrase]远处的人影准备了工具和设备。",
            "[Quantity_adjphrase][Animal]不安地来回走动。",
            "四周寂静而沉闷。"
          ]
        },
        "source_def_name": "MeteoriteImpact"
      },
      "toxic_fallout": {
        "event_nouns": [
          "有毒尘埃笼罩在{pawn_nameDef}所在的[Community]",
          "{pawn_nameDef}所在的[Community]附近空气变得有毒"
        ],
        "main_images": [
          "不祥的天空[circumstance_group]",
          "空气越来越浑浊，似乎[circumstance_group]",
          "大地泛着柔和的光，[circumstance_group]",
          "田地里的植物枯萎死去，[circumstance_group]",
          "[Quantity_adjphrase]坟墓[circumstance_group]"
        ],
        "detail_sentences": [
          "{pawn_nameDef}躺在地上，{pawn_possessive}身体扭曲成不寻常的角度。",
          "{pawn_nameDef}躲在[TerrainFeature]附近，以[AdjectiveAngsty]的神情凝视这一切。",
          "{pawn_nameDef}十分震惊地望着这一幕。",
          "{pawn_nameDef}安静地休息，{pawn_possessive}脸上出了不少汗。",
          "[Quantity_adjphrase]死掉的[Animal]倒在地上。",
          "[Quantity_adjphrase]濒死的[Animal]倒在地上。",
          "[Quantity_adjphrase][Animal]不安地来回走动。"
        ],
        "style_sentences": [],
        "scene_phrases": [
          "看不到任何生命迹象",
          "周围被散发着微光的尘埃笼罩",
          "组成一个图案，预示着死亡",
          "等待着毒雾消散"
        ],
        "grammar_pools": {
          "tale_noun": [
            "有毒尘埃笼罩在{pawn_nameDef}所在的[Community]",
            "{pawn_nameDef}所在的[Community]附近空气变得有毒"
          ],
          "image": [
            "不祥的天空[circumstance_group]",
            "空气越来越浑浊，似乎[circumstance_group]",
            "大地泛着柔和的光，[circumstance_group]",
            "田地里的植物枯萎死去，[circumstance_group]",
            "[Quantity_adjphrase]坟墓[circumstance_group]"
          ],
          "circumstance_phrase": [
            "看不到任何生命迹象",
            "周围被散发着微光的尘埃笼罩",
            "组成一个图案，预示着死亡",
            "等待着毒雾消散"
          ],
          "desc_sentence": [
            "{pawn_nameDef}躺在地上，{pawn_possessive}身体扭曲成不寻常的角度。",
            "{pawn_nameDef}躲在[TerrainFeature]附近，以[AdjectiveAngsty]的神情凝视这一切。",
            "{pawn_nameDef}十分震惊地望着这一幕。",
            "{pawn_nameDef}安静地休息，{pawn_possessive}脸上出了不少汗。",
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
        },
        "source_def_name": "ToxicFallout"
      },
      "aurora": {
        "event_nouns": [
          "极光出现在{pawn_nameDef}所在的[Community]",
          "极光在{pawn_nameDef}所在的[Community]上空出现",
          "{pawn_nameDef}所在的[Community]被极光照亮"
        ],
        "main_images": [
          "将天空照亮的[Color]和[Color]的光[circumstance_phrase]",
          "组成美妙图案的[Color]光[circumstance_phrase]",
          "网状的[Color]光[circumstance_phrase]",
          "[Color]向下的弧线带着[Color]高光，[circumstance_phrase]",
          "舞动的[Color]光[circumstance_group]"
        ],
        "detail_sentences": [
          "天空之下，{pawn_nameDef}在玩[Game]，面带[AdjectiveFriendly]的神情。",
          "{pawn_nameDef}望着这一切，{pawn_possessive}脸上带着惊讶的表情。",
          "[Quantity_adjphrase][PersonJob]仰望天空。",
          "{pawn_nameDef}坐在[TerrainFeature]附近，注视着天空。",
          "[Quantity_adjphrase][Animal]平静地徘徊。",
          "附近没有[Enemy]。"
        ],
        "style_sentences": [],
        "scene_phrases": [
          "覆盖了一片[TerrainFeature]",
          "照亮了一片[TerrainFeature]",
          "飘浮在[Community]上空",
          "将[TerrainFeature]和[TerrainFeature]连成一片"
        ],
        "grammar_pools": {
          "tale_noun": [
            "极光出现在{pawn_nameDef}所在的[Community]",
            "极光在{pawn_nameDef}所在的[Community]上空出现",
            "{pawn_nameDef}所在的[Community]被极光照亮"
          ],
          "image": [
            "将天空照亮的[Color]和[Color]的光[circumstance_phrase]",
            "组成美妙图案的[Color]光[circumstance_phrase]",
            "网状的[Color]光[circumstance_phrase]",
            "[Color]向下的弧线带着[Color]高光，[circumstance_phrase]",
            "舞动的[Color]光[circumstance_group]"
          ],
          "circumstance_phrase": [
            "覆盖了一片[TerrainFeature]",
            "照亮了一片[TerrainFeature]",
            "飘浮在[Community]上空",
            "将[TerrainFeature]和[TerrainFeature]连成一片"
          ],
          "desc_sentence": [
            "天空之下，{pawn_nameDef}在玩[Game]，面带[AdjectiveFriendly]的神情。",
            "{pawn_nameDef}望着这一切，{pawn_possessive}脸上带着惊讶的表情。",
            "[Quantity_adjphrase][PersonJob]仰望天空。",
            "{pawn_nameDef}坐在[TerrainFeature]附近，注视着天空。",
            "[Quantity_adjphrase][Animal]平静地徘徊。",
            "附近没有[Enemy]。"
          ],
          "circumstance_group": [
            "覆盖了一片[TerrainFeature]",
            "照亮了一片[TerrainFeature]",
            "飘浮在[Community]上空",
            "将[TerrainFeature]和[TerrainFeature]连成一片"
          ]
        },
        "source_def_name": "Aurora"
      },
      "flashstorm": {
        "event_nouns": [
          "闪电风暴威胁{pawn_nameDef}所在的[Community]",
          "{pawn_nameDef}所在的[Community]受到恶劣天气侵袭"
        ],
        "main_images": [
          "[Quantity_adjphrase]闪电强袭，[circumstance_phrase]",
          "[behavior]火墙[circumstance_phrase]",
          "[behavior][Color]火墙[circumstance_phrase]",
          "[behavior]由烟灰组成的云雾[circumstance_phrase]",
          "[behavior]火浪[circumstance_phrase]"
        ],
        "detail_sentences": [
          "{pawn_nameDef}十分震惊地望着这一幕。",
          "{pawn_nameDef}望着这一切，{pawn_possessive}脸上充满恐惧。",
          "{pawn_nameDef}协调人手抵御灾害。",
          "[Quantity_adjphrase][PersonJob]匆忙准备。",
          "[Quantity_adjphrase][Animal]逃离该地区。",
          "所有动物都逃离了该地区。"
        ],
        "style_sentences": [],
        "scene_phrases": [
          "向[Community]袭来",
          "在令人生畏的云层下面",
          "几乎将一片[TerrainFeature]包围",
          "几乎将[Quantity_adjphrase][TerrainFeature]包围"
        ],
        "grammar_pools": {
          "tale_noun": [
            "闪电风暴威胁{pawn_nameDef}所在的[Community]",
            "{pawn_nameDef}所在的[Community]受到恶劣天气侵袭"
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
            "{pawn_nameDef}十分震惊地望着这一幕。",
            "{pawn_nameDef}望着这一切，{pawn_possessive}脸上充满恐惧。",
            "{pawn_nameDef}协调人手抵御灾害。",
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
        },
        "source_def_name": "Flashstorm"
      },
      "insect_infestation": {
        "event_nouns": [
          "{pawn_nameDef}所在的[Community]被虫灾侵袭"
        ],
        "main_images": [
          "一群巨型甲虫[circumstance_phrase]",
          "[Quantity_adjphrase]巨型蜘蛛[circumstance_phrase]",
          "压倒性数量的[Color]虫潮[circumstance_phrase]",
          "黑压压的一片[circumstance_phrase]"
        ],
        "detail_sentences": [
          "{pawn_nameDef}在组织反击。",
          "{pawn_nameDef}使用[Weapon]进行防御。",
          "{pawn_nameDef}受伤倒地。",
          "{pawn_nameDef}用{pawn_possessive}[Weapon]还击。",
          "{pawn_nameDef}带着[AdjectiveBadass]的神情。",
          "{pawn_nameDef}带着[AdjectiveAngsty]的神情。",
          "地上到处都是[Gore]。",
          "[Quantity_adjphrase][PersonJob]逃离该地区。",
          "[Quantity_adjphrase][Animal]逃离该地区。",
          "所有的动物生活都离开了这个地区。"
        ],
        "style_sentences": [],
        "scene_phrases": [
          "正在穿越一片[TerrainFeature]",
          "将[Community]团团围住",
          "正在攻击[Quantity_adjphrase][PersonJob]",
          "从地下钻出来bursting out of the ground",
          "在屠杀[Quantity_adjphrase][Animal]"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{pawn_nameDef}所在的[Community]被虫灾侵袭"
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
            "{pawn_nameDef}在组织反击。",
            "{pawn_nameDef}使用[Weapon]进行防御。",
            "{pawn_nameDef}受伤倒地。",
            "{pawn_nameDef}用{pawn_possessive}[Weapon]还击。",
            "{pawn_nameDef}带着[AdjectiveBadass]的神情。",
            "{pawn_nameDef}带着[AdjectiveAngsty]的神情。",
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
        },
        "source_def_name": "Infestation"
      },
      "manhunter_pack": {
        "event_nouns": [
          "猎杀人类的动物袭击{pawn_nameDef}的[Community]",
          "{pawn_nameDef}所在的[Community]被动物攻击"
        ],
        "main_images": [
          "一群[Animal][circumstance_phrase]",
          "[Quantity_adjphrase][Animal][circumstance_phrase]",
          "一[AdjectiveLarge][Animal][circumstance_phrase]",
          "[Quantity_adjphrase]黑影[circumstance_phrase]",
          "[Quantity_adjphrase]兽影[circumstance_phrase]"
        ],
        "detail_sentences": [
          "{pawn_nameDef}在组织反击。",
          "{pawn_nameDef}用[Weapon]进行防御。",
          "{pawn_nameDef}受伤倒地。",
          "{pawn_nameDef}用{pawn_possessive}[Weapon]还击。",
          "{pawn_nameDef}带着[AdjectiveBadass]的神情。",
          "{pawn_nameDef}带着[AdjectiveAngsty]的神情。",
          "地上到处都是[Gore]。",
          "[Quantity_adjphrase][PersonJob]逃离该地区。",
          "[Quantity_adjphrase][Animal]逃离该地区。"
        ],
        "style_sentences": [],
        "scene_phrases": [
          "正在穿越一片[TerrainFeature]",
          "将[Community]团团围住",
          "正在攻击[Quantity_adjphrase][PersonJob]",
          "在屠杀[Quantity_adjphrase][Animal]",
          "被[hate_emotion]缠身",
          "浑身都是[Gore]"
        ],
        "grammar_pools": {
          "tale_noun": [
            "猎杀人类的动物袭击{pawn_nameDef}的[Community]",
            "{pawn_nameDef}所在的[Community]被动物攻击"
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
            "{pawn_nameDef}在组织反击。",
            "{pawn_nameDef}用[Weapon]进行防御。",
            "{pawn_nameDef}受伤倒地。",
            "{pawn_nameDef}用{pawn_possessive}[Weapon]还击。",
            "{pawn_nameDef}带着[AdjectiveBadass]的神情。",
            "{pawn_nameDef}带着[AdjectiveAngsty]的神情。",
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
        },
        "source_def_name": "ManhunterPack"
      },
      "heatstroke": {
        "event_nouns": [
          "{pawn_nameDef}中暑",
          "{pawn_nameDef}受高温煎熬"
        ],
        "main_images": [
          "{pawn_nameFull}艰难地穿越沙地，[circumstance_group]",
          "{pawn_nameFull}挤在[TerrainFeature]的阴影中躲避炎热，[circumstance_group]",
          "{pawn_nameFull}在寻找水，[circumstance_group]",
          "{pawn_nameFull}在寻找阴凉的地方，[circumstance_group]",
          "{pawn_nameFull}徐徐穿过被烈日烘烤的土地，[circumstance_group]"
        ],
        "detail_sentences": [
          "[Quantity_adjphrase]干燥的[Animal]尸体散落在这片区域。",
          "{pawn_nameDef}的衣服破烂不堪。",
          "背景中恒星发出耀眼的光芒。",
          "这一幕发生在一片炙热的沙漠中。",
          "这一幕似乎发生在室内，紧挨着加热器的地方。",
          "[Quantity_adjphrase]一动不动的[Animal]散落在场景里。",
          "[Quantity_adjphrase]死掉的[Animal]倒在地上。"
        ],
        "style_sentences": [],
        "scene_phrases": [
          "干燥的皮肤已经晒成红色",
          "汗流浃背",
          "干燥的嘴唇已经开裂",
          "伴随着呕吐"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{pawn_nameDef}中暑",
            "{pawn_nameDef}受高温煎熬"
          ],
          "image": [
            "{pawn_nameFull}艰难地穿越沙地，[circumstance_group]",
            "{pawn_nameFull}挤在[TerrainFeature]的阴影中躲避炎热，[circumstance_group]",
            "{pawn_nameFull}在寻找水，[circumstance_group]",
            "{pawn_nameFull}在寻找阴凉的地方，[circumstance_group]",
            "{pawn_nameFull}徐徐穿过被烈日烘烤的土地，[circumstance_group]"
          ],
          "circumstance_phrase": [
            "干燥的皮肤已经晒成红色",
            "汗流浃背",
            "干燥的嘴唇已经开裂",
            "伴随着呕吐"
          ],
          "desc_sentence": [
            "[Quantity_adjphrase]干燥的[Animal]尸体散落在这片区域。",
            "{pawn_nameDef}的衣服破烂不堪。",
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
        },
        "source_def_name": "HeatstrokeRevealed"
      },
      "hypothermia": {
        "event_nouns": [
          "{pawn_nameDef}患上低温症"
        ],
        "main_images": [
          "{pawn_nameFull}艰难地穿越雪地，[circumstance_group]",
          "{pawn_nameFull}挤在[TerrainFeature]旁躲避严寒，[circumstance_group]",
          "{pawn_nameFull}正在寻找能够御寒的[Apparel]，[circumstance_group]",
          "{pawn_nameFull}蜷缩在篝火旁，[circumstance_group]",
          "{pawn_nameFull}正在尝试生火，[circumstance_group]"
        ],
        "detail_sentences": [
          "[Quantity_adjphrase]冰冻的[Animal]尸体散落在这片区域。",
          "{pawn_nameDef}的衣服破烂不堪。",
          "背景中冰冷的蓝色卫星若隐若现。",
          "这一幕发生在一片被白雪覆盖的[TreeType]林里。",
          "这一幕似乎发生在冷库里。",
          "[Quantity_adjphrase]发抖的[Animal]散落在场景里。",
          "[Quantity_adjphrase]死掉的[Animal]倒在地上。"
        ],
        "style_sentences": [],
        "scene_phrases": [
          "他们的脸慢慢地冻青了",
          "并不停地颤抖",
          "身上布满了霜冻的痕迹",
          "同时呼出白色的雾气"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{pawn_nameDef}患上低温症"
          ],
          "image": [
            "{pawn_nameFull}艰难地穿越雪地，[circumstance_group]",
            "{pawn_nameFull}挤在[TerrainFeature]旁躲避严寒，[circumstance_group]",
            "{pawn_nameFull}正在寻找能够御寒的[Apparel]，[circumstance_group]",
            "{pawn_nameFull}蜷缩在篝火旁，[circumstance_group]",
            "{pawn_nameFull}正在尝试生火，[circumstance_group]"
          ],
          "circumstance_phrase": [
            "他们的脸慢慢地冻青了",
            "并不停地颤抖",
            "身上布满了霜冻的痕迹",
            "同时呼出白色的雾气"
          ],
          "desc_sentence": [
            "[Quantity_adjphrase]冰冻的[Animal]尸体散落在这片区域。",
            "{pawn_nameDef}的衣服破烂不堪。",
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
        },
        "source_def_name": "HypothermiaRevealed"
      },
      "exhaustion_collapse": {
        "event_nouns": [
          "{pawn_nameDef}筋疲力尽地倒下"
        ],
        "main_images": [
          "{pawn_nameFull}倒在地上，[circumstance_group]",
          "{pawn_nameFull}躺在地上，[circumstance_group]",
          "{pawn_nameFull}躺在床上，[circumstance_group]",
          "{pawn_nameFull}倒在椅子上，[circumstance_group]",
          "{pawn_nameFull}安静地睡觉，[circumstance_group]"
        ],
        "detail_sentences": [
          "{pawn_nameDef}的最后一个项目就在附近，已经完成。",
          "一座非凡的建筑包围了{pawn_nameDef}。",
          "[Quantity_adjphrase][PersonJob]对{pawn_nameDef}英雄般的壮举心存感激。",
          "[Quantity_adjphrase][PersonJob]也以相似的状态躺在附近。",
          "这一幕发生在一个新建的[Community]。"
        ],
        "style_sentences": [],
        "scene_phrases": [
          "闭上眼睛",
          "看上去疲惫不堪",
          "身上出了很多汗",
          "看上去浑身酸痛"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{pawn_nameDef}筋疲力尽地倒下"
          ],
          "image": [
            "{pawn_nameFull}倒在地上，[circumstance_group]",
            "{pawn_nameFull}躺在地上，[circumstance_group]",
            "{pawn_nameFull}躺在床上，[circumstance_group]",
            "{pawn_nameFull}倒在椅子上，[circumstance_group]",
            "{pawn_nameFull}安静地睡觉，[circumstance_group]"
          ],
          "circumstance_phrase": [
            "闭上眼睛",
            "看上去疲惫不堪",
            "身上出了很多汗",
            "看上去浑身酸痛"
          ],
          "desc_sentence": [
            "{pawn_nameDef}的最后一个项目就在附近，已经完成。",
            "一座非凡的建筑包围了{pawn_nameDef}。",
            "[Quantity_adjphrase][PersonJob]对{pawn_nameDef}英雄般的壮举心存感激。",
            "[Quantity_adjphrase][PersonJob]也以相似的状态躺在附近。",
            "这一幕发生在一个新建的[Community]。"
          ],
          "circumstance_group": [
            "闭上眼睛",
            "看上去疲惫不堪",
            "身上出了很多汗",
            "看上去浑身酸痛"
          ]
        },
        "source_def_name": "Exhausted"
      },
      "cannibalism": {
        "event_nouns": [
          "吃人肉的{pawn_nameDef}"
        ],
        "main_images": [
          "{pawn_nameFull}[eat_gerund]可能是某个人类同伴的肉，[circumstance_group]",
          "{pawn_nameFull}[eat_gerund]从人的手臂上切下来的肉，[circumstance_group]",
          "{pawn_nameFull}[eat_gerund]人类的肉，[circumstance_group]"
        ],
        "detail_sentences": [
          "{pawn_nameDef}的脸上涂满了鲜血和不明汁液。",
          "{pawn_nameDef}满足地吮吸着自己的手指。",
          "{pawn_nameDef}的身前全是鲜血和碎肉。",
          "{pawn_nameDef}身处于一大摊鲜血之间。",
          "{pawn_nameDef}不怀好意地审视着身边的某个人。",
          "人肉闪闪发光，显得鲜美多汁。",
          "人肉碎屑在{pawn_nameDef}身上撒的到处都是。"
        ],
        "style_sentences": [],
        "scene_phrases": [
          "同时信心满满",
          "毫无羞耻",
          "肆无忌惮",
          "其他人在一旁围观",
          "同时兴致勃勃",
          "疯狂地如同{pawn_possessive}生命完全依赖于此一般"
        ],
        "grammar_pools": {
          "tale_noun": [
            "吃人肉的{pawn_nameDef}"
          ],
          "image": [
            "{pawn_nameFull}[eat_gerund]可能是某个人类同伴的肉，[circumstance_group]",
            "{pawn_nameFull}[eat_gerund]从人的手臂上切下来的肉，[circumstance_group]",
            "{pawn_nameFull}[eat_gerund]人类的肉，[circumstance_group]"
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
            "疯狂地如同{pawn_possessive}生命完全依赖于此一般"
          ],
          "desc_sentence": [
            "{pawn_nameDef}的脸上涂满了鲜血和不明汁液。",
            "{pawn_nameDef}满足地吮吸着自己的手指。",
            "{pawn_nameDef}的身前全是鲜血和碎肉。",
            "{pawn_nameDef}身处于一大摊鲜血之间。",
            "{pawn_nameDef}不怀好意地审视着身边的某个人。",
            "人肉闪闪发光，显得鲜美多汁。",
            "人肉碎屑在{pawn_nameDef}身上撒的到处都是。"
          ],
          "circumstance_group": [
            "同时信心满满",
            "毫无羞耻",
            "肆无忌惮",
            "其他人在一旁围观",
            "同时兴致勃勃",
            "疯狂地如同{pawn_possessive}生命完全依赖于此一般"
          ]
        },
        "source_def_name": "AteRawHumanlikeMeat"
      },
      "tox_buildup": {
        "event_nouns": [
          "{pawn_nameDef}中毒",
          "{pawn_nameDef}被毒物侵袭"
        ],
        "main_images": [
          "{pawn_nameFull}步履蹒跚地穿过田地，[circumstance_group]",
          "{pawn_nameFull}躺在地上，[circumstance_group]",
          "{pawn_nameFull}躺在床上，[circumstance_group]",
          "{pawn_nameFull}蜷缩在篝火旁，[circumstance_group]",
          "{pawn_nameFull}正在尝试生火，[circumstance_group]",
          "{pawn_nameFull}无意识地脱掉{pawn_possessive}衣服，[circumstance_group]"
        ],
        "detail_sentences": [
          "[Quantity_adjphrase]扭曲的[Animal]尸体散落在这片区域。",
          "{pawn_nameDef}的衣服四分五裂。",
          "天空是一片阴暗的[Color]。",
          "[Quantity_adjphrase]扭曲的[Color][TerrainFeature]充斥在场景里。",
          "这一幕发生在一片扭曲的[TreeType]林里。",
          "[Quantity_adjphrase]死掉的[Animal]倒在地上。"
        ],
        "style_sentences": [],
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
            "{pawn_nameDef}中毒",
            "{pawn_nameDef}被毒物侵袭"
          ],
          "image": [
            "{pawn_nameFull}步履蹒跚地穿过田地，[circumstance_group]",
            "{pawn_nameFull}躺在地上，[circumstance_group]",
            "{pawn_nameFull}躺在床上，[circumstance_group]",
            "{pawn_nameFull}蜷缩在篝火旁，[circumstance_group]",
            "{pawn_nameFull}正在尝试生火，[circumstance_group]",
            "{pawn_nameFull}无意识地脱掉{pawn_possessive}衣服，[circumstance_group]"
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
            "{pawn_nameDef}的衣服四分五裂。",
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
        },
        "source_def_name": "ToxicityRevealed"
      },
      "message_received": {
        "event_nouns": [
          "{pawn_nameDef}接收到来自老朋友的信息",
          "{pawn_nameDef}所在的[Community]得到一次机会"
        ],
        "main_images": [
          "[circumstance_group]，{pawn_nameDef}打开一封由[delivery_method]送来的信件",
          "[circumstance_group]，{pawn_nameDef}使用由[delivery_method]送来的数据水晶",
          "[circumstance_group]，{pawn_nameDef}将[delivery_method]送来的卷轴展开",
          "[circumstance_group]，{pawn_nameDef}接收到来自[transmission_source]的信号传输",
          "[circumstance_group]，{pawn_nameDef}接收到[transmission_source]发来的讯息",
          "[circumstance_group]，{pawn_nameDef}收到一条由[transmission_source]发出的消息"
        ],
        "detail_sentences": [
          "[Quantity_adjphrase][Animal]在附近徘徊，浑然不知。",
          "随着{pawn_pronoun}阅读信息，{pawn_pronoun}开始变得很[friendlyverb]。",
          "一位[PersonJob]的灵魂从云中注视着四周。",
          "{pawn_nameDef}坐在一片[TerrainFeature]附近。",
          "远处的[Community]依稀可见。",
          "远处的宇宙飞船依稀可见。"
        ],
        "style_sentences": [],
        "scene_phrases": [
          "独自站在一片[TerrainFeature]附近的时候",
          "正在探索一片[TerrainFeature]时",
          "正在照料庄稼的时候",
          "一只[Animal]从身边经过的时候",
          "玩[Game]的时候"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{pawn_nameDef}接收到来自老朋友的信息",
            "{pawn_nameDef}所在的[Community]得到一次机会"
          ],
          "image": [
            "[circumstance_group]，{pawn_nameDef}打开一封由[delivery_method]送来的信件",
            "[circumstance_group]，{pawn_nameDef}使用由[delivery_method]送来的数据水晶",
            "[circumstance_group]，{pawn_nameDef}将[delivery_method]送来的卷轴展开",
            "[circumstance_group]，{pawn_nameDef}接收到来自[transmission_source]的信号传输",
            "[circumstance_group]，{pawn_nameDef}接收到[transmission_source]发来的讯息",
            "[circumstance_group]，{pawn_nameDef}收到一条由[transmission_source]发出的消息"
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
            "{pawn_nameDef}坐在一片[TerrainFeature]附近。",
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
        },
        "source_def_name": "EndGame_ShipEscape"
      },
      "eclipse": {
        "event_nouns": [
          "{pawn_nameDef}所在的[Community]上空出现日蚀"
        ],
        "main_images": [
          "一片不自然的黑暗的天空，[circumstance_phrase]",
          "一片朦胧的天空，[circumstance_phrase]",
          "月亮遮住了太阳，只露出周围的光环，[circumstance_phrase]",
          "[Quantity_adjphrase][Animal]在黑暗中不安地来回走动，[circumstance_phrase]"
        ],
        "detail_sentences": [
          "天空之下，{pawn_nameDef}在玩[Game]，面带[AdjectiveFriendly]的神情。",
          "{pawn_nameDef}望着这一切，{pawn_possessive}脸上带着惊讶的表情。",
          "[Quantity_adjphrase][PersonJob]仰望天空。",
          "{pawn_nameDef}坐在[TerrainFeature]附近，注视着天空。",
          "[Community]的观众安详地望着天空。",
          "附近没有[Enemy]。"
        ],
        "style_sentences": [],
        "scene_phrases": [
          "周围十分寂静",
          "黄昏的颜色覆盖在附近的一片[TerrainFeature]上",
          "黄昏的颜色覆盖了附近的[Quantity_adjphrase][TerrainFeature]",
          "可以看见星星"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{pawn_nameDef}所在的[Community]上空出现日蚀"
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
            "天空之下，{pawn_nameDef}在玩[Game]，面带[AdjectiveFriendly]的神情。",
            "{pawn_nameDef}望着这一切，{pawn_possessive}脸上带着惊讶的表情。",
            "[Quantity_adjphrase][PersonJob]仰望天空。",
            "{pawn_nameDef}坐在[TerrainFeature]附近，注视着天空。",
            "[Community]的观众安详地望着天空。",
            "附近没有[Enemy]。"
          ],
          "circumstance_group": [
            "周围十分寂静",
            "黄昏的颜色覆盖在附近的一片[TerrainFeature]上",
            "黄昏的颜色覆盖了附近的[Quantity_adjphrase][TerrainFeature]",
            "可以看见星星"
          ]
        },
        "source_def_name": "Eclipse"
      },
      "tornado": {
        "event_nouns": [
          "龙卷风在{pawn_nameDef}所在的[Community]附近登陆",
          "{pawn_nameDef}所在的[Community]受到恶劣天气侵袭"
        ],
        "main_images": [
          "[behavior]锥形气旋[circumstance_phrase]",
          "[behavior]龙卷风[circumstance_phrase]",
          "[behavior]飓风[circumstance_phrase]",
          "[behavior][Color]云柱[circumstance_phrase]"
        ],
        "detail_sentences": [
          "{pawn_nameDef}十分震惊地望着这一幕。",
          "{pawn_nameDef}望着这一切，{pawn_possessive}脸上充满恐惧。",
          "{pawn_nameDef}正在协调人手抵御灾害。",
          "[Quantity_adjphrase][PersonJob]匆忙准备。",
          "[Quantity_adjphrase][Animal]逃离该地区。",
          "所有动物都逃离了该地区。"
        ],
        "style_sentences": [],
        "scene_phrases": [
          "卷起碎片",
          "穿过一片[TerrainFeature]",
          "席卷了整片[TerrainFeature]",
          "笼罩了整片[TerrainFeature]"
        ],
        "grammar_pools": {
          "tale_noun": [
            "龙卷风在{pawn_nameDef}所在的[Community]附近登陆",
            "{pawn_nameDef}所在的[Community]受到恶劣天气侵袭"
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
            "{pawn_nameDef}十分震惊地望着这一幕。",
            "{pawn_nameDef}望着这一切，{pawn_possessive}脸上充满恐惧。",
            "{pawn_nameDef}正在协调人手抵御灾害。",
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
        },
        "source_def_name": "Tornado"
      },
      "vomit": {
        "event_nouns": [
          "正在呕吐的{pawn_nameDef}"
        ],
        "main_images": [
          "{pawn_nameFull}正[circumstance_group]往地上呕吐着",
          "{pawn_nameFull}被结块的呕吐物弄了一身，还[circumstance_group]干呕着，看着非常恶心",
          "{pawn_nameFull}弯着腰，[circumstance_group]再次往地上吐了起来",
          "{pawn_nameFull}扶着膝盖，[circumstance_group]往地板上干呕着"
        ],
        "detail_sentences": [
          "{pawn_pronoun}似乎对周围的环境一无所知。",
          "{pawn_possessive}脸似乎变得浮肿。",
          "{pawn_pronoun}几乎不省人事，伸着舌头口吐白沫。",
          "{pawn_pronoun}剧烈地抽搐着。",
          "{pawn_pronoun}满脸羞愧。",
          "{pawn_pronoun}无视当前的环境，似乎想要试着笑一笑。",
          "{pawn_pronoun}看起来虚脱了，仿佛整个人被剧烈的呕吐掏空。",
          "{pawn_pronoun}被一圈非常有艺术感的呕吐物围绕着。",
          "背景中一只[Animal]正在吃地上残存的呕吐物。"
        ],
        "style_sentences": [],
        "scene_phrases": [
          "很痛苦地",
          "一脸羞愧地",
          "在其他人的围观下"
        ],
        "grammar_pools": {
          "tale_noun": [
            "正在呕吐的{pawn_nameDef}"
          ],
          "image": [
            "{pawn_nameFull}正[circumstance_group]往地上呕吐着",
            "{pawn_nameFull}被结块的呕吐物弄了一身，还[circumstance_group]干呕着，看着非常恶心",
            "{pawn_nameFull}弯着腰，[circumstance_group]再次往地上吐了起来",
            "{pawn_nameFull}扶着膝盖，[circumstance_group]往地板上干呕着"
          ],
          "circumstance_phrase": [
            "很痛苦地",
            "一脸羞愧地",
            "在其他人的围观下"
          ],
          "desc_sentence": [
            "{pawn_pronoun}似乎对周围的环境一无所知。",
            "{pawn_possessive}脸似乎变得浮肿。",
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
        },
        "source_def_name": "Vomited"
      },
      "cavein_escape": {
        "event_nouns": [
          "{pawn_nameDef}躲避塌落",
          "{pawn_nameDef}差点被高空坠物砸中"
        ],
        "main_images": [
          "{pawn_nameFull}远离崩落的碎片，[circumstance_group]",
          "{pawn_nameFull}勉强避开塌落，[circumstance_group]",
          "{pawn_nameFull}正在躲避下落的天花板，[circumstance_group]",
          "{pawn_nameFull}避开了致命的落石，[circumstance_group]"
        ],
        "detail_sentences": [
          "{pawn_pronoun}满头大汗。",
          "{pawn_pronoun}显得非常害怕。",
          "{pawn_pronoun}被刮伤，正在流血。",
          "{pawn_pronoun}失去平衡。"
        ],
        "style_sentences": [],
        "scene_phrases": [
          "坠物随后消失在一片瓦砾和灰尘之中",
          "那力量足以压碎一切",
          "那真是难以置信的力量"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{pawn_nameDef}躲避塌落",
            "{pawn_nameDef}差点被高空坠物砸中"
          ],
          "image": [
            "{pawn_nameFull}远离崩落的碎片，[circumstance_group]",
            "{pawn_nameFull}勉强避开塌落，[circumstance_group]",
            "{pawn_nameFull}正在躲避下落的天花板，[circumstance_group]",
            "{pawn_nameFull}避开了致命的落石，[circumstance_group]"
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
        },
        "source_def_name": "CollapseDodged"
      },
      "caravan_ambush": {
        "event_nouns": [
          "{pawn_nameDef}的远行队被伏击"
        ],
        "main_images": [
          "{pawn_nameFull}畏缩着，[circumstance_group]",
          "{pawn_nameFull}为了掩护队友快速移动，[circumstance_group]",
          "{pawn_nameFull}移动射击，[circumstance_group]",
          "{pawn_nameFull}发起进攻，[circumstance_group]",
          "{pawn_nameFull}大声呼喊，[circumstance_group]",
          "{pawn_nameFull}正在奔跑，[circumstance_group]",
          "{pawn_nameFull}和敌人扭打在一起，[circumstance_group]",
          "{pawn_nameFull}在自卫，[circumstance_group]"
        ],
        "detail_sentences": [
          "[Quantity_adjphrase]远处的人影从[TerrainFeature]后面接近。",
          "远处可以看到[Quantity_adjphrase][Enemy]。",
          "{pawn_nameDef}几乎被[Enemy]包围。",
          "{pawn_nameDef}要面对的是一名[Enemy]。",
          "[Quantity_adjphrase][Animal]惊慌失措，纷纷逃离危险地带。",
          "一位[PersonJob]在远处监视着一切。"
        ],
        "style_sentences": [],
        "scene_phrases": [
          "脸上带着[AdjectiveBadass]的神情",
          "脸上带着[AdjectiveBadass]的神情",
          "同时挥舞着{pawn_possessive}武器",
          "同时汗流浃背"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{pawn_nameDef}的远行队被伏击"
          ],
          "image": [
            "{pawn_nameFull}畏缩着，[circumstance_group]",
            "{pawn_nameFull}为了掩护队友快速移动，[circumstance_group]",
            "{pawn_nameFull}移动射击，[circumstance_group]",
            "{pawn_nameFull}发起进攻，[circumstance_group]",
            "{pawn_nameFull}大声呼喊，[circumstance_group]",
            "{pawn_nameFull}正在奔跑，[circumstance_group]",
            "{pawn_nameFull}和敌人扭打在一起，[circumstance_group]",
            "{pawn_nameFull}在自卫，[circumstance_group]"
          ],
          "circumstance_phrase": [
            "脸上带着[AdjectiveBadass]的神情",
            "脸上带着[AdjectiveBadass]的神情",
            "同时挥舞着{pawn_possessive}武器",
            "同时汗流浃背"
          ],
          "desc_sentence": [
            "[Quantity_adjphrase]远处的人影从[TerrainFeature]后面接近。",
            "远处可以看到[Quantity_adjphrase][Enemy]。",
            "{pawn_nameDef}几乎被[Enemy]包围。",
            "{pawn_nameDef}要面对的是一名[Enemy]。",
            "[Quantity_adjphrase][Animal]惊慌失措，纷纷逃离危险地带。",
            "一位[PersonJob]在远处监视着一切。"
          ],
          "circumstance_group": [
            "脸上带着[AdjectiveBadass]的神情",
            "脸上带着[AdjectiveBadass]的神情",
            "同时挥舞着{pawn_possessive}武器",
            "同时汗流浃背"
          ]
        },
        "source_def_name": "CaravanAmbushedByHumanlike"
      },
      "ship_chunk_crash": {
        "event_nouns": [
          "一个远古飞船部件紧急着陆在{pawn_nameDef}所在的[Community]附近",
          "一个远古飞船部件在{pawn_nameDef}所在的[Community]附近着陆",
          "一个危险的飞船部件降落在{pawn_nameDef}所在的[Community]附近"
        ],
        "main_images": [
          "大群[Mechanoid][circumstance_phrase]",
          "一个由[Mechanoid]组成的军队[circumstance_phrase]",
          "[Quantity_adjphrase][Mechanoid][circumstance_phrase]",
          "一[AdjectiveLarge][Mechanoid][circumstance_phrase]",
          "[Quantity_adjphrase][Mechanoid]的黑影[circumstance_phrase]",
          "[Quantity_adjphrase]带有[Color]传感器的[Mechanoid][circumstance_phrase]"
        ],
        "detail_sentences": [
          "{pawn_nameDef}一边组织抵抗，一边[defender_circumstance]。",
          "{pawn_nameDef}用[Weapon]进行防御，同时[defender_circumstance]。",
          "{pawn_nameDef}受伤倒地。",
          "{pawn_nameDef}用{pawn_possessive}[Weapon]还击，同时[defender_circumstance]。",
          "{pawn_nameDef}挺身而出，同时[defender_circumstance]。",
          "{pawn_nameDef}带着[AdjectiveBadass]的神情。",
          "{pawn_nameDef}带着[AdjectiveAngsty]的神情。",
          "地上到处都是[Gore]。",
          "报废的金属随处可见。",
          "[Quantity_adjphrase][PersonJob]逃离该地区。",
          "[Quantity_adjphrase][Animal]逃离该地区。"
        ],
        "style_sentences": [],
        "scene_phrases": [
          "正在穿越一片[TerrainFeature]",
          "将[Community]团团围住",
          "正在攻击[Quantity_adjphrase][PersonJob]",
          "正在屠杀[Quantity_adjphrase][Animal]",
          "身上沾满了[Gore]",
          "被打爆，火花四溅"
        ],
        "grammar_pools": {
          "tale_noun": [
            "一个远古飞船部件紧急着陆在{pawn_nameDef}所在的[Community]附近",
            "一个远古飞船部件在{pawn_nameDef}所在的[Community]附近着陆",
            "一个危险的飞船部件降落在{pawn_nameDef}所在的[Community]附近"
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
            "{pawn_nameDef}一边组织抵抗，一边[defender_circumstance]。",
            "{pawn_nameDef}用[Weapon]进行防御，同时[defender_circumstance]。",
            "{pawn_nameDef}受伤倒地。",
            "{pawn_nameDef}用{pawn_possessive}[Weapon]还击，同时[defender_circumstance]。",
            "{pawn_nameDef}挺身而出，同时[defender_circumstance]。",
            "{pawn_nameDef}带着[AdjectiveBadass]的神情。",
            "{pawn_nameDef}带着[AdjectiveAngsty]的神情。",
            "地上到处都是[Gore]。",
            "报废的金属随处可见。",
            "[Quantity_adjphrase][PersonJob]逃离该地区。",
            "[Quantity_adjphrase][Animal]逃离该地区。"
          ],
          "defender_circumstance": [
            "高喊胜利",
            "闪着[Color]的光",
            "挑衅性地高举拳头",
            "显示{pawn_possessive}肌肉"
          ],
          "circumstance_group": [
            "正在穿越一片[TerrainFeature]",
            "将[Community]团团围住",
            "正在攻击[Quantity_adjphrase][PersonJob]",
            "正在屠杀[Quantity_adjphrase][Animal]",
            "身上沾满了[Gore]",
            "被打爆，火花四溅"
          ]
        },
        "source_def_name": "ShipPartCrash"
      },
      "volcanic_winter": {
        "event_nouns": [
          "{pawn_nameDef}所在的[Community]进入火山冬天"
        ],
        "main_images": [
          "天空黑暗而寒冷，[circumstance_group]",
          "空气中充满了灰尘，周围[circumstance_group]",
          "贫瘠的[TerrainFeature]被冰霜覆盖，[circumstance_group]",
          "[Quantity_adjphrase]田地里被灰尘覆盖的植物[circumstance_group]"
        ],
        "detail_sentences": [
          "{pawn_nameDef}靠近火堆。",
          "为了保暖，{pawn_nameDef}穿上了[Quantity_adjphrase][Apparel]。",
          "{pawn_nameDef}坐在附近，显然被折磨得精疲力尽。",
          "{pawn_nameDef}躲在[TerrainFeature]附近，以[AdjectiveAngsty]的神情凝视这一切。",
          "[Quantity_adjphrase]挨饿的[Animal]散落在四周。",
          "[Quantity_adjphrase]发抖的[Animal]散落在四周。",
          "[Quantity_adjphrase]濒死的[Animal]倒在地上。",
          "[Quantity_adjphrase][Animal]不安地来回走动。"
        ],
        "style_sentences": [],
        "scene_phrases": [
          "看不到任何生命迹象",
          "只能被少量透过的光线勉强照亮",
          "被冰冷的蓝光完全照亮"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{pawn_nameDef}所在的[Community]进入火山冬天"
          ],
          "image": [
            "天空黑暗而寒冷，[circumstance_group]",
            "空气中充满了灰尘，周围[circumstance_group]",
            "贫瘠的[TerrainFeature]被冰霜覆盖，[circumstance_group]",
            "[Quantity_adjphrase]田地里被灰尘覆盖的植物[circumstance_group]"
          ],
          "circumstance_phrase": [
            "看不到任何生命迹象",
            "只能被少量透过的光线勉强照亮",
            "被冰冷的蓝光完全照亮"
          ],
          "desc_sentence": [
            "{pawn_nameDef}靠近火堆。",
            "为了保暖，{pawn_nameDef}穿上了[Quantity_adjphrase][Apparel]。",
            "{pawn_nameDef}坐在附近，显然被折磨得精疲力尽。",
            "{pawn_nameDef}躲在[TerrainFeature]附近，以[AdjectiveAngsty]的神情凝视这一切。",
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
        },
        "source_def_name": "VolcanicWinter"
      },
      "disease_onset": {
        "event_nouns": [
          "{pawn_nameDef}被{illness_label}折磨"
        ],
        "main_images": [
          "{pawn_nameFull}步履蹒跚地穿过田地，[circumstance_group]",
          "{pawn_nameFull}躺在地上，[circumstance_group]",
          "{pawn_nameFull}躺在床上，[circumstance_group]",
          "{pawn_nameFull}躺在医疗床上，[circumstance_group]",
          "{pawn_nameFull}蜷缩在椅子上，[circumstance_group]",
          "{pawn_nameFull}蜷缩在篝火旁，[circumstance_group]"
        ],
        "detail_sentences": [
          "[Quantity_adjphrase]被苍蝇包围的[Animal]尸体散落在这片区域。",
          "[Quantity_adjphrase]古怪的[Color][TerrainFeature]充斥在场景里。",
          "[Quantity_adjphrase][PersonJob]受到了同样的困扰。",
          "这一幕发生在一片[TreeType]林里。",
          "[Quantity_adjphrase]死掉的[Animal]倒在地上。"
        ],
        "style_sentences": [],
        "scene_phrases": [
          "直冒冷汗",
          "不停地颤抖",
          "不停地颤抖并冒冷汗",
          "干燥的嘴唇已经开裂",
          "伴随着呕吐",
          "全身出现明显的皮疹",
          "正在受到医生的照顾。"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{pawn_nameDef}被{illness_label}折磨"
          ],
          "image": [
            "{pawn_nameFull}步履蹒跚地穿过田地，[circumstance_group]",
            "{pawn_nameFull}躺在地上，[circumstance_group]",
            "{pawn_nameFull}躺在床上，[circumstance_group]",
            "{pawn_nameFull}躺在医疗床上，[circumstance_group]",
            "{pawn_nameFull}蜷缩在椅子上，[circumstance_group]",
            "{pawn_nameFull}蜷缩在篝火旁，[circumstance_group]"
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
        },
        "source_def_name": "IllnessRevealed"
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
        ],
        "grammar_pools": {
          "tale_noun": [
            "{recruiter_display}招募{target_display}失败",
            "{target_display}拒绝了{recruiter_display}的说服",
            "{recruiter_display}未能赢得{target_display}的回应",
            "{recruiter_display}招募{target_display}失败的情景",
            "{target_display}拒绝了{recruiter_display}的说服的情景",
            "{recruiter_display}未能赢得{target_display}的回应的情景",
            "{recruiter_display}招募{target_display}失败的场面",
            "{target_display}拒绝了{recruiter_display}的说服的场面"
          ],
          "image": [
            "{recruiter_display}正被{target_display}冷冷拒绝?[circumstance_phrase]",
            "{target_display}从{recruiter_display}面前转开视线?[circumstance_phrase]",
            "{recruiter_display}的说辞在{target_display}面前失去作用?[circumstance_phrase]"
          ],
          "desc_sentence": [
            "两人之间的距离没有缩短，反而显得更明显。",
            "人物神情被刻得克制，却足够表明失败已成事实。",
            "背景被处理得安静，使拒绝本身更直接。",
            "在画面边缘，两人之间的距离没有缩短，反而显得更明显。",
            "在画面边缘，人物神情被刻得克制，却足够表明失败已成事实。",
            "在画面边缘，背景被处理得安静，使拒绝本身更直接。",
            "在背景中，两人之间的距离没有缩短，反而显得更明显。",
            "在背景中，人物神情被刻得克制，却足够表明失败已成事实。"
          ],
          "circumstance_phrase": [
            "在对话已经走到尽头的时候",
            "在沉默取代回应的一刻",
            "在所有努力都显得徒劳之际",
            "在聚落外缘",
            "在主体后方的空地上",
            "在远处地形起伏的尽头",
            "在画面左侧延展出去的位置",
            "在画面右侧留白之间"
          ]
        }
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
        ],
        "grammar_pools": {
          "tale_noun": [
            "{animal_name}向{pawn_display}发起反击",
            "{pawn_display}遭到{animal_name}的报复",
            "{animal_name}在受扰后突然扑向{pawn_display}",
            "{animal_name}向{pawn_display}发起反击的情景",
            "{pawn_display}遭到{animal_name}的报复的情景",
            "{animal_name}在受扰后突然扑向{pawn_display}的情景",
            "{animal_name}向{pawn_display}发起反击的场面",
            "{pawn_display}遭到{animal_name}的报复的场面"
          ],
          "image": [
            "{animal_name}正向{pawn_display}猛扑过去?[circumstance_phrase]",
            "{pawn_display}在{animal_name}反击时本能后退?[circumstance_phrase]",
            "{animal_name}被激怒后朝{pawn_display}发起攻击?[circumstance_phrase]"
          ],
          "desc_sentence": [
            "动物的动作被刻得极快，使攻击带着本能的暴烈。",
            "{pawn_pronoun}的姿态显得仓促而被动。",
            "背景中的地面线条向后拖曳，增添袭来的速度感。",
            "在画面边缘，动物的动作被刻得极快，使攻击带着本能的暴烈。",
            "在画面边缘，{pawn_pronoun}的姿态显得仓促而被动。",
            "在画面边缘，背景中的地面线条向后拖曳，增添袭来的速度感。",
            "在背景中，动物的动作被刻得极快，使攻击带着本能的暴烈。",
            "在背景中，{pawn_pronoun}的姿态显得仓促而被动。"
          ],
          "circumstance_phrase": [
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
      "finished_crafting": {
        "event_nouns": [
          "{crafter_nameDef}完成了{object_label}的制作"
        ],
        "main_images": [
          "{crafter_nameFull}正在装配{object_label}内部一个复杂的装置，[circumstance_group]",
          "{crafter_nameFull}正在为{object_label}的表面抛光，[circumstance_group]",
          "{crafter_nameFull}正在为{object_label}添加表面细节，[circumstance_group]",
          "{crafter_nameFull}把自己的名字刻在{object_label}上，[circumstance_group]"
        ],
        "detail_sentences": [
          "{object_label}泛着柔和的[Color]光。",
          "{object_label}精雕细琢。",
          "{crafter_nameDef}看上去毫不费力地举起{object_label}。",
          "[Quantity_adjphrase][PersonJob]对作品赞叹不已。",
          "[Quantity_adjphrase][PersonJob]投来敬畏的目光。"
        ],
        "style_sentences": [],
        "scene_phrases": [
          "{crafter_possessive}眼中闪烁着光芒",
          "同时在擦拭头上的汗水",
          "制作者浑身都是污渍",
          "面带得意的微笑",
          "{crafter_possessive}脸上带着满意的神情"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{crafter_nameDef}完成了{object_label}的制作"
          ],
          "image": [
            "{crafter_nameFull}正在装配{object_label}内部一个复杂的装置，[circumstance_group]",
            "{crafter_nameFull}正在为{object_label}的表面抛光，[circumstance_group]",
            "{crafter_nameFull}正在为{object_label}添加表面细节，[circumstance_group]",
            "{crafter_nameFull}把自己的名字刻在{object_label}上，[circumstance_group]"
          ],
          "circumstance_phrase": [
            "{crafter_possessive}眼中闪烁着光芒",
            "同时在擦拭头上的汗水",
            "制作者浑身都是污渍",
            "面带得意的微笑",
            "{crafter_possessive}脸上带着满意的神情"
          ],
          "desc_sentence": [
            "{object_label}泛着柔和的[Color]光。",
            "{object_label}精雕细琢。",
            "{crafter_nameDef}看上去毫不费力地举起{object_label}。",
            "[Quantity_adjphrase][PersonJob]对作品赞叹不已。",
            "[Quantity_adjphrase][PersonJob]投来敬畏的目光。"
          ],
          "circumstance_group": [
            "{crafter_possessive}眼中闪烁着光芒",
            "同时在擦拭头上的汗水",
            "制作者浑身都是污渍",
            "面带得意的微笑",
            "{crafter_possessive}脸上带着满意的神情"
          ]
        },
        "source_def_name": "CompletedLongCraftingProject"
      },
      "skill_mastery_passion": {
        "event_nouns": [
          "{pawn_nameDef}成为{skill_label}领域的大师"
        ],
        "main_images": [
          "{pawn_nameFull}正在开心地练习{skill_label}，[circumstance_group]",
          "{pawn_nameFull}正饶有兴致地阅读一本关于{skill_label}的书籍，[circumstance_group]",
          "{pawn_nameFull}正在高兴地接受{skill_label}相关的训练，[circumstance_group]",
          "{pawn_nameFull}狂热地工作，[circumstance_group]",
          "{pawn_nameFull}完成了一个项目，[circumstance_group]"
        ],
        "detail_sentences": [
          "现场堆放着[Quantity_adjphrase]失败作品。",
          "现场堆放着[Quantity_adjphrase]书籍。",
          "{pawn_possessive}技能发挥的作用立竿见影。",
          "[Quantity_adjphrase][PersonJob]露出惊讶的表情。",
          "[Quantity_adjphrase][Animal]露出惊讶的表情。",
          "[Quantity_adjphrase]上古大师显灵并注视着这一切。"
        ],
        "style_sentences": [],
        "scene_phrases": [
          "带着[AdjectiveFriendly]的神情",
          "带着喜悦的神情",
          "显得非常[AdjectiveFriendly]",
          "兴高采烈地呼喊",
          "满身大汗",
          "显得非常疲惫"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{pawn_nameDef}成为{skill_label}领域的大师"
          ],
          "image": [
            "{pawn_nameFull}正在开心地练习{skill_label}，[circumstance_group]",
            "{pawn_nameFull}正饶有兴致地阅读一本关于{skill_label}的书籍，[circumstance_group]",
            "{pawn_nameFull}正在高兴地接受{skill_label}相关的训练，[circumstance_group]",
            "{pawn_nameFull}狂热地工作，[circumstance_group]",
            "{pawn_nameFull}完成了一个项目，[circumstance_group]"
          ],
          "circumstance_phrase": [
            "带着[AdjectiveFriendly]的神情",
            "带着喜悦的神情",
            "显得非常[AdjectiveFriendly]",
            "兴高采烈地呼喊",
            "满身大汗",
            "显得非常疲惫"
          ],
          "desc_sentence": [
            "现场堆放着[Quantity_adjphrase]失败作品。",
            "现场堆放着[Quantity_adjphrase]书籍。",
            "{pawn_possessive}技能发挥的作用立竿见影。",
            "[Quantity_adjphrase][PersonJob]露出惊讶的表情。",
            "[Quantity_adjphrase][Animal]露出惊讶的表情。",
            "[Quantity_adjphrase]上古大师显灵并注视着这一切。"
          ],
          "circumstance_group": [
            "带着[AdjectiveFriendly]的神情",
            "带着喜悦的神情",
            "显得非常[AdjectiveFriendly]",
            "兴高采烈地呼喊",
            "满身大汗",
            "显得非常疲惫"
          ]
        },
        "source_def_name": "GainedMasterSkillWithPassion"
      },
      "caravan_meeting": {
        "event_nouns": [
          "{pawn_nameDef}的远行队遇到了其他人"
        ],
        "main_images": [
          "{pawn_nameFull}在问候一位[PersonJob]，[circumstance_group]",
          "{pawn_nameFull}在检查一位[PersonJob]，[circumstance_group]",
          "{pawn_nameFull}在向一位[PersonJob]喊话，[circumstance_group]",
          "{pawn_nameFull}向一位[PersonJob]走去，[circumstance_group]",
          "{pawn_nameFull}在轻声交谈，[circumstance_group]",
          "{pawn_nameFull}在高声大喊，[circumstance_group]",
          "{pawn_nameFull}和[PersonJob]一起玩[Game]，[circumstance_group]"
        ],
        "detail_sentences": [
          "[Quantity_adjphrase][PersonJob]正在[event]。",
          "[Quantity_adjphrase][PersonJob]正在[event]。",
          "[Quantity_adjphrase][Animal]围在附近。",
          "太阳落在[TerrainFeature]背后。",
          "太阳从[TerrainFeature]背后升起。",
          "一位[PersonJob]在远处观察。"
        ],
        "style_sentences": [],
        "scene_phrases": [
          "脸上带着[AdjectiveFriendly]的神情",
          "脸上带着[AdjectiveFriendly]的神情",
          "看上去十分[friendlyverb]",
          "其他人在一旁围观"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{pawn_nameDef}的远行队遇到了其他人"
          ],
          "image": [
            "{pawn_nameFull}在问候一位[PersonJob]，[circumstance_group]",
            "{pawn_nameFull}在检查一位[PersonJob]，[circumstance_group]",
            "{pawn_nameFull}在向一位[PersonJob]喊话，[circumstance_group]",
            "{pawn_nameFull}向一位[PersonJob]走去，[circumstance_group]",
            "{pawn_nameFull}在轻声交谈，[circumstance_group]",
            "{pawn_nameFull}在高声大喊，[circumstance_group]",
            "{pawn_nameFull}和[PersonJob]一起玩[Game]，[circumstance_group]"
          ],
          "circumstance_phrase": [
            "脸上带着[AdjectiveFriendly]的神情",
            "脸上带着[AdjectiveFriendly]的神情",
            "看上去十分[friendlyverb]",
            "其他人在一旁围观"
          ],
          "desc_sentence": [
            "[Quantity_adjphrase][PersonJob]正在[event]。",
            "[Quantity_adjphrase][PersonJob]正在[event]。",
            "[Quantity_adjphrase][Animal]围在附近。",
            "太阳落在[TerrainFeature]背后。",
            "太阳从[TerrainFeature]背后升起。",
            "一位[PersonJob]在远处观察。"
          ],
          "event": [
            "举办派对",
            "聚餐",
            "讨论最近的事件",
            "叙旧",
            "犹豫不决"
          ],
          "circumstance_group": [
            "脸上带着[AdjectiveFriendly]的神情",
            "脸上带着[AdjectiveFriendly]的神情",
            "看上去十分[friendlyverb]",
            "其他人在一旁围观"
          ]
        },
        "source_def_name": "CaravanMeeting"
      },
      "caravan_demand": {
        "event_nouns": [
          "{pawn_nameDef}的远行队被勒索",
          "{pawn_nameDef}的远行队受到威胁"
        ],
        "main_images": [
          "{pawn_nameFull}畏缩着，[circumstance_group]",
          "{pawn_nameFull}高声喊话，[circumstance_group]",
          "{pawn_nameFull}在思考，[circumstance_group]",
          "{pawn_nameFull}怒目而视，[circumstance_group]",
          "{pawn_nameFull}被[PersonJob]勒索，[circumstance_group]",
          "{pawn_nameFull}挥舞着[Weapon]，[circumstance_group]"
        ],
        "detail_sentences": [
          "{pawn_nameDef}几乎被[Enemy]包围。",
          "[Quantity_adjphrase][Enemy]就在附近，[action]。",
          "太阳落在[TerrainFeature]背后。",
          "太阳从[TerrainFeature]背后升起。",
          "一位[PersonJob]在远处监视着一切。"
        ],
        "style_sentences": [],
        "scene_phrases": [
          "脸上带着[AdjectiveBadass]的神情",
          "脸上带着[AdjectiveAngsty]的神情",
          "其他人在一旁围观",
          "同时受到[Enemy]的威胁"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{pawn_nameDef}的远行队被勒索",
            "{pawn_nameDef}的远行队受到威胁"
          ],
          "image": [
            "{pawn_nameFull}畏缩着，[circumstance_group]",
            "{pawn_nameFull}高声喊话，[circumstance_group]",
            "{pawn_nameFull}在思考，[circumstance_group]",
            "{pawn_nameFull}怒目而视，[circumstance_group]",
            "{pawn_nameFull}被[PersonJob]勒索，[circumstance_group]",
            "{pawn_nameFull}挥舞着[Weapon]，[circumstance_group]"
          ],
          "circumstance_phrase": [
            "脸上带着[AdjectiveBadass]的神情",
            "脸上带着[AdjectiveAngsty]的神情",
            "其他人在一旁围观",
            "同时受到[Enemy]的威胁"
          ],
          "desc_sentence": [
            "{pawn_nameDef}几乎被[Enemy]包围。",
            "[Quantity_adjphrase][Enemy]就在附近，[action]。",
            "太阳落在[TerrainFeature]背后。",
            "太阳从[TerrainFeature]背后升起。",
            "一位[PersonJob]在远处监视着一切。"
          ],
          "action": [
            "准备好他们的武器",
            "警戒四周",
            "监控人质",
            "等待决定",
            "嘲讽{pawn_nameDef}"
          ],
          "circumstance_group": [
            "脸上带着[AdjectiveBadass]的神情",
            "脸上带着[AdjectiveAngsty]的神情",
            "其他人在一旁围观",
            "同时受到[Enemy]的威胁"
          ]
        },
        "source_def_name": "CaravanDemand"
      },
      "caravan_ambush_manhunter": {
        "event_nouns": [
          "{pawn_nameDef}的远行队被伏击"
        ],
        "main_images": [
          "{pawn_nameFull}畏缩着，[circumstance_group]",
          "{pawn_nameFull}为了掩护队友快速移动，[circumstance_group]",
          "{pawn_nameFull}移动射击，[circumstance_group]",
          "{pawn_nameFull}发起进攻，[circumstance_group]",
          "{pawn_nameFull}大声呼喊，[circumstance_group]",
          "{pawn_nameFull}正在奔跑，[circumstance_group]"
        ],
        "detail_sentences": [
          "[Quantity_adjphrase]远处的动物从[TerrainFeature]后面接近。",
          "遍地都是[Gore]。",
          "地上铺满了被踩碎的[Gore]。",
          "[Quantity_adjphrase][Animal]惊慌失措，纷纷逃离危险地带。",
          "一位[PersonJob]在远处监视着一切。"
        ],
        "style_sentences": [],
        "scene_phrases": [
          "脸上带着[AdjectiveBadass]的神情",
          "脸上带着[AdjectiveBadass]的神情",
          "同时挥舞着{pawn_possessive}武器",
          "同时汗流浃背",
          "身上都是[Gore]"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{pawn_nameDef}的远行队被伏击"
          ],
          "image": [
            "{pawn_nameFull}畏缩着，[circumstance_group]",
            "{pawn_nameFull}为了掩护队友快速移动，[circumstance_group]",
            "{pawn_nameFull}移动射击，[circumstance_group]",
            "{pawn_nameFull}发起进攻，[circumstance_group]",
            "{pawn_nameFull}大声呼喊，[circumstance_group]",
            "{pawn_nameFull}正在奔跑，[circumstance_group]"
          ],
          "circumstance_phrase": [
            "脸上带着[AdjectiveBadass]的神情",
            "脸上带着[AdjectiveBadass]的神情",
            "同时挥舞着{pawn_possessive}武器",
            "同时汗流浃背",
            "身上都是[Gore]"
          ],
          "desc_sentence": [
            "[Quantity_adjphrase]远处的动物从[TerrainFeature]后面接近。",
            "遍地都是[Gore]。",
            "地上铺满了被踩碎的[Gore]。",
            "[Quantity_adjphrase][Animal]惊慌失措，纷纷逃离危险地带。",
            "一位[PersonJob]在远处监视着一切。"
          ],
          "circumstance_group": [
            "脸上带着[AdjectiveBadass]的神情",
            "脸上带着[AdjectiveBadass]的神情",
            "同时挥舞着{pawn_possessive}武器",
            "同时汗流浃背",
            "身上都是[Gore]"
          ]
        },
        "source_def_name": "CaravanAmbushedByManhunter"
      },
      "caravan_remote_mining": {
        "event_nouns": [
          "{pawn_nameDef}在外乡开采储量丰富的{material_label}"
        ],
        "main_images": [
          "{pawn_nameFull}正在用工具开采{material_label}，[circumstance_group]",
          "{pawn_nameFull}高举一大块{material_label}，[circumstance_group]",
          "{pawn_nameFull}靠在由{material_label}组成的墙上，[circumstance_group]",
          "{pawn_nameFull}正在指挥挖掘队开采一条储量丰富的{material_label}矿脉，[circumstance_group]",
          "{pawn_nameFull}正在仔细勘察一条储量丰富的{material_label}矿脉，[circumstance_group]"
        ],
        "detail_sentences": [
          "[Quantity_adjphrase][ally]提供了帮助。",
          "[Quantity_adjphrase][Animal]在那里徘徊漫步。",
          "背景中出现了一个临时住所。",
          "[Quantity_adjphrase]更多矿脉在可视距离内。",
          "不远处能看到[TerrainFeature]。",
          "工作让{pawn_nameDef}变得浑身汗臭而且脏兮兮的。"
        ],
        "style_sentences": [],
        "scene_phrases": [
          "任凭汗水流淌",
          "眼中露出[AdjectiveFriendly]的神情",
          "面带得意的微笑",
          "{pawn_possessive}脸上带着满意的神情",
          "同时环顾四周，警惕危险"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{pawn_nameDef}在外乡开采储量丰富的{material_label}"
          ],
          "image": [
            "{pawn_nameFull}正在用工具开采{material_label}，[circumstance_group]",
            "{pawn_nameFull}高举一大块{material_label}，[circumstance_group]",
            "{pawn_nameFull}靠在由{material_label}组成的墙上，[circumstance_group]",
            "{pawn_nameFull}正在指挥挖掘队开采一条储量丰富的{material_label}矿脉，[circumstance_group]",
            "{pawn_nameFull}正在仔细勘察一条储量丰富的{material_label}矿脉，[circumstance_group]"
          ],
          "circumstance_phrase": [
            "任凭汗水流淌",
            "眼中露出[AdjectiveFriendly]的神情",
            "面带得意的微笑",
            "{pawn_possessive}脸上带着满意的神情",
            "同时环顾四周，警惕危险"
          ],
          "desc_sentence": [
            "[Quantity_adjphrase][ally]提供了帮助。",
            "[Quantity_adjphrase][Animal]在那里徘徊漫步。",
            "背景中出现了一个临时住所。",
            "[Quantity_adjphrase]更多矿脉在可视距离内。",
            "不远处能看到[TerrainFeature]。",
            "工作让{pawn_nameDef}变得浑身汗臭而且脏兮兮的。"
          ],
          "circumstance_group": [
            "任凭汗水流淌",
            "眼中露出[AdjectiveFriendly]的神情",
            "面带得意的微笑",
            "{pawn_possessive}脸上带着满意的神情",
            "同时环顾四周，警惕危险"
          ]
        },
        "source_def_name": "CaravanRemoteMining"
      },
      "caravan_ambush_defeated": {
        "event_nouns": [
          "{pawn_nameDef}的远行队反伏击战成功",
          "{pawn_nameDef}的远行队挫败了敌人的伏击"
        ],
        "main_images": [
          "{pawn_nameFull}在组织抵抗，并[circumstance_group]",
          "{pawn_nameFull}一边用[Weapon]防御，一边[circumstance_group]",
          "{pawn_nameFull}使用{pawn_possessive}[Weapon]还击，同时[circumstance_group]",
          "{pawn_nameFull}挺身而出，[circumstance_group]",
          "{pawn_nameFull}露出[AdjectiveBadass]的神情，[circumstance_group]",
          "{pawn_nameFull}露出[AdjectiveAngsty]的神情，[circumstance_group]"
        ],
        "detail_sentences": [
          "[Quantity_adjphrase][Enemy]挥动着[Weapon]向前推进。",
          "大量[Enemy]挥舞着[Weapon]发起冲锋。",
          "[Quantity_adjphrase][Enemy]向前推进，眼中充满了[AdjectiveBadass]的神情。",
          "[Quantity_adjphrase][Enemy]向前推进，眼中充满了[AdjectiveAngsty]的神情。",
          "[Quantity_adjphrase][Animal]冲锋，[Color]的眼睛散发出光芒。",
          "[Quantity_adjphrase][Animal]冲上来，浑身沾满[Gore]。",
          "遍地都是[Gore]。",
          "[Quantity_adjphrase][PersonJob]选择逃离该地区。",
          "[Quantity_adjphrase][Animal]选择逃离该地区。"
        ],
        "style_sentences": [],
        "scene_phrases": [
          "为冲在前面的同伴掩护",
          "在远行队四周奔走",
          "发出胜利的咆哮",
          "挥舞着[Weapon]",
          "无视身上沾满的[Gore]"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{pawn_nameDef}的远行队反伏击战成功",
            "{pawn_nameDef}的远行队挫败了敌人的伏击"
          ],
          "image": [
            "{pawn_nameFull}在组织抵抗，并[circumstance_group]",
            "{pawn_nameFull}一边用[Weapon]防御，一边[circumstance_group]",
            "{pawn_nameFull}使用{pawn_possessive}[Weapon]还击，同时[circumstance_group]",
            "{pawn_nameFull}挺身而出，[circumstance_group]",
            "{pawn_nameFull}露出[AdjectiveBadass]的神情，[circumstance_group]",
            "{pawn_nameFull}露出[AdjectiveAngsty]的神情，[circumstance_group]"
          ],
          "circumstance_phrase": [
            "为冲在前面的同伴掩护",
            "在远行队四周奔走",
            "发出胜利的咆哮",
            "挥舞着[Weapon]",
            "无视身上沾满的[Gore]"
          ],
          "desc_sentence": [
            "[Quantity_adjphrase][Enemy]挥动着[Weapon]向前推进。",
            "大量[Enemy]挥舞着[Weapon]发起冲锋。",
            "[Quantity_adjphrase][Enemy]向前推进，眼中充满了[AdjectiveBadass]的神情。",
            "[Quantity_adjphrase][Enemy]向前推进，眼中充满了[AdjectiveAngsty]的神情。",
            "[Quantity_adjphrase][Animal]冲锋，[Color]的眼睛散发出光芒。",
            "[Quantity_adjphrase][Animal]冲上来，浑身沾满[Gore]。",
            "遍地都是[Gore]。",
            "[Quantity_adjphrase][PersonJob]选择逃离该地区。",
            "[Quantity_adjphrase][Animal]选择逃离该地区。"
          ],
          "circumstance_group": [
            "为冲在前面的同伴掩护",
            "在远行队四周奔走",
            "发出胜利的咆哮",
            "挥舞着[Weapon]",
            "无视身上沾满的[Gore]"
          ]
        },
        "source_def_name": "CaravanAmbushDefeated"
      },
      "caravan_assault_success": {
        "event_nouns": [
          "{pawn_nameDef}的远行队摧毁了敌方据点"
        ],
        "main_images": [
          "{pawn_nameFull}冲向[Enemy]，[circumstance_group]",
          "{pawn_nameFull}紧握着[Weapon]，[circumstance_group]",
          "{pawn_nameFull}挥舞着[Weapon]，[circumstance_group]",
          "{pawn_nameFull}挺身而出，[circumstance_group]"
        ],
        "detail_sentences": [
          "[Quantity_adjphrase][Enemy]在战斗中被击退。",
          "[Quantity_adjphrase][Enemy]落荒而逃。",
          "[Quantity_adjphrase][Enemy]损失惨重。",
          "远处的[Community]燃烧着。",
          "远处的[Community]浓烟滚滚。",
          "遍地都是[Gore]。",
          "[Quantity_adjphrase][PersonJob]为了避难离开此地。",
          "[Quantity_adjphrase][Animal]为了避难离开此地。"
        ],
        "style_sentences": [],
        "scene_phrases": [
          "{pawn_possessive}眼中充满了[AdjectiveBadass]的神情",
          "{pawn_possessive}眼中充满了[AdjectiveAngsty]的神情",
          "发出胜利的战吼",
          "身上沾满了[Gore]"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{pawn_nameDef}的远行队摧毁了敌方据点"
          ],
          "image": [
            "{pawn_nameFull}冲向[Enemy]，[circumstance_group]",
            "{pawn_nameFull}紧握着[Weapon]，[circumstance_group]",
            "{pawn_nameFull}挥舞着[Weapon]，[circumstance_group]",
            "{pawn_nameFull}挺身而出，[circumstance_group]"
          ],
          "circumstance_phrase": [
            "{pawn_possessive}眼中充满了[AdjectiveBadass]的神情",
            "{pawn_possessive}眼中充满了[AdjectiveAngsty]的神情",
            "发出胜利的战吼",
            "身上沾满了[Gore]"
          ],
          "desc_sentence": [
            "[Quantity_adjphrase][Enemy]在战斗中被击退。",
            "[Quantity_adjphrase][Enemy]落荒而逃。",
            "[Quantity_adjphrase][Enemy]损失惨重。",
            "远处的[Community]燃烧着。",
            "远处的[Community]浓烟滚滚。",
            "遍地都是[Gore]。",
            "[Quantity_adjphrase][PersonJob]为了避难离开此地。",
            "[Quantity_adjphrase][Animal]为了避难离开此地。"
          ],
          "circumstance_group": [
            "{pawn_possessive}眼中充满了[AdjectiveBadass]的神情",
            "{pawn_possessive}眼中充满了[AdjectiveAngsty]的神情",
            "发出胜利的战吼",
            "身上沾满了[Gore]"
          ]
        },
        "source_def_name": "CaravanAssaultSuccessful"
      },
      "caravan_fled": {
        "event_nouns": [
          "{pawn_nameDef}的远行队脱险",
          "{pawn_nameDef}的远行队脱离险境",
          "{pawn_nameDef}的远行队侥幸脱险",
          "{pawn_nameDef}的远行队被敌人赶跑"
        ],
        "main_images": [
          "{pawn_nameFull}仓皇逃窜以[circumstance_group]",
          "为了躲避[circumstance_group]，{pawn_nameFull}夺路而逃",
          "{pawn_nameFull}隐藏在[TerrainFeature]中，躲避[circumstance_group]",
          "{pawn_nameFull}用一场撤退战迎接[circumstance_group]",
          "{pawn_nameFull}漫不经心地躲避[circumstance_group]"
        ],
        "detail_sentences": [
          "追击{pawn_nameDef}的家伙们挥舞着[Weapon]。",
          "[Color]的烟雾将追杀{pawn_nameDef}的家伙们笼罩在其中。",
          "以{pawn_nameDef}为目标的追击者露出[AdjectiveAngsty]的神情。",
          "以{pawn_nameDef}为目标的追击者挥舞着[Weapon]。",
          "{pawn_nameDef}满头大汗。",
          "{pawn_nameDef}气喘吁吁。"
        ],
        "style_sentences": [],
        "scene_phrases": [
          "来自[Quantity_adjphrase][Enemy]的追踪",
          "[Quantity_adjphrase][Enemy]的搜寻",
          "[Quantity_adjphrase][Enemy]",
          "来自[Quantity_adjphrase]的敌对[Animal]的猎杀",
          "[AdjectiveLarge][Enemy]"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{pawn_nameDef}的远行队脱险",
            "{pawn_nameDef}的远行队脱离险境",
            "{pawn_nameDef}的远行队侥幸脱险",
            "{pawn_nameDef}的远行队被敌人赶跑"
          ],
          "image": [
            "{pawn_nameFull}仓皇逃窜以[circumstance_group]",
            "为了躲避[circumstance_group]，{pawn_nameFull}夺路而逃",
            "{pawn_nameFull}隐藏在[TerrainFeature]中，躲避[circumstance_group]",
            "{pawn_nameFull}用一场撤退战迎接[circumstance_group]",
            "{pawn_nameFull}漫不经心地躲避[circumstance_group]"
          ],
          "circumstance_phrase": [
            "来自[Quantity_adjphrase][Enemy]的追踪",
            "[Quantity_adjphrase][Enemy]的搜寻",
            "[Quantity_adjphrase][Enemy]",
            "来自[Quantity_adjphrase]的敌对[Animal]的猎杀",
            "[AdjectiveLarge][Enemy]"
          ],
          "desc_sentence": [
            "追击{pawn_nameDef}的家伙们挥舞着[Weapon]。",
            "[Color]的烟雾将追杀{pawn_nameDef}的家伙们笼罩在其中。",
            "以{pawn_nameDef}为目标的追击者露出[AdjectiveAngsty]的神情。",
            "以{pawn_nameDef}为目标的追击者挥舞着[Weapon]。",
            "{pawn_nameDef}满头大汗。",
            "{pawn_nameDef}气喘吁吁。"
          ],
          "circumstance_group": [
            "来自[Quantity_adjphrase][Enemy]的追踪",
            "[Quantity_adjphrase][Enemy]的搜寻",
            "[Quantity_adjphrase][Enemy]",
            "来自[Quantity_adjphrase]的敌对[Animal]的猎杀",
            "[AdjectiveLarge][Enemy]"
          ]
        },
        "source_def_name": "CaravanFled"
      },
      "raid": {
        "event_nouns": [
          "{pawn_nameDef}所在的[Community]被袭击",
          "{pawn_nameDef}所在的[Community]遭遇袭击",
          "[Enemy]进攻{pawn_nameDef}所在的[Community]"
        ],
        "main_images": [
          "[Quantity_adjphrase][Enemy][circumstance_phrase]",
          "一支军队[circumstance_phrase]",
          "压倒性的力量[circumstance_phrase]",
          "侵略者[circumstance_phrase]",
          "高举着[Color]旗帜的势力[circumstance_phrase]",
          "大批[Enemy][circumstance_phrase]"
        ],
        "detail_sentences": [
          "{pawn_nameDef}一边组织抵抗，一边[defender_circumstance]。",
          "{pawn_nameDef}用[Weapon]进行防御，同时[defender_circumstance]。",
          "{pawn_nameDef}受伤倒地。",
          "{pawn_nameDef}用{pawn_possessive}[Weapon]还击，同时[defender_circumstance]。",
          "{pawn_nameDef}挺身而出，同时[defender_circumstance]。",
          "{pawn_nameDef}带着[AdjectiveBadass]的神情。",
          "{pawn_nameDef}带着[AdjectiveAngsty]的神情。",
          "地上到处都是[Gore]。",
          "[Quantity_adjphrase][PersonJob]逃离该地区。",
          "[Quantity_adjphrase][Animal]逃离该地区。"
        ],
        "style_sentences": [],
        "scene_phrases": [
          "正在穿越一片[TerrainFeature]",
          "将[Community]团团围住",
          "正在攻击[Quantity_adjphrase][PersonJob]",
          "发出胜利的咆哮",
          "挥舞着[Weapon]",
          "浑身都是[Gore]"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{pawn_nameDef}所在的[Community]被袭击",
            "{pawn_nameDef}所在的[Community]遭遇袭击",
            "[Enemy]进攻{pawn_nameDef}所在的[Community]"
          ],
          "image": [
            "[Quantity_adjphrase][Enemy][circumstance_phrase]",
            "一支军队[circumstance_phrase]",
            "压倒性的力量[circumstance_phrase]",
            "侵略者[circumstance_phrase]",
            "高举着[Color]旗帜的势力[circumstance_phrase]",
            "大批[Enemy][circumstance_phrase]"
          ],
          "circumstance_phrase": [
            "正在穿越一片[TerrainFeature]",
            "将[Community]团团围住",
            "正在攻击[Quantity_adjphrase][PersonJob]",
            "发出胜利的咆哮",
            "挥舞着[Weapon]",
            "浑身都是[Gore]"
          ],
          "desc_sentence": [
            "{pawn_nameDef}一边组织抵抗，一边[defender_circumstance]。",
            "{pawn_nameDef}用[Weapon]进行防御，同时[defender_circumstance]。",
            "{pawn_nameDef}受伤倒地。",
            "{pawn_nameDef}用{pawn_possessive}[Weapon]还击，同时[defender_circumstance]。",
            "{pawn_nameDef}挺身而出，同时[defender_circumstance]。",
            "{pawn_nameDef}带着[AdjectiveBadass]的神情。",
            "{pawn_nameDef}带着[AdjectiveAngsty]的神情。",
            "地上到处都是[Gore]。",
            "[Quantity_adjphrase][PersonJob]逃离该地区。",
            "[Quantity_adjphrase][Animal]逃离该地区。"
          ],
          "defender_circumstance": [
            "高喊胜利",
            "闪着[Color]的光",
            "挑衅性地高举拳头",
            "显示{pawn_possessive}肌肉"
          ],
          "circumstance_group": [
            "正在穿越一片[TerrainFeature]",
            "将[Community]团团围住",
            "正在攻击[Quantity_adjphrase][PersonJob]",
            "发出胜利的咆哮",
            "挥舞着[Weapon]",
            "浑身都是[Gore]"
          ]
        },
        "source_def_name": "Raid"
      },
      "struck_mineable": {
        "event_nouns": [
          "{pawn_nameDef}开采{object_label}"
        ],
        "main_images": [
          "{pawn_nameFull}[circumstance_group]采到了{object_label}"
        ],
        "detail_sentences": [
          "{pawn_nameDef}用衣袖擦拭着额头。",
          "{pawn_nameDef}高兴得蹦蹦跳跳。",
          "{pawn_nameDef}和朋友击掌庆贺。",
          "{pawn_nameDef}开心地大喊大叫。",
          "{pawn_nameDef}抑制不住地大笑。",
          "{pawn_nameDef}脸上都是汗水和尘土。",
          "{pawn_nameDef}脸上都是汗水和尘土。"
        ],
        "style_sentences": [],
        "scene_phrases": [
          "在开采时",
          "在挖掘时",
          "在开凿时",
          "出人意料地",
          "不出意外地"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{pawn_nameDef}开采{object_label}"
          ],
          "image": [
            "{pawn_nameFull}[circumstance_group]采到了{object_label}"
          ],
          "circumstance_phrase": [
            "在开采时",
            "在挖掘时",
            "在开凿时",
            "出人意料地",
            "不出意外地"
          ],
          "desc_sentence": [
            "{pawn_nameDef}用衣袖擦拭着额头。",
            "{pawn_nameDef}高兴得蹦蹦跳跳。",
            "{pawn_nameDef}和朋友击掌庆贺。",
            "{pawn_nameDef}开心地大喊大叫。",
            "{pawn_nameDef}抑制不住地大笑。",
            "{pawn_nameDef}脸上都是汗水和尘土。",
            "{pawn_nameDef}脸上都是汗水和尘土。"
          ],
          "circumstance_group": [
            "在开采时",
            "在挖掘时",
            "在开凿时",
            "出人意料地",
            "不出意外地"
          ]
        },
        "source_def_name": "StruckMineable"
      },
      "vacuum_exposure": {
        "event_nouns": [
          "{pawn_nameDef}暴露在真空中",
          "{pawn_nameDef}遭受真空暴露"
        ],
        "main_images": [
          "{pawn_nameFull}从飞船漂离[circumstance_group]",
          "{pawn_nameFull}在太空中漂流[circumstance_group]",
          "{pawn_nameFull}在群星之间漂浮[circumstance_group]",
          "{pawn_nameFull}踉跄地走出气闸[circumstance_group]"
        ],
        "detail_sentences": [
          "{pawn_nameDef}的眼睛逐渐变得无神。",
          "无尽的黑暗包围着主角。",
          "画面似乎发生在太空中。",
          "破碎头盔下是死灰的双眼。",
          "[Quantity_adjphrase]扭曲的星辰包围着画面。",
          "{pawn_nameDef}穿着破损的真空服。",
          "画面后方有一颗巨大的[Color]小行星。",
          "画面后方是一颗巨大的[Color]行星。"
        ],
        "style_sentences": [],
        "scene_phrases": [
          "，{pawn_possessive}的脸慢慢变蓝",
          "，{pawn_possessive}的唾液开始沸腾",
          "，{pawn_possessive}的身体开始膨胀",
          "，{pawn_possessive}的皮肤开始结冰",
          "，默默无声地尖叫着",
          "，并开始失去意识",
          "，并拼命喘息"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{pawn_nameDef}暴露在真空中",
            "{pawn_nameDef}遭受真空暴露"
          ],
          "image": [
            "{pawn_nameFull}从飞船漂离[circumstance_group]",
            "{pawn_nameFull}在太空中漂流[circumstance_group]",
            "{pawn_nameFull}在群星之间漂浮[circumstance_group]",
            "{pawn_nameFull}踉跄地走出气闸[circumstance_group]"
          ],
          "circumstance_phrase": [
            "，{pawn_possessive}的脸慢慢变蓝",
            "，{pawn_possessive}的唾液开始沸腾",
            "，{pawn_possessive}的身体开始膨胀",
            "，{pawn_possessive}的皮肤开始结冰",
            "，默默无声地尖叫着",
            "，并开始失去意识",
            "，并拼命喘息"
          ],
          "desc_sentence": [
            "{pawn_nameDef}的眼睛逐渐变得无神。",
            "无尽的黑暗包围着主角。",
            "画面似乎发生在太空中。",
            "破碎头盔下是死灰的双眼。",
            "[Quantity_adjphrase]扭曲的星辰包围着画面。",
            "{pawn_nameDef}穿着破损的真空服。",
            "画面后方有一颗巨大的[Color]小行星。",
            "画面后方是一颗巨大的[Color]行星。"
          ],
          "circumstance_group": [
            "，{pawn_possessive}的脸慢慢变蓝",
            "，{pawn_possessive}的唾液开始沸腾",
            "，{pawn_possessive}的身体开始膨胀",
            "，{pawn_possessive}的皮肤开始结冰",
            "，默默无声地尖叫着",
            "，并开始失去意识",
            "，并拼命喘息"
          ]
        },
        "source_def_name": "VacuumExposureRevealed"
      },
      "orbital_debris": {
        "event_nouns": [
          "一场微型陨石风暴席卷了{pawn_nameDef}的[Community]",
          "微型陨石碎片洒满了{pawn_nameDef}的[Community]周围"
        ],
        "main_images": [
          "一串闪烁着[Color]火花的微型陨石[airborne_circumstance]",
          "一片明亮发光的微型陨石[airborne_circumstance]",
          "一场[Color]火花的流星雨，微型陨石在空中燃烧[airborne_circumstance]",
          "一簇冒烟的冲击痕迹，[ground_circumstance]",
          "一块[Color]烧焦的碎片，[ground_circumstance]",
          "一堆[Color]的小石块，[ground_circumstance]"
        ],
        "detail_sentences": [
          "{pawn_nameDef}敬畏地注视着流星雨。",
          "{pawn_nameDef}惊奇地仰望天空。",
          "{pawn_nameDef}被无休止的轰击吓了一跳。",
          "[Quantity_adjphrase]人影从附近的[TerrainFeature]冒出来，寻找避难所。",
          "[Quantity_adjphrase]人影匆忙收拾他们的物品。",
          "[Quantity_adjphrase][Animal]在四处急忙奔跑，寻找掩护。",
          "空间充满了诡异的能量。"
        ],
        "style_sentences": [],
        "scene_phrases": [],
        "grammar_pools": {
          "tale_noun": [
            "一场微型陨石风暴席卷了{pawn_nameDef}的[Community]",
            "微型陨石碎片洒满了{pawn_nameDef}的[Community]周围"
          ],
          "image": [
            "一串闪烁着[Color]火花的微型陨石[airborne_circumstance]",
            "一片明亮发光的微型陨石[airborne_circumstance]",
            "一场[Color]火花的流星雨，微型陨石在空中燃烧[airborne_circumstance]",
            "一簇冒烟的冲击痕迹，[ground_circumstance]",
            "一块[Color]烧焦的碎片，[ground_circumstance]",
            "一堆[Color]的小石块，[ground_circumstance]"
          ],
          "airborne_circumstance": [
            "划过天空",
            "在光芒的飞舞中坠落",
            "坠落时化作闪烁尘埃渐渐消散"
          ],
          "ground_circumstance": [
            "被细微灰尘的薄雾所环绕",
            "因余热而微微发光",
            "嵌在龟裂地表的层毯中",
            "散落在大地上",
            "点缀在满是小陨坑的地表间"
          ],
          "desc_sentence": [
            "{pawn_nameDef}敬畏地注视着流星雨。",
            "{pawn_nameDef}惊奇地仰望天空。",
            "{pawn_nameDef}被无休止的轰击吓了一跳。",
            "[Quantity_adjphrase]人影从附近的[TerrainFeature]冒出来，寻找避难所。",
            "[Quantity_adjphrase]人影匆忙收拾他们的物品。",
            "[Quantity_adjphrase][Animal]在四处急忙奔跑，寻找掩护。",
            "空间充满了诡异的能量。"
          ]
        },
        "source_def_name": "OrbitalDebris"
      },
      "studied_entity": {
        "event_nouns": [
          "{studier_nameDef}正在调查{entity_nameIndef}"
        ],
        "main_images": [
          "{studier_nameFull}[circumstance_group]，正在细细检查{entity_nameDef}",
          "{studier_nameFull}[circumstance_group]，正在做实验，希望能够理解{entity_nameDef}的奥秘",
          "{studier_nameFull}[circumstance_group]，力求理解{entity_nameDef}的本质"
        ],
        "detail_sentences": [
          "背景中可以看到活铁采集器正在稳定工作。",
          "殖民者对{entity_nameDef}的深深迷恋简直显而易见。",
          "{studier_nameDef}完全沉浸于手头的调查。努力揭开{entity_nameDef}的秘密。",
          "{entity_nameDef}仅仅只是在电子阻滞器的不懈运转下才得以勉强维生。",
          "{entity_nameDef}似乎对{studier_nameDef}的努力毫无反应。"
        ],
        "style_sentences": [],
        "scene_phrases": [
          "眼神中几乎掩饰不住厌恶",
          "在笔记本上涂涂写写",
          "不时参阅古籍"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{studier_nameDef}正在调查{entity_nameIndef}"
          ],
          "image": [
            "{studier_nameFull}[circumstance_group]，正在细细检查{entity_nameDef}",
            "{studier_nameFull}[circumstance_group]，正在做实验，希望能够理解{entity_nameDef}的奥秘",
            "{studier_nameFull}[circumstance_group]，力求理解{entity_nameDef}的本质"
          ],
          "circumstance_phrase": [
            "眼神中几乎掩饰不住厌恶",
            "在笔记本上涂涂写写",
            "不时参阅古籍"
          ],
          "desc_sentence": [
            "背景中可以看到活铁采集器正在稳定工作。",
            "殖民者对{entity_nameDef}的深深迷恋简直显而易见。",
            "{studier_nameDef}完全沉浸于手头的调查。努力揭开{entity_nameDef}的秘密。",
            "{entity_nameDef}仅仅只是在电子阻滞器的不懈运转下才得以勉强维生。",
            "{entity_nameDef}似乎对{studier_nameDef}的努力毫无反应。"
          ],
          "circumstance_group": [
            "眼神中几乎掩饰不住厌恶",
            "在笔记本上涂涂写写",
            "不时参阅古籍"
          ]
        },
        "source_def_name": "StudiedEntity"
      },
      "death_pall": {
        "event_nouns": [
          "{pawn_nameDef}正在面对步步逼近的死灵迷雾"
        ],
        "main_images": [
          "{pawn_nameFull}惊恐地注视着死灵迷雾的阴霾笼罩大地，[circumstance_group]，死者再次苏醒",
          "{pawn_nameFull}紧紧攥住{pawn_possessive}武器，[circumstance_group]，死灵迷雾步步紧逼，唤醒所到之处的死者",
          "{pawn_nameFull}不安地颤抖着，[circumstance_group]，{pawn_pronoun}眼睁睁看着死灵迷雾迫近，它赋予了已死之人再次往生的权能",
          "{pawn_nameFull}惊恐地看着死亡的阴霾笼罩着{pawn_pronoun}宁静的家园，[circumstance_group]，家园成了与亡者对抗的战场"
        ],
        "detail_sentences": [
          "在死灵迷雾的中心。{pawn_nameDef}做好了战斗准备。",
          "死灵迷雾的不断侵袭让{pawn_nameDef}的朋友们心生恐惧。",
          "随着死亡阴霾的影响不断扩散，{pawn_nameDef}的脊背也在颤抖。",
          "绝望的重担压迫着{pawn_nameDef}，考验着{pawn_pronoun}对抗惊惧之物的决心。"
        ],
        "style_sentences": [],
        "scene_phrases": [
          "在{pawn_pronoun}绝望的祈祷中",
          "空气中弥漫着腐朽和绝望的气息",
          "{pawn_pronoun}被一群蹒跚怪团团围困"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{pawn_nameDef}正在面对步步逼近的死灵迷雾"
          ],
          "image": [
            "{pawn_nameFull}惊恐地注视着死灵迷雾的阴霾笼罩大地，[circumstance_group]，死者再次苏醒",
            "{pawn_nameFull}紧紧攥住{pawn_possessive}武器，[circumstance_group]，死灵迷雾步步紧逼，唤醒所到之处的死者",
            "{pawn_nameFull}不安地颤抖着，[circumstance_group]，{pawn_pronoun}眼睁睁看着死灵迷雾迫近，它赋予了已死之人再次往生的权能",
            "{pawn_nameFull}惊恐地看着死亡的阴霾笼罩着{pawn_pronoun}宁静的家园，[circumstance_group]，家园成了与亡者对抗的战场"
          ],
          "circumstance_phrase": [
            "在{pawn_pronoun}绝望的祈祷中",
            "空气中弥漫着腐朽和绝望的气息",
            "{pawn_pronoun}被一群蹒跚怪团团围困"
          ],
          "desc_sentence": [
            "在死灵迷雾的中心。{pawn_nameDef}做好了战斗准备。",
            "死灵迷雾的不断侵袭让{pawn_nameDef}的朋友们心生恐惧。",
            "随着死亡阴霾的影响不断扩散，{pawn_nameDef}的脊背也在颤抖。",
            "绝望的重担压迫着{pawn_nameDef}，考验着{pawn_pronoun}对抗惊惧之物的决心。"
          ],
          "circumstance_group": [
            "在{pawn_pronoun}绝望的祈祷中",
            "空气中弥漫着腐朽和绝望的气息",
            "{pawn_pronoun}被一群蹒跚怪团团围困"
          ]
        },
        "source_def_name": "DeathPall"
      },
      "unnatural_darkness": {
        "event_nouns": [
          "{pawn_nameDef}直面异常黑暗现象。"
        ],
        "main_images": [
          "{pawn_nameFull}看到世界被无法穿透的黑暗吞噬，惊愕地待在原地，[circumstance_group]",
          "{pawn_nameFull}被从天而降的黑色柱子所包围，大地笼罩在一片黑暗之中，[circumstance_group]",
          "{pawn_nameFull}在令人窒息的黑暗中寻找着前进方向，而夜魇紧随{pawn_possessive}身后，[circumstance_group]",
          "{pawn_nameFull}目睹着世界被黑暗的深渊所侵蚀，[circumstance_group]"
        ],
        "detail_sentences": [
          "甚至连远处微弱的灯光闪烁都看不到。",
          "局势似乎已经完全无望了。",
          "在黑暗的边缘可以瞄见影影绰绰的成群生物。",
          "{pawn_nameDef}试图在黑暗中寻找一线希望。"
        ],
        "style_sentences": [],
        "scene_phrases": [
          "{pawn_possessive}朋友们拼命地想要回到光明的安全地带",
          "四周回荡着刺耳的尖叫声",
          "光明似乎无法将其阻挡",
          "{pawn_pronoun}请求得到救赎"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{pawn_nameDef}直面异常黑暗现象。"
          ],
          "image": [
            "{pawn_nameFull}看到世界被无法穿透的黑暗吞噬，惊愕地待在原地，[circumstance_group]",
            "{pawn_nameFull}被从天而降的黑色柱子所包围，大地笼罩在一片黑暗之中，[circumstance_group]",
            "{pawn_nameFull}在令人窒息的黑暗中寻找着前进方向，而夜魇紧随{pawn_possessive}身后，[circumstance_group]",
            "{pawn_nameFull}目睹着世界被黑暗的深渊所侵蚀，[circumstance_group]"
          ],
          "circumstance_phrase": [
            "{pawn_possessive}朋友们拼命地想要回到光明的安全地带",
            "四周回荡着刺耳的尖叫声",
            "光明似乎无法将其阻挡",
            "{pawn_pronoun}请求得到救赎"
          ],
          "desc_sentence": [
            "甚至连远处微弱的灯光闪烁都看不到。",
            "局势似乎已经完全无望了。",
            "在黑暗的边缘可以瞄见影影绰绰的成群生物。",
            "{pawn_nameDef}试图在黑暗中寻找一线希望。"
          ],
          "circumstance_group": [
            "{pawn_possessive}朋友们拼命地想要回到光明的安全地带",
            "四周回荡着刺耳的尖叫声",
            "光明似乎无法将其阻挡",
            "{pawn_pronoun}请求得到救赎"
          ]
        },
        "source_def_name": "UnnaturalDarkness"
      },
      "closed_void": {
        "event_nouns": [
          "{pawn_nameDef}正在关闭虚空节点。"
        ],
        "main_images": [
          "{pawn_nameFull}[circumstance_group]，正在关闭与虚空的链接，以确保殖民地的安全",
          "{pawn_nameFull}[circumstance_group]，不屑地站在虚空节点前，决心保护殖民地"
        ],
        "detail_sentences": [
          "灰暗的金属从四面八方压迫而来。",
          "其他殖民者在[side_position]的方向。焦急地等待{pawn_nameDef}的归来。",
          "{pawn_nameDef}的表情暴露了{pawn_pronoun}正在为眼前的选择而苦恼。"
        ],
        "style_sentences": [],
        "scene_phrases": [
          "伴随着心灵能量噼啪作响",
          "虚空节点散发出一阵强烈的光芒",
          "身后似有虚空在低语"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{pawn_nameDef}正在关闭虚空节点。"
          ],
          "image": [
            "{pawn_nameFull}[circumstance_group]，正在关闭与虚空的链接，以确保殖民地的安全",
            "{pawn_nameFull}[circumstance_group]，不屑地站在虚空节点前，决心保护殖民地"
          ],
          "circumstance_phrase": [
            "伴随着心灵能量噼啪作响",
            "虚空节点散发出一阵强烈的光芒",
            "身后似有虚空在低语"
          ],
          "desc_sentence": [
            "灰暗的金属从四面八方压迫而来。",
            "其他殖民者在[side_position]的方向。焦急地等待{pawn_nameDef}的归来。",
            "{pawn_nameDef}的表情暴露了{pawn_pronoun}正在为眼前的选择而苦恼。"
          ],
          "circumstance_group": [
            "伴随着心灵能量噼啪作响",
            "虚空节点散发出一阵强烈的光芒",
            "身后似有虚空在低语"
          ]
        },
        "source_def_name": "ClosedTheVoid"
      },
      "embraced_void": {
        "event_nouns": [
          "{pawn_nameDef}正拥抱虚空"
        ],
        "main_images": [
          "{pawn_nameFull}利用虚空的禁忌知识，超脱凡人的局限性，[circumstance_group]",
          "{pawn_nameFull}在虚空的诱惑下沉沦，[circumstance_group]",
          "{pawn_nameFull}屈服于虚空的邪恶低语，[circumstance_group]"
        ],
        "detail_sentences": [
          "{pawn_nameDef}浑身散发出一种不祥的力量，正是虚空与{pawn_possessive}契约。",
          "{pawn_nameDef}的眼睛开始闪烁着超凡的光芒。",
          "其他殖民者正在[side_position]的方向，质疑{pawn_nameDef}的选择是否明智。"
        ],
        "style_sentences": [],
        "scene_phrases": [
          "{pawn_possessive}四肢被暗黑能量的卷须缠绕着",
          "深陷于心灵漩涡之中",
          "面上还带着诡异的微笑"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{pawn_nameDef}正拥抱虚空"
          ],
          "image": [
            "{pawn_nameFull}利用虚空的禁忌知识，超脱凡人的局限性，[circumstance_group]",
            "{pawn_nameFull}在虚空的诱惑下沉沦，[circumstance_group]",
            "{pawn_nameFull}屈服于虚空的邪恶低语，[circumstance_group]"
          ],
          "circumstance_phrase": [
            "{pawn_possessive}四肢被暗黑能量的卷须缠绕着",
            "深陷于心灵漩涡之中",
            "面上还带着诡异的微笑"
          ],
          "desc_sentence": [
            "{pawn_nameDef}浑身散发出一种不祥的力量，正是虚空与{pawn_possessive}契约。",
            "{pawn_nameDef}的眼睛开始闪烁着超凡的光芒。",
            "其他殖民者正在[side_position]的方向，质疑{pawn_nameDef}的选择是否明智。"
          ],
          "circumstance_group": [
            "{pawn_possessive}四肢被暗黑能量的卷须缠绕着",
            "深陷于心灵漩涡之中",
            "面上还带着诡异的微笑"
          ]
        },
        "source_def_name": "EmbracedTheVoid"
      },
      "performed_psychic_ritual": {
        "event_nouns": [
          "{pawn_nameDef}正主持心灵仪式"
        ],
        "main_images": [
          "{pawn_nameFull}[circumstance_group]，引导在自身周围跳动的能量，同时编织着这一强大的心灵仪式",
          "{pawn_nameFull}[circumstance_group]，念诵暗黑咒语，借助神秘力量举行心灵仪式",
          "{pawn_nameFull}[circumstance_group]，聚精会神地进行心灵仪式",
          "{pawn_nameFull}[circumstance_group]，在空气中描画着复杂的符号，利用潜在的心灵能量来展现心灵仪式"
        ],
        "detail_sentences": [
          "可以看见[side_position]边的一些吟诵者也参与其中，给予支持",
          "当{pawn_nameDef}完成心灵仪式时，空气中闪烁着光芒。",
          "背景中的巨石闪闪发光。",
          "周围的蜡烛在心灵漩涡中忽明忽暗。"
        ],
        "style_sentences": [],
        "scene_phrases": [
          "集中于面前的咒术书",
          "以专注的决心，展示{pawn_pronoun}对心灵之术的精通",
          "面上带着一丝残忍的笑意",
          "的声音透过能量的轰鸣声奋力呐喊"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{pawn_nameDef}正主持心灵仪式"
          ],
          "image": [
            "{pawn_nameFull}[circumstance_group]，引导在自身周围跳动的能量，同时编织着这一强大的心灵仪式",
            "{pawn_nameFull}[circumstance_group]，念诵暗黑咒语，借助神秘力量举行心灵仪式",
            "{pawn_nameFull}[circumstance_group]，聚精会神地进行心灵仪式",
            "{pawn_nameFull}[circumstance_group]，在空气中描画着复杂的符号，利用潜在的心灵能量来展现心灵仪式"
          ],
          "circumstance_phrase": [
            "集中于面前的咒术书",
            "以专注的决心，展示{pawn_pronoun}对心灵之术的精通",
            "面上带着一丝残忍的笑意",
            "的声音透过能量的轰鸣声奋力呐喊"
          ],
          "desc_sentence": [
            "可以看见[side_position]边的一些吟诵者也参与其中，给予支持",
            "当{pawn_nameDef}完成心灵仪式时，空气中闪烁着光芒。",
            "背景中的巨石闪闪发光。",
            "周围的蜡烛在心灵漩涡中忽明忽暗。"
          ],
          "circumstance_group": [
            "集中于面前的咒术书",
            "以专注的决心，展示{pawn_pronoun}对心灵之术的精通",
            "面上带着一丝残忍的笑意",
            "的声音透过能量的轰鸣声奋力呐喊"
          ]
        },
        "source_def_name": "PerformedPsychicRitual"
      },
      "attended_concert": {
        "event_nouns": [
          "{attender_nameDef}正在参加{organizer_nameDef}举办的音乐会",
          "{attender_nameDef}在听{organizer_nameDef}的音乐表演"
        ],
        "main_images": [
          "{attender_nameFull}静静地听着，[circumstance_group]",
          "{attender_nameFull}在欣赏{organizer_nameFull}的音乐表演，[circumstance_group]",
          "{attender_nameFull}随着节奏而动，[circumstance_group]",
          "{attender_nameFull}沉浸在音乐中，[circumstance_group]"
        ],
        "detail_sentences": [
          "[Quantity_adjphrase][PersonJob]在一旁跳起舞来。",
          "[Quantity_adjphrase][Animal]专注地听。"
        ],
        "style_sentences": [],
        "scene_phrases": [
          "同时伴随着掌声"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{attender_nameDef}正在参加{organizer_nameDef}举办的音乐会",
            "{attender_nameDef}在听{organizer_nameDef}的音乐表演"
          ],
          "image": [
            "{attender_nameFull}静静地听着，[circumstance_group]",
            "{attender_nameFull}在欣赏{organizer_nameFull}的音乐表演，[circumstance_group]",
            "{attender_nameFull}随着节奏而动，[circumstance_group]",
            "{attender_nameFull}沉浸在音乐中，[circumstance_group]"
          ],
          "circumstance_phrase": [
            "同时伴随着掌声"
          ],
          "desc_sentence": [
            "[Quantity_adjphrase][PersonJob]在一旁跳起舞来。",
            "[Quantity_adjphrase][Animal]专注地听。"
          ],
          "circumstance_group": [
            "同时伴随着掌声"
          ]
        },
        "source_def_name": "AttendedConcert"
      },
      "held_concert": {
        "event_nouns": [
          "{organizer_nameDef}正在举办一场音乐会"
        ],
        "main_images": [
          "{organizer_nameFull}正在演奏{organizer__pronoun}的成名曲，[circumstance_group]",
          "{organizer_nameFull}正在邀请现场观众一起演唱",
          "{organizer_nameFull}正在演唱一首热门歌曲",
          "{organizer_nameFull}正在进行高难度的表演，[circumstance_group]"
        ],
        "detail_sentences": [
          "[Quantity_adjphrase][PersonJob]在一旁欣赏。",
          "[Quantity_adjphrase][Animal]在一旁聆听。"
        ],
        "style_sentences": [],
        "scene_phrases": [
          "带着强烈的感情"
        ],
        "grammar_pools": {
          "tale_noun": [
            "{organizer_nameDef}正在举办一场音乐会"
          ],
          "image": [
            "{organizer_nameFull}正在演奏{organizer__pronoun}的成名曲，[circumstance_group]",
            "{organizer_nameFull}正在邀请现场观众一起演唱",
            "{organizer_nameFull}正在演唱一首热门歌曲",
            "{organizer_nameFull}正在进行高难度的表演，[circumstance_group]"
          ],
          "circumstance_phrase": [
            "带着强烈的感情"
          ],
          "desc_sentence": [
            "[Quantity_adjphrase][PersonJob]在一旁欣赏。",
            "[Quantity_adjphrase][Animal]在一旁聆听。"
          ],
          "circumstance_group": [
            "带着强烈的感情"
          ]
        },
        "source_def_name": "HeldConcert"
      },
      "noxious_haze": {
        "event_nouns": [
          "酸雾席卷了{pawn_nameDef}的[Community]",
          "{pawn_nameDef}的[Community]附近的气候开始变得充满毒性"
        ],
        "main_images": [
          "不一样的天空，[circumstance_group]",
          "空气变得稠密，且[circumstance_group]"
        ],
        "detail_sentences": [
          "{pawn_nameDef}在[TerrainFeature]附近藏起来，带着[AdjectiveAngsty]的表情凝视着外面。",
          "{pawn_nameDef}用布包裹着{pawn_possessive}脸。",
          "[Quantity_adjphrase]死亡的[Animal]躺在地上。",
          "[Quantity_adjphrase]正迈向死亡的[Animal]躺在地上。",
          "[Quantity_adjphrase]窒息的[Animal]躺在地上。",
          "[Quantity_adjphrase][Animal]逃离。"
        ],
        "style_sentences": [],
        "scene_phrases": [
          "看不到任何活物",
          "正等待着酸雾的消散",
          "看着动物们逃离"
        ],
        "grammar_pools": {
          "tale_noun": [
            "酸雾席卷了{pawn_nameDef}的[Community]",
            "{pawn_nameDef}的[Community]附近的气候开始变得充满毒性"
          ],
          "image": [
            "不一样的天空，[circumstance_group]",
            "空气变得稠密，且[circumstance_group]"
          ],
          "circumstance_phrase": [
            "看不到任何活物",
            "正等待着酸雾的消散",
            "看着动物们逃离"
          ],
          "desc_sentence": [
            "{pawn_nameDef}在[TerrainFeature]附近藏起来，带着[AdjectiveAngsty]的表情凝视着外面。",
            "{pawn_nameDef}用布包裹着{pawn_possessive}脸。",
            "[Quantity_adjphrase]死亡的[Animal]躺在地上。",
            "[Quantity_adjphrase]正迈向死亡的[Animal]躺在地上。",
            "[Quantity_adjphrase]窒息的[Animal]躺在地上。",
            "[Quantity_adjphrase][Animal]逃离。"
          ],
          "circumstance_group": [
            "看不到任何活物",
            "正等待着酸雾的消散",
            "看着动物们逃离"
          ]
        },
        "source_def_name": "NoxiousHaze"
      }
    },
    "art_grammar_pools": {
      "r_art_description": [
        "[physical_description_root]"
      ],
      "circumstance_group": [
        "[circumstance_phrase]"
      ],
      "desc_sentence_group": [
        "[style_group]"
      ],
      "context_sentence": [
        "[depiction]中所引述的故事是发生在[DATE]的[tale_noun]。",
        "这件[depiction]描述了发生在[DATE]的[tale_noun]的故事。",
        "[depiction]记述了发生在[DATE]的关于[tale_noun]的往事。"
      ],
      "style_group": [
        "[artextra_clause]，[style_clause]。",
        "[style_clause]，[artconjunction][artextra_clause]。",
        "[style_clause]。",
        "[artextra_clause]。",
        ""
      ],
      "artconjunction": [
        "",
        "",
        "",
        "",
        "",
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
        "一个[Character]",
        "一个[Character]",
        "一个[Character]",
        "一片[TerrainFeature]",
        "一个[Community]",
        "一棵[TreeType]",
        "一株[Vegetable]",
        "一[AnimalGroup][Animal]"
      ],
      "subimageplural": [
        "[Quantity_adjphrase][Character]",
        "[Quantity_adjphrase][Character]",
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
        "作品[symbolizes][ConceptAny]",
        "作品[symbolizes][ConceptAny]",
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
        "表现"
      ],
      "depiction": [
        "描绘",
        "展示",
        "刻画",
        "表现",
        "描述"
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
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
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
        "坦率",
        "诚实",
        "自信",
        "天才",
        "无敌",
        "专注",
        "受欢迎",
        "爱说笑",
        "好脾气",
        "好身材",
        "好嗓音",
        "俏脸蛋",
        "识大体",
        "有活力",
        "有爱心",
        "有技术",
        "有经验",
        "有魅力",
        "和蔼可亲",
        "平易近人",
        "笑容可掬",
        "嘘寒问暖",
        "真心实意",
        "沉鱼落雁",
        "闭月羞花",
        "倾国倾城",
        "柔情似水",
        "善解人意",
        "冰清玉洁",
        "含情脉脉",
        "神采奕奕",
        "文质彬彬",
        "威风凛凛",
        "心慈面善",
        "谈笑风生",
        "力挽狂澜",
        "专心致志",
        "肝胆相照",
        "举世无双",
        "绝世超伦",
        "鹤立鸡群"
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
        "堕落",
        "吝啬",
        "变态",
        "莽撞",
        "奸猾",
        "荒唐",
        "无脑",
        "轻浮",
        "赖皮",
        "讨厌",
        "敌意",
        "敌对",
        "歹毒",
        "变坏",
        "流浪",
        "被唆使",
        "被控制",
        "被激怒",
        "被挑逗",
        "被挑衅",
        "被伤害",
        "被强化",
        "被改造",
        "被丢弃",
        "被欺骗",
        "被强迫",
        "被压迫",
        "被放逐",
        "被指挥",
        "被开光",
        "被侮辱",
        "奸险狡诈",
        "丧尽天良",
        "心狠毒辣",
        "穷凶极恶",
        "心如蛇蝎",
        "道貌岸然",
        "恶贯满盈",
        "罪恶滔天",
        "好吃懒做",
        "无恶不作"
      ],
      "AdjectiveAny": [
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
        "坦率",
        "诚实",
        "自信",
        "天才",
        "无敌",
        "专注",
        "受欢迎",
        "爱说笑",
        "好脾气",
        "好身材",
        "好嗓音",
        "俏脸蛋",
        "识大体",
        "有活力",
        "有爱心",
        "有技术",
        "有经验",
        "有魅力",
        "和蔼可亲",
        "平易近人",
        "笑容可掬",
        "嘘寒问暖",
        "真心实意",
        "沉鱼落雁",
        "闭月羞花",
        "倾国倾城",
        "柔情似水",
        "善解人意",
        "冰清玉洁",
        "含情脉脉",
        "神采奕奕",
        "文质彬彬",
        "威风凛凛",
        "心慈面善",
        "谈笑风生",
        "力挽狂澜"
      ],
      "AdjectiveLarge": [
        "巨大",
        "庞大",
        "硕大",
        "巨型",
        "高大",
        "宏伟"
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
        "力量",
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
        "杀戮"
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
        "军用手套",
        "军靴",
        "礼服",
        "情趣内衣",
        "短裙",
        "背心",
        "防弹背心",
        "斥候装甲套装",
        "板甲",
        "女装",
        "男装",
        "心灵套装",
        "礼服衬衫",
        "紧身胸衣",
        "贵族马甲",
        "皇家长袍",
        "淑女帽",
        "高顶礼帽",
        "冠冕",
        "皇冠",
        "破碎帝国套装"
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
      ],
      "ally": [
        "盟友",
        "朋友",
        "支持者",
        "搭档",
        "同伴",
        "同伙",
        "同志",
        "守卫者",
        "助手",
        "拥护者",
        "帮手",
        "护卫",
        "死党",
        "战友",
        "知己",
        "伙伴"
      ],
      "angstyverb": [
        "悲伤",
        "绝望",
        "沮丧"
      ]
    },
    "object_picker_options": {
      "crafted_art:thing": {
        "title": "选择常见艺术作品",
        "quick": [
          "小雕塑",
          "大雕塑",
          "宏伟雕塑",
          "扶手椅",
          "餐椅"
        ],
        "all": [
          "小雕塑",
          "大雕塑",
          "宏伟雕塑",
          "扶手椅",
          "餐椅",
          "棺材",
          "左轮手枪"
        ]
      },
      "finished_construction:object": {
        "title": "选择常见建造项目",
        "quick": [
          "墙",
          "栅栏",
          "单人床",
          "双人床",
          "餐椅"
        ],
        "all": [
          "墙",
          "栅栏",
          "单人床",
          "双人床",
          "餐椅",
          "扶手椅",
          "书柜",
          "小书柜",
          "床头柜",
          "矮柜",
          "艺创台",
          "基础研究台",
          "高级研究台",
          "精密装配台",
          "药物实验台",
          "电熔炼器",
          "深钻井",
          "工具柜",
          "棺材",
          "轨道交易信标"
        ]
      },
      "finished_crafting:object": {
        "title": "选择常见制作项目",
        "quick": [
          "左轮手枪",
          "单分子剑",
          "长剑",
          "等离子剑",
          "宙斯锤"
        ],
        "all": [
          "左轮手枪",
          "单分子剑",
          "长剑",
          "等离子剑",
          "宙斯锤",
          "电荷步枪",
          "重型冲锋枪",
          "防弹背心",
          "零部件",
          "高级零部件",
          "海军装甲",
          "斥候装甲"
        ]
      },
      "finished_research:project": {
        "title": "选择研究项目",
        "quick": [
          "微电子基础",
          "电力",
          "深钻井",
          "仿生学",
          "星际航行基础"
        ],
        "all": [
          "酿酒",
          "地毯铺设",
          "可可树",
          "复杂衣物",
          "复杂家具",
          "恶魔菇",
          "成瘾品生产",
          "活力水制作",
          "巨弓",
          "长剑",
          "蒸发制冷器",
          "干肉饼",
          "佩诺西林制作",
          "板甲",
          "精神药物提炼",
          "精神叶冲调",
          "反曲弓",
          "锻造",
          "岩石切割",
          "植树",
          "清醒丸制作",
          "空调",
          "自动门",
          "蓄电池",
          "精炼技术",
          "反冲系统",
          "改进照明",
          "电力",
          "泡沫灭火器",
          "防弹衣",
          "灭火炮塔",
          "气动系统",
          "地热能",
          "枪械制作",
          "自动机枪塔",
          "水栽培",
          "简易爆炸装置",
          "机械加工",
          "迫击炮",
          "营养膏合成机",
          "包装生存食物",
          "简易假体",
          "烟罐包",
          "太阳能板",
          "无菌材料",
          "显像管电视",
          "水轮发电机",
          "深钻井",
          "平板电视",
          "地质扫描仪",
          "自动加农炮塔",
          "医疗床",
          "远距离矿物扫描仪",
          "医药生产",
          "微电子基础",
          "排水泵",
          "多管武器",
          "精准步枪",
          "护盾",
          "运输舱",
          "高级精密装配",
          "仿生学",
          "电荷弹",
          "低温休眠舱",
          "精密装配",
          "多元分析仪",
          "海军装甲",
          "斥候装甲",
          "集群火箭发射器",
          "铀弹加农炮塔",
          "生命体征监测仪",
          "星际航行基础",
          "飞船电脑核心",
          "飞船低温休眠舱",
          "飞船推进器",
          "飞船反应堆",
          "飞船传感器",
          "高级逆重科技",
          "基础逆重科技",
          "能量武器",
          "钓鱼",
          "重型桥梁",
          "猎手无人机",
          "轨道生存科技",
          "穿梭机",
          "标准逆重科技",
          "高级心灵仪式",
          "大气升温器",
          "虚空扰动",
          "活铁提取",
          "活铁发电机",
          "活铁采集",
          "活铁武器",
          "活铁塑造",
          "极乐切脑",
          "血怒之雨",
          "洗脑",
          "时间吞噬",
          "死灵尘",
          "死亡回避",
          "眩光照明弹",
          "汲电器",
          "实体收容",
          "狂热诱发器",
          "食尸鬼假体",
          "食尸鬼植入",
          "食尸鬼复活",
          "心灵错乱武器",
          "强力血清",
          "钢血血清",
          "思滞血清",
          "突变武器",
          "焦虑脉冲",
          "学识汲取",
          "愉悦脉冲",
          "潜近探测器",
          "嗜灵反应",
          "幽魂隐形",
          "血清合成",
          "折跃绑架",
          "睡眠抑制器",
          "吸引动物",
          "召唤血肉兽",
          "召唤巨坑",
          "吸引蹒跚怪",
          "虚空雕塑",
          "安全大门",
          "炮塔背包",
          "生体递归",
          "生体塑形",
          "神经超频",
          "骑士装甲",
          "枪械联控器",
          "跳跃背包",
          "贵族衣物",
          "皇家衣物",
          "人工代谢",
          "大脑链接",
          "作息节律",
          "紧凑武器",
          "躯体整形",
          "愈合因子",
          "分子分析",
          "神经计算",
          "皮肤硬化",
          "专业肢体",
          "毒素合成",
          "竖琴",
          "大键琴",
          "钢琴",
          "基础机械科技",
          "高级机械科技",
          "标准机械科技",
          "极致机械科技",
          "垃圾分解器",
          "超凡遗传学",
          "死眠设备",
          "生育规范",
          "基因处理器",
          "培育舱",
          "滤毒器",
          "毒气",
          "污染性发电",
          "异种遗传学"
        ]
      },
      "studied_entity:entity": {
        "title": "选择异象实体",
        "quick": [
          "虚空节点",
          "扭曲方尖碑",
          "腐化方尖碑",
          "夜魇",
          "金属怪形"
        ],
        "all": [
          "虚空节点",
          "虚空结构",
          "虚空巨石",
          "扭曲方尖碑",
          "腐化方尖碑",
          "畸变方尖碑",
          "夜光柱",
          "电子阻滞器",
          "收容平台",
          "收容点",
          "灰盒",
          "灰色雕塑",
          "无底深坑",
          "蹒趚怪",
          "食尸鬼",
          "金属怪形",
          "血棘巨人",
          "吞噬兽",
          "嵌合兽",
          "血肉核心",
          "苦痛之球",
          "夜魇",
          "幽魂",
          "隐形魔",
          "恶臭瘤兽",
          "惊惧母兽",
          "独爪兽",
          "双爪兽",
          "三爪兽",
          "扭曲超凡支柱",
          "虚空金属块",
          "虚空金属墙",
          "潜近探测器",
          "碎片阻滞器",
          "狂热诱发器",
          "睡眠抑制器",
          "大气升温器"
        ]
      }
    }
  }
};
