
function deleteConfirm(callback) {
    var that = this
    var html = `
            <div class="fugai">
                <div id="delete-confirm">
                    <div class="iconfont icon-delete"></div>
                    <div class="msg">确认要删除此用户吗？</div>
                    <div class="button">
                        <span class="cancel">取消</span>
                        <span class="confirm">确认</span>
                    </div>
                </div>
            </div>
        `
    $('body').append(html)
    $('#delete-confirm .cancel').click(function () {
        $(this).closest('.fugai').remove()
    })
    $('#delete-confirm .confirm').click(function () {
        callback()
        $(this).closest('.fugai').remove()
    })
}