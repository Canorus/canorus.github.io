---
layout: post
title: MacID for OSX & iOS 1.3.4 Changelog 한글번역
---

~~발번역~~

## MacID for OSX

## 변경 사항

MACID for iOS도 업데이트하여 App Store에서 변경된 점도 확인하십시오

## 새로운 사항

- Terminal이 활성화 되어 있을 때 Tap to Unlock 기능을 허용할 때 옵션 추가. MacID는 Terminal에서 패스워드를 요청하는지 알 수 없으므로, Tap to Unlock 버튼을 통해서 패스워드를 입력하면 터미널 창에 root 패스워드가 입력된다는 점을 유념해주십시오.
- 맥 앱스토어에서 비밀번호를 요청할 때 알림 기능 추가. 이 기능이 제대로 작동하기 위해서는 맥의 패스워드와 앱스토어 계정 패스워드가 일치해야 합니다.
- 위 기능을 활성화하는 것은 또한 맥 앱스토어에서 Tap to Unlock 기능을 활성화하게 됩니다.
- 잠금 화면 메뉴 항목의 크기 증가.
- 재연결 시간 개선.
- 몇몇 옵션을 More 메뉴의 하위 항목 Advanced로 이동.
- 새로운 색깔 테마 지원.
- 관리자 권한을 요청하는 경우 시스템이 실제 패스워드를 묻는 경우에만 요청을 보내는 방향으로 개선.
- 모든 디바이스를 기본 기기로 만드는 설정 추가.
- deep sleep에서 깨어날 때 Tap to Unlock의 반응성 개선.
- "기기 검색 중" 과정에서 기기 검색 과정 중단 옵션 추가. 이 기능은 집에서 떠나 있을 때 다수의 기기 중에서 검색할 필요가 없을 때 특히 유용합니다.
- 클립보드 전송에서 4000자 제한을 철회.

## 개선

- 패스워드 셋업 과정 중에 디바이스 연결 해제 및 재연결이 셋업 윈도우를 닫아버리는 문제 해결.
- 블루투스 스캐닝은 이제 각 연결 시도 사이에 멈추어 cfprefsd CPU 사용량을 줄입니다.
- 맥 기기에서 화면보호기가 작동하고 있을 때에 iOS 디바이스가 연결되면 잠금해제 요청을 보내면 잠금화면이 보이지 않는 문제 해결.
- 근접 깨우기가 계속해서 return키를 작동시키는 문제 해결.
- 계정이 관리자 계정이 아님에도 권한 상승 요청을 보내는 문제 해결.
- 몇몇 자동 잠금 옵션을 선택하는 경우 배터리로 작동하는 경우에만 한정시키는 옵션을 활성화시키는 문제 해결.
- MacID가 새 기기를 검색한 다음에도 스캐닝을 멈추지 않는 문제 해결.
- MacID는 이제 알림을 보낼 때 자동으로 활성화되어 VoiceOver 이용자들에게 더 좋은 경험을 제공합니다.
- 잠금화면 아이콘이 늘 나타나지는 않는 문제 해결.
- Spotify와 관련한 크래쉬 문제 해결.
- 연결 해제되면 화면 잠금 옵션이 실채하는 문제 해결.
- 기본 기기의 페어링 제거에도 불구하고 다른 기기를 기본 기기로 채택하지 않는 문제 해결.
- 재연결을 선택했음에도 실제로는 기기를 검색하면서 "검색중" 표시를 나타내지 않는 문제 해결.
- "제거"를 선택하는 경우 알고 있는 기기를 앱 제거 전에 다시 저장하는 문제 해결.
- 근접 깨우기가 상충되는 옵션으로 설정되었음에도 자동 잠금 메뉴가 제대로 비활성화되지 않는 문제 해결.
- 셋업 과정 중에서 continue 버튼을 여러 차례 누르면 동일 기기의 다수 인스턴스를 알려진 주변 기기로 저장하는 문제 해결.

## 알림

나(개발자)는 화면 보호기에서 맥이 잠겼음을 보이는 문제를 해결하려 하였다. 자세한 사항은 blog에서 읽을 수 있으나, 이 문제는 내(개발자)가 해결할 수 있는 문제가 아니다.

# MacID for iOS

## 새 기능

