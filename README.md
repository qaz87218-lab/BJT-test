# BJT Deep Practice v13.9 — Book Library / 模擬分冊

## v13.9 修正重點

- 讀解原題 98 題改為「冊 → Section → 題目」：第1冊、第2冊、第3冊各 30 題；剩餘 8 題獨立為「未編冊真題」。未來新增但尚未正式編冊的原題會自動進入未編冊區。
- 每冊讀解皆維持 10 題語彙・文法＋10 題表現讀解＋10 題綜合讀解；第3冊依題目功能重新編排，BJT-O-0096 編入表現讀解。
- 原題每冊支援完整 30 題模擬、整冊隨機，以及各 Section 的順序／隨機練習。
- 聽力 75 題改為分冊入口：最初 10 題獨立保留；BJT J+ 02 的 65 題設為「第1冊」。
- 聽力第1冊點入後保留既有 Part／Section，可做完整 65 題、單一 Section、本冊隨機 20 題或未作答題。
- 預留聽力第2冊、第3冊位置，未匯入前顯示為停用卡片；未來可直接掛接新 collection。
- 不修改 data.js、listening_data.js、答案、原題 ID、圖片、音檔、typed choices、詳解與 localStorage key。
- Service Worker cache 更新為 `bjt-deep-v13-9-book-library-20260918`。

## 歷史版本

# BJT Deep Practice v13.8.1 — Context Understanding Cleanup

本版以 v13.7 Typed Choices PATCH V3.1 RC1 為基底，修正「有 passage 的題目只翻譯 stem，卻沒有解釋情境／前文」的結構性問題。


## v13.8.1 修正重點

- 實用商務 200 題的 stem 全為通用問句「最も適切な対応・理解はどれですか。」；在已有完整情境理解後，不再重複顯示「問題理解」卡片。
- 這 200 題仍保留題目本身的 stem，作答介面不變；只移除沒有額外學習價值的重複解說。
- 非實用商務題仍依原邏輯保留 QUESTION UNDERSTANDING，例如期限、原因、主旨、第一步、人物／行動等真正有資訊量的問題。
- Service Worker cache 更新為 `bjt-deep-v13-8-1-context-cleanup-20260918`，確保 GitHub Pages 更新後載入新版 `app.js`。

## v13.8 修正重點
- 新增 `scenario_understanding.js`，不改寫原始 `data.js`。
- 416 題中 248 題含 `passage`：200 題實用商務使用獨立情境中文；另外 48 題文章／閱讀題沿用 `article_details.js` 的 `translation_zh_tw`。
- 解題區正式拆為 `CONTEXT UNDERSTANDING`（情境／前文理解）＋ `QUESTION UNDERSTANDING`（問題理解）。
- 實用商務題新增：情境中文、人物／角色提示（僅能由題目支持時顯示）、章節情境焦點、溝通任務，以及把情境條件帶入四選項的判斷說明。
- 保留 v13.7 的 Typed Choices V3.1、題號、答案、圖片、音檔、localStorage key 與既有學習資料。
- Service Worker cache 更新為 `bjt-deep-v13-8-context-understanding-20260918`，並納入 `scenario_understanding.js`。

---

## Previous baseline: v13.7 — Typed Choices PATCH

本版以 v13.6 LISTENING LEARNING v3 為基底，套用使用者提供的 `BJT_Jplus02_QPACK_v3_1_typed_choices_PATCH`。

- 僅更新 BJT J+ 02｜第2部 聴読解・Section 1 的 Q01～Q15 作答區。
- 原題圖片與音檔完整保留。
- 圖片下方新增 ①～④ 清晰文字選項，共 60 個 typed choices。
- 文字內容逐字採用 PATCH 的 `test.choices[].text`；不 OCR、不改寫、不重新生成。
- 選項永遠依 `originalIndex` 1→4 顯示。
- `listening_data.js` 與 `listening_learning_v3.js` 不修改，確保題號、音檔、圖片、正解與 Learning / Review 向後相容。
- 作答前只顯示正式作答資料；逐字稿、讀音、繁中翻譯、文法／語用解析仍在作答後解鎖。

---

# BJT Deep Practice v13.6 — LISTENING LEARNING v3 RC1

本版將使用者提供的 `BJT_Jplus02_QPACK_v3_learning_PATCH` 匯入既有 65 題 BJT J+ 02 聽力／聽讀解題庫。

