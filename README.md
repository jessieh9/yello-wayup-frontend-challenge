# Yello/WayUp front-end take home code challenge

High level goal: **Create an application that can be presented to the Yello/Wayup team (30mn)**.

Technologies: **Javascript/Typescript/React Preferred**.

Expected time: **~2-4 hours**.

## Challenge

Create a high level view that presents our Jobs to hypothetical students.

Make sure:
- the jobs are downloaded via the API when the page loads.
- the "student/viewer" can see a list or grid of available jobs.
- each job needs to have a call-to-action apply button (which doesn't need to work).

Our Jobs can be fetched without authentication via a HTTP GET on the following URL:
https://62bc8d086b1401736cfcd8fb.mockapi.io/jobs

Every Job follows the shape shown in the following example.
```
{
  "id":"1",
  "title":"Legacy Markets Director",
  "company":"Cronin Inc",
  "description":"synthesizing the panel won't do anything, we need to copy the bluetooth RSS feed!",
  "tags":["Engineering"],
  "location":"Royal Oak",
}
```

## Considerations that the candidate could take into account

Here are is an handful of areas that the candidate could take into consideration (Optional):
- Typing
- Testing
- Front-end pagination
- Fallback if the call returns an empty array
