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
/******/ 	return __webpack_require__(__webpack_require__.s = "./application/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./application/calendar/index.js":
/*!***************************************!*\
  !*** ./application/calendar/index.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _feed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../feed */ \"./application/feed/index.js\");\n\n\n\nlet feed2 = new _feed__WEBPACK_IMPORTED_MODULE_0__[\"Feed\"]();\nlet new_POSTS;\n\nfeed2.getPosts().then( res => {\n    new_POSTS = feed2.posts.map( old => {\n    let postDate = new Date(old.date);\n\n    return(\n      {\n      id: old.id,\n      date: {\n        time: [\n          postDate.getMonth(),\n          postDate.getDate(),\n          postDate.getFullYear()\n        ],\n        ms: postDate.getTime()\n      }\n    }\n  )\n  });\n  createCal( cal_current_date.getMonth(), cal_current_date.getFullYear() );\n})\n\n\nconst POSTS = [\n    {   id:1,\n        name: 'post dog',\n        date: {\n            time: [6, 3, 2018],\n        }\n    },\n    {   id:67,\n        name: 'post dog',\n        date: {\n            time: [6, 3, 2018],\n        }\n    },\n    {   id:67,\n        name: 'post dog',\n        date: {\n            time: [6, 3, 2018],\n        }\n    },\n    {   id:67,\n        name: 'post dog',\n        date: {\n            time: [6, 3, 2018],\n        }\n    },\n    {   id:67,\n        name: 'post dog',\n        date: {\n            time: [6, 3, 2018],\n        }\n    },\n    {   id:67,\n        name: 'post dog',\n        date: {\n            time: [6, 3, 2018],\n        }\n    },\n    {   id:67,\n        name: 'post dog',\n        date: {\n            time: [6, 3, 2018],\n        }\n    },\n    {   id:2,\n        name: 'post dog',\n        date: {\n            time: [6, 4, 2018],\n        }\n    },\n    {   id:3,\n        name: 'post dog',\n        date: {\n            time: [6, 17, 2018],\n        }\n    },\n    {   id:43,\n        name: 'post dog',\n        date: {\n            time: [6, 22, 2018],\n        }\n    },\n    {\n        id:22,\n        name: 'post fish',\n        date: {\n            time: [6, 25, 2018],\n        }\n    },\n    {   id:12,\n        name: 'post dog',\n        date: {\n            time: [6, 17, 2018],\n        }\n    },\n    {   id:6,\n        name: 'post dog',\n        date: {\n            time: [6, 17, 2017],\n        }\n    },\n    {   id:8,\n        name: 'post dog',\n        date: {\n            time: [7, 17, 2018],\n        }\n    },\n    {   id:9,\n        name: 'post dog',\n        date: {\n            time: [7, 17, 2018],\n        }\n    }\n  ];\nconst cal_days_labels = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];\nconst cal_months_labels = ['Январь', 'Февраль', 'Март', 'Апрель','Май', 'Июнь', 'Июль', 'Август', 'Сентябрь',\n                                                                                 'Октябрь', 'Ноябрь', 'Декабрь'];\n\n// these are the days of the week for each month, in order\nconst cal_days_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];\nconst cal_current_date = new Date();\n\nclass Calendar {\n    constructor(month, year) {\n      this.month = (isNaN(month) || month == null) ? cal_current_date.getMonth() : month;\n      this.year = (isNaN(year) || year == null) ? cal_current_date.getFullYear() : year;\n      this.html = '';\n      this.renderCalendar = this.renderCalendar;\n    };\n\n    generateObjOfIds(firstDay, startingDay, monthLength) {\n     let daysObj = {};//этот объект вернеться в конце обработки метода, поэтому необходимо назвать по-человечески\n\t\t let monthName = cal_months_labels[this.month];\n     let day = 1;\n\n      for (let i = 0; i < 9; i++) {\n        for (let j = 0; j <= 6; j++) {\n          new_POSTS.map( postDay => {\n            if( postDay.date.time[0] === this.month && postDay.date.time[1] === day){\n              if(!daysObj[day]) daysObj[day] = [];\n                daysObj[day].push(postDay)\n                  }\n              });\n              if (day <= monthLength && (i > 0 || j >= startingDay)) day++;\n          }\n      }\n      return daysObj;\n    };\n\n    getIdsByDate(days, day) {\n    \treturn days.map(a => a.id);\n    };\n\n    renderCalendar(firstDay, startingDay, monthLength) {\n      let dataObj = this.generateObjOfIds(firstDay, startingDay, monthLength)\n      let firstDayIndex = new Date(firstDay).getDay();\n      let monthName = cal_months_labels[this.month]\n      let html = '<table class=\"calendar-table\">';\n      html += '<tr><th class=\"header_row\" colspan=\"7\">';\n      html += '<button id=\"left-btn\" class=\"arrow_btn\"><</button> ' + \"<span class='monthName'>\" + monthName + \" \" + this.year + \"</span>\" + '<button class=\"arrow_btn\" id=\"right-btn\">></button>';\n      html += '</th></tr>';\n      html += '<tr class=\"calendar-header\">';\n\n      for (let i = 0; i <= 6; i++) {\n          html += '<td class=\"calendar-header-day\">';\n          html += cal_days_labels[i];\n          html += '</td>';\n      };\n      html += '</tr><tr>';\n      // fill in the days\n      let day = 1;\n\n      if( day === 1 && firstDayIndex !== 0){\n        for( let o = 0; o < firstDayIndex ; o++){\n          html += '<td></td>'\n        }\n      };\n      // this loop is for is weeks (rows)а\n      for (let i = 0; i < 9; i++) {\n          // this loop is for weekdays (cells)\n          for (let j = 0; j <= 6; j++) {\n\t\t\t\t        var b = '';\n              new_POSTS.map( postDay => {\n                if( postDay.date.time[0] === this.month && postDay.date.time[1] === day){\n                  b = `data-posts=\"[${this.getIdsByDate(dataObj[day], day)}]\"`;\n                }\n              });\n\n              if (day <= monthLength && (i > 0 || j >= startingDay)) {\n                  html += `<td class=\"calendar-day\" ${b}>`  + day;\n                  day++;\n              };\n              html += '</td>';\n          };\n          // stop making rows if we've run out of days\n          if (day > monthLength) {\n              break;\n          } else {\n              html += '</tr><tr>';\n          };\n      };\n      html += '</tr></table>';\n      return html;\n    };\n\n    generateHTML() {\n        // get first day of month\n        let firstDay = new Date(this.year, this.month, 1);\n        let startingDay = firstDay.getDay();\n        // find number of days in month\n        let monthLength = cal_days_in_month[this.month];\n        // compensate for leap year\n        if (this.month == 1) { // February only!\n            if ((this.year % 4 == 0 && this.year % 100 != 0) || this.year % 400 == 0) {\n                monthLength = 29;\n            };\n        };\n        // do the header\n        let calendarDiv = document.createElement('div');\n        calendarDiv.innerHTML = this.renderCalendar(firstDay, startingDay, monthLength);\n        let targetId = document.getElementById('calendar');\n        targetId.innerHTML = null;\n        targetId.appendChild(calendarDiv);\n    };\n\n    generateArrOfMonthes() {\n      let arrayOfrelMonthes = new_POSTS.map(function(elem){\n        return {\n          'm': elem.date.time[0],\n          'y':elem.date.time[2],\n          'ms': elem.date.ms\n        }});\n        function getUniqueObject(nonUniqueArray) {\n          let result = [];\n            for (let i = 0; i < nonUniqueArray.length; i++) {\n              let currentItem = nonUniqueArray[i];\n\n              if (isObjectPresent(result, currentItem)) {\n                // do nothing\n              } else {\n                result.push(currentItem)\n              }\n            };\n          \n        result = result.sort( (a, b) => {\n          return a.ms - b.ms;\n        });\n        \n        \n        \n        \n        return result;\n      };\n\n      function isObjectPresent(incomeArray, objectToVerify) {\n          for (let i = 0; i < incomeArray.length; i++) {\n              let currentItem = incomeArray[i];\n              if (isSimilar(currentItem, objectToVerify)) return true\n          };\n          return false;\n      };\n\n      function isSimilar(object1, object2) {\n          if (object1.m === object2.m && object1.y === object2.y) return true\n          return false\n      };\n      return getUniqueObject(arrayOfrelMonthes);\n    };\n};\n\nlet arrOfDatesToCal = [];\nlet arrayOfDays = [];\nlet currentPosition = 0;\n\nfunction createCal(month, year) {\n  let cal = new Calendar(month, year);\n  cal.generateHTML();\n  arrOfDatesToCal = cal.generateArrOfMonthes();\n\n  let leftBtn = document.getElementById('left-btn');\n  let rightBtn = document.getElementById('right-btn');\n\n  rightBtn.addEventListener('click', function() {\n    if (currentPosition < arrOfDatesToCal.length - 1)\n      currentPosition++;\n    else\n      currentPosition = 0;\n  \n    month = arrOfDatesToCal[currentPosition].m;\n    year = arrOfDatesToCal[currentPosition].y;\n    createCal(month, year)\n  });\n  leftBtn.addEventListener('click', function() {\n    if (currentPosition > 0) {\n      currentPosition--;\n    } else {\n      currentPosition = arrOfDatesToCal.length - 1;\n    }\n\n    month = arrOfDatesToCal[currentPosition].m;\n    year = arrOfDatesToCal[currentPosition].y;\n    createCal(month, year)\n  });\n  countPosts();\n};\n\n\n  function countPosts(){\n    let days = document.querySelectorAll('td');\n    days.forEach(function(day) {\n      if ( day.dataset.posts !== undefined ) {\n        arrayOfDays = JSON.parse(day.dataset.posts);\n        switch (arrayOfDays.length) {\n          case 1:\n          day.classList.add('day-one')\n          break;\n\n          case 2:\n          day.classList.add('day-six')\n          break;\n\n          case 3:\n          day.classList.add('day-nine')\n          break;\n\n          default:\n          day.classList.add('test');\n        };\n      };\n\n    day.addEventListener('click', function(e) {\n      if ( e.target.dataset.posts !== undefined ) {\n        let arrayOfId = JSON.parse(e.target.dataset.posts)\n        if( arrayOfId.length > 1){\n          feed2.renderPost( arrayOfId );\n\n          document.querySelector('.tab_content[data-id=\"1\"]').classList.add('show');\n          document.querySelector('.tab_content[data-id=\"2\"]').classList.remove('show');\n        } else {\n          feed2.renderPost( arrayOfId[0] );\n          document.querySelector('.tab_content[data-id=\"1\"]').classList.add('show');\n          document.querySelector('.tab_content[data-id=\"2\"]').classList.remove('show');\n        };\n      };\n    });\n  });\n\n};\n\n\n//# sourceURL=webpack:///./application/calendar/index.js?");

