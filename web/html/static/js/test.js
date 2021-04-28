let fancytree_test1 = function () {
    $("#id_tree1").fancytree({
        source: [
            {
                "title": "Books", "expanded": true, "folder": true, "children": [
                    { "title": "Art of War", "type": "book", "author": "Sun Tzu", "year": -500, "qty": 21, "price": 5.95 }
                ]
            },
            {
                "title": "Music", "folder": true, "children": [
                    { "title": "Nevermind", "type": "music", "author": "Nirvana", "year": 1991, "qty": 21, "price": 5.95 }
                ]
            },
            {
                "title": "Electronics & Computers", "expanded": true, "folder": true, "children": [
                    {
                        "title": "Cell Phones", "folder": true, "children": [
                            { "title": "Moto G", "type": "phone", "author": "Motorola", "year": 2014, "qty": 21, "price": 224.99 },
                        ]
                    },
                    {
                        "title": "Computers", "folder": true, "children": [
                            { "title": "ThinkPad", "type": "computer", "author": "IBM", "year": 1992, "qty": 21, "price": 749.90 },

                        ]
                    }
                ]
            }
        ]
    })
}

let fancytree_test2 = function () {
    $("#id_tree1").fancytree({
        source: {
            url: "/api/v1/getList"
        }
    })
}

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

let fancytree_test4 = function (){
    var glyph_opt = {
        preset: "awesome5",
        map: {
            folder: 'fas fa-book-open'
        }
    }
    $("#id_tree1").fancytree({
        extensions: ["glyph","wide"],
        glyph: glyph_opt,
        icon: function(event,data){
            if(data.node.data.author == "Sony"){
                return "fas fa-mobile"
            }
        },
        activate: function(event,data){
            t = "<p>Author:"+data.node.data.author+"</p>"
            $('#id_modal_content').append(t)
            $('#id_details').modal("show")
        },
        collapse: function(event,data){
            var t = $.ui.fancytree.getTree("#id_tree1")
            if(t.activeNode != null){t.activeNode.setActive(false)}
        },
        source: {
            url: "/api/v1/getList"
        }
    })
}
let fancytree_clear = function () {
    var t = $.ui.fancytree.getTree("#id_tree1")
    t.destroy()
}