---
title: Teams - 新しい Teams インストール時のアプリ インストーラーについて
date: 2024-04-09 12:00:00
tags:
 - Classic Teams
 - New Teams
 - Teams 2.1
 - VDI
---
# Teams - 新しい Teams インストール時のアプリ インストーラーについて
こんにちは。Unified Communications サポート チームです。
いつも Microsoft Teams をご利用いただきありがとうございます。

今回はアプリ インストーラーがインストールされていない、または古いバージョンの場合に新しい Teams をインストールが失敗する事象を説明させていただきます。

## 事象の詳細について
新しい Teams のインストールを試みた際に [アプリ パッケージを開くことができません] 画面が表示され、以下のエラー メッセージが表示されます。
 > エラー メッセージ「このアプリパッケージは、アプリ インストーラーによるインストールをサポートしていません。特定の制限付き機能を使用しているためです。」

## アプリ インストーラーとは
アプリ インストーラーは、Windows の一部として付属しており、これによって MSIX ファイルと MSIXBundles を簡単にインストールできるようになります。
アプリ インストーラーは既定では自動的に更新されます。
そのため、アプリ インストーラーが古い状態になっている環境は何かしらの要因で自動更新が行えないと推察されます。

オフライン環境やストアの接続を制限しているなどで自動更新が行えない環境ではパッケージやアプリ インストーラー自体をオフライン インストーラーとして入手していただきインストールする必要がございます。

## 事象の対処方法
以下をご確認いただき、バージョンが 1.22.10861.0 よりも低いバージョンの場合は、手順に従いバージョンを更新いただき、事象が改善するかをご確認くださいますようお願いいたします。
 * 1.22.10861.0 は 2024/04/09 現在の最新バージョンです

- アプリ インストーラーのバージョンの確認方法
1．Powershell を起動します。
2．以下のコマンドを実行して Version を確認します。
(Get-AppxPackage Microsoft.DesktopAppInstaller).Version
* 万が一、表示されない場合、Get-AppxPackage Microsoft.DesktopAppInstaller を実行して Version 情報が表示されるかご確認ください

- バージョンを更新する方法
1. 以下の URL にアクセスして、Microsoft.VCLibs.x64.14.00.Desktop.appx を入手します。
https://aka.ms/Microsoft.VCLibs.x64.14.00.Desktop.appx

2. PowerShell から以下のコマンドを実行し、Microsoft.VCLibs.x64.14.00.Desktop.appx をインストールします。
Add-AppxPackage Microsoft.VCLibs.x64.14.00.Desktop.appx

3. 以下の URL にアクセスして、Microsoft.UI.Xaml.2.7.x64.appx を入手します。
https://github.com/microsoft/microsoft-ui-xaml/releases/download/v2.7.3/Microsoft.UI.Xaml.2.7.x64.appx

4. PowerShell から以下のコマンドを実行し、Microsoft.UI.Xaml.2.7.x64.appx をインストールします。
Add-AppxPackage Microsoft.UI.Xaml.2.7.x64.appx

5. 以下の URL にアクセスして、Microsoft.UI.Xaml.2.8.x64.appx を入手します。
https://github.com/microsoft/microsoft-ui-xaml/releases/download/v2.8.6/Microsoft.UI.Xaml.2.8.x64.appx

6. PowerShell から以下のコマンドを実行し、Microsoft.UI.Xaml.2.8.x64.appx をインストールします。
Add-AppxPackage Microsoft.UI.Xaml.2.8.x64.appx

7. 以下の URL にアクセスして、Microsoft.DesktopAppInstaller_8wekyb3d8bbwe.msixbundle を入手します。
https://aka.ms/getwinget

8. PowerShell から以下のコマンドを実行し、Microsoft.DesktopAppInstaller_8wekyb3d8bbwe.msixbundle をインストールします。
Add-AppxPackage Microsoft.DesktopAppInstaller_8wekyb3d8bbwe.msixbundle

9. 手順8 でエラーにならずにインストールできた場合は、次のコマンドでバージョン情報が表示されるか確認ください。
(Get-AppxPackage Microsoft.DesktopAppInstaller).Version
#Version が 1.22.10861.0 になっていることを確認します。


<br />

NOTE:  
- 2024 年 4 月 9 日に、初版を公開しました。