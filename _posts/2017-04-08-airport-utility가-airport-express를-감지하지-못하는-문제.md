---
layout: "post"
title: "Airport Utility가 Airport Express를 감지하지 못하는 문제"
date: "2017-04-08 21:12"
---

![](http://d.pr/i/2Vln+){:.center-image}

Airport Utility는 Airport Express의 설정을 관리하기 위한 툴이다. 애플이 만든 어플리케이션답게 잘 되면 상당히 편리하지만 안 되면 아주 피곤하다.

오늘같은 경우는 Airport Utility가 Airport Express를 감지하지 못하는 상황에 처했다. 인터넷은 잘 되는데(어째서인지 상당히 느릴지언정) Airport Express만 못 잡는다.

## 증상

- 인터넷은 멀쩡하게 작동한다.
- Airport Utility가 Airport Express를 감지하지 못할 뿐이다.

## 해결

![](http://d.pr/i/Nxk5+){:.center-image}

Airport Utility 상단에서 `파일 > 기타 구성`으로 접근하면 라우터의 ip 주소를 지정해서 접속할 수 있다.

- - -

접속하고나서 보니 `WAN으로 설정`이 체크 해제되어 있었다는 뒷이야기.
