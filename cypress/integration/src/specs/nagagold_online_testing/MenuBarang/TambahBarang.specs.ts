import { SideMenuNagagold } from "../../../page-objects/side-menu-nagagold.page";
const sidemenu = new SideMenuNagagold();

import Config from '../../../../../fixtures/config.json';
const user_id = "helpdesk";
const password = "helpdesknagatechberasputih"
const url = Config['data-url']["qc-nagatech"];

describe('TambahBarangMenu', () => {
    beforeEach(() => {
        cy.LoginWithSession(user_id, password, url);
    });
    it('Running', () => {
        cy.visit('/dashboard');
        sidemenu.changeMenuTambahBarang("false");
        cy.wait(400);
        sidemenu.changeMenuDataBarang("true");
        cy.wait(400);
        sidemenu.changeMenuHancurDataBarang("true");
        cy.wait(400);
        sidemenu.changeMenuPindahBarang("true"); 
        cy.wait(400);
        sidemenu.changeMenuPindahBarangSatuBaki("true");
        cy.wait(400);
        sidemenu.changeMenuTimbangBaki("true");
        cy.wait(400);
        sidemenu.changeMenuTambahDanAmbilStockAksesoris("true");
        cy.wait(400);   
        
       
   

    });
})