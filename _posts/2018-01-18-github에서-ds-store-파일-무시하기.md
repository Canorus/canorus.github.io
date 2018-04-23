---
layout: "post"
title: "github에서 .DS_Store 파일 무시하기"
date: "2018-01-18 13:45"
tags:
  - study
---

요즘에는 [이런 걸](https://github.com/Canorus/alfred-2do) 틈틈이 만들고 있습니다. 거진 다 완성되서 복수의 태그 설정만 가능하게 되면 커뮤니티에 올릴 생각인데 한 가지 거슬리는 게 있더군요. 메타데이터를 담고 있는 `.DS_Store` 파일이었습니다.

찾아보니 광역으로 파일을 무시하는 옵션이 있었습니다.

```
$ git config --global core.excludesfile ~/.gitignore
$ echo .DS_Store >> ~/.gitignore
```

- - -

- via [Make git always ignore .DS_Store](https://gist.github.com/linuslundahl/577073)
