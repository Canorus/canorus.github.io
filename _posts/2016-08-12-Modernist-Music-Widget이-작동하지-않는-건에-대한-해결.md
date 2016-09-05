---
layout: post
title: Modernist Music Widget이 작동하지 않는 건에 대한 해결
---

이래저래 웹을 쏘다니다가 아사모에 들어가게 되었는데 [정말 깔끔한 위젯](http://cafe.naver.com/appleiphone.cafe?iframe_url=/ArticleRead.nhn%3Fclubid=12789486%26menuid=16%26boardtype=I%26page=1%26specialmenutype=%26articleid=3649895%26referrerAllArticles=false)을 보게 되었다. 글쓴이를 보고 나니 아 그럴만하군 하고 수긍하긴 했지만. 읽어보니 [Modernist Music Theme](http://cafe.naver.com/appleiphone/3645897)이라고 적어놓으셨는데 원본은 [이 쪽](http://lockplus.us/iwidgets/?page=8#JMusic)이다. 제작자는 [JunesiPhone](https://twitter.com/junesiphone). 물론 코드를 살짝 바꾸셨으니 저작권가지고 왈가왈부할 생각은 추호도 없다. 내가 만든 것도 아니고… 

아무튼 InfoStats2가 필요한 상황인데 댓글을 보니 안 된다는 문의가 많았다. 실제로 스스로 해 봤을 때도 안 되었고. 뭐가 문제인지 패키지를 살펴보았다. 

![](/Resources/2016-08-12/webcycript.png){: .center-image }

모두가 주지하고 있는 사실이지만 InfoStats2는 webcycript를 dependency로 삼는다. InfoStats2 자체는 9.3.3 지원 업데이트를 마친 상태이지만 의존 파일이 9.3.3 지원을 *공식적으로* 하지 않는 상황이라 문제이다. 그래서 모두들 deb 파일로 설치한 모양이다. 하지만 위 그림에서 보듯이 **webcycript 또한 의존성 파일이 있다**. [cycript](cydia://url/http://cydia.saurik.com/package/cycript/)이다. 

![](/Resources/2016-08-12/cycript.png){: .center-image }

그리고 cycript에도 의존성 파일로 [adv-cmds](cydia://url/http://cydia.saurik.com/package/adv-cmds/)가 따라온다. GUI로 설치하면 상관없겠지만 커맨드 라인으로 설치하는 경우에는 adv-cmds를 먼저 설치하고 진행하는 것이 좋다.

요약하면 [adv-cmds](cydia://url/http://cydia.saurik.com/package/adv-cmds/) - [cycript](cydia://url/http://cydia.saurik.com/package/cycript/) - [JuneiPhone](http://www.junesiphone.com/articles/lockplus/lock-on-9-3-3/)이 올린 webcycript - [InfoStats2](cydia://url/http://cydia.saurik.com/package/com.matchstic.infostats2/) 순으로 설치하면 되겠다.