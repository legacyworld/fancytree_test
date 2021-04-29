let fancytree_test2 = function () {
    $("#id_tree1").fancytree({
        source: {
            url: "/api/v1/getList"
        }
    })
}