- 原 65 題 ID、題號、題目順序、音檔路徑、圖片路徑、正解、originalIndex 均不改動。
- 正式作答前不顯示逐字稿、讀音、翻譯或解析。
- 作答後解鎖：正解、日文原始逐字稿、漢字＋括號平假名讀音、繁中翻譯、四選項完整解析。
- `grammarExplanation` 與 `analysisType` 使用來源資料內容，不自行濃縮或改寫。
- Learning 欄位為 optional；缺欄位時對應區塊不顯示，不造成 crash。
- 原 10 題深度解析聽力維持原有格式。
- `bjtDeepStateV1` 不變，既有答題／熟練度／EXP／稱號／Boss 紀錄沿用。

---

# v13.5 Question Understanding

本版在 v13.4 Question Mastery Engine 基礎上新增「題幹理解層」，不重寫既有題庫與答案。

## 主要更新
- 416 題文字／閱讀／實用商務題均可取得題幹繁中意思；空格題保留空格，不提前洩漏正解。
- 作答後解析順序改為：題幹原文 → 題幹中文 → 真正判斷目標 → 題幹關鍵詞／陷阱 → 核心解析 → 四選項詳解。
- 針對「最も適切」「まず／最初」「いつまで」「理由」「用件／趣旨／目的」、複合條件與必看圖片題提供不同的解題提醒。
- 解析區新增手機用快速跳轉：題幹理解／核心解析／四選項。
- 文章詳解的對應題目區也加入題幹理解。
- 65 題僅有答案表的聽力／聽讀解仍不虛構不存在的逐字稿；既有 10 題深度聽力維持原資料品質。
- 保留 v13.4 的 Question Mastery、正確／錯誤累計、★★★★★ 完成規則與既有 localStorage `bjtDeepStateV1`。
- Service Worker core/media cache 更新為 v13.5，並將 `question_understanding.js` 納入核心快取。

## v13.4 Question Mastery Engine（前版）
- 新增「刷題完成率」：每一題累積答對 **5 次**即視為 ★★★★★ MASTERED；完成率以 0.1% 精度顯示。
- 完成率直接沿用既有 `bjtDeepStateV1` 的每題 `correct`／`wrong` 歷史，不重置舊紀錄。
- 每題顯示累積正確次數、錯誤次數、0～5 星熟練進度，以及距離完成還差幾次正解。
- Dashboard 分別顯示真題／原題、延伸題、實用商務、聽力／聽讀解四類熟練度，並提供全題庫總熟練度。
- 刷題首頁與聽力首頁新增熟練度篩選：未完成、差 1 次、0 次正解、已完成、高錯誤（答錯 3 次以上）。
- 題目一覽加入 ★★★★★ 熟練顯示。
- 第一次由 4 次正解提升到 5 次時觸發 QUESTION/LISTENING MASTERED，僅一次 +5 EXP；之後仍持續累積正確／錯誤次數。
- `streak` 不再作為題目完成判定，只保留給間隔複習排程使用。
- Quick Check 不納入刷題完成率，因既有資料只保存課程層級分數，沒有每個小題的歷史正誤次數。
- Service Worker cache 更新為 v13.4。

# v13.3 Privacy + Quick Check UX

- Quick Check 選答案不再整頁重繪，避免手機畫面亂跳；送出／重新作答後固定回到 Quick Check 區。
- 清除使用者公司與內部人員名稱：以虛構公司「青葉リンク」及通用虛構姓名替代。
- 非視覺必須的 QPACK 題不再依賴原始截圖；O016／O022 必看圖仍完整保留。
- 既有題目 ID、答案、EXP、localStorage key 與 75 題聽力媒體均不變。

# BJT 深度學習刷題 App — v13.3 PRIVACY + QUICK CHECK UX

## v13.2：課程連續學習 + 一鍵返回大項首頁
- 系統學習每一課新增「上一課／回系統學習／下一課」導覽。
- Quick Check 通過後直接顯示「下一課 →」，不用回模組列表再找下一課。
- 最後一課改為「完成全部課程・回系統學習」。
- 一般刷題進行中新增常駐「回刷題選擇」按鈕；從系統課程、實用商務或 BJT BATTLE 進入時，會自動改成回到正確的大項。
- 聽力／聽讀解作答中新增常駐「回聽力題庫」按鈕，一鍵回到 75 題／6 題組的選擇首頁。
- 已作答進度仍即時寫入既有 `bjtDeepStateV1`；返回大項不會刪除已保存的答題紀錄。
- 既有 416 題文字題、75 題聽力、65 組新媒體與 10 題深度解析聽力資料不變。
- Service Worker core/media cache 更新為 v13.2 navigation 版本。

