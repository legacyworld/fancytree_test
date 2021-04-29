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