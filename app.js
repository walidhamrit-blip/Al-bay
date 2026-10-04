(() => {
  const PHONE = '218913442640';
  const I18N = {
    en: {
      announce:'A little taste of home, right here in Tripoli',brandSub:'TRIPOLI • LIBYA',navMenu:'The menu',navStory:'Our story',navExperience:'The experience',navVisit:'Find us',themes:'Themes',chooseTheme:'Choose your atmosphere',orderNow:'Order now',
      heroEyebrow:'FAMILY FOOD. TRIPOLI SOUL.',heroTitle:'Good food.<br><em>Better together.</em>',heroText:'Gather around the table for the flavours you grew up with, made fresh and served with heart.',exploreMenu:'Explore the menu',discoverStory:'Our story',scroll:'SCROLL TO EXPLORE',heroLocation:'YOUR TABLE IN TRIPOLI',
      stripOne:'MADE WITH LOVE',stripTwo:'FRESH EVERY DAY',stripThree:'ALWAYS ROOM FOR ONE MORE',menuEyebrow:'THE GOOD STUFF',menuTitle:'A menu made<br>to <em>share.</em>',menuIntro:'Inspired by Libyan kitchens, made for long lunches, late dinners, and everyone in between.',samplePrices:'Sample menu · indicative prices',menuFootnote:'Good things are better shared.',flipMenu:'Flip through the digital menu ↗',viewBasket:'View your basket',
      storyPhotoLabel:'PULL UP A CHAIR',storyEyebrow:'A LITTLE BIT ABOUT US',storyTitle:"There's always<br><em>room at our table.</em>",storyText:"At مطعم العيلة, a meal is never just a meal. It's stories shared, plates passed around, and that familiar feeling of being right at home. From our kitchen in Tripoli to your table, every dish is made to bring us closer.",feelWelcome:'Feel at home',
      momentsEyebrow:'MORE THAN A MEAL',momentsTitle:'Come hungry.<br><em>Leave happy.</em>',momentsIntro:"Whatever brings you in, we've saved you a seat.",momentOneTitle:'The family table',momentOneText:'Big conversations. Bigger plates. The best kind of together.',momentTwoTitle:'Your favourites, to go.',momentTwoText:'A little comfort for wherever life takes you. Order in a few taps.',
      visitEyebrow:'COME ON IN',visitTitle:'Your seat<br>is <em>waiting.</em>',visitText:'In the heart of Tripoli. For family dinners, catch-ups and any reason to eat something wonderful.',askTable:'Ask about a table',findUs:'FIND US',locationLabel:'LOCATION',locationValue:'Tripoli, Libya',phoneLabel:'CALL OR WHATSAPP',exactAddress:'Exact address to be added',openMaps:'Explore Tripoli',
      footerTagline:'Made for moments around the table.',footerExplore:'EXPLORE',footerSayHello:'SAY HELLO',footerDisclaimer:'Concept website · sample menu & prices',backTop:'BACK TO TOP ↑',cartEyebrow:'MADE FOR SHARING',yourBasket:'Your basket.',emptyTitle:'Nothing on the table yet.',emptyText:'The good stuff is just a few clicks away.',browseMenu:'Browse the menu',yourName:'Your name (optional)',namePlaceholder:'How should we call you?',orderType:'How would you like it?',pickup:'Pickup',delivery:'Delivery inquiry',specialNotes:'Anything we should know? (optional)',notesPlaceholder:'Allergies, requests or delivery address...',subtotal:'Estimated subtotal',cartDisclaimer:'Sample prices. The restaurant will confirm availability and final total on WhatsApp.',sendWhatsApp:'Send order on WhatsApp',
      waFallbackTitle:'Open WhatsApp',waFallbackText:'This embedded preview may block external apps. Copy this link and paste it into your browser to open your order in WhatsApp.',waLinkLabel:'YOUR WHATSAPP LINK',copyLink:'Copy link',tryOpen:'Try opening WhatsApp',copiedLink:'WhatsApp link copied',copyManually:'Select and copy the link above',
      add:'Add to basket',remove:'Remove',added:'Added to your basket',currency:'LYD',all:'All dishes',mains:'Mains',small:'Small plates',drinks:'Drinks',bestSeller:'FAMILY FAVOURITE',fresh:'MADE FRESH',classic:'LOCAL CLASSIC',popular:'MOST LOVED',reserveMessage:'Hello مطعم العيلة, I would like to ask about a table.',themeNames:['Rouge Maison','Obsidian Gold','Emerald','Royal Plum','Sapphire','Champagne']
    },
    ar: {
      announce:'نكهة البيت، هنا في قلب طرابلس',brandSub:'طرابلس • ليبيا',navMenu:'قائمة الطعام',navStory:'حكايتنا',navExperience:'تجربتنا',navVisit:'زورونا',themes:'الألوان',chooseTheme:'اختر أجواءك المفضلة',orderNow:'اطلب الآن',
      heroEyebrow:'أكل العائلة. بروح طرابلس.',heroTitle:'أكل طيّب.<br><em>ولمّة أطيب.</em>',heroText:'اجتمعوا حول المائدة واستمتعوا بنكهات تحبّونها، طازجة ومحضّرة من القلب.',exploreMenu:'تصفّح القائمة',discoverStory:'حكايتنا',scroll:'اكتشف المزيد',heroLocation:'مكانك على سفرتنا في طرابلس',
      stripOne:'محضّر بمحبة',stripTwo:'طازج كل يوم',stripThree:'السفرة تسع الجميع',menuEyebrow:'من مطبخنا إليكم',menuTitle:'أطباق تحلو<br><em>بالمشاركة.</em>',menuIntro:'من وحي المطابخ الليبية، لغداء يطول، وعشاء يجمع، ولحظات لا تُنسى.',samplePrices:'قائمة تجريبية · أسعار تقديرية',menuFootnote:'الأكل الطيّب أحلى مع اللمة.',flipMenu:'تصفّح القائمة ككتاب ↗',viewBasket:'عرض السلة',
      storyPhotoLabel:'تفضّلوا عندنا',storyEyebrow:'تعرّفوا علينا',storyTitle:'على سفرتنا<br><em>مكان للجميع.</em>',storyText:'في مطعم العيلة، الوجبة ليست مجرد طبق. هي حكايات نرويها، وأطباق نتشاركها، ودفء يشبه البيت. من مطبخنا في طرابلس إلى سفرتكم، نحضّر كل طبق ليقرّبنا من بعض.',feelWelcome:'خلّوا أنفسكم في بيتكم',
      momentsEyebrow:'أكثر من مجرد وجبة',momentsTitle:'تعالوا جوعانين.<br><em>وارجعوا مبسوطين.</em>',momentsIntro:'أيّاً كان سبب زيارتكم، مكانكم محفوظ على سفرتنا.',momentOneTitle:'لمّة العائلة',momentOneText:'حكايات كثيرة، وأطباق أكبر، ووقت أحلى مع بعض.',momentTwoTitle:'أكلك المفضّل، معك.',momentTwoText:'خذ نكهات مطعم العيلة أينما كنت، واطلب بخطوات بسيطة.',
      visitEyebrow:'نورتونا',visitTitle:'مكانكم<br><em>ينتظركم.</em>',visitText:'في قلب طرابلس، للعائلة والأصدقاء، ولكل مناسبة تستحق أكلة طيّبة.',askTable:'استفسر عن طاولة',findUs:'زورونا',locationLabel:'المدينة',locationValue:'طرابلس، ليبيا',phoneLabel:'اتصال أو واتساب',exactAddress:'العنوان التفصيلي سيُضاف لاحقاً',openMaps:'استكشف طرابلس',
      footerTagline:'أحلى اللحظات تبدأ حول السفرة.',footerExplore:'اكتشف',footerSayHello:'تواصل معنا',footerDisclaimer:'موقع تجريبي · قائمة وأسعار إرشادية',backTop:'العودة للأعلى ↑',cartEyebrow:'للأكل واللّمة',yourBasket:'سلّتك.',emptyTitle:'لسّه السفرة فاضية.',emptyText:'اختَر اللي يعجبك من قائمة الطعام.',browseMenu:'تصفّح القائمة',yourName:'اسمك (اختياري)',namePlaceholder:'بأي اسم نناديك؟',orderType:'كيف تحب تستلم طلبك؟',pickup:'استلام من المطعم',delivery:'استفسار عن التوصيل',specialNotes:'ملاحظات إضافية (اختياري)',notesPlaceholder:'الحساسية، الطلبات الخاصة أو عنوان التوصيل...',subtotal:'المجموع التقريبي',cartDisclaimer:'الأسعار إرشادية. يؤكد المطعم التوفر والسعر النهائي عبر واتساب.',sendWhatsApp:'أرسل الطلب عبر واتساب',
      waFallbackTitle:'افتح واتساب',waFallbackText:'قد يمنع العرض المدمج فتح التطبيقات الخارجية. انسخ هذا الرابط والصقه في المتصفح لفتح طلبك عبر واتساب.',waLinkLabel:'رابط واتساب الخاص بك',copyLink:'نسخ الرابط',tryOpen:'جرّب فتح واتساب',copiedLink:'تم نسخ رابط واتساب',copyManually:'حدّد الرابط أعلاه وانسخه يدوياً',
      add:'أضف إلى السلة',remove:'حذف',added:'أُضيف إلى سلّتك',currency:'د.ل',all:'كل الأطباق',mains:'أطباق رئيسية',small:'مقبلات',drinks:'مشروبات',bestSeller:'مفضّل العائلة',fresh:'طازج يومياً',classic:'طبق ليبي أصيل',popular:'الأكثر طلباً',reserveMessage:'مرحباً مطعم العيلة، أود الاستفسار عن حجز طاولة.',themeNames:['أحمر الدار','الأسود والذهبي','زمردي','برقوقي ملكي','ياقوتي','شامبانيا']
    }
  };
  const THEMES = [{id:'rouge',hex:'#a5342b'},{id:'obsidian',hex:'#171d1b'},{id:'emerald',hex:'#1f6755'},{id:'plum',hex:'#76385d'},{id:'sapphire',hex:'#245b78'},{id:'champagne',hex:'#8c6b40'}];
  const DISHES = [
    {id:'couscous',name:{en:'Lamb Couscous',ar:'كسكسي باللحم'},desc:{en:'Fluffy couscous, tender lamb & seasonal vegetables.',ar:'كسكسي مفوّر، لحم طري وخضار موسمية.'},price:42,category:'mains',image:'dish-couscous.jpg',tag:'bestSeller'},
    {id:'bazin',name:{en:'Traditional Bazin',ar:'بازين ليبي'},desc:{en:'A true Libyan classic with rich tomato lamb sauce.',ar:'طبق ليبي أصيل بمرقة الطماطم واللحم.'},price:38,category:'mains',image:'dish-bazin.jpg',tag:'classic'},
    {id:'grill',name:{en:'Mixed Grill',ar:'مشاوي مشكلة'},desc:{en:'Flame-kissed skewers, bread & house-made sauces.',ar:'أسياخ مشوية، خبز طازج وصلصات البيت.'},price:45,category:'mains',image:'dish-grill.jpg',tag:'popular'},
    {id:'rishta',name:{en:'Libyan Rishta',ar:'رشتة ليبية'},desc:{en:'Slow-cooked noodles with chickpeas & spiced sauce.',ar:'رشتة مطبوخة على مهل بالحمص والمرقة المتبّلة.'},price:34,category:'mains',image:'dish-rishta.jpg',tag:'fresh'},
    {id:'mbakbaka',name:{en:'Mbakbaka',ar:'مبكبكة'},desc:{en:'Comforting pasta in a fragrant tomato broth.',ar:'مكرونة بمرقة الطماطم الغنية والنكهات الليبية.'},price:36,category:'mains',image:'dish-mbakbaka.jpg',tag:'classic'},
    {id:'brik',name:{en:'Crispy Brik',ar:'بريك مقرمش'},desc:{en:'Golden pastry parcels, lemon & fresh herbs.',ar:'رقائق ذهبية مقرمشة مع الليمون والأعشاب.'},price:16,category:'small',image:'dish-brik.jpg',tag:'fresh'},
    {id:'salad',name:{en:'Garden Salad',ar:'سلطة الدار'},desc:{en:'A fresh mix of vegetables, herbs & olive oil.',ar:'خضار طازجة وأعشاب وزيت زيتون.'},price:18,category:'small',image:'dish-salad.jpg',tag:'fresh'},
    {id:'tea',name:{en:'Mint Tea',ar:'شاي بالنعناع'},desc:{en:'A little sweetness, poured the traditional way.',ar:'شاي بالنعناع على الطريقة التقليدية.'},price:9,category:'drinks',image:'dish-tea.jpg',tag:'classic'}
  ];
  const $ = (s) => document.querySelector(s);
  const $$ = (s) => [...document.querySelectorAll(s)];
  const getStored = (key, fallback) => {try {return localStorage.getItem(key) || fallback;} catch{return fallback;}};
  const setStored = (key, value) => {try {localStorage.setItem(key,value);} catch{}};
  let lang = getStored('albay-lang', navigator.language?.startsWith('ar') ? 'ar' : 'en');
  if (!I18N[lang]) lang='en';
  let theme = getStored('albay-theme','rouge');
  if (!THEMES.some(x => x.id === theme)) theme='rouge';
  let cart = {};
  try {const stored=JSON.parse(getStored('albay-cart','{}')); if (stored && typeof stored==='object' && !Array.isArray(stored)) for (const [k,v] of Object.entries(stored)) if (DISHES.some(x=>x.id===k) && Number.isInteger(v) && v>0 && v<=99) cart[k]=v;} catch{}
  let activeFilter='all', toastTimer, previousFocus;
  const tr = (k) => I18N[lang][k] || k;
  const money = (amount) => `${amount} ${tr('currency')}`;
  const cartCount = () => Object.values(cart).reduce((sum,n)=>sum+n,0);
  const cartTotal = () => DISHES.reduce((sum,x)=>sum+x.price*(cart[x.id]||0),0);
  const saveCart = () => setStored('albay-cart',JSON.stringify(cart));
  function translatePage(){
    document.documentElement.lang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';
    $('#langLabel').textContent=lang.toUpperCase();
    document.title= lang==='ar' ? 'مطعم العيلة — أكل طيّب ولمّة أطيب | طرابلس' : 'مطعم العيلة — Good food, together | Tripoli';
    $$('[data-i18n]').forEach(el=>el.textContent=tr(el.dataset.i18n));
    $$('[data-i18n-html]').forEach(el=>el.innerHTML=tr(el.dataset.i18nHtml));
    $$('[data-i18n-placeholder]').forEach(el=>el.placeholder=tr(el.dataset.i18nPlaceholder));
    $('#reserveLink').href=`https://wa.me/${PHONE}?text=${encodeURIComponent(tr('reserveMessage'))}`;
    renderThemes();renderFilters();renderMenu();renderCart();
  }
  function renderThemes(){
    $('#themeOptions').innerHTML=THEMES.map((x,i)=>`<button class="theme-option ${x.id===theme?'active':''}" type="button" data-theme-choice="${x.id}" aria-pressed="${x.id===theme}"><span class="theme-swatch" style="background:${x.hex}"></span><span>${tr('themeNames')[i]}</span><span class="theme-check">${x.id===theme?'✓':''}</span></button>`).join('');
  }
  function renderFilters(){
    $('#filterTabs').innerHTML=['all','mains','small','drinks'].map(cat=>`<button class="filter-tab ${activeFilter===cat?'active':''}" type="button" role="tab" aria-selected="${activeFilter===cat}" data-filter="${cat}">${tr(cat)}</button>`).join('');
  }
  function renderMenu(){
    let shown= activeFilter==='all' ? DISHES : DISHES.filter(d=>d.category===activeFilter);
    $('#menuGrid').innerHTML=shown.map((d,i)=>`<article class="dish-card" style="animation-delay:${Math.min(i,7)*45}ms"><div class="dish-image-wrap"><img class="dish-image" src="assets/${d.image}" alt="${d.name[lang]}" loading="lazy"/><span class="dish-tag">${tr(d.tag)}</span></div><div class="dish-info"><div class="dish-title-row"><h3>${d.name[lang]}</h3><span class="dish-price" dir="ltr">${money(d.price)}</span></div><p>${d.desc[lang]}</p><button type="button" class="dish-add" data-add="${d.id}" aria-label="${tr('add')} — ${d.name[lang]}"><span>${tr('add')}</span><span aria-hidden="true">↗</span></button></div></article>`).join('');
  }
  function showToast(message){const el=$('#toast'); el.textContent=message;el.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('show'),2100);}
  function updateCheckout(){
    const selected=$('input[name="orderType"]:checked')?.value || 'pickup';
    const name=$('#customerName').value.trim(); const notes=$('#orderNotes').value.trim();
    const lines=DISHES.filter(d=>cart[d.id]).map(d=>`• ${d.name[lang]} × ${cart[d.id]} — ${money(d.price*cart[d.id])}`);
    const msg=lang==='ar' ? [
      'مرحباً مطعم العيلة، أود طلب:',...lines,`المجموع التقريبي: ${money(cartTotal())}`,`الطريقة: ${selected==='pickup'?'استلام من المطعم':'استفسار عن التوصيل'}`,name?`الاسم: ${name}`:'',notes?`ملاحظات: ${notes}`:'','يرجى تأكيد توفر الأطباق والسعر النهائي.'].filter(Boolean).join('\n') : [
      'Hello مطعم العيلة! I would like to order:',...lines,`Estimated subtotal: ${money(cartTotal())}`,`Method: ${selected==='pickup'?'Pickup':'Delivery inquiry'}`,name?`Name: ${name}`:'',notes?`Notes: ${notes}`:'','Please confirm availability and final price.'].filter(Boolean).join('\n');
    const whatsappUrl=`https://wa.me/${PHONE}?text=${encodeURIComponent(cartCount() ? msg : (lang==='ar' ? 'مرحباً مطعم العيلة، أود الاستفسار عن المطعم.' : 'Hello مطعم العيلة, I would like to ask about the restaurant.'))}`;
    $('#checkoutLink').href=whatsappUrl;
    $('#floatingCart').href=whatsappUrl;
  }
  function renderCart(){
    let count=cartCount();
    $('#cartCount').textContent=String(count);$('#floatingCount').textContent=String(count);$('#floatingCount').hidden=count===0;
    $('#cartEmpty').hidden=count>0;$('#cartFilled').hidden=count===0;$('#cartFooter').hidden=count===0;
    $('#cartTotal').textContent=money(cartTotal());
    $('#cartItems').innerHTML=DISHES.filter(d=>cart[d.id]).map(d=>`<div class="cart-item"><img src="assets/${d.image}" alt=""/><div class="cart-item-content"><div class="cart-item-title"><span>${d.name[lang]}</span><span dir="ltr">${money(d.price*cart[d.id])}</span></div><div class="cart-item-controls"><div class="qty-control"><button type="button" data-qty="${d.id}" data-change="-1" aria-label="${lang==='ar'?'تقليل':'Decrease'} ${d.name[lang]}">−</button><span>${cart[d.id]}</span><button type="button" data-qty="${d.id}" data-change="1" aria-label="${lang==='ar'?'زيادة':'Increase'} ${d.name[lang]}">+</button></div><button class="remove-item" type="button" data-remove="${d.id}">${tr('remove')}</button></div></div></div>`).join('');
    updateCheckout();
  }
  function addToCart(id){cart[id]=Math.min(99,(cart[id]||0)+1);saveCart();renderCart();showToast(tr('added'));}
  function openCart(){closePopovers();closeMobile();previousFocus=document.activeElement;$('#cartBackdrop').hidden=false;$('#cartDrawer').classList.add('open');$('#cartDrawer').setAttribute('aria-hidden','false');document.body.classList.add('no-scroll');$('#closeCart').focus();}
  function closeCart(){if(!$('#cartDrawer').classList.contains('open'))return;$('#cartDrawer').classList.remove('open');$('#cartDrawer').setAttribute('aria-hidden','true');$('#cartBackdrop').hidden=true;document.body.classList.remove('no-scroll');previousFocus?.focus?.();}
  function closePopovers(){['lang','theme'].forEach(s=>{$(`#${s}Popover`).hidden=true;$(`#${s}Toggle`).setAttribute('aria-expanded','false');});}
  function closeMobile(){$('#mobileNav').hidden=true;$('#mobileToggle').setAttribute('aria-expanded','false');}
  function showExternalFallback(url){
    $('#externalUrl').value=url;
    $('#openExternal').href=url;
    $('#externalBackdrop').hidden=false;
    $('#externalPanel').hidden=false;
    document.body.classList.add('no-scroll');
    $('#externalUrl').focus();
    $('#externalUrl').select();
  }
  function hideExternalFallback(){
    if($('#externalPanel').hidden)return;
    $('#externalBackdrop').hidden=true;
    $('#externalPanel').hidden=true;
    if(!$('#cartDrawer').classList.contains('open'))document.body.classList.remove('no-scroll');
  }
  function setup(){
    document.body.dataset.theme=theme;translatePage();$('#year').textContent=String(new Date().getFullYear());
    document.addEventListener('click',e=>{
      const link=e.target.closest('a[href^="https://wa.me/"]');
      if(!link || link.id==='openExternal' || window.self===window.top)return;
      e.preventDefault();
      const url=link.href;
      const popup=window.open(url,'_blank');
      if(popup){popup.opener=null;}else{showExternalFallback(url);}
    });
    $('#externalClose').addEventListener('click',hideExternalFallback);
    $('#externalBackdrop').addEventListener('click',hideExternalFallback);
    $('#copyExternal').addEventListener('click',async()=>{
      const field=$('#externalUrl');
      let copied=false;
      try{if(navigator.clipboard && window.isSecureContext){await navigator.clipboard.writeText(field.value);copied=true;}}catch{}
      if(!copied){field.focus();field.select();try{copied=document.execCommand('copy');}catch{}}
      showToast(tr(copied?'copiedLink':'copyManually'));
    });
    $('#themeToggle').addEventListener('click',e=>{e.stopPropagation();const v=$('#themePopover').hidden;closePopovers();$('#themePopover').hidden=!v;$('#themeToggle').setAttribute('aria-expanded',String(v));});
    $('#langToggle').addEventListener('click',e=>{e.stopPropagation();const v=$('#langPopover').hidden;closePopovers();$('#langPopover').hidden=!v;$('#langToggle').setAttribute('aria-expanded',String(v));});
    $('#themeOptions').addEventListener('click',e=>{const btn=e.target.closest('[data-theme-choice]');if(!btn)return;theme=btn.dataset.themeChoice;document.body.dataset.theme=theme;setStored('albay-theme',theme);renderThemes();closePopovers();});
    $('#langPopover').addEventListener('click',e=>{const btn=e.target.closest('[data-lang]');if(!btn)return;lang=btn.dataset.lang;setStored('albay-lang',lang);translatePage();closePopovers();});
    document.addEventListener('click',e=>{if(!e.target.closest('.theme-wrap,.lang-wrap'))closePopovers();});
    $('#mobileToggle').addEventListener('click',()=>{const v=$('#mobileNav').hidden;$('#mobileNav').hidden=!v;$('#mobileToggle').setAttribute('aria-expanded',String(v));});
    $$('#mobileNav a').forEach(a=>a.addEventListener('click',closeMobile));
    ['#headerCart','#mobileCart','#menuCartButton','#momentCart'].forEach(sel=>$(sel).addEventListener('click',openCart));
    $('#closeCart').addEventListener('click',closeCart);$('#cartBackdrop').addEventListener('click',closeCart);
    $('#emptyBrowse').addEventListener('click',()=>{closeCart();$('#menu').scrollIntoView({behavior:'smooth'});});
    $('#filterTabs').addEventListener('click',e=>{const btn=e.target.closest('[data-filter]');if(!btn)return;activeFilter=btn.dataset.filter;renderFilters();renderMenu();});
    $('#menuGrid').addEventListener('click',e=>{const btn=e.target.closest('[data-add]');if(btn)addToCart(btn.dataset.add);});
    $('#cartItems').addEventListener('click',e=>{let remove=e.target.closest('[data-remove]');if(remove){delete cart[remove.dataset.remove];saveCart();renderCart();return;}let qty=e.target.closest('[data-qty]');if(qty){const id=qty.dataset.qty;cart[id]=Math.max(0,Math.min(99,(cart[id]||0)+Number(qty.dataset.change)));if(!cart[id])delete cart[id];saveCart();renderCart();}});
    ['#customerName','#orderNotes'].forEach(sel=>$(sel).addEventListener('input',updateCheckout));$$('input[name="orderType"]').forEach(el=>el.addEventListener('change',updateCheckout));
    document.addEventListener('keydown',e=>{if(e.key==='Escape'){hideExternalFallback();closePopovers();closeMobile();closeCart();} if(e.key==='Tab' && $('#cartDrawer').classList.contains('open') && $('#externalPanel').hidden){const focusables=$$('#cartDrawer button:not([disabled]):not([hidden]),#cartDrawer a[href]:not([hidden]),#cartDrawer input:not([disabled]),#cartDrawer textarea').filter(el=>el.getClientRects().length);const first=focusables[0],last=focusables.at(-1);if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}}});
    const obs=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');obs.unobserve(entry.target);}})},{threshold:.08});$$('.reveal').forEach(el=>obs.observe(el));
  }
  setup();
})();
