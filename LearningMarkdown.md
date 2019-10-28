# Learning Markdown
## What is Markdown?
Markdown is a plain text format for writing structured documents. Instead of tags, it uses symbols that were conventional in the early days of email before we had rich text editors.
Markdown has a small number of formatting elements. It is typically converted to HTML for the display on the web but is easily converted to other formats.
Markdown is commonly used on GitHub

## What can we do with Markdown?
A lot of things :) !!! <br />
We can create:
- *Headers*
- *Emphasis*
- *Lists*
- *Links*
- *Images*
- *Code and Block Codes*
- *Block quotes*
- *Tables*
- *Embedding YouTube videos*


## HOW TO WRITE MARKDOWN
Save your file as plain text. It is conventional to use the extension **.md**.

### Problems with Markdown
You can use HTML and CSS in Markdown documents to achieve effects not possible in pure Markdown. While this defeats the purpose of Markdown, there are cases when it is worth it.

For example, if you need to **center an image** you need to use HTML with CSS. You can use this format to center your image:
```
<p align="center">
  <img src=“IMAGE URL GOES IN HERE” alt="Sample's custom image"/>
</p>
```

If you need to **resize the image**, you need to use this format and add style into your code:

```
<p align="center">
  <img src=“IMAGE URL GOES IN HERE” alt="Sample's custom image” style="width:200px;height:200px;"
/>
</p>
```
												 
## MARKDOWN CHEAT SHEET

### HEADERS

```
# H1
## H2
### H3
#### H4
##### H5
###### H6
```
**Results:**

# H1
## H2
### H3
#### H4
##### H5
###### H6


### EMPHASIS

```
Italic text use (one asterisk) *text-here* or (one underscore) _any text here_ 

Bold text use (two asterisk) **text-here** or (two underscore) __any text here__

Italic and Bold combine (two asterisk and one underscore) **_any text here_**

Strikethrough uses (two tildes) ~~Scratch this~~
```

**Results:**

Italic = _any text here_ 

Bold = **text-here**

Italic and Bold = **_any text here_**

Strikethrough = ~~Scratch this~~


### LIST

#### Task lists are check boxes:
```
- [ ] Uncompleted task
- [x] Completed task
```
**Results:**
- [ ] Uncompleted task
- [x] Completed task


#### Ordered List:
```
1. First ordered list item
2. Another item
⋅⋅* Unordered sub-list. 
1. Actual numbers don't matter, just that it's a number
⋅⋅1. Ordered sub-list
4. And another item.

⋅⋅⋅You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we'll use three here to also align the raw Markdown).

⋅⋅⋅To have a line break without a paragraph, you will need to use two trailing spaces.⋅⋅
⋅⋅⋅Note that this line is separate, but within the same paragraph.⋅⋅
⋅⋅⋅(This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)
```

**Results:**

1. First ordered list item
2. Another item
⋅⋅* Unordered sub-list. 
1. Actual numbers don't matter, just that it's a number
⋅⋅1. Ordered sub-list
4. And another item.

⋅⋅⋅You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we'll use three here to also align the raw Markdown).

⋅⋅⋅To have a line break without a paragraph, you will need to use two trailing spaces.⋅⋅
⋅⋅⋅Note that this line is separate, but within the same paragraph.⋅⋅
⋅⋅⋅(This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)

#### Unordered List:
```
* Unordered list can use asterisks
- Or minuses
+ Or pluses
```

**Results:**<br />
* Unordered list can use asterisks
- Or minuses
+ Or pluses

### LINKS
```
[I'm an inline-style link](https://www.google.com)

[I'm an inline-style link with title](https://www.google.com "Google's Homepage")
```
**Results:**<br />
[I'm an inline-style link](https://www.google.com)

[I'm an inline-style link with title](https://www.google.com "Google's Homepage")

### IMAGES
```
Inline-style: 
![alt text](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsyWFeITOgvS-cjYLOfBLkP4dTjxW4NMi86ePy0v3zniYJo1Rm&s "Camera Title Text 1")

Reference-style: 
![alt text][logo]

[logo]: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsyWFeITOgvS-cjYLOfBLkP4dTjxW4NMi86ePy0v3zniYJo1Rm&s "Camera Title Text 2"
```
**Results:**<br />
Inline-style: 
![alt text](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsyWFeITOgvS-cjYLOfBLkP4dTjxW4NMi86ePy0v3zniYJo1Rm&s "Camera Title Text 1")

Reference-style: 
![alt text][logo]

[logo]: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsyWFeITOgvS-cjYLOfBLkP4dTjxW4NMi86ePy0v3zniYJo1Rm&s "Camera Title Text 2"

### CODE AND CODE BLOCKS
Inline code is normally represented by back ticks (`). For instance,
```
‘let x=3;’
```
If your code includes back ticks, you can use two back ticks to enclose the code.

Code blocks are represented by three back ticks on the line before and after the code snippet. After the first set of back ticks the name of the coding language should be used, e.g.

```javascript
let x = 3;
```

### BLOCK QUOTES

For quoting blocks of content from another source within your document.
Add > before any text you want to quote.

```
>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
```

**Results:**

>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.

Block Quotes can also be nested:
```
> Donec massa lacus, ultricies a ullamcorper in, fermentum sed augue.
Nunc augue augue, aliquam non hendrerit ac, commodo vel nisi.
>> Sed adipiscing elit vitae augue consectetur a gravida nunc vehicula. Donec auctorodio non est accumsan facilisis. Aliquam id turpis in dolor tincidunt mollis ac eu diam.
>>> Donec massa lacus, ultricies a ullamcorper in, fermentum sed augue.
Nunc augue augue, aliquam non hendrerit ac, commodo vel nisi.
```
**Results:**
> Donec massa lacus, ultricies a ullamcorper in, fermentum sed augue.
Nunc augue augue, aliquam non hendrerit ac, commodo vel nisi.
>> Sed adipiscing elit vitae augue consectetur a gravida nunc vehicula. Donec auctorodio non est accumsan facilisis. Aliquam id turpis in dolor tincidunt mollis ac eu diam.
>>> Donec massa lacus, ultricies a ullamcorper in, fermentum sed augue.
Nunc augue augue, aliquam non hendrerit ac, commodo vel nisi.


### TABLES 
```
| __Option__ | __Description__                            |
|------------|--------------------------------------------|
| data       | path to data files to supply the data.     |
| engine     | engine to be used for processing templates |
| ext        | extension to be used for dest files.       |
```
**Results:**

| __Option__ | __Description__                            |
|------------|--------------------------------------------|
| data       | path to data files to supply the data.     |
| engine     | engine to be used for processing templates |
| ext        | extension to be used for dest files.       |

### EMBEDDING YOUTUBE VIDEOS
They can't be added directly but you can add an image with a alink to the video like this:
```
<a href="http://www.youtube.com/watch?feature=player_embedded&v=YOUTUBE_VIDEO_ID_HERE
" target="_blank"><img src="http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg" 
alt="IMAGE ALT TEXT HERE" width="240" height="180" border="10" /></a>
```
**Results:**<br/>
<a href="https://www.youtube.com/watch?v=eJojC3lSkwg" target="_blank"><img src="http://img.youtube.com/vi/eJojC3lSkwg/0.jpg" 
alt="IMAGE ALT TEXT HERE" width="240" height="180" border="10" /></a>
