import { INodePropertyOptions, INodeProperties } from 'n8n-workflow'

export default function runHook (
  option: INodePropertyOptions,
  properties: INodeProperties[]
): {
  option: INodePropertyOptions
  properties: INodeProperties[]
} {
  return {
    option,
    properties,
  }
}
