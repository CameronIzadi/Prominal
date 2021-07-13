# Prominal



## Project Description

Prominal is an e-commerce website that allows you to sell software/websites to others. You can upload your website with its description and price and sell it to others. Buyers can search for what they like and then buy based on results.

## Wireframes

The Wireframes below show the homepage/search results when you search for something. It also shows the mobile version of it. It shows the more descriptive result when you click on a website/software uploaded. 

![imageAlt](https://i.imgur.com/1uK32ek.png)

![imageAlt](https://i.imgur.com/qhUYTSC.png)

![imageAlt](https://i.imgur.com/Kh0YaPv.png) 

## Component Hierarchy

![imageAlt](https://i.imgur.com/PPisevq.png)

## API and Data Sample

https://airtable.com/shrTv92TftYf4SVZZ

Airtable is returning the data for this base as follows:

```
{
    "records": [
        {
            "id": "recmI8r8ZgKpRJeT0",
            "fields": {
                "Name": "Tinderr",
                "Author": "John Mackalan",
                "Avatar URL": "https://randomurl.com",
                "image": "https://random.url.com",
                "Description": "Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah ",
                "Price": 59.99
            },
            "createdTime": "2021-07-13T14:27:51.000Z"
        }
    ],
    "offset": "recmI8r8ZgKpRJeT0"
}


```

### MVP/PostMVP

#### MVP

- Home page with clickable icons on creations of others that route to separate path to see more description on it
- Get and post data of softwares/websites from Airtable.
- Use forms to create new softwares/websites on Airtable by uploading necessary requirements.

#### PostMVP

- Making the create new software/website more UI friendly.
- Get and post reviews in the more description path for each software/website.
- Add a search bar on the homepage to allow for more precise results.
- Allow new reviews to be created on each software/website.
- Making the homepage more reactive.

## Project Schedule

| Day         | Deliverable                                    | Status   |
| ----------- |  -----------------------------------------     | -------- |
| July 13-14  | Proposal Approval / Airtable Setup             | Incomplete |
| July 15     | Component Creation / Get, Set, Delete Data     | Incomplete |
| July 16     | July 15 cont. More Get, Set, Delete Data + CSS | Incomplete |
| July 17-18  | CSS Components cont'd / MVP                    | Incomplete |
| July 19     | Advanced CSS                                   | Incomplete |
| July 20     | Presentations                                  | Incomplete |

## Timeframes

| Component                 | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------------- | :------: | :------------: | :-----------: | :---------: |
| Proposal                  |    H     |      2hrs      |     2hrs      |    2hrs     |
| Airtable setup            |    H     |     .5hrs      |      1hr      |     1hr     |
| Data population           |    H     |      3hrs      |     2hrs      |    2hrs     |
| Get, Set, Post Data part 1|    H     |      3hrs      |     3hrs      |    3hrs     |
| Get, Set, Post Data part 2|    H     |      3hrs      |      1hr      |     1hr     |
| Get, Set, Post Data part 3|    H     |      3hrs      |      1hr      |     1hr     |
| New Form part 1.          |    H     |      2hrs      |      1hr      |     1hr     |
| New Form part 2.          |    H     |      2hrs      |      1hr      |     1hr     |
| Component CSS pg 1        |    H     |      3hrs      |     4hrs      |    4hrs     |
| Component CSS pg 2        |    H     |      3hrs      |     4hrs      |    4hrs     |
| Component CSS pg 3        |    H     |      3hrs      |     4hrs      |    4hrs     |
| Total                     |    H     |    42.5hrs     |     35hrs     |    35hrs    |

## SWOT Analysis

### Strengths:

I have a good understanding of what i want my application to look like and what exactly I want it to do. As such, I can better plan for what needs to be done and how long it will take. I also know which labs and excercise I can reference if I get lost along the way.

### Weaknesses:

I am still not terribly clear on CRUD and how to make sure I can carry each aspect out for this project. Additionally, I prefer to stick to functional components but given the parameters of the project, I'll need to use class components, as well. I will likely use most of my research time/manager help on these matters.

### Opportunities:

This project is the culmination of the last 2 weeks and will give me an opportunity to solidify my understanding of react. I also happen to be interested in the function of my app given my interests, so I am motivated to make it look usable and attractive.

### Threats:

Whenever I get stuck with an error or an issue, I tend to go down a rabbit hole of online searches and debugging. Often times, I don't timebox these episodes and lose a lot of time. While this is typically a favorable characteristic in a developer, I'll need to make sure I know when to ask for help.
