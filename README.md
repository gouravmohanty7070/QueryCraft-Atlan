![Atlan-Task](https://mms.businesswire.com/media/20220309005103/en/829587/23/atlan-logo-blue-bg-white.jpg)

[![forthebadge](https://forthebadge.com/images/badges/built-by-developers.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)


# :computer: Atlan Frontend Task: QueryCraft
<strong> Link to the application: https://vocal-crostata-76ef64.netlify.app/</strong>
<br>

## Introduction

The application was crafted as a project for Atlan. It offers users an online platform to execute SQL queries and subsequently assess the results generated from these queries.

A comprehensive problem statement related to this project can be found at the conclusion of this document.

## Data Source

The application sources its data from [Mockaroo](https://www.mockaroo.com/), a platform renowned for effortlessly generating mock data. While the data is currently stored as a local JSON object, there's flexibility to utilize CSV files. This can be achieved either by adapting the existing logic or by integrating a pre-existing format conversion library.

## Page Speed and its Optimisation

For comprehensive page optimization analysis, I employed tools like Google's Lighthouse and Page Speed Insights to evaluate page load times and adherence to web standards. To ensure accuracy, I cross-referenced the results with GTMetrix. On a laptop browser, both the Homepage and the SQL Editor page boast a commendable time-to-interactive of <strong>1.5 seconds.</strong>

### 1. Page Loading Time

I've defined the page load time as the duration required for the site to become interactive. In every instance highlighted below, this time is comfortably within Google's recommended limits for both mobile and desktop devices. From a user's perspective, I believe this is the most crucial metric, as it determines when users can begin navigating the site.

The Screenshots have been attached along with respective page load times in a later section of the document.

### 2. Optimizing the Page Load Time and other metrics

1. The application has been transformed into a <strong>PWA (Progressive Web App)</strong>, aligning with Google's push for such installable apps. This enhancement not only optimizes the app but also enables offline usage since it <strong>can be installed</strong> on devices.

2. While this type of application might not typically be accessed on mobile devices, I've ensured extensive responsiveness for the website. I've minimized the use of <strong>absolute sizing</strong>, preferring units like <strong>em, rem, vh, and vw</strong> instead. <strong>Media queries</strong> are predominantly employed, with occasional reliance on Bootstrap for expedited development.

3. The website is hosted on Vercel, renowned for its speed, especially for JavaScript-based web apps. This is attributed to its CDN and caching advantages. Additionally, Vercel offers complimentary SSL during hosting, enhancing page security and potentially boosting its ranking.

4. To enhance user experience, React's lazy loading feature has been implemented, allowing non-essential parts of the page to load in the background.

5. I've prioritized a lean approach, using only essential dependencies for the page's construction.

6. The code has been restructured for component reusability, and I've ensured minimalistic imports where feasible.

### Functionality

<img width="720" alt="Screenshot 2021-08-30 at 7 38 36 PM" src="https://res.cloudinary.com/divr26z8e/image/upload/v1696240321/Screenshot_2023-10-02_at_3.16.41_PM_gb3zfm.png">
<img width="720" alt="Screenshot 2021-08-30 at 7 40 12 PM" src="https://res.cloudinary.com/divr26z8e/image/upload/v1696240321/Screenshot_2023-10-02_at_3.17.39_PM_xyiw6n.png">
<img width="720" alt="Screenshot 2021-08-30 at 7 40 51 PM" src="https://res.cloudinary.com/divr26z8e/image/upload/v1696240320/Screenshot_2023-10-02_at_3.18.21_PM_qtmkax.png">
<img width="720" alt="Screenshot 2021-08-30 at 7 40 58 PM" src="https://res.cloudinary.com/divr26z8e/image/upload/v1696240320/Screenshot_2023-10-02_at_3.18.49_PM_ekroqg.png">
<img width="720" alt="Screenshot 2021-08-30 at 7 40 58 PM" src="https://res.cloudinary.com/divr26z8e/image/upload/v1696241588/Screenshot_2023-10-02_at_3.40.42_PM_n2ppiv.png">

## Problem Statement

### SQL Editor
Create, design and implement a web-based application capable of running SQL queries and displaying the results of said query. The application must include a space which accepts SQL queries in the form of user inputs, then runs the given query, and displays the result within the application.

### Note
- **This is a dummy application**.
- **You must include a space to accept SQL queries**. This can be as simple as a textarea or as complex as a full-blown code-editor. This does not figure in the judging criteria though.
- Your application **does not need to have a backend, a query engine or query validation**.
- You **do not need to add any syntax validation**.
- The data that your application displays can be any chunk of data. It does not need to be the actual result that the query would display if it was actually run. You can choose any block of data from [here](https://github.com/graphql-compose/graphql-compose-examples/tree/master/examples/northwind/data/csv) or you can choose any other data source. **The data and the query do not need to be in sync**.
- You can write down any query you wish. **The query is not important, nor is the result.** You are free to put in dummy stubs and mocks wherever the need arises.
- **Your application must have more than one query accompanied by its corresponding table of data.** You can have a predefined set of queries and a predefined set of tables showing some data. You must also provide a way for us to toggle between these queries and choose any query and view the table of data accompanying it. It can be a dropdown or any other toggling mechanism.

### Breakdown

### Ideation 💡

- Put on your thinking caps for this stage. Think of all the features you feel would be mandatory for this application. Features that make the application just usable. Something that, if removed, would render the whole application pointless. For example, a form is usable only if it has inputs and a way to submit the given form.
- Now that you have a list of essential and crucial features, start thinking of features that will add more value to your application, features that act as top-ups, cherries on the cake, if you will. These additional features make your application more useful and make your user’s life a tad bit easier. Think of forms with inputs, buttons, *and custom field validations*.
- *Assume that a data analyst is going to use your application for an entire day. What are the features that will help them breeze through the day’s workload?*

## Design 🧑🏻‍🎨

- **This is not a design-centric role, nor will you ever be asked to design any part of the product if you end up joining us.**
- In this stage, scribble out a rough layout of your webpage. Decide where the blocks of your application will go. **You will not be judged on the basis of your design proficiency.** This part mainly tests your ability to predict your user’s behaviour, anticipate how they would use your product and the way you go about enhancing the user flow or the user experience..

## Implementation ⚒️

- That’s it. You have the list of features you wish to implement and the layout of those features. Now, get to coding, but only after you’ve gone through the **Notes below.**

# Judging Criteria

- How well did you think out and plan the core and advanced functionalities of your application?
- Did you take into account the most basic needs of your user?
- What was your thought process behind choosing the features that you did?
- What features did you include to add value to the application? Do these add value or increase complexity?
- How well did you plan your layout? Does this layout enhance the overall experience for the user?
- Have you anticipated the actions your user will take?
- Your code structure, quality and overall readability.
- The load time of your application.
- The overall “snappiness” of your application: this includes the initial load time, the time taken to re-render, and the performance of the web application.
- Adherence to the fundamental practices of coding.

## Notes

1. Use a JavaScript framework for your application, such as [React](https://reactjs.org/), [Vue.js](https://vuejs.org/), [Svelte](https://svelte.dev/), or any other framework. **DO NOT CODE IN VANILLA JAVASCRIPT.**
2. Host your code on a version control system, such as GitHub, GitLab or BitBucket. **SEND US THE LINK TO YOUR PROJECT, NOT A ZIP FILE.**
3. Deploy your application on services such as [Netlify](https://www.netlify.com/) or [Vercel](https://vercel.com/), and send us the link to your deployed project. **DO NOT EXPECT THE JUDGE TO INSTALL YOUR APPLICATION ON A LOCAL INSTANCE.**
4. You are free to use any external library and dependency, as long as you mention it in the README.
5. In the README of your project, include the following details:
    1. A basic overview of your project.
    2. The JavaScript framework you chose, along with any major plugins or packages you installed.
    3. The page load time of your application, and how you measured this time.
    4. Any optimisations you did to decrease the load time or increase performance.

You get brownie points if you can render a large amount of rows in your application without breaking the browser, or without crashing it. If you can’t, no biggie.

## 👨‍💻 Contributors 

<table>
  <tr>
    <td align="center"><a href="https://github.com/gouravmohanty7070"><img src="https://res.cloudinary.com/divr26z8e/image/upload/v1691600031/Gouravv_v2jn11.png" width="100px;" alt="" style="border-radius:50%"/><br /><sub><b>Gourav Mohanty</b></sub></a><br /></td>  
  </tr>
</table>
