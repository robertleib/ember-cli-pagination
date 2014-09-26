// Generated by CoffeeScript 1.7.1
import Ember from 'ember';
var c;

c = Ember.Component.extend({
  currentPage: null,
  totalPages: null,
  pageItems: (function() {
    var currentPage, pageNumber, totalPages, _i, _results;
    currentPage = Number(this.get("currentPage"));
    totalPages = Number(this.get("totalPages"));
    console.debug("PageNumbers#pageItems, currentPage " + currentPage + ", totalPages " + totalPages);
    _results = [];
    for (pageNumber = _i = 1; 1 <= totalPages ? _i <= totalPages : _i >= totalPages; pageNumber = 1 <= totalPages ? ++_i : --_i) {
      _results.push({
        page: pageNumber,
        current: currentPage === pageNumber
      });
    }
    return _results;
  }).property("currentPage", "totalPages"),
  canStepForward: (function() {
    var page, totalPages;
    page = Number(this.get("currentPage"));
    totalPages = Number(this.get("totalPages"));
    return page < totalPages;
  }).property("currentPage", "totalPages"),
  canStepBackward: (function() {
    var page;
    page = Number(this.get("currentPage"));
    return page > 1;
  }).property("currentPage"),
  actions: {
    pageClicked: function(number) {
      console.debug("PageNumbers#pageClicked number " + number);
      return this.set("currentPage", number);
    },
    incrementPage: function(num) {
      return this.incrementProperty('currentPage', num);
    }
  }
});

export default c;
