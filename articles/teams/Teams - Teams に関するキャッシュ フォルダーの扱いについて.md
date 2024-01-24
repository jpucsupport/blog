---
title: Teams - Teams に関するキャッシュ フォルダーの扱いについて
date: 2024-01-23 11:30:00
tags:
 - Teams
 - Client
 - VDI
 - Windows
---
# Teams - Teams に関するキャッシュ フォルダーの扱いについて

こんにちは。Unified Communications サポート チームです。
いつも Microsoft Teams をご利用いただきありがとうございます。

今回は Teams デスクトップ クライアントのキャッシュ フォルダの扱いに関して、公開情報内に記載がございます内容を補足説明させていただきます。

## Teams のキャッシュ フォルダーについて
Teams デスクトップ クライアントは、ネットワークやストレージへの負荷を考慮し、パフォーマンスとエクスペリエンスの向上を目的として、一部の取得済みデータや設定情報、アプリケーション コンポーネントをキャッシュ ファイルとして保持しています。  
言い換えると、キャッシュ情報を削除した場合には、これらファイルの再取得が必要となることから、通信量やファイルアクセスといったリソースへの負荷が増加することから、クライアントのパフォーマンス低下だけではなく、ネットワークやストレージへ多大なる負荷が発生する状況が想定されます。  
これら負荷に関連する事象だけではなく、設定情報が維持されない問題も起こりうるため、トラブルシュートを目的とする場合を除き、恒常的にキャッシュ ファイルを削除する運用につきましては正式にサポートされる構成ではありません。  

なお、何らかの要因によりキャッシュ ファイルが適切に破棄/更新されない状況や、ファイルが破損した状況に陥ってしまった場合などに、Teams の利用に予期しない問題が発生する可能性もございます。  
そのような場合に限り、原因の切り分けや復旧を目的としてキャッシュ ファイルの削除をご案内しております。  
キャッシュ ファイルの削除方法を含めた、一般的なトラブルシューティング方法につきましては、以下のブログ記事を併せてご参照ください。  
- 関連記事: [Teams - デスクトップ クライアントの一般的なトラブルシューティング](https://jpucsupport.github.io/blog/teams/Teams%20-%20%E3%83%87%E3%82%B9%E3%82%AF%E3%83%88%E3%83%83%E3%83%97%20%E3%82%AF%E3%83%A9%E3%82%A4%E3%82%A2%E3%83%B3%E3%83%88%E3%81%AE%E4%B8%80%E8%88%AC%E7%9A%84%E3%81%AA%E3%83%88%E3%83%A9%E3%83%96%E3%83%AB%E3%82%B7%E3%83%A5%E3%83%BC%E3%83%86%E3%82%A3%E3%83%B3%E3%82%B0)  
※ Teams デスクトップ クライアントのキャッシュ ファイルの個々の用途や格納先等、内部動作に関する詳細は情報が公開されておりませんこと、予めご了承ください。  

## VDI 環境におけるキャッシュ運用について
VDI 環境で Teams デスクトップ クライアントをご利用されているお客様の運用において、  
ユーザー プロファイルを保存するサーバーのディスク容量の観点から、定期的に Teams デスクトップ クライアントのキャッシュ ファイル削除を実施されている場合がございます。  

[前項](#Teams-のキャッシュ-フォルダーについて) にも記載の通り、恒常的なキャッシュ ファイル削除は正式にサポートされない運用となります。  

VDI 環境でキャッシュ ファイルが維持されない場合、これまで多くのお客様で発生した問題として、以下のようなものがございます。  
- ファイルの再取得が行われるため、トラフィック増によるアクセス回線の輻輳が発生し、様々なサービスで通信断やパフォーマンスの低下が発生します。  
- 再取得したファイルをストレージに保存するため、ストレージの I/O が高負荷となり、様々なアプリケーションでパフォーマンスの低下が発生します。  
- VDI 環境では Teams へのサインインが集中するため、一般的に朝 9 時問題と言われる業務開始時刻前後にこれらの問題が顕著に発生します。  

このような問題はネットワークやストレージのリソース、ユーザーの利用状況や規模、パフォーマンスに対する感覚に依存するため必ず影響が出るとは言えませんが、VDI 環境を中心に多くのお問い合わせをいただいておりますため、下記フォルダーとファイルは削除されずに保持していただく必用がある旨公開情報に記載させていただいております。  
 - 従来の Teams (Classic Teams) デスクトップ クライアント:  
  ・%LocalAppData%\Microsoft\IdentityCache  
  ・%AppData%\Roaming\Microsoft\Teams  
  
 - 新しい Teams デスクトップ クライアント:  
  ・%LocalAppData%\Packages\MSTeams_8wekyb3d8bbwe\LocalCache\Microsoft\MSTeams  
  ・%LocalAppData%\Publishers\8wekyb3d8bbwe\TeamsSharedConfig\app_switcher_settings.json  
  ・%LocalAppData%\Publishers\8wekyb3d8bbwe\TeamsSharedConfig\tma_settings.json  

詳細につきましては以下の公開情報をご参照いただき、提示させていただいている要件を満たすように構成いただきますようお願いいたします。

Title: 仮想化デスクトップ インフラストラクチャ用クラシック Teams > 非永続的なセットアップ  
URL: https://learn.microsoft.com/ja-jp/microsoftteams/teams-for-vdi#non-persistent-setup  
> 非永続的なセットアップで Teams を使用するには、効率的な Teams ランタイム データ同期のために、プロファイル キャッシュ マネージャーも必要です。 効率的なデータ同期により、適切なユーザー固有の情報 (ユーザーのデータ、プロファイル、設定など) がユーザーのセッション中にキャッシュされます。 以下の 2 つのフォルダーのデータが同期されていることを確認してください。  
> ・C:\Users\username\AppData\Local\Microsoft\IdentityCache (%LocalAppData%\Microsoft\IdentityCache)  
> ・C:\Users\username\AppData\Roaming\Microsoft\Teams (%AppData%\Microsoft\Teams)  
> 注意  
> Teams アプリがアプリケーションの実行に必要なランタイム データとファイルを確実に取得するには、ローミング フォルダー (またはフォルダー リダイレクトを使用している場合はキャッシュ マネージャー) が必要です。 これは、ネットワーク遅延の問題やネットワークの不具合を軽減するために必要です。それを行わない場合、データやファイルが利用できないことにより、アプリケーション エラーが発生し、動作が遅くなります。  

Title: 新しい Teams for Virtualized Desktop Infrastructure (VDI) へのアップグレード > 新しい Teams クライアントのプロファイルとキャッシュの場所  
URL: https://learn.microsoft.com/ja-jp/microsoftteams/new-teams-vdi-requirements-deploy#profile-and-cache-location-for-new-teams-client  
> これで、すべてのユーザー設定と構成が次に格納されます。  
> ・C:\Users<username>\AppData\Local\Packages\MSTeams_8wekyb3d8bbwe\LocalCache\Microsoft\MSTeams  
> ・C:\Users<username>\AppData\Local\Publishers\8wekyb3d8bbwe\TeamsSharedConfig\app_switcher_settings.json  
> ・C:\Users<username>\AppData\Local\Publishers\8wekyb3d8bbwe\TeamsSharedConfig\tma_settings.json  
> 適切な Teams が機能するために、これらのフォルダーとファイルが保持されていることを確認します。  

<br />

NOTE:  
- 2024 年 1 月 23 日に、初版を公開しました。