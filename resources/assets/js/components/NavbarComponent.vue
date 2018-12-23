<template>
<nav class="navbar my-navbar">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">Laravel Vuejs</a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav navbar-right">
        
        <li><router-link to="/home">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
</template>
<style>
        .my-navbar {
  background-color: #004080;
  border-color: #425766;
}
.my-navbar .navbar-brand {
  color: #fff;
}
.my-navbar .navbar-brand:hover, .my-navbar .navbar-brand:focus {
  color: #AAD5FF;
}
.my-navbar .navbar-text {
  color: #d7e2e9;
}
.my-navbar .navbar-nav > li > a {
  color: #fff;
}
.my-navbar .navbar-nav > li > a:hover, .my-navbar .navbar-nav > li > a:focus {
  color: #fff;
  background-color:#B05800;
}
.my-navbar .navbar-nav > li > .dropdown-menu {
  background-color: #2894FF;
}
.my-navbar .navbar-nav > li > .dropdown-menu > li > a {
  color: #d7e2e9;
}
.my-navbar .navbar-nav > li > .dropdown-menu > li > a:hover,
.my-navbar .navbar-nav > li > .dropdown-menu > li > a:focus {
  color: #fff;
  background-color: #004182;
}
.my-navbar .navbar-nav > li > .dropdown-menu > li > .divider {
  background-color: #69899f;
}
.my-navbar .navbar-nav > .active > a, .my-navbar .navbar-nav > .active > a:hover, .my-navbar .navbar-nav > .active > a:focus {
  color: #e5dbdb;
  background-color: #B05800;
}
.my-navbar .navbar-nav > .open > a, .my-navbar .navbar-nav > .open > a:hover, .my-navbar .navbar-nav > .open > a:focus {
  color: #e5dbdb;
  background-color: #425766;
}
.my-navbar .navbar-toggle {
  border-color: #425766;
}
.my-navbar .navbar-toggle:hover, .my-navbar .navbar-toggle:focus {
  background-color: #425766;
}
.my-navbar .navbar-toggle .icon-bar {
  background-color: #d7e2e9;
}
.my-navbar .navbar-collapse,
.my-navbar .navbar-form {
  border-color: #d7e2e9;
}
.my-navbar .navbar-link {
  color: #d7e2e9;
}
.my-navbar .navbar-link:hover {
  color: #e5dbdb;
}

@media (max-width: 767px) {
  .my-navbar .navbar-nav .open .dropdown-menu > li > a {
    color: #d7e2e9;
  }
  .my-navbar .navbar-nav .open .dropdown-menu > li > a:hover, .my-navbar .navbar-nav .open .dropdown-menu > li > a:focus {
    color: #e5dbdb;
  }
  .my-navbar .navbar-nav .open .dropdown-menu > .active > a, .my-navbar .navbar-nav .open .dropdown-menu > .active > a:hover, .my-navbar .navbar-nav .open .dropdown-menu > .active > a:focus {
    color: #e5dbdb;
    background-color: #425766;
  }
}
    </style>