/***/ }),

/***/ "./application/feed/feed.js":
/*!**********************************!*\
  !*** ./application/feed/feed.js ***!
  \**********************************/
/*! exports provided: Feed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Feed\", function() { return Feed; });\n/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./post */ \"./application/feed/post.js\");\n\n\nconst POSTS_LIMIT = 5;\n\nclass Feed {\n    constructor() {\n        this.posts = [];\n        this.postsLimit = POSTS_LIMIT;\n    }\n\n    async getPosts() {\n        // [{model}, {model}, ...]\n        //   |        |\n        // [Post,    Post,...]\n        try {\n            const models = await fetch('../data.json').then(res => res.json()); // [{model}, {model}, ...]\n            const posts = models.map( model => new _post__WEBPACK_IMPORTED_MODULE_0__[\"Post\"](model) ); // [Post,    Post,...]\n\n            this.posts = posts;\n        } catch (error) {\n        }\n    }\n\n    findPost( postIds ) { // 1 || [1, 2, 3]\n        if( Array.isArray(postIds) ) { // postIds = [1, 2, 3]\n            return this.posts.filter( post => postIds.indexOf(post.id) > -1);\n        } else { // postIds = 1\n            return this.posts.filter( post => post.id === postIds );\n        }\n    }\n\n\n    showPosts() {\n        const container = document.getElementById('wrap_posts');\n\n        container.innerHTML = null;\n\n        this.posts.filter((_, i) => i < this.postsLimit).forEach(post => container.appendChild(post.render()));\n\n        this.postsLimit = this.postsLimit + POSTS_LIMIT;\n    }\n\n    renderPost(ids) {\n        const container = document.getElementById('wrap_posts');\n\n        container.innerHTML = null;\n\n        this.findPost(ids).forEach((post) => container.appendChild(post.render()));\n    }\n\n}\n\n\n//# sourceURL=webpack:///./application/feed/feed.js?");

