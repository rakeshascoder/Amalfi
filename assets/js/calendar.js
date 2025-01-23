document.addEventListener('DOMContentLoaded', function () {
    const calendarElement = document.getElementById('calendar');
    const departDateInput = document.getElementById('Departdate');
    const returnDateInput = document.getElementById('returnDate');
    let currentInput = null;
    let currentDate = new Date();

    function openCalendar(input) {
        currentInput = input;
        calendarElement.style.display = 'block';
        calendarElement.style.left = input.getBoundingClientRect().left + 'px';
        calendarElement.style.top = (input.getBoundingClientRect().bottom + window.scrollY) + 'px';
        renderCalendar(currentDate);
    }

    function renderCalendar(date) {
        const month = date.getMonth();
        const year = date.getFullYear();
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const daysInMonth = lastDay.getDate();
        const startDay = firstDay.getDay();

        let html = `
            <div class="calendar-header">
                <button class="prev-btn" onclick="changeMonth(-1)">&#8592;</button>
                <span>${date.toLocaleString('default', { month: 'long' })} ${year}</span>
                <button class="next-btn" onclick="changeMonth(1)">&#8594;</button>
            </div>
            <table>
                <tr>
                    <th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th>
                </tr>
                <tr>`;

        for (let i = 0; i < startDay; i++) {
            html += '<td></td>';
        }

        for (let day = 1; day <= daysInMonth; day++) {
            html += `<td onclick="selectDate(${day}, ${month}, ${year})">${day}</td>`;
            if ((day + startDay) % 7 === 0) {
                html += '</tr><tr>';
            }
        }

        html += '</tr></table>';
        calendarElement.innerHTML = html;
    }

    window.selectDate = function (day, month, year) {
        const selectedDate = new Date(year, month, day);
        const formattedDate = selectedDate.toLocaleDateString();
        currentInput.value = formattedDate;
        calendarElement.style.display = 'none';
    };

    window.changeMonth = function (delta) {
        currentDate.setMonth(currentDate.getMonth() + delta);
        renderCalendar(currentDate);
    };

    document.addEventListener('click', function (event) {
        // Close calendar only if the click is outside the calendar or inputs
        if (
            !calendarElement.contains(event.target) &&
            event.target !== departDateInput &&
            event.target !== returnDateInput
        ) {
            calendarElement.style.display = 'none';
        }
    });

    // Prevent calendar from closing when interacting with it
    calendarElement.addEventListener('click', function (event) {
        event.stopPropagation();
    });

    departDateInput.addEventListener('click', function (event) {
        event.stopPropagation(); // Prevent the click from triggering the document listener
        openCalendar(departDateInput);
    });

    returnDateInput.addEventListener('click', function (event) {
        event.stopPropagation(); // Prevent the click from triggering the document listener
        openCalendar(returnDateInput);
    });
});
