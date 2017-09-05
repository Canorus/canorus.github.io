---
layout: post
title: Applescript 알림 메시지
tags:
 - study
---

Applescript로 알림 메시지를 띄울 수 있다.

`display notification "message"`

부가적으로 title과 subtitle을 설정할 수 있다. 각각 `with title ""` 과 `subtitle ""`의 형식으로 부가할 수 있다.

!{}(http://d.pr/i/v3lCxu+){:.center-image}

`display notification "message" with title "TItle" subtitle "subtitle"`

아이콘은 설정이 안 되지 싶다. [^1] [입력값을 받는 파라미터가 없다고](https://apple.stackexchange.com/questions/106904/change-the-icon-of-an-applescript-called-notification)

[^1]: applescript는 설정이 안 되고 처음 만들 때 Cocoa-AppleScript Applet 형식으로 만들어서 독자적인 앱으로 만들면 번들에서 `.icns` 파일로 아이콘을 설정할 수는 있다.

- via [documentation](https://developer.apple.com/library/content/documentation/LanguagesUtilities/Conceptual/MacAutomationScriptingGuide/DisplayNotifications.html#//apple_ref/doc/uid/TP40016239-CH61-SW1)