/***/ }),

/***/ "./application/feed/index.js":
/*!***********************************!*\
  !*** ./application/feed/index.js ***!
  \***********************************/
/*! exports provided: Feed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _feed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feed */ \"./application/feed/feed.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Feed\", function() { return _feed__WEBPACK_IMPORTED_MODULE_0__[\"Feed\"]; });\n\n\n\n\n//# sourceURL=webpack:///./application/feed/index.js?");

/***/ }),

/***/ "./application/feed/post.js":
/*!**********************************!*\
  !*** ./application/feed/post.js ***!
  \**********************************/
/*! exports provided: Post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Post\", function() { return Post; });\nclass Post {\n    constructor(model) {\n        const {id, author, post, date, likes, comments, tags} = model;\n\n        this.id = id;\n        this.author = author;\n        this.post = post;\n        this.date = date;\n        this.likes = likes;\n\n        this.comments = comments;\n        this.showComments = false;\n\n        this.tags = tags;\n\n        this.addLike = this.addLike.bind(this);\n        this.addComment = this.addComment.bind(this);\n        this.render = this.render.bind(this);\n        this.showAllComments = this.showAllComments.bind(this);\n    }\n\n    addLike() {\n        this.likes++;\n    }\n\n    addComment(e) {\n        e.preventDefault();\n        if (!e.target.elements.comment.value) return;\n        // {\n        //     author: { first, last... },\n        //     text: 'text',\n        // }\n        this.comments.push({ \n            author: {\n                avatarUrl:\"http://placehold.it/32x32\",\n                email:\"\",\n                firstName: e.target.elements.user_name.value,\n                guid: \"\",\n                lastName:\"\",\n                rank: 0,\n            },\n            text: e.target.elements.comment.value });\n        \n        let commentTemplate =\n            `<div class=\"commentList\">\n                <ul class=\"nth_comment\">\n                    <li>\n                        <p><b>${e.target.elements.user_name.value}</b></p>\n                        <p>${e.target.elements.comment.value}</p></br>\n                    </li>\n                </ul>\n            </div>`;\n       \n        document.getElementById(`post_${this.id}`).querySelector('.all_comments').innerHTML += commentTemplate;\n        document.getElementById(`post_${this.id}`).querySelector('.comments_text').innerHTML = `All comments (${this.comments.length})`;\n    \n        e.target.elements.comment.value = '';\n    }\n\n    showAllComments() {\n\n        if( this.showComments ){\n            document.getElementById(`post_${this.id}`).querySelector('.all_comments').innerHTML = '';\n            this.showComments = false;\n        } else {\n            this.showComments = true;\n            let newArrComm = this.comments.map( comment => {\n                comment = `<div class=\"commentList\">\n                            <ul class=\"nth_comment\">\n                                <li>\n                                    <p><b>${comment.author.firstName} ${comment.author.lastName}</b></p>\n                                    <p><em>${comment.text}</em></p></br>\n                                </li>\n                            </ul>\n                        </div>`\n                return comment;\n            });\n            document.getElementById(`post_${this.id}`).querySelector('.all_comments').innerHTML = newArrComm.join('\\n');\n            document.getElementById(`post_${this.id}`).querySelector('.comments_text').innerHTML = `All comments (${this.comments.length})`;\n        }\n        \n       \n    }\n\n    render(){\n\n        let currentUser = JSON.parse(localStorage.getItem('SigUpUser'));\n\n        let div = document.createElement('div');\n        div.innerHTML =  `\n        <div class=\"post\" id=\"post_${this.id}\">\n\n            <div class=\"header_post\">\n                <div class=\"user_avatar\" title=\"avatar\">\n                    <a href=\"#\">\n                        <img src=\"${this.author.avatarUrl}\">\n                    </a>\n                </div>\n                <div class=\"wrap_date_name\">\n                    <span class=\"user_name\">${this.author.firstName} ${this.author.lastName}</span>\n                    <span class=\"user_date\">${this.date}</span>\n                </div>\n            </div>\n\n            <div class=\"main_img_post\">\n                <img src=\"${this.post.imageUrl}\" alt=\"\">\n            </div>\n\n            <div class=\"likes\">\n                <a href=\"#\" class=\"_addLike\">\n                    <span class=\"like_count\">♥</span>\n                    <span class=\"like_text\">${this.likes} Likes</span>\n                </a>\n            </div>\n\n            <div class=\"tags\">\n                ${this.tags.map(tag => `<a href=\"#${tag}\">#${tag}</a>`).join('\\n')}\n            </div>\n\n            <div class=\"wrap_main_text\">\n                <p class=\"main_text\">${this.post.description}</p>\n            </div>\n\n            <div class=\"footer_post\">\n                <span class=\"comments_text\">All comments (${this.comments.length})</span>\n                <div class=\"all_comments\"></div>\n                ${\n                    currentUser !== null ?\n                            `<form class=\"comment_form\">\n                                <input hidden name=\"user_name\" value=\"${currentUser.name} ${currentUser.last}\"/>\n                                <input name=\"comment\" type=\"text\" placeholder=\"Write your comment...\">\n                                <button type=\"submit\" title=\"send\" class=\"_addComment\"> > </button>\n                            </form>`\n                    : ''\n                    \n                }\n            </div>\n        </div>`;\n\n        let _addLike = div.querySelector('._addLike');\n        let showAllComments = div.querySelector('.comments_text');\n        if( currentUser !== null){\n            let comment_form = div.querySelector('.comment_form');\n            comment_form.addEventListener('submit', this.addComment );\n        }\n        \n       showAllComments.addEventListener('click', this.showAllComments );\n\n\n        _addLike.addEventListener('click', (e) => {\n          e.preventDefault();\n          this.addLike();\n          let block = document.getElementById('post_'+this.id)\n            .querySelector('.like_text').innerText = `${this.likes} likes`;\n        });\n\n        return div;\n    }\n\n}\n\n//# sourceURL=webpack:///./application/feed/post.js?");

/***/ }),

