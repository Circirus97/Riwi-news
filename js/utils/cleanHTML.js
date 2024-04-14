export function cleanHTML(selector) {

    if(!selector.firstChild) return;

    while(selector.firstChild){
        selector.removeChild(selector.firstChild)
    }
}