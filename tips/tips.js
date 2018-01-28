export function tips(params) {
    let text = params.text || '';
    let time = params.time || 2000;
    let type = params.text || 'success';
    const html = `
    <div class="cw-tips" :class="popup-top ${type}">
        <div class="box">
            <span class="tips-icon"></span>
            <span class="tips-text">${text}</span>
        </div>
    </div>
    `
    let div = document.createElement('div')
    document.body.appendChild(div)
    div.html = html
    console.log(div)
    setTimeout(()=>{
        //document.getElementsByClassName('cw-tips').remove
    })
}