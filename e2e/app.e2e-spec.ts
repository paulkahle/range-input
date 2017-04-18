import { SuprematismClearableInputPage } from './app.po';

describe('SuprematismClearableInput App', function() {
  let page: SuprematismToggleSwitchPage;

  beforeEach(() => {
    page = new SuprematismClearableInputPage();
  });

  it('should display page header', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Trigger');
  });
});