## v13.1：65 題 BJT J+ 02 擴充
- 新增 `BJT_JPLUS02_QPACK_V2` 共 **65 題**；既有 10 題深度解析聽力完整保留，聽力總量成為 **75 題**。
- 新 65 題依來源原始結構分成 5 個獨立題組：
  - 第1部「聴解テスト」Section 1：10 題
  - 第1部「聴解テスト」Section 2：10 題
  - 第1部「聴解テスト」Section 3：15 題
  - 第2部「聴読解テスト」Section 1：15 題
  - 第2部「聴読解テスト」Section 2：15 題
- App 首頁將新題組依「第1部／第2部」分區，不把 65 題混成一張超長清單。
- 65 題皆保留獨立 MP3、`images_clean` 題目圖片與由影片答案表驗證的正解；App 不部署 `source_raw` 原始稽核畫面。
- 新題資料沒有可直接驗證的完整逐字稿、翻譯或逐項詳解，因此標記為「正解已驗證」；App **不使用 ASR 猜測逐字稿，也不捏造解析**。
- 既有 10 題仍標記「深度解析」，答題後保留發話選項、繁中解釋、四選項解析與來源解說。
- 新增全聽力題庫操作：全題庫隨機 20 題、全題庫未作答、全題庫錯題、全題庫到期複習。
- 聴読解題目明確提示「題目圖中的文字／表格／文件 + 音檔」都屬於作答資訊；圖片未載入或音檔未播放前不開放作答。
- 每個題組仍固定使用原始 1～4 索引，不受一般刷題選項 Shuffle 影響。
- `localStorage` 仍為 `bjtDeepStateV1`；原本 EXP、Level、稱號、Boss、416 題文字題與既有 10 題聽力進度不重置。
- 聽力媒體仍採 runtime cache，用到哪一題才快取哪一題，避免新增約 45MB 音訊後拖慢首次載入。
- Service Worker cache 更新為 `bjt-deep-v13-1-listening-75q-20260915`。

## 目前資料規模
- 文字／閱讀／實用商務題：416 題
- 聽力／聽讀解真題：**75 題（6 題組）**
  - 深度解析：10 題
  - 正解已驗證：65 題
- 知識卡：118
- 文章詳解：48
- 系統學習：8 模組、50 課、100 Quick Check

---


## v13 media clean update
- Replaced all 10 Section 2 listening question images with logo-cleaned versions.
- Question content, audio, answers, explanations, IDs, progress storage, and reference answer images are unchanged.
- Service Worker core/media cache names were bumped so previously cached question images are refreshed after deployment.
## v13 新增
- 正式新增「🎧 聽力題庫」，目前匯入 `BJT_JPLUS_SECTION2_001` 共 10 題 J+ 看圖聽解真題。
- 每題完整保留：題目圖片、MP3 音檔、四個發話選項、正解、繁中解析、四選項解析、核心知識與原始答案參考頁。
- Section 2 作答前**不顯示選項文字**，只顯示 1～4；必須先播放音檔才可作答，且選項順序永遠固定，不受一般題庫的 shuffle 設定影響。
- 聽力進度獨立記錄：作答、正確率、初聽正解、重聽後正解、播放次數、錯題與到期複習；EXP／Combo／Daily Quest 仍與整體角色系統共用。
- 聽力詳解明確標示「發話選項」，不把只有四個選項文字的資料冒充成完整逐字稿。
- 對 Q01/Q02/Q03/Q06/Q07/Q08/Q09 的教學說明做保守校閱：保留來源正解，但避免把單題判斷擴張成所有商務情境的絕對規則；來源原始日文解說仍保留。
- 系統學習的 `listeningIds` 正式啟用，只把語義上明確相關的聽力題連到 M02～M04 對應課程，定位為「相關練習推薦」。
- 最新功能標記改為單一控制：目前只有「聽力題庫」顯示 `NEW`；舊功能不再同時掛 NEW。
- O016（損益分岐點）與 O022（4 社業績）保留 `visual_required`，並升級為「必看圖表」提示＋全螢幕圖片 Viewer，可放大查看。
- 所有題目圖片與聽力圖片都可點擊全螢幕查看；聽力原始答案頁只在作答後出現。
- Service Worker 改為 core cache + listening media runtime cache：App 本體預快取，MP3／聽力圖片使用後才快取，避免未來題庫增大時首次載入過重。
- `localStorage` key 仍為 `bjtDeepStateV1`，原本答題、EXP、等級、稱號、Boss 與課程紀錄全部沿用。

