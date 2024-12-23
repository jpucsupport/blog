﻿---
title: Teams - 電子情報開示 Premium の検索結果にて、削除済みの共有チャネルのメッセージを選択するとデータの詳細が表示されない
date: 2024-11-12 14:30:00
tags:
  - Teams
  - Information
---

# Teams - 電子情報開示 Premium の検索結果にて、削除済みの共有チャネルのメッセージを選択するとデータの詳細が表示されない

こんにちは。Unified Communications サポート チームです。  
いつも Microsoft Teams をご利用いただきありがとうございます。  

現在、電子情報開示 Premium の検索結果にて、削除済みの共有チャネルのメッセージを選択すると、データの詳細が表示されない事象が確認されております。
同一事象が生じている場合には、本記事をご参照頂ければと存じます。

## 発生事象について
<再現手順>
1) 事前に、電子情報開示 Premium にて共有チャネルに投稿されたメッセージを検索し、検索結果が正しく返され、中のデータも表示されることを確認しておきます。
![チャネル削除前の検索](./BeforeDeletion.png)

2) 該当の共有チャネルを削除します。
3) 再度該当の削除された共有チャネルに投稿されたメッセージを検索すると、1) で確認した日時と同じ日時に投稿があったことは確認可能ですが、該当の投稿を選択すると、メッセージの本文や、その他詳細なデータが表示されません。 
![チャネル削除後の検索](./AfterSearch.png)

なお、本事象は共有チャネルのみ発生し、標準チャネルにおいては発生しません。

本事象については、弊社開発部門にて修正対応を進めておりましたが、2024 年 7 月頃に修正が展開されていることを確認しております。
この度は、お客様には大変ご不便をおかけしましたこと、改めてお詫び申し上げます。  
  

NOTE:  
- 2024 年 1 月 15 日に、初版を公開しました。
- 2024 年 11 月 12 日に、修正の展開について情報を追記しました。

