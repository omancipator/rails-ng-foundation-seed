// library files
//**************
//= require jquery
//= require angular/angular
//= require modernizr/modernizr
//= require foundation/js/foundation
//= require angular-foundation/src/alert/alert


// templates
//**********
// add plugin that injects templates into $templateCache:
//= require angular-rails-templates

// one of ours:
//= require directives/loan_purpose_select_tmpl

// one from a framework:
// note: this resolves because of the following setting in application.rb:
// config.assets.paths << Rails.root.join("vendor","assets","bower_components", "angular-foundation"):
//= require template/alert/alert



// common directives
//******************
//= require directives/loan_purpose_select



// modules
//********
// note: this by rails convention serves the 'index.js' in each namespace:
//= require home
//= require karma



// app
//****
//= require psp_app