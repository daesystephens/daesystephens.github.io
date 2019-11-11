# HTML Images

Adding images with height and width

```html
<img src='images/rabbit.jpg' alt='A pic of a rabbit' width='600' height='450'>
```

# Three Rules to Create Images

1. Save images in the right format: **jpeg, gif or png** format.
2. Save images at the right size: at the same height and width, it will appear on the website.
3. Measure images in pixels.

## Image Format: JPEG
Whenever you have many colors in a picture you should use JPEG

## Image Format: GIF
Whenever a picture has an area filled with the same color use GIF. Example logos, diagrams, illustrations.

# Figure and Figure Caption

```html
<figure>
<img src='images/cats.jpg' alt='Photo of cats' />
<br />
<figcaption>This little cats</figcaption>
</figure>
```

![Photo of cats](http://cdn.highonpoems.com/wp-content/uploads/2014/11/Two-Cats-200x200.jpg)
<br />
Two little cats more content goes here

# Color in CSS

- Color not only brings your site to life but also helps convey the mood and evokes reactions.

## There are three ways to specify colors in CSS:

**RGB values**
```css
body {
    background-color: rgb(200,200,200);}
```
**Hex codes**
```css
h2 {
    background-color: #ee3e80;}
```
**Color names**
```css
h1 {
    background-color: DarkCyan;}
```

## Opacity, rgba
**Opacity**
The value is a number between 0.0 and 1.0 (so a value of 0.5 is 50% opacity and 0.15 is 15% opacity).

```css
p.one {
    background-color: rgb(0,0,0);
    opacity: 0.5;}
```
**rgba**
RGB value, but adds a fourth value to indicate opacity. This value is known as an alpha value and is a number between 0.0 and 1.0 (so a value of 0.5 is 50% opacity and 0.15 is 15% opacity).

```css
p.two {
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.5);}
```