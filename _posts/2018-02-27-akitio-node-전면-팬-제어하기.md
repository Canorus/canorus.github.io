---
layout: "post"
title: "2월 27일;Akitio Node 전면 팬 제어하기"
date: "2018-02-27 22:21"
tags:
  - study
  - arduino
---

<p style="text-align:center"><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/0pfpvu25aW4?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></p>

<br/>

Akitio Node eGPU 박스를 사고 나서 가장 큰 불만은 역시 소음이 심하다는 것이었습니다. 때문에 [파워 서플라이도 교체](https://canor.cf/2018/02/08/akitio-node-psu-교체하기/)하고 전면 팬도 교체했죠.

우습게도 교체한 녀석이 더 시끄러웠다는 점인데 그렇다고 끄고 케이스를 씌우자니 내부 온도가 걱정이 되었더랍니다. 그래서 껐다 켰다 하는 방법을 고민하게 되었습니다.

처음에는 스위치로 제어를 하려고 했는데 그러면 자동화를 못 하기 때문에 아두이노로 제어하게 되었죠. 기왕이면 블루투스로다가.

기본적인 아이디어는 간단합니다. 블루투스 모듈에서 신호를 받고 릴레이를 열었다 닫았다 하는거죠. 릴레이에는 3 pin 쿨링 팬으로 나가는 전선의 + 극이 물려 있습니다.

여기서부터가 재밌는 부분인데 3 pin의 경우에는 AMP Molex 케이블의 4가닥 중에서 두 가닥만 쓰더군요. 즉 나머지 두 가닥은 놀게 됩니다.

[위키피디아 항목](https://en.wikipedia.org/wiki/Molex_connector)을 찾아보니 사용되는 가닥은 5V와 GND 선입니다. 즉 12V와 나머지 GND 한 가닥은 놀게 되는데 이걸로 아두이노 전원을 공급해주면 딱 알맞겠다는 계산이 나옵니다.

우선 사용된 코드는 아래와 같습니다.

```
#include <SoftwareSerial.h> // 블루투스 통신을 위한 SoftwareSerial 라이브러리를 불러온다.
#define pinLED 7 // 릴레이 제어 선은 7번
SoftwareSerial BTSerial(2,3); // SoftwareSerial(RX, TX)

char rcv_data;

void setup() {
  BTSerial.begin(9600); // 보드레이트 9600으로 블루투스 시리얼 통신 개방
  pinMode(pinLED,OUTPUT);
}

void loop() {
  if (BTSerial.available()){
    rcv_data = BTSerial.read();
    switch(rcv_data){
      case '0':
        //turn light off
        digitalWrite(pinLED,LOW);
        break;
      case '1':
        //turn light on
        digitalWrite(pinLED,HIGH);
        break;
    }
  }
}
```

- HC06 블루투스 모듈의 RX와 TX를 바로 아두이노의 TX와 RX에 꽂아버리면 USB 시리얼 포트로 코드 업로드가 되지 않기 때문에 2번과 3번 포트에 연결을 했습니다.
- 릴레이 스위치 제어 선은 7번 포트에, VCC는 5v, GND는 아두이노 GND 포트에
- 시리얼 모니터를 열고 0을 주면 연결이 끊어지고 1을 주면 연결이 되는(==회로가 닫히는) 코드입니다. 물론 릴레이에서 어떻게 연결을 했는지에 따라서 결과가 정반대로 나올 수는 있습니다만
- [CoolTerm](http://freeware.the-meiers.org)을 사용하면 IDE 시리얼 모니터를 열지 않고도 시리얼 통신이 가능합니다.
- 당연하지만 HC06 모듈 사용 전에 ATCOMMAND로 페어링 설정을 해 줄 필요가 있습니다. 이 부분은 인터넷에 조금만 쳐도 쉽게 나오니 패스.
- 원래는 'on'과 'off' 명령어로 작동하고 싶었는데 어째서인지 명령어를 인식을 못 합니다. strcmp() 써도 마찬가지
- 가장 큰 문젠데, 안정적으로 동작하지 않는 문제가 있습니다. 어떨 때는 되고 어떨 때는 안 되고 식입니다. 연결이 느슨한 건지 아두이노 태생적 한계인건지 불명. 인클로저가 와서 마무리 하기 전에 확인 필요.
