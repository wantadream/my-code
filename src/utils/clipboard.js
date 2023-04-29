
import Clipboard from 'clipboard'

function clipboardSuccess(a) {
  a({ message: '复制成功', type: "success" });
}

function clipboardError(a) {
  a({ message: "复制失败", type: "error" });
}


/**
 * @author https://vue-admin-beautiful.com （不想保留author可删除）
 * @description 复制数据
 * @param text
 * @param event
 */
export default function handleClipboard(text,a, event) {
  const clipboard = new Clipboard(event.target, {
    text: () => text,
  })
  clipboard.on('success', () => {
    clipboardSuccess(a)
    clipboard.destroy()
  })
  clipboard.on('error', () => {
    clipboardError(a)
    clipboard.destroy()
  })
  clipboard.onClick(event)
}