- MacID for Apple Watch 세팅 화면을 시계 워치 앱 자체에 추가.
- 워치 화면의 아랫부분에 있는 작은 기어를 눌러 새 기능을 볼 수 있습니다, 예를 들어 MacID complication에서 얼마나 많은 기기들이 연결되었는지, 잠겼는지, 혹은 둘 다를 볼 수 있습니다! *군중 열광*
- MacID for Apple Watch의 버전을 새로운 MacID for Apple Watch에서 확인하여, 알맞는 버전이 워치에 설치되었는지 알 수 있습니다.
- 새로운 홈화면 단축 버튼을 생성할 때, 저장하는 Safari 페이지는 선택된 색 테마를 사용합니다. 오!
- 홈화면 단축 버튼 아이콘 역시 선택된 색 테마를 사용하며 더 깔끔한 디자인을 보여줍니다. 두번 오!
- URL scheme은 이제 각 URL마다 다수의 맥을 다룰 수 있습니다. 그냥 MacID가 할 수 있는 멋진 것들 리스트에 추가합니다.
- 새로운 "잠금해제" URL scheme을 추가했습니다 - Touch ID를 꺼놓은 채로 이 scheme을 사용하면 Touch ID 없이도 맥이 잠금해제 될 수 있게 해줍니다.
- 더 아름다운 색 테마를 추가해서, MacID for OSX와 MacID for Apple Watch와 호환되게 했습니다.
- 애플 워치 알림 디자인을 수정했습니다(불행히도 색은 아직 코드에서 변경할 수 없어서 나(개발자)는 색 테마와 같이 작동하게 할 수 없었습니다. *매우 슬픈 표정*)
- 애플 워치가 활성화 된 상태에서 잠금 해제 요청을 받게 되면 app 어디에서나 대응할 수 있습니다.
- 설정의 네비게이션 바를 길게 누르고 있으면 처음으로 돌아갑니다. MacID가 매우 개인화가 가능해지면서 매우 요긴합니다.
- 전력 절약 옵션을 추가했습니다. - 저전력 모드를 위해서 MacID가 연결을 위해 어떻게 자원을 쓰는지 정할 수 있습니다.
- MacID for Pebble의 옵션을 추가했습니다. - MacID for Pebble이 모든 잠금 해제 세션에 대해서 작동할 지, 근접 깨우기 요청에 대해서만 작동할 지, 아니면 아예 작동하지 않을 지를 정할 수 있습니다.
- 기기 간 클립보드 전송에서 4000자 제한을 없앴습니다. 만일 전쟁과 평화 텍스트 전체를 맥으로 보내고 싶었다면 이제 할 수 있습니다, 그 긴 시간을 기다릴 수만 있다면요 😐

## 수정 사항

- 아주아주 스타일리쉬한 여러 대의 애플 워치를 한 대의 아이폰에 연결해서 쓰는 분들은, 운이 좋습니다! 이제 MacID는 서로 간의 전환을 더 잘 지원합니다.
- 새로운 설치 이후에 MacID for Apple Watch의 안정성을 개선했습니다.
- 위젯이 보이는 도중에 연결 해제 되면 오늘의 위젯이 업데이트 되지 않는 문제 해결.
- 크래쉬 리포트에서 발견된 다양한 자잘한 크래쉬들을 수정했습니다. iOS에서 리포트를 보내주신 모든 당신들께 감사합니다.
- 단축키를 생성하는 것에 실패하는 문제 수정.
- MacID for Apple Watch의 진동 옵션을 새로운 설정 화면으로 이동.
- MacID for Apple Watch를 오디오 화면에 남겨놓았더라도 화면을 켰을 때 현재 재생 중인 곡을 정상적으로 반영.
- 맥에서 연결해제 되면 그 맥의 MacID for Apple Watch 오디오 컨트롤이 자동으로 숨겨집니다.
- 근접 깨우기가 아닌 요청에 대해 MacID for Apple Watch에서 Snooze 옵션 제거
- Watch 앱에서 앱이 열려있는 동안 어느 종류의 알림을 받든지 잠금 해제 요청을 보여주는 문제 해결.
- iOS 앱이 iOS에 의해서 복구되었을 때 complication이 연결된 맥의 숫자를 잘못 보여주는 성가신 문제 해결.
- 너무 많은 데이터가 이동하려고 하여 complication이 정상적으로 반영되지 않는 문제 해결.
- 특정한 명칭을 가지고 있는 일부 블루투스 기기에 대하여 앱이 크래쉬하는 문제 해결.

- - -

애플워치 관련한 개선이 많은데 얼른 애플워치를 사든가 해야지 원… (?)

- - -

아래는 원문

- - -

# MacID for OSX

## Changes in v1.3.4

Make sure you update MacID for iOS and check out the App Store release notes for all the info on what's new there too!

## New:

- Adds option to allow Tap to Unlock to work when Terminal is active. Note that MacID has no way of knowing if Terminal is asking for a password, so successfully tapping your tap pattern will always input your password into the window.
- Adds an option to notify you when the Mac App Store is asking for a password. For this to work properly your Mac's account password must be the same as your App Store account password.
- Enabling the feature above also enables Tap to Unlock for the Mac App Store.
- Increases the size of the lock screen menu item.
- Improves reconnection times.
- Moves some options to a new "Advanced" menu in the More menu.
- Includes support for new colour schemes.
- Improves elevated auth requests by only sending a request if the system is asking for an actual password.
- Adds an option to make any device the primary device.
- Improves Tap to Unlock responsiveness when waking from deep sleep.
- Adds an option to stop searching for devices when it's in the "Looking for..." stage. This is useful if you have multiple devices paired but don't need it to scan for some of them while you're away from home, for example.
- Lifts the 4000 character limit on sending clipboard text.

