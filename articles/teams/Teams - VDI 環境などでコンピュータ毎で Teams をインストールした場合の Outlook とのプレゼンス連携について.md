---
title: Teams - VDI 環境などでコンピュータ毎で Teams をインストールした場合の Outlook とのプレゼンス連携について
date: 2022-09-09 16:00:00
tags:
  - Presence
  - Outlook
  - Teams
---

# Teams - VDI 環境などでコンピュータ毎で Teams をインストールした場合の Outlook とのプレゼンス連携について

こんにちは。Unified Communications サポート チームです。  
いつも Microsoft Teams をご利用いただきありがとうございます。  

AVD などをはじめとする VDI 環境にて Microsoft Teams をご利用いただくケースが増えております。
このような VDI 環境では、Teams をコンピュータ毎のインストール (ALLUSER=1 のオプションを付与してインストール) で展開されているお客様が多くいらっしゃいます。
コンピュータ毎のインストールで Teams が展開されている環境において、Outlook 上のプレゼンス連携を利用する場合、現時点では Skype for Business クライアントをインストールしていただく必要がございます。  
すでに Skype for Business Online がリタイアしており、Skype for Business クライアントを使用する必要がない状況ではございますが、Teams のプレゼンスを Outlook 上に連携するために必要なコンポーネントとなりますので、Teams のみを使用する場合であっても Skype for Business クライアントのインストール実施いただきますようお願いいたします。  

## Skype for Business クライアントが必要な理由について
当初 Teams と Outlook のプレゼンスを連携して使用する場合には、Skype for Business クライアントのインストールが必要条件とされておりました。
その後エンハンスが行われ、コンピュータ毎で Teams クライアントをインストールしていない環境 (通常の PC などの環境で使用される Teams の場合) においてはこの要件が撤廃されております。
そのため、一般的な環境においては Skype for Business クライアントがインストールされていない場合でも、Teams と Outlook とのプレゼンス連携が機能するようになりました。  
しかしながら、コンピュータ毎のインストールで Teams クライアントを展開する場合につきましては、このエンハンスは検討段階であり、現時点でも Teams クライアント単体では Outlook とのプレゼンス連携が機能いたしません。
このため、コンピュータ毎のインストールで展開する VDI 環境において Outlook とのプレゼンス連携が必要な場合には、Skype for Business クライアントのインストールが必要となります。  

## 対処策について
大変恐れ入りますが、コンピュータ毎のインストールで Teams を展開している環境において Outlook とのプレゼンス連携を実現させたい場合は、Skype for Business クライアントをインストールしていただく以外の方法はございません。  

なお、Outlook とのプレゼンス連携には、Skype for Business クライアントがインストールされている環境だけが必要であり、Skype for Business クライアント自体が起動している必要はございません。
すでに Skype for Business クライアントを使用していない環境の場合は、クライアントが起動できない様にポリシーで制御することが可能です。
以下の関連情報をご参照いただき、Skype for Business アプリケーションの利用を停止いただくことをご検討くださいますようお願いいたします。  

### 関連情報
[Skype - Skype for Business アプリケーションの起動抑止について](https://jpucsupport.github.io/blog/Skype%20for%20business/Skype%20-%20Skype%20for%20Business%20%E3%82%A2%E3%83%97%E3%83%AA%E3%82%B1%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%81%AE%E8%B5%B7%E5%8B%95%E6%8A%91%E6%AD%A2%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6/)