/***/ "./application/index.js":
/*!******************************!*\
  !*** ./application/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _feed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feed */ \"./application/feed/index.js\");\n/* harmony import */ var _calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calendar */ \"./application/calendar/index.js\");\n/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile */ \"./application/profile/index.js\");\n/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search */ \"./application/search/index.js\");\n/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabs */ \"./application/tabs/index.js\");\n\n\n\n\n\n\n\nconst feed = new _feed__WEBPACK_IMPORTED_MODULE_0__[\"Feed\"]();\n\nlet btn = document.createElement('input');\nbtn.type = 'button';\nbtn.value = 'Show More';\nbtn.addEventListener('click', () => feed.showPosts());\ndocument.getElementById('posts').appendChild( btn );\n\n\ndocument.addEventListener('DOMContentLoaded', async () => {\n  await feed.getPosts();\n\n\n\n  // feed.renderPost([\"5b3a64a948208773858a50f9\", \"5b3a64a9ba5e67189b095c96\", \"5b3a64a9fe1844d6922eecd6\"]);\n  feed.showPosts();\n});\n\n      // feed.getPosts();  скачує всі наші пости\n      // feed.showPost(); показує перші 5 постів, а при повторному виклиці показує наступці 5\n      // feed.renderPost(); приймає id або масив id і виводить на екран\n\n\n//# sourceURL=webpack:///./application/index.js?");

