---
layout: "post"
title: "Screen Saver 작동 중 Applescript automation"
date: "2017-10-09 01:56"
tags:
 - study
 - troubleshooting
 - Applescript
---

특정 시간에 iTunes를 이용, 거실에 있는 Airport Express의 AirPlay 기능을 통해서 음악을 송출하게끔 설정을 [해놓았었다](http://canor.cf/2017/10/09/applescript로-iTunes에서-음악-재생하기/).

문제는 그 특정 시간에 대부분 내가 집에 없다는 점.

그리고 덕분에 집에 와서 컴퓨터를 켜면 거대한 iTunes 화면을 봐야 한다는 점.

사실 별 게 아닌데 원래 별 게 아닌 게 사람 속을 긁는 법이다.

그래서 재생 설정하고 자동으로 미니플레이어 전환하는 스크립트를 짰**었**다. *짜긴 짰다*...

```
tell application "System Events"
	tell process "iTunes"
		set frontmost to true
		if title of window 1 is "미니 플레이어" then --미니 플레이어 전면
			click menu item 9 of menu 9 of menu bar 1 -- 윈도우 메인 화면으로 전환
			delay 5
			click menu item 9 of menu 9 of menu bar 1 -- 미니 플레이어로 전환
		else --나머지
			click menu item 9 of menu 9 of menu bar 1
		end if
	end tell
end tell
```

이론적으로는 이렇게 하면 동작을 해야 하는데... 안 했으니까 이런 글을 적고 있겠지.

화면 보호기 엔진을 꺼보기도 하고 오만 삽질을 다 해도 안 돼서 그냥 화면 보호기 해제하고 윈도우 정리 작업 한 후에 다시 화면 보호기를 작동시키기로 했다.

```
tell application "System Events" to set the saveractivated to (exists process "ScreenSaverEngine") -- 현재 화면 보호기 작동 여부 확인. 작업하는데 화면 보호기 꺼지면 안 되니까
if saveractivated then -- 화면 보호기 작동중이면(saveractivated = 1)
	try
		tell application id "com.apple.ScreenSaver.Engine" to quit -- 일단 화면보호기 중단. 비밀번호 입력 창으로 전환
	end try
	delay 1
	tell application "System Events" -- 비밀번호 입력 시작
		keystroke "p"
    keystroke "a"
    keystroke "s"
    keystroke "s"
    keystroke "w"
    keystroke "o"
    keystroke "r"
    keystroke "d"
    key code 36 -- return
	end tell -- 당연히 내 컴퓨터 비밀번호는 password가 아님
end if
delay 1
tell application "System Events" -- 윈도우 정리 시작
	tell process "iTunes"
		set frontmost to true
		if title of window 1 is "미니 플레이어" then --미니 플레이어 전면
			click menu item 9 of menu 9 of menu bar 1
			delay 5
			click menu item 9 of menu 9 of menu bar 1
		else --나머지 화면 전면
			click menu item 9 of menu 9 of menu bar 1
		end if
	end tell
	if saveractivated then -- 아까 저장해 둔 화면보호기 상태를 가져와서 작동하고 있으면
		start current screen saver -- 화면보호기 작동
	end if
end tell
```

당연히 바람직한 짓은 아닌데——비밀번호를 평문으로 저장하는 꼴이니 모 통신사가 했던 짓이랑 비슷한 것임—— 마땅히 다른 우회 방법이 없음.
