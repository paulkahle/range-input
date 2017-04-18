import { browser, element, by } from 'protractor';

export class SuprematismClearableInputPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('supre-root h4')).getText();
  }
}
