---
title: Teams - 新規に作成されたチャネルの Notes タブにアクセスできない
date: 2023-11-16 10:30:00
tags:
  - Teams
  - Information
---
# Teams - 新規に作成されたチャネルの Notes タブにアクセスできない

こんにちは。Unified Communications サポート チームです。
いつも Microsoft Teams をご利用いただきありがとうございます。
<br />
現在、Microsoft Teams で、新規に作成されたチャネルの Notes タブにアクセスできないという事象が、一部の環境において確認されております。
同様の問題が生じている場合には、本記事をご参照ください。

## 発生事象について
Microsoft Teams で新規チャネルを作成すると、既定で Notes タブが作成され、OneNote が表示できるようになっております。

![Notes タブ](./UCBlog202308_NotesTab.png)

しかし、現在、この既定で作成される Notes タブにアクセスすると、エラーや真っ白な画面が表示され、OneNote が正常に表示されない事象が報告されています。
なお、本事象は、[+] から新たに追加した OneNote タブにアクセスする場合には発生しません。

## 事象の発生要因について
現在、既定で作成される Notes タブにアクセスすると、初回のアクセス時のみ、http://onenote.com にアクセスする動作が確認されております。
この URL は、現在公開されている「Office 365 の URL と IP アドレスの範囲」のリストに掲載されていない URLであることから、お客様の環境で、こちらのサイトに掲載されている URL のみ通信を許可するような構成をされている場合に、今回の事象である Notes タブが正常に表示されない事象が発生する可能性があります。

[Office 365 の URL と IP アドレスの範囲](https://learn.microsoft.com/ja-jp/microsoft-365/enterprise/urls-and-ip-address-ranges?view=o365-worldwide)
※ 上記サイトには、*.onenote.com のみの掲載となっております。

## 暫定的な回避策について
上記サイトに掲載されている URL のみをアクセス許可されている場合には、onenote.com を追加で許可していただくことで、Notes タブに正常にアクセスできるようになります。

## 修正の展開について
「Office 365 の URL と IP アドレスの範囲」のリストに掲載されていない onenote.com への通信が必要となっている動作は、本来想定される動作ではありませんでした。
そのため、この点を修正し、「Office 365 の URL と IP アドレスの範囲」のリストに掲載されている URL への通信のみを許可いただければ Notes タブをご利用いただけるよう修正を展開いたしました。
本修正につきましては、2023 年 9 月末に展開が完了しております。

なお、修正は展開されておりますものの、実装上の制限により、修正が展開される以前に作成された Notes タブに対しては動作が変更されず、引き続き初回利用時には onenote.com にアクセスする動作となります。
そのため、修正の展開以前に作成された Notes タブについては再作成いただく必要がございます。お手数をお掛けしますが、下記 [Notes タブの再作成について] 項を参照いただき、再作成いただきますようお願い申し上げます。
今後新しく作成される Notes タブについては、修正が展開されたため onenote.com へのアクセスは発生いたしません。

お客様には、ご不便をおかけ致しましたことをお詫び申し上げます。

## Notes タブの再作成について
【自動で作られる Notes タブと同じ状態を復元する場合】

1. Notes タブを右クリックし、[削除] をクリックします。
※ 本操作で Notes タブを削除しても、参照先となる OneNote ノートブックは削除されません。タブのみを削除する動作となります。

2. [タブを追加] より Wiki タブを新たに追加します。
3. 左メニューの Wiki アプリより 2. で追加した Wiki を選択し、任意の内容を記載します。
4. Wiki タブに戻り、[ノートにエクスポート] をクリックし、エクスポートを行います。
5. 作成されたタブ内の 3. で記載した内容を削除し、Wiki タブを削除します。

なお、現在 Wiki タブは廃止が進められているため、今後この方法は利用いただけなくなります。Wiki タブが完全に廃止された後は後述の方法をご利用ください。

【Wiki からエクスポートされたコンテンツが含まれる OneNote にタブからアクセスを行う場合】
※Notes タブ自体を再作成する方法ではございませんが、コンテンツにアクセスする方法として以下をご検討ください。

1. Notes タブを右クリックし、[削除] をクリックします。
※ Notes タブを削除しても、OneNote ノートブックは削除されない動作となります。

2. OneNote タブを作成し、既存の OneNote やセクションを選択します。
3. OneNote タブが作成されるため、任意のタブ名に変更ください。


<br />

NOTE:  
- 2023 年 8 月 25 日に、初版を公開しました。
- 2023 年 9 月 1 日に、第 2 版を公開しました。(体裁の修正)
- 2023 年 11 月 16 日に、修正の展開について情報を追記しました。