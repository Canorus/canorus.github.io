---
layout: "post"
title: "KakaoTalk 자동 종료하기"
date: "2017-04-10 10:58"
published: false
---

## 배경 설명

![](http://d.pr/i/tIJq+){:.center-image}

그냥 위 이미지들이 보기 싫었다. 의외로 단순함. 그리고 한 번 로그아웃되면 귀찮게 비밀번호 입력하고 로그인하거나 껐다 켜야 되는데 **귀찮았다**. 이게 정답이네.

## 과정

크게 두 가지로 나눌 수 있는데 1) 화면보호기가 실행중인지를 감지해서 카카오톡 실행을 종료할 스크립트와 2) 이걸 뒤에서 돌릴 서비스가 필요하다.

1\. 실행 종료 스크립트

```sh
ps ax|grep [S]creenSaverEngine > /dev/null
if [ "$?" != "0" ] ; then
    # screen saver is not active
    printf "Screen saver is not running atm"
else
    # screen saver is active
    sleep 300
    osascript -e "tell application \"KakaoTalk\" to quit"
fi
```

중간의 `sleep 300`은 본인 기호에 맞게 설정하면 된다. 기준은 초(s) 단위이고 화면 보호기 실행부터 카카오톡 실행 종료 명령을 내릴 때까지 기다리는 시간이다.

이걸 쉘 스크립트 파일(`.sh`)로 어딘가에 저장해둔다. 본인같은 경우는 `~/scripts/screensaveractivated.sh`에 저장해두었다.

2\. 백그라운드 프로세스

2-1\. 터미널에 `cd /Library/LaunchAgents/`를 입력해서 Agents 디렉터리로 이동한다.

2-2\. `sudo touch me.canor.screensaveractivated.plist` 를 입력해서 plist 파일을 만든다. 뒤의 이름은 맘대로 해도 상관이 없지만 끝에 `.plist`는 빼먹으면 안 된다. *비밀번호를 입력해야 한다.* 터미널에서는 비밀번호가 안 뜨지만 원래 그런 것이니 그냥 무시하고 입력한 다음에 return을 누른다.

2-3\. 디렉터리를 열어서 방금 만든 파일을 열고 아래 코드를 붙여넣는다.

```plist
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>KeepAlive</key>
	<true/>
	<key>Label</key>
	<string>me.canor.screensaveractivated</string>
	<key>ProgramArguments</key>
	<array>
		<string>/bin/bash</string>
		<string>/Users/Canor/scripts/screensaveractivated.sh</string>
	</array>
	<key>RunAtLoad</key>
	<true/>
</dict>
</plist>
```

당연한 거지만 `Label` 값과 스크립트 위치는 각자 맞게 변형해야 한다.

2-4\. `sudo launchctl load /Library/LaunchAgents/me.canor.screensaveractivated.plist`를 입력해서 프로세스를 등록한다.

파일을 복사해서 넣은 경우 권한은 644.
