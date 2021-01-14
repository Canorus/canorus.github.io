---
layout: post
title: use setter for headless
---

최근에 브라우저들을 헤드리스로 운용하는데 이런 워닝 메시지들이 자꾸 보이기 시작했다.

```
DeprecationWarning: use setter for headless property instead of set_headless
```

무슨 헤드리스 프로퍼티를 주려면 세터(setter)를 쓰라나. 뭔 소린가 찾아봐야지 생각만 하고 한동안 냅뒀다가 새해를 맞이하여 워닝 메세지를 검색해보았다.

결론은 [이 StackOverflow 답글](https://stackoverflow.com/a/53135400) 에 따르면

```
options = webdriver.ChromeOptions()
options.set_headless()
```

대신에 


```
options.headless = True
```

