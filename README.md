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

記事をアーカイブするときは、Markdown の front matter の `tags` に `Archived` を追加し、`archived_date: 'YYYY-MM-DD'` にアーカイブ日を指定します。`Last Update` に表示される `date` は変更しません。`archived_date` の指定がない既存記事は、従来どおり告知にも `date` を表示します。
