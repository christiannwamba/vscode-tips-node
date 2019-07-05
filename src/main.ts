import * as express from "express"
import { prettyLog } from './lib';

declare var __DEV__: boolean;

export class Server {
  public app: express.Express;
  public port: number;

  constructor() {
    prettyLog('Server kicking off', 'WARN')
    this.app = express();
    this.port = this.getPort();
    this.setRoutes();
    this.start();
  }

  private start = (): void => {
    this.app.listen(this.port, this.onListen);
  }

  private onListen = (err: any): void => {
    if (err) {
      prettyLog(err, 1)
      return;
    }

    if (__DEV__) {
      prettyLog('> in development', 'WARN')
    }

    prettyLog(`> listening on port ${this.port}`, 'WARN')
  };

  private getPort = (): number => parseInt(process.env.PORT, 10) || 3000;

  private setRoutes = (): void => {
    this.app.get('/', this.getHomepage);
  }

  private async getHomepage(req: express.Request, res: express.Response): Promise<express.Response> {
    try {
      const thing = await Promise.resolve({ one: 'two' })
      prettyLog('Request gon succeed', 'SUCCESS')
      return res.json({ ...thing, hello: 'world' })
    } catch (e) {
      prettyLog('Request gon fail', 'ERROR')
      return res.json({ error: e.message })
    }
  };
}

module.exports = new Server().app;