export function toHtmlDate(date: Date): string {
    const d = date.getDate().toString().padStart(2, "0");
    const m = (date.getMonth() + 1).toString().padStart(2, "0");
    const y = date.getFullYear().toString().padStart(4, "0");
    return y + "-" + m + "-" + d;
}

export function fromHtmlDate(date: string): Date | undefined {
    //2024-05-10
    let parts = date.split("-");
    if(parts.length != 3){
        return undefined;
    }

    try{
        let result = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
        if(result){
            return result;
        }
    }
    catch{
        return undefined;
    }
    return undefined;
}

export function defaultIfEmpty(val: string | null, def:string) : string{
    if(val || val!.length <= 0){
        return def;
    }
    return val!;
}