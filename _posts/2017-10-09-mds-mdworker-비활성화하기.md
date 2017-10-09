---
layout: post
title: mds, mdworker 비활성화하기
---

![](http://d.pr/i/a4O9pn+){:.center-image}

맥을 쓰다 보면 `mds`나 `mdworker` 같은 프로세스가 리소스를 왕창 잡아먹는 걸 볼 수 있다.

파일을 인덱싱해서 Spotlight 등에서 쓸 수 있게 해주는 프로세스라고 한다. 즉 *없으면 인덱싱이 되지 않는다*.

Alfred 등 서드파티 런처를 사용해서 비활성화해서 쓴다는 [글](http://hiswork.tistory.com/177)을 봤는데 그 당시에는 어쨌는지 몰라도 [현재 알프레드 문서](https://www.alfredapp.com/help/troubleshooting/indexing/spotlight/)에 따르면 Spotlight와 마찬가지로 메타데이터 인덱스에 의존하기 때문에 비활성화하면 시스템 내부 파일 검색을 못한다고 한다. ~~그리고 그건, 적어도 내 용례에 있어서는 매우 문제가 크다.~~ 웹 런처로는 쓸 수 있다는데, 그건 반쪽짜리 알프레드이므로 일고의 가치조차 없다고 사료된다.

고로 프로세스가 리소스를 많이 잡아먹는다고 아예 해당 기능을 꺼버리는 건 그리 추천할 만한 일이 못 된다. 참고로 10.12.6 Sierra에서도 인덱싱 기능을 아예 꺼버리는 건 `sudo mdutil -a -i off`로 동일하다.