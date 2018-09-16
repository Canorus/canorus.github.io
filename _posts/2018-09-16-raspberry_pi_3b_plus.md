---
layout: post
title: 라즈베리 파이 3B + 구입 및 세팅기
---

한동안 바쁘게 지내느라 블로깅에 소홀했습니다. 이래저래 재밌는 일이 많았거든요. 우선 라즈베리 파이 3B+ 구입한 이야기부터 적어볼까 합니다.

![raspberry pi 3B+](/images/2018-09-16/3b+.jpg){.center-image}

기존에 있던 라즈베리 파이를 이태원으로 보내고 나서 그냥 그냥 지내다가 개인적인 이유로 테스트용 백엔드 서버를 구동할 필요가 생겼습니다. 뭐 AWS 같은 걸 써도 좋았겠지만 라즈베리 파이 하나 정도는 쟁여두는 것도 좋을 법해서 질렀습니다.

의외로 인클로저를 마음에 드는 걸 구하기가 쉽지 않더군요. 3B+ 용 인클로저 디자인이 다양하지 않기도 했고 마음에 드는 디자인은 전부 3B 용 인데, 기판 디자인이 변경되면서 3B+ 와는 호환이 되지 않는 게 컸습니다.

그래서, **그냥 3B용으로 질렀습니다**. *안 맞는 부분은 잘라내면 되겠지* 하면서 말이죠. [이 제품](https://www.eleparts.co.kr/goods/view?no=3817067#goodContent_4)이었는데 받고나서 굳이 3B+ 모델과 호환이 불가능하다고 빨간 글씨로 적어놓은 이유를 깨달았습니다.

![enclosure cut](/images/2018-09-16/3b+_cut.jpg){:.center-image}

인클로저 안쪽에 뚫린 구멍에 실톱을 넣어서 각 층을 잘라내고 줄로 다듬은 모습입니다. 알고보니 POE 핀이 생긴 것 외에도 칩 위치가 미묘하게 바뀌면서 아래쪽까지 절개 작업을 해주어야 했습니다. 아래쪽으로도 핀이 박히니 아래판도 똑같이 작업을 해주어야 했구요.

그렇게 작업을 하고 난 후에도 쿨링 팬이 들어가는 위치가 미묘하게 칩과 맞지 않습니다. 이건 원래 3B 때부터 그런건지 3B+에서 칩 위치도 바뀐건지는 모르겠습니다. 팬도 중간에 제조사가 바뀌었다고 하는데 캡쳐 이미지와도 다른 데다가 핀 꽂는 지침도 제공이 안 되어서 직접 찾아보아야 했습니다. 다행히 GPIO 포트에 대해서 문서화가 되어 있더군요. [Raspberry forum - GPIO Documentation](https://www.raspberrypi.org/documentation/usage/gpio/README.md)

다행히 기판에 손상은 가지 않았는지 부팅은 정상적으로 됩니다. 집에 남는 SD카드가 없어서 임시로 128GB짜리 마이크로 SD 카드를 끼워줬는데 덕분에 라즈베리 파이 주제에 저장 공간이 제 맥북과 비슷한 라즈베리 파이 시스템이 동작하고 있습니다. 임시용 나스로도 쓸 수 있을 것 같습니다.

Synology 나스에 비해서 좀 더 자유롭게 쓸 수 있는 게 장점인 듯 합니다. 아무래도 Synology는 나스에 특화된 OS를 싣고 있다보니 생각대로 안 되는 게 너무 많더라구요. 라즈베리 파이는 용량이 좀 작은 게 흠이기는 합니다. 뭐 그거야 외장 하드를 물리면 될 일이니까요.

사실 Ubuntu Mate를 설치하고 싶었습니다만 삽질하다가 결국 포기했습니다. Raspbian에서 파일을 옮겨서 부팅에 성공했다는 기록이 있는데 시간이 부족하여… Raspbian으로 설치를 진행했는데, Raspbian도 나쁘지 않은 것 같습니다. Ubuntu Server는 계속 업데이트가 되고 있다고 하니 언젠가는 Ubuntu Server도 깔아볼까(쿨럭) 싶긴 해요.

여하튼 애초 목적대로 이 파이는 백엔드 연습용 파이로 활용할 예정입니다. 지금은 nginx 설치해서 웹 서버로 쓰면서 MariaDB와 연계하는 연습이랑 Python까지 연계하는 연습을 하고 있습니다. 어디까지 활용할 수 있을지 기대하고 있습니다.

------



### installing nginx

- [Setting up an NGINX web server on a Raspberry Pi - Raspberry Pi Documentation](https://www.raspberrypi.org/documentation/remote-access/web-server/nginx.md)
- [Secure your website for free on Nginx with Let's Encrypt SSL - Tutorial](https://www.stewright.me/2017/01/add-ssl-nginx-site-free-lets-encrypt/)

### MariaDB

- [MariaDB Tutorial](https://www.tutorialspoint.com/mariadb/index.htm)

