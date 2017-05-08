---
layout: "post"
title: "Handbrake 트로이 바이러스 감염 위험"
date: "2017-05-08 21:01"
---

Handbrake가 트로이 바이러스에 감염되었을 가능성이 있다고 [9to5Mac](https://9to5mac.com/2017/05/08/handbrake-trojan-mac-malware-infected/?pushup=1)이 전했다.

> UTC 2017년 5월 2일 14:30부터 5월 6일 11시 사이에 Handbrake를 내려받은 경우 50%의 확률로 (감염되었을 가능성이 있습니다.)
> Anyone who has installed HandBrake for Mac needs to verify their system is not infected with a Trojan. You have 50/50 chance if you've downloaded HandBrake during this period.

### 감염 여부 확인

1\. 터미널을 열고 다운로드 받은 파일 위치를 확인한다. 예시 사진의 경우 홈 폴더`~/`에 위치했다. 다운로드 받은 파일 이름은 `Handbrake-1.0.7.dmg`이다.
2\. `shasum handbrake-1.0.7.dmg`를 입력하여 shasum 값을 확인한다. 파일 위치에 따라 뒤의 명령어는 달라진다.(예를 들어 다운로드 폴더 `~/downloads`에 있다면 `shasum downloads/handbrake-1.0.7.dmg`)
3\. sha256 값을 확인하고 싶다면 `shasum -a 256 handbrake-1.0.7.dmg`를 입력하면 된다.
4\. return 을 눌러 나오는 값을 아래 값과 대조하여 일치하는 경우 감염 어플리케이션을 설치한 경우이다.

- SHA1: 0935a43ca90c6c419a49e4f8f1d75e68cd70b274
- SHA256: 013623e5e50449bbdf6943549d8224a122aa6c42bd3300a1bd2b743b01ae6793

5\. 또는 Activity Monitor.app을 열고 `Activity_agent`라는 프로세스가 구동중인지 확인하는 방법도 있다.

### 처리

터미널을 열고 아래의 명령어를 하나씩 입력하고 return 키를 눌러 프로세스를 종료·제거한다.

- launchctl unload ~/Library/LaunchAgents/fr.handbrake.activity_agent.plist
- rm -rf ~/Library/RenderFiles/activity_agent.app

만일 `~/Library/VideoFrameworks/` 폴더에 proton.zip 파일이 있으면 `VideoFrameworks` 폴더를 통째로 삭제한다.
이후 Handbrake.app을 제거한다.

### 후처리

가장 중요한 부분인데 감염이 확인된 경우 KeyChain에 있는 **모든** 항목에 대한 비밀번호를 **즉시** 변경해야 한다. 이는 브라우저에 저장된 비밀번호를 포함한다.

- - -

작년 여름께 transmission 사이트가 해킹되었던 적도 있고, 그 이전에는 Spark Framework가 안전하지 않은 연결로 앱을 배포해서 중간자 공격에 노출되었다는 게 문제가 되었던 적도 있었다. 하지만 이건 일반 사용자 입장에서 어찌할 수 있는 영역이 아니라고 본다. 앱을 다운로드 받을 때마다 해쉬값을 체크할 수도 없고 말이다. 그렇다고 개발자를 탓하기도 어려운 문제이고. 난감하다.

- - -

via
- [9to5Mac](https://9to5mac.com/2017/05/08/handbrake-trojan-mac-malware-infected/?pushup=1)
- [Handbrake Forum](https://forum.handbrake.fr/viewtopic.php?f=33&t=36364)]
