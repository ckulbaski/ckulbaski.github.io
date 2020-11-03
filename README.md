---
layout: page
title:  "Readme"
---

## How to Host a Resume on Github Pages Using Jekyll  
Gone are the days of writing a resume in a word processing software, exporting it to a PDF, and attaching it to every email you send to potential employers. A much more efficient and modern approach is hosting your resume on a personalized static website, and then sending _links_ to your super-cool resume website. This allows you to maintain only one copy of your resume, rather than worrying about editing it every time you need a copy. As Andrew Etter says in his book _Modern Technical Writing_, single-sourcing popular documents using links is one of the most wonderful things the internet has given us. Creating and hosting your own website sounds like a daunting task; however, tools like Jekyll and Github Pages make the process quite simple. Jekyll generates awesome-looking websites with ease, and Github Pages hosts your website under their domain _.github.io_. This tutorial is meant to get your resume website up and running. It's up to you to fill it with a well-formatted resume. 

### Here's how:

#### Prerequisites:
- [Github account](https://github.com/login)
- [Jekyll installed](https://jekyllrb.com/docs/installation/).
- Jekyll is not officially supported for windows, so if you are a windows user, use [Windows Subsystem for Linux (WSL)](https://docs.microsoft.com/en-us/windows/wsl/install-win10) to get access to a Linux command line.  

1. **Initialize the Github repository**. On Github, go to the **Respositories** tab and select **New**. Name the repository **_username_.github.io** (_username_ should match your Github username exactly) and make sure **Initilialize this  repository with a README** is unchecked. Click **Create repository**. 
> **Short aside:** Github is the industry standard interface for the most popular distributed version control tool _Git_. Distributed version control is a very powerful concept within software development (and other fields like technical writing) that allows developers to work on large projects without breaking the main build, to work remotely and offline, and do concurrent work on the same file. Etter sites these as reasons why distributed version control is essential for software development and documentation. Learning how to use this tool is a worthwhile investment of your time, because it is sure to come up in a job interview sooner or later.   
2. **Create a Jekyll site**. Using the command line, navigate to the folder where you want your website to live in. Type the command ``jekyll new username.github.io``, where _username_ is your github username. This initializes a static jekyll site in the specified folder.
3. **Initialize the repository**. Navigate into the folder you just created with ``cd username.github.io``. Initialize it as a git repository with ``git init``, and commit the changes with ``git add .`` and ``git commit -m "init"``.
4. **Link your remote repository with the one you created on Github**. In the same folder you ran ``git init``, run the command ``git remote add origin https://github.com/username/username.github.io.git`` (remember to change _username_ in the link to your own), ``git push -u origin master``. This links your local folder with the folder on Github. Verify this by refreshing Github. 
5. **Choose a theme**. The default theme when you run ``jekyll new`` is **minima**. This is a minimal black-and-white theme. It gets the job done, but you may desire something a bit prettier. Jekyll has lots of options for themes on their [website](https://jekyllrb.com/docs/themes/). When you find a theme you like, simply download it, extract it, and copy the contents of the folder to the folder your website lives in. Each theme comes with their own files for a blank site, so make sure you copy any files you don't want to lose in the process. Make sure to read the theme's README file for any extra instructions. Here's how to do this step: ![](theme.gif)
6. **Go to your website!** You can navigate to your site by typing **username.github.io** in your browser's search bar. Give it some time to update, since Github does not serve your website immediately.  
7. **Fill it with content**. It's great that you have your own static website, but it's useless unless you fill it with content. If you have a post-based theme, go to the **_posts** directory in your website folder and create a file with the name formatted **yyyy-mm-dd-title.md** (If your website is only made to host your resume, the README of your theme should have more details on what to edit to make your website your own). Remember to add the files, commit the changes, and push them to the master branch with ``git add .`` , ``git commit -m "new post"``, and ``git push origin master``. You want to do this with every change you make to your website. See "FAQ" for an explanation of what a **.md** file is. 

### FAQ
1. **What is .md**? It's a Markdown file. Markdown is one flavour of lightweight markup, which allows us to create well-formed XML documents while staying readable in their raw form. XML is needed to build websites, but is horrible to write by hand; this is why lightweight markup was invented. Andrew Etter says one of the biggest drawbacks of using word processing software like Microsoft Word is the complete union of the content and styling of the document. This is why it's so bad at creating websites, any changes to either content or styling requires the whole document be reworked. With Markup, you write the content of the document first, and then style it to your liking with HTML and CSS in separate files.  
2. **How do I see the changes I made without pushing them to Github?** Run ``jekyll serve`` and click the link to see the changes you've made. ![](/assets/tutorial.gif) 

### Additional Resources
[Here's](https://www.markdowntutorial.com/) an excellent resource to learn Markdown. Once you've learned how to write markdown, create your first post on your website  
[Theme](https://github.com/samarsault/texture)  
### Acknowledgements
Connor Bean, Johnnus Gomez, Ayush Patel. Samarjeet Singh for the Jekyll theme. 
