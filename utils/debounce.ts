export default function debounce(fn:Function,wait:number){
    let timerId:any
    return function(){
        if(timerId){
            clearTimeout(timerId)
        }
            timerId = setTimeout(fn,wait)
        }
}