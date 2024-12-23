---
title: 新しい Teams の既知の問題について
date: 2024-06-26 17:30:00
tags:
- Information
- Teams
- New Teams
- Teams 2.1
---
# 新しい Teams の既知の問題について
こんにちは。Unified Communications サポート チームです。  
いつも Microsoft Teams をご利用いただきありがとうございます。  
既に、新しい Teams の提供を開始し、多くのお客様が新しい Teams への移行計画を進めていただいている状況かと存じます。一方で、新しい Teams において、いくつかの問題が確認されており、特定の言語環境でのみ発生する問題などの情報については、弊社の[公開情報](https://learn.microsoft.com/ja-jp/microsoftteams/new-teams-known-issues)が、全体に関連する問題についての情報提供になっておりますため、情報の提供に至れておりません。そのため、今回は新しい Teams の既知の問題に関しての補完情報をお伝えいたします。併せて、よくお問い合わせをいただく制限事項関連につきましても、まとめてご提供させていただき、皆様が快適に新しい Teams をご利用いただくための、一助となりますと幸いでございます。     

なお、本記事については、最大限定期的な更新を努めて参りますが、新しい Teams の開発が日々進められていることから、一部の情報については、リアルタイムでの更新が叶わない可能性もございますこと、あらかじめご理解いただけますと幸いでございます。また、今回の記事では、主にお問い合わせいただいた事象の内、弊社開発部門によって既知の問題や制限事項として認定されたものをご案内しております。その他にも、問題として考えられる事象を確認された場合には、ぜひ弊社サポートまでお問い合わせいただけますと幸いでございます。  

## 日本語環境で確認された問題
日本語環境で発生が確認された問題として、下記のような事象を確認しております。
<table width="250" border="1">
    <tr>
        <td>問題の内容</td>
        <td>対応状況</td>
        <td>回避策</td>
        <td>補足事項</td>   
    </tr>
    <tr>
        <td>チャットへの文字入力が出来ない状況が発生する</td>
        <td>修正を展開済み<br>※ 一部のシナリオにおいて、同様の事象が再現することを確認しており、現在詳細の確認および査を進めています。</td>
        <td></td>
        <td>こちらの<a href="https://jpucsupport.github.io/blog/teams/Teams%20-%20%E3%83%81%E3%83%A3%E3%83%83%E3%83%88%E3%81%B8%E3%81%AE%E6%96%87%E5%AD%97%E5%85%A5%E5%8A%9B%E3%81%8C%E5%87%BA%E6%9D%A5%E3%81%AA%E3%81%84%E7%8A%B6%E6%B3%81%E3%81%8C%E7%99%BA%E7%94%9F%E3%81%99%E3%82%8B/" title="Title">ブログ</a>にて記載の内容と同様。</td>
    </tr>
    <tr>
        <td>Web 版および VDI 環境において、会議通知の会議タイトルが文字化けする</td>
        <td>修正を展開済み</td>
        <td></td>
        <td>初回起動時に事象が再現する場合には、一度再起動が必要となります。</td>
    </tr>
    <tr>
        <td>一部のシナリオにおいて、入力文字が重なる</td>
        <td>弊社開発部門にて、調査が進められている状況。修正時期は現時点で未定。</td>
        <td></td>
        <td>// シナリオ<br>- "・" と "「" を入力した場合<br>- 括弧類("「" "」" , "『" "』",  "【" "】") を続けて入力した場合<br> - "「" や "」" を連続して入力した場合。</td>
    </tr>
</table>

## 重要性が高いと判断される問題
弊社公開情報にてお伝えできていないものの、現在対応が進められている問題として、下記のような事象がございます。
<table width="200" border="1">
    <tr>
        <td>問題の内容</td>
        <td>対応状況</td>
        <td>回避策</td>
        <td>補足事項</td>
    </tr>
    <tr>
        <td>ダウンロードした PDF ファイルを [ファイルを開く] より開けない</td>
        <td>弊社開発部門にて、調査および修正が進められている状況。修正時期は現時点で未定。</td>
        <td>Teams のダウンロード通知上の、ファイルアイコンからエクスプローラーを開き、ダウンロード ファルダから開く。</td>
        <td></td>
    </tr>
    <tr>
        <td>新しい Teams をインストール後、クラシック Teams をアンインストールすると、Outlook の Teams 会議アドインが消える</td>
        <td>修正を展開済み</td>
        <td></td>
        <td>事象が改善しない場合は、一度 Teams と Outlook を完全に終了 (タスクバーにも表示されない状況) の上、Teams、Outlook の順に再度起動を実施</td>
    </tr>
    <tr>
        <td>ステータス メッセージの設定で、[他のユーザーが自分にメッセージを送る時に表示する] と [ステータス メッセージの有効期限] が Teams クライアントの再起動で消える</td>
        <td>弊社開発部門にて、調査が進められている状況。修正時期は現時点で未定。</td>
        <td>表示上の問題となります。最初に設定した内容で設定はされているため、本問題が改善するまでの間、設定は有効になっているという形でご使用いただけますと幸いです。</td>
        <td></td>
    </tr>
    <tr>
        <td>Outlook プロファイル カード内のプレゼンスが "退席中" や "オフライン" の時に経過時間が表示されない</td>
        <td>弊社開発部門にて、調査が進められている状況。修正時期は現時点で未定。</td>
        <td>新しい Teams のプロファイル カードから確認する。</td>
        <td></td>
    </tr>
</table>

## 重要性が高いと判断される制限事項
現時点では、下記のような機能が、新しい Teams の制限事項として認識されております。
<table width="300" border="1">
    <tr>
        <td>制限事項の内容</td>
        <td>補足事項</td>   
    </tr>
    <tr>
        <td>配信の最適化 (DO) について、ダウンロード モード 100 はサポートされない</td>
        <td><a href="https://learn.microsoft.com/ja-jp/microsoftteams/new-teams-deploy-using-policies?tabs=teams-admin-center#prerequisite" title="Title">公開情報</a>に記載<br>DO が 100 に設定されている場合には、新しい Teams の自動更新が失敗する等の事象が発生する。<br>※ DO の概要は<a href="https://learn.microsoft.com/ja-jp/windows/deployment/do/waas-delivery-optimization" title="Title">公開情報</a>を、設定方法につきましては<a href="https://jpwinsup.github.io/blog/2022/02/28/WindowsUpdate/DO/AboutDO_2/" title="Title">サポートブログ</a>をご参照ください。</td>
    </tr>
    <tr>
        <td>タスク バー (システム トレイ) の右端にある通知領域からサインアウトする機能が利用できない</td>
        <td><a href="https://learn.microsoft.com/ja-jp/microsoftteams/new-teams-whats-changing" title="Title">公開情報</a>に掲載<br>同様の方法として、コマンドプロンプトで Taskkill コマンドを実行することで完全にプロセスを終了する方法がある。<br>コマンド例: <code>taskkill /IM ms-teams.exe /F</code><br>* 強制的に ms-teams.exe のプロセスを終了する </td>
    </tr>
    <tr>
        <td>VDI 環境において、通知がタスクバーよりも上部に表示される</td>
        <td>入力エリアや他のアプリのトースト通知による遮蔽を避けるための仕様。</td>
    </tr>
</table>

New Teams への切り替えにより、さらに快適なクライアント環境を提供させていただくことを目指しております。  
大幅なアーキテクチャの変更に伴いご迷惑をおかけしており恐縮ではございますが、ご理解いただけますと幸いです。

NOTE:  
- 2024 年 1 月 18 日に、初版を公開しました。
- 2024 年 1 月 18 日に、第 2 版を公開しました。
- 2024 年 2 月 7 日に、第 3 版を公開しました。
- 2024 年 2 月 9 日に、第 4 版を公開しました。
- 2024 年 2 月 19 日に、第 5 版を公開しました。
- 2024 年 2 月 21 日に、第 6 版を公開しました。
- 2024 年 2 月 28 日に、第 7 版を公開しました。
- 2024 年 2 月 28 日に、第 8 版を公開しました。
- 2024 年 2 月 28 日に、第 9 版を公開しました。
- 2024 年 4 月 17 日に、第 10 版を公開しました。
- 2024 年 5 月 9 日に、第 11 版を公開しました。
- 2024 年 5 月 13 日に、第 12 版を公開しました。
- 2024 年 6 月 3 日に、第 13 版を公開しました。
- 2024 年 6 月 26 日に、第 14 版を公開しました。
- 2024 年 10 月 16 日に、第 15 版を公開しました。