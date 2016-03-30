![](Resources/2016-03-30/bluetooth_not_available.jpeg)

Mac mini에서 El Capitan을 사용하던 중 위 사진과 같은 아이콘이 뜨면서 블루투스 연결이 완전히 비활성화 되는 것을 경험했습니다. 어쩔 수 없이 강제로 리부팅을 한 후에 찾아본 해결책을 공유하고자 합니다.

잠시 찾아보니 백투더맥에는 아직 올라오지 않은 방법부터 소개합니다. 옵션키가 맥 사용의 알파이자 오메가라는 것은 많이 배웠지만 블루투스 아이콘을 옵션 키만을 누른 채로 클릭하면 세부사항이 나옵니다. 하지만 여기서 쉬프트 키도 같이 누르고, 즉 Shift + option + 블루투스 아이콘을 클릭하면 디버그 메뉴 항목이 나타납니다. 디버그 항목에서 Bluetooth 모듈 재설정을 눌러주시면 됩니다.

![](Resources/2016-03-30/bluetooth_debug_menu.png)

두 번째는 Finder에서 /Library/Preferences 디렉터리에 있는 com.apple.Bluetooth.plist 를 삭제하는 방법입니다. 첫 번째 방법을 수행한 시점에 plist 파일이 재생성 된 것으로 보아 첫 번째 방법과 효과는 동일할 것으로 추측합니다.

![](Resources/2016-03-30/com.apple.bluetooth.plist.png)

세 번째는 익히들 알고 계시듯이 SMC를 재설정하는 것입니다. 자세한 설명은 [백투더맥 블로그 게시물](http://macnews.tistory.com/742)을 읽어보시면 될 것 같습니다.

- - -

이미지 : [google: banganet.me](https://www.google.co.kr/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=0ahUKEwjruIDIsejLAhUI26YKHdMaA4MQjRwIBw&url=http%3A%2F%2Fwww.banganet.me%2Fapple%2FMacBook-Pro%2F66435-Bluetooth-not-available-after-El-Capitan-upgrade&psig=AFQjCNGAFN-PzYK_xnK-btUhUA3VIwOJAA&ust=1459426346226829)
via [osXDaily](http://osxdaily.com/2015/12/15/reset-bluetooth-hardware-module-mac-osx/)
via [igeeksblog](http://www.igeeksblog.com/fix-bluetooth-not-available-error-mac/)