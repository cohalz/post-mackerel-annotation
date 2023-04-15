<a href="https://github.com/cohalz/post-mackerel-annotation/actions"><img alt="post-mackerel-annotation status" src="https://github.com/cohalz/post-mackerel-annotation/workflows/build-test/badge.svg"></a>

# post-mackerel-annotation

post-mackerel-annotation is a simple GitHub Action for posting a Graph Annotation to [Mackerel](https://mackerel.io/).

This action is inspired by the [yutailang0119/action-mackerel-api](https://github.com/yutailang0119/action-mackerel-api) action, but focuses only on posting a graph annotation as defined in https://mackerel.io/api-docs/entry/graph-annotations#create.

## Inputs

- `api-key` (required): API Key value of Mackerel. Should be stored in GitHub Secrets.
- `title` : (required): Annotation title.
- `description`: Annotation details.
- `from` : Starting time (default: current time).
- `to` : Ending time (default: current time).
- `service` (required): Service name.
- `roles` : Role name array (omit this field to register an annotation related to the service).

## Example Usage

```yaml
uses: cohalz/post-mackerel-annotation@v1
with:
  api-key: ${{ secrets.MACKEREL_APIKEY }}
  title: 'deploy application'
  description: 'link: https://example.com/'
  from: 1484000000
  to: 1484000030
  service: ExampleService
  roles: |
    ExampleRole1
    ExampleRole2
```

## Contributing

See the [Contribution Guide](https://github.com/cohalz/post-mackerel-annotation/blob/main/CONTRIBUTING.md).

## Author

cohalz ([GitHub](https://github.com/cohalz), [Twitter](https://twitter.com/cohalz))

## Special Thanks

Inspired by [stefafafan/post-mackerel-metrics](https://github.com/stefafafan/post-mackerel-metrics) (thanks @stefafafan).
