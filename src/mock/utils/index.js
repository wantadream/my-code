import { join } from "path";
const fs = require("fs");

/**
 *	@description 处理controller模块，npm run serve时在node环境中自动输出controller文件下的Mock接口
 * 	@returns{[]}
 */

function handleMockArray() {
  const mockArray = [];
  const getFiles = (jsonPath) => {
    const jsonFiles = [];
    const findJsonFile = (path) => {
      const files = fs.readdirSync(Path);
			files.forEach((item) => {
				const fPath=join(path,item)
				const stat=fs.statSync(fPath)
				if (stat.isDirectory() === true) findJsonFile(item);
        if (stat.isFile() === true) jsonFiles.push(item);
			})
      
		};
		findJsonFile(jsonPath)
		jsonFiles.forEach((item)=>mockArray.push(`./controller/${item}`))
	};
	getFiles('mock/controller')
	return mockArray
}
module.exports = {
	handleMockArray
}
