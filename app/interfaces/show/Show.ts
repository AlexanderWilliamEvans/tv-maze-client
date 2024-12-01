export interface IShow {
    id: number
    url: string
    name: string
    type: string
    language: string
    genres: string[]
    status: string
    runtime: number
    averageRuntime: number
    premiered: string
    ended: string
    officialSite: string
    schedule: ISchedule
    rating: IRating
    weight: number
    network: INetwork
    externals: IExternals
    image: Image
    summary: string
    updated: number
    _links: ILinks
}



export interface ISchedule {
    time: string
    days: string[]
  }
  
  export interface IRating {
    average: number
  }
  
  export interface INetwork {
    id: number
    name: string
    country: ICountry
    officialSite: string
  }
  
  export interface ICountry {
    name: string
    code: string
    timezone: string
  }
  
  export interface IExternals {
    tvrage: number
    thetvdb: number
    imdb: string
  }
  
  export interface Image {
    medium: string
    original: string
  }
  
  export interface ILinks {
    self: ISelf
    previousepisode: IPreviousepisode
  }
  
  export interface ISelf {
    href: string
  }
  
  export interface IPreviousepisode {
    href: string
    name: string
  }

  export interface IShowCard {
    id: number,
    name: string,
    imageUrl: string,
    rating: number,
}