/***/ }),

/***/ "./application/profile/index.js":
/*!**************************************!*\
  !*** ./application/profile/index.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _registration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registration */ \"./application/profile/registration.js\");\n/* harmony import */ var _signUp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signUp */ \"./application/profile/signUp.js\");\n\n\n\n\n//# sourceURL=webpack:///./application/profile/index.js?");

/***/ }),

/***/ "./application/profile/registration.js":
/*!*********************************************!*\
  !*** ./application/profile/registration.js ***!
  \*********************************************/
/*! exports provided: clearField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearField\", function() { return clearField; });\n/* harmony import */ var _signUp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signUp */ \"./application/profile/signUp.js\");\n\n\n\nlet newArr =[];\n\nlet registrBtn = document.getElementById('registr');\nlet inpName = document.getElementById('login');\nlet inpLast = document.getElementById('last');\nlet inpEmail = document.getElementById('email');\nlet inpPass = document.getElementById('pass');\nlet inpConfirmPass = document.getElementById('confirm_pass');\nlet errorOut = document.getElementById('error_form');\nlet succesOut = document.getElementById('succesRegistr');\n\nlet array = [];\n\nlet arrUsers = [];\n\n\nlet clearField = (el)=> {\n    setInterval(()=>{\n        el.innerText = '';\n    }, 3000);\n\n};\nlet clearInp = (input)=> {\n    setInterval(()=>{\n        input.classList.remove('error_input');\n    },3000);\n};\n\nclass Registration {\n    constructor(name, last, email, password) {\n        this.name = name;\n        this.last = last;\n        this.mail = email;\n        this.password = password;\n        this.avatarUrl = 'default';\n        if(this.avatarUrl === 'default') {\n\n            this.setUrl();\n        }\n        this.loggedStatus = false;\n        this.authorised = false;\n\n        this.validation();\n        if(this.validation()=== true) {\n            arrUsers.push(this);\n            inpName.value ='';\n            inpPass.value = '';\n            inpConfirmPass.value = '';\n        }\n        if(arrUsers.length > 0 ) {\n            newArr = arrUsers.sort((a,b)=>{\n                if(a.mail === b.mail) {\n                    return -1\n                } else{\n                    return 1}\n            }).reduce(function(arr, el){\n                    if(!arr.length || arr[arr.length - 1].mail != el.mail) {\n                    arr.push(el);\n\n                }\n                return arr;\n\n            }, []);\n        // console.log(newArr)\n        }\n    }\n    validation(){\n        if(this.name === '' || this.name.length < 5) {\n            inpName.classList.add('error_input');\n\n            errorOut.innerHTML = `Incorrect name`;\n            clearField(errorOut);\n            clearInp(inpName);\n            inpName.value ='';\n\n            return false;\n        }\n        else if(!/(\\b\\w*)@(\\w+\\.\\w+\\b)/.test(this.mail)) {\n            inpEmail.classList.add('error_input');\n            errorOut.innerHTML = `Incorrect email`;\n            clearField(errorOut);\n            clearInp(inpEmail);\n            inpEmail.value = '';\n            return false;\n        }\n\n\n        else if(this.password.length < 5 || this.password !== inpConfirmPass.value) {\n            inpPass.classList.add('error_input');\n            inpConfirmPass.classList.add('error_input');\n           errorOut.innerHTML = `Incorrect password`;\n            clearField(errorOut);\n            clearInp(inpPass);\n            inpPass.value = '';\n            inpConfirmPass.value = '';\n\n            return false;\n       }\n\n        else {\n            return true\n        }\n    }\n\n    setUrl(){\n        this.avatarUrl = 'https://cdn4.iconfinder.com/data/icons/essential-app-2/16/user-avatar-human-admin-login-512.png';\n\n    }\n}\n\n\nlet oldUsers = JSON.parse(localStorage.getItem(\"newUser\"));\nlet data = [];\nlet uniqueUser = (arr1, arr2) => {\n    if(oldUsers !== null) {\n        data = [...arr1, ...arr2];\n        array = data.sort((a,b)=>{\n            if(a.mail === b.mail) {\n                return -1;\n            } else{\n                return 1\n            }\n        }).reduce(function(arr, el){\n            if(!arr.length || arr[arr.length - 1].mail != el.mail) {\n                arr.push(el);\n            }\n            return arr;\n\n        }, []);\n        data = [...array];\n    }else {\n        data = [...arr2];\n    }\n}\n\n\n\nlet createUser = (e)=>{\n    e.preventDefault();\n    let usr = new Registration(inpName.value, inpLast.value, inpEmail.value, inpPass.value);\n    uniqueUser(oldUsers, newArr);\n    if(usr.authorised !== data[0].authorised) {\n        errorOut.innerText = 'This email is already registered';\n        clearField(succesOut);\n        inpEmail.value = '';\n        clearField(errorOut);\n    }else {\n        localStorage.setItem('loggedStatus', 'true');\n        usr.authorised = true;\n        Object(_signUp__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(usr);\n        location.reload();\n    }\n    localStorage.setItem('newUser', JSON.stringify(data));\n    data.map((item)=> {\n        item.loggedStatus = true;\n\n    });\n\n};\n// localStorage.setItem('loggedStatus', 'true');\n\nregistrBtn.addEventListener('click', createUser);\n\n\n\n\n\n//# sourceURL=webpack:///./application/profile/registration.js?");

