---
layout: "post"
title: "com.automator.runner.xpc"
date: "2018-05-04 09:05"
tags:
  - troubleshooting
---

- *이하의 과정을 조치했음에도 설정 어플리케이션이 최상위에 위치하는 경우에만 정상작동하는 문제가 지속적으로 발생.*
- *이하의 과정은 10.13 이상에서는 동작하지 않는 것을 확인하였습니다. 10.12이하에서도 동작하지 않을 수 있습니다.*

- - -

![message](/images/2018-05-04/automatorrunnerxpc.png){:.center-image}

*'AppleScript 실행' 동작에 오류가 발생함: 'System Events에 오류 발생: com.automator.runner.xpc에 보조 접근이 허용되지 않습니다.'*

키보드 단축키로 알림센터를 동작하려고 하는데 이런 에러 메세지가 발생.

아마도 컴퓨터 제어 권한(설정.app > 보안 및 개인 정보 보호 > 개인 정보 보호)가 부여가 안 돼 있어서 그런 것일 테니까 권한 부여만 해주면 해결될 문제.

`/System/Library/CoreServices` 경로의 `Automator Runner.app`을 컴퓨터 제어 권한 설정에 넣어주면 된다.
