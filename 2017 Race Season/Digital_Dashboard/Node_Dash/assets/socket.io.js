





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">



  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/frameworks-81a59bf26d881d29286674f6deefe779c444382fff322085b50ba455460ccae5.css" media="all" rel="stylesheet" />
  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-8789d320be825216d799841dcb27bc201b0605572d4c8c07c30feb5bc27a66b7.css" media="all" rel="stylesheet" />
  
  
  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/site-0047c348443848937ad9891b690c4acb6ee0d96263d91e9b1725194e65869e91.css" media="all" rel="stylesheet" />
  

  <meta name="viewport" content="width=device-width">
  
  <title>socket.io-client/socket.io.js at master · socketio/socket.io-client · GitHub</title>
  <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    
    <meta content="https://avatars1.githubusercontent.com/u/10566080?v=3&amp;s=400" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="socketio/socket.io-client" property="og:title" /><meta content="https://github.com/socketio/socket.io-client" property="og:url" /><meta content="socket.io-client - Realtime application framework (client)" property="og:description" />

  <link rel="assets" href="https://assets-cdn.github.com/">
  
  <meta name="pjax-timeout" content="1000">
  
  <meta name="request-id" content="D22F:26D95:4D8B69:7A97DA:5920C9A2" data-pjax-transient>
  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

  <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
<meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="https://collector.githubapp.com/github-external/browser_event" name="octolytics-event-url" /><meta content="D22F:26D95:4D8B69:7A97DA:5920C9A2" name="octolytics-dimension-request_id" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />




  <meta class="js-ga-set" name="dimension1" content="Logged Out">


  

      <meta name="hostname" content="github.com">
  <meta name="user-login" content="">

      <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="Njg4MzBkZjA3NDcxMGNiYmUxZTViYzUyODkwYTVlNDM5MWY0YzZmNTQwYmYwOTAyOWJlZDIzM2UxYTdlODJjY3x7InJlbW90ZV9hZGRyZXNzIjoiMTA0LjUxLjE5MS4xMjkiLCJyZXF1ZXN0X2lkIjoiRDIyRjoyNkQ5NTo0RDhCNjk6N0E5N0RBOjU5MjBDOUEyIiwidGltZXN0YW1wIjoxNDk1MzIwOTk1LCJob3N0IjoiZ2l0aHViLmNvbSJ9">


  <meta name="html-safe-nonce" content="f6af1c0b545f9ac0e1fe26f17b18b412bb579209">

  <meta http-equiv="x-pjax-version" content="9f48f82d435db8e8916f273e55a94a05">
  

    
  <meta name="description" content="socket.io-client - Realtime application framework (client)">
  <meta name="go-import" content="github.com/socketio/socket.io-client git https://github.com/socketio/socket.io-client.git">

  <meta content="10566080" name="octolytics-dimension-user_id" /><meta content="socketio" name="octolytics-dimension-user_login" /><meta content="557977" name="octolytics-dimension-repository_id" /><meta content="socketio/socket.io-client" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="557977" name="octolytics-dimension-repository_network_root_id" /><meta content="socketio/socket.io-client" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/socketio/socket.io-client/commits/master.atom" rel="alternate" title="Recent Commits to socket.io-client:master" type="application/atom+xml">


    <link rel="canonical" href="https://github.com/socketio/socket.io-client/blob/master/dist/socket.io.js" data-pjax-transient>


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#000000">
  <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

<meta name="theme-color" content="#1e2327">



  </head>

  <body class="logged-out env-production page-blob">
    



  <div class="position-relative js-header-wrapper ">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>

    
    
    



          <header class="site-header js-details-container Details" role="banner">
  <div class="container-responsive">
    <a class="header-logo-invertocat" href="https://github.com/" aria-label="Homepage" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="32" version="1.1" viewBox="0 0 16 16" width="32"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
    </a>

    <button class="btn-link float-right site-header-toggle js-details-target" type="button" aria-label="Toggle navigation">
      <svg aria-hidden="true" class="octicon octicon-three-bars" height="24" version="1.1" viewBox="0 0 12 16" width="18"><path fill-rule="evenodd" d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"/></svg>
    </button>

    <div class="site-header-menu">
      <nav class="site-header-nav">
        <a href="/features" class="js-selected-navigation-item nav-item" data-ga-click="Header, click, Nav menu - item:features" data-selected-links="/features /features">
          Features
</a>        <a href="/business" class="js-selected-navigation-item nav-item" data-ga-click="Header, click, Nav menu - item:business" data-selected-links="/business /business/security /business/customers /business">
          Business
</a>        <a href="/explore" class="js-selected-navigation-item nav-item" data-ga-click="Header, click, Nav menu - item:explore" data-selected-links="/explore /trending /trending/developers /integrations /integrations/feature/code /integrations/feature/collaborate /integrations/feature/ship /showcases /explore">
          Explore
</a>        <a href="/pricing" class="js-selected-navigation-item nav-item" data-ga-click="Header, click, Nav menu - item:pricing" data-selected-links="/pricing /pricing/developer /pricing/team /pricing/business-hosted /pricing/business-enterprise /pricing">
          Pricing
</a>      </nav>

      <div class="site-header-actions">
          <div class="header-search scoped-search site-scoped-search js-site-search" role="search">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/socketio/socket.io-client/search" class="js-site-search-form" data-scoped-search-url="/socketio/socket.io-client/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <label class="form-control header-search-wrapper js-chromeless-input-container">
        <a href="/socketio/socket.io-client/blob/master/dist/socket.io.js" class="header-search-scope no-underline">This repository</a>
      <input type="text"
        class="form-control header-search-input js-site-search-focus js-site-search-field is-clearable"
        data-hotkey="s"
        name="q"
        value=""
        placeholder="Search"
        aria-label="Search this repository"
        data-unscoped-placeholder="Search GitHub"
        data-scoped-placeholder="Search"
        autocapitalize="off">
        <input type="hidden" class="js-site-search-type-field" name="type" >
    </label>
</form></div>


          <a class="text-bold site-header-link" href="/login?return_to=%2Fsocketio%2Fsocket.io-client%2Fblob%2Fmaster%2Fdist%2Fsocket.io.js" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
            <span class="text-gray">or</span>
            <a class="text-bold site-header-link" href="/join?source=header-repo" data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">Sign up</a>
      </div>
    </div>
  </div>
</header>


  </div>

  <div id="start-of-content" class="accessibility-aid"></div>

    <div id="js-flash-container">
</div>



  <div role="main">
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode">
    <div id="js-repo-pjax-container" data-pjax-container>
        




    <div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
      <div class="container repohead-details-container">

        <ul class="pagehead-actions">
  <li>
      <a href="/login?return_to=%2Fsocketio%2Fsocket.io-client"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to watch a repository" rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
    Watch
  </a>
  <a class="social-count" href="/socketio/socket.io-client/watchers"
     aria-label="281 users are watching this repository">
    281
  </a>

  </li>

  <li>
      <a href="/login?return_to=%2Fsocketio%2Fsocket.io-client"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
    Star
  </a>

    <a class="social-count js-social-count" href="/socketio/socket.io-client/stargazers"
      aria-label="4482 users starred this repository">
      4,482
    </a>

  </li>

  <li>
      <a href="/login?return_to=%2Fsocketio%2Fsocket.io-client"
        class="btn btn-sm btn-with-count tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
        Fork
      </a>

    <a href="/socketio/socket.io-client/network" class="social-count"
       aria-label="1722 users forked this repository">
      1,722
    </a>
  </li>
</ul>

        <h1 class="public ">
  <svg aria-hidden="true" class="octicon octicon-repo" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a href="/socketio" class="url fn" rel="author">socketio</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="/socketio/socket.io-client" data-pjax="#js-repo-pjax-container">socket.io-client</a></strong>

</h1>

      </div>
      <div class="container">
        
<nav class="reponav js-repo-nav js-sidenav-container-pjax"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/socketio/socket.io-client" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /socketio/socket.io-client" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a href="/socketio/socket.io-client/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /socketio/socket.io-client/issues" itemprop="url">
        <svg aria-hidden="true" class="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
        <span itemprop="name">Issues</span>
        <span class="Counter">70</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/socketio/socket.io-client/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /socketio/socket.io-client/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="Counter">5</span>
      <meta itemprop="position" content="3">
</a>  </span>

    <a href="/socketio/socket.io-client/projects" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /socketio/socket.io-client/projects">
      <svg aria-hidden="true" class="octicon octicon-project" height="16" version="1.1" viewBox="0 0 15 16" width="15"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
      Projects
      <span class="Counter" >0</span>
</a>



  <a href="/socketio/socket.io-client/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="pulse /socketio/socket.io-client/pulse">
    <svg aria-hidden="true" class="octicon octicon-pulse" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M11.5 8L8.8 5.4 6.6 8.5 5.5 1.6 2.38 8H0v2h3.6l.9-1.8.9 5.4L9 8.5l1.6 1.5H14V8z"/></svg>
    Pulse
</a>
  <a href="/socketio/socket.io-client/graphs" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors /socketio/socket.io-client/graphs">
    <svg aria-hidden="true" class="octicon octicon-graph" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
    Graphs
</a>

</nav>

      </div>
    </div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    
          

