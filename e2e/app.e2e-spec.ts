import { TravelPage } from './app.po';

describe('travel App', () => {
  let page: TravelPage;

  beforeEach(() => {
    page = new TravelPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
