// Targeted extensions v14.3 — one extension for every v14.2 card plus every new v14.3 card.
(function(){
  const questions=[
  {
    "id": "BJT-EV143-001",
    "stem": "「今まさに資料を確認している最中です」と言いたい。最も自然なのは？",
    "options": [
      "今、資料を確認するところです。",
      "今、資料を確認しているところです。",
      "今、資料を確認したところです。",
      "今、資料を確認するところでした。"
    ],
    "answer": 1,
    "category": "延伸練習",
    "explanation": "進行中は「Vているところ」。",
    "source": "延伸",
    "tags": [
      "kx001"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "kx001"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-002",
    "stem": "彼は今、会議室から出ようとしている。意味が最も近いのは？",
    "options": [
      "出たいと言っている。",
      "出たがっている。",
      "出ようとしている。",
      "出てほしいと思っている。"
    ],
    "answer": 2,
    "category": "延伸練習",
    "explanation": "「Vようとしている」＝正要／試圖做。",
    "source": "延伸",
    "tags": [
      "kx002"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "kx002"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-003",
    "stem": "上司が「部下にこの資料を確認してほしい」と言った。最も近いのは？",
    "options": [
      "部下は確認したい。",
      "上司は確認したい。",
      "上司は部下に確認してほしい。",
      "部下は確認したがっている。"
    ],
    "answer": 2,
    "category": "延伸練習",
    "explanation": "「Vてほしい」＝希望別人做。",
    "source": "延伸",
    "tags": [
      "kx003"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "kx003"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-004",
    "stem": "取引先に依頼を切り出す前置きとして自然なのは？",
    "options": [
      "お願いがあるんですが、少しお時間よろしいでしょうか。",
      "お願いがある。でも。",
      "お願いですから。",
      "お願いだったので。"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "「んですが」可交代背景並柔化後續請求。",
    "source": "延伸",
    "tags": [
      "kx004"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "kx004"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-005",
    "stem": "顧客の利用状況に合わせてプランを変える。自然なのは？",
    "options": [
      "利用状況に応じて変更します。",
      "利用状況に限って変更します。",
      "利用状況につれて変更します。",
      "利用状況に反して変更します。"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "「Nに応じて」＝配合條件而調整。",
    "source": "延伸",
    "tags": [
      "kx005"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "kx005"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-006",
    "stem": "二つの動作を同時に行う表現は？",
    "options": [
      "資料を見ながら説明します。",
      "資料を見次第説明します。",
      "資料を見てまで説明します。",
      "資料を見たところ説明します。"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "Vます語幹＋ながら＝一邊…一邊…。",
    "source": "延伸",
    "tags": [
      "kx006"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "kx006"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-007",
    "stem": "「この仕事___経験が必要です」に最も自然なのは？",
    "options": [
      "にも",
      "には",
      "へは",
      "とは"
    ],
    "answer": 1,
    "category": "延伸練習",
    "explanation": "主題化して必要条件を述べる「には」。",
    "source": "延伸",
    "tags": [
      "kx007"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "kx007"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-008",
    "stem": "口語で「田中さんって、営業部の人？」の「って」に最も近い働きは？",
    "options": [
      "引用・話題提示",
      "尊敬",
      "否定",
      "条件"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "「って」可口語化引用或提示話題。",
    "source": "延伸",
    "tags": [
      "kx008"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "kx008"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-009",
    "stem": "金曜日を締切として、それ以前に提出してほしい。自然なのは？",
    "options": [
      "金曜日ごろ提出してください。",
      "金曜日まで提出してください。",
      "金曜日までに提出してください。",
      "金曜日から提出してください。"
    ],
    "answer": 2,
    "category": "延伸練習",
    "explanation": "截止前完成用「までに」。",
    "source": "延伸",
    "tags": [
      "kx009"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "kx009"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-010",
    "stem": "文書で追加事項を示す「なお」の使い方として自然なのは？",
    "options": [
      "なお、交通費は各自負担です。",
      "なおので、交通費です。",
      "なおに交通費です。",
      "なおを交通費です。"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "「なお」是補充說明用接續副詞。",
    "source": "延伸",
    "tags": [
      "kx010"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "kx010"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-011",
    "stem": "取引先に再確認を依頼する最も丁寧な表現は？",
    "options": [
      "確認しませんか。",
      "ご確認いただけませんでしょうか。",
      "確認して。",
      "確認するでしょうか。"
    ],
    "answer": 1,
    "category": "延伸練習",
    "explanation": "「～ませんでしょうか」以否定疑問柔化依賴。",
    "source": "延伸",
    "tags": [
      "kx011"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "kx011"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-012",
    "stem": "上司の指示に対する返答として最も自然なのは？",
    "options": [
      "了解。",
      "分かった。",
      "承知いたしました。",
      "知っています。"
    ],
    "answer": 2,
    "category": "延伸練習",
    "explanation": "正式接受上司指示可用「承知いたしました」。",
    "source": "延伸",
    "tags": [
      "kx012"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "kx012"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-013",
    "stem": "社外の相手から伝言を受ける。最も自然なのは？",
    "options": [
      "伝言を承ります。",
      "伝言を申します。",
      "伝言をご覧になります。",
      "伝言をおっしゃいます。"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "「承る」可表示謙讓地接受傳言。",
    "source": "延伸",
    "tags": [
      "kx013"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "kx013"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-014",
    "stem": "強く参加を希望する返答として自然なのは？",
    "options": [
      "ぜひ参加させてください。",
      "たぶん参加します。",
      "参加しかねます。",
      "参加は不要です。"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "「ぜひ」強調積極希望。",
    "source": "延伸",
    "tags": [
      "kx014"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "kx014"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-015",
    "stem": "プレゼン終了後、質問を募る自然な言い方は？",
    "options": [
      "質問しろ。",
      "ご質問はございませんか。",
      "質問を申しますか。",
      "ご質問を拝見しますか。"
    ],
    "answer": 1,
    "category": "延伸練習",
    "explanation": "「ご質問はございませんか」是正式徵詢。",
    "source": "延伸",
    "tags": [
      "kx015"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "kx015"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-016",
    "stem": "長年利用してくれた顧客への挨拶として自然なのは？",
    "options": [
      "いつもごひいきいただき、ありがとうございます。",
      "いつもひいきしてあげます。",
      "ごひいきを申し上げます。",
      "ひいきになります。"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "「ごひいきいただく」表示承蒙長期照顧。",
    "source": "延伸",
    "tags": [
      "kx016"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "kx016"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-017",
    "stem": "顧客の期待に応えられなかったとき自然なのは？",
    "options": [
      "ご期待に沿えず、申し訳ございません。",
      "ご期待を沿えず。",
      "ご期待に添ってください。",
      "期待が沿います。"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "固定搭配「期待に沿う」。",
    "source": "延伸",
    "tags": [
      "kx017"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "kx017"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-018",
    "stem": "会話で相手企業を指す語は？",
    "options": [
      "弊社",
      "御社",
      "当社様",
      "自社さん"
    ],
    "answer": 1,
    "category": "延伸練習",
    "explanation": "口語稱呼對方公司用「御社」。",
    "source": "延伸",
    "tags": [
      "kx018"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "kx018"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-019",
    "stem": "取引先に自社の課長を話題にする。最も自然なのは？",
    "options": [
      "田中課長さん",
      "田中課長様",
      "弊社の田中",
      "田中先生"
    ],
    "answer": 2,
    "category": "延伸練習",
    "explanation": "對外不給己方人加「さん／様」。",
    "source": "延伸",
    "tags": [
      "kx019"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "kx019"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-020",
    "stem": "「田中という方からお電話です」の「という方」は？",
    "options": [
      "田中という名前の人物",
      "田中が言った内容",
      "田中の会社",
      "田中の役職"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "「～という方」＝名叫…的人。",
    "source": "延伸",
    "tags": [
      "kx020"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "kx020"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-021",
    "stem": "長期間相手に心配をかけたことを詫びるなら？",
    "options": [
      "ご心労をおかけし、申し訳ございません。",
      "ご苦労をおかけし。",
      "ご心配をいただきました。",
      "心労してください。"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "「心労をおかけする」＝讓對方操心。",
    "source": "延伸",
    "tags": [
      "kx021"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "kx021"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-022",
    "stem": "顧客に直接会って謝罪したい。自然なのは？",
    "options": [
      "お目にかかって、お詫びを申し上げたいです。",
      "拝見して、お詫びを言ってあげます。",
      "ご覧になって謝ります。",
      "お会いになって申し上げます。"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "「お目にかかる」＋「お詫びを申し上げる」。",
    "source": "延伸",
    "tags": [
      "kx022"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "kx022"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-023",
    "stem": "部下に「戻ったら顧客へ電話するよう伝える」。自然なのは？",
    "options": [
      "戻り次第、お電話するように伝えます。",
      "戻り次第、お電話になさいます。",
      "戻り次第、お電話してあげます。",
      "戻り次第、お電話いただきます。"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "「Vるように伝える」＝轉告某人去做。",
    "source": "延伸",
    "tags": [
      "kx023"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "kx023"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-024",
    "stem": "来社した顧客へのお礼として最も自然なのは？",
    "options": [
      "本日はお越しいただき、ありがとうございました。",
      "本日は来てあげて、ありがとうございました。",
      "本日は参ってくださいました。",
      "本日は伺っていただきました。"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "承蒙對方前來用「お越しいただく」。",
    "source": "延伸",
    "tags": [
      "kx024"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "kx024"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-025",
    "stem": "上司に自分の父の発言を尋ねる。自然なのは？",
    "options": [
      "父は何か申しておりましたか。",
      "父は何かおっしゃいましたか。",
      "お父様は何か申されましたか。",
      "父上様がいらっしゃいましたか。"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "談自己身內不抬高，用謙讓側表現。",
    "source": "延伸",
    "tags": [
      "kx025"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "kx025"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-026",
    "stem": "「足で稼ぐ」の意味に最も近いのは？",
    "options": [
      "現場を多く回って成果を得る",
      "歩数を計測する",
      "交通費を節約する",
      "運動して体力をつける"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "営業語境是親自跑現場累積成果。",
    "source": "延伸",
    "tags": [
      "kx026"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "kx026"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-027",
    "stem": "売れない商品のラインナップを再検討する。最も近い語は？",
    "options": [
      "見直す",
      "見送る",
      "見極める",
      "見限る"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "「見直す」＝重新檢討改善。",
    "source": "延伸",
    "tags": [
      "kx027"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "kx027"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-028",
    "stem": "高齢者もいるので、できるだけ楽なプランにする。「できるだけ」に近いのは？",
    "options": [
      "なるべく",
      "必ず",
      "たまたま",
      "まったく"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "「なるべく」＝盡可能。",
    "source": "延伸",
    "tags": [
      "kx028"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "kx028"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-029",
    "stem": "「売上全体に占める割合」の意味は？",
    "options": [
      "売上全体の中での比率",
      "売上の絶対額",
      "売上が消えた割合",
      "売上予算"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "「～に占める」＝在整體中所占比例。",
    "source": "延伸",
    "tags": [
      "kx029"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "kx029"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-030",
    "stem": "「現場の手間がかからないというのが、一番の利点」の中心は？",
    "options": [
      "一番の利点は現場負担の減少",
      "欠点は価格",
      "必ず導入する",
      "現場を廃止する"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "「～というのが、一番の利点」明示核心優點。",
    "source": "延伸",
    "tags": [
      "kx030"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "kx030"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-031",
    "stem": "計画を少しずつ確実に進める。「着実に」に近いのは？",
    "options": [
      "確実に一歩ずつ",
      "一気に",
      "適当に",
      "突然"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "「着実に」＝穩健確實。",
    "source": "延伸",
    "tags": [
      "kx031"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "kx031"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-032",
    "stem": "「至急」と「早速」の違いとして最も適切なのは？",
    "options": [
      "至急は急ぎの要求、早速はすぐ行動する語感",
      "完全に同じ",
      "至急はゆっくり",
      "早速は翌月"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "至急＝緊急；早速＝立刻著手。",
    "source": "延伸",
    "tags": [
      "kx032"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "kx032"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-033",
    "stem": "自分から日程変更をお願いしたい。自然なのは？",
    "options": [
      "変更させていただきたいのですが。",
      "変更なさっていただきたい。",
      "変更してあげたい。",
      "変更くださりたい。"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "己方希望獲允許做變更，用「させていただきたい」。",
    "source": "延伸",
    "tags": [
      "kx033"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "kx033"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-034",
    "stem": "「だいたいの金額すら想像できない」に近いのは？",
    "options": [
      "見当がつかない",
      "見込みがある",
      "目当てにする",
      "目算を立てる"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "「見当がつかない」＝沒有頭緒。",
    "source": "延伸",
    "tags": [
      "kx034"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "kx034"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-035",
    "stem": "「企業努力をしても赤字は避けられない」に最も近いのは？",
    "options": [
      "回避できない",
      "回避する必要はない",
      "回避できる可能性がある",
      "回避しなければならない"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "「～られない」＝不能避免。",
    "source": "延伸",
    "tags": [
      "kx035"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "kx035"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-036",
    "stem": "来期方針を部長が社員に伝える場合、最も中立な語は？",
    "options": [
      "説明",
      "釈明",
      "説得",
      "解説"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "方針內容を伝えるなら「説明」。",
    "source": "延伸",
    "tags": [
      "kx036"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "kx036"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-037",
    "stem": "電話で「田中は会社の外へ出ています」。最も自然なのは？",
    "options": [
      "外出しております",
      "お出掛けしております",
      "お留守でございます",
      "いらっしゃいません"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "對外談己方人用「外出しております」。",
    "source": "延伸",
    "tags": [
      "kx037"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "kx037"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-038",
    "stem": "部長に「私の車に乗ってください」。自然なのは？",
    "options": [
      "私の車にお乗りください。",
      "私の車にお乗せします。",
      "私の車に乗せていただきます。",
      "私の車にお乗りします。"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "「乗る」是上司動作，用尊敬「お乗りください」。",
    "source": "延伸",
    "tags": [
      "kx038"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "kx038"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-039",
    "stem": "自分が急ぎの書類を届ける。自然なのは？",
    "options": [
      "間違いなくお届けいたします。",
      "お届けくださいます。",
      "届けていただきます。",
      "届けさせます。"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "自己動作用謙讓「お届けいたします」。",
    "source": "延伸",
    "tags": [
      "kx039"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "kx039"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-040",
    "stem": "「今月末を最後に、その後は勤務しない」と明確に言うなら？",
    "options": [
      "今月末を限りに",
      "今月末に至って",
      "今月末や否や",
      "今月末に限って"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "「～を限りに」可明確表示以此為最後。",
    "source": "延伸",
    "tags": [
      "kx040"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "kx040"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-041",
    "stem": "同僚が先に退社すると言ったときの返答は？",
    "options": [
      "お疲れさまでした。",
      "ご苦労さま。",
      "お世話になっております。",
      "いらっしゃいませ。"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "同事離開時自然回「お疲れさまでした」。",
    "source": "延伸",
    "tags": [
      "kx041"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "kx041"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-042",
    "stem": "既存取引先に電話をかける冒頭は？",
    "options": [
      "いつもお世話になっております。",
      "ご苦労さま。",
      "お先に失礼します。",
      "初めまして。"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "既存客戶固定寒暄。",
    "source": "延伸",
    "tags": [
      "kx042"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "kx042"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-043",
    "stem": "「どうしても方法がない」に近いのは？",
    "options": [
      "仕方がない",
      "差し支えない",
      "構わない",
      "見込みがない"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "「仕方がない」＝沒有辦法。",
    "source": "延伸",
    "tags": [
      "kx043"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "kx043"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-044",
    "stem": "病気から戻った相手への言葉として適切なのは？",
    "options": [
      "お大事になさってください。",
      "お気をつけてください。",
      "ご苦労ください。",
      "お構いなく。"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "健康を気遣う定型。",
    "source": "延伸",
    "tags": [
      "kx044"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "kx044"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-045",
    "stem": "許可を得ながら自分が対応したい意向を柔らかく言うなら？",
    "options": [
      "対応させていただければと思います。",
      "対応させます。",
      "対応なさってください。",
      "対応してあげます。"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "謙讓＋意向柔化。",
    "source": "延伸",
    "tags": [
      "kx045"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "kx045"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-046",
    "stem": "会社の決定で来月大阪へ異動する。自然なのは？",
    "options": [
      "大阪へ異動することになりました。",
      "大阪へ異動することにしました。",
      "大阪へ異動してほしいです。",
      "大阪へ異動したがります。"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "外部決定／制度結果用「ことになりました」。",
    "source": "延伸",
    "tags": [
      "kx046"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "kx046"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-047",
    "stem": "部下へ「明日までに提出するように」と伝える。自然なのは？",
    "options": [
      "明日までに提出するようにお願いします。",
      "明日までに提出になってください。",
      "提出していただきますかね。",
      "提出を見込みます。"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "「Vるようにお願いします」要求某行動。",
    "source": "延伸",
    "tags": [
      "kx047"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "kx047"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-048",
    "stem": "客先に自社部長の発言を伝える。自然なのは？",
    "options": [
      "弊社の田中が申しておりました。",
      "弊社の田中部長がおっしゃいました。",
      "田中様が申されました。",
      "田中社長様が言いました。"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "對外談己方人，用「申す」等謙讓方向。",
    "source": "延伸",
    "tags": [
      "kx048"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "kx048"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-049",
    "stem": "取引先に追加資料を頼む前置きとして最も自然なのは？",
    "options": [
      "恐れ入りますが、追加資料をお送りいただけますか。",
      "恐れますので、送ってください。",
      "恐縮してください。",
      "恐れ入られますが。"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "商務請求前用「恐れ入りますが」柔化。",
    "source": "延伸",
    "tags": [
      "ky001"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "ky001"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-050",
    "stem": "顧客に「今日中に確認してもらえますか」と丁寧に頼むなら？",
    "options": [
      "本日中にご確認いただけますでしょうか。",
      "本日中に確認してもいいですか。",
      "本日中に確認いたしますか。",
      "本日中に確認なさいます。"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "請對方做用「～ていただけますでしょうか」。",
    "source": "延伸",
    "tags": [
      "ky002"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "ky002"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-051",
    "stem": "会議室を使ってよいか許可を求めるなら？",
    "options": [
      "この会議室を使用してもよろしいでしょうか。",
      "この会議室を使用していただけますか。",
      "この会議室を使用なさいますか。",
      "この会議室を使用しますでしょうか。"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "自己行動的許可詢問。",
    "source": "延伸",
    "tags": [
      "ky003"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "ky003"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-052",
    "stem": "同僚に別案を提案する最も柔らかい表現は？",
    "options": [
      "こちらの案も検討してみてはいかがでしょうか。",
      "こちらの案にしてください。",
      "こちらの案しかありません。",
      "こちらの案を検討しろ。"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "提案用「～てはいかがでしょうか」。",
    "source": "延伸",
    "tags": [
      "ky004"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "ky004"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-053",
    "stem": "会議で反対意見を柔らかく述べるなら？",
    "options": [
      "開始時期は再検討が必要かと思います。",
      "開始時期は絶対間違いです。",
      "開始時期をやめろ。",
      "開始時期は知りません。"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "「～かと思います」降低斷定。",
    "source": "延伸",
    "tags": [
      "ky005"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "ky005"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-054",
    "stem": "「先方から納期を延ばしたいと連絡があった」を正式に報告するなら？",
    "options": [
      "先方から、納期を延ばしたいとのことです。",
      "先方が納期を延ばしたいでしょう。",
      "先方は納期を延ばしたがります。",
      "先方から納期を延ばすそうに見えます。"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "他來源訊息用「とのことです」。",
    "source": "延伸",
    "tags": [
      "ky006"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "ky006"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-055",
    "stem": "「空が暗いので、もうすぐ雨が降りそうだ」はどの「そう」？",
    "options": [
      "見た様子からの予測",
      "人から聞いた伝聞",
      "許可",
      "命令"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "動詞ます語幹＋そう＝樣態。",
    "source": "延伸",
    "tags": [
      "ky007"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "ky007"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-056",
    "stem": "復旧時間を現在の進捗から予測している。自然なのは？",
    "options": [
      "14時に復旧する見込みです。",
      "14時に復旧する絶対です。",
      "14時に復旧する予定だったに違いないです。",
      "14時に復旧してください。"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "推估結果用「見込み」。",
    "source": "延伸",
    "tags": [
      "ky008"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "ky008"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-057",
    "stem": "「確認が終わったらすぐ連絡する」を商務表現にすると？",
    "options": [
      "確認でき次第、ご連絡いたします。",
      "確認できるまでに、ご連絡いたします。",
      "確認しながら、ご連絡いたします。",
      "確認を限りに、ご連絡いたします。"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "一完成就用「次第」。",
    "source": "延伸",
    "tags": [
      "ky009"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "ky009"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-058",
    "stem": "「社内でだけ使用できます」に最も近いのは？",
    "options": [
      "社内利用に限り使用できます。",
      "社内利用に伴い使用できます。",
      "社内利用に反して使用できます。",
      "社内利用につれて使用できます。"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "限定範圍用「に限り」。",
    "source": "延伸",
    "tags": [
      "ky010"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "ky010"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-059",
    "stem": "施設の既定ルールを丁寧に案内するなら？",
    "options": [
      "館内は禁煙となっております。",
      "館内は禁煙してあげます。",
      "館内は禁煙になさいます。",
      "館内は禁煙をいただきます。"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "既定狀態說明用「となっております」。",
    "source": "延伸",
    "tags": [
      "ky011"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "ky011"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-060",
    "stem": "相手に「その時間で問題ありません」と返すなら？",
    "options": [
      "その時間で差し支えありません。",
      "その時間で差し支えなければ。",
      "その時間を遠慮します。",
      "その時間にご苦労です。"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "「差し支えありません」＝沒有妨礙。",
    "source": "延伸",
    "tags": [
      "ky012"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "ky012"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-061",
    "stem": "館内撮影を丁寧に禁止するなら？",
    "options": [
      "館内での撮影はご遠慮ください。",
      "館内での撮影はご遠慮なく。",
      "館内で撮影していただきます。",
      "館内で撮影してください。"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "禮貌禁止用「ご遠慮ください」。",
    "source": "延伸",
    "tags": [
      "ky013"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "ky013"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-062",
    "stem": "相手の日程が空いているか丁寧に尋ねるなら？",
    "options": [
      "ご都合はいかがでしょうか。",
      "ご予定をください。",
      "都合を差し上げます。",
      "ご都合を申します。"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "「ご都合」用于詢問是否方便。",
    "source": "延伸",
    "tags": [
      "ky014"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "ky014"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-063",
    "stem": "相手に断る余地を残して会議参加を頼むなら？",
    "options": [
      "可能でしたら、ご参加いただけますでしょうか。",
      "必ず参加してください。",
      "参加しなさい。",
      "参加に違いありません。"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "條件緩衝＋依賴。",
    "source": "延伸",
    "tags": [
      "ky015"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "ky015"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-064",
    "stem": "忙しい相手に返信を催促する前置きは？",
    "options": [
      "お忙しいところ恐縮ですが、",
      "忙しいので、",
      "お忙しいことですから、",
      "忙しくしてください。"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "對方忙碌仍請求的定型。",
    "source": "延伸",
    "tags": [
      "ky016"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "ky016"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-065",
    "stem": "最終締切が金曜日なら？",
    "options": [
      "遅くとも金曜日までに提出してください。",
      "金曜日ごろ提出してください。",
      "金曜日から提出してください。",
      "金曜日まで提出し続けてください。"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "最晚完成點用「遅くとも～までに」。",
    "source": "延伸",
    "tags": [
      "ky017"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "ky017"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-066",
    "stem": "今週は無理だが来週月曜ならできる。適切な返答は？",
    "options": [
      "来週月曜日でしたら対応可能です。",
      "今週は絶対無理です。終わり。",
      "来週月曜日に対応してあげます。",
      "対応は見込みですか。"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "拒絕後提出可行替代條件。",
    "source": "延伸",
    "tags": [
      "ky018"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "ky018"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-067",
    "stem": "「資料をざっと確認しておいて」に最も近いのは？",
    "options": [
      "資料に目を通しておいて。",
      "資料を見限っておいて。",
      "資料を見送っておいて。",
      "資料を見極めておいて。"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "「目を通す」＝過目。",
    "source": "延伸",
    "tags": [
      "ky019"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "ky019"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-068",
    "stem": "同僚に簡単な資料確認を頼むのに過剰に硬い表現は？",
    "options": [
      "ご高覧賜りますようお願い申し上げます。",
      "ちょっと確認してもらえる？",
      "確認お願いできますか。",
      "これ見てもらえる？"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "「ご高覧賜る」屬高度正式書面語。",
    "source": "延伸",
    "tags": [
      "ky020"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "ky020"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-069",
    "stem": "親しい同僚に軽く確認を頼むなら？",
    "options": [
      "これ、確認してもらえる？",
      "こちらをご高覧賜りますでしょうか。",
      "確認なさっていただきたい。",
      "確認を申していただく。"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "同事間可用較輕的「～てもらえる？」。",
    "source": "延伸",
    "tags": [
      "ky021"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "ky021"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-070",
    "stem": "「承蒙客戶寄資料給我」的授受方向是？",
    "options": [
      "資料を送っていただきました。",
      "資料を送ってあげました。",
      "資料を送りたがりました。",
      "資料を送らせました。"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "我方受惠用「～ていただく」。",
    "source": "延伸",
    "tags": [
      "ky022"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "ky022"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-071",
    "stem": "来客を会議室へ案内するなら？",
    "options": [
      "会議室までご案内いたします。",
      "会議室まで案内してあげます。",
      "会議室まで行きなさい。",
      "会議室へどうでも。"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "己方引導行為用謙讓「ご案内いたします」。",
    "source": "延伸",
    "tags": [
      "ky023"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "ky023"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-072",
    "stem": "新人が「今月から営業部に配置されました」と言うなら？",
    "options": [
      "営業部に配属になりました。",
      "営業部を配属しました。",
      "営業部に配属してあげました。",
      "営業部が配属しました。"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "本人被配置用「配属になる」。",
    "source": "延伸",
    "tags": [
      "ky024"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "ky024"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-073",
    "stem": "取引先が花を送ってくれたことへのお礼は？",
    "options": [
      "お花をお贈りくださいまして、ありがとうございます。",
      "お花をお贈りしてあげまして。",
      "お花を拝見くださいまして。",
      "お花をお贈り申しました。"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "對方行為用尊敬側「～くださいまして」。",
    "source": "延伸",
    "tags": [
      "ky025"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "ky025"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-074",
    "stem": "電話で「留言をお預かりします」と言いたい。自然なのは？",
    "options": [
      "ご伝言をお預かりいたします。",
      "ご伝言を見送ります。",
      "ご伝言を申し上げます。",
      "ご伝言をおっしゃいます。"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "代收留言用「預かる」。",
    "source": "延伸",
    "tags": [
      "ky026"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "ky026"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-075",
    "stem": "受付で相手の名前を丁寧に聞くなら？",
    "options": [
      "お名前を頂戴できますでしょうか。",
      "お名前を差し上げますか。",
      "お名前を申し上げてください。",
      "お名前を拝見しますか。"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "姓名詢問可用「頂戴する」。",
    "source": "延伸",
    "tags": [
      "ky027"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "ky027"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-076",
    "stem": "電話の声が小さいときの婉曲表現は？",
    "options": [
      "少々お電話が遠いようですが。",
      "声が小さい！",
      "電話が遠方です。",
      "もっと叫んでください。"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "「お電話が遠い」是固定婉曲。",
    "source": "延伸",
    "tags": [
      "ky028"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "ky028"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-077",
    "stem": "社員が一時的に机から離れている場合は？",
    "options": [
      "ただいま席を外しております。",
      "ただいま退職しております。",
      "ただいまお留守様です。",
      "ただいまいらっしゃいませんでした。"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "暫時離席用「席を外す」。",
    "source": "延伸",
    "tags": [
      "ky029"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "ky029"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-078",
    "stem": "確定済みの帰社予定を伝えるなら？",
    "options": [
      "15時ごろ戻る予定でございます。",
      "15時に絶対戻ります。",
      "15時に戻るようです。",
      "15時に戻りたがります。"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "已確認排程用「予定」。",
    "source": "延伸",
    "tags": [
      "ky030"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "ky030"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-079",
    "stem": "電話を担当者へ転送するなら？",
    "options": [
      "担当の佐藤におつなぎいたします。",
      "佐藤を差し上げます。",
      "佐藤がおつなぎになります。",
      "佐藤をおっしゃいます。"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "自己轉接用「おつなぎいたします」。",
    "source": "延伸",
    "tags": [
      "ky031"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "ky031"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-080",
    "stem": "電話が途中で切れたことを詫びるなら？",
    "options": [
      "お電話が切れてしまい、失礼いたしました。",
      "お電話が切れてくださいました。",
      "お電話を切って差し上げました。",
      "お電話が切れる予定でした。"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "非預期結果＋道歉。",
    "source": "延伸",
    "tags": [
      "ky032"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "ky032"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-081",
    "stem": "「緊急だという内容を担当者に伝える」の書面語は？",
    "options": [
      "緊急の旨を担当者に伝える。",
      "緊急の様を担当者に伝える。",
      "緊急の都合を担当者に伝える。",
      "緊急の見当を担当者に伝える。"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "「旨」＝前述要點內容。",
    "source": "延伸",
    "tags": [
      "ky033"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "ky033"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-082",
    "stem": "品番を復唱確認するなら？",
    "options": [
      "品番A-120でお間違いないでしょうか。",
      "品番A-120を間違いましたか。",
      "品番A-120で間違いなさい。",
      "品番A-120に違いないです。"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "中性核對用「お間違いないでしょうか」。",
    "source": "延伸",
    "tags": [
      "ky034"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "ky034"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-083",
    "stem": "取引条件で「いつ・どう払うか」をまとめて何という？",
    "options": [
      "支払い条件",
      "納品条件",
      "配属条件",
      "閲覧条件"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "付款方式／期限等統稱支払い条件。",
    "source": "延伸",
    "tags": [
      "ky035"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "ky035"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-084",
    "stem": "一度に全部納品せず、二回に分けて納品するのは？",
    "options": [
      "分納",
      "欠品",
      "返品",
      "検品"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "分批交貨＝分納。",
    "source": "延伸",
    "tags": [
      "ky036"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "ky036"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-085",
    "stem": "「先方は検討します」と言った。適切な理解は？",
    "options": [
      "まだ採用決定ではない。",
      "契約成立した。",
      "必ず採用する。",
      "断った。"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "「検討」是評估中，不等於決定。",
    "source": "延伸",
    "tags": [
      "ky037"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "ky037"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-086",
    "stem": "顧客へ「これも一つの案です」と柔らかく言うなら？",
    "options": [
      "こちらも一案かと存じます。",
      "これしかありません。",
      "これにしろ。",
      "これを差し上げます。"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "「一案かと存じます」柔和提案。",
    "source": "延伸",
    "tags": [
      "ky038"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "ky038"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-087",
    "stem": "部下に「再確認した方がいい」と助言するなら？",
    "options": [
      "もう一度確認したほうがいいと思います。",
      "もう一度確認しろ。",
      "確認は禁止です。",
      "確認なさっていただきたい。"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "社內助言自然。",
    "source": "延伸",
    "tags": [
      "ky039"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "ky039"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-088",
    "stem": "会議で直接否定を避けるなら？",
    "options": [
      "別の見方もできるのではないでしょうか。",
      "あなたは間違っています。",
      "その話は禁止です。",
      "絶対に違います。"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "提出替代視角以柔化反論。",
    "source": "延伸",
    "tags": [
      "ky040"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "ky040"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-089",
    "stem": "リスクを断定せず伝えるなら？",
    "options": [
      "納期に影響する可能性があります。",
      "納期に必ず影響します。",
      "納期に影響してください。",
      "納期に影響したがります。"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "「可能性」保留不確定性。",
    "source": "延伸",
    "tags": [
      "ky041"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "ky041"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-090",
    "stem": "「調べた結果、誤りはなかった」を自然に言うなら？",
    "options": [
      "確認したところ、誤りはありませんでした。",
      "確認しているところ、誤りでした。",
      "確認するところ、誤りです。",
      "確認ところ、誤りです。"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "Vたところ可報告確認後結果。",
    "source": "延伸",
    "tags": [
      "ky042"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "ky042"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-091",
    "stem": "「今の段階ではまだ未確認」を自然に言うなら？",
    "options": [
      "現時点では未確認です。",
      "永遠に未確認です。",
      "絶対未確認です。",
      "未確認に違いありません。"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "「現時点では」限定目前狀態。",
    "source": "延伸",
    "tags": [
      "ky043"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "ky043"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-092",
    "stem": "「確認後、另行再報告」を自然に言うなら？",
    "options": [
      "確認後、改めてご報告します。",
      "確認後、なにぶんご報告します。",
      "確認後、きっかりご報告します。",
      "確認後、さっぱりご報告します。"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "另找時機正式再做用「改めて」。",
    "source": "延伸",
    "tags": [
      "ky044"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "ky044"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-093",
    "stem": "社内報告で「先方から延期したいと連絡が来た」は？",
    "options": [
      "先方から延期したいとの連絡がありました。",
      "先方は延期したに違いありません。",
      "先方を延期しました。",
      "先方が延期してあげました。"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "消息來源＋內容的正式轉述。",
    "source": "延伸",
    "tags": [
      "ky045"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "ky045"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-094",
    "stem": "「検討します」とだけ返事をもらった場合の扱いは？",
    "options": [
      "保留・検討中として扱う。",
      "決定済みとする。",
      "契約成立とする。",
      "拒否確定とする。"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "検討は尚未決定。",
    "source": "延伸",
    "tags": [
      "ky046"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "ky046"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-095",
    "stem": "「コストは高い。一方で品質は良い」の「一方で」は？",
    "options": [
      "別の側面を対照的に示す。",
      "原因を示す。",
      "命令を示す。",
      "過去を示す。"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "對照另一面。",
    "source": "延伸",
    "tags": [
      "ky047"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "ky047"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-096",
    "stem": "「確かにAですが、Bです」の最終立場を読むとき重要なのは？",
    "options": [
      "ですが以後の内容",
      "確かにだけ",
      "Aだけ",
      "敬語の長さ"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "讓步後的後半常承載保留／反論。",
    "source": "延伸",
    "tags": [
      "ky048"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "ky048"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-097",
    "stem": "「つまり」の働きは？",
    "options": [
      "前の内容を要約・言い換えする。",
      "禁止する。",
      "尊敬語にする。",
      "数量を増やす。"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "前述重點概括。",
    "source": "延伸",
    "tags": [
      "ky049"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "ky049"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-098",
    "stem": "会議の決定を最後に確認するなら？",
    "options": [
      "A案で来月開始するということでよろしいでしょうか。",
      "A案に違いありません。",
      "A案を始めたがります。",
      "A案を見込みます。"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "合意內容核對。",
    "source": "延伸",
    "tags": [
      "ky050"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "ky050"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-099",
    "stem": "条件付きで対応可能と伝えるなら？",
    "options": [
      "納期を延ばしていただければ、対応可能です。",
      "納期を延ばしても、対応しません。",
      "納期を延ばすに違いありません。",
      "納期を延ばしてくださいでした。"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "「ば」條件＋可能結果。",
    "source": "延伸",
    "tags": [
      "ky051"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "ky051"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-100",
    "stem": "「一点気になるのは運用コストです」の意味は？",
    "options": [
      "運用コストに懸念がある。",
      "運用コストが確定した。",
      "運用コストを禁止する。",
      "運用コストが無料だ。"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "気になる＝在意／有疑慮。",
    "source": "延伸",
    "tags": [
      "ky052"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "ky052"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-101",
    "stem": "「彼はもう到着したに違いない」の確度は？",
    "options": [
      "かなり強い確信",
      "単なる可能性",
      "許可",
      "依頼"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "「に違いない」表示高度確信推測。",
    "source": "延伸",
    "tags": [
      "ky053"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "ky053"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-102",
    "stem": "未確認情報の報告として最も適切なのは？",
    "options": [
      "現時点では納期が延びる可能性があります。",
      "納期は絶対延びます。",
      "納期は必ず延びます。",
      "納期延長は100％確定です。"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "未確認就應保留確度。",
    "source": "延伸",
    "tags": [
      "ky054"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "ky054"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-103",
    "stem": "上司に自分の整理不足を指摘され「正論なのでつらい」と感じた。慣用句は？",
    "options": [
      "耳が痛い",
      "頭が高い",
      "口が軽い",
      "腰が低い"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "正中弱點的忠告＝耳が痛い。",
    "source": "延伸",
    "tags": [
      "ky055"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "ky055"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-104",
    "stem": "売上高と総コストが同額になる点は？",
    "options": [
      "損益分岐点",
      "固定費",
      "変動費",
      "粗利益"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "營收＝總成本之點。",
    "source": "延伸",
    "tags": [
      "ky056"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "ky056"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-105",
    "stem": "倉庫の実在庫と帳簿を照合する作業は？",
    "options": [
      "棚卸し",
      "分納",
      "検品",
      "見積り"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "盤點＝棚卸し。",
    "source": "延伸",
    "tags": [
      "ky057"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "ky057"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-106",
    "stem": "採用後すぐ業務で成果を出せる経験者を何という？",
    "options": [
      "即戦力",
      "新卒",
      "見習い",
      "引率者"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "立即可投入工作的戰力。",
    "source": "延伸",
    "tags": [
      "ky058"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "ky058"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-107",
    "stem": "新システム導入で入力作業が減ることを表すなら？",
    "options": [
      "手間を省ける",
      "手間が増える",
      "足を運ぶ",
      "二の足を踏む"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "減少作業負擔＝手間を省く。",
    "source": "延伸",
    "tags": [
      "ky059"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "ky059"
    },
    "assets": []
  },
  {
    "id": "BJT-EV143-108",
    "stem": "商品を小売店へ積極的に紹介して売ろうとすることは？",
    "options": [
      "売り込む",
      "見送る",
      "棚卸しする",
      "引き落とす"
    ],
    "answer": 0,
    "category": "延伸練習",
    "explanation": "積極推銷＝売り込む。",
    "source": "延伸",
    "tags": [
      "ky060"
    ],
    "type": "targeted_extension",
    "translation_zh_tw": "本題為知識卡的定向延伸，重點在辨認文法功能、敬語方向、商務語意或資訊確度。",
    "readings": [],
    "lineage": {
      "derived_from_knowledge_id": "ky060"
    },
    "assets": []
  }
];
  const details={
  "BJT-EV143-001": [
    "選項本義：今、資料を確認するところです。\n本題判定：錯誤。\n錯誤原因：これから始める直前。",
    "選項本義：今、資料を確認しているところです。\n本題判定：正確。\n正解理由：進行中を表す。",
    "選項本義：今、資料を確認したところです。\n本題判定：錯誤。\n錯誤原因：完了直後を表す。",
    "選項本義：今、資料を確認するところでした。\n本題判定：錯誤。\n錯誤原因：「ところでした」は過去の局面。"
  ],
  "BJT-EV143-002": [
    "選項本義：出たいと言っている。\n本題判定：錯誤。\n錯誤原因：本人願望の表明。",
    "選項本義：出たがっている。\n本題判定：錯誤。\n錯誤原因：第三者の願望。",
    "選項本義：出ようとしている。\n本題判定：正確。\n正解理由：動作開始直前・試み。",
    "選項本義：出てほしいと思っている。\n本題判定：錯誤。\n錯誤原因：他人への希望。"
  ],
  "BJT-EV143-003": [
    "選項本義：部下は確認したい。\n本題判定：錯誤。\n錯誤原因：部下自身の願望。",
    "選項本義：上司は確認したい。\n本題判定：錯誤。\n錯誤原因：上司自身の願望。",
    "選項本義：上司は部下に確認してほしい。\n本題判定：正確。\n正解理由：正しい授受方向。",
    "選項本義：部下は確認したがっている。\n本題判定：錯誤。\n錯誤原因：第三者願望の描写。"
  ],
  "BJT-EV143-004": [
    "選項本義：お願いがあるんですが、少しお時間よろしいでしょうか。\n本題判定：正確。\n正解理由：自然な緩衝。",
    "選項本義：お願いがある。でも。\n本題判定：錯誤。\n錯誤原因：不自然な切断。",
    "選項本義：お願いですから。\n本題判定：錯誤。\n錯誤原因：理由の接続ではない。",
    "選項本義：お願いだったので。\n本題判定：錯誤。\n錯誤原因：過去理由になり意図がずれる。"
  ],
  "BJT-EV143-005": [
    "選項本義：利用状況に応じて変更します。\n本題判定：正確。\n正解理由：條件對應。",
    "選項本義：利用状況に限って変更します。\n本題判定：錯誤。\n錯誤原因：只限於。",
    "選項本義：利用状況につれて変更します。\n本題判定：錯誤。\n錯誤原因：隨變化而變但語意不同。",
    "選項本義：利用状況に反して変更します。\n本題判定：錯誤。\n錯誤原因：違背條件。"
  ],
  "BJT-EV143-006": [
    "選項本義：資料を見ながら説明します。\n本題判定：正確。\n正解理由：同時進行。",
    "選項本義：資料を見次第説明します。\n本題判定：錯誤。\n錯誤原因：一完成就。",
    "選項本義：資料を見てまで説明します。\n本題判定：錯誤。\n錯誤原因：甚至做到。",
    "選項本義：資料を見たところ説明します。\n本題判定：錯誤。\n錯誤原因：做後發現。"
  ],
  "BJT-EV143-007": [
    "選項本義：にも\n本題判定：錯誤。\n錯誤原因：也可以有「也」語感但此處不自然。",
    "選項本義：には\n本題判定：正確。\n正解理由：對此工作而言。",
    "選項本義：へは\n本題判定：錯誤。\n錯誤原因：方向不合。",
    "選項本義：とは\n本題判定：錯誤。\n錯誤原因：引用／定義不合。"
  ],
  "BJT-EV143-008": [
    "選項本義：引用・話題提示\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：尊敬\n本題判定：錯誤。\n錯誤原因：敬語機能はない。",
    "選項本義：否定\n本題判定：錯誤。\n錯誤原因：否定ではない。",
    "選項本義：条件\n本題判定：錯誤。\n錯誤原因：条件ではない。"
  ],
  "BJT-EV143-009": [
    "選項本義：金曜日ごろ提出してください。\n本題判定：錯誤。\n錯誤原因：大概時間。",
    "選項本義：金曜日まで提出してください。\n本題判定：錯誤。\n錯誤原因：可理解為持續到。",
    "選項本義：金曜日までに提出してください。\n本題判定：正確。\n正解理由：正確截止點。",
    "選項本義：金曜日から提出してください。\n本題判定：錯誤。\n錯誤原因：起點。"
  ],
  "BJT-EV143-010": [
    "選項本義：なお、交通費は各自負担です。\n本題判定：正確。\n正解理由：自然。",
    "選項本義：なおので、交通費です。\n本題判定：錯誤。\n錯誤原因：接續不成立。",
    "選項本義：なおに交通費です。\n本題判定：錯誤。\n錯誤原因：助詞錯。",
    "選項本義：なおを交通費です。\n本題判定：錯誤。\n錯誤原因：格助詞錯。"
  ],
  "BJT-EV143-011": [
    "選項本義：確認しませんか。\n本題判定：錯誤。\n錯誤原因：邀請語感。",
    "選項本義：ご確認いただけませんでしょうか。\n本題判定：正確。\n正解理由：正式依賴。",
    "選項本義：確認して。\n本題判定：錯誤。\n錯誤原因：過於直接。",
    "選項本義：確認するでしょうか。\n本題判定：錯誤。\n錯誤原因：推測語氣。"
  ],
  "BJT-EV143-012": [
    "選項本義：了解。\n本題判定：錯誤。\n錯誤原因：過於簡略。",
    "選項本義：分かった。\n本題判定：錯誤。\n錯誤原因：口語。",
    "選項本義：承知いたしました。\n本題判定：正確。\n正解理由：正式自然。",
    "選項本義：知っています。\n本題判定：錯誤。\n錯誤原因：表示知識而非接受。"
  ],
  "BJT-EV143-013": [
    "選項本義：伝言を承ります。\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：伝言を申します。\n本題判定：錯誤。\n錯誤原因：申す＝說。",
    "選項本義：伝言をご覧になります。\n本題判定：錯誤。\n錯誤原因：見る尊敬語。",
    "選項本義：伝言をおっしゃいます。\n本題判定：錯誤。\n錯誤原因：說的尊敬語。"
  ],
  "BJT-EV143-014": [
    "選項本義：ぜひ参加させてください。\n本題判定：正確。\n正解理由：積極希望。",
    "選項本義：たぶん参加します。\n本題判定：錯誤。\n錯誤原因：不確定。",
    "選項本義：参加しかねます。\n本題判定：錯誤。\n錯誤原因：拒絕。",
    "選項本義：参加は不要です。\n本題判定：錯誤。\n錯誤原因：不參加。"
  ],
  "BJT-EV143-015": [
    "選項本義：質問しろ。\n本題判定：錯誤。\n錯誤原因：命令。",
    "選項本義：ご質問はございませんか。\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：質問を申しますか。\n本題判定：錯誤。\n錯誤原因：主體錯。",
    "選項本義：ご質問を拝見しますか。\n本題判定：錯誤。\n錯誤原因：見る與質問不搭。"
  ],
  "BJT-EV143-016": [
    "選項本義：いつもごひいきいただき、ありがとうございます。\n本題判定：正確。\n正解理由：自然。",
    "選項本義：いつもひいきしてあげます。\n本題判定：錯誤。\n錯誤原因：授受方向不自然。",
    "選項本義：ごひいきを申し上げます。\n本題判定：錯誤。\n錯誤原因：搭配不成立。",
    "選項本義：ひいきになります。\n本題判定：錯誤。\n錯誤原因：語意不成立。"
  ],
  "BJT-EV143-017": [
    "選項本義：ご期待に沿えず、申し訳ございません。\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：ご期待を沿えず。\n本題判定：錯誤。\n錯誤原因：助詞錯。",
    "選項本義：ご期待に添ってください。\n本題判定：錯誤。\n錯誤原因：主客方向不合。",
    "選項本義：期待が沿います。\n本題判定：錯誤。\n錯誤原因：自動詞用法不自然。"
  ],
  "BJT-EV143-018": [
    "選項本義：弊社\n本題判定：錯誤。\n錯誤原因：己方公司。",
    "選項本義：御社\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：当社様\n本題判定：錯誤。\n錯誤原因：不自然。",
    "選項本義：自社さん\n本題判定：錯誤。\n錯誤原因：不自然。"
  ],
  "BJT-EV143-019": [
    "選項本義：田中課長さん\n本題判定：錯誤。\n錯誤原因：抬高己方。",
    "選項本義：田中課長様\n本題判定：錯誤。\n錯誤原因：抬高己方。",
    "選項本義：弊社の田中\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：田中先生\n本題判定：錯誤。\n錯誤原因：職場通常不稱先生。"
  ],
  "BJT-EV143-020": [
    "選項本義：田中という名前の人物\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：田中が言った内容\n本題判定：錯誤。\n錯誤原因：引用內容不是。",
    "選項本義：田中の会社\n本題判定：錯誤。\n錯誤原因：公司不是。",
    "選項本義：田中の役職\n本題判定：錯誤。\n錯誤原因：役職不是。"
  ],
  "BJT-EV143-021": [
    "選項本義：ご心労をおかけし、申し訳ございません。\n本題判定：正確。\n正解理由：自然。",
    "選項本義：ご苦労をおかけし。\n本題判定：錯誤。\n錯誤原因：ご苦労多由上位者對下位者。",
    "選項本義：ご心配をいただきました。\n本題判定：錯誤。\n錯誤原因：句意不完整且方向不同。",
    "選項本義：心労してください。\n本題判定：錯誤。\n錯誤原因：命令不自然。"
  ],
  "BJT-EV143-022": [
    "選項本義：お目にかかって、お詫びを申し上げたいです。\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：拝見して、お詫びを言ってあげます。\n本題判定：錯誤。\n錯誤原因：見る與施惠錯。",
    "選項本義：ご覧になって謝ります。\n本題判定：錯誤。\n錯誤原因：主體錯。",
    "選項本義：お会いになって申し上げます。\n本題判定：錯誤。\n錯誤原因：尊敬語方向錯。"
  ],
  "BJT-EV143-023": [
    "選項本義：戻り次第、お電話するように伝えます。\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：戻り次第、お電話になさいます。\n本題判定：錯誤。\n錯誤原因：抬高己方人。",
    "選項本義：戻り次第、お電話してあげます。\n本題判定：錯誤。\n錯誤原因：施惠不合。",
    "選項本義：戻り次第、お電話いただきます。\n本題判定：錯誤。\n錯誤原因：主體錯。"
  ],
  "BJT-EV143-024": [
    "選項本義：本日はお越しいただき、ありがとうございました。\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：本日は来てあげて、ありがとうございました。\n本題判定：錯誤。\n錯誤原因：施惠方向錯。",
    "選項本義：本日は参ってくださいました。\n本題判定：錯誤。\n錯誤原因：参る是己方謙讓。",
    "選項本義：本日は伺っていただきました。\n本題判定：錯誤。\n錯誤原因：伺う是己方拜訪。"
  ],
  "BJT-EV143-025": [
    "選項本義：父は何か申しておりましたか。\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：父は何かおっしゃいましたか。\n本題判定：錯誤。\n錯誤原因：尊敬己方父親。",
    "選項本義：お父様は何か申されましたか。\n本題判定：錯誤。\n錯誤原因：混亂。",
    "選項本義：父上様がいらっしゃいましたか。\n本題判定：錯誤。\n錯誤原因：不自然。"
  ],
  "BJT-EV143-026": [
    "選項本義：現場を多く回って成果を得る\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：歩数を計測する\n本題判定：錯誤。\n錯誤原因：字面。",
    "選項本義：交通費を節約する\n本題判定：錯誤。\n錯誤原因：無關。",
    "選項本義：運動して体力をつける\n本題判定：錯誤。\n錯誤原因：無關。"
  ],
  "BJT-EV143-027": [
    "選項本義：見直す\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：見送る\n本題判定：錯誤。\n錯誤原因：暫緩。",
    "選項本義：見極める\n本題判定：錯誤。\n錯誤原因：判斷本質。",
    "選項本義：見限る\n本題判定：錯誤。\n錯誤原因：放棄。"
  ],
  "BJT-EV143-028": [
    "選項本義：なるべく\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：必ず\n本題判定：錯誤。\n錯誤原因：必定。",
    "選項本義：たまたま\n本題判定：錯誤。\n錯誤原因：偶然。",
    "選項本義：まったく\n本題判定：錯誤。\n錯誤原因：完全。"
  ],
  "BJT-EV143-029": [
    "選項本義：売上全体の中での比率\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：売上の絶対額\n本題判定：錯誤。\n錯誤原因：不是絕對額。",
    "選項本義：売上が消えた割合\n本題判定：錯誤。\n錯誤原因：無關。",
    "選項本義：売上予算\n本題判定：錯誤。\n錯誤原因：無關。"
  ],
  "BJT-EV143-030": [
    "選項本義：一番の利点は現場負担の減少\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：欠点は価格\n本題判定：錯誤。\n錯誤原因：未說。",
    "選項本義：必ず導入する\n本題判定：錯誤。\n錯誤原因：非必然。",
    "選項本義：現場を廃止する\n本題判定：錯誤。\n錯誤原因：無關。"
  ],
  "BJT-EV143-031": [
    "選項本義：確実に一歩ずつ\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：一気に\n本題判定：錯誤。\n錯誤原因：一次性快速。",
    "選項本義：適当に\n本題判定：錯誤。\n錯誤原因：隨便。",
    "選項本義：突然\n本題判定：錯誤。\n錯誤原因：突然。"
  ],
  "BJT-EV143-032": [
    "選項本義：至急は急ぎの要求、早速はすぐ行動する語感\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：完全に同じ\n本題判定：錯誤。\n錯誤原因：不同。",
    "選項本義：至急はゆっくり\n本題判定：錯誤。\n錯誤原因：反義。",
    "選項本義：早速は翌月\n本題判定：錯誤。\n錯誤原因：錯。"
  ],
  "BJT-EV143-033": [
    "選項本義：変更させていただきたいのですが。\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：変更なさっていただきたい。\n本題判定：錯誤。\n錯誤原因：尊敬與授受混亂。",
    "選項本義：変更してあげたい。\n本題判定：錯誤。\n錯誤原因：施惠感。",
    "選項本義：変更くださりたい。\n本題判定：錯誤。\n錯誤原因：不自然。"
  ],
  "BJT-EV143-034": [
    "選項本義：見当がつかない\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：見込みがある\n本題判定：錯誤。\n錯誤原因：有希望／預測。",
    "選項本義：目当てにする\n本題判定：錯誤。\n錯誤原因：以…為目標。",
    "選項本義：目算を立てる\n本題判定：錯誤。\n錯誤原因：估算計畫。"
  ],
  "BJT-EV143-035": [
    "選項本義：回避できない\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：回避する必要はない\n本題判定：錯誤。\n錯誤原因：無必要。",
    "選項本義：回避できる可能性がある\n本題判定：錯誤。\n錯誤原因：仍有可能。",
    "選項本義：回避しなければならない\n本題判定：錯誤。\n錯誤原因：不得不做的義務。"
  ],
  "BJT-EV143-036": [
    "選項本義：説明\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：釈明\n本題判定：錯誤。\n錯誤原因：辯解。",
    "選項本義：説得\n本題判定：錯誤。\n錯誤原因：說服。",
    "選項本義：解説\n本題判定：錯誤。\n錯誤原因：解說作品/內容。"
  ],
  "BJT-EV143-037": [
    "選項本義：外出しております\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：お出掛けしております\n本題判定：錯誤。\n錯誤原因：帶尊敬色彩不適合己方人。",
    "選項本義：お留守でございます\n本題判定：錯誤。\n錯誤原因：留守偏住家/場所語感。",
    "選項本義：いらっしゃいません\n本題判定：錯誤。\n錯誤原因：尊敬語方向錯。"
  ],
  "BJT-EV143-038": [
    "選項本義：私の車にお乗りください。\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：私の車にお乗せします。\n本題判定：錯誤。\n錯誤原因：改成我載他，語意不同。",
    "選項本義：私の車に乗せていただきます。\n本題判定：錯誤。\n錯誤原因：主體錯。",
    "選項本義：私の車にお乗りします。\n本題判定：錯誤。\n錯誤原因：謙讓不適用上司。"
  ],
  "BJT-EV143-039": [
    "選項本義：間違いなくお届けいたします。\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：お届けくださいます。\n本題判定：錯誤。\n錯誤原因：對方動作。",
    "選項本義：届けていただきます。\n本題判定：錯誤。\n錯誤原因：承蒙對方。",
    "選項本義：届けさせます。\n本題判定：錯誤。\n錯誤原因：使役語意。"
  ],
  "BJT-EV143-040": [
    "選項本義：今月末を限りに\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：今月末に至って\n本題判定：錯誤。\n錯誤原因：到那時才／至此。",
    "選項本義：今月末や否や\n本題判定：錯誤。\n錯誤原因：一…立刻。",
    "選項本義：今月末に限って\n本題判定：錯誤。\n錯誤原因：只限於該月末。"
  ],
  "BJT-EV143-041": [
    "選項本義：お疲れさまでした。\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：ご苦労さま。\n本題判定：錯誤。\n錯誤原因：上位者對下位者色彩強。",
    "選項本義：お世話になっております。\n本題判定：錯誤。\n錯誤原因：對外寒暄。",
    "選項本義：いらっしゃいませ。\n本題判定：錯誤。\n錯誤原因：接客歡迎。"
  ],
  "BJT-EV143-042": [
    "選項本義：いつもお世話になっております。\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：ご苦労さま。\n本題判定：錯誤。\n錯誤原因：不合。",
    "選項本義：お先に失礼します。\n本題判定：錯誤。\n錯誤原因：離席。",
    "選項本義：初めまして。\n本題判定：錯誤。\n錯誤原因：初次才用。"
  ],
  "BJT-EV143-043": [
    "選項本義：仕方がない\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：差し支えない\n本題判定：錯誤。\n錯誤原因：沒有妨礙。",
    "選項本義：構わない\n本題判定：錯誤。\n錯誤原因：無所謂。",
    "選項本義：見込みがない\n本題判定：錯誤。\n錯誤原因：沒有希望，語意不同。"
  ],
  "BJT-EV143-044": [
    "選項本義：お大事になさってください。\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：お気をつけてください。\n本題判定：錯誤。\n錯誤原因：一般安全提醒。",
    "選項本義：ご苦労ください。\n本題判定：錯誤。\n錯誤原因：不自然。",
    "選項本義：お構いなく。\n本題判定：錯誤。\n錯誤原因：不用招呼。"
  ],
  "BJT-EV143-045": [
    "選項本義：対応させていただければと思います。\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：対応させます。\n本題判定：錯誤。\n錯誤原因：過於直接。",
    "選項本義：対応なさってください。\n本題判定：錯誤。\n錯誤原因：要求對方做。",
    "選項本義：対応してあげます。\n本題判定：錯誤。\n錯誤原因：施惠感。"
  ],
  "BJT-EV143-046": [
    "選項本義：大阪へ異動することになりました。\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：大阪へ異動することにしました。\n本題判定：錯誤。\n錯誤原因：自己決定語感。",
    "選項本義：大阪へ異動してほしいです。\n本題判定：錯誤。\n錯誤原因：希望他人。",
    "選項本義：大阪へ異動したがります。\n本題判定：錯誤。\n錯誤原因：第三者願望。"
  ],
  "BJT-EV143-047": [
    "選項本義：明日までに提出するようにお願いします。\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：明日までに提出になってください。\n本題判定：錯誤。\n錯誤原因：不成立。",
    "選項本義：提出していただきますかね。\n本題判定：錯誤。\n錯誤原因：不自然。",
    "選項本義：提出を見込みます。\n本題判定：錯誤。\n錯誤原因：預測不是請求。"
  ],
  "BJT-EV143-048": [
    "選項本義：弊社の田中が申しておりました。\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：弊社の田中部長がおっしゃいました。\n本題判定：錯誤。\n錯誤原因：抬高己方。",
    "選項本義：田中様が申されました。\n本題判定：錯誤。\n錯誤原因：「申される」混亂。",
    "選項本義：田中社長様が言いました。\n本題判定：錯誤。\n錯誤原因：敬稱過多。"
  ],
  "BJT-EV143-049": [
    "選項本義：恐れ入りますが、追加資料をお送りいただけますか。\n本題判定：正確。\n正解理由：自然。",
    "選項本義：恐れますので、送ってください。\n本題判定：錯誤。\n錯誤原因：用法不自然。",
    "選項本義：恐縮してください。\n本題判定：錯誤。\n錯誤原因：要求對方恐縮不合。",
    "選項本義：恐れ入られますが。\n本題判定：錯誤。\n錯誤原因：尊敬形不成立。"
  ],
  "BJT-EV143-050": [
    "選項本義：本日中にご確認いただけますでしょうか。\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：本日中に確認してもいいですか。\n本題判定：錯誤。\n錯誤原因：變成問自己許可。",
    "選項本義：本日中に確認いたしますか。\n本題判定：錯誤。\n錯誤原因：主體不明。",
    "選項本義：本日中に確認なさいます。\n本題判定：錯誤。\n錯誤原因：陳述尊敬語。"
  ],
  "BJT-EV143-051": [
    "選項本義：この会議室を使用してもよろしいでしょうか。\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：この会議室を使用していただけますか。\n本題判定：錯誤。\n錯誤原因：請對方使用。",
    "選項本義：この会議室を使用なさいますか。\n本題判定：錯誤。\n錯誤原因：詢問對方行為。",
    "選項本義：この会議室を使用しますでしょうか。\n本題判定：錯誤。\n錯誤原因：不自然。"
  ],
  "BJT-EV143-052": [
    "選項本義：こちらの案も検討してみてはいかがでしょうか。\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：こちらの案にしてください。\n本題判定：錯誤。\n錯誤原因：較直接。",
    "選項本義：こちらの案しかありません。\n本題判定：錯誤。\n錯誤原因：排他。",
    "選項本義：こちらの案を検討しろ。\n本題判定：錯誤。\n錯誤原因：命令。"
  ],
  "BJT-EV143-053": [
    "選項本義：開始時期は再検討が必要かと思います。\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：開始時期は絶対間違いです。\n本題判定：錯誤。\n錯誤原因：過強。",
    "選項本義：開始時期をやめろ。\n本題判定：錯誤。\n錯誤原因：命令。",
    "選項本義：開始時期は知りません。\n本題判定：錯誤。\n錯誤原因：無關。"
  ],
  "BJT-EV143-054": [
    "選項本義：先方から、納期を延ばしたいとのことです。\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：先方が納期を延ばしたいでしょう。\n本題判定：錯誤。\n錯誤原因：推測。",
    "選項本義：先方は納期を延ばしたがります。\n本題判定：錯誤。\n錯誤原因：第三者願望。",
    "選項本義：先方から納期を延ばすそうに見えます。\n本題判定：錯誤。\n錯誤原因：樣態混亂。"
  ],
  "BJT-EV143-055": [
    "選項本義：見た様子からの予測\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：人から聞いた伝聞\n本題判定：錯誤。\n錯誤原因：傳聞ではない。",
    "選項本義：許可\n本題判定：錯誤。\n錯誤原因：無關。",
    "選項本義：命令\n本題判定：錯誤。\n錯誤原因：無關。"
  ],
  "BJT-EV143-056": [
    "選項本義：14時に復旧する見込みです。\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：14時に復旧する絶対です。\n本題判定：錯誤。\n錯誤原因：不自然。",
    "選項本義：14時に復旧する予定だったに違いないです。\n本題判定：錯誤。\n錯誤原因：過度複雜且語意不同。",
    "選項本義：14時に復旧してください。\n本題判定：錯誤。\n錯誤原因：請求。"
  ],
  "BJT-EV143-057": [
    "選項本義：確認でき次第、ご連絡いたします。\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：確認できるまでに、ご連絡いたします。\n本題判定：錯誤。\n錯誤原因：截止語意。",
    "選項本義：確認しながら、ご連絡いたします。\n本題判定：錯誤。\n錯誤原因：同時進行。",
    "選項本義：確認を限りに、ご連絡いたします。\n本題判定：錯誤。\n錯誤原因：不成立。"
  ],
  "BJT-EV143-058": [
    "選項本義：社内利用に限り使用できます。\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：社内利用に伴い使用できます。\n本題判定：錯誤。\n錯誤原因：伴隨。",
    "選項本義：社内利用に反して使用できます。\n本題判定：錯誤。\n錯誤原因：違反。",
    "選項本義：社内利用につれて使用できます。\n本題判定：錯誤。\n錯誤原因：隨變化。"
  ],
  "BJT-EV143-059": [
    "選項本義：館内は禁煙となっております。\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：館内は禁煙してあげます。\n本題判定：錯誤。\n錯誤原因：施惠不合。",
    "選項本義：館内は禁煙になさいます。\n本題判定：錯誤。\n錯誤原因：尊敬主體錯。",
    "選項本義：館内は禁煙をいただきます。\n本題判定：錯誤。\n錯誤原因：不成立。"
  ],
  "BJT-EV143-060": [
    "選項本義：その時間で差し支えありません。\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：その時間で差し支えなければ。\n本題判定：錯誤。\n錯誤原因：條件句未完。",
    "選項本義：その時間を遠慮します。\n本題判定：錯誤。\n錯誤原因：語意不同。",
    "選項本義：その時間にご苦労です。\n本題判定：錯誤。\n錯誤原因：不自然。"
  ],
  "BJT-EV143-061": [
    "選項本義：館内での撮影はご遠慮ください。\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：館内での撮影はご遠慮なく。\n本題判定：錯誤。\n錯誤原因：意思相反。",
    "選項本義：館内で撮影していただきます。\n本題判定：錯誤。\n錯誤原因：要求拍攝。",
    "選項本義：館内で撮影してください。\n本題判定：錯誤。\n錯誤原因：要求拍攝。"
  ],
  "BJT-EV143-062": [
    "選項本義：ご都合はいかがでしょうか。\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：ご予定をください。\n本題判定：錯誤。\n錯誤原因：不自然。",
    "選項本義：都合を差し上げます。\n本題判定：錯誤。\n錯誤原因：方向錯。",
    "選項本義：ご都合を申します。\n本題判定：錯誤。\n錯誤原因：不自然。"
  ],
  "BJT-EV143-063": [
    "選項本義：可能でしたら、ご参加いただけますでしょうか。\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：必ず参加してください。\n本題判定：錯誤。\n錯誤原因：強制。",
    "選項本義：参加しなさい。\n本題判定：錯誤。\n錯誤原因：命令。",
    "選項本義：参加に違いありません。\n本題判定：錯誤。\n錯誤原因：推測。"
  ],
  "BJT-EV143-064": [
    "選項本義：お忙しいところ恐縮ですが、\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：忙しいので、\n本題判定：錯誤。\n錯誤原因：主語方向不明。",
    "選項本義：お忙しいことですから、\n本題判定：錯誤。\n錯誤原因：不自然。",
    "選項本義：忙しくしてください。\n本題判定：錯誤。\n錯誤原因：命令。"
  ],
  "BJT-EV143-065": [
    "選項本義：遅くとも金曜日までに提出してください。\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：金曜日ごろ提出してください。\n本題判定：錯誤。\n錯誤原因：大概時間。",
    "選項本義：金曜日から提出してください。\n本題判定：錯誤。\n錯誤原因：起點。",
    "選項本義：金曜日まで提出し続けてください。\n本題判定：錯誤。\n錯誤原因：持續語意。"
  ],
  "BJT-EV143-066": [
    "選項本義：来週月曜日でしたら対応可能です。\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：今週は絶対無理です。終わり。\n本題判定：錯誤。\n錯誤原因：沒有代案。",
    "選項本義：来週月曜日に対応してあげます。\n本題判定：錯誤。\n錯誤原因：施惠感。",
    "選項本義：対応は見込みですか。\n本題判定：錯誤。\n錯誤原因：疑問不合。"
  ],
  "BJT-EV143-067": [
    "選項本義：資料に目を通しておいて。\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：資料を見限っておいて。\n本題判定：錯誤。\n錯誤原因：放棄。",
    "選項本義：資料を見送っておいて。\n本題判定：錯誤。\n錯誤原因：暫緩。",
    "選項本義：資料を見極めておいて。\n本題判定：錯誤。\n錯誤原因：深入判斷。"
  ],
  "BJT-EV143-068": [
    "選項本義：ご高覧賜りますようお願い申し上げます。\n本題判定：正確。\n正解理由：過度正式。",
    "選項本義：ちょっと確認してもらえる？\n本題判定：錯誤。\n錯誤原因：同事自然。",
    "選項本義：確認お願いできますか。\n本題判定：錯誤。\n錯誤原因：可用。",
    "選項本義：これ見てもらえる？\n本題判定：錯誤。\n錯誤原因：口語可用。"
  ],
  "BJT-EV143-069": [
    "選項本義：これ、確認してもらえる？\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：こちらをご高覧賜りますでしょうか。\n本題判定：錯誤。\n錯誤原因：過度正式。",
    "選項本義：確認なさっていただきたい。\n本題判定：錯誤。\n錯誤原因：敬語混亂。",
    "選項本義：確認を申していただく。\n本題判定：錯誤。\n錯誤原因：搭配錯。"
  ],
  "BJT-EV143-070": [
    "選項本義：資料を送っていただきました。\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：資料を送ってあげました。\n本題判定：錯誤。\n錯誤原因：我方施惠。",
    "選項本義：資料を送りたがりました。\n本題判定：錯誤。\n錯誤原因：第三者願望。",
    "選項本義：資料を送らせました。\n本題判定：錯誤。\n錯誤原因：使役。"
  ],
  "BJT-EV143-071": [
    "選項本義：会議室までご案内いたします。\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：会議室まで案内してあげます。\n本題判定：錯誤。\n錯誤原因：施惠感。",
    "選項本義：会議室まで行きなさい。\n本題判定：錯誤。\n錯誤原因：命令。",
    "選項本義：会議室へどうでも。\n本題判定：錯誤。\n錯誤原因：不成立。"
  ],
  "BJT-EV143-072": [
    "選項本義：営業部に配属になりました。\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：営業部を配属しました。\n本題判定：錯誤。\n錯誤原因：主體錯。",
    "選項本義：営業部に配属してあげました。\n本題判定：錯誤。\n錯誤原因：施惠錯。",
    "選項本義：営業部が配属しました。\n本題判定：錯誤。\n錯誤原因：主體錯。"
  ],
  "BJT-EV143-073": [
    "選項本義：お花をお贈りくださいまして、ありがとうございます。\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：お花をお贈りしてあげまして。\n本題判定：錯誤。\n錯誤原因：施惠方向錯。",
    "選項本義：お花を拝見くださいまして。\n本題判定：錯誤。\n錯誤原因：見る用法。",
    "選項本義：お花をお贈り申しました。\n本題判定：錯誤。\n錯誤原因：己方行為。"
  ],
  "BJT-EV143-074": [
    "選項本義：ご伝言をお預かりいたします。\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：ご伝言を見送ります。\n本題判定：錯誤。\n錯誤原因：暫緩。",
    "選項本義：ご伝言を申し上げます。\n本題判定：錯誤。\n錯誤原因：說給上位者。",
    "選項本義：ご伝言をおっしゃいます。\n本題判定：錯誤。\n錯誤原因：對方說。"
  ],
  "BJT-EV143-075": [
    "選項本義：お名前を頂戴できますでしょうか。\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：お名前を差し上げますか。\n本題判定：錯誤。\n錯誤原因：給對方。",
    "選項本義：お名前を申し上げてください。\n本題判定：錯誤。\n錯誤原因：方向錯。",
    "選項本義：お名前を拝見しますか。\n本題判定：錯誤。\n錯誤原因：見る不是詢問姓名。"
  ],
  "BJT-EV143-076": [
    "選項本義：少々お電話が遠いようですが。\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：声が小さい！\n本題判定：錯誤。\n錯誤原因：太直接。",
    "選項本義：電話が遠方です。\n本題判定：錯誤。\n錯誤原因：字面理解錯。",
    "選項本義：もっと叫んでください。\n本題判定：錯誤。\n錯誤原因：失禮。"
  ],
  "BJT-EV143-077": [
    "選項本義：ただいま席を外しております。\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：ただいま退職しております。\n本題判定：錯誤。\n錯誤原因：變成離職。",
    "選項本義：ただいまお留守様です。\n本題判定：錯誤。\n錯誤原因：不自然。",
    "選項本義：ただいまいらっしゃいませんでした。\n本題判定：錯誤。\n錯誤原因：時態不合。"
  ],
  "BJT-EV143-078": [
    "選項本義：15時ごろ戻る予定でございます。\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：15時に絶対戻ります。\n本題判定：錯誤。\n錯誤原因：過度確定。",
    "選項本義：15時に戻るようです。\n本題判定：錯誤。\n錯誤原因：推測。",
    "選項本義：15時に戻りたがります。\n本題判定：錯誤。\n錯誤原因：願望。"
  ],
  "BJT-EV143-079": [
    "選項本義：担当の佐藤におつなぎいたします。\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：佐藤を差し上げます。\n本題判定：錯誤。\n錯誤原因：不成立。",
    "選項本義：佐藤がおつなぎになります。\n本題判定：錯誤。\n錯誤原因：主體錯。",
    "選項本義：佐藤をおっしゃいます。\n本題判定：錯誤。\n錯誤原因：無關。"
  ],
  "BJT-EV143-080": [
    "選項本義：お電話が切れてしまい、失礼いたしました。\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：お電話が切れてくださいました。\n本題判定：錯誤。\n錯誤原因：敬語方向錯。",
    "選項本義：お電話を切って差し上げました。\n本題判定：錯誤。\n錯誤原因：我方故意切斷。",
    "選項本義：お電話が切れる予定でした。\n本題判定：錯誤。\n錯誤原因：語意不同。"
  ],
  "BJT-EV143-081": [
    "選項本義：緊急の旨を担当者に伝える。\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：緊急の様を担当者に伝える。\n本題判定：錯誤。\n錯誤原因：字錯。",
    "選項本義：緊急の都合を担当者に伝える。\n本題判定：錯誤。\n錯誤原因：語意不同。",
    "選項本義：緊急の見当を担当者に伝える。\n本題判定：錯誤。\n錯誤原因：語意不同。"
  ],
  "BJT-EV143-082": [
    "選項本義：品番A-120でお間違いないでしょうか。\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：品番A-120を間違いましたか。\n本題判定：錯誤。\n錯誤原因：責怪語感。",
    "選項本義：品番A-120で間違いなさい。\n本題判定：錯誤。\n錯誤原因：命令。",
    "選項本義：品番A-120に違いないです。\n本題判定：錯誤。\n錯誤原因：斷言。"
  ],
  "BJT-EV143-083": [
    "選項本義：支払い条件\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：納品条件\n本題判定：錯誤。\n錯誤原因：交貨條件。",
    "選項本義：配属条件\n本題判定：錯誤。\n錯誤原因：人事。",
    "選項本義：閲覧条件\n本題判定：錯誤。\n錯誤原因：閱覽。"
  ],
  "BJT-EV143-084": [
    "選項本義：分納\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：欠品\n本題判定：錯誤。\n錯誤原因：缺貨。",
    "選項本義：返品\n本題判定：錯誤。\n錯誤原因：退貨。",
    "選項本義：検品\n本題判定：錯誤。\n錯誤原因：驗貨。"
  ],
  "BJT-EV143-085": [
    "選項本義：まだ採用決定ではない。\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：契約成立した。\n本題判定：錯誤。\n錯誤原因：過度推論。",
    "選項本義：必ず採用する。\n本題判定：錯誤。\n錯誤原因：過度推論。",
    "選項本義：断った。\n本題判定：錯誤。\n錯誤原因：也未必拒絕。"
  ],
  "BJT-EV143-086": [
    "選項本義：こちらも一案かと存じます。\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：これしかありません。\n本題判定：錯誤。\n錯誤原因：排他。",
    "選項本義：これにしろ。\n本題判定：錯誤。\n錯誤原因：命令。",
    "選項本義：これを差し上げます。\n本題判定：錯誤。\n錯誤原因：授受無關。"
  ],
  "BJT-EV143-087": [
    "選項本義：もう一度確認したほうがいいと思います。\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：もう一度確認しろ。\n本題判定：錯誤。\n錯誤原因：命令過強。",
    "選項本義：確認は禁止です。\n本題判定：錯誤。\n錯誤原因：相反。",
    "選項本義：確認なさっていただきたい。\n本題判定：錯誤。\n錯誤原因：敬語混亂。"
  ],
  "BJT-EV143-088": [
    "選項本義：別の見方もできるのではないでしょうか。\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：あなたは間違っています。\n本題判定：錯誤。\n錯誤原因：直接否定。",
    "選項本義：その話は禁止です。\n本題判定：錯誤。\n錯誤原因：無關。",
    "選項本義：絶対に違います。\n本題判定：錯誤。\n錯誤原因：過強。"
  ],
  "BJT-EV143-089": [
    "選項本義：納期に影響する可能性があります。\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：納期に必ず影響します。\n本題判定：錯誤。\n錯誤原因：過度確定。",
    "選項本義：納期に影響してください。\n本題判定：錯誤。\n錯誤原因：命令。",
    "選項本義：納期に影響したがります。\n本題判定：錯誤。\n錯誤原因：願望。"
  ],
  "BJT-EV143-090": [
    "選項本義：確認したところ、誤りはありませんでした。\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：確認しているところ、誤りでした。\n本題判定：錯誤。\n錯誤原因：進行中。",
    "選項本義：確認するところ、誤りです。\n本題判定：錯誤。\n錯誤原因：開始前。",
    "選項本義：確認ところ、誤りです。\n本題判定：錯誤。\n錯誤原因：接續錯。"
  ],
  "BJT-EV143-091": [
    "選項本義：現時点では未確認です。\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：永遠に未確認です。\n本題判定：錯誤。\n錯誤原因：過度。",
    "選項本義：絶対未確認です。\n本題判定：錯誤。\n錯誤原因：語意不自然。",
    "選項本義：未確認に違いありません。\n本題判定：錯誤。\n錯誤原因：推測。"
  ],
  "BJT-EV143-092": [
    "選項本義：確認後、改めてご報告します。\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：確認後、なにぶんご報告します。\n本題判定：錯誤。\n錯誤原因：畢竟。",
    "選項本義：確認後、きっかりご報告します。\n本題判定：錯誤。\n錯誤原因：準確時刻。",
    "選項本義：確認後、さっぱりご報告します。\n本題判定：錯誤。\n錯誤原因：清爽/完全不。"
  ],
  "BJT-EV143-093": [
    "選項本義：先方から延期したいとの連絡がありました。\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：先方は延期したに違いありません。\n本題判定：錯誤。\n錯誤原因：推測過強。",
    "選項本義：先方を延期しました。\n本題判定：錯誤。\n錯誤原因：主體錯。",
    "選項本義：先方が延期してあげました。\n本題判定：錯誤。\n錯誤原因：授受錯。"
  ],
  "BJT-EV143-094": [
    "選項本義：保留・検討中として扱う。\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：決定済みとする。\n本題判定：錯誤。\n錯誤原因：過度解讀。",
    "選項本義：契約成立とする。\n本題判定：錯誤。\n錯誤原因：過度解讀。",
    "選項本義：拒否確定とする。\n本題判定：錯誤。\n錯誤原因：也未必拒絕。"
  ],
  "BJT-EV143-095": [
    "選項本義：別の側面を対照的に示す。\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：原因を示す。\n本題判定：錯誤。\n錯誤原因：不是因果。",
    "選項本義：命令を示す。\n本題判定：錯誤。\n錯誤原因：不是命令。",
    "選項本義：過去を示す。\n本題判定：錯誤。\n錯誤原因：不是時態。"
  ],
  "BJT-EV143-096": [
    "選項本義：ですが以後の内容\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：確かにだけ\n本題判定：錯誤。\n錯誤原因：不完整。",
    "選項本義：Aだけ\n本題判定：錯誤。\n錯誤原因：不完整。",
    "選項本義：敬語の長さ\n本題判定：錯誤。\n錯誤原因：無關。"
  ],
  "BJT-EV143-097": [
    "選項本義：前の内容を要約・言い換えする。\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：禁止する。\n本題判定：錯誤。\n錯誤原因：無關。",
    "選項本義：尊敬語にする。\n本題判定：錯誤。\n錯誤原因：無關。",
    "選項本義：数量を増やす。\n本題判定：錯誤。\n錯誤原因：無關。"
  ],
  "BJT-EV143-098": [
    "選項本義：A案で来月開始するということでよろしいでしょうか。\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：A案に違いありません。\n本題判定：錯誤。\n錯誤原因：斷言。",
    "選項本義：A案を始めたがります。\n本題判定：錯誤。\n錯誤原因：願望。",
    "選項本義：A案を見込みます。\n本題判定：錯誤。\n錯誤原因：不自然。"
  ],
  "BJT-EV143-099": [
    "選項本義：納期を延ばしていただければ、対応可能です。\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：納期を延ばしても、対応しません。\n本題判定：錯誤。\n錯誤原因：相反。",
    "選項本義：納期を延ばすに違いありません。\n本題判定：錯誤。\n錯誤原因：推測。",
    "選項本義：納期を延ばしてくださいでした。\n本題判定：錯誤。\n錯誤原因：不成立。"
  ],
  "BJT-EV143-100": [
    "選項本義：運用コストに懸念がある。\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：運用コストが確定した。\n本題判定：錯誤。\n錯誤原因：不是。",
    "選項本義：運用コストを禁止する。\n本題判定：錯誤。\n錯誤原因：不是。",
    "選項本義：運用コストが無料だ。\n本題判定：錯誤。\n錯誤原因：不是。"
  ],
  "BJT-EV143-101": [
    "選項本義：かなり強い確信\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：単なる可能性\n本題判定：錯誤。\n錯誤原因：比可能性強。",
    "選項本義：許可\n本題判定：錯誤。\n錯誤原因：不是。",
    "選項本義：依頼\n本題判定：錯誤。\n錯誤原因：不是。"
  ],
  "BJT-EV143-102": [
    "選項本義：現時点では納期が延びる可能性があります。\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：納期は絶対延びます。\n本題判定：錯誤。\n錯誤原因：過度斷言。",
    "選項本義：納期は必ず延びます。\n本題判定：錯誤。\n錯誤原因：過度斷言。",
    "選項本義：納期延長は100％確定です。\n本題判定：錯誤。\n錯誤原因：過度斷言。"
  ],
  "BJT-EV143-103": [
    "選項本義：耳が痛い\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：頭が高い\n本題判定：錯誤。\n錯誤原因：傲慢。",
    "選項本義：口が軽い\n本題判定：錯誤。\n錯誤原因：多嘴。",
    "選項本義：腰が低い\n本題判定：錯誤。\n錯誤原因：謙虛。"
  ],
  "BJT-EV143-104": [
    "選項本義：損益分岐点\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：固定費\n本題判定：錯誤。\n錯誤原因：成本種類。",
    "選項本義：変動費\n本題判定：錯誤。\n錯誤原因：成本種類。",
    "選項本義：粗利益\n本題判定：錯誤。\n錯誤原因：利益概念。"
  ],
  "BJT-EV143-105": [
    "選項本義：棚卸し\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：分納\n本題判定：錯誤。\n錯誤原因：分批交貨。",
    "選項本義：検品\n本題判定：錯誤。\n錯誤原因：驗貨。",
    "選項本義：見積り\n本題判定：錯誤。\n錯誤原因：報價。"
  ],
  "BJT-EV143-106": [
    "選項本義：即戦力\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：新卒\n本題判定：錯誤。\n錯誤原因：新畢業生。",
    "選項本義：見習い\n本題判定：錯誤。\n錯誤原因：學徒。",
    "選項本義：引率者\n本題判定：錯誤。\n錯誤原因：帶隊者。"
  ],
  "BJT-EV143-107": [
    "選項本義：手間を省ける\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：手間が増える\n本題判定：錯誤。\n錯誤原因：相反。",
    "選項本義：足を運ぶ\n本題判定：錯誤。\n錯誤原因：親自前往。",
    "選項本義：二の足を踏む\n本題判定：錯誤。\n錯誤原因：猶豫。"
  ],
  "BJT-EV143-108": [
    "選項本義：売り込む\n本題判定：正確。\n正解理由：正しい。",
    "選項本義：見送る\n本題判定：錯誤。\n錯誤原因：暫緩。",
    "選項本義：棚卸しする\n本題判定：錯誤。\n錯誤原因：盤點。",
    "選項本義：引き落とす\n本題判定：錯誤。\n錯誤原因：自動扣款。"
  ]
};
  const existing=new Set((window.BJT_QUESTIONS||[]).map(q=>q.id));
  for(const q of questions){if(!existing.has(q.id)){window.BJT_QUESTIONS.push(q);existing.add(q.id)}}
  window.BJT_OPTION_DETAILS=window.BJT_OPTION_DETAILS||{};
  for(const [id,arr] of Object.entries(details))window.BJT_OPTION_DETAILS[id]=arr;
})();
