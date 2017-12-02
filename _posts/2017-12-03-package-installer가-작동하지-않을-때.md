---
layout: "post"
title: "Package Installer가 작동하지 않을 때"
date: "2017-12-03 01:17"
tags:
 - Sublime Text
 - troubleshooting
---

![ignored package](http://d.pr/i/sW4UKp+){:.center-image}

Sublime Text를 쓰는데 갑자기 Package Installer가 작동하지 않는 증상을 겪었습니다. 다행히도 플랫폼을 안 가리고 꽤나 광범위하게 일어나는(?) 문제인 듯 하군요.

### 해결책

설정에 들어가보면 모종의 이유로 `ignored_packages` 항목에 `Package Contrl`이 들어가 있는 까닭일 가능성이 크다고 합니다. 지운 뒤에 어플리케이션을 재시작하면 정상적으로 작동합니다.

- - -

Sublime Text가 가볍고 꽤 잘 작동해줘서——물론 한글 입력에는 다소 짜증나는 감이 있긴 하지만——맥북에서는 잘 쓰고 있는데 가끔 이런 버그가 사람을 괴롭히더란 말이죠. 이제는 Material Theme 관련해서도 트러불슈팅을 할 일이 남았습니다.

- - -

- via [github:wbond/package_control](https://github.com/wbond/package_control/issues/874)
