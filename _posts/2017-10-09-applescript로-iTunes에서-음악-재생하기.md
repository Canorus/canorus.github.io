---
layout: "post"
title: "Applescript로 iTunes에서 음악 재생하기"
date: "2017-10-09 01:00"
tags:
 - study
 - Applescript
---

특정 시간에 iTunes를 이용, 거실에 있는 Airport Express의 AirPlay 기능을 통해서 음악을 송출하게끔 설정을 해놓았다.

```
tell application "iTunes"
	reopen
	activate
	set song repeat to all -- 전체반복
	set shuffle enabled to true -- 셔플재생
	set sound volume to 35 -- 볼륨 조절
	delay 5
	get name of AirPlay devices -- AirPlay 기기 이름 목록 가져오기
  set selected of AirPlay device "Airport Express" to true -- Airport Express라는 이름의 AirPlay 기기로 출력 설정하기
	play playlist "music" -- music이라는 재생목록 재생하기
end tell
```

폴더 목록은 `play folder playlist "name"`으로 입력.
