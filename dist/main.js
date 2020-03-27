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

    $('#ccs-class-rules').on('change', ".ccs-operator", function () {

        var set = $(this).parent('.ccs-set');
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
                label: $(set).attr('data-label')
            },
            success: function success(response) {

                $(conditions).html(response);
            }
        });
    });

    $('#ccs-class-rules').on('click', ".remove", function () {
        var set = $(this).parent('.ccs-set');
        $(set).remove();
        console.log("remove");
    });

    $("#add").click(function () {

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

                $('#ccs-class-rules').append(response);
            }
        });
    });
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbImNvbnNvbGUiLCIkIiwic2V0IiwiY29uZGl0aW9ucyIsImluZGV4IiwidHlwZSIsInVybCIsImNjc1ZhcnMiLCJkYXRhIiwiYWN0aW9uIiwidmFsdWUiLCJsYWJlbCIsInN1Y2Nlc3MiLCJwYXJzZUZsb2F0Iiwib3B0aW9uIiwidGV4dGFyZWEiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQUE7O0FBR0FDOztBQUVBQSxrQkFBa0IsWUFBWTs7QUFHMUJBLHdEQUFrRCxZQUFVOztBQUV4RCxZQUFJQyxNQUFNRCxlQUFWLFVBQVVBLENBQVY7QUFDQSxZQUFJRSxhQUFhRixZQUFqQixpQkFBaUJBLENBQWpCO0FBQ0EsWUFBSUcsUUFBUUgsWUFBWixZQUFZQSxDQUFaOztBQUdBQSxlQUFPO0FBQ0hJLGtCQURHO0FBRUg7QUFDQUMsaUJBQUtDLFFBSEY7QUFJSEMsa0JBQU07QUFDRkMsd0JBREU7QUFFRkwsdUJBRkU7QUFHRk0sdUJBQU9ULFFBSEwsR0FHS0EsRUFITDtBQUlGVSx1QkFBT1Y7QUFKTCxhQUpIO0FBVUhXLHFCQUFTLDJCQUFvQjs7QUFFckJYO0FBR1A7QUFmRSxTQUFQQTtBQVBKQTs7QUErQkFBLGlEQUEyQyxZQUFVO0FBQ2pELFlBQUlDLE1BQU1ELGVBQVYsVUFBVUEsQ0FBVjtBQUNBQTtBQUNBRDtBQUhKQzs7QUFTSUEsb0JBQWdCLFlBQVk7O0FBRXhCLFlBQUlHLFFBQUo7QUFBQSxZQUFlRixNQUFmOztBQUVJRCwyQkFBbUIsWUFBVztBQUMxQixnQkFBSVMsUUFBUUcsV0FBV1osYUFBdkIsWUFBdUJBLENBQVhZLENBQVo7QUFDQVQsb0JBQVNNLFFBQUQsS0FBQ0EsR0FBRCxLQUFDQSxHQUFUTjtBQUZKSDs7QUFNRUc7O0FBR0ZILGVBQU87QUFDSEksa0JBREc7QUFFSDtBQUNBQyxpQkFBS0MsUUFIRjtBQUlIQyxrQkFBTTtBQUNGQyx3QkFERTtBQUVGTCx1QkFGRTtBQUdGTyx1QkFBT1YsWUFITCxZQUdLQSxDQUhMO0FBSUZhLHdCQUFRYixZQUpOLGFBSU1BLENBSk47QUFLRmMsMEJBQVUsZUFBZWQ7QUFMdkIsYUFKSDtBQVdIVyxxQkFBUywyQkFBb0I7O0FBRXJCWDtBQUdQO0FBaEJFLFNBQVBBO0FBYlJBO0FBM0NSQSxHIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImNvbnNvbGUubG9nKGNjc1ZhcnMpO1xuXG5cbiQgPSBqUXVlcnk7XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcblxuXG4gICAgJCgnI2Njcy1jbGFzcy1ydWxlcycpLm9uKCdjaGFuZ2UnLFwiLmNjcy1vcGVyYXRvclwiLGZ1bmN0aW9uKCl7XG4gICAgICAgIFxuICAgICAgICBsZXQgc2V0ID0gJCh0aGlzKS5wYXJlbnQoJy5jY3Mtc2V0Jyk7XG4gICAgICAgIGxldCBjb25kaXRpb25zID0gJChzZXQpLmZpbmQoJy5jY3MtY29uZGl0aW9ucycpO1xuICAgICAgICBsZXQgaW5kZXggPSAkKHNldCkuYXR0cignZGF0YS1pbmRleCcpO1xuXG5cbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHR5cGU6IFwicG9zdFwiLFxuICAgICAgICAgICAgLy9kYXRhVHlwZTogXCJqc29uXCIsXG4gICAgICAgICAgICB1cmw6IGNjc1ZhcnMuYWpheHVybCxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBhY3Rpb246IFwiY2NzX3VwZGF0ZV9jb25kaXRpb25cIixcbiAgICAgICAgICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICQodGhpcykudmFsKCksXG4gICAgICAgICAgICAgICAgbGFiZWw6ICQoc2V0KS5hdHRyKCdkYXRhLWxhYmVsJyksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgJChjb25kaXRpb25zKS5odG1sKHJlc3BvbnNlKTtcblxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG5cblxuXG4gICAgfSlcblxuXG4gICAgJCgnI2Njcy1jbGFzcy1ydWxlcycpLm9uKCdjbGljaycsXCIucmVtb3ZlXCIsZnVuY3Rpb24oKXtcbiAgICAgICAgbGV0IHNldCA9ICQodGhpcykucGFyZW50KCcuY2NzLXNldCcpO1xuICAgICAgICAkKHNldCkucmVtb3ZlKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVtb3ZlXCIpO1xuXG5cbiAgICB9KTtcblxuXG4gICAgICAgICQoXCIjYWRkXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgbGV0IGluZGV4ID0gMCwgc2V0ID0gdGhpcztcblxuICAgICAgICAgICAgICAgICQoJy5jY3Mtc2V0JykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gcGFyc2VGbG9hdCgkKHRoaXMpLmF0dHIoJ2RhdGEtaW5kZXgnKSk7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4ID0gKHZhbHVlID4gaW5kZXgpID8gdmFsdWUgOiBpbmRleDtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgIGluZGV4Kys7XG4gICAgICAgICAgIFxuICAgIFxuICAgICAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwicG9zdFwiLFxuICAgICAgICAgICAgICAgICAgICAvL2RhdGFUeXBlOiBcImpzb25cIixcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBjY3NWYXJzLmFqYXh1cmwsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbjogXCJjY3NfYWRkX2NsYXNzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJChzZXQpLmF0dHIoJ2RhdGEtbGFiZWwnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbjogJChzZXQpLmF0dHIoJ2RhdGEtb3B0aW9uJyksXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0YXJlYTogXCJ0ZXh0YXJlYVwiID09PSAkKHNldCkuYXR0cignZGF0YS10eXBlJylcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNjY3MtY2xhc3MtcnVsZXMnKS5hcHBlbmQocmVzcG9uc2UpO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICBcbiAgICBcblxuXG5cbiAgICB9KTtcblxufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==