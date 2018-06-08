---
layout: post
title: jobs; There are stopped jobs
---

가끔씩 외부에서 맥미니에 접속해서 작업을 하는 경우가 있습니다. 패키지를 설치하는 경우도 있고 개인 스크립트 유지 보수 작업인 경우도 있죠.

최근에 작업을 하면서 이런 에러 메세지들이 간간이 나타나더군요.

*There are stopped jobs*

그리고 `exit` 명령어로 빠져나가려고 하면 놔주지를 않습니다. 강제로 연결을 중단하면 닫히기는 하겠지만 역시 찜찜하죠.

찾아보니 `jobs` 를 입력해서 멈춘 작업을 확인할 수 있고 `fg` 명령어로 작업을 재개할 수 있는 모양입니다. `ps` 명령어로 프로세스 아이디를 확인해서 `kill` 할 수도 있는 것 같구요.

------

- via [shell - There are stopped jobs (on bash exit) - Unix & Linux Stack Exchange](https://unix.stackexchange.com/questions/116959/there-are-stopped-jobs-on-bash-exit)