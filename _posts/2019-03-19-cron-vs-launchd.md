---
layout: post
title: launchd와 cron
tags:
 - study
---

분명 어디선가 **launchd**에 비해 **cron**을 추천하지 않는다는 항목을 읽었는데 어디였는지 기억이 나지 않아서 한동안 찾아다녔던 적이 있다. 알고 보니 [Apple Developer 페이지](https://developer.apple.com/library/archive/documentation/MacOSX/Conceptual/BPSystemStartup/Chapters/ScheduledJobs.html)였다.

> Note: Although it is still supported, cron is not a recommended solution. It has been deprecated in favor of launchd.

추가적으로 **cron**은 지정한 시간에 컴퓨터가 잠자기 상태이면 실행이 되지 않으며 다음 지정한 시간이 도달할 때까지 실행이 되지 않는다. 반면 **launchd**는 지정한 시간에 컴퓨터가 잠자기 상태이면 다음 컴퓨터가 잠자기에서 깨어날 때 실행이 된다고 한다. 

하지만 두 프로그램 모두 지정한 시간에 컴퓨터가 꺼진 상태이면 다음 지정한 시간이 도달해야 실행이 이루어진다. 

------
- via [Apple Dev Page](https://developer.apple.com/library/archive/documentation/MacOSX/Conceptual/BPSystemStartup/Chapters/ScheduledJobs.html)
