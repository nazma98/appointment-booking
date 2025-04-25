# rename executive to consultant

# consultant will set his/her availability

# Get available appointments for a selected day
- Pre-generate appointments for each week
- Get all appointments where appointment is not already booked


# Pre-generate appointments for two weeks
- Run a cron job
- for each consultant
  - find his/her availability by filtering unavailability
  - create appointment

## Questions
  - what if someone cancels a appointment or take leave?
    - Find the appointments that have been created on the time window for that consultant
    - if there are booked appointments
      - do not allow the consultant to set him/her unavailable, an admin will do it
    - else delete the appointments

# Cancel a booked appointment (Admin)
- Find other appointments on that time that are not booked
- If there are such appointments then book the appointment for the clients
- Else cancel the booking


# Update slot schema
remove date, duration
add day (sunday, ... saturday)
add startTime
add endTime

# Add reserve a slot in the slotPreference table API
# Fix reserve slot edge cases
- pass the date to the backend
- check if there is an appointment created, if not create the appointment too

# Add remove slot from the slotPreference table API
- pass date to the backend
- if there is a booked appointment then do not allow the consultant to remove the slot
- else delete the appointment(Unbooked)
# Add reserve slot api in the UI
# Add remove slot api in the UI
