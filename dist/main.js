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


console.log(ccsVars);

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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbImNvbnNvbGUiLCIkIiwic2V0IiwiY29uZGl0aW9ucyIsImluZGV4IiwidHlwZSIsInVybCIsImNjc1ZhcnMiLCJkYXRhIiwiYWN0aW9uIiwidmFsdWUiLCJsYWJlbCIsIm9wdGlvbiIsInN1Y2Nlc3MiLCJjb25maXJtIiwiZSIsInBhcnNlRmxvYXQiLCJ0ZXh0YXJlYSIsImNvbnRhaW5lciJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBQTs7QUFHQUM7O0FBRUFBLGtCQUFrQixZQUFZOztBQUcxQkEseURBQW1ELFlBQVU7O0FBRXpELFlBQUlDLE1BQU1ELGdCQUFWLFVBQVVBLENBQVY7QUFDQSxZQUFJRSxhQUFhRixZQUFqQixpQkFBaUJBLENBQWpCO0FBQ0EsWUFBSUcsUUFBUUgsWUFBWixZQUFZQSxDQUFaOztBQUdBQSxlQUFPO0FBQ0hJLGtCQURHO0FBRUg7QUFDQUMsaUJBQUtDLFFBSEY7QUFJSEMsa0JBQU07QUFDRkMsd0JBREU7QUFFRkwsdUJBRkU7QUFHRk0sdUJBQU9ULFFBSEwsR0FHS0EsRUFITDtBQUlGVSx1QkFBT1YsWUFKTCxZQUlLQSxDQUpMO0FBS0ZXLHdCQUFRWDtBQUxOLGFBSkg7QUFXSFkscUJBQVMsMkJBQW9COztBQUVyQlo7QUFHUDtBQWhCRSxTQUFQQTtBQVBKQTs7QUFnQ0FBLGtEQUE0QyxZQUFVO0FBQ2xELFlBQUlDLE1BQU1ELGdCQUFWLFVBQVVBLENBQVY7O0FBRUEsWUFBR0EseUNBQUgsR0FBOEM7QUFDMUMsZ0JBQUdhLFFBQUgsNENBQUdBLENBQUgsRUFBeUQ7QUFDckRiO0FBRUg7QUFKTCxlQU9JO0FBQ0FBO0FBRUg7QUFiTEE7O0FBb0JJQSxvQkFBZ0IsYUFBYTs7QUFFekJjOztBQUVBLFlBQUlYLFFBQUo7QUFBQSxZQUFlRixNQUFmOztBQUVJRCwyQkFBbUIsWUFBVztBQUMxQixnQkFBSVMsUUFBUU0sV0FBV2YsYUFBdkIsWUFBdUJBLENBQVhlLENBQVo7QUFDQVosb0JBQVNNLFFBQUQsS0FBQ0EsR0FBRCxLQUFDQSxHQUFUTjtBQUZKSDs7QUFNRUc7O0FBR0ZILGVBQU87QUFDSEksa0JBREc7QUFFSDtBQUNBQyxpQkFBS0MsUUFIRjtBQUlIQyxrQkFBTTtBQUNGQyx3QkFERTtBQUVGTCx1QkFGRTtBQUdGTyx1QkFBT1YsWUFITCxZQUdLQSxDQUhMO0FBSUZXLHdCQUFRWCxZQUpOLGFBSU1BLENBSk47QUFLRmdCLDBCQUFVLGVBQWVoQjtBQUx2QixhQUpIO0FBV0hZLHFCQUFTLDJCQUFvQjs7QUFFckIsb0JBQUlLLFlBQVlqQixZQUFoQixNQUFnQkEsQ0FBaEI7O0FBRUFBO0FBR1A7QUFsQkUsU0FBUEE7QUFmUkE7QUF2RFJBLEciLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiY29uc29sZS5sb2coY2NzVmFycyk7XG5cblxuJCA9IGpRdWVyeTtcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuXG5cbiAgICAkKCcuY2NzLXJ1bGUtd3JhcHBlcicpLm9uKCdjaGFuZ2UnLFwiLmNjcy1vcGVyYXRvclwiLGZ1bmN0aW9uKCl7XG4gICAgICAgIFxuICAgICAgICBsZXQgc2V0ID0gJCh0aGlzKS5jbG9zZXN0KCcuY2NzLXNldCcpO1xuICAgICAgICBsZXQgY29uZGl0aW9ucyA9ICQoc2V0KS5maW5kKCcuY2NzLWNvbmRpdGlvbnMnKTtcbiAgICAgICAgbGV0IGluZGV4ID0gJChzZXQpLmF0dHIoJ2RhdGEtaW5kZXgnKTtcblxuXG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB0eXBlOiBcInBvc3RcIixcbiAgICAgICAgICAgIC8vZGF0YVR5cGU6IFwianNvblwiLFxuICAgICAgICAgICAgdXJsOiBjY3NWYXJzLmFqYXh1cmwsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgYWN0aW9uOiBcImNjc191cGRhdGVfY29uZGl0aW9uXCIsXG4gICAgICAgICAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICAgICAgICAgIHZhbHVlOiAkKHRoaXMpLnZhbCgpLFxuICAgICAgICAgICAgICAgIGxhYmVsOiAkKHNldCkuYXR0cignZGF0YS1sYWJlbCcpLFxuICAgICAgICAgICAgICAgIG9wdGlvbjogJChzZXQpLmNsb3Nlc3QoJy5jY3MtcnVsZS13cmFwcGVyJykuYXR0cignZGF0YS1vcHRpb24nKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAkKGNvbmRpdGlvbnMpLmh0bWwocmVzcG9uc2UpO1xuXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cblxuXG5cbiAgICB9KVxuXG5cbiAgICAkKCcuY2NzLXJ1bGUtd3JhcHBlcicpLm9uKCdjbGljaycsXCIucmVtb3ZlXCIsZnVuY3Rpb24oKXtcbiAgICAgICAgbGV0IHNldCA9ICQodGhpcykuY2xvc2VzdCgnLmNjcy1zZXQnKTtcblxuICAgICAgICBpZigkKHNldCkuZmluZCgnLmVkaXQtcnVsZScpLnZhbCgpLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgaWYoY29uZmlybShcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byByZW1vdmUgdGhpcyBydWxlP1wiKSl7XG4gICAgICAgICAgICAgICAgJChzZXQpLnJlbW92ZSgpO1xuICAgIFxuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICAkKHNldCkucmVtb3ZlKCk7XG5cbiAgICAgICAgfVxuICAgICAgICBcblxuXG4gICAgfSk7XG5cblxuICAgICAgICAkKFwiLmFkZFwiKS5jbGljayhmdW5jdGlvbiAoZSkge1xuXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGxldCBpbmRleCA9IDAsIHNldCA9IHRoaXM7XG5cbiAgICAgICAgICAgICAgICAkKCcuY2NzLXNldCcpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHBhcnNlRmxvYXQoJCh0aGlzKS5hdHRyKCdkYXRhLWluZGV4JykpO1xuICAgICAgICAgICAgICAgICAgICBpbmRleCA9ICh2YWx1ZSA+IGluZGV4KSA/IHZhbHVlIDogaW5kZXg7XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICBpbmRleCsrO1xuICAgICAgICAgICBcbiAgICBcbiAgICAgICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInBvc3RcIixcbiAgICAgICAgICAgICAgICAgICAgLy9kYXRhVHlwZTogXCJqc29uXCIsXG4gICAgICAgICAgICAgICAgICAgIHVybDogY2NzVmFycy5hamF4dXJsLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb246IFwiY2NzX2FkZF9jbGFzc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICQoc2V0KS5hdHRyKCdkYXRhLWxhYmVsJyksXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb246ICQoc2V0KS5hdHRyKCdkYXRhLW9wdGlvbicpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dGFyZWE6IFwidGV4dGFyZWFcIiA9PT0gJChzZXQpLmF0dHIoJ2RhdGEtdHlwZScpXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvbnRhaW5lciA9ICQoc2V0KS5hdHRyKCdocmVmJyk7XG4gICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoY29udGFpbmVyKS5hcHBlbmQocmVzcG9uc2UpO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICBcbiAgICBcblxuXG5cbiAgICB9KTtcblxufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==