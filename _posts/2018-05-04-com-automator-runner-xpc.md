---
layout: "post"
title: "com.automator.runner.xpc"
date: "2018-05-04 09:05"
menu: private
tags:
  - troubleshooting
---

![message](/images/2018-05-04/automatorrunnerxpc.png){:.center-image}

*'AppleScript 실행' 동작에 오류가 발생함: 'System Events에 오류 발생: com.automator.runner.xpc에 보조 접근이 허용되지 않습니다.'*

키보드 단축키로 알림센터를 동작하려고 하는데 이런 에러 메세지가 발생.

아마도 컴퓨터 제어 권한(설정.app > 보안 및 개인 정보 보호 > 개인 정보 보호)가 부여가 안 돼 있어서 그런 것일 테니까 권한 부여만 해주면 해결될 문제.

`/System/Library/CoreServices` 경로의 `Automator Runner.app`을 컴퓨터 제어 권한 설정에 넣어주면 된다.
