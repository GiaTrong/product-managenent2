module.exports.dashboard = (req, res) => {
    res.render("admin/pages/dashboard/index.pug", {
        title: "Trang tong quan"
    });
}