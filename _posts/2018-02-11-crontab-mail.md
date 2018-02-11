---
layout: "post"
title: "Crontab mail"
date: "2018-02-11 21:06"
---
![crontab](https://d.pr/i/DteLSd+){:.center-image}

애플은 Crontab보다는 launchd를 쓰는 것을 권장합니다만 역시 .plist 파일을 귀찮게 쓰는 것보다는 Crontab에서 job을 작성해주는 게 편하고 쉽습니다. 문제는 Crontab에서 job을 실행할 때 마다 mail을 보내온다는 점이죠.

기본적으로 crontab에서 job을 실행하고 보내온 메일은 `mail` 명령어를 입력해서 읽을 수 있습니다.

![mailtoblank](https://d.pr/i/l0kOuD+){:.center-image}

**1\.** crontab 리스트의 맨 윗 줄에 위와 같이 적는 방법. 전체 작업에 대해 메일이 발송되지 않습니다.

![message null](https://d.pr/i/Eh6w3k+){:.center-image}

**2\.** 개별 메세지의 출력을 null로 만드는 방법

- - -

\+ 터미널 투명도를 0으로 바꾸고 블러처리 후 폰트 색을 흑백 50%로 바꾸니 이것대로 예쁘군요.

- - -
- via [mapoo's blog](http://mapoo.net/uncategorized/crontab-실행-후-mail-발송-금지/)
