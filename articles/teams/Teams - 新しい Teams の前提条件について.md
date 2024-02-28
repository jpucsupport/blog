---
title: Teams - 新しい Teams の前提条件について
date: 2024-02-28 14:30:00
tags:
 - Teams
 - New Teams
 - Teams 2.1
---
# Teams - 新しい Teams の前提条件について
こんにちは。Unified Communications サポート チームです。
いつも Microsoft Teams をご利用いただきありがとうございます。

今回は新しい Teams のアーキテクチャや、クライアントごとの前提条件、前提条件に関する事象について、公開情報内に記載がございます内容等を補足説明させていただきます。

## 新しい Teams の対象となるクライアントについて
新しい Teams のコンセプトは、Teams デスクトップクライアント (Windows, Mac, VDI) と、Teams for Web のみを対象としています。
そのため、モバイル (iOS, Andoroid, iPad OS) や Microsoft Teams Rooms、Surface Hub、Microsoft Teams Phone については、新しい Teams はリリースされず、これまでのアプリに対して更新が行われます。

## 新しい Teams の前提条件について
ここからは、クライアントごとに、新しい Teams を正常にインストールするための、ターゲット PC の前提条件をお伝えいたします。
### 新しい Teams デスクトップクライアントの前提条件について
<table width="1000" border="1">
    <tr>
        <td>要件</td>
        <td>バージョン/説明</td>   
    </tr>
    <tr>
        <td>Windows</td>
        <td>Windows 10 バージョン 10.0.19041 以降 (Windows 10 LTSC for Teams デスクトップ アプリを除く)</td>
    </tr>
    <tr>
        <td>Windows 10 バージョン 10.0.19041 以降 (Windows 10 LTSC for Teams デスクトップ アプリを除く)</td>
        <td>バージョン 1.6.00.4472 以降では、[ 新しい Teams を試す ] トグルが表示されます。<br>重要：クラシック Teams は、ユーザーが従来の Teams と新しい Teams を切り替えることができるようにする場合にのみ必要です。 ユーザーに新しい Teams クライアントのみを表示する場合、この前提条件は省略可能です。</td>
    </tr>
    <tr>
        <td>設定</td>
        <td>システム通知 Microsoft Teams の [通知バナーの表示] 設定をオンにして、Teams 通知を受信します。</td>
    </tr>
    <tr>
        <td>Webview2</td>
        <td>最新バージョンに更新します。 詳細情報:<a href="https://learn.microsoft.com/ja-jp/microsoft-edge/webview2/concepts/enterprise" title="Title">WebView2 ランタイムのエンタープライズ管理</a></td>
    </tr>
    <tr>
        <td>配信の最適化 (DO)</td>
        <td>DO は、サービス契約の一部として必要な Teams 自動更新を強化します。<br>概要:<a href="https://learn.microsoft.com/ja-jp/windows/deployment/do/waas-delivery-optimization" title="Title">配信の最適化</a>  <br>メモ： ダウンロード モード 100 (バイパス) はサポートされていません。</td>
    </tr>
</table>

また上記に加え、新しい Teams を利用する場合、M365 Apps は[サポートされたバージョン](https://learn.microsoft.com/ja-jp/officeupdates/update-history-microsoft365-apps-by-date#supported-versions) を利用いただく必要がございます。  
参考情報: [ポリシーを使用して新しい Teams にアップグレードする](https://learn.microsoft.com/ja-jp/microsoftteams/new-teams-deploy-using-policies?tabs=teams-admin-center)

### 新しい Teams for VDI の前提条件について
<table width="1000" border="1">
    <tr>
        <td>要件</td>
        <td>バージョン</td>   
    </tr>
    <tr>
        <td>Windows</td>
        <td>- Windows 10.0.19041 以降<br>- パブリック プレビューの Windows Server 2019 (10.0.17763) 以降<br>- Windows Server 2022 (10.0.20348) 以降<br>※ Windows Server 2016 はサポートされていません<br>※ Windows サーバーや Windows 10/11 のマルチユーザー環境において、WebView2 フレームワークが必要となります</td>
    </tr>
    <tr>
        <td>WebView2</td>
        <td>最小バージョン: 90.0.818.66。 詳細情報: <a href="https://learn.microsoft.com/ja-jp/microsoft-edge/webview2/concepts/enterprise" title="Title">WebView2 ランタイムのエンタープライズ管理</a></td>
    </tr>
    <tr>
        <td>クラシック Teams アプリ</td>
        <td>バージョン 1.6.00.4472 以降では、[新しい Teams を試す] トグルが表示されます。 重要: クラシック Teams は、ユーザーが従来の Teams と新しい Teams を切り替えることができるようにする場合にのみ必要です。 ユーザーに新しい Teams クライアントのみを表示する場合、この前提条件は省略可能です</td>
    </tr>
    <tr>
        <td>設定</td>
        <td>システムの通知設定において、Microsoft Teams の [通知バナーの表示] 設定をオンにして、Teams 通知を受信します。</a></td>
    </tr>
    <tr>
        <td>アプリサイドローディングが有効</td>
        <td>インストールするすべてのコンピューターでサイドローディングが有効になっていることを確認します。 詳細情報: <a href="https://learn.microsoft.com/ja-jp/windows/application-management/sideload-apps-in-windows" title="Title"> Windows クライアント デバイスでの基幹業務 (LOB) アプリのサイドロード</a></td>
    </tr>
    <tr>
        <td>ウイルス対策と DLP を除外する</td>
        <td>Teams が正しく起動できるように、ウイルス対策アプリケーションと DLP アプリケーションに新しい Teams を追加します。 詳細情報: <a href="https://learn.microsoft.com/ja-jp/microsoftteams/troubleshoot/teams-administration/include-exclude-teams-from-antivirus-dlp" title="Title"> ウイルス対策アプリケーションと DLP アプリケーションを Teams のブロックから除外する</a></td>
    </tr>
</table>

参考情報: [新しい Teams for Virtualized Desktop Infrastructure (VDI) へのアップグレード](https://learn.microsoft.com/ja-jp/microsoftteams/new-teams-vdi-requirements-deploy)

### 新しい Teams for Mac の前提条件について
- macOS モントレー (12) 以降で実行している必要があります。
- [新しい Teams を試す] トグルを表示するには、現在の Teams アプリでバージョン 1.6.00.12303 以降が実行されている必要があります。下位バージョンの場合は、オーバーフロー メニュー (...) を選択し、[更新プログラムの確認] > [更新プログラム] を選択し、アプリを再起動します。  

参考情報: [新しい Teams for Mac - 概要と前提条件](https://learn.microsoft.com/ja-jp/microsoftteams/new-teams-mac-install-prerequisites)

### 新しい Teams for Web の前提条件について
- サードパーティの Cookie を許可するようにブラウザーを構成する必要があります。
- ブラウザーはデスクトップ コンピューターで実行される必要があります。
- ブラウザーは、Microsoft Edge または Chrome の 3 つの最新バージョンがサポートされます。  
※ 新しい Teams for Web の前提条件に、WebView2 は含まれません。  

参考情報: [新しい Teams for Web - 概要と前提条件](https://learn.microsoft.com/ja-jp/microsoftteams/new-teams-web)
  
## 前提条件に関連して特によくお問い合わせいただく内容
これまで、WebView2 のインストール自体をブロックしていたお客様も多くいらっしゃるようで、WebView2 が影響した事象を複数お問い合わせいただいております。具体的には、下記のような内容で、いずれも WebView2 のバージョンが古いことに起因して発生しています。
- 新しい Teams のウィンドウが動かせない事象
- 新しい Teams を起動する際、アプリの画面が白い画面になり、点滅しを繰り返して起動できない事象

そのため、WebView2 が前提条件に含まれるクライアントにおいては、下記の手順に従い、WebView2 を最新のバージョンへ更新していただきますようお願い申し上げます。
なお、新しい Teams for VDI の前提条件において、WebView2 のバージョンは「最小バージョン: 90.0.818.66」と言及されておりますが、上述の通り、WebView2 のバージョンに起因した問題が発生する場合もございますため、可能な限り最新のバージョンをご利用いただくことを推奨しております。

<確認手順>
1. Window スタートボタンをクリックします。
2. 設定 > アプリ > インストールされたアプリの一覧から、[Microsoft Edge Webview2 Runtime] を選択し、表示されるバージョンを確認します。
   例: 120.0.2210.133
3. 以下の URL にアクセスし、"エバーグリーンブートストラップ" 内の [ダウンロード] をクリックし、インストーラを取得します。  
   URL: [Microsoft Edge WebView2](https://developer.microsoft.com/ja-jp/microsoft-edge/webview2/?form=MA13LH)
4. 画面の指示に従ってインストールを実行します。
5. 新しい Teams クライアントを終了し、一度以下のパスのフォルダを削除することでキャッシュをクリアします。
   %localappdata%\Packages\MSTeams_8wekyb3d8bbwe フォルダを削除
   ※Teams フォルダが削除できない場合 addin の影響があるため Outlook を終了して再度お試しください。
6. 新しい Teams を再起動し、動作をご確認ください。

<br />

NOTE:  
- 2024 年 1 月 31 日に、初版を公開しました。
- 2024 年 2 月 5 日に、追記しました。
- 2024 年 2 月 28 日に、追記しました。
  