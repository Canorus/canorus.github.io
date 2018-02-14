---
layout: post
title: ublock origin으로 워닝 접속 방지하기
---

![warning](https://d.pr/i/igYXKs+){:.center-image}

[재밌는 글](http://bbs.ruliweb.com/news/board/1003/read/2149557)을 봤습니다. 사실 글 자체보다는 아래 달린 댓글이 더 재밌었습니다만.

[ublock origin](https://github.com/gorhill/uBlock)은 2014년 µBlock으로 시작해서 2015년 uBlock이 떨어져 나가고 난 뒤의 이름입니다.[[Wikipedia]](https://en.wikipedia.org/wiki/UBlock_Origin) 단순히 광고 차단 뿐만 아니라 각종 요소들의 로딩을 차단하는 기능을 합니다. 뿐만 아니라 페이지의 로드도 막아주는 기능이 있기 때문에 실수로 워닝에 걸릴 사이트에 접속하게 되더라도 워닝으로 리다이렉트되는 걸 방지할 수 있겠죠.

답글에도 적용방법이 달려있지만 uBlock origin의 설정 화면에서 '내 필터' 탭에 `||warning.or.kr^`를 입력하고 추가하면 됩니다. 생각보다 간단하죠.

------

댓글을 읽다보니 이상한 부분에서 정치 논리를 들고 들어오는 사람이 여전히 있군요. 흠.