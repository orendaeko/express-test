import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';

class App {
  public app: express.Application;

  public constructor() {
    this.app = express();
    this.configureMiddlewares();
    this.app.set('port', process.env.PORT || 5000);
  }

  private async configureMiddlewares(): Promise<void> {
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(
      bodyParser.json({
        type: ['application/json', 'application/vnd.api+json'],
      })
    );
    this.app.use('/api', routes);
  }
}

export default new App().app;
