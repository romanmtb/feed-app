import { Feed } from '../feed';


let feed2 = new Feed();
let new_POSTS;

feed2.getPosts().then( res => {
    new_POSTS = feed2.posts.map( old => {
    let postDate = new Date(old.date);

    return(
      {
      id: old.id,
      date: {
        time: [
          postDate.getMonth(),
          postDate.getDate(),
          postDate.getFullYear()
        ],
        ms: postDate.getTime()
      }
    }
  )
  });
  createCal( cal_current_date.getMonth(), cal_current_date.getFullYear() );
})


const POSTS = [
    {   id:1,
        name: 'post dog',
        date: {
            time: [6, 3, 2018],
        }
    },
    {   id:67,
        name: 'post dog',
        date: {
            time: [6, 3, 2018],
        }
    },
    {   id:67,
        name: 'post dog',
        date: {
            time: [6, 3, 2018],
        }
    },
    {   id:67,
        name: 'post dog',
        date: {
            time: [6, 3, 2018],
        }
    },
    {   id:67,
        name: 'post dog',
        date: {
            time: [6, 3, 2018],
        }
    },
    {   id:67,
        name: 'post dog',
        date: {
            time: [6, 3, 2018],
        }
    },
    {   id:67,
        name: 'post dog',
        date: {
            time: [6, 3, 2018],
        }
    },
    {   id:2,
        name: 'post dog',
        date: {
            time: [6, 4, 2018],
        }
    },
    {   id:3,
        name: 'post dog',
        date: {
            time: [6, 17, 2018],
        }
    },
    {   id:43,
        name: 'post dog',
        date: {
            time: [6, 22, 2018],
        }
    },
    {
        id:22,
        name: 'post fish',
        date: {
            time: [6, 25, 2018],
        }
    },
    {   id:12,
        name: 'post dog',
        date: {
            time: [6, 17, 2018],
        }
    },
    {   id:6,
        name: 'post dog',
        date: {
            time: [6, 17, 2017],
        }
    },
    {   id:8,
        name: 'post dog',
        date: {
            time: [7, 17, 2018],
        }
    },
    {   id:9,
        name: 'post dog',
        date: {
            time: [7, 17, 2018],
        }
    }
  ];
const cal_days_labels = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
const cal_months_labels = ['Январь', 'Февраль', 'Март', 'Апрель','Май', 'Июнь', 'Июль', 'Август', 'Сентябрь',
                                                                                 'Октябрь', 'Ноябрь', 'Декабрь'];

// these are the days of the week for each month, in order
const cal_days_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const cal_current_date = new Date();

class Calendar {
    constructor(month, year) {
      this.month = (isNaN(month) || month == null) ? cal_current_date.getMonth() : month;
      this.year = (isNaN(year) || year == null) ? cal_current_date.getFullYear() : year;
      this.html = '';
      this.renderCalendar = this.renderCalendar;
    };

    generateObjOfIds(firstDay, startingDay, monthLength) {
     let daysObj = {};//этот объект вернеться в конце обработки метода, поэтому необходимо назвать по-человечески
		 let monthName = cal_months_labels[this.month];
     let day = 1;

      for (let i = 0; i < 9; i++) {
        for (let j = 0; j <= 6; j++) {
          new_POSTS.map( postDay => {
            if( postDay.date.time[0] === this.month && postDay.date.time[1] === day){
              if(!daysObj[day]) daysObj[day] = [];
                daysObj[day].push(postDay)
                  }
              });
              if (day <= monthLength && (i > 0 || j >= startingDay)) day++;
          }
      }
      return daysObj;
    };

    getIdsByDate(days, day) {
    	return days.map(a => a.id);
    };

    renderCalendar(firstDay, startingDay, monthLength) {
      let dataObj = this.generateObjOfIds(firstDay, startingDay, monthLength)
      let firstDayIndex = new Date(firstDay).getDay();
      let monthName = cal_months_labels[this.month]
      let html = '<table class="calendar-table">';
      html += '<tr><th class="header_row" colspan="7">';
      html += '<button id="left-btn" class="arrow_btn"><</button> ' + "<span class='monthName'>" + monthName + " " + this.year + "</span>" + '<button class="arrow_btn" id="right-btn">></button>';
      html += '</th></tr>';
      html += '<tr class="calendar-header">';

      for (let i = 0; i <= 6; i++) {
          html += '<td class="calendar-header-day">';
          html += cal_days_labels[i];
          html += '</td>';
      };
      html += '</tr><tr>';
      // fill in the days
      let day = 1;

      if( day === 1 && firstDayIndex !== 0){
        for( let o = 0; o < firstDayIndex ; o++){
          html += '<td></td>'
        }
      };
      // this loop is for is weeks (rows)а
      for (let i = 0; i < 9; i++) {
          // this loop is for weekdays (cells)
          for (let j = 0; j <= 6; j++) {
				        var b = '';
              new_POSTS.map( postDay => {
                if( postDay.date.time[0] === this.month && postDay.date.time[1] === day){
                  b = `data-posts="[${this.getIdsByDate(dataObj[day], day)}]"`;
                }
              });

              if (day <= monthLength && (i > 0 || j >= startingDay)) {
                  html += `<td class="calendar-day" ${b}>`  + day;
                  day++;
              };
              html += '</td>';
          };
          // stop making rows if we've run out of days
          if (day > monthLength) {
              break;
          } else {
              html += '</tr><tr>';
          };
      };
      html += '</tr></table>';
      return html;
    };

