---
title: Teams - ユーザーの UPN を変更した場合の影響
date: 2021-5-14 15:00:00
tags:
  - Microsoft Teams 
---
# Teams - ユーザーの UPN を変更した場合の影響

こんにちは。Unified Communications サポート チームの吉井です。いつも Microsoft Teams をご利用いただきありがとうございます。 
今回は、よくお問合せのある、ユーザーの UPN を変更した場合の Microsoft Teams への影響についてご紹介します。

ユーザー管理において、様々なご事情でユーザーの UPN を変更する必要があるかと存じますが、UPN は多くのサービスで利用されているため、それぞれのサービスでの影響をきちんと把握しておくことが重要になります。
今回は、Microsoft Teams サービスに限定して、ユーザーの UPN の変更の影響をご案内いたします。
ぜひユーザー管理の参考にしていただければ幸いです。
※ オンプレミス環境とのフェデレーションを組んでいる場合や、ゲストユーザーとして他テナントに招待されている場合などには影響範囲が異なりますことをご留意ください。<br>

ユーザーの UPN を変更した場合、永続的な影響と一時的な影響の 2 つがあり、それぞれ対応が必要となります。

### 永続的な影響
#### 共有ファイルのリンク
UPN 変更前の 1 対 1 のプライベート チャット、グループ チャットで共有したファイル (ハイパーリンク) へのアクセスが出来なくなります。

Teams のチャットで共有したファイルは、共有したユーザーの OneDrive for Business の領域に保存され、共有した相手には当該ファイルへのファイルパスとアクセス権が付与される動作となります。
ユーザーの UPN は該当ユーザーの OneDrive for Business サイトの URL に使用されており、UPN が変更される事により、この OneDrive for Business の URL も変更されます。
しかしながら、既にチャット内で共有されているリンクについては、自動的に新しい URL に更新されません。
そのため、UPN 変更前に共有したファイルに関しては、再度共有しなおす必要があります。  

＜参考情報＞  
Title : UPN の変更が OneDrive の URL と OneDrive の機能に与える影響  
URL : https://docs.microsoft.com/ja-jp/onedrive/upn-changes　  

Title : Microsoft Teams との SharePoint Online と OneDrive for Business の連携  
URL : https://docs.microsoft.com/ja-jp/microsoftteams/sharepoint-onedrive-interact　  
<br>

### 一時的な影響
ユーザーの UPN 変更後に、旧 UPN でサインインしていたサービスから警告が表示されることがあります。
その場合には、一度サインアウトし、サインインし直して警告が表示されなくなることを確認してください。  
※ 旧 UPN で割り当て済みのライセンスの再認証は不要です。

また、UPN の変更はテナントへの変更となるため、システム的な変更の反映に時間がかかる場合があります。
システム側での変更の反映中に、各種サービスに一時的にログインができなくなることもありますが、その場合にはしばらくお待ちいただいてから再度新 UPN でのアクセスをお試しください。  
※ 変更の反映までに通常 24 ～ 48 時間程となりますが、サーバーの負荷状況により前後する可能性があります。

UPN の変更に当たっては、各種サインイン情報のキャッシュの影響で問題が起こることもございます。
そのため、UPN 変更後に当該ユーザーの端末にて、キャッシュ削除および認証情報の削除を実施することをおすすめしております。

```
★ キャッシュ削除および認証情報の削除方法
1. 以下のフォルダを削除します。
%USERPROFILE%\AppData\Roaming\Microsoft\Teams
%LocalAppData%\Microsoft\IdentityCache 
 
2. 資格情報マネージャーを起動します。
3. [Windows 資格情報] 欄から、“msteams” で始まるものを削除します。

4. 以下のフォルダおよびファイルを削除します。
%LocalAppData%\Google\Chrome\User Data\Default\Cache
%LocalAppData%\Google\Chrome\User Data\Default\Cookies
%LocalAppData%\Google\Chrome\User Data\Default\Web Data

5. PowerShell を起動して下記 2コマンドを実行します。(IE/Edge のクッキーとインターネット一時ファイルを削除します)
RunDll32.exe InetCpl.cpl, ClearMyTracksByProcess 8
RunDll32.exe InetCpl.cpl, ClearMyTracksByProcess 2
```
