let fancytree_test3 = function () {

    var glyph_opt = {
        preset: "awesome5",
        map: {}
    }
    $("#id_tree1").fancytree({
        extensions: ["glyph"],
        glyph: glyph_opt,
        source: {
            url: "/api/v1/getList"
        }
    })
}