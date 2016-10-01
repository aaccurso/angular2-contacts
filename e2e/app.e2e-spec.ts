import { Angular2ContactsV2Page } from './app.po';

describe('angular2-contacts-v2 App', function() {
  let page: Angular2ContactsV2Page;

  beforeEach(() => {
    page = new Angular2ContactsV2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
