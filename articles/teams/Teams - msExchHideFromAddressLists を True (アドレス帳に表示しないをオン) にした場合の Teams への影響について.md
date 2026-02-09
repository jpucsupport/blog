---
title: Teams - msExchHideFromAddressLists を True (アドレス帳に表示しないをオン) にした場合の Teams への影響について
date: 2022-04-18 15:00:00
tags:
  - Teams
  - Search
  - Information
---

# Teams - msExchHideFromAddressLists を True (アドレス帳に表示しないをオン) にした場合の Teams への影響について
[!NOTE]
2026-02-09 更新
Teams の検索動作については、MC1168293 により更新がされています。[こちら](https://jpucsupport.github.io/blog/teams/Teams%20-%20%E3%82%B2%E3%82%B9%E3%83%88%20%E3%83%A6%E3%83%BC%E3%82%B6%E3%83%BC%E3%81%AE%E6%A4%9C%E7%B4%A2%E5%8B%95%E4%BD%9C%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6/#%E3%81%AF%E3%81%98%E3%82%81%E3%81%AB)の記事でもご紹介しておりますので、あわせてご参照ください。
***************
こんにちは。Unified Communications サポート チームです。
いつも Microsoft Teams をご利用いただきありがとうございます。

Exchange Server/Online 側にて msExchHideFromAddressLists を True (アドレス帳に表示しないをオン) にした場合、Teams 上でのユーザー検索へ影響が発生します。  
ただし、Teams は検索を行う場所により動作が異なりますので、注意が必要となります。

### 1. 検索箇所について
Teams でのユーザー検索は、大きく以下の 2 つがあります。
1. [チャット] ＞ [新しいチャット] を選択し、ユーザー検索をする場合  
![チャット](./chat.png) 
1. Teams 上部にある PowerBar でユーザーを検索する場合  
![チャット](./PowerBar.png) 


### 2. それぞれの影響について
以下のように、検索箇所で動作が異なりますので、ご注意ください。

1. [チャット] ＞ [新しいチャット] を選択し、ユーザー検索をする場合  
基本的には影響はなく、ユーザーを検索することが可能です。
ただし、[Exchange アドレス帳ポリシーを使用したディレクトリ検索の範囲指定](https://docs.microsoft.com/ja-jp/microsoftteams/teams-scoped-directory-search#turn-on-scoped-directory-search) の設定をオンにしている場合は、ユーザー検索が出来なくなる場合があります。  

1. Teams 上部にある PowerBar でユーザーを検索する場合  
msExchHideFromAddressLists を True (アドレス帳に表示しないをオン) にしたユーザーは検索出来なくなります。


今回は、msExchHideFromAddressLists を True (アドレス帳に表示しないをオン) にした場合の Teams への影響についてご案内いたしました。  
設定による動作の違いに注意いただき、Teams ライフをお楽しみください。
