---
layout: "post"
title: "RansomWhere?, 맥에서 랜섬웨어에 대비하기"
date: "2017-05-29 17:11"
---

<div style="text-align:center"><img width="50%" src="https://objective-see.com/images/RW/alert.png" /></div>

image from [Objective-See](https://objective-see.com/products/ransomwhere.html)

요즘 WannaCry로 윈도우 사용자들은 시끌시끌하다는 모양입니다. 조만간 Win10까지 타겟으로 하는 랜섬웨어를 배포하겠다고 하니 걱정이 이만저만이 아닐 것 같습니다.

이번에는 맥이 공격대상이 아니어서 크게 상관은 없었지만 KeyRanger라든가 맥을 대상으로 하는 랜섬웨어가 없었던 게 아닌만큼 조심할 필요는 있습니다. 운영체제를 최신으로 유지한다든가, 의심스러운 파일은 실행하지 않는다든가.

하지만 일반 사용자들이 조심하는 게 그리 쉬운 일은 아니죠. 매번 앱을 업데이트할 때마다 hash 값을 체크해보면서 업데이트할 수는 없는 노릇이니까요. [앱스토어 샌드박스가 완벽](https://blog.agilebits.com/2015/06/17/1password-inter-process-communication-discussion/)하다거나 [애플 리뷰 프로세스](http://www.cultofmac.com/241463/researchers-sneak-malicious-ios-app-into-the-app-store-undetected/)를 마냥 믿을수도 없는 노릇이구요. 게다가 최신 운영체제가 호환성이 반드시 좋지 않다는 걸 몸소 보여주고 있는 애플이기도 하고, 업데이트가 마냥 정답이라고 하기는 어렵지 않을까라고 생각합니다. 개인적으로. 그렇다고 마냥 10.8에서 뻐팅길 생각은 없지만요.

그래서 거기에 더할 수 있는 한 가지 대비책을 더 소개합니다. 일단 대비책은 많을수록 좋으니까요. [RansomWhere?](https://objective-see.com/products/ransomwhere.html)라는 앱입니다. KeyRanger가 등장했던 시기와 엇비슷하게 등장했던 걸로 기억하는데, *랜섬웨어를 완벽히 막아줍니다*같이 거창한 건 아니고 백그라운드에서 있다가 특정 프로세스가 파일을 암호화하기 시작하면 사용자에게 알려주는 앱입니다. 랜섬웨어에서 가장 문제가 되는 부분을 막아줄 수 있는 셈이죠.

개발자한테 물어보니 딱히 WannaCry 대비는 안 했지만—할 수도 없고, 맥 타겟이 아니므로—앱 자체가 범용으로 암호화하는 걸 막아주는 앱이기 때문에 앞으로도 어느 정도 도움이 될 거라고 자신하더군요. 다만 랜섬웨어가 설치됐다고 바로 잡아내는 게 아니라 암호화를 하기 시작해야 잡아내는 방식이기 때문에 랜섬웨어 자체를 잡는 건 아니라고 합니다. 뭐 어쨌든 암호화하기 시작하면 어떤 앱이 암호화하는지 보여주니까요. 종종 Atom이라거나 멀쩡한 앱이 암호화하는 것도 잡아내서 놀래키기는 하지만 도움이 꽤 될 것 같습니다.

사실 이런 거 다 집어치우고 가장 중요한 건 본인이 조심하는 수 밖에 없습니다만, 아예 안 하는 것보다는 낫겠죠.

- - -

p.s. 개발자 후원 페이지는 [이 쪽](https://www.patreon.com/objective_see)이라고 합니다.
