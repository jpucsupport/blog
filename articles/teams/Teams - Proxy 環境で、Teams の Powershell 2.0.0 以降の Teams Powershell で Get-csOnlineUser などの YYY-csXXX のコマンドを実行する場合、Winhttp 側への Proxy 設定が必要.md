---
title: Teams - Proxy 環境で、Teams の Powershell 2.0.0 以降の Teams Powershell で Get-csOnlineUser などの YYY-csXXX のコマンドを実行する場合、Winhttp 側への Proxy 設定が必要
date: 2021-12-16 00:00:00
tags:
  - Informatio
  - Powershell
---

# Teams - Proxy 環境で、Teams の Powershell 2.0.0 以降の Teams Powershell で Get-csOnlineUser などの YYY-csXXX のコマンドを実行する場合、Winhttp 側への Proxy 設定が必要

こんにちは。Unified Communications サポート チームです。
いつも Microsoft Teams をご利用いただきありがとうございます。

企業様のご環境では、インターネットへの接続は Proxy Server を経由しない限りできない場合があるかと思います。
このような Proxy Server を経由しない限りインターネットへの接続ができないご環境で、Teams の Powershell 2.0.0 をご使用いただく場合には、WinHttp の設定で、Proxy Server を使用する設定をしていただく必要がございます。
この設定を行わない場合、以下のエラーが発生します。


■ エラーメッセージ例 （以下は 2.3.1 の Teams Powershell での実行した場合のエラー）
```
Get-CsOnlineSession : リモート サーバー api.interfaces.records.teams.microsoft.com への接続に失敗し、次のエラー メッセ 
ージが返されました: WinRM クライアントは、サーバー名を解決できないため、要求を処理できません。詳細については、about_Rem
ote_Troubleshooting のヘルプ トピックを参照してください。
発生場所 C:\Program Files\WindowsPowerShell\Modules\MicrosoftTeams\2.3.1\net472\SfBORemotePowershellModule.psm1:63 文字:22
+     $remoteSession = & (Get-CsOnlineSessionCommand)
+                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : NotSpecified: (:) [Get-CsOnlineSession], PSRemotingTransportException
    + FullyQualifiedErrorId : PSRemotingTransportException,Microsoft.Teams.ConfigApi.Cmdlets.GetCsOnlineSession

Invoke-Command : パラメーター 'Session の引数を確認できません。引数が null または空です。null または空でない引数を指定して、コマンドを再度実行してください。
発生場所 C:\Program Files\WindowsPowerShell\Modules\MicrosoftTeams\2.3.1\net472\SfBORemotePowershellModule.psm1:9490 文字:38
+ ...    -Session (Get-PSImplicitRemotingSession -CommandName 'Get-CsOnline ...
+                 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : InvalidData: (:) [Invoke-Command]、ParentContainsErrorRecordException
```

### 原因について
Teams の Powershell のバージョンが 2.0.0 以降では、Teams 系のコマンドと Skype for Business 系のコマンドの 2 種類が含まれております。
Teams 系のコマンドは通常のプロキシ設定を使用いたしますが、Skype for Business 系のコマンドは、WinHttp を使用するようになっておりますが、WinHttp の既定の設定では、Proxy Server を使用せず、直接接続をする設定のため、Proxy Server を経由した通信ではなく、直接接続を試そうとし、インターネットとの通信ができないため、エラーとなります。

上述のため、Windows Server 2012 上で Teams の Powershell 2.0.0 以降を使用した場合に、Skype for Business 系のコマンドだけが TLS 1.2 の通信ができないため、コマンドの実行が失敗します。

### 対処策について
管理者でコマンドプロンプトを起動いただき、以下のk万度を実行いただくことで、Proxy Server の設定をしていただくことが可能です。
```
 - WININET と同じ設定を WINHTTP で行う場合は以下のコマンドを実行します
   netsh winhttp import proxy source=ie

 - WINHTTP 独自の Proxy 設定を行う場合は以下のコマンドを実行します
   netsh winhttp set proxy <ProxyServer>:<Port>
   * <ProxyServer> には Proxy Server の HOSTNAME または FQDN、<Port> には Proxy Server のポート番号を指定します
   * 必要に応じてオプション "bypass-list" を用いてバイパスする宛先を指定します
```
現在の設定を確認されたい場合は、以下を実行することで確認が可能です。
```
netsh winhttp show proxy
```

なお、WinHttp につきましては、通常のプロキシ設定では設定可能な PAC ファイルを用いた設定ができません。大変恐れ入りますが、PAC ではなく Proxy Server の指定で設定をしていただきますようお願いいたします。


### 関連情報
[Windows Server 2012 の OS を使用している環境で、Teams の Powershell を使用する場合には、Winhttp の TLS1.2 対応の修正プログラムが必要](URL)