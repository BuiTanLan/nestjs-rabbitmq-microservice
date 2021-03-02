import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqps://dyilfhrb:t-D-bfwdLxkRmp-2B-Q26ALBSa1a9rof@gerbil.rmq.cloudamqp.com/dyilfhrb'],
      queue: 'user-messages',
      queueOptions: {
        durable: false
      },
    },
  });
  await app.listen(() => console.log('Microservice is listening'));
}
bootstrap();
