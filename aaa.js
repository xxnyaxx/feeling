const moodButton=document.querySelectorAll(".choice-button")
const adviceSection=document.getElementById("advice-section")
const adviceText=document.getElementById("advice-text")

const adviceList ={
  relax:{ 
        title:"~今日はのんびり気分のあなた~",
        text:"好きな曲を聴きながらおうちカフェでもしよ！"
  },
  happy:{ 
        title:"~今日は元気なあなた~",
        text:"散歩に行こう！途中、なにか写真を撮ってみて！"
  },
    tired:{ 
        title:"~今日はお疲れ気分のあなた~",
        text:"ベットの上でゴロゴロタイム～そういう日も大事なんだよね～"
  },
    lonely:{ 
        title:"~今日はかまってほしい気分のあなた~",
        text:"友達とおしゃべりしよう！"
  },
    focus:{ 
        title:"~今日は集中したい気分のあなた~",
        text:"好きなことだけをやろう！"
  },
}

moodButton.forEach(button=>{
  button.addEventListener("click",function(){
    const mood=button.dataset.mood
    const advice=adviceList[mood]
    adviceText.innerHTML=`<strong>${advice.title}</strong><br>${advice.text}`
    adviceSection.classList.remove("hidden")
    adviceSection.scrollIntoView({
      behavior:"smooth",
      block:"nearest"
    })
  })
})

