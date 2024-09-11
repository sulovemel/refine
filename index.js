const CharactersName=['孤僻','固执','调皮','勇敢','坦率','大胆','淘气','无虑','悠闲','平静','保守','稳重','马虎','冷静','认真','沉着','温顺','慎重','狂妄','实干','胆小','急躁','开朗','天真','浮躁',];const Characters={孤僻:{text:'孤僻 ( 攻击 ↑ 防御 ↓ )',effect:[1,1.1,0.9,1,1,1]},固执:{text:'固执 ( 攻击 ↑ 法术 ↓ )',effect:[1,1.1,1,0.9,1,1]},调皮:{text:'调皮 ( 攻击 ↑ 抗性 ↓ )',effect:[1,1.1,1,1,0.9,1]},勇敢:{text:'勇敢 ( 攻击 ↑ 速度 ↓ )',effect:[1,1.1,1,1,1,0.9]},坦率:{text:'坦率 ( 平衡 )',effect:[1,1,1,1,1,1]},大胆:{text:'大胆 ( 防御 ↑ 攻击 ↓ )',effect:[1,0.9,1.1,1,1,1]},淘气:{text:'淘气 ( 防御 ↑ 法术 ↓ )',effect:[1,1,1.1,0.9,1,1]},无虑:{text:'无虑 ( 防御 ↑ 抗性 ↓ )',effect:[1,1,1.1,1,0.9,1]},悠闲:{text:'悠闲 ( 防御 ↑ 速度 ↓ )',effect:[1,1,1.1,1,1,0.9]},平静:{text:'平静 ( 平衡 )',effect:[1,1,1,1,1,1]},保守:{text:'保守 ( 法术 ↑ 攻击 ↓ )',effect:[1,0.9,1,1.1,1,1]},稳重:{text:'稳重 ( 法术 ↑ 防御 ↓ )',effect:[1,1,0.9,1.1,1,1]},马虎:{text:'马虎 ( 法术 ↑ 抗性 ↓ )',effect:[1,1,1,1.1,0.9,1]},冷静:{text:'冷静 ( 法术 ↑ 速度 ↓ )',effect:[1,1,1,1.1,1,0.9]},认真:{text:'认真 ( 平衡 )',effect:[1,1,1,1,1,1]},沉着:{text:'沉着 ( 抗性 ↑ 攻击 ↓ )',effect:[1,0.9,1,1,1.1,1]},温顺:{text:'温顺 ( 抗性 ↑ 防御 ↓ )',effect:[1,1,0.9,1,1.1,1]},慎重:{text:'慎重 ( 抗性 ↑ 法术 ↓ )',effect:[1,1,1,0.9,1.1,1]},狂妄:{text:'狂妄 ( 抗性 ↑ 速度 ↓ )',effect:[1,1,1,1,1.1,0.9]},实干:{text:'实干 ( 平衡 )',effect:[1,1,1,1,1,1]},胆小:{text:'胆小 ( 速度 ↑ 攻击 ↓ )',effect:[1,0.9,1,1,1,1.1]},急躁:{text:'急躁 ( 速度 ↑ 防御 ↓ )',effect:[1,1,0.9,1,1,1.1]},开朗:{text:'开朗 ( 速度 ↑ 法术 ↓ )',effect:[1,1,1,0.9,1,1.1]},天真:{text:'天真 ( 速度 ↑ 抗性 ↓ )',effect:[1,1,1,1,0.9,1.1]},浮躁:{text:'浮躁 ( 平衡 )',effect:[1,1,1,1,1,1]},};let _aptitude={strength:3,attack:3,defence:3,magic:3,resistance:3,speed:3,};let _character={cName:'孤僻',newCharacters:{text:'孤僻 ( 攻击 ↑ 防御 ↓ )',effect:[1,1.1,0.9,1,1,1],},};const _remould={getRandomIntInclusive:(min,max)=>{const minCeiled=Math.ceil(min);const maxFloored=Math.floor(max);return Math.floor(Math.random()*(maxFloored-minCeiled+1)+minCeiled)},probabilitiesHigh:[0.16,0.26,0.24,0.2,0.09,0.05],probabilitiesLow:[0.22,0.22,0.24,0.22,0.06,0.04],lastResult:1,count:0,generateWeightedRandomOptions:function(options,astrict){const randomOptions={};for(const key in options){if(options.hasOwnProperty(key)&&options[key]){randomOptions[key]=astrict?this.weightedAstrictRandom():this.weightedRandom()}}return randomOptions},weightedRandom:function(){const probabilities=this.probabilitiesHigh;const randomValue=Math.random();let cumulativeProbability=0;for(let i=0;i<probabilities.length;i++){cumulativeProbability+=probabilities[i];if(randomValue<cumulativeProbability){return i}}return 3},weightedAstrictRandom:function(){if(this.count>=1){(this.count=0),(this.lastResult=1)}const randomValue=Math.random();let cumulativeProbability=0;let probabilities=this.probabilitiesHigh;if(this.lastResult>=4){probabilities=this.probabilitiesLow}for(let i=0;i<probabilities.length;i++){cumulativeProbability+=probabilities[i];if(randomValue<cumulativeProbability){this.lastResult=i;this.count++;return i}}this.count++;this.lastResult=3;return 3},zhd:function(){const index=this.getRandomIntInclusive(0,CharactersName.length-1);const cName=CharactersName[index];const newCharacters=Characters[cName];return{cName,newCharacters}},};const statsOptions={xsd:{text:'洗髓丹',message:'确定要对圣光天尊使用洗髓丹？',options:{strength:true,attack:true,defence:true,magic:true,resistance:true,speed:true,},character:true,astrict:false,},gs_xsd:{text:'攻击速度洗髓丹',message:'确定要对圣光天尊使用攻击速度洗髓丹？',options:{strength:false,attack:true,defence:false,magic:false,resistance:false,speed:true,},character:true,astrict:true,},fs_xsd:{text:'法术速度洗髓丹',message:'确定要对圣光天尊使用法术速度洗髓丹？',options:{strength:false,attack:false,defence:false,magic:true,resistance:false,speed:true,},character:true,astrict:true,},tf_xsd:{text:'体力防御洗髓丹',message:'确定要对圣光天尊使用体力防御洗髓丹？',options:{strength:true,attack:false,defence:true,magic:false,resistance:false,speed:false,},character:true,astrict:true,},tk_xsd:{text:'体力抗性洗髓丹',message:'确定要对圣光天尊使用体力抗性洗髓丹？',options:{strength:true,attack:false,defence:false,magic:false,resistance:true,speed:false,},character:true,astrict:true,},fk_xsd:{text:'防御抗性洗髓丹',message:'确定要对圣光天尊使用防御抗性洗髓丹？',options:{strength:false,attack:false,defence:true,magic:false,resistance:true,speed:false,},character:true,astrict:true,},zhd:{text:'造化丹',message:'确定要对圣光天尊使用造化丹？',character:true,},};const ln={泛泛之辈:'images/aptitude6.svg',璞玉之质:'images/aptitude5.svg',百里挑一:'images/aptitude4.svg',千载难逢:'images/aptitude3.svg',万众瞩目:'images/aptitude2.svg',绝代妖王:'images/aptitude1.svg',};function evaluateAptitude(aptitude){const totalStars=Object.values(aptitude).reduce((sum,value)=>sum+value,0);const allAttributesGreaterOrEqual4=Object.values(aptitude).every(value=>value>=4);if(allAttributesGreaterOrEqual4)return'绝代妖王';const levels={泛泛之辈:[0,3],璞玉之质:[4,8],百里挑一:[9,13],千载难逢:[14,18],万众瞩目:[19,28],};for(const[level,range]of Object.entries(levels)){if(totalStars>=range[0]&&totalStars<=range[1]){return level}}}const mode=new Mode(document.querySelector('.mode'));let _count=0;document.querySelector('.paging').addEventListener('click',function(e){const target=e.target;if(target.dataset.item){document.querySelector('.tab .active').classList.remove('active');document.querySelectorAll('.tab-item')[target.dataset.item].classList.add('active')}else{mode.knowShow('拟真功能、无法使用！')}});document.querySelectorAll('.btn').forEach((item,i)=>{item.addEventListener('click',function(e){mode.knowShow('拟真功能、无法使用！<br/>'+e.target.dataset.tips)})});document.querySelectorAll('[data-stat]').forEach(item=>{item.addEventListener('click',function(e){const em=e.target.nextElementSibling;let num=em.textContent;if(num*1<=0){mode.knowShow('？');return}let stat=this.dataset.stat;const _o=statsOptions[stat];const{message,options,character,astrict}=_o;mode.confirmShow(message,()=>{const r_aptitude=options?_remould.generateWeightedRandomOptions(options,astrict):null;const new_aptitude={..._aptitude,...r_aptitude};const new_character=character?_remould.zhd():'';personalityChange({aptitude:_aptitude,character:_character.cName},{aptitude:new_aptitude,character:new_character.cName});setAptitudeElement(new_aptitude);setCharacterElement(new_character);_aptitude=new_aptitude;_character=new_character;em.textContent=--num;_count++})})});function setCharacterElement(o){document.querySelector('.rabbet-character1').textContent=o.cName;document.querySelector('.rabbet-character2').textContent='性格：'+o.newCharacters.text}function setAptitudeElement(o){const aptitude_str=evaluateAptitude(o);document.querySelector('.qc').textContent=aptitude_str;document.querySelector('.rabbet-aptitude-name').src=ln[aptitude_str];document.querySelector('.aptitude-specific').innerHTML=`<li><div>13</div><div>0</div><div class="aptitude-bg${o.strength}"></div></li><li><div>8</div><div>0</div><div class="aptitude-bg${o.attack}"></div></li><li><div>6</div><div>0</div><div class="aptitude-bg${o.defence}"></div></li><li><div>7</div><div>0</div><div class="aptitude-bg${o.magic}"></div></li><li><div>7</div><div>0</div><div class="aptitude-bg${o.resistance}"></div></li><li><div>7</div><div>0</div><div class="aptitude-bg${o.speed}"></div></li>`}document.querySelector('.pc-qd').addEventListener('click',function(){document.querySelector('.personality-change').classList.add('conceal')});function personalityChange(_old,_new){document.querySelector('.old-character').textContent=_old.character;document.querySelector('.new-character').textContent=_new.character;document.querySelector('.old-aptitude').textContent=evaluateAptitude(_old.aptitude);document.querySelector('.new-aptitude').textContent=evaluateAptitude(_new.aptitude);_new.character;document.querySelector('.old-aptitude-xx').innerHTML=`<li class="aptitude-bg${_old.aptitude.strength}"></li><li class="aptitude-bg${_old.aptitude.attack}"></li><li class="aptitude-bg${_old.aptitude.defence}"></li><li class="aptitude-bg${_old.aptitude.magic}"></li><li class="aptitude-bg${_old.aptitude.resistance}"></li><li class="aptitude-bg${_old.aptitude.speed}"></li>`;document.querySelector('.new-aptitude-xx').innerHTML=`<li class="aptitude-bg${_new.aptitude.strength}"></li><li class="aptitude-bg${_new.aptitude.attack}"></li><li class="aptitude-bg${_new.aptitude.defence}"></li><li class="aptitude-bg${_new.aptitude.magic}"></li><li class="aptitude-bg${_new.aptitude.resistance}"></li><li class="aptitude-bg${_new.aptitude.speed}"></li>`;document.querySelector('.personality-change').classList.remove('conceal')}function graphGeneration_min(a=true){const r_aptitude=_remould.generateWeightedRandomOptions({strength:true,attack:true,defence:true,magic:true,resistance:true,speed:true,},false);const o1={aptitude:r_aptitude,character:_remould.zhd().cName};const o2={aptitude:{strength:Math.random()>=0.5?5:4,attack:Math.random()>=0.5?5:4,defence:Math.random()>=0.5?5:4,magic:Math.random()>=0.5?5:4,resistance:Math.random()>=0.5?5:4,speed:Math.random()>=0.5?5:4,},character:_remould.zhd().cName,};if(a){personalityChange(o1,o2)}else{personalityChange(o2,o1)}}window.onload=function(){document.querySelector('.shade').classList.add('conceal');setCharacterElement(_character);setAptitudeElement(_aptitude);spriteSVG(data,'sgtzid1',elf,0,0,true);mode.knowShow('本模拟器仅供娱乐测试，切勿作真！')};console.log('你可以使用：graphGeneration_min() 或 graphGeneration_min(0) 函数生成一张吊图，然后截图告诉朋友吧！');