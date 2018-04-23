---
layout: post
title: commandline에서 자동완성 사용하기
tags: 
 - Apple
---

Tab으로 자동완성시키는 기능은 꽤 커맨드라인에서 작업할 때 꽤 유용합니다.

`nano ~/.inputrc`를 입력해서 파일을 열고 다음과 같이 입력해줍니다.

```
set completion-ignore-case on
set show-all-if-ambiguous on
TAB: menu-complete
```

터미널을 재시작하면 tab키를 눌러서 항목을 자동완성할 수 있습니다.

------

- via [osxdaily](http://osxdaily.com/2012/08/02/improve-tab-completion-in-mac-os-x-terminal/)
- 기본 터미널과 [Hyper](https://hyper.is) 모두에서 적용이 가능.