## 目前資料規模
- 文字／閱讀／實用商務題：416 題（98 原題 + 118 延伸 + 200 實用商務）
- 聽力真題：10 題（1 題組）
- 知識卡：118
- 文章詳解：48
- 系統學習：8 模組、50 課、100 Quick Check

---


## v12.3 新增
- 校閱來源包 `QPACK_BJT_20260914_THREAD_FULL` 共 25 道真題。
- 偵測到 O001 與既有 `BJT-O-0074` 完全重複，因此不重複入庫；改為補上來源追蹤。
- 正式新增 24 道原題：`BJT-O-0075` ～ `BJT-O-0098`。
- 題庫總量：416 題＝98 原題 + 118 延伸 + 200 實用商務。
- 新增 15 篇完整文章詳解；文章詳解總量由 33 增為 48。
- 24 道新題皆有四選項獨立詳解，共新增 96 個選項詳解；全庫共 1,664 個選項詳解。
- 原題截圖 25 張完整保存在 `assets/qpack_20260914/`；其中 O016（損益分岐點）與 O022（4 社業績）為解題必要圖，已直接連動題目並加入離線快取。
- 新題已加入適合的系統課程／BJT BATTLE 模組作為「相關練習推薦」，不宣稱唯一一對一考點。
- `localStorage` key 仍為 `bjtDeepStateV1`，既有答題、EXP、稱號、Boss 與課程進度不會因更新而清除。

## 本次校閱要點
- O003 正解 ④「外出しております」與原圖一致。
- O008 正解 ②「耳」與原圖一致。
- O016 / O022 以原始圖表人工確認，答案與圖表關係一致。
- O007 的「お伺いいたします」補充敬語精度：文化廳《敬語の指針》把「お伺いする／お伺いいたす」列為已習慣定著、可接受的二重敬語形式，不能一律判錯。
- O021 的繁中翻譯已消除中日文混雜，統一成繁體中文。

---

# BJT 深度學習刷題 App

這是一個純前端、免安裝依賴的 BJT 商務日語學習 App。

## 功能
- 📚 系統學習：8 模組、50 課、100 題 Quick Check，並連到現有題庫／知識卡／文章
- 原題重現：收錄本次對話中的 BJT 題型與考點
- 閱讀題完整前文：閱讀類原題會先顯示完整文章／郵件／通知，再顯示問題與選項
- 118 個核心知識點：保留原 98 張卡，另新增 20 張實用商務整合卡
- 高辨識度延伸題：不再使用「把其他知識點例句隨機混入」的低價值題型；每題干擾選項改為同一語義、同一敬語方向或同一文法家族內的可混淆項
- 綜合隨機練習
- 錯題複習 / 收藏題
- 知識卡與個人筆記
- 本機儲存進度（localStorage）
- 可匯出 / 匯入學習紀錄
- PWA：部署到 HTTPS 後可安裝到手機桌面

## 使用方式
最簡單：用瀏覽器開啟 `index.html`。

若瀏覽器限制 Service Worker，可用任意靜態伺服器，例如：

```bash
python -m http.server 8000
```

然後開啟 http://localhost:8000

## 部署
整個資料夾可直接丟到 Vercel / Netlify / GitHub Pages。

## 2026-09-07 v3 修正
- 修正閱讀理解題缺少前文的問題：原始閱讀題保留完整文章／郵件／通知。
- 移除 142 題低鑑別度的自動延伸題（原先是「定義題＋把不同知識點例句混在一起」）。
- 重新製作 71 題逐知識點應用題，所有核心知識點至少有 1 題專門延伸題。
- 保留 20 題原本已有實際辨析價值的延伸題。
- 延伸題共 91 題；原題／原題型 55 題；總題數 146 題。
- 新延伸題的錯誤選項改為同一敬語系統、相近文法、近義詞或同情境選項，避免答案一眼可見。

