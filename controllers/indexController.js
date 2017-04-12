
class Index {
    static showIndex(req, res) {
        res.render("layout", {
            title: "FB Events"
        });
    }
}

module.exports = Index;