# Example

This is example CSS blog.

## Init/Update [blog theme](https://github.com/jpazureid/hexo-theme-jpazure) submodule

```shell
git submodule update -i
```

## Run/Stop Hexo server

```shell
docker-compose up

# Ctrl+C
docker-compose down
```

## Directory structure

```
example
├── .github
│   └── workflows
│       └── pages.yml  # Workflow definition for GitHub Action
├── .gitignore
├── .textlintrc
├── README.md
├── _config.yml        # Site configration
├── articles           # Blog articles
│   └── information
│       └── test.md    # Example post
├── docker-compose.yaml    # Configuration for container to run locally
├── github-issue-template.md
├── scaffolds
├── source
└── themes             # Blog themes
    └── jpazure (git submodule)
```

## アーカイブ日

記事をアーカイブするときは、Markdown の front matter の `tags` に `Archived` を追加します。告知には既定で `Last Update` と同じ `date` を表示します。告知だけに別の日付を表示したい場合は、`archived_date: 'YYYY-MM-DD'` を指定します。どちらの場合も `Last Update` に表示される `date` は変更しません。
