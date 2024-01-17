---
title: Teams - 新しい Microsoft Teams クライアントのインストール方法
date: 2024-01-15 12:00:00
tags:
 - Teams
 - Information
 - New Teams
 - Teams 2.1
 - Windows
 - Client
 - Install
---

こんにちは、Unified Communications サポート チームです。  
いつも Microsoft Teams をご利用いただきありがとうございます。  

アーキテクチャを一新した、新しい Teams クライアントの提供が開始されました。
その中でも Windows PC に関しては、クライアントの展開方法に応じていくつかのインストール方法が提供されています。今回は Windows 用の各種インストール方法について説明させていただきます。  

## インストール方法の種類  
Windows PC 環境に新しい Teams をインストールするための手段として、以下の 3 種類の方法が提供されています。なお、いずれにおいても LTSC/LTSB の Windows OS での利用はサポートされておりません。  

- **[単体インストール](#MSIX)**  
  MSIX 版はユーザーごとにインストールが実施されるため、複数のユーザーが PC を共有する場合は、それぞれのユーザーでインストールする必要があります。管理者権限を持たないユーザーでもインストールが可能です。  
  - 取得先
    - 32bit 版 : [https://go.microsoft.com/fwlink/?linkid=2196060](https://go.microsoft.com/fwlink/?linkid=2196060)  
    - 64bit 版 : [https://go.microsoft.com/fwlink/?linkid=2196106](https://go.microsoft.com/fwlink/?linkid=2196106)  
    - ARM 版 : [https://go.microsoft.com/fwlink/?linkid=2196207](https://go.microsoft.com/fwlink/?linkid=2196207)

- **[一括インストール](#EXE)**  
  EXE 版の Bootstrapper を用いると、PC に対してインストールが行われ、PC にサインインする全ユーザーで新しい Teams が利用可能となります。管理者権限を持つユーザーでインストールする必要があり、複数のユーザーが PC を共有する環境や、PC/VDI のマスターイメージ作成に適しています。最新バージョンが展開されるオンライン インストール、MSIX 版を併用してのオフライン インストールが可能です。  
  - 取得先
    - Bootstrapper : [https://go.microsoft.com/fwlink/?linkid=2243204](https://go.microsoft.com/fwlink/?linkid=2243204)  

- **[Microsoft 365 Apps 同梱版](#M365)**  
  すべてのチャネルの Microsoft 365 Apps において、既定では新しい Teams が同時にインストールされます。Bootstrapper を用いた一括インストール同じ状態となり、PC にサインインするすべてのユーザーで利用可能な状態となります。  
  - 取得先
    - M365 Apps : [https://admin.microsoft.com/OLS/MySoftware.aspx](https://admin.microsoft.com/OLS/MySoftware.aspx)
  
新しい Teams クライアントに関する各種公開情報は以下をご参照ください。  

- **新しい Microsoft Teams デスクトップ クライアント**  
  [https://learn.microsoft.com/ja-jp/microsoftteams/new-teams-desktop-admin](https://learn.microsoft.com/ja-jp/microsoftteams/new-teams-desktop-admin)  
- **ポリシーを使用して新しい Teams にアップグレードする**  
  [https://learn.microsoft.com/ja-jp/microsoftteams/new-teams-deploy-using-policies?tabs=teams-admin-center](https://learn.microsoft.com/ja-jp/microsoftteams/new-teams-deploy-using-policies?tabs=teams-admin-center)  
- **新しい Microsoft Teams クライアントへの一括アップグレード**  
  [https://learn.microsoft.com/ja-jp/microsoftteams/new-teams-bulk-install-client](https://learn.microsoft.com/ja-jp/microsoftteams/new-teams-bulk-install-client)  
- **Microsoft 365 Appsを使用して新しい Microsoft Teams にアップグレードする**  
  [https://learn.microsoft.com/ja-jp/microsoftteams/new-teams-deploy-with-m365apps](https://learn.microsoft.com/ja-jp/microsoftteams/new-teams-deploy-with-m365apps)  
- **新しい Teams for Virtualized Desktop Infrastructure (VDI) へのアップグレード**  
  [https://learn.microsoft.com/ja-jp/microsoftteams/new-teams-vdi-requirements-deploy](https://learn.microsoft.com/ja-jp/microsoftteams/new-teams-vdi-requirements-deploy)  
  ※VDI に関しては、後半の[**こちら**](#VDI)にまとめています。  
- **Enable the new Microsoft Teams for your organization today!**  
  [https://techcommunity.microsoft.com/t5/microsoft-teams-blog/enable-the-new-microsoft-teams-for-your-organization-today/ba-p/3945599](https://techcommunity.microsoft.com/t5/microsoft-teams-blog/enable-the-new-microsoft-teams-for-your-organization-today/ba-p/3945599)  

## 各種インストール方法の説明  
利用する環境やユーザーの利用状況に応じ、複数のインストール方法が提供されています。目的に応じて適切な方法を選択してください。  

- <a name="MSIX">**単体インストール**</a>  
  - **概要**  
  MSIX ファイルを用いる場合、管理者権限が不要なためユーザー自身によるインストールが可能です。インストール後に新しい Teams を起動すると、自動起動が有効化されます。  

  - **フォルダ**  
    実行ファイルは、以下のフォルダに保存されます。  
    > 32bit > C:\Program Files\WindowsApps\MSTeams_XXXXX.XXXX.XXXX.XXXX_x32__8wekyb3d8bbwe  
    > 64bit > C:\Program Files\WindowsApps\MSTeams_XXXXX.XXXX.XXXX.XXXX_x64__8wekyb3d8bbwe  
    ※フォルダ名はバージョンによって異なり、XXXXX.XXXX.XXXX.XXXX にはバージョンが入ります。

    キャッシュファイルは、ユーザーごとに以下のフォルダに保存されます。  
    > %localappdata%\Packages\MSTeams_8wekyb3d8bbwe\LocalCache\Microsoft\MSTeams  
    ※トラブルシュートを除き、基本的にキャッシュフォルダ内のファイル削除はサポートされません。

  - **インストール**  
    PowerShell コマンドでインストールする場合は以下となります。  
    > Add-AppPackage -Path "C:\temp\MSTeams-x64.msix"  
    ※利用する環境に応じた MSIX 版インストーラーが保存されているパスを指定してください。
  
  - **アンインストール**  
    設定のアプリでは、以下の名前で登録されておりアンインストールが可能です。アンインストールについてもユーザーごとに実施する必要があります。  
    > Microsoft Teams (work or school)  

    コマンドで削除する場合は以下となります。  
    > Get-AppPackage -Name MSTeams | Remove-AppPackage  
  
  - **アップデート**  
    Windows Update を利用しておらず、Teams の実装によりアップデートが自動的に実施されます。現時点では管理者によるバージョン管理機能は提供されていません。なお、64bit OS 環境に 32bit 版の新しい Teams をインストールした場合、アップデート後に 64bit 版の新しい Teams で更新されます。64bit OS 環境では 64bit 版の新しい Teams をご利用ください。  

- <a name="EXE">**一括インストール**</a>  
  - **概要**  
  管理者権限により teamsbootstrapper.exe を用いてインストールすることで、PC を使用する全ユーザーで新しい Teams が利用可能な状態となります。オンライン インストールが可能な場合は teamsbootstrapper.exe のみで、環境に適した最新バージョンの新しい Teams がインストールされます。また、MSIX ファイルを併用することにより、オフライン でのインストールも可能となっています。PC や VDI のマスターイメージを作成する際にも有効な方法です。（VDI に関しては別途記載）  
  ※ teamsbootstrapper.exe は、必ず最新版をダウンロードして利用してください。
  
  - **フォルダ**  
    インストール後、新しい Teams を起動すると MSIX と同様に以下のフォルダに展開されます。  
    > 32bit > C:\Program Files\WindowsApps\MSTeams_XXXXX.XXXX.XXXX.XXXX_x86__8wekyb3d8bbwe  
    > 64bit > C:\Program Files\WindowsApps\MSTeams_XXXXX.XXXX.XXXX.XXXX_x64__8wekyb3d8bbwe  
    ※フォルダ名はバージョンによって異なり、XXXXX.XXXX.XXXX.XXXX にはバージョンが入ります。

    キャッシュファイルの構造も同様で、ユーザーごとに以下のフォルダに保存されます。  
    > %localappdata%\Packages\MSTeams_8wekyb3d8bbwe\LocalCache\Microsoft\MSTeams  
    ※トラブルシュートを除き、基本的にキャッシュフォルダ内のファイル削除はサポートされません。

  - **インストール**  
    オンライン環境の場合、管理者権限で以下のコマンドを実行することで最新バージョンがダウンロードされてインストールが実施されます。  
    > teamsbootstrapper.exe -p  

    別途取得した MSIX ファイルを指定することで、オフライン環境でもインストールすることが可能です。  
    > teamsbootstrapper.exe -p -o "C:\temp\MSTeams-x64.msix"  
    > teamsbootstrapper.exe -p -o "\\fileshare\teams\MSTeams-x64.msix"  
    ※ UNC を利用することも可能です。

  - **アンインストール**  
    管理者権限で以下のコマンドを実行することで、全てのユーザーから新しい Teams がアンインストールされます。  
    > teamsbootstrapper.exe -x  

  - **アップデート**  
    MSIX と同様に、Windows Update を利用しておらず、Teams の実装によりアップデートが自動的に実施されます。現時点では管理者によるバージョン管理機能は提供されていません。ただし、VDI 環境の場合は自動更新を無効化することが可能です。  

  - **コマンド オプション**  
    teamsbootstrapper.exe コマンドのオプションは以下となります。  
    > Provisioning program for Microsoft Teams.  
    >   
    > Usage: teamsbootstrapper.exe [OPTIONS]  
    >   
    > Options:  
    >   -p, --provision-admin    Provision Teams for all users on this machine.  
    >   -x, --deprovision-admin  Remove Teams for all users on this machine.  
    >   -h, --help               Print help  

  - **sysprep 実施時の注意事項**  
    旧来の Teams Classic は sysprep 時に注意事項があり、その点を考慮せずにマスターイメージを作成すると、実ユーザーが利用する際に Outlook 連携で問題が発生する可能性がありました。現時点で新しい Teams では同様の問題は確認されておりません。しかしながら、teamsbootstrapper.exe でインストールした後に、Teams を起動せずに sysprep を実行していただくことを推奨いたします。作成したマスターイメージで PC をデプロイした後に、実ユーザーを用いて動作確認を実施いただくことが望ましいと言えます。  

- <a name="M365">**Microsoft 365 Apps 同梱版**</a>  
  - **概要**  
    Microsoft 365 Apps のチャネルごとに、段階的に新しい Teams が含まれるようになりました。すべてのチャネルの Microsoft 365 Apps において、将来的に既定では 新しい Teams が同時にインストールされます。インストールは teamsbootstrapper.exe を用いた一括インストールど同じ状態であるため、PC を使用するすべてのユーザーで新しい Teams が利用可能となります。  

  - **インストール**  
    Microsoft 365 Apps をインストールすると、既定では新しい Teams が含まれます。インストールから Teams を除外する場合は、XML ファイルを作成して Office 展開ツールを利用するか、グループポリシーで Teams の除外を定義することが可能です。詳細は以下のドキュメントをご参照ください。  
    > **Microsoft 365 Appsの新しいインストールから Microsoft Teams を除外する方法**  
    > [https://learn.microsoft.com/ja-jp/deployoffice/teams-install#how-to-exclude-microsoft-teams-from-new-installations-of-microsoft-365-apps](https://learn.microsoft.com/ja-jp/deployoffice/teams-install#how-to-exclude-microsoft-teams-from-new-installations-of-microsoft-365-apps)  
    > **グループ ポリシーを使用して Microsoft Teams のインストールを制御する**  
    > [https://learn.microsoft.com/ja-jp/deployoffice/teams-install#use-group-policy-to-control-the-installation-of-microsoft-teams](https://learn.microsoft.com/ja-jp/deployoffice/teams-install#use-group-policy-to-control-the-installation-of-microsoft-teams)  

  - **アンインストール**  
    Microsoft 365 Apps をアンインストールしても、新しい Teams はアンインストールされません。teamsbootstrapper.exe を用い、以下コマンドを管理者権限で実行することで全てのユーザーから新しい Teams を削除します。  
    > teamsbootstrapper.exe -x  

  - **アップデート**  
    MSIX と同様に、Windows Update を利用しておらず、Teams の実装によりアップデートが自動的に実施されます。現時点では管理者によるバージョン管理機能は提供されていません。ただし、VDI 環境の場合は自動更新を無効化することが可能です。

## <a name="VDI"> VDI 環境について</a>  
メディア最適化も含め、VDI 環境でも快適に Teams をご利用いただく仕組みが提供されています。新しい Teams を VDI 環境にインストールする際は、一般的に teamsbootstrapper.exe を用いて一括インストールを行います。  

- **対応する VDI 環境**  
メディア最適化機能の提供もふまえ、弊社も含めて 3 社からリリースされた VDI 環境に Teams は対応しています。インストールに関する詳細は、各社から提供される以下のドキュメントをご参照ください。  

  - **Microsoft Azure Virtual Desktop**  
    [https://learn.microsoft.com/ja-jp/microsoftteams/new-teams-vdi-requirements-deploy#azure-virtual-desktop](https://learn.microsoft.com/ja-jp/microsoftteams/new-teams-vdi-requirements-deploy#azure-virtual-desktop)  

  - **Windows 365**  
    [https://learn.microsoft.com/ja-jp/microsoftteams/new-teams-vdi-requirements-deploy#windows-365](https://learn.microsoft.com/ja-jp/microsoftteams/new-teams-vdi-requirements-deploy#windows-365)  

  - **Citrix Virtual Apps and Desktops**  
    [https://learn.microsoft.com/ja-jp/microsoftteams/new-teams-vdi-requirements-deploy#citrix-virtual-apps-and-desktops-and-citrix-daas-requirements](https://learn.microsoft.com/ja-jp/microsoftteams/new-teams-vdi-requirements-deploy#citrix-virtual-apps-and-desktops-and-citrix-daas-requirements)  

  - **VMWare　Horizon Workspace and Desktop**  
    [https://learn.microsoft.com/ja-jp/microsoftteams/new-teams-vdi-requirements-deploy#vmware-horizon-and-workspace-one-requirements](https://learn.microsoft.com/ja-jp/microsoftteams/new-teams-vdi-requirements-deploy#vmware-horizon-and-workspace-one-requirements)  

  - **アップデートについて**  
    新しい Teams は VDI 環境においても自動的にアップデートが実施されます。旧来の Teams Classic と同様に自動アップデートを無効化したい場合は以下のレジストリを登録します。このレジストリは 23306.3314.2555.9628 以降のバージョンを VDI 環境で利用している場合のみ有効です、  
    > Location: Computer\HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Teams  
    > Name: disableAutoUpdate  
    > Type: DWORD  
    > Value: 1  

  - **キャッシュフォルダについて**  
    以下のフォルダにキャッシュデータが格納されますが、新しい Teams が最適に動作して適切なエクスペリエンスを得るためには、キャッシュフォルダ内のファイルは保持される必要があります。  
    > %localappdata%\Packages\MSTeams_8wekyb3d8bbwe\LocalCache\Microsoft\MSTeams  

    ただし、以下のフォルダについてはキャッシュのサイズを小さくするために、保持の対象から除外することが可能です。
    > %localappdata%\Packages\MSTeams_8wekyb3d8bbwe\LocalCache\Microsoft\MSTeams\Logs  
    > %localappdata%\Packages\MSTeams_8wekyb3d8bbwe\LocalCache\Microsoft\MSTeams\PerfLogs  
    > %localappdata%\Packages\MSTeams_8wekyb3d8bbwe\LocalCache\Microsoft\MSTeams\EBWebView\WV2Profile_tfw\WebStorage  

    キャッシュファイルはトラブルシュート等の目的において削除いただくことは問題ありませんが、常に削除するような運用では再作成によるディスクやネットワークの I/O 増加が懸念されます。その結果、Teams のパフォーマンス低下や予期しない問題の発生につながる可能性もございます。また、ネットワーク上の共有フォルダへのフォルダリダイレクトについても、キャッシュファイルへのアクセス遅延の要因となり問題が発生します。Teams Classic と同様に FSLogix に類するキャッシュ マネージメント ソリューションが必要となります。  

NOTE:  
- 2024 年 1 月 15 日に、初版を公開しました。


