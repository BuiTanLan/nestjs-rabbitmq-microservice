"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const microservices_1 = require("@nestjs/microservices");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: 'http://localhost:4200',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
        credentials: true,
    });
    const microservice = await app.connectMicroservice({
        transport: microservices_1.Transport.RMQ,
        options: {
            urls: ['amqps://dyilfhrb:t-D-bfwdLxkRmp-2B-Q26ALBSa1a9rof@gerbil.rmq.cloudamqp.com/dyilfhrb'],
            queue: 'user-messages',
            queueOptions: {
                durable: false
            },
        },
    });
    await app.startAllMicroservicesAsync();
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map