/***/ }),

/***/ "./application/profile/signUp.js":
/*!***************************************!*\
  !*** ./application/profile/signUp.js ***!
  \***************************************/
/*! exports provided: saveInfo, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"saveInfo\", function() { return saveInfo; });\n/* harmony import */ var _registration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registration */ \"./application/profile/registration.js\");\n\nlet array = [];\nlet signUpBtn = document.getElementById('signUp');\nlet logOutBtn = document.getElementById('logout_btn');\nlet setUrlBtn = document.getElementById('setUrl');\nlet hideCont = document.getElementById('profilereg');\nlet showProfileInfo = document.getElementById('profWrap');\nlet signUpEmail = document.getElementById('signUp_email');\n\nlet signUpPass = document.getElementById('signUp_password');\nlet profileAvaUrl = document.querySelectorAll('.profile_Avatar');\nlet cancelChangeBtn = document.createElement('button');\nlet acceptChangeBtn = document.createElement('button');\n    cancelChangeBtn.id = 'cancelChanges';\n    acceptChangeBtn.id = 'acceptChanges';\nlet showProf = (item) => {\n    let sesStor = JSON.stringify(item);\n    let profile_Name = document.getElementById('profile_Name');\n    let profile_Last = document.getElementById('profile_Last');\n    let profile_Email = document.getElementById('profile_Email');\n\n    localStorage.setItem('SigUpUser', sesStor);\n    profile_Name.innerHTML = ` Name: ${item.name}`;\n    if(item.last !== undefined) {\n\n        profile_Last.innerHTML = ` Last: ${item.last}`;\n    }else {\n        profile_Last.innerHTML = null;\n    }\n    profile_Email.innerHTML = ` Email: ${item.mail}`;\n\n    hideCont.classList.remove('show');\n    hideCont.classList.add('hide');\n    showProfileInfo.classList.remove('hide');\n    showProfileInfo.classList.add('show');\n\n    Array.from(profileAvaUrl).map(url=>{\n        url.src = item.avatarUrl;\n    })\n\n};\nlet login = (e) => {\n    e.preventDefault();\n    let dataStorage = localStorage.getItem('newUser');\n    let loggedStatus = localStorage.setItem('loggedStatus', 'true');\n    let storageObject = JSON.parse(dataStorage);\n        storageObject.map(item=>{\n            let sesStor = JSON.stringify(item);\n            localStorage.setItem('SigUpUser', sesStor);\n\n            if(item.mail === signUpEmail.value && item.password === signUpPass.value) {\n                if(localStorage.getItem('SigUpUser')) {\n                    showProf(item)\n                  location.reload();\n                }\n            }else {\n                let errorOut = document.querySelector('.signUp_error');\n                errorOut.innerText = 'Incorrect password';\n                Object(_registration__WEBPACK_IMPORTED_MODULE_0__[\"clearField\"])(errorOut);\n            }\n\n        });\n    }\n//\nlet saveInfo = () => {\n    if(localStorage.getItem('logUpUser')== null) {\n       if(localStorage.getItem('loggedStatus') === 'true') {\n           let user = JSON.parse(localStorage.getItem('SigUpUser'));\n           showProf(user);\n       }\n    }\n};\n\n\nfunction logOut(e) {\n    e.preventDefault();\n\n    localStorage.setItem('loggedStatus', 'false');\n    localStorage.removeItem('SigUpUser');\n\n    if(localStorage.setItem('loggedStatus', 'false')) {\n\n        hideCont.classList.add('show');\n        hideCont.classList.remove('hide');\n        showProfileInfo.classList.add('hide');\n        showProfileInfo.classList.remove('show');\n\n        Array.from(profileAvaUrl).map(url=> {\n            if(url.dataset.id === '4') {\n                url.src = 'https://cdn3.iconfinder.com/data/icons/watchify-v1-0-32px/32/lock-512.png';\n            }\n        })\n    }\n    location.reload();\n\n\n\n}\nlet oldUsers = JSON.parse(localStorage.getItem(\"newUser\"));\nfunction setUrlInProfile(e) {\n    e.preventDefault();\n    let dataStorage = localStorage.getItem('SigUpUser');\n    let storageObject = JSON.parse(dataStorage);\n    let arr = [];\n    arr.push(storageObject);\n    arr.map(item => {\n        item.avatarUrl;\n        let inpAvatarProfile = document.getElementById('setAvatar');\n        let errorAvatar = document.getElementById('errorAvatarUrl');\n\n            if (!(/(http(s?):)([/|.|\\w|\\s|-])*\\.(?:jpg|gif|png)/gi).test(inpAvatarProfile.value) || inpAvatarProfile.value === ''){\n                errorAvatar.innerHTML = 'Incorrect URL';\n                Object(_registration__WEBPACK_IMPORTED_MODULE_0__[\"clearField\"])(errorAvatar);\n\n            }else {\n                let data = [];\n                if(oldUsers !== null) {\n                    data = [...oldUsers, item];\n                    array = data.sort((a,b)=>{\n                        if(a.mail === b.mail) {return -1;} else{return 1}})\n                        .reduce(function(arr, el){\n                            if(!arr.length || arr[arr.length - 1].mail != el.mail) {\n                                arr.push(el);\n                            }\n                            return arr;\n\n                        }, []);\n                    data = [...array];\n                }else {\n                    data = [item];\n                }\n\n                item.avatarUrl = inpAvatarProfile.value;\n                Array.from(profileAvaUrl).map(url => {\n                    url.src = inpAvatarProfile.value;\n                });\n\n                localStorage.setItem('newUser', JSON.stringify(data));\n                localStorage.setItem('SigUpUser', JSON.stringify(item));\n            }\n    });\n\n}\n\nsetUrlBtn.addEventListener('click', setUrlInProfile);\nsignUpBtn.addEventListener('click', login);\nlogOutBtn.addEventListener('click', logOut);\nsaveInfo();\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (showProf);\n\n\n\n//# sourceURL=webpack:///./application/profile/signUp.js?");

