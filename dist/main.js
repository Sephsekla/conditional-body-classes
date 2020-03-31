/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./sass/style.scss */ "./src/sass/style.scss");

$ = jQuery;

$(document).ready(function () {

    $('.ccs-rule-wrapper').on('change', ".ccs-operator", function () {

        var set = $(this).closest('.ccs-set');
        var conditions = $(set).find('.ccs-conditions');
        var index = $(set).attr('data-index');

        $.ajax({
            type: "post",
            //dataType: "json",
            url: ccsVars.ajaxurl,
            data: {
                action: "ccs_update_condition",
                index: index,
                value: $(this).val(),
                label: $(set).attr('data-label'),
                option: $(set).closest('.ccs-rule-wrapper').attr('data-option')
            },
            success: function success(response) {

                $(conditions).html(response);
            }
        });
    });

    $('.ccs-rule-wrapper').on('click', ".remove", function () {
        var set = $(this).closest('.ccs-set');

        if ($(set).find('.edit-rule').val().length > 0) {
            if (confirm("Are you sure you want to remove this rule?")) {
                $(set).remove();
            }
        } else {
            $(set).remove();
        }
    });

    $(".add").click(function (e) {

        e.preventDefault();

        var index = 0,
            set = this;

        $('.ccs-set').each(function () {
            var value = parseFloat($(this).attr('data-index'));
            index = value > index ? value : index;
        });

        index++;

        $.ajax({
            type: "post",
            //dataType: "json",
            url: ccsVars.ajaxurl,
            data: {
                action: "ccs_add_class",
                index: index,
                label: $(set).attr('data-label'),
                option: $(set).attr('data-option'),
                textarea: "textarea" === $(set).attr('data-type')
            },
            success: function success(response) {

                var container = $(set).attr('href');

                $(container).append(response);
            }
        });
    });
});

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zYXNzL3N0eWxlLnNjc3MiXSwibmFtZXMiOlsiJCIsInNldCIsImNvbmRpdGlvbnMiLCJpbmRleCIsInR5cGUiLCJ1cmwiLCJjY3NWYXJzIiwiZGF0YSIsImFjdGlvbiIsInZhbHVlIiwibGFiZWwiLCJvcHRpb24iLCJzdWNjZXNzIiwiY29uZmlybSIsImUiLCJwYXJzZUZsb2F0IiwidGV4dGFyZWEiLCJjb250YWluZXIiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTs7QUFFQUE7O0FBRUFBLGtCQUFrQixZQUFZOztBQUcxQkEseURBQW1ELFlBQVU7O0FBRXpELFlBQUlDLE1BQU1ELGdCQUFWLFVBQVVBLENBQVY7QUFDQSxZQUFJRSxhQUFhRixZQUFqQixpQkFBaUJBLENBQWpCO0FBQ0EsWUFBSUcsUUFBUUgsWUFBWixZQUFZQSxDQUFaOztBQUdBQSxlQUFPO0FBQ0hJLGtCQURHO0FBRUg7QUFDQUMsaUJBQUtDLFFBSEY7QUFJSEMsa0JBQU07QUFDRkMsd0JBREU7QUFFRkwsdUJBRkU7QUFHRk0sdUJBQU9ULFFBSEwsR0FHS0EsRUFITDtBQUlGVSx1QkFBT1YsWUFKTCxZQUlLQSxDQUpMO0FBS0ZXLHdCQUFRWDtBQUxOLGFBSkg7QUFXSFkscUJBQVMsMkJBQW9COztBQUVyQlo7QUFHUDtBQWhCRSxTQUFQQTtBQVBKQTs7QUFnQ0FBLGtEQUE0QyxZQUFVO0FBQ2xELFlBQUlDLE1BQU1ELGdCQUFWLFVBQVVBLENBQVY7O0FBRUEsWUFBR0EseUNBQUgsR0FBOEM7QUFDMUMsZ0JBQUdhLFFBQUgsNENBQUdBLENBQUgsRUFBeUQ7QUFDckRiO0FBRUg7QUFKTCxlQU9JO0FBQ0FBO0FBRUg7QUFiTEE7O0FBb0JJQSxvQkFBZ0IsYUFBYTs7QUFFekJjOztBQUVBLFlBQUlYLFFBQUo7QUFBQSxZQUFlRixNQUFmOztBQUVJRCwyQkFBbUIsWUFBVztBQUMxQixnQkFBSVMsUUFBUU0sV0FBV2YsYUFBdkIsWUFBdUJBLENBQVhlLENBQVo7QUFDQVosb0JBQVNNLFFBQUQsS0FBQ0EsR0FBRCxLQUFDQSxHQUFUTjtBQUZKSDs7QUFNRUc7O0FBR0ZILGVBQU87QUFDSEksa0JBREc7QUFFSDtBQUNBQyxpQkFBS0MsUUFIRjtBQUlIQyxrQkFBTTtBQUNGQyx3QkFERTtBQUVGTCx1QkFGRTtBQUdGTyx1QkFBT1YsWUFITCxZQUdLQSxDQUhMO0FBSUZXLHdCQUFRWCxZQUpOLGFBSU1BLENBSk47QUFLRmdCLDBCQUFVLGVBQWVoQjtBQUx2QixhQUpIO0FBV0hZLHFCQUFTLDJCQUFvQjs7QUFFckIsb0JBQUlLLFlBQVlqQixZQUFoQixNQUFnQkEsQ0FBaEI7O0FBRUFBO0FBR1A7QUFsQkUsU0FBUEE7QUFmUkE7QUF2RFJBLEc7Ozs7Ozs7Ozs7O0FDSkEseUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICcuL3Nhc3Mvc3R5bGUuc2Nzcyc7XG5cbiQgPSBqUXVlcnk7XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcblxuXG4gICAgJCgnLmNjcy1ydWxlLXdyYXBwZXInKS5vbignY2hhbmdlJyxcIi5jY3Mtb3BlcmF0b3JcIixmdW5jdGlvbigpe1xuICAgICAgICBcbiAgICAgICAgbGV0IHNldCA9ICQodGhpcykuY2xvc2VzdCgnLmNjcy1zZXQnKTtcbiAgICAgICAgbGV0IGNvbmRpdGlvbnMgPSAkKHNldCkuZmluZCgnLmNjcy1jb25kaXRpb25zJyk7XG4gICAgICAgIGxldCBpbmRleCA9ICQoc2V0KS5hdHRyKCdkYXRhLWluZGV4Jyk7XG5cblxuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdHlwZTogXCJwb3N0XCIsXG4gICAgICAgICAgICAvL2RhdGFUeXBlOiBcImpzb25cIixcbiAgICAgICAgICAgIHVybDogY2NzVmFycy5hamF4dXJsLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIGFjdGlvbjogXCJjY3NfdXBkYXRlX2NvbmRpdGlvblwiLFxuICAgICAgICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJCh0aGlzKS52YWwoKSxcbiAgICAgICAgICAgICAgICBsYWJlbDogJChzZXQpLmF0dHIoJ2RhdGEtbGFiZWwnKSxcbiAgICAgICAgICAgICAgICBvcHRpb246ICQoc2V0KS5jbG9zZXN0KCcuY2NzLXJ1bGUtd3JhcHBlcicpLmF0dHIoJ2RhdGEtb3B0aW9uJyksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgJChjb25kaXRpb25zKS5odG1sKHJlc3BvbnNlKTtcblxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG5cblxuXG4gICAgfSlcblxuXG4gICAgJCgnLmNjcy1ydWxlLXdyYXBwZXInKS5vbignY2xpY2snLFwiLnJlbW92ZVwiLGZ1bmN0aW9uKCl7XG4gICAgICAgIGxldCBzZXQgPSAkKHRoaXMpLmNsb3Nlc3QoJy5jY3Mtc2V0Jyk7XG5cbiAgICAgICAgaWYoJChzZXQpLmZpbmQoJy5lZGl0LXJ1bGUnKS52YWwoKS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgIGlmKGNvbmZpcm0oXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gcmVtb3ZlIHRoaXMgcnVsZT9cIikpe1xuICAgICAgICAgICAgICAgICQoc2V0KS5yZW1vdmUoKTtcbiAgICBcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgJChzZXQpLnJlbW92ZSgpO1xuXG4gICAgICAgIH1cbiAgICAgICAgXG5cblxuICAgIH0pO1xuXG5cbiAgICAgICAgJChcIi5hZGRcIikuY2xpY2soZnVuY3Rpb24gKGUpIHtcblxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBsZXQgaW5kZXggPSAwLCBzZXQgPSB0aGlzO1xuXG4gICAgICAgICAgICAgICAgJCgnLmNjcy1zZXQnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBwYXJzZUZsb2F0KCQodGhpcykuYXR0cignZGF0YS1pbmRleCcpKTtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXggPSAodmFsdWUgPiBpbmRleCkgPyB2YWx1ZSA6IGluZGV4O1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgaW5kZXgrKztcbiAgICAgICAgICAgXG4gICAgXG4gICAgICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJwb3N0XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vZGF0YVR5cGU6IFwianNvblwiLFxuICAgICAgICAgICAgICAgICAgICB1cmw6IGNjc1ZhcnMuYWpheHVybCxcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBcImNjc19hZGRfY2xhc3NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAkKHNldCkuYXR0cignZGF0YS1sYWJlbCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uOiAkKHNldCkuYXR0cignZGF0YS1vcHRpb24nKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRhcmVhOiBcInRleHRhcmVhXCIgPT09ICQoc2V0KS5hdHRyKCdkYXRhLXR5cGUnKVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb250YWluZXIgPSAkKHNldCkuYXR0cignaHJlZicpO1xuICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKGNvbnRhaW5lcikuYXBwZW5kKHJlc3BvbnNlKTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgXG4gICAgXG5cblxuXG4gICAgfSk7XG5cbn0pOyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==