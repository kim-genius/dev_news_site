export interface articleApi {
    lastBuildDate:string,
    items : [{[key:string]:string}],
    total: number,
    start:number,
    display:number
}