/***/ }),

/***/ "./application/search/createNode.js":
/*!******************************************!*\
  !*** ./application/search/createNode.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst createNode = (item, name, zid) => {\n  let elem = document.createElement(item);\n  elem.innerHTML = name;\n  if( zid !== undefined){\n    elem.dataset.id = zid;\n  }\n  return elem;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createNode);\n\n//# sourceURL=webpack:///./application/search/createNode.js?");

/***/ }),

/***/ "./application/search/index.js":
/*!*************************************!*\
  !*** ./application/search/index.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search */ \"./application/search/search.js\");\n/* harmony import */ var _tags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tags */ \"./application/search/tags.js\");\n/* harmony import */ var _feed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../feed */ \"./application/feed/index.js\");\n/* harmony import */ var _createNode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createNode */ \"./application/search/createNode.js\");\n\n\n\n\n\n\nlet feed = new _feed__WEBPACK_IMPORTED_MODULE_2__[\"Feed\"]();\nlet model;\nfeed.getPosts().then( res => {\n  model = feed.posts.map( old => {\n    return(\n        {\n          id: old.id,\n          name: `${old.author.firstName} ${old.author.lastName}`,\n          tags: old.tags.map( item => item.toLowerCase() )\n  \n        }\n    )\n  });\n  Object(_search__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(model, feed);\n  Object(_tags__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(model, feed);\n});\n\n\n//# sourceURL=webpack:///./application/search/index.js?");

/***/ }),

/***/ "./application/search/search.js":
/*!**************************************!*\
  !*** ./application/search/search.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createNode */ \"./application/search/createNode.js\");\n\n\nconst SearchFunc = ( model, feed) => {\n  let s, obj, uniqueArr, inp_search, inp_val, btn_search, result_search, a, block_overlay, result_array, wr_posts;\n  \n  \n  inp_search = document.getElementById('inp_search');\n  result_search = document.getElementById('result_search');\n  a = result_search.getElementsByTagName('a');\n  block_overlay = document.getElementById('block_overlay');\n  \n  inp_search.addEventListener('input', e => {\n    e.preventDefault();\n    \n    result_search.style.visibility = 'visible';\n    result_search.style.opacity = '1';\n    block_overlay.style.display = 'block';\n    result_search.innerHTML = null;\n    \n    inp_val = e.target.value.toLowerCase();\n    result_array = model.filter(item => {\n      if (item.tags.includes(inp_val)) {\n        return item;\n      }\n      if (item.name.toLowerCase().includes(inp_val)) {\n        return item;\n      }\n    });\n    \n    result_array.map(item => {\n      if (item.tags.includes(inp_val)) {\n        a = Object(_createNode__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('a', item.tags, item.id);\n        \n        a.onclick = (e) => {\n          let click_item_id = item.id;\n          document.querySelector('.tab_content[data-id=\"1\"]').classList.add('show');\n          document.querySelector('.tab_content[data-id=\"2\"]').classList.remove('show');\n          result_search.innerHTML = null;\n          result_search.style.visibility = null;\n          result_search.style.opacity = null;\n          block_overlay.style.display = null;\n          \n          feed.renderPost(click_item_id);\n        };\n        \n        a.style.cursor = 'pointer';\n        result_search.appendChild(a);\n      }\n      if (item.name.includes(inp_val)) {\n        a = Object(_createNode__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('a', item.name, item.id);\n        \n        a.onclick = (e) => {\n          let click_item_id = item.id;\n          document.querySelector('.tab_content[data-id=\"1\"]').classList.add('show');\n          document.querySelector('.tab_content[data-id=\"2\"]').classList.remove('show');\n          result_search.innerHTML = null;\n          result_search.style.visibility = null;\n          result_search.style.opacity = null;\n          block_overlay.style.display = null;\n          \n          feed.renderPost(click_item_id);\n        };\n        \n        a.style.cursor = 'pointer';\n        result_search.appendChild(a);\n      }\n    });\n    \n  });\n  \n  block_overlay.addEventListener('click', e => {\n    e.preventDefault();\n    result_search.innerHTML = null;\n    result_search.style.visibility = null;\n    result_search.style.opacity = null;\n    block_overlay.style.display = null;\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchFunc);\n\n//# sourceURL=webpack:///./application/search/search.js?");

