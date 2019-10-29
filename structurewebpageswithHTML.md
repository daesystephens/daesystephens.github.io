# Structure Web Pages with HTML

# PROCESS AND DESIGN OF A WEB

## Target your Audience
- Individuals
- Companies

Your content and design should be influenced by the goals of your users. You need to know why people are coming to your website.
You need to know their **motivations & goals**

When creating a website you need to have a list of reasons why people would be coming to your site.

## What Information Your Visitors Need?

You need to work out what information they need in order to achieve their goals **quickly & effectively**. If the information doesn't appear relevant, they are likely to go elsewhere.

## How Often People Will Visit Your Site?

Working out how often people are likely to revisit your site gives you an indication for how often you should update the site.
It can often be helpful to set a schedule for when a site will be updated.

## Site Maps

A **Site** Map is a diagram of the pages that will be used to structure your site. This will show how pages can be grouped.<br />

![Site map](https://lh4.googleusercontent.com/YmA5CeGR8S7Qrwd9h_N69BYZ2uASczeCwJOuiC_q6Md6MvznnA4cl4KZ3bSlXLXihtryhdK71-1wNgiJ4SmZqb85ApDijtJB1j7aEulYSWoYiMc5PtfVwwLHvkQf1ZJag5zTO8zn "Site Map Diagram")

## Wireframes
Is a simple sketch of the key information that needs to go on each page of a site. It shows the hierarchy of the information and how much space it might require.
You should **not include the color scheme, font choices, backgrounds or images for the website** in the wireframe. It should focus on what information needs to be on each page and create a visual hierarchy.

![Wireframe](https://d2slcw3kip6qmk.cloudfront.net/marketing/pages/chart/seo/wireframing/discovery/steps-to-creating-wireframe-03.svg "Wireframe Diagram")

*Here are some online wireframe tools:* <br />
[http://gomockingbird.com](http://gomockingbird.com)<br />
[http://lovelycharts.com](http://lovelycharts.com)

## Getting Your Message Across Using Design
**Prioritize and Organize**
- **Prioritizing:** By making parts of the page look distinct from surrounding content, designers draw attention to (or away from) those items.
- **Organizing:** Grouping together related content into blocks. You can differentiate between pieces of information using size, color, and style.

## Visual Hierarchy
Most web users do not read entire pages. Rather, they skim to find information.
**Images** create a high visual contrast and often **attract the eye first**.

# HTML5 LAYOUT

![HTML5 Layout](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstuyhsdesign.files.wordpress.com%2F2016%2F05%2Fyoko-html5.png%3Fw%3D656&f=1&nofb=1 "html5 layout")

**<header> <footer>**
- Used for main header or footer that appears at the top or bottom of every page
- Used for an individual ```<article>``` or ```<section>``` within the page<br />

**<nav>**
The ```<nav>``` element is used to contain the major navigational blocks on the site such as the primary site navigation or navigation bar.<br />

**<article>**<br />
The ```<article>``` element acts as a container for any section of a page that could stand alone. This could be an individual article or blog entry, a comment<br />

**<aside>**<br />
The ```<aside>``` element has two purposes, depending on whether it is inside an <article> element or not. When the <aside> element is used inside an <article> element, it should contain information that is related to the article. When the <aside> element is used outside of an <article> element, it acts as a container for content that is related to the entire page.<br />

**<section>**<br />
The ```<section>``` element groups related content together, and typically each section would have its own heading.<br />

**<hgroup>**<br />
The purpose of the ```<hgroup>``` element is to group together a set of one or more <h1> through <h6> elements so that they are treated as one single heading.<br />

**<figure>**<br />
```<figure>``` It can be used to contain any content that is referenced from the main flow of an article.
Examples of usage include:
- Images
- Videos
- Graphs
- Diagrams
- Code samples
- Text that supports the main body of an article<br />

The ```<figure>``` element should also contain a ```<figcaption>``` element which provides a text decription for the content of the ```<figure>``` element.<br />

**<div>**<br />
The ```<div>``` element will remain an important way to group together related elements.<br />

**```<a>```**<br />
HTML5 allows web page authors to place an ```<a>``` element around a block level element that contains child elements. This allows you to turn an entire block into a link.<br />

**Helping Older Browsers Understand HTML5**<br />
You should include this line in CSS
```css
header, section, footer, aside, nav, main, article, figure {
  display: block;
}
```
You should include this JavaScript code in HTML
```
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
<![endif]-->
</head>
<body>
```
# EXTRA MARKUP

|     __Elements__                      |     __Description__ |
|---------------------------------------|---------------------|
|```<!DOCTYPE html>```                  |Declaration for HTML5|
|```<!-- Write your comments here -->```|You can add comments to your HTML source by using this syntax|
|```id=specialquote```                  |Specifies a unique id for an element|
|```class="note"```                     |Class attribute is used to define equal styles for elements with the same class name|
|```<div>```                            |It allows you to group a set of elements together in one block-level box|
|```<span>```                           |It acts like an inline equivalent of the ```<div>```element|
|```<iframe>```                         |Is like a little window and in that window you can see another page|
|```<meta>```                           |Contains information about that web page.It is not visible to users but
tells search engines about your page|

**Most Used Escape Characters**

| __Character__ | __Code__    | __Description__  |
|---------------|-------------|------------------|
|&amp;          |```&amp;```  |Ampersand         |
|&quot;         |```&quot;``` |Quotation mark    |
|&copy;         |```&copy;``` |Copyright symbol  |
|&reg;          |```&reg;```  |Register Trademark|
|&trade;        |```&trade;```|Trademark         |
