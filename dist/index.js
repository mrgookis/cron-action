/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 281:
/***/ ((module) => {

module.exports = eval("require")("./models");


/***/ }),

/***/ 749:
/***/ ((module) => {

module.exports = eval("require")("mongoose");


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
const mongoose = __nccwpck_require__(749);
const db = __nccwpck_require__(281)

mongoose.connect(process.env.MONGODB_URI || 'mongodb:localhost/todo');

async function seed() {
    const seedData = [
        {title: 'cron action', body: 'cron job', isComplete: true},
        {title: 'cron action - 2', body: 'cron job - 2', isComplete: true}
    ]
    db.Todo.collection.insertMany(seedData).then(data => {
        console.log(`${data.result.n} records inserted!`)
    }).catch(err => console.log(err));
}

seed()
})();

module.exports = __webpack_exports__;
/******/ })()
;