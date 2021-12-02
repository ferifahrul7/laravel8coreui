/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/coreui/menu-create.js":
/*!********************************************!*\
  !*** ./resources/js/coreui/menu-create.js ***!
  \********************************************/
/***/ (function() {

eval("/* 11.12.2019 */\nvar self = this;\n\nthis.buildSelectParent = function (data) {\n  var result = '<option value=\"none\">Do not have parent</option>';\n\n  for (var i = 0; i < data.length; i++) {\n    result += '<option value=\"' + data[i].id + '\">' + data[i].name + '</option>';\n  }\n\n  return result;\n};\n\nthis.updateSelectParent = function () {\n  axios.get('/menu/element/get-parents?menu=' + document.getElementById(\"menu\").value).then(function (response) {\n    document.getElementById(\"parent\").innerHTML = self.buildSelectParent(response.data);\n  })[\"catch\"](function (error) {\n    // handle error\n    console.log(error);\n  });\n};\n\nthis.toggleDivs = function () {\n  var value = document.getElementById(\"type\").value;\n\n  if (value === 'title') {\n    document.getElementById('div-href').classList.add('d-none');\n    document.getElementById('div-dropdown-parent').classList.add('d-none');\n    document.getElementById('div-icon').classList.add('d-none');\n  } else if (value === 'link') {\n    document.getElementById('div-href').classList.remove('d-none');\n    document.getElementById('div-dropdown-parent').classList.remove('d-none');\n    document.getElementById('div-icon').classList.remove('d-none');\n  } else {\n    document.getElementById('div-href').classList.add('d-none');\n    document.getElementById('div-dropdown-parent').classList.remove('d-none');\n    document.getElementById('div-icon').classList.remove('d-none');\n  }\n};\n\nthis.updateSelectParent();\nthis.toggleDivs();\n\ndocument.getElementById(\"menu\").onchange = function () {\n  self.updateSelectParent();\n};\n\ndocument.getElementById(\"type\").onchange = function () {\n  self.toggleDivs();\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvY29yZXVpL21lbnUtY3JlYXRlLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBRUEsSUFBSUEsSUFBSSxHQUFHLElBQVg7O0FBRUEseUJBQXlCLFVBQVVFLElBQVYsRUFBZ0I7QUFDckMsTUFBSUMsTUFBTSxHQUFHLGtEQUFiOztBQUNBLE9BQUksSUFBSUMsQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxHQUFDRixJQUFJLENBQUNHLE1BQXRCLEVBQThCRCxDQUFDLEVBQS9CLEVBQWtDO0FBQzlCRCxJQUFBQSxNQUFNLElBQUksb0JBQW9CRCxJQUFJLENBQUNFLENBQUQsQ0FBSixDQUFRRSxFQUE1QixHQUFpQyxJQUFqQyxHQUF3Q0osSUFBSSxDQUFDRSxDQUFELENBQUosQ0FBUUcsSUFBaEQsR0FBdUQsV0FBakU7QUFDSDs7QUFDRCxTQUFPSixNQUFQO0FBQ0gsQ0FORDs7QUFRQSwwQkFBMEIsWUFBVTtBQUNoQ00sRUFBQUEsS0FBSyxDQUFDQyxHQUFOLENBQVcsb0NBQW9DQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsRUFBZ0NDLEtBQS9FLEVBQ0NDLElBREQsQ0FDTSxVQUFVQyxRQUFWLEVBQW9CO0FBQ3RCSixJQUFBQSxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsUUFBeEIsRUFBa0NJLFNBQWxDLEdBQThDaEIsSUFBSSxDQUFDQyxpQkFBTCxDQUF1QmMsUUFBUSxDQUFDYixJQUFoQyxDQUE5QztBQUNILEdBSEQsV0FJTyxVQUFVZSxLQUFWLEVBQWlCO0FBQ3BCO0FBQ0FDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0gsR0FQRDtBQVFILENBVEQ7O0FBV0Esa0JBQWtCLFlBQVU7QUFDeEIsTUFBSUosS0FBSyxHQUFHRixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsRUFBZ0NDLEtBQTVDOztBQUNBLE1BQUdBLEtBQUssS0FBSyxPQUFiLEVBQXFCO0FBQ2pCRixJQUFBQSxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsVUFBeEIsRUFBb0NTLFNBQXBDLENBQThDQyxHQUE5QyxDQUFrRCxRQUFsRDtBQUNBWCxJQUFBQSxRQUFRLENBQUNDLGNBQVQsQ0FBd0IscUJBQXhCLEVBQStDUyxTQUEvQyxDQUF5REMsR0FBekQsQ0FBNkQsUUFBN0Q7QUFDQVgsSUFBQUEsUUFBUSxDQUFDQyxjQUFULENBQXdCLFVBQXhCLEVBQW9DUyxTQUFwQyxDQUE4Q0MsR0FBOUMsQ0FBa0QsUUFBbEQ7QUFDSCxHQUpELE1BSU0sSUFBR1QsS0FBSyxLQUFLLE1BQWIsRUFBb0I7QUFDdEJGLElBQUFBLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixVQUF4QixFQUFvQ1MsU0FBcEMsQ0FBOENFLE1BQTlDLENBQXFELFFBQXJEO0FBQ0FaLElBQUFBLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixxQkFBeEIsRUFBK0NTLFNBQS9DLENBQXlERSxNQUF6RCxDQUFnRSxRQUFoRTtBQUNBWixJQUFBQSxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsVUFBeEIsRUFBb0NTLFNBQXBDLENBQThDRSxNQUE5QyxDQUFxRCxRQUFyRDtBQUNILEdBSkssTUFJRDtBQUNEWixJQUFBQSxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsVUFBeEIsRUFBb0NTLFNBQXBDLENBQThDQyxHQUE5QyxDQUFrRCxRQUFsRDtBQUNBWCxJQUFBQSxRQUFRLENBQUNDLGNBQVQsQ0FBd0IscUJBQXhCLEVBQStDUyxTQUEvQyxDQUF5REUsTUFBekQsQ0FBZ0UsUUFBaEU7QUFDQVosSUFBQUEsUUFBUSxDQUFDQyxjQUFULENBQXdCLFVBQXhCLEVBQW9DUyxTQUFwQyxDQUE4Q0UsTUFBOUMsQ0FBcUQsUUFBckQ7QUFDSDtBQUNKLENBZkQ7O0FBaUJBLEtBQUtmLGtCQUFMO0FBQ0EsS0FBS1ksVUFBTDs7QUFDQVQsUUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLEVBQWdDWSxRQUFoQyxHQUEyQyxZQUFVO0FBQUN4QixFQUFBQSxJQUFJLENBQUNRLGtCQUFMO0FBQTBCLENBQWhGOztBQUNBRyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsRUFBZ0NZLFFBQWhDLEdBQTJDLFlBQVU7QUFBQ3hCLEVBQUFBLElBQUksQ0FBQ29CLFVBQUw7QUFBa0IsQ0FBeEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29yZXVpL21lbnUtY3JlYXRlLmpzPzZiY2UiXSwic291cmNlc0NvbnRlbnQiOlsiLyogMTEuMTIuMjAxOSAqL1xuXG5sZXQgc2VsZiA9IHRoaXM7XG5cbnRoaXMuYnVpbGRTZWxlY3RQYXJlbnQgPSBmdW5jdGlvbiggZGF0YSApe1xuICAgIGxldCByZXN1bHQgPSAnPG9wdGlvbiB2YWx1ZT1cIm5vbmVcIj5EbyBub3QgaGF2ZSBwYXJlbnQ8L29wdGlvbj4nXG4gICAgZm9yKGxldCBpID0gMDsgaTxkYXRhLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgcmVzdWx0ICs9ICc8b3B0aW9uIHZhbHVlPVwiJyArIGRhdGFbaV0uaWQgKyAnXCI+JyArIGRhdGFbaV0ubmFtZSArICc8L29wdGlvbj4nXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbn1cblxudGhpcy51cGRhdGVTZWxlY3RQYXJlbnQgPSBmdW5jdGlvbigpe1xuICAgIGF4aW9zLmdldCggJy9tZW51L2VsZW1lbnQvZ2V0LXBhcmVudHM/bWVudT0nICsgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51XCIpLnZhbHVlIClcbiAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXJlbnRcIikuaW5uZXJIVE1MID0gc2VsZi5idWlsZFNlbGVjdFBhcmVudChyZXNwb25zZS5kYXRhKVxuICAgIH0pXG4gICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAvLyBoYW5kbGUgZXJyb3JcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgfSlcbn1cblxudGhpcy50b2dnbGVEaXZzID0gZnVuY3Rpb24oKXtcbiAgICBsZXQgdmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInR5cGVcIikudmFsdWVcbiAgICBpZih2YWx1ZSA9PT0gJ3RpdGxlJyl7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXYtaHJlZicpLmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXYtZHJvcGRvd24tcGFyZW50JykuY2xhc3NMaXN0LmFkZCgnZC1ub25lJylcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpdi1pY29uJykuY2xhc3NMaXN0LmFkZCgnZC1ub25lJylcbiAgICB9ZWxzZSBpZih2YWx1ZSA9PT0gJ2xpbmsnKXtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpdi1ocmVmJykuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJylcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpdi1kcm9wZG93bi1wYXJlbnQnKS5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGl2LWljb24nKS5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKVxuICAgIH1lbHNle1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGl2LWhyZWYnKS5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGl2LWRyb3Bkb3duLXBhcmVudCcpLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXYtaWNvbicpLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpXG4gICAgfVxufVxuXG50aGlzLnVwZGF0ZVNlbGVjdFBhcmVudCgpXG50aGlzLnRvZ2dsZURpdnMoKVxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51XCIpLm9uY2hhbmdlID0gZnVuY3Rpb24oKXtzZWxmLnVwZGF0ZVNlbGVjdFBhcmVudCgpfVxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0eXBlXCIpLm9uY2hhbmdlID0gZnVuY3Rpb24oKXtzZWxmLnRvZ2dsZURpdnMoKX1cblxuXG5cbiJdLCJuYW1lcyI6WyJzZWxmIiwiYnVpbGRTZWxlY3RQYXJlbnQiLCJkYXRhIiwicmVzdWx0IiwiaSIsImxlbmd0aCIsImlkIiwibmFtZSIsInVwZGF0ZVNlbGVjdFBhcmVudCIsImF4aW9zIiwiZ2V0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZhbHVlIiwidGhlbiIsInJlc3BvbnNlIiwiaW5uZXJIVE1MIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwidG9nZ2xlRGl2cyIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsIm9uY2hhbmdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/coreui/menu-create.js\n");

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc2Fzcy9hcHAuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc2Fzcy9hcHAuc2Nzcz9hODBiIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/sass/app.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/menu-create": 0,
/******/ 			"css/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./resources/js/coreui/menu-create.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./resources/sass/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;