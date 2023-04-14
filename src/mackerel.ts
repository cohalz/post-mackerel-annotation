import * as core from '@actions/core'
import * as http from '@actions/http-client'

const API_BASE_URL = 'https://api.mackerelio.com'

interface AnnoationData {
  readonly title: string
  readonly description: string
  readonly from: number
  readonly to: number
  readonly service: string
  readonly roles?: string[]
}

export function prepareHttpClient(apiKey: string): http.HttpClient {
  const client = new http.HttpClient(
    'cohalz/post-mackerel-annotation (https://github.com/cohalz/post-mackerel-annotation)'
  )
  client.requestOptions = {
    headers: {
      'X-Api-Key': apiKey,
      'Content-Type': 'application/json'
    }
  }
  return client
}

// https://mackerel.io/api-docs/entry/graph-annotations#create
export function constructGraphAnnotationEndpoint(): string {
  const url = new URL('/api/v0/graph-annotations', API_BASE_URL)
  return url.toString()
}

export function constructGraphAnnotationData(
  title: string,
  description: string,
  from: number,
  to: number,
  service: string,
  roles: string[]
): string {
  const annotationData: AnnoationData = {
    title,
    description,
    from,
    to,
    service,
    roles
  }

  return JSON.stringify(annotationData)
}

export async function createGraphAnnotation(
  apiKey: string,
  title: string,
  description: string,
  from: number,
  to: number,
  service: string,
  roles: string[]
): Promise<http.HttpClientResponse> {
  const client = prepareHttpClient(apiKey)
  const endpoint = constructGraphAnnotationEndpoint()
  const postData = constructGraphAnnotationData(
    title,
    description,
    from,
    to,
    service,
    roles
  )

  core.debug(`Endpoint: ${endpoint}`)
  core.debug(`PostData: ${postData}`)

  const result = await client.post(endpoint, postData)
  if (result.message.statusCode !== 200) {
    const response = await result.readBody()
    throw new Error(
      `StatusCode: ${result.message.statusCode}, Message: ${response}`
    )
  }
  return result
}
