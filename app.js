(() => {
  const KNOW = window.BJT_KNOWLEDGE || [];
  const QUESTIONS = window.BJT_QUESTIONS || [];
  const OPTION_DETAILS = window.BJT_OPTION_DETAILS || {};
  const ARTICLE_DETAILS = window.BJT_ARTICLE_DETAILS || {};
  const BUSINESS_COURSE = window.BJT_BUSINESS_COURSE || {chapters:[]};
  const LESSON_DB = window.BJT_LESSON_DB || {modules:[],lessons:[]};
  const GAME = window.BJT_GAME_CONFIG || {mainTitles:[],bosses:[],specialTitles:[]};
  const LISTENING_PACKS = window.BJT_LISTENING_PACKS || [];
  const LISTENING_QUESTIONS = window.BJT_LISTENING_QUESTIONS || [];
  const STEM_ZH_BY_ID = window.BJT_STEM_ZH_BY_ID || {};
  const STEM_ZH_BY_STEM = window.BJT_STEM_ZH_BY_STEM || {};
  const SCENARIO_UNDERSTANDING_BY_ID = window.BJT_SCENARIO_UNDERSTANDING_BY_ID || {};
  const ROLE_HINT_FOR_QUESTION = window.BJT_ROLE_HINT_FOR_QUESTION || (()=>'');
  const LQMAP = Object.fromEntries(LISTENING_QUESTIONS.map(q=>[q.id,q]));
  const LATEST_FEATURE='listening';
  // v14.1.1 — 第3冊 65 題媒體重新對齊：以原始音檔停頓邊界重切 MP3，並依同步影片重擷取逐題題圖。
  const ORIGINAL_ORDER = QUESTIONS.filter(q=>q.source==='原題').map(q=>q.id);
  const ORIGINAL_READING_BOOKS = [
    {id:'READING_BOOK_01',order:1,title:'第1冊',subtitle:'BJT 讀解模擬',sections:[
      {id:'S1',title:'Section 1｜語彙・文法',ids:ORIGINAL_ORDER.slice(0,10)},
      {id:'S2',title:'Section 2｜表現讀解',ids:ORIGINAL_ORDER.slice(10,20)},
      {id:'S3',title:'Section 3｜綜合讀解',ids:ORIGINAL_ORDER.slice(20,30)}]},
    {id:'READING_BOOK_02',order:2,title:'第2冊',subtitle:'BJT 讀解模擬',sections:[
      {id:'S1',title:'Section 1｜語彙・文法',ids:ORIGINAL_ORDER.slice(30,40)},
      {id:'S2',title:'Section 2｜表現讀解',ids:ORIGINAL_ORDER.slice(40,50)},
      {id:'S3',title:'Section 3｜綜合讀解',ids:ORIGINAL_ORDER.slice(50,60)}]},
    {id:'READING_BOOK_03',order:3,title:'第3冊',subtitle:'BJT 讀解模擬',note:'依現有題目功能重新編排為 10＋10＋10。',sections:[
      {id:'S1',title:'Section 1｜語彙・文法',ids:['BJT-O-0065','BJT-O-0066','BJT-O-0067','BJT-O-0068','BJT-O-0069','BJT-O-0070','BJT-O-0071','BJT-O-0072','BJT-O-0073','BJT-O-0074']},
      {id:'S2',title:'Section 2｜表現讀解',ids:['BJT-O-0075','BJT-O-0076','BJT-O-0077','BJT-O-0078','BJT-O-0079','BJT-O-0080','BJT-O-0081','BJT-O-0082','BJT-O-0083','BJT-O-0096']},
      {id:'S3',title:'Section 3｜綜合讀解',ids:['BJT-O-0061','BJT-O-0062','BJT-O-0063','BJT-O-0064','BJT-O-0084','BJT-O-0085','BJT-O-0086','BJT-O-0087','BJT-O-0088','BJT-O-0089']}]}
  ];
  const ORIGINAL_PENDING = {id:'READING_PENDING',title:'未編冊真題',subtitle:'等待湊齊下一冊'};
  const LISTENING_BOOKS = [
    {id:'LISTENING_BOOK_01',order:1,title:'第1冊',sourceLabel:'BJT J+ 02',collectionId:'BJT_JPLUS02',placeholder:false},
    {id:'LISTENING_BOOK_02',order:2,title:'第2冊',sourceLabel:'BJT 聴力 真題 02',collectionId:'BJT_TRUE02',placeholder:false},
    {id:'LISTENING_BOOK_03',order:3,title:'第3冊',sourceLabel:'BJT 聴力 真題 03',collectionId:'BJT_TRUE03',placeholder:false}
  ];
  const MODULES = LESSON_DB.modules || [];
  const LESSONS = LESSON_DB.lessons || [];
  const BUSINESS_QUESTIONS = QUESTIONS.filter(q=>q.course==='practical_business');
  const QMAP = Object.fromEntries(QUESTIONS.map(q=>[q.id,q]));
  const KMAP = Object.fromEntries(KNOW.map(k=>[k.id,k]));
  const LMAP = Object.fromEntries(LESSONS.map(l=>[l.id,l]));
  const STORAGE='bjtDeepStateV1';
  const MASTERY_TARGET=5;
  const APP_TIME_ZONE='Asia/Tokyo';
  const today=(d=new Date())=>{
    try{
      const parts=new Intl.DateTimeFormat('en-US',{timeZone:APP_TIME_ZONE,year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(d);
      const values=Object.fromEntries(parts.map(x=>[x.type,x.value]));
      return `${values.year}-${values.month}-${values.day}`;
    }catch(e){
      const pad=n=>String(n).padStart(2,'0');
      return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;
    }
  };
  function freshDaily(){return {date:today(),count:0,correct:0,quickChecks:0,reviewActions:0,maxCombo:0,questRewarded:false,sessionBonuses:{}}}
  const defaultState={
    progress:{}, favorites:[], weak:[], notes:{}, errorTags:{},
    learning:{lessons:{}},
    listening:{progress:{},weak:[],lastPackId:null,lastQuestionId:null},
    daily:freshDaily(),
    game:{
      xp:0,currentCombo:0,maxCombo:0,totalCorrectAnswers:0,reviewSuccesses:0,
      questionFirstCorrect:{},revengeQuestions:{},articleRewards:{},lessonRewards:{},quickRewards:{},studyDates:[],
      unlockedTitles:[],equippedTitle:null,bosses:{},perfect50:false,migrationV12:false
    },
    settings:{shuffleOptions:true, extensionSize:30, mixedSize:30, showReadings:true, showTranslations:true, includeBusinessInMixed:false,confirmSkip:false}
  };
  let state=loadState();
  let session=null;
  let currentPrepared=null;
  let currentAnswered=false;
  let currentSelectedOriginalIndex=null;
  let articleFocusId=null;
  let lessonFocusId=null;
  let lessonModuleFilter=null;
  let lessonQuizDraft={};
  let lessonQuizResult=null;
  let announcementQueue=[];
  let announcementActive=false;
  let titleFilter='all';
  let listeningSession=null;
  let practiceLibraryMode=null;
  let originalBookFocus=null;
  let listeningBookFocus=null;

  function loadState(){
    try{
      const raw=JSON.parse(localStorage.getItem(STORAGE)||'null');
      const s={...defaultState,...(raw||{})};
      s.settings={...defaultState.settings,...(s.settings||{})};
      s.progress=s.progress||{}; s.favorites=s.favorites||[]; s.weak=s.weak||[]; s.notes=s.notes||{}; s.errorTags=s.errorTags||{};
      s.learning=s.learning||{lessons:{}}; s.learning.lessons=s.learning.lessons||{};
      s.listening={...defaultState.listening,...(s.listening||{})};s.listening.progress=s.listening.progress||{};s.listening.weak=Array.isArray(s.listening.weak)?s.listening.weak:[];
      s.game={...defaultState.game,...(s.game||{})};
      s.game.questionFirstCorrect=s.game.questionFirstCorrect||{};s.game.revengeQuestions=s.game.revengeQuestions||{};s.game.articleRewards=s.game.articleRewards||{};s.game.lessonRewards=s.game.lessonRewards||{};s.game.quickRewards=s.game.quickRewards||{};s.game.studyDates=Array.isArray(s.game.studyDates)?s.game.studyDates:[];s.game.unlockedTitles=Array.isArray(s.game.unlockedTitles)?s.game.unlockedTitles:[];s.game.bosses=s.game.bosses||{};
      if(!s.game.migrationV12){let legacyXp=0,totalCorrect=0;Object.entries(s.progress||{}).forEach(([qid,p])=>{totalCorrect+=p.correct||0;if((p.correct||0)>0){s.game.questionFirstCorrect[qid]=s.game.questionFirstCorrect[qid]||1;legacyXp+=10}if((p.correct||0)>0&&(p.wrong||0)>0){s.game.revengeQuestions[qid]=s.game.revengeQuestions[qid]||1;legacyXp+=5}});Object.entries((s.learning||{}).lessons||{}).forEach(([lid,ls])=>{if(ls.readAt){s.game.lessonRewards[lid]=s.game.lessonRewards[lid]||1;legacyXp+=15}if((ls.bestScore||0)>=.8){s.game.quickRewards[lid]=s.game.quickRewards[lid]||1;legacyXp+=((ls.bestScore||0)>=1?25:20)}if(ls.reviewed48h){s.game.reviewSuccesses=(s.game.reviewSuccesses||0)+1;legacyXp+=10}});s.game.totalCorrectAnswers=Math.max(s.game.totalCorrectAnswers||0,totalCorrect);s.game.xp=Math.max(s.game.xp||0,legacyXp);s.game.migrationV12=true;}
      if(!s.daily || s.daily.date!==today()) s.daily=freshDaily(); else s.daily={...freshDaily(),...s.daily,sessionBonuses:s.daily.sessionBonuses||{}};
      return s;
    }catch(e){return structuredClone(defaultState)}
  }
  function ensureDailyCurrent(){
    const key=today();
    if(!state.daily || state.daily.date!==key){state.daily=freshDaily();return true}
    return false;
  }
  function saveState(){ ensureDailyCurrent(); localStorage.setItem(STORAGE,JSON.stringify(state)); updateToday(); }
  function esc(s=''){return String(s).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]))}
  function stemZh(q){return STEM_ZH_BY_ID[q?.id]||STEM_ZH_BY_STEM[q?.stem]||''}
  function stemIntent(q){
    const t=String(q?.stem||''),cat=String(q?.category||'');
    if(q?.course==='practical_business')return '先讀上方商務情境，確認人物關係、資訊狀態與說話目的，再選出四項中最適切的應對或理解。';
    if(t.includes('＿＿')){
      if(/敬語|授受|接待|電話/.test(cat))return '判斷空格處需要的敬語方向、人物關係與句型，再比較哪個選項能自然接回整句。';
      if(/文法/.test(cat))return '先判斷空格前後需要的文法功能與語意關係，再比較選項；不要只靠單字中文直覺。';
      if(/固定搭配|慣用語|商務詞彙|語彙|副詞|近義詞/.test(cat))return '判斷空格需要的固定搭配或詞義，並確認它和前後文的商務情境是否一致。';
      return '先判斷空格前後要求的語意與句型，再選能自然完成整句的選項。';
    }
    if(/用件|趣旨|主要な用件|目的/.test(t))return '題目在問整份郵件／文件的主要目的或核心事項，不是只找文章中出現過的單一細節。';
    if(/理由|原因|なぜ/.test(t))return '題目在找原因；要把「結果」與「造成結果的理由」分開。';
    if(/まず|一番はじめ|最初/.test(t))return '題目在問第一步／最先做的事。後面提到的第二、第三個行動都不能取代第一步。';
    if(/いつまで/.test(t))return '題目在問期限，要確認基準日期與「最晚到何時」的條件。';
    if(/何人/.test(t)&&/どこ/.test(t))return '題目同時要求人數與地點，兩個條件都要符合才算正確。';
    if(/誰のもの|誰/.test(t))return '題目在辨認人物身分；要從文章中的職位、經歷與說話立場交叉判斷。';
    if(/どの会社/.test(t))return '題目要把文章敘述與圖表中的公司特徵逐項對照，不能只看單一指標。';
    if(/何をしなければなりませんか|何をしてほしい|何をしますか|どうしたい/.test(t))return '題目在問具體行動／要求。先分清楚「誰」要做「什麼」，再比對選項。';
    if(/最も適切|最も自然|一番大切|最も大切|最も重要/.test(t))return '不是找「勉強可以」的選項，而是比較四項後，選出最符合題幹條件、語用與商務情境的一項。';
    if(cat==='閱讀'||cat.startsWith('閱讀'))return '根據文章、文件或圖表，鎖定題幹指定的資訊；不要因選項出現文章原詞就直接作答。';
    return '先確認題幹到底要求判斷哪一件事，再比較四個選項與該條件是否一致。';
  }
  function stemCues(q){
    const t=String(q?.stem||''), cues=[];
    if(t.includes('＿＿'))cues.push('＿＿＿＝空格題：先看前後搭配與句型');
    if(/最も適切/.test(t))cues.push('最も適切＝四項中最符合情境，不是只要文法成立');
    if(/最も自然/.test(t))cues.push('最も自然＝比較實際日語用法與語感');
    if(/まず|一番はじめ|最初/.test(t))cues.push('まず／最初＝只問第一步');
    if(/いつまで/.test(t))cues.push('いつまで＝期限');
    if(/理由|原因/.test(t))cues.push('理由＝找原因，不是結果');
    if(/用件|趣旨|主要な用件|目的/.test(t))cues.push('用件／趣旨／目的＝找整體主旨');
    if(/一番大切|最も大切|最も重要/.test(t))cues.push('最重要＝文章中優先順位最高者');
    if(/何人/.test(t)&&/どこ/.test(t))cues.push('複合條件＝人數與地點都要對');
    if(/どの会社/.test(t))cues.push('圖表對照＝所有敘述條件都要同時成立');
    if(q?.visual_required)cues.push('必看圖片＝答案不能只靠題幹文字判定');
    return cues;
  }
  function stemTrap(q){
    const t=String(q?.stem||'');
    if(q?.visual_required)return '這題的圖片／圖表是題目本體。先把題幹要求的變數找出來，再到圖中逐項核對。';
    if(/用件|趣旨|主要な用件|目的/.test(t))return '常見陷阱是選到「文章有提到的細節」，但那不一定是整份文件真正的主旨。';
    if(/まず|一番はじめ|最初/.test(t))return '常見陷阱是選到後續確實會做的事情，但題目只問最先做的那一步。';
    if(/最も適切|最も自然/.test(t))return '有些干擾項文法未必錯，但人物關係、語氣、場合或搭配不如正解適切。';
    if(t.includes('＿＿'))return '不要只把每個選項翻成中文後硬塞進空格；要一起檢查助詞、活用、固定搭配與語用方向。';
    if(q?.category==='閱讀'||String(q?.category||'').startsWith('閱讀'))return '先用題幹決定要找哪一類資訊，再回文章定位；不要反過來被選項牽著走。';
    return '先把題幹的判斷標準固定，再檢查每個選項；不要只因某個詞看起來熟悉就選。';
  }
  function scenarioData(q){
    const own=SCENARIO_UNDERSTANDING_BY_ID[q?.id]||{};
    const article=ARTICLE_DETAILS[q?.id]||{};
    return {
      scenarioZh:own.scenarioZh||article.translation_zh_tw||'',
      scenarioFocus:own.scenarioFocus||'',
      communicationTask:own.communicationTask||'',
      roleHint:ROLE_HINT_FOR_QUESTION(q)||''
    };
  }
  function renderContextUnderstanding(q){
    if(!q?.passage)return '';
    const ctx=scenarioData(q);
    const sourceJa=q.readingPassage||q.passage||'';
    const hasReliableZh=Boolean(ctx.scenarioZh);
    const focus=ctx.scenarioFocus||(ARTICLE_DETAILS[q.id]?.purpose||'先讀完整前文，找出題幹指定的人物、條件、時間、因果或主要事項，再進入選項比較。');
    const task=ctx.communicationTask||(ARTICLE_DETAILS[q.id]?.strategy||'依題幹指定的資訊，回到前文定位證據並排除只符合局部文字的選項。');
    return `<section class="stem-understanding context-understanding" id="contextUnderstanding"><div class="stem-understanding-head"><div><span class="lesson-kicker">CONTEXT UNDERSTANDING</span><h3>🧭 情境／前文理解</h3></div></div><div class="stem-understanding-block"><b>情境／前文原文</b><p class="stem-ja">${esc(sourceJa)}</p></div><div class="stem-understanding-block primary"><b>情境／前文中文</b><p>${hasReliableZh?esc(ctx.scenarioZh):'目前沒有可可靠核對的完整中文翻譯；本題先保留原文，不自行補寫內容。'}</p></div>${ctx.roleHint?`<div class="stem-understanding-block"><b>人物／角色關係</b><p>${esc(ctx.roleHint)}</p></div>`:''}<div class="stem-understanding-block"><b>情境重點</b><p>${esc(focus)}</p></div><div class="stem-understanding-block"><b>這個情境要求你做什麼</b><p>${esc(task)}</p></div></section>`;
  }
  function renderStemUnderstanding(q){
    const context=renderContextUnderstanding(q);
    // Practical-business questions all use the same generic stem
    // 「最も適切な対応・理解はどれですか。」.  Re-explaining that sentence
    // adds no learning value after the scenario has already been analysed, so
    // keep the stem in the question itself and omit the redundant block here.
    if(q?.course==='practical_business' && q?.passage){
      return context;
    }
    const zh=stemZh(q), cues=stemCues(q), questionIntent=stemIntent(q);
    return `${context}<section class="stem-understanding" id="stemUnderstanding"><div class="stem-understanding-head"><div><span class="lesson-kicker">QUESTION UNDERSTANDING</span><h3>📘 問題理解</h3></div></div><div class="stem-understanding-block"><b>問題句原文</b><p class="stem-ja">${esc(q?.stem||'')}</p></div><div class="stem-understanding-block primary"><b>問題句中文</b><p>${zh?esc(zh):'目前來源資料沒有可可靠核對的題幹中文；本題不自行補寫。'}</p></div><div class="stem-understanding-block"><b>這題真正要判斷的是</b><p>${esc(questionIntent)}</p></div>${cues.length?`<div class="stem-cue-list">${cues.map(x=>`<span>${esc(x)}</span>`).join('')}</div>`:''}<div class="stem-trap"><b>解題提醒</b><p>${esc(stemTrap(q))}</p></div></section>`;
  }
  function shuffle(arr){const a=[...arr];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
  function toast(msg){const el=document.getElementById('toast');el.textContent=msg;el.classList.add('show');setTimeout(()=>el.classList.remove('show'),1800)}
  function updateToday(){const el=document.getElementById('todayStat');if(el)el.textContent=`Lv.${gameLevel()} · 今日 ${state.daily.count||0} 題`}
  function pct(a,b){return b?Math.round(a/b*100):0}
  function pct1(a,b){return b?Math.round(a/b*1000)/10:0}
  function progressOf(id){return state.progress[id]||{attempts:0,correct:0,wrong:0,streak:0,lastCorrect:null,lastAt:null,due:0}}
  function masteryOfProgress(p={}){const correct=Number(p.correct||0),wrong=Number(p.wrong||0),level=Math.min(MASTERY_TARGET,correct);return {correct,wrong,level,mastered:correct>=MASTERY_TARGET,remaining:Math.max(0,MASTERY_TARGET-correct),stars:'★'.repeat(level)+'☆'.repeat(MASTERY_TARGET-level),accuracy:pct(correct,correct+wrong)}}
  function questionMastery(id){return masteryOfProgress(progressOf(id))}
  function listeningMastery(id){return masteryOfProgress(listeningProgressOf(id))}
  function masteryStats(list,progressGetter=progressOf){let mastered=0,correct=0,wrong=0,zero=0,oneAway=0,highError=0;list.forEach(q=>{const p=progressGetter(q.id),m=masteryOfProgress(p);if(m.mastered)mastered++;if(m.correct===0)zero++;if(m.correct===MASTERY_TARGET-1)oneAway++;if(m.wrong>=3)highError++;correct+=m.correct;wrong+=m.wrong});return {total:list.length,mastered,remaining:Math.max(0,list.length-mastered),percent:pct1(mastered,list.length),correct,wrong,zero,oneAway,highError}}
  function masteryFilter(list,progressGetter,mode){return list.filter(q=>{const m=masteryOfProgress(progressGetter(q.id));if(mode==='mastery-incomplete')return !m.mastered;if(mode==='mastery-one')return m.correct===MASTERY_TARGET-1;if(mode==='mastery-zero')return m.correct===0;if(mode==='mastery-done')return m.mastered;if(mode==='mastery-high-error')return m.wrong>=3;return true})}
  function masterySummaryCard(title,stats,icon='★'){return `<div class="card mastery-summary-card"><div class="mastery-summary-head"><div><span>${esc(icon)} 題庫熟練度</span><h3>${esc(title)}</h3></div><strong>${stats.percent}%</strong></div><div class="progress mastery-progress"><i style="width:${stats.percent}%"></i></div><div class="mastery-summary-foot"><b>${stats.mastered} / ${stats.total} 題完成</b><small>每題累積答對 ${MASTERY_TARGET} 次</small></div></div>`}
  function masteryStatusHTML(p,ids={}){const m=masteryOfProgress(p),prefix=ids.prefix||'';return `<div class="question-mastery ${m.mastered?'mastered':''}"><div class="question-mastery-top"><span class="mastery-stars" ${prefix?`id="${prefix}Stars"`:''}>${m.stars}</span><b ${prefix?`id="${prefix}Label"`:''}>${m.mastered?'MASTERED':`${m.level} / ${MASTERY_TARGET}`}</b></div><div class="question-mastery-counts" ${prefix?`id="${prefix}Counts"`:''}><span>✓ 正確 ${m.correct} 次</span><span>✕ 錯誤 ${m.wrong} 次</span></div><small ${prefix?`id="${prefix}Remaining"`:''}>${m.mastered?'熟練條件已達成':`距離完成還差 ${m.remaining} 次正解`}</small></div>`}
  function updateQuestionMasteryDom(id,prefix='questionMastery'){const m=questionMastery(id),stars=document.getElementById(prefix+'Stars'),label=document.getElementById(prefix+'Label'),counts=document.getElementById(prefix+'Counts'),remaining=document.getElementById(prefix+'Remaining');if(stars)stars.textContent=m.stars;if(label)label.textContent=m.mastered?'MASTERED':`${m.level} / ${MASTERY_TARGET}`;if(counts)counts.innerHTML=`<span>✓ 正確 ${m.correct} 次</span><span>✕ 錯誤 ${m.wrong} 次</span>`;if(remaining)remaining.textContent=m.mastered?'熟練條件已達成':`距離完成還差 ${m.remaining} 次正解`;const box=stars?.closest('.question-mastery');if(box)box.classList.toggle('mastered',m.mastered)}
  function xpNeed(level){const l=Math.max(1,Math.min(99,Number(level)||1));return Math.round((100+(l-1)*20+Math.pow(l-1,1.25)*5)/10)*10}
  function xpFloorForLevel(level){let sum=0;for(let l=1;l<Math.max(1,Math.min(100,level));l++)sum+=xpNeed(l);return sum}
  function gameLevel(xp=state.game.xp||0){let remain=Math.max(0,xp);for(let l=1;l<100;l++){const need=xpNeed(l);if(remain<need)return l;remain-=need}return 100}
  function levelProgress(){const level=gameLevel(),floor=xpFloorForLevel(level),need=level>=100?0:xpNeed(level);return {level,into:Math.max(0,(state.game.xp||0)-floor),need,pct:level>=100?100:pct(Math.max(0,(state.game.xp||0)-floor),need)}}
  function mainTitleAt(level=gameLevel()){let pick=GAME.mainTitles?.[0]||{level:1,name:'學習者',desc:''};(GAME.mainTitles||[]).forEach(t=>{if(t.level<=level)pick=t});return pick}
  function nextMainTitle(level=gameLevel()){return (GAME.mainTitles||[]).find(t=>t.level>level)||null}
  function specialTitle(id){return (GAME.specialTitles||[]).find(t=>t.id===id)||null}
  function rarityLabel(r){return ({RARE:'稀有',EPIC:'史詩',LEGEND:'傳說',MYTHIC:'神話',BOSS:'BOSS'})[r]||r||'特殊'}
  function equippedSpecial(){return specialTitle(state.game.equippedTitle)||null}
  function studyStreak(){const dates=[...new Set(state.game.studyDates||[])].sort();if(!dates.length)return 0;let cursor=today(),streak=0;const set=new Set(dates);if(!set.has(cursor)){const d=new Date(cursor+'T00:00:00Z');d.setUTCDate(d.getUTCDate()-1);cursor=d.toISOString().slice(0,10)}while(set.has(cursor)){streak++;const d=new Date(cursor+'T00:00:00Z');d.setUTCDate(d.getUTCDate()-1);cursor=d.toISOString().slice(0,10)}return streak}
  function registerStudyActivity(){const d=today();state.game.studyDates=state.game.studyDates||[];if(!state.game.studyDates.includes(d))state.game.studyDates.push(d);if(state.game.studyDates.length>500)state.game.studyDates=state.game.studyDates.slice(-500)}
  function queueAnnouncement(data){announcementQueue.push(data);pumpAnnouncement()}
  function pumpAnnouncement(){if(announcementActive||!announcementQueue.length)return;const box=document.getElementById('gameOverlay');if(!box)return;announcementActive=true;const a=announcementQueue.shift();const title=a.title||'SYSTEM';const body=a.body||'';const kicker=a.kicker||'';const titleObj=a.titleId?specialTitle(a.titleId):null;box.innerHTML=`<div class="game-announcement ${a.kind||''}">${kicker?`<div class="announce-kicker">${esc(kicker)}</div>`:''}<h2>${esc(title)}</h2>${body?`<p>${esc(body)}</p>`:''}${titleObj?`<div class="announce-actions"><button class="btn primary" id="equipAnnounceTitle">裝備《${esc(titleObj.name)}》</button><button class="btn" id="closeAnnouncement">稍後</button></div>`:''}</div>`;box.classList.add('show');let timer=setTimeout(close,titleObj?4200:2200);function close(){clearTimeout(timer);box.classList.remove('show');setTimeout(()=>{announcementActive=false;pumpAnnouncement()},220)}if(titleObj){const equip=document.getElementById('equipAnnounceTitle'),later=document.getElementById('closeAnnouncement');if(equip)equip.onclick=()=>{state.game.equippedTitle=titleObj.id;saveState();close()};if(later)later.onclick=close}}
  function unlockTitle(id,announce=true){if(!id||state.game.unlockedTitles.includes(id))return false;const t=specialTitle(id);if(!t)return false;state.game.unlockedTitles.push(id);if(announce)queueAnnouncement({kind:'title',kicker:`${rarityLabel(t.rarity)}異名覺醒`,title:`《${t.name}》`,body:t.desc,titleId:id});return true}
  function awardXp(amount,reason='學習'){amount=Math.max(0,Math.round(Number(amount)||0));if(!amount)return 0;const oldLevel=gameLevel();state.game.xp=(state.game.xp||0)+amount;const newLevel=gameLevel();if(session)session.lastXpGain=(session.lastXpGain||0)+amount;if(newLevel>oldLevel){const milestones=(GAME.mainTitles||[]).filter(t=>t.level>oldLevel&&t.level<=newLevel);if(!milestones.length)queueAnnouncement({kind:'level',kicker:'LEVEL UP',title:`Lv.${oldLevel} → Lv.${newLevel}`,body:'能力的境界，又向前推進了一步。'});else milestones.forEach(t=>queueAnnouncement({kind:t.level>=80?'ascend':'level',kicker:t.level===100?'FINAL ASCENSION':'位階突破',title:`Lv.${t.level}「${t.name}」`,body:t.desc}))}return amount}
  function dailyQuestStatus(){ensureDailyCurrent();const d=state.daily;const tasks=[{key:'count',label:'完成刷題 10 題',now:d.count||0,target:10},{key:'correct',label:'答對 8 題',now:d.correct||0,target:8},{key:'quickChecks',label:'完成 Quick Check 1 回',now:d.quickChecks||0,target:1}];return {tasks,done:tasks.every(t=>t.now>=t.target),rewarded:!!d.questRewarded}}
  function tryDailyQuestReward(){const q=dailyQuestStatus();if(q.done&&!q.rewarded){state.daily.questRewarded=true;awardXp(30,'Daily Quest');queueAnnouncement({kind:'daily',kicker:'DAILY QUEST COMPLETE',title:'今日修練完成',body:'EXP +30'});return true}return false}
  function recordDaily(kind,amount=1){ensureDailyCurrent();state.daily[kind]=(state.daily[kind]||0)+amount;registerStudyActivity();tryDailyQuestReward()}
  function allMainBossesCleared(){return (GAME.bosses||[]).filter(b=>!b.final).every(b=>state.game.bosses[b.id]?.cleared)}
  function bossConfig(id){return (GAME.bosses||[]).find(b=>b.id===id)||null}
  function bossState(id){return state.game.bosses[id]||{cleared:false,attempts:0,bestCombo:0,clearedAt:null}}
  function conditionMet(c){if(!c)return false;const g=state.game;if(c.type==='correctAnswers')return (g.totalCorrectAnswers||0)>=c.value;if(c.type==='maxCombo')return (g.maxCombo||0)>=c.value;if(c.type==='revengeUnique')return Object.keys(g.revengeQuestions||{}).length>=c.value;if(c.type==='reviewSuccesses')return (g.reviewSuccesses||0)>=c.value;if(c.type==='studyStreak')return studyStreak()>=c.value;if(c.type==='allMastered')return systemStats().mastered>=LESSONS.length;if(c.type==='perfect50')return !!g.perfect50;if(c.type==='finalCompletion')return gameLevel()>=100&&systemStats().mastered>=LESSONS.length&&allMainBossesCleared()&&!!bossState('FINAL').cleared;return false}
  function checkGameAchievements(announce=true){(GAME.specialTitles||[]).forEach(t=>{if(t.condition&&conditionMet(t.condition))unlockTitle(t.id,announce)});if(allMainBossesCleared())unlockTitle('boss_all',announce)}
  function markRevenge(qid){state.game.revengeQuestions=state.game.revengeQuestions||{};if(state.game.revengeQuestions[qid])return false;state.game.revengeQuestions[qid]=Date.now();return true}
  function handleQuestionRewards(q,correct,wasWrongBefore,wasDue){let gained=0;if(correct){state.game.totalCorrectAnswers=(state.game.totalCorrectAnswers||0)+1;state.game.currentCombo=(state.game.currentCombo||0)+1;state.game.maxCombo=Math.max(state.game.maxCombo||0,state.game.currentCombo);ensureDailyCurrent();state.daily.maxCombo=Math.max(state.daily.maxCombo||0,state.game.currentCombo);recordDaily('correct',1);if(!state.game.questionFirstCorrect[q.id]){state.game.questionFirstCorrect[q.id]=Date.now();gained+=awardXp(10,'首次答對')}if(wasWrongBefore&&markRevenge(q.id))gained+=awardXp(5,'錯題復仇');if(wasDue){state.game.reviewSuccesses=(state.game.reviewSuccesses||0)+1;recordDaily('reviewActions',1);gained+=awardXp(10,'到期複習')}}else{state.game.currentCombo=0}recordDaily('count',1);checkGameAchievements();return gained}
  function equippedTitleHtml(){const t=equippedSpecial();return t?`<span class="equipped-alias">《${esc(t.name)}》</span>`:''}
  const LESSON_STATUS=[
    {key:'not_started',label:'未開始',level:0},
    {key:'learning',label:'學習中',level:1},
    {key:'read',label:'已閱讀',level:2},
    {key:'understood',label:'已理解',level:3},
    {key:'applied',label:'能應用',level:4},
    {key:'mastered',label:'已掌握',level:5}
  ];
  function ensureLessonState(id){
    state.learning=state.learning||{lessons:{}}; state.learning.lessons=state.learning.lessons||{};
    if(!state.learning.lessons[id]) state.learning.lessons[id]={openedAt:null,readAt:null,quickAttempts:0,bestScore:0,lastScore:0,lastQuickAt:null,passedAt:null,dueAt:0,reviewed48h:false,practiceRuns:0,bestPracticeScore:0};
    return state.learning.lessons[id];
  }
  function lessonState(id){return (state.learning&&state.learning.lessons&&state.learning.lessons[id])||{openedAt:null,readAt:null,quickAttempts:0,bestScore:0,lastScore:0,lastQuickAt:null,passedAt:null,dueAt:0,reviewed48h:false,practiceRuns:0,bestPracticeScore:0}}
  function validLessonQuestionIds(l){return [...new Set((((l||{}).links||{}).questionIds||[]))].filter(id=>QMAP[id])}
  function validLessonKnowledgeIds(l){return [...new Set((((l||{}).links||{}).knowledgePointIds||[]))].filter(id=>KMAP[id])}
  function validLessonArticleIds(l){return [...new Set((((l||{}).links||{}).articleIds||[]))].filter(id=>ARTICLE_DETAILS[id]&&QMAP[id])}
  function validLessonListeningIds(l){return [...new Set((((l||{}).links||{}).listeningIds||[]))].filter(id=>LQMAP[id])}
  function moduleQuestionIds(moduleId){const m=MODULES.find(x=>x.id===moduleId);if(!m)return[];return [...new Set((m.lessonIds||[]).flatMap(id=>validLessonQuestionIds(LMAP[id])))];}
  function lessonPracticeIds(l){const direct=validLessonQuestionIds(l);if(direct.length)return direct;return shuffle(moduleQuestionIds(l.moduleId)).slice(0,20)}
  function linkedLessonStats(l){
    const ids=validLessonQuestionIds(l); let attempts=0,correct=0,attempted=0;
    ids.forEach(id=>{const p=progressOf(id);attempts+=p.attempts||0;correct+=p.correct||0;if((p.attempts||0)>0)attempted++;});
    return {ids,total:ids.length,attempted,attempts,correct,accuracy:pct(correct,attempts)};
  }
  function lessonStatus(l){
    const ls=lessonState(l.id), qs=linkedLessonStats(l); const threshold=Number(l.quickCheckThreshold||.8);
    let level=0;
    if(ls.openedAt) level=1;
    if(ls.readAt) level=2;
    if((ls.bestScore||0)>=threshold) level=3;
    const enoughPractice=(ls.bestPracticeScore||0)>=.7 || (qs.total>0 && qs.attempted>=Math.min(3,qs.total) && qs.accuracy>=70) || (qs.total===0 && !!ls.reviewed48h);
    if(level>=3 && enoughPractice) level=4;
    if(level>=4 && ls.reviewed48h) level=5;
    return {...LESSON_STATUS[level],lessonState:ls,questionStats:qs};
  }
  function dueLessonReviews(){const now=Date.now();return LESSONS.filter(l=>{const x=lessonState(l.id);return !!x.passedAt&&!x.reviewed48h&&(x.dueAt||0)>0&&(x.dueAt||0)<=now})}
  function systemStats(){
    const statuses=LESSONS.map(lessonStatus); return {
      total:LESSONS.length,
      opened:statuses.filter(x=>x.level>=1).length,
      read:statuses.filter(x=>x.level>=2).length,
      understood:statuses.filter(x=>x.level>=3).length,
      applied:statuses.filter(x=>x.level>=4).length,
      mastered:statuses.filter(x=>x.level>=5).length,
      due:dueLessonReviews().length
    };
  }
  function moduleStats(m){const lessons=(m.lessonIds||[]).map(id=>LMAP[id]).filter(Boolean);const ss=lessons.map(lessonStatus);return {total:lessons.length,read:ss.filter(x=>x.level>=2).length,understood:ss.filter(x=>x.level>=3).length,mastered:ss.filter(x=>x.level>=5).length}}
  function errorTagList(){return [
    ['REL','人物關係'],['KEIGO','敬語方向'],['NEG','否定範圍'],['CHG','資訊變更'],['NUM','數字日期'],['INT','意圖語用'],['VOC','詞彙'],['GRM','文法'],['ACTION','下一步'],['COND','條件限制'],['SPEED','時間不足']
  ]}
  function toggleErrorTag(qid,tag){const list=state.errorTags[qid]||[];const i=list.indexOf(tag);if(i>=0)list.splice(i,1);else list.push(tag);state.errorTags[qid]=list;saveState();showFeedback();}
  function businessRoleMeta(q){
    if(!q||q.course!=='practical_business')return null;
    const s=String(q.passage||'');
    let relation='商務情境';
    if(/客先|取引先|顧客|先方|御社|社外/.test(s)) relation='社外：我方 ↔ 對方';
    else if(/社内|同僚|上司|部下|後輩|新人/.test(s)) relation='社內：依上下／同僚關係判斷';
    else if(/電話/.test(s)) relation='電話：先確認我方／對方與下一步責任';
    else if(/会議|意見/.test(s)) relation='會議：追蹤發言者、論點與最後合意';
    return {relation,core:q.coreKnowledge||'場面判断',chapter:q.chapterTitle||''};
  }
  function businessMistakeHint(q,idx){
    if(!q||q.course!=='practical_business'||!Number.isInteger(idx))return '';
    const opt=q.options[idx]||'';
    if(q.chapter===1 && /おっしゃ|いらっしゃ|様|先生/.test(opt)) return '你可能看到職稱或敬稱就直覺使用尊敬語；但社外敬語要先看這個人是我方還是對方，不是職位越高就一定抬高。';
    if(q.chapter===2) return '你可能只抓到電話裡的一個關鍵字，卻沒有確認「現在人在哪裡、誰要回電、要傳什麼」這三件事。';
    if(q.chapter===3) return '你可能只看「事情有沒有說到」，忽略了對象、期限與負擔感；依賴題要同時判斷內容和語氣。';
    if(q.chapter===4) return '你可能只抓到價格或數量其中一項；訂購題通常要把品番、數量、價格、納期、納品先一起核對。';
    if(q.chapter===5) return '你可能把禮貌客套或「再確認」誤當成確定答應；邀請題要分清受諾、拒否、保留與社交性表達。';
    if(q.chapter===6) return '你可能把「請求許可」「請對方做事」和「禁止」混在一起；先看誰要做動作，再判斷句型功能。';
    if(q.chapter===7) return '你可能只看內容是否合理，沒有看建議的強度；商務建議要避免把助言說成命令或人格批評。';
    if(q.chapter===8) return '你可能把傳聞、予定、見込み或未確認資訊當成已確定事實；報告題要特別看資訊確度。';
    if(q.chapter===9) return '你可能被某一句數字或情緒表達吸引；意見題要找最後結論、理由與根據之間的關係。';
    return '你可能只記住某一句「同意／反對」，但會議題要追蹤誰對哪個論點表態，以及最後哪些事項已決定、哪些仍保留。';
  }
  function totalStats(){
    let attempts=0,correct=0,answered=0,mastered=0,wrongSet=0;
    QUESTIONS.forEach(q=>{const p=progressOf(q.id);attempts+=p.attempts||0;correct+=p.correct||0;if(p.attempts)answered++;if((p.correct||0)>=MASTERY_TARGET)mastered++;if((p.wrong||0)>0)wrongSet++;});
    return {attempts,correct,answered,mastered,wrongSet,accuracy:pct(correct,attempts),masteryPercent:pct1(mastered,QUESTIONS.length)};
  }
  function dueQuestions(){const now=Date.now();return QUESTIONS.filter(q=>{const p=progressOf(q.id);return p.attempts>0 && (p.due||0)<=now;})}
  function weakQuestions(){return QUESTIONS.filter(q=>{const p=progressOf(q.id);return state.weak.includes(q.id)||(p.wrong||0)>(p.correct||0)||(p.lastCorrect===false);})}
  function listeningProgressOf(id){return (state.listening&&state.listening.progress&&state.listening.progress[id])||{attempts:0,correct:0,wrong:0,streak:0,lastCorrect:null,lastAt:null,due:0,totalPlays:0,firstListenCorrect:0,relistenCorrect:0}}
  function listeningStats(list=LISTENING_QUESTIONS){let attempts=0,correct=0,answered=0,mastered=0,firstListenCorrect=0,relistenCorrect=0,totalPlays=0;list.forEach(q=>{const p=listeningProgressOf(q.id);attempts+=p.attempts||0;correct+=p.correct||0;totalPlays+=p.totalPlays||0;firstListenCorrect+=p.firstListenCorrect||0;relistenCorrect+=p.relistenCorrect||0;if(p.attempts)answered++;if((p.correct||0)>=MASTERY_TARGET)mastered++;});return {attempts,correct,answered,mastered,masteryPercent:pct1(mastered,list.length),firstListenCorrect,relistenCorrect,totalPlays,accuracy:pct(correct,attempts),firstListenAccuracy:pct(firstListenCorrect,attempts)}}
  function listeningDueQuestions(list=LISTENING_QUESTIONS){const now=Date.now();return list.filter(q=>{const p=listeningProgressOf(q.id);return (p.attempts||0)>0&&(p.due||0)<=now})}
  function listeningWeakQuestions(list=LISTENING_QUESTIONS){return list.filter(q=>{const p=listeningProgressOf(q.id);return (state.listening.weak||[]).includes(q.id)||(p.wrong||0)>(p.correct||0)||p.lastCorrect===false})}
  function titleMap(view){return {
    dashboard:['總覽','從系統課程建立框架，再用題庫、文章與實用商務反覆驗證。'],
    system:['系統學習',`${MODULES.length} 模組 × ${LESSONS.length} 課：學習 → Quick Check → 題庫應用 → 48h 重做。`],
    practice:['刷題','原題、延伸題、錯題與間隔複習。'],
    listening:['聽力題庫',`${LISTENING_QUESTIONS.length} 題聽解／聽讀解真題：圖片與音檔完整保留，並依來源資料品質區分深度解析與正解驗證題。`],
    battle:['BJT BATTLE','用題庫攻略八大領域 Boss；答對造成傷害，連擊提高輸出。'],
    titles:['稱號殿堂','主位階隨 Level 進化；Boss 與特殊條件解鎖可裝備異名。'],
    knowledge:['知識庫','每一道題的相關敬語、文法、詞彙與閱讀策略。'],
    articles:['文章詳解',`集中閱讀 ${Object.keys(ARTICLE_DETAILS).length} 篇文章：假名、翻譯、結構、陷阱與四選項詳解。`],
    business:['實用商務',`10 章 × 20 題：按情境建立真正可用的商務日語。`],
    mistakes:['錯題簿','集中處理答錯、標記不熟與低正確率題目。'],
    settings:['設定 / 備份','學習紀錄只存在這台裝置，可隨時匯出。']
  }[view]}
  function switchView(view){
    document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
    document.getElementById('view-'+view).classList.add('active');
    document.querySelectorAll('.nav-btn').forEach(b=>b.classList.toggle('active',b.dataset.view===view));
    const [t,s]=titleMap(view);document.getElementById('pageTitle').textContent=t;document.getElementById('pageSubtitle').textContent=s;
    document.getElementById('sidebar').classList.remove('open');
    if(view==='dashboard')renderDashboard(); if(view==='system')renderSystem(); if(view==='practice')renderPractice(); if(view==='listening')renderListening(); if(view==='battle')renderBattle(); if(view==='titles')renderTitles(); if(view==='knowledge')renderKnowledge(); if(view==='articles')renderArticles(); if(view==='business')renderBusiness(); if(view==='mistakes')renderMistakes(); if(view==='settings')renderSettings();
  }

  function applyLatestFeatureBadge(){document.querySelectorAll('.nav-new').forEach(x=>x.remove());const target=document.querySelector(`[data-feature="${LATEST_FEATURE}"]`);if(target){const badge=document.createElement('span');badge.className='nav-new';badge.textContent='NEW';target.appendChild(badge)}}
  function openImageViewer(src,alt='題目圖片'){if(!src)return;const modal=document.getElementById('imageViewerModal');if(!modal)return;let zoom=1;modal.hidden=false;modal.innerHTML=`<div class="image-viewer-card"><div class="image-viewer-head"><div><b>${esc(alt)}</b><span>可用 + / − 放大，手機也可直接縮放畫面。</span></div><button class="icon-btn viewer-close" id="closeImageViewer" aria-label="關閉">✕</button></div><div class="image-viewer-toolbar"><button class="btn" data-img-zoom="out">−</button><button class="btn" id="imageZoomLabel">100%</button><button class="btn" data-img-zoom="in">＋</button><button class="btn" data-img-zoom="reset">重設</button></div><div class="image-viewer-stage"><img id="imageViewerImg" src="${esc(src)}" alt="${esc(alt)}"></div></div>`;const img=document.getElementById('imageViewerImg'),label=document.getElementById('imageZoomLabel');const apply=()=>{if(img)img.style.width=`${Math.round(zoom*100)}%`;if(label)label.textContent=`${Math.round(zoom*100)}%`};document.getElementById('closeImageViewer').onclick=()=>{modal.hidden=true;modal.innerHTML=''};modal.querySelectorAll('[data-img-zoom]').forEach(b=>b.onclick=()=>{const a=b.dataset.imgZoom;if(a==='in')zoom=Math.min(3,zoom+.5);if(a==='out')zoom=Math.max(.75,zoom-.5);if(a==='reset')zoom=1;apply()});modal.onclick=e=>{if(e.target===modal){modal.hidden=true;modal.innerHTML=''}};apply()}
  function renderDashboard(){
    const st=totalStats(); const sys=systemStats(); const lst=listeningStats(); const origList=QUESTIONS.filter(q=>q.source==='原題'),extList=QUESTIONS.filter(q=>q.source==='延伸'),businessList=QUESTIONS.filter(q=>q.source==='實用商務'); const orig=origList.length,business=businessList.length,ext=extList.length; const due=dueQuestions().length; const weak=weakQuestions().length;
    const origM=masteryStats(origList),extM=masteryStats(extList),businessM=masteryStats(businessList),listenM=masteryStats(LISTENING_QUESTIONS,listeningProgressOf),allMastered=origM.mastered+extM.mastered+businessM.mastered+listenM.mastered,allTotal=QUESTIONS.length+LISTENING_QUESTIONS.length,allPct=pct1(allMastered,allTotal);
    const lp=levelProgress(), mt=mainTitleAt(lp.level), nt=nextMainTitle(lp.level), eq=equippedSpecial(), dq=dailyQuestStatus();
    const bosses=(GAME.bosses||[]).filter(b=>!b.final), cleared=bosses.filter(b=>bossState(b.id).cleared).length;
    document.getElementById('view-dashboard').innerHTML=`
      <section class="card player-card"><div class="player-main"><span class="player-kicker">PLAYER STATUS</span><div class="player-level-row"><strong>Lv.${lp.level}</strong><div><h2>${esc(mt.name)}</h2>${eq?`<div class="player-alias">《${esc(eq.name)}》</div>`:'<div class="player-alias muted">尚未裝備異名</div>'}</div></div><div class="xp-row"><div class="progress xp-progress"><i style="width:${lp.pct}%"></i></div><b>${lp.level>=100?'MAX':`${lp.into} / ${lp.need} EXP`}</b></div>${nt?`<div class="next-rank">下一位階：Lv.${nt.level}「????」</div>`:'<div class="next-rank">最高位階已抵達</div>'}</div><div class="player-side"><div><b>${state.game.maxCombo||0}</b><span>最高 Combo</span></div><div><b>${cleared}/8</b><span>Boss 擊破</span></div><div><b>${state.game.unlockedTitles.length}</b><span>特殊異名</span></div><div><b>${studyStreak()}</b><span>連續學習日</span></div></div></section>
      <div class="grid stats-grid">
        <div class="card stat"><span>題庫總量</span><strong>${QUESTIONS.length}</strong><small>${orig} 原題／原題型 + ${ext} 延伸題 + ${business} 實用商務</small></div>
        <div class="card stat"><span>累積作答</span><strong>${st.attempts}</strong><small>已接觸 ${st.answered} 題</small></div>
        <div class="card stat"><span>正確率</span><strong>${st.accuracy}%</strong><small>${st.correct} 次答對</small></div>
        <div class="card stat"><span>系統課程</span><strong>${sys.understood}/${sys.total}</strong><small>已理解 · ${sys.mastered} 課已掌握</small></div>
        <div class="card stat"><span>聽力真題</span><strong>${lst.answered}/${LISTENING_QUESTIONS.length}</strong><small>正確率 ${lst.accuracy}% · 熟練 ${lst.mastered}/${LISTENING_QUESTIONS.length}</small></div>
      </div>
      <section class="mastery-dashboard-section"><div class="section-title"><div><h2>📊 刷題完成率</h2><p>每題累積答對 ${MASTERY_TARGET} 次才算完成；答錯不會取消已完成狀態，正確／錯誤次數會持續累積。</p></div><span class="mastery-total-badge">${allMastered} / ${allTotal} · ${allPct}%</span></div><div class="card mastery-overall-card"><div><b>全題庫總熟練度</b><span>${allMastered} / ${allTotal} 題完成</span></div><div class="progress mastery-progress"><i style="width:${allPct}%"></i></div><strong>${allPct}%</strong></div><div class="grid mastery-summary-grid">${masterySummaryCard('真題／原題',origM,'📖')}${masterySummaryCard('延伸題',extM,'🧠')}${masterySummaryCard('實用商務',businessM,'💼')}${masterySummaryCard('聽力／聽讀解',listenM,'🎧')}</div></section>
      <section class="card daily-quest-card"><div class="daily-head"><div><span class="player-kicker">DAILY QUEST · 今日最高 ${state.daily.maxCombo||0} COMBO</span><h2>今日修練</h2></div><div class="daily-reward ${dq.rewarded?'done':''}">${dq.rewarded?'已領取':'完成獎勵'}<b>${dq.rewarded?'✓':'+30 EXP'}</b></div></div><div class="daily-task-grid">${dq.tasks.map(t=>`<div class="daily-task ${t.now>=t.target?'done':''}"><b>${t.now>=t.target?'✓':'○'} ${esc(t.label)}</b><span>${Math.min(t.now,t.target)} / ${t.target}</span><div class="progress"><i style="width:${pct(Math.min(t.now,t.target),t.target)}%"></i></div></div>`).join('')}</div></section>
      <div class="card hero"><h2>不是只背答案，而是把每題拆成可遷移的知識。</h2><p>目前已整理 ${KNOW.length} 個核心知識點，並加入 ${LISTENING_QUESTIONS.length} 題真正的聽解／聽讀解真題。現在每題會永久累積正確／錯誤次數，答對 ${MASTERY_TARGET} 次後標記為 ★★★★★ MASTERED。</p><div class="quick-actions"><button class="btn primary" data-start="system">進入系統學習</button><button class="btn" data-start="mastery-incomplete">刷未完成題 (${st.mastered}/${QUESTIONS.length} 已完成)</button><button class="btn" data-start="mastery-one">只差 1 次正解</button><button class="btn" data-start="mixed">開始綜合 30 題</button><button class="btn" data-start="original">重刷全部原題</button><button class="btn" id="dashListeningBtn">🎧 聽力題庫 (${LISTENING_QUESTIONS.length})</button><button class="btn ${due?'warn':''}" data-start="due">今日到期複習 (${due})</button><button class="btn ${weak?'bad':''}" data-start="weak">弱點題 (${weak})</button><button class="btn" id="dashBattleBtn">⚔️ BJT BATTLE</button><button class="btn" id="dashTitlesBtn">🏆 稱號殿堂</button></div></div>
      <div class="section-title"><div><h2>練習模式</h2><p>依目的切換，不用每次從頭刷。</p></div></div><div class="grid mode-grid">
        ${modeCard('system','系統學習',`${LESSONS.length} 課／${sys.understood} 課已理解`,'先建立 BJT 的人物關係、敬語、交涉、聽解、讀解與高階語用框架。')}
        ${modeCard('original','原題重現',`${orig} 題完整跑一輪`,'保留這串對話中的考點與原題型，先確認基本判斷。')}
        ${modeCard('listening','聽力題庫',`${LISTENING_QUESTIONS.length} 題聽解／聽讀解真題`,'圖片與音檔是題目本體；有來源詳解的題目提供深度解析，只有答案表的題目則明確標示為正解驗證。')}
        ${modeCard('extension','知識點延伸',`${ext} 題中隨機 ${state.settings.extensionSize} 題`,'把原題內的敬語、語彙、文法轉成新問法，防止只記答案位置。')}
        ${modeCard('mixed','綜合混合',`隨機 ${state.settings.mixedSize} 題`,'原題與延伸題混合，適合日常刷題。')}
        ${modeCard('weak','弱點集中',`${weak} 題`,'答錯較多、最近答錯或手動標記不熟的題目。')}
        ${modeCard('due','間隔複習',`${due} 題到期`,'依答題結果安排複習；答錯會更快再次出現。')}
        ${modeCard('knowledge','知識卡模式',`${KNOW.length} 個知識點`,'直接從概念、讀音、例句與易混點建立系統化記憶。')}
        ${modeCard('business','實用商務課程','10 章 × 20 題','按寒暄、電話、依賴、注文、會議等商務情境分章練習。')}
      </div>`;
    bindStartButtons();
    document.getElementById('dashBattleBtn').onclick=()=>switchView('battle');document.getElementById('dashTitlesBtn').onclick=()=>switchView('titles');const dl=document.getElementById('dashListeningBtn');if(dl)dl.onclick=()=>switchView('listening');
  }

  function openLesson(id){
    const l=LMAP[id];if(!l){toast('找不到這一課。');return}
    const ls=ensureLessonState(id);if(!ls.openedAt)ls.openedAt=Date.now();saveState();
    lessonFocusId=id;lessonQuizResult=null;lessonQuizDraft[id]=lessonQuizDraft[id]||{};renderSystem();window.scrollTo({top:0,behavior:'smooth'});
  }
  function lessonSequenceInfo(id){
    const idx=LESSONS.findIndex(x=>x.id===id);
    return {index:idx,prev:idx>0?LESSONS[idx-1]:null,next:idx>=0&&idx<LESSONS.length-1?LESSONS[idx+1]:null};
  }
  function goLessonSequence(id,dir=1){
    const seq=lessonSequenceInfo(id),target=dir<0?seq.prev:seq.next;
    if(target){lessonModuleFilter=target.moduleId;openLesson(target.id);return}
    lessonFocusId=null;lessonQuizResult=null;const current=LMAP[id];if(current)lessonModuleFilter=current.moduleId;renderSystem();window.scrollTo({top:0,behavior:'smooth'});
  }
  function formatDateTime(ts){if(!ts)return '—';try{return new Intl.DateTimeFormat('zh-TW',{timeZone:APP_TIME_ZONE,month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit'}).format(new Date(ts))}catch(e){return new Date(ts).toLocaleString()}}
  function lessonDigestHTML(l){
    const dig=l.sourceDigest||[];if(!dig.length)return '';
    return `<details id="lesson-sec-digest" class="lesson-digest lesson-jump-target"><summary>展開深度講義整合內容（${dig.length} 節來源）</summary>${dig.map(sec=>`<section class="lesson-digest-section"><div class="lesson-digest-head"><b>${esc(sec.section||'補充內容')}</b><span>${esc(sec.source||'')}</span></div>${(sec.blocks||[]).map(block=>{
      if(block.type==='table'&&Array.isArray(block.rows))return `<div class="lesson-table-wrap"><table class="lesson-table">${block.rows.map((row,ri)=>`<tr>${row.map(cell=>`<${ri===0?'th':'td'}>${esc(cell)}</${ri===0?'th':'td'}>`).join('')}</tr>`).join('')}</table></div>`;
      return `<p>${esc(block.text||'')}</p>`;
    }).join('')}</section>`).join('')}</details>`;
  }
  function markLessonRead(id){const ls=ensureLessonState(id),first=!ls.readAt;ls.openedAt=ls.openedAt||Date.now();ls.readAt=Date.now();registerStudyActivity();if(first&&!state.game.lessonRewards[id]){state.game.lessonRewards[id]=Date.now();awardXp(15,'完成課程')}checkGameAchievements();saveState();renderSystem();toast(first?'已閱讀 · EXP +15':'已重新標記閱讀')}
  function startLessonPractice(id){const l=LMAP[id];if(!l)return;const direct=validLessonQuestionIds(l),ids=lessonPracticeIds(l);if(!ids.length){toast('這個模組目前沒有可用題目。');return}createSession('lesson',shuffle(ids),{originLessonId:id,lessonPracticeScope:direct.length?'direct':'module'});switchView('practice')}
  function submitLessonQuiz(id){
    const l=LMAP[id];if(!l)return;const checks=l.quickChecks||[], draft=lessonQuizDraft[id]||{};
    if(checks.some((_,i)=>!Number.isInteger(draft[i]))){toast('請先回答全部 Quick Check。');return}
    let correct=0;checks.forEach((q,i)=>{if(draft[i]===q.answer)correct++});const score=checks.length?correct/checks.length:1;const pass=score>=Number(l.quickCheckThreshold||.8);const now=Date.now();const ls=ensureLessonState(id);
    const firstPass=!ls.passedAt, dueReview=!!ls.passedAt&&!!ls.dueAt&&now>=ls.dueAt&&!ls.reviewed48h;
    ls.openedAt=ls.openedAt||now;ls.quickAttempts=(ls.quickAttempts||0)+1;ls.lastScore=score;ls.bestScore=Math.max(ls.bestScore||0,score);ls.lastQuickAt=now;
    recordDaily('quickChecks',1);
    if(pass){ls.readAt=ls.readAt||now;if(dueReview){ls.reviewed48h=true;ls.dueAt=0;state.game.reviewSuccesses=(state.game.reviewSuccesses||0)+1;recordDaily('reviewActions',1);awardXp(10,'48h 課程複習')}else if(firstPass){ls.passedAt=now;ls.dueAt=now+48*3600000;}if(firstPass&&!state.game.quickRewards[id]){state.game.quickRewards[id]=Date.now();awardXp(score===1?25:20,'Quick Check 通過')}}
    state.learning.lessons[id]=ls;checkGameAchievements();saveState();lessonQuizResult={lessonId:id,answers:{...draft},score,pass};renderSystem();requestAnimationFrame(()=>{const el=document.getElementById('lesson-sec-quick');if(el){const top=window.scrollY+el.getBoundingClientRect().top-88;window.scrollTo({top:Math.max(0,top),behavior:'auto'})}});toast(pass?`Quick Check 通過${firstPass?` · EXP +${score===1?25:20}`:''}`:'未達 80%，看解析後再試一次');
  }
  function resetLessonQuiz(id){lessonQuizDraft[id]={};lessonQuizResult=null;renderSystem();requestAnimationFrame(()=>{const el=document.getElementById('lesson-sec-quick');if(el){const top=window.scrollY+el.getBoundingClientRect().top-88;window.scrollTo({top:Math.max(0,top),behavior:'auto'})}})}
  function renderLessonQuickCheck(l){
    const checks=l.quickChecks||[], draft=lessonQuizDraft[l.id]||{}, result=lessonQuizResult&&lessonQuizResult.lessonId===l.id?lessonQuizResult:null, ls=lessonState(l.id), seq=lessonSequenceInfo(l.id);
    if(!checks.length)return '<section id="lesson-sec-quick" class="card lesson-block lesson-jump-target"><h3>Quick Check</h3><p class="small">本課目前沒有課內測驗。</p></section>';
    const nextAction=result?.pass?`<button class="btn primary" id="quickNextLesson">${seq.next?'下一課 →':'完成全部課程・回系統學習'}</button>`:'';
    return `<section id="lesson-sec-quick" class="card lesson-block lesson-quiz lesson-jump-target"><div class="lesson-section-head"><div><span class="lesson-kicker">QUICK CHECK</span><h3>理解確認</h3></div><span class="status-badge">最佳 ${Math.round((ls.bestScore||0)*100)}%</span></div>${checks.map((q,qi)=>`<div class="lesson-qc"><b>Q${qi+1}. ${esc(q.q)}</b><div class="lesson-qc-options">${(q.options||[]).map((opt,oi)=>{const sel=draft[qi]===oi;const ok=result&&oi===q.answer;const wrong=result&&sel&&oi!==q.answer;return `<button class="lesson-qc-opt ${sel?'selected':''} ${ok?'correct':''} ${wrong?'wrong':''}" data-lq="${qi}" data-lo="${oi}" aria-pressed="${sel?'true':'false'}" ${result?'disabled':''}>${oi+1}. ${esc(opt)}</button>`}).join('')}</div>${result?`<div class="lesson-qc-explain ${result.answers[qi]===q.answer?'ok':'ng'}"><b>${result.answers[qi]===q.answer?'✓ 正確':'✕ 正解：'+(q.answer+1)}</b><span>${esc(q.explain||'')}</span></div>`:''}</div>`).join('')}<div class="actions">${result?`<button class="btn" id="retryLessonQuiz">重新作答</button><span class="lesson-quiz-score ${result.pass?'pass':'fail'}">${Math.round(result.score*100)}% · ${result.pass?'通過':'未通過'}</span>${nextAction}`:`<button class="btn primary" id="submitLessonQuiz">送出 Quick Check</button>`}</div></section>`;
  }
  function lessonSectionDefs(l){
    const defs=[
      ['goals','學習目標',true],['rules','核心規則',true],['examples','例句',!!(l.examples||[]).length],['pitfalls','常見錯誤',!!(l.commonMistakes||[]).length],['digest','深度講義',!!(l.sourceDigest||[]).length],['quick','Quick Check',true],['flow','判斷流程',!!(l.decisionFlow||[]).length],['cues','BJT 線索',!!(l.bjtHowTested||[]).length],['knowledge','知識卡',true],['articles','對應文章',true],['listening','聽力真題',!!validLessonListeningIds(l).length],['practice','題庫應用',true]
    ];
    return defs.filter(x=>x[2]).map(([key,label])=>({key,label}));
  }
  function jumpToLessonSection(key){
    const el=document.getElementById(`lesson-sec-${key}`);if(!el)return;
    if(el.tagName==='DETAILS')el.open=true;
    const top=window.scrollY+el.getBoundingClientRect().top-88;
    window.scrollTo({top:Math.max(0,top),behavior:'smooth'});
    const modal=document.getElementById('lessonNavModal');if(modal)modal.hidden=true;
  }
  function openLessonNavModal(l){
    const modal=document.getElementById('lessonNavModal');if(!modal)return;
    const defs=lessonSectionDefs(l);
    modal.innerHTML=`<div class="mobile-sheet lesson-nav-sheet"><div class="sheet-head"><div><span class="lesson-kicker">LESSON INDEX</span><h3>本課目錄</h3></div><button class="icon-btn sheet-close" id="closeLessonNav" aria-label="關閉">✕</button></div><div class="lesson-nav-list">${defs.map((x,i)=>`<button class="lesson-nav-list-btn" data-sheet-jump="${esc(x.key)}"><span>${String(i+1).padStart(2,'0')}</span>${esc(x.label)}</button>`).join('')}</div><button class="btn lesson-top-btn" id="lessonTopBtn">↑ 回到課程頂部</button></div>`;
    modal.hidden=false;
    document.getElementById('closeLessonNav').onclick=()=>modal.hidden=true;
    document.getElementById('lessonTopBtn').onclick=()=>{modal.hidden=true;window.scrollTo({top:0,behavior:'smooth'})};
    modal.querySelectorAll('[data-sheet-jump]').forEach(b=>b.onclick=()=>jumpToLessonSection(b.dataset.sheetJump));
    modal.onclick=e=>{if(e.target===modal)modal.hidden=true};
  }
  function renderLessonDetail(l){
    const root=document.getElementById('view-system'), st=lessonStatus(l), ls=st.lessonState, qstats=st.questionStats;
    const kids=validLessonKnowledgeIds(l), aids=validLessonArticleIds(l), lids=validLessonListeningIds(l), qids=validLessonQuestionIds(l), practiceIds=lessonPracticeIds(l), sectionDefs=lessonSectionDefs(l), seq=lessonSequenceInfo(l.id);
    root.innerHTML=`<div class="lesson-detail-top"><button class="btn" id="lessonBackBtn">← 回系統學習</button><div class="lesson-display-toggles"><button class="btn" id="toggleLessonReading">讀音 ${state.settings.showReadings?'ON':'OFF'}</button><button class="btn" id="toggleLessonZh">中文 ${state.settings.showTranslations?'ON':'OFF'}</button></div></div>
      <article class="card lesson-hero" id="lesson-top"><div class="lesson-meta"><span class="module-badge">${esc(l.moduleId)}</span><span class="status-badge status-${st.key}">${esc(st.label)}</span>${(l.tags||[]).map(t=>`<span class="tag">${esc(t)}</span>`).join('')}</div><h2>${esc(l.title_zh)}</h2><p class="lesson-ja-title">${esc(l.title_ja||'')}</p><div class="lesson-progress-summary"><div><b>Quick Check</b><span>${Math.round((ls.bestScore||0)*100)}%</span></div><div><b>對應題庫</b><span>${qstats.attempted}/${qstats.total} 題</span></div><div><b>題庫正確率</b><span>${qstats.accuracy}%</span></div><div><b>48h 重做</b><span>${ls.reviewed48h?'完成':(ls.dueAt?formatDateTime(ls.dueAt):'未排程')}</span></div></div><div class="actions"><button class="btn primary" id="markLessonRead">${ls.readAt?'重新標記閱讀':'標記已閱讀'}</button><button class="btn" id="lessonPracticeBtn" ${practiceIds.length?'':'disabled'}>${qids.length?`練習對應題 (${qids.length})`:`練習本模組題 (${practiceIds.length})`}</button></div></article>
      <nav class="card lesson-anchor-nav" aria-label="本課導覽"><div class="lesson-anchor-title"><b>本課導覽</b><span>點選後直接跳到該段</span></div><div class="lesson-anchor-scroll">${sectionDefs.map(x=>`<button class="lesson-anchor-btn" data-lesson-jump="${esc(x.key)}">${esc(x.label)}</button>`).join('')}</div><button class="btn lesson-menu-btn" id="lessonMenuBtn">☰ 目錄</button></nav>
      <div class="lesson-columns"><div class="lesson-main">
        <section id="lesson-sec-goals" class="card lesson-block lesson-jump-target"><span class="lesson-kicker">GOALS</span><h3>學習目標</h3><ul>${(l.learningGoals||[]).map(x=>`<li>${esc(x)}</li>`).join('')}</ul></section>
        <section id="lesson-sec-rules" class="card lesson-block rules-block lesson-jump-target"><span class="lesson-kicker">【規則】</span><h3>核心規則</h3><ul>${(l.coreRules||[]).map(x=>`<li>${esc(x)}</li>`).join('')}</ul></section>
        ${(l.examples||[]).length?`<section id="lesson-sec-examples" class="card lesson-block lesson-jump-target"><span class="lesson-kicker">EXAMPLES</span><h3>例句與判讀</h3><div class="lesson-examples">${l.examples.map((e,i)=>`<div class="lesson-example"><b>例 ${i+1}</b><div class="lesson-example-ja">${esc(state.settings.showReadings&&e.reading?e.reading:e.ja||'')}</div>${state.settings.showTranslations&&e.zh?`<div class="lesson-example-zh">${esc(e.zh)}</div>`:''}</div>`).join('')}</div></section>`:''}
        ${(l.commonMistakes||[]).length?`<section id="lesson-sec-pitfalls" class="card lesson-block warning-block lesson-jump-target"><span class="lesson-kicker">PITFALLS</span><h3>常見錯誤</h3><ul>${l.commonMistakes.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></section>`:''}
        ${lessonDigestHTML(l)}
        ${renderLessonQuickCheck(l)}
      </div><aside class="lesson-side">
        ${(l.decisionFlow||[]).length?`<section id="lesson-sec-flow" class="card lesson-side-card lesson-jump-target"><h3>判斷流程</h3>${l.decisionFlow.map(x=>`<p>${esc(x)}</p>`).join('')}</section>`:''}
        ${(l.bjtHowTested||[]).length?`<section id="lesson-sec-cues" class="card lesson-side-card cue-block lesson-jump-target"><h3>【高價值線索】BJT 怎麼考</h3>${l.bjtHowTested.map(x=>`<p>${esc(x)}</p>`).join('')}</section>`:''}
        <section id="lesson-sec-knowledge" class="card lesson-side-card lesson-jump-target"><h3>對應知識卡</h3>${kids.length?kids.slice(0,8).map(id=>{const k=KMAP[id];return `<div class="lesson-linked-k"><b>${esc(k.title)}</b><span>${esc(k.summary)}</span><button class="text-btn" data-lesson-k="${esc(id)}">刷這個知識點</button></div>`}).join(''):'<p class="small">本課目前沒有直接映射知識卡。</p>'}</section>
        <section id="lesson-sec-articles" class="card lesson-side-card lesson-jump-target"><h3>對應文章</h3>${aids.length?aids.slice(0,8).map(id=>`<button class="lesson-link-btn" data-lesson-a="${esc(id)}">${esc((ARTICLE_DETAILS[id]||{}).title||QMAP[id].stem)}</button>`).join(''):'<p class="small">本課目前沒有直接對應文章。</p>'}</section>
        ${lids.length?`<section id="lesson-sec-listening" class="card lesson-side-card lesson-jump-target listening-lesson-links"><h3>🎧 對應聽力真題</h3><p class="small">只連結語義上明確相關的題目；視為相關練習推薦，不宣稱唯一考點。</p>${lids.map(id=>{const q=LQMAP[id];return `<button class="lesson-link-btn" data-lesson-listen="${esc(id)}"><span>${esc(q.category)}</span>${esc(q.visualContext||q.questionZhTW||q.question)}</button>`}).join('')}</section>`:''}
        <section id="lesson-sec-practice" class="card lesson-side-card lesson-jump-target"><h3>題庫應用</h3><p class="small">映射只使用目前題庫中實際存在的 ID；視為「相關練習推薦」，不把它宣稱成唯一一對一考點。</p>${qids.length?`<div class="lesson-related-list">${qids.slice(0,8).map(id=>{const q=QMAP[id];return `<button class="lesson-related-q" data-lesson-q="${esc(id)}"><span>${esc(q.source)}</span>${esc(q.stem)}</button>`}).join('')}</div>${qids.length>8?`<div class="small">另有 ${qids.length-8} 題，可按「練習對應題」完整練習。</div>`:''}`:'<p class="small">本課先以教材＋Quick Check 建立能力，尚無直接題庫映射。</p>'}</section>
      </aside></div>
      <section class="card lesson-sequence-nav"><div class="lesson-sequence-copy"><span class="lesson-kicker">LESSON FLOW</span><b>${seq.next?'完成本課後直接前往下一課':'你已來到系統學習最後一課'}</b><small>${seq.next?`${esc(seq.next.id)}｜${esc(seq.next.title_zh)}`:'可回到系統學習總覽檢查 8 模組進度。'}</small></div><div class="lesson-sequence-actions">${seq.prev?'<button class="btn" id="lessonPrevBtn">← 上一課</button>':''}<button class="btn" id="lessonHomeBtn">回系統學習</button><button class="btn primary" id="lessonNextBtn">${seq.next?'下一課 →':'完成・回總覽'}</button></div></section>`;
    document.getElementById('lessonBackBtn').onclick=()=>{lessonFocusId=null;lessonQuizResult=null;renderSystem();window.scrollTo({top:0,behavior:'smooth'})};
    document.getElementById('toggleLessonReading').onclick=()=>{state.settings.showReadings=!state.settings.showReadings;saveState();renderSystem()};
    document.getElementById('toggleLessonZh').onclick=()=>{state.settings.showTranslations=!state.settings.showTranslations;saveState();renderSystem()};
    document.getElementById('markLessonRead').onclick=()=>markLessonRead(l.id);document.getElementById('lessonPracticeBtn').onclick=()=>startLessonPractice(l.id);
    document.querySelectorAll('[data-lq]').forEach(b=>b.onclick=()=>{
      lessonQuizDraft[l.id]=lessonQuizDraft[l.id]||{};
      const qi=Number(b.dataset.lq), oi=Number(b.dataset.lo);
      lessonQuizDraft[l.id][qi]=oi; lessonQuizResult=null;
      const group=b.closest('.lesson-qc-options');
      if(group) group.querySelectorAll('[data-lq]').forEach(opt=>{
        const selected=Number(opt.dataset.lo)===oi;
        opt.classList.toggle('selected',selected);
        opt.setAttribute('aria-pressed',selected?'true':'false');
      });
    });
    const submit=document.getElementById('submitLessonQuiz');if(submit)submit.onclick=()=>submitLessonQuiz(l.id);const retry=document.getElementById('retryLessonQuiz');if(retry)retry.onclick=()=>resetLessonQuiz(l.id);const quickNext=document.getElementById('quickNextLesson');if(quickNext)quickNext.onclick=()=>goLessonSequence(l.id,1);
    document.querySelectorAll('[data-lesson-k]').forEach(b=>b.onclick=()=>startTagSession(b.dataset.lessonK));document.querySelectorAll('[data-lesson-a]').forEach(b=>b.onclick=()=>openArticle(b.dataset.lessonA));document.querySelectorAll('[data-lesson-q]').forEach(b=>b.onclick=()=>practiceOne(b.dataset.lessonQ));document.querySelectorAll('[data-lesson-listen]').forEach(b=>b.onclick=()=>startListeningOne(b.dataset.lessonListen));
    document.querySelectorAll('[data-lesson-jump]').forEach(b=>b.onclick=()=>jumpToLessonSection(b.dataset.lessonJump));
    document.getElementById('lessonMenuBtn').onclick=()=>openLessonNavModal(l);
    const prevLessonBtn=document.getElementById('lessonPrevBtn');if(prevLessonBtn)prevLessonBtn.onclick=()=>goLessonSequence(l.id,-1);
    document.getElementById('lessonHomeBtn').onclick=()=>{lessonFocusId=null;lessonQuizResult=null;lessonModuleFilter=l.moduleId;renderSystem();window.scrollTo({top:0,behavior:'smooth'})};
    document.getElementById('lessonNextBtn').onclick=()=>goLessonSequence(l.id,1);
  }
  function renderSystem(){
    const root=document.getElementById('view-system');if(lessonFocusId&&LMAP[lessonFocusId]){renderLessonDetail(LMAP[lessonFocusId]);return}
    const stats=systemStats();const selected=lessonModuleFilter||MODULES[0]?.id;const mod=MODULES.find(m=>m.id===selected)||MODULES[0];const lessons=(mod?.lessonIds||[]).map(id=>LMAP[id]).filter(Boolean);
    root.innerHTML=`<div class="card system-hero"><div><span class="tag">SYSTEMATIC LEARNING</span><h2>BJT 深度系統學習</h2><p>以 8 模組 50 課建立知識框架。每課依序完成教材、Quick Check、對應題庫與 48 小時後重做；不是只把 Word 講義貼進 App。</p></div><div class="system-hero-count"><strong>${LESSONS.length}</strong><span>課</span></div></div>
      <div class="grid stats-grid system-stats"><div class="card stat"><span>已閱讀</span><strong>${stats.read}</strong><small>${pct(stats.read,stats.total)}%</small></div><div class="card stat"><span>已理解</span><strong>${stats.understood}</strong><small>Quick Check ≥ 80%</small></div><div class="card stat"><span>能應用</span><strong>${stats.applied}</strong><small>對應題庫達標</small></div><div class="card stat"><span>48h 待複習</span><strong>${stats.due}</strong><small>${stats.mastered} 課已掌握</small></div></div>
      <div class="section-title"><div><h2>8 個模組</h2><p>先選模組，再依序完成每一課。</p></div></div><div class="system-module-grid">${MODULES.map(m=>{const ms=moduleStats(m);return `<button class="system-module-card ${m.id===selected?'active':''}" data-system-module="${esc(m.id)}"><span>${esc(m.id)}</span><h3>${esc(m.title_zh)}</h3><p>${esc(m.title_ja||'')}</p><div class="progress"><i style="width:${pct(ms.understood,ms.total)}%"></i></div><small>${ms.understood}/${ms.total} 已理解 · ${ms.mastered} 已掌握</small></button>`}).join('')}</div>
      <div class="section-title"><div><h2>${esc(mod?.id||'')}｜${esc(mod?.title_zh||'')}</h2><p>${lessons.length} 課 · 點擊課程進入完整教材。</p></div>${stats.due?`<button class="btn warn" id="openDueLesson">開始 48h 複習</button>`:''}</div><div class="system-lesson-list">${lessons.map((l,i)=>{const st=lessonStatus(l),ls=st.lessonState;return `<button class="card system-lesson-row" data-system-lesson="${esc(l.id)}"><div class="lesson-index">${String(i+1).padStart(2,'0')}</div><div class="lesson-row-main"><div class="lesson-row-title"><b>${esc(l.title_zh)}</b><span class="status-badge status-${st.key}">${esc(st.label)}</span></div><span>${esc(l.title_ja||'')}</span><div class="lesson-row-meta"><small>Quick ${Math.round((ls.bestScore||0)*100)}%</small><small>題庫 ${st.questionStats.attempted}/${st.questionStats.total}</small><small>正確率 ${st.questionStats.accuracy}%</small>${ls.dueAt&&!ls.reviewed48h?`<small>48h：${formatDateTime(ls.dueAt)}</small>`:''}</div></div><span class="lesson-arrow">→</span></button>`}).join('')}</div>`;
    document.querySelectorAll('[data-system-module]').forEach(b=>b.onclick=()=>{lessonModuleFilter=b.dataset.systemModule;renderSystem()});document.querySelectorAll('[data-system-lesson]').forEach(b=>b.onclick=()=>openLesson(b.dataset.systemLesson));
    const dueBtn=document.getElementById('openDueLesson');if(dueBtn)dueBtn.onclick=()=>{const due=dueLessonReviews()[0];if(due)openLesson(due.id)};
  }

  function modeCard(mode,title,meta,desc){return `<button class="mode-card" data-start="${mode}"><h3>${esc(title)}</h3><p>${esc(desc)}</p><div class="meta">${esc(meta)}</div></button>`}
  function bindStartButtons(){document.querySelectorAll('[data-start]').forEach(b=>b.addEventListener('click',()=>{const m=b.dataset.start;if(m==='system'){switchView('system');return}if(m==='knowledge'){switchView('knowledge');return}if(m==='business'){switchView('business');return}if(m==='listening'){switchView('listening');return}if(m==='original'){session=null;practiceLibraryMode='original';originalBookFocus=null;switchView('practice');return}startSession(m)}))}

  function originalBookById(id){return ORIGINAL_READING_BOOKS.find(b=>b.id===id)||null}
  function originalBookIds(book){return (book?.sections||[]).flatMap(sec=>sec.ids||[]).filter(id=>QMAP[id])}
  function originalPendingIds(){const assigned=new Set(ORIGINAL_READING_BOOKS.flatMap(originalBookIds));return ORIGINAL_ORDER.filter(id=>!assigned.has(id)&&QMAP[id])}
  function originalSectionIds(book,sectionId){const sec=(book?.sections||[]).find(x=>x.id===sectionId);return (sec?.ids||[]).filter(id=>QMAP[id])}
  function originalScopeStats(ids){const list=ids.map(id=>QMAP[id]).filter(Boolean);return {list,mastery:masteryStats(list),attempted:list.filter(q=>(progressOf(q.id).attempts||0)>0).length}}
  function startOriginalScope(bookId,sectionId=null,random=false){
    const pending=bookId===ORIGINAL_PENDING.id,book=pending?null:originalBookById(bookId);let ids=pending?originalPendingIds():(sectionId?originalSectionIds(book,sectionId):originalBookIds(book));
    if(random)ids=shuffle(ids);if(!ids.length){toast('這個範圍目前沒有題目。');return}
    originalBookFocus=bookId;practiceLibraryMode='original';createSession(sectionId?'original-section':'original-book',ids,{originalBookId:bookId,originalSectionId:sectionId,originalRandom:random});switchView('practice');
  }
  function renderOriginalBookCard(book){const ids=originalBookIds(book),st=originalScopeStats(ids);return `<article class="card library-book-card"><div class="library-book-head"><div><span class="player-kicker">READING BOOK ${String(book.order).padStart(2,'0')}</span><h3>${esc(book.title)}</h3><p>${esc(book.subtitle||'')}</p></div><strong>${ids.length}<small>題</small></strong></div><div class="progress mastery-progress"><i style="width:${st.mastery.percent}%"></i></div><div class="library-book-meta"><span>熟練 ${st.mastery.mastered}/${ids.length}</span><span>已作答 ${st.attempted}/${ids.length}</span><span>3 Sections</span></div><button class="btn primary" data-original-book="${esc(book.id)}">進入本冊</button></article>`}
  function renderOriginalLibrary(root){
    const totalOriginal=QUESTIONS.filter(q=>q.source==='原題').length;
    if(!originalBookFocus){const pending=originalScopeStats(originalPendingIds());root.innerHTML=`<div class="session-return-bar"><button class="btn session-return-btn" id="originalLibraryBack">← 回刷題選擇</button><span>原題依 BJT 讀解 30 題結構分冊</span></div><section class="card library-hero"><div><span class="player-kicker">READING ORIGINAL LIBRARY</span><h2>讀解原題｜${totalOriginal} 題</h2><p>完整冊採 30 題：語彙・文法 10＋表現讀解 10＋綜合讀解 10。目前 ${totalOriginal} 題已整理出 3 冊完整模擬，另有 ${pending.list.length} 題保留在未編冊區。</p></div><div class="library-hero-count"><strong>3</strong><span>完整冊</span></div></section><div class="library-book-grid">${ORIGINAL_READING_BOOKS.map(renderOriginalBookCard).join('')}<article class="card library-book-card pending"><div class="library-book-head"><div><span class="player-kicker">PENDING</span><h3>${esc(ORIGINAL_PENDING.title)}</h3><p>${esc(ORIGINAL_PENDING.subtitle)}</p></div><strong>${pending.list.length}<small>題</small></strong></div><div class="library-book-meta"><span>尚未正式編冊</span><span>湊齊下一冊後再整理 Section</span></div><button class="btn" data-original-book="${esc(ORIGINAL_PENDING.id)}">查看 ${pending.list.length} 題</button></article></div>`;document.getElementById('originalLibraryBack').onclick=()=>{practiceLibraryMode=null;originalBookFocus=null;renderPractice()};root.querySelectorAll('[data-original-book]').forEach(b=>b.onclick=()=>{originalBookFocus=b.dataset.originalBook;renderPractice();window.scrollTo({top:0,behavior:'smooth'})});return}
    if(originalBookFocus===ORIGINAL_PENDING.id){const ids=originalPendingIds(),st=originalScopeStats(ids);root.innerHTML=`<div class="session-return-bar"><button class="btn session-return-btn" id="originalBooksBack">← 回原題分冊</button><span>未編冊真題不硬塞進已完成的 30 題模擬冊</span></div><section class="card library-detail-hero"><span class="player-kicker">PENDING QUESTIONS</span><h2>未編冊真題｜${ids.length} 題</h2><p>目前未被正式編入完整冊的原題都會自動集中在這裡。可以先練習；之後新增原題也會先進入此區，再由我們依 10＋10＋10 結構整理成下一冊。</p><div class="library-detail-actions"><button class="btn primary" data-original-scope="pending">順序練習 ${ids.length} 題</button><button class="btn" data-original-random="pending">隨機練習</button></div><div class="library-book-meta"><span>熟練 ${st.mastery.mastered}/${ids.length}</span><span>已作答 ${st.attempted}/${ids.length}</span></div></section>`;document.getElementById('originalBooksBack').onclick=()=>{originalBookFocus=null;renderPractice()};root.querySelector('[data-original-scope]').onclick=()=>startOriginalScope(ORIGINAL_PENDING.id);root.querySelector('[data-original-random]').onclick=()=>startOriginalScope(ORIGINAL_PENDING.id,null,true);return}
    const book=originalBookById(originalBookFocus);if(!book){originalBookFocus=null;renderPractice();return}const ids=originalBookIds(book),st=originalScopeStats(ids);
    root.innerHTML=`<div class="session-return-bar"><button class="btn session-return-btn" id="originalBooksBack">← 回原題分冊</button><span>${esc(book.title)} · 30 題完整模擬</span></div><section class="card library-detail-hero"><span class="player-kicker">READING ${String(book.order).padStart(2,'0')}</span><h2>${esc(book.title)}｜30 題</h2><p>10＋10＋10 的完整讀解結構。${book.note?esc(book.note):'可整冊模擬，也可以只練單一 Section。'}</p><div class="library-detail-actions"><button class="btn primary" data-original-full="${esc(book.id)}">▶ 完整模擬 30 題</button><button class="btn" data-original-full-random="${esc(book.id)}">整冊隨機</button></div><div class="library-book-meta"><span>熟練 ${st.mastery.mastered}/${ids.length}</span><span>已作答 ${st.attempted}/${ids.length}</span><span>完成率 ${st.mastery.percent}%</span></div></section><div class="section-title"><div><h2>選擇 Section</h2><p>Section 結構保留，可針對單一能力練習。</p></div></div><div class="library-section-grid">${book.sections.map(sec=>{const ss=originalScopeStats(sec.ids);return `<article class="card library-section-card"><div><span>${esc(sec.id)}</span><h3>${esc(sec.title)}</h3><p>${sec.ids.length} 題 · 熟練 ${ss.mastery.mastered}/${sec.ids.length} · 已作答 ${ss.attempted}/${sec.ids.length}</p></div><div class="actions"><button class="btn primary" data-original-section="${esc(book.id)}|${esc(sec.id)}">順序練習</button><button class="btn" data-original-section-random="${esc(book.id)}|${esc(sec.id)}">隨機</button></div></article>`}).join('')}</div>`;
    document.getElementById('originalBooksBack').onclick=()=>{originalBookFocus=null;renderPractice()};root.querySelector('[data-original-full]').onclick=()=>startOriginalScope(book.id);root.querySelector('[data-original-full-random]').onclick=()=>startOriginalScope(book.id,null,true);root.querySelectorAll('[data-original-section]').forEach(b=>b.onclick=()=>{const [bid,sid]=b.dataset.originalSection.split('|');startOriginalScope(bid,sid)});root.querySelectorAll('[data-original-section-random]').forEach(b=>b.onclick=()=>{const [bid,sid]=b.dataset.originalSectionRandom.split('|');startOriginalScope(bid,sid,true)});
  }

  function startSession(mode){
    let list=[];
    if(mode==='original') list=QUESTIONS.filter(q=>q.source==='原題');
    if(mode==='extension') list=shuffle(QUESTIONS.filter(q=>q.source==='延伸')).slice(0,state.settings.extensionSize);
    if(mode==='mixed'){const pool=state.settings.includeBusinessInMixed?QUESTIONS:QUESTIONS.filter(q=>q.course!=='practical_business');list=shuffle(pool).slice(0,state.settings.mixedSize);}
    if(String(mode).startsWith('business-ch')){const ch=Number(String(mode).replace('business-ch',''));list=BUSINESS_QUESTIONS.filter(q=>q.chapter===ch);}
    if(mode==='weak') list=shuffle(weakQuestions());
    if(mode==='due') list=shuffle(dueQuestions());
    if(String(mode).startsWith('mastery-')) list=masteryFilter(QUESTIONS,progressOf,mode);
    if(!list.length){const emptyMsg={weak:'目前沒有弱點題。',due:'目前沒有到期複習題。','mastery-incomplete':'全部題目都已達成 5 次正解。','mastery-one':'目前沒有只差 1 次正解的題目。','mastery-zero':'目前沒有 0 次正解的題目。','mastery-done':'目前還沒有達成 5 次正解的題目。','mastery-high-error':'目前沒有答錯 3 次以上的題目。'}[mode]||'目前沒有符合條件的題目。';toast(emptyMsg);switchView('practice');return}
    if(mode==='original') list=[...list]; else list=shuffle(list);
    createSession(mode,list.map(q=>q.id));
    switchView('practice');
  }
  function createSession(mode,ids,extra={}){session={mode,ids:[...ids],index:0,correct:0,wrong:0,records:{},lastXpGain:0,...extra};currentPrepared=null;currentAnswered=false;currentSelectedOriginalIndex=null}
  function prepareQuestion(q){
    const opts=q.options.map((text,i)=>({text,correct:i===q.answer,originalIndex:i}));
    return {...q, preparedOptions:state.settings.shuffleOptions?shuffle(opts):opts};
  }
  function currentQ(){ if(!session) return null; return QMAP[session.ids[session.index]]; }
  function sessionRecord(index=session?.index){if(!session||index<0||index>=session.ids.length)return null;session.records=session.records||{};const key=String(index);if(!session.records[key]){const q=QMAP[session.ids[index]];if(!q)return null;const prepared=prepareQuestion(q);session.records[key]={qid:q.id,preparedOptions:prepared.preparedOptions,answered:false,correct:null,selectedOriginalIndex:null}}return session.records[key]}
  function syncCurrentFromSession(){const q=currentQ();if(!q)return;const rec=sessionRecord();currentPrepared={...q,preparedOptions:rec.preparedOptions,_sessionIndex:session.index};currentAnswered=!!rec.answered;currentSelectedOriginalIndex=rec.selectedOriginalIndex}
  function goToQuestion(index){if(!session)return;if(index<0)return;if(index>=session.ids.length){session.index=session.ids.length;currentPrepared=null;currentAnswered=false;currentSelectedOriginalIndex=null;renderPractice();window.scrollTo({top:0,behavior:'smooth'});return}session.index=index;syncCurrentFromSession();renderPractice();window.scrollTo({top:0,behavior:'smooth'})}
  function previousQuestion(){if(!session||session.index<=0)return;goToQuestion(session.index-1)}
  function nextQuestion(){if(!session)return;if(session.mode==='battle'&&!currentAnswered){toast('Boss 戰不能跳過未作答題。');return}goToQuestion(session.index+1)}
  function openQuestionMap(){if(!session)return;const modal=document.getElementById('questionMapModal');if(!modal)return;const battle=session.mode==='battle';modal.hidden=false;modal.innerHTML=`<div class="question-map-card"><div class="question-map-head"><div><b>題目一覽</b><span>${session.ids.length} 題 · ★★★★★ = 累積 5 次正解</span></div><button class="btn" id="closeQuestionMap">關閉</button></div><div class="question-map-grid">${session.ids.map((id,i)=>{const r=session.records?.[String(i)],m=questionMastery(id);const status=r?.answered?(r.correct?'correct':'wrong'):'unanswered';const disabled=battle&&i>session.index&&!r?.answered;return `<button class="question-map-item ${status} ${i===session.index?'current':''}" data-map-index="${i}" ${disabled?'disabled':''}>${i+1}<small>${status==='correct'?'✓':status==='wrong'?'✕':'○'}</small><em>${m.stars}</em></button>`}).join('')}</div><div class="question-map-legend"><span>✓ 正解</span><span>✕ 不正解</span><span>○ 未回答</span><span>▶ 現在</span><span>★★★★★ 熟練</span></div></div>`;document.getElementById('closeQuestionMap').onclick=()=>{modal.hidden=true;modal.innerHTML=''};modal.onclick=e=>{if(e.target===modal){modal.hidden=true;modal.innerHTML=''}};modal.querySelectorAll('[data-map-index]').forEach(b=>b.onclick=()=>{modal.hidden=true;modal.innerHTML='';goToQuestion(Number(b.dataset.mapIndex))})}
  function practiceParentMeta(){
    if(!session)return {label:'回刷題選擇',view:'practice'};
    if(session.mode==='battle')return {label:'回 BJT BATTLE',view:'battle'};
    if(session.originLessonId)return {label:'回系統課程',view:'system',lessonId:session.originLessonId};
    if(session.originalBookId){const b=originalBookById(session.originalBookId);return {label:session.originalBookId===ORIGINAL_PENDING.id?'回未編冊真題':`回原題${b?.title||''}`,view:'practice',originalBookId:session.originalBookId};}
    if(String(session.mode||'').startsWith('business-ch'))return {label:'回實用商務',view:'business'};
    return {label:'回刷題選擇',view:'practice'};
  }
  function exitPracticeToParent(){
    const meta=practiceParentMeta(),lessonId=meta.lessonId;session=null;currentPrepared=null;currentAnswered=false;currentSelectedOriginalIndex=null;
    if(meta.view==='system'&&lessonId){lessonFocusId=lessonId;lessonModuleFilter=LMAP[lessonId]?.moduleId||lessonModuleFilter;}
    if(meta.originalBookId){practiceLibraryMode='original';originalBookFocus=meta.originalBookId;}
    switchView(meta.view);window.scrollTo({top:0,behavior:'smooth'});
  }
  function renderPractice(){
    const root=document.getElementById('view-practice');
    if(!session){
      if(practiceLibraryMode==='original'){renderOriginalLibrary(root);return}
      const ms=masteryStats(QUESTIONS),one=QUESTIONS.filter(q=>(progressOf(q.id).correct||0)===MASTERY_TARGET-1).length,zero=QUESTIONS.filter(q=>(progressOf(q.id).correct||0)===0).length,high=QUESTIONS.filter(q=>(progressOf(q.id).wrong||0)>=3).length,orig=ORIGINAL_ORDER.filter(id=>QMAP[id]).length;
      root.innerHTML=`<section class="card mastery-home-card"><div class="mastery-home-copy"><span class="player-kicker">QUESTION MASTERY</span><h2>刷題完成率 ${ms.percent}%</h2><p>${ms.mastered} / ${ms.total} 題已達成 ★★★★★。每題累積答對 ${MASTERY_TARGET} 次即完成，答錯次數另行保留。</p><div class="progress mastery-progress"><i style="width:${ms.percent}%"></i></div></div><div class="mastery-filter-actions"><button class="btn primary" data-start="mastery-incomplete">未完成 ${ms.remaining}</button><button class="btn" data-start="mastery-one">差 1 次 ${one}</button><button class="btn" data-start="mastery-zero">0 次正解 ${zero}</button><button class="btn" data-start="mastery-done">已完成 ${ms.mastered}</button><button class="btn ${high?'bad':''}" data-start="mastery-high-error">高錯誤 ${high}</button></div></section><div class="section-title"><div><h2>選擇刷題方式</h2><p>原題先打底，延伸題負責把知識變成真正會用。</p></div></div><div class="grid mode-grid">
        ${modeCard('system','系統學習',`${LESSONS.length} 課／${systemStats().understood} 課已理解`,'先建立 BJT 的人物關係、敬語、交涉、聽解、讀解與高階語用框架。')}
        ${modeCard('original','讀解原題分冊',`${orig} 題｜3 冊完整模擬 + 未編冊`,'依 30 題正式讀解結構分冊；可整冊或按 Section 練習。')}
        ${modeCard('extension','知識點延伸','隨機抽題','既有 BJT 知識點皆有針對性延伸題；干擾選項限定在同一語義／文法範圍。')}
        ${modeCard('mixed','綜合混合','日常模式','原題 + 延伸題混合；可在設定決定是否加入 200 題實用商務。')}
        ${modeCard('weak','弱點集中',`${weakQuestions().length} 題`,'只練最近答錯、錯多於對、或手動標記的題。')}
        ${modeCard('due','間隔複習',`${dueQuestions().length} 題`,'到期題集中複習。')}
        ${modeCard('knowledge','先看知識卡',`${KNOW.length} 張`,'先理解再刷題。')}
      </div>`; bindStartButtons(); return;
    }
    if((session.mode==='battle'&&session.bossHp<=0)||session.index>=session.ids.length){renderSessionEnd(root);return}
    syncCurrentFromSession();
    const q=currentQ(); if(!q){renderSessionEnd(root);return}
    const p=progressOf(q.id), mastery=masteryOfProgress(p); const fav=state.favorites.includes(q.id); const weak=state.weak.includes(q.id);
    const related=(q.tags||[]).map(t=>KMAP[t]).filter(Boolean);
    const rec=sessionRecord();
    const battle=session.mode==='battle';
    const cfg=battle?bossConfig(session.bossId):null;
    const battleHud=battle?`<div class="battle-hud"><div class="battle-hud-top"><div><span>${esc(cfg?.subtitle||'BJT BATTLE')}</span><h2>${esc(cfg?.name||'BOSS')}</h2></div><div class="battle-combo"><span id="battleComboCount">${session.battleCombo||0}</span><small>COMBO</small></div></div><div class="boss-hp-row"><b>HP</b><div class="boss-hp"><i id="bossHpFill" style="width:${pct(Math.max(0,session.bossHp||0),session.bossMaxHp||1)}%"></i></div><span id="bossHpText">${Math.max(0,session.bossHp||0)} / ${session.bossMaxHp||0}</span></div></div>`:'';
    const parentMeta=practiceParentMeta();
    root.innerHTML=`<div class="session-return-bar"><button class="btn session-return-btn" id="practiceHomeBtn">← ${esc(parentMeta.label)}</button><span>${battle?'Boss 戰鬥中':'本輪進度會自動保留已作答紀錄'}</span></div>${battleHud}<div class="practice-layout">
      <div class="card practice-panel">
        <div class="practice-head"><span class="q-number">${battle?'BATTLE QUEST':'第'} ${session.index+1} / ${session.ids.length}${battle?'':' 題'} · ${esc(q.category)}</span><span class="q-source">${esc(q.source)}</span></div>
        <div class="practice-status-strip"><span id="globalComboText">🔥 ${state.game.currentCombo||0} COMBO</span><span>⚡ Lv.${gameLevel()} ${esc(mainTitleAt().name)}</span>${equippedSpecial()?`<span>🏆 《${esc(equippedSpecial().name)}》</span>`:''}</div>
        <div class="progress"><i style="width:${pct(session.index,session.ids.length)}%"></i></div>
        ${q.passage?`<div class="reading-passage ${q.course==='practical_business'?'business-scenario':''}"><div class="reading-passage-head"><span>${q.course==='practical_business'?'情境':'閱讀文章'}</span><small>${q.course==='practical_business'?'先確認人物關係與發話目的':'請先讀完整前文，再回答下方問題'}</small></div><div class="reading-passage-text">${esc(state.settings.showReadings&&q.readingPassage?q.readingPassage:q.passage)}</div></div>`:''}
        ${(q.assets||[]).length?`${q.visual_required?'<div class="visual-required-alert"><b>⚠️ 此題必須看圖作答</b><span>圖片是題目本體的一部分，請先確認圖表後再選答案。</span><small class="visual-load-status">圖片載入中，完成前暫停作答。</small></div>':''}<div class="question-assets">${q.assets.map((src,i)=>`<figure><button class="question-image-btn" data-image-viewer="${esc(src)}" data-image-alt="題目資料 ${i+1}"><img src="${esc(src)}" alt="題目資料 ${i+1}" loading="${q.visual_required?'eager':'lazy'}"><span>🔍 點擊放大</span></button><figcaption>${q.visual_required?'必看圖表':'題目資料'} ${i+1}</figcaption></figure>`).join('')}</div>`:''}
        <div class="stem">${esc(q.stem)}</div>
        <div class="options">${currentPrepared.preparedOptions.map((o,i)=>`<button class="option" data-opt="${i}"><span class="key">${i+1}</span><span>${esc(state.settings.showReadings&&q.readingOptions?q.readingOptions[o.originalIndex]:o.text)}</span></button>`).join('')}</div>
        <div class="question-navigation"><button class="btn" id="prevQuestionBtn" ${session.index<=0?'disabled':''}>← 上一題</button><button class="btn" id="questionMapBtn">題目一覽</button><span class="question-nav-count">${session.index+1} / ${session.ids.length}</span><button class="btn primary" id="nextQuestionNavBtn">${battle&&!currentAnswered?'作答後前進':(session.index+1>=session.ids.length?'完成本輪':'下一題 →')}</button></div>
        ${!battle&&!currentAnswered?'<div class="skip-hint">未作答也可以先跳過；不會自動判錯。</div>':''}
        <div id="feedback"></div>
      </div>
      <aside class="grid">
        <div class="card side-card"><h3>這題的熟練度</h3>${masteryStatusHTML(p,{prefix:'questionMastery'})}<div class="mini-list"><div class="mini-item"><b>作答 ${p.attempts} 次</b><small>目前連續答對 ${p.streak} 次 · streak 只用於安排間隔複習</small></div><div class="mini-item"><b>關聯知識 ${related.length} 個</b><small>${related.map(k=>k.title).join('、')||'—'}</small></div></div><div class="actions"><button class="btn" id="favBtn">${fav?'★ 已收藏':'☆ 收藏'}</button><button class="btn ${weak?'warn':''}" id="weakBtn">${weak?'已標記不熟':'標記不熟'}</button></div></div>
        ${q.course==='practical_business'&&businessRoleMeta(q)?`<div class="card side-card role-card"><h3>角色／場景圖</h3><div class="role-flow"><span>我方</span><b>⇄</b><span>對方／關係人</span></div><p class="small"><b>${esc(businessRoleMeta(q).relation)}</b><br>核心：${esc(businessRoleMeta(q).core)}</p></div>`:''}<div class="card side-card"><h3>答題原則</h3><p class="small">敬語先看「誰做動作」；閱讀先找「作者真正要你做什麼」；固定搭配不要只靠中文直覺。</p></div>
      </aside>
    </div>`;
    document.getElementById('practiceHomeBtn').onclick=exitPracticeToParent;
    document.querySelectorAll('.option').forEach(b=>b.addEventListener('click',()=>answerQuestion(Number(b.dataset.opt))));
    document.getElementById('favBtn').addEventListener('click',()=>toggleFav(q.id));
    document.getElementById('weakBtn').addEventListener('click',()=>toggleWeak(q.id));
    document.getElementById('prevQuestionBtn').onclick=previousQuestion;
    document.getElementById('questionMapBtn').onclick=openQuestionMap;
    document.getElementById('nextQuestionNavBtn').onclick=nextQuestion;
    bindRequiredVisualGate(q);
    if(currentAnswered){
      document.querySelectorAll('.option').forEach((b,i)=>{const o=currentPrepared.preparedOptions[i];b.classList.add('disabled');if(o.correct)b.classList.add('correct');if(o.originalIndex===currentSelectedOriginalIndex&&!o.correct)b.classList.add('wrong')});
      showFeedback();
    }
  }
  function bindRequiredVisualGate(q){
    if(!q?.visual_required||currentAnswered)return;
    const imgs=[...document.querySelectorAll('.question-assets img')],opts=[...document.querySelectorAll('.option')],alert=document.querySelector('.visual-required-alert'),status=document.querySelector('.visual-load-status');
    if(!imgs.length){opts.forEach(b=>b.disabled=true);if(alert)alert.classList.add('visual-load-error');if(status)status.textContent='圖片資料缺失，這題已鎖定，請不要作答。';return}
    const sync=()=>{const failed=imgs.some(img=>img.dataset.loadFailed==='1'||(img.complete&&img.naturalWidth===0)),ready=!failed&&imgs.every(img=>img.complete&&img.naturalWidth>0);opts.forEach(b=>b.disabled=!ready);if(alert)alert.classList.toggle('visual-load-error',failed);if(status)status.textContent=failed?'圖片載入失敗，這題已鎖定；請重新整理或確認 assets 圖片檔。':ready?'✓ 圖片已完整載入，可以作答。':'圖片載入中，完成前暫停作答。'};
    imgs.forEach(img=>{img.addEventListener('load',sync);img.addEventListener('error',()=>{img.dataset.loadFailed='1';sync()})});sync();
  }
  function battleDamageForCombo(combo,base){const mult=combo>=10?1.5:combo>=5?1.2:combo>=3?1.1:1;return Math.round(base*mult)}
  function answerQuestion(index){
    if(currentAnswered) return;
    const q=currentPrepared, selected=q.preparedOptions[index], correct=!!selected.correct, rec=sessionRecord();
    const p=progressOf(q.id), now=Date.now(), wasWrongBefore=(p.wrong||0)>0, wasDue=(p.attempts||0)>0&&(p.due||0)>0&&(p.due||0)<=now, wasMastered=(p.correct||0)>=MASTERY_TARGET;
    currentAnswered=true; currentSelectedOriginalIndex=selected.originalIndex; session.lastXpGain=0;
    rec.answered=true;rec.correct=correct;rec.selectedOriginalIndex=selected.originalIndex;rec.answeredAt=now;
    if(correct) session.correct++; else session.wrong++;
    p.attempts=(p.attempts||0)+1; if(correct){p.correct=(p.correct||0)+1;p.streak=(p.streak||0)+1;}else{p.wrong=(p.wrong||0)+1;p.streak=0;}
    p.lastCorrect=correct; p.lastAt=now; p.due=now+(correct?(p.streak>=3?7:p.streak===2?3:1)*86400000:3600000);
    state.progress[q.id]=p;
    handleQuestionRewards(q,correct,wasWrongBefore,wasDue);
    if(correct&&!wasMastered&&(p.correct||0)>=MASTERY_TARGET){awardXp(5,'題目熟練');rec.masteredNow=true;queueAnnouncement({kind:'mastery',kicker:'QUESTION MASTERED',title:'★★★★★',body:`此題已累積 ${MASTERY_TARGET} 次正解。刷題完成度 +1`})}
    if(session.mode==='battle'){
      const cfg=bossConfig(session.bossId);session.battleCombo=correct?(session.battleCombo||0)+1:0;session.battleMaxCombo=Math.max(session.battleMaxCombo||0,session.battleCombo||0);
      if(correct){const dmg=battleDamageForCombo(session.battleCombo,cfg?.baseDamage||40);session.bossHp=Math.max(0,(session.bossHp||0)-dmg);session.lastBattleEvent={type:session.battleCombo>=10?'critical':'hit',damage:dmg};rec.battleEvent={...session.lastBattleEvent};if(session.bossHp<=0)completeBoss(session.bossId)}else{session.lastBattleEvent={type:'miss',damage:0};rec.battleEvent={...session.lastBattleEvent}}
    }
    rec.xpGain=session.lastXpGain||0;checkGameAchievements();saveState();
    document.querySelectorAll('.option').forEach((b,i)=>{const o=q.preparedOptions[i];b.classList.add('disabled');if(o.correct)b.classList.add('correct');if(i===index&&!o.correct)b.classList.add('wrong')});
    const navNext=document.getElementById('nextQuestionNavBtn');if(navNext)navNext.textContent=session.mode==='battle'&&session.bossHp<=0?'查看戰果':(session.index+1>=session.ids.length?'完成本輪':'下一題 →');const comboText=document.getElementById('globalComboText');if(comboText)comboText.textContent=`🔥 ${state.game.currentCombo||0} COMBO`;const bc=document.getElementById('battleComboCount');if(bc)bc.textContent=session.battleCombo||0;const hpFill=document.getElementById('bossHpFill');if(hpFill)hpFill.style.width=`${pct(Math.max(0,session.bossHp||0),session.bossMaxHp||1)}%`;const hpText=document.getElementById('bossHpText');if(hpText)hpText.textContent=`${Math.max(0,session.bossHp||0)} / ${session.bossMaxHp||0}`;
    updateQuestionMasteryDom(q.id);showFeedback(correct);
  }
  function optionUsageHint(text=''){
    const t=String(text);
    const rules=[
      [/なにやら/, '「なにやら」＝不知怎麼回事、似乎有什麼，表示情況不明。'],
      [/なにかと/, '「なにかと」＝各方面、諸事，常見「年末はなにかと忙しい」。'],
      [/なにぶん/, '「なにぶん」＝畢竟、由於情況如此，常和「～もので」搭配。'],
      [/何卒|なにとぞ/, '「何卒（なにとぞ）」＝懇請、務必，是正式請求常用副詞。'],
      [/見極/, '「見極める」＝經觀察、分析後判斷本質、能力、適性或時機。'],
      [/見限/, '「見限る」＝徹底失去希望而放棄某人／某方。'],
      [/見切/, '「見切る」＝看穿、判斷到底，也常見「見切りをつける」＝決定放棄。'],
      [/見通/, '「見通し」＝前景、展望；「見通す」＝看透／預見。'],
      [/わりには/, '「～わりには」＝按前項條件來看，後項卻與一般預期不符。'],
      [/からには/, '「～からには」＝既然……就……，後項常是責任、決心或義務。'],
      [/からこそ/, '「～からこそ」＝正因為……才……，強調因果。'],
      [/ことから/, '「～ことから」＝由於……／從……可以判斷，偏客觀原因或依據。'],
      [/断念/, '「断念する」＝因困難等原因放棄原本打算，通常比「見送る」更接近放棄。'],
      [/廃止/, '「廃止する」＝正式取消制度、措施或既有事物。'],
      [/禁止/, '「禁止する」＝明文不准做某行為。'],
      [/ご忠告/, '「ご忠告」＝對方給的忠告、勸告。'],
      [/ご発言/, '「ご発言」＝對方的發言。'],
      [/ご配慮/, '「ご配慮」＝替對方設想、費心安排、關照。'],
      [/ご注意/, '「ご注意」＝提醒、注意。'],
      [/口が重い/, '「口が重い」＝話少、不容易開口。'],
      [/腰が重い/, '「腰が重い」＝遲遲不行動、難以開始。'],
      [/荷が重い/, '「荷が重い」＝責任／任務對自己而言負擔過重。'],
      [/気が重い/, '「気が重い」＝心情沉重、不想面對。'],
      [/すっきり/, '「すっきり」＝清爽、舒暢、俐落。'],
      [/あっさり/, '「あっさり」＝清淡；也可表示輕易、乾脆。'],
      [/きっかり/, '「きっかり」＝正好、精確，常接時間、金額、數量。'],
      [/さっぱり/, '「さっぱり」可表示清爽；和否定／業績狀態搭配時也可表示完全不行、毫無起色。'],
      [/かねがね/, '「かねがね」＝以前から、早就、一直以來。'],
      [/ご苦労様/, '「ご苦労様」＝慰勞對方辛苦，傳統上較常由上位者對下位者使用。'],
      [/お世話様/, '「お世話様」是感謝照顧／辛勞的寒暄，不是原因接續詞。'],
      [/御社/, '「御社（おんしゃ）」＝貴公司，主要用於會話。'],
      [/貴社/, '「貴社（きしゃ）」＝貴公司，主要用於書面。'],
      [/弊社/, '「弊社（へいしゃ）」＝敝公司、我方公司。'],
      [/検品/, '「検品」＝商品到貨後檢查數量、外觀、品質或動作。'],
      [/着荷/, '「着荷」＝貨物抵達目的地。'],
      [/代替|代わりの商品/, '「代替品」＝用來替換損壞／缺貨商品的替代商品。'],
      [/不具合/, '「不具合」＝產品、系統等出現瑕疵、異常、故障。'],
      [/新規/, '「新規」＝新辦、第一次申請／新進入。'],
      [/更新/, '「更新」＝續約、更新既有契約或訂閱。'],
      [/各自負担/, '「各自負担」＝最後由各人自己承擔費用，不會由公司報銷。'],
      [/同等/, '「同等」＝同一程度、相當。'],
      [/銀行並み/, '「～並み」＝和～差不多、達到～的程度。'],
      [/利便性に欠ける/, '「～に欠ける」＝缺乏～；「利便性に欠ける」＝不夠方便。'],
      [/ご覧ください/, '「ご覧ください」＝請您看；是對方「見る」的尊敬表現。'],
      [/ご覧にな/, '「ご覧になる」＝尊敬語「看」，主體應是對方／上位者。'],
      [/拝見/, '「拝見する」＝「見る」的謙讓語，主體是自己／我方。'],
      [/存じておりません/, '「存じておりません」＝「知っていません」的謙讓／鄭重表現。'],
      [/ご存じ/, '「ご存じ」＝「知っている」的尊敬語，用於對方／上位者。'],
      [/おっしゃられる|お集めになられた|くださられた|お読みになられた/, '這類形式把已成立的尊敬語再疊加「れる／られる」，標準敬語題通常視為二重敬語。'],
      [/おっしゃる/, '「おっしゃる」＝「言う」的尊敬語。'],
      [/申し上げ/, '「申し上げる」＝「言う」的謙讓語，通常是我方向尊敬對象說。'],
      [/申し伝え/, '「申し伝える」＝代為轉告，把某人的話傳給另一人。'],
      [/くださ/, '「くださる」＝「くれる」的尊敬語，方向是對方→我方。'],
      [/いただ/, '「いただく」＝「もらう」的謙讓語，方向是我方←對方。'],
      [/差し上げ|さしあげ/, '「差し上げる」＝「あげる」的謙讓語，方向是我方→對方；直接對受惠者說有時會有施恩感。'],
      [/ことにしている/, '「～ことにしている」＝自己決定並持續如此做，常表示個人習慣。'],
      [/ことになっている/, '「～ことになっている」＝制度、規定或既定安排如此。'],
      [/てでも|でも完成|してでも|押し切ってでも/, '「～てでも」＝即使採取那種手段也要達成目的，強調強烈意志。'],
      [/てまで|してまで|押し切ってまで/, '「～てまで」＝甚至做到那種地步，常帶「手段是否過頭」的評價。'],
      [/おかげ/, '「～おかげで」通常把好結果歸因於前項，中文近似「多虧」。'],
      [/せい/, '「～せいで／せいか」多把負面結果歸因於前項；「せいか」帶推測。'],
      [/差し支えなければ/, '「差し支えなければ」＝如果方便／不造成不便，是正式請求前的緩衝語。'],
      [/ご足労/, '「ご足労」＝麻煩對方親自跑一趟。'],
      [/お手数/, '「お手数」＝麻煩對方費工夫做事。'],
      [/お構いなく/, '「お構いなく」＝不用麻煩、不用特別招呼我，常由被招待者說。'],
      [/ご遠慮なく/, '「ご遠慮なく」＝請不要客氣、儘管……，常由招待／提供的一方說。'],
      [/回避/, '「回避」＝避免負面結果發生。'],
      [/忌避/, '「忌避」＝因厭惡、排斥而避開；「リスク忌避」＝風險厭惡。'],
      [/逃避/, '「逃避」＝不願面對而逃開，如「現実逃避」。'],
      [/退避/, '「退避」＝從危險場所撤離到安全處。'],
      [/周知/, '「周知」＝把資訊廣泛通知、讓大家知道。'],
      [/熟知/, '「熟知」＝自己充分理解、非常熟悉。'],
      [/据え置/, '「据え置き」＝不調整、維持現狀（常見價格、利率）。'],
      [/立替/, '「立替払い」＝先自行墊付，之後再精算／報銷；不等於最終自己負擔。'],
      [/前納/, '「前納」＝預先繳納、預付。'],
      [/未納/, '「未納」＝應繳而尚未繳納、欠繳。'],
      [/見送/, '「見送る」＝這次暫不採用／暫緩，通常仍保留未來可能。'],
      [/大盛況/, '「大盛況」＝活動非常熱鬧、成功、參加者很多。'],
      [/とんでもない/, '「とんでもない」可表示荒唐、極其嚴重、超乎常理。'],
      [/わずか/, '「わずか＋數量」＝僅僅只有，和「～にすぎない」很常搭配。'],
      [/兆し/, '「兆し」＝跡象、徵兆；正式書面常說「～の兆しが見られる」。'],
      [/復唱/, '「復唱」＝把剛聽到的內容原樣重複一次確認。'],
      [/折り返し/, '「折り返し電話する」＝回電。'],
      [/にて/, '「にて」是「で」的正式書面用法，可表示手段或場所。'],
      [/および/, '「および」＝以及、及，是正式書面連接語。'],
      [/次第/, '「～次第」＝一……就立刻……，如「入荷次第ご連絡します」。'],
      [/の上/, '「～の上」＝完成前項後再做後項，是正式書面常用接續。'],
    ];
    const hit=rules.find(([re])=>re.test(t));
    return hit?hit[1]:'';
  }
  function inferWrongType(q, text){
    if(q.category==='敬語'||q.category==='授受'||q.category==='接待'||q.category==='接待用語') return '敬語／角色方向不符';
    if(q.category==='固定搭配'||q.category==='慣用語') return '固定搭配／慣用語不符';
    if(q.category==='文法') return '文法功能不符';
    if(q.category==='閱讀'||q.category.startsWith('閱讀')) return '文章資訊／題目焦點不符';
    if(q.category==='近義詞'||q.category==='副詞'||q.category==='語彙'||q.category==='商務詞彙') return '語意或使用情境不符';
    return '不符合本題條件';
  }
  function getChoiceDetail(q, originalIndex){
    const manual=OPTION_DETAILS[q.id];
    const isCorrect=originalIndex===q.answer;
    if(manual && manual[originalIndex]){
      return {type:isCorrect?'正確用法':inferWrongType(q,q.options[originalIndex]),detail:manual[originalIndex],manual:true};
    }
    return {
      type:'資料完整性錯誤',
      detail:'資料完整性錯誤：此題缺少這個選項的獨立詳解。請勿以通用模板代替。',
      manual:false
    };
  }
  function renderAllChoiceDetails(q){
    return q.options.map((text,i)=>{const d=getChoiceDetail(q,i);const ok=i===q.answer;return `<div class="choice-detail ${ok?'is-correct':'is-wrong'}"><div class="choice-detail-head"><span class="choice-no">${i+1}</span><strong>${esc(text)}</strong><span class="choice-badge">${ok?'正解':esc(d.type)}</span></div><p>${esc(d.detail)}</p></div>`}).join('');
  }
  function showFeedback(forceCorrect){
    const q=currentPrepared; const p=progressOf(q.id); const related=(q.tags||[]).map(t=>KMAP[t]).filter(Boolean);const rec=sessionRecord();
    const correct = typeof forceCorrect==='boolean'?forceCorrect:rec?.correct;
    const fb=document.getElementById('feedback'); if(!fb)return;
    const selectedIdx=currentSelectedOriginalIndex;
    const selectedWrong = !correct && Number.isInteger(selectedIdx) ? getChoiceDetail(q,selectedIdx) : null;
    const be=rec?.battleEvent;const battleLine=session?.mode==='battle'&&be?`<div class="battle-result ${be.type}">${be.type==='miss'?'MISS · 這一擊沒有造成傷害':`${be.type==='critical'?'CRITICAL':'HIT'} · -${be.damage} HP`}${session.bossHp<=0?'<b>BOSS CLEAR</b>':''}</div>`:'';
    fb.innerHTML=`<div class="explanation"><div class="feedback-title-row"><h3>${correct?'✓ 正確':'✕ 這題要修正'}</h3>${rec?.xpGain?`<span class="xp-gain">EXP +${rec.xpGain}</span>`:''}</div>${battleLine}
      ${rec?.masteredNow?`<div class="mastery-callout"><b>QUESTION MASTERED</b><span>★★★★★ · 累積 ${MASTERY_TARGET} 次正解</span></div>`:''}
      ${correct&&(state.game.currentCombo||0)>=3?`<div class="combo-callout">🔥 ${state.game.currentCombo} COMBO${state.game.currentCombo>=50?' · 言葉は、もう敵ではない。':state.game.currentCombo>=10?' · CHAIN BREAKER':''}</div>`:''}
      ${selectedWrong?`<div class="wrong-choice-explain"><div class="wrong-choice-title">你選的「${esc(q.options[selectedIdx])}」為什麼不行？</div><span class="wrong-reason-tag">${esc(selectedWrong.type)}</span><p>${esc(selectedWrong.detail)}</p>${q.course==='practical_business'?`<div class="mistake-why"><b>你可能卡在這裡：</b>${esc(businessMistakeHint(q,selectedIdx))}</div>`:''}<div class="error-tag-box"><b>錯因標籤（可複選）</b><div>${errorTagList().map(([code,label])=>`<button class="error-tag ${(state.errorTags[q.id]||[]).includes(code)?'active':''}" data-error-tag="${code}">${code} ${label}</button>`).join('')}</div></div></div>`:''}
      <nav class="explanation-jump-nav"><button class="btn" data-explain-jump="stem">題幹理解</button><button class="btn" data-explain-jump="core">核心解析</button><button class="btn" data-explain-jump="choices">四選項</button></nav>
      ${renderStemUnderstanding(q)}
      <div class="main-explain" id="coreExplanation"><b>本題核心解析</b><p>${esc(q.explanation)}</p></div>
      <div class="actions detail-actions"><button class="btn" id="allDetailsBtn" aria-expanded="false">詳解四個選項</button></div>
      <div id="allChoiceDetails" class="all-choice-details" hidden>${renderAllChoiceDetails(q)}</div>
      ${related.length?`<div class="reading-box"><b>關聯知識與讀音</b>${related.map(k=>`<div><strong>${esc(k.title)}</strong>${state.settings.showReadings&&k.reading?` <span class="small">（${esc(k.reading)}）</span>`:''}<br><span class="small">${esc(k.summary)}</span></div>`).join('<br>')}</div>`:''}
      ${q.passage&&ARTICLE_DETAILS[q.id]?`<div class="article-jump"><b>這是一題文章閱讀題</b><span>文章詳解保留全文假名、中文翻譯、閱讀結構、陷阱與解題策略。</span><button class="btn" id="articleDetailBtn">查看這篇文章的完整詳解</button></div>`:''}
      ${q.course==='practical_business'?`<div class="business-analysis-box"><b>情境解析</b><span>${esc(q.readingPassage||q.passage)}</span><p><strong>核心：</strong>${esc(q.coreKnowledge||'場面判断')}　<strong>本章：</strong>${esc(q.chapterTitle||'')}</p><p>${esc(q.trap||'先判斷人物關係、資訊確定度與說話者真正目的。')}</p></div>`:''}
      <div class="actions"><button class="btn bad" data-rate="again">再學一次</button><button class="btn warn" data-rate="hard">困難</button><button class="btn good" data-rate="good">普通</button><button class="btn primary" data-rate="easy">熟練</button></div>
      <div class="actions">${session?.mode==='battle'?'':`<button class="btn" id="relatedBtn">再出一題關聯題</button>`}<button class="btn primary" id="feedbackNextBtn">${session?.mode==='battle'&&session.bossHp<=0?'查看戰果':(session.index+1>=session.ids.length?'看結果':'下一題 →')}</button></div></div>`;
    document.querySelectorAll('[data-rate]').forEach(b=>b.addEventListener('click',()=>rateCurrent(b.dataset.rate)));document.querySelectorAll('[data-error-tag]').forEach(b=>b.addEventListener('click',()=>toggleErrorTag(q.id,b.dataset.errorTag)));
    const next=document.getElementById('feedbackNextBtn');if(next)next.addEventListener('click',nextQuestion);
    const relatedBtn=document.getElementById('relatedBtn');if(relatedBtn)relatedBtn.addEventListener('click',injectRelatedQuestion);
    const allBtn=document.getElementById('allDetailsBtn'), allBox=document.getElementById('allChoiceDetails');
    allBtn.addEventListener('click',()=>{const open=allBox.hidden;allBox.hidden=!open;allBtn.setAttribute('aria-expanded',String(open));allBtn.textContent=open?'收起四個選項詳解':'詳解四個選項';});
    document.querySelectorAll('[data-explain-jump]').forEach(b=>b.addEventListener('click',()=>{const kind=b.dataset.explainJump;if(kind==='choices'&&allBox.hidden){allBox.hidden=false;allBtn.setAttribute('aria-expanded','true');allBtn.textContent='收起四個選項詳解'}const target=document.getElementById(kind==='stem'?'stemUnderstanding':kind==='core'?'coreExplanation':'allChoiceDetails');if(target){const top=window.scrollY+target.getBoundingClientRect().top-88;window.scrollTo({top:Math.max(0,top),behavior:'smooth'})}}));
    const articleBtn=document.getElementById('articleDetailBtn');
    if(articleBtn) articleBtn.addEventListener('click',()=>openArticle(q.id));
  }
  function rateCurrent(rate){
    const q=currentPrepared,p=progressOf(q.id),now=Date.now(); const days={again:0,hard:1,good:3,easy:10}[rate];
    p.due=now+(rate==='again'?10*60*1000:days*86400000); if(rate==='again'){p.streak=0;if(!state.weak.includes(q.id))state.weak.push(q.id)} if(rate==='easy')p.streak=Math.max(3,p.streak||0);state.progress[q.id]=p;saveState();toast({again:'10 分鐘後再複習',hard:'明天再複習',good:'3 天後再複習',easy:'10 天後再複習'}[rate]);
  }
  function injectRelatedQuestion(){
    const tags=currentPrepared.tags||[]; const candidates=QUESTIONS.filter(x=>x.id!==currentPrepared.id && (x.tags||[]).some(t=>tags.includes(t)) && !session.ids.includes(x.id));
    if(!candidates.length){toast('目前沒有其他關聯題。');return}
    const pick=shuffle(candidates)[0],pos=session.index+1;const nextRecords={};Object.entries(session.records||{}).forEach(([k,v])=>{const i=Number(k);nextRecords[String(i>=pos?i+1:i)]=v});session.records=nextRecords;session.ids.splice(pos,0,pick.id);toast('已把關聯題加入下一題。');renderPractice()
  }
  function completeBoss(id){const cfg=bossConfig(id);if(!cfg)return;const prev=bossState(id),first=!prev.cleared;state.game.bosses[id]={...prev,cleared:true,clearedAt:prev.clearedAt||Date.now(),bestCombo:Math.max(prev.bestCombo||0,session?.battleMaxCombo||0)};registerStudyActivity();if(first){awardXp(cfg.xp||0,'Boss Clear');unlockTitle(cfg.rewardTitle,true);queueAnnouncement({kind:'boss',kicker:'BOSS CLEAR',title:`「${cfg.name}」擊破`,body:`EXP +${cfg.xp||0}`});if(allMainBossesCleared())unlockTitle('boss_all',true)}checkGameAchievements();saveState()}
  function renderSessionEnd(root){
    const total=session.correct+session.wrong, unanswered=Math.max(0,session.ids.length-total), origin=session.originLessonId, battle=session.mode==='battle';
    if(battle){const cfg=bossConfig(session.bossId),cleared=(session.bossHp||0)<=0||bossState(session.bossId).cleared;root.innerHTML=`<section class="card battle-end ${cleared?'cleared':'retreat'}"><span class="player-kicker">${cleared?'BOSS CLEAR':'BATTLE END'}</span><h2>${esc(cfg?.name||'BOSS')}</h2><div class="battle-end-score"><div><b>${session.correct}</b><span>正解</span></div><div><b>${session.wrong}</b><span>MISS</span></div><div><b>${session.battleMaxCombo||0}</b><span>MAX COMBO</span></div></div><p>${cleared?'領域攻略完成。專屬異名已加入稱號殿堂。':'Boss 尚未擊破，可以重新挑戰。'}</p><div class="quick-actions"><button class="btn primary" id="battleBack">回 BJT BATTLE</button><button class="btn" id="battleTitles">查看稱號</button><button class="btn" id="backDash">回總覽</button></div></section>`;document.getElementById('battleBack').onclick=()=>{session=null;switchView('battle')};document.getElementById('battleTitles').onclick=()=>{session=null;switchView('titles')};document.getElementById('backDash').onclick=()=>{session=null;switchView('dashboard')};return}
    if(origin&&!session.lessonResultRecorded){const ls=ensureLessonState(origin),score=total?session.correct/total:0;ls.practiceRuns=(ls.practiceRuns||0)+1;ls.bestPracticeScore=Math.max(ls.bestPracticeScore||0,score);state.learning.lessons[origin]=ls;session.lessonResultRecorded=true;}
    let bonus=0;if(total===session.ids.length&&total>=20){const key=String(session.mode||'session');state.daily.sessionBonuses=state.daily.sessionBonuses||{};if(!state.daily.sessionBonuses[key]){state.daily.sessionBonuses[key]=true;bonus=awardXp(20,'完成一輪')}}if(total>=50&&session.correct===total){state.game.perfect50=true;checkGameAchievements()}saveState();
    const originalScope=!!session.originalBookId,originalLabel=originalScope?(session.originalBookId===ORIGINAL_PENDING.id?'未編冊真題':`原題${originalBookById(session.originalBookId)?.title||''}`):'';
    const primary=unanswered?'<button class="btn primary" id="resumeUnanswered">回到未作答題</button>':origin?'<button class="btn primary" id="backLesson">回系統課程</button>':originalScope?`<button class="btn primary" id="backOriginal">回${esc(originalLabel)}</button>`:'<button class="btn primary" id="restartMixed">再刷綜合題</button>';
    const secondary=unanswered&&origin?'<button class="btn" id="backLesson">回系統課程</button>':unanswered&&originalScope?`<button class="btn" id="backOriginal">回${esc(originalLabel)}</button>`:unanswered?'<button class="btn" id="restartMixed">再刷綜合題</button>':'';
    root.innerHTML=`<div class="card hero session-end"><span class="player-kicker">QUEST COMPLETE</span><h2>本輪完成</h2><p>答對 ${session.correct}／${total}，正確率 ${pct(session.correct,total)}%。${unanswered?`另有 ${unanswered} 題保留未作答。`:''}錯題已自動進入弱點追蹤，並依熟練度安排下次複習。${origin&&session.lessonPracticeScope==='module'?' 本課沒有直接一對一題目，因此本輪使用同模組相關題進行應用訓練。':''}</p>${bonus?`<div class="session-bonus">完整修練獎勵　EXP +${bonus}</div>`:''}<div class="quick-actions">${primary}${secondary}${originalScope?'<button class="btn" id="repeatOriginal">再練本範圍</button>':''}<button class="btn" id="reviewWrong">立刻刷弱點題</button><button class="btn" id="backDash">回總覽</button></div></div>`;
    const resume=document.getElementById('resumeUnanswered');if(resume)resume.onclick=()=>{const idx=session.ids.findIndex((_,i)=>!session.records?.[String(i)]?.answered);goToQuestion(idx>=0?idx:0)};const restart=document.getElementById('restartMixed');if(restart)restart.onclick=()=>startSession('mixed');const backLesson=document.getElementById('backLesson');if(backLesson)backLesson.onclick=()=>{session=null;lessonFocusId=origin;switchView('system')};const backOriginal=document.getElementById('backOriginal');if(backOriginal)backOriginal.onclick=()=>{const bid=session.originalBookId;session=null;practiceLibraryMode='original';originalBookFocus=bid;renderPractice();window.scrollTo({top:0,behavior:'smooth'})};const repeatOriginal=document.getElementById('repeatOriginal');if(repeatOriginal)repeatOriginal.onclick=()=>{const ids=[...session.ids];const extra={originalBookId:session.originalBookId,originalSectionId:session.originalSectionId,originalRandom:session.originalRandom};createSession(session.originalSectionId?'original-section':'original-book',session.originalRandom?shuffle(ids):ids,extra);renderPractice();window.scrollTo({top:0,behavior:'smooth'})};document.getElementById('reviewWrong').onclick=()=>startSession('weak');document.getElementById('backDash').onclick=()=>{session=null;practiceLibraryMode=null;originalBookFocus=null;switchView('dashboard')};
  }
  function toggleFav(id){const i=state.favorites.indexOf(id);if(i>=0)state.favorites.splice(i,1);else state.favorites.push(id);saveState();renderPractice()}
  function toggleWeak(id){const i=state.weak.indexOf(id);if(i>=0)state.weak.splice(i,1);else state.weak.push(id);saveState();renderPractice()}

  function startBoss(id){const cfg=bossConfig(id);if(!cfg)return;if(cfg.final&&!allMainBossesCleared()){toast('先擊破八大領域 Boss。');return}let pool=cfg.final?QUESTIONS.map(q=>q.id):moduleQuestionIds(cfg.moduleId);pool=[...new Set(pool)].filter(id=>QMAP[id]);if(!pool.length){toast('這個領域目前沒有可用題目。');return}const size=cfg.final?32:24;const ids=shuffle(pool).slice(0,Math.min(size,pool.length));const bs=bossState(id);state.game.bosses[id]={...bs,attempts:(bs.attempts||0)+1};saveState();createSession('battle',ids,{bossId:id,bossHp:cfg.hp,bossMaxHp:cfg.hp,battleCombo:0,battleMaxCombo:0});switchView('practice')}
  function renderBattle(){const root=document.getElementById('view-battle');const bosses=(GAME.bosses||[]).filter(b=>!b.final),final=(GAME.bosses||[]).find(b=>b.final),cleared=bosses.filter(b=>bossState(b.id).cleared).length;root.innerHTML=`<section class="card battle-hero"><div><span class="player-kicker">BJT BATTLE</span><h2>八大領域攻略戰</h2><p>每個 Boss 都使用對應模組的實際題庫。答對造成傷害，連續答對提高傷害倍率；答錯不扣玩家 HP，但 Combo 會中斷。</p></div><div class="battle-total"><strong>${cleared}</strong><span>/ 8 CLEARED</span></div></section><div class="boss-grid">${bosses.map((b,i)=>{const bs=bossState(b.id),reward=specialTitle(b.rewardTitle);return `<article class="card boss-card ${bs.cleared?'cleared':''}"><div class="boss-area">AREA ${String(i+1).padStart(2,'0')} · ${esc(b.moduleId)}</div><div class="boss-emblem">${bs.cleared?'✓':'⚔'}</div><h3>${esc(b.name)}</h3><p>${esc(b.subtitle)}</p><div class="boss-card-meta"><span>HP ${b.hp}</span><span>最高 Combo ${bs.bestCombo||0}</span><span>挑戰 ${bs.attempts||0} 次</span></div><div class="boss-reward"><small>擊破異名</small><b>${bs.cleared?`《${esc(reward?.name||'????')}》`:'《????》'}</b></div><button class="btn ${bs.cleared?'':'primary'}" data-boss="${esc(b.id)}">${bs.cleared?'再次挑戰':'開始戰鬥'}</button></article>`}).join('')}</div>${final?`<section class="card final-boss-card ${allMainBossesCleared()?'unlocked':'locked'}"><div><span class="player-kicker">FINAL BOSS</span><h2>${allMainBossesCleared()?esc(final.name):'？？？？？？'}</h2><p>${allMainBossesCleared()?'八大領域已全部擊破。最終混合領域已解鎖。':'擊破八大領域 Boss 後解鎖最終個體。'}</p></div><div class="final-boss-side"><b>${bossState('FINAL').cleared?'CLEARED':allMainBossesCleared()?'UNLOCKED':'LOCKED'}</b><button class="btn primary" id="finalBossBtn" ${allMainBossesCleared()?'':'disabled'}>${bossState('FINAL').cleared?'再次挑戰':'進入最終境界'}</button></div></section>`:''}`;root.querySelectorAll('[data-boss]').forEach(b=>b.onclick=()=>startBoss(b.dataset.boss));const fb=document.getElementById('finalBossBtn');if(fb)fb.onclick=()=>startBoss('FINAL')}
  function equipTitle(id){if(id&& !state.game.unlockedTitles.includes(id)){toast('這個異名尚未解鎖。');return}state.game.equippedTitle=id||null;saveState();renderTitles();toast(id?`已裝備《${specialTitle(id)?.name||''}》`:'已卸下異名')}
  function titleGlyph(t){
    if(!t)return '◇';
    if(t.rarity==='MYTHIC')return '✦';if(t.rarity==='LEGEND')return '◆';if(t.rarity==='EPIC')return '◈';if(t.rarity==='BOSS')return '⚔';return '◇';
  }
  function openTitleDetail(kind,id){
    const modal=document.getElementById('titleDetailModal');if(!modal)return;
    const lp=levelProgress();let have=false,name='????',desc='取得後揭曉。',meta='未知異名',canEquip=false,titleId=null,levelText='';
    if(kind==='rank'){
      const t=(GAME.mainTitles||[]).find(x=>String(x.level)===String(id));if(!t)return;have=t.level<=lp.level;name=have?t.name:'????';desc=have?t.desc:'到達指定 Lv. 後，真正稱號才會揭曉。';meta=have?'主位階':'未取得';levelText=`Lv.${t.level}`;
    }else{
      const t=specialTitle(id);if(!t)return;have=(state.game.unlockedTitles||[]).includes(t.id);name=have?t.name:'????';desc=have?t.desc:'取得後才會揭曉名稱、稀有度與取得條件。';meta=have?`${rarityLabel(t.rarity)} · ${t.group==='boss'?'BOSS':'特殊異名'}`:'未知異名';canEquip=have;titleId=t.id;
    }
    modal.innerHTML=`<div class="mobile-sheet title-detail-sheet"><div class="sheet-head"><div><span class="lesson-kicker">TITLE CODEX</span><h3>${have?'稱號詳情':'未解鎖'}</h3></div><button class="icon-btn sheet-close" id="closeTitleDetail" aria-label="關閉">✕</button></div><div class="title-detail-emblem ${have?'unlocked':'locked'}">${have?(kind==='rank'?'✦':titleGlyph(specialTitle(id))):'?'}</div>${levelText?`<div class="title-detail-level">${esc(levelText)}</div>`:''}<h2>${kind==='rank'?esc(name):`《${esc(name)}》`}</h2><div class="title-detail-meta">${esc(meta)}</div><p>${esc(desc)}</p>${canEquip?`<button class="btn primary title-detail-equip" id="titleDetailEquip">${state.game.equippedTitle===titleId?'卸下異名':'裝備此異名'}</button>`:''}</div>`;
    modal.hidden=false;
    document.getElementById('closeTitleDetail').onclick=()=>modal.hidden=true;
    const equip=document.getElementById('titleDetailEquip');if(equip)equip.onclick=()=>{equipTitle(state.game.equippedTitle===titleId?null:titleId);modal.hidden=true};
    modal.onclick=e=>{if(e.target===modal)modal.hidden=true};
  }
  function renderTitles(){
    const root=document.getElementById('view-titles'),lp=levelProgress(),current=mainTitleAt(lp.level),eq=equippedSpecial(),unlocked=new Set(state.game.unlockedTitles||[]),specials=GAME.specialTitles||[];
    const filtered=specials.filter(t=>titleFilter==='all'?true:titleFilter==='boss'?t.group==='boss':titleFilter==='hidden'?!!t.hidden:(t.group==='achievement'&&!t.hidden));
    root.innerHTML=`<section class="card title-hall-hero"><span class="player-kicker">TITLE HALL</span><div class="title-hall-current"><div><strong>Lv.${lp.level}</strong><h2>${esc(current.name)}</h2><p>${esc(current.desc)}</p></div><div class="equipped-title-box"><small>目前裝備異名</small><b>${eq?`《${esc(eq.name)}》`:'—'}</b>${eq?'<button class="text-btn" id="unequipTitle">卸下</button>':''}</div></div><div class="xp-row"><div class="progress xp-progress"><i style="width:${lp.pct}%"></i></div><b>${lp.level>=100?'MAX':`${lp.into} / ${lp.need} EXP`}</b></div></section>
      <div class="section-title"><div><h2>主位階圖鑑</h2><p>已取得才顯示真名；尚未抵達的位階全部保持 ????。</p></div></div>
      <div class="rank-timeline title-codex-grid">${(GAME.mainTitles||[]).map(t=>{const have=t.level<=lp.level;return `<button class="title-codex-card rank-card ${have?'unlocked':'locked'} ${t.name===current.name?'current':''}" data-rank-level="${t.level}"><span class="title-codex-level">Lv.${t.level}</span><span class="title-codex-icon">${have?'✦':'?'}</span><b>${have?esc(t.name):'????'}</b><small>${have?(t.name===current.name?'CURRENT':'已取得'):'未取得'}</small></button>`}).join('')}</div>
      <div class="section-title title-collection-head"><div><h2>異名圖鑑</h2><p>點選方格查看詳情。未取得的異名不顯示名稱、稀有度與條件。</p></div><span class="small">${unlocked.size} / ??</span></div>
      <div class="title-filter-bar"><button class="title-filter-btn ${titleFilter==='all'?'active':''}" data-title-filter="all">全部</button><button class="title-filter-btn ${titleFilter==='boss'?'active':''}" data-title-filter="boss">BOSS</button><button class="title-filter-btn ${titleFilter==='achievement'?'active':''}" data-title-filter="achievement">特殊</button><button class="title-filter-btn ${titleFilter==='hidden'?'active':''}" data-title-filter="hidden">隱藏</button></div>
      <div class="special-title-grid title-codex-grid">${filtered.map(t=>{const have=unlocked.has(t.id);return `<button class="title-codex-card special-title-card rarity-${have?String(t.rarity||'').toLowerCase():'locked'} ${have?'unlocked':'locked'} ${state.game.equippedTitle===t.id?'equipped':''}" data-title-id="${esc(t.id)}"><span class="title-codex-icon">${have?titleGlyph(t):'?'}</span><b>${have?`《${esc(t.name)}》`:'《????》'}</b><small>${have?(state.game.equippedTitle===t.id?'裝備中':'已取得'):'未取得'}</small></button>`}).join('')||'<div class="card empty title-empty">這個分類目前沒有可顯示的項目。</div>'}</div>`;
    root.querySelectorAll('[data-rank-level]').forEach(b=>b.onclick=()=>openTitleDetail('rank',b.dataset.rankLevel));
    root.querySelectorAll('[data-title-id]').forEach(b=>b.onclick=()=>openTitleDetail('special',b.dataset.titleId));
    root.querySelectorAll('[data-title-filter]').forEach(b=>b.onclick=()=>{titleFilter=b.dataset.titleFilter;renderTitles()});
    const un=document.getElementById('unequipTitle');if(un)un.onclick=()=>equipTitle(null);
  }
  function renderKnowledge(){
    const cats=[...new Set(KNOW.map(k=>k.category))].sort(); const root=document.getElementById('view-knowledge');
    root.innerHTML=`<div class="toolbar"><input class="input" id="kSearch" placeholder="搜尋：例如 いただく、回避、敬語、報銷…"><select class="select" id="kCat"><option value="">全部分類</option>${cats.map(c=>`<option>${esc(c)}</option>`).join('')}</select></div><div id="kGrid" class="grid knowledge-grid"></div>`;
    const draw=()=>{const kw=document.getElementById('kSearch').value.trim().toLowerCase();const cat=document.getElementById('kCat').value;const list=KNOW.filter(k=>(!cat||k.category===cat)&&(!kw||[k.title,k.reading,k.summary,k.detail,k.example,k.contrast,...(k.tags||[]),...(k.sourceRefs||[])].join(' ').toLowerCase().includes(kw)));document.getElementById('kGrid').innerHTML=list.map(renderKCard).join('')||'<div class="card empty">找不到符合條件的知識點。</div>';bindNotes()};
    document.getElementById('kSearch').addEventListener('input',draw);document.getElementById('kCat').addEventListener('change',draw);draw();
  }
  function renderKCard(k){return `<article class="card knowledge-card"><div class="tag-list"><span class="tag">${esc(k.category)}</span>${(k.tags||[]).map(t=>`<span class="tag">${esc(t)}</span>`).join('')}</div><h3>${esc(k.title)}</h3>${state.settings.showReadings&&k.reading?`<div class="reading">讀音：${esc(k.reading)}</div>`:''}<p><b>${esc(k.summary)}</b></p><p>${esc(k.detail)}</p><div class="example">例：${esc(k.example)}</div>${k.contrast?`<div class="contrast">易混點：${esc(k.contrast)}</div>`:''}${(k.sourceRefs||[]).length?`<div class="small" style="margin-top:10px"><b>來源題：</b>${(k.sourceRefs||[]).map(esc).join(' · ')}</div>`:''}<div style="margin-top:14px"><label class="small">我的筆記</label><textarea class="note" data-note="${k.id}" placeholder="寫下你自己的記憶方式、錯因或例句…">${esc(state.notes[k.id]||'')}</textarea></div><div class="actions">${QUESTIONS.some(q=>(q.tags||[]).includes(k.id))?`<button class="btn" data-practice-tag="${k.id}">只刷這個知識點</button>`:''}</div></article>`}
  function bindNotes(){document.querySelectorAll('[data-note]').forEach(t=>t.addEventListener('change',()=>{state.notes[t.dataset.note]=t.value;saveState();toast('筆記已保存')}));document.querySelectorAll('[data-practice-tag]').forEach(b=>b.addEventListener('click',()=>startTagSession(b.dataset.practiceTag)))}
  function startTagSession(tag){const list=QUESTIONS.filter(q=>(q.tags||[]).includes(tag));if(!list.length){toast('此知識點暫無題目');return}createSession('tag',shuffle(list).map(q=>q.id));switchView('practice')}

  function articleRecords(){
    return Object.values(ARTICLE_DETAILS).map(a=>({...a,question:QMAP[a.question_id]})).filter(a=>a.question);
  }
  function openArticle(qid){
    if(!ARTICLE_DETAILS[qid]){toast('這題目前沒有文章詳解。');return}
    articleFocusId=qid;
    switchView('articles');
    window.scrollTo({top:0,behavior:'smooth'});
  }
  function practiceOne(qid){
    if(!QMAP[qid]){toast('找不到對應題目。');return}
    createSession('one',[qid]);
    switchView('practice');
  }
  function articleArrayBlock(title,items,cls=''){
    const list=(items||[]).filter(Boolean);
    if(!list.length)return '';
    return `<section class="article-study-block ${cls}"><h3>${esc(title)}</h3><ul>${list.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></section>`;
  }
  function completeArticle(qid){if(!ARTICLE_DETAILS[qid])return;registerStudyActivity();if(!state.game.articleRewards[qid]){state.game.articleRewards[qid]=Date.now();awardXp(15,'完成文章學習');checkGameAchievements();saveState();renderArticles();toast('文章學習完成 · EXP +15')}else toast('這篇文章已取得完成 EXP')}
  function renderArticles(){
    const root=document.getElementById('view-articles');
    const records=articleRecords();
    if(articleFocusId && ARTICLE_DETAILS[articleFocusId]){
      const a=ARTICLE_DETAILS[articleFocusId], q=QMAP[articleFocusId];
      if(!q){articleFocusId=null;renderArticles();return}
      const vocab=(a.vocabulary||[]).filter(x=>x&&x.surface&&x.reading);
      root.innerHTML=`
        <div class="article-detail-top"><button class="btn" id="articleBackBtn">← 回文章列表</button><span class="small">${esc(q.source)} · ${esc(q.category)} · ${esc(q.id)}</span></div>
        <article class="card article-detail-card">
          <div class="tag-list"><span class="tag">文章題</span><span class="tag">${esc(q.category)}</span><span class="tag">${esc(q.source)}</span></div>
          <h2>${esc(a.title||q.stem)}</h2>
          <p class="article-help">括號內為讀音輔助。正文之外，下方另整理本文重要漢字／詞彙讀音。</p>
          <section class="article-study-block"><h3>① 原文＋假名</h3><div class="article-annotated">${esc(a.annotated_passage||q.passage)}</div></section>
          <section class="article-study-block article-translation"><h3>② 完整中文翻譯</h3><div>${esc(a.translation_zh_tw||'')}</div></section>
          <div class="article-analysis-grid">
            <section class="article-study-block"><h3>③ 文章目的</h3><p>${esc(a.purpose||'')}</p></section>
            <section class="article-study-block"><h3>④ 文章結構</h3><p>${esc(a.structure||'')}</p></section>
          </div>
          ${articleArrayBlock('⑤ 關鍵判讀',a.key_points,'article-keypoints')}
          ${articleArrayBlock('⑥ 容易誤判的地方',a.traps,'article-traps')}
          <section class="article-study-block article-strategy"><h3>⑦ 解題方式</h3><p>${esc(a.strategy||'')}</p></section>
          <section class="article-study-block"><h3>⑧ 漢字／重要詞彙讀音</h3><div class="vocab-grid">${vocab.map(v=>`<div class="vocab-item"><strong>${esc(v.surface)}</strong><span>（${esc(v.reading)}）</span></div>`).join('')||'<span class="small">—</span>'}</div></section>
          <section class="article-study-block linked-question"><h3>⑨ 對應題目</h3><div class="stem article-stem">${esc(q.stem)}</div>${renderStemUnderstanding(q)}<div class="article-answer"><b>正確答案：</b>${q.answer+1}. ${esc(q.options[q.answer])}</div><div class="main-explain"><b>本題核心解析</b><p>${esc(q.explanation)}</p></div><div class="actions"><button class="btn primary" id="articlePracticeBtn">直接練這一題</button><button class="btn ${state.game.articleRewards[q.id]?'good':''}" id="articleCompleteBtn">${state.game.articleRewards[q.id]?'✓ 已完成文章學習':'完成文章學習 +15 EXP'}</button></div></section>
          <section class="article-study-block"><h3>⑩ 四個選項完整詳解</h3><div class="all-choice-details article-choice-details">${renderAllChoiceDetails(q)}</div></section>
        </article>`;
      document.getElementById('articleBackBtn').onclick=()=>{articleFocusId=null;renderArticles();window.scrollTo({top:0,behavior:'smooth'})};
      document.getElementById('articlePracticeBtn').onclick=()=>practiceOne(q.id);document.getElementById('articleCompleteBtn').onclick=()=>completeArticle(q.id);
      return;
    }
    root.innerHTML=`
      <div class="card article-intro"><h2>文章詳解</h2><p>這裡集中 ${records.length} 題有完整文章的題目。每篇保留原文、讀音、繁體中文翻譯、文章結構、閱讀陷阱、解題策略，以及四個選項的完整解析。</p></div>
      <div class="toolbar article-toolbar"><input class="input" id="articleSearch" placeholder="搜尋文章、題目、詞彙，例如：領収書、提携、研修…"><select class="select" id="articleSource"><option value="">全部來源</option><option value="原題">原題</option><option value="延伸">延伸題</option></select></div>
      <div id="articleList" class="article-list"></div>`;
    const draw=()=>{
      const kw=document.getElementById('articleSearch').value.trim().toLowerCase();
      const source=document.getElementById('articleSource').value;
      const list=records.filter(a=>{
        const q=a.question;
        const hay=[a.title,a.annotated_passage,a.translation_zh_tw,a.purpose,a.structure,a.strategy,...(a.key_points||[]),...(a.traps||[]),...(a.vocabulary||[]).flatMap(v=>[v.surface,v.reading]),q.stem,q.category,q.source].join(' ').toLowerCase();
        return (!source||q.source===source)&&(!kw||hay.includes(kw));
      });
      document.getElementById('articleList').innerHTML=list.map(a=>{
        const q=a.question;
        const excerpt=(a.translation_zh_tw||'').slice(0,145)+(String(a.translation_zh_tw||'').length>145?'…':'');
        return `<article class="card article-list-card"><div class="article-list-meta"><span class="tag">${esc(q.source)}</span><span class="tag">${esc(q.category)}</span><span class="small">${esc(q.id)}</span></div><h3>${esc(a.title||q.stem)}</h3><p>${esc(excerpt)}</p><div class="vocab-preview">${(a.vocabulary||[]).slice(0,5).map(v=>`<span>${esc(v.surface)}（${esc(v.reading)}）</span>`).join('')}</div><div class="actions"><button class="btn primary" data-open-article="${esc(q.id)}">查看文章詳解</button><button class="btn" data-practice-article="${esc(q.id)}">直接練題</button></div></article>`;
      }).join('')||'<div class="card empty">找不到符合條件的文章。</div>';
      document.querySelectorAll('[data-open-article]').forEach(b=>b.onclick=()=>openArticle(b.dataset.openArticle));
      document.querySelectorAll('[data-practice-article]').forEach(b=>b.onclick=()=>practiceOne(b.dataset.practiceArticle));
    };
    document.getElementById('articleSearch').addEventListener('input',draw);
    document.getElementById('articleSource').addEventListener('change',draw);
    draw();
  }


  function businessProgress(ch){
    const list=BUSINESS_QUESTIONS.filter(q=>q.chapter===ch);let attempts=0,correct=0,done=0;
    list.forEach(q=>{const p=progressOf(q.id);attempts+=p.attempts||0;correct+=p.correct||0;if((p.attempts||0)>0)done++;});
    return {total:list.length,done,attempts,correct,accuracy:pct(correct,attempts)};
  }
  function renderBusiness(){
    const root=document.getElementById('view-business');
    const chapters=BUSINESS_COURSE.chapters||[];
    root.innerHTML=`<div class="card business-hero"><div><span class="tag">PRACTICAL BUSINESS</span><h2>實用商務日語｜10 章情境訓練</h2><p>這 200 題獨立保留為課程，不會把原本 BJT 題庫的學習脈絡打散。每章 20 題；答題後可查看四選項本義、錯誤原因、情境解析與相關知識卡。</p></div><div class="business-course-stat"><strong>${BUSINESS_QUESTIONS.length}</strong><span>題</span></div></div>
      <div class="business-chapter-grid">${chapters.map(ch=>{const p=businessProgress(ch.chapter);const cards=(ch.knowledgeCards||[]).map(id=>KMAP[id]).filter(Boolean);return `<article class="card business-chapter-card"><div class="chapter-no">CH ${String(ch.chapter).padStart(2,'0')}</div><h3>${esc(ch.title)}</h3><p>${esc(ch.zh||'')}</p><div class="chapter-progress"><div class="progress"><i style="width:${pct(p.done,p.total)}%"></i></div><span>${p.done}/${p.total} 題 · 正確率 ${p.accuracy}%</span></div><div class="chapter-kps">${cards.map(k=>`<div class="chapter-kp"><strong>${esc(k.title.replace('實用商務｜',''))}</strong><span>${esc(k.summary)}</span></div>`).join('')}</div><div class="actions"><button class="btn primary" data-business-ch="${ch.chapter}">開始本章 20 題</button><button class="btn" data-business-review="${ch.chapter}">查看本章題目</button></div></article>`}).join('')}</div>
      <div id="businessQuestionList"></div>`;
    document.querySelectorAll('[data-business-ch]').forEach(b=>b.onclick=()=>startSession('business-ch'+b.dataset.businessCh));
    document.querySelectorAll('[data-business-review]').forEach(b=>b.onclick=()=>renderBusinessQuestionList(Number(b.dataset.businessReview)));
  }
  function renderBusinessQuestionList(ch){
    const box=document.getElementById('businessQuestionList');if(!box)return;
    const meta=(BUSINESS_COURSE.chapters||[]).find(x=>x.chapter===ch)||{};
    const list=BUSINESS_QUESTIONS.filter(q=>q.chapter===ch);
    box.innerHTML=`<div class="section-title"><div><h2>CH ${String(ch).padStart(2,'0')}｜${esc(meta.title||'')}</h2><p>${esc(meta.zh||'')}：可直接挑題，也可從章首開始完整練習。</p></div><button class="btn primary" data-start-business-list="${ch}">完整練本章</button></div><div class="business-question-list">${list.map((q,i)=>{const p=progressOf(q.id);return `<article class="card business-question-item"><div><span class="small">${i+1}/20 · ${esc(q.coreKnowledge||'')}</span><h3>${esc(state.settings.showReadings&&q.readingPassage?q.readingPassage:q.passage)}</h3><p>${esc(q.stem)}</p><div class="small">作答 ${p.attempts||0} 次 · 正確 ${p.correct||0} · 錯誤 ${p.wrong||0}</div></div><button class="btn" data-business-one="${esc(q.id)}">練這題</button></article>`}).join('')}</div>`;
    box.querySelector('[data-start-business-list]').onclick=()=>startSession('business-ch'+ch);
    box.querySelectorAll('[data-business-one]').forEach(b=>b.onclick=()=>practiceOne(b.dataset.businessOne));
    box.scrollIntoView({behavior:'smooth',block:'start'});
  }

  function listeningPackById(id){return LISTENING_PACKS.find(p=>p.id===id)||null}
  function listeningBookById(id){return LISTENING_BOOKS.find(b=>b.id===id)||null}
  function listeningBookPacks(book){if(!book||book.placeholder)return[];return LISTENING_PACKS.filter(p=>p.collectionId===book.collectionId).sort((a,b)=>(a.part||0)-(b.part||0)||(a.sectionNumber||0)-(b.sectionNumber||0))}
  function listeningBookQuestions(bookId){const book=listeningBookById(bookId);return listeningBookPacks(book).flatMap(p=>(p.questionIds||[]).map(id=>LQMAP[id]).filter(Boolean).sort((a,b)=>(a.number||0)-(b.number||0)))}
  function listeningPackQuestions(packId){if(packId==='__ALL__')return LISTENING_QUESTIONS.slice();const pack=listeningPackById(packId);if(!pack)return[];return (pack.questionIds||[]).map(id=>LQMAP[id]).filter(Boolean).sort((a,b)=>(a.number||0)-(b.number||0))}
  function listeningRecord(index=listeningSession?.index){if(!listeningSession||index<0||index>=listeningSession.ids.length)return null;listeningSession.records=listeningSession.records||{};const key=String(index);if(!listeningSession.records[key])listeningSession.records[key]={qid:listeningSession.ids[index],answered:false,correct:null,selectedOriginalIndex:null,playCount:0,audioStarted:false,xpGain:0};return listeningSession.records[key]}
  function listeningCurrentQ(){if(!listeningSession)return null;return LQMAP[listeningSession.ids[listeningSession.index]]||null}
  function startListeningSession(mode='all',packId=LISTENING_PACKS[0]?.id){const allScope=packId==='__ALL__';const pack=allScope?null:listeningPackById(packId);if(!allScope&&!pack){toast('目前沒有這個聽力題組。');return}let list=listeningPackQuestions(allScope?'__ALL__':pack.id);if(mode==='unanswered')list=list.filter(q=>(listeningProgressOf(q.id).attempts||0)===0);if(mode==='weak')list=listeningWeakQuestions(list);if(mode==='due')list=listeningDueQuestions(list);if(String(mode).startsWith('mastery-'))list=masteryFilter(list,listeningProgressOf,mode);if(mode==='random'||mode==='random20')list=shuffle(list);if(mode==='random20')list=list.slice(0,20);if(!list.length){const msg={unanswered:'目前沒有未作答聽力題。',weak:'目前沒有聽力錯題。',due:'目前沒有到期聽力複習。','mastery-incomplete':'全部聽力題都已達成 5 次正解。','mastery-one':'目前沒有只差 1 次正解的聽力題。','mastery-zero':'目前沒有 0 次正解的聽力題。','mastery-done':'目前還沒有達成 5 次正解的聽力題。','mastery-high-error':'目前沒有答錯 3 次以上的聽力題。'}[mode]||'目前沒有可用聽力題。';toast(msg);return}let startIndex=0;if(mode==='continue'&&state.listening.lastQuestionId){const i=list.findIndex(q=>q.id===state.listening.lastQuestionId);if(i>=0)startIndex=i}listeningSession={mode,packId:allScope?'__ALL__':pack.id,scope:allScope?'global':'pack',parentBookId:allScope?null:(listeningBookFocus||null),ids:list.map(q=>q.id),index:startIndex,correct:0,wrong:0,records:{}};if(!allScope)state.listening.lastPackId=pack.id;saveState();switchView('listening')}
  function startListeningBookSession(mode='all',bookId='LISTENING_BOOK_01'){
    const book=listeningBookById(bookId);if(!book||book.placeholder){toast('這一冊尚未加入真題。');return}let list=listeningBookQuestions(bookId);
    if(mode==='unanswered')list=list.filter(q=>(listeningProgressOf(q.id).attempts||0)===0);if(mode==='weak')list=listeningWeakQuestions(list);if(mode==='due')list=listeningDueQuestions(list);if(mode==='random'||mode==='random20')list=shuffle(list);if(mode==='random20')list=list.slice(0,20);if(!list.length){toast('這一冊目前沒有符合條件的題目。');return}
    listeningBookFocus=bookId;listeningSession={mode,bookId,packId:null,scope:'book',ids:list.map(q=>q.id),index:0,correct:0,wrong:0,records:{}};state.listening.lastBookId=bookId;saveState();switchView('listening');
  }
  function startListeningOne(id){const q=LQMAP[id];if(!q){toast('找不到對應聽力題。');return}listeningBookFocus=null;listeningSession={mode:'one',packId:q.packId,parentBookId:null,ids:[id],index:0,correct:0,wrong:0,records:{}};state.listening.lastPackId=q.packId;state.listening.lastQuestionId=id;saveState();switchView('listening')}
  function listeningGoTo(index){if(!listeningSession)return;if(index<0)return;if(index>=listeningSession.ids.length){listeningSession.index=listeningSession.ids.length;renderListening();window.scrollTo({top:0,behavior:'smooth'});return}listeningSession.index=index;const q=listeningCurrentQ();if(q){state.listening.lastQuestionId=q.id;saveState()}renderListening();window.scrollTo({top:0,behavior:'smooth'})}
  function listeningPrev(){if(listeningSession&&listeningSession.index>0)listeningGoTo(listeningSession.index-1)}
  function listeningNext(){if(listeningSession)listeningGoTo(listeningSession.index+1)}
  function openListeningMap(){if(!listeningSession)return;const modal=document.getElementById('questionMapModal');if(!modal)return;modal.hidden=false;modal.innerHTML=`<div class="question-map-card"><div class="question-map-head"><div><b>聽力題目一覽</b><span>${listeningSession.ids.length} 題 · ★★★★★ = 累積 5 次正解</span></div><button class="btn" id="closeListeningMap">關閉</button></div><div class="question-map-grid">${listeningSession.ids.map((id,i)=>{const r=listeningSession.records?.[String(i)],p=listeningProgressOf(id),m=masteryOfProgress(p);const status=r?.answered?(r.correct?'correct':'wrong'):(p.attempts?(p.lastCorrect?'correct':'wrong'):'unanswered');return `<button class="question-map-item ${status} ${i===listeningSession.index?'current':''}" data-listen-map-index="${i}">${i+1}<small>${status==='correct'?'✓':status==='wrong'?'✕':'○'}</small><em>${m.stars}</em></button>`}).join('')}</div><div class="question-map-legend"><span>✓ 已正解</span><span>✕ 最近錯誤</span><span>○ 未作答</span><span>▶ 現在</span><span>★★★★★ 熟練</span></div></div>`;document.getElementById('closeListeningMap').onclick=()=>{modal.hidden=true;modal.innerHTML=''};modal.onclick=e=>{if(e.target===modal){modal.hidden=true;modal.innerHTML=''}};modal.querySelectorAll('[data-listen-map-index]').forEach(b=>b.onclick=()=>{modal.hidden=true;modal.innerHTML='';listeningGoTo(Number(b.dataset.listenMapIndex))})}
  function handleListeningRewards(q,correct,wasWrongBefore,wasDue){let gained=0;if(correct){state.game.totalCorrectAnswers=(state.game.totalCorrectAnswers||0)+1;state.game.currentCombo=(state.game.currentCombo||0)+1;state.game.maxCombo=Math.max(state.game.maxCombo||0,state.game.currentCombo);ensureDailyCurrent();state.daily.maxCombo=Math.max(state.daily.maxCombo||0,state.game.currentCombo);recordDaily('correct',1);if(!state.game.questionFirstCorrect[q.id]){state.game.questionFirstCorrect[q.id]=Date.now();gained+=awardXp(10,'聽力首次答對')}if(wasWrongBefore&&markRevenge(q.id))gained+=awardXp(5,'聽力錯題復仇');if(wasDue){state.game.reviewSuccesses=(state.game.reviewSuccesses||0)+1;recordDaily('reviewActions',1);gained+=awardXp(10,'聽力到期複習')}}else state.game.currentCombo=0;recordDaily('count',1);checkGameAchievements();return gained}
  function answerListening(originalIndex){if(!listeningSession)return;const q=listeningCurrentQ(),rec=listeningRecord();if(!q||!rec||rec.answered)return;if(!rec.audioStarted){toast('請先播放音檔，再作答。');return}const correct=Number(originalIndex)===Number(q.correctAnswer?.originalIndex),now=Date.now(),p={...listeningProgressOf(q.id)},wasWrongBefore=(p.wrong||0)>0,wasDue=(p.attempts||0)>0&&(p.due||0)>0&&(p.due||0)<=now,wasMastered=(p.correct||0)>=MASTERY_TARGET;rec.answered=true;rec.correct=correct;rec.selectedOriginalIndex=Number(originalIndex);rec.answeredAt=now;listeningSession.correct+=(correct?1:0);listeningSession.wrong+=(correct?0:1);p.attempts=(p.attempts||0)+1;p.totalPlays=(p.totalPlays||0)+(rec.playCount||0);if(correct){p.correct=(p.correct||0)+1;p.streak=(p.streak||0)+1;if((rec.playCount||0)===1)p.firstListenCorrect=(p.firstListenCorrect||0)+1;else p.relistenCorrect=(p.relistenCorrect||0)+1}else{p.wrong=(p.wrong||0)+1;p.streak=0}p.lastCorrect=correct;p.lastAt=now;p.lastPlayCount=rec.playCount||0;p.due=now+(correct?(p.streak>=3?7:p.streak===2?3:1)*86400000:3600000);state.listening.progress[q.id]=p;state.listening.lastQuestionId=q.id;rec.xpGain=handleListeningRewards(q,correct,wasWrongBefore,wasDue);if(correct&&!wasMastered&&(p.correct||0)>=MASTERY_TARGET){rec.masteredNow=true;rec.xpGain=(rec.xpGain||0)+awardXp(5,'聽力題熟練');queueAnnouncement({kind:'mastery',kicker:'LISTENING MASTERED',title:'★★★★★',body:`此題已累積 ${MASTERY_TARGET} 次正解。聽力完成度 +1`})}saveState();renderListening()}
  function jumpListeningFeedback(key){const el=document.getElementById(`listening-sec-${key}`);if(!el)return;const top=window.scrollY+el.getBoundingClientRect().top-82;window.scrollTo({top:Math.max(0,top),behavior:'smooth'})}
  function listeningAnalysisTypeLabel(type){
    const labels={grammar:'文法／句型',visual_or_data:'圖片／資料判讀',keigo:'敬語方向',business_pragmatics:'商務語用',semantic_mismatch:'語意／情境不符'};
    return labels[type]||'解析';
  }
  function renderLearningV3Option(a,answer,selected){
    if(!a)return'';
    const idx=Number(a.originalIndex),isCorrect=!!a.isCorrect||idx===answer,isSelected=idx===Number(selected);
    const grammar=Array.isArray(a.grammarExplanation)?a.grammarExplanation:[];
    return `<article class="learning-option-card ${isCorrect?'correct':''} ${isSelected&&!isCorrect?'selected-wrong':''}">
      <div class="learning-option-head"><b>${idx}</b><div><strong>${esc(a.text||'')}</strong><span class="learning-option-reading">${esc(a.textWithFurigana||'')}</span></div><div class="learning-option-badges"><span class="analysis-type">${esc(a.analysisType||'')}</span><span class="answer-alignment ${isCorrect?'correct':''}">${esc(a.answerAlignment||(isCorrect?'正解':'不正解'))}</span>${isSelected?'<span class="your-answer-badge">你的答案</span>':''}</div></div>
      ${a.translationZhTW?`<div class="learning-option-translation"><b>中文</b><p>${esc(a.translationZhTW)}</p></div>`:''}
      ${grammar.length?`<div class="learning-option-grammar"><b>${esc(listeningAnalysisTypeLabel(a.analysisType))}解析</b><ul>${grammar.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div>`:''}
    </article>`;
  }
  function renderListeningLearningV3Feedback(q,rec,review){
    const answer=Number(q.correctAnswer?.originalIndex),options=Array.isArray(review?.optionAnalysis)?review.optionAnalysis:[];
    return `<div class="listening-feedback learning-v3-feedback">
      <div class="feedback-title-row"><div><span class="lesson-kicker">LEARNING / REVIEW</span><h3>${rec.correct?'✓ 正確':'✕ 這題要修正'}</h3></div>${rec.xpGain?`<span class="xp-gain">EXP +${rec.xpGain}</span>`:''}</div>
      ${rec.masteredNow?`<div class="mastery-callout"><b>LISTENING MASTERED</b><span>★★★★★ · 累積 ${MASTERY_TARGET} 次正解</span></div>`:''}
      <nav class="listening-feedback-nav"><button data-listen-jump="reason">正解</button>${review?.transcript?'<button data-listen-jump="transcript">日文逐字稿</button>':''}${review?.transcriptWithFurigana?'<button data-listen-jump="furigana">讀音</button>':''}${review?.translationZhTW?'<button data-listen-jump="translation">中文</button>':''}${options.length?'<button data-listen-jump="choices">四選項解析</button>':''}</nav>
      <section id="listening-sec-reason" class="listening-explain-block learning-answer-block"><span class="lesson-kicker">ANSWER</span><h3>正解：${answer}</h3><p>你的答案：${Number(rec.selectedOriginalIndex)}　·　${rec.correct?'判定正確':'請對照下方逐字稿與四選項解析重新確認。'}</p></section>
      ${review?.transcript?`<section id="listening-sec-transcript" class="listening-explain-block learning-transcript-block"><span class="lesson-kicker">JAPANESE TRANSCRIPT</span><h3>日文原始逐字稿</h3><div class="learning-transcript-text">${esc(review.transcript)}</div></section>`:''}
      ${review?.transcriptWithFurigana?`<section id="listening-sec-furigana" class="listening-explain-block learning-furigana-block"><span class="lesson-kicker">READING</span><h3>漢字＋括號平假名讀音</h3><div class="learning-transcript-text furigana-raw">${esc(review.transcriptWithFurigana)}</div><p class="small">目前依 QPACK 原始格式直接顯示，例如：取引先(とりひきさき)。</p></section>`:''}
      ${review?.translationZhTW?`<section id="listening-sec-translation" class="listening-explain-block learning-translation-block"><span class="lesson-kicker">TRADITIONAL CHINESE</span><h3>繁體中文翻譯</h3><div class="learning-transcript-text">${esc(review.translationZhTW)}</div></section>`:''}
      ${options.length?`<section id="listening-sec-choices" class="listening-explain-block learning-options-block"><span class="lesson-kicker">OPTION ANALYSIS</span><h3>①～④ 四個選項完整解析</h3><p class="small">依 QPACK 的 originalIndex 原順序顯示；不重新排序、不重新編號。analysisType 與 grammarExplanation 均保留資料原文。</p><div class="learning-option-list">${options.map(a=>renderLearningV3Option(a,answer,rec.selectedOriginalIndex)).join('')}</div>${review?.learningMode?.note?`<div class="editorial-note">${esc(review.learningMode.note)}</div>`:''}</section>`:''}
    </div>`;
  }
  function renderListeningFeedback(q,rec){
    const answer=Number(q.correctAnswer?.originalIndex),learning=q.learningReview||null,deep=q.reviewMode!=='answer_key_only';
    if(learning)return renderListeningLearningV3Feedback(q,rec,learning);
    if(!deep){return `<div class="listening-feedback"><div class="feedback-title-row"><h3>${rec.correct?'✓ 正確':'✕ 這題要修正'}</h3>${rec.xpGain?`<span class="xp-gain">EXP +${rec.xpGain}</span>`:''}</div>${rec.masteredNow?`<div class="mastery-callout"><b>LISTENING MASTERED</b><span>★★★★★ · 累積 ${MASTERY_TARGET} 次正解</span></div>`:''}<nav class="listening-feedback-nav"><button data-listen-jump="reason">正解</button><button data-listen-jump="quality">資料狀態</button></nav><section id="listening-sec-reason" class="listening-explain-block"><span class="lesson-kicker">VERIFIED ANSWER</span><h3>正解：${answer}</h3><p>${esc(q.correctReason||'本題正解已由來源答案表確認。')}</p></section><section id="listening-sec-quality" class="listening-explain-block"><span class="lesson-kicker">SOURCE QUALITY</span><h3>本題目前是「正解驗證題」</h3><p>題目圖片、正式作答音檔與正解序號均由來源資料保留並驗證；未提供的學習欄位不顯示，App 不會因欄位缺失而中斷。</p></section></div>`}
    return `<div class="listening-feedback"><div class="feedback-title-row"><h3>${rec.correct?'✓ 正確':'✕ 這題要修正'}</h3>${rec.xpGain?`<span class="xp-gain">EXP +${rec.xpGain}</span>`:''}</div>${rec.masteredNow?`<div class="mastery-callout"><b>LISTENING MASTERED</b><span>★★★★★ · 累積 ${MASTERY_TARGET} 次正解</span></div>`:''}<nav class="listening-feedback-nav"><button data-listen-jump="reason">正解理由</button><button data-listen-jump="choices">發話選項</button><button data-listen-jump="knowledge">核心知識</button><button data-listen-jump="source">原題解說</button><button data-listen-jump="reference">參考頁</button></nav><section id="listening-sec-reason" class="listening-explain-block"><span class="lesson-kicker">ANSWER</span><h3>正解：${answer}</h3><p>${esc(q.correctReason||'')}</p>${q.editorialReviewed?'<div class="editorial-note">此題解析已做教學校閱：保留原正解，但避免把單題判斷擴張成所有商務場合的絕對規則。</div>':''}</section><section id="listening-sec-choices" class="listening-explain-block"><span class="lesson-kicker">SPOKEN CHOICES</span><h3>發話選項</h3><p class="small">以下文字依來源答案頁確認；這不是完整音檔逐字稿。</p><div class="spoken-choice-list">${(q.options||[]).map(o=>{const ok=Number(o.originalIndex)===answer,sel=Number(o.originalIndex)===Number(rec.selectedOriginalIndex);return `<article class="spoken-choice ${ok?'correct':''} ${sel&&!ok?'selected-wrong':''}"><div class="spoken-choice-head"><b>${o.originalIndex}</b><strong>${esc(o.text)}</strong><span>${ok?'正解':sel?'你的答案':''}</span></div>${o.zhTW?`<div class="spoken-choice-zh">${esc(o.zhTW)}</div>`:''}<p>${esc(o.explanation||'')}</p></article>`}).join('')}</div></section><section id="listening-sec-knowledge" class="listening-explain-block"><span class="lesson-kicker">KNOWLEDGE</span><h3>核心知識與陷阱</h3><div class="tag-list">${(q.coreKnowledge||[]).map(x=>`<span class="tag">${esc(x)}</span>`).join('')}</div>${q.trap?`<div class="listening-trap"><b>陷阱</b><p>${esc(q.trap)}</p></div>`:''}${q.visualContext?`<div class="listening-context"><b>情境</b><p>${esc(q.visualContext)}</p></div>`:''}</section><section id="listening-sec-source" class="listening-explain-block"><span class="lesson-kicker">SOURCE NOTE</span><h3>來源原始日文解說</h3><p>${esc(q.sourceExplanationJa||'來源未提供原始解說。')}</p></section><section id="listening-sec-reference" class="listening-explain-block"><span class="lesson-kicker">SOURCE REFERENCE</span><h3>原始答案頁</h3><p class="small">只在作答後提供，用於核對來源；不會在作答前顯示。</p>${q.media?.answerReferenceImage?`<button class="reference-image-button" data-image-viewer="${esc(q.media.answerReferenceImage)}" data-image-alt="${esc(q.id)} 原始答案頁"><img src="${esc(q.media.answerReferenceImage)}" alt="${esc(q.id)} 原始答案頁" loading="lazy"><span>🔍 點擊放大原始答案頁</span></button>`:''}</section></div>`;
  }
  function formatAudioTime(sec){sec=Math.max(0,Number(sec)||0);const m=Math.floor(sec/60),s=Math.floor(sec%60);return `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`}
  function bindListeningAudio(q,rec){
    const audio=document.getElementById('listeningAudio');if(!audio)return;
    const play=document.getElementById('listeningPlay'),replay=document.getElementById('listeningReplay'),back=document.getElementById('listeningBack5'),forward=document.getElementById('listeningForward5'),seek=document.getElementById('listeningSeek'),speed=document.getElementById('listeningSpeed'),time=document.getElementById('listeningTime'),plays=document.getElementById('listeningPlayCount'),visualImg=document.querySelector('.listening-image-button img'),visualStatus=document.getElementById('listeningVisualStatus'),warning=document.querySelector('.listening-visual-warning');
    let visualReady=!!(visualImg?.complete&&visualImg.naturalWidth>0),visualFailed=!!(visualImg?.complete&&visualImg.naturalWidth===0);
    const syncAnswers=()=>{document.querySelectorAll('[data-listening-answer]').forEach(b=>b.disabled=!!rec.answered||!rec.audioStarted||!visualReady);if(warning)warning.classList.toggle('visual-load-error',visualFailed);if(visualStatus)visualStatus.textContent=visualFailed?'題目圖片載入失敗，本題已鎖定；請重新整理或確認圖片檔。':visualReady?(rec.audioStarted?'✓ 圖片與音檔皆已就緒，可以作答。':'✓ 圖片已載入；請先播放音檔後作答。'):'圖片載入中；圖片與音檔都就緒後才可作答。'};
    const sync=()=>{const dur=Number.isFinite(audio.duration)?audio.duration:(q.audioDurationSec||0);if(seek){seek.max=dur||1;seek.value=audio.currentTime||0}if(time)time.textContent=`${formatAudioTime(audio.currentTime)} / ${formatAudioTime(dur)}`;if(play)play.textContent=audio.paused?'▶ 播放':'⏸ 暫停'};
    const markStart=(forceNew=false)=>{if(!rec.audioStarted||forceNew||audio.ended)rec.playCount=(rec.playCount||0)+1;rec.audioStarted=true;if(plays)plays.textContent=`播放 ${rec.playCount} 次`;syncAnswers()};
    const startPlayback=(forceNew=false,msg='音檔無法播放，請確認瀏覽器媒體權限。')=>audio.play().then(()=>markStart(forceNew)).catch(()=>{syncAnswers();toast(msg)});
    if(play)play.onclick=()=>{if(audio.paused)startPlayback(false);else audio.pause()};
    if(replay)replay.onclick=()=>{audio.pause();audio.currentTime=0;startPlayback(true,'音檔無法播放。')};
    if(back)back.onclick=()=>{audio.currentTime=Math.max(0,(audio.currentTime||0)-5)};
    if(forward)forward.onclick=()=>{audio.currentTime=Math.min(Number.isFinite(audio.duration)?audio.duration:(q.audioDurationSec||0),(audio.currentTime||0)+5)};
    if(seek)seek.oninput=()=>{audio.currentTime=Number(seek.value)||0};
    if(speed)speed.onchange=()=>{audio.playbackRate=Number(speed.value)||1};
    if(visualImg){visualImg.addEventListener('load',()=>{visualReady=true;visualFailed=false;syncAnswers()});visualImg.addEventListener('error',()=>{visualReady=false;visualFailed=true;syncAnswers()})}else{visualReady=false;visualFailed=true}
    audio.addEventListener('loadedmetadata',sync);audio.addEventListener('timeupdate',sync);audio.addEventListener('play',sync);audio.addEventListener('pause',sync);audio.addEventListener('ended',sync);sync();syncAnswers();
  }
  function listeningTypedChoices(q){
    if(!q?.typedChoicesEnabled||!Array.isArray(q.typedChoices))return[];
    const rows=q.typedChoices.map(x=>({originalIndex:Number(x.originalIndex),text:String(x.text||'')})).filter(x=>[1,2,3,4].includes(x.originalIndex)&&x.text.trim()).sort((a,b)=>a.originalIndex-b.originalIndex);
    const unique=new Set(rows.map(x=>x.originalIndex));
    return rows.length===4&&unique.size===4?rows:[];
  }
  function renderListeningAnswerChoices(q,rec,answer,optionLabel){
    const typed=listeningTypedChoices(q);
    if(typed.length===4){
      const circled=['','①','②','③','④'];
      return `<div class="listening-number-options typed-choice-options">${typed.map(o=>{const n=o.originalIndex;return `<button class="listening-number-option typed-choice-option ${rec.answered&&n===answer?'correct':''} ${rec.answered&&n===rec.selectedOriginalIndex&&n!==answer?'wrong':''}" data-listening-answer="${n}" ${!rec.audioStarted||rec.answered?'disabled':''}><span>${circled[n]}</span><small>${esc(o.text)}</small></button>`}).join('')}</div>`;
    }
    return `${renderListeningAnswerChoices(q,rec,answer,optionLabel)}`;
  }
  function renderListeningQuestion(root){const q=listeningCurrentQ(),rec=listeningRecord();if(!q||!rec){renderListeningSessionEnd(root);return}state.listening.lastQuestionId=q.id;const p=listeningProgressOf(q.id),answer=Number(q.correctAnswer?.originalIndex),pack=listeningPackById(q.packId),learning=!!q.learningReview,deep=q.reviewMode!=='answer_key_only',rule=q.dataRule||(deep?'圖片與音檔都是題目本體；作答前不顯示逐字稿、翻譯、讀音或詳解。':'圖片與音檔都是題目本體；依來源可驗證資料作答。');const optionLabel=n=>{const o=(q.options||[]).find(x=>Number(x.originalIndex)===n);if(!rec.answered)return '選項';if(o?.text)return o.text;if(n===answer)return'正解';if(n===rec.selectedOriginalIndex)return'你的答案';return`選項 ${n}`};root.innerHTML=`<div class="session-return-bar"><button class="btn session-return-btn" id="listeningHomeNowBtn">← 回聽力題庫</button><span>${esc(pack?.titleZh||pack?.title||'目前題組')} · ${listeningSession.index+1}/${listeningSession.ids.length}</span></div><div class="listening-practice-layout"><main class="card listening-question-card"><div class="practice-head"><span class="q-number">🎧 ${esc(pack?.titleZh||pack?.title||'聽力真題')} · ${listeningSession.index+1} / ${listeningSession.ids.length}</span><span class="q-source">${esc(q.difficulty||'BJT')}</span></div><div class="progress"><i style="width:${pct(listeningSession.index,listeningSession.ids.length)}%"></i></div><div class="listening-visual-warning"><b>🖼️ 此題必須看圖＋聽音檔作答</b><span>${esc(rule)}</span><small id="listeningVisualStatus">圖片載入中；圖片與音檔都就緒後才可作答。</small></div><button class="listening-image-button" data-image-viewer="${esc(q.media?.image||'')}" data-image-alt="${esc(q.id)} 題目圖片"><img src="${esc(q.media?.image||'')}" alt="${esc(q.id)} 題目圖片" loading="eager"><span>🔍 點擊放大題目圖片</span></button><section class="listening-player"><div class="listening-player-head"><div><span class="lesson-kicker">${q.category==='聴読解'?'LISTENING + READING':'LISTENING'}</span><b>${esc(q.category||'聽力')}</b></div><span id="listeningPlayCount">播放 ${rec.playCount||0} 次</span></div><audio id="listeningAudio" src="${esc(q.media?.audio||'')}" preload="metadata"></audio><div class="audio-main-controls"><button class="btn primary" id="listeningPlay">▶ 播放</button><button class="btn" id="listeningReplay">↺ 從頭重播</button><button class="btn" id="listeningBack5">−5秒</button><button class="btn" id="listeningForward5">+5秒</button></div><div class="audio-seek-row"><span id="listeningTime">00:00 / ${formatAudioTime(q.audioDurationSec||0)}</span><input id="listeningSeek" type="range" min="0" max="${Number(q.audioDurationSec||1)}" step="0.1" value="0"><select id="listeningSpeed" class="select"><option value="0.75">0.75×</option><option value="1" selected>1.0×</option><option value="1.25">1.25×</option></select></div></section><section class="listening-prompt"><span class="lesson-kicker">QUESTION</span><h2>${esc(q.questionZhTW||q.question)}</h2><p>${esc(q.question)}</p></section><div class="listening-number-options">${[1,2,3,4].map(n=>`<button class="listening-number-option ${rec.answered&&n===answer?'correct':''} ${rec.answered&&n===rec.selectedOriginalIndex&&n!==answer?'wrong':''}" data-listening-answer="${n}" ${!rec.audioStarted||rec.answered?'disabled':''}><span>${n}</span><small>${esc(optionLabel(n))}</small></button>`).join('')}</div>${!rec.audioStarted?'<div class="listen-first-hint">▶ 先播放音檔，之後才可選擇 1～4。</div>':''}<div class="question-navigation"><button class="btn" id="listenPrevBtn" ${listeningSession.index<=0?'disabled':''}>← 上一題</button><button class="btn" id="listenMapBtn">題目一覽</button><span class="question-nav-count">${listeningSession.index+1} / ${listeningSession.ids.length}</span><button class="btn primary" id="listenNextBtn">${listeningSession.index+1>=listeningSession.ids.length?'完成本輪':'下一題 →'}</button></div>${!rec.answered?'<div class="skip-hint">練習模式可先跳過未作答題，不會自動判錯。</div>':''}${rec.answered?renderListeningFeedback(q,rec):''}</main><aside class="grid"><div class="card side-card"><h3>聽力題熟練度</h3>${masteryStatusHTML(p)}<div class="mini-list"><div class="mini-item"><b>作答 ${p.attempts||0} 次</b><small>連續答對 ${p.streak||0} 次 · 用於間隔複習排程</small></div><div class="mini-item"><b>初聽正解 ${p.firstListenCorrect||0}</b><small>重聽後正解 ${p.relistenCorrect||0} · 累積播放 ${p.totalPlays||0} 次</small></div></div></div><div class="card side-card"><h3>這個題組的資料層級</h3><div class="listening-quality ${learning?'learning':deep?'deep':'verified'}">${learning?'學習詳解':deep?'深度解析':'正解已驗證'}</div><p class="small">${learning?(listeningTypedChoices(q).length===4?'正式作答前顯示音檔、題目圖與 PATCH 提供的 ①～④ 清晰文字選項；送出答案後才解鎖逐字稿、讀音、繁中翻譯與四選項完整解析。':'正式作答前只顯示音檔、題目圖與 ①②③④；送出答案後才解鎖逐字稿、讀音、繁中翻譯與四選項完整解析。'):deep?'這個題組有來源可核對的發話文字、選項解析與教學說明。':'這個題組已驗證題目圖、作答音檔與正解；未提供的學習欄位不顯示。'}</p></div></aside></div>`;document.getElementById('listeningHomeNowBtn').onclick=()=>{listeningSession=null;renderListening();window.scrollTo({top:0,behavior:'smooth'})};document.querySelectorAll('[data-listening-answer]').forEach(b=>b.onclick=()=>answerListening(Number(b.dataset.listeningAnswer)));document.getElementById('listenPrevBtn').onclick=listeningPrev;document.getElementById('listenNextBtn').onclick=listeningNext;document.getElementById('listenMapBtn').onclick=openListeningMap;document.querySelectorAll('[data-listen-jump]').forEach(b=>b.onclick=()=>jumpListeningFeedback(b.dataset.listenJump));bindListeningAudio(q,rec)}
  function renderListeningSessionEnd(root){const total=listeningSession.correct+listeningSession.wrong,unanswered=Math.max(0,listeningSession.ids.length-total),global=listeningSession.packId==='__ALL__',bookId=listeningSession.bookId||null,parentBookId=bookId||listeningSession.parentBookId||null;root.innerHTML=`<section class="card hero listening-end"><span class="player-kicker">LISTENING COMPLETE</span><h2>本輪聽力完成</h2><p>答對 ${listeningSession.correct}／${total}，正確率 ${pct(listeningSession.correct,total)}%。${unanswered?`另有 ${unanswered} 題保留未作答。`:''}聽力錯題與到期複習會獨立追蹤，不會混亂原本 416 題文字題的統計。</p><div class="quick-actions">${unanswered?'<button class="btn primary" id="listenResume">回到未作答題</button>':''}<button class="btn" id="listenAgain">再練本範圍</button><button class="btn" id="listenWeak">全題庫錯題再戰</button><button class="btn" id="listenHome">${parentBookId?'回本冊':'回聽力首頁'}</button></div></section>`;const resume=document.getElementById('listenResume');if(resume)resume.onclick=()=>{const idx=listeningSession.ids.findIndex((_,i)=>!listeningSession.records?.[String(i)]?.answered);listeningGoTo(idx>=0?idx:0)};document.getElementById('listenAgain').onclick=()=>bookId?startListeningBookSession('all',bookId):startListeningSession('all',global?'__ALL__':listeningSession.packId);document.getElementById('listenWeak').onclick=()=>{listeningSession=null;listeningBookFocus=null;startListeningSession('weak','__ALL__')};document.getElementById('listenHome').onclick=()=>{listeningSession=null;listeningBookFocus=parentBookId;renderListening();window.scrollTo({top:0,behavior:'smooth'})}}
  function renderListeningHome(root){
    const all=listeningStats(),masteryAll=masteryStats(LISTENING_QUESTIONS,listeningProgressOf),due=listeningDueQuestions().length,weak=listeningWeakQuestions().length,lastId=state.listening.lastQuestionId;
    const renderPackCard=pack=>{const list=listeningPackQuestions(pack.id),st=listeningStats(list),ms=masteryStats(list,listeningProgressOf),learning=pack.reviewLevel==='learning_v3',deep=pack.reviewLevel==='deep';return `<article class="card listening-pack-card"><div class="listening-pack-top"><div><div class="pack-badges"><span class="tag">${esc(pack.difficulty||'BJT')}</span><span class="listening-quality ${learning?'learning':deep?'deep':'verified'}">${esc(pack.dataQualityLabel||'')}</span></div><h3>${esc(pack.titleZh||pack.title)}</h3></div><b>${list.length} 題</b></div><p>${esc(pack.description||'')}</p><div class="progress mastery-progress"><i style="width:${ms.percent}%"></i></div><div class="listening-pack-meta"><span>熟練 ${ms.mastered}/${list.length} · ${ms.percent}%</span><span>已作答 ${st.answered}/${list.length}</span><span>正確率 ${st.accuracy}%</span><span>初聽 ${st.firstListenAccuracy}%</span></div><div class="actions"><button class="btn primary" data-listen-pack="${esc(pack.id)}">開始 Section</button><button class="btn" data-listen-random="${esc(pack.id)}">隨機練習</button></div></article>`};
    if(listeningBookFocus){const book=listeningBookById(listeningBookFocus);if(!book||book.placeholder){listeningBookFocus=null;renderListeningHome(root);return}const packs=listeningBookPacks(book),questions=listeningBookQuestions(book.id),st=listeningStats(questions),ms=masteryStats(questions,listeningProgressOf),part1=packs.filter(p=>p.part===1),part2=packs.filter(p=>p.part===2);root.innerHTML=`<div class="session-return-bar"><button class="btn session-return-btn" id="listeningBooksBack">← 回聽力分冊</button><span>${esc(book.title)} · ${esc(book.sourceLabel)}</span></div><section class="card library-detail-hero listening-book-hero"><span class="player-kicker">LISTENING BOOK ${String(book.order).padStart(2,'0')}</span><h2>${esc(book.title)}｜${esc(book.sourceLabel)}</h2><p>本冊共 ${questions.length} 題，保留原本的 Part／Section 結構。可以一次做完整本冊，也可以進入指定 Section 練習。</p><div class="library-detail-actions"><button class="btn primary" data-listen-book-full="${esc(book.id)}">▶ 完整模擬 ${questions.length} 題</button><button class="btn" data-listen-book-random="${esc(book.id)}">本冊隨機 20 題</button><button class="btn" data-listen-book-unanswered="${esc(book.id)}">本冊未作答</button></div><div class="library-book-meta"><span>熟練 ${ms.mastered}/${questions.length} · ${ms.percent}%</span><span>已作答 ${st.answered}/${questions.length}</span><span>正確率 ${st.accuracy}%</span><span>初聽 ${st.firstListenAccuracy}%</span></div></section><div class="listening-part-block"><div class="listening-part-head"><div><span class="player-kicker">PART 1</span><h3>第1部｜聴解テスト</h3></div><b>${part1.reduce((n,p)=>n+listeningPackQuestions(p.id).length,0)} 題</b></div><div class="listening-pack-grid">${part1.map(renderPackCard).join('')}</div></div><div class="listening-part-block"><div class="listening-part-head"><div><span class="player-kicker">PART 2</span><h3>第2部｜聴読解テスト</h3></div><b>${part2.reduce((n,p)=>n+listeningPackQuestions(p.id).length,0)} 題</b></div><div class="listening-pack-grid">${part2.map(renderPackCard).join('')}</div></div>`;document.getElementById('listeningBooksBack').onclick=()=>{listeningBookFocus=null;renderListening();window.scrollTo({top:0,behavior:'smooth'})};root.querySelector('[data-listen-book-full]').onclick=()=>startListeningBookSession('all',book.id);root.querySelector('[data-listen-book-random]').onclick=()=>startListeningBookSession('random20',book.id);root.querySelector('[data-listen-book-unanswered]').onclick=()=>startListeningBookSession('unanswered',book.id);root.querySelectorAll('[data-listen-pack]').forEach(b=>b.onclick=()=>startListeningSession('all',b.dataset.listenPack));root.querySelectorAll('[data-listen-random]').forEach(b=>b.onclick=()=>startListeningSession('random',b.dataset.listenRandom));return}
    const legacy=LISTENING_PACKS.filter(p=>p.collectionId==='BJT_JPLUS_ORIGINAL');
    const bookCards=LISTENING_BOOKS.map(book=>{if(book.placeholder)return `<article class="card library-book-card placeholder"><div class="library-book-head"><div><span class="player-kicker">LISTENING BOOK ${String(book.order).padStart(2,'0')}</span><h3>${esc(book.title)}</h3><p>${esc(book.sourceLabel)}</p></div><strong>—<small>題</small></strong></div><div class="library-placeholder-copy">已預留分冊位置。之後匯入新的一整冊真題時，直接掛入這個 Book，不需要再改首頁架構。</div><button class="btn" disabled>尚未匯入</button></article>`;const qs=listeningBookQuestions(book.id),st=listeningStats(qs),ms=masteryStats(qs,listeningProgressOf);return `<article class="card library-book-card"><div class="library-book-head"><div><span class="player-kicker">LISTENING BOOK ${String(book.order).padStart(2,'0')}</span><h3>${esc(book.title)}</h3><p>${esc(book.sourceLabel)}</p></div><strong>${qs.length}<small>題</small></strong></div><div class="progress mastery-progress"><i style="width:${ms.percent}%"></i></div><div class="library-book-meta"><span>熟練 ${ms.mastered}/${qs.length}</span><span>已作答 ${st.answered}/${qs.length}</span><span>${listeningBookPacks(book).length} Sections</span></div><button class="btn primary" data-listening-book="${esc(book.id)}">進入本冊</button></article>`}).join('');
    root.innerHTML=`<section class="card listening-hero"><div><span class="player-kicker">LISTENING TRAINING</span><h2>聽解 × 聽讀解｜分冊練習</h2><p>目前共 ${LISTENING_QUESTIONS.length} 題。前 10 題保留為早期匯入深度解析題；第1冊為 BJT J+ 02（65題），第2冊為 BJT 聴力 真題 02（50題），第3冊為 BJT 聴力 真題 03（65題）。</p></div><div class="listening-hero-count"><strong>${LISTENING_QUESTIONS.length}</strong><span>真題</span></div></section><div class="grid stats-grid listening-stats"><div class="card stat"><span>熟練完成率</span><strong>${masteryAll.percent}%</strong><small>${masteryAll.mastered}/${LISTENING_QUESTIONS.length} 題 ★★★★★</small></div><div class="card stat"><span>已作答</span><strong>${all.answered}/${LISTENING_QUESTIONS.length}</strong><small>未完成熟練 ${masteryAll.remaining} 題</small></div><div class="card stat"><span>聽力正確率</span><strong>${all.accuracy}%</strong><small>${all.correct} / ${all.attempts} 次作答</small></div><div class="card stat"><span>初聽正解率</span><strong>${all.firstListenAccuracy}%</strong><small>第一次播放就答對 ${all.firstListenCorrect} 次</small></div><div class="card stat"><span>待處理</span><strong>${weak}</strong><small>錯題 · ${due} 題到期複習</small></div></div><section class="card mastery-home-card listening-mastery-card"><div class="mastery-home-copy"><span class="player-kicker">LISTENING MASTERY</span><h2>${masteryAll.mastered} / ${masteryAll.total} 題完成</h2><div class="progress mastery-progress"><i style="width:${masteryAll.percent}%"></i></div></div><div class="mastery-filter-actions"><button class="btn primary" data-listen-global="mastery-incomplete">未完成 ${masteryAll.remaining}</button><button class="btn" data-listen-global="mastery-one">差 1 次 ${masteryAll.oneAway}</button><button class="btn" data-listen-global="mastery-zero">0 次正解 ${masteryAll.zero}</button><button class="btn" data-listen-global="mastery-done">已完成 ${masteryAll.mastered}</button><button class="btn ${masteryAll.highError?'bad':''}" data-listen-global="mastery-high-error">高錯誤 ${masteryAll.highError}</button></div></section><div class="quick-actions listening-actions">${lastId?'<button class="btn primary" data-listen-start="continue">▶ 繼續上次</button>':''}<button class="btn" data-listen-global="random20">全題庫隨機 20 題</button><button class="btn" data-listen-global="unanswered">全題庫未作答</button><button class="btn ${weak?'bad':''}" data-listen-global="weak">全題庫錯題 (${weak})</button><button class="btn ${due?'warn':''}" data-listen-global="due">全題庫到期 (${due})</button></div><section class="listening-library-group"><div class="section-title"><div><h2>早期匯入題｜10 題</h2><p>最初匯入的深度解析題組，獨立保留，不併入第1冊。</p></div></div><div class="listening-pack-grid">${legacy.map(renderPackCard).join('')}</div></section><section class="listening-library-group"><div class="section-title"><div><h2>完整模擬分冊</h2><p>每冊點進去後仍保留原本 Part／Section；可整冊模擬或單獨練 Section。</p></div></div><div class="library-book-grid">${bookCards}</div></section>`;root.querySelectorAll('[data-listen-start]').forEach(b=>b.onclick=()=>startListeningSession(b.dataset.listenStart,state.listening.lastPackId||LISTENING_PACKS[0]?.id));root.querySelectorAll('[data-listen-global]').forEach(b=>b.onclick=()=>startListeningSession(b.dataset.listenGlobal,'__ALL__'));root.querySelectorAll('[data-listen-pack]').forEach(b=>b.onclick=()=>startListeningSession('all',b.dataset.listenPack));root.querySelectorAll('[data-listen-random]').forEach(b=>b.onclick=()=>startListeningSession('random',b.dataset.listenRandom));root.querySelectorAll('[data-listening-book]').forEach(b=>b.onclick=()=>{listeningBookFocus=b.dataset.listeningBook;renderListening();window.scrollTo({top:0,behavior:'smooth'})});
  }
  function renderListening(){const root=document.getElementById('view-listening');if(!root)return;if(!LISTENING_QUESTIONS.length){root.innerHTML='<div class="card empty">目前沒有聽力題庫。</div>';return}if(!listeningSession){renderListeningHome(root);return}if(listeningSession.index>=listeningSession.ids.length){renderListeningSessionEnd(root);return}renderListeningQuestion(root)}

  function renderMistakes(){
    const list=weakQuestions().sort((a,b)=>{const pa=progressOf(a.id),pb=progressOf(b.id);return (pb.wrong||0)-(pa.wrong||0)});const root=document.getElementById('view-mistakes');
    if(!list.length){root.innerHTML='<div class="card empty">目前沒有錯題或標記不熟的題目。繼續刷題後會自動整理到這裡。</div>';return}
    root.innerHTML=`<div class="card"><div class="section-title" style="margin-top:0"><div><h2>${list.length} 題需要處理</h2><p>依答錯次數排序；已標記的錯因會一起保留。</p></div><button class="btn primary" id="startWeakNow">開始刷錯題</button></div><div style="overflow:auto"><table class="table"><thead><tr><th>題目</th><th>分類</th><th>錯因</th><th>正確 / 錯誤</th><th>熟練度</th><th>操作</th></tr></thead><tbody>${list.map(q=>{const p=progressOf(q.id),m=masteryOfProgress(p),tags=state.errorTags[q.id]||[];return `<tr><td>${esc(q.stem)}</td><td>${esc(q.category)}</td><td>${tags.length?tags.map(x=>`<span class="tag">${esc(x)}</span>`).join(' '):'—'}</td><td>${p.correct||0} / ${p.wrong||0}</td><td><span class="table-mastery-stars">${m.stars}</span><small>${m.mastered?'MASTERED':`${m.level}/${MASTERY_TARGET}`}</small></td><td><button class="btn" data-one="${q.id}">練這題</button></td></tr>`}).join('')}</tbody></table></div></div>`;
    document.getElementById('startWeakNow').onclick=()=>startSession('weak');document.querySelectorAll('[data-one]').forEach(b=>b.onclick=()=>{createSession('one',[b.dataset.one]);switchView('practice')});
  }

  function renderSettings(){const root=document.getElementById('view-settings');root.innerHTML=`<div class="grid settings-grid">
    <div class="card"><h2>刷題設定</h2>
      <div class="setting-row"><div><b>選項隨機</b><div class="small">避免記答案位置。</div></div><input id="shuffleSet" type="checkbox" ${state.settings.shuffleOptions?'checked':''}></div>
      <div class="setting-row"><div><b>顯示平假名讀音</b><div class="small">在知識卡、文章、實用商務與系統課程顯示括號讀音。</div></div><input id="readingSet" type="checkbox" ${state.settings.showReadings?'checked':''}></div>
      <div class="setting-row"><div><b>系統課程顯示中文</b><div class="small">例句保留日文，並可切換繁體中文翻譯。</div></div><input id="translationSet" type="checkbox" ${state.settings.showTranslations?'checked':''}></div>
      <div class="setting-row"><div><b>綜合題包含實用商務</b><div class="small">關閉後，綜合混合只抽原本 BJT 題庫。</div></div><input id="businessMixSet" type="checkbox" ${state.settings.includeBusinessInMixed?'checked':''}></div>
      <div class="setting-row"><div><b>延伸題每輪</b></div><select class="select" id="extSize">${[10,20,30,50,80].map(n=>`<option ${n===state.settings.extensionSize?'selected':''}>${n}</option>`).join('')}</select></div>
      <div class="setting-row"><div><b>綜合題每輪</b></div><select class="select" id="mixSize">${[10,20,30,50,80].map(n=>`<option ${n===state.settings.mixedSize?'selected':''}>${n}</option>`).join('')}</select></div>
    </div>
    <div class="card"><h2>備份與還原</h2><p class="small">題目進度、系統課程、錯因標籤、收藏與個人筆記都保存在瀏覽器 localStorage。換裝置前建議匯出。</p><div class="actions"><button class="btn primary" id="exportBtn">匯出學習紀錄</button><button class="btn" id="importBtn">匯入紀錄</button></div><hr style="border:0;border-top:1px solid var(--line);margin:20px 0"><button class="btn danger" id="resetBtn">清除全部學習紀錄</button></div>
    <div class="card"><h2>角色成長</h2><p>目前位階：<b>Lv.${gameLevel()} ${esc(mainTitleAt().name)}</b></p><p>累積 EXP：<b>${state.game.xp||0}</b></p><p>最高 Combo：<b>${state.game.maxCombo||0}</b></p><p>特殊異名：<b>${state.game.unlockedTitles.length}</b></p><p>Boss 擊破：<b>${(GAME.bosses||[]).filter(b=>!b.final&&bossState(b.id).cleared).length}/8</b></p><p class="small">Level 代表 App 內有效學習累積，不等同 BJT 官方 J1/J1+ 成績。</p></div>
    <div class="card"><h2>題庫內容</h2><p>知識點：<b>${KNOW.length}</b></p><p>題目：<b>${QUESTIONS.length}</b></p><p>原題／原題型：<b>${QUESTIONS.filter(q=>q.source==='原題').length}</b></p><p>延伸題：<b>${QUESTIONS.filter(q=>q.source==='延伸').length}</b></p><p>實用商務課程：<b>${BUSINESS_QUESTIONS.length}</b></p><p>聽力真題：<b>${LISTENING_QUESTIONS.length}</b>（${LISTENING_PACKS.length} 題組）</p><p>系統學習：<b>${MODULES.length} 模組／${LESSONS.length} 課／${LESSONS.reduce((n,l)=>n+(l.quickChecks||[]).length,0)} Quick Check</b></p></div>
    <div class="card"><h2>學習規則</h2><p class="small">題目完成標準：累積答對 5 次＝★★★★★ MASTERED。streak（連續答對）只用於間隔複習排程：答錯約 1 小時內再複習；連對 1 次約 1 天；連對 2 次約 3 天；連對 3 次以上約 7 天。</p></div>
  </div>`;
    document.getElementById('shuffleSet').onchange=e=>{state.settings.shuffleOptions=e.target.checked;saveState()};document.getElementById('readingSet').onchange=e=>{state.settings.showReadings=e.target.checked;saveState()};document.getElementById('translationSet').onchange=e=>{state.settings.showTranslations=e.target.checked;saveState()};document.getElementById('businessMixSet').onchange=e=>{state.settings.includeBusinessInMixed=e.target.checked;saveState()};document.getElementById('extSize').onchange=e=>{state.settings.extensionSize=Number(e.target.value);saveState()};document.getElementById('mixSize').onchange=e=>{state.settings.mixedSize=Number(e.target.value);saveState()};document.getElementById('exportBtn').onclick=exportState;document.getElementById('importBtn').onclick=()=>document.getElementById('importFile').click();document.getElementById('resetBtn').onclick=()=>{if(confirm('確定清除所有作答紀錄、系統課程進度、筆記、收藏與錯題標記？')){localStorage.removeItem(STORAGE);state=loadState();session=null;toast('已清除');renderSettings()}};
  }
  function exportState(){const blob=new Blob([JSON.stringify(state,null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=`BJT學習紀錄_${today()}.json`;a.click();URL.revokeObjectURL(a.href)}
  function importState(file){const r=new FileReader();r.onload=()=>{try{const d=JSON.parse(r.result);localStorage.setItem(STORAGE,JSON.stringify(d));state=loadState();saveState();checkGameAchievements();toast('匯入完成');renderSettings()}catch(e){alert('檔案格式不正確')}};r.readAsText(file)}

  document.querySelectorAll('.nav-btn').forEach(b=>b.addEventListener('click',()=>switchView(b.dataset.view)));
  document.getElementById('menuBtn').addEventListener('click',()=>document.getElementById('sidebar').classList.toggle('open'));
  document.addEventListener('click',e=>{const btn=e.target.closest?.('[data-image-viewer]');if(btn){e.preventDefault();openImageViewer(btn.dataset.imageViewer,btn.dataset.imageAlt||'題目圖片')}});
  document.getElementById('importFile').addEventListener('change',e=>{if(e.target.files[0])importState(e.target.files[0]);e.target.value=''})
  document.addEventListener('keydown',e=>{if(['INPUT','TEXTAREA','SELECT'].includes(document.activeElement?.tagName))return;const practiceActive=document.getElementById('view-practice').classList.contains('active'),listeningActive=document.getElementById('view-listening').classList.contains('active');if(practiceActive&&session){if(!currentAnswered&&['1','2','3','4'].includes(e.key)){const b=document.querySelector(`.option[data-opt="${Number(e.key)-1}"]`);if(b)b.click()}else if(e.key==='ArrowLeft'){previousQuestion()}else if(e.key==='ArrowRight'||(currentAnswered&&e.key==='Enter')){nextQuestion()}return}if(listeningActive&&listeningSession){const rec=listeningRecord();if(!rec?.answered&&rec?.audioStarted&&['1','2','3','4'].includes(e.key))answerListening(Number(e.key));else if(e.key==='ArrowLeft')listeningPrev();else if(e.key==='ArrowRight')listeningNext()}})
  if('serviceWorker' in navigator && location.protocol.startsWith('http')) navigator.serviceWorker.register('./sw.js').catch(()=>{});
  applyLatestFeatureBadge();checkGameAchievements(false);saveState();updateToday();renderDashboard();
  setInterval(()=>{if(ensureDailyCurrent()) localStorage.setItem(STORAGE,JSON.stringify(state));updateToday()},60000);
})();