<a href="/socketio/socket.io-client/blob/4f71bd23deadec43472c6268a04ae32aa2959e24/dist/socket.io.js" class="d-none js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:5336a1336a6c5685e9ae0a161cf110be -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu branch-select-menu js-menu-container js-select-menu float-left">
  <button class=" btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
      <i>Branch:</i>
      <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/socketio/socket.io-client/blob/0.9/dist/socket.io.js"
               data-name="0.9"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                0.9
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/socketio/socket.io-client/blob/1.3.3-fix/dist/socket.io.js"
               data-name="1.3.3-fix"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                1.3.3-fix
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/socketio/socket.io-client/blob/1.3.5-fix/dist/socket.io.js"
               data-name="1.3.5-fix"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                1.3.5-fix
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/socketio/socket.io-client/blob/1.3.6-patch/dist/socket.io.js"
               data-name="1.3.6-patch"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                1.3.6-patch
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/socketio/socket.io-client/blob/1.3.7-patch/dist/socket.io.js"
               data-name="1.3.7-patch"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                1.3.7-patch
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/socketio/socket.io-client/blob/1.4.7-pre/dist/socket.io.js"
               data-name="1.4.7-pre"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                1.4.7-pre
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/socketio/socket.io-client/blob/1.7.x/dist/socket.io.js"
               data-name="1.7.x"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                1.7.x
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/socketio/socket.io-client/blob/06/dist/socket.io.js"
               data-name="06"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                06
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/socketio/socket.io-client/blob/add/zuul/dist/socket.io.js"
               data-name="add/zuul"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                add/zuul
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/socketio/socket.io-client/blob/develop/dist/socket.io.js"
               data-name="develop"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                develop
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/socketio/socket.io-client/blob/master/dist/socket.io.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                master
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/socketio/socket.io-client/blob/webworker/dist/socket.io.js"
               data-name="webworker"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                webworker
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/2.0.1/dist/socket.io.js"
              data-name="2.0.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.0.1">
                2.0.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/2.0.0/dist/socket.io.js"
              data-name="2.0.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.0.0">
                2.0.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/1.7.4/dist/socket.io.js"
              data-name="1.7.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.7.4">
                1.7.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/1.7.2/dist/socket.io.js"
              data-name="1.7.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.7.2">
                1.7.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/1.7.1/dist/socket.io.js"
              data-name="1.7.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.7.1">
                1.7.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/1.7.0/dist/socket.io.js"
              data-name="1.7.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.7.0">
                1.7.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/1.6.0/dist/socket.io.js"
              data-name="1.6.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.6.0">
                1.6.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/1.5.1/dist/socket.io.js"
              data-name="1.5.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.5.1">
                1.5.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/1.5.0/dist/socket.io.js"
              data-name="1.5.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.5.0">
                1.5.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/1.4.8/dist/socket.io.js"
              data-name="1.4.8"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.4.8">
                1.4.8
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/1.4.7/dist/socket.io.js"
              data-name="1.4.7"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.4.7">
                1.4.7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/1.4.6/dist/socket.io.js"
              data-name="1.4.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.4.6">
                1.4.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/1.4.5/dist/socket.io.js"
              data-name="1.4.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.4.5">
                1.4.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/1.4.4/dist/socket.io.js"
              data-name="1.4.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.4.4">
                1.4.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/1.4.3/dist/socket.io.js"
              data-name="1.4.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.4.3">
                1.4.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/1.4.2/dist/socket.io.js"
              data-name="1.4.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.4.2">
                1.4.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/1.4.1/dist/socket.io.js"
              data-name="1.4.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.4.1">
                1.4.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/1.4.0/dist/socket.io.js"
              data-name="1.4.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.4.0">
                1.4.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/1.3.7/dist/socket.io.js"
              data-name="1.3.7"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.3.7">
                1.3.7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/1.3.6/dist/socket.io.js"
              data-name="1.3.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.3.6">
                1.3.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/1.3.5/dist/socket.io.js"
              data-name="1.3.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.3.5">
                1.3.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/1.3.4/dist/socket.io.js"
              data-name="1.3.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.3.4">
                1.3.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/1.3.3/dist/socket.io.js"
              data-name="1.3.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.3.3">
                1.3.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/1.3.2/dist/socket.io.js"
              data-name="1.3.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.3.2">
                1.3.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/1.3.1/dist/socket.io.js"
              data-name="1.3.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.3.1">
                1.3.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/1.3.0/dist/socket.io.js"
              data-name="1.3.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.3.0">
                1.3.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/1.2.1/dist/socket.io.js"
              data-name="1.2.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.2.1">
                1.2.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/1.2.0/dist/socket.io.js"
              data-name="1.2.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.2.0">
                1.2.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/1.1.0/dist/socket.io.js"
              data-name="1.1.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.1.0">
                1.1.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/1.0.6/dist/socket.io.js"
              data-name="1.0.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.0.6">
                1.0.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/1.0.5/dist/socket.io.js"
              data-name="1.0.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.0.5">
                1.0.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/1.0.4/dist/socket.io.js"
              data-name="1.0.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.0.4">
                1.0.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/1.0.3/dist/socket.io.js"
              data-name="1.0.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.0.3">
                1.0.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/1.0.2/dist/socket.io.js"
              data-name="1.0.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.0.2">
                1.0.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/1.0.1/dist/socket.io.js"
              data-name="1.0.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.0.1">
                1.0.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/1.0.0/dist/socket.io.js"
              data-name="1.0.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.0.0">
                1.0.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/1.0.0-pre5/dist/socket.io.js"
              data-name="1.0.0-pre5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.0.0-pre5">
                1.0.0-pre5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/1.0.0-pre4/dist/socket.io.js"
              data-name="1.0.0-pre4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.0.0-pre4">
                1.0.0-pre4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/1.0.0-pre3/dist/socket.io.js"
              data-name="1.0.0-pre3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.0.0-pre3">
                1.0.0-pre3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/1.0.0-pre2/dist/socket.io.js"
              data-name="1.0.0-pre2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.0.0-pre2">
                1.0.0-pre2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/1.0.0-pre/dist/socket.io.js"
              data-name="1.0.0-pre"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.0.0-pre">
                1.0.0-pre
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/0.9.17/dist/socket.io.js"
              data-name="0.9.17"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.9.17">
                0.9.17
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/0.9.16/dist/socket.io.js"
              data-name="0.9.16"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.9.16">
                0.9.16
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/0.9.15/dist/socket.io.js"
              data-name="0.9.15"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.9.15">
                0.9.15
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/0.9.11/dist/socket.io.js"
              data-name="0.9.11"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.9.11">
                0.9.11
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/0.9.10/dist/socket.io.js"
              data-name="0.9.10"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.9.10">
                0.9.10
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/0.9.9/dist/socket.io.js"
              data-name="0.9.9"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.9.9">
                0.9.9
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/0.9.8/dist/socket.io.js"
              data-name="0.9.8"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.9.8">
                0.9.8
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/0.9.7/dist/socket.io.js"
              data-name="0.9.7"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.9.7">
                0.9.7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/0.9.6/dist/socket.io.js"
              data-name="0.9.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.9.6">
                0.9.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/0.9.5/dist/socket.io.js"
              data-name="0.9.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.9.5">
                0.9.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/0.9.4/dist/socket.io.js"
              data-name="0.9.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.9.4">
                0.9.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/0.9.3/dist/socket.io.js"
              data-name="0.9.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.9.3">
                0.9.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/0.9.2/dist/socket.io.js"
              data-name="0.9.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.9.2">
                0.9.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/0.9.1/dist/socket.io.js"
              data-name="0.9.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.9.1">
                0.9.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/0.9.1-1/dist/socket.io.js"
              data-name="0.9.1-1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.9.1-1">
                0.9.1-1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/0.9.0/dist/socket.io.js"
              data-name="0.9.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.9.0">
                0.9.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/0.8.7/dist/socket.io.js"
              data-name="0.8.7"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.8.7">
                0.8.7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/0.8.6/dist/socket.io.js"
              data-name="0.8.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.8.6">
                0.8.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/0.8.5/dist/socket.io.js"
              data-name="0.8.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.8.5">
                0.8.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/0.8.4/dist/socket.io.js"
              data-name="0.8.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.8.4">
                0.8.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/0.8.3/dist/socket.io.js"
              data-name="0.8.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.8.3">
                0.8.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/0.8.2/dist/socket.io.js"
              data-name="0.8.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.8.2">
                0.8.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/0.8.1/dist/socket.io.js"
              data-name="0.8.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.8.1">
                0.8.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/0.8.0/dist/socket.io.js"
              data-name="0.8.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.8.0">
                0.8.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/0.7.11/dist/socket.io.js"
              data-name="0.7.11"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.7.11">
                0.7.11
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/0.7.10/dist/socket.io.js"
              data-name="0.7.10"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.7.10">
                0.7.10
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/0.7.9/dist/socket.io.js"
              data-name="0.7.9"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.7.9">
                0.7.9
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/0.7.5/dist/socket.io.js"
              data-name="0.7.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.7.5">
                0.7.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/0.7.4/dist/socket.io.js"
              data-name="0.7.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.7.4">
                0.7.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/0.7.3/dist/socket.io.js"
              data-name="0.7.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.7.3">
                0.7.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/0.7.2/dist/socket.io.js"
              data-name="0.7.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.7.2">
                0.7.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/0.7.1/dist/socket.io.js"
              data-name="0.7.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.7.1">
                0.7.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/0.7.0/dist/socket.io.js"
              data-name="0.7.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.7.0">
                0.7.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/0.6.3/dist/socket.io.js"
              data-name="0.6.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.6.3">
                0.6.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/0.6.2/dist/socket.io.js"
              data-name="0.6.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.6.2">
                0.6.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/0.6.1/dist/socket.io.js"
              data-name="0.6.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.6.1">
                0.6.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/0.6/dist/socket.io.js"
              data-name="0.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.6">
                0.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/0.5.3/dist/socket.io.js"
              data-name="0.5.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.5.3">
                0.5.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/0.5.2/dist/socket.io.js"
              data-name="0.5.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.5.2">
                0.5.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/0.5.1/dist/socket.io.js"
              data-name="0.5.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.5.1">
                0.5.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/0.5/dist/socket.io.js"
              data-name="0.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.5">
                0.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/0.2.4/dist/socket.io.js"
              data-name="0.2.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.2.4">
                0.2.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/0.2.3/dist/socket.io.js"
              data-name="0.2.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.2.3">
                0.2.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/0.2.2/dist/socket.io.js"
              data-name="0.2.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.2.2">
                0.2.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/0.2.1/dist/socket.io.js"
              data-name="0.2.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.2.1">
                0.2.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/0.2.0/dist/socket.io.js"
              data-name="0.2.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.2.0">
                0.2.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/0.1.8/dist/socket.io.js"
              data-name="0.1.8"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.1.8">
                0.1.8
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/0.1.7/dist/socket.io.js"
              data-name="0.1.7"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.1.7">
                0.1.7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/0.1.6/dist/socket.io.js"
              data-name="0.1.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.1.6">
                0.1.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/0.1.5/dist/socket.io.js"
              data-name="0.1.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.1.5">
                0.1.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/0.1.4/dist/socket.io.js"
              data-name="0.1.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.1.4">
                0.1.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/0.1.3/dist/socket.io.js"
              data-name="0.1.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.1.3">
                0.1.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/0.1.2/dist/socket.io.js"
              data-name="0.1.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.1.2">
                0.1.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/0.1.1/dist/socket.io.js"
              data-name="0.1.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.1.1">
                0.1.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/socketio/socket.io-client/tree/0.1/dist/socket.io.js"
              data-name="0.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.1">
                0.1
              </span>
            </a>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="BtnGroup float-right">
    <a href="/socketio/socket.io-client/find/master"
          class="js-pjax-capture-input btn btn-sm BtnGroup-item"
          data-pjax
          data-hotkey="t">
      Find file
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm BtnGroup-item tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
  </div>
  <div class="breadcrumb js-zeroclipboard-target">
    <span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/socketio/socket.io-client"><span>socket.io-client</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a href="/socketio/socket.io-client/tree/master/dist"><span>dist</span></a></span><span class="separator">/</span><strong class="final-path">socket.io.js</strong>
  </div>
</div>



  <div class="commit-tease">
      <span class="float-right">
        <a class="commit-tease-sha" href="/socketio/socket.io-client/commit/d30914d11b13e51ce1c1419d5cc99a74df72c2a7" data-pjax>
          d30914d
        </a>
        <relative-time datetime="2017-05-08T23:15:10Z">May 9, 2017</relative-time>
      </span>
      <div>
        <img alt="@darrachequesne" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/13031701?v=3&amp;s=40" width="20" />
        <a href="/darrachequesne" class="user-mention" rel="contributor">darrachequesne</a>
          <a href="/socketio/socket.io-client/commit/d30914d11b13e51ce1c1419d5cc99a74df72c2a7" class="message" data-pjax="true" title="[chore] Release 2.0.0">[chore] Release 2.0.0</a>
      </div>

    <div class="commit-tease-contributors">
      <button type="button" class="btn-link muted-link contributors-toggle" data-facebox="#blob_contributors_box">
        <strong>9</strong>
         contributors
      </button>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="rauchg" href="/socketio/socket.io-client/commits/master/dist/socket.io.js?author=rauchg"><img alt="@rauchg" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/13041?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="3rd-Eden" href="/socketio/socket.io-client/commits/master/dist/socket.io.js?author=3rd-Eden"><img alt="@3rd-Eden" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/28071?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="einaros" href="/socketio/socket.io-client/commits/master/dist/socket.io.js?author=einaros"><img alt="@einaros" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/394360?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="darrachequesne" href="/socketio/socket.io-client/commits/master/dist/socket.io.js?author=darrachequesne"><img alt="@darrachequesne" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/13031701?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="ycarmel" href="/socketio/socket.io-client/commits/master/dist/socket.io.js?author=ycarmel"><img alt="@ycarmel" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/1690830?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="mreinsch" href="/socketio/socket.io-client/commits/master/dist/socket.io.js?author=mreinsch"><img alt="@mreinsch" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/33982?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="jdahlq" href="/socketio/socket.io-client/commits/master/dist/socket.io.js?author=jdahlq"><img alt="@jdahlq" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/1686569?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="fat" href="/socketio/socket.io-client/commits/master/dist/socket.io.js?author=fat"><img alt="@fat" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/169705?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="dvv" href="/socketio/socket.io-client/commits/master/dist/socket.io.js?author=dvv"><img alt="@dvv" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/211335?v=3&amp;s=40" width="20" /> </a>


    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <img alt="@rauchg" height="24" src="https://avatars0.githubusercontent.com/u/13041?v=3&amp;s=48" width="24" />
            <a href="/rauchg">rauchg</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@3rd-Eden" height="24" src="https://avatars1.githubusercontent.com/u/28071?v=3&amp;s=48" width="24" />
            <a href="/3rd-Eden">3rd-Eden</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@einaros" height="24" src="https://avatars2.githubusercontent.com/u/394360?v=3&amp;s=48" width="24" />
            <a href="/einaros">einaros</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@darrachequesne" height="24" src="https://avatars2.githubusercontent.com/u/13031701?v=3&amp;s=48" width="24" />
            <a href="/darrachequesne">darrachequesne</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@ycarmel" height="24" src="https://avatars1.githubusercontent.com/u/1690830?v=3&amp;s=48" width="24" />
            <a href="/ycarmel">ycarmel</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@mreinsch" height="24" src="https://avatars0.githubusercontent.com/u/33982?v=3&amp;s=48" width="24" />
            <a href="/mreinsch">mreinsch</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@jdahlq" height="24" src="https://avatars0.githubusercontent.com/u/1686569?v=3&amp;s=48" width="24" />
            <a href="/jdahlq">jdahlq</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@fat" height="24" src="https://avatars3.githubusercontent.com/u/169705?v=3&amp;s=48" width="24" />
            <a href="/fat">fat</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@dvv" height="24" src="https://avatars1.githubusercontent.com/u/211335?v=3&amp;s=48" width="24" />
            <a href="/dvv">dvv</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="BtnGroup">
      <a href="/socketio/socket.io-client/raw/master/dist/socket.io.js" class="btn btn-sm BtnGroup-item" id="raw-url">Raw</a>
        <a href="/socketio/socket.io-client/blame/master/dist/socket.io.js" class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b">Blame</a>
      <a href="/socketio/socket.io-client/commits/master/dist/socket.io.js" class="btn btn-sm BtnGroup-item" rel="nofollow">History</a>
    </div>


        <button type="button" class="btn-octicon disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <svg aria-hidden="true" class="octicon octicon-pencil" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
        </button>
        <button type="button" class="btn-octicon btn-octicon-danger disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <svg aria-hidden="true" class="octicon octicon-trashcan" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
        </button>
  </div>

  <div class="file-info">
      3 lines (3 sloc)
      <span class="file-info-divider"></span>
    59.6 KB
  </div>
