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

## Evaluation Criteria
- Completeness: Did you complete the features? Are you able to demonstrate that?
- Correctness: Does the functionality act in sensible, thought-out ways?
- Coding Language best practices
- Maintainability: Is it written in a clean, maintainable way?
- Show us your work through your commit history
- * Use of AI: You are expected to be able to showcase, explain and iterate over your code. AI usage is allowed as a programming aide, but **do not simply copy/paste AI-generated code**.

**It doesn’t have to be perfect.  Writing code always involves trade-offs and design decisions. The most important thing is your ability to speak about the decisions you have made.**


## Submission:
Please submit this in your own github repository.
1. Fork this github repo to a new repository using the fork button from the top left corner.
2. Clone this locally: git clone ...

## App

The `app` folder is a built-in [create-react-app](https://create-react-app.dev/) application.

To run it in local just run `npm install` and `npm start` (within the `app` folder).

Using this app is not mandatory, feel free to create your own if you prefer.
