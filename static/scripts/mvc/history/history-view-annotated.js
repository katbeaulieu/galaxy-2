define(["mvc/history/history-view","mvc/history/hda-li","mvc/history/hdca-li","mvc/base-mvc","utils/localization"],function(a,b,c,d,e){"use strict";var f=a.HistoryView,g=f.extend({className:f.prototype.className+" annotated-history-panel",_buildNewRender:function(){var a=f.prototype._buildNewRender.call(this);return this.renderHistoryAnnotation(a),a},renderHistoryAnnotation:function(a){var b=this.model.get("annotation");b&&a.find("> .controls .subtitle").text(b)},renderItems:function(a){a=a||this.$el,f.prototype.renderItems.call(this,a);var b=a.find("> .controls");b.find(".contents-container.headers").remove();$('<div class="contents-container headers"/>').append([$('<div class="history-content header"/>').text(e("Dataset")),$('<div class="additional-info header"/>').text(e("Annotation"))]).appendTo(b);return self.views},_renderItemView$el:function(a){return $('<div class="contents-container"/>').append([a.render(0).$el,$('<div class="addtional-info"/>').text(a.model.get("annotation")||"")])},events:_.extend(_.clone(f.prototype.events),{"click .contents-container":function(a){a.stopPropagation(),$(a.currentTarget).find(".list-item .title-bar").click()},"click .icon-btn":function(a){a.stopPropagation();var b=$(a.currentTarget);b.length&&"dropdown"===b.attr("data-toggle")&&b.dropdown("toggle")}}),_clickSectionLink:function(a){var b=$(a.currentTarget).parent().parent().data("section");this.openSection(b)},toString:function(){return"AnnotatedHistoryView("+(this.model?this.model.get("name"):"")+")"}});return{AnnotatedHistoryView:g}});
//# sourceMappingURL=../../../maps/mvc/history/history-view-annotated.js.map