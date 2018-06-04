---
layout: post
title: macOS 10.13 eGPU 삽질기
menu: private
tags: 
 - troubleshooting
 - personal
---

언제나 그렇듯이 시작은 별 거 아닌 일로 시작을 합니다. 앱스토어에 보안 업데이트가 떴고, 저는 아무 생각없이 설치 버튼을 누르는 거죠.

그리고 화면이 안 켜집니다.

맥북 에어에서 SSH로 맥 미니에 접속을 한 다음에 `automate-eGPU.sh` 스크립트를 실행합니다. 역시 반응이 없습니다.

긴 밤이 될 것 같은 예감과 함께 맥 미니 뒷편에 HDMI 케이블을hwrh 서브 모니터에 DVI 포트를 연결합니다. 그리고 아래와 같은 메세지를 맞닥뜨립니다.

![web driver not compatible](/Resources/2018-06-04/2104-NVIDIADriverManager.png)

\* image from [egpu.io forum](https://egpu.io/forums/mac-setup/no-drivers-found-for-os-x-10-12-5/#post-14343)

버전은 좀 다릅니다만.

[찾아보니](https://www.insanelymac.com/forum/topic/324195-nvidia-web-driver-updates-for-macos-high-sierra-update-06012018/) 10.13.5가 릴리즈되었을뿐만 아니라 훨씬 높은 빌드가 배포되고 있습니다. 경험상 10.13.5 정도면 업그레이드해도 크게 문제가 없기 때문에 빠르게 설치 이미지를 내려받습니다.

설치하는 도중에 [11.3.1의 취약점 배포가 임박](https://www.insanelymac.com/forum/topic/324195-nvidia-web-driver-updates-for-macos-high-sierra-update-06012018/)했다는 iDB 뉴스를 보고 ipsw도 같이 내려받습니다. 업데이트가 끝나면 바로 판올림할 생각이었습니다. 물론 업데이트는 생각보다 많이 걸렸고 결국 다음날 정오가 돼서야 판올림 작업을 시작했지만요.

10.13.5의 설치 이미지를 내려받는 데는 30분 정도 밖에 걸리지 않았습니다만 설치하는 데는 하루 밤이 꼬박 걸리더군요. 결국 다음날 아침이 돼서야 eGPU 드라이버 잡는 작업을 시작할 수 있었습니다.

### 정공법

일단 [Nvidia eGPU support for High Sierra](https://egpu.io/forums/mac-setup/wip-nvidia-egpu-support-for-high-sierra/#post-22370) 글의 안내에 따라서 작업을 수행해 봅니다.

**1\.** Info.plist 변조를 원상복구하고 [PurgeWrangler](https://egpu.io/forums/mac-setup/script-enable-egpu-on-tb1-2-macs-on-macos-10-13-4/)를 설치.[^1]
**2\.** [webdriver](https://github.com/vulgo/webdriver.sh)로 Nvidia 웹 드라이버를 설치. 이 상태에서는 반드시 SIP(System Integrity Protection)가 활성화되어 있어야 함.  
**3\.** 드라이버 설치가 끝나면 SIP를 비활성화하고 각자 버전에 맞는 [NVDAEGPUSupport](https://egpu.io/forums/mac-setup/wip-nvidia-egpu-support-for-high-sierra/#post-33831)를 설치.  

[^1]: High Sierra에서는 TB3와 AMD 카드인 경우 기본으로 eGPU를 쓸 수 있게 만들어 놓았습니다. 여기서 TB3 제한을 TB2와 TB1으로 해제해 주는 역할을 한다고 합니다.

하라고 되어 있습니다만 안타깝게도 위 방법으로는 성공을 못 했습니다.

### 질러가는 길

이런 기괴한 셋업을 사용함에 있어서 질러가는 길은 그리 좋은 방법이 아닌 경우가 대부분입니다만 정공법이 통하지 않고 제게는 시간이 많지 않으므로 울며 겨자먹기로 질러갑니다. fr34k이 만든 [⍺ 버전 스크립트](https://egpu.io/forums/mac-setup/script-fr34ks-macos-egpu-sh-one-script-all-solutions-fully-automated/#post-35722)가 있습니다.

설치하면 굉장히 예쁜 로그가 찍히면서 eGPU를 활성화합니다.

```
Canor@Canors-Mac-mini:~$ bash <(curl -s https://raw.githubusercontent.com/learex/macOS-eGPU/master/macOS-eGPU.sh)



macOS-eGPU.sh (v0.2α)

USAGE TERMS of macOS-eGPU.sh
#   1. You may use this script for personal use.
#   2. You may continue development of this script at it's GitHub homepage.
#   3. You may not redistribute this script or portions thereof from outside of it's GitHub homepage without explicit written permission.
#   4. You may not compile, assemble or in any other way make the source code unreadable by a human.
#   5. You may not implement this script or portions thereof into other scripts and/or applications without explicit written permission.
#   6. You may not use this script, or portions thereof, for any commercial purposes.
#   7. You accept the license terms of all downloaded and/or executed content, even content that has only indirectly been been downloaded and/or executed by macOS-eGPU.sh.
#
#   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
#   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
#   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
#   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
#   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
#   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
#   THE SOFTWARE.

Do you agree with the license terms of the script and wish to continue?
[y]es [n]o : y



The script will now close (kill) all programs.
Please abort the script now should you wish to do it manually and save your work.
Please do not, under any circumstances abort the script later during the execution.
This might break your system.

The script might automatically reboot the system after successful execution.
To safely abort the script now, press ^C.
Continuing in
15..
14..13..12..
11..
10..
9..
8..7..6..5..
4..3..2..1..0





macOS-eGPU.sh (v0.2α)

Accept license terms...                                                   [done]
Killing all other running programs...                                       [OK]

--- installing short command ---
   elevating privileges
   Password:
Sorry, try again.
Password:
   checking for elevated privileges                                         [OK]
now the script can be used like this (internet is required):
macos-egpu [parameters]
7..6..5..4..3..2..1..0
--- short command end ---

Fetching system information...
   macOS info                                                             [done]
   system integrity protection                                            [done]
   thunderbolt version                                                    [done]
   GPU information                                                        [done]
   installed eGPU software                                                [done]
   installed patches                                                      [done]
   installed programs                                                     [done]
Setting internal switches...
Fetching CUDA needs...
   fetching CUDA requiring apps list                                      [done]
   preparing matching                                                     [done]
   matching                                                               [done]
Checking for incompatibilies and up to date software...
   NVIDIA drivers                                            [install scheduled]
   NVIDIA eGPU enabler                                        [update scheduled]
   AMD legacy drivers                                                     [skip]
   T82 unblocker                                                          [skip]
   NVIDIA dGPU deactivator                                                [skip]
   macOS 10.13.4 NVIDIA patch                          [skip, already installed]
   macOS 10.13.4 thunderbolt 1/2 unlock             [skip, tb2 already unlocked]
   CUDA software
      CUDA drivers                                           [install scheduled]
      CUDA developer driver                                               [skip]
      CUDA toolkit                                                        [skip]
      CUDA samples                                                        [skip]
   thunderbolt daemon                                                     [skip]
Checking if SIP is sufficently disabled...                                  [OK]


Download external content...
--- NVIDIA drivers ---
######################################################################## 100.0%
--- NVIDIA eGPU enabler ---
######################################################################## 100.0%
--- CUDA driver ---
######################################################################## 100.0%


Checking for elevated privileges...


Uninstalling...
   NVIDIA eGPU support                                                    [done]
Installing...
   NVIDIA driver                                                          [done]
   NVIDIA eGPU support                                                    [done]
   CUDA                                                                   [done]
Patching...
deactivating auto-updates...
   CUDA                                                                   [done]


Finish...
   cleaning system                                                        [done]
Rebuilding caches
   kext cache                                                             [done]
   system cache                                                        [   done]
   dyld cache                                                             [done]
A reboot of the system is recommended.
```

아마 뭔가 드라이버 쪽에서 설치하는 데 문제가 있었던 걸로 보입니다. 이번에는 제대로 설치가 되었나 보네요.

거의 12시간 가까운 우여곡절 끝에 eGPU는 다시 작동하고 다시 정상적인 모니터로 돌아왔습니다. 감개가 무량하군요.
