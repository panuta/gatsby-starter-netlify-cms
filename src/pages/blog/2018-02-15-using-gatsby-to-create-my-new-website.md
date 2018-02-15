---
templateKey: blog-post
path: /2018-02-15-new-website
title: Using Gatsby to create my new website
date: 2018-02-15T09:27:15.222Z
description: >-
  As I want to break free from Wordpress or Django to create a personal website,
  I've entered to a realm of static website generator for React and how can I
  still have a convenience of traditional CMS but have a blazing-fast static
  website
category: Javascript
---
I have been wanting to try [Gatsby](https://www.gatsbyjs.org/) since I saw the news that it was used to build [React Official Website](https://reactjs.org/). Unlike other static website generators, Gatsby uses a language and a framework that I'm familiar to. Now I want to create my new personal website, I'm going to give it a try.

A website built by Gatsby is a static website, which means it won't load content dynamically like a regular website. However, unless we're hard-coding the content to the code, we can actually keep content somewhere else and fetch it before running Gatsby's build command to generate the final website.

For Gatsby, there're many options for content backend to choose from ([Picking a back-end for GatsbyJS](https://www.gatsbyjs.org/blog/2018-2-6-choosing-a-back-end/)). At first, I picked Wordpress.com because it's free and I like Wordpress content creating UI. If I use it together with GitHub Pages, I can have a blazing-fast website for free. Or that is what I thought. I realized that it's not that easy.

Like I said, a website built by Gatsby is a static website. If I store content in Wordpress, I will have to run Gatsby's build command every time I change something in Wordpress. This is not actually a deal-breaker because I can automate this process using continuous deployment service. Though, I need to find a way to trigger this deployment from Wordpress. I was googling around to see if there's a plugin for this, but found nothing. Before deciding to write Wordpress plugin on my own, let's look to another solution.

Netlify + Netlify CMS seems to be a solution that will work outside the box. Content will store in Netlify CMS and when I change something it will trigger CD that is in Netlify service. Netlify can even host my static website, so there's no need for GitHub Pages anymore. Though, you still need GitHub to store the code and they only support GitHub too (there's WIP for GitLab or BitBucket).

## Gatsby with Netlify and Netlify CMS

Setting up Gatsby website using Netlify and Netlify CMS is really easy.

1. Create Gatsby + Netlify CMS from template by clicking on **Deploy to netlify** on [this page](https://www.netlifycms.org/docs/start-with-a-template/).
2. Follow it step-by-step, then you'll have your site live on Netlify.

Too easy! Then you can clone the repo to your local machine and start customizing it all you want.

### Writing content

To write content, just go to `http://[your site or local ip]/admin/` and login. Netlify also provide identity service for your website too. Sick!

At first, there're only 2 content type. You can add more or customize it by editing `config.yml` file in `static/admin/config.yml`.

### Renaming your repo

You may want to change your repo name that was created automatically by Netlify. Just go to GitHub and rename it from settings. Then go to Netlify site admin, go to **Settings** -> **Build & Deploy** -> **Continuous Deployment**, then click on **Edit settings** on Deploy settings. Click on **Link to a different repository** to change to the new repo (which actually the same repo, but since the name changed we need to link it again)
