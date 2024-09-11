class Mode{constructor(element){this.mode=element;this.modeContent=element.querySelector('.mode-content');this.visible=false;this.tasks=[];this.mode.addEventListener('click',e=>{if(!e.target.dataset.close)return;const choice=e.target.dataset.choice;this.hide();const task=this.tasks.shift();if(choice){const{ok,no}=task;choice*1?ok&&ok():no&&no()}if(this.tasks.length>0){const task=this.tasks[0];const{type,text,ok,no}=task;switch(type){case'confirmShow':this[type](text,ok,no,false);break;case'knowShow':this[type](text,false);break;default:this.tasks.shift();break}}})}elementKnow(elemText){return`<div class="mode-know">${elemText}</div><img data-close="1"data-type="know"class="mode-btn mode-btn-qd"src="./images/mode-btn-zd.svg"/>`}elementConfirm(elemText){return`<div class="mode-confirm">${elemText}</div><img data-close="1"data-choice="1"class="mode-btn mode-btn-yes"src="./images/mode-btn-qd.svg"/><img data-close="1"data-choice="0"class="mode-btn mode-btn-no"src="./images/mode-btn-qx.svg"/>`}toggleVisibility(){this.mode.style.opacity=this.visible?'0':'1';this.mode.style.visibility=this.visible?'hidden':'visible';this.visible=!this.visible}hide(){this.count=0;this.modeContent.innerHTML='';this.toggleVisibility()}setKnowModeText(text){this.modeContent.insertAdjacentHTML('beforeend',this.elementKnow(`<p>${this.count>1?`<span class="mode-number">${this.count}</span>&nbsp;`:''}${text}</p>`))}setConfirmModeText(text){this.modeContent.insertAdjacentHTML('beforeend',this.elementConfirm(text))}knowShow(text,queue=true){queue&&this.tasks.push({type:'knowShow',text:text,date:new Date().toLocaleString(),});if(!this.visible){this.setKnowModeText(text);this.toggleVisibility()}}confirmShow(text,ok=null,no=null,queue=true){queue&&this.tasks.push({type:'confirmShow',text:text,ok:ok,no:no,date:new Date().toLocaleString(),});if(!this.visible){this.setConfirmModeText(text);this.toggleVisibility()}}}