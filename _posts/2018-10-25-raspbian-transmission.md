---
layout: post
title: Raspbian Transmission
---

토렌트 클라이언트로 Transmission을 써오다가 최근에서야 [CLI](https://cli-ck.io/transmission-cli-user-guide/) 버전이 있는 걸 알게 되었다. 사실 GUI 버전으로도 받는데는 크게 지장이 없으니까 CLI는 원격 사용 또는 시드 유지 용으로 쓰는 경우가 많을 거라고 본다. 본인의 경우는 후자였다. 라즈베리 파이에 설치하는 데 사용했던 설치 이미지를 시드 유지를 위해서 맥 미니에서 돌리자니 쓸데없이 리소스를 잡아먹었기에…(안 그래도 노인 학대 수준인데)

라즈베리 파이에서는 apt를 이용해서 설치했고 [이 블로그](http://vvchunvv.tistory.com/37) 글을 참조해서 세팅했다. 다만 이럴 경우 한 가지 문제가 생기는 게 권한이다.

[StackExchange 답변](https://superuser.com/a/1237261)에 따르면 apt로 설치한 Transmission daemon은 pi나 기본사용자가 아닌 debian-transmission의 별도 유저로 구동된단다. 

![권한 설정이 rwxr-xr-x로 되어 있다](/images/2018-10-25/permission.png){:.center-image}

그런데 확인을 해보면 기본적으로 홈 경로는 744권한이다. 즉 Owner 외에는 경로를 읽거나 실행할 수만 있을 뿐 이 경로에 *쓸* 수는 없다는 거다. *기본적으로는*

그렇기 때문에 Transmission을 설치한 후에 debian-transmission 이 해당 경로에 파일을 쓸 수 있도록 권한이나 소유를 조정해 주어야 한다.

위 답변 글에서는 `chown`이나 `setfacl` 명령어를 이용해서 debian-transmission 에 소유를 주거나 쓰기 권한을 주면 된다고 적고 있다. 또는 나처럼 무식하게 777 권한을 주는 것도 (조금 많이 위험하지만) 방법이다.

------

via

- [Transmission CLI User Guide | cli-ck](https://cli-ck.io/transmission-cli-user-guide/)
- [라즈베리파이 토렌트 머신 - Transmission-daemon 설치 및 세팅 :: JHEM Lab](http://vvchunvv.tistory.com/37?category=261867)
- [linux - Permission Denied on my raspberry pi transmission - Super User](https://superuser.com/questions/1237244/permission-denied-on-my-raspberry-pi-transmission)

