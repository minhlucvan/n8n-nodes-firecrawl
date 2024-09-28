import { INodeProperties, INodeType } from 'n8n-workflow'

export default function runHook (properties: INodeProperties[]): {
  properties: INodeProperties[]
  methods: INodeType['methods']
} {
  return {
    properties,
    methods: {},
  }
}
