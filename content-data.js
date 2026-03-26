window.TynanArtData = {
  "EVENT_SCHEMAS": [
    {
      "id": "crafted_art",
      "label": "创作艺术品",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "石棺饰板"
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
      "category": "艺术与创作"
    },
    {
      "id": "finished_construction",
      "label": "完成建造/制作",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "石棺饰板"
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
      "category": "劳作与技艺"
    },
    {
      "id": "finished_research",
      "label": "完成研究",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "石棺饰板"
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
      "category": "劳作与技艺"
    },
    {
      "id": "read_book",
      "label": "读完一本书",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "石棺饰板"
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
      "category": "艺术与创作"
    },
    {
      "id": "recruit_joiner",
      "label": "招募加入",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "石棺饰板"
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
      "label": "驯服动物",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "石棺饰板"
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
      "label": "训练动物",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "石棺饰板"
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
      "label": "结婚/婚礼",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "石棺饰板"
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
      "label": "战斗致伤",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "石棺饰板"
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
      "category": "战斗与暴力"
    },
    {
      "id": "kill",
      "label": "击杀",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "石棺饰板"
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
      "category": "战斗与暴力"
    },
    {
      "id": "meditate",
      "label": "冥想",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "石棺饰板"
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
      "category": "精神与仪式"
    },
    {
      "id": "pray",
      "label": "祈祷",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "石棺饰板"
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
      "category": "精神与仪式"
    },
    {
      "id": "burial",
      "label": "下葬/悼念",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "石棺饰板"
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
      "category": "精神与仪式"
    },
    {
      "id": "party",
      "label": "参加聚会",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "石棺饰板"
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
      "label": "技艺精熟",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "石棺饰板"
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
      "category": "劳作与技艺"
    },
    {
      "id": "insult",
      "label": "侮辱/冲突",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "石棺饰板"
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
      "label": "着陆舱降落",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "石棺饰板"
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
      "category": "迁徙与休眠"
    },
    {
      "id": "berserk_break",
      "label": "狂暴发作",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "石棺饰板"
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
      "category": "战斗与暴力"
    },
    {
      "id": "despair_break",
      "label": "绝望崩溃",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "石棺饰板"
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
      "category": "异象与灾难"
    },
    {
      "id": "caravan_departure",
      "label": "组建商队",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "石棺饰板"
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
      "category": "迁徙与休眠"
    },
    {
      "id": "surgery",
      "label": "实施手术",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "石棺饰板"
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
      "category": "医疗与生理"
    },
    {
      "id": "birth",
      "label": "分娩",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "石棺饰板"
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
      "category": "医疗与生理"
    },
    {
      "id": "mine_vein",
      "label": "开采矿脉",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "石棺饰板"
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
      "category": "劳作与技艺"
    },
    {
      "id": "game_play",
      "label": "娱乐博弈",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "石棺饰板"
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
      "category": "日常与娱乐"
    },
    {
      "id": "drunkenness",
      "label": "极端醉酒",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "石棺饰板"
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
      "category": "日常与娱乐"
    },
    {
      "id": "fire_panic",
      "label": "人物着火",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "石棺饰板"
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
      "category": "战斗与暴力"
    },
    {
      "id": "nude_wander",
      "label": "赤身游荡",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "石棺饰板"
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
      "category": "日常与娱乐"
    },
    {
      "id": "grave_visit",
      "label": "探望墓地",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "石棺饰板"
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
      "label": "狩猎动物",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "石棺饰板"
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
      "category": "动物与自然"
    },
    {
      "id": "capture_prisoner",
      "label": "俘虏敌人",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "石棺饰板"
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
      "category": "战斗与暴力"
    },
    {
      "id": "execution",
      "label": "处决囚犯",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "石棺饰板"
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
      "category": "战斗与暴力"
    },
    {
      "id": "kidnap",
      "label": "绑架殖民者",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "石棺饰板"
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
      "category": "战斗与暴力"
    },
    {
      "id": "cryptosleep_enter",
      "label": "进入休眠仓",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "石棺饰板"
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
      "category": "迁徙与休眠"
    },
    {
      "id": "cryptosleep_place",
      "label": "送入休眠仓",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "石棺饰板"
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
      "category": "迁徙与休眠"
    },
    {
      "id": "lover_union",
      "label": "结为恋人",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "石棺饰板"
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
      "label": "恋情破裂",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "石棺饰板"
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
      "label": "人与动物结缘",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "石棺饰板"
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
      "label": "达成交易",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "石棺饰板"
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
      "label": "剥取装备",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "石棺饰板"
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
      "category": "战斗与暴力"
    },
    {
      "id": "snowman_build",
      "label": "堆雪人",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "石棺饰板"
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
      "category": "日常与娱乐"
    },
    {
      "id": "meteorite_impact",
      "label": "陨石坠落",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "石棺饰板"
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
      "category": "异象与灾难"
    },
    {
      "id": "toxic_fallout",
      "label": "毒雾降临",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "石棺饰板"
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
      "category": "异象与灾难"
    },
    {
      "id": "aurora",
      "label": "极光降临",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "石棺饰板"
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
      "category": "异象与灾难"
    },
    {
      "id": "flashstorm",
      "label": "闪电风暴",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "石棺饰板"
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
      "category": "异象与灾难"
    },
    {
      "id": "insect_infestation",
      "label": "虫群爆发",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "石棺饰板"
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
      "category": "异象与灾难"
    },
    {
      "id": "manhunter_pack",
      "label": "狂暴兽群",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "石棺饰板"
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
        "石棺饰板"
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
      "category": "医疗与生理"
    },
    {
      "id": "hypothermia",
      "label": "低温症",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "石棺饰板"
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
      "category": "医疗与生理"
    },
    {
      "id": "exhaustion_collapse",
      "label": "精力耗尽",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "石棺饰板"
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
      "category": "医疗与生理"
    },
    {
      "id": "cannibalism",
      "label": "食人肉",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "石棺饰板"
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
      "category": "医疗与生理"
    },
    {
      "id": "tox_buildup",
      "label": "毒性堆积",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "石棺饰板"
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
      "category": "医疗与生理"
    },
    {
      "id": "message_received",
      "label": "收到信息",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "石棺饰板"
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
      "category": "异象与灾难"
    },
    {
      "id": "eclipse",
      "label": "日蚀",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "石棺饰板"
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
      "category": "异象与灾难"
    },
    {
      "id": "tornado",
      "label": "龙卷风",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "石棺饰板"
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
      "category": "异象与灾难"
    },
    {
      "id": "vomit",
      "label": "呕吐",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "石棺饰板"
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
      "category": "医疗与生理"
    },
    {
      "id": "cavein_escape",
      "label": "躲避塌方",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "石棺饰板"
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
      "category": "异象与灾难"
    },
    {
      "id": "caravan_ambush",
      "label": "商队遇伏",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "石棺饰板"
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
      "category": "异象与灾难"
    },
    {
      "id": "ship_chunk_crash",
      "label": "远古舰船残骸坠落",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "石棺饰板"
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
      "category": "异象与灾难"
    },
    {
      "id": "volcanic_winter",
      "label": "火山寒冬",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "石棺饰板"
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
      "category": "异象与灾难"
    },
    {
      "id": "disease_onset",
      "label": "疾病发作",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "石棺饰板"
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
      "category": "医疗与生理"
    },
    {
      "id": "recruit_failure",
      "label": "招募失败",
      "carrier_types": [
        "雕塑",
        "家具",
        "近战武器",
        "远程武器",
        "石棺饰板"
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
        "石棺饰板"
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
      "category": "动物与自然"
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
      "花岗岩雕像",
      "精雕木像",
      "银饰短剑",
      "雕纹长椅",
      "石制石棺饰板",
      "细工陶瓶",
      "玉制摆件"
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
      "枪械锻造",
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
      "单分子长刀",
      "电荷步枪",
      "制式左轮",
      "动力战锤",
      "精钢短剑",
      "重型冲锋枪"
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
      "零组件",
      "机械零件",
      "生体铁"
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
      "粗糙",
      "普通",
      "良好",
      "优秀",
      "精良",
      "传说"
    ],
    "material": [
      "木制",
      "花岗岩",
      "钢制",
      "银制",
      "金色",
      "玉制",
      "石制"
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
      "在被篝火照亮的夜色里"
    ],
    "detail_hint": [
      "周围散落着工具与碎屑。",
      "背景里站着几名旁观者。",
      "人物的姿态被夸张地处理得更显庄严。",
      "画面边缘缀着细碎阴影。",
      "远处可见沉默的建筑轮廓。"
    ],
    "style_hint": [
      "整体构图端正而平衡。",
      "这件作品似乎在暗示坚忍与失落并存。",
      "作品带着冷静而压迫的气息。",
      "它仿佛在象征秩序对混乱的短暂压制。"
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
        "这件雕塑刻画了{main_image}。",
        "这尊雕塑描绘了{main_image}。",
        "在这件雕塑上，可以看到{main_image}。",
        "这件雕塑表现了{main_image}。",
        "雕塑表面的图像呈现出{main_image}。",
        "这件作品上描摹了{main_image}。",
        "雕塑上的刻纹展示了{main_image}。",
        "这件雕刻作品再现了{main_image}。"
      ],
      "家具": [
        "这件家具上刻着{main_image}。",
        "这件家具描绘了{main_image}。",
        "家具表面的纹饰表现了{main_image}。",
        "家具上的图像呈现出{main_image}。",
        "这件家具展示了{main_image}。",
        "在这件家具上，可以看到{main_image}。",
        "家具表面的刻纹再现了{main_image}。",
        "这件家具上的装饰描摹了{main_image}。"
      ],
      "近战武器": [
        "这把武器上刻画了{main_image}。",
        "武器表面的纹饰描绘了{main_image}。",
        "这件兵器刻出了{main_image}。",
        "武器表面的雕纹表现了{main_image}。",
        "在这把武器上，可以看到{main_image}。",
        "兵器上的图像展示了{main_image}。",
        "这把武器描摹了{main_image}。",
        "武器上的刻纹再现了{main_image}。"
      ],
      "远程武器": [
        "这把武器上刻画了{main_image}。",
        "武器表面的纹饰描绘了{main_image}。",
        "这件兵器刻出了{main_image}。",
        "武器表面的雕纹表现了{main_image}。",
        "在这把武器上，可以看到{main_image}。",
        "兵器上的图像展示了{main_image}。",
        "这把武器描摹了{main_image}。",
        "武器上的刻纹再现了{main_image}。"
      ],
      "石棺饰板": [
        "这块石棺饰板上描绘了{main_image}。",
        "石棺饰板刻画了{main_image}。",
        "石棺表面的图像表现了{main_image}。",
        "石棺饰板上的刻纹展示了{main_image}。",
        "在这块石棺饰板上，可以看到{main_image}。",
        "石棺表面的雕刻再现了{main_image}。",
        "这块饰板呈现出{main_image}。",
        "石棺上的图像描摹了{main_image}。"
      ]
    },
    "context_sentences": [
      "这件作品讲述了{event_noun}，发生在{date_text}。",
      "它所叙述的，是{event_noun}，时间在{date_text}。",
      "这幅图像指向{event_noun}，其事发生于{date_text}。",
      "这件描绘所涉及的，是{event_noun}，发生在{date_text}。",
      "它所回顾的，是发生在{date_text}的{event_noun}。",
      "作品所记录的，是{event_noun}，时间在{date_text}。",
      "这件作品所呈现的，是{event_noun}，发生在{date_text}。",
      "图像所追述的，是{event_noun}，其时为{date_text}。"
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
          "{maker_display}将心力倾注在{thing_phrase}上",
          "{maker_display}创作{thing_phrase}的情景",
          "{maker_display}完成{thing_phrase}的情景",
          "{maker_display}将心力倾注在{thing_phrase}上的情景",
          "{maker_display}创作{thing_phrase}的场面",
          "{maker_display}完成{thing_phrase}的场面"
        ],
        "main_images": [
          "{maker_display}正专注地制作{thing_phrase}{scene_fragment}",
          "{maker_display}完成{thing_phrase}的最后工序{scene_fragment}",
          "{maker_display}伏案雕琢{thing_phrase}{scene_fragment}"
        ],
        "detail_sentences": [
          "工具散落在四周，像是一场漫长劳动刚刚结束。",
          "{thing_phrase}被刻得略大，以强调它的重要性。",
          "{maker_pronoun}的神情被处理得更有力量，几乎像是作品的一部分。",
          "在画面边缘，工具散落在四周，像是一场漫长劳动刚刚结束。",
          "在画面边缘，{thing_phrase}被刻得略大，以强调它的重要性。",
          "在画面边缘，{maker_pronoun}的神情被处理得更有力量，几乎像是作品的一部分。",
          "在背景中，工具散落在四周，像是一场漫长劳动刚刚结束。",
          "在背景中，{thing_phrase}被刻得略大，以强调它的重要性。"
        ],
        "style_sentences": [
          "它似乎在赞颂技艺与专注。",
          "整体来看，它似乎在赞颂技艺与专注。",
          "从构图与气质上看，它似乎在赞颂技艺与专注。",
          "整体构图稳固，带着一种完成后的满足感。",
          "整体来看，整体构图稳固，带着一种完成后的满足感。",
          "从构图与气质上看，整体构图稳固，带着一种完成后的满足感。",
          "这件作品表现出劳动本身的尊严。",
          "整体来看，这件作品表现出劳动本身的尊严。"
        ],
        "scene_phrases": [
          "在灯火昏黄的工坊里",
          "在满是木屑和石粉的工作台前",
          "在长夜将尽的时候",
          "在聚落外缘",
          "在主体后方的空地上",
          "在远处地形起伏的尽头",
          "在画面左侧延展出去的位置",
          "在画面右侧留白之间"
        ]
      },
      "finished_construction": {
        "event_nouns": [
          "{builder_display}完成{object_phrase}",
          "{builder_display}建起{object_phrase}",
          "{builder_display}结束对{object_phrase}的制作",
          "{builder_display}完成{object_phrase}的情景",
          "{builder_display}建起{object_phrase}的情景",
          "{builder_display}结束对{object_phrase}的制作的情景",
          "{builder_display}完成{object_phrase}的场面",
          "{builder_display}建起{object_phrase}的场面"
        ],
        "main_images": [
          "{builder_display}正为{object_phrase}做最后整理{scene_fragment}",
          "{builder_display}站在刚完成的{object_phrase}旁{scene_fragment}",
          "{builder_display}俯身检查{object_phrase}的表面{scene_fragment}"
        ],
        "detail_sentences": [
          "作品周围整齐地摆着工具，显得异常有条理。",
          "{builder_pronoun}身上仍带着劳动留下的灰尘。",
          "背景里似乎有人在看着这件新近完成的作品。",
          "在画面边缘，作品周围整齐地摆着工具，显得异常有条理。",
          "在画面边缘，{builder_pronoun}身上仍带着劳动留下的灰尘。",
          "在画面边缘，背景里似乎有人在看着这件新近完成的作品。",
          "在背景中，作品周围整齐地摆着工具，显得异常有条理。",
          "在背景中，{builder_pronoun}身上仍带着劳动留下的灰尘。"
        ],
        "style_sentences": [
          "这件作品强调了建设带来的安定感。",
          "整体来看，这件作品强调了建设带来的安定感。",
          "从构图与气质上看，这件作品强调了建设带来的安定感。",
          "画面显得踏实、沉稳而略带自豪。",
          "整体来看，画面显得踏实、沉稳而略带自豪。",
          "从构图与气质上看，画面显得踏实、沉稳而略带自豪。",
          "它让人想到手工劳动的坚忍。",
          "整体来看，它让人想到手工劳动的坚忍。"
        ],
        "scene_phrases": [
          "在未散尽的尘土之间",
          "在工地边缘",
          "在暮色压下来的庭院里",
          "在聚落外缘",
          "在主体后方的空地上",
          "在远处地形起伏的尽头",
          "在画面左侧延展出去的位置",
          "在画面右侧留白之间"
        ]
      },
      "finished_research": {
        "event_nouns": [
          "{researcher_display}完成{project_name}研究",
          "{researcher_display}揭开{project_name}的秘密",
          "{researcher_display}攻克{project_name}",
          "{researcher_display}完成{project_name}研究的情景",
          "{researcher_display}揭开{project_name}的秘密的情景",
          "{researcher_display}攻克{project_name}的情景",
          "{researcher_display}完成{project_name}研究的场面",
          "{researcher_display}揭开{project_name}的秘密的场面"
        ],
        "main_images": [
          "{researcher_display}正凝视与{project_name}有关的记录{scene_fragment}",
          "{researcher_display}在纸页与器具之间完成{project_name}{scene_fragment}",
          "{researcher_display}伏案研究{project_name}直至得出答案{scene_fragment}"
        ],
        "detail_sentences": [
          "桌面上堆满了纸张、草图与实验器具。",
          "{researcher_pronoun}的目光被刻得格外明亮。",
          "背景中的线条被简化，以突出发现本身。",
          "在画面边缘，桌面上堆满了纸张、草图与实验器具。",
          "在画面边缘，{researcher_pronoun}的目光被刻得格外明亮。",
          "在画面边缘，背景中的线条被简化，以突出发现本身。",
          "在背景中，桌面上堆满了纸张、草图与实验器具。",
          "在背景中，{researcher_pronoun}的目光被刻得格外明亮。"
        ],
        "style_sentences": [
          "作品散发出求知与危险并存的气息。",
          "整体来看，作品散发出求知与危险并存的气息。",
          "从构图与气质上看，作品散发出求知与危险并存的气息。",
          "它让人想到理性如何在疲惫中仍然向前推进。",
          "整体来看，它让人想到理性如何在疲惫中仍然向前推进。",
          "从构图与气质上看，它让人想到理性如何在疲惫中仍然向前推进。",
          "整体构图在秩序与狂热之间保持着微妙平衡。",
          "整体来看，整体构图在秩序与狂热之间保持着微妙平衡。"
        ],
        "scene_phrases": [
          "在孤灯照亮的研究台前",
          "在堆满文件的实验室里",
          "在沉寂的深夜中",
          "在聚落外缘",
          "在主体后方的空地上",
          "在远处地形起伏的尽头",
          "在画面左侧延展出去的位置",
          "在画面右侧留白之间"
        ]
      },
      "read_book": {
        "event_nouns": [
          "{reader_display}读完{book_display}",
          "{reader_display}从{book_display}中得到启示",
          "{reader_display}合上{book_display}的最后一页",
          "{reader_display}读完{book_display}的情景",
          "{reader_display}从{book_display}中得到启示的情景",
          "{reader_display}合上{book_display}的最后一页的情景",
          "{reader_display}读完{book_display}的场面",
          "{reader_display}从{book_display}中得到启示的场面"
        ],
        "main_images": [
          "{reader_display}正合上{book_display}{scene_fragment}",
          "{reader_display}翻过{book_display}的最后一页{scene_fragment}",
          "{reader_display}坐在静处，仿佛仍在回味{book_display}{scene_fragment}"
        ],
        "detail_sentences": [
          "人物四周摆着零散笔记，像是刚经历过一段长久思考。",
          "{reader_pronoun}的神情被刻得平静而深远。",
          "书页本身被刻意强调，使文本成为画面中心。",
          "在画面边缘，人物四周摆着零散笔记，像是刚经历过一段长久思考。",
          "在画面边缘，{reader_pronoun}的神情被刻得平静而深远。",
          "在画面边缘，书页本身被刻意强调，使文本成为画面中心。",
          "在背景中，人物四周摆着零散笔记，像是刚经历过一段长久思考。",
          "在背景中，{reader_pronoun}的神情被刻得平静而深远。"
        ],
        "style_sentences": [
          "这件作品流露出沉静而持久的领悟感。",
          "整体来看，这件作品流露出沉静而持久的领悟感。",
          "从构图与气质上看，这件作品流露出沉静而持久的领悟感。",
          "它仿佛在表达知识如何缓慢改变一个人。",
          "整体来看，它仿佛在表达知识如何缓慢改变一个人。",
          "从构图与气质上看，它仿佛在表达知识如何缓慢改变一个人。",
          "构图收敛，强调了阅读后的回响。",
          "整体来看，构图收敛，强调了阅读后的回响。"
        ],
        "scene_phrases": [
          "在柔和灯光下",
          "在安静的阅读角落里",
          "在茶杯尚有余温之际",
          "在聚落外缘",
          "在主体后方的空地上",
          "在远处地形起伏的尽头",
          "在画面左侧延展出去的位置",
          "在画面右侧留白之间"
        ]
      },
      "recruit_joiner": {
        "event_nouns": [
          "{recruiter_display}说服{joiner_display}加入",
          "{joiner_display}被{recruiter_display}招募",
          "{recruiter_display}欢迎{joiner_display}成为同伴",
          "{recruiter_display}说服{joiner_display}加入的情景",
          "{joiner_display}被{recruiter_display}招募的情景",
          "{recruiter_display}欢迎{joiner_display}成为同伴的情景",
          "{recruiter_display}说服{joiner_display}加入的场面",
          "{joiner_display}被{recruiter_display}招募的场面"
        ],
        "main_images": [
          "{recruiter_display}正向{joiner_display}伸出手{scene_fragment}",
          "{recruiter_display}与{joiner_display}在交谈后达成一致{scene_fragment}",
          "{joiner_display}在{recruiter_display}的引导下迈出关键一步{scene_fragment}"
        ],
        "detail_sentences": [
          "背景中的人群被简略处理，像是在等待这场对话的结果。",
          "{joiner_pronoun}的姿态仍带着迟疑，但已经开始向前。",
          "两人的距离被处理得很近，使承诺本身成为焦点。",
          "在画面边缘，背景中的人群被简略处理，像是在等待这场对话的结果。",
          "在画面边缘，{joiner_pronoun}的姿态仍带着迟疑，但已经开始向前。",
          "在画面边缘，两人的距离被处理得很近，使承诺本身成为焦点。",
          "在背景中，背景中的人群被简略处理，像是在等待这场对话的结果。",
          "在背景中，{joiner_pronoun}的姿态仍带着迟疑，但已经开始向前。"
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
          "在聚落入口处",
          "在人群稍远处围观时",
          "在昏黄的室内灯火下",
          "在聚落外缘",
          "在主体后方的空地上",
          "在远处地形起伏的尽头",
          "在画面左侧延展出去的位置",
          "在画面右侧留白之间"
        ]
      },
      "tame_animal": {
        "event_nouns": [
          "{tamer_display}驯服{animal_name}",
          "{tamer_display}让{animal_name}放下戒备",
          "{tamer_display}与{animal_name}建立联系",
          "{tamer_display}驯服{animal_name}的情景",
          "{tamer_display}让{animal_name}放下戒备的情景",
          "{tamer_display}与{animal_name}建立联系的情景",
          "{tamer_display}驯服{animal_name}的场面",
          "{tamer_display}让{animal_name}放下戒备的场面"
        ],
        "main_images": [
          "{tamer_display}正缓缓靠近{animal_name}{scene_fragment}",
          "{tamer_display}伸手安抚{animal_name}{scene_fragment}",
          "{tamer_display}向{animal_name}递出食物{scene_fragment}"
        ],
        "detail_sentences": [
          "动物被刻得警觉而紧绷，尚留有野性的气息。",
          "{tamer_pronoun}的动作被处理得极慢，仿佛任何急躁都会毁掉这一刻。",
          "远处似乎还有别的动物在观察这一幕。",
          "在画面边缘，动物被刻得警觉而紧绷，尚留有野性的气息。",
          "在画面边缘，{tamer_pronoun}的动作被处理得极慢，仿佛任何急躁都会毁掉这一刻。",
          "在画面边缘，远处似乎还有别的动物在观察这一幕。",
          "在背景中，动物被刻得警觉而紧绷，尚留有野性的气息。",
          "在背景中，{tamer_pronoun}的动作被处理得极慢，仿佛任何急躁都会毁掉这一刻。"
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
          "在草地边缘",
          "在晨雾未散的时候",
          "在林木与围栏之间",
          "在聚落外缘",
          "在主体后方的空地上",
          "在远处地形起伏的尽头",
          "在画面左侧延展出去的位置",
          "在画面右侧留白之间"
        ]
      },
      "train_animal": {
        "event_nouns": [
          "{trainer_display}训练{animal_name}学习{training_name}",
          "{trainer_display}教会{animal_name}{training_name}",
          "{animal_name}接受{trainer_display}的{training_name}训练",
          "{trainer_display}训练{animal_name}学习{training_name}的情景",
          "{trainer_display}教会{animal_name}{training_name}的情景",
          "{animal_name}接受{trainer_display}的{training_name}训练的情景",
          "{trainer_display}训练{animal_name}学习{training_name}的场面",
          "{trainer_display}教会{animal_name}{training_name}的场面"
        ],
        "main_images": [
          "{trainer_display}正训练{animal_name}进行{training_name}{scene_fragment}",
          "{trainer_display}重复示意，让{animal_name}学会{training_name}{scene_fragment}",
          "{animal_name}在{trainer_display}面前尝试{training_name}{scene_fragment}"
        ],
        "detail_sentences": [
          "动物的姿态被描绘得略显笨拙，使训练过程更真实。",
          "{trainer_pronoun}的动作简洁而明确，像是已重复过许多次。",
          "背景里可以看到零散的训练器具与足迹。",
          "在画面边缘，动物的姿态被描绘得略显笨拙，使训练过程更真实。",
          "在画面边缘，{trainer_pronoun}的动作简洁而明确，像是已重复过许多次。",
          "在画面边缘，背景里可以看到零散的训练器具与足迹。",
          "在背景中，动物的姿态被描绘得略显笨拙，使训练过程更真实。",
          "在背景中，{trainer_pronoun}的动作简洁而明确，像是已重复过许多次。"
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
          "在训练场边",
          "在尘土被踩得发白的空地上",
          "在围栏旁",
          "在聚落外缘",
          "在主体后方的空地上",
          "在远处地形起伏的尽头",
          "在画面左侧延展出去的位置",
          "在画面右侧留白之间"
        ]
      },
      "marriage": {
        "event_nouns": [
          "{spouse_a_display}与{spouse_b_display}结为伴侣",
          "{spouse_a_display}和{spouse_b_display}举行婚礼",
          "{spouse_a_display}与{spouse_b_display}许下誓言",
          "{spouse_a_display}与{spouse_b_display}结为伴侣的情景",
          "{spouse_a_display}和{spouse_b_display}举行婚礼的情景",
          "{spouse_a_display}与{spouse_b_display}许下誓言的情景",
          "{spouse_a_display}与{spouse_b_display}结为伴侣的场面",
          "{spouse_a_display}和{spouse_b_display}举行婚礼的场面"
        ],
        "main_images": [
          "{spouse_a_display}与{spouse_b_display}正彼此执手{scene_fragment}",
          "{spouse_a_display}向{spouse_b_display}说出誓言{scene_fragment}",
          "{spouse_a_display}和{spouse_b_display}并肩站立，像是刚越过一道门槛{scene_fragment}"
        ],
        "detail_sentences": [
          "背景里的观礼者被处理成含混的形体，使视线自然回到新人身上。",
          "两人的姿态被刻得极其稳定，带着仪式性的庄严感。",
          "画面中的光线朝中央收拢，使结合显得近乎命定。",
          "在画面边缘，背景里的观礼者被处理成含混的形体，使视线自然回到新人身上。",
          "在画面边缘，两人的姿态被刻得极其稳定，带着仪式性的庄严感。",
          "在画面边缘，画面中的光线朝中央收拢，使结合显得近乎命定。",
          "在背景中，背景里的观礼者被处理成含混的形体，使视线自然回到新人身上。",
          "在背景中，两人的姿态被刻得极其稳定，带着仪式性的庄严感。"
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
          "在简朴却庄重的礼仪现场",
          "在众人围成的半圆中央",
          "在烛火与鲜花之间",
          "在聚落外缘",
          "在主体后方的空地上",
          "在远处地形起伏的尽头",
          "在画面左侧延展出去的位置",
          "在画面右侧留白之间"
        ]
      },
      "wound": {
        "event_nouns": [
          "{attacker_display}{wound_verb}{victim_display}",
          "{victim_display}被{attacker_display}{wound_verb}",
          "{attacker_display}在战斗中重创{victim_display}",
          "{attacker_display}{wound_verb}{victim_display}的情景",
          "{victim_display}被{attacker_display}{wound_verb}的情景",
          "{attacker_display}在战斗中重创{victim_display}的情景",
          "{attacker_display}{wound_verb}{victim_display}的场面",
          "{victim_display}被{attacker_display}{wound_verb}的场面"
        ],
        "main_images": [
          "{attacker_display}正以{weapon_phrase}{wound_verb}{victim_display}{scene_fragment}",
          "{victim_display}在{attacker_display}的攻击下受创{scene_fragment}",
          "{attacker_display}与{victim_display}在混乱中交锋，伤势已然显现{scene_fragment}"
        ],
        "detail_sentences": [
          "动作被夸张得几近冻结，使冲击的一瞬被钉在画面中央。",
          "{victim_pronoun}的姿态向后倾斜，显出受击时的失衡。",
          "背景被压缩成杂乱阴影，以强调战斗本身的暴烈。",
          "在画面边缘，动作被夸张得几近冻结，使冲击的一瞬被钉在画面中央。",
          "在画面边缘，{victim_pronoun}的姿态向后倾斜，显出受击时的失衡。",
          "在画面边缘，背景被压缩成杂乱阴影，以强调战斗本身的暴烈。",
          "在背景中，动作被夸张得几近冻结，使冲击的一瞬被钉在画面中央。",
          "在背景中，{victim_pronoun}的姿态向后倾斜，显出受击时的失衡。"
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
          "在尘土飞扬的战场边缘",
          "在警报尚未停息的时候",
          "在碎石与血迹之间",
          "在聚落外缘",
          "在主体后方的空地上",
          "在远处地形起伏的尽头",
          "在画面左侧延展出去的位置",
          "在画面右侧留白之间"
        ]
      },
      "kill": {
        "event_nouns": [
          "{killer_display}击杀{victim_display}",
          "{victim_display}死于{killer_display}之手",
          "{killer_display}结束{victim_display}的生命",
          "{killer_display}击杀{victim_display}的情景",
          "{victim_display}死于{killer_display}之手的情景",
          "{killer_display}结束{victim_display}的生命的情景",
          "{killer_display}击杀{victim_display}的场面",
          "{victim_display}死于{killer_display}之手的场面"
        ],
        "main_images": [
          "{killer_display}正以{weapon_phrase}击杀{victim_display}{scene_fragment}",
          "{victim_display}倒在{killer_display}面前{scene_fragment}",
          "{killer_display}在战斗余音未散时站在{victim_display}身旁{scene_fragment}"
        ],
        "detail_sentences": [
          "画面中的动作被处理得极其沉重，仿佛空气本身都凝住了。",
          "{killer_pronoun}的身影被刻得更大，以强调生死一刻的主导地位。",
          "背景退成模糊暗面，使死亡本身成为无法回避的中心。",
          "在画面边缘，画面中的动作被处理得极其沉重，仿佛空气本身都凝住了。",
          "在画面边缘，{killer_pronoun}的身影被刻得更大，以强调生死一刻的主导地位。",
          "在画面边缘，背景退成模糊暗面，使死亡本身成为无法回避的中心。",
          "在背景中，画面中的动作被处理得极其沉重，仿佛空气本身都凝住了。",
          "在背景中，{killer_pronoun}的身影被刻得更大，以强调生死一刻的主导地位。"
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
          "在战斗刚刚结束的时刻",
          "在尘土与回声尚未散去之际",
          "在倒塌掩体旁",
          "在聚落外缘",
          "在主体后方的空地上",
          "在远处地形起伏的尽头",
          "在画面左侧延展出去的位置",
          "在画面右侧留白之间"
        ]
      },
      "meditate": {
        "event_nouns": [
          "{pawn_display}冥想",
          "{pawn_display}在寂静中沉思",
          "{pawn_display}让心神沉入静默",
          "{pawn_display}冥想的情景",
          "{pawn_display}在寂静中沉思的情景",
          "{pawn_display}让心神沉入静默的情景",
          "{pawn_display}冥想的场面",
          "{pawn_display}在寂静中沉思的场面"
        ],
        "main_images": [
          "{pawn_display}正闭目冥想{scene_fragment}",
          "{pawn_display}静坐不动，像是在倾听某种更远的声音{scene_fragment}",
          "{pawn_display}在沉默中收束心神{scene_fragment}"
        ],
        "detail_sentences": [
          "人物周围几乎没有多余动作，只有呼吸与停顿被轻轻刻出。",
          "{pawn_pronoun}的姿态安定而克制。",
          "背景被压低，使寂静本身成了图像的一部分。",
          "在画面边缘，人物周围几乎没有多余动作，只有呼吸与停顿被轻轻刻出。",
          "在画面边缘，{pawn_pronoun}的姿态安定而克制。",
          "在画面边缘，背景被压低，使寂静本身成了图像的一部分。",
          "在背景中，人物周围几乎没有多余动作，只有呼吸与停顿被轻轻刻出。",
          "在背景中，{pawn_pronoun}的姿态安定而克制。"
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
          "在树影旁",
          "在静默的房间里",
          "在清晨尚未完全醒来的时候",
          "在聚落外缘",
          "在主体后方的空地上",
          "在远处地形起伏的尽头",
          "在画面左侧延展出去的位置",
          "在画面右侧留白之间"
        ]
      },
      "pray": {
        "event_nouns": [
          "{pawn_display}祈祷",
          "{pawn_display}向更高之物低声祈求",
          "{pawn_display}在静默中表达敬畏",
          "{pawn_display}祈祷的情景",
          "{pawn_display}向更高之物低声祈求的情景",
          "{pawn_display}在静默中表达敬畏的情景",
          "{pawn_display}祈祷的场面",
          "{pawn_display}向更高之物低声祈求的场面"
        ],
        "main_images": [
          "{pawn_display}正低头祈祷{scene_fragment}",
          "{pawn_display}双手合拢，神情专注{scene_fragment}",
          "{pawn_display}仰望高处，像是在等候回应{scene_fragment}"
        ],
        "detail_sentences": [
          "人物周围的空间被处理得很空，仿佛要为祈祷留下回声。",
          "{pawn_pronoun}的姿态显得谦卑而专一。",
          "背景只保留了极少装饰，使祈求本身更清楚。",
          "在画面边缘，人物周围的空间被处理得很空，仿佛要为祈祷留下回声。",
          "在画面边缘，{pawn_pronoun}的姿态显得谦卑而专一。",
          "在画面边缘，背景只保留了极少装饰，使祈求本身更清楚。",
          "在背景中，人物周围的空间被处理得很空，仿佛要为祈祷留下回声。",
          "在背景中，{pawn_pronoun}的姿态显得谦卑而专一。"
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
          "在微光下",
          "在空旷的礼仪厅里",
          "在夜色尚深的时候",
          "在聚落外缘",
          "在主体后方的空地上",
          "在远处地形起伏的尽头",
          "在画面左侧延展出去的位置",
          "在画面右侧留白之间"
        ]
      },
      "burial": {
        "event_nouns": [
          "{mourner_display}安葬{deceased_display}",
          "{mourner_display}为{deceased_display}送行",
          "{mourner_display}向{deceased_display}告别",
          "{mourner_display}安葬{deceased_display}的情景",
          "{mourner_display}为{deceased_display}送行的情景",
          "{mourner_display}向{deceased_display}告别的情景",
          "{mourner_display}安葬{deceased_display}的场面",
          "{mourner_display}为{deceased_display}送行的场面"
        ],
        "main_images": [
          "{mourner_display}正站在{deceased_display}的墓前{scene_fragment}",
          "{mourner_display}俯身安放{deceased_display}{scene_fragment}",
          "{mourner_display}在墓前停留，久久不去{scene_fragment}"
        ],
        "detail_sentences": [
          "画面里没有多余动作，只有停顿和重量。",
          "{mourner_pronoun}的神情被刻得极其克制。",
          "背景中的线条向下压低，使送别显得更沉。",
          "在画面边缘，画面里没有多余动作，只有停顿和重量。",
          "在画面边缘，{mourner_pronoun}的神情被刻得极其克制。",
          "在画面边缘，背景中的线条向下压低，使送别显得更沉。",
          "在背景中，画面里没有多余动作，只有停顿和重量。",
          "在背景中，{mourner_pronoun}的神情被刻得极其克制。"
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
          "在风声很轻的墓地里",
          "在阴云压低的傍晚",
          "在雪意未尽的时候",
          "在聚落外缘",
          "在主体后方的空地上",
          "在远处地形起伏的尽头",
          "在画面左侧延展出去的位置",
          "在画面右侧留白之间"
        ]
      },
      "party": {
        "event_nouns": [
          "{attender_display}参加{organizer_display}举办的聚会",
          "{organizer_display}与{attender_display}在聚会中相谈",
          "{attender_display}在{organizer_display}的聚会上放松下来",
          "{attender_display}参加{organizer_display}举办的聚会的情景",
          "{organizer_display}与{attender_display}在聚会中相谈的情景",
          "{attender_display}在{organizer_display}的聚会上放松下来的情景",
          "{attender_display}参加{organizer_display}举办的聚会的场面",
          "{organizer_display}与{attender_display}在聚会中相谈的场面"
        ],
        "main_images": [
          "{attender_display}正与{organizer_display}交谈{scene_fragment}",
          "{organizer_display}欢迎{attender_display}加入人群{scene_fragment}",
          "{attender_display}在聚会中露出少见的轻松神情{scene_fragment}"
        ],
        "detail_sentences": [
          "背景里有含混的人影与杯盏，使画面带着聚会的热度。",
          "人物的动作显得松弛，不再像工作时那样收紧。",
          "边缘细节被简化，以突出短暂的欢快。",
          "在画面边缘，背景里有含混的人影与杯盏，使画面带着聚会的热度。",
          "在画面边缘，人物的动作显得松弛，不再像工作时那样收紧。",
          "在画面边缘，边缘细节被简化，以突出短暂的欢快。",
          "在背景中，背景里有含混的人影与杯盏，使画面带着聚会的热度。",
          "在背景中，人物的动作显得松弛，不再像工作时那样收紧。"
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
          "在灯火温暖的大厅里",
          "在笑声稍稍扬起的时候",
          "在杯盘尚未收起之际",
          "在聚落外缘",
          "在主体后方的空地上",
          "在远处地形起伏的尽头",
          "在画面左侧延展出去的位置",
          "在画面右侧留白之间"
        ]
      },
      "skill_mastery": {
        "event_nouns": [
          "{pawn_display}在{skill_name}上达到精熟",
          "{pawn_display}成为{skill_name}方面的大师",
          "{pawn_display}在{skill_name}上越过关键门槛",
          "{pawn_display}在{skill_name}上达到精熟的情景",
          "{pawn_display}成为{skill_name}方面的大师的情景",
          "{pawn_display}在{skill_name}上越过关键门槛的情景",
          "{pawn_display}在{skill_name}上达到精熟的场面",
          "{pawn_display}成为{skill_name}方面的大师的场面"
        ],
        "main_images": [
          "{pawn_display}正熟练地施展{skill_name}技艺{scene_fragment}",
          "{pawn_display}以几乎不需思考的动作完成{skill_name}相关工作{scene_fragment}",
          "{pawn_display}在{skill_name}上显出压倒性的熟练{scene_fragment}"
        ],
        "detail_sentences": [
          "人物的动作被刻得干净利落，几乎没有迟疑。",
          "背景中的器物只是陪衬，真正重要的是那份熟练本身。",
          "整幅图像像是在强调重复如何最终转化为本能。",
          "在画面边缘，人物的动作被刻得干净利落，几乎没有迟疑。",
          "在画面边缘，背景中的器物只是陪衬，真正重要的是那份熟练本身。",
          "在画面边缘，整幅图像像是在强调重复如何最终转化为本能。",
          "在背景中，人物的动作被刻得干净利落，几乎没有迟疑。",
          "在背景中，背景中的器物只是陪衬，真正重要的是那份熟练本身。"
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
          "在工作尚未停歇的时候",
          "在众人目光落向主体的一刻",
          "在熟悉得近乎机械的动作之中",
          "在聚落外缘",
          "在主体后方的空地上",
          "在远处地形起伏的尽头",
          "在画面左侧延展出去的位置",
          "在画面右侧留白之间"
        ]
      },
      "insult": {
        "event_nouns": [
          "{initiator_display}侮辱{responder_display}",
          "{initiator_display}与{responder_display}发生冲突",
          "{initiator_display}向{responder_display}发出挑衅",
          "{initiator_display}侮辱{responder_display}的情景",
          "{initiator_display}与{responder_display}发生冲突的情景",
          "{initiator_display}向{responder_display}发出挑衅的情景",
          "{initiator_display}侮辱{responder_display}的场面",
          "{initiator_display}与{responder_display}发生冲突的场面"
        ],
        "main_images": [
          "{initiator_display}正指着{responder_display}出言讥讽{scene_fragment}",
          "{initiator_display}与{responder_display}相互逼近，气氛紧绷{scene_fragment}",
          "{responder_display}在{initiator_display}的挑衅下显得愤怒而克制{scene_fragment}"
        ],
        "detail_sentences": [
          "两人之间的距离被压得很近，使冲突感格外明显。",
          "背景里似乎有人转开视线，不愿卷入其中。",
          "人物的表情被刻得锐利而紧绷。",
          "在画面边缘，两人之间的距离被压得很近，使冲突感格外明显。",
          "在画面边缘，背景里似乎有人转开视线，不愿卷入其中。",
          "在画面边缘，人物的表情被刻得锐利而紧绷。",
          "在背景中，两人之间的距离被压得很近，使冲突感格外明显。",
          "在背景中，背景里似乎有人转开视线，不愿卷入其中。"
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
          "在人群稍稍散开的地方",
          "在气氛骤然冷下来的时候",
          "在所有人都听见却无人出声的一刻",
          "在聚落外缘",
          "在主体后方的空地上",
          "在远处地形起伏的尽头",
          "在画面左侧延展出去的位置",
          "在画面右侧留白之间"
        ]
      },
      "escape_pod": {
        "event_nouns": [
          "{pawn_display}乘坐着陆舱降落",
          "{pawn_display}从轨道中坠入地面",
          "{pawn_display}在火焰与碎石间迫降",
          "{pawn_display}乘坐着陆舱降落的情景",
          "{pawn_display}从轨道中坠入地面的情景",
          "{pawn_display}在火焰与碎石间迫降的情景",
          "{pawn_display}乘坐着陆舱降落的场面",
          "{pawn_display}从轨道中坠入地面的场面"
        ],
        "main_images": [
          "{pawn_display}正乘着着陆舱撞向地面{scene_fragment}",
          "{pawn_display}被包裹在轰鸣与火焰之中{scene_fragment}",
          "{pawn_display}随着着陆舱重重落地{scene_fragment}"
        ],
        "detail_sentences": [
          "画面周围散着碎石与尘土，像是撞击刚刚发生。",
          "{pawn_pronoun}的身形被压缩在狭小舱体里，显得格外脆弱。",
          "天空与地面的线条在此处猛烈汇合。",
          "在画面边缘，画面周围散着碎石与尘土，像是撞击刚刚发生。",
          "在画面边缘，{pawn_pronoun}的身形被压缩在狭小舱体里，显得格外脆弱。",
          "在画面边缘，天空与地面的线条在此处猛烈汇合。",
          "在背景中，画面周围散着碎石与尘土，像是撞击刚刚发生。",
          "在背景中，{pawn_pronoun}的身形被压缩在狭小舱体里，显得格外脆弱。"
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
          "在火焰拖曳的尾迹中",
          "在尘浪翻卷的空地上",
          "在所有旁观者都来不及反应的一刻",
          "在聚落外缘",
          "在主体后方的空地上",
          "在远处地形起伏的尽头",
          "在画面左侧延展出去的位置",
          "在画面右侧留白之间"
        ]
      },
      "berserk_break": {
        "event_nouns": [
          "{pawn_display}陷入狂暴",
          "{pawn_display}失去理智并开始攻击",
          "{pawn_display}被狂怒彻底吞没",
          "{pawn_display}陷入狂暴的情景",
          "{pawn_display}失去理智并开始攻击的情景",
          "{pawn_display}被狂怒彻底吞没的情景",
          "{pawn_display}陷入狂暴的场面",
          "{pawn_display}失去理智并开始攻击的场面"
        ],
        "main_images": [
          "{pawn_display}正狂怒地向前扑去{scene_fragment}",
          "{pawn_display}脸上的神情因愤怒而扭曲{scene_fragment}",
          "{pawn_display}在失控中举起武器{scene_fragment}"
        ],
        "detail_sentences": [
          "人物的姿态被刻得向前倾斜，像是再也停不下来。",
          "背景中的一切都被处理成惊慌后退的模糊轮廓。",
          "整幅画面像在强调爆发来得有多突然。",
          "在画面边缘，人物的姿态被刻得向前倾斜，像是再也停不下来。",
          "在画面边缘，背景中的一切都被处理成惊慌后退的模糊轮廓。",
          "在画面边缘，整幅画面像在强调爆发来得有多突然。",
          "在背景中，人物的姿态被刻得向前倾斜，像是再也停不下来。",
          "在背景中，背景中的一切都被处理成惊慌后退的模糊轮廓。"
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
          "在尖叫与混乱之间",
          "在众人仓皇退开的空地上",
          "在压抑终于断裂的那一刻",
          "在聚落外缘",
          "在主体后方的空地上",
          "在远处地形起伏的尽头",
          "在画面左侧延展出去的位置",
          "在画面右侧留白之间"
        ]
      },
      "despair_break": {
        "event_nouns": [
          "{pawn_display}因绝望而崩溃",
          "{pawn_display}被压力彻底压垮",
          "{pawn_display}在绝望中放弃挣扎",
          "{pawn_display}因绝望而崩溃的情景",
          "{pawn_display}被压力彻底压垮的情景",
          "{pawn_display}在绝望中放弃挣扎的情景",
          "{pawn_display}因绝望而崩溃的场面",
          "{pawn_display}被压力彻底压垮的场面"
        ],
        "main_images": [
          "{pawn_display}正瘫坐在地上{scene_fragment}",
          "{pawn_display}低垂着头，像是再无力支撑自己{scene_fragment}",
          "{pawn_display}在绝望中停下所有动作{scene_fragment}"
        ],
        "detail_sentences": [
          "人物周围的空间被留得很空，使孤立感更明显。",
          "{pawn_pronoun}的肩背被刻得下坠，像是连呼吸都显得沉重。",
          "背景被压暗，只剩下情绪本身留在画面中央。",
          "在画面边缘，人物周围的空间被留得很空，使孤立感更明显。",
          "在画面边缘，{pawn_pronoun}的肩背被刻得下坠，像是连呼吸都显得沉重。",
          "在画面边缘，背景被压暗，只剩下情绪本身留在画面中央。",
          "在背景中，人物周围的空间被留得很空，使孤立感更明显。",
          "在背景中，{pawn_pronoun}的肩背被刻得下坠，像是连呼吸都显得沉重。"
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
          "在灯火也显得疲惫的夜里",
          "在无人靠近的角落里",
          "在所有支撑都开始松脱的时候",
          "在聚落外缘",
          "在主体后方的空地上",
          "在远处地形起伏的尽头",
          "在画面左侧延展出去的位置",
          "在画面右侧留白之间"
        ]
      },
      "caravan_departure": {
        "event_nouns": [
          "{pawn_display}组建商队启程",
          "{pawn_display}带领众人踏上旅途",
          "{pawn_display}离开聚落前往远方",
          "{pawn_display}组建商队启程的情景",
          "{pawn_display}带领众人踏上旅途的情景",
          "{pawn_display}离开聚落前往远方的情景",
          "{pawn_display}组建商队启程的场面",
          "{pawn_display}带领众人踏上旅途的场面"
        ],
        "main_images": [
          "{pawn_display}正带着行装向远处出发{scene_fragment}",
          "{pawn_display}回望聚落后迈上旅程{scene_fragment}",
          "{pawn_display}站在队伍前方，像是刚做出决定{scene_fragment}"
        ],
        "detail_sentences": [
          "地上散着捆好的物资与绳索，显出出发前的忙乱。",
          "{pawn_pronoun}的姿态被刻得坚定，却并不轻松。",
          "背景中的道路被拉得很长，像是没有尽头。",
          "在画面边缘，地上散着捆好的物资与绳索，显出出发前的忙乱。",
          "在画面边缘，{pawn_pronoun}的姿态被刻得坚定，却并不轻松。",
          "在画面边缘，背景中的道路被拉得很长，像是没有尽头。",
          "在背景中，地上散着捆好的物资与绳索，显出出发前的忙乱。",
          "在背景中，{pawn_pronoun}的姿态被刻得坚定，却并不轻松。"
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
          "在清晨尚冷的时候",
          "在聚落边缘的道路上",
          "在离别尚未完全说出口之前",
          "在聚落外缘",
          "在主体后方的空地上",
          "在远处地形起伏的尽头",
          "在画面左侧延展出去的位置",
          "在画面右侧留白之间"
        ]
      },
      "surgery": {
        "event_nouns": [
          "{surgeon_display}为{patient_display}实施手术",
          "{patient_display}接受{surgeon_display}的手术",
          "{surgeon_display}试图修补{patient_display}的伤病",
          "{surgeon_display}为{patient_display}实施手术的情景",
          "{patient_display}接受{surgeon_display}的手术的情景",
          "{surgeon_display}试图修补{patient_display}的伤病的情景",
          "{surgeon_display}为{patient_display}实施手术的场面",
          "{patient_display}接受{surgeon_display}的手术的场面"
        ],
        "main_images": [
          "{surgeon_display}正俯身为{patient_display}施术{scene_fragment}",
          "{patient_display}躺在台上接受手术{scene_fragment}",
          "{surgeon_display}在紧张中维持着手上的精确动作{scene_fragment}"
        ],
        "detail_sentences": [
          "器械被整齐地摆在一侧，像是任何偏差都会带来代价。",
          "{surgeon_pronoun}的手势被刻得谨慎而专注。",
          "背景中的灯光略显刺眼，使手术本身更具压迫感。",
          "在画面边缘，器械被整齐地摆在一侧，像是任何偏差都会带来代价。",
          "在画面边缘，{surgeon_pronoun}的手势被刻得谨慎而专注。",
          "在画面边缘，背景中的灯光略显刺眼，使手术本身更具压迫感。",
          "在背景中，器械被整齐地摆在一侧，像是任何偏差都会带来代价。",
          "在背景中，{surgeon_pronoun}的手势被刻得谨慎而专注。"
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
          "在无菌灯光之下",
          "在屏息静气的手术台旁",
          "在每一秒都显得漫长的时候",
          "在聚落外缘",
          "在主体后方的空地上",
          "在远处地形起伏的尽头",
          "在画面左侧延展出去的位置",
          "在画面右侧留白之间"
        ]
      },
      "birth": {
        "event_nouns": [
          "{mother_display}诞下{child_display}",
          "{mother_display}迎来{child_display}的出生",
          "{child_display}在痛苦与欢欣间降生",
          "{mother_display}诞下{child_display}的情景",
          "{mother_display}迎来{child_display}的出生的情景",
          "{child_display}在痛苦与欢欣间降生的情景",
          "{mother_display}诞下{child_display}的场面",
          "{mother_display}迎来{child_display}的出生的场面"
        ],
        "main_images": [
          "{mother_display}正抱着刚出生的{child_display}{scene_fragment}",
          "{mother_display}在疲惫中望着{child_display}{scene_fragment}",
          "{child_display}被安置在{mother_display}身旁{scene_fragment}"
        ],
        "detail_sentences": [
          "人物周围的线条被处理得更柔和，使新生显得格外脆弱。",
          "{mother_pronoun}的神情混杂着疲惫、惊异与短暂的平静。",
          "背景中的杂音都被压低，只剩下诞生这一刻。",
          "在画面边缘，人物周围的线条被处理得更柔和，使新生显得格外脆弱。",
          "在画面边缘，{mother_pronoun}的神情混杂着疲惫、惊异与短暂的平静。",
          "在画面边缘，背景中的杂音都被压低，只剩下诞生这一刻。",
          "在背景中，人物周围的线条被处理得更柔和，使新生显得格外脆弱。",
          "在背景中，{mother_pronoun}的神情混杂着疲惫、惊异与短暂的平静。"
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
          "在疲惫尚未散去的时候",
          "在众人刻意放轻呼吸的房间里",
          "在痛苦刚刚退潮之后",
          "在聚落外缘",
          "在主体后方的空地上",
          "在远处地形起伏的尽头",
          "在画面左侧延展出去的位置",
          "在画面右侧留白之间"
        ]
      },
      "mine_vein": {
        "event_nouns": [
          "{miner_display}开采{material_name}矿脉",
          "{miner_display}在岩层中发现{material_name}",
          "{miner_display}从岩壁中凿出{material_name}",
          "{miner_display}开采{material_name}矿脉的情景",
          "{miner_display}在岩层中发现{material_name}的情景",
          "{miner_display}从岩壁中凿出{material_name}的情景",
          "{miner_display}开采{material_name}矿脉的场面",
          "{miner_display}在岩层中发现{material_name}的场面"
        ],
        "main_images": [
          "{miner_display}正挥动工具开采{material_name}矿脉{scene_fragment}",
          "{miner_display}站在刚被敲开的{material_name}矿层前{scene_fragment}",
          "{miner_display}从碎石之间拾起{material_name}{scene_fragment}"
        ],
        "detail_sentences": [
          "岩壁裂开的纹路被刻得格外清楚，使发现显得突然。",
          "{miner_pronoun}身上沾着粉尘与石屑，像是已劳作许久。",
          "背景中的矿道逼仄而沉闷，衬出这一刻的珍贵。",
          "在画面边缘，岩壁裂开的纹路被刻得格外清楚，使发现显得突然。",
          "在画面边缘，{miner_pronoun}身上沾着粉尘与石屑，像是已劳作许久。",
          "在画面边缘，背景中的矿道逼仄而沉闷，衬出这一刻的珍贵。",
          "在背景中，岩壁裂开的纹路被刻得格外清楚，使发现显得突然。",
          "在背景中，{miner_pronoun}身上沾着粉尘与石屑，像是已劳作许久。"
        ],
        "style_sentences": [
          "这件作品带着发现资源时特有的惊喜与疲惫。",
          "整体来看，这件作品带着发现资源时特有的惊喜与疲惫。",
          "从构图与气质上看，这件作品带着发现资源时特有的惊喜与疲惫。",
          "它表现出边地生存对物资的迫切依赖。",
          "整体来看，它表现出边地生存对物资的迫切依赖。",
          "从构图与气质上看，它表现出边地生存对物资的迫切依赖。",
          "整体画面粗粝而坚实。",
          "整体来看，整体画面粗粝而坚实。"
        ],
        "scene_phrases": [
          "在沉闷的矿道里",
          "在回声不断的岩壁前",
          "在尘灰尚未落定的时候",
          "在聚落外缘",
          "在主体后方的空地上",
          "在远处地形起伏的尽头",
          "在画面左侧延展出去的位置",
          "在画面右侧留白之间"
        ]
      },
      "game_play": {
        "event_nouns": [
          "{pawn_display}在进行{game_name}",
          "{pawn_display}沉浸于{game_name}",
          "{pawn_display}在{game_name}中短暂忘却烦忧",
          "{pawn_display}在进行{game_name}的情景",
          "{pawn_display}沉浸于{game_name}的情景",
          "{pawn_display}在{game_name}中短暂忘却烦忧的情景",
          "{pawn_display}在进行{game_name}的场面",
          "{pawn_display}沉浸于{game_name}的场面"
        ],
        "main_images": [
          "{pawn_display}正专注地进行{game_name}{scene_fragment}",
          "{pawn_display}在{game_name}桌前露出难得的松弛神情{scene_fragment}",
          "{pawn_display}把全部注意力投向{game_name}{scene_fragment}"
        ],
        "detail_sentences": [
          "桌面与器具被刻得整洁，使注意力集中在参与者的神情上。",
          "{pawn_pronoun}的动作轻快许多，不再像工作时那样紧绷。",
          "背景里隐约可见观望者与灯火，增添了片刻闲适。",
          "在画面边缘，桌面与器具被刻得整洁，使注意力集中在参与者的神情上。",
          "在画面边缘，{pawn_pronoun}的动作轻快许多，不再像工作时那样紧绷。",
          "在画面边缘，背景里隐约可见观望者与灯火，增添了片刻闲适。",
          "在背景中，桌面与器具被刻得整洁，使注意力集中在参与者的神情上。",
          "在背景中，{pawn_pronoun}的动作轻快许多，不再像工作时那样紧绷。"
        ],
        "style_sentences": [
          "这件作品表现出休憩如何短暂地抵消艰难生活的磨损。",
          "整体来看，这件作品表现出休憩如何短暂地抵消艰难生活的磨损。",
          "从构图与气质上看，这件作品表现出休憩如何短暂地抵消艰难生活的磨损。",
          "它让人想到快乐并不宏大，却足以让人稍微喘息。",
          "整体来看，它让人想到快乐并不宏大，却足以让人稍微喘息。",
          "从构图与气质上看，它让人想到快乐并不宏大，却足以让人稍微喘息。",
          "整体气氛轻快，却仍带着边地生活的克制。",
          "整体来看，整体气氛轻快，却仍带着边地生活的克制。"
        ],
        "scene_phrases": [
          "在闲暇刚刚降临的时候",
          "在灯火温暖的休息室里",
          "在众人稍稍放松的夜晚",
          "在聚落外缘",
          "在主体后方的空地上",
          "在远处地形起伏的尽头",
          "在画面左侧延展出去的位置",
          "在画面右侧留白之间"
        ]
      },
      "drunkenness": {
        "event_nouns": [
          "{pawn_display}极度醉酒",
          "{pawn_display}在酒精中失去克制",
          "{pawn_display}因醉意而步履踉跄",
          "{pawn_display}极度醉酒的情景",
          "{pawn_display}在酒精中失去克制的情景",
          "{pawn_display}因醉意而步履踉跄的情景",
          "{pawn_display}极度醉酒的场面",
          "{pawn_display}在酒精中失去克制的场面"
        ],
        "main_images": [
          "{pawn_display}正踉跄着向前走去{scene_fragment}",
          "{pawn_display}仰头灌下酒液{scene_fragment}",
          "{pawn_display}醉意沉沉地站在原地{scene_fragment}"
        ],
        "detail_sentences": [
          "人物的动作被刻得散乱而不稳，像是随时会倒下。",
          "{pawn_pronoun}眼中的神采显得迷离而失焦。",
          "背景里的器物与地面线条都略微倾斜，使醉意更明显。",
          "在画面边缘，人物的动作被刻得散乱而不稳，像是随时会倒下。",
          "在画面边缘，{pawn_pronoun}眼中的神采显得迷离而失焦。",
          "在画面边缘，背景里的器物与地面线条都略微倾斜，使醉意更明显。",
          "在背景中，人物的动作被刻得散乱而不稳，像是随时会倒下。",
          "在背景中，{pawn_pronoun}眼中的神采显得迷离而失焦。"
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
          "在灯光摇晃的房间里",
          "在宴后仍未散去的时候",
          "在众人稍远处旁观的角落里",
          "在聚落外缘",
          "在主体后方的空地上",
          "在远处地形起伏的尽头",
          "在画面左侧延展出去的位置",
          "在画面右侧留白之间"
        ]
      },
      "fire_panic": {
        "event_nouns": [
          "{pawn_display}身上着火",
          "{pawn_display}在火焰中挣扎",
          "{pawn_display}试图扑灭身上的火",
          "{pawn_display}身上着火的情景",
          "{pawn_display}在火焰中挣扎的情景",
          "{pawn_display}试图扑灭身上的火的情景",
          "{pawn_display}身上着火的场面",
          "{pawn_display}在火焰中挣扎的场面"
        ],
        "main_images": [
          "{pawn_display}正拼命拍打身上的火焰{scene_fragment}",
          "{pawn_display}被火舌包围{scene_fragment}",
          "{pawn_display}在惊慌中翻滚以扑灭火焰{scene_fragment}"
        ],
        "detail_sentences": [
          "火焰被刻得向外翻卷，使痛苦显得更剧烈。",
          "{pawn_pronoun}的姿态充满失控与本能。",
          "背景里的形体被热浪扭曲，连空间都像在晃动。",
          "在画面边缘，火焰被刻得向外翻卷，使痛苦显得更剧烈。",
          "在画面边缘，{pawn_pronoun}的姿态充满失控与本能。",
          "在画面边缘，背景里的形体被热浪扭曲，连空间都像在晃动。",
          "在背景中，火焰被刻得向外翻卷，使痛苦显得更剧烈。",
          "在背景中，{pawn_pronoun}的姿态充满失控与本能。"
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
          "在火星飞散之间",
          "在周围人惊惶后退的时候",
          "在热浪逼人的一刻",
          "在聚落外缘",
          "在主体后方的空地上",
          "在远处地形起伏的尽头",
          "在画面左侧延展出去的位置",
          "在画面右侧留白之间"
        ]
      },
      "nude_wander": {
        "event_nouns": [
          "{pawn_display}赤身游荡",
          "{pawn_display}抛下衣物四处走动",
          "{pawn_display}在失序中裸身徘徊",
          "{pawn_display}赤身游荡的情景",
          "{pawn_display}抛下衣物四处走动的情景",
          "{pawn_display}在失序中裸身徘徊的情景",
          "{pawn_display}赤身游荡的场面",
          "{pawn_display}抛下衣物四处走动的场面"
        ],
        "main_images": [
          "{pawn_display}正赤身行走{scene_fragment}",
          "{pawn_display}毫无顾忌地走过众人视线{scene_fragment}",
          "{pawn_display}在裸露中显得既恍惚又固执{scene_fragment}"
        ],
        "detail_sentences": [
          "人物周围的目光被压成细碎阴影，使尴尬与异常更醒目。",
          "{pawn_pronoun}的动作并不慌乱，反而带着令人不安的自然。",
          "背景中的衣物被刻得零散，像是刚刚被扔下。",
          "在画面边缘，人物周围的目光被压成细碎阴影，使尴尬与异常更醒目。",
          "在画面边缘，{pawn_pronoun}的动作并不慌乱，反而带着令人不安的自然。",
          "在画面边缘，背景中的衣物被刻得零散，像是刚刚被扔下。",
          "在背景中，人物周围的目光被压成细碎阴影，使尴尬与异常更醒目。",
          "在背景中，{pawn_pronoun}的动作并不慌乱，反而带着令人不安的自然。"
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
          "在众人欲言又止的时候",
          "在寒意仍未退去的地面上",
          "在聚落最日常的路径之间",
          "在聚落外缘",
          "在主体后方的空地上",
          "在远处地形起伏的尽头",
          "在画面左侧延展出去的位置",
          "在画面右侧留白之间"
        ]
      },
      "grave_visit": {
        "event_nouns": [
          "{visitor_display}探望{deceased_display}的墓地",
          "{visitor_display}在{deceased_display}墓前停留",
          "{visitor_display}向{deceased_display}默默致意",
          "{visitor_display}探望{deceased_display}的墓地的情景",
          "{visitor_display}在{deceased_display}墓前停留的情景",
          "{visitor_display}向{deceased_display}默默致意的情景",
          "{visitor_display}探望{deceased_display}的墓地的场面",
          "{visitor_display}在{deceased_display}墓前停留的场面"
        ],
        "main_images": [
          "{visitor_display}正站在{deceased_display}的墓前{scene_fragment}",
          "{visitor_display}低头看着{deceased_display}的墓碑{scene_fragment}",
          "{visitor_display}在墓前停留，像是仍有话未说完{scene_fragment}"
        ],
        "detail_sentences": [
          "人物周围的空间被处理得很静，只剩墓碑与身影彼此相对。",
          "{visitor_pronoun}的神情被刻得极其克制。",
          "背景中的风景显得更远，使停留本身成为画面的核心。",
          "在画面边缘，人物周围的空间被处理得很静，只剩墓碑与身影彼此相对。",
          "在画面边缘，{visitor_pronoun}的神情被刻得极其克制。",
          "在画面边缘，背景中的风景显得更远，使停留本身成为画面的核心。",
          "在背景中，人物周围的空间被处理得很静，只剩墓碑与身影彼此相对。",
          "在背景中，{visitor_pronoun}的神情被刻得极其克制。"
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
          "在风声轻轻掠过的时候",
          "在墓园的边缘",
          "在日光黯淡下来的傍晚",
          "在聚落外缘",
          "在主体后方的空地上",
          "在远处地形起伏的尽头",
          "在画面左侧延展出去的位置",
          "在画面右侧留白之间"
        ]
      },
      "hunt_animal": {
        "event_nouns": [
          "{hunter_display}狩猎{animal_name}",
          "{hunter_display}追踪{animal_name}",
          "{animal_name}在{hunter_display}的追猎下逃窜",
          "{hunter_display}狩猎{animal_name}的情景",
          "{hunter_display}追踪{animal_name}的情景",
          "{animal_name}在{hunter_display}的追猎下逃窜的情景",
          "{hunter_display}狩猎{animal_name}的场面",
          "{hunter_display}追踪{animal_name}的场面"
        ],
        "main_images": [
          "{hunter_display}正以{weapon_phrase}瞄向{animal_name}{scene_fragment}",
          "{hunter_display}追逐着{animal_name}{scene_fragment}",
          "{animal_name}在{hunter_display}的狩猎下猛然转身{scene_fragment}"
        ],
        "detail_sentences": [
          "动作的方向被刻得极其明确，使猎与逃的关系一目了然。",
          "{hunter_pronoun}的姿态绷得很紧，像是已等待许久。",
          "背景中的地形被压成奔跑的斜线，增添追逐感。",
          "在画面边缘，动作的方向被刻得极其明确，使猎与逃的关系一目了然。",
          "在画面边缘，{hunter_pronoun}的姿态绷得很紧，像是已等待许久。",
          "在画面边缘，背景中的地形被压成奔跑的斜线，增添追逐感。",
          "在背景中，动作的方向被刻得极其明确，使猎与逃的关系一目了然。",
          "在背景中，{hunter_pronoun}的姿态绷得很紧，像是已等待许久。"
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
          "在荒地与风声之间",
          "在脚印尚未消失的时候",
          "在猎物试图逃开的瞬间",
          "在聚落外缘",
          "在主体后方的空地上",
          "在远处地形起伏的尽头",
          "在画面左侧延展出去的位置",
          "在画面右侧留白之间"
        ]
      },
      "capture_prisoner": {
        "event_nouns": [
          "{capturer_display}俘虏{prisoner_display}",
          "{prisoner_display}被{capturer_display}抓获",
          "{capturer_display}将{prisoner_display}押为俘虏",
          "{capturer_display}俘虏{prisoner_display}的情景",
          "{prisoner_display}被{capturer_display}抓获的情景",
          "{capturer_display}将{prisoner_display}押为俘虏的情景",
          "{capturer_display}俘虏{prisoner_display}的场面",
          "{prisoner_display}被{capturer_display}抓获的场面"
        ],
        "main_images": [
          "{capturer_display}正制住{prisoner_display}{scene_fragment}",
          "{prisoner_display}被{capturer_display}逼入无路可退的境地{scene_fragment}",
          "{capturer_display}将{prisoner_display}押在身前{scene_fragment}"
        ],
        "detail_sentences": [
          "两人的姿态被刻得极近，像是胜负已在此刻决定。",
          "{prisoner_display}的动作仍带着最后的抗拒。",
          "背景里的线条被压得很低，使俘获一事显得更加沉重。",
          "在画面边缘，两人的姿态被刻得极近，像是胜负已在此刻决定。",
          "在画面边缘，{prisoner_display}的动作仍带着最后的抗拒。",
          "在画面边缘，背景里的线条被压得很低，使俘获一事显得更加沉重。",
          "在背景中，两人的姿态被刻得极近，像是胜负已在此刻决定。",
          "在背景中，{prisoner_display}的动作仍带着最后的抗拒。"
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
          "在混乱尚未平息的时候",
          "在尘土仍悬在半空中时",
          "在旁观者不敢靠近的一刻",
          "在聚落外缘",
          "在主体后方的空地上",
          "在远处地形起伏的尽头",
          "在画面左侧延展出去的位置",
          "在画面右侧留白之间"
        ]
      },
      "execution": {
        "event_nouns": [
          "{executioner_display}处决{prisoner_display}",
          "{prisoner_display}被{executioner_display}处决",
          "{executioner_display}结束{prisoner_display}的生命以示惩罚",
          "{executioner_display}处决{prisoner_display}的情景",
          "{prisoner_display}被{executioner_display}处决的情景",
          "{executioner_display}结束{prisoner_display}的生命以示惩罚的情景",
          "{executioner_display}处决{prisoner_display}的场面",
          "{prisoner_display}被{executioner_display}处决的场面"
        ],
        "main_images": [
          "{executioner_display}正面对{prisoner_display}举起武器{scene_fragment}",
          "{executioner_display}准备处决{prisoner_display}{scene_fragment}",
          "{prisoner_display}在{executioner_display}面前等待最终时刻{scene_fragment}"
        ],
        "detail_sentences": [
          "人物之间的距离被处理得很近，使决定显得无法回避。",
          "{executioner_display}的姿态稳定而冷硬。",
          "背景中的人群只剩模糊轮廓，仿佛不愿直视这一幕。",
          "在画面边缘，人物之间的距离被处理得很近，使决定显得无法回避。",
          "在画面边缘，{executioner_display}的姿态稳定而冷硬。",
          "在画面边缘，背景中的人群只剩模糊轮廓，仿佛不愿直视这一幕。",
          "在背景中，人物之间的距离被处理得很近，使决定显得无法回避。",
          "在背景中，{executioner_display}的姿态稳定而冷硬。"
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
          "在沉默压过人群的时候",
          "在所有目光都变得僵硬之际",
          "在处决开始前的短暂停顿里",
          "在聚落外缘",
          "在主体后方的空地上",
          "在远处地形起伏的尽头",
          "在画面左侧延展出去的位置",
          "在画面右侧留白之间"
        ]
      },
      "kidnap": {
        "event_nouns": [
          "{kidnapper_display}绑走{victim_display}",
          "{victim_display}被{kidnapper_display}掳走",
          "{kidnapper_display}将{victim_display}拖离聚落",
          "{kidnapper_display}绑走{victim_display}的情景",
          "{victim_display}被{kidnapper_display}掳走的情景",
          "{kidnapper_display}将{victim_display}拖离聚落的情景",
          "{kidnapper_display}绑走{victim_display}的场面",
          "{victim_display}被{kidnapper_display}掳走的场面"
        ],
        "main_images": [
          "{kidnapper_display}正拖拽着{victim_display}离开{scene_fragment}",
          "{victim_display}在{kidnapper_display}手中挣扎{scene_fragment}",
          "{kidnapper_display}带着{victim_display}迅速撤离{scene_fragment}"
        ],
        "detail_sentences": [
          "人物的方向被拉得很长，使离去显得急迫。",
          "{victim_display}的姿态被刻得失衡而狼狈。",
          "背景里的聚落轮廓被处理得遥远，像是转眼就会被抛下。",
          "在画面边缘，人物的方向被拉得很长，使离去显得急迫。",
          "在画面边缘，{victim_display}的姿态被刻得失衡而狼狈。",
          "在画面边缘，背景里的聚落轮廓被处理得遥远，像是转眼就会被抛下。",
          "在背景中，人物的方向被拉得很长，使离去显得急迫。",
          "在背景中，{victim_display}的姿态被刻得失衡而狼狈。"
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
          "在撤退的混乱之中",
          "在呼喊被风吹散的时候",
          "在所有追赶都显得太晚的一刻",
          "在聚落外缘",
          "在主体后方的空地上",
          "在远处地形起伏的尽头",
          "在画面左侧延展出去的位置",
          "在画面右侧留白之间"
        ]
      },
      "cryptosleep_enter": {
        "event_nouns": [
          "{pawn_display}进入休眠仓",
          "{pawn_display}准备沉入漫长休眠",
          "{pawn_display}向休眠仓中的黑暗躺去",
          "{pawn_display}进入休眠仓的情景",
          "{pawn_display}准备沉入漫长休眠的情景",
          "{pawn_display}向休眠仓中的黑暗躺去的情景",
          "{pawn_display}进入休眠仓的场面",
          "{pawn_display}准备沉入漫长休眠的场面"
        ],
        "main_images": [
          "{pawn_display}正躺入休眠仓{scene_fragment}",
          "{pawn_display}把自己封进休眠舱中{scene_fragment}",
          "{pawn_display}在进入休眠前回望外界{scene_fragment}"
        ],
        "detail_sentences": [
          "仓壁与人物的轮廓被刻得很冷，使离别感更明显。",
          "{pawn_pronoun}的神情并不激烈，却带着明显的迟疑。",
          "背景被留得很空，仿佛时间本身正被抽走。",
          "在画面边缘，仓壁与人物的轮廓被刻得很冷，使离别感更明显。",
          "在画面边缘，{pawn_pronoun}的神情并不激烈，却带着明显的迟疑。",
          "在画面边缘，背景被留得很空，仿佛时间本身正被抽走。",
          "在背景中，仓壁与人物的轮廓被刻得很冷，使离别感更明显。",
          "在背景中，{pawn_pronoun}的神情并不激烈，却带着明显的迟疑。"
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
          "在幽蓝灯光之下",
          "在金属舱壁反光之间",
          "在即将封闭的瞬间",
          "在聚落外缘",
          "在主体后方的空地上",
          "在远处地形起伏的尽头",
          "在画面左侧延展出去的位置",
          "在画面右侧留白之间"
        ]
      },
      "cryptosleep_place": {
        "event_nouns": [
          "{carrier_display}将{sleeper_display}送入休眠仓",
          "{carrier_display}护送{sleeper_display}进入休眠",
          "{sleeper_display}在{carrier_display}帮助下沉入休眠",
          "{carrier_display}将{sleeper_display}送入休眠仓的情景",
          "{carrier_display}护送{sleeper_display}进入休眠的情景",
          "{sleeper_display}在{carrier_display}帮助下沉入休眠的情景",
          "{carrier_display}将{sleeper_display}送入休眠仓的场面",
          "{carrier_display}护送{sleeper_display}进入休眠的场面"
        ],
        "main_images": [
          "{carrier_display}正将{sleeper_display}送入休眠仓{scene_fragment}",
          "{carrier_display}扶着{sleeper_display}靠近休眠舱{scene_fragment}",
          "{carrier_display}在舱门前放下{sleeper_display}{scene_fragment}"
        ],
        "detail_sentences": [
          "两人的姿态显得谨慎而迟缓，像是在拖延最后时刻。",
          "{carrier_display}的动作被刻得异常轻柔。",
          "金属与灯光被压成冰冷背景，使人物关系更突出。",
          "在画面边缘，两人的姿态显得谨慎而迟缓，像是在拖延最后时刻。",
          "在画面边缘，{carrier_display}的动作被刻得异常轻柔。",
          "在画面边缘，金属与灯光被压成冰冷背景，使人物关系更突出。",
          "在背景中，两人的姿态显得谨慎而迟缓，像是在拖延最后时刻。",
          "在背景中，{carrier_display}的动作被刻得异常轻柔。"
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
          "在舱门缓缓闭合之前",
          "在机械低鸣声里",
          "在所有动作都被放慢的时候",
          "在聚落外缘",
          "在主体后方的空地上",
          "在远处地形起伏的尽头",
          "在画面左侧延展出去的位置",
          "在画面右侧留白之间"
        ]
      },
      "lover_union": {
        "event_nouns": [
          "{pursuer_display}与{accepter_display}结为恋人",
          "{pursuer_display}赢得{accepter_display}的回应",
          "{pursuer_display}与{accepter_display}在亲密中靠近",
          "{pursuer_display}与{accepter_display}结为恋人的情景",
          "{pursuer_display}赢得{accepter_display}的回应的情景",
          "{pursuer_display}与{accepter_display}在亲密中靠近的情景",
          "{pursuer_display}与{accepter_display}结为恋人的场面",
          "{pursuer_display}赢得{accepter_display}的回应的场面"
        ],
        "main_images": [
          "{pursuer_display}正轻轻拥住{accepter_display}{scene_fragment}",
          "{pursuer_display}与{accepter_display}彼此靠近，像是终于作出决定{scene_fragment}",
          "{pursuer_display}向{accepter_display}低声诉说情意{scene_fragment}"
        ],
        "detail_sentences": [
          "两人的距离被刻得极近，使情感本身成为画面的中心。",
          "背景中的旁观者被模糊处理，只余下两人的相对。",
          "人物神情被柔和地处理，像是冲突在此刻暂时退去。",
          "在画面边缘，两人的距离被刻得极近，使情感本身成为画面的中心。",
          "在画面边缘，背景中的旁观者被模糊处理，只余下两人的相对。",
          "在画面边缘，人物神情被柔和地处理，像是冲突在此刻暂时退去。",
          "在背景中，两人的距离被刻得极近，使情感本身成为画面的中心。",
          "在背景中，背景中的旁观者被模糊处理，只余下两人的相对。"
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
          "在夜色刚刚安静下来的时候",
          "在旁人不再注意的角落里",
          "在一切都显得稍稍柔软的一刻",
          "在聚落外缘",
          "在主体后方的空地上",
          "在远处地形起伏的尽头",
          "在画面左侧延展出去的位置",
          "在画面右侧留白之间"
        ]
      },
      "breakup": {
        "event_nouns": [
          "{dumper_display}与{rejected_display}分手",
          "{dumper_display}拒绝{rejected_display}的挽留",
          "{rejected_display}被{dumper_display}推开",
          "{dumper_display}与{rejected_display}分手的情景",
          "{dumper_display}拒绝{rejected_display}的挽留的情景",
          "{rejected_display}被{dumper_display}推开的情景",
          "{dumper_display}与{rejected_display}分手的场面",
          "{dumper_display}拒绝{rejected_display}的挽留的场面"
        ],
        "main_images": [
          "{dumper_display}正避开{rejected_display}的拥抱{scene_fragment}",
          "{rejected_display}在{dumper_display}面前僵住身形{scene_fragment}",
          "{dumper_display}与{rejected_display}之间留下突兀的距离{scene_fragment}"
        ],
        "detail_sentences": [
          "两人的姿态被拉开，像是连空气都在中间裂开。",
          "背景中的一切都显得尴尬而安静。",
          "人物神情被刻得僵硬，使拒绝显得更加明确。",
          "在画面边缘，两人的姿态被拉开，像是连空气都在中间裂开。",
          "在画面边缘，背景中的一切都显得尴尬而安静。",
          "在画面边缘，人物神情被刻得僵硬，使拒绝显得更加明确。",
          "在背景中，两人的姿态被拉开，像是连空气都在中间裂开。",
          "在背景中，背景中的一切都显得尴尬而安静。"
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
          "在所有话都显得多余的时候",
          "在旁人不愿靠近的角落里",
          "在热度骤然冷却的一刻",
          "在聚落外缘",
          "在主体后方的空地上",
          "在远处地形起伏的尽头",
          "在画面左侧延展出去的位置",
          "在画面右侧留白之间"
        ]
      },
      "animal_bond": {
        "event_nouns": [
          "{human_display}与{animal_name}结缘",
          "{human_display}与{animal_name}建立深厚联结",
          "{human_display}在{animal_name}身上找到回应",
          "{human_display}与{animal_name}结缘的情景",
          "{human_display}与{animal_name}建立深厚联结的情景",
          "{human_display}在{animal_name}身上找到回应的情景",
          "{human_display}与{animal_name}结缘的场面",
          "{human_display}与{animal_name}建立深厚联结的场面"
        ],
        "main_images": [
          "{human_display}正轻抚{animal_name}{scene_fragment}",
          "{human_display}与{animal_name}彼此凝视{scene_fragment}",
          "{animal_name}安静地靠近{human_display}{scene_fragment}"
        ],
        "detail_sentences": [
          "人与动物之间的距离被刻得极近，像是天然的隔阂正在消失。",
          "背景中的环境显得更柔和，几乎不再重要。",
          "动物的姿态平静而信赖，使亲近感更加明显。",
          "在画面边缘，人与动物之间的距离被刻得极近，像是天然的隔阂正在消失。",
          "在画面边缘，背景中的环境显得更柔和，几乎不再重要。",
          "在画面边缘，动物的姿态平静而信赖，使亲近感更加明显。",
          "在背景中，人与动物之间的距离被刻得极近，像是天然的隔阂正在消失。",
          "在背景中，背景中的环境显得更柔和，几乎不再重要。"
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
          "在晨光刚落下来的时候",
          "在静静的围栏边",
          "在风声也显得温柔的一刻",
          "在聚落外缘",
          "在主体后方的空地上",
          "在远处地形起伏的尽头",
          "在画面左侧延展出去的位置",
          "在画面右侧留白之间"
        ]
      },
      "trade_deal": {
        "event_nouns": [
          "{buyer_display}与{seller_display}达成交易",
          "{buyer_display}从{seller_display}手中购得货物",
          "{seller_display}向{buyer_display}出售货物",
          "{buyer_display}与{seller_display}达成交易的情景",
          "{buyer_display}从{seller_display}手中购得货物的情景",
          "{seller_display}向{buyer_display}出售货物的情景",
          "{buyer_display}与{seller_display}达成交易的场面",
          "{buyer_display}从{seller_display}手中购得货物的场面"
        ],
        "main_images": [
          "{buyer_display}正与{seller_display}交换货物{scene_fragment}",
          "{buyer_display}与{seller_display}在谈妥价格后点头{scene_fragment}",
          "{seller_display}把货物递向{buyer_display}{scene_fragment}"
        ],
        "detail_sentences": [
          "双方之间的姿态显得谨慎而克制，像是都不愿过早暴露让步。",
          "背景里的箱包和货堆暗示这并非一笔小交易。",
          "人物神情被刻得专注，使交换本身更具重量。",
          "在画面边缘，双方之间的姿态显得谨慎而克制，像是都不愿过早暴露让步。",
          "在画面边缘，背景里的箱包和货堆暗示这并非一笔小交易。",
          "在画面边缘，人物神情被刻得专注，使交换本身更具重量。",
          "在背景中，双方之间的姿态显得谨慎而克制，像是都不愿过早暴露让步。",
          "在背景中，背景里的箱包和货堆暗示这并非一笔小交易。"
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
          "在集会刚刚开始的时候",
          "在货箱与包裹之间",
          "在双方都不肯先退让的时刻",
          "在聚落外缘",
          "在主体后方的空地上",
          "在远处地形起伏的尽头",
          "在画面左侧延展出去的位置",
          "在画面右侧留白之间"
        ]
      },
      "strip_target": {
        "event_nouns": [
          "{taker_display}剥取{stripped_display}的装备",
          "{taker_display}从{stripped_display}身上取走衣物",
          "{stripped_display}被{taker_display}解除装备",
          "{taker_display}剥取{stripped_display}的装备的情景",
          "{taker_display}从{stripped_display}身上取走衣物的情景",
          "{stripped_display}被{taker_display}解除装备的情景",
          "{taker_display}剥取{stripped_display}的装备的场面",
          "{taker_display}从{stripped_display}身上取走衣物的场面"
        ],
        "main_images": [
          "{taker_display}正从{stripped_display}身上取下装备{scene_fragment}",
          "{stripped_display}在{taker_display}面前显得狼狈而被动{scene_fragment}",
          "{taker_display}抱着取下来的衣物站在一旁{scene_fragment}"
        ],
        "detail_sentences": [
          "人物之间的高低姿态让支配与被支配的关系显得异常清楚。",
          "散落在地面的衣物使这一刻显得格外难堪。",
          "背景被处理得极简，以突出动作本身的粗暴性质。",
          "在画面边缘，人物之间的高低姿态让支配与被支配的关系显得异常清楚。",
          "在画面边缘，散落在地面的衣物使这一刻显得格外难堪。",
          "在画面边缘，背景被处理得极简，以突出动作本身的粗暴性质。",
          "在背景中，人物之间的高低姿态让支配与被支配的关系显得异常清楚。",
          "在背景中，散落在地面的衣物使这一刻显得格外难堪。"
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
          "在众人退开的空地上",
          "在无人在意解释的时候",
          "在耻辱已成事实的瞬间",
          "在聚落外缘",
          "在主体后方的空地上",
          "在远处地形起伏的尽头",
          "在画面左侧延展出去的位置",
          "在画面右侧留白之间"
        ]
      },
      "snowman_build": {
        "event_nouns": [
          "{pawn_display}堆起雪人",
          "{pawn_display}在雪地里玩耍",
          "{pawn_display}把寒冷短暂变成了娱乐",
          "{pawn_display}堆起雪人的情景",
          "{pawn_display}在雪地里玩耍的情景",
          "{pawn_display}把寒冷短暂变成了娱乐的情景",
          "{pawn_display}堆起雪人的场面",
          "{pawn_display}在雪地里玩耍的场面"
        ],
        "main_images": [
          "{pawn_display}正把雪球推成圆滚滚的形状{scene_fragment}",
          "{pawn_display}在雪地里堆起雪人{scene_fragment}",
          "{pawn_display}弯身为雪人点上最后一笔装饰{scene_fragment}"
        ],
        "detail_sentences": [
          "人物的动作显得轻快，使冬日少见地带上玩闹意味。",
          "背景中可见被踩乱的雪面与零散痕迹。",
          "冷意被刻得并不严酷，反而像是被笑声稍稍冲淡。",
          "在画面边缘，人物的动作显得轻快，使冬日少见地带上玩闹意味。",
          "在画面边缘，背景中可见被踩乱的雪面与零散痕迹。",
          "在画面边缘，冷意被刻得并不严酷，反而像是被笑声稍稍冲淡。",
          "在背景中，人物的动作显得轻快，使冬日少见地带上玩闹意味。",
          "在背景中，背景中可见被踩乱的雪面与零散痕迹。"
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
          "在新雪尚未踩实的时候",
          "在寒气刺人的空地上",
          "在冬日难得的闲暇里",
          "在聚落外缘",
          "在主体后方的空地上",
          "在远处地形起伏的尽头",
          "在画面左侧延展出去的位置",
          "在画面右侧留白之间"
        ]
      },
      "meteorite_impact": {
        "event_nouns": [
          "陨石坠落在{pawn_display}所见之地",
          "{pawn_display}目睹陨石撞向地面",
          "{pawn_display}看见天火般的岩石坠下",
          "陨石坠落在{pawn_display}所见之地的情景",
          "{pawn_display}目睹陨石撞向地面的情景",
          "{pawn_display}看见天火般的岩石坠下的情景",
          "陨石坠落在{pawn_display}所见之地的场面",
          "{pawn_display}目睹陨石撞向地面的场面"
        ],
        "main_images": [
          "{pawn_display}正望向坠落的陨石{scene_fragment}",
          "一块燃烧的巨石在{pawn_display}视野中撞向地面{scene_fragment}",
          "{pawn_display}被突如其来的陨石迫得停下脚步{scene_fragment}"
        ],
        "detail_sentences": [
          "火焰与碎石被刻成四散的弧线，使撞击感更强。",
          "人物显得渺小，像是被天地间的意外压住了气息。",
          "背景里的地面在此处被骤然撕开。",
          "在画面边缘，火焰与碎石被刻成四散的弧线，使撞击感更强。",
          "在画面边缘，人物显得渺小，像是被天地间的意外压住了气息。",
          "在画面边缘，背景里的地面在此处被骤然撕开。",
          "在背景中，火焰与碎石被刻成四散的弧线，使撞击感更强。",
          "在背景中，人物显得渺小，像是被天地间的意外压住了气息。"
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
        ]
      },
      "toxic_fallout": {
        "event_nouns": [
          "毒雾笼罩{pawn_display}所在之地",
          "{pawn_display}经历毒雾降临",
          "{pawn_display}目睹空气本身变得有害",
          "毒雾笼罩{pawn_display}所在之地的情景",
          "{pawn_display}经历毒雾降临的情景",
          "{pawn_display}目睹空气本身变得有害的情景",
          "毒雾笼罩{pawn_display}所在之地的场面",
          "{pawn_display}经历毒雾降临的场面"
        ],
        "main_images": [
          "{pawn_display}正站在被毒雾侵染的空气中{scene_fragment}",
          "{pawn_display}望着四周缓慢沉降的毒尘{scene_fragment}",
          "{pawn_display}在异常沉闷的天色下停住脚步{scene_fragment}"
        ],
        "detail_sentences": [
          "背景中的植物与地面都显出衰败的痕迹。",
          "空气被刻成灰绿的薄幕，使危险显得无处不在。",
          "人物的姿态带着一种面对慢性灾祸时的迟疑。",
          "在画面边缘，背景中的植物与地面都显出衰败的痕迹。",
          "在画面边缘，空气被刻成灰绿的薄幕，使危险显得无处不在。",
          "在画面边缘，人物的姿态带着一种面对慢性灾祸时的迟疑。",
          "在背景中，背景中的植物与地面都显出衰败的痕迹。",
          "在背景中，空气被刻成灰绿的薄幕，使危险显得无处不在。"
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
          "在天空失去清澈之后",
          "在万物都显得灰暗的时候",
          "在空气本身都像有重量的一日",
          "在聚落外缘",
          "在主体后方的空地上",
          "在远处地形起伏的尽头",
          "在画面左侧延展出去的位置",
          "在画面右侧留白之间"
        ]
      },
      "aurora": {
        "event_nouns": [
          "{pawn_display}见证极光降临",
          "{pawn_display}望见天空中铺开的极光",
          "{pawn_display}在极光下停步仰望",
          "{pawn_display}见证极光降临的情景",
          "{pawn_display}望见天空中铺开的极光的情景",
          "{pawn_display}在极光下停步仰望的情景",
          "{pawn_display}见证极光降临的场面",
          "{pawn_display}望见天空中铺开的极光的场面"
        ],
        "main_images": [
          "{pawn_display}正仰望天际的极光{scene_fragment}",
          "{pawn_display}站在极光照亮的地面上{scene_fragment}",
          "流动的光幕在{pawn_display}头顶缓缓展开{scene_fragment}"
        ],
        "detail_sentences": [
          "色光被拉成长弧，使天空像在轻轻呼吸。",
          "人物被刻得很小，从而衬出宇宙景象的辽阔。",
          "背景中的一切都被极光染上异样而柔和的颜色。",
          "在画面边缘，色光被拉成长弧，使天空像在轻轻呼吸。",
          "在画面边缘，人物被刻得很小，从而衬出宇宙景象的辽阔。",
          "在画面边缘，背景中的一切都被极光染上异样而柔和的颜色。",
          "在背景中，色光被拉成长弧，使天空像在轻轻呼吸。",
          "在背景中，人物被刻得很小，从而衬出宇宙景象的辽阔。"
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
          "在夜幕完全降下之后",
          "在寒冷也显得安静的一刻",
          "在所有人都抬头的时候",
          "在聚落外缘",
          "在主体后方的空地上",
          "在远处地形起伏的尽头",
          "在画面左侧延展出去的位置",
          "在画面右侧留白之间"
        ]
      },
      "flashstorm": {
        "event_nouns": [
          "闪电风暴逼近{pawn_display}所在之地",
          "{pawn_display}经历闪电风暴",
          "{pawn_display}目睹雷火席卷地表",
          "闪电风暴逼近{pawn_display}所在之地的情景",
          "{pawn_display}经历闪电风暴的情景",
          "{pawn_display}目睹雷火席卷地表的情景",
          "闪电风暴逼近{pawn_display}所在之地的场面",
          "{pawn_display}经历闪电风暴的场面"
        ],
        "main_images": [
          "{pawn_display}正望向雷火交织的风暴{scene_fragment}",
          "闪电在{pawn_display}附近接连劈落{scene_fragment}",
          "{pawn_display}被迫停在风暴前的空地上{scene_fragment}"
        ],
        "detail_sentences": [
          "画面中的雷光被刻得尖锐，使一切轮廓都显得发白。",
          "风暴边缘的火焰与烟尘交织在一起。",
          "人物姿态被压得很低，像是在本能地提防下一道雷击。",
          "在画面边缘，画面中的雷光被刻得尖锐，使一切轮廓都显得发白。",
          "在画面边缘，风暴边缘的火焰与烟尘交织在一起。",
          "在画面边缘，人物姿态被压得很低，像是在本能地提防下一道雷击。",
          "在背景中，画面中的雷光被刻得尖锐，使一切轮廓都显得发白。",
          "在背景中，风暴边缘的火焰与烟尘交织在一起。"
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
          "在雷声压过一切的时候",
          "在天色骤然变得发白之际",
          "在风暴扑向地表之前",
          "在聚落外缘",
          "在主体后方的空地上",
          "在远处地形起伏的尽头",
          "在画面左侧延展出去的位置",
          "在画面右侧留白之间"
        ]
      },
      "insect_infestation": {
        "event_nouns": [
          "虫群自地下爆发并威胁{pawn_display}",
          "{pawn_display}经历虫群爆发",
          "{pawn_display}目睹巨虫自地底涌出",
          "虫群自地下爆发并威胁{pawn_display}的情景",
          "{pawn_display}经历虫群爆发的情景",
          "{pawn_display}目睹巨虫自地底涌出的情景",
          "虫群自地下爆发并威胁{pawn_display}的场面",
          "{pawn_display}经历虫群爆发的场面"
        ],
        "main_images": [
          "{pawn_display}正望向自地下涌出的虫群{scene_fragment}",
          "巨虫在{pawn_display}视野中成群逼近{scene_fragment}",
          "{pawn_display}被虫群爆发惊得停下脚步{scene_fragment}"
        ],
        "detail_sentences": [
          "地面裂开的纹路与虫肢的方向共同指向画面中央。",
          "背景被压得昏暗，使虫群的轮廓更显密集。",
          "人物显得格外渺小，像是即将被数量本身压倒。",
          "在画面边缘，地面裂开的纹路与虫肢的方向共同指向画面中央。",
          "在画面边缘，背景被压得昏暗，使虫群的轮廓更显密集。",
          "在画面边缘，人物显得格外渺小，像是即将被数量本身压倒。",
          "在背景中，地面裂开的纹路与虫肢的方向共同指向画面中央。",
          "在背景中，背景被压得昏暗，使虫群的轮廓更显密集。"
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
          "在地面突然裂开的瞬间",
          "在黑暗与沙土一同翻卷的时候",
          "在虫鸣压过人声之际",
          "在聚落外缘",
          "在主体后方的空地上",
          "在远处地形起伏的尽头",
          "在画面左侧延展出去的位置",
          "在画面右侧留白之间"
        ]
      },
      "manhunter_pack": {
        "event_nouns": [
          "狂暴兽群逼近{pawn_display}所在之地",
          "{pawn_display}目睹狂暴兽群来袭",
          "{pawn_display}在狂暴兽群前被迫后退",
          "狂暴兽群逼近{pawn_display}所在之地的情景",
          "{pawn_display}目睹狂暴兽群来袭的情景",
          "{pawn_display}在狂暴兽群前被迫后退的情景",
          "狂暴兽群逼近{pawn_display}所在之地的场面",
          "{pawn_display}目睹狂暴兽群来袭的场面"
        ],
        "main_images": [
          "{pawn_display}正望向成群扑来的狂暴野兽{scene_fragment}",
          "狂暴兽群在{pawn_display}眼前形成一片汹涌阴影{scene_fragment}",
          "{pawn_display}在兽群来袭前停住脚步{scene_fragment}"
        ],
        "detail_sentences": [
          "成群动物的轮廓被压得很低，使数量感更加明显。",
          "人物姿态紧绷，像是本能地判断着退路。",
          "背景中的地形只剩仓促线条，使奔袭显得更快。",
          "在画面边缘，成群动物的轮廓被压得很低，使数量感更加明显。",
          "在画面边缘，人物姿态紧绷，像是本能地判断着退路。",
          "在画面边缘，背景中的地形只剩仓促线条，使奔袭显得更快。",
          "在背景中，成群动物的轮廓被压得很低，使数量感更加明显。",
          "在背景中，人物姿态紧绷，像是本能地判断着退路。"
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
          "在大地被踏得震动的时候",
          "在兽群嘶吼冲来的前线",
          "在退路显得越来越少的一刻",
          "在聚落外缘",
          "在主体后方的空地上",
          "在远处地形起伏的尽头",
          "在画面左侧延展出去的位置",
          "在画面右侧留白之间"
        ]
      },
      "heatstroke": {
        "event_nouns": [
          "{pawn_display}中暑倒下",
          "{pawn_display}被酷热逼入危险边缘",
          "{pawn_display}在灼热中濒临崩溃",
          "{pawn_display}中暑倒下的情景",
          "{pawn_display}被酷热逼入危险边缘的情景",
          "{pawn_display}在灼热中濒临崩溃的情景",
          "{pawn_display}中暑倒下的场面",
          "{pawn_display}被酷热逼入危险边缘的场面"
        ],
        "main_images": [
          "{pawn_display}正踉跄着寻找阴影{scene_fragment}",
          "{pawn_display}在烈日下显得摇摇欲坠{scene_fragment}",
          "{pawn_display}被酷热逼得动作迟缓{scene_fragment}"
        ],
        "detail_sentences": [
          "人物周围的空气像在颤动，使炎热几乎可见。",
          "{pawn_pronoun}的姿态显得虚弱而失衡。",
          "背景中的土地被刻得干裂而刺眼。",
          "在画面边缘，人物周围的空气像在颤动，使炎热几乎可见。",
          "在画面边缘，{pawn_pronoun}的姿态显得虚弱而失衡。",
          "在画面边缘，背景中的土地被刻得干裂而刺眼。",
          "在背景中，人物周围的空气像在颤动，使炎热几乎可见。",
          "在背景中，{pawn_pronoun}的姿态显得虚弱而失衡。"
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
          "在日光几乎不留余地的时候",
          "在连空气都发烫的午后",
          "在阴影变得珍贵的一刻",
          "在聚落外缘",
          "在主体后方的空地上",
          "在远处地形起伏的尽头",
          "在画面左侧延展出去的位置",
          "在画面右侧留白之间"
        ]
      },
      "hypothermia": {
        "event_nouns": [
          "{pawn_display}陷入低温症",
          "{pawn_display}在寒冷中逐渐迟钝",
          "{pawn_display}被严寒逼向危险",
          "{pawn_display}陷入低温症的情景",
          "{pawn_display}在寒冷中逐渐迟钝的情景",
          "{pawn_display}被严寒逼向危险的情景",
          "{pawn_display}陷入低温症的场面",
          "{pawn_display}在寒冷中逐渐迟钝的场面"
        ],
        "main_images": [
          "{pawn_display}正蜷缩着抵御寒冷{scene_fragment}",
          "{pawn_display}在冰冷空气中艰难前行{scene_fragment}",
          "{pawn_display}被严寒压得动作僵硬{scene_fragment}"
        ],
        "detail_sentences": [
          "人物的轮廓被刻得紧紧缩起，使寒意更明显。",
          "{pawn_pronoun}的姿态带着生理性的不适与迟缓。",
          "背景中的霜雪像是正在一点点逼近主体。",
          "在画面边缘，人物的轮廓被刻得紧紧缩起，使寒意更明显。",
          "在画面边缘，{pawn_pronoun}的姿态带着生理性的不适与迟缓。",
          "在画面边缘，背景中的霜雪像是正在一点点逼近主体。",
          "在背景中，人物的轮廓被刻得紧紧缩起，使寒意更明显。",
          "在背景中，{pawn_pronoun}的姿态带着生理性的不适与迟缓。"
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
          "在寒风刮过空地的时候",
          "在呼吸都像结霜的时刻",
          "在雪意压低万物的一日",
          "在聚落外缘",
          "在主体后方的空地上",
          "在远处地形起伏的尽头",
          "在画面左侧延展出去的位置",
          "在画面右侧留白之间"
        ]
      },
      "exhaustion_collapse": {
        "event_nouns": [
          "{pawn_display}因精力耗尽而倒下",
          "{pawn_display}被劳累彻底压垮",
          "{pawn_display}在疲惫中失去支撑",
          "{pawn_display}因精力耗尽而倒下的情景",
          "{pawn_display}被劳累彻底压垮的情景",
          "{pawn_display}在疲惫中失去支撑的情景",
          "{pawn_display}因精力耗尽而倒下的场面",
          "{pawn_display}被劳累彻底压垮的场面"
        ],
        "main_images": [
          "{pawn_display}正支撑不住地跪倒{scene_fragment}",
          "{pawn_display}因过度疲惫而倒下{scene_fragment}",
          "{pawn_display}在极限之后终于失去力气{scene_fragment}"
        ],
        "detail_sentences": [
          "人物的肢体被刻得沉重而松脱，像是再无力维持姿态。",
          "{pawn_pronoun}的动作停在半途，显得格外无助。",
          "背景中的一切都被压低，以突出倒下这一刻。",
          "在画面边缘，人物的肢体被刻得沉重而松脱，像是再无力维持姿态。",
          "在画面边缘，{pawn_pronoun}的动作停在半途，显得格外无助。",
          "在画面边缘，背景中的一切都被压低，以突出倒下这一刻。",
          "在背景中，人物的肢体被刻得沉重而松脱，像是再无力维持姿态。",
          "在背景中，{pawn_pronoun}的动作停在半途，显得格外无助。"
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
          "在漫长劳动之后",
          "在终于再也撑不住的时候",
          "在所有气力都被榨干的一刻",
          "在聚落外缘",
          "在主体后方的空地上",
          "在远处地形起伏的尽头",
          "在画面左侧延展出去的位置",
          "在画面右侧留白之间"
        ]
      },
      "cannibalism": {
        "event_nouns": [
          "{pawn_display}食用人肉",
          "{pawn_display}做出禁忌之举",
          "{pawn_display}在饥饿中越过了底线",
          "{pawn_display}食用人肉的情景",
          "{pawn_display}做出禁忌之举的情景",
          "{pawn_display}在饥饿中越过了底线的情景",
          "{pawn_display}食用人肉的场面",
          "{pawn_display}做出禁忌之举的场面"
        ],
        "main_images": [
          "{pawn_display}正吞咽禁忌的肉食{scene_fragment}",
          "{pawn_display}在饥饿与道德之间作出了选择{scene_fragment}",
          "{pawn_display}面对手中的食物显得冷漠而麻木{scene_fragment}"
        ],
        "detail_sentences": [
          "画面中的器皿与姿态都被处理得极其克制，使行为本身更令人不安。",
          "{pawn_pronoun}的神情模糊在麻木与决绝之间。",
          "背景被压暗，像是在回避这件事本身。",
          "在画面边缘，画面中的器皿与姿态都被处理得极其克制，使行为本身更令人不安。",
          "在画面边缘，{pawn_pronoun}的神情模糊在麻木与决绝之间。",
          "在画面边缘，背景被压暗，像是在回避这件事本身。",
          "在背景中，画面中的器皿与姿态都被处理得极其克制，使行为本身更令人不安。",
          "在背景中，{pawn_pronoun}的神情模糊在麻木与决绝之间。"
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
          "在无人愿意多看的时候",
          "在饥饿压过羞耻之后",
          "在沉默几乎比行为本身更沉重的一刻",
          "在聚落外缘",
          "在主体后方的空地上",
          "在远处地形起伏的尽头",
          "在画面左侧延展出去的位置",
          "在画面右侧留白之间"
        ]
      },
      "tox_buildup": {
        "event_nouns": [
          "{pawn_display}体内毒性堆积",
          "{pawn_display}被毒素缓慢侵蚀",
          "{pawn_display}在毒性中变得虚弱",
          "{pawn_display}体内毒性堆积的情景",
          "{pawn_display}被毒素缓慢侵蚀的情景",
          "{pawn_display}在毒性中变得虚弱的情景",
          "{pawn_display}体内毒性堆积的场面",
          "{pawn_display}被毒素缓慢侵蚀的场面"
        ],
        "main_images": [
          "{pawn_display}正艰难地支撑身体{scene_fragment}",
          "{pawn_display}在毒性侵袭下显得步伐沉重{scene_fragment}",
          "{pawn_display}被看不见的毒素慢慢拖住{scene_fragment}"
        ],
        "detail_sentences": [
          "人物周围的空气与地面被处理得污浊而压抑。",
          "{pawn_pronoun}的姿态并不剧烈，却带着持续消耗的疲态。",
          "背景中的色块显得发灰，使危险更像长期滞留。",
          "在画面边缘，人物周围的空气与地面被处理得污浊而压抑。",
          "在画面边缘，{pawn_pronoun}的姿态并不剧烈，却带着持续消耗的疲态。",
          "在画面边缘，背景中的色块显得发灰，使危险更像长期滞留。",
          "在背景中，人物周围的空气与地面被处理得污浊而压抑。",
          "在背景中，{pawn_pronoun}的姿态并不剧烈，却带着持续消耗的疲态。"
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
          "在空气质量变差的日子里",
          "在万物都显得沉重的时候",
          "在毒性一点点累积之际",
          "在聚落外缘",
          "在主体后方的空地上",
          "在远处地形起伏的尽头",
          "在画面左侧延展出去的位置",
          "在画面右侧留白之间"
        ]
      },
      "message_received": {
        "event_nouns": [
          "{pawn_display}收到来自远方的信息",
          "{pawn_display}接到一封改变局势的来信",
          "{pawn_display}在某个寻常时刻收到了消息",
          "{pawn_display}收到来自远方的信息的情景",
          "{pawn_display}接到一封改变局势的来信的情景",
          "{pawn_display}在某个寻常时刻收到了消息的情景",
          "{pawn_display}收到来自远方的信息的场面",
          "{pawn_display}接到一封改变局势的来信的场面"
        ],
        "main_images": [
          "{pawn_display}正展开一封刚收到的讯息{scene_fragment}",
          "{pawn_display}握着通讯装置，神情骤然专注{scene_fragment}",
          "{pawn_display}在消息到来后停住了手上的事{scene_fragment}"
        ],
        "detail_sentences": [
          "人物的目光被收束到手中的文字或装置上。",
          "背景中的动作像是被这条消息暂时按住。",
          "画面的重心被压到一小块信息之上，使变化感更强。",
          "在画面边缘，人物的目光被收束到手中的文字或装置上。",
          "在画面边缘，背景中的动作像是被这条消息暂时按住。",
          "在画面边缘，画面的重心被压到一小块信息之上，使变化感更强。",
          "在背景中，人物的目光被收束到手中的文字或装置上。",
          "在背景中，背景中的动作像是被这条消息暂时按住。"
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
          "在日常被打断的一刻",
          "在静默读完消息之后",
          "在尚未决定如何回应之前",
          "在聚落外缘",
          "在主体后方的空地上",
          "在远处地形起伏的尽头",
          "在画面左侧延展出去的位置",
          "在画面右侧留白之间"
        ]
      },
      "eclipse": {
        "event_nouns": [
          "{pawn_display}见证日蚀",
          "{pawn_display}经历白昼被阴影吞没",
          "{pawn_display}抬头望见异常的天象",
          "{pawn_display}见证日蚀的情景",
          "{pawn_display}经历白昼被阴影吞没的情景",
          "{pawn_display}抬头望见异常的天象的情景",
          "{pawn_display}见证日蚀的场面",
          "{pawn_display}经历白昼被阴影吞没的场面"
        ],
        "main_images": [
          "{pawn_display}正望向被遮蔽的太阳{scene_fragment}",
          "{pawn_display}站在忽然黯下来的白昼里{scene_fragment}",
          "{pawn_display}在异常昏暗的光线中停步{scene_fragment}"
        ],
        "detail_sentences": [
          "天空与地面之间的光线被压得古怪而薄。",
          "人物显得很小，使天象的异样更强烈。",
          "背景中的生灵与建筑像是都在短暂失语。",
          "在画面边缘，天空与地面之间的光线被压得古怪而薄。",
          "在画面边缘，人物显得很小，使天象的异样更强烈。",
          "在画面边缘，背景中的生灵与建筑像是都在短暂失语。",
          "在背景中，天空与地面之间的光线被压得古怪而薄。",
          "在背景中，人物显得很小，使天象的异样更强烈。"
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
          "在白昼忽然暗下来的时候",
          "在所有人都抬头的片刻",
          "在日光被夺走的一瞬",
          "在聚落外缘",
          "在主体后方的空地上",
          "在远处地形起伏的尽头",
          "在画面左侧延展出去的位置",
          "在画面右侧留白之间"
        ]
      },
      "tornado": {
        "event_nouns": [
          "龙卷风逼近{pawn_display}所在之地",
          "{pawn_display}目睹龙卷风扫过地表",
          "{pawn_display}在龙卷风前被迫停步",
          "龙卷风逼近{pawn_display}所在之地的情景",
          "{pawn_display}目睹龙卷风扫过地表的情景",
          "{pawn_display}在龙卷风前被迫停步的情景",
          "龙卷风逼近{pawn_display}所在之地的场面",
          "{pawn_display}目睹龙卷风扫过地表的场面"
        ],
        "main_images": [
          "{pawn_display}正望向席卷而来的龙卷风{scene_fragment}",
          "{pawn_display}站在扭曲的风柱前显得异常渺小{scene_fragment}",
          "{pawn_display}在龙卷风逼近时僵在原地{scene_fragment}"
        ],
        "detail_sentences": [
          "风柱与碎屑被拉成剧烈上卷的线条。",
          "背景中的地形像被同时向多个方向扯开。",
          "人物姿态带着本能的退却感。",
          "在画面边缘，风柱与碎屑被拉成剧烈上卷的线条。",
          "在画面边缘，背景中的地形像被同时向多个方向扯开。",
          "在画面边缘，人物姿态带着本能的退却感。",
          "在背景中，风柱与碎屑被拉成剧烈上卷的线条。",
          "在背景中，背景中的地形像被同时向多个方向扯开。"
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
          "在狂风卷起尘土的时候",
          "在风柱开始接地的一刻",
          "在所有退路都显得仓促之际",
          "在聚落外缘",
          "在主体后方的空地上",
          "在远处地形起伏的尽头",
          "在画面左侧延展出去的位置",
          "在画面右侧留白之间"
        ]
      },
      "vomit": {
        "event_nouns": [
          "{pawn_display}剧烈呕吐",
          "{pawn_display}因不适而呕吐",
          "{pawn_display}在痛苦中弯下身子",
          "{pawn_display}剧烈呕吐的情景",
          "{pawn_display}因不适而呕吐的情景",
          "{pawn_display}在痛苦中弯下身子的情景",
          "{pawn_display}剧烈呕吐的场面",
          "{pawn_display}因不适而呕吐的场面"
        ],
        "main_images": [
          "{pawn_display}正弯身呕吐{scene_fragment}",
          "{pawn_display}跪倒在地，无法抑制恶心{scene_fragment}",
          "{pawn_display}在呕吐后显得虚弱而狼狈{scene_fragment}"
        ],
        "detail_sentences": [
          "人物姿态被刻得极其不适，使观者几乎能感到胃部翻腾。",
          "{pawn_pronoun}的神情扭曲而痛苦。",
          "背景被压缩成尴尬而无力的沉默。",
          "在画面边缘，人物姿态被刻得极其不适，使观者几乎能感到胃部翻腾。",
          "在画面边缘，{pawn_pronoun}的神情扭曲而痛苦。",
          "在画面边缘，背景被压缩成尴尬而无力的沉默。",
          "在背景中，人物姿态被刻得极其不适，使观者几乎能感到胃部翻腾。",
          "在背景中，{pawn_pronoun}的神情扭曲而痛苦。"
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
          "在众人避开的角落里",
          "在身体彻底抗议的一刻",
          "在恶心压过意志的时候",
          "在聚落外缘",
          "在主体后方的空地上",
          "在远处地形起伏的尽头",
          "在画面左侧延展出去的位置",
          "在画面右侧留白之间"
        ]
      },
      "cavein_escape": {
        "event_nouns": [
          "{pawn_display}躲过塌方",
          "{pawn_display}从坠落的碎石中逃开",
          "{pawn_display}险些被塌方吞没",
          "{pawn_display}躲过塌方的情景",
          "{pawn_display}从坠落的碎石中逃开的情景",
          "{pawn_display}险些被塌方吞没的情景",
          "{pawn_display}躲过塌方的场面",
          "{pawn_display}从坠落的碎石中逃开的场面"
        ],
        "main_images": [
          "{pawn_display}正从塌落的碎石前跃开{scene_fragment}",
          "{pawn_display}在塌方逼近时猛然后退{scene_fragment}",
          "{pawn_display}险险躲过头顶坠下的岩块{scene_fragment}"
        ],
        "detail_sentences": [
          "坠落的碎石被刻成下压的线条，使危险来得极快。",
          "{pawn_pronoun}的动作停在仓促的一瞬，像是本能救了性命。",
          "背景中的矿道显得逼仄而压迫。",
          "在画面边缘，坠落的碎石被刻成下压的线条，使危险来得极快。",
          "在画面边缘，{pawn_pronoun}的动作停在仓促的一瞬，像是本能救了性命。",
          "在画面边缘，背景中的矿道显得逼仄而压迫。",
          "在背景中，坠落的碎石被刻成下压的线条，使危险来得极快。",
          "在背景中，{pawn_pronoun}的动作停在仓促的一瞬，像是本能救了性命。"
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
          "在岩层断裂的一刻",
          "在回声猛然炸开的矿道里",
          "在碎石砸向地面的瞬间",
          "在聚落外缘",
          "在主体后方的空地上",
          "在远处地形起伏的尽头",
          "在画面左侧延展出去的位置",
          "在画面右侧留白之间"
        ]
      },
      "caravan_ambush": {
        "event_nouns": [
          "{pawn_display}所在商队遭遇伏击",
          "{pawn_display}卷入对商队的突袭",
          "{pawn_display}在商队遇伏时被迫迎战",
          "{pawn_display}所在商队遭遇伏击的情景",
          "{pawn_display}卷入对商队的突袭的情景",
          "{pawn_display}在商队遇伏时被迫迎战的情景",
          "{pawn_display}所在商队遭遇伏击的场面",
          "{pawn_display}卷入对商队的突袭的场面"
        ],
        "main_images": [
          "{pawn_display}正站在被伏击的商队旁{scene_fragment}",
          "{pawn_display}在商队混乱中寻找掩护{scene_fragment}",
          "{pawn_display}面对突如其来的袭击显得格外警惕{scene_fragment}"
        ],
        "detail_sentences": [
          "行李、牲畜与武器的轮廓混作一团，使伏击显得更加突然。",
          "{pawn_pronoun}的姿态紧绷，像是刚意识到危险已无处不在。",
          "背景中的道路被切断，增添无处可逃的意味。",
          "在画面边缘，行李、牲畜与武器的轮廓混作一团，使伏击显得更加突然。",
          "在画面边缘，{pawn_pronoun}的姿态紧绷，像是刚意识到危险已无处不在。",
          "在画面边缘，背景中的道路被切断，增添无处可逃的意味。",
          "在背景中，行李、牲畜与武器的轮廓混作一团，使伏击显得更加突然。",
          "在背景中，{pawn_pronoun}的姿态紧绷，像是刚意识到危险已无处不在。"
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
          "在行进中的道路上",
          "在伏兵突然出现的时刻",
          "在商队秩序被撕开的一瞬",
          "在聚落外缘",
          "在主体后方的空地上",
          "在远处地形起伏的尽头",
          "在画面左侧延展出去的位置",
          "在画面右侧留白之间"
        ]
      },
      "ship_chunk_crash": {
        "event_nouns": [
          "远古舰船残骸坠落在{pawn_display}所见之地",
          "{pawn_display}目睹舰船残骸坠下",
          "{pawn_display}见证一块燃烧的残骸落入地面",
          "远古舰船残骸坠落在{pawn_display}所见之地的情景",
          "{pawn_display}目睹舰船残骸坠下的情景",
          "{pawn_display}见证一块燃烧的残骸落入地面的情景",
          "远古舰船残骸坠落在{pawn_display}所见之地的场面",
          "{pawn_display}目睹舰船残骸坠下的场面"
        ],
        "main_images": [
          "{pawn_display}正望向燃烧坠落的舰船残骸{scene_fragment}",
          "一块炽热的舰船残骸在{pawn_display}视野中撞向地面{scene_fragment}",
          "{pawn_display}被舰船残骸的坠落逼得停下脚步{scene_fragment}"
        ],
        "detail_sentences": [
          "残骸拖出的火痕被刻得锋利，使其来势显得蛮横。",
          "人物与地面都显得渺小，像是被天外之物强行打断。",
          "背景中的尘浪与火光同时扩散，增添撞击的重量。",
          "在画面边缘，残骸拖出的火痕被刻得锋利，使其来势显得蛮横。",
          "在画面边缘，人物与地面都显得渺小，像是被天外之物强行打断。",
          "在画面边缘，背景中的尘浪与火光同时扩散，增添撞击的重量。",
          "在背景中，残骸拖出的火痕被刻得锋利，使其来势显得蛮横。",
          "在背景中，人物与地面都显得渺小，像是被天外之物强行打断。"
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
          "在天空被尾焰划开的瞬间",
          "在所有人都来不及反应之际",
          "在轰鸣尚未落到地面的前一刻",
          "在聚落外缘",
          "在主体后方的空地上",
          "在远处地形起伏的尽头",
          "在画面左侧延展出去的位置",
          "在画面右侧留白之间"
        ]
      },
      "volcanic_winter": {
        "event_nouns": [
          "火山寒冬降临到{pawn_display}所处之地",
          "{pawn_display}经历火山寒冬",
          "{pawn_display}目睹灰烬遮蔽天空",
          "火山寒冬降临到{pawn_display}所处之地的情景",
          "{pawn_display}经历火山寒冬的情景",
          "{pawn_display}目睹灰烬遮蔽天空的情景",
          "火山寒冬降临到{pawn_display}所处之地的场面",
          "{pawn_display}经历火山寒冬的场面"
        ],
        "main_images": [
          "{pawn_display}正站在被灰烬笼罩的天地间{scene_fragment}",
          "{pawn_display}仰望被灰色云层吞没的天空{scene_fragment}",
          "{pawn_display}在寒冷与灰烬中缓慢行走{scene_fragment}"
        ],
        "detail_sentences": [
          "天空与地面的界线被灰烬模糊，使世界显得更冷。",
          "{pawn_pronoun}的姿态显得沉重，像是连呼吸都被压住。",
          "背景中的植物与建筑都失去鲜明颜色，只剩灰白层次。",
          "在画面边缘，天空与地面的界线被灰烬模糊，使世界显得更冷。",
          "在画面边缘，{pawn_pronoun}的姿态显得沉重，像是连呼吸都被压住。",
          "在画面边缘，背景中的植物与建筑都失去鲜明颜色，只剩灰白层次。",
          "在背景中，天空与地面的界线被灰烬模糊，使世界显得更冷。",
          "在背景中，{pawn_pronoun}的姿态显得沉重，像是连呼吸都被压住。"
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
          "在灰烬持续飘落的时候",
          "在白昼也像黄昏的一日",
          "在寒冷与沉默一同压下之际",
          "在聚落外缘",
          "在主体后方的空地上",
          "在远处地形起伏的尽头",
          "在画面左侧延展出去的位置",
          "在画面右侧留白之间"
        ]
      },
      "disease_onset": {
        "event_nouns": [
          "{pawn_display}罹患{illness_name}",
          "{pawn_display}被{illness_name}击中",
          "{pawn_display}在疾病发作中变得虚弱",
          "{pawn_display}罹患{illness_name}的情景",
          "{pawn_display}被{illness_name}击中的情景",
          "{pawn_display}在疾病发作中变得虚弱的情景",
          "{pawn_display}罹患{illness_name}的场面",
          "{pawn_display}被{illness_name}击中的场面"
        ],
        "main_images": [
          "{pawn_display}正被{illness_name}折磨{scene_fragment}",
          "{pawn_display}在病症发作中显得摇摇欲坠{scene_fragment}",
          "{pawn_display}因{illness_name}而神情痛苦{scene_fragment}"
        ],
        "detail_sentences": [
          "人物姿态被刻得无力而迟钝，像是每个动作都更费力。",
          "{pawn_pronoun}的神情显得病恹而勉强。",
          "背景被处理得很静，衬出身体不适本身的存在感。",
          "在画面边缘，人物姿态被刻得无力而迟钝，像是每个动作都更费力。",
          "在画面边缘，{pawn_pronoun}的神情显得病恹而勉强。",
          "在画面边缘，背景被处理得很静，衬出身体不适本身的存在感。",
          "在背景中，人物姿态被刻得无力而迟钝，像是每个动作都更费力。",
          "在背景中，{pawn_pronoun}的神情显得病恹而勉强。"
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
          "在病症刚刚发作的时候",
          "在呼吸也变得费力的一日",
          "在身体不再可靠的一刻",
          "在聚落外缘",
          "在主体后方的空地上",
          "在远处地形起伏的尽头",
          "在画面左侧延展出去的位置",
          "在画面右侧留白之间"
        ]
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
    }
  }
};