## 2026-09-07 v4：選項級詳解
- 答錯後，立即顯示「你選的這個選項為什麼不行」，並標註錯因類型，例如：敬語方向錯誤、固定搭配不存在、文法功能不符、文章焦點誤讀。
- 新增「詳解四個選項」按鈕：答題後可展開四個選項逐一查看意思、使用場合與本題為何可／不可使用。
- 55 題原題／原題型的 220 個選項均加入逐項人工解析；延伸題則依敬語、文法、近義詞、閱讀等類型提供選項級解釋與相關用法提示。
- 選項隨機後仍會追蹤原始選項索引，確保答錯解析不會對錯選項。
- Service Worker 快取升級為 v4，避免部署後仍載入舊版腳本。

## 2026-09-08 v5：維護基礎／QPACK
- 題庫內容與既有題目 ID 不變；localStorage key 仍為 `bjtDeepStateV1`。
- 「今日作答」改以 `Asia/Tokyo` 日界線計算；跨午夜保持 App 開啟也會自動重置到新的一天。
- Service Worker cache 更新為 v5。
- 新增 QPACK 圖片／表格資產顯示區塊；匯入後的資產可加入 PWA 預快取。
- canonical DATA 改由 `DATA/current_manifest.json` 指定。
- 開發包提供 QPACK validator/importer 與完整 integrity test，避免 passage、option explanation、ID、cache 等已修問題回歸。


## 2026-09-08 v6：THREAD02 題庫整合
- 正式匯入 8 題新原題與 15 題 targeted extensions。
- 題庫目前為 169 題：63 原題 + 106 延伸；knowledge points 共 86。
- 新 knowledge points 全部至少有一題專門延伸覆蓋。
- 23 題新匯入題均有四選項逐項解析；原題逐項解析覆蓋提升至 63 題／252 選項。
- 新原題 ID：`BJT-O-0056`～`BJT-O-0063`；新延伸 ID：`BJT-E-0001`～`BJT-E-0015`。
- 既有 localStorage key `bjtDeepStateV1` 與舊題 ID 完全保留。
- THREAD02 的原始來源圖未隨附件提供，因此本版使用完整 passage 顯示，不建立虛假的 asset 對應。
- Service Worker cache 更新為 v6。


## 2026-09-08 v7：DETAIL3 PART1 題庫整合
- 新增 11 題原題、12 個新 knowledge points、12 題 targeted extensions；1 題重複原題未重複匯入。
- 題庫成為 192 題：74 原題 + 118 延伸；knowledge points 共 98。
- Service Worker cache 更新為 v7。

## 2026-09-08 v8：知識卡完整性修正
- 修正 `KP-T02-0001`～`KP-T02-0015` 共 15 張知識卡缺少讀音、例句與易混點的問題。
- 目前 98 張知識卡的讀音、摘要、詳解、例句、易混點均完整。
- 題目數量、題目 ID 與學習進度完全不變。
- Service Worker cache 更新為 v8。


## 2026-09-08 v9：完整選項詳解＋文章詳解
- 題庫維持 98 knowledge / 192 questions / 74 original / 118 extension。
- 192/192 題均有獨立四選項詳解，共 768 個 option details；不再用 generic runtime fallback 代替缺漏資料。
- 每個選項解析均說明「選項本義」與「本題判定」，並提供正解理由或錯誤原因。
- 左側新增「文章詳解」，集中收錄 33 篇 passage 題。
- 文章詳解包含原文＋讀音輔助、繁中翻譯、文章目的、資訊結構、關鍵判讀、陷阱、解題策略、重要詞彙讀音、對應題目與四選項詳解。
- 正文主要漢字／重要詞彙以括號假名輔助；來源未提供正式讀音的專有名詞不強行猜測。
- 98 張知識卡必要欄位完整。
- Service Worker cache 更新為 v9。


## 2026-09-11 v10：實用商務課程
- 新增 200 題、10 章的「實用商務」獨立課程。
- 200 題同時可依設定加入綜合練習。
- 新增 20 張整合型知識卡，避免 151 個零碎 coreKnowledge 直接膨脹。
- 800 個選項皆有獨立選項本義 + 正誤理由。
- 實用商務情境與選項加入括號假名輔助；原始資料未提供正式讀音的專有名詞不強行視為考試事實。
- 題庫總量為 392 題：74 原題 + 118 延伸 + 200 實用商務。
- 原 v9 的 192 題、98 張知識卡、768 個既有選項詳解與 33 篇文章詳解均原樣保留。
- Service Worker cache 更新為 v10。


