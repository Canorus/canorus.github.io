---
layout: post
title: non-standard shell 오류
---

macOS 기본 셸이 `/bin/zsh` 로 바뀌었으나, 루프문이라든가의 이유로.. 다 필요없고 귀찮아서 계속 `/bin/bash` 를 쓰고 있었다. 문제라면 기본 탑재 bash의 버전이 3.x 대라는 거.

셸 스크립트에서 globstar 를 쓰려면 4.x 이상 버전이 필요하다. 기본 셸의 상태를 보자.

```
the-macbook-pro:~ canor$ /bin/bash --version
GNU bash, version 3.2.57(1)-release (x86_64-apple-darwin19)
Copyright (C) 2007 Free Software Foundation, Inc.
```

`Copyright (C) 2007` 을 2021년에 보게 될 줄은 꿈에도 몰랐다. 이 정도면 믿고 쓰는 homebrew에 뭔가 있겠거니 싶다. 역시 믿고 쓰는 홈브류.

```
the-macbook-pro:~ canor$ brew info bash
bash: stable 5.1.4 (bottled), HEAD
Bourne-Again SHell, a UNIX command interpreter
https://www.gnu.org/software/bash/
/usr/local/Cellar/bash/5.1.4 (157 files, 10.9MB) *
  Poured from bottle on 2021-05-04 at 14:37:19
From: https://github.com/Homebrew/homebrew-core/blob/HEAD/Formula/bash.rb
License: GPL-3.0-or-later
==> Options
--HEAD
        Install HEAD version
==> Analytics
install: 20,226 (30 days), 63,561 (90 days), 299,808 (365 days)
install-on-request: 16,879 (30 days), 53,945 (90 days), 254,611 (365 days)
build-error: 0 (30 days)
```

`brew install bash` 를 입력하고 `chsh -s /usr/local/bin/bash` 해서 기본 셸을 5.x 대 bash 로 변경할 수 있다. 원래대로라면 순조롭게 진행이 되어야하지만 문제가 생긴다.

```
chsh: /usr/local/bin/bash: non-standard shell
```

이건 뭔가 싶다. 어째서 non-standard shell이지.

해결책을 찾다 [이 글](https://yoonandro.tistory.com/83)의 댓글에서 해답을 발견했다. `/etc/shells` 에 셸 위치를 넣어주어야 변경이 가능하다나. 어째선지는 모르겠지만 `sudo "/usr/local/bin/bash" >> /etc/shells` 해도 권한이 없다고 안 써지길래 그냥 `sudo vim /etc/shells` 해서 직접 입력했다. 

그리고 `chsh -s /usr/local/bin/bash` 하니 문제없이 진행된다.