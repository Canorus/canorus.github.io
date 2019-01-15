---
layout: post
title: .bashrc 와 .bash_profile
tags:
 - study
---

터미널 실행할 때 ssh-agent를 자동으로 실행시켜주고 싶어서 찾다보니 .bashrc 와 .bash_profile 의 차이를 이해할 필요가 있었다. 간략하게 정리해 보았다.

## Login Shell vs. Non-Login Shell

Login Shell은 *ID와 패스워드를 입력해서 Shell을 실행하는 것*을 가리킨다. 반면 Non-Login Shell은 이러한 입력없이 Shell을 실행하는 것을 가리킨다.

## .bashrc vs. .bash_profile

**.bashrc**는 Non-Login Shell 을 구동할 때 실행된다. Gnome이나 KDE에서 로그인한 상태로 새 윈도우를 여는 경우에 .bashrc가 실행된다.

**.bash\_profile** 은 로그인 할 때마다 실행된다. 로컬이든 ssh든 ID와 PW를 입력하고 실행하면 일단 이 파일이 실행된다. 일반적으로 개별 사용자의 설정을 여기에 넣어둔다.

**.profile** 이라는 것도 있는데 대충 .bash_profile 의 root 버전이라고 생각하면 된다. bash 외의 다른 Shell에 대하여도 적용하기 위함이 아닐까 싶다고. [Debian thread](https://lists.debian.org/debian-user/1999/06/msg00062.html)

**.bash\_logout** 이라는 것도 있는데 Shell에서 로그아웃할 때 실행되는 스크립트다.

## macOS

[Josh Staiger의 2005년 글](http://www.joshstaiger.org/archives/2005/07/bash_profile_vs.html)에 따르면 맥은 OS X 시절부터 터미널 창을 열 때마다 Non-Login Shell 대신 Login Shell을 실행시킴으로써 .bashrc 대신 .bash_profile 을 실행시켜왔다.

- - -

결국 .profile 에 실행 코드를 넣어두면 되는 것이다.

- - -

via

- [shell - What's the difference between .bashrc, .bash_profile, and .environment? - Stack Overflow](https://stackoverflow.com/questions/415403/whats-the-difference-between-bashrc-bash-profile-and-environment)
- [.bashrc 와 .bash_profile 의 차이 - 92Hz \| Jongmin's Blog](https://jongmin92.github.io/2016/12/13/Linux%20&%20Ubuntu/bashrc-bash_profile/#bash-%EC%89%98shell-%EC%9D%B4%EB%9E%80)
- [.bash_profile vs .bashrc](http://www.joshstaiger.org/archives/2005/07/bash_profile_vs.html)
- [Re: I'm really confused by bash, .bashrc, .bash_profile, .profile, etc, etc, etc](https://lists.debian.org/debian-user/1999/06/msg00062.html)
- [Execution sequence for .bash_profile, .bashrc, .bash_login, .profile and .bash_logout](https://www.thegeekstuff.com/2008/10/execution-sequence-for-bash_profile-bashrc-bash_login-profile-and-bash_logout/)
