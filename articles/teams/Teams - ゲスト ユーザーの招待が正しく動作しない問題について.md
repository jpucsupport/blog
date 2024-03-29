---
title: Teams - ゲスト ユーザーの招待が正しく動作しない問題について
date: 2021-9-16 15:00:00
tags:
  - Teams
  - Information
  - Guest User
---

# Teams - ゲスト ユーザーの招待が正しく動作しない問題について

こんにちは。Unified Communications サポート チームです。
いつも Microsoft Teams をご利用いただきありがとうございます。

現在、一部の特定の条件において、Microsoft Teams、Live Events からゲスト招待されたユーザーが、一部サービスの利用ができない状況が生じている可能性がございます。
本記事では、この背景や、現時点で確認されている状況や対応策（今後更新される場合がございます）についてご案内いたしますので、同様の問題が生じている場合にご参照いただきたく存じます。
※後述の通り、一部の条件に合致した場合にのみ発生する問題となっており、すべての環境、ユーザーに影響を及ぼすものではありません。

### 1. 発生事象について
一部のご利用/運用環境において、以下のような事象が発生する場合がございます。

・ゲスト ユーザーが、招待されているチームの会議/チャットが利用できない
・ゲスト ユーザーが、招待されているライブ イベントに参加できない
・Microsoft Teams でメールアドレスを利用したユーザー検索ができない
・ゲスト ユーザー自身以外のユーザーから、当該ゲスト ユーザーのステータスを参照した場合に、常にオフライン表示になってしまう
・ゲスト ユーザーの Microsoft Teams 連絡先カードにメールアドレスが表示されず、空欄になってしまう
・ゲスト ユーザーをチームに追加した場合やライブ イベント/ Teams 会議の招待メールが送信されない

### 2. 影響を受ける条件について
以下の2つの条件の両方に合致するユーザーでのみ、問題が発生いたします。

1. 2021年5月中旬から7月末までに、新規でゲスト招待されたユーザーであること (2021年5月中旬より前に、Microsoft Teams 以外の製品でゲスト招待されている場合には影響を受けません）
1. "1" に該当する期間のゲスト招待時に、ゲスト招待する側のテナント上で、該当ゲスト ユーザーのメールアドレスが、連絡先オブジェクトとして登録されていた

### 3. 原因
本問題の原因は、2021年5月中旬以降に、Azure AD (以下、AAD) 側での実装変更に伴い、Microsoft 365 管理センター上の連絡先オブジェクト (コンタクト) にメール アドレスが登録されている (存在している) 状態で、同一メール アドレス宛にゲスト ユーザーの招待を行う操作を実施した場合、メール アドレスが重複するゲスト ユーザーの登録の際に、メール アドレスが重複しないよう Mail 属性や ProxyAddress 属性が空欄 (null) で設定される動作に変更されたことよるものです。
※ なお詳細は後述しますが、上記の動作変更は既に修正されているため、2021年7月末以後に招待したゲスト ユーザーには影響はございません。

上記の状態でも、AAD 上へ問題なくゲスト ユーザーは登録されますが、AAD を利用するサービスである Microsoft Teams において当該属性値が Null になる属性を扱う際に、適切にハンドリングできず予期せぬ状態となることから、"1. 発生事象について" にてご案内した問題が生じます。

以上のことから、ゲスト ユーザーが影響を受ける条件は、前述の "影響を受ける条件について" に記載の通りとなっております。

### 4. 弊社の対応について
本事象の発端となった AAD 側の実装変更について、他のサービスへの影響の考慮が不足していた状況であったことから、2021年7月末段階で、元の実装へのロールバックを実施しております。
そのため、本問題は、2021年5月中旬より前、また、2021年7月末より後にゲスト招待をしたゲスト ユーザー アカウントには影響いたしません。
しかしながら、すでに問題が生じる状況で登録されているゲスト ユーザー（2021年5月中旬から2021年7月末までに招待されたゲスト ユーザー）については、関連する属性が null のまま登録されている状況のため、引き続き問題が生じております。

現在、復旧方法について確認を進めておりますので、引き続き、状況のアップデートがありましたら、本Blog記事を更新させていただきます。
一部ユーザーに本問題の影響でご迷惑をおかけしておりますことをお詫びいたします。