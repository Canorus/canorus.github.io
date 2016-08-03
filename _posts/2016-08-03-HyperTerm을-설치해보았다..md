---
layout: post
title: HyperTerm을 설치해보았다.
---



[HyperTerm 설치하기](http://yeun.github.io/2016/07/03/install-hyperterm.html)를 읽고 [HyperTerm](https://hyperterm.org)을 설치해 보았다. 사실 기본 터미널도 잘 쓰고 있긴 하지마는.

익스텐션을 사용하려면 기본적으로 [npm](https://www.npmjs.com)[^npm]이 필요하다길래 먼저 [Mac(OSX)에 nodejs를 설치하는 최고의 방법 – hochulshin.com](http://hochulshin.com/node-install-osx/)을 참고해서 npm을 설치하고 시작했다. 결론적으로 익스텐션 설치는 안(못) 했다.

[^npm]: Use npm to install, share, and distribute code; manage dependencies in your projects; and share & receive feedback with others. 라고 적혀있었다. 코드 패키지 관리자 쯤 되는 모양이다.



Homebrew가 설치되어 있다면 아래처럼 명령어

`brew cask update

brew cask install hyperterm`

을 입력해서 설치할 수 있다.



(npm을 포함해서) 제대로 설치가 되었다면 아래 사진처럼 플러그인까지 업데이트가 끝난다. 설명서(?)에서는 먼저 `npm search hyperterm`을 입력하라는데 나는 그렇게 하니까 오류가 났고, 그냥 EDITOR 설정만 해주고 바로 설정하면 될 것 같다.

![](/Resources/2016-08-03/hyperterm.png){: .center-image }

`open .bash_profile`을 입력해서 profile 파일을 열고 맨 아랫줄에 `EDITOR=nano`를 입력한다. 본인이야 nano를 즐겨쓰니까 그렇게 한 거고 도움글에서는 vim, 처음 본 글에서는 Sublime Text 3로 설정하셨더라. 각자 취향에 맞게 따라가면 적당하다.

그리고 메뉴 항목에서 preferences를 눌러서 설정화면에 들어가면 각자 취향대로 설정할 수가 있다. 본인 같은 경우는 폰트 크기와 텍스트 색깔만 바꿔주었다. 재밌는 건 아래쪽에 css인지 뭔지로 설정을 해놔서 색 설정 란에 'green', 'yellow'처럼 입력해도 된다는 점이다. 만약 이 색이 마음에 안 들면 css를 건드려주면 되겠다. 아니면 그냥 하나하나 바꿔도 되고.

![](/Resources/2016-08-03/preferences.png){: .center-image }



### 장점

#### 1. 예쁘다

말도 못하게 아름답다.

#### 2. 커스터마이징이 가능하다

기본 터미널 앱도 가능했지만 이 정도는 아니었다.



### 단점

#### 1. 한글 입력이 **아예** 안 된다

이건 좀 치명적. 한글 입력을 하면 특수키로 알아먹는 건지 한글 입력이 아예 불가능하다. 중국어 입력은 어느 정도 가능은 한 모양이다만 한글은 아예 불가능하다. [Incompatible with CJK Input Method · Issue #149 · zeit/hyperterm](https://github.com/zeit/hyperterm/issues/149)에 이슈가 보고되어 있다.

#### 2. 느리다

기본 터미널 앱과 비교도 못하게 느리고 굼뜨다.

------

좀 더 써봐야 알겠지만—그리고 사실 쓸 일이 얼마나 되겠느냐마는—일단은 나쁘지 않다 라고 보는데, 일단 한글 입력이 개선이 되어야 할 것 같다. 일단 눈이 호강하니까… 

------

via

- [heeyeun | HyperTerm 설치하기](http://yeun.github.io/2016/07/03/install-hyperterm.html)
- [Mac(OSX)에 nodejs를 설치하는 최고의 방법 – hochulshin.com](http://hochulshin.com/node-install-osx/)
- [npm](https://www.npmjs.com)
- [HyperTerm](https://hyperterm.org)