</div>

  

  <div itemprop="text" class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line">!function(t,e){&quot;object&quot;==typeof exports&amp;&amp;&quot;object&quot;==typeof module?module.exports=e():&quot;function&quot;==typeof define&amp;&amp;define.amd?define([],e):&quot;object&quot;==typeof exports?exports.io=e():t.io=e()}(this,function(){return function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return t[n].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var r={};return e.m=t,e.c=r,e.p=&quot;&quot;,e(0)}([function(t,e,r){&quot;use strict&quot;;function n(t,e){&quot;object&quot;===(&quot;undefined&quot;==typeof t?&quot;undefined&quot;:i(t))&amp;&amp;(e=t,t=void 0),e=e||{};var r,n=s(t),a=n.source,h=n.id,f=n.path,l=u[h]&amp;&amp;f in u[h].nsps,d=e.forceNew||e[&quot;force new connection&quot;]||!1===e.multiplex||l;return d?(p(&quot;ignoring socket cache for %s&quot;,a),r=c(a,e)):(u[h]||(p(&quot;new io instance for %s&quot;,a),u[h]=c(a,e)),r=u[h]),n.query&amp;&amp;!e.query?e.query=n.query:e&amp;&amp;&quot;object&quot;===i(e.query)&amp;&amp;(e.query=o(e.query)),r.socket(n.path,e)}function o(t){var e=[];for(var r in t)t.hasOwnProperty(r)&amp;&amp;e.push(encodeURIComponent(r)+&quot;=&quot;+encodeURIComponent(t[r]));return e.join(&quot;&amp;&quot;)}var i=&quot;function&quot;==typeof Symbol&amp;&amp;&quot;symbol&quot;==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&amp;&amp;&quot;function&quot;==typeof Symbol&amp;&amp;t.constructor===Symbol&amp;&amp;t!==Symbol.prototype?&quot;symbol&quot;:typeof t},s=r(1),a=r(7),c=r(13),p=r(3)(&quot;socket.io-client&quot;);t.exports=e=n;var u=e.managers={};e.protocol=a.protocol,e.connect=n,e.Manager=r(13),e.Socket=r(39)},function(t,e,r){(function(e){&quot;use strict&quot;;function n(t,r){var n=t;r=r||e.location,null==t&amp;&amp;(t=r.protocol+&quot;//&quot;+r.host),&quot;string&quot;==typeof t&amp;&amp;(&quot;/&quot;===t.charAt(0)&amp;&amp;(t=&quot;/&quot;===t.charAt(1)?r.protocol+t:r.host+t),/^(https?|wss?):\/\//.test(t)||(i(&quot;protocol-less url %s&quot;,t),t=&quot;undefined&quot;!=typeof r?r.protocol+&quot;//&quot;+t:&quot;https://&quot;+t),i(&quot;parse %s&quot;,t),n=o(t)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port=&quot;80&quot;:/^(http|ws)s$/.test(n.protocol)&amp;&amp;(n.port=&quot;443&quot;)),n.path=n.path||&quot;/&quot;;var s=n.host.indexOf(&quot;:&quot;)!==-1,a=s?&quot;[&quot;+n.host+&quot;]&quot;:n.host;return n.id=n.protocol+&quot;://&quot;+a+&quot;:&quot;+n.port,n.href=n.protocol+&quot;://&quot;+a+(r&amp;&amp;r.port===n.port?&quot;&quot;:&quot;:&quot;+n.port),n}var o=r(2),i=r(3)(&quot;socket.io-client:url&quot;);t.exports=n}).call(e,function(){return this}())},function(t,e){var r=/^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,n=[&quot;source&quot;,&quot;protocol&quot;,&quot;authority&quot;,&quot;userInfo&quot;,&quot;user&quot;,&quot;password&quot;,&quot;host&quot;,&quot;port&quot;,&quot;relative&quot;,&quot;path&quot;,&quot;directory&quot;,&quot;file&quot;,&quot;query&quot;,&quot;anchor&quot;];t.exports=function(t){var e=t,o=t.indexOf(&quot;[&quot;),i=t.indexOf(&quot;]&quot;);o!=-1&amp;&amp;i!=-1&amp;&amp;(t=t.substring(0,o)+t.substring(o,i).replace(/:/g,&quot;;&quot;)+t.substring(i,t.length));for(var s=r.exec(t||&quot;&quot;),a={},c=14;c--;)a[n[c]]=s[c]||&quot;&quot;;return o!=-1&amp;&amp;i!=-1&amp;&amp;(a.source=e,a.host=a.host.substring(1,a.host.length-1).replace(/;/g,&quot;:&quot;),a.authority=a.authority.replace(&quot;[&quot;,&quot;&quot;).replace(&quot;]&quot;,&quot;&quot;).replace(/;/g,&quot;:&quot;),a.ipv6uri=!0),a}},function(t,e,r){(function(n){function o(){return!(&quot;undefined&quot;==typeof window||!window||&quot;undefined&quot;==typeof window.process||&quot;renderer&quot;!==window.process.type)||(&quot;undefined&quot;!=typeof document&amp;&amp;document&amp;&amp;&quot;WebkitAppearance&quot;in document.documentElement.style||&quot;undefined&quot;!=typeof window&amp;&amp;window&amp;&amp;window.console&amp;&amp;(console.firebug||console.exception&amp;&amp;console.table)||&quot;undefined&quot;!=typeof navigator&amp;&amp;navigator&amp;&amp;navigator.userAgent&amp;&amp;navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&amp;&amp;parseInt(RegExp.$1,10)&gt;=31||&quot;undefined&quot;!=typeof navigator&amp;&amp;navigator&amp;&amp;navigator.userAgent&amp;&amp;navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))}function i(t){var r=this.useColors;if(t[0]=(r?&quot;%c&quot;:&quot;&quot;)+this.namespace+(r?&quot; %c&quot;:&quot; &quot;)+t[0]+(r?&quot;%c &quot;:&quot; &quot;)+&quot;+&quot;+e.humanize(this.diff),r){var n=&quot;color: &quot;+this.color;t.splice(1,0,n,&quot;color: inherit&quot;);var o=0,i=0;t[0].replace(/%[a-zA-Z%]/g,function(t){&quot;%%&quot;!==t&amp;&amp;(o++,&quot;%c&quot;===t&amp;&amp;(i=o))}),t.splice(i,0,n)}}function s(){return&quot;object&quot;==typeof console&amp;&amp;console.log&amp;&amp;Function.prototype.apply.call(console.log,console,arguments)}function a(t){try{null==t?e.storage.removeItem(&quot;debug&quot;):e.storage.debug=t}catch(r){}}function c(){var t;try{t=e.storage.debug}catch(r){}return!t&amp;&amp;&quot;undefined&quot;!=typeof n&amp;&amp;&quot;env&quot;in n&amp;&amp;(t=n.env.DEBUG),t}function p(){try{return window.localStorage}catch(t){}}e=t.exports=r(5),e.log=s,e.formatArgs=i,e.save=a,e.load=c,e.useColors=o,e.storage=&quot;undefined&quot;!=typeof chrome&amp;&amp;&quot;undefined&quot;!=typeof chrome.storage?chrome.storage.local:p(),e.colors=[&quot;lightseagreen&quot;,&quot;forestgreen&quot;,&quot;goldenrod&quot;,&quot;dodgerblue&quot;,&quot;darkorchid&quot;,&quot;crimson&quot;],e.formatters.j=function(t){try{return JSON.stringify(t)}catch(e){return&quot;[UnexpectedJSONParseError]: &quot;+e.message}},e.enable(c())}).call(e,r(4))},function(t,e){function r(){throw new Error(&quot;setTimeout has not been defined&quot;)}function n(){throw new Error(&quot;clearTimeout has not been defined&quot;)}function o(t){if(u===setTimeout)return setTimeout(t,0);if((u===r||!u)&amp;&amp;setTimeout)return u=setTimeout,setTimeout(t,0);try{return u(t,0)}catch(e){try{return u.call(null,t,0)}catch(e){return u.call(this,t,0)}}}function i(t){if(h===clearTimeout)return clearTimeout(t);if((h===n||!h)&amp;&amp;clearTimeout)return h=clearTimeout,clearTimeout(t);try{return h(t)}catch(e){try{return h.call(null,t)}catch(e){return h.call(this,t)}}}function s(){y&amp;&amp;l&amp;&amp;(y=!1,l.length?d=l.concat(d):m=-1,d.length&amp;&amp;a())}function a(){if(!y){var t=o(s);y=!0;for(var e=d.length;e;){for(l=d,d=[];++m&lt;e;)l&amp;&amp;l[m].run();m=-1,e=d.length}l=null,y=!1,i(t)}}function c(t,e){this.fun=t,this.array=e}function p(){}var u,h,f=t.exports={};!function(){try{u=&quot;function&quot;==typeof setTimeout?setTimeout:r}catch(t){u=r}try{h=&quot;function&quot;==typeof clearTimeout?clearTimeout:n}catch(t){h=n}}();var l,d=[],y=!1,m=-1;f.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length&gt;1)for(var r=1;r&lt;arguments.length;r++)e[r-1]=arguments[r];d.push(new c(t,e)),1!==d.length||y||o(a)},c.prototype.run=function(){this.fun.apply(null,this.array)},f.title=&quot;browser&quot;,f.browser=!0,f.env={},f.argv=[],f.version=&quot;&quot;,f.versions={},f.on=p,f.addListener=p,f.once=p,f.off=p,f.removeListener=p,f.removeAllListeners=p,f.emit=p,f.prependListener=p,f.prependOnceListener=p,f.listeners=function(t){return[]},f.binding=function(t){throw new Error(&quot;process.binding is not supported&quot;)},f.cwd=function(){return&quot;/&quot;},f.chdir=function(t){throw new Error(&quot;process.chdir is not supported&quot;)},f.umask=function(){return 0}},function(t,e,r){function n(t){var r,n=0;for(r in t)n=(n&lt;&lt;5)-n+t.charCodeAt(r),n|=0;return e.colors[Math.abs(n)%e.colors.length]}function o(t){function r(){if(r.enabled){var t=r,n=+new Date,o=n-(p||n);t.diff=o,t.prev=p,t.curr=n,p=n;for(var i=new Array(arguments.length),s=0;s&lt;i.length;s++)i[s]=arguments[s];i[0]=e.coerce(i[0]),&quot;string&quot;!=typeof i[0]&amp;&amp;i.unshift(&quot;%O&quot;);var a=0;i[0]=i[0].replace(/%([a-zA-Z%])/g,function(r,n){if(&quot;%%&quot;===r)return r;a++;var o=e.formatters[n];if(&quot;function&quot;==typeof o){var s=i[a];r=o.call(t,s),i.splice(a,1),a--}return r}),e.formatArgs.call(t,i);var c=r.log||e.log||console.log.bind(console);c.apply(t,i)}}return r.namespace=t,r.enabled=e.enabled(t),r.useColors=e.useColors(),r.color=n(t),&quot;function&quot;==typeof e.init&amp;&amp;e.init(r),r}function i(t){e.save(t),e.names=[],e.skips=[];for(var r=(&quot;string&quot;==typeof t?t:&quot;&quot;).split(/[\s,]+/),n=r.length,o=0;o&lt;n;o++)r[o]&amp;&amp;(t=r[o].replace(/\*/g,&quot;.*?&quot;),&quot;-&quot;===t[0]?e.skips.push(new RegExp(&quot;^&quot;+t.substr(1)+&quot;$&quot;)):e.names.push(new RegExp(&quot;^&quot;+t+&quot;$&quot;)))}function s(){e.enable(&quot;&quot;)}function a(t){var r,n;for(r=0,n=e.skips.length;r&lt;n;r++)if(e.skips[r].test(t))return!1;for(r=0,n=e.names.length;r&lt;n;r++)if(e.names[r].test(t))return!0;return!1}function c(t){return t instanceof Error?t.stack||t.message:t}e=t.exports=o.debug=o[&quot;default&quot;]=o,e.coerce=c,e.disable=s,e.enable=i,e.enabled=a,e.humanize=r(6),e.names=[],e.skips=[],e.formatters={};var p},function(t,e){function r(t){if(t=String(t),!(t.length&gt;1e4)){var e=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);if(e){var r=parseFloat(e[1]),n=(e[2]||&quot;ms&quot;).toLowerCase();switch(n){case&quot;years&quot;:case&quot;year&quot;:case&quot;yrs&quot;:case&quot;yr&quot;:case&quot;y&quot;:return r*u;case&quot;days&quot;:case&quot;day&quot;:case&quot;d&quot;:return r*p;case&quot;hours&quot;:case&quot;hour&quot;:case&quot;hrs&quot;:case&quot;hr&quot;:case&quot;h&quot;:return r*c;case&quot;minutes&quot;:case&quot;minute&quot;:case&quot;mins&quot;:case&quot;min&quot;:case&quot;m&quot;:return r*a;case&quot;seconds&quot;:case&quot;second&quot;:case&quot;secs&quot;:case&quot;sec&quot;:case&quot;s&quot;:return r*s;case&quot;milliseconds&quot;:case&quot;millisecond&quot;:case&quot;msecs&quot;:case&quot;msec&quot;:case&quot;ms&quot;:return r;default:return}}}}function n(t){return t&gt;=p?Math.round(t/p)+&quot;d&quot;:t&gt;=c?Math.round(t/c)+&quot;h&quot;:t&gt;=a?Math.round(t/a)+&quot;m&quot;:t&gt;=s?Math.round(t/s)+&quot;s&quot;:t+&quot;ms&quot;}function o(t){return i(t,p,&quot;day&quot;)||i(t,c,&quot;hour&quot;)||i(t,a,&quot;minute&quot;)||i(t,s,&quot;second&quot;)||t+&quot; ms&quot;}function i(t,e,r){if(!(t&lt;e))return t&lt;1.5*e?Math.floor(t/e)+&quot; &quot;+r:Math.ceil(t/e)+&quot; &quot;+r+&quot;s&quot;}var s=1e3,a=60*s,c=60*a,p=24*c,u=365.25*p;t.exports=function(t,e){e=e||{};var i=typeof t;if(&quot;string&quot;===i&amp;&amp;t.length&gt;0)return r(t);if(&quot;number&quot;===i&amp;&amp;isNaN(t)===!1)return e[&quot;long&quot;]?o(t):n(t);throw new Error(&quot;val is not a non-empty string or a valid number. val=&quot;+JSON.stringify(t))}},function(t,e,r){function n(){}function o(t){var r=&quot;&quot;+t.type;return e.BINARY_EVENT!==t.type&amp;&amp;e.BINARY_ACK!==t.type||(r+=t.attachments+&quot;-&quot;),t.nsp&amp;&amp;&quot;/&quot;!==t.nsp&amp;&amp;(r+=t.nsp+&quot;,&quot;),null!=t.id&amp;&amp;(r+=t.id),null!=t.data&amp;&amp;(r+=JSON.stringify(t.data)),h(&quot;encoded %j as %s&quot;,t,r),r}function i(t,e){function r(t){var r=d.deconstructPacket(t),n=o(r.packet),i=r.buffers;i.unshift(n),e(i)}d.removeBlobs(t,r)}function s(){this.reconstructor=null}function a(t){var r=0,n={type:Number(t.charAt(0))};if(null==e.types[n.type])return u();if(e.BINARY_EVENT===n.type||e.BINARY_ACK===n.type){for(var o=&quot;&quot;;&quot;-&quot;!==t.charAt(++r)&amp;&amp;(o+=t.charAt(r),r!=t.length););if(o!=Number(o)||&quot;-&quot;!==t.charAt(r))throw new Error(&quot;Illegal attachments&quot;);n.attachments=Number(o)}if(&quot;/&quot;===t.charAt(r+1))for(n.nsp=&quot;&quot;;++r;){var i=t.charAt(r);if(&quot;,&quot;===i)break;if(n.nsp+=i,r===t.length)break}else n.nsp=&quot;/&quot;;var s=t.charAt(r+1);if(&quot;&quot;!==s&amp;&amp;Number(s)==s){for(n.id=&quot;&quot;;++r;){var i=t.charAt(r);if(null==i||Number(i)!=i){--r;break}if(n.id+=t.charAt(r),r===t.length)break}n.id=Number(n.id)}return t.charAt(++r)&amp;&amp;(n=c(n,t.substr(r))),h(&quot;decoded %s as %j&quot;,t,n),n}function c(t,e){try{t.data=JSON.parse(e)}catch(r){return u()}return t}function p(t){this.reconPack=t,this.buffers=[]}function u(){return{type:e.ERROR,data:&quot;parser error&quot;}}var h=r(3)(&quot;socket.io-parser&quot;),f=r(8),l=r(9),d=r(11),y=r(12);e.protocol=4,e.types=[&quot;CONNECT&quot;,&quot;DISCONNECT&quot;,&quot;EVENT&quot;,&quot;ACK&quot;,&quot;ERROR&quot;,&quot;BINARY_EVENT&quot;,&quot;BINARY_ACK&quot;],e.CONNECT=0,e.DISCONNECT=1,e.EVENT=2,e.ACK=3,e.ERROR=4,e.BINARY_EVENT=5,e.BINARY_ACK=6,e.Encoder=n,e.Decoder=s,n.prototype.encode=function(t,r){if(t.type!==e.EVENT&amp;&amp;t.type!==e.ACK||!l(t.data)||(t.type=t.type===e.EVENT?e.BINARY_EVENT:e.BINARY_ACK),h(&quot;encoding packet %j&quot;,t),e.BINARY_EVENT===t.type||e.BINARY_ACK===t.type)i(t,r);else{var n=o(t);r([n])}},f(s.prototype),s.prototype.add=function(t){var r;if(&quot;string&quot;==typeof t)r=a(t),e.BINARY_EVENT===r.type||e.BINARY_ACK===r.type?(this.reconstructor=new p(r),0===this.reconstructor.reconPack.attachments&amp;&amp;this.emit(&quot;decoded&quot;,r)):this.emit(&quot;decoded&quot;,r);else{if(!y(t)&amp;&amp;!t.base64)throw new Error(&quot;Unknown type: &quot;+t);if(!this.reconstructor)throw new Error(&quot;got binary data when not reconstructing a packet&quot;);r=this.reconstructor.takeBinaryData(t),r&amp;&amp;(this.reconstructor=null,this.emit(&quot;decoded&quot;,r))}},s.prototype.destroy=function(){this.reconstructor&amp;&amp;this.reconstructor.finishedReconstruction()},p.prototype.takeBinaryData=function(t){if(this.buffers.push(t),this.buffers.length===this.reconPack.attachments){var e=d.reconstructPacket(this.reconPack,this.buffers);return this.finishedReconstruction(),e}return null},p.prototype.finishedReconstruction=function(){this.reconPack=null,this.buffers=[]}},function(t,e,r){function n(t){if(t)return o(t)}function o(t){for(var e in n.prototype)t[e]=n.prototype[e];return t}t.exports=n,n.prototype.on=n.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks[&quot;$&quot;+t]=this._callbacks[&quot;$&quot;+t]||[]).push(e),this},n.prototype.once=function(t,e){function r(){this.off(t,r),e.apply(this,arguments)}return r.fn=e,this.on(t,r),this},n.prototype.off=n.prototype.removeListener=n.prototype.removeAllListeners=n.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var r=this._callbacks[&quot;$&quot;+t];if(!r)return this;if(1==arguments.length)return delete this._callbacks[&quot;$&quot;+t],this;for(var n,o=0;o&lt;r.length;o++)if(n=r[o],n===e||n.fn===e){r.splice(o,1);break}return this},n.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),r=this._callbacks[&quot;$&quot;+t];if(r){r=r.slice(0);for(var n=0,o=r.length;n&lt;o;++n)r[n].apply(this,e)}return this},n.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks[&quot;$&quot;+t]||[]},n.prototype.hasListeners=function(t){return!!this.listeners(t).length}},function(t,e,r){(function(e){function n(t){if(!t||&quot;object&quot;!=typeof t)return!1;if(o(t)){for(var r=0,i=t.length;r&lt;i;r++)if(n(t[r]))return!0;return!1}if(&quot;function&quot;==typeof e.Buffer&amp;&amp;e.Buffer.isBuffer&amp;&amp;e.Buffer.isBuffer(t)||&quot;function&quot;==typeof e.ArrayBuffer&amp;&amp;t instanceof ArrayBuffer||s&amp;&amp;t instanceof Blob||a&amp;&amp;t instanceof File)return!0;if(t.toJSON&amp;&amp;&quot;function&quot;==typeof t.toJSON&amp;&amp;1===arguments.length)return n(t.toJSON(),!0);for(var c in t)if(Object.prototype.hasOwnProperty.call(t,c)&amp;&amp;n(t[c]))return!0;return!1}var o=r(10),i=Object.prototype.toString,s=&quot;function&quot;==typeof e.Blob||&quot;[object BlobConstructor]&quot;===i.call(e.Blob),a=&quot;function&quot;==typeof e.File||&quot;[object FileConstructor]&quot;===i.call(e.File);t.exports=n}).call(e,function(){return this}())},function(t,e){var r={}.toString;t.exports=Array.isArray||function(t){return&quot;[object Array]&quot;==r.call(t)}},function(t,e,r){(function(t){function n(t,e){if(!t)return t;if(s(t)){var r={_placeholder:!0,num:e.length};return e.push(t),r}if(i(t)){for(var o=new Array(t.length),a=0;a&lt;t.length;a++)o[a]=n(t[a],e);return o}if(&quot;object&quot;==typeof t&amp;&amp;!(t instanceof Date)){var o={};for(var c in t)o[c]=n(t[c],e);return o}return t}function o(t,e){if(!t)return t;if(t&amp;&amp;t._placeholder)return e[t.num];if(i(t))for(var r=0;r&lt;t.length;r++)t[r]=o(t[r],e);else if(&quot;object&quot;==typeof t)for(var n in t)t[n]=o(t[n],e);return t}var i=r(10),s=r(12),a=Object.prototype.toString,c=&quot;function&quot;==typeof t.Blob||&quot;[object BlobConstructor]&quot;===a.call(t.Blob),p=&quot;function&quot;==typeof t.File||&quot;[object FileConstructor]&quot;===a.call(t.File);e.deconstructPacket=function(t){var e=[],r=t.data,o=t;return o.data=n(r,e),o.attachments=e.length,{packet:o,buffers:e}},e.reconstructPacket=function(t,e){return t.data=o(t.data,e),t.attachments=void 0,t},e.removeBlobs=function(t,e){function r(t,a,u){if(!t)return t;if(c&amp;&amp;t instanceof Blob||p&amp;&amp;t instanceof File){n++;var h=new FileReader;h.onload=function(){u?u[a]=this.result:o=this.result,--n||e(o)},h.readAsArrayBuffer(t)}else if(i(t))for(var f=0;f&lt;t.length;f++)r(t[f],f,t);else if(&quot;object&quot;==typeof t&amp;&amp;!s(t))for(var l in t)r(t[l],l,t)}var n=0,o=t;r(o),n||e(o)}}).call(e,function(){return this}())},function(t,e){(function(e){function r(t){return e.Buffer&amp;&amp;e.Buffer.isBuffer(t)||e.ArrayBuffer&amp;&amp;t instanceof ArrayBuffer}t.exports=r}).call(e,function(){return this}())},function(t,e,r){&quot;use strict&quot;;function n(t,e){if(!(this instanceof n))return new n(t,e);t&amp;&amp;&quot;object&quot;===(&quot;undefined&quot;==typeof t?&quot;undefined&quot;:o(t))&amp;&amp;(e=t,t=void 0),e=e||{},e.path=e.path||&quot;/socket.io&quot;,this.nsps={},this.subs=[],this.opts=e,this.reconnection(e.reconnection!==!1),this.reconnectionAttempts(e.reconnectionAttempts||1/0),this.reconnectionDelay(e.reconnectionDelay||1e3),this.reconnectionDelayMax(e.reconnectionDelayMax||5e3),this.randomizationFactor(e.randomizationFactor||.5),this.backoff=new l({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(null==e.timeout?2e4:e.timeout),this.readyState=&quot;closed&quot;,this.uri=t,this.connecting=[],this.lastPing=null,this.encoding=!1,this.packetBuffer=[];var r=e.parser||c;this.encoder=new r.Encoder,this.decoder=new r.Decoder,this.autoConnect=e.autoConnect!==!1,this.autoConnect&amp;&amp;this.open()}var o=&quot;function&quot;==typeof Symbol&amp;&amp;&quot;symbol&quot;==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&amp;&amp;&quot;function&quot;==typeof Symbol&amp;&amp;t.constructor===Symbol&amp;&amp;t!==Symbol.prototype?&quot;symbol&quot;:typeof t},i=r(14),s=r(39),a=r(8),c=r(7),p=r(41),u=r(42),h=r(3)(&quot;socket.io-client:manager&quot;),f=r(37),l=r(43),d=Object.prototype.hasOwnProperty;t.exports=n,n.prototype.emitAll=function(){this.emit.apply(this,arguments);for(var t in this.nsps)d.call(this.nsps,t)&amp;&amp;this.nsps[t].emit.apply(this.nsps[t],arguments)},n.prototype.updateSocketIds=function(){for(var t in this.nsps)d.call(this.nsps,t)&amp;&amp;(this.nsps[t].id=this.generateId(t))},n.prototype.generateId=function(t){return(&quot;/&quot;===t?&quot;&quot;:t+&quot;#&quot;)+this.engine.id},a(n.prototype),n.prototype.reconnection=function(t){return arguments.length?(this._reconnection=!!t,this):this._reconnection},n.prototype.reconnectionAttempts=function(t){return arguments.length?(this._reconnectionAttempts=t,this):this._reconnectionAttempts},n.prototype.reconnectionDelay=function(t){return arguments.length?(this._reconnectionDelay=t,this.backoff&amp;&amp;this.backoff.setMin(t),this):this._reconnectionDelay},n.prototype.randomizationFactor=function(t){return arguments.length?(this._randomizationFactor=t,this.backoff&amp;&amp;this.backoff.setJitter(t),this):this._randomizationFactor},n.prototype.reconnectionDelayMax=function(t){return arguments.length?(this._reconnectionDelayMax=t,this.backoff&amp;&amp;this.backoff.setMax(t),this):this._reconnectionDelayMax},n.prototype.timeout=function(t){return arguments.length?(this._timeout=t,this):this._timeout},n.prototype.maybeReconnectOnOpen=function(){!this.reconnecting&amp;&amp;this._reconnection&amp;&amp;0===this.backoff.attempts&amp;&amp;this.reconnect()},n.prototype.open=n.prototype.connect=function(t,e){if(h(&quot;readyState %s&quot;,this.readyState),~this.readyState.indexOf(&quot;open&quot;))return this;h(&quot;opening %s&quot;,this.uri),this.engine=i(this.uri,this.opts);var r=this.engine,n=this;this.readyState=&quot;opening&quot;,this.skipReconnect=!1;var o=p(r,&quot;open&quot;,function(){n.onopen(),t&amp;&amp;t()}),s=p(r,&quot;error&quot;,function(e){if(h(&quot;connect_error&quot;),n.cleanup(),n.readyState=&quot;closed&quot;,n.emitAll(&quot;connect_error&quot;,e),t){var r=new Error(&quot;Connection error&quot;);r.data=e,t(r)}else n.maybeReconnectOnOpen()});if(!1!==this._timeout){var a=this._timeout;h(&quot;connect attempt will timeout after %d&quot;,a);var c=setTimeout(function(){h(&quot;connect attempt timed out after %d&quot;,a),o.destroy(),r.close(),r.emit(&quot;error&quot;,&quot;timeout&quot;),n.emitAll(&quot;connect_timeout&quot;,a)},a);this.subs.push({destroy:function(){clearTimeout(c)}})}return this.subs.push(o),this.subs.push(s),this},n.prototype.onopen=function(){h(&quot;open&quot;),this.cleanup(),this.readyState=&quot;open&quot;,this.emit(&quot;open&quot;);var t=this.engine;this.subs.push(p(t,&quot;data&quot;,u(this,&quot;ondata&quot;))),this.subs.push(p(t,&quot;ping&quot;,u(this,&quot;onping&quot;))),this.subs.push(p(t,&quot;pong&quot;,u(this,&quot;onpong&quot;))),this.subs.push(p(t,&quot;error&quot;,u(this,&quot;onerror&quot;))),this.subs.push(p(t,&quot;close&quot;,u(this,&quot;onclose&quot;))),this.subs.push(p(this.decoder,&quot;decoded&quot;,u(this,&quot;ondecoded&quot;)))},n.prototype.onping=function(){this.lastPing=new Date,this.emitAll(&quot;ping&quot;)},n.prototype.onpong=function(){this.emitAll(&quot;pong&quot;,new Date-this.lastPing)},n.prototype.ondata=function(t){this.decoder.add(t)},n.prototype.ondecoded=function(t){this.emit(&quot;packet&quot;,t)},n.prototype.onerror=function(t){h(&quot;error&quot;,t),this.emitAll(&quot;error&quot;,t)},n.prototype.socket=function(t,e){function r(){~f(o.connecting,n)||o.connecting.push(n)}var n=this.nsps[t];if(!n){n=new s(this,t,e),this.nsps[t]=n;var o=this;n.on(&quot;connecting&quot;,r),n.on(&quot;connect&quot;,function(){n.id=o.generateId(t)}),this.autoConnect&amp;&amp;r()}return n},n.prototype.destroy=function(t){var e=f(this.connecting,t);~e&amp;&amp;this.connecting.splice(e,1),this.connecting.length||this.close()},n.prototype.packet=function(t){h(&quot;writing packet %j&quot;,t);var e=this;t.query&amp;&amp;0===t.type&amp;&amp;(t.nsp+=&quot;?&quot;+t.query),e.encoding?e.packetBuffer.push(t):(e.encoding=!0,this.encoder.encode(t,function(r){for(var n=0;n&lt;r.length;n++)e.engine.write(r[n],t.options);e.encoding=!1,e.processPacketQueue()}))},n.prototype.processPacketQueue=function(){if(this.packetBuffer.length&gt;0&amp;&amp;!this.encoding){var t=this.packetBuffer.shift();this.packet(t)}},n.prototype.cleanup=function(){h(&quot;cleanup&quot;);for(var t=this.subs.length,e=0;e&lt;t;e++){var r=this.subs.shift();r.destroy()}this.packetBuffer=[],this.encoding=!1,this.lastPing=null,this.decoder.destroy()},n.prototype.close=n.prototype.disconnect=function(){h(&quot;disconnect&quot;),this.skipReconnect=!0,this.reconnecting=!1,&quot;opening&quot;===this.readyState&amp;&amp;this.cleanup(),this.backoff.reset(),this.readyState=&quot;closed&quot;,this.engine&amp;&amp;this.engine.close()},n.prototype.onclose=function(t){h(&quot;onclose&quot;),this.cleanup(),this.backoff.reset(),this.readyState=&quot;closed&quot;,this.emit(&quot;close&quot;,t),this._reconnection&amp;&amp;!this.skipReconnect&amp;&amp;this.reconnect()},n.prototype.reconnect=function(){if(this.reconnecting||this.skipReconnect)return this;var t=this;if(this.backoff.attempts&gt;=this._reconnectionAttempts)h(&quot;reconnect failed&quot;),this.backoff.reset(),this.emitAll(&quot;reconnect_failed&quot;),this.reconnecting=!1;else{var e=this.backoff.duration();h(&quot;will wait %dms before reconnect attempt&quot;,e),this.reconnecting=!0;var r=setTimeout(function(){t.skipReconnect||(h(&quot;attempting reconnect&quot;),t.emitAll(&quot;reconnect_attempt&quot;,t.backoff.attempts),t.emitAll(&quot;reconnecting&quot;,t.backoff.attempts),t.skipReconnect||t.open(function(e){e?(h(&quot;reconnect attempt error&quot;),t.reconnecting=!1,t.reconnect(),t.emitAll(&quot;reconnect_error&quot;,e.data)):(h(&quot;reconnect success&quot;),t.onreconnect())}))},e);this.subs.push({destroy:function(){clearTimeout(r)}})}},n.prototype.onreconnect=function(){var t=this.backoff.attempts;this.reconnecting=!1,this.backoff.reset(),this.updateSocketIds(),this.emitAll(&quot;reconnect&quot;,t)}},function(t,e,r){t.exports=r(15)},function(t,e,r){t.exports=r(16),t.exports.parser=r(23)},function(t,e,r){(function(e){function n(t,r){if(!(this instanceof n))return new n(t,r);r=r||{},t&amp;&amp;&quot;object&quot;==typeof t&amp;&amp;(r=t,t=null),t?(t=u(t),r.hostname=t.host,r.secure=&quot;https&quot;===t.protocol||&quot;wss&quot;===t.protocol,r.port=t.port,t.query&amp;&amp;(r.query=t.query)):r.host&amp;&amp;(r.hostname=u(r.host).host),this.secure=null!=r.secure?r.secure:e.location&amp;&amp;&quot;https:&quot;===location.protocol,r.hostname&amp;&amp;!r.port&amp;&amp;(r.port=this.secure?&quot;443&quot;:&quot;80&quot;),this.agent=r.agent||!1,this.hostname=r.hostname||(e.location?location.hostname:&quot;localhost&quot;),this.port=r.port||(e.location&amp;&amp;location.port?location.port:this.secure?443:80),this.query=r.query||{},&quot;string&quot;==typeof this.query&amp;&amp;(this.query=f.decode(this.query)),this.upgrade=!1!==r.upgrade,this.path=(r.path||&quot;/engine.io&quot;).replace(/\/$/,&quot;&quot;)+&quot;/&quot;,this.forceJSONP=!!r.forceJSONP,this.jsonp=!1!==r.jsonp,this.forceBase64=!!r.forceBase64,this.enablesXDR=!!r.enablesXDR,this.timestampParam=r.timestampParam||&quot;t&quot;,this.timestampRequests=r.timestampRequests,this.transports=r.transports||[&quot;polling&quot;,&quot;websocket&quot;],this.transportOptions=r.transportOptions||{},this.readyState=&quot;&quot;,this.writeBuffer=[],this.prevBufferLen=0,this.policyPort=r.policyPort||843,this.rememberUpgrade=r.rememberUpgrade||!1,this.binaryType=null,this.onlyBinaryUpgrades=r.onlyBinaryUpgrades,this.perMessageDeflate=!1!==r.perMessageDeflate&amp;&amp;(r.perMessageDeflate||{}),!0===this.perMessageDeflate&amp;&amp;(this.perMessageDeflate={}),this.perMessageDeflate&amp;&amp;null==this.perMessageDeflate.threshold&amp;&amp;(this.perMessageDeflate.threshold=1024),this.pfx=r.pfx||null,this.key=r.key||null,this.passphrase=r.passphrase||null,this.cert=r.cert||null,this.ca=r.ca||null,this.ciphers=r.ciphers||null,this.rejectUnauthorized=void 0===r.rejectUnauthorized||r.rejectUnauthorized,this.forceNode=!!r.forceNode;var o=&quot;object&quot;==typeof e&amp;&amp;e;o.global===o&amp;&amp;(r.extraHeaders&amp;&amp;Object.keys(r.extraHeaders).length&gt;0&amp;&amp;(this.extraHeaders=r.extraHeaders),r.localAddress&amp;&amp;(this.localAddress=r.localAddress)),this.id=null,this.upgrades=null,this.pingInterval=null,this.pingTimeout=null,this.pingIntervalTimer=null,this.pingTimeoutTimer=null,this.open()}function o(t){var e={};for(var r in t)t.hasOwnProperty(r)&amp;&amp;(e[r]=t[r]);return e}var i=r(17),s=r(8),a=r(3)(&quot;engine.io-client:socket&quot;),c=r(37),p=r(23),u=r(2),h=r(38),f=r(31);t.exports=n,n.priorWebsocketSuccess=!1,s(n.prototype),n.protocol=p.protocol,n.Socket=n,n.Transport=r(22),n.transports=r(17),n.parser=r(23),n.prototype.createTransport=function(t){a(&#39;creating transport &quot;%s&quot;&#39;,t);var e=o(this.query);e.EIO=p.protocol,e.transport=t;var r=this.transportOptions[t]||{};this.id&amp;&amp;(e.sid=this.id);var n=new i[t]({query:e,socket:this,agent:r.agent||this.agent,hostname:r.hostname||this.hostname,port:r.port||this.port,secure:r.secure||this.secure,path:r.path||this.path,forceJSONP:r.forceJSONP||this.forceJSONP,jsonp:r.jsonp||this.jsonp,forceBase64:r.forceBase64||this.forceBase64,enablesXDR:r.enablesXDR||this.enablesXDR,timestampRequests:r.timestampRequests||this.timestampRequests,timestampParam:r.timestampParam||this.timestampParam,policyPort:r.policyPort||this.policyPort,pfx:r.pfx||this.pfx,key:r.key||this.key,passphrase:r.passphrase||this.passphrase,cert:r.cert||this.cert,ca:r.ca||this.ca,ciphers:r.ciphers||this.ciphers,rejectUnauthorized:r.rejectUnauthorized||this.rejectUnauthorized,perMessageDeflate:r.perMessageDeflate||this.perMessageDeflate,extraHeaders:r.extraHeaders||this.extraHeaders,forceNode:r.forceNode||this.forceNode,localAddress:r.localAddress||this.localAddress,requestTimeout:r.requestTimeout||this.requestTimeout,protocols:r.protocols||void 0});return n},n.prototype.open=function(){var t;if(this.rememberUpgrade&amp;&amp;n.priorWebsocketSuccess&amp;&amp;this.transports.indexOf(&quot;websocket&quot;)!==-1)t=&quot;websocket&quot;;else{if(0===this.transports.length){var e=this;return void setTimeout(function(){e.emit(&quot;error&quot;,&quot;No transports available&quot;)},0)}t=this.transports[0]}this.readyState=&quot;opening&quot;;try{t=this.createTransport(t)}catch(r){return this.transports.shift(),void this.open()}t.open(),this.setTransport(t)},n.prototype.setTransport=function(t){a(&quot;setting transport %s&quot;,t.name);var e=this;this.transport&amp;&amp;(a(&quot;clearing existing transport %s&quot;,this.transport.name),this.transport.removeAllListeners()),this.transport=t,t.on(&quot;drain&quot;,function(){e.onDrain()}).on(&quot;packet&quot;,function(t){e.onPacket(t)}).on(&quot;error&quot;,function(t){e.onError(t)}).on(&quot;close&quot;,function(){e.onClose(&quot;transport close&quot;)})},n.prototype.probe=function(t){function e(){if(f.onlyBinaryUpgrades){var e=!this.supportsBinary&amp;&amp;f.transport.supportsBinary;h=h||e}h||(a(&#39;probe transport &quot;%s&quot; opened&#39;,t),u.send([{type:&quot;ping&quot;,data:&quot;probe&quot;}]),u.once(&quot;packet&quot;,function(e){if(!h)if(&quot;pong&quot;===e.type&amp;&amp;&quot;probe&quot;===e.data){if(a(&#39;probe transport &quot;%s&quot; pong&#39;,t),f.upgrading=!0,f.emit(&quot;upgrading&quot;,u),!u)return;n.priorWebsocketSuccess=&quot;websocket&quot;===u.name,a(&#39;pausing current transport &quot;%s&quot;&#39;,f.transport.name),f.transport.pause(function(){h||&quot;closed&quot;!==f.readyState&amp;&amp;(a(&quot;changing transport and sending upgrade packet&quot;),p(),f.setTransport(u),u.send([{type:&quot;upgrade&quot;}]),f.emit(&quot;upgrade&quot;,u),u=null,f.upgrading=!1,f.flush())})}else{a(&#39;probe transport &quot;%s&quot; failed&#39;,t);var r=new Error(&quot;probe error&quot;);r.transport=u.name,f.emit(&quot;upgradeError&quot;,r)}}))}function r(){h||(h=!0,p(),u.close(),u=null)}function o(e){var n=new Error(&quot;probe error: &quot;+e);n.transport=u.name,r(),a(&#39;probe transport &quot;%s&quot; failed because of error: %s&#39;,t,e),f.emit(&quot;upgradeError&quot;,n)}function i(){o(&quot;transport closed&quot;)}function s(){o(&quot;socket closed&quot;)}function c(t){u&amp;&amp;t.name!==u.name&amp;&amp;(a(&#39;&quot;%s&quot; works - aborting &quot;%s&quot;&#39;,t.name,u.name),r())}function p(){u.removeListener(&quot;open&quot;,e),u.removeListener(&quot;error&quot;,o),u.removeListener(&quot;close&quot;,i),f.removeListener(&quot;close&quot;,s),f.removeListener(&quot;upgrading&quot;,c)}a(&#39;probing transport &quot;%s&quot;&#39;,t);var u=this.createTransport(t,{probe:1}),h=!1,f=this;n.priorWebsocketSuccess=!1,u.once(&quot;open&quot;,e),u.once(&quot;error&quot;,o),u.once(&quot;close&quot;,i),this.once(&quot;close&quot;,s),this.once(&quot;upgrading&quot;,c),u.open()},n.prototype.onOpen=function(){if(a(&quot;socket open&quot;),this.readyState=&quot;open&quot;,n.priorWebsocketSuccess=&quot;websocket&quot;===this.transport.name,this.emit(&quot;open&quot;),this.flush(),&quot;open&quot;===this.readyState&amp;&amp;this.upgrade&amp;&amp;this.transport.pause){a(&quot;starting upgrade probes&quot;);for(var t=0,e=this.upgrades.length;t&lt;e;t++)this.probe(this.upgrades[t])}},n.prototype.onPacket=function(t){if(&quot;opening&quot;===this.readyState||&quot;open&quot;===this.readyState||&quot;closing&quot;===this.readyState)switch(a(&#39;socket receive: type &quot;%s&quot;, data &quot;%s&quot;&#39;,t.type,t.data),this.emit(&quot;packet&quot;,t),this.emit(&quot;heartbeat&quot;),t.type){case&quot;open&quot;:this.onHandshake(h(t.data));break;case&quot;pong&quot;:this.setPing(),this.emit(&quot;pong&quot;);break;case&quot;error&quot;:var e=new Error(&quot;server error&quot;);e.code=t.data,this.onError(e);break;case&quot;message&quot;:this.emit(&quot;data&quot;,t.data),this.emit(&quot;message&quot;,t.data)}else a(&#39;packet received with socket readyState &quot;%s&quot;&#39;,this.readyState)},n.prototype.onHandshake=function(t){this.emit(&quot;handshake&quot;,t),this.id=t.sid,this.transport.query.sid=t.sid,this.upgrades=this.filterUpgrades(t.upgrades),this.pingInterval=t.pingInterval,this.pingTimeout=t.pingTimeout,this.onOpen(),&quot;closed&quot;!==this.readyState&amp;&amp;(this.setPing(),this.removeListener(&quot;heartbeat&quot;,this.onHeartbeat),this.on(&quot;heartbeat&quot;,this.onHeartbeat))},n.prototype.onHeartbeat=function(t){clearTimeout(this.pingTimeoutTimer);var e=this;e.pingTimeoutTimer=setTimeout(function(){&quot;closed&quot;!==e.readyState&amp;&amp;e.onClose(&quot;ping timeout&quot;)},t||e.pingInterval+e.pingTimeout)},n.prototype.setPing=function(){var t=this;clearTimeout(t.pingIntervalTimer),t.pingIntervalTimer=setTimeout(function(){a(&quot;writing ping packet - expecting pong within %sms&quot;,t.pingTimeout),t.ping(),t.onHeartbeat(t.pingTimeout)},t.pingInterval)},n.prototype.ping=function(){var t=this;this.sendPacket(&quot;ping&quot;,function(){t.emit(&quot;ping&quot;)})},n.prototype.onDrain=function(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,0===this.writeBuffer.length?this.emit(&quot;drain&quot;):this.flush()},n.prototype.flush=function(){&quot;closed&quot;!==this.readyState&amp;&amp;this.transport.writable&amp;&amp;!this.upgrading&amp;&amp;this.writeBuffer.length&amp;&amp;(a(&quot;flushing %d packets in socket&quot;,this.writeBuffer.length),this.transport.send(this.writeBuffer),this.prevBufferLen=this.writeBuffer.length,this.emit(&quot;flush&quot;))},n.prototype.write=n.prototype.send=function(t,e,r){return this.sendPacket(&quot;message&quot;,t,e,r),this},n.prototype.sendPacket=function(t,e,r,n){if(&quot;function&quot;==typeof e&amp;&amp;(n=e,e=void 0),&quot;function&quot;==typeof r&amp;&amp;(n=r,r=null),&quot;closing&quot;!==this.readyState&amp;&amp;&quot;closed&quot;!==this.readyState){r=r||{},r.compress=!1!==r.compress;var o={type:t,data:e,options:r};this.emit(&quot;packetCreate&quot;,o),this.writeBuffer.push(o),n&amp;&amp;this.once(&quot;flush&quot;,n),this.flush()}},n.prototype.close=function(){function t(){n.onClose(&quot;forced close&quot;),a(&quot;socket closing - telling transport to close&quot;),n.transport.close()}function e(){n.removeListener(&quot;upgrade&quot;,e),n.removeListener(&quot;upgradeError&quot;,e),t()}function r(){n.once(&quot;upgrade&quot;,e),n.once(&quot;upgradeError&quot;,e)}if(&quot;opening&quot;===this.readyState||&quot;open&quot;===this.readyState){this.readyState=&quot;closing&quot;;var n=this;this.writeBuffer.length?this.once(&quot;drain&quot;,function(){this.upgrading?r():t()}):this.upgrading?r():t()}return this},n.prototype.onError=function(t){a(&quot;socket error %j&quot;,t),n.priorWebsocketSuccess=!1,this.emit(&quot;error&quot;,t),this.onClose(&quot;transport error&quot;,t)},n.prototype.onClose=function(t,e){if(&quot;opening&quot;===this.readyState||&quot;open&quot;===this.readyState||&quot;closing&quot;===this.readyState){a(&#39;socket close with reason: &quot;%s&quot;&#39;,t);var r=this;clearTimeout(this.pingIntervalTimer),clearTimeout(this.pingTimeoutTimer),this.transport.removeAllListeners(&quot;close&quot;),this.transport.close(),this.transport.removeAllListeners(),this.readyState=&quot;closed&quot;,this.id=null,this.emit(&quot;close&quot;,t,e),r.writeBuffer=[],r.prevBufferLen=0}},n.prototype.filterUpgrades=function(t){for(var e=[],r=0,n=t.length;r&lt;n;r++)~c(this.transports,t[r])&amp;&amp;e.push(t[r]);return e}}).call(e,function(){return this}())},function(t,e,r){(function(t){function n(e){var r,n=!1,a=!1,c=!1!==e.jsonp;if(t.location){var p=&quot;https:&quot;===location.protocol,u=location.port;u||(u=p?443:80),n=e.hostname!==location.hostname||u!==e.port,a=e.secure!==p}if(e.xdomain=n,e.xscheme=a,r=new o(e),&quot;open&quot;in r&amp;&amp;!e.forceJSONP)return new i(e);if(!c)throw new Error(&quot;JSONP disabled&quot;);return new s(e)}var o=r(18),i=r(20),s=r(34),a=r(35);e.polling=n,e.websocket=a}).call(e,function(){return this}())},function(t,e,r){(function(e){var n=r(19);t.exports=function(t){var r=t.xdomain,o=t.xscheme,i=t.enablesXDR;try{if(&quot;undefined&quot;!=typeof XMLHttpRequest&amp;&amp;(!r||n))return new XMLHttpRequest;</td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line">}catch(s){}try{if(&quot;undefined&quot;!=typeof XDomainRequest&amp;&amp;!o&amp;&amp;i)return new XDomainRequest}catch(s){}if(!r)try{return new(e[[&quot;Active&quot;].concat(&quot;Object&quot;).join(&quot;X&quot;)])(&quot;Microsoft.XMLHTTP&quot;)}catch(s){}}}).call(e,function(){return this}())},function(t,e){try{t.exports=&quot;undefined&quot;!=typeof XMLHttpRequest&amp;&amp;&quot;withCredentials&quot;in new XMLHttpRequest}catch(r){t.exports=!1}},function(t,e,r){(function(e){function n(){}function o(t){if(c.call(this,t),this.requestTimeout=t.requestTimeout,this.extraHeaders=t.extraHeaders,e.location){var r=&quot;https:&quot;===location.protocol,n=location.port;n||(n=r?443:80),this.xd=t.hostname!==e.location.hostname||n!==t.port,this.xs=t.secure!==r}}function i(t){this.method=t.method||&quot;GET&quot;,this.uri=t.uri,this.xd=!!t.xd,this.xs=!!t.xs,this.async=!1!==t.async,this.data=void 0!==t.data?t.data:null,this.agent=t.agent,this.isBinary=t.isBinary,this.supportsBinary=t.supportsBinary,this.enablesXDR=t.enablesXDR,this.requestTimeout=t.requestTimeout,this.pfx=t.pfx,this.key=t.key,this.passphrase=t.passphrase,this.cert=t.cert,this.ca=t.ca,this.ciphers=t.ciphers,this.rejectUnauthorized=t.rejectUnauthorized,this.extraHeaders=t.extraHeaders,this.create()}function s(){for(var t in i.requests)i.requests.hasOwnProperty(t)&amp;&amp;i.requests[t].abort()}var a=r(18),c=r(21),p=r(8),u=r(32),h=r(3)(&quot;engine.io-client:polling-xhr&quot;);t.exports=o,t.exports.Request=i,u(o,c),o.prototype.supportsBinary=!0,o.prototype.request=function(t){return t=t||{},t.uri=this.uri(),t.xd=this.xd,t.xs=this.xs,t.agent=this.agent||!1,t.supportsBinary=this.supportsBinary,t.enablesXDR=this.enablesXDR,t.pfx=this.pfx,t.key=this.key,t.passphrase=this.passphrase,t.cert=this.cert,t.ca=this.ca,t.ciphers=this.ciphers,t.rejectUnauthorized=this.rejectUnauthorized,t.requestTimeout=this.requestTimeout,t.extraHeaders=this.extraHeaders,new i(t)},o.prototype.doWrite=function(t,e){var r=&quot;string&quot;!=typeof t&amp;&amp;void 0!==t,n=this.request({method:&quot;POST&quot;,data:t,isBinary:r}),o=this;n.on(&quot;success&quot;,e),n.on(&quot;error&quot;,function(t){o.onError(&quot;xhr post error&quot;,t)}),this.sendXhr=n},o.prototype.doPoll=function(){h(&quot;xhr poll&quot;);var t=this.request(),e=this;t.on(&quot;data&quot;,function(t){e.onData(t)}),t.on(&quot;error&quot;,function(t){e.onError(&quot;xhr poll error&quot;,t)}),this.pollXhr=t},p(i.prototype),i.prototype.create=function(){var t={agent:this.agent,xdomain:this.xd,xscheme:this.xs,enablesXDR:this.enablesXDR};t.pfx=this.pfx,t.key=this.key,t.passphrase=this.passphrase,t.cert=this.cert,t.ca=this.ca,t.ciphers=this.ciphers,t.rejectUnauthorized=this.rejectUnauthorized;var r=this.xhr=new a(t),n=this;try{h(&quot;xhr open %s: %s&quot;,this.method,this.uri),r.open(this.method,this.uri,this.async);try{if(this.extraHeaders){r.setDisableHeaderCheck&amp;&amp;r.setDisableHeaderCheck(!0);for(var o in this.extraHeaders)this.extraHeaders.hasOwnProperty(o)&amp;&amp;r.setRequestHeader(o,this.extraHeaders[o])}}catch(s){}if(&quot;POST&quot;===this.method)try{this.isBinary?r.setRequestHeader(&quot;Content-type&quot;,&quot;application/octet-stream&quot;):r.setRequestHeader(&quot;Content-type&quot;,&quot;text/plain;charset=UTF-8&quot;)}catch(s){}try{r.setRequestHeader(&quot;Accept&quot;,&quot;*/*&quot;)}catch(s){}&quot;withCredentials&quot;in r&amp;&amp;(r.withCredentials=!0),this.requestTimeout&amp;&amp;(r.timeout=this.requestTimeout),this.hasXDR()?(r.onload=function(){n.onLoad()},r.onerror=function(){n.onError(r.responseText)}):r.onreadystatechange=function(){if(2===r.readyState){var t;try{t=r.getResponseHeader(&quot;Content-Type&quot;)}catch(e){}&quot;application/octet-stream&quot;===t&amp;&amp;(r.responseType=&quot;arraybuffer&quot;)}4===r.readyState&amp;&amp;(200===r.status||1223===r.status?n.onLoad():setTimeout(function(){n.onError(r.status)},0))},h(&quot;xhr data %s&quot;,this.data),r.send(this.data)}catch(s){return void setTimeout(function(){n.onError(s)},0)}e.document&amp;&amp;(this.index=i.requestsCount++,i.requests[this.index]=this)},i.prototype.onSuccess=function(){this.emit(&quot;success&quot;),this.cleanup()},i.prototype.onData=function(t){this.emit(&quot;data&quot;,t),this.onSuccess()},i.prototype.onError=function(t){this.emit(&quot;error&quot;,t),this.cleanup(!0)},i.prototype.cleanup=function(t){if(&quot;undefined&quot;!=typeof this.xhr&amp;&amp;null!==this.xhr){if(this.hasXDR()?this.xhr.onload=this.xhr.onerror=n:this.xhr.onreadystatechange=n,t)try{this.xhr.abort()}catch(r){}e.document&amp;&amp;delete i.requests[this.index],this.xhr=null}},i.prototype.onLoad=function(){var t;try{var e;try{e=this.xhr.getResponseHeader(&quot;Content-Type&quot;)}catch(r){}t=&quot;application/octet-stream&quot;===e?this.xhr.response||this.xhr.responseText:this.xhr.responseText}catch(r){this.onError(r)}null!=t&amp;&amp;this.onData(t)},i.prototype.hasXDR=function(){return&quot;undefined&quot;!=typeof e.XDomainRequest&amp;&amp;!this.xs&amp;&amp;this.enablesXDR},i.prototype.abort=function(){this.cleanup()},i.requestsCount=0,i.requests={},e.document&amp;&amp;(e.attachEvent?e.attachEvent(&quot;onunload&quot;,s):e.addEventListener&amp;&amp;e.addEventListener(&quot;beforeunload&quot;,s,!1))}).call(e,function(){return this}())},function(t,e,r){function n(t){var e=t&amp;&amp;t.forceBase64;u&amp;&amp;!e||(this.supportsBinary=!1),o.call(this,t)}var o=r(22),i=r(31),s=r(23),a=r(32),c=r(33),p=r(3)(&quot;engine.io-client:polling&quot;);t.exports=n;var u=function(){var t=r(18),e=new t({xdomain:!1});return null!=e.responseType}();a(n,o),n.prototype.name=&quot;polling&quot;,n.prototype.doOpen=function(){this.poll()},n.prototype.pause=function(t){function e(){p(&quot;paused&quot;),r.readyState=&quot;paused&quot;,t()}var r=this;if(this.readyState=&quot;pausing&quot;,this.polling||!this.writable){var n=0;this.polling&amp;&amp;(p(&quot;we are currently polling - waiting to pause&quot;),n++,this.once(&quot;pollComplete&quot;,function(){p(&quot;pre-pause polling complete&quot;),--n||e()})),this.writable||(p(&quot;we are currently writing - waiting to pause&quot;),n++,this.once(&quot;drain&quot;,function(){p(&quot;pre-pause writing complete&quot;),--n||e()}))}else e()},n.prototype.poll=function(){p(&quot;polling&quot;),this.polling=!0,this.doPoll(),this.emit(&quot;poll&quot;)},n.prototype.onData=function(t){var e=this;p(&quot;polling got data %s&quot;,t);var r=function(t,r,n){return&quot;opening&quot;===e.readyState&amp;&amp;e.onOpen(),&quot;close&quot;===t.type?(e.onClose(),!1):void e.onPacket(t)};s.decodePayload(t,this.socket.binaryType,r),&quot;closed&quot;!==this.readyState&amp;&amp;(this.polling=!1,this.emit(&quot;pollComplete&quot;),&quot;open&quot;===this.readyState?this.poll():p(&#39;ignoring poll - transport state &quot;%s&quot;&#39;,this.readyState))},n.prototype.doClose=function(){function t(){p(&quot;writing close packet&quot;),e.write([{type:&quot;close&quot;}])}var e=this;&quot;open&quot;===this.readyState?(p(&quot;transport open - closing&quot;),t()):(p(&quot;transport not open - deferring close&quot;),this.once(&quot;open&quot;,t))},n.prototype.write=function(t){var e=this;this.writable=!1;var r=function(){e.writable=!0,e.emit(&quot;drain&quot;)};s.encodePayload(t,this.supportsBinary,function(t){e.doWrite(t,r)})},n.prototype.uri=function(){var t=this.query||{},e=this.secure?&quot;https&quot;:&quot;http&quot;,r=&quot;&quot;;!1!==this.timestampRequests&amp;&amp;(t[this.timestampParam]=c()),this.supportsBinary||t.sid||(t.b64=1),t=i.encode(t),this.port&amp;&amp;(&quot;https&quot;===e&amp;&amp;443!==Number(this.port)||&quot;http&quot;===e&amp;&amp;80!==Number(this.port))&amp;&amp;(r=&quot;:&quot;+this.port),t.length&amp;&amp;(t=&quot;?&quot;+t);var n=this.hostname.indexOf(&quot;:&quot;)!==-1;return e+&quot;://&quot;+(n?&quot;[&quot;+this.hostname+&quot;]&quot;:this.hostname)+r+this.path+t}},function(t,e,r){function n(t){this.path=t.path,this.hostname=t.hostname,this.port=t.port,this.secure=t.secure,this.query=t.query,this.timestampParam=t.timestampParam,this.timestampRequests=t.timestampRequests,this.readyState=&quot;&quot;,this.agent=t.agent||!1,this.socket=t.socket,this.enablesXDR=t.enablesXDR,this.pfx=t.pfx,this.key=t.key,this.passphrase=t.passphrase,this.cert=t.cert,this.ca=t.ca,this.ciphers=t.ciphers,this.rejectUnauthorized=t.rejectUnauthorized,this.forceNode=t.forceNode,this.extraHeaders=t.extraHeaders,this.localAddress=t.localAddress}var o=r(23),i=r(8);t.exports=n,i(n.prototype),n.prototype.onError=function(t,e){var r=new Error(t);return r.type=&quot;TransportError&quot;,r.description=e,this.emit(&quot;error&quot;,r),this},n.prototype.open=function(){return&quot;closed&quot;!==this.readyState&amp;&amp;&quot;&quot;!==this.readyState||(this.readyState=&quot;opening&quot;,this.doOpen()),this},n.prototype.close=function(){return&quot;opening&quot;!==this.readyState&amp;&amp;&quot;open&quot;!==this.readyState||(this.doClose(),this.onClose()),this},n.prototype.send=function(t){if(&quot;open&quot;!==this.readyState)throw new Error(&quot;Transport not open&quot;);this.write(t)},n.prototype.onOpen=function(){this.readyState=&quot;open&quot;,this.writable=!0,this.emit(&quot;open&quot;)},n.prototype.onData=function(t){var e=o.decodePacket(t,this.socket.binaryType);this.onPacket(e)},n.prototype.onPacket=function(t){this.emit(&quot;packet&quot;,t)},n.prototype.onClose=function(){this.readyState=&quot;closed&quot;,this.emit(&quot;close&quot;)}},function(t,e,r){(function(t){function n(t,r){var n=&quot;b&quot;+e.packets[t.type]+t.data.data;return r(n)}function o(t,r,n){if(!r)return e.encodeBase64Packet(t,n);var o=t.data,i=new Uint8Array(o),s=new Uint8Array(1+o.byteLength);s[0]=v[t.type];for(var a=0;a&lt;i.length;a++)s[a+1]=i[a];return n(s.buffer)}function i(t,r,n){if(!r)return e.encodeBase64Packet(t,n);var o=new FileReader;return o.onload=function(){t.data=o.result,e.encodePacket(t,r,!0,n)},o.readAsArrayBuffer(t.data)}function s(t,r,n){if(!r)return e.encodeBase64Packet(t,n);if(g)return i(t,r,n);var o=new Uint8Array(1);o[0]=v[t.type];var s=new k([o.buffer,t.data]);return n(s)}function a(t){try{t=d.decode(t,{strict:!1})}catch(e){return!1}return t}function c(t,e,r){for(var n=new Array(t.length),o=l(t.length,r),i=function(t,r,o){e(r,function(e,r){n[t]=r,o(e,n)})},s=0;s&lt;t.length;s++)i(s,t[s],o)}var p,u=r(24),h=r(9),f=r(25),l=r(26),d=r(27);t&amp;&amp;t.ArrayBuffer&amp;&amp;(p=r(29));var y=&quot;undefined&quot;!=typeof navigator&amp;&amp;/Android/i.test(navigator.userAgent),m=&quot;undefined&quot;!=typeof navigator&amp;&amp;/PhantomJS/i.test(navigator.userAgent),g=y||m;e.protocol=3;var v=e.packets={open:0,close:1,ping:2,pong:3,message:4,upgrade:5,noop:6},b=u(v),w={type:&quot;error&quot;,data:&quot;parser error&quot;},k=r(30);e.encodePacket=function(e,r,i,a){&quot;function&quot;==typeof r&amp;&amp;(a=r,r=!1),&quot;function&quot;==typeof i&amp;&amp;(a=i,i=null);var c=void 0===e.data?void 0:e.data.buffer||e.data;if(t.ArrayBuffer&amp;&amp;c instanceof ArrayBuffer)return o(e,r,a);if(k&amp;&amp;c instanceof t.Blob)return s(e,r,a);if(c&amp;&amp;c.base64)return n(e,a);var p=v[e.type];return void 0!==e.data&amp;&amp;(p+=i?d.encode(String(e.data),{strict:!1}):String(e.data)),a(&quot;&quot;+p)},e.encodeBase64Packet=function(r,n){var o=&quot;b&quot;+e.packets[r.type];if(k&amp;&amp;r.data instanceof t.Blob){var i=new FileReader;return i.onload=function(){var t=i.result.split(&quot;,&quot;)[1];n(o+t)},i.readAsDataURL(r.data)}var s;try{s=String.fromCharCode.apply(null,new Uint8Array(r.data))}catch(a){for(var c=new Uint8Array(r.data),p=new Array(c.length),u=0;u&lt;c.length;u++)p[u]=c[u];s=String.fromCharCode.apply(null,p)}return o+=t.btoa(s),n(o)},e.decodePacket=function(t,r,n){if(void 0===t)return w;if(&quot;string&quot;==typeof t){if(&quot;b&quot;===t.charAt(0))return e.decodeBase64Packet(t.substr(1),r);if(n&amp;&amp;(t=a(t),t===!1))return w;var o=t.charAt(0);return Number(o)==o&amp;&amp;b[o]?t.length&gt;1?{type:b[o],data:t.substring(1)}:{type:b[o]}:w}var i=new Uint8Array(t),o=i[0],s=f(t,1);return k&amp;&amp;&quot;blob&quot;===r&amp;&amp;(s=new k([s])),{type:b[o],data:s}},e.decodeBase64Packet=function(t,e){var r=b[t.charAt(0)];if(!p)return{type:r,data:{base64:!0,data:t.substr(1)}};var n=p.decode(t.substr(1));return&quot;blob&quot;===e&amp;&amp;k&amp;&amp;(n=new k([n])),{type:r,data:n}},e.encodePayload=function(t,r,n){function o(t){return t.length+&quot;:&quot;+t}function i(t,n){e.encodePacket(t,!!s&amp;&amp;r,!1,function(t){n(null,o(t))})}&quot;function&quot;==typeof r&amp;&amp;(n=r,r=null);var s=h(t);return r&amp;&amp;s?k&amp;&amp;!g?e.encodePayloadAsBlob(t,n):e.encodePayloadAsArrayBuffer(t,n):t.length?void c(t,i,function(t,e){return n(e.join(&quot;&quot;))}):n(&quot;0:&quot;)},e.decodePayload=function(t,r,n){if(&quot;string&quot;!=typeof t)return e.decodePayloadAsBinary(t,r,n);&quot;function&quot;==typeof r&amp;&amp;(n=r,r=null);var o;if(&quot;&quot;===t)return n(w,0,1);for(var i,s,a=&quot;&quot;,c=0,p=t.length;c&lt;p;c++){var u=t.charAt(c);if(&quot;:&quot;===u){if(&quot;&quot;===a||a!=(i=Number(a)))return n(w,0,1);if(s=t.substr(c+1,i),a!=s.length)return n(w,0,1);if(s.length){if(o=e.decodePacket(s,r,!1),w.type===o.type&amp;&amp;w.data===o.data)return n(w,0,1);var h=n(o,c+i,p);if(!1===h)return}c+=i,a=&quot;&quot;}else a+=u}return&quot;&quot;!==a?n(w,0,1):void 0},e.encodePayloadAsArrayBuffer=function(t,r){function n(t,r){e.encodePacket(t,!0,!0,function(t){return r(null,t)})}return t.length?void c(t,n,function(t,e){var n=e.reduce(function(t,e){var r;return r=&quot;string&quot;==typeof e?e.length:e.byteLength,t+r.toString().length+r+2},0),o=new Uint8Array(n),i=0;return e.forEach(function(t){var e=&quot;string&quot;==typeof t,r=t;if(e){for(var n=new Uint8Array(t.length),s=0;s&lt;t.length;s++)n[s]=t.charCodeAt(s);r=n.buffer}e?o[i++]=0:o[i++]=1;for(var a=r.byteLength.toString(),s=0;s&lt;a.length;s++)o[i++]=parseInt(a[s]);o[i++]=255;for(var n=new Uint8Array(r),s=0;s&lt;n.length;s++)o[i++]=n[s]}),r(o.buffer)}):r(new ArrayBuffer(0))},e.encodePayloadAsBlob=function(t,r){function n(t,r){e.encodePacket(t,!0,!0,function(t){var e=new Uint8Array(1);if(e[0]=1,&quot;string&quot;==typeof t){for(var n=new Uint8Array(t.length),o=0;o&lt;t.length;o++)n[o]=t.charCodeAt(o);t=n.buffer,e[0]=0}for(var i=t instanceof ArrayBuffer?t.byteLength:t.size,s=i.toString(),a=new Uint8Array(s.length+1),o=0;o&lt;s.length;o++)a[o]=parseInt(s[o]);if(a[s.length]=255,k){var c=new k([e.buffer,a.buffer,t]);r(null,c)}})}c(t,n,function(t,e){return r(new k(e))})},e.decodePayloadAsBinary=function(t,r,n){&quot;function&quot;==typeof r&amp;&amp;(n=r,r=null);for(var o=t,i=[];o.byteLength&gt;0;){for(var s=new Uint8Array(o),a=0===s[0],c=&quot;&quot;,p=1;255!==s[p];p++){if(c.length&gt;310)return n(w,0,1);c+=s[p]}o=f(o,2+c.length),c=parseInt(c);var u=f(o,0,c);if(a)try{u=String.fromCharCode.apply(null,new Uint8Array(u))}catch(h){var l=new Uint8Array(u);u=&quot;&quot;;for(var p=0;p&lt;l.length;p++)u+=String.fromCharCode(l[p])}i.push(u),o=f(o,c)}var d=i.length;i.forEach(function(t,o){n(e.decodePacket(t,r,!0),o,d)})}}).call(e,function(){return this}())},function(t,e){t.exports=Object.keys||function(t){var e=[],r=Object.prototype.hasOwnProperty;for(var n in t)r.call(t,n)&amp;&amp;e.push(n);return e}},function(t,e){t.exports=function(t,e,r){var n=t.byteLength;if(e=e||0,r=r||n,t.slice)return t.slice(e,r);if(e&lt;0&amp;&amp;(e+=n),r&lt;0&amp;&amp;(r+=n),r&gt;n&amp;&amp;(r=n),e&gt;=n||e&gt;=r||0===n)return new ArrayBuffer(0);for(var o=new Uint8Array(t),i=new Uint8Array(r-e),s=e,a=0;s&lt;r;s++,a++)i[a]=o[s];return i.buffer}},function(t,e){function r(t,e,r){function o(t,n){if(o.count&lt;=0)throw new Error(&quot;after called too many times&quot;);--o.count,t?(i=!0,e(t),e=r):0!==o.count||i||e(null,n)}var i=!1;return r=r||n,o.count=t,0===t?e():o}function n(){}t.exports=r},function(t,e,r){var n;(function(t,o){!function(i){function s(t){for(var e,r,n=[],o=0,i=t.length;o&lt;i;)e=t.charCodeAt(o++),e&gt;=55296&amp;&amp;e&lt;=56319&amp;&amp;o&lt;i?(r=t.charCodeAt(o++),56320==(64512&amp;r)?n.push(((1023&amp;e)&lt;&lt;10)+(1023&amp;r)+65536):(n.push(e),o--)):n.push(e);return n}function a(t){for(var e,r=t.length,n=-1,o=&quot;&quot;;++n&lt;r;)e=t[n],e&gt;65535&amp;&amp;(e-=65536,o+=w(e&gt;&gt;&gt;10&amp;1023|55296),e=56320|1023&amp;e),o+=w(e);return o}function c(t,e){if(t&gt;=55296&amp;&amp;t&lt;=57343){if(e)throw Error(&quot;Lone surrogate U+&quot;+t.toString(16).toUpperCase()+&quot; is not a scalar value&quot;);return!1}return!0}function p(t,e){return w(t&gt;&gt;e&amp;63|128)}function u(t,e){if(0==(4294967168&amp;t))return w(t);var r=&quot;&quot;;return 0==(4294965248&amp;t)?r=w(t&gt;&gt;6&amp;31|192):0==(4294901760&amp;t)?(c(t,e)||(t=65533),r=w(t&gt;&gt;12&amp;15|224),r+=p(t,6)):0==(4292870144&amp;t)&amp;&amp;(r=w(t&gt;&gt;18&amp;7|240),r+=p(t,12),r+=p(t,6)),r+=w(63&amp;t|128)}function h(t,e){e=e||{};for(var r,n=!1!==e.strict,o=s(t),i=o.length,a=-1,c=&quot;&quot;;++a&lt;i;)r=o[a],c+=u(r,n);return c}function f(){if(b&gt;=v)throw Error(&quot;Invalid byte index&quot;);var t=255&amp;g[b];if(b++,128==(192&amp;t))return 63&amp;t;throw Error(&quot;Invalid continuation byte&quot;)}function l(t){var e,r,n,o,i;if(b&gt;v)throw Error(&quot;Invalid byte index&quot;);if(b==v)return!1;if(e=255&amp;g[b],b++,0==(128&amp;e))return e;if(192==(224&amp;e)){if(r=f(),i=(31&amp;e)&lt;&lt;6|r,i&gt;=128)return i;throw Error(&quot;Invalid continuation byte&quot;)}if(224==(240&amp;e)){if(r=f(),n=f(),i=(15&amp;e)&lt;&lt;12|r&lt;&lt;6|n,i&gt;=2048)return c(i,t)?i:65533;throw Error(&quot;Invalid continuation byte&quot;)}if(240==(248&amp;e)&amp;&amp;(r=f(),n=f(),o=f(),i=(7&amp;e)&lt;&lt;18|r&lt;&lt;12|n&lt;&lt;6|o,i&gt;=65536&amp;&amp;i&lt;=1114111))return i;throw Error(&quot;Invalid UTF-8 detected&quot;)}function d(t,e){e=e||{};var r=!1!==e.strict;g=s(t),v=g.length,b=0;for(var n,o=[];(n=l(r))!==!1;)o.push(n);return a(o)}var y=&quot;object&quot;==typeof e&amp;&amp;e,m=(&quot;object&quot;==typeof t&amp;&amp;t&amp;&amp;t.exports==y&amp;&amp;t,&quot;object&quot;==typeof o&amp;&amp;o);m.global!==m&amp;&amp;m.window!==m||(i=m);var g,v,b,w=String.fromCharCode,k={version:&quot;2.1.2&quot;,encode:h,decode:d};n=function(){return k}.call(e,r,e,t),!(void 0!==n&amp;&amp;(t.exports=n))}(this)}).call(e,r(28)(t),function(){return this}())},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children=[],t.webpackPolyfill=1),t}},function(t,e){!function(){&quot;use strict&quot;;for(var t=&quot;ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/&quot;,r=new Uint8Array(256),n=0;n&lt;t.length;n++)r[t.charCodeAt(n)]=n;e.encode=function(e){var r,n=new Uint8Array(e),o=n.length,i=&quot;&quot;;for(r=0;r&lt;o;r+=3)i+=t[n[r]&gt;&gt;2],i+=t[(3&amp;n[r])&lt;&lt;4|n[r+1]&gt;&gt;4],i+=t[(15&amp;n[r+1])&lt;&lt;2|n[r+2]&gt;&gt;6],i+=t[63&amp;n[r+2]];return o%3===2?i=i.substring(0,i.length-1)+&quot;=&quot;:o%3===1&amp;&amp;(i=i.substring(0,i.length-2)+&quot;==&quot;),i},e.decode=function(t){var e,n,o,i,s,a=.75*t.length,c=t.length,p=0;&quot;=&quot;===t[t.length-1]&amp;&amp;(a--,&quot;=&quot;===t[t.length-2]&amp;&amp;a--);var u=new ArrayBuffer(a),h=new Uint8Array(u);for(e=0;e&lt;c;e+=4)n=r[t.charCodeAt(e)],o=r[t.charCodeAt(e+1)],i=r[t.charCodeAt(e+2)],s=r[t.charCodeAt(e+3)],h[p++]=n&lt;&lt;2|o&gt;&gt;4,h[p++]=(15&amp;o)&lt;&lt;4|i&gt;&gt;2,h[p++]=(3&amp;i)&lt;&lt;6|63&amp;s;return u}}()},function(t,e){(function(e){function r(t){for(var e=0;e&lt;t.length;e++){var r=t[e];if(r.buffer instanceof ArrayBuffer){var n=r.buffer;if(r.byteLength!==n.byteLength){var o=new Uint8Array(r.byteLength);o.set(new Uint8Array(n,r.byteOffset,r.byteLength)),n=o.buffer}t[e]=n}}}function n(t,e){e=e||{};var n=new i;r(t);for(var o=0;o&lt;t.length;o++)n.append(t[o]);return e.type?n.getBlob(e.type):n.getBlob()}function o(t,e){return r(t),new Blob(t,e||{})}var i=e.BlobBuilder||e.WebKitBlobBuilder||e.MSBlobBuilder||e.MozBlobBuilder,s=function(){try{var t=new Blob([&quot;hi&quot;]);return 2===t.size}catch(e){return!1}}(),a=s&amp;&amp;function(){try{var t=new Blob([new Uint8Array([1,2])]);return 2===t.size}catch(e){return!1}}(),c=i&amp;&amp;i.prototype.append&amp;&amp;i.prototype.getBlob;t.exports=function(){return s?a?e.Blob:o:c?n:void 0}()}).call(e,function(){return this}())},function(t,e){e.encode=function(t){var e=&quot;&quot;;for(var r in t)t.hasOwnProperty(r)&amp;&amp;(e.length&amp;&amp;(e+=&quot;&amp;&quot;),e+=encodeURIComponent(r)+&quot;=&quot;+encodeURIComponent(t[r]));return e},e.decode=function(t){for(var e={},r=t.split(&quot;&amp;&quot;),n=0,o=r.length;n&lt;o;n++){var i=r[n].split(&quot;=&quot;);e[decodeURIComponent(i[0])]=decodeURIComponent(i[1])}return e}},function(t,e){t.exports=function(t,e){var r=function(){};r.prototype=e.prototype,t.prototype=new r,t.prototype.constructor=t}},function(t,e){&quot;use strict&quot;;function r(t){var e=&quot;&quot;;do e=s[t%a]+e,t=Math.floor(t/a);while(t&gt;0);return e}function n(t){var e=0;for(u=0;u&lt;t.length;u++)e=e*a+c[t.charAt(u)];return e}function o(){var t=r(+new Date);return t!==i?(p=0,i=t):t+&quot;.&quot;+r(p++)}for(var i,s=&quot;0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_&quot;.split(&quot;&quot;),a=64,c={},p=0,u=0;u&lt;a;u++)c[s[u]]=u;o.encode=r,o.decode=n,t.exports=o},function(t,e,r){(function(e){function n(){}function o(t){i.call(this,t),this.query=this.query||{},a||(e.___eio||(e.___eio=[]),a=e.___eio),this.index=a.length;var r=this;a.push(function(t){r.onData(t)}),this.query.j=this.index,e.document&amp;&amp;e.addEventListener&amp;&amp;e.addEventListener(&quot;beforeunload&quot;,function(){r.script&amp;&amp;(r.script.onerror=n)},!1)}var i=r(21),s=r(32);t.exports=o;var a,c=/\n/g,p=/\\n/g;s(o,i),o.prototype.supportsBinary=!1,o.prototype.doClose=function(){this.script&amp;&amp;(this.script.parentNode.removeChild(this.script),this.script=null),this.form&amp;&amp;(this.form.parentNode.removeChild(this.form),this.form=null,this.iframe=null),i.prototype.doClose.call(this)},o.prototype.doPoll=function(){var t=this,e=document.createElement(&quot;script&quot;);this.script&amp;&amp;(this.script.parentNode.removeChild(this.script),this.script=null),e.async=!0,e.src=this.uri(),e.onerror=function(e){t.onError(&quot;jsonp poll error&quot;,e)};var r=document.getElementsByTagName(&quot;script&quot;)[0];r?r.parentNode.insertBefore(e,r):(document.head||document.body).appendChild(e),this.script=e;var n=&quot;undefined&quot;!=typeof navigator&amp;&amp;/gecko/i.test(navigator.userAgent);n&amp;&amp;setTimeout(function(){var t=document.createElement(&quot;iframe&quot;);document.body.appendChild(t),document.body.removeChild(t)},100)},o.prototype.doWrite=function(t,e){function r(){n(),e()}function n(){if(o.iframe)try{o.form.removeChild(o.iframe)}catch(t){o.onError(&quot;jsonp polling iframe removal error&quot;,t)}try{var e=&#39;&lt;iframe src=&quot;javascript:0&quot; name=&quot;&#39;+o.iframeId+&#39;&quot;&gt;&#39;;i=document.createElement(e)}catch(t){i=document.createElement(&quot;iframe&quot;),i.name=o.iframeId,i.src=&quot;javascript:0&quot;}i.id=o.iframeId,o.form.appendChild(i),o.iframe=i}var o=this;if(!this.form){var i,s=document.createElement(&quot;form&quot;),a=document.createElement(&quot;textarea&quot;),u=this.iframeId=&quot;eio_iframe_&quot;+this.index;s.className=&quot;socketio&quot;,s.style.position=&quot;absolute&quot;,s.style.top=&quot;-1000px&quot;,s.style.left=&quot;-1000px&quot;,s.target=u,s.method=&quot;POST&quot;,s.setAttribute(&quot;accept-charset&quot;,&quot;utf-8&quot;),a.name=&quot;d&quot;,s.appendChild(a),document.body.appendChild(s),this.form=s,this.area=a}this.form.action=this.uri(),n(),t=t.replace(p,&quot;\\\n&quot;),this.area.value=t.replace(c,&quot;\\n&quot;);try{this.form.submit()}catch(h){}this.iframe.attachEvent?this.iframe.onreadystatechange=function(){&quot;complete&quot;===o.iframe.readyState&amp;&amp;r()}:this.iframe.onload=r}}).call(e,function(){return this}())},function(t,e,r){(function(e){function n(t){var e=t&amp;&amp;t.forceBase64;e&amp;&amp;(this.supportsBinary=!1),this.perMessageDeflate=t.perMessageDeflate,this.usingBrowserWebSocket=h&amp;&amp;!t.forceNode,this.protocols=t.protocols,this.usingBrowserWebSocket||(l=o),i.call(this,t)}var o,i=r(22),s=r(23),a=r(31),c=r(32),p=r(33),u=r(3)(&quot;engine.io-client:websocket&quot;),h=e.WebSocket||e.MozWebSocket;if(&quot;undefined&quot;==typeof window)try{o=r(36)}catch(f){}var l=h;l||&quot;undefined&quot;!=typeof window||(l=o),t.exports=n,c(n,i),n.prototype.name=&quot;websocket&quot;,n.prototype.supportsBinary=!0,n.prototype.doOpen=function(){if(this.check()){var t=this.uri(),e=this.protocols,r={agent:this.agent,perMessageDeflate:this.perMessageDeflate};r.pfx=this.pfx,r.key=this.key,r.passphrase=this.passphrase,r.cert=this.cert,r.ca=this.ca,r.ciphers=this.ciphers,r.rejectUnauthorized=this.rejectUnauthorized,this.extraHeaders&amp;&amp;(r.headers=this.extraHeaders),this.localAddress&amp;&amp;(r.localAddress=this.localAddress);try{this.ws=this.usingBrowserWebSocket?e?new l(t,e):new l(t):new l(t,e,r)}catch(n){return this.emit(&quot;error&quot;,n)}void 0===this.ws.binaryType&amp;&amp;(this.supportsBinary=!1),this.ws.supports&amp;&amp;this.ws.supports.binary?(this.supportsBinary=!0,this.ws.binaryType=&quot;nodebuffer&quot;):this.ws.binaryType=&quot;arraybuffer&quot;,this.addEventListeners()}},n.prototype.addEventListeners=function(){var t=this;this.ws.onopen=function(){t.onOpen()},this.ws.onclose=function(){t.onClose()},this.ws.onmessage=function(e){t.onData(e.data)},this.ws.onerror=function(e){t.onError(&quot;websocket error&quot;,e)}},n.prototype.write=function(t){function r(){n.emit(&quot;flush&quot;),setTimeout(function(){n.writable=!0,n.emit(&quot;drain&quot;)},0)}var n=this;this.writable=!1;for(var o=t.length,i=0,a=o;i&lt;a;i++)!function(t){s.encodePacket(t,n.supportsBinary,function(i){if(!n.usingBrowserWebSocket){var s={};if(t.options&amp;&amp;(s.compress=t.options.compress),n.perMessageDeflate){var a=&quot;string&quot;==typeof i?e.Buffer.byteLength(i):i.length;a&lt;n.perMessageDeflate.threshold&amp;&amp;(s.compress=!1)}}try{n.usingBrowserWebSocket?n.ws.send(i):n.ws.send(i,s)}catch(c){u(&quot;websocket closed before onclose event&quot;)}--o||r()})}(t[i])},n.prototype.onClose=function(){i.prototype.onClose.call(this)},n.prototype.doClose=function(){&quot;undefined&quot;!=typeof this.ws&amp;&amp;this.ws.close()},n.prototype.uri=function(){var t=this.query||{},e=this.secure?&quot;wss&quot;:&quot;ws&quot;,r=&quot;&quot;;this.port&amp;&amp;(&quot;wss&quot;===e&amp;&amp;443!==Number(this.port)||&quot;ws&quot;===e&amp;&amp;80!==Number(this.port))&amp;&amp;(r=&quot;:&quot;+this.port),this.timestampRequests&amp;&amp;(t[this.timestampParam]=p()),this.supportsBinary||(t.b64=1),t=a.encode(t),t.length&amp;&amp;(t=&quot;?&quot;+t);var n=this.hostname.indexOf(&quot;:&quot;)!==-1;return e+&quot;://&quot;+(n?&quot;[&quot;+this.hostname+&quot;]&quot;:this.hostname)+r+this.path+t},n.prototype.check=function(){return!(!l||&quot;__initialize&quot;in l&amp;&amp;this.name===n.prototype.name)}}).call(e,function(){return this}())},function(t,e){},function(t,e){var r=[].indexOf;t.exports=function(t,e){if(r)return t.indexOf(e);for(var n=0;n&lt;t.length;++n)if(t[n]===e)return n;return-1}},function(t,e){(function(e){var r=/^[\],:{}\s]*$/,n=/\\(?:[&quot;\\\/bfnrt]|u[0-9a-fA-F]{4})/g,o=/&quot;[^&quot;\\\n\r]*&quot;|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,i=/(?:^|:|,)(?:\s*\[)+/g,s=/^\s+/,a=/\s+$/;t.exports=function(t){return&quot;string&quot;==typeof t&amp;&amp;t?(t=t.replace(s,&quot;&quot;).replace(a,&quot;&quot;),e.JSON&amp;&amp;JSON.parse?JSON.parse(t):r.test(t.replace(n,&quot;@&quot;).replace(o,&quot;]&quot;).replace(i,&quot;&quot;))?new Function(&quot;return &quot;+t)():void 0):null}}).call(e,function(){return this}())},function(t,e,r){&quot;use strict&quot;;function n(t,e,r){this.io=t,this.nsp=e,this.json=this,this.ids=0,this.acks={},this.receiveBuffer=[],this.sendBuffer=[],this.connected=!1,this.disconnected=!0,r&amp;&amp;r.query&amp;&amp;(this.query=r.query),this.io.autoConnect&amp;&amp;this.open()}var o=r(7),i=r(8),s=r(40),a=r(41),c=r(42),p=r(3)(&quot;socket.io-client:socket&quot;);t.exports=e=n;var u={connect:1,connect_error:1,connect_timeout:1,connecting:1,disconnect:1,error:1,reconnect:1,reconnect_attempt:1,reconnect_failed:1,reconnect_error:1,reconnecting:1,ping:1,pong:1},h=i.prototype.emit;i(n.prototype),n.prototype.subEvents=function(){if(!this.subs){var t=this.io;this.subs=[a(t,&quot;open&quot;,c(this,&quot;onopen&quot;)),a(t,&quot;packet&quot;,c(this,&quot;onpacket&quot;)),a(t,&quot;close&quot;,c(this,&quot;onclose&quot;))]}},n.prototype.open=n.prototype.connect=function(){return this.connected?this:(this.subEvents(),this.io.open(),&quot;open&quot;===this.io.readyState&amp;&amp;this.onopen(),this.emit(&quot;connecting&quot;),this)},n.prototype.send=function(){var t=s(arguments);return t.unshift(&quot;message&quot;),this.emit.apply(this,t),this},n.prototype.emit=function(t){if(u.hasOwnProperty(t))return h.apply(this,arguments),this;var e=s(arguments),r={type:o.EVENT,data:e};return r.options={},r.options.compress=!this.flags||!1!==this.flags.compress,&quot;function&quot;==typeof e[e.length-1]&amp;&amp;(p(&quot;emitting packet with ack id %d&quot;,this.ids),this.acks[this.ids]=e.pop(),r.id=this.ids++),this.connected?this.packet(r):this.sendBuffer.push(r),delete this.flags,this},n.prototype.packet=function(t){t.nsp=this.nsp,this.io.packet(t)},n.prototype.onopen=function(){p(&quot;transport is open - connecting&quot;),&quot;/&quot;!==this.nsp&amp;&amp;(this.query?this.packet({type:o.CONNECT,query:this.query}):this.packet({type:o.CONNECT}))},n.prototype.onclose=function(t){p(&quot;close (%s)&quot;,t),this.connected=!1,this.disconnected=!0,delete this.id,this.emit(&quot;disconnect&quot;,t)},n.prototype.onpacket=function(t){if(t.nsp===this.nsp)switch(t.type){case o.CONNECT:this.onconnect();break;case o.EVENT:this.onevent(t);break;case o.BINARY_EVENT:this.onevent(t);break;case o.ACK:this.onack(t);break;case o.BINARY_ACK:this.onack(t);break;case o.DISCONNECT:this.ondisconnect();break;case o.ERROR:this.emit(&quot;error&quot;,t.data)}},n.prototype.onevent=function(t){var e=t.data||[];p(&quot;emitting event %j&quot;,e),null!=t.id&amp;&amp;(p(&quot;attaching ack callback to event&quot;),e.push(this.ack(t.id))),this.connected?h.apply(this,e):this.receiveBuffer.push(e)},n.prototype.ack=function(t){var e=this,r=!1;return function(){if(!r){r=!0;var n=s(arguments);p(&quot;sending ack %j&quot;,n),e.packet({type:o.ACK,id:t,data:n})}}},n.prototype.onack=function(t){var e=this.acks[t.id];&quot;function&quot;==typeof e?(p(&quot;calling ack %s with %j&quot;,t.id,t.data),e.apply(this,t.data),delete this.acks[t.id]):p(&quot;bad ack %s&quot;,t.id)},n.prototype.onconnect=function(){this.connected=!0,this.disconnected=!1,this.emit(&quot;connect&quot;),this.emitBuffered()},n.prototype.emitBuffered=function(){var t;for(t=0;t&lt;this.receiveBuffer.length;t++)h.apply(this,this.receiveBuffer[t]);for(this.receiveBuffer=[],t=0;t&lt;this.sendBuffer.length;t++)this.packet(this.sendBuffer[t]);this.sendBuffer=[]},n.prototype.ondisconnect=function(){p(&quot;server disconnect (%s)&quot;,this.nsp),this.destroy(),this.onclose(&quot;io server disconnect&quot;)},n.prototype.destroy=function(){if(this.subs){for(var t=0;t&lt;this.subs.length;t++)this.subs[t].destroy();this.subs=null}this.io.destroy(this)},n.prototype.close=n.prototype.disconnect=function(){return this.connected&amp;&amp;(p(&quot;performing disconnect (%s)&quot;,this.nsp),this.packet({type:o.DISCONNECT})),this.destroy(),this.connected&amp;&amp;this.onclose(&quot;io client disconnect&quot;),this},n.prototype.compress=function(t){return this.flags=this.flags||{},this.flags.compress=t,this}},function(t,e){function r(t,e){var r=[];e=e||0;for(var n=e||0;n&lt;t.length;n++)r[n-e]=t[n];return r}t.exports=r},function(t,e){&quot;use strict&quot;;function r(t,e,r){return t.on(e,r),{destroy:function(){t.removeListener(e,r)}}}t.exports=r},function(t,e){var r=[].slice;t.exports=function(t,e){if(&quot;string&quot;==typeof e&amp;&amp;(e=t[e]),&quot;function&quot;!=typeof e)throw new Error(&quot;bind() requires a function&quot;);var n=r.call(arguments,2);return function(){return e.apply(t,n.concat(r.call(arguments)))}}},function(t,e){function r(t){t=t||{},this.ms=t.min||100,this.max=t.max||1e4,this.factor=t.factor||2,this.jitter=t.jitter&gt;0&amp;&amp;t.jitter&lt;=1?t.jitter:0,this.attempts=0}t.exports=r,r.prototype.duration=function(){var t=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),r=Math.floor(e*this.jitter*t);t=0==(1&amp;Math.floor(10*e))?t-r:t+r}return 0|Math.min(t,this.max)},r.prototype.reset=function(){this.attempts=0},r.prototype.setMin=function(t){this.ms=t},r.prototype.setMax=function(t){this.max=t},r.prototype.setJitter=function(t){this.jitter=t}}])});</td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line">//# sourceMappingURL=socket.io.js.map</td>
      </tr>
</table>

  </div>

</div>

<button type="button" data-facebox="#jump-to-line" data-facebox-class="linejump" data-hotkey="l" class="d-none">Jump to Line</button>
<div id="jump-to-line" style="display:none">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="form-control linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>


  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>

    </div>
  </div>

  </div>

      
<div class="container site-footer-container">
  <div class="site-footer " role="contentinfo">
    <ul class="site-footer-links float-right">
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact GitHub</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage" class="site-footer-mark" title="GitHub">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2017 <span title="0.11256s from github-fe-bc3c088.cp1-iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



  

  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
    You can't perform that action at this time.
  </div>


    <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/compat-8a4318ffea09a0cdb8214b76cf2926b9f6a0ced318a317bed419db19214c690d.js"></script>
    <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-5fe43fc6a9e5120c427334a38e9a7601418682a33981c073851434a7e1005049.js"></script>
    <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-f5fdc557107f718a5192c173d8f6248b1a6afa7578e2d2522f323f81c99c0b9b.js"></script>
    
    
    
    
  <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner d-none">
    <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
  </div>
</div>


  </body>
</html>