## Fixed:

- Fixes an issue where a device disconnecting and reconnecting during password setup could cause the setup window to close.
- Bluetooth scanning now 'pauses' between each connection attempt to help alleviate cfprefsd CPU issues.
- Fixes an issue where an unlock request would get sent if an iOS device connects while the screensaver is running but the lock screen isn't visible.
- Fixes an issue where Proximity Wake would continually press the return key.
- Fixes an issue where elevated auth requests would get sent even if the account isn't an admin account.

- Fixes an issue where selecting some Auto-lock options would cause "Limit to battery power" to become enabled.
- Fixes an issue where MacID would MacID wouldn't stop scanning after searching for new devices.
- MacID now forces itself to activate when showing alerts so it's better for VoiceOver users.
- Fixes an issue where the lock screen icon may not always appear.
- Prevents a Spotify-related crash.
- Prevents an issue where "lock on disconnect" may fail.
- Fixes an issue where forgetting a primary device wouldn't automatically assign a new primary device.
- Fixes an issue where choosing "Reconnect" wouldn't show that it's "Looking" even though it was searching for the device.
- Fixes an issue where choosing "Uninstall" would re-save known devices just before uninstalling.
- Fixes an issue where the Auto-lock menu wouldn't properly disable items if Proximity Wake was set to a conflicting option.
- Fixes an issue where clicking the continue button multiple times during setup would cause multiple instances of the same device to be saved as a known peripheral.

## Notes:

I've looked into the issue of the screensaver always reporting that the Mac is locked. You can read more about the issue on the blog, but it's not something I can fix.

# MacID for iOS

## NEW STUFF

- Adds new MacID for Apple Watch settings screen in the watch app itself
- Tap the little cog at the bottom of the screen on your watch & see new features such as being able to choose whether the MacID complication shows how many devices are connected, locked, or both! *crowd goes wild*
- You can now view the MacID for Apple Watch version in the new MacID for Apple Watch settings screen, so you can know for sure the right version has been installed on your watch
- When creating new home screen shortcuts, the Safari page where you save to the home screen now uses your chosen color scheme. Ooh!
- Home screen shortcut icons also now use your chosen color scheme and have a cleaner design. Double ooh!
- URL schemes can now handle multiple Macs per URL. Just add that to the list of awesome stuff MacID can do
- Adds new “unlock” URL scheme – using this scheme with Touch ID disabled in the app will allow your Mac to be unlocked using a URL scheme without having to use Touch ID
- Adds even more beautiful color schemes, which work on MacID for OS X and MacID for Apple Watch
- Updated Apple Watch notification design (unfortunately the color isn’t customizable in code yet so I can’t make the color schemes work with it. *more sad face*)
- If you receive an unlock notification while MacID for Apple Watch is active you can now action it from anywhere in the app

- You can now long-touch on the Settings navigation bar at the top to jump back to the start. Handy as MacID is getting so customizable with more options!
- Adds power saving options – you choose how MacID throttles the connection to save power for Low Power Mode
- Adds new MacID for Pebble options – you choose if MacID for Pebble automatically launches for all unlock requests, just Proximity Wake requests, or none
- Lifts 4000 character limit on sending clipboard text between devices. If you wanted send over the whole text of War & Peace to your Mac you could, if you had time to wait that long anyway 😐

## FIXED STUFF

- For those of you who are super duper fancy and have multiple Apple Watches paired to one iPhone, you’re in luck! MacID now handles switching between them even better
- Improves reliability of MacID for Apple Watch after a new install
- Fixes an issue where the Today widget wouldn’t update if a device disconnects while the widget is visible
- Fixes various little crashes discovered through crash reports. Massive thank you to all of y’all who have that turned on in iOS
- Fixes an issue where creating shortcut items could fail
- Moves MacID for Apple Watch haptic options to the new settings screen in the watch app
- Leaving MacID for Apple Watch on the audio screen will now properly update the currently playing track when you wake the screen
- MacID for Apple Watch audio controls now automatically dismiss themselves if that Mac disconnects
- Removes “snooze” option from non-Proximity Wake requests in MacID for Apple Watch

- Fixes an issue where receiving a MacID notification of any kind while the watch app is active would show an unlock request
- Fixes a pesky issue where the complication could show the wrong number of Macs connected if the iOS app was restored in the background by iOS
- Fixes an issue where the complication wouldn’t update because there was too much data trying to be sent across
- Fixes an issue which could cause the app to crash when trying to advertise Bluetooth with certain device names

- - -

via [What’s new in MacID v1.3.4](https://macid.co/blog/2016/05/31/whats-new-in-macid-v1-3-4/)