## 2026-09-14 v11：系統學習課程
- 新增「📚 系統學習」：8 模組、50 課、100 題 Quick Check。
- Lesson Database 使用 MERGED v2：四軸判讀、敬語五分類、委託／拒絕／謝罪、電話、聽解、聽讀解、讀解、高階語用與 30 日循環。
- 每課包含學習目標、核心規則、例句讀音／中文切換、常見陷阱、BJT 高價值線索、判斷流程與深度講義整合內容。
- 新增課程掌握狀態：未開始 → 學習中 → 已閱讀 → 已理解 → 能應用 → 已掌握。
- Quick Check 通過後安排 48 小時重做；對應題庫表現會回饋「能應用／已掌握」。
- 對應題庫、知識卡與文章只使用目前 App 實際存在的 ID；在 UI 中定位為相關練習推薦。
- 答錯後可自行標記錯因：人物關係、敬語、否定、資訊變更、數字、意圖、詞彙、文法、下一步、條件、速度。
- 保留既有 392 題、118 張知識卡、33 篇文章詳解、200 題實用商務與 localStorage key `bjtDeepStateV1`。
- Service Worker cache 更新為 v11。

## 2026-09-14 v12：QUEST／RPG 成長系統
- 刷題加入「上一題／下一題／題目一覽」：可自由跳題，未作答不自動判錯；返回已答題會保留原選項順序、作答結果與解析。
- 新增 EXP／Lv.1–100／主位階稱號。Level 只代表 App 內有效學習累積，不冒充 BJT 官方 J1/J1+ 成績。
- 新增「異名」系統：Boss、Combo、錯題復仇、到期複習、連續學習等特殊條件可解鎖，並可自由裝備。
- 新增「🏆 稱號殿堂」：主位階進化線、Boss 異名、稀有／史詩／傳說／神話與隱藏異名。
- 新增「⚔️ BJT BATTLE」：M01–M08 八大領域 Boss，各自從對應模組題庫抽題；答對造成傷害，Combo 提高倍率。八 Boss 全破後解鎖 Final Boss「無名之境」。
- 新增 Combo：答對累積，答錯歸零；保留歷史最高 Combo，並可解鎖特殊異名。
- 新增 Daily Quest：每日刷題 10 題、答對 8 題、Quick Check 1 回，完成後 +30 EXP。
- 新增學習 EXP：首次答對、錯題復仇、到期複習、課程閱讀、Quick Check、文章學習、完整題組與 Boss Clear 均有對應獎勵；同一題的「首次答對 EXP」不可重複刷取。
- 舊 v11 使用者升級後會依既有作答與課程進度進行一次性 v12 EXP 遷移，保留原本 localStorage key `bjtDeepStateV1`。
- Service Worker cache 更新為 v12，並新增 `game_data.js`。


## 2026-09-14 v12.1：稱號防劇透
- 所有尚未取得的主位階名稱在介面統一顯示為 `????`，只保留解鎖 Level。
- 所有尚未取得的特殊異名統一顯示為 `????`，並隱藏描述、稀有度與來源分類，取得後才揭曉。
- Boss 未擊破前不顯示專屬擊破異名。
- 首頁「下一位階」不再預告稱號名稱。
- 已取得稱號、升級／解鎖演出與裝備功能維持不變。
- Service Worker cache 更新為 `bjt-deep-v12-1`。


## 2026-09-14 v12.2：手機導覽＋稱號圖鑑 UI
- 系統學習的單課頁新增「本課導覽」：可直接跳到學習目標、核心規則、例句、常見錯誤、深度講義、Quick Check、判斷流程、BJT 線索、知識卡、文章與題庫應用。
- 本課導覽採 sticky 橫向按鈕列；手機另可開啟 Bottom Sheet「本課目錄」，免一直滑到頁面底部。
- 深度講義若原本收合，從目錄跳轉時會自動展開。
- 稱號殿堂改為圖鑑式方格；桌機 5 欄、平板 4 欄、手機 3 欄、極窄畫面 2 欄。
- 主位階與特殊異名皆可點擊方格查看詳情；未取得稱號仍以 `????` 完全防劇透，不顯示名稱、稀有度或解鎖條件。
- 異名圖鑑新增「全部 / BOSS / 特殊 / 隱藏」篩選；已取得異名可在詳情視窗直接裝備或卸下。
- Boss 卡片在手機維持 2 欄顯示，減少長頁面滑動。
- 不變更 localStorage key（仍為 `bjtDeepStateV1`），既有答題、EXP、等級、稱號、Boss 與課程進度全部沿用。
- Service Worker cache 更新為 `bjt-deep-v12-2`。
