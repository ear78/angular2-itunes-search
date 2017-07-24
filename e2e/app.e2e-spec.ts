import { Angular2ItunesSearchPage } from './app.po';

describe('angular2-itunes-search App', () => {
  let page: Angular2ItunesSearchPage;

  beforeEach(() => {
    page = new Angular2ItunesSearchPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
