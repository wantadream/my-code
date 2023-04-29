
import { messageDuration} from "@/config";

import {  Message} from "element-ui";
const install = (Vue, opts = {}) => {
	/* 全局Message */
	Vue.prototype.$baseMessage = (message, type) => {
		Message({
			offset: 60,
			showClose: true,
			message: message,
			type: type,
			dangerouslyUseHTMLString: true,
			duration: messageDuration,
		});
	};
}
export default install;