/***/ }),

/***/ "./application/search/tags.js":
/*!************************************!*\
  !*** ./application/search/tags.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createNode */ \"./application/search/createNode.js\");\n\n\nconst TagsPage = ( model, feed ) => {\n  let a, result_array, wr_tags;\n  \n  wr_tags = document.getElementById('tags');\n  a = wr_tags.getElementsByTagName('a');\n  \n  let xTags = [];\n  model.map( item => {\n    item.tags.map( tag => xTags.push(tag) )\n  });\n  const filterUnique = (val, ind, elem) => elem.indexOf(val) === ind;\n  result_array = xTags.filter(filterUnique);\n  \n  wr_tags.innerHTML = null;\n  \n  result_array.map(item => {\n  \n      a = Object(_createNode__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('a', item);\n      \n      a.onclick = (e) => {\n  \n        let serachRes = model.filter( post => {\n          return post.tags.some( tag => tag === item)\n        });\n        serachRes = serachRes.map( post => post.id)\n        \n        feed.renderPost(serachRes);\n  \n        document.querySelector('.tab_content[data-id=\"1\"]').classList.toggle('show');\n        document.querySelector('.tab_content[data-id=\"3\"]').classList.toggle('show');\n      };\n      \n      a.style.cursor = 'pointer';\n      wr_tags.appendChild(a);\n    \n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TagsPage);\n\n//# sourceURL=webpack:///./application/search/tags.js?");

/***/ }),

/***/ "./application/tabs/index.js":
/*!***********************************!*\
  !*** ./application/tabs/index.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs */ \"./application/tabs/tabs.js\");\n\n\n\n\n//# sourceURL=webpack:///./application/tabs/index.js?");

/***/ }),

/***/ "./application/tabs/tabs.js":
/*!**********************************!*\
  !*** ./application/tabs/tabs.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet tab_container = document.getElementById('tab_container');\nlet profAvatar = document.getElementById('profAvat');\n\nlet arr = Array.from(tab_container.children); // refactor collection of children tab_container to array\n\nlet tabHandler = arr.map((item) => {\n    let curPos = item.dataset.id; // set current position of item\n    item.addEventListener('click', (e)=> {\n        e.preventDefault();\n\n        let tab_content = document.querySelectorAll('.tab_content'); // get all block with class tab_content\n        let arrTabContent = Array.from(tab_content); // refactor collection of tab_content to array\n\n        //this function show content if data-attribute id equals between tab_container.children and tab_content\n        arrTabContent.map(tab => {\n            if(item.dataset.id === tab.dataset.id) {\n                tab.classList.add('show');\n            }else {\n                tab.classList.remove('show');\n                tab.classList.add('hide');\n            }\n        });\n        // this block add class 'active' for chosen element and remove class for previous\n        arr.map(activeLine => {\n            activeLine.classList.remove('active');\n            arr[curPos-1].classList.add('active');\n        })\n\n    });\n    profAvatar.addEventListener('click', (e)=> {\n        let tab_content = document.querySelectorAll('.tab_content');\n        let arrTabContent = Array.from(tab_content);\n        arrTabContent.map(tab => {\n            if(profAvatar.dataset.id === tab.dataset.id) {\n                tab.classList.add('show');\n            }else {\n                tab.classList.remove('show');\n                tab.classList.add('hide');\n            }\n\n        });\n        arr.map(activeLine => {\n            activeLine.classList.remove('active');\n            arr[curPos-1].classList.add('active');\n        })\n    });\n\n});\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (tabHandler);\n\n\n//# sourceURL=webpack:///./application/tabs/tabs.js?");

/***/ })

/******/ });