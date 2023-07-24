import { SideMenuNagagold } from "../../../page-objects/side-menu-nagagold.page";
const sidemenu = new SideMenuNagagold();

import Config from '../../../../../fixtures/config.json';
const user_id = "helpdesk";
const password = "helpdesknagatechberasputih"
const url = Config['data-url']["qc-nagatech"];

describe('UangKas', () => {
    beforeEach(() => {
        cy.LoginWithSession(user_id, password, url);
    });
    it('Running', () => {
        cy.visit('/uang-bank');
        sidemenu.changeMenuUangKas("true");


    });
})