import { expect, test } from '@jest/globals'
import {
    constructGraphAnnotationData,
    constructGraphAnnotationEndpoint,
    prepareHttpClient
} from '../src/mackerel'

test('prepareHttpClient', () => {
    const apiKey = 'dummy'
    const client = prepareHttpClient(apiKey)
    expect(client.userAgent).toBe(
        'cohalz/post-mackerel-annotation (https://github.com/cohalz/post-mackerel-annotation)'
    )
    expect(client.requestOptions?.headers).toStrictEqual({
        'Content-Type': 'application/json',
        'X-Api-Key': 'dummy'
    })
})

test('constructServiceMetricEndpoint', () => {
    const serviceName = 'foo-service'
    expect(constructGraphAnnotationEndpoint()).toBe(
        'https://api.mackerelio.com/api/v0/graph-annotations'
    )
})

test('constructServiceMetricData', () => {
    const metricName = 'metric-a'
    const metricValue = 12345.678
    const metricTime = 1670747231
    const title = 'title'
    const description = 'description'
    const from = 1670747231
    const to = 1670747231
    const service = 'service'
    const roles = ['roles']
    const data =
    {
        title,
        description,
        from,
        to,
        service,
        roles
    }


    expect(constructGraphAnnotationData(title,
        description,
        from,
        to,
        service,
        roles)).toBe(
            JSON.stringify(data)
        )
})
