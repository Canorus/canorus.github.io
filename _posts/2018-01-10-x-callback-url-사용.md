---
layout: "post"
title: "x-callback-url 사용"
date: "2018-01-10 00:35"
tags:
  - study
---

2Do는 x-callback-url 형식의 url scheme을 통해서 Task를 생성할 수 있다.

```applescript
tell application "System Events"
  open location "twodo://x-callback-url/[나머지]"
end tell
```
