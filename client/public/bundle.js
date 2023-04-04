/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ (() => {

const initialState = {
  items: []
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        items: [...state.items, action.payload]
      };
    default:
      return state;
  }
}

const store = Redux.createStore(rootReducer);

function addItem() {
  const itemInput = document.getElementById('item-input');
  const item = itemInput.value;
  store.dispatch({
    type: 'ADD_ITEM',
    payload: item
  });
}

function render() {
  const itemsList = document.getElementById('items-list');
  const items = store.getState().items;
  itemsList.innerHTML = '';
  items.forEach(item => {
    const li = document.createElement('li');
    li.innerText = item;
    itemsList.appendChild(li);
  });
}

store.subscribe(render);

document.getElementById('add-item-button').addEventListener('click', addItem);

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/ 		
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 		
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/ 		
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__(0);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__[0](__webpack_exports__, __webpack_require__, __webpack_require__.n);
/******/ 	
/******/ })()
