---
title: Microsoft Teams クライアントの種類
date: 2021-07-20 17:00:00
tags:
 - Teams
 - Windows
 - Client
 - Install
---

こんにちは、Unified Communications サポート チームです。  
いつも Microsoft Teams をご利用いただきありがとうございます。  

Microsoft Teams は様々なプラットフォームで利用できるクライアントを提供しています。その中でも Windows PC に関しては、クライアントの展開方法に応じていくつかのインストーラーが提供されています。今回は Windows 用の各種インストーラーについて説明させていただきます。

## インストーラーの種類  

現在、Windows PC 用のインストーラーといたしましては、以下の 3 種類の方式が提供されています。

- **[EXE 版](#EXE)**  
  ユーザー権限で実行可能であり、通常はユーザー自身がインストールを行う際に利用します。  
  - 取得先：[https://teams.microsoft.com/downloads](https://teams.microsoft.com/downloads)  
- **[MSI 版](#MSI)**  
  管理者権限が必要なため、PC のキッティンや VDI のマスターイメージ作成時の利用を想定しています。　　
  - 取得先：[https://docs.microsoft.com/ja-jp/microsoftteams/msi-deployment](https://docs.microsoft.com/ja-jp/microsoftteams/msi-deployment)  
- **[Microsoft 365 Apps 同梱版](#M365)**  
  Microsoft 365 製品群の一部として、MSI 版が同梱インストールされるようになりました。  
  - 取得先：[https://admin.microsoft.com/OLS/MySoftware.aspx](https://admin.microsoft.com/OLS/MySoftware.aspx)
  
Teams クライアントの情報については、以下の公開情報をご参照ください。  

- **Microsoft Teams のクライアントを取得する**  
  [https://docs.microsoft.com/ja-jp/microsoftteams/get-clients](https://docs.microsoft.com/ja-jp/microsoftteams/get-clients)  
- **Microsoft 365 Apps と同時に Microsoft Teams を展開する**  
  [https://docs.microsoft.com/ja-jp/deployoffice/teams-install](https://docs.microsoft.com/ja-jp/deployoffice/teams-install)  
- **仮想デスクトップ インフラストラクチャ用の Teams**  
  [https://docs.microsoft.com/ja-jp/microsoftteams/teams-for-vdi](https://docs.microsoft.com/ja-jp/microsoftteams/teams-for-vdi)  
  ※VDI に関しては、後半の[**こちら**](#VDI)にまとめています。

## 各種インストーラーの説明  

Windows 環境で Teams アプリケーションをインストールする手段として、3 種類の方法が提供されています。まずはそれぞれの特徴についてまとめます。  

- <a name="EXE">**EXE 版**</a>  
  - **概要**  
    管理者権限が不要なため、ユーザー自身で容易にインストールが可能です。インストール完了とともに Teams が起動し、既定で自動起動が有効化されます。  

  - **インストール先**  
    ユーザープロファイル配下の以下フォルダに展開されます。  
    > %LocalAppData%\Microsoft\Teams  
  
  - **アンインストール**  
    コントロールパネルのプログラムと機能では、以下の名前で登録されてアンインストールが可能です。アンインストールについてもユーザーごとに実施する必要があります。  
    > Microsoft Teams  

    コマンドで削除する場合は以下となります。  
    > %LocalAppData%\Microsoft\Teams\Update.exe --uninstall -s  
  
  - **アップデート**  
    Windows Update を利用しておらず、Teams の実装によりアップデートが自動的に実施されます。現時点では管理者によるバージョン管理機能は提供されていません。  


- <a name="MSI">**MSI 版**</a>  
  **- 概要 -**  
  インストールには管理者権限が必要です。MSI 版はユーザーがサインインした際に EXE 版によるインストールを実行するためのツールといった位置づけです。これにより PC を利用する全てのユーザーで Teams の利用が可能となります。ユーザープロファイルごとに展開された Teams は EXE 版と同じものとなります。その他、VDI 環境用に特殊なインストールを実施する際にも利用します。（VDI に関しては別途記載）  
  
  - **インストール先**  
    ユーザープロファイル配下の以下フォルダに展開されます。  
    - [32bit OS]  
      > %ProgramFiles%\Teams Installer  
    - [64bit OS]  
      > %ProgramFiles(x86)%\Teams Installer  

  - **アンインストール**  
    コントロールパネルのプログラムと機能では、以下の名前で登録されてアンインストールが可能です。既定では、アンインストールは MSI のインストールを実施したユーザーのみが実施できます。全ユーザーに Teams Machine-Wide Installer が表示され、アンインストールを可能にするためにはインストール時にオプションを指定する必要があります。  
    > Teams Machine-Wide Installer  

    コマンドで削除する場合は以下となり、管理者権限で実行する必要があります。今後のバージョンアップによって ID が変わる可能性もあるため、あらかじめ PowerShell のコマンドで ID を確認してください。  
    - [ID 確認用 PowerShell コマンド]  
      > Get-WmiObject Win32_Product | where {$_.name -like "*Teams*"} | Format-List  
    - [32bit 版]  
      > msiexec /X"{39AF0813-FA7B-4860-ADBE-93B9B214B914}" /qn  
    - [64bit 版]  
      > msiexec /X"{731F6BAA-A986-45A4-8936-7C3AAAAA760B}" /qn  

    MSI 版をアンインストールすると、各ユーザーに展開されている Teams のアンインストールも実施されます。MSI のアンインストールを実行したユーザー以外は、ユーザーが次回サインインしたタイミングでアンインストールが実施されます。  

  - **アップデート**  
    MSI 版でインストールされた Teams Machine-Wide Installer 自体は自動的にアップデートされることはありません。ユーザーごとに展開された Teams 本体の更新については、EXE 版で説明した仕組みで自動的に行われます。そのため、初めてサインインしたユーザーで展開される Teams 本体は、インストールされた MSI 版のバージョンに一致しており古いバージョンとなる場合があります。Teams Machine-Wide Installer 自体を更新するためには、新しい MSI 版のインストーラーを用いて上書きインストールする必要があります。  

  - **インストールオプション**  
    MSI 版はインストール時に次のオプションを指定することが可能です。  

    - OPTIONS="noAutoStart=true"  
      > ユーザーがサインインした際に Teams の展開は実施しますが、展開後の自動起動を無効化します。ユーザーはデスクトップ上に作成される Teams アイコンから起動する必要があり、一度起動すると以降は自動起動が有効化されます。このオプションを利用するためには、MSI 版のインストーラーを管理者として実行する必要があります。  
    - ALLUSERS=1  
      > 既定ではプログラムと機能に Teams Machine-Wide Installer が表示され、アンインストールを実施できるユーザーはインストールしたユーザーのみとなります。このオプションを指定することで、管理者権限を持つ全てのユーザーで Teams Machine-Wide Installer が表示されてアンインストールが可能となります。  
    - ALLUSER=1  
      > Azure Virtual Desktopや、Citrix 社、VMWare 社から提供される VDI 環境にインストールする際に利用できるオプションです。VDI 環境以外で指定するとインストールが失敗します。（VDI に関しては別途記載）  

    オプションを指定してインストールする際の実行例を以下に示します。
    - [32bit 版]  
      > msiexec /i Teams_windows.msi OPTIONS="noAutoStart=true" ALLUSERS=1  
    - [64bit 版]  
      > msiexec /i Teams_windows_x64.msi OPTIONS="noAutoStart=true" ALLUSERS=1  

  - **展開後の自動起動の無効化**  
    OPTIONS="noAutoStart=true" オプションと同様に、GPO でポリシーを配布することで自動起動を無効化することができます。以下よりテンプレートを取得して、Teams のポリシーを配布します。  
    [https://www.microsoft.com/en-us/download/details.aspx?id=49030](https://www.microsoft.com/en-us/download/details.aspx?id=49030)  
    - [ユーザーの構成]  
      - [ポリシー]  
        - [管理用テンプレート]  
          - [Microsoft Teams]  
            - [インストール後に Microsoft Teams が自動的に起動しないようにする] => 有効  

    レジストリの追加で対応することも可能ですが、ユーザーごとに設定する必要がある点にご注意ください。（HKLM 配下のレジストリは用意されていません。）
    - レジストリ：HKEY_CURRENT_USER\SOFTWARE\Policies\Microsoft\Office\16.0\Teams  
    - 値の名前　：PreventFirstLaunchAfterInstall  
    - 値の種類　：REG_DWORD  
    - 値　　　　：1  

  - **sysprep 実施時の注意事項**  
    展開用のマスターイメージを作成するなどで sysprep による一般化を実施する場合、MSI 版のインストール後に OS のサインアウト/サインインを実施せずに sysprep を実行してください。インストール時のアカウントなどに Teams 本体が展開された状態で sysprep を実行すると、Outlook との連携などで問題が発生する可能性があります。  

- <a name="M365">**Microsoft 365 Apps 同梱版**</a>  
  - **概要**  
    バージョン 1902 以降の Microsoft 365 Apps をインストールすると MSI 版の Teams がインストール可能となりました。最新のバージョンでは既定でインストールされます。  

  - **インストール**  
    インストールされる Teams は、MSI 版と同じものとなります。ただし、単体の MSI 版インストーラーの様にインストール時にオプションを指定することができません。sysyprep などの関係で MSI 版 Teams を個別にインストールしたい場合、以下サンプルの xml ファイルを用いて、Office 展開ツールによりインストールすることで Teams を除外することができます。  
    > \<Configuration>  
    > \<Add Version="MatchInstalled">  
    > \<Product ID="O365ProPlusRetail">  
    > \<Language ID="MatchInstalled" TargetProduct="All" />  
    > \<ExcludeApp ID="Teams" />  
    > \</Product>  
    > \</Add>  
    > \<Display Level="None" />  
    > \</Configuration>  

  - **アンインストール**  
    Microsoft 365 Apps をアンインストールすると、Teams Machine-Wide Installer も同時にアンインストールされます。ユーザーごとに展開されている Teams 本体に関しては、Microsoft 365 Apps アンインストール後に初めてサインインしたタイミングで削除されます。

  - **アップデート**  
    Microsoft 365 Apps の更新を実施しても、Teams Machine-Wide Installer とユーザーに展開された Teams 本体は更新されません。Teams Machine-Wide Installer は MSI 版と同様に手動で更新する必要があります。ユーザーに展開された Teams 本体については EXE 版と同様に Teams の実装によって自動更新されます。

  - **展開後の自動起動の無効化**  
    MSI 版と同様に、GPO かレジストリを用いて自動起動を無効化することができます。  

## <a name="VDI"> VDI 環境について</a>  
メディア最適化も含め、VDI 環境でも快適に Teams をご利用いただく仕組みが提供されています。VDI の仮想マシンに Teams をインストールする際のオプションや注意点などについて説明いたします。  

- **対応する VDI 環境**  
メディア最適化機能の提供もふまえ、弊社も含めて 3 社からリリースされた VDI 環境に Teams は対応しています。インストールに関する詳細は、各社から提供される以下のドキュメントをご参照ください。  

  - **Microsoft Azure Virtual Desktop**  
    [https://docs.microsoft.com/ja-jp/azure/virtual-desktop/teams-on-avd](https://docs.microsoft.com/ja-jp/azure/virtual-desktop/teams-on-avd)  

  - **Citrix Virtual Apps and Desktops**  
    [https://docs.citrix.com/ja-jp/citrix-virtual-apps-desktops/multimedia/opt-ms-teams.html](https://docs.citrix.com/ja-jp/citrix-virtual-apps-desktops/multimedia/opt-ms-teams.html)  

  - **VMWare　Horizon Workspace and Desktop**  
    [https://docs.vmware.com/jp/VMware-Horizon/2006/horizon-remote-desktop-features/GUID-F68FA7BB-B08F-4EFF-9BB1-1F9FC71F8214.html](https://docs.vmware.com/jp/VMware-Horizon/2006/horizon-remote-desktop-features/GUID-F68FA7BB-B08F-4EFF-9BB1-1F9FC71F8214.html)  

- **VDI の展開方式に応じたインストール**  
永続的な VDI 環境ではユーザーがログオフしてもユーザープロファイルを含め、OS の変更は維持されます。そのため、ユーザーごとのインストールとマシンごとのインストールのどちらもサポートします。非永続的な環境ではユーザーのログオフにより OS の変更は維持されないためマシンごとのインストールのみがサポートされます。  

  - **ユーザーごとのインストール(永続環境のみ)**  
    通常どおりのインストールとなり、ユーザーごとに Teams 本体が展開されます。  
    > msiexec /i <path_to_msi> /l*v <install_logfile_name> ALLUSERS=1  

  - **マシンごとのインストール(永続環境/非永続環境)**  
    マシンごとのインストールは VDI 環境でのみサポートされており、AVD の場合は以下コマンドによりレジストリを追加しておく必要があります。Citrix 社と VMWare 社の VDI については両者から提示されているドキュメントに従ってください。
    > reg add "HKLM\SOFTWARE\Microsoft\Teams" /v IsWVDEnvironment /t REG_DWORD /d 1 /f  

    ALLUSER=1 オプションを指定することによりマシンごとのインストールとなります。上記レジストリが登録されていないなど、VDI 環境であることを検出できない場合はエラーメッセージが表示されてインストールは失敗します。
    > msiexec /i <path_to_msi> /l*v <install_logfile_name> ALLUSER=1 ALLUSERS=1  

    マシンごとのインストールを実施した場合、Teams 本体はユーザープロファイルではなく以下のフォルダに展開されます。  
    - [32bit OS]  
      > %ProgramFiles%\Microsoft\Teams  
      > %ProgramFiles%\Microsoft\TeamsMeetingAddin  
      > %ProgramFiles%\Microsoft\TeamsPresenceAddin  

    - [64bit OS]  
      > %ProgramFiles(x86)%\Microsoft\Teams  
      > %ProgramFiles(x86)%\Microsoft\TeamsMeetingAddin  
      > %ProgramFiles(x86)%\Microsoft\TeamsPresenceAddin  

- **マシンごとのインストールに関する注意事項**  

  - **VDI 以外での利用**  
    マシンごとのインストールは AVD 用のレジストリを追加することで環境に依存せずに可能となります。しかしながら、サポートされる VDI 環境以外での利用はサポートされません。  

  - **展開後の自動起動について**  
    インストールオプション、GPO、レジストリ追加のいずれを用いても自動起動を無効化することはできません。また、ユーザーによる設定変更もできないため、マシンごとのインストールを行った場合通常は自動起動が必ず有効な状態となります。無効化する場合は OS のスタートアップ設定を変更する必要があります。  

  - **アップデートについて**  
    マシンごとのインストールを行った場合、Teams の自動アップデートは実施されません。マスターイメージを更新するタイミング等において、新しいバージョンの MSI 版インストーラーを用いて、アンインストール後に手動で再インストールする必要があります。  

  - **キャッシュフォルダの同期について**  
    非永続環境において Teams を適切に動作させるためには、プロファイルキャッシュマネージャーにより以下のフォルダを同期する必要があります。  
    - C:\Users\username\AppData\Local\Microsoft\IdentityCache (%localAppdata%\Microsoft\IdentityCache)  
    - C:\Users\username\AppData\Roaming\Microsoft\Teams (%appdata%\Microsoft\Teams)  

    ただし、%appdata%/Microsoft/Teams フォルダに含まれる以下のファイル、フォルダについては同期対象から除外して最適化することが可能です。  
    - 拡張子が ".txt" のファイル  
    - media-stack (%appdata%\Microsoft\Teams\media-stack) フォルダ  
    - meeting-addin\Cache (%appdata%\Microsoft\Teams\meeting-addin\Cache）フォルダ  

    キャッシュファイルはトラブルシュート等の目的において削除いただくことは問題ありませんが、常に削除されると再作成によるディスクやネットワークの I/O 増加が懸念されます。その結果、Teams のパフォーマンス低下や予期しない問題の発生につながる可能性もございます。また、ネットワーク上の共有フォルダへのフォルダリダイレクトについても、キャッシュファイルへのアクセス遅延の要因となり問題が発生しますので、現時点ではサポート外となりますのでご注意ください。  
