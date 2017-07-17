import { AngularHelloworldPage } from './app.po';

describe('angular-helloworld App', () => {
  let page: AngularHelloworldPage;

  beforeEach(() => {
    page = new AngularHelloworldPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
