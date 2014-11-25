// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//





// library files
//**************
//= require jquery
//= require angular/angular
//= require modernizr/modernizr
//= require foundation/js/foundation
//= require angular-foundation/src/alert/alert


// templates
//**********
// add plug ins
//= require angular-rails-templates

// one of ours:
//= require directives/loan_purpose_select_tmpl

// one from a framework:
// note: this will resolve because of the following setting in application.rb:
// config.assets.paths << Rails.root.join("vendor","assets","bower_components", "angular-foundation"):
//= require template/alert/alert



// our source files
//*****************
//= require psp_app
//= require directives/loan_purpose_select
