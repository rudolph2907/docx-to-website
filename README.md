# Word (docx) to website converter
A simple script that takes a Word document and converts it into an html file. It uses mammoth.js to do the converting.

**Install**

    npm install
 **Setup**
 Set  variables:
 

 - **wordDoc** - Word Document file path that you want to use as source.
 - **templateFile** - The template file contains the boilerplate content like the **html**, **head** and **body** elements. You can add whatever you want in here. The **[[content]]** will be replaced with the actual converted HTML.
 - **outputFile** - The output HTML file path
