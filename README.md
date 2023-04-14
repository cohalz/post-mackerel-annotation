<a href="https://github.com/cohalz/post-mackerel-annotation/actions"><img alt="post-mackerel-annotation status" src="https://github.com/cohalz/post-mackerel-annotation/workflows/build-test/badge.svg"></a>

# post-mackerel-annotation

post-mackerel-annotation is a simple GitHub Action for posting a Graph Annotation to [Mackerel](https://mackerel.io/).

This action is inspired by the [yutailang0119/action-mackerel-api](https://github.com/yutailang0119/action-mackerel-api) action, but focuses only on posting a graph annotation as defined in https://mackerel.io/api-docs/entry/graph-annotations#create.

## Inputs

- `api-key` (required): API Key value of Mackerel. Should be stored in GitHub Secrets.
- `service-name` (required): The Mackerel service name you want to post metrics to.

## Outputs

- `time`: The time used to post the metric (epoch seconds).

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
