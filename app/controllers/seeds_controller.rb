class SeedsController < ApplicationController
  def index
    @jsPageModule = "home"
  end

  def pageTwo
    @jsPageModule = "karma"
  end
end