// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("pen_icon");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


function allLyrics() {

var lyrics = [
  ["Put your hand on your heart and ask what your dream was, What it really was.","gaseume soneul eontgo malhaebwa nae kkumeun mwoyeotji?\neo jinjja mwoyeotji","가슴에 손을 얹고 말해봐 내 꿈은 뭐였지?\n어 진짜 뭐였지","O!RUL8,2?","https://open.spotify.com/track/3Jqecns7MfqxumyVCyXgJA?si=RIwxSK-uRrm2VlD2xqKMkA","https://www.youtube.com/watch?v=5BwrWn8ST-8","https://colorcodedlyrics.com/2014/08/bts-bangtansonyeondan-intro-o-rul8-2"  ],
  ["Never be late to do what you wanna do right now","","","O!RUL8,2?","https://open.spotify.com/track/3Jqecns7MfqxumyVCyXgJA?si=RIwxSK-uRrm2VlD2xqKMkA","https://www.youtube.com/watch?v=5BwrWn8ST-8","https://colorcodedlyrics.com/2014/08/bts-bangtansonyeondan-intro-o-rul8-2"  ],
  ["Take chances and never regret, never","","","O!RUL8,2?","https://open.spotify.com/track/3Jqecns7MfqxumyVCyXgJA?si=RIwxSK-uRrm2VlD2xqKMkA","https://www.youtube.com/watch?v=5BwrWn8ST-8","https://colorcodedlyrics.com/2014/08/bts-bangtansonyeondan-intro-o-rul8-2"  ],
  ["Nothing lasts forever","","","O!RUL8,2?","https://open.spotify.com/track/3Jqecns7MfqxumyVCyXgJA?si=RIwxSK-uRrm2VlD2xqKMkA","https://www.youtube.com/watch?v=5BwrWn8ST-8","https://colorcodedlyrics.com/2014/08/bts-bangtansonyeondan-intro-o-rul8-2"  ],
  ["Who are you living for?","neon daeche nugul wihae sanya","넌 대체 누굴 위해 사냐","O!RUL8,2?","https://open.spotify.com/track/3Jqecns7MfqxumyVCyXgJA?si=RIwxSK-uRrm2VlD2xqKMkA","https://www.youtube.com/watch?v=5BwrWn8ST-8","https://colorcodedlyrics.com/2014/08/bts-bangtansonyeondan-intro-o-rul8-2"  ],
  ["The world is a complex","","","Outro: Her","https://open.spotify.com/track/3l8yQMdniG6Os8gUBNXV57?si=JtIrQiceTQKwwz9UZo8WtQ","","https://colorcodedlyrics.com/2017/09/bts-bangtansonyeondan-outro"  ],
  ["But I found myself","","","Outro: Her","https://open.spotify.com/track/3l8yQMdniG6Os8gUBNXV57?si=JtIrQiceTQKwwz9UZo8WtQ","","https://colorcodedlyrics.com/2017/09/bts-bangtansonyeondan-outro"  ],
  ["I’m confused too, which one’s the real me?","nado hetgallyeo daeche eotteon ge jinjja nanji","나도 헷갈려 대체 어떤 게 진짜 난지","Outro: Her","https://open.spotify.com/track/3l8yQMdniG6Os8gUBNXV57?si=JtIrQiceTQKwwz9UZo8WtQ","","https://colorcodedlyrics.com/2017/09/bts-bangtansonyeondan-outro"  ],
  ["You’re my beginning and my end","neon naege shijagija gyeolmal jachenikka","넌 내게 시작이자 결말 자체니까","Outro: Her","https://open.spotify.com/track/3l8yQMdniG6Os8gUBNXV57?si=JtIrQiceTQKwwz9UZo8WtQ","","https://colorcodedlyrics.com/2017/09/bts-bangtansonyeondan-outro"  ],
  ["You’re the answer","e daehan answer","에 대한 answer","Outro: Her","https://open.spotify.com/track/3l8yQMdniG6Os8gUBNXV57?si=JtIrQiceTQKwwz9UZo8WtQ","","https://colorcodedlyrics.com/2017/09/bts-bangtansonyeondan-outro"  ],
  ["Maybe I’m your truth and your lie","eojjeomyeon naneun neoye jinshirija geojishilji molla","어쩌면 나는 너의 진실이자 거짓일지 몰라","Outro: Her","https://open.spotify.com/track/3l8yQMdniG6Os8gUBNXV57?si=JtIrQiceTQKwwz9UZo8WtQ","","https://colorcodedlyrics.com/2017/09/bts-bangtansonyeondan-outro"  ],
  ["Maybe I’m your love and hate","eojjeomyeon dangshine sarangija jeungo","어쩌면 당신의 사랑이자 증오","Outro: Her","https://open.spotify.com/track/3l8yQMdniG6Os8gUBNXV57?si=JtIrQiceTQKwwz9UZo8WtQ","","https://colorcodedlyrics.com/2017/09/bts-bangtansonyeondan-outro"  ],
  ["Maybe I’m your enemy and friend","eojjeomyeon naneun neoye wonsuija beot","어쩌면 나는 너의 원수이자 벗","Outro: Her","https://open.spotify.com/track/3l8yQMdniG6Os8gUBNXV57?si=JtIrQiceTQKwwz9UZo8WtQ","","https://colorcodedlyrics.com/2017/09/bts-bangtansonyeondan-outro"  ],
  ["I always make an effort to be the best for you","eonjena dangshine choegoga doegi wihae noryeogeul hae","언제나 당신의 최고가 되기 위해 노력을 해","Outro: Her","https://open.spotify.com/track/3l8yQMdniG6Os8gUBNXV57?si=JtIrQiceTQKwwz9UZo8WtQ","","https://colorcodedlyrics.com/2017/09/bts-bangtansonyeondan-outro"  ],
  ["I’m your star, I shine as if nothing’s wrong","geudaemane byeol amu il eopshi bitnamyeonseodo","그대만의 별 아무 일 없이 빛나면서도","Outro: Her","https://open.spotify.com/track/3l8yQMdniG6Os8gUBNXV57?si=JtIrQiceTQKwwz9UZo8WtQ","","https://colorcodedlyrics.com/2017/09/bts-bangtansonyeondan-outro"  ],
  ["Just going wherever my heart goes","geujeo mam ganeun daero","그저 맘 가는 대로","Outro: Her","https://open.spotify.com/track/3l8yQMdniG6Os8gUBNXV57?si=JtIrQiceTQKwwz9UZo8WtQ","","https://colorcodedlyrics.com/2017/09/bts-bangtansonyeondan-outro"  ],
  ["Love makes a person go crazy","sarangeun sarameul michige hae","사랑은 사람을 미치게 해","Outro: Her","https://open.spotify.com/track/3l8yQMdniG6Os8gUBNXV57?si=JtIrQiceTQKwwz9UZo8WtQ","","https://colorcodedlyrics.com/2017/09/bts-bangtansonyeondan-outro"  ],
  ["I bet it got my haters hella sick","","","MIC Drop (Steve Aoki Remix)","https://open.spotify.com/track/75scDPqGs75FotglJSoOI2?si=lfrx32LiRAywjd5reAD_iA","https://youtu.be/kTlv5_Bs8aw","https://colorcodedlyrics.com/2017/11/bts-bangtansonyeondan-mic-drop-steve-aoki-remix"  ],
  ["Bad odors with good scents are against the rules","joeun hyanggie akchwin banchik","좋은 향기에 악췬 반칙","MIC Drop (Steve Aoki Remix)","https://open.spotify.com/track/75scDPqGs75FotglJSoOI2?si=lfrx32LiRAywjd5reAD_iA","https://youtu.be/kTlv5_Bs8aw","https://colorcodedlyrics.com/2017/11/bts-bangtansonyeondan-mic-drop-steve-aoki-remix"  ],
  ["Somebody stop me","","","MIC Drop (Steve Aoki Remix)","https://open.spotify.com/track/75scDPqGs75FotglJSoOI2?si=lfrx32LiRAywjd5reAD_iA","https://youtu.be/kTlv5_Bs8aw","https://colorcodedlyrics.com/2017/11/bts-bangtansonyeondan-mic-drop-steve-aoki-remix"  ],
  ["Nothing more left to say, don’t even apologize","hal maldo eopseo sagwado haji ma","할 말도 없어 사과도 하지 마","MIC Drop (Steve Aoki Remix)","https://open.spotify.com/track/75scDPqGs75FotglJSoOI2?si=lfrx32LiRAywjd5reAD_iA","https://youtu.be/kTlv5_Bs8aw","https://colorcodedlyrics.com/2017/11/bts-bangtansonyeondan-mic-drop-steve-aoki-remix"  ],
  ["I grew a flower that couldn’t be blossomed","piul su eomneun kkocheul kiweosseo","피울 수 없는 꽃을 키웠어","FAKE LOVE","https://open.spotify.com/track/3aW0ds4A4tSQDIp75FqWTo?si=nyEBnYhVSHytRaPO4S1kCQ","https://www.youtube.com/watch?v=7C2z4GqqS5E","https://colorcodedlyrics.com/2018/05/bts-bangtansonyeondan-fake-love"  ],
  ["Cause I was always just me","naneun hangsang nayeotgie","나는 항상 나였기에","IDOL (Feat. Nicki Minaj)","https://open.spotify.com/track/03iCbZaM4OkRR4We6wIzvx?si=KbBXvkolRIq2tp0iju-r6w","https://www.youtube.com/watch?v=K1scjjbfNsk","https://colorcodedlyrics.com/2018/08/bts-bangtansonyeondan-idol-feat-nicki-minaj"  ],
  ["You can’t stop me lovin’ myself","","","IDOL (Feat. Nicki Minaj)","https://open.spotify.com/track/03iCbZaM4OkRR4We6wIzvx?si=KbBXvkolRIq2tp0iju-r6w","https://www.youtube.com/watch?v=K1scjjbfNsk","https://colorcodedlyrics.com/2018/08/bts-bangtansonyeondan-idol-feat-nicki-minaj"  ],
  ["There are hundreds of me’s inside of me","nae soganen myeot ship myeot baengmyeonge naega isseo","내 속안엔 몇 십 몇 백명의 내가 있어","IDOL (Feat. Nicki Minaj)","https://open.spotify.com/track/03iCbZaM4OkRR4We6wIzvx?si=KbBXvkolRIq2tp0iju-r6w","https://www.youtube.com/watch?v=K1scjjbfNsk","https://colorcodedlyrics.com/2018/08/bts-bangtansonyeondan-idol-feat-nicki-minaj"  ],
  ["I’m facing a new me again today","oneul tto dareun nal majihae","오늘 또 다른 날 맞이해","IDOL (Feat. Nicki Minaj)","https://open.spotify.com/track/03iCbZaM4OkRR4We6wIzvx?si=KbBXvkolRIq2tp0iju-r6w","https://www.youtube.com/watch?v=K1scjjbfNsk","https://colorcodedlyrics.com/2018/08/bts-bangtansonyeondan-idol-feat-nicki-minaj"  ],
  ["It’s okay, I’m happy in this moment","It’s okay, nan i sungan haengbokhae"," It’s okay, 난 이 순간 행복해","IDOL (Feat. Nicki Minaj)","https://open.spotify.com/track/03iCbZaM4OkRR4We6wIzvx?si=KbBXvkolRIq2tp0iju-r6w","https://www.youtube.com/watch?v=K1scjjbfNsk","https://colorcodedlyrics.com/2018/08/bts-bangtansonyeondan-idol-feat-nicki-minaj"  ],
  ["My blood, sweat and tears","nae pi ttam nunmul","내 피 땀 눈물"," Blood Sweat & Tears (피 땀 눈물)","https://open.spotify.com/track/5RGf8qn1TBWVplLyyKUsuV?si=7IC5UX9iRFOcvX-kOuPnbw","https://www.youtube.com/watch?v=hmE9f-TEutc","https://colorcodedlyrics.com/2016/10/bts-blood-sweat-tears-pi-ttam-nunmul"  ],
  ["I wanna be addicted to your prison","neoran gamoge jungdokdwae gipi","너란 감옥에 중독돼 깊이"," Blood Sweat & Tears (피 땀 눈물)","https://open.spotify.com/track/5RGf8qn1TBWVplLyyKUsuV?si=7IC5UX9iRFOcvX-kOuPnbw","https://www.youtube.com/watch?v=hmE9f-TEutc","https://colorcodedlyrics.com/2016/10/bts-blood-sweat-tears-pi-ttam-nunmul"  ],
  ["My heart makes time run","maeumeun shiganeul dallyeogane","마음은 시간을 달려가네","Spring Day (봄날)","https://open.spotify.com/track/0WNGsQ1oAuHzNTk8jivBKW?si=ZcD8y4ZpSnqTb54oZiHQxg","https://www.youtube.com/watch?v=xEeFrLSkMm8","https://colorcodedlyrics.com/2017/02/bts-bangtansonyeondan-spring-day-bomnal"  ],
  ["There hasn’t been a day that I have forgotten you","dan harudo neoreul ijeun jeogi eopseotji nan","단 하루도 너를 잊은 적이 없었지 난","Spring Day (봄날)","https://open.spotify.com/track/0WNGsQ1oAuHzNTk8jivBKW?si=ZcD8y4ZpSnqTb54oZiHQxg","https://www.youtube.com/watch?v=xEeFrLSkMm8","https://colorcodedlyrics.com/2017/02/bts-bangtansonyeondan-spring-day-bomnal"  ],
  ["Hey you, what’s your dream?","yamma ni ggumeun mwoni","얌마 니 꿈은 뭐니","No More Dream","https://open.spotify.com/track/4frlkLwlnm58ejpNwWjxyl?si=d61MWlg2QDmCOgZECCAPhQ","https://www.youtube.com/watch?v=rBG5L7UsUxA","https://colorcodedlyrics.com/2013/06/bts-bangtansonyeondan-no-more-dream"  ],
  ["Is that all your dream is?","ni ggumeun gyeou geugeoni","니 꿈은 겨우 그거니","No More Dream","https://open.spotify.com/track/4frlkLwlnm58ejpNwWjxyl?si=d61MWlg2QDmCOgZECCAPhQ","https://www.youtube.com/watch?v=rBG5L7UsUxA","https://colorcodedlyrics.com/2013/06/bts-bangtansonyeondan-no-more-dream"  ],
  ["What is the you that you’ve dreamed of?","niga ggumkkwo-on ni moseubi mwoyeo","니가 꿈꿔온 니 모습이 뭐여","No More Dream","https://open.spotify.com/track/4frlkLwlnm58ejpNwWjxyl?si=d61MWlg2QDmCOgZECCAPhQ","https://www.youtube.com/watch?v=rBG5L7UsUxA","https://colorcodedlyrics.com/2013/06/bts-bangtansonyeondan-no-more-dream"  ],
  ["Who do you see in the mirror?","jigeum ni geoul sogen nuga boyeo","지금 니 거울 속엔 누가 보여","No More Dream","https://open.spotify.com/track/4frlkLwlnm58ejpNwWjxyl?si=d61MWlg2QDmCOgZECCAPhQ","https://www.youtube.com/watch?v=rBG5L7UsUxA","https://colorcodedlyrics.com/2013/06/bts-bangtansonyeondan-no-more-dream"  ],
  ["Go on your path","neoui gireul garago","너의 길을 가라고","No More Dream","https://open.spotify.com/track/4frlkLwlnm58ejpNwWjxyl?si=d61MWlg2QDmCOgZECCAPhQ","https://www.youtube.com/watch?v=rBG5L7UsUxA","https://colorcodedlyrics.com/2013/06/bts-bangtansonyeondan-no-more-dream"  ],
  ["Even if you live for a day, Do something","dan harureul sarado, mworado harago","단 하루를 살아도, 뭐라도 하라고","No More Dream","https://open.spotify.com/track/4frlkLwlnm58ejpNwWjxyl?si=d61MWlg2QDmCOgZECCAPhQ","https://www.youtube.com/watch?v=rBG5L7UsUxA","https://colorcodedlyrics.com/2013/06/bts-bangtansonyeondan-no-more-dream"  ],
  ["Why aren’t you saying anything?","wae mal mothago isseo? ","왜 말 못하고 있어?","No More Dream","https://open.spotify.com/track/4frlkLwlnm58ejpNwWjxyl?si=d61MWlg2QDmCOgZECCAPhQ","https://www.youtube.com/watch?v=rBG5L7UsUxA","https://colorcodedlyrics.com/2013/06/bts-bangtansonyeondan-no-more-dream"  ],
  ["Ask yourself if you’ve ever worked hard for anything"," jasinege mureobwa eon je niga yeolsimhi noryeokhaetnyago","자신에게 물어봐 언 제 니가 열심히 노력했냐고","No More Dream","https://open.spotify.com/track/4frlkLwlnm58ejpNwWjxyl?si=d61MWlg2QDmCOgZECCAPhQ","https://www.youtube.com/watch?v=rBG5L7UsUxA","https://colorcodedlyrics.com/2013/06/bts-bangtansonyeondan-no-more-dream"  ],
  ["dreams are a special pardon","ggumeul teukbyeolsamyeon","꿈을 특별사면","No More Dream","https://open.spotify.com/track/4frlkLwlnm58ejpNwWjxyl?si=d61MWlg2QDmCOgZECCAPhQ","https://www.youtube.com/watch?v=rBG5L7UsUxA","https://colorcodedlyrics.com/2013/06/bts-bangtansonyeondan-no-more-dream"  ],
  ["Become the main subject of your life that has always been suppressed","eogabman batdeon insaeng ni sarmui jueoga doe-eobwa","억압만 받던 인생 니 삶의 주어가 되어봐","No More Dream","https://open.spotify.com/track/4frlkLwlnm58ejpNwWjxyl?si=d61MWlg2QDmCOgZECCAPhQ","https://www.youtube.com/watch?v=rBG5L7UsUxA","https://colorcodedlyrics.com/2013/06/bts-bangtansonyeondan-no-more-dream"  ],
  ["Dream a dream now","ggumeul ggumeul ggumeul ggwobwa da","꿈을 꿈을 꿈을 꿔봐 다","No More Dream","https://open.spotify.com/track/4frlkLwlnm58ejpNwWjxyl?si=d61MWlg2QDmCOgZECCAPhQ","https://www.youtube.com/watch?v=rBG5L7UsUxA","https://colorcodedlyrics.com/2013/06/bts-bangtansonyeondan-no-more-dream"  ],
  ["To all the youngsters without dreams.","","","No More Dream","https://open.spotify.com/track/4frlkLwlnm58ejpNwWjxyl?si=d61MWlg2QDmCOgZECCAPhQ","https://www.youtube.com/watch?v=rBG5L7UsUxA","https://colorcodedlyrics.com/2013/06/bts-bangtansonyeondan-no-more-dream"  ],
  ["Everyone lives the same life","ildeungeul gangyo","일등을 강요","N.O","https://open.spotify.com/track/1hehPTlSVIhHEvCkVoe4HX?si=oFgyipDiSMGdg_Q59lQBFg","https://www.youtube.com/watch?v=mmgxPLLLyVo","https://colorcodedlyrics.com/2013/09/bts-bangtansonyeondan-n-o"  ],
  ["One live in between dreams and reality","hyeonsil saiui ijunggancheop","현실 사이의 이중간첩","N.O","https://open.spotify.com/track/1hehPTlSVIhHEvCkVoe4HX?si=oFgyipDiSMGdg_Q59lQBFg","https://www.youtube.com/watch?v=mmgxPLLLyVo","https://colorcodedlyrics.com/2013/09/bts-bangtansonyeondan-n-o"  ],
  ["Don’t be trapped in someone else’s dream","deoneun namui kkume gatyeo salji ma","더는 남의 꿈에 갇혀 살지 마","N.O","https://open.spotify.com/track/1hehPTlSVIhHEvCkVoe4HX?si=oFgyipDiSMGdg_Q59lQBFg","https://www.youtube.com/watch?v=mmgxPLLLyVo","https://colorcodedlyrics.com/2013/09/bts-bangtansonyeondan-n-o"  ],
  ["My unhappiness is past its limit","nae bulhaengeun handochogwaji","내 불행은 한도초과지","N.O","https://open.spotify.com/track/1hehPTlSVIhHEvCkVoe4HX?si=oFgyipDiSMGdg_Q59lQBFg","https://www.youtube.com/watch?v=mmgxPLLLyVo","https://colorcodedlyrics.com/2013/09/bts-bangtansonyeondan-n-o"  ],
  ["Living the life of a puppet, Who will take responsibility?","ttokgateun kkokdugaksi insaeng, dodaeche nuga chaegimjyeojwo?","똑같은 꼭두각시 인생, 도대체 누가 책임져줘?","N.O","https://open.spotify.com/track/1hehPTlSVIhHEvCkVoe4HX?si=oFgyipDiSMGdg_Q59lQBFg","https://www.youtube.com/watch?v=mmgxPLLLyVo","https://colorcodedlyrics.com/2013/09/bts-bangtansonyeondan-n-o"  ],
  ["I worked all night, every day, While you were playing in the club ","bamsae ilhaettji everyday, niga keulleobeseo nol ttae yeah","밤새 일했지 everyday, 니가 클럽에서 놀 때 yeah","Dope","https://open.spotify.com/track/4TiKZrN7gtc62SUiufpFCM?si=E-5h9850RGqorSlJWFSzqg","https://www.youtube.com/watch?v=H8lYMWZD5P8","https://colorcodedlyrics.com/2015/06/bts-bangtansonyeondan-sick-jjeoleo"  ],
  ["cuz I’m sick with hope haha","uz nan huimangi jjeoreo haha","cuz 난 희망이 쩔어 haha","Dope","https://open.spotify.com/track/4TiKZrN7gtc62SUiufpFCM?si=E-5h9850RGqorSlJWFSzqg","https://www.youtube.com/watch?v=H8lYMWZD5P8","https://colorcodedlyrics.com/2015/06/bts-bangtansonyeondan-sick-jjeoleo"  ],
  ["I gotta make it, I gotta make it","","","Dope","https://open.spotify.com/track/4TiKZrN7gtc62SUiufpFCM?si=E-5h9850RGqorSlJWFSzqg","https://www.youtube.com/watch?v=H8lYMWZD5P8","https://colorcodedlyrics.com/2015/06/bts-bangtansonyeondan-sick-jjeoleo"  ],
  ["Reject rejection","geobuneun geobuhae","거부는 거부해","Dope","https://open.spotify.com/track/4TiKZrN7gtc62SUiufpFCM?si=E-5h9850RGqorSlJWFSzqg","https://www.youtube.com/watch?v=H8lYMWZD5P8","https://colorcodedlyrics.com/2015/06/bts-bangtansonyeondan-sick-jjeoleo"  ],
  ["Why are they killing us before we can even try","wae haebogido jeone jugyeo gyaenen","왜 해보기도 전에 죽여 걔넨 ","Dope","https://open.spotify.com/track/4TiKZrN7gtc62SUiufpFCM?si=E-5h9850RGqorSlJWFSzqg","https://www.youtube.com/watch?v=H8lYMWZD5P8","https://colorcodedlyrics.com/2015/06/bts-bangtansonyeondan-sick-jjeoleo"  ],
  ["Don’t ever give up, you know you not lonely","jeoldae ma pogi you know you not lonely","절대 마 포기 you know you not lonely","Dope","https://open.spotify.com/track/4TiKZrN7gtc62SUiufpFCM?si=E-5h9850RGqorSlJWFSzqg","https://www.youtube.com/watch?v=H8lYMWZD5P8","https://colorcodedlyrics.com/2015/06/bts-bangtansonyeondan-sick-jjeoleo"  ],
  ["Our dawn is prettier than the day","neowa nae saebyeogeun natboda yeppeo","너와 내 새벽은 낮보다 예뻐","Dope","https://open.spotify.com/track/4TiKZrN7gtc62SUiufpFCM?si=E-5h9850RGqorSlJWFSzqg","https://www.youtube.com/watch?v=H8lYMWZD5P8","https://colorcodedlyrics.com/2015/06/bts-bangtansonyeondan-sick-jjeoleo"  ],
  ["So can I get a little bit of hope? ","","","Dope","https://open.spotify.com/track/4TiKZrN7gtc62SUiufpFCM?si=E-5h9850RGqorSlJWFSzqg","https://www.youtube.com/watch?v=H8lYMWZD5P8","https://colorcodedlyrics.com/2015/06/bts-bangtansonyeondan-sick-jjeoleo"  ],
  ["Every day is about the hustle life","maeiri hustle life","매일이 hustle life","Dope","https://open.spotify.com/track/4TiKZrN7gtc62SUiufpFCM?si=E-5h9850RGqorSlJWFSzqg","https://www.youtube.com/watch?v=H8lYMWZD5P8","https://colorcodedlyrics.com/2015/06/bts-bangtansonyeondan-sick-jjeoleo"  ],
  ["But my ambition grew too big","but nae yamangi neomu keojyeosseo","But 내 야망이 너무 커졌어","Moving On","https://open.spotify.com/track/4nWJ7msY5lWNK74UKbAVw5?si=WaW9hEoBSVemxDv6heVF9Q","","https://colorcodedlyrics.com/2015/06/bts-bangtansonyeondan-isa-move"  ],
  ["Good things were always other people’s things","joheun geon eonjena da namdeurui moksieossgo","좋은 건 언제나 다 남들의 몫이었고","Moving On","https://open.spotify.com/track/4nWJ7msY5lWNK74UKbAVw5?si=WaW9hEoBSVemxDv6heVF9Q","","https://colorcodedlyrics.com/2015/06/bts-bangtansonyeondan-isa-move"  ],
  ["Let’s not forget those things but put them away","haessdeon kkujilhan gieok ijjin malgo ttak neoheodujago","했던 꾸질한 기억 잊진 말고 딱 넣어두자고","Moving On","https://open.spotify.com/track/4nWJ7msY5lWNK74UKbAVw5?si=WaW9hEoBSVemxDv6heVF9Q","","https://colorcodedlyrics.com/2015/06/bts-bangtansonyeondan-isa-move"  ],
  ["We cried a lot and laughed a lot but it was so beautiful","ulgido usgido manhi haessjiman modu kkwaena areumdawosseo","울기도 웃기도 많이 했지만 모두 꽤나 아름다웠어","Moving On","https://open.spotify.com/track/4nWJ7msY5lWNK74UKbAVw5?si=WaW9hEoBSVemxDv6heVF9Q","","https://colorcodedlyrics.com/2015/06/bts-bangtansonyeondan-isa-move"  ],
  ["A lot of things happened, there were many memories","manheun ildeuri issgo manheun chueogui gieogi","많은 일들이 있고 많은 추억의 기억이","Moving On","https://open.spotify.com/track/4nWJ7msY5lWNK74UKbAVw5?si=WaW9hEoBSVemxDv6heVF9Q","","https://colorcodedlyrics.com/2015/06/bts-bangtansonyeondan-isa-move"  ],
  ["I lived with my pride","nae jajonsimeun bojeunggeum","내 자존심은 보증금","Moving On","https://open.spotify.com/track/4nWJ7msY5lWNK74UKbAVw5?si=WaW9hEoBSVemxDv6heVF9Q","","https://colorcodedlyrics.com/2015/06/bts-bangtansonyeondan-isa-move"  ],
  ["I remember my childhood because I had no big worries","eoril jeogui nal gieokhae keun geokjeongi eopseotgie","어릴 적의 날 기억해 큰 걱정이 없었기에","Interlude/Outro: Wings","https://open.spotify.com/track/6xtjXO1EbKNLMIEGZQU3Fv?si=M5-cIBWWRQuGOwsyTt2vCQ","","https://colorcodedlyrics.com/2016/10/bts-bangtansonyeondan-interlude-wings"  ],
  ["I went on the road that I was told not to go","gaji mallaneun gireul gago","가지 말라는 길을 가고","Interlude/Outro: Wings","https://open.spotify.com/track/6xtjXO1EbKNLMIEGZQU3Fv?si=M5-cIBWWRQuGOwsyTt2vCQ","","https://colorcodedlyrics.com/2016/10/bts-bangtansonyeondan-interlude-wings"  ],
  ["I did things I was told not to do","haji mallaneun ireul hago","하지 말라는 일을 하고","Interlude/Outro: Wings","https://open.spotify.com/track/6xtjXO1EbKNLMIEGZQU3Fv?si=M5-cIBWWRQuGOwsyTt2vCQ","","https://colorcodedlyrics.com/2016/10/bts-bangtansonyeondan-interlude-wings"  ],
  ["I got hurt and hurt again","tto sangcheobatgo, sangcheobatgo","또 상처받고, 상처받고","Interlude/Outro: Wings","https://open.spotify.com/track/6xtjXO1EbKNLMIEGZQU3Fv?si=M5-cIBWWRQuGOwsyTt2vCQ","","https://colorcodedlyrics.com/2016/10/bts-bangtansonyeondan-interlude-wings"  ],
  ["You can call me stupid then I’ll just smile","You can call me stupid geureom nan geunyang ssik hago utji","You can call me stupid 그럼 난 그냥 씩 하고 웃지","Interlude/Outro: Wings","https://open.spotify.com/track/6xtjXO1EbKNLMIEGZQU3Fv?si=M5-cIBWWRQuGOwsyTt2vCQ","","https://colorcodedlyrics.com/2016/10/bts-bangtansonyeondan-interlude-wings"  ],
  ["I don’t wanna succeed by doing things I don’t wanna do","nan naega hagi silheun illo seonggonghagin silheo","난 내가 하기 싫은 일로 성공하긴 싫어","Interlude/Outro: Wings","https://open.spotify.com/track/6xtjXO1EbKNLMIEGZQU3Fv?si=M5-cIBWWRQuGOwsyTt2vCQ","","https://colorcodedlyrics.com/2016/10/bts-bangtansonyeondan-interlude-wings"  ],
  ["I believe in myself","nan nal mideo nae deungi apeun geon","난 날 믿어 내 등이 아픈 건","Interlude/Outro: Wings","https://open.spotify.com/track/6xtjXO1EbKNLMIEGZQU3Fv?si=M5-cIBWWRQuGOwsyTt2vCQ","","https://colorcodedlyrics.com/2016/10/bts-bangtansonyeondan-interlude-wings"  ],
  ["I believe in you, even if things are bleak right now","nal neol mideo jigeumeun miyakhaljieonjeong","날 널 믿어 지금은 미약할지언정","Interlude/Outro: Wings","https://open.spotify.com/track/6xtjXO1EbKNLMIEGZQU3Fv?si=M5-cIBWWRQuGOwsyTt2vCQ","","https://colorcodedlyrics.com/2016/10/bts-bangtansonyeondan-interlude-wings"  ],
  ["The end will be great","kkeuteun changdaehan biyagil geol","끝은 창대한 비약일 걸","Interlude/Outro: Wings","https://open.spotify.com/track/6xtjXO1EbKNLMIEGZQU3Fv?si=M5-cIBWWRQuGOwsyTt2vCQ","","https://colorcodedlyrics.com/2016/10/bts-bangtansonyeondan-interlude-wings"  ],
  ["Fly, fly up in the sky","","","Interlude/Outro: Wings","https://open.spotify.com/track/6xtjXO1EbKNLMIEGZQU3Fv?si=M5-cIBWWRQuGOwsyTt2vCQ","","https://colorcodedlyrics.com/2016/10/bts-bangtansonyeondan-interlude-wings"  ],
  ["It’s the path you chose, dude don’t be scared","niga taekhan giriya saekkya jjolji mareo","니가 택한 길이야 새꺄 쫄지 말어","Interlude/Outro: Wings","https://open.spotify.com/track/6xtjXO1EbKNLMIEGZQU3Fv?si=M5-cIBWWRQuGOwsyTt2vCQ","","https://colorcodedlyrics.com/2016/10/bts-bangtansonyeondan-interlude-wings"  ],
  ["I made a decision","naneun taekhaesseo","나는 택했어","Interlude/Outro: Wings","https://open.spotify.com/track/6xtjXO1EbKNLMIEGZQU3Fv?si=M5-cIBWWRQuGOwsyTt2vCQ","","https://colorcodedlyrics.com/2016/10/bts-bangtansonyeondan-interlude-wings"  ],
  ["I will have unconditional trust","jogeon eopneun mideumeul gajigesseo","조건 없는 믿음을 가지겠어","Interlude/Outro: Wings","https://open.spotify.com/track/6xtjXO1EbKNLMIEGZQU3Fv?si=M5-cIBWWRQuGOwsyTt2vCQ","","https://colorcodedlyrics.com/2016/10/bts-bangtansonyeondan-interlude-wings"  ],
  ["It’s time to be brave","It’s time to be brave","It’s time to be brave","Interlude/Outro: Wings","https://open.spotify.com/track/6xtjXO1EbKNLMIEGZQU3Fv?si=M5-cIBWWRQuGOwsyTt2vCQ","","https://colorcodedlyrics.com/2016/10/bts-bangtansonyeondan-interlude-wings"  ],
  ["I’m not afraid","","","Interlude/Outro: Wings","https://open.spotify.com/track/6xtjXO1EbKNLMIEGZQU3Fv?si=M5-cIBWWRQuGOwsyTt2vCQ","","https://colorcodedlyrics.com/2016/10/bts-bangtansonyeondan-interlude-wings"  ],
  ["Because I’m different from before","na yejeongwaneun dareugie","나 예전과는 다르기에","Interlude/Outro: Wings","https://open.spotify.com/track/6xtjXO1EbKNLMIEGZQU3Fv?si=M5-cIBWWRQuGOwsyTt2vCQ","","https://colorcodedlyrics.com/2016/10/bts-bangtansonyeondan-interlude-wings"  ],
  ["I won’t cry on my path","naega ganeun gire ulji anhgo","내가 가는 길에 울지 않고","Interlude/Outro: Wings","https://open.spotify.com/track/6xtjXO1EbKNLMIEGZQU3Fv?si=M5-cIBWWRQuGOwsyTt2vCQ","","https://colorcodedlyrics.com/2016/10/bts-bangtansonyeondan-interlude-wings"  ],
  ["I won’t hang my head low","gogae sugiji anheo","고개 숙이지 않어","Interlude/Outro: Wings","https://open.spotify.com/track/6xtjXO1EbKNLMIEGZQU3Fv?si=M5-cIBWWRQuGOwsyTt2vCQ","","https://colorcodedlyrics.com/2016/10/bts-bangtansonyeondan-interlude-wings"  ],
  ["That is the sky and I’ll be flying there, fly","geogin haneuril tego nalgo isseul tenikka fly","거긴 하늘일 테고 날고 있을 테니까 fly","Interlude/Outro: Wings","https://open.spotify.com/track/6xtjXO1EbKNLMIEGZQU3Fv?si=M5-cIBWWRQuGOwsyTt2vCQ","","https://colorcodedlyrics.com/2016/10/bts-bangtansonyeondan-interlude-wings"  ],
  ["But it is not today","","","Not Today","https://open.spotify.com/track/4hrpoqJMVE7FxBu1YWx0eQ?si=FR627a8VRSC1RUp3roTQFg","https://www.youtube.com/watch?v=9DwzBICPhdM","https://colorcodedlyrics.com/2017/02/bts-bangtansonyeondan-not-today"  ],
  ["Today we fight!","","","Not Today","https://open.spotify.com/track/4hrpoqJMVE7FxBu1YWx0eQ?si=FR627a8VRSC1RUp3roTQFg","https://www.youtube.com/watch?v=9DwzBICPhdM","https://colorcodedlyrics.com/2017/02/bts-bangtansonyeondan-not-today"  ],
  ["It’s too early to die","ajigeun jukgien","아직은 죽기엔","Not Today","https://open.spotify.com/track/4hrpoqJMVE7FxBu1YWx0eQ?si=FR627a8VRSC1RUp3roTQFg","https://www.youtube.com/watch?v=9DwzBICPhdM","https://colorcodedlyrics.com/2017/02/bts-bangtansonyeondan-not-today"  ],
  ["If you can’t fly, run. Today we will survive","naragal su eopseum ttwieo. Today we will survive","날아갈 수 없음 뛰어. Today we will survive","Not Today","https://open.spotify.com/track/4hrpoqJMVE7FxBu1YWx0eQ?si=FR627a8VRSC1RUp3roTQFg","https://www.youtube.com/watch?v=9DwzBICPhdM","https://colorcodedlyrics.com/2017/02/bts-bangtansonyeondan-not-today"  ],
  ["If you can’t run, walk. Today we will survive","ttwieogal su eopseum georeo. Today we will survive","뛰어갈 수 없음 걸어. Today we will survive","Not Today","https://open.spotify.com/track/4hrpoqJMVE7FxBu1YWx0eQ?si=FR627a8VRSC1RUp3roTQFg","https://www.youtube.com/watch?v=9DwzBICPhdM","https://colorcodedlyrics.com/2017/02/bts-bangtansonyeondan-not-today"  ],
  ["Even if you have to crawl, gear up, point, aim, shoot!","gieoseorado gear up, gyeonwo chong! jojun! balsa!","기어서라도 gear up, 겨눠 총! 조준! 발사!","Not Today","https://open.spotify.com/track/4hrpoqJMVE7FxBu1YWx0eQ?si=FR627a8VRSC1RUp3roTQFg","https://www.youtube.com/watch?v=9DwzBICPhdM","https://colorcodedlyrics.com/2017/02/bts-bangtansonyeondan-not-today"  ],
  ["We couldn’t fail because we believed in each other","urin hal suga eopseotdanda shilpae seoroga seorol jeonbu mideotgie","우린 할 수가 없었단다 실패 서로가 서롤 전부 믿었기에","Not Today","https://open.spotify.com/track/4hrpoqJMVE7FxBu1YWx0eQ?si=FR627a8VRSC1RUp3roTQFg","https://www.youtube.com/watch?v=9DwzBICPhdM","https://colorcodedlyrics.com/2017/02/bts-bangtansonyeondan-not-today"  ],
  ["We believe in the word, together","hamkkeraneun mareul mideo","함께라는 말을 믿어","Not Today","https://open.spotify.com/track/4hrpoqJMVE7FxBu1YWx0eQ?si=FR627a8VRSC1RUp3roTQFg","https://www.youtube.com/watch?v=9DwzBICPhdM","https://colorcodedlyrics.com/2017/02/bts-bangtansonyeondan-not-today"  ],
  ["Throw away the fear in your eyes","ni nun soge duryeoum ttawineun beoryeo","니 눈 속의 두려움 따위는 버려","Not Today","https://open.spotify.com/track/4hrpoqJMVE7FxBu1YWx0eQ?si=FR627a8VRSC1RUp3roTQFg","https://www.youtube.com/watch?v=9DwzBICPhdM","https://colorcodedlyrics.com/2017/02/bts-bangtansonyeondan-not-today"  ],
  ["We won’t die, don’t ask. Scream, not not today","jukji ana mutji mara. sori jilleo not not today","죽지 않아 묻지 마라. 소리 질러 not not today","Not Today","https://open.spotify.com/track/4hrpoqJMVE7FxBu1YWx0eQ?si=FR627a8VRSC1RUp3roTQFg","https://www.youtube.com/watch?v=9DwzBICPhdM","https://colorcodedlyrics.com/2017/02/bts-bangtansonyeondan-not-today"  ],
  ["I don’t even know myself","nado nal jal molla","나도 날 잘 몰라","Boyz with Fun","https://open.spotify.com/track/1pePqg6hTMeaTZNNECqT03?si=R6jlVm4rQPqRE1j9Sl3Mow","","https://colorcodedlyrics.com/2015/05/bts-bangtansonyeondan-fun-boys-heungtansonyeondan"  ],
  ["Look at me, I’m gonna go crazy today, don’t stop me","da bwara bwara oneureun michil geoya malliji mara","다 봐라 봐라 오늘은 미칠 거야 말리지 말아","Boyz with Fun","https://open.spotify.com/track/1pePqg6hTMeaTZNNECqT03?si=R6jlVm4rQPqRE1j9Sl3Mow","","https://colorcodedlyrics.com/2015/05/bts-bangtansonyeondan-fun-boys-heungtansonyeondan"  ],
  ["I wanna do everything my way","nae mamdaero da hago sipeo","내 맘대로 다 하고 싶어","Boyz with Fun","https://open.spotify.com/track/1pePqg6hTMeaTZNNECqT03?si=R6jlVm4rQPqRE1j9Sl3Mow","","https://colorcodedlyrics.com/2015/05/bts-bangtansonyeondan-fun-boys-heungtansonyeondan"  ],
  ["If hope is with us, we won’t know time is passing","huimangi hamkkemyeon siganganeun jureul molla","희망이 함께면 시간가는 줄을 몰라","Boyz with Fun","https://open.spotify.com/track/1pePqg6hTMeaTZNNECqT03?si=R6jlVm4rQPqRE1j9Sl3Mow","","https://colorcodedlyrics.com/2015/05/bts-bangtansonyeondan-fun-boys-heungtansonyeondan"  ],
  ["Let’s wash ourselves with sweat","ttameuro ssiseobolkka chikichakacho","땀으로 씻어볼까 치키차카초","Boyz with Fun","https://open.spotify.com/track/1pePqg6hTMeaTZNNECqT03?si=R6jlVm4rQPqRE1j9Sl3Mow","","https://colorcodedlyrics.com/2015/05/bts-bangtansonyeondan-fun-boys-heungtansonyeondan"  ],
  ["I don’t even know, cuz I’m me from start to finish","nado nal molla cheoeumbuteo kkeutkkaji nan nanikka","나도 날 몰라 처음부터 끝까지 난 나니까","Boyz with Fun","https://open.spotify.com/track/1pePqg6hTMeaTZNNECqT03?si=R6jlVm4rQPqRE1j9Sl3Mow","","https://colorcodedlyrics.com/2015/05/bts-bangtansonyeondan-fun-boys-heungtansonyeondan"  ],
  ["Lost between the deserts and oceans","samakgwa bada gaunde gireul irhgoseo","사막과 바다 가운데 길을 잃고서","Lost","https://open.spotify.com/track/44F7Ieb36A6B2mXgrJLdR9?si=YpnwQAMIR622C8ESX0iZKA","","https://colorcodedlyrics.com/2016/10/bts-bangtansonyeondan-lost"  ],
  ["I’m still wandering, where should I go.","yeojeonhi hemaego isseo, eodiro gaya halji yeah","여전히 헤매고 있어, 어디로 가야 할지","Lost","https://open.spotify.com/track/44F7Ieb36A6B2mXgrJLdR9?si=YpnwQAMIR622C8ESX0iZKA","","https://colorcodedlyrics.com/2016/10/bts-bangtansonyeondan-lost"  ],
  ["I still believe even though it’s unbelievable","geuraedo midgo isseo midgiji anhjiman","그래도 믿고 있어 믿기지 않지만","Lost","https://open.spotify.com/track/44F7Ieb36A6B2mXgrJLdR9?si=YpnwQAMIR622C8ESX0iZKA","","https://colorcodedlyrics.com/2016/10/bts-bangtansonyeondan-lost"  ],
  ["To lose your path is the way to find that path","gireul ilhneundan geon geu gireul channeun bangbeop","길을 잃는단 건 그 길을 찾는 방법","Lost","https://open.spotify.com/track/44F7Ieb36A6B2mXgrJLdR9?si=YpnwQAMIR622C8ESX0iZKA","","https://colorcodedlyrics.com/2016/10/bts-bangtansonyeondan-lost"  ],
  ["Lost my way within a complicated world without an exit","Lost my way chulguragon eobneun bokjabhan sesang soge","Lost my way 출구라곤 없는 복잡한 세상 속에","Lost","https://open.spotify.com/track/44F7Ieb36A6B2mXgrJLdR9?si=YpnwQAMIR622C8ESX0iZKA","","https://colorcodedlyrics.com/2016/10/bts-bangtansonyeondan-lost"  ],
  ["No matter how much I wander, I want to believe in my path","sueobsi hemaedo nan naui gireul mideobollae","수없이 헤매도 난 나의 길을 믿어볼래","Lost","https://open.spotify.com/track/44F7Ieb36A6B2mXgrJLdR9?si=YpnwQAMIR622C8ESX0iZKA","","https://colorcodedlyrics.com/2016/10/bts-bangtansonyeondan-lost"  ],
  ["Found my way","","","Lost","https://open.spotify.com/track/44F7Ieb36A6B2mXgrJLdR9?si=YpnwQAMIR622C8ESX0iZKA","","https://colorcodedlyrics.com/2016/10/bts-bangtansonyeondan-lost"  ],
  ["There is no way to find the path at once","dan han beone gireul channeun beobi eobseo","단 한 번에 길을 찾는 법이 없어","Lost","https://open.spotify.com/track/44F7Ieb36A6B2mXgrJLdR9?si=YpnwQAMIR622C8ESX0iZKA","","https://colorcodedlyrics.com/2016/10/bts-bangtansonyeondan-lost"  ],
  ["Constantly crashing and crawling forward","sueobsi budijhimyeo gieoganeun","수없이 부딪히며 기어가는","Lost","https://open.spotify.com/track/44F7Ieb36A6B2mXgrJLdR9?si=YpnwQAMIR622C8ESX0iZKA","","https://colorcodedlyrics.com/2016/10/bts-bangtansonyeondan-lost"  ],
  ["I believe that we’re on the right path","nan mideo urin baro gago isseo","난 믿어 우린 바로 가고 있어","Lost","https://open.spotify.com/track/44F7Ieb36A6B2mXgrJLdR9?si=YpnwQAMIR622C8ESX0iZKA","","https://colorcodedlyrics.com/2016/10/bts-bangtansonyeondan-lost"  ],
  ["Even if I’m slow I will walk with my own feet","jom neuryeodo nae ballo geotgesseo","좀 느려도 내 발로 걷겠어","Lost","https://open.spotify.com/track/44F7Ieb36A6B2mXgrJLdR9?si=YpnwQAMIR622C8ESX0iZKA","","https://colorcodedlyrics.com/2016/10/bts-bangtansonyeondan-lost"  ],
  ["Because I know this path is mine to take","i giri bunmyeong naui girinikka","이 길이 분명 나의 길이니까","Lost","https://open.spotify.com/track/44F7Ieb36A6B2mXgrJLdR9?si=YpnwQAMIR622C8ESX0iZKA","","https://colorcodedlyrics.com/2016/10/bts-bangtansonyeondan-lost"  ],
  ["Even if I go back, I will reach this path eventually","doragado eonjenga daheul tenikka","돌아가도 언젠가 닿을 테니까","Lost","https://open.spotify.com/track/44F7Ieb36A6B2mXgrJLdR9?si=YpnwQAMIR622C8ESX0iZKA","","https://colorcodedlyrics.com/2016/10/bts-bangtansonyeondan-lost"  ],
  ["I will never lose my dream","","","Lost","https://open.spotify.com/track/44F7Ieb36A6B2mXgrJLdR9?si=YpnwQAMIR622C8ESX0iZKA","","https://colorcodedlyrics.com/2016/10/bts-bangtansonyeondan-lost"  ],
  ["The boy is afraid of reality but his heart is at peace","hyeonsiri duryeoun sonyeon gongeul deonjil ttaemyeon","현실이 두려운 소년 공을 던질 때면","Intro: The Most Beautiful Moment In Life","https://open.spotify.com/track/4upjf74hEzI1Vd1ygdvpTy?si=ymiJPmNsQDGICFGi5WqLqA","","https://colorcodedlyrics.com/2015/06/bts-bangtansonyeondan-intro-in-the-mood-for-love-hwayangyeonhwa"  ],
  ["I pretend to know the world but my body is still not ready","sesangeul aneun cheok hajiman ajik seorigeun mom","세상을 아는 척 하지만 아직 설익은 몸","Intro: The Most Beautiful Moment In Life","https://open.spotify.com/track/4upjf74hEzI1Vd1ygdvpTy?si=ymiJPmNsQDGICFGi5WqLqA","","https://colorcodedlyrics.com/2015/06/bts-bangtansonyeondan-intro-in-the-mood-for-love-hwayangyeonhwa"  ],
  ["This moment feels like it’ll last forever","i sunganeun yeongwonhal deut","이 순간은 영원할 듯","Intro: The Most Beautiful Moment In Life","https://open.spotify.com/track/4upjf74hEzI1Vd1ygdvpTy?si=ymiJPmNsQDGICFGi5WqLqA","","https://colorcodedlyrics.com/2015/06/bts-bangtansonyeondan-intro-in-the-mood-for-love-hwayangyeonhwa"  ],
  ["I’m asking myself again, am I happy right now?","dasi naege doemureobwa jigeum haengbokhanga","다시 나에게 되물어봐 지금 행복한가","Intro: The Most Beautiful Moment In Life","https://open.spotify.com/track/4upjf74hEzI1Vd1ygdvpTy?si=ymiJPmNsQDGICFGi5WqLqA","","https://colorcodedlyrics.com/2015/06/bts-bangtansonyeondan-intro-in-the-mood-for-love-hwayangyeonhwa"  ],
  ["The answer is already there, I’m happy","geu dabeun imi jeonghaejyeosseo nan haengbokhada","그 답은 이미 정해졌어 난 행복하다","Intro: The Most Beautiful Moment In Life","https://open.spotify.com/track/4upjf74hEzI1Vd1ygdvpTy?si=ymiJPmNsQDGICFGi5WqLqA","","https://colorcodedlyrics.com/2015/06/bts-bangtansonyeondan-intro-in-the-mood-for-love-hwayangyeonhwa"  ]
]
var pics=[]
const randIndex = Math.floor(Math.random() * lyrics.length)
const ranLyric = lyrics[randIndex];
return ranLyric;
}




  $(".save_settings").on("click", function(){

    var lang = {};
    lang.eng = $('#eng').is(':checked');
    lang.kor= $('#kor').is(':checked');
    lang.rom = $('#rom').is(':checked');


    chrome.storage.sync.set({ 'lang': lang }, function() {
      console.log("lang Settings saved");
    });
    
    modal.style.display = "none";
    init();
  });



  function init(){
    chrome.storage.sync.get('lang', function(lanStoredObj){
      var ranLyric = [];
      if (Object.keys(lanStoredObj).length === 0) {
        ranLyric = allLyrics();
        document.getElementById('engLyric').innerHTML = ranLyric[0];
        document.getElementById('korLyric').innerHTML = ranLyric[2];
        document.getElementById('romLyric').innerHTML = ranLyric[1];
        
        var lang = {};


         $('#eng').prop('checked',true);
         $('#kor').prop('checked',true);
         $('#rom').prop('checked',true);

         lang.eng = $('#eng').is(':checked');
         lang.kor= $('#kor').is(':checked');
         lang.rom = $('#rom').is(':checked');


         chrome.storage.sync.set({ 'lang': lang }, function() {
            console.log("lang Settings saved");
          });

      }else{
        ranLyric = allLyrics();
        $('#eng').prop('checked',lanStoredObj.lang.eng);
        $('#kor').prop('checked',lanStoredObj.lang.kor);
        $('#rom').prop('checked',lanStoredObj.lang.rom);


        if((lanStoredObj.lang.eng === false && lanStoredObj.lang.kor === true) || (lanStoredObj.lang.eng === false && lanStoredObj.lang.rom == true)){
          while (!ranLyric[2]) {
            ranLyric = allLyrics();
          }
        }

        if(lanStoredObj.lang.eng){
            $("#engLyric").addClass("engLyric");
            document.getElementById('engLyric').innerHTML = ranLyric[0];
          }else{
            $( "#engLyric" ).empty();
            $("#engLyric").removeClass("engLyric");

          }

          if(lanStoredObj.lang.kor){
            document.getElementById('korLyric').innerHTML = ranLyric[2];
          }else{
            $( "#korLyric" ).empty();
          }

          if(lanStoredObj.lang.rom){
            document.getElementById('romLyric').innerHTML = ranLyric[1];
          }else{
            $( "#romLyric" ).empty();
          }

        }

        document.getElementById('songName').innerHTML = "- <a href= '" +ranLyric[6]+"' target='_blank'>"+ranLyric[3]+"</a>";
        document.getElementById('spotify').innerHTML = "<a href= '" +ranLyric[4]+"' target='_blank'><img class='spotify' src='img/logo/spotify.png' alt='Spotify'></a>";

        if (ranLyric[5]) {
          document.getElementById('youtube').innerHTML = "<a href= '" +ranLyric[5]+"' target='_blank'><img class='youtube' src='img/logo/yt.png' alt='Youtube'></a>";
        }

    });
};
init();

// chrome.storage.sync.clear(function() {
//     var error = chrome.runtime.lastError;
//     if (error) {
//         console.error(error);
//     }
// });

