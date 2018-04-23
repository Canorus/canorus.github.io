---
layout: "post"
title: "Akitio Node PSU 교체하기"
date: "2018-02-08 23:53"
---
![akitio node with EVGA G3 550](https://d.pr/i/Lhky69+){:.center-image}

찾아보니 이베이에서 GTX960을 산 게 작년 7월 31일, 아마존에서 [Akitio Node](https://www.amazon.com/gp/product/B06XKKSNTS/ref=od_aui_detailpages00?ie=UTF8&psc=1) eGPU 박스를 주문하고 받은 게 작년 10월 5일로 나오는군요. 원래는 집에 있는 다른 데스크탑 내장 그래픽 대체용으로 외장 그래픽 카드를 샀었는데 단순히 포맷으로 문제가 해결이 되어버려서 그냥 맥에 달아야겠다 싶어서 Akitio Node를 사게 되었었습니다. 덕분에 QHD 모니터를 듀얼로 쓸 수 있게 되었죠.

그런데 문제는 Akitio Node 자체 소음이 작지 않았다는 겁니다. 맥미니 특성상 24시간 가동이 되는 게 일반적인데 그러다보니 잘 때에도 Akitio Node의 소음이 들렸던 거죠. 사실 저는 상관이 없었습니다만 어머니께서 항상 불만을 하셨습니다. 시끄러운데서 자면 깊이 못 잔다고. 물론 사실과는 거리가 아주 멉니다. 저는 머리만 대면 어디서든 잘 수 있는 종자인지라. 그러고보니 가끔은 머리를 안 대고도 잘 자긴 하는군요.

뭐 아무튼 그래서 소음을 줄이려고 해봅니다. 첫 번째는 전면 팬을 끄는 방법을 시도해보았습니다. 메인보드에 LED와 FAN이 꽂혀있는데 그 중 FAN을 뽑으면 됩니다. 물론 그래픽 카드의 발열을 고려해서 이 작업을 하면 측면 패널을 열어두는 게 바람직합니다.

그래도 소리가 줄지를 않더군요. PSU에서도 자체 Fan이 돌아가기 때문에 더 조용한 PSU가 필요했습니다. EVGA 제품이 ECO 모드라고 해서 일정 온도 이하에서는 FAN이 아예 돌지 않는 기능을 탑재하고 있다고 하길래 아마존에서 냉큼 건져왔습니다. 건져오는 김에 Noctua 120mm FAN도 가져왔습니다.

한 가지 실수한 게 FAN은 사이즈를 맞게 가져왔는데 PSU는 깜빡하고 사이즈를 고려하지 않고 G3 550을 사버렸습니다. SFX 사이즈가 맞는다고 하더군요. [Corsair SF450](https://www.amazon.com/Corsair-SF600-Performance-Power-Supply/dp/B01CGGOXWQ?th=1)이 Zero RPM Fan Mode가 있으면서 SFX 규격이면서 모듈식 PSU더군요. 이걸 사야했습니다. 뭐 다음에 컴퓨터 맞출 때 EVGA를 집어넣고 Corsair를 따로 주문해서 다시 작업해야죠. 아무튼 그래서 위 사진과 같이 *심장이 몸 바깥에 있는* 기괴한 모양새가 되어 버렸습니다.

![noctua](https://d.pr/i/R3uOxM+){:.center-image}

겸사겸사해서 Noctua 120mm FAN도 교체해주었습니다. 문제라면 이 녀석도 구동을 하니 상당히 시끄러워서 꺼놔야 했다는 점이겠군요.

![pin not match](https://d.pr/i/mc9F6+){:.center-image}

한 가지 유의할 점이 Noctua FAN에서 나오는 케이블은 3pin인데 Akitio Node에서 나가는 포트는 2핀이라는 점입니다. 정히 Akitio 메인보드에 연결을 하고 싶으면 선 작업을 별도로 할 필요가 있어보입니다. 저는 그냥 PSU peripheral에서 직접 IDE로 꺼내서 동봉된 변환 어댑터에 연결했습니다. 결국 아예 연결을 해제해버렸지만요. 이 부분은 스위치를 넣은 케이블을 따로 만들게 될 것 같습니다.

그러고 나서 파워가 안 들어오는 증상이 있었는데, [paper clip trick](https://aphnetworks.com/tutorials/psu_paperclip_trick)을 이용해서 성공했습니다. 2006년 트릭이 아직까지 유효하다니 놀랍네요. EVGA 케이블에는 초록색과 검정색의 구분이 없지만 그냥 16번, 17번 핀을 연결해주면 됩니다.

그러고 나서도 맥이 eGPU 박스를 인식하지 않는 문제가 있었는데 이건 그냥 드라이버를 재설치하면서 해결이 되었습니다. 물론 글자로 써놓으니까 금방 해결이 된 것 같지만 실제로는 마지막 단계에서 꼬박 하루가 걸렸네요.

그래서 지금은 일반적인 맥 미니 소음 수준으로 구동이 되고 있습니다. 가장 시끄러운 소리가 외장하드 소리군요. 아주 만족스럽습니다.

<blockquote class="twitter-tweet tw-align-center" data-lang="en"><p lang="ko" dir="ltr">이번에 절실하게 느낀 건<br>1. 맥은 마개조해서 쓰기에는 참으로 개판인 물건이다<br>2. 따라서 해킨토시도… ㅅㅁ<br>3. 다음 컴퓨터는 맥용 따로 윈도우즈용 따로 두어야겠다.</p>&mdash; Canor (@psCanor) <a href="https://twitter.com/psCanor/status/961256336292954114?ref_src=twsrc%5Etfw">February 7, 2018</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 
