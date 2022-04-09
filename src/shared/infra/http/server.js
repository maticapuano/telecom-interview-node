const app = require("./app");

const bootstrap = () => {
    const port = process.env.PORT || 3000;

    app.listen(port, () => console.log(`Server ready on port ${port}`));
};

bootstrap();
