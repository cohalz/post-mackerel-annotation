import * as core from '@actions/core'
import { createGraphAnnotation } from './mackerel'

async function run(): Promise<void> {
  try {
    const title: string = core.getInput('title', { required: true })
    const description: string = core.getInput('description', {
      required: false
    })
    const from: string = core.getInput('from', { required: false })
    const to: string = core.getInput('to', { required: false })
    const apiKey: string = core.getInput('api-key', { required: true })
    const service: string = core.getInput('service', { required: true })
    const roles: string[] = core.getMultilineInput('roles', {
      required: false
    })

    const currentTime = Math.floor(Date.now() / 1000)
    const fromTime = from !== '' ? Number(from) : currentTime
    const toTime = to !== '' ? Number(to) : currentTime

    core.debug(
      `Service: ${service}, Roles: ${roles}, Title: ${title}, Description: ${description}, From: ${fromTime}, To: ${toTime}`
    )

    await createGraphAnnotation(
      apiKey,
      title,
      description,
      fromTime,
      toTime,
      service,
      roles
    )
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
