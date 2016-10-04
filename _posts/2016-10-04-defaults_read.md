---
layout: post
title: 시스템 설정 파일 읽기 defaults read
tags: 
 - OSX
---

시스템 설정 중에 Preferences.app 을 통해서 바꿀 수 있는 것이 있고 command line을 통해서만 바꿀 수 있는 것이 있습니다. 스크린샷 저장 경로를 `defaults write com.apple.screencapture`로 바꾸고 숨긴 파일을 보이는 `defaults write com.apple.finder AppleShowAllFiles`가 대표적입니다.

하지만 스크린샷 경로를 바꿨는데 도저히 어디로 바꿨는지 찾을 수가 없는 겁니다. 그래서 명령어를 가만히 읽어보니 `defaults read`로 읽을 수 있지 않을까 라는 생각을 했습니다.

![](http://d.pr/i/RI1l+){: .center-image }

터미널에 `man defaults`를 입력해보니 이렇게 나오네요. `write`가 들어가는 자리에 `read`를 넣으면 되겠네요. `defaults read com.apple.screencapture`를 입력해보았습니다.

![](http://d.pr/i/1gbfo+){: .center-image }

그렇다는군요. 얼른 위치를 바꿔야겠어요.