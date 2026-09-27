// v14.6 — question-level personal notes for every practice/listening/mock item.
(function(){
  const STORAGE='bjtQuestionNotesV1';
  const load=()=>{try{const x=JSON.parse(localStorage.getItem(STORAGE)||'{}');return x&&typeof x==='object'?x:{}}catch(e){return {}}};
  let notes=load();
  const esc=s=>String(s??'').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
  const save=()=>localStorage.setItem(STORAGE,JSON.stringify(notes));
  const get=key=>String(notes[key]?.text||'');
  const has=key=>!!get(key).trim();
  const set=(key,text)=>{const value=String(text??'');if(value.trim()){notes[key]={text:value,updatedAt:Date.now()}}else delete notes[key];save();return notes[key]||null};
  const renderHTML=(key,opts={})=>{
    const title=opts.title||'📝 我的筆記';
    const placeholder=opts.placeholder||'寫下這題的文法、單字、錯因、自己的記憶方式或補充例句…';
    const value=get(key);
    return `<section class="question-note-box" data-question-note-box="${esc(key)}"><div class="question-note-head"><div><b>${esc(title)}</b><span>只在作答／交卷後顯示，不會在作答前提示答案。</span></div><em data-question-note-status>${value?'已儲存':'尚未填寫'}</em></div><textarea class="question-note-input" data-question-note="${esc(key)}" placeholder="${esc(placeholder)}">${esc(value)}</textarea><div class="question-note-foot"><span>輸入後自動儲存</span><button type="button" class="btn question-note-clear" data-question-note-clear="${esc(key)}" ${value?'':'disabled'}>清除筆記</button></div></section>`;
  };
  const bind=(root=document)=>{
    root.querySelectorAll?.('[data-question-note]').forEach(t=>{if(t.dataset.noteBound)return;t.dataset.noteBound='1';let timer=null;t.addEventListener('input',()=>{clearTimeout(timer);const key=t.dataset.questionNote,box=t.closest('[data-question-note-box]'),status=box?.querySelector('[data-question-note-status]'),clear=box?.querySelector('[data-question-note-clear]');if(status)status.textContent='儲存中…';timer=setTimeout(()=>{set(key,t.value);if(status)status.textContent=t.value.trim()?'已自動儲存':'尚未填寫';if(clear)clear.disabled=!t.value.trim()},220)});});
    root.querySelectorAll?.('[data-question-note-clear]').forEach(b=>{if(b.dataset.noteBound)return;b.dataset.noteBound='1';b.addEventListener('click',()=>{const key=b.dataset.questionNoteClear,box=b.closest('[data-question-note-box]'),t=box?.querySelector('[data-question-note]'),status=box?.querySelector('[data-question-note-status]');if(!confirm('清除這一題的個人筆記？'))return;set(key,'');if(t)t.value='';if(status)status.textContent='尚未填寫';b.disabled=true;});});
  };
  const exportData=()=>JSON.parse(JSON.stringify(notes));
  const importData=data=>{notes=(data&&typeof data==='object')?JSON.parse(JSON.stringify(data)):{};save()};
  const clearAll=()=>{notes={};localStorage.removeItem(STORAGE)};
  window.BJT_QUESTION_NOTES={get,set,has,renderHTML,bind,exportData,importData,clearAll,storageKey:STORAGE};
})();