    generateHTML() {
        // get first day of month
        let firstDay = new Date(this.year, this.month, 1);
        let startingDay = firstDay.getDay();
        // find number of days in month
        let monthLength = cal_days_in_month[this.month];
        // compensate for leap year
        if (this.month == 1) { // February only!
            if ((this.year % 4 == 0 && this.year % 100 != 0) || this.year % 400 == 0) {
                monthLength = 29;
            };
        };
        // do the header
        let calendarDiv = document.createElement('div');
        calendarDiv.innerHTML = this.renderCalendar(firstDay, startingDay, monthLength);
        let targetId = document.getElementById('calendar');
        targetId.innerHTML = null;
        targetId.appendChild(calendarDiv);
    };

    generateArrOfMonthes() {
      let arrayOfrelMonthes = new_POSTS.map(function(elem){
        return {
          'm': elem.date.time[0],
          'y':elem.date.time[2],
          'ms': elem.date.ms
        }});
        function getUniqueObject(nonUniqueArray) {
          let result = [];
            for (let i = 0; i < nonUniqueArray.length; i++) {
              let currentItem = nonUniqueArray[i];

              if (isObjectPresent(result, currentItem)) {
                // do nothing
              } else {
                result.push(currentItem)
              }
            };
          
        result = result.sort( (a, b) => {
          return a.ms - b.ms;
        });
        
        
        
        
        return result;
      };

      function isObjectPresent(incomeArray, objectToVerify) {
          for (let i = 0; i < incomeArray.length; i++) {
              let currentItem = incomeArray[i];
              if (isSimilar(currentItem, objectToVerify)) return true
          };
          return false;
      };

      function isSimilar(object1, object2) {
          if (object1.m === object2.m && object1.y === object2.y) return true
          return false
      };
      return getUniqueObject(arrayOfrelMonthes);
    };
};

let arrOfDatesToCal = [];
let arrayOfDays = [];
let currentPosition = 0;

function createCal(month, year) {
  let cal = new Calendar(month, year);
  cal.generateHTML();
  arrOfDatesToCal = cal.generateArrOfMonthes();

  let leftBtn = document.getElementById('left-btn');
  let rightBtn = document.getElementById('right-btn');

  rightBtn.addEventListener('click', function() {
    if (currentPosition < arrOfDatesToCal.length - 1)
      currentPosition++;
    else
      currentPosition = 0;
  
    month = arrOfDatesToCal[currentPosition].m;
    year = arrOfDatesToCal[currentPosition].y;
    createCal(month, year)
  });
  leftBtn.addEventListener('click', function() {
    if (currentPosition > 0) {
      currentPosition--;
    } else {
      currentPosition = arrOfDatesToCal.length - 1;
    }

    month = arrOfDatesToCal[currentPosition].m;
    year = arrOfDatesToCal[currentPosition].y;
    createCal(month, year)
  });
  countPosts();
};


  function countPosts(){
    let days = document.querySelectorAll('td');
    days.forEach(function(day) {
      if ( day.dataset.posts !== undefined ) {
        arrayOfDays = JSON.parse(day.dataset.posts);
        switch (arrayOfDays.length) {
          case 1:
          day.classList.add('day-one')
          break;

          case 2:
          day.classList.add('day-six')
          break;

          case 3:
          day.classList.add('day-nine')
          break;

          default:
          day.classList.add('test');
        };
      };

    day.addEventListener('click', function(e) {
      if ( e.target.dataset.posts !== undefined ) {
        let arrayOfId = JSON.parse(e.target.dataset.posts)
        if( arrayOfId.length > 1){
          feed2.renderPost( arrayOfId );

          document.querySelector('.tab_content[data-id="1"]').classList.add('show');
          document.querySelector('.tab_content[data-id="2"]').classList.remove('show');
        } else {
          feed2.renderPost( arrayOfId[0] );
          document.querySelector('.tab_content[data-id="1"]').classList.add('show');
          document.querySelector('.tab_content[data-id="2"]').classList.remove('show');
        };
      };
    });
  });

};
