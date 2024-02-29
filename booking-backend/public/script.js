document.addEventListener('DOMContentLoaded', function () {
    const scheduleGrid = document.getElementById('schedule-grid');
  
    // Array to store time slots from 10am to 8pm
    const times = ['10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'];
  
    // Array to store days of the week
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
    // Loop through days of the week
    daysOfWeek.forEach(day => {
      // Create day header
      const dayHeader = document.createElement('div');
      dayHeader.classList.add('time-slot', 'day-header');
      dayHeader.textContent = day;
      scheduleGrid.appendChild(dayHeader);
  
      // Loop through time slotsnpm install -g http-server

      times.forEach(time => {
        // Create time slot
        const timeSlot = document.createElement('div');
        timeSlot.classList.add('time-slot');
        timeSlot.textContent = time;
        scheduleGrid.appendChild(timeSlot);
      });
    });
  
    // Example: Mark a slot as booked
    // Get the index of the desired time and day
    const dayIndex = 0; // Monday
    const timeIndex = 2; // 12:00 PM
    const slotIndex = dayIndex * times.length + timeIndex + 1;
    const bookedSlot = document.querySelectorAll('.time-slot')[slotIndex];
    bookedSlot.classList.add('booked');
  });
  