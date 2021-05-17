---
title: Skype for Business アプリケーションの起動抑止について
date: 2021-05-14 00:00:00
tags:
 - Skype for Business Online
 - Client
---

こんにちは、Unified Communications サポート チームです。  
いつも Lync/Skype for Business をご利用いただきありがとうございます。  

2021 年 7 月 31 日で Skype for Business Online のサービス提供を終了させていただくため、ご利用中のお客様は Microsoft Teams への移行を進めていただいているかと存じます。Microsoft Teams への移行が完了し、Skype for Business の利用は停止したいものの、何らかの理由によりアプリケーションのアンインストールは実施したくないといったお問い合わせをいただくことがございます。今回は Skype for Business の起動を防止する方法について紹介させていただきます。

## Office の管理テンプレートを用いる方法

Skype for Business クライアントが起動しないように防止する設定が、Office の管理用テンプレートで提供されています。管理用テンプレートの [Microsoft Lync の実行を防止する] を有効にすると、ユーザーが Skype for Business クライアントを起動しても、即座に終了する動作となります。  

- [ユーザーの構成] > [ポリシー] > [管理テンプレート] > [Skype for Business 2016] > [Microsoft Lync 機能のポリシー]  
  > ![](./sfb-preventrun01.png)  
  > ※ Office 2013(Lync 2013/SfB 2015) の場合は、[Microsoft Lync 2013] > [Microsoft Lync 機能のポリシー] です。  
- [Microsoft Lync の実行を防止する] を有効に設定  
  > ![](./sfb-preventrun02.png)  
  > ※コンピューターに対して適用する場合は、[コンピューターの構成] をご利用ください。  

管理用テンプレートに関する詳細について、以下に関連する公開情報を提示いたします。

- Lync / Skype for Business クライアントのポリシーに関して  
  > クライアント ブートストラップ ポリシーの構成  
  > [https://docs.microsoft.com/ja-jp/skypeforbusiness/deploy/deploy-clients/configure-client-bootstrapping-policies](https://docs.microsoft.com/ja-jp/skypeforbusiness/deploy/deploy-clients/configure-client-bootstrapping-policies)  

- Office 管理用テンプレートの使い方について  
  > Office の管理用テンプレートを使用してグループ ポリシー (GPO) で Office 365 ProPlus を制御する  
  > [https://answers.microsoft.com/ja-jp/msoffice/forum/msoffice_o365admin-mso_dep365-mso_o365b/office/3ec9d79c-44ec-4273-97e2-2a6f3a1fd8ef](https://answers.microsoft.com/ja-jp/msoffice/forum/msoffice_o365admin-mso_dep365-mso_o365b/office/3ec9d79c-44ec-4273-97e2-2a6f3a1fd8ef)  

- Office 管理用テンプレートのダウンロードサイト  
  > Office 2013 (Lync 2013/Skype for Business 2015)  
  > [https://www.microsoft.com/en-us/download/details.aspx?id=35554](https://www.microsoft.com/en-us/download/details.aspx?id=35554)  

  > Microsoft 365 Apps / Office 2016 / Office 2019  (Skype for Business 2016)  
  > [https://www.microsoft.com/en-us/download/details.aspx?id=49030](https://www.microsoft.com/en-us/download/details.aspx?id=49030)  

## レジストリを追加する方法  

ワークグループ環境など、管理テンプレートを用いた配布が行えない環境などにおいては、以下のレジストリを直接追加して対応します。  

- コンピューター単位の場合  
  > Office 2013 (Lync 2013/Skype for Business 2015)  
  >   レジストリ：HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Office\15.0\Lync  
  >   値の名前　：PreventRun  
  >   値の種類　：REG_DWORD  
  >   値　　　　：1  

  > Microsoft 365 Apps / Office 2016 / Office 2019 (Skype for Business 2016)  
  >   レジストリ：HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Office\16.0\Lync  
  >   値の名前　：PreventRun  
  >   値の種類　：REG_DWORD  
  >   値　　　　：1  

- ユーザー単位の場合
  > Office 2013 (Lync 2013/Skype for Business 2015)  
  >   レジストリ：HKEY_CURRENT_USER\SOFTWARE\Policies\Microsoft\Office\15.0\Lync  
  >   値の名前　：PreventRun  
  >   値の種類　：REG_DWORD  
  >   値　　　　：1  

  > Microsoft 365 Apps / Office 2016 / Office 2019 (Skype for Business 2016)  
  >   レジストリ：HKEY_CURRENT_USER\SOFTWARE\Policies\Microsoft\Office\16.0\Lync  
  >   値の名前　：PreventRun  
  >   値の種類　：REG_DWORD  
  >   値　　　　：1  

## 初回起動時に自動起動を有効化しない方法

Skype for Business クライアントは、初回起動時に自動起動を有効化します。起動を防止する設定を実施したとしても、あくまで起動直後に強制終了する動作となるため、ユーザーが Skype for Business クライアントの起動を試みてしまうと自動起動の設定が有効化されてしまいます。あらかじめ以下のレジストリを配布することにより、すでに起動したことがある環境と判断させ、自動起動の有効化を防ぐことが可能です。

- ユーザー単位のみとなります  
  > Office 2013 (Lync 2013/Skype for Business 2015)  
  > レジストリ：HKEY_CURRENT_USER\SOFTWARE\Microsoft\Office\15.0\Lync  
  > 値の名前　：FirstRun  
  > 値の種類　：REG_DWORD  
  > 値　　　　：1  

  > Microsoft 365 Apps / Office 2016 / Office 2019 (Skype for Business 2016)  
    > レジストリ：HKEY_CURRENT_USER\SOFTWARE\Microsoft\Office\16.0\Lync  
  > 値の名前　：FirstRun  
  > 値の種類　：REG_DWORD  
  > 値　　　　：1  

