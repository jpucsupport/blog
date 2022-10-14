---
title: Skype - クラウド サービス上での Skype Web SDK の利用について
date: 2022-10-14 15:00:00
tags:
  - Skype for Business Online
  - Information
---

# Skype - クラウド サービス上での Skype Web SDK の利用について

こんにちは。Unified Communications サポート チームです。
いつも Microsoft Teams をご利用いただきありがとうございます。  
<br>
Skype Web SDK は、Skype for Business Online もしくはオンプレミス Skype for Business Server でご利用いただける SDK として提供されており、これまで自社アプリ等に Skype for Business の機能・Skype for Business と連携する機能を組み込む場合などにご利用いただいておりました。
この Skype Web SDK のサポート状況について補足説明させていただきます。  
<br>

## クラウド環境におけるサポート終了について
Skype Web SDK は、Skype for Business Online の廃止されている現在、クラウド環境における利用はすでにサポートを終了しています。  

Skype for Business Online は、去る 2021 年 7 月に廃止されております。  
Skype Web SDK は、あくまで Skype for Business Online ユーザー向けに提供されていた機能となります。
Microsoft Teams ユーザーでの利用は想定されておらず、Microsoft Teams に対して直接接続し、操作等を行う機能は有していません。  
そのため、Skype Web SDK は Skype for Business Online の廃止に伴いましてその役割を終えており、現在クラウド環境における利用はサポートされていないことをご理解くださいますようお願いいたします。  

### 補足
Skype for Business Online が廃止された 2021 年 7 月以降も、一部機能の継続提供のため、内部的には Skype for Business Online のインフラストラクチャが継続して利用されている状況がありました。
また、これにより、結果的に、Skype for Business Online が廃止され Microsoft Teams に移行したユーザーにおいても Skype Web SDK が動作する状況にありました。  

このように実際には Skype Web SDK が動作する状況や、また Skype Web SDK の代替となる機能の提供に不十分な点もあったことから、Skype for Business Online の廃止後もそのまま Skype Web SDK をご利用されているケースがありました。  
しかしながら、一部機能のために内部的には継続して利用されていた Skype for Business Online のインフラストラクチャも、廃止以降、縮小が進んでおり、下記公開情報にあるように 2022 年 6 月 30 日以降 Skype for Business Online のインフラストラクチャの使用停止が進められています。

(参考) 
[Skype for Business Online のサポート終了](https://learn.microsoft.com/ja-jp/microsoftteams/skype-for-business-online-retirement)  

また、Skype for Business Online のインフラストラクチャの使用停止により、これまでは結果的に利用できていた Skype Web SDK が動作しなくなる、完全にご利用いただけなる状況が確認されています。  
そのため、これまで Microsoft Teams へ移行後も実際に動作することや、代替の機能の提供がないことから Skype Web SDK の利用を継続されていたお客様におかれましても、Skype Web SDK からの移行をご検討ください。  
<br>

## Skype Web SDK からの移行について
これまで Skype for Business Online において Skype Web SDK が提供していたものと同様の機能が、Microsoft Teams においては Microsoft Graph や Azure Communication Services (ASC) といった API/SDK によって提供されています。  
そのため、Microsoft Teams ユーザーに対して Skype Web SDK を利用したアプリ・機能を提供していた場合には、当該アプリ・機能の実装を Microsoft Graph や ASC に移行することをご検討ください。  
既存の機能に対応する Microsoft Graph、ASC の機能については、下記公開情報をご参照ください。

(参考) 
[Skype Web SDK > Skype for Business Online Retirement](https://learn.microsoft.com/en-us/skype-sdk/websdk/docs/skypewebsdk#skype-for-business-online-retirement)  
<br>

Skype Web SDK のサポート状況については事前に十分な案内がなかった状況もあり恐れ入りますが、上記の通り、ご利用のお客様に置かれましてはご検討・ご対応をお願いいたします。  