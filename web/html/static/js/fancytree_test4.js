let fancytree_test4 = function () {
    var glyph_opt = {
        preset: "awesome5",
        map: {
            folder: 'fas fa-book-open'
        }
    }
    $("#id_tree1").fancytree({
        extensions: ["glyph", "wide"],
        glyph: glyph_opt,
        icon: function (event, data) {
            if (data.node.data.author == "Sony") {
                return "fas fa-mobile"
            }
        },
        activate: function (event, data) {
            t = "<p>Author:" + data.node.data.author + "</p>"
            $('#id_details').html(t)
        },
        collapse: function (event, data) {
            var t = $.ui.fancytree.getTree("#id_tree1")
            if (t.activeNode != null) {t.activeNode.setActive(false)}
        },
        source: {
            url: "/api/v1/getList"
        }
    })
}