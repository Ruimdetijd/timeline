import props from "./props"
import DomainConfig from "./domain.config"

export class AggregateEntry {
	count: number
	year: number 
}

export class RawEv3nt {
	title: string
	date: string
}


export default class Config {
	public aggregate: AggregateEntry[] = []
	public center: number = .5
	public domains: DomainConfig[] = []
	public events: RawEv3nt[] = []

	// The HTML element where the Timeline will be attached to. The element should be a
	// block element with a width and height.
	public rootElement: HTMLElement = null

	// The events should be sorted when passed to Timeline, because a data store will likely be faster
	// at sorting than the client. If that is in some way not possible, the lib can sort the events.
	public sortEvents: boolean = false

	constructor(config: Partial<Config>) {
		Object.keys(config).forEach(k => {
			if (k === 'domains') this.domains = config.domains.map(d => new DomainConfig(d))
			else if (this.hasOwnProperty(k)) this[k] = config[k]
		})
		
		if (config.sortEvents) {
			config.events.sort((a, b) => {
				if (a.date < b.date) return -1
				if (a.date > b.date) return 1
				return 0
			})
		}
	}

	public refresh(config: Partial<Config>) {
		Object.keys(config).forEach(k => {
			if (this.hasOwnProperty(k)) this[k] = config[k]
		})

		if (config.hasOwnProperty('aggregate') || config.hasOwnProperty('events')) props.edges = this
		if (config.hasOwnProperty('center')) props.center = this.center
		props.dimensions = this.rootElement
	}
}