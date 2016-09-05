---
layout: post
title: Typora와 Typinator
tags:
 - Typinator
 - Typora
---

적어놓고 나니 둘 다 Typ~로 시작하는군요…(웃음)

[Typora에서 Typinator가 잘 작동하지 않는다고 리포트했었는데](https://github.com/typora/typora-issues/issues/266) 알고보니 이전 버전에서 해결이 되었더군요. 하지만 YAML 태그 관련한 단축은 여전히 커서 위치가 *틀려서* 수정이 되지 않은 줄 알았습니다.

[BTM에 Typora에 관련한 글](http://macnews.tistory.com/4799#comment-2860482478)이 새로 올라왔는데 읽다가 문득 특수한 태그이기 때문에 그런 게 아닐까 라는 생각을 했습니다.

Typinator가 커서 위치를 결정하는 것은 위치를 지정하는 것이 아니라 순전히 마지막 텍스트로부터의 칸 수를 세어서 빠르게 입력하는 것이더군요… 이건 뭐 리퍼가 땅 아래에서 뛰는 것도 아니고. 그러다보니 Typora에서는 마지막 `---`를 YAML 태그로 *제대로* 인식하고 에디터 상에서 숨겨버립니다. 하지만 Typinator는 *시킨대로* 마지막 칸에서 뒤로 네 칸을 물리니 커서 위치는 의도한 것과 어긋나게 됩니다. 결국 둘 다 원래 의도된 대로 작동은 하는데 결과물은 의도치 않은 결과물이 나오게 됩니다. 아이러니하죠.

이슈를 제보하면서 `---`를 처리하기 전에 Typinator를 먼저 개입시키도록 'Typinator Compatibility' 같은 옵션을 추가하는 게 어떻겠느냐 라고 해놓았는데 어떻게 처리할지는 모르겠습니다. *그냥 너 Typinator 옵션을 바꿔*라고 할지도 모를 일이지요.