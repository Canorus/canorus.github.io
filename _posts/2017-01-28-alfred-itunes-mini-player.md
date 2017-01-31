---
layout: "post"
title: "Alfred iTunes mini player(powerpack)"
date: "2017-01-28"
tags:
  - Alfred
---

알프레드 파워팩을 사고 이런저런 기능을 사용해보고 있는데 대부분 있는 그대로*as is* 잘 작동을 했다마는 iTunes mini player 기능은 별도의 설정이 조금 필요해서 기록을 남겨둔다.

![](http://d.pr/i/ruq7+){:.center-image}

우선 iTunes에서 설정해 줄 게 있다. iTunes 설정을 열어서 `다른 응용 프로그램과 iTunes 보관함 XML 공유` 설정을 활성화 해주어야 한다.

그러면 iTunes 라이브러리가 있는 위치에 동일한 xml 파일이 생성된다.

![](http://d.pr/i/g6uZ+){:.center-image}

알프레드 설정화면을 열고 Features > iTunes 항목의 Advanced 탭을 열고 `Library XML` 하위 항목에 이 파일을 드래그해주면 된다.

다음부터는 단축키로 불러내든지 키워드로 불러내든지 해서 사용하면 된다. 기본 키워드는 `itunes`이다.
