---
layout: post
title: 1Password 6.3.1 Changelog 한글 번역
published: true
---
당연히 비공식

# 6.3.1 (build [#631006](https://app-updates.agilebits.com/product_history/OPM4#631006))

중간 생략

## 개선

- 안전한 서비스를 통해서만 아이템을 공유하도록 하는 알림과 함께 아이템 공유가 돌아왔습니다.
- 1Password를 처음 세팅할 때에 뒤로 가기 버튼이 제대로 VoiceOver를 지원합니다.
- 1Password를 처음 세팅할 때에 비밀번호 생성기는 이제 단어의 숫자도 알립니다.
- VoiceOver는 더 이상 사이드바 카테고리나 아이템 리스트에 있는 이미지 설명을 읽지 않습니다.
- "Account" 설정에서 로그아웃하는 방법을 더욱 명료하게 변경.
- 1Password Account 로그인 형식에서 VoiceOver 지원을 강화하여 텍스트 필드가 label과 이어지도록 함(음?)
- 셋업, 첫 화면에서 VoiceOVer 개선.
- "복사", "내용 표시", "크게 보기", 그리고 "브라우저에서 열고 채우기" 메뉴 아이템의 세부 화면에서 VoiceOver 지원 추가.
- 큰 글씨 화면의 VoiceOver 지원 추가.
- Crowdin의 번역가들로부터 받은 번역으로 갱신.

## 수정

- 아이템이 같은 이름을 가지고 있으나 다른 프로필로 되어 있을 때 잘못된 프로필을 가져올 수 있는 문제 해결.
- 드물게 로그인이 현재 페이지와 맞지 않는 문제 해결.
- 1Password 계정으로 동기화 할 때 유효하지 않은 타임스탬프가 만들어지거나 업데이트되는 문제 해결.
- 로그인 화면에서 장식용 이미지 뷰에 대해서 VoiceOver 지원 제거.
- 메인 앱이 백그라운드에서 작동하고 있는 경우 mini에서 금고를 변경하였더라도 메인 앱에 바로 반영되지 않는 문제 해결.

- - -

VoiceOver 위주로 마이너한 업데이트가 이루어진 모양.


- - -
1Password for Mac 6.3.1 is now available.

# 6.3.1 (build [#631006](https://app-updates.agilebits.com/product_history/OPM4#631006))

While it has not even been a fortnight since the release of 1Password 6.3, we've been working non-stop on 1Password 6.3.1 and decided we didn't want you to wait for it any longer. Today's update brings a large number of VoiceOver improvements for our customers whose vision is impaired.

Releases like this are driven by your feedback, so thank you for reaching out and letting us know what needed tending to. Until next time!

## IMPROVEMENTS

- Item sharing has returned with proper advice for sharing only over secure services. {OPM-4076}
- When first setting up 1Password the back buttons shown there now properly support VoiceOver. {OPM-4139}
- The password generator shown when first setting up 1Password now announces the number of words. {OPM-4145}
⁃ VoiceOver no longer reads the image descriptions in sidebar categories or item list. {OPM-4148}
⁃ We made it more clear how to sign out of an account in the "Accounts" preferences. {OPM-4133}
⁃ Improved VoiceOver support in the 1Password Account login form so that the text fields are associated with their labels. {OPM-4144}
⁃ Improved VoiceOver in the setup & welcome screens. {OPM-4141}
⁃ Added VoiceOver support for the "Copy", "Reveal", "Large Type", and "Open and Fill" menu items on the item details screen. {OPM-4136}
⁃ Added VoiceOver support to the Large Type window. {OPM-4140}
⁃ Updated our translations with the latest from our incredible translators on Crowdin.

## FIXED

⁃ Fixed an issue where the Import window could select the wrong profile if it had the same name as another profile. {OPM-4063}
⁃ Fixed a rare issue where some Logins were not properly matching to the current web page.
⁃ Fixed an issue that could cause items with invalid created/updated timestamps from syncing with 1Password accounts. {OPM-4157}
- Removed VoiceOver interactivity for the ornamental image views on the login screen. {OPM-4150}
- Fixed an issue where vault switching in mini was not instantly mirrored in the main app if it was in the background. {OPM-3523}
