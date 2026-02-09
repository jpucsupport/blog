---
title: Teams - ゲスト ユーザーの検索動作について
date: 2026-02-09 11:00:00
tags:
  - Teams
  - Guest users
  - Search
---
# Teams - ゲスト ユーザーの検索動作について <!-- omit in toc -->
- [はじめに](#はじめに)
- [更新内容の概要（MC1168293 要約）](#更新内容の概要-MC1168293-要約)
- [変更点](#変更点)
- [留意点](#留意点) 
- [まとめ](#まとめ)
---

## はじめに
こんにちは、Unified Communications サポート チームです。
いつも Microsoft Teams をご利用いただきありがとうございます。

本記事では、Microsoft 365 管理センターのメッセージ センターで 2025 年 10 月 8 日 (UTC) に公開された MC1168293 による更新後の Teams クライアント上でのゲスト ユーザーの検索動作についてご紹介します。
*※ 本記事の内容は執筆時点 (2026 年 2 月現在) の情報、および動作に基づくものとなります。*

## 更新内容の概要（MC1168293 要約）
今回の変更により、Teams の検索動作が Outlook や Exchange の検索動作と統一され、ディレクトリの可視性管理がシンプルになりました。
**🔧 主なポイント**
- **Teams で “スコープ付きディレクトリ検索（Scoped Directory Search）” が不要に**
- **Exchange/Outlook と同じく、非表示ユーザー属性を参照して検索結果が判断される**
- **ゲスト ユーザーが People 検索に表示されるかは属性値で決定**

## 変更点
これまでは、Teams クライアント上でのディレクトリ検索について、Exchange のアドレス帳ポリシーを使用した “スコープ付きディレクトリ検索” を有効化することにより検索範囲を指定する必要がありました。

📖 参考公開情報
- [Teams でディレクトリを検索するときに表示できるユーザーを制限する][1]

現在は、“スコープ付きディレクトリ検索” による Teams クライアント上での検索範囲の指定が不要となり、ユーザーの表示/非表示は Exchange (Outlook) の検索動作と適合されるようになりました。

**ディレクトリ検索の表示有無を指定する属性値**

■ ゲスト ユーザーを表示する場合
――――――――――
<Entra ID の属性値>
ShowInAddressList : True

<Exchange Online の属性値>
HiddenFromAddressListsEnabled : False

<Exchange スキーマの属性値>
msExchangeHiddenFromAddressList : False


■ ゲスト ユーザーを非表示とする場合
――――――――――
<Entra ID の属性値>
ShowInAddressList : False

<Exchange Online の属性値>
HiddenFromAddressListsEnabled : True

<Exchange スキーマの属性値>
msExchangeHiddenFromAddressList : True

## 留意点
非表示とする属性値の場合でも、以下のそれぞれのパターンにおいて、メール アドレスの完全一致検索を行った場合は検索結果に表示される動作となります。
※ これは、管理者が意図した特定のゲストを招待・追加できるようにするための期待される動作です。

◆ People 検索
![](image-01.png)

◆ チャット開始時
![](image-02.png)

◆ チーム メンバーへ追加時
![](image-03.png)

なお、ゲスト ユーザーを非表示とする設定にしている場合でも、一度検索やチャットを行ったゲスト ユーザーについては、Teams クライアントのキャッシュ情報により、表示名や部分一致でも検索結果に候補として表示される場合がありますので、ご注意ください。

## まとめ
今回の更新により、Teams におけるユーザー検索は **Exchange/Outlook と統一された挙動**になり、
管理者は**属性値だけでユーザーの可視性をコントロールできる**ようになりました。
特にゲスト ユーザーの検索可否は問い合わせが多い領域のため、本記事の内容が動作理解に役立ちましたら幸いです。

[1]: https://learn.microsoft.com/ja-jp/microsoftteams/teams-scoped-directory-search "Teams でディレクトリを検索するときに表示できるユーザーを制限する"

<br />
NOTE:  
- 2026 年 2 月 9 日に、初版を公開しました。