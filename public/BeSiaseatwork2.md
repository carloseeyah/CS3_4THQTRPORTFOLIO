# Seatwork #2 - Getting to know CSS Position and z-index.
### This seatwork will ask you to implement the different CSS position on a given code.
### short link to this .md file is: https://bit.ly/4c61P9K
#### Resources (also found in Khub week 5)
- [4 Minute Youtube Video on CSS Position](https://www.youtube.com/watch?v=YEmdHbQBCSQ)
- [CSS Position Tutorial](https://roycan.github.io/CssPositioningZIndexLab/)

### Instructions: 
1. This is individual submission in khub, but you can work with a partner.  When you submit in khub please place both your names in the submission bin.
2. Guided Activity (30 minutes), please follow what is being required.  

    - Make a copy of this .md file to your Q4 repository and name it as **SectionLNseatwork2.md** example **9LiCruzSeatwork2.md**. Place it in your q4 repository vscode local computer. Committing frequently to your Github repository.  
    - Copy the code below and paste it inside a new file (name it as SectionLNseatwork2.html). Place this file in the same location where the .md file is saved. 
    - Change the content values of the meta tags to your names for author/s and the date today for revised.
    - Please do the following tasks that will ask you to reposition HTML elements then answer the guided question for each task on the .md file. Commit changes to the .md file and to the .html file as well.
    **- This seatwork is worth 20pts and should be submitted by the end of the period** The link to [KHub submission bin](https://khub.mc.pshs.edu.ph/mod/assign/view.php?id=15481).
      - Submit the links to your .md file and .html file.

```html
<!DOCTYPE html>
<html>
<head>
  <meta name="author" content="<your names>" />
  <meta name="revised" content="<date today>" />
  <style>
    body { font-family: Arial, sans-serif; }
    .header, .footer {
      background: lightblue;
      padding: 10px;
    }
    .footer {
       opacity: 0.5;
    }
    .sidebar {
      background: lightgreen;
      width: 150px;
      height: 200px;
    }
    .content {
      background: lightyellow;
      width: 300px;
      height: 200px;
    }    
  </style>
</head>
<body>
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="content">Main Content</div>
  <div class="footer">Footer</div>
</body>
</html>
```
### Step 1 (Static vs Relative):

- Add in css ```position: relative; top: 20px; left: 20px;``` to .sidebar.

- Guided Question: What changed compared to the default static positioning? Try to give different values to top and left or you can change it to bottom, right.

- Comparing relative to static positioning, relative allows for the position of the sidebar to move by giving different values to top and left. Static positioning seems to move the sidebar to a default position on the top left corner. On the otherhand, doing the same for static does not change its position.

### Step 2 (Fixed):

- Add in css ```position: fixed; bottom: 0; width: 100%;``` to .footer.

- Guided Question: What happens when you scroll the page? Why does the footer behave differently from position relative?

Scrolling the page keeps the footer position fixed with fixed positioning. Comparing to relative positioning, the foot behaves differently as it is positioned relative to the browser window while relative positioning bases it of off its original positioning in the normal flow itself.

### Step 3 (Absolute):

- Add in css ```position: absolute; top: 66px; left: 200px;``` to .content.

- Guided Question: What is the effect of position: absolute on an element? How is it different from fixed?

Absolute positioning bases the position of an element based on the position of another near element. It is different from fixed as fixed keeps it visible even during scrolling, while absolute elements move along with the page.

### Step 4 : (Absolute)

- Add in html ```<div class="notice">Notice!</div>``` and include the css below:

```css
.notice {
    position: absolute;
    top: 60px;
    left: 400px;
    background: orange;
    padding: 10px;
    z-index: 2;
}
```

- Give .content a z-index: 1.

- Guided Question: Why does the notice appear on top of the content? What happens if you swap the z‑index values?

The notice appears on top of the content as its z value is greater than the content's z-value. Swaping the z-index values determines which element is prioritized, meaning that if the z-index of an element is lower than another element, it will be placed "underneath" it.

- Challenge: 
    * What changes that you have to do on the code that will position .notice box on the top right corner of the .content box? Please write the code on paper as well (both html and css on the part of .notice and .content).

    To position the notice box exactly on the top right corner of the .content box, we have to change the value of left from 400px to 430px to exactly place it on the corner.

    * Try to change the position of .content to relative then to fixed. What do you observed each time?

    I observed the .content box's position shifting up and down. This is likely due to the difference in document flow and basis of original position.

    * What do you observe on about the effect of z-index on .notice and .content boxes?

    The z-index on .notice and .content boxes determine the order or layers that is shown. Increasing the z-index of an element will place that element "higher" or "ontop" of elements with lower z-index values, and vice versa.

3. Please answer the following reflection questions (15 minutes)

    a. Could you summarize the differences between the CSS position values (static, relative, absolute, fixed)? 

    Static positioning puts it to its default positioning and prevents the usage of offsets. 
    
    Absolute places the element to the nearest element and removes it from document flow while moving along with the page. 
    
    Fixed positioning positions the element relative to the browser window, making it remain in the same position even when the page is scrolled while removing it from the document flow. 
    
    Lastly, relative positioning bases the element's position based on its original position in the normal flow, utilizing offsets.

    b. How does absolute positioning depend on its parent element?

    Absolute positioning depends on the closest ancestor that has a position. If none exist, it defaults to the document body.

    c. How do you differentiate sticky from fixed (you can research on sticky)?

    While both allow elements to remain visible during scrolling, sticky is particularly unique as it can act like relative until it reaches a defined offset, then it sticks in place within its parent container.

    d. If you were designing a webpage for a school event, how might you use positioning to highlight important information? Please give concrete examples.

    I would likely use relative positioning the most as it would give me the most flexible control over the position of important information. 
    
    For example, for annotating important information, it is crucial for users to be able to still scroll while it is positioned within the center or main space of the viewport.

    I would also likely use fixed positioning for important functions in the page that must be constantly accessible like menu buttons and a hyperlink to references.
