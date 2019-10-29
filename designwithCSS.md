# Design Web Pages with CSS

# *Introducing CSS*

## What CSS Does?

CSS allows you to create rules that specify how the content of an element should appear. For example, you can specify that the background of the page is cream.
Learning CSS mostly involves learning the different properties you can use.

## How CSS works?

CSS works by associating rules with HTML elements

A CSS rule contains two parts: a **selector** and a **declaration**

![selector declaration](https://cdn.tutsplus.com/webdesign/authors/ian-yates/css-best-selector-declaration.png "selector-declaration")

**Selectors** indicate which element the rule applies to. The same rule can apply to more than one element if you separate the element names with commas.

```css
h1, h2, h3 {
    font-family: Arial;
}
```
You can specify several properties in one declaration, each separated by a semi-colon.

![property values](https://cdn.tutsplus.com/webdesign/authors/ian-yates/css-best-property-value.png "property-values")

## External CSS

It is best practice to use an external CSS file.

**Benefits of External CSS File:**
- All of your web pages can share the same style sheet.
- If you want to make a change to how your site appears, you only need to edit the one CSS file and all of your pages will be updated.
- The HTML code will be easier to read and edit because it does not have lots of CSS rules in the same document.

HTML
```html
<!DOCTYPE html>
<html>
    <head>
        <title>Using External CSS</title>
        <link href="css/styles.css" type="text/css"
        rel="stylesheet" />
    </head>
    <body>
        <h1>Potatoes</h1>
        <p>There are dozens of different potato
        varieties. They are usually described as
        early, second early and maincrop.</p>
    </body>
</html>
```
CSS
file:css/styles.css
```css
body {
    font-family: arial;
    background-color: rgb(185,179,175);}
h1 {
    color: rgb(255,255,255);}
```
## Internal CSS

You can also include CSS rules within an HTML page by placing them inside a ```<style>``` element, which usually sits inside the ```<head>``` element of the page.

HTML+CSS

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Using Internal CSS</title>
        <style type="text/css">
            body {
                font-family: arial;
                background-color: rgb(185,179,175);}
            h1 {
                color: rgb(255,255,255);}
        </style>
    </head>
    <body>
        <h1>Potatoes</h1>
        <p>There are dozens of different potato
        varieties. They are usually described as
        early, second early and maincrop.</p>
    </body>
</html>
```

## Selectors

| __Selector__              | __Meaning__                                                                                                                   | __Example__           |
|---------------------------|------------------------------------------------------------------------|----------------------|
|Universal Selector         |Applies to all elements in the document                                                                                        |```* {}``` Targets all elements on the page|
|Type Selector              |Matches element names                                                                                                          |```h1, h2, h3 {}``` Targets the ```<h1>, <h2>``` and ```<h3>``` elements|
|Class Selector             |Matches an element whose class attribute has a value that matches the one specified after the period (or full stop) symbol  |```.note {}``` Targets any element whose class attribute has a value of note ```p.note {}``` Targets only ```<p>``` elements whose class attribute has a value of note|
|ID Selector                | Matches an element whose id attribute has a value that matches the one specified after the pound or hash symbol               |```#introduction {}``` Targets the element whose id attribute has a value of introduction|
|Child Selector             |Matches an element that is a direct child of another                                                                           |```li>a {}``` Targets any ```<a>``` elements that are children of an ```<li>``` element (but not other ```<a>``` elements in the page)|
|Descendant Selector        |Matches an element that is a descendent of another specified element (not just a direct child of that element)            |```p a {}``` Targets any ```<a>``` elements that sit inside a ```<p>``` element, even if there are other elements nested between them|
|Adjacent Sibling Selector  |Matches an element that is the next sibling of another                                                                         |```h1+p {}``` Targets the first ```<p>``` element after any ```<h1>``` element (but not other ```<p>``` elements)|
|General Sibling Selector   |Matches an element that is a sibling of another, although it does not have to be the directly preceding element         |```h1~p {}``` If you had two ```<p>``` elements that are siblings of an ```<h1>``` element, this rule would apply to both|
