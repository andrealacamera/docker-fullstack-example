# Docker Full-Stack Example

Basic example with three "main" parts: **backend**, **database**, and **frontend**. 
## Backend
Http server listening on port 3213, implements REST API. Returns json messages.

- [GET] `/api/test` (static message)
- [GET] `/api/middle_earth/gondor` (get the Gondor's people)
- [POST] `/api/middle_earth/new_gondor` (save a new person)

`Nodemon` implemented.

_WORK IN PROGRESS_

## Database

Based on MariaDB. Just one table, some records read by the API  


_WORK IN PROGRESS_
## Frontend
React example that calls the API and shows the results (in some way). 

_NOT YET IMPLEMENTED_

---
created: 2023-04-13

updated: 2023-04-21