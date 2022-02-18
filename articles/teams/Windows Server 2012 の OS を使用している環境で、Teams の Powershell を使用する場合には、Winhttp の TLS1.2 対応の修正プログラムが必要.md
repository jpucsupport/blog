---
title: Windows Server 2012 の OS を使用している環境で、Teams の Powershell を使用する場合には、Winhttp の TLS1.2 対応の修正プログラムが必要
date: 2022-02-03 00:00:00
tags:
  - Teams
  - PowerShell
---

# Windows Server 2012 の OS を使用している環境で、Teams の Powershell を使用する場合には、Winhttp の TLS1.2 対応の修正プログラムが必要

こんにちは。Unified Communications サポート チームです。
いつも Microsoft Teams をご利用いただきありがとうございます。

Windows Server 2012 の OS を使用している環境に、Teams の Powershell を使用し、サインイン後に、Get-Team などは正常に実行できますが、Get-CsOnlineUser などの YY-CsXXXXXX のコマンドを実行すると、以下のようなエラーが発生する場合がございます。

■ エラーメッセージ例 （以下は 2.3.1 の Teams Powershell での実行した場合のエラー）
```
Get-CsOnlineSession : リモート サーバー api.interfaces.records.teams.microsoft.com への接続に失敗し、次のエラー メッセージが返されました: WinRM クライアントは、サーバー名を解決できないため、要求を処理できません。詳細については、about_Remote_Troubleshooting のヘルプ トピックを参照してください。
発生場所 C:\Program Files\WindowsPowerShell\Modules\MicrosoftTeams\2.3.1\net472\SfBORemotePowershellModule.psm1:63 文字:22
+     $remoteSession = & (Get-CsOnlineSessionCommand)
+                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : NotSpecified: (:) [Get-CsOnlineSession],PSRemotingTransportException
    + FullyQualifiedErrorId : PSRemotingTransportException,Microsoft.Teams.ConfigApi.Cmdlets.GetCsOnlineSession

Invoke-Command : パラメーター 'Session の引数を確認できません。引数が null または空です。null または空でない引数を指定して、コマンドを再度実行してください。
発生場所 C:\Program Files\WindowsPowerShell\Modules\MicrosoftTeams\2.3.1\net472\SfBORemotePowershellModule.psm1:9490 文字:38
+ ...    -Session (Get-PSImplicitRemotingSession -CommandName 'Get-CsOnline ...
+                 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : InvalidData: (:) [Invoke-Command]、ParentContainsErrorRecordException
```

### 原因について
本事象ですが、以下の要因で発生します。

* Teams の Powershell のバージョンが 2.0.0 以降では、Teams 系のコマンドと Skype for Business 系のコマンドの 2 種類が含まれております。Teams 系のコマンドは通常のプロキシ設定を使用いたしますが、Skype for Business 系のコマンドは、Winhttp を使用するようになっております。
* Windows Server 2012 の場合、既定では Winhttp は TLS 1.2 に対応しておりません。
* 現在 Microsoft 365 サービスへの接続には、TLS 1.2 で接続できる必要があります。

上述のため、Windows Server 2012 上で Teams の Powershell 2.0.0 以降を使用した場合に、Skype for Business 系のコマンドだけが TLS 1.2 の通信ができないため、コマンドの実行が失敗します。

### 対処策について
Windows Server 2012 において、Winhttp を使用する通信を TLS 1.2 に対応できるように更新していただくことで対処可能です。以下にアクセスしていただき、更新プログラムを適用してください。

[Windows の WinHTTP で TLS 1.1 および TLS 1.2 を既定のセキュリティ で保護されたプロトコルとして有効にするための更新プログラム](https://support.microsoft.com/ja-jp/topic/windows-%E3%81%AE-winhttp-%E3%81%A7-tls-1-1-%E3%81%8A%E3%82%88%E3%81%B3-tls-1-2-%E3%82%92%E6%97%A2%E5%AE%9A%E3%81%AE%E3%82%BB%E3%82%AD%E3%83%A5%E3%83%AA%E3%83%86%E3%82%A3-%E3%81%A7%E4%BF%9D%E8%AD%B7%E3%81%95%E3%82%8C%E3%81%9F%E3%83%97%E3%83%AD%E3%83%88%E3%82%B3%E3%83%AB%E3%81%A8%E3%81%97%E3%81%A6%E6%9C%89%E5%8A%B9%E3%81%AB%E3%81%99%E3%82%8B%E3%81%9F%E3%82%81%E3%81%AE%E6%9B%B4%E6%96%B0%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0-c4bd73d2-31d7-761e-0178-11268bb10392)

### 補足
この問題は、以下の OS では発生しません。既定で Winhttp が TLS 1.2 に対応しています。
- Windows 8.1 以降
- Windows Server